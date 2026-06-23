(function () {
  'use strict';

  const filename = window.location.pathname.split('/').pop();
  const page = filename === '' ? 'index.html' : filename;

  const LINKS = [
    { label: 'Home',    href: 'index.html' },
    { label: 'Blog',    href: 'blog.html' },
    { label: 'Contatti', href: 'contatti.html' },
  ];

  function isActive(href) {
    return page === href;
  }

  const HIDE_SELECTORS = [
    '[class*="Header_LogoContainer"]',
    '[class*="Header_HomeLogo"]',
    '[class*="CookieBanner"]',
    '[class*="Privacy"]',
    '[class*="Footer_FooterPart"]',
    '[class*="Footer_CustomLinksWrapper"]',
  ];

  /* ── CSS ── */
  const style = document.createElement('style');
  style.textContent = `
    .top-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 99999;
      display: flex; align-items: flex-start; justify-content: space-between;
      padding: 24px 28px; pointer-events: none;
    }
    .top-nav > * { pointer-events: all; }
    .logo-link { display: inline-flex; color: #fff; text-decoration: none; }
    .logo {
      width: 86px; height: auto; display: block; object-fit: contain;
      filter: brightness(0) invert(1);
    }
    ${HIDE_SELECTORS.join(',\n    ')} {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }
    .lets-talk {
      background: #fff !important; color: #000 !important;
      font-family: 'Adelle Sans', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
      font-size: 14px !important; font-weight: 500 !important;
      border: 0 !important; outline: none !important;
      padding: 14px 24px !important; border-radius: 999px !important;
      cursor: pointer !important; white-space: nowrap !important;
      text-decoration: none !important; display: inline-block !important;
      transition: background 0.2s, color 0.2s !important;
      box-shadow: none !important; line-height: normal !important;
      letter-spacing: normal !important; text-transform: none !important;
      opacity: 1 !important; filter: none !important;
      mix-blend-mode: normal !important; isolation: isolate;
    }
    .lets-talk:hover { background: rgba(255,255,255,0.5) !important; color: #000 !important; opacity: 1 !important; }
    .bottom-nav {
      position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
      z-index: 99999; display: flex; align-items: center; gap: 4px;
      background: #fff; border-radius: 999px; padding: 6px;
      width: min(336px, calc(100vw - 32px)); box-sizing: border-box;
      transition: opacity 0.25s ease, transform 0.25s ease;
    }
    .bottom-nav.intro-hidden {
      opacity: 0;
      pointer-events: none;
      transform: translateX(-50%) translateY(16px);
    }
    .bottom-nav-item {
      font-family: 'Adelle Sans', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 14px; font-weight: 500; color: rgba(0,0,0,0.4);
      padding: 10px 0; border-radius: 999px; cursor: pointer;
      text-decoration: none; transition: color 0.2s, background 0.2s;
      flex: 1 1 0; text-align: center; white-space: nowrap; box-sizing: border-box;
    }
    .bottom-nav-item.active { background: #000; color: #fff; }
    .bottom-nav-item:hover:not(.active) { color: #000; }
  `;
  document.head.appendChild(style);

  /* ── top nav ── */
  const topNav = document.createElement('nav');
  topNav.className = 'top-nav';
  topNav.setAttribute('aria-label', 'Navigazione principale');
  topNav.innerHTML = `
    <a class="logo-link" href="index.html" aria-label="Torna alla home">
      <img class="logo" src="assets/fpwlogo.png?v=2" alt="fpw logo">
    </a>
    <button type="button" class="lets-talk site-share">Condividi</button>
  `.trim();

  document.body.insertBefore(topNav, document.body.firstChild);

  function removeUnwantedChrome() {
    document.querySelectorAll(HIDE_SELECTORS.join(', ')).forEach(el => el.remove());
  }

  removeUnwantedChrome();

  const chromeObserver = new MutationObserver(removeUnwantedChrome);
  chromeObserver.observe(document.documentElement, { childList: true, subtree: true });

  /* ── bottom nav ── */
  const bottomNav = document.createElement('nav');
  bottomNav.className = 'bottom-nav';
  bottomNav.setAttribute('aria-label', 'Navigazione veloce');
  bottomNav.innerHTML = LINKS.map(l =>
    `<a href="${l.href}" class="bottom-nav-item${isActive(l.href) ? ' active' : ''}">${l.label}</a>`
  ).join('');

  document.body.appendChild(bottomNav);

  const intro = document.getElementById('intro');
  if (intro && !intro.classList.contains('hidden')) {
    bottomNav.classList.add('intro-hidden');

    const revealBottomNav = () => {
      if (!document.body.contains(intro) || intro.classList.contains('hidden')) {
        bottomNav.classList.remove('intro-hidden');
        observer.disconnect();
      }
    };

    const observer = new MutationObserver(revealBottomNav);
    observer.observe(intro, { attributes: true, attributeFilter: ['class'] });
    observer.observe(document.body, { childList: true });
  }
})();
