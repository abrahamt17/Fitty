// Select elements
const nav = document.querySelector('.nav');
const counters = Array.from(document.querySelectorAll('.number, .number-one, .number-two'));
const icons = Array.from(document.querySelectorAll('.img1'));
const down = document.querySelector('.down');
const up = document.querySelector('.up');

// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav__links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        if (icon) {
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// Sticky navigation
if (nav && document.querySelector('#section--1')) {
    const initialCoords = document.querySelector('#section--1').getBoundingClientRect();
    window.addEventListener('scroll', () => {
        if (window.scrollY < initialCoords.top) {
            nav.classList.remove('sticky');
            if (up) up.classList.remove('into');
            if (down) down.classList.remove('into');
        } else {
            nav.classList.add('sticky');
            if (up) up.classList.add('into');
            if (down) down.classList.add('into');
        }
    });
}

// Counters
const countersData = [
    { array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], text: 'Trainers' },
    { array: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 30, 34, 38, 42, 44, 46, 48, 50], text: 'Programs' },
    { array: [10, 40, 70, 110, 140, 170, 200, 230, 260, 290, 300, 340, 390, 440, 470, 500, 560, 590, 600, 750, 800, 900, 950, '1k'], text: 'Members' }
];

if (counters.length > 0) {
    countersData.forEach((counterData, index) => {
        if (counters[index]) {
            let idx = 1;
            setInterval(() => {
                const num = counterData.array[idx];
                counters[index].innerHTML = num;
                if (idx > counterData.array.length - 1) {
                    counters[index].innerHTML = counterData.array[counterData.array.length - 2] + "+ " + counterData.text;
                    counters[index].classList.add('stop');
                } else {
                    counters[index].classList.remove('stop');
                }
                idx++;
            }, 80);
        }
    });
}

// Icon reveal
const revealIcons = () => {
    const trigger = window.innerHeight / 5 * 4;
    icons.forEach(icon => {
        const iconCoords = icon.getBoundingClientRect().top;
        if (iconCoords < trigger) {
            icon.classList.add('show');
        } else {
            icon.classList.remove('show');
        }
    });
};

if (icons.length > 0) {
    revealIcons();
    window.addEventListener('scroll', revealIcons);
}

// Smooth scrolling
const sections = Array.from(document.querySelectorAll('section'));
window.addEventListener('scroll', () => {
    const currentSection = sections.find(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.getBoundingClientRect().height;
        return sectionTop - sectionHeight / 3 <= 0;
    });

    if (currentSection) {
        const id = currentSection.getAttribute('id');
        const navLink = document.querySelector(`nav a[href="#${id}"]`);
        if (navLink) {
            document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    }
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const targetSection = document.querySelector(href);
            if (targetSection) {
                const navHeight = nav ? nav.offsetHeight : 0;
                window.scrollTo({
                    top: targetSection.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// Loading Screen
// ============================================
window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    }
});

// ============================================
// Custom Cursor Effect
// ============================================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (cursor && cursorFollower) {
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // Smooth follower animation
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .box, .container, .nav__link');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
}

// ============================================
// Scroll Reveal Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards (detail-box containers)
document.querySelectorAll('.detail-box').forEach((box, index) => {
    const parent = box.closest('li');
    if (parent) {
        parent.style.opacity = '0';
        parent.style.transform = 'translateX(-30px)';
        parent.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        parent.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(parent);
    }
});

// Animate on scroll
observer.observe = new Proxy(observer.observe, {
    apply: function(target, thisArg, argumentsList) {
        const element = argumentsList[0];
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        }
        return target.apply(thisArg, argumentsList);
    }
});

// Observe boxes
document.querySelectorAll('.box').forEach((box, index) => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(50px) scale(0.9)';
    box.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    box.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(box);
});

// Update observer to handle animations
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = entry.target.classList.contains('box') 
                ? 'translateY(0) scale(1)' 
                : 'translateY(0) translateX(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.box, .detail-box').forEach(el => {
    scrollObserver.observe(el.closest('li') || el);
});

// ============================================
// Parallax Effect for Background Gradients
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const upGradient = document.querySelector('.up');
    const downGradient = document.querySelector('.down');
    
    if (upGradient) {
        upGradient.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    if (downGradient) {
        downGradient.style.transform = `translateY(${-scrolled * 0.2}px)`;
    }
});

// ============================================
// Smooth Number Counter Animation
// ============================================
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
};

// ============================================
// Enhanced Image Hover Effects
// ============================================
document.querySelectorAll('.image').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
    });
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ============================================
// Magnetic Effect for Buttons
// ============================================
document.querySelectorAll('.btn, .nav__link--btn').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0)';
    });
});

// ============================================
// Text Reveal Animation
// ============================================
const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const text = entry.target;
            text.style.animation = 'fadeInUp 0.8s ease forwards';
            textObserver.unobserve(text);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('h1, h2, h3, .page-2_tittle').forEach(heading => {
    heading.style.opacity = '0';
    heading.style.transform = 'translateY(30px)';
    textObserver.observe(heading);
});

// Add fadeInUp animation if not exists
if (!document.querySelector('#fadeInUpStyle')) {
    const style = document.createElement('style');
    style.id = 'fadeInUpStyle';
    style.textContent = `
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// FAQ Accordion
// ============================================
document.querySelectorAll('.faq__question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.closest('.faq__item');
        const isActive = item.classList.contains('active');
        
        // Close all other items
        document.querySelectorAll('.faq__item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active', !isActive);
    });
});

// ============================================
// Gallery Filter
// ============================================
const galleryFilterBtns = document.querySelectorAll('.gallery-filter__btn');
const galleryItems = document.querySelectorAll('.gallery__item');

galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        galleryFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter items
        const filter = btn.getAttribute('data-filter');
        galleryItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.5s ease';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ============================================
// Gallery Modal
// ============================================
const galleryModal = document.getElementById('gallery-modal');
const galleryModalImg = document.getElementById('gallery-modal-img');
const galleryModalCaption = document.getElementById('gallery-modal-caption');
const galleryModalClose = document.querySelector('.gallery-modal__close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const overlay = item.querySelector('.gallery__overlay');
        const title = overlay ? overlay.querySelector('h3').textContent : '';
        const desc = overlay ? overlay.querySelector('p').textContent : '';
        
        if (galleryModal && galleryModalImg) {
            galleryModalImg.src = img.src;
            galleryModalImg.alt = img.alt;
            if (galleryModalCaption) {
                galleryModalCaption.textContent = title + ' - ' + desc;
            }
            galleryModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

if (galleryModalClose) {
    galleryModalClose.addEventListener('click', () => {
        if (galleryModal) {
            galleryModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

if (galleryModal) {
    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            galleryModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// Contact Form Handling
// ============================================
const contactForm = document.querySelector('.contact__form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #e52525, #d400ff);
            color: white;
            padding: 3rem 4rem;
            border-radius: 20px;
            z-index: 10001;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        `;
        successMsg.innerHTML = `
            <h2 style="margin-bottom: 1rem; font-size: 2.4rem;">Message Sent!</h2>
            <p style="font-size: 1.6rem;">Thank you ${name}, we'll get back to you soon!</p>
        `;
        document.body.appendChild(successMsg);
        
        // Reset form
        contactForm.reset();
        
        // Remove message after 3 seconds
        setTimeout(() => {
            successMsg.style.opacity = '0';
            successMsg.style.transition = 'opacity 0.3s';
            setTimeout(() => successMsg.remove(), 300);
        }, 3000);
    });
}

// ============================================
// Animate Stats on About Page
// ============================================
const aboutStatsNumbers = document.querySelectorAll('.about-stats__number');
if (aboutStatsNumbers.length > 0) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
            }
        });
    }, { threshold: 0.5 });
    
    aboutStatsNumbers.forEach(num => {
        statsObserver.observe(num);
    });
}

// ============================================
// Pricing Card Hover Effects
// ============================================
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('pricing-card--featured')) {
            this.style.transform = 'translateY(0) scale(1)';
        } else {
            this.style.transform = 'scale(1.05)';
        }
    });
});

// ============================================
// Smooth Scroll for All Pages
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                window.scrollTo({
                    top: target.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        }
    });
});
