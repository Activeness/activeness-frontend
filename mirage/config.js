import ENV from '../config/environment';
import Mirage from 'ember-cli-mirage';

/**
 * Generate a new token string
 *
 * @returns {string} token
 */
function generateToken() {
  // return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  //   var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
  //   return v.toString(16);
  // });
}

/**
 * Defines the header data for all routes
 */
function getResponseHeaderData() {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'authentication-token': generateToken()
  };
}

export default function() {

  this.urlPrefix = ENV.host; // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/' + ENV.namespace;  // make this `/api`, for example, if your API is namespaced
  // this.timing = 2000;  // delay for each request, automatically set to 0 during testing


  // ===== Activities =====

  this.get('/activities', (schema, request) => {
    let amount = request.queryParams.amount;

    if (amount) {
      return schema.activities.all().slice(0,amount);
    }else if (request.queryParams) {
      return schema.activities.all().filter((/*activity*/) => {
        // ...
      });
    }else{
      return schema.activities.all();
    }

  });

  this.get('/activities/:activity_id', ({ activities }, request) => {
    return activities.find(request.params.activity_id);
  });


  // ===== Categories =====

  this.get('/categories', (schema/*, request*/) => {
    return new Mirage.Response(200, getResponseHeaderData(), schema.categories.all());
  });


  // ===== Addresses =====

  this.get('/addresses', (schema/*, request*/) => {
    return new Mirage.Response(200, getResponseHeaderData(), schema.addresses.all());
  });

  this.get('/addresses/:address_id', ({ addresses }, request) => {
    return addresses.find(request.params.address_id);
  });
  
}
