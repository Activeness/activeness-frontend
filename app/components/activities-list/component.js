import Component from '@ember/component';

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
    activities: null

});
