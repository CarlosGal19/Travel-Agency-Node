import express from "express";

const router =  express.Router();

router.get('/', (req, res) => {
    res.render('home');
    // res.render()
    // res.json
    // res.status()
});

router.get('/us', (req, res) => {
    const travels =  'Travel to Germany'
    res.render('us', {
        travels
    });
});

export default router;
