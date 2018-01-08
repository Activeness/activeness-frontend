import Component from '@ember/component';
import { inject as service } from '@ember/service';
// import { computed } from '@ember/object';
// import RSVP, { Promise } from 'rsvp';
// import DS from 'ember-data';

export default Component.extend({

    store: service(),

    /**
     * Defines a list of activities
     *
     * @property {array} activities
     * @default null
     */
    activities: null

});
