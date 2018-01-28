export default function(server) {

  // List of activities
  let activities = server.createList('activity', 3);
  
  for (let i=0; i < activities.length; i++) {
    activities[i].update({
      categories: server.createList('category', 1 + Math.round(Math.random() * 5)),
      addresses: server.createList('address', 1 + Math.round(Math.random() * 1)),
      promoters: server.createList('promoter', 1 + Math.round(Math.random() * 1)),
      places: server.createList('place', 1 + Math.round(Math.random() * 1)),
      costs: server.createList('cost', 1 + Math.round(Math.random() * 3)),
      suitabilities: server.createList('suitability', 1 + Math.round(Math.random() * 3)),
      languages: server.createList('language', 1 + Math.round(Math.random() * 5))
    });
  }
  
}