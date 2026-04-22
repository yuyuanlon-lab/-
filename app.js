const headerEl = document.querySelector("#site-header");
const appEl = document.querySelector("#app");
const footerEl = document.querySelector("#site-footer");
const { siteContent } = window;

document.title = siteContent.site.title;

headerEl.innerHTML = `
  <div class="brand-lockup">${siteContent.site.title}</div>
  <nav class="site-nav" aria-label="Main navigation">
    ${siteContent.navigation
      .map((item) => `<a class="nav-link" href="${item.href}">${item.label}</a>`)
      .join("")}
  </nav>
`;

appEl.innerHTML = `
  <section class="home-layout">
    <section class="hero-block" id="work">
      <div class="hero-image-frame">
        <img src="${siteContent.home.image.src}" alt="${siteContent.home.image.alt}">
      </div>
    </section>

    <section class="intro-block" aria-label="Homepage introduction">
      ${siteContent.home.intro
        .map((line) => `<p class="intro-line">${line}</p>`)
        .join("")}
    </section>

    <section class="anchor-section" id="about">
      <h2 class="anchor-title">${siteContent.sections.about.title}</h2>
      <p class="anchor-copy">${siteContent.sections.about.text}</p>
    </section>

    <section class="anchor-section" id="contact">
      <h2 class="anchor-title">${siteContent.sections.contact.title}</h2>
      <p class="anchor-copy">${siteContent.sections.contact.text}</p>
    </section>
  </section>
`;

footerEl.innerHTML = `
  <div class="footer-copy">${siteContent.site.footerText}</div>
`;
