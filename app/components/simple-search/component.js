import Component from '@ember/component';
import { computed } from "@ember/object"
import { inject as service } from '@ember/service';
import { A } from '@ember/array';

export default Component.extend({


    intl: service(),

    /**
     * Defines the component css class for the ember-view element
     * 
     * @property {array} classNames
     * @default null
     */
    classNames: ['simple-search d-flex justify-content-center'],

    /**
     * Defines a list of all available categories
     * 
     * @property {array} categories
     * @default null
     */
    categories: A([
        { value: '*', label: 'app.simple-search.categories.*' },
        { value: 'event', label: 'app.simple-search.categories.event' }
    ]),

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
