import Component from '@ember/component';
import { A } from "@ember/array"
import { computed } from "@ember/object"
import { inject as service } from "@ember/service";

export default Component.extend({
    
    /**
     * Defines the localizations service 'intl'
     */
    intl: service(),

    /**
     * Defines all main navigation items
     * 
     * @property {Ember.array} items
     * @default []
     */
    items: A([
        {
            title: "app.navigation.home.title",
            description: "app.navigation.home.description",
            link: "index"
        },
        {
            title: "app.navigation.today.title",
            description: "app.navigation.today.description",
            link: "today"
        },
        {
            title: "app.navigation.random.title",
            description: "app.navigation.random.description",
            link: "random"
        }
    ]),

    locales: computed('intl.locales', function() {
        return this.get('intl').get('locales').map((locale) => {
            return {
                locale: locale,
                lang: locale.split('-')[1]
            }
        });
    }),

    currentLocale: computed('intl.locale', function() {
        return this.get('intl').get('locale');
    }),

    currentLang: computed('intl.locale', function() {
        return this.get('intl').get('locale')[0].split('-')[1];
    }),

    /**
     * Defines all component related action methods
     * 
     * @property {object} actions
     */
    actions: {

        setLocale(locale) {
            this.get('intl').setLocale(locale.locale);
        }

    }

});
