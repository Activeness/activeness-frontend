import { Factory, faker } from 'ember-cli-mirage';

let types = [
    'email',
    'tel',
    'facebook',
    'twitter',
    'xing',
    'linkedin'
];

export default Factory.extend({
    id(i) {
        return `contact_${i}`;
    },
    type() {
        return types[(Math.round(Math.random() * (types.length - 1)))];
    },
    value() {
        return faker.internet.url();
    },
    info() {
        return faker.lorem.sentence();
    }
});
