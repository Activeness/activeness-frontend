export default function(server) {

  // List of addresses
  // server.createList('address', 20);

  // List of categories (max 15 available!!!)
  let categories = server.createList('category', 15);

  let activitiesCount = Math.floor(Math.random() * 100);

  // Generate a list of activities with relations to categories
  for (let i=0; i < activitiesCount; i++) {

    let randomCategoriesSelection = [];
    let categoriesCount = Math.floor(Math.random() * (categories.length - 1));

    // Count of categories to assign to the activity
    for (let ac=0; ac < categoriesCount; ac++) {
      let index = Math.floor(Math.random() * (categories.length - 1));
      randomCategoriesSelection.push( categories[index] );
    }
    
    // Generate a new activity and set the new array of categories
    server.create('activity', { categories: randomCategoriesSelection });
  }

}