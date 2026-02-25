const analyzeUrlBtn = document.getElementById("analyzeUrlBtn");
const analyzeImageBtn = document.getElementById("analyzeImageBtn");
const playlistUrlInput = document.getElementById("playlistUrl");
const imageUpload = document.getElementById("imageUpload");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const errorDiv = document.getElementById("error");
const artistName = document.getElementById("artistName");
const platformInfo = document.getElementById("platformInfo");

analyzeUrlBtn.addEventListener("click", analyzeUrl);
analyzeImageBtn.addEventListener("click", analyzeImage);

function showLoading() {
    loading.classList.remove("hidden");
    result.classList.add("hidden");
    errorDiv.classList.add("hidden");
}

function hideLoading() {
    loading.classList.add("hidden");
}

function showResult(artist, platform) {
    artistName.textContent = artist;
    platformInfo.textContent = `Platform detected: ${platform}`;
    result.classList.remove("hidden");
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");
}

async function analyzeUrl() {
    const url = playlistUrlInput.value.trim();

    if (!url) {
        showError("Please paste a playlist URL.");
        return;
    }

    showLoading();

    try {
        let platform = "Unknown";
        let artist = "Unknown Artist";

        if (url.includes("spotify.com")) {
            platform = "Spotify";
            artist = "Sample Spotify Artist"; // Replace with Spotify API call
        } 
        else if (url.includes("music.youtube.com")) {
            platform = "YouTube Music";
            artist = "Sample YouTube Artist"; // Replace with YouTube API call
        } 
        else {
            throw new Error("Unsupported platform.");
        }

        await simulateDelay();
        hideLoading();
        showResult(artist, platform);

    } catch (err) {
        hideLoading();
        showError(err.message);
    }
}

async function analyzeImage() {
    const file = imageUpload.files[0];

    if (!file) {
        showError("Please upload an image.");
        return;
    }

    showLoading();

    try {
        // Placeholder logic — integrate OCR or image recognition API here
        await simulateDelay();
        hideLoading();
        showResult("Sample Artist from Image", "Image Recognition");

    } catch (err) {
        hideLoading();
        showError("Could not analyze image.");
    }
}

function simulateDelay() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}
