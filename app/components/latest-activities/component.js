import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    router: service(),
    
    /**
     * Defines the list of the latest viewed activities
     *
     * @property {array} latestActivityViews
     * @default null
     */
    latestActivityViews: null,

    /**
     * Defines all component action methods
     *
     * @property {object} actions
     */
    actions: {
    
        openActivityDetails(activity_id) {
            this.get('router').transitionTo('activity', activity_id);
        }

  }

});
