import express from "express";

const router =  express.Router();

router.get('/', (req, res) => {
    res.send('Hello world');
    // res.render()
    // res.json
    // res.status()
});

router.get('/us', (req, res) => {
    res.send('Us');
});

router.get('/contact', (req, res) => {
    res.send('Contact');
});

export default router;
