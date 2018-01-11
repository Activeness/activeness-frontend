import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

    queryParams: {
        categoryId: {
            refreshModel: true
        }
    },

    model(transition) {
        return RSVP.hash({
            activities: this.get('store').query('activity', { cid: transition.cid })
        });
    }

});
