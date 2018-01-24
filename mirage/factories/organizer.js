// import { Factory } from 'ember-cli-mirage';
import addressFactory from './address';

export default addressFactory.extend({
    id(i) {
        return `organizer_${i}`;
    }
});
