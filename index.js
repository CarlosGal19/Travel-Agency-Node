import router from './routes/routes.js'
import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

// Add router
app.use('/', router);

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
