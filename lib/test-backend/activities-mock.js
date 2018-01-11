const activitiesMock = [
    {
        "id": 1,
        "version": 1,
        "active": true,
        "categories": null,   // Relation
        "organizer": null,    // Relation
        "date": "",
        "title": "Title",
        "description": "Description",
        "img": "https://www-tc.pbs.org/wnet/nature/files/2017/03/1007.jpg",
        "address": null,          // Relation
        "action": true,
        "sport": true,
        "suitabilities": null,    // Relation
        "costs": null,            // Relation
        "langs": null,            // Relation
        "rating": 3,
        "comments": null,         // Relation
        "reservation": true
    }
];

module.exports = {
    activities: activitiesMock
};
