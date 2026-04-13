(function () {
  var btn = document.getElementById("jp-share-site");
  if (!btn) return;

  var original = btn.textContent.trim();

  function pageUrl() {
    var link = document.querySelector('link[rel="canonical"]');
    return link && link.href ? link.href : window.location.href;
  }

  function shareTitle() {
    return document.title || "unavoltavevolabarba";
  }

  function showCopied() {
    btn.textContent = "Link copiato";
    setTimeout(function () {
      btn.textContent = original;
    }, 2200);
  }

  btn.addEventListener("click", function () {
    var url = pageUrl();
    var title = shareTitle();

    if (navigator.share) {
      navigator
        .share({ title: title, text: title, url: url })
        .catch(function () {});
      return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(showCopied).catch(function () {
        window.prompt("Copia il link:", url);
      });
      return;
    }

    window.prompt("Copia il link:", url);
  });
})();
