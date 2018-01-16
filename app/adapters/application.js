import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({

    // Defines the host url for all REST calls
    host: ENV.host,

    // Defines the namespace for all REST calls
    namespace: ENV.namespace,

    // headers: {
    //   'Access-Control-Allow-Origin': "*",
    //   'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS, PATCH',
    //   'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token',
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // }

});
