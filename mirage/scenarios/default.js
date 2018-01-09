export default function(server) {

  // List of activities
  server.createList('activity', 100);

  // List of categories (max 15)
  server.createList('category', 15);

}
