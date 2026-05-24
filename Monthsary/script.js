document.addEventListener('DOMContentLoaded', () => {
    const revealBtn = document.getElementById('revealBtn');
    const loveLetter = document.getElementById('loveLetter');
    const heartShowerBtn = document.getElementById('heartShowerBtn');

    // Feature 1: Smoothly reveal the hidden love note
    revealBtn.addEventListener('click', () => {
        loveLetter.classList.toggle('reveal');
        
        if (loveLetter.classList.contains('reveal')) {
            revealBtn.textContent = 'Close Letter';
            revealBtn.style.background = '#6c757d';
            revealBtn.style.boxShadow = 'none';
        } else {
            revealBtn.textContent = 'Click to Open My Heart';
            revealBtn.style.background = '#ff4d6d';
        }
    });

    // Feature 2: Floating heart shower animation
    heartShowerBtn.addEventListener('click', () => {
        // Create 25 bursts of hearts
        for (let i = 0; i < 25; i++) {
            setTimeout(createHeart, i * 80);
        }
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        
        // Pick a random heart icon variant
        const heartIcons = ['💖', '❤️', '💝', '💕', '🌸'];
        heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
        
        // Randomize spawn position across the width of the screen
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Assign a random horizontal drift value for the CSS animation keyframe
        const randomX = (Math.random() * 200 - 100) + 'px';
        heart.style.setProperty('--random-x', randomX);
        
        // Randomize size and speed slightly for a natural look
        const randomDuration = (Math.random() * 2 + 3) + 's';
        heart.style.animationDuration = randomDuration;
        
        document.body.appendChild(heart);
        
        // Clean up the element from DOM after animation completes
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
});