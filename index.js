// Desc: Main entry point for the application
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const connection = require('./db/connection');
const funcionarioRoutes = require('./routes/funcionarioRoutes');

// Import routes
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Middleware
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json());

// Routes
app.use(express.static('public'));
app.use('', funcionarioRoutes)

// Start server
connection.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((error) => { console.log(error) });