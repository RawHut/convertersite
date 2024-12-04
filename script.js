// Show Modal
function showModal(feature) {
    document.getElementById(`${feature}-modal`).style.display = "block";
}

// Close Modal
function closeModal(feature) {
    document.getElementById(`${feature}-modal`).style.display = "none";
}

// Close modals when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
};
