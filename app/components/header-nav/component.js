import Component from '@ember/component';
import { A } from "@ember/array"
// import { computed } from "@ember/object"
// import { inject as service } from "@ember/service";

export default Component.extend({

    /**
     * Defines all main navigation items
     * 
     * @property {Ember.array} items
     * @default []
     */
    items: A([
        {
            title: "app.navigation.home.title",
            description: "app.navigation.home.description",
            link: "index"
        },
        {
            title: "app.navigation.today.title",
            description: "app.navigation.today.description",
            link: "today"
        },
        {
            title: "app.navigation.random.title",
            description: "app.navigation.random.description",
            link: "random"
        }
    ])

});
