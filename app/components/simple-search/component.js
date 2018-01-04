import Component from '@ember/component';
import { computed } from "@ember/object"
import { inject as service } from '@ember/service';

export default Component.extend({


    intl: service(),

    /**
     * Defines the component css class for the ember-view element
     * 
     * @property {array} classNames
     * @default null
     */
    classNames: ['simple-search d-flex justify-content-center'],

    didReceiveAttrs() {
        this._super(...arguments);
        this.set('categories', [
            { value: '*', label: this.get('intl').t('app.simple-search.categories.*') },
            { value: 'event', label: 'Event' }
        ]);
        this.set('selectedCategory', this.get('categories').get('firstObject'));
    },

    /**
     * Defines a list of all available categories
     * 
     * @property {array} categories
     * @default null
     */
    categories: null,

    /**
     * Defines the selected category
     * 
     * @property {array} selectedCategory
     * @default null
     */
    categoriesListener: computed('categories', function() {
        this.set('selectedCategory', this.get('categories').get('firstObject'));
    }),

    /**
     * Defines the selected category
     * 
     * @property {array} selectedCategory
     * @default null
     */
    selectedCategory: null,

    /**
     * Defines the search string
     * 
     * @property {array} searchstring
     * @default null
     */
    searchstring: null,

    /**
     * Defines all component action methods
     * 
     * @property {object} actions
     */
    actions: {

        /**
         * Select a category for search
         * 
         * @method selectCategory
         * @param {object} category
         */
        selectCategory(category) {
            this.set('selectedCategory', category);
        },

        /**
         * Search activities by simple search
         * 
         * @method search
         */
        search() {
            //...
        }

    }

});
