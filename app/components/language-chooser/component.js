import Component from '@ember/component';
import { computed } from "@ember/object"
import { inject as service } from "@ember/service";

export default Component.extend({

    /**
     * CSS class binding for ember-view element
     *
     * @property {array} classNames
     */
    classNames: ['language-chooser'],

    /**
     * Defines the localizations 'intl' service
     */
    intl: service(),

    /**
     * Defines the current set locale by the 'intl' service
     *
     * @property {Ember.computed} currentLocale
     */
    currentLocale: computed('intl.locale', function() {
      let locale = this.get('intl').get('locale').get('firstObject');
      return locale;
    }),

    /**
     * Defines the current set language by the 'intl' service
     *
     * @property {Ember.computed} currentLang
     */
    currentLang: computed('intl.locale', function() {
      let lang = this.get('intl').get('locale').get('firstObject').split('-')[1];
      return lang;
    }),

    /**
     * Defines the available locales by the 'intl' service
     *
     * @property {Ember.computed} locales
     */
    locales: computed('intl.locales', function() {
      let locales = this.get('intl').get('locales').map((locale) => {
        return {
          locale: locale,
          lang: locale.split('-')[1]
        }
      });
      return locales;
    }),

    /**
     * Defines all component related action methods
     *
     * @property {object} actions
     */
    actions: {

      /**
       * Set the current locale for the 'intl' service
       *
       * @method setLocale
       * @param {object} locale
       */
      setLocale(locale) {
        this.get('intl').setLocale(locale.locale);
      }

    }

});
