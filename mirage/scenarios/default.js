export default function(server) {

  // List of categories (max 15 available!!!)
  let categories = server.createList('category', 15);

  // List of addresses
  server.createList('address', 20);

  // List of activities
  server.createList('activity', 100, {
    cetegories: [
      categories[0],
      categories[1],
      categories[2]
    ]
  });

}
