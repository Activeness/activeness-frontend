// import { Factory } from 'ember-cli-mirage';
import addressFactory from './address';

export default addressFactory.extend({
    id(i) {
        return `promoter_${i}`;
    }
});
