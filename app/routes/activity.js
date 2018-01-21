import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

    model(transition) {

        let activity = this.get('store').find('activity', transition.activity_id);
        let daysUntilDate = 22;
        
        return RSVP.hash({
            activity: activity,
            daysUntilDate: daysUntilDate,
            rating: 3
        });
    }

});
