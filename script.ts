/**
 * Toggles the visibility of a details section.
 * @param sectionId - The ID of the HTML element to toggle.
 */
function editButton(sectionId: string): void {
    // Attempt to get the element with the given ID
    const details = document.getElementById(sectionId);
    
    // Check if the element exists
    if (details) {
        // Toggle the display property between 'none' and 'block'
        // If it's currently 'none', change to 'block', otherwise change to 'none'
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    }
}