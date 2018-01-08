import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({

    intl: service(),

    beforeModel() {
        return this.get('intl').setLocale('de-de');
    },
    
    model() {
        return RSVP.hash({
            latestActivityViews: this.get('store').query('activity', { amount: 3 }),
            activitiesCategories: this.get('store').findAll('category').then((categories)=>{
                return categories.filter((category)=>{
                    return category.get('title').indexOf('*') === -1;
                });
            })
        });
    }

});
