import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({

    router: service(),
    store: service(),

    /**
     * Defines the css class names for the component ember-view element
     * 
     * @property {array} classNames
     * @default null
     */
    classNames: ['activities-categories'],

    /**
     * Defines all available categories of all activities
     * 
     * @property {Ember.array} categories
     * @default []
     */
    categories: computed('store', function() {
        return this.get('store').findAll('category');/*
        .then((categories) => {
            categories.filter((category) => {
                return (category.get('title').indexOf('*') === -1);
            })
        });*/
    }),

    /**
     * Defines all component action methods
     * 
     * @property {object} actions
     */
    actions: {

        /**
         * Trigger the activities search by category
         * 
         * @method search
         */
        search(category) {
            this.get('router').transitionTo('search',  { queryParams: { category: category }});
        }

    }

});
