// site/js/collections/library.js
// コレクションLibrary

var app = app || {};

app.Library = Backbone.Collection.extend({
    model: app.Book
});
