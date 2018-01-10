import { Factory, faker} from 'ember-cli-mirage';

const categories = [
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
        return `activity_${i}`;
    },
    version() {
        return 1;
    },
    active() {
        return Math.random() >= 0.5;
    },
    categoryId() {
        return categories[Math.floor( Math.random() * categories.length )];
    },
    // categories() {
    //     return { categories: [] };
    // },
    date() {
        return faker.date.future();
    },
    title() {
        return faker.lorem.sentence();
    },
    description() {
        return faker.lorem.text();
    },
    organizer() {
        return faker.company.companyName();
    },
    img() {
        return faker.image.nightlife();
    },
    reservation() {
        return Math.random() >= 0.5;
    }
});
