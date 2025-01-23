// Add mutation observer to watch for class changes
const observer = new MutationObserver((mutations) => {
	mutations.forEach((mutation) => {
		if (mutation.type === "attributes" && mutation.attributeName === "class") {
			const element = mutation.target;
			if (element.classList.contains("title-case")) {
				element.textContent = toTitleCase(element.textContent);
			} else if (element.classList.contains("sentence-case")) {
				element.textContent = toSentenceCase(element.textContent);
			}
		}
	});
});

// Start observing all H2 elements
document.querySelectorAll("h2").forEach((h2) => {
	observer.observe(h2, { attributes: true });

	// Initial transform based on existing classes
	if (h2.classList.contains("title-case")) {
		h2.textContent = toTitleCase(h2.textContent);
	} else if (h2.classList.contains("sentence-case")) {
		h2.textContent = toSentenceCase(h2.textContent);
	}
});

// Helper functions remain the same as before
const excludedWords = new Set([
	"a",
	"an",
	"and",
	"as",
	"at",
	"but",
	"by",
	"for",
	"in",
	"nor",
	"of",
	"on",
	"or",
	"so",
	"the",
	"to",
	"up",
	"yet",
]);

const properNouns = new Set([
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
	"Mountaire"
]);

function toTitleCase(text) {
	return text
		.toLowerCase()
		.split(" ")
		.map((word, index) => {
			if (index === 0 || index === text.split(" ").length - 1) {
				return word.charAt(0).toUpperCase() + word.slice(1);
			}
			if (excludedWords.has(word.toLowerCase())) {
				return word.toLowerCase();
			}
			if (properNouns.has(word)) {
				return word;
			}
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(" ");
}

function toSentenceCase(text) {
	const sentences = text.split(/([.!?]+\s+)/);
	return sentences
		.map((sentence) => {
			if (sentence.trim().length === 0) return sentence;

			return sentence
				.split(" ")
				.map((word, index) => {
					if (properNouns.has(word)) {
						return word;
					}
					if (index === 0) {
						return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
					}
					return word.toLowerCase();
				})
				.join(" ");
		})
		.join("");
}
