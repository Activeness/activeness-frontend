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
      return new Mirage.Response(200, getResponseHeaderData(), schema.activities.all().slice(0,amount));
    }else if (request.queryParams) {
      return new Mirage.Response(200, getResponseHeaderData(), schema.activities.all().filter((/*activity*/) => {
        // ...
      }));
    }else{
      return new Mirage.Response(200, getResponseHeaderData(), schema.activities.all());
    }

  });

  this.get('/activities/:activity_id', ({ activities }, request) => {
    return new Mirage.Response(200, getResponseHeaderData(), activities.find(request.params.activity_id));
  });


  // ===== Categories =====

  this.get('/categories', (schema/*, request*/) => {
    return new Mirage.Response(200, getResponseHeaderData(), schema.categories.all());
  });

  this.get('/categories/:category_id', ({ categories }, request) => {
    return new Mirage.Response(200, getResponseHeaderData(), categories.find(request.params.category_id));
  });


  // ===== Addresses =====

  this.get('/addresses', (schema/*, request*/) => {
    return new Mirage.Response(200, getResponseHeaderData(), schema.addresses.all());
  });

  this.get('/addresses/:address_id', ({ addresses }, request) => {
    return new Mirage.Response(200, getResponseHeaderData(), addresses.find(request.params.address_id));
  });


  // ===== Places =====

  this.get('/places', (schema/*, request*/) => {
    return new Mirage.Response(200, getResponseHeaderData(), schema.places.all());
  });

  this.get('/places/:place_id', ({ places }, request) => {
    return new Mirage.Response(200, getResponseHeaderData(), places.find(request.params.place_id));
  });

  
  // ===== Promoters =====

  this.get('/promoters', (schema/*, request*/) => {
    return new Mirage.Response(200, getResponseHeaderData(), schema.promoters.all());
  });

  this.get('/promoters/:promoter_id', ({ promoters }, request) => {
    return new Mirage.Response(200, getResponseHeaderData(), promoters.find(request.params.promoter_id));
  });

}
