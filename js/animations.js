// ============================================
// Animations and Scroll Effects
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Intersection Observer for Fade-in Animations
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections and cards
    const elementsToAnimate = document.querySelectorAll(`
        .about-content,
        .timeline-item,
        .experience-card,
        .project-card,
        .certification-card,
        .skill-item,
        .contact-content
    `);

    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });

    // ============================================
    // Skill Progress Bar Animation
    // ============================================
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                if (progressBar) {
                    const width = progressBar.style.width;
                    progressBar.style.width = '0%';
                    
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 100);
                }
                
                skillObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        skillObserver.observe(item);
    });

    // ============================================
    // Parallax Effect for Hero Section
    // ============================================
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });

    // ============================================
    // Typing Effect for Hero Subtitle (Optional)
    // ============================================
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Uncomment to enable typing effect on hero subtitle
    /*
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        setTimeout(() => {
            typeWriter(heroSubtitle, originalText, 50);
        }, 500);
    }
    */

    // ============================================
    // Card Hover Tilt Effect
    // ============================================
    const cards = document.querySelectorAll('.project-card, .certification-card, .experience-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // ============================================
    // Counter Animation for Statistics (if added)
    // ============================================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    // Example usage for counters (if stats section is added)
    const counters = document.querySelectorAll('[data-counter]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-counter'));
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // ============================================
    // Scroll Progress Indicator
    // ============================================
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
            z-index: 10000;
            transition: width 0.1s ease-out;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };

    createScrollProgress();

    // ============================================
    // Stagger Animation for Lists
    // ============================================
    function staggerAnimation(selector, delay = 100) {
        const items = document.querySelectorAll(selector);
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * delay}ms`;
        });
    }

    staggerAnimation('.skill-tag', 50);
    staggerAnimation('.timeline-highlights .highlight-tag', 50);
    staggerAnimation('.project-tags .tag', 50);

    // ============================================
    // Mouse Cursor Trail Effect (Optional)
    // ============================================
    let cursorTrail = [];
    const maxTrailLength = 10;

    document.addEventListener('mousemove', (e) => {
        // Create cursor trail dot
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: 5px;
            height: 5px;
            background: rgba(99, 102, 241, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            animation: fadeDot 0.5s ease-out forwards;
        `;
        
        document.body.appendChild(dot);
        cursorTrail.push(dot);
        
        // Remove old trail dots
        if (cursorTrail.length > maxTrailLength) {
            const oldDot = cursorTrail.shift();
            oldDot.remove();
        }
        
        // Remove dot after animation
        setTimeout(() => {
            dot.remove();
        }, 500);
    });

    // Add CSS animation for cursor trail
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeDot {
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // Text Gradient Animation on Hover
    // ============================================
    const gradientTexts = document.querySelectorAll('.gradient-text, .section-title');
    
    gradientTexts.forEach(text => {
        text.addEventListener('mouseenter', () => {
            text.style.animation = 'gradient-shift 2s ease infinite';
        });
        
        text.addEventListener('mouseleave', () => {
            text.style.animation = 'none';
        });
    });

    // Add gradient shift animation
    const gradientStyle = document.createElement('style');
    gradientStyle.textContent = `
        @keyframes gradient-shift {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
    `;
    document.head.appendChild(gradientStyle);

    // ============================================
    // Smooth Reveal for Navigation Links
    // ============================================
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
    });

    // ============================================
    // Button Ripple Effect
    // ============================================
    const buttons = document.querySelectorAll('.btn, button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                top: ${y}px;
                left: ${x}px;
                transform: scale(0);
                animation: ripple-animation 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // ============================================
    // Social Links Bounce Animation
    // ============================================
    const socialLinks = document.querySelectorAll('.social-links a, .contact-socials a, .footer-socials a');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.animation = 'bounce 0.6s ease';
        });
        
        link.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });

    // ============================================
    // Preload Critical Images
    // ============================================
    function preloadImages(urls) {
        urls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }

    // Add image URLs to preload if needed
    // preloadImages(['path/to/image1.jpg', 'path/to/image2.jpg']);

    console.log('✨ Animations initialized successfully!');
});
