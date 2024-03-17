const saveTestimonial = (req, res) => {
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
}

export{
    saveTestimonial
}
