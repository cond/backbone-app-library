//  site/js/models/book.js
//  本を表わすモデルBook

var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
	coverImage: 'img/placeholder.png',
	title: 'No title',
	author: 'Unknown',
	keywords: 'None'
    },

    // MongoDBの_idをidとして使用する
    idAttribute: "_id"
});
