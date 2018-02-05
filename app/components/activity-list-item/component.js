import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    router: service(),
    // intl: service(),

    classNames: ['activities-list-item'],

    /**
     * Defines the activity item
     *
     * @property {array} activity
     * @default null
     */
    activity: null,

    /**
     * Defines whether the listed activity items displayed as a list or as tiles
     *
     * @property {Ember.computed} showAsList
     * @default null
     */
    showAsList: false,
    
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
