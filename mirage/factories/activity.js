import { Factory, faker} from 'ember-cli-mirage';

// const categories = [
//     'music',
//     'excursion'
// ];

export default Factory.extend({
    id(i) {
        return `${i}`;
    },
    active() {
        return Math.random() >= 0.5;
    },
    date() {
        return faker.date.future();
    },
    title() {
        return faker.lorem.sentence();
    },
    description() {
        return faker.lorem.text();
    },
    ico: 'check',
    img: faker.image.nightlife(),
    reservation() {
        return Math.random() >= 0.5;
    }
});
