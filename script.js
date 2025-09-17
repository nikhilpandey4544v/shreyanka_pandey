// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Timeline Interaction
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        timelineItems.forEach(i => i.classList.remove('active'));
        // Add active class to clicked item
        item.classList.add('active');
    });
});

// Flip Card Function
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA Button Action
const ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

// Team Selection Function
function selectTeam(card) {
    // Remove selected class from all cards
    document.querySelectorAll('.team-card-landscape').forEach(c => {
        c.classList.remove('selected');
    });
    // Add selected class to clicked card
    card.classList.add('selected');
    
    // Animate rating bars
    const ratingFill = card.querySelector('.rating-fill');
    const currentWidth = ratingFill.style.width;
    ratingFill.style.width = '0%';
    setTimeout(() => {
        ratingFill.style.width = currentWidth;
    }, 100);
}

// Add scroll effect to timeline items and team cards
window.addEventListener('scroll', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const teamCards = document.querySelectorAll('.team-card-landscape');
    
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }
    });
    
    // Animate team cards on scroll
    teamCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
});

// Initialize team cards animation
document.addEventListener('DOMContentLoaded', () => {
    const teamCards = document.querySelectorAll('.team-card-landscape');
    teamCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
    });
});