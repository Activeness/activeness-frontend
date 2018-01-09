import { Factory, faker} from 'ember-cli-mirage';

// const categories = [
//     'music',
//     'excursion'
// ];

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
