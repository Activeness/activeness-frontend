import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    store: service(),
    router: service(),
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
    categories: null,

    /**
     * Defines a list with filtered categories without *
     * 
     */

     
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
     * @property {array} searchString
     * @default null
     */
    searchString: null,

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
            let searchParams = {
              cid: this.get('selectedCategory.id'),
              search: this.get('searchString')
            };

            this.get('router').transitionTo('activities', { queryParams: searchParams });
        },

        /**
         * Search activities by category
         *
         * @method shortCategorySearch
         */
        shortCategorySearch(category) {
            this.set('selectedCategory', category);
            this.send('search');
        }

    }

});
