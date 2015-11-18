app.factory('suggestions', [function() {
  var demoSuggestions = {
    posts: [
      {
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
        title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
        upvotes: 3,
        comments: [],
      }
    ]
  }
  return demoSuggestions
}]);
