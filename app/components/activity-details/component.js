import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from "@ember/object"

export default Component.extend({

    router: service(),

    /**
     * Defines the activity item
     *
     * @property {array} activity
     * @default null
     */
    activity: null,

    /**
     * Defines a computed property to calculate how much days are until the event date
     *
     * @property {Ember.computed} daysUntilDate
     * @default null
     */
    daysUntilDate: computed('activity', function() {
        let date = this.get('activity.date');
        let now = new Date();
        
        let elapsed = Math.floor((date.getTime() - now.getTime()) / 1000 / 60 / 60 / 24) + 1;
        
        return elapsed;
    }),

    /**
     * Rating
     *
     * @property {Ember.computed} daysUntilDate
     * @default null
     */
    ratingStars: computed('activity', function() {
        let rating = this.get('activity.rating');
        let ratings = [];

        for (let i=1; i<6; i++) {
            if (i < rating) {
                ratings.push(1);
            }else{
                ratings.push(0);
            }
        }

        return ratings;
    }),

    /**
     * Defines all component action methods
     *
     * @property {object} actions
     */
    actions: {

      /**
       * Search activities by category
       *
       * @method searchByCategory
       */
      searchByCategory(category) {
          let searchParams = {
            cid: category.id
          };

          this.get('router').transitionTo('activities', { queryParams: searchParams });
      }

  }

});
