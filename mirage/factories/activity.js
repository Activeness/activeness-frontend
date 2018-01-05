import { Factory/*, faker*/} from 'ember-cli-mirage';

const categories = [
    'music', 
    'excursion'
];

export default Factory.extend({
    id(i) {
        return `${i}`;
    },
    title() {
        return faker.lorem.sentence();
    },
    description() {
        return faker.lorem.text();
    },
    ico: 'check',
    img: 'https://www.nordevent.de/files/content/Eventlocations/Hamburg/Penthouse-Elb-Panorama/Bildergalerie-Elb-Panorama/EP-1.jpg'
});
