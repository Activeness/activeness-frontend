import ENV from '../config/environment';

export default function() {

  this.urlPrefix = 'http://localhost:4200'; // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/' + ENV.namespace;  // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;  // delay for each request, automatically set to 0 during testing

  this.get('/activities', (schema/*, request*/) => {
    return schema.activities.all();
  });

  this.get('/categories', (schema/*, request*/) => {
    return schema.categories.all();
  });

}
