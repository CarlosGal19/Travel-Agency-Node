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
    travels.forEach(element => {
        console.log(element.dataValues);
    });
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

export{
    mainPage,
    usPage,
    travelsPage,
    testimonialsPage
}
