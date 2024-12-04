// Function to show the modal
function showModal(feature) {
    // Hide all modals first
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
    
    // Show the corresponding modal based on the feature clicked
    const modal = document.getElementById(`${feature}-modal`);
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal(feature) {
    const modal = document.getElementById(`${feature}-modal`);
    modal.style.display = 'none';
}

// Optional: Close modal when clicked outside of it
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}
