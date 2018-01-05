import Component from '@ember/component';
import { A } from "@ember/array"
import { inject as service } from '@ember/service';

export default Component.extend({

    router: service(),

    /**
     * Defines the css class names for the component ember-view element
     * 
     * @property {array} classNames
     * @default null
     */
    classNames: ['activities-categories'],

    /**
     * Defines all available categories of all activities
     * 
     * @property {Ember.array} categories
     * @default []
     */
    categories: A([
        {
            id: "music",
            title: "app.categories.music.title",
            description: "app.categories.music.description",
            ico: "check"
        },
        {
            id: "excursion",
            title: "app.categories.excursion.title",
            description: "app.categories.excursion.description",
            ico: "check"
        }
    ]),

    /**
     * Defines all component action methods
     * 
     * @property {object} actions
     */
    actions: {

        /**
         * Trigger the activities search by category
         * 
         * @method search
         */
        search(category) {
            this.get('router').transitionTo('search',  { queryParams: { category: category }});
        }

    }

});
