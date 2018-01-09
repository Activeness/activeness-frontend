import Component from '@ember/component';
import { inject as service } from '@ember/service';
// import { computed } from '@ember/object';
// import RSVP, { Promise } from 'rsvp';
// import DS from 'ember-data';

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
    categories: null,

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
            this.get('router').transitionTo('activities',  { queryParams: { categoryId: category.id }});
        }

    }

});
