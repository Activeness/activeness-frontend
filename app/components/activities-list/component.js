import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    intl: service(),

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
    filters: true,

    /**
     * Defines the FROM date for the filter section
     *
     * @property {date} fromDate
     * @default null
     */
    fromDate: Date.now(),

    /**
     * Defines the TO date for the filter section
     *
     * @property {date} toDate
     * @default null
     */
    toDate: Date.now(),

    /**
     * Defines the min date for the filter section
     *
     * @property {date} minDate
     * @default Date.now()
     */
    minDate: Date.now(),

    /**
     * Defines all component action methods
     *
     * @property {object} actions
     */
    actions: {

        toggleFilters(toggle) {
            this.set('filters', toggle);
        },

        updateFromDate() {

        },

        updateToDate() {

        },

        updateDateRange() {

        }

    }

});
