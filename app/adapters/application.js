import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
    
    // Defines the host url for all REST calls
    host: ENV.host,
    
    // Defines the namespace for all REST calls
    namespace: ENV.namespace
    
});
