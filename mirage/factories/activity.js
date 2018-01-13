import { Factory, faker/*, trait*/ } from 'ember-cli-mirage';

export default Factory.extend({
    id(i) {
        return `activity_${i}`;
    },
    version() {
        return 1;
    },
    active() {
        return faker.random.boolean();
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
    img() {
        return faker.image.nightlife();
    },
    action() {
      return faker.random.boolean();
    },
    sport() {
      return faker.random.boolean();
    },
    rating() {
      return 3;
    },
    reservation() {
        return faker.random.boolean();
    }
});
