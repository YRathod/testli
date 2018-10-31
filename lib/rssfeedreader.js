var feed = require("feed-read");

var getRssFeedData = function(input, callback)
		{
			var rss = []
			feed(input, function(err, articles) {
			  if (err) throw err;
			  for (var i = 0; i < articles.length; i++) {
				  rss.push(articles[i].title); 
				  //console.log(articles[i].title);
			  }  
			  callback(rss);
			});
		}


getRssFeedData("http://feeds.feedburner.com/ndtvnews-top-stories",function(rss){
	console.log(rss);
});

