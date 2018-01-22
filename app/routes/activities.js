import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

    queryParams: {
        cid: {
            refreshModel: true
        }
    },

    model(transition) {
        return RSVP.hash({
            activities: this.get('store').query('activity', { cid: transition.cid }),
            categories: this.get('store').findAll('category').then((categories)=>{
                return categories.filter((category)=>{
                    return category.get('title').indexOf('*') === -1;
                });
            })
        });
    }

});
