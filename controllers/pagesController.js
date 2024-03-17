import { Travel } from '../models/Travel.js';

const mainPage = (req, res) => {
    res.render('home', {
        title: 'Home',
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

const testimonialsPage = (req, res) => {
    res.render('testimonials', {
        title: 'Testimonials'
    });
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
