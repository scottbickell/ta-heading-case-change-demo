const excludeWords = ["to", "the", "a", "and", "of", "in", "on", "at", "by", "for", "with", "but", "or", "nor"];

// Add proper nouns here
const properNouns = {
    "javascript": "JavaScript",
    "html": "HTML",
    "css": "CSS",
    "google": "Google",
    "microsoft": "Microsoft",
    "amazon": "Amazon",
    "github": "GitHub"
};

function applyTitleCase() {
    document.querySelectorAll("h2.card-heading.title-case").forEach(h2 => { 
        let text = h2.textContent.toLowerCase();

        h2.textContent = text
            .split(" ") // Split words
            .map((word, index) => {
                // Check if the word is a proper noun
                if (properNouns[word]) {
                    return properNouns[word]; // Use proper capitalization
                }

                // Capitalize non-excluded words
                return (index === 0 || !excludeWords.includes(word)) 
                    ? word.split("-") // Handle hyphenated words
                        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
                        .join("-")
                    : word;
            })
            .join(" ");
    });
}

// Apply formatting when the page loads
document.addEventListener("DOMContentLoaded", () => {
    applyTitleCase();
});