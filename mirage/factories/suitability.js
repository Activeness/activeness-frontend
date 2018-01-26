import { Factory/*, faker*/ } from 'ember-cli-mirage';

let suitabilities = [
    'children',
    'adults',
    'families',
    'pensioner'
];

export default Factory.extend({
    id(i) {
        return `suitability_${i}`;
    },
    type() {
        return suitabilities[(Math.round(Math.random() * (suitabilities.length - 1)))];
    }
});
