// site/js/views/library.js
// LibraryモデルのビューLibraryView

var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#books',

    events:{
	'click #add':'addBook'
    },

    initialize: function( initialBooks ) {
        this.collection = new app.Library( initialBooks );

	// MongoDBから全データを読み終えたらresetイベントを発生させる
	this.collection.fetch({reset: true});
        this.render();

	this.listenTo(this.collection, 'add', this.renderBook);

	// resetイベントを受け取ったら、renderメソッドを呼び出すように設定
	this.listenTo(this.collection, 'reset', this.render);
    },

    // render library by rendering each book in its collection
    render: function() {
        this.collection.each(function( item ) {
            this.renderBook( item );
        }, this );
    },

    // render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderBook: function( item ) {
        var bookView = new app.BookView({
            model: item
        });
        this.$el.append( bookView.render().el );
    },

    addBook: function( e ) {
	e.preventDefault();

	var formData = {};

	$( '#addBook div' ).children( 'input' ).each( function( i, el ) {
            if( $( el ).val() != '' )
            {
		formData[ el.id ] = $( el ).val();
            }
	});

	this.collection.add( new app.Book( formData ) );
    }
});
