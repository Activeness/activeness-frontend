import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

    /**
     * Defines the type of the ember-view element
     *
     * @property {string} tagName
     * @default span
     */
    tagName: 'span',

    /**
     * Defines the suitability model
     *
     * @property {object} suitability
     * @default null
     */
    suitability: null,

    /**
     * Defines a computed property that generate the localization key
     *
     * @property {Ember.computed} localizedSuitabilityKey
     * @default null
     */
    localizedSuitabilityKey: computed('suitability', function() {
        return 'app.activity.suitabilities.' + this.get('suitability.type');
    })

});
