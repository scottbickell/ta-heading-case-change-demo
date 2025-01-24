// title-case.js
function applyTitleCase() {
    document.querySelectorAll('h2').forEach(h2 => {
        const excludedWords = ['a', 'an', 'the', 'in', 'on', 'at', 'for', 'to', 'of', 'with', 'by'];
        
        let text = h2.textContent.toLowerCase();
        
        // Handle special cases first
        text = text.replace(/award-winning/gi, 'Award-Winning');
        
        // Split into words and apply title case rules
        text = text.split(' ').map((word, index, array) => {
            // Always capitalize first and last word
            if (index === 0 || index === array.length - 1) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
            // Don't capitalize excluded words
            if (excludedWords.includes(word)) {
                return word;
            }
            // Capitalize other words
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
        
        h2.textContent = text;
    });
}