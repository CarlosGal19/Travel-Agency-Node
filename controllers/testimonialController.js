import { Testimonial } from '../models/Testimonials.js';

const saveTestimonial = async (req, res) => {
    const { name, email, message } = req.body;
    let errors = [];
    if (!name) {
        errors.push({ message: 'Add your name' });
    }

    if (!email) {
        errors.push({ message: 'Add your email' });
    }

    if (!message) {
        errors.push({ message: 'Add your message' });
    }
    if (errors.length > 0) {
        res.render('testimonials', {
            title: 'Testimonials',
            errors,
            name,
            email,
            message
        });
    }else{
        try {
            await Testimonial.create({
                name,
                email,
                message
            });
            res.redirect('/testimonials');
        } catch (error) {
            errors.push(error.message);
            res.render('testimonials', {
                title: 'Testimonials',
                errors
            });
        }
    }
}

export{
    saveTestimonial
}
