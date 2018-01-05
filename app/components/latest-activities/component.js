import Component from '@ember/component';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({

    store: service(),

    /**
     * Defines the list of the latest viewed activities
     * 
     * @property {array} latestActivityViews
     * @default null
     */
    latestActivityViews: computed('store', function() {
        return this.get('store').findAll('activity');
    })

});
