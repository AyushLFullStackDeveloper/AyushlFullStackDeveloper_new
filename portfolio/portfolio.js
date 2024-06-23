ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

        // Typed.js Initialization
        const typed = new Typed('.multiple-text', {
            strings: ['Web Developer', 'Web Designer', 'Front-end Developer', 'Tester', 'Quality Assurance', 'Project Manager'],
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 1000,
            loop: true,
        });