// ============================================
// Main JavaScript for Portfolio Website
// ============================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Loading Animation
    // ============================================
    const loader = document.getElementById('loader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    });

    // ============================================
    // Navigation
    // ============================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Toggle Mobile Menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ============================================
    // Smooth Scrolling
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Active Navigation Link on Scroll
    // ============================================
    function setActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    // ============================================
    // Navbar Scroll Effect
    // ============================================
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // ============================================
    // Scroll to Top Button
    // ============================================
    const scrollTopBtn = document.getElementById('scroll-top');

    function toggleScrollTopBtn() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ============================================
    // Project Modal
    // ============================================
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card');

    const projectData = {
        1: {
            title: 'Humanoid Face with Animatronic Eye Mechanism',
            description: 'A lifelike humanoid face integrated with animatronic eye mechanism that mimics human gaze and movement for realistic emotional expression and interaction. This project combines advanced mechatronics with precision engineering to create natural-looking facial movements and eye tracking capabilities.',
            tags: ['Robotics', 'Mechatronics', 'Design & Fabrication'],
            icon: 'fa-robot'
        },
        2: {
            title: 'AI Bot Head',
            description: 'An interactive AI-powered bot head that synchronizes mouth movements with speech to create lifelike communication and enhance human-machine interaction. This project utilizes advanced speech processing algorithms and servo control systems to achieve realistic lip-sync capabilities.',
            tags: ['AI/ML', 'Robotics', 'Speech Processing'],
            icon: 'fa-brain'
        },
        3: {
            title: 'Sonic Sense - AI Voice Assistant Module',
            description: 'ESP32-based voice recognition module leveraging I&sup2;S audio interface and machine learning for offline speech processing and intelligent voice-controlled automation. This project demonstrates edge AI capabilities with local processing, ensuring privacy and low-latency response times.',
            tags: ['IoT', 'Machine Learning', 'Voice Recognition', 'STT/TTS'],
            icon: 'fa-microphone-alt'
        }
    };

    // Open modal on project card click
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const project = projectData[projectId];
            
            if (project) {
                document.querySelector('.modal-title').textContent = project.title;
                document.querySelector('.modal-description').textContent = project.description;
                document.querySelector('.modal-placeholder i').className = `fas ${project.icon}`;
                
                const modalTags = document.querySelector('.modal-tags');
                modalTags.innerHTML = '';
                project.tags.forEach(tag => {
                    const tagElement = document.createElement('span');
                    tagElement.className = 'tag';
                    tagElement.textContent = tag;
                    modalTags.appendChild(tagElement);
                });
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // ============================================
    // Contact Form Handling
    // ============================================
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Log form data (in production, send to backend or service like Formspree)
        console.log('Form submitted:', formData);

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();

        // Note: To integrate with a backend service, uncomment and configure:
        /*
        fetch('YOUR_FORM_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Sorry, there was an error sending your message. Please try again.');
        });
        */
    });

    // ============================================
    // Scroll Event Listeners
    // ============================================
    window.addEventListener('scroll', () => {
        setActiveNav();
        handleNavbarScroll();
        toggleScrollTopBtn();
    });

    // Initial calls
    setActiveNav();
    handleNavbarScroll();
    toggleScrollTopBtn();

    // ============================================
    // Lazy Loading for Images (if images are added)
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });

        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => imageObserver.observe(img));
    }

    // ============================================
    // Keyboard Navigation Enhancement
    // ============================================
    document.addEventListener('keydown', (e) => {
        // Navigate with arrow keys when modal is not open
        if (!modal.classList.contains('active')) {
            if (e.key === 'ArrowUp') {
                window.scrollBy({ top: -100, behavior: 'smooth' });
            } else if (e.key === 'ArrowDown') {
                window.scrollBy({ top: 100, behavior: 'smooth' });
            }
        }
    });

    // ============================================
    // Download Resume Handler
    // ============================================
    const resumeButton = document.querySelector('a[href="assets/resume.pdf"]');
    if (resumeButton) {
        resumeButton.addEventListener('click', (e) => {
            // Check if resume file exists (this would be done server-side in production)
            console.log('Resume download initiated');
            // If file doesn't exist, you might want to show a message:
            // e.preventDefault();
            // alert('Resume will be available soon!');
        });
    }

    // ============================================
    // Print Functionality
    // ============================================
    window.addEventListener('beforeprint', () => {
        // Expand all collapsed sections for printing
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });

    // ============================================
    // Console Greeting
    // ============================================
    console.log('%c👋 Hello!', 'color: #6366f1; font-size: 24px; font-weight: bold;');
    console.log('%cThanks for checking out my portfolio!', 'color: #8b5cf6; font-size: 16px;');
    console.log('%cFeel free to reach out: sainlakshay508@gmail.com', 'color: #94a3b8; font-size: 14px;');
});
