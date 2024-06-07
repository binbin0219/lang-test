import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


// Initialize i18next
i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', 
    },
    ns: [
      'project-dashboard',
      'project-menu',
    ]
  }, (err, t) => {
    if (err) return console.error(err);
    updateContent();
    updateLanguageSelector();
  });

  // Update content based on the current language
const updateContent = () => {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    const ns = element.dataset.ns;

    // Collect parameters
    const params = {};
    Array.from(element.attributes).forEach(attr => {  
      if (attr.name.startsWith('data-param-')) {
        const paramName = attr.name.replace('data-param-', '');
        params[paramName] = parseInt(attr.value);
      }
    });

    //Update content
    element.innerText = i18next.t(`${ns}:${key}`, params);
  });
};

//Update the language selector value
const updateLanguageSelector = () => {
  document.getElementById('language-selector').value = i18next.language;
}

// Handle language change
document.getElementById('language-selector').addEventListener('change', (event) => {
  const selectedLanguage = event.target.value;
  i18next.changeLanguage(selectedLanguage, updateContent);
});


