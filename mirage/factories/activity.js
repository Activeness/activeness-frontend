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
      return [];
    },
    date() {
        return faker.date.future();
    },
    title() {
        return faker.lorem.sentence();
    },
    description() {
        return faker.lorem.lines(40);
    },
    img() {
        return faker.image.sports();
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
    }/*,


    afterCreate(activity, server) {
        activity.update({ 
            categories: server.createList('category', 5)
        });
    }*/

});
