(function () {
  'use strict';

  function getShareData() {
    return {
      title: document.title || 'Sito di Francesco',
      text: 'Dai un\'occhiata a questo sito.',
      url: window.location.href,
    };
  }

  async function copyLink(url) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(url);
      return;
    }
    window.prompt('Copia il link:', url);
  }

  function setTemporaryLabel(button, label) {
    const original = button.textContent;
    button.textContent = label;
    setTimeout(() => {
      button.textContent = original || 'Condividi';
    }, 1800);
  }

  async function share(button) {
    const data = getShareData();

    try {
      if (navigator.share) {
        await navigator.share(data);
      } else {
        await copyLink(data.url);
        setTemporaryLabel(button, 'Link copiato');
      }
    } catch (error) {
      if (!error || error.name !== 'AbortError') {
        setTemporaryLabel(button, 'Riprova');
      }
    }
  }

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.site-share');
    if (!button) return;

    event.preventDefault();
    share(button);
  });
})();
