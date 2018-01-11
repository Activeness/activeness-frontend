export default function(server) {

  // List of addresses
  server.createList('address', 150);

  // List of activities
  server.createList('activity', 200);

  // List of categories (max 15)
  server.createList('category', 15);

}
