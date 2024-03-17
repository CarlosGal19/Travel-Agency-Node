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

const travelsPage = (req, res) => {
    res.render('travels', {
        title: 'Travels'
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
