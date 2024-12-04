// Function to show preset info modal based on the selected preset
function showPresetInfo() {
    var presetDropdown = document.getElementById('preset-dropdown');
    var preset = presetDropdown.value;

    // If the user selects 'none', do nothing
    if (preset === "none") {
        return;
    }

    var modal = document.getElementById('preset-info-modal');
    var title = document.getElementById('preset-info-title');
    var description = document.getElementById('preset-info-description');

    // Set the title and description based on the selected preset
    if (preset === "best-quality") {
        title.textContent = "Best Audio Quality";
        description.textContent = "Choose this option for the highest audio fidelity. Ideal for audiophiles, but slow in conversion speed.";
    } else if (preset === "fast-conversion") {
        title.textContent = "Fast Conversion";
        description.textContent = "Choose this option for fast conversions. Provides a good balance between speed and quality.";
    } else if (preset === "batch-conversion") {
        title.textContent = "Batch Conversion";
        description.textContent = "Choose this option to convert hundreds of files simultaneously, saving time and effort.";
    }

    modal.style.display = "block";
}

// Function to close the modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}
