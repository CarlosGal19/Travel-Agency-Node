import { Travel } from '../models/Travel.js';
import { Testimonial } from '../models/Testimonials.js';

const mainPage = (req, res) => {
    res.render('home', {
        title: 'Home',
        classBody: 'home'
    });
}

const usPage = (req, res) => {
    res.render('us', {
        title: 'About Us'
    });
}

const travelsPage = async (req, res) => {
    const travels = await Travel.findAll();
    res.render('travels', {
        title: 'Upcoming Travels',
        travels
    });
}

const testimonialsPage = async (req, res) => {
    try {
        const testimonials = await Testimonial.findAll();
        res.render('testimonials', {
            title: 'Testimonials',
            testimonials
        });
    } catch (error) {
        console.log(error);
    }
}

const travelDetail = async (req, res) => {
    try {
        const { slug } = req.params;
        const travel = await Travel.findOne({ where: { slug } });
        res.render('travel', {
            title: `Travel to ${travel.titulo}`,
            travel
        });
    } catch (error) {
        console.log(error);
    }
}

export{
    mainPage,
    usPage,
    travelsPage,
    testimonialsPage,
    travelDetail
}
