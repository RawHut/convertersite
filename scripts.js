// Show the preset section when the feature box is clicked
function showPresetDetails() {
    document.getElementById('preset-section').style.display = 'block';
    document.getElementById('multiple-files-section').style.display = 'none'; // Hide multiple files section if preset is clicked
    document.getElementById('solo-dev-message').style.display = 'none'; // Hide solo dev message if preset is clicked
}

// Show the Multiple Files Conversion section
function showMultipleFilesDetails() {
    document.getElementById('multiple-files-section').style.display = 'block';
    document.getElementById('preset-section').style.display = 'none'; // Hide preset section if multiple files section is clicked
    document.getElementById('solo-dev-message').style.display = 'none'; // Hide solo dev message if multiple files section is clicked
}

// Show the Solo Dev message when clicked
function showSoloDevMessage() {
    document.getElementById('solo-dev-message').style.display = 'block';
    document.getElementById('preset-section').style.display = 'none'; // Hide preset section if solo dev message is clicked
    document.getElementById('multiple-files-section').style.display = 'none'; // Hide multiple files section if solo dev message is clicked
}

// Show the description of the selected preset
function showPresetDescription(preset) {
    let description = '';

    if (preset === 'veryslow') {
        description = "Best Audio Quality (veryslow):\n" +
                      "This preset provides the best audio quality with the slowest encoding time. " +
                      "The file size will be smaller and the quality will be top-notch, but the conversion will be slow.";
    } else if (preset === 'slow') {
        description = "High Quality (slow):\n" +
                      "This preset is still focused on high quality but with a faster encoding time than 'veryslow'. " +
                      "It provides excellent audio quality, though encoding will be slower than other options.";
    } else if (preset === 'medium') {
        description = "Balanced (medium):\n" +
                      "This is the default preset, providing a good balance between encoding speed and audio quality. " +
                      "It’s suitable for most scenarios where you need a fair balance between file size and quality.";
    } else if (preset === 'fast') {
        description = "Faster Conversion (fast):\n" +
                      "This preset sacrifices some quality for faster encoding times. The result will be faster, but the audio quality may suffer slightly.";
    } else if (preset === 'faster') {
        description = "Very Fast Conversion (faster):\n" +
                      "This preset is geared towards ultra-fast encoding. It’s suitable when speed is the top priority, but the quality will noticeably decrease.";
    } else if (preset === 'ultrafast') {
        description = "Fast Conversion (ultrafast):\n" +
                      "This preset will encode the audio as quickly as possible, but with significant quality loss. " +
                      "Use this option when encoding speed is a priority over quality.";
    } else {
        description = "Please select a speed option from the dropdown.";
    }

    document.getElementById('preset-description').textContent = description;
}

// Show the description of the multiple files conversion option
function showMultipleFilesDescription(option) {
    let description = '';

    if (option === 'multiple-files') {
        description = "Batch Conversion (More than 100 files):\n" +
                      "With this feature, you can convert over 100 audio files at once, streamlining your batch processing tasks. " +
                      "Whether you're converting a large collection of music or audio files for a project, this feature will save you significant time.";
    } else {
        description = "Please select a multiple files option.";
    }

    document.getElementById('multiple-files-description').textContent = description;
}
