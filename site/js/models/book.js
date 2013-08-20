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

    // MongoDBの_idをidにコピーする
    // (サーバからのレスポンスを受け取って、モデルのコンストラクタに渡
    // す前に、parseメソッドが呼び出される)
    parse: function(response) {
	response.id = response._id;
	return response;
    }
});
