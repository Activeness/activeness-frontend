import Component from '@ember/component';
import { computed } from "@ember/object"

export default Component.extend({

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
    categories: [
        { value: '*', label: 'All' }
    ],

    /**
     * Defines the selected category
     * 
     * @property {array} selectedCategory
     * @default null
     */
    selectedCategory: computed('categories', function() {
        return this.get('categories')[0];
    }),

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
         */
        selectCategory() {
            //...
        }

    }

});
