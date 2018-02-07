import { Factory, faker } from 'ember-cli-mirage';

let types = [
    'free',
    'admission',
    'ticket'
];

export default Factory.extend({
    id(i) {
        return `cost_${i}`;
    },
    type() {
        return types[(Math.round(Math.random() * (types.length - 1)))];
    },
    price() {
        return faker.commerce.price();
    },
    currency() {
        // return faker.finance.currencyCode();
        return 'EUR';
    },
    description() {
        return faker.lorem.lines(Math.round(Math.random() * 3));
    }
});
