import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return `address_${i}`;
  },
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  street() {
    return faker.address.streetName();
  },
  houseNo() {
    return 1;
  },
  zip() {
    return faker.address.zipCode();
  },
  city() {
    return faker.address.city();
  },
  companyName() {
    return faker.company.companyName();
  },
  postOfficeBox() {
    return faker.address.latitude();
  },
  country() {
    return faker.address.country();
  },
  latitude() {
    return faker.address.latitude();
  },
  longitude() {
    return faker.address.longitude();
  }
});
