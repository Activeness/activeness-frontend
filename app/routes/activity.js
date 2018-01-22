import Route from '@ember/routing/route';

export default Route.extend({

    model(transition) {
        return this.get('store').find('activity', transition.activity_id);
    }

});
