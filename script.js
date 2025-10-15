// JavaScript for enhanced functionality (optional)
document.addEventListener('DOMContentLoaded', function() {
    // Add any interactive functionality if needed
    console.log('Video list page loaded successfully');
    
    // Example: Add click event to video cards
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent click action if it's on an actual link or button
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                return;
            }
            
            // Add a visual effect when card is clicked
            this.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});