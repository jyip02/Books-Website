function showDescription(element) {
    // Find the description element within the hovered box
    const description = element.querySelector('.description');
    // Show the description
    if (description) {
        description.style.display = 'block';
    }
}

function hideDescription(element) {
    // Find the description element within the hovered box
    const description = element.querySelector('.description');
    // Hide the description
    if (description) {
        description.style.display = 'none';
    }
}