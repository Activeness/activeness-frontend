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
    categories() {
      return [1,2,8];
    },
    date() {
        return faker.date.future();
    },
    title() {
        return faker.lorem.sentence();
    },
    description() {
        let text = faker.lorem.lines(40);
        return text;
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
      return faker.random.number(5);
    },
    reservation() {
        return faker.random.boolean();
    }
});
