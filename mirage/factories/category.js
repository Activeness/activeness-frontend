import { Factory/*, trait*/ } from 'ember-cli-mirage';

const categories = [
    '*',
    'music',
    'excursion',
    'event',
    'opening',
    'food',
    'relaxation',
    'dance',
    'family',
    'guides',
    'culture',
    'exhibition',
    'market',
    'meetup',
    'others'
];

export default Factory.extend({
    id(i) {
        return `${i}`;
    },
    name(i) {
        // return categories[Math.floor(Math.random() * 14) + 1];
        return categories[i];
    }
});
