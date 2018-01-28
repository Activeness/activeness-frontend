import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    id(i) {
        return `language_${i}`;
    },
    languageFamily() {
        return null;
    },
    isoLanguageName() {
        return faker.address.country();
    },
    code1() {
        return faker.address.countryCode().toLowerCase();
    },
    code2T() {
        return null;
    },
    code2B() {
        return null;
    },
    code3() {
        return null;
    }
});
