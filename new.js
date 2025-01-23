// Words to exclude from title case capitalization
const excludedWords = new Set([
	'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'nor',
	'of', 'on', 'or', 'so', 'the', 'to', 'up', 'yet'
  ]);
  
  // List of common proper nouns (extend as needed)
  const properNouns = new Set([
	'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
	'January', 'February', 'March', 'April', 'May', 'June', 'July',
	'August', 'September', 'October', 'November', 'December',
	// Add more proper nouns as needed
  ]);
  
  function toTitleCase(text) {
	return text.toLowerCase().split(' ').map((word, index) => {
	  // Always capitalize first and last word
	  if (index === 0 || index === text.split(' ').length - 1) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	  }
	  // Check if word should be excluded
	  if (excludedWords.has(word.toLowerCase())) {
		return word.toLowerCase();
	  }
	  // Check if word is a proper noun
	  if (properNouns.has(word)) {
		return word;
	  }
	  return word.charAt(0).toUpperCase() + word.slice(1);
	}).join(' ');
  }
  
  function toSentenceCase(text) {
	const sentences = text.split(/([.!?]+\s+)/);
	return sentences.map(sentence => {
	  if (sentence.trim().length === 0) return sentence;
	  
	  return sentence.split(' ').map((word, index) => {
		// Check if word is a proper noun
		if (properNouns.has(word)) {
		  return word;
		}
		// Capitalize first word of sentence
		if (index === 0) {
		  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		}
		return word.toLowerCase();
	  }).join(' ');
	}).join('');
  }
  
  // Function to apply case transformation to Bootstrap cards
  function transformCardText(caseType) {
	const cards = document.querySelectorAll('.card');
	
	cards.forEach(card => {
	  // Transform heading
	  const heading = card.querySelector('h2');
	  if (heading) {
		heading.textContent = caseType === 'title' 
		  ? toTitleCase(heading.textContent)
		  : toSentenceCase(heading.textContent);
	  }
	  
	  // Transform paragraph
	  const paragraph = card.querySelector('p');
	  if (paragraph) {
		paragraph.textContent = caseType === 'title'
		  ? toTitleCase(paragraph.textContent)
		  : toSentenceCase(paragraph.textContent);
	  }
	});
  }
  
  // Example usage:
  // transformCardText('title'); // For title case
  // transformCardText('sentence'); // For sentence case