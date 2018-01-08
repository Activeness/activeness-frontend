import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import RSVP, { Promise } from 'rsvp';
import DS from 'ember-data';

export default Component.extend({

    router: service(),
    store: service(),

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
    categories: computed('store', function() {
        return DS.PromiseArray.create({
            promise: new Promise((resolve)=> {
                this.get('store').findAll('category').then((categories)=>{
                    let filteredCategories = categories.filter((category)=>{
                        return category.get('title').indexOf('*') === -1;
                    });
                    resolve(filteredCategories);
                })
            })
        });
    }),

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
            this.get('router').transitionTo('activities',  { queryParams: { category: category }});
        }

    }

});
