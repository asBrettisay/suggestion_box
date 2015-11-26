app.factory('suggestions', [function() {
  var demoSuggestions = {
    posts: [
      {
        id: 1,
        title: 'Free pizza at club meetings',
        upvotes: 15,
        comments: [
          {
            body:'I love Pizza',
            upvotes: 0,
          },
          {
            body:"I've got a coupon!",
            upvotes: 1,
          }
         ]
      },
      {
        id: 2,
        title: 'End all club emails with Laffy Taffy jokes',
        upvotes: 9,
        comments: [
          {
            body: "I hate laffy taffy",
            upvotes: 0
          }
        ],
      },
      {
        id: 3,
        title: 'Retrofit water fountain with Gatorade',
        upvotes: 7,
        comments: [
          {
            body: 'I love gatorade',
            upvotes: 0
          }
        ],
      },
      {
        id: 4,
        title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
        upvotes: 3,
        comments: [],
      }
    ]
  }
  return demoSuggestions
}]);
