// if i need to deploy to HEROKU then I need this
if(process.env.NODE_ENV !== 'production') require('dotenv').config();

// Thanks to this, it all works!!!)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/uploads', express.static('./static/img'))

// CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization');

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
})

// Routes
const pizzaRoute = require('./routes/pizza');
const sushiRoute = require('./routes/sushi');
const drinkRoute = require('./routes/drink');
const menuRoute = require('./routes/menu');
const snackRoute = require('./routes/snack');

// Use them
app.use('/api/pizza', pizzaRoute);
app.use('/api/sushi', sushiRoute);
app.use('/api/drink', drinkRoute);
app.use('/api/snack', snackRoute);
app.use('/api/menu', menuRoute);

// Error requests
// 1.
app.use(function (req, res, next) {
    const error = new Error('Not found');
    error.status = 404;

    next(error);
})
// 2.
app.use(function (error, req, res, next) {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

// Start the server
function startServer() {
    // ?
    mongoose.Promise = global.Promise;

    // Here mongoose try to connect with MongoDB. It's kind of Magic
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log('DB is connected!');
    })
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log('Server is OK! PORT: ' + process.env.PORT);
        })
    })
    .catch(err => {
        console.log(err);
    })
}

// go to SPACE
startServer();