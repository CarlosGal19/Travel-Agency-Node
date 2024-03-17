import express from "express";

const router =  express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
    });
    // res.render()
    // res.json
    // res.status()
});

router.get('/us', (req, res) => {
    res.render('us', {
        title: 'About Us'
    });
});

router.get('/travels', (req, res) => {
    res.render('travels', {
        title: 'Travels'
    });
});

router.get('/testimonials', (req, res) => {
    res.render('testimonials', {
        title: 'Testimonials'
    });
});

export default router;
