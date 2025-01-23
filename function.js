const excludeWords = ["to", "the", "a", "and", "of", "in", "on", "at", "by", "for", "with", "but", "or", "nor"];

function applySentenceCase() {
    document.querySelectorAll(".sentence-case").forEach(h2 => {
        h2.innerHTML = h2.innerHTML
            .split(/(<span class="no-change">.*?<\/span>|\s+)/) // Preserve spaces & spans
            .map((word, index) => {
                if (word.startsWith('<span')) {
                    return word; // Keep words inside <span> unchanged
                }
                return word.toLowerCase().replace(/(^\w|\.\s*\w)/g, match => match.toUpperCase());
            })
            .join(""); // Reassemble text properly
    });
}

function applyTitleCase() {
    document.querySelectorAll(".title-case").forEach(h2 => {
        h2.innerHTML = h2.innerHTML
            .split(/(<span class="no-change">.*?<\/span>|\s+)/) // Preserve spaces & spans
            .map((word, index) => {
                if (word.startsWith('<span')) {
                    return word; // Keep words inside <span> unchanged
                }

                let lowerWord = word.toLowerCase().trim(); // Normalize for lookup

                return (index === 0 || !excludeWords.includes(lowerWord))
                    ? lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1)
                    : lowerWord; // Keep excluded words lowercase
            })
            .join(""); // Reassemble text properly
    });
}

// Apply formatting when the page loads
document.addEventListener("DOMContentLoaded", () => {
    applySentenceCase();
    applyTitleCase();
});