import Component from '@ember/component';
import { A } from '@ember/array';

export default Component.extend({

    /**
     * Defines the list of the latest viewed activities
     * 
     * @property {array} latestActivityViews
     * @default null
     */
    latestActivityViews: A([
        {
            title: "Lorem ipsum dolor sit amet",
            date: "01.08.2018",
            img: "https://www.nordevent.de/files/content/Eventlocations/Hamburg/Penthouse-Elb-Panorama/Bildergalerie-Elb-Panorama/EP-1.jpg"
        },
        {
            title: "Lorem ipsum",
            date: "01.08.2018",
            img: "https://www.nordevent.de/files/content/Eventlocations/Hamburg/Penthouse-Elb-Panorama/Bildergalerie-Elb-Panorama/EP-1.jpg"
        },
        {
            title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr ipsum dolor sit amet ipsum dolor sit amet",
            date: "01.08.2018",
            img: "https://www.nordevent.de/files/content/Eventlocations/Hamburg/Penthouse-Elb-Panorama/Bildergalerie-Elb-Panorama/EP-1.jpg"
        }
    ])

});
