const animationLog = {
    info: (...args) => console.info('[Animations]', ...args),
    warn: (...args) => console.warn('[Animations]', ...args),
    error: (...args) => console.error('[Animations]', ...args)
};

const animationState = {
    scrollTrigger: false
};

function setupGsapPlugins() {
    if (typeof window === 'undefined' || typeof window.gsap === 'undefined') {
        animationLog.error('GSAP library not found. Animations disabled.');
        return;
    }

    if (typeof window.ScrollTrigger === 'undefined') {
        animationLog.warn('ScrollTrigger plugin unavailable. Running without scroll-based effects.');
        return;
    }

    try {
        gsap.registerPlugin(ScrollTrigger);
        animationState.scrollTrigger = true;
        animationLog.info('ScrollTrigger registered successfully.');
    } catch (error) {
        animationLog.error('Failed to register ScrollTrigger.', error);
    }
}

setupGsapPlugins();

/**
 * Base inclusions per sponsorship type (same for all cities,
 * based on Deliverables Table in deck).
 */
const baseInclusions = {
    'Standee': [
        'Standee placement in venue lobby',
        'High-traffic lobby visibility (pre & post show)',
        '2 complimentary tickets'
    ],
    'Standee Pro': [
        'Standee placement in lobby (premium spot)',
        'Pamphlet distribution to attendees (where permitted)',
        '2 complimentary tickets'
    ],
    'Projector Screen': [
        'Logo on projector screen pre & post show',
        'Brand showcased alongside event visuals',
        '4 complimentary tickets'
    ],
    'Wristband': [
        'Branded wristbands for all attendees',
        'Repeated exposure throughout the event',
        '6 complimentary tickets'
    ],
    'Title/Tour Sponsorship': [
        'Title sponsor presence across all tour venues',
        'Standee placement in lobby at every venue',
        'Stage announcements at all shows',
        'Complimentary tickets per city',
        'Instagram post + story on Millennial Events',
        'Brand feature in pre/post-show email (where applicable)',
        'Dedicated lobby table space for product demos'
    ]
};

/**
 * City-wise pricing table – EXACT values from the deck.
 */
const pricingData = {
    'Washington DC': {
        'Standee': { price: '$750', inclusions: baseInclusions['Standee'] },
        'Standee Pro': { price: '$1,350', inclusions: baseInclusions['Standee Pro'] },
        'Projector Screen': { price: '$1,350', inclusions: baseInclusions['Projector Screen'] },
        'Wristband': { price: '$3,750', inclusions: baseInclusions['Wristband'] },
        'Title/Tour Sponsorship': { price: '$4,000', inclusions: baseInclusions['Title/Tour Sponsorship'] }
    },
    'Boston': {
        'Standee': { price: '$850', inclusions: baseInclusions['Standee'] },
        'Standee Pro': { price: '$1,400', inclusions: baseInclusions['Standee Pro'] },
        'Projector Screen': { price: '$1,400', inclusions: baseInclusions['Projector Screen'] },
        'Wristband': { price: '$4,250', inclusions: baseInclusions['Wristband'] },
        'Title/Tour Sponsorship': { price: '$4,700', inclusions: baseInclusions['Title/Tour Sponsorship'] }
    },
    'Atlanta': {
        'Standee': { price: '$550', inclusions: baseInclusions['Standee'] },
        'Standee Pro': { price: '$900', inclusions: baseInclusions['Standee Pro'] },
        'Projector Screen': { price: '$900', inclusions: baseInclusions['Projector Screen'] },
        'Wristband': { price: '$2,625', inclusions: baseInclusions['Wristband'] },
        'Title/Tour Sponsorship': { price: '$3,000', inclusions: baseInclusions['Title/Tour Sponsorship'] }
    },
    'Montreal': {
        'Standee': { price: '$600', inclusions: baseInclusions['Standee'] },
        'Standee Pro': { price: '$1,000', inclusions: baseInclusions['Standee Pro'] },
        'Projector Screen': { price: '$1,000', inclusions: baseInclusions['Projector Screen'] },
        'Wristband': { price: '$3,000', inclusions: baseInclusions['Wristband'] },
        'Title/Tour Sponsorship': { price: '$3,300', inclusions: baseInclusions['Title/Tour Sponsorship'] }
    },
    'Toronto': {
        'Standee': { price: '$1,000', inclusions: baseInclusions['Standee'] },
        'Standee Pro': { price: '$1,650', inclusions: baseInclusions['Standee Pro'] },
        'Projector Screen': { price: '$1,650', inclusions: baseInclusions['Projector Screen'] },
        'Wristband': { price: '$5,000', inclusions: baseInclusions['Wristband'] },
        'Title/Tour Sponsorship': { price: '$7,500', inclusions: baseInclusions['Title/Tour Sponsorship'] }
    },
    'Vancouver': {
        'Standee': { price: '$700', inclusions: baseInclusions['Standee'] },
        'Standee Pro': { price: '$1,150', inclusions: baseInclusions['Standee Pro'] },
        'Projector Screen': { price: '$1,150', inclusions: baseInclusions['Projector Screen'] },
        'Wristband': { price: '$3,000', inclusions: baseInclusions['Wristband'] },
        'Title/Tour Sponsorship': { price: '$4,000', inclusions: baseInclusions['Title/Tour Sponsorship'] }
    },
    'Los Angeles': {
        'Standee': { price: '$750', inclusions: baseInclusions['Standee'] },
        'Standee Pro': { price: '$1,250', inclusions: baseInclusions['Standee Pro'] },
        'Projector Screen': { price: '$1,250', inclusions: baseInclusions['Projector Screen'] },
        'Wristband': { price: '$3,500', inclusions: baseInclusions['Wristband'] },
        'Title/Tour Sponsorship': { price: '$4,000', inclusions: baseInclusions['Title/Tour Sponsorship'] }
    },
    'San Jose': {
        'Standee': { price: '$1,000', inclusions: baseInclusions['Standee'] },
        'Standee Pro': { price: '$1,650', inclusions: baseInclusions['Standee Pro'] },
        'Projector Screen': { price: '$1,650', inclusions: baseInclusions['Projector Screen'] },
        'Wristband': { price: '$4,500', inclusions: baseInclusions['Wristband'] },
        'Title/Tour Sponsorship': { price: '$5,000', inclusions: baseInclusions['Title/Tour Sponsorship'] }
    },
    'Seattle': {
        'Standee': { price: '$1,000', inclusions: baseInclusions['Standee'] },
        'Standee Pro': { price: '$1,650', inclusions: baseInclusions['Standee Pro'] },
        'Projector Screen': { price: '$1,650', inclusions: baseInclusions['Projector Screen'] },
        'Wristband': { price: '$3,500', inclusions: baseInclusions['Wristband'] },
        'Title/Tour Sponsorship': { price: '$4,000', inclusions: baseInclusions['Title/Tour Sponsorship'] }
    },
    'Chicago': {
        'Standee': { price: '$950', inclusions: baseInclusions['Standee'] },
        'Standee Pro': { price: '$1,550', inclusions: baseInclusions['Standee Pro'] },
        'Projector Screen': { price: '$1,550', inclusions: baseInclusions['Projector Screen'] },
        'Wristband': { price: '$3,500', inclusions: baseInclusions['Wristband'] },
        'Title/Tour Sponsorship': { price: '$4,500', inclusions: baseInclusions['Title/Tour Sponsorship'] }
    },
    'New York': {
        'Standee': { price: '$1,500', inclusions: baseInclusions['Standee'] },
        'Standee Pro': { price: '$2,500', inclusions: baseInclusions['Standee Pro'] },
        'Projector Screen': { price: '$2,500', inclusions: baseInclusions['Projector Screen'] },
        'Wristband': { price: '$10,000', inclusions: baseInclusions['Wristband'] },
        'Title/Tour Sponsorship': { price: '$12,000', inclusions: baseInclusions['Title/Tour Sponsorship'] }
    },
    'Dallas': {
        'Standee': { price: '$1,000', inclusions: baseInclusions['Standee'] },
        'Standee Pro': { price: '$1,650', inclusions: baseInclusions['Standee Pro'] },
        'Projector Screen': { price: '$1,650', inclusions: baseInclusions['Projector Screen'] },
        'Wristband': { price: '$4,000', inclusions: baseInclusions['Wristband'] },
        'Title/Tour Sponsorship': { price: '$4,500', inclusions: baseInclusions['Title/Tour Sponsorship'] }
    }
};

const venueCapacities = {
    'Washington DC': 1500,
    'Boston': 1700,
    'Atlanta': 1050,
    'Montreal': 1165,
    'Toronto': 3172,
    'Vancouver': 1260,
    'Los Angeles': 1453,
    'San Jose': 2677,
    'Seattle': 2130,
    'Chicago': 1852,
    'New York': 5600,
    'Dallas': 2386
};

function initAnimations() {
    if (typeof gsap === 'undefined') {
        animationLog.error('GSAP is not available on the window. Skipping animations.');
        return;
    }

    const heroTimeline = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.9 }
    });

    heroTimeline
        .from('.nav-container', { y: -40, opacity: 0, duration: 0.6, ease: 'power2.out' })
        .from('.hero-badge', { y: 24, opacity: 0 }, '-=0.3')
        .from('.hero-heading', { y: 48, opacity: 0 }, '-=0.2')
        .from('.hero-text', { y: 24, opacity: 0 }, '-=0.4')
        .from('.hero-buttons .btn-primary', { y: 16, opacity: 0 }, '-=0.4')
        .from('.hero-buttons .btn-secondary', { y: 16, opacity: 0 }, '-=0.35')
        .from('.hero-form-card', { x: 80, opacity: 0 }, '-=0.5');

    heroTimeline.from('.hero-form-card .form-input, .hero-form-card .form-textarea, .hero-form-card button', {
        opacity: 0,
        y: 12,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out'
    }, '-=0.4');

    if (!animationState.scrollTrigger) {
        animationLog.warn('ScrollTrigger unavailable. Hero animations ran; scroll-based animations skipped.');
        return;
    }

    const fadeUpSections = ['#about', '#audience', '#packages', '#contact'];
    fadeUpSections.forEach((selector) => {
        gsap.from(selector, {
            opacity: 0,
            y: 80,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: selector,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    gsap.set('.stat-card', { opacity: 0, rotateY: -90, transformPerspective: 800 });
    ScrollTrigger.batch('.stat-card', {
        start: 'top 85%',
        once: true,
        onEnter: (batch) => {
            gsap.to(batch, {
                opacity: 1,
                rotateY: 0,
                duration: 0.8,
                ease: 'power2.out',
                stagger: 0.15
            });
        }
    });

    gsap.set('.benefit-card', { opacity: 0, scale: 0.8, rotateX: 45, transformPerspective: 800 });
    ScrollTrigger.batch('.benefit-card', {
        start: 'top 85%',
        once: true,
        onEnter: (batch) => {
            gsap.to(batch, {
                opacity: 1,
                scale: 1,
                rotateX: 0,
                duration: 0.7,
                ease: 'back.out(1.5)',
                stagger: 0.12
            });
        }
    });

    gsap.set('.packages-card', { opacity: 0, y: 50 });
    ScrollTrigger.create({
        trigger: '.packages-card',
        start: 'top 80%',
        once: true,
        onEnter: (self) => {
            gsap.to('.packages-card', {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power3.out',
                onComplete: () => self.kill()
            });
        }
    });

    animationLog.info('Animations initialised with ScrollTrigger effects.');
}

function handlePopupSubmit(e) {
    e.preventDefault();
    const popup = document.getElementById('popup-overlay');
    popup.classList.add('hidden');

    setTimeout(() => {
        document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
    }, 300);
}

function handleFormSubmit(e) {
    e.preventDefault();
    alert('Thank you! We will contact you within 24 hours.');
    e.target.reset();
}

/**
 * UPDATED: uses city + sponsorship type to look up price.
 */
function updatePricing() {
    const citySelector = document.getElementById('city-selector');
    const typeSelector = document.getElementById('type-selector');
    const pricingDisplay = document.getElementById('pricing-display');
    const pricingPlaceholder = document.getElementById('pricing-placeholder');
    const priceAmount = document.getElementById('price-amount');
    const inclusionsList = document.getElementById('inclusions-list');

    if (!citySelector || !typeSelector || !pricingDisplay || !pricingPlaceholder || !priceAmount || !inclusionsList) {
        console.warn('[Pricing] Missing DOM references; cannot update pricing widget.');
        return;
    }

    const selectedCity = citySelector.value;
    const selectedType = typeSelector.value;

    if (!selectedCity || !selectedType) {
        pricingDisplay.style.display = 'none';
        pricingPlaceholder.style.display = 'block';
        return;
    }

    const cityData = pricingData[selectedCity];

    if (!cityData) {
        console.warn('[Pricing] No data configured for city:', selectedCity);
        pricingDisplay.style.display = 'none';
        pricingPlaceholder.style.display = 'block';
        return;
    }

    const data = cityData[selectedType];

    if (!data) {
        console.warn('[Pricing] No data configured for selection:', selectedCity, '/', selectedType);
        pricingDisplay.style.display = 'none';
        pricingPlaceholder.style.display = 'block';
        return;
    }

    priceAmount.textContent = data.price || 'TBD';

    inclusionsList.innerHTML = '';
    const cityCapacity = venueCapacities[selectedCity];

    if (cityCapacity) {
        const capacityLi = document.createElement('li');
        capacityLi.textContent = `Venue capacity: ${cityCapacity.toLocaleString()} seats`;
        inclusionsList.appendChild(capacityLi);
    }

    (data.inclusions || []).forEach(inclusion => {
        const li = document.createElement('li');
        li.textContent = inclusion;
        inclusionsList.appendChild(li);
    });

    pricingDisplay.style.display = 'flex';
    pricingPlaceholder.style.display = 'none';
}

function scrollToPackages() {
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    initAnimations();

    const popupForm = document.getElementById('popup-form');
    popupForm.addEventListener('submit', handlePopupSubmit);

    const heroForm = document.getElementById('hero-form');
    if (heroForm) {
        heroForm.addEventListener('submit', handleFormSubmit);
    }

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleFormSubmit);

    const citySelector = document.getElementById('city-selector');
    const typeSelector = document.getElementById('type-selector');

    citySelector.addEventListener('change', updatePricing);
    typeSelector.addEventListener('change', updatePricing);

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
