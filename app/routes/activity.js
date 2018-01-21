import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

    model(transition) {
        return this.get('store').find('activity', transition.activity_id);
    }

});
