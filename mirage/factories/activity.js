import { Factory, faker} from 'ember-cli-mirage';

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
    // categoryies() {},  // How the relation to "category" ????
    // organizer() {},    // Relation needed
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
    // address() {},      // Relation needed
    action() {
      return Math.random() >= 0.5;
    },
    sport() {
      return Math.random() >= 0.5;
    },
    // suitabilities() {},  // Relation needed
    // costs() {},          // Relation needed
    // langs() {},          // Relation needed
    rating() {
      return 3;
    },
    // comments() {},       // Relation needed
    reservation() {
        return Math.random() >= 0.5;
    }
});
