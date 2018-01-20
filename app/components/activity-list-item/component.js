import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    router: service(),
    // intl: service(),

    /**
     * Defines the activity item
     *
     * @property {array} activity
     * @default null
     */
    activity: null,

    /**
     * Defines all component action methods
     *
     * @property {object} actions
     */
    actions: {

      /**
       * Search activities by category
       *
       * @method search
       */
      searchByCategory(category) {
          let searchParams = {
            cid: category.id
          };

          this.get('router').transitionTo('activities', { queryParams: searchParams });
      },

      openActivityDetails(activity_id) {
        this.get('router').transitionTo('activity', activity_id);
      }

  }

});
