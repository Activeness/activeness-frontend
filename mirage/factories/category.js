import { Factory } from 'ember-cli-mirage';

const categories = [
    '*',
    'music', 
    'excursion'
];

export default Factory.extend({
    id(i) {
        return `${i}`;
    },
    title(i) {
        return 'app.categories.' + categories[i] + '.title';
    },
    description(i) {
        return 'app.categories.' + categories[i] + '.description';
    },
    ico: 'check'
});
