import { Factory/*, faker*/ } from 'ember-cli-mirage';

let places = [
    'indoor',
    'outdoor'
];

export default Factory.extend({
    id(i) {
        return `place_${i}`;
    },
    name(i) {
        return places[i];
    }
});
