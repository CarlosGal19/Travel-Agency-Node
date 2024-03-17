import express from "express";
import { mainPage, usPage, travelsPage, testimonialsPage } from "../controllers/pagesController.js";

const router =  express.Router();

router.get('/', mainPage);
    // res.render()
    // res.json
    // res.status()

router.get('/us', usPage);

router.get('/travels', travelsPage);

router.get('/testimonials', testimonialsPage);

export default router;
