import { Travel } from '../models/Travel.js';
import { Testimonial } from '../models/Testimonials.js';

const mainPage = async (req, res) => {

    // Consult 3 travels from the model and 3 testimonials at the same time

    const promiseDB = [];
    promiseDB.push(Travel.findAll({ limit: 3 }));
    promiseDB.push(Testimonial.findAll({ limit: 3 }));

    try {
        const result = await Promise.all(promiseDB);
        res.render('home', {
            title: 'Home',
            classBody: 'home',
            travels: result[0],
            testimonials: result[1]
        });
    }
    catch (error) {
        console.log(error)
    }
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
