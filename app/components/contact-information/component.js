import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

    /**
     * Defines the model of the contact
     *
     * @property {object} contact
     * @default null
     */
    contact: null,

    /**
     * Defines a computed property that ...
     *
     * @property {Ember.computed} test
     * @default null
     */
    test: computed('contact', function() {
        return this.get('contact.type');
    })

});
