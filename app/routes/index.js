import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

    model() {
        return RSVP.hash({
            activities: this.get('store').query('activity', { amount: 7 }),
            categories: this.get('store').findAll('category').then((categories)=>{
                return categories.filter((category)=>{
                    return category.get('title').indexOf('*') === -1;
                });
            })
        });
    }

});
