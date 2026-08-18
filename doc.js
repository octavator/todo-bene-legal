/*
 * FR/EN toggle for the document pages, sharing `tb-lang` with index.html so the choice
 * follows the visitor from the landing page into the privacy policy.
 *
 * Every translatable node carries data-fr / data-en. The <html> element carries
 * data-title-fr / data-title-en for the browser tab, because a tab reading
 * "Confidentialité" while the page reads "Privacy" is the kind of small wrongness that
 * makes a legal page look unmaintained.
 */
(function () {
  const btn = document.getElementById('langBtn');
  const root = document.documentElement;
  let lang = localStorage.getItem('tb-lang') || 'fr';

  function apply() {
    root.lang = lang;
    btn.textContent = lang === 'fr' ? 'EN' : 'FR';
    document.querySelectorAll('[data-fr]').forEach((el) => {
      el.innerHTML = el.dataset[lang];
    });
    const title = root.dataset[lang === 'fr' ? 'titleFr' : 'titleEn'];
    if (title) document.title = title;
  }

  btn.addEventListener('click', () => {
    lang = lang === 'fr' ? 'en' : 'fr';
    localStorage.setItem('tb-lang', lang);
    apply();
  });

  apply();
})();
