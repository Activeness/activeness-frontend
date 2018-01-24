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
     * Defines the model of the place
     *
     * @property {object} place
     * @default null
     */
    place: null,

    /**
     * Defines a computed property that generate the localization key
     *
     * @property {Ember.computed} localizedPlaceKey
     * @default null
     */
    localizedPlaceKey: computed('place', function() {
        return 'app.activity.' + this.get('place.name');
    })

});
