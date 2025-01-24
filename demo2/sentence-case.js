// sentence-case.js
function applySentenceCase() {
    document.querySelectorAll('h2').forEach(h2 => {
        let text = h2.textContent.toLowerCase();
        
        // Handle special cases first
        text = text.replace(/award-winning/gi, 'Award-winning');
        text = text.replace(/act/gi, 'ACT');
        text = text.replace(/mountaire/gi, 'Mountaire');
        
        // Capitalize first letter of sentences
        text = text.charAt(0).toUpperCase() + text.slice(1);
        
        // Handle proper nouns
        ['Boston', 'New York', 'Monday', 'January'].forEach(noun => {
            const regex = new RegExp(noun, 'gi');
            text = text.replace(regex, noun);
        });
        
        h2.textContent = text;
    });
}