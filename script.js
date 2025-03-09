// Project section animations
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        // Add stagger effect
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in');
        
        // Hover effects
        card.addEventListener('mouseenter', () => {
            const techTags = card.querySelectorAll('.project-tech span');
            techTags.forEach((tag, i) => {
                tag.style.transitionDelay = `${i * 0.1}s`;
                tag.style.transform = 'translateY(-5px)';
            });
        });

        card.addEventListener('mouseleave', () => {
            const techTags = card.querySelectorAll('.project-tech span');
            techTags.forEach(tag => {
                tag.style.transitionDelay = '0s';
                tag.style.transform = 'translateY(0)';
            });
        });
    });
});
