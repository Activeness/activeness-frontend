import { Factory, faker } from 'ember-cli-mirage';

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
        return [];
    },  // Relation needed
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
      return faker.random.boolean();
    },
    sport() {
      return faker.random.boolean();
    },
    // suitabilities() {},  // Relation needed
    // costs() {},          // Relation needed
    // langs() {},          // Relation needed
    rating() {
      return 3;
    },
    // comments() {},       // Relation needed
    reservation() {
        return faker.random.boolean();
    },
    
    // afterCreate(activity, server) {
    //     server.create('category', { activity });
    // }
    // afterCreate(activity, server) {
    //     server.createList('category', 3, { activity });
    // }

});
