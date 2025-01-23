const excludeWords = ["to", "the", "a", "and", "of", "in", "on", "at", "by", "for", "with", "but", "or", "nor"];

function applySentenceCase() {
    document.querySelectorAll("h2.card-heading.sentence-case").forEach(h2 => { 
        let text = h2.textContent.toLowerCase();
        h2.textContent = text.replace(/(^\w|\.\s*\w)/g, match => match.toUpperCase());
    });
}

function applyTitleCase() {
    document.querySelectorAll("h2.card-heading.title-case").forEach(h2 => { 
        let text = h2.textContent.toLowerCase();

        h2.textContent = text
            .split(" ") // Split words
            .map((word, index) =>
                (index === 0 || !excludeWords.includes(word)) 
                    ? word.split("-") // Handle hyphenated words
                        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
                        .join("-")
                    : word
            )
            .join(" ");
    });
}

// Apply formatting when the page loads
document.addEventListener("DOMContentLoaded", () => {
    applySentenceCase();
    applyTitleCase();
});