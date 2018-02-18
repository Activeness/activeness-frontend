import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({

    intl: service(),

    /**
     * Defines the type of the ember-view element
     *
     * @property {string} tagName
     * @default span
     */
    tagName: 'span',

    /**
     * Defines the model of the cost
     *
     * @property {object} cost
     * @default null
     */
    cost: null,

    /**
     * Defines the price of the cost
     *
     * @property {price} price
     * @default null
     */
    price: null,

    /**
     * Defines a computed property that generate the localization key
     *
     * @property {Ember.computed} localizedCostKey
     * @default null
     */
    localizedCostKey: computed('cost', function() {
        /*
        this.set('price', this.get('intl').formatNumber(this.get('cost.price'), {
            style: 'currency',
            currency: this.get('cost.currency')
        }));
        return 'app.activity.costs.' + this.get('cost.type');
        */
    })

});
