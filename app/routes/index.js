import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({

    model() {
        return RSVP.hash({
            activities: this.get('store').query('activity', { amount: 5 })
        });
    }

});
