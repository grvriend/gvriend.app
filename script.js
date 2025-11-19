// ============================================
// MODERN PORTFOLIO - GRAHAM VRIEND
// JavaScript for Interactions & Animations
// ============================================

// ============================================
// NAVIGATION
// ============================================
const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Active nav link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// REVEAL ANIMATIONS ON SCROLL
// ============================================
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

// Initial check on page load
window.addEventListener('load', revealOnScroll);

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// ============================================
// SMOOTH SCROLLING FOR ALL ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for navbar height

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// DYNAMIC TYPING EFFECT (Optional Enhancement)
// ============================================
const heroSubtitle = document.querySelector('.hero-subtitle');
const subtitleText = heroSubtitle.textContent;
let charIndex = 0;

function typeWriter() {
    if (charIndex < subtitleText.length) {
        heroSubtitle.textContent = subtitleText.slice(0, charIndex + 1);
        charIndex++;
        setTimeout(typeWriter, 30);
    }
}

// Uncomment to enable typing effect
// heroSubtitle.textContent = '';
// setTimeout(typeWriter, 500);

// ============================================
// PARALLAX EFFECT FOR GRADIENT ORBS
// ============================================
const orbs = document.querySelectorAll('.gradient-orb');

window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;

        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ============================================
// SKILL TAG INTERACTIONS
// ============================================
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ============================================
// TIMELINE ITEM ANIMATIONS
// ============================================
const timelineItems = document.querySelectorAll('.timeline-item');

const animateTimeline = () => {
    timelineItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - 100) {
            setTimeout(() => {
                item.classList.add('active');
            }, index * 100);
        }
    });
};

window.addEventListener('scroll', animateTimeline);
window.addEventListener('load', animateTimeline);

// ============================================
// HIGHLIGHT CARDS STAGGER ANIMATION
// ============================================
const highlightCards = document.querySelectorAll('.highlight-card');

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

highlightCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// ============================================
// STATS COUNTER ANIMATION
// ============================================
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const animateStats = () => {
    if (statsAnimated) return;

    const heroSection = document.getElementById('hero');
    const heroBottom = heroSection.offsetTop + heroSection.clientHeight;

    if (window.scrollY < heroBottom) {
        statsAnimated = true;

        statNumbers.forEach(stat => {
            const finalValue = stat.textContent.trim();
            const isPlus = finalValue.includes('+');
            const numericValue = parseInt(finalValue.replace(/\D/g, ''));

            let currentValue = 0;
            const increment = numericValue / 50;
            const duration = 1500;
            const stepTime = duration / 50;

            const counter = setInterval(() => {
                currentValue += increment;

                if (currentValue >= numericValue) {
                    stat.textContent = finalValue;
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(currentValue) + (isPlus ? '+' : '');
                }
            }, stepTime);
        });
    }
};

window.addEventListener('load', animateStats);

// ============================================
// CONTACT FORM VALIDATION (if form is added)
// ============================================
// Placeholder for future contact form functionality
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Use debounced scroll for better performance
const debouncedReveal = debounce(revealOnScroll);
window.addEventListener('scroll', debouncedReveal);

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================
// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Focus trap for mobile menu
const focusableElements = navMenu.querySelectorAll('a, button');
const firstFocusable = focusableElements[0];
const lastFocusable = focusableElements[focusableElements.length - 1];

navMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && navMenu.classList.contains('active')) {
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    }
});

// ============================================
// PRELOADER (Optional)
// ============================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger initial animations
    setTimeout(() => {
        revealOnScroll();
        animateTimeline();
    }, 100);
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c👋 Welcome to Graham Vriend\'s Portfolio!', 'color: #4a90e2; font-size: 16px; font-weight: bold;');
console.log('%cInterested in the code? Check out the repository!', 'color: #9d5ed9; font-size: 12px;');
