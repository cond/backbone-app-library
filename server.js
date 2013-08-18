// Module dependencies.

var
    application_root = __dirname,
    express = require('express'),	// Web framework
    path = require('path'),		// Utilieies for dealing with paths
    mongoose = require('mongoose');	// MongoDB integration

// Crete server
var app = express();

// Configure server
app.configure(function() {
    // parses request body and populates request.body
    app.use(express.bodyParser());

    // checks require.body for HTTP method overrides
    app.use(express.methodOverride());

    // perform route lookup based on url and HTTP method
    app.use(app.router);

    // where to serve static content
    app.use(express.static(path.join(application_root, 'site')));

    // show all errors in development
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Start server
var port = 3000;
app.listen(port, function() {
    console.log('Express server listening on port %d in %s mode',
		port, app.settings.env);
});

// Routes (Dummy API)
app.get('/api', function(request, response)  {
    response.send('Library API is running');
});
