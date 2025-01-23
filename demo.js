let isTitleCase = false; // Toggle state

const excludeWords = ["to", "the", "a", "and", "of", "in", "on", "at", "by", "for", "with", "but", "or", "nor"];

// Proper nouns that should always be capitalized correctly
const properNouns = {
    "javascript": "JavaScript",
    "html": "HTML",
    "css": "CSS",
    "google": "Google",
    "microsoft": "Microsoft",
    "amazon": "Amazon",
    "github": "GitHub"
};

function applySentenceCase() {
    document.querySelectorAll("h2").forEach(h2 => {
        let text = h2.textContent.toLowerCase();
        h2.textContent = text.replace(/(^\w|\.\s*\w)/g, match => match.toUpperCase());
    });
}

function applyTitleCase() {
    document.querySelectorAll("h2").forEach(h2 => {
        let text = h2.textContent.toLowerCase();

        h2.textContent = text
            .split(" ") // Split words
            .map((word, index) => {
                // Check if the word is in the properNouns dictionary
                if (properNouns[word]) {
                    return properNouns[word]; // Use correct capitalization
                }

                // Apply title case rules
                return (index === 0 || !excludeWords.includes(word)) 
                    ? word.split("-") // Handle hyphenated words
                        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
                        .join("-")
                    : word;
            })
            .join(" ");
    });
}

function toggleCase() {
    if (isTitleCase) {
        applySentenceCase();
    } else {
        applyTitleCase();
    }
    isTitleCase = !isTitleCase; // Toggle state
}

// Ensure Sentence Case is applied on page load
document.addEventListener("DOMContentLoaded", applySentenceCase);

document.getElementById("toggleCaseBtn").addEventListener("click", toggleCase);