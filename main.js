(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  let lang = "en";
  try { const saved = localStorage.getItem("lang"); if (saved === "ar" || saved === "en") lang = saved; } catch (e) {}

  const NAV = { work: { en: "Work", ar: "الأعمال" }, about: { en: "About", ar: "نبذة" }, contact: { en: "Contact", ar: "تواصل" } };
  const t = (o) => (o && o[lang]) || (o && o.en) || "";
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");

  /* ---------- lightbox ---------- */
  let lbList = [], lbIdx = 0, lastFocus = null;
  const lb = $("lb"), lbImg = $("lb-img");
  function lbShow() { lbImg.src = lbList[lbIdx]; lbImg.alt = ""; }
  function lbOpen(list, i) { lbList = list; lbIdx = i; lastFocus = document.activeElement; lbShow(); lb.hidden = false; $("lb-close").focus(); document.body.style.overflow = "hidden"; }
  function lbClose() { lb.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
  function lbStep(d) { lbIdx = (lbIdx + d + lbList.length) % lbList.length; lbShow(); }
  $("lb-close").onclick = lbClose;
  $("lb-prev").onclick = () => lbStep(-1);
  $("lb-next").onclick = () => lbStep(1);
  lb.addEventListener("click", (e) => { if (e.target === lb) lbClose(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") lbClose();
    if (e.key === "ArrowRight") lbStep(document.dir === "rtl" ? -1 : 1);
    if (e.key === "ArrowLeft") lbStep(document.dir === "rtl" ? 1 : -1);
  });

  /* ---------- render ---------- */
  function render() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t(S.name) + " · " + t(S.role);
    $("lang").textContent = lang === "ar" ? "EN" : "عربي";
    document.querySelectorAll("[data-i]").forEach((n) => { n.textContent = t(NAV[n.dataset.i.split(".")[1]]); });

    $("h-kicker").textContent = t(S.hero.kicker) + " · " + t(S.role);
    $("h-title").textContent = t(S.hero.title);
    $("h-sub").textContent = t(S.hero.sub);
    $("h-cta").textContent = t(S.hero.cta);
    $("h-cta2").textContent = t(S.hero.cta2);

    const art = $("hero-art"); art.innerHTML = "";
    S.hero.images.forEach((src, i) => { const d = el("div", "tile t" + i); d.append(Object.assign(new Image(), { src, alt: "", loading: i ? "lazy" : "eager" })); art.append(d); });

    const words = S.marquee[lang];
    $("marquee").innerHTML = words.concat(words, words, words).map((w) => "<span>" + esc(w) + "</span>").join("");

    $("w-title").textContent = t(S.workTitle);
    $("w-intro").textContent = t(S.workIntro);

    const host = $("projects"); host.innerHTML = "";
    S.projects.forEach((p, n) => {
      const sec = el("article", "project reveal");
      const info = el("div", "info");
      info.innerHTML = '<span class="num">' + pad(n + 1) + " / " + pad(S.projects.length) + "</span><h3>" + esc(t(p.title)) + '</h3><p class="type">' + esc(t(p.type)) + '</p><p class="brief">' + esc(t(p.brief)) + '</p><ul class="tags">' + p.tags.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul>";
      const gal = el("div", "gallery");
      const stage = el("div", "stage"); stage.tabIndex = 0; stage.setAttribute("role", "button"); stage.setAttribute("aria-label", t(S.ui.view) + " " + t(p.title));
      const img = new Image(); img.alt = t(p.title); img.loading = "lazy"; img.src = p.images[0];
      const count = el("span", "count", "1 / " + p.images.length);
      stage.append(img, count);
      let cur = 0;
      const thumbs = el("div", "thumbs");
      const btns = p.images.map((src, i) => {
        const b = el("button"); b.type = "button"; b.setAttribute("aria-label", t(p.title) + " " + (i + 1));
        b.append(Object.assign(new Image(), { src, alt: "", loading: "lazy" }));
        b.onclick = () => go(i); thumbs.append(b); return b;
      });
      function go(i) { cur = i; img.style.opacity = 0; setTimeout(() => { img.src = p.images[i]; img.style.opacity = 1; }, 120); count.textContent = (i + 1) + " / " + p.images.length; btns.forEach((b, j) => b.setAttribute("aria-current", j === i)); }
      btns[0].setAttribute("aria-current", true);
      stage.onclick = () => lbOpen(p.images, cur);
      stage.onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); lbOpen(p.images, cur); } };
      gal.append(stage); if (p.images.length > 1) gal.append(thumbs);
      sec.append(info, gal); host.append(sec);
    });

    $("a-title").textContent = t(S.about.title);
    $("a-text").innerHTML = S.about.text[lang].map((x) => "<p>" + esc(x) + "</p>").join("");
    $("s-title").textContent = t(S.servicesTitle);
    $("services").innerHTML = S.services.map((s) => "<li><b>" + esc(t(s.t)) + "</b><span>" + esc(t(s.d)) + "</span></li>").join("");
    $("c-title").textContent = t(S.clientsTitle);
    $("clients").innerHTML = S.clients.map((c) => "<li>" + esc(c) + "</li>").join("");

    $("ct-title").textContent = t(S.contact.title);
    $("ct-text").textContent = t(S.contact.text);
    let links = '<a class="btn primary" target="_blank" rel="noopener" href="' + esc(S.links.whatsapp) + '">' + esc(t(S.contact.whatsapp)) + "</a>";
    links += '<a class="btn ghost" target="_blank" rel="noopener" href="' + esc(S.links.linkedin) + '">' + esc(t(S.contact.linkedin)) + "</a>";
    if (S.links.email) links += '<a class="btn ghost" href="mailto:' + esc(S.links.email) + '">' + esc(t(S.contact.email)) + "</a>";
    $("ct-links").innerHTML = links;
    $("footer").textContent = t(S.ui.footer);
    observe();
  }

  /* ---------- reveal on scroll ---------- */
  let io;
  function observe() {
    if (io) io.disconnect();
    io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
  }

  /* ---------- nav, language, hero tilt ---------- */
  $("lang").onclick = () => { lang = lang === "ar" ? "en" : "ar"; try { localStorage.setItem("lang", lang); } catch (e) {} render(); };
  const nav = $("nav");
  const onScroll = () => nav.classList.toggle("solid", scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  const art = $("hero-art");
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addEventListener("pointermove", (e) => {
      if (scrollY > innerHeight) return;
      const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
      art.querySelectorAll(".tile").forEach((t, i) => {
        const k = (i + 1) * 10, r = getComputedStyle(t).getPropertyValue("--r") || "0deg";
        t.style.transform = "translate(" + x * k + "px," + y * k + "px) rotate(" + r.trim() + ")";
      });
    });
  }

  render();
})();
