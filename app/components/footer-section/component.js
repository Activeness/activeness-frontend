import Component from '@ember/component';
import { A } from "@ember/array"
import { inject as service } from '@ember/service';

export default Component.extend({

    intl: service(),

    /**
     * Defines the tag name of the component ember-view.
     *
     * @property {string} tagName
     */
    tagName: 'footer',

    didReceiveAttrs() {
        this._super(...arguments);
        this.set('latestActivityViews', A([
            {
                title: "Lorem ipsum dolor sit amet",
                date: this.get('intl').formatDate(new Date()),
                img: "https://www.nordevent.de/files/content/Eventlocations/Hamburg/Penthouse-Elb-Panorama/Bildergalerie-Elb-Panorama/EP-1.jpg"
            },
            {
                title: "Lorem ipsum",
                date: this.get('intl').formatDate(new Date()),
                img: "https://www.nordevent.de/files/content/Eventlocations/Hamburg/Penthouse-Elb-Panorama/Bildergalerie-Elb-Panorama/EP-1.jpg"
            },
            {
                title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                date: this.get('intl').formatDate(new Date()),
                img: "https://www.nordevent.de/files/content/Eventlocations/Hamburg/Penthouse-Elb-Panorama/Bildergalerie-Elb-Panorama/EP-1.jpg"
            }
        ]));
    },

    /**
     * Defines all footer navigation items
     * 
     * @property {Ember.array} footerNavigationItems
     * @default []
     */
    footerNavigationItems: A([
        {
            title: "app.navigation.imprint.title",
            description: "",
            link: "imprint"
        },
        {
            title: "app.navigation.dataprotection.title",
            description: "",
            link: "dataprotection"
        },
        {
            title: "app.navigation.disclaimer.title",
            description: "",
            link: "disclaimer"
        }
    ]),
    
    latestActivityViews: null

});
