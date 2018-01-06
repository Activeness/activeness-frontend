import { Factory, faker} from 'ember-cli-mirage';

// const categories = [
//     'music',
//     'excursion'
// ];

export default Factory.extend({
    id(i) {
        return `${i}`;
    },
    title() {
        return faker.lorem.sentence();
    },
    description() {
        return faker.lorem.text();
    },
    ico: 'check',
    img: faker.image.nature()
});
