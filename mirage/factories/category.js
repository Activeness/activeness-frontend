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
    'technology',
    'others'
];

export default Factory.extend({
    id(i) {
        return `category_${i}`;
    },
    name() {
        return categories[(1 + Math.round(Math.random() * (categories.length - 2)))];
    }
});
