export default function(server) {

  // List of addresses
  // server.createList('address', 20);

  // List of categories (max 15 available!!!)
  let categories = server.createList('category', 15);

  // Generate a list of activities with relations to categories
  for (let i=0; i < categories.length; i++) {

    let randomCategoriesSelection = [];
    let categoriesCount = Math.floor(Math.random() * 15);
    let activitiesCount = Math.floor(Math.random() * 10);

    // Count of activities to generate
    for (let ac=0; ac < activitiesCount; ac++) {

      // Count of categories to generate
      for (let cc=0; cc < categoriesCount; cc++) {
        randomCategoriesSelection.push( categories[Math.floor(Math.random() * 15)] );
      }

      // Generate a new activity and set the new array of categories
      server.create('activity', { categories: randomCategoriesSelection });
    }

  }

}
