import Component from '@ember/component';
import { inject as service } from '@ember/service';

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
