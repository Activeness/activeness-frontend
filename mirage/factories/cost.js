import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    id(i) {
        return `cost_${i}`;
    },
    name() {
        return faker.lorem.word();
    },
    price() {
        return faker.commerce.price();
    }
});
