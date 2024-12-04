// Function to show the description for the selected preset
function showPresetDescription() {
    var presetDropdown = document.getElementById('preset-dropdown');
    var preset = presetDropdown.value;
    var description = document.getElementById('preset-description');

    if (preset === "veryslow") {
        description.innerHTML = "Best Audio Quality (veryslow):<br>This preset provides the best audio quality with the slowest encoding time. The file size will be smaller and the quality will be top-notch, but the conversion will be slow.";
    } else if (preset === "slow") {
        description.innerHTML = "High Quality (slow):<br>This preset is still focused on high quality but with a faster encoding time than 'veryslow'. It provides excellent audio quality, though encoding will be slower than other options.";
    } else if (preset === "medium") {
        description.innerHTML = "Balanced (medium):<br>This is the default preset, providing a good balance between encoding speed and audio quality. It’s suitable for most scenarios where you need a fair balance between file size and quality.";
    } else if (preset === "fast") {
        description.innerHTML = "Faster Conversion (fast):<br>This preset sacrifices some quality for faster encoding times. The result will be faster, but the audio quality may suffer slightly.";
    } else if (preset === "faster") {
        description.innerHTML = "Very Fast Conversion (faster):<br>This preset is geared towards ultra-fast encoding. It’s suitable when speed is the top priority, but the quality will noticeably decrease.";
    } else if (preset === "ultrafast") {
        description.innerHTML = "Fast Conversion (ultrafast):<br>This preset will encode the audio as quickly as possible, but with significant quality loss. Use this option when encoding speed is a priority over quality.";
    } else {
        description.innerHTML = "Please select a speed option from the dropdown.";
    }
}
