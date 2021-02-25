import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './languages/en';
import ru from './languages/ru';
import ua from './languages/ua';

Vue.use(VueI18n);

export default new VueI18n({
    locale: navigator.language,
    fallbackLocale: 'ua',
    messages: { en, ru, ua },
});
