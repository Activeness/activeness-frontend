import DS from 'ember-data';
import address from './address';

export default address.extend({
    
    activity: DS.belongsTo('activity', { async: true })

});
