export default function(server) {

  // List of addresses
  let addresses = server.createList('address', 5);
  
  // List of categories (max 15 available!!!)
  let categories = server.createList('category', 15);
  
  // List of places
  let places = server.createList('place', 2);
  
  // List of promoters
  let promoters = server.createList('promoter', 20);
  
  // Generate a list of activities with relations to categories
  let activitiesCount = Math.floor(Math.random() * 100);
  for (let i=0; i < activitiesCount; i++) {
    
    let randomCategoriesSelection = [];
    let categoriesCount = Math.floor(Math.random() * (categories.length - 1)) + 1;
    
    // Count of categories to assign to the activity
    for (let ac=0; ac < categoriesCount; ac++) {
      let index = Math.floor(Math.random() * (categories.length - 1));
      randomCategoriesSelection.push( categories[index] );
    }
    
    // Generate a new activity and set the new array of categories
    server.create('activity', { 
      categories: randomCategoriesSelection,
      promoters: [ promoters[Math.floor(Math.random() * (promoters.length - 1))] ],
      addresses: [ addresses[Math.floor(Math.random() * (addresses.length - 1))] ],
      places: [ places[Math.floor(Math.random() * (Math.ceil(places.length) - 1))] ]
    });

  }

}