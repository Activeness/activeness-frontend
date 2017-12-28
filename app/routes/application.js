import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({

    intl: Ember.inject.service(),

    beforeModel() {
        return this.get('intl').setLocale(['de-de', 'en-us']);
    },
    
    model() {
        return Ember.RSVP.hash({
            navigationItems: [
                {
                    title: "app.navigation.home.title",
                    description: "app.navigation.home.description",
                    link: "index",
                    active: true
                },
                {
                    title: "app.navigation.today.title",
                    description: "app.navigation.today.description",
                    link: "today",
                    active: false
                },
                {
                    title: "app.navigation.random.title",
                    description: "app.navigation.random.description",
                    link: "random",
                    active: false
                }
            ]
        });
    }

});
