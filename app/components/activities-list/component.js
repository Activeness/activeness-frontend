import Component from '@ember/component';
// import { inject as service } from '@ember/service';

export default Component.extend({

    /**
     * Defines the css classes for the component ember-view element
     *
     * @property {array} classNames
     */
    classNames: ['activities-list'],

    /**
     * Defines a list of activities
     *
     * @property {array} activities
     * @default null
     */
    activities: null,

    /**
     * Defines whether the search result filters are visible or not
     *
     * @property {Ember.computed} filters
     * @default null
     */
    filters: false,

    /**
     * Defines all component action methods
     *
     * @property {object} actions
     */
    actions: {

        toggleFilters(toggle) {
            this.set('filters', toggle);
        }

    }

});
