import { Factory } from 'ember-cli-mirage';

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
        return categories[i];
    },
    title(i) {
        return 'app.categories.' + categories[i] + '.title';
    },
    description(i) {
        return 'app.categories.' + categories[i] + '.description';
    }
});
