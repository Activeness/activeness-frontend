import { Factory/*, faker*/ } from 'ember-cli-mirage';

let places = [
    'indoor',
    'outdoor'
];

export default Factory.extend({
    id(i) {
        return `place_${i}`;
    },
    name() {
        return places[(Math.round(Math.random() * (places.length - 1)))];
    }
});
