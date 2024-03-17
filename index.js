import router from './routes/routes.js'
import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

// Enable pug
app.set('view engine', 'pug');

// Get current year with middleware
app.use((req, res, next) => {
    // Locals are local variable from express that are availables in the views
    const year = new Date();
    console.log(year.getFullYear());
    res.locals.currentYear = year.getFullYear();
    return next();
});

// Define public folder
app.use(express.static('public'));

// Add router
app.use('/', router);

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
