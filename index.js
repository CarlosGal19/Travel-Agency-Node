import router from './routes/routes.js'
import express from 'express';
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.DATABASE);

const app = express();

// Connect db
(async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log('Unable to connect to the database: ', error);
    }
})();

const port = process.env.PORT || 3000;

// Enable pug
app.set('view engine', 'pug');

// Get current year with middleware
app.use((req, res, next) => {
    // Locals are local variable from express that are availables in the views
    res.locals.currentYear = new Date().getFullYear();
    res.locals.siteNames = 'Travel Agency';
    return next();
});

// Add body parser
app.use(express.urlencoded({ extended: true }));

// Define public folder
app.use(express.static('public'));

// Add router
app.use('/', router);

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
