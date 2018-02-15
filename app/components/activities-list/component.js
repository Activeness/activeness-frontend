import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

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
     * @property {boolean} filters
     * @default true
     */
    filters: true,

    /**
     * Defines the FROM date for the filter section
     *
     * @property {date} fromDate
     * @default null
     */
    fromDate: null,

    /**
     * Defines the TO date for the filter section
     *
     * @property {date} toDate
     * @default null
     */
    toDate: null,

    /**
     * Defines the min date for the filter section
     *
     * @property {Ember.computed} today
     * @default null
     */
    today: computed('intl', function() {
        
        let now = new Date();

        let month = now.getMonth();
        month = (month + 1).toString();
        
        let day = now.getDate().toString();
        let year = now.getFullYear();
        
        if (month.length === 1) {
            month = "0" + month;
        }
        if (day.length === 1) {
            day = "0" + day;
        }
        
        // e.g. 02/20/2018
        let today = month+"/"+day+"/"+year;
        
        return today;
    }),

    dateTimePickerOptions: null,

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
