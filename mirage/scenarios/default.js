export default function(server) {
  
  // List of addresses
  // server.createList('address', 20);

  // List of categories (max 15 available!!!)
  server.createList('category', 15);

  // List of activities
  server.createList('activity', 100);
  
}