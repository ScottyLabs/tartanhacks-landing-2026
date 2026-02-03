// Injects themed prizes into the page, following the pattern from faq.js

const themedPrizes = [
    {
        name: "Hand-cut Tesserae",
        description: "Most significant innovation that does not use AI"
    },
    {
        name: "Polychrome Mosaic",
        description: "Most significant innovation that crosses at least two fields (i.e., healthcare, sustainability, finance, education, entertainment, agriculture, ecommerce, etc.)"
    },
    {
        name: "Digital Kiln",
        description: "Best tool to be used for creative/liberal arts purposes"
    },
    {
        name: "Community Mural",
        description: "Most significant product/business model introducing change that leads to significant societal impact"
    },
    {
        name: "Shattered Glass",
        description: "Most significant technological innovation that disrupts the status quo"
    },
    {
        name: "Emerald Tile",
        description: "Most significant innovation in sustainability"
    },
    {
        name: "Spiciest Meme",
        description: "Submit memes in the discord channel -- can be hackathon related, or not!"
    }
];

function initThemedPrizes() {
    const rootElement = document.getElementById("themed-prizes-content");
    if (!rootElement) return;

    for (let i = 0; i < themedPrizes.length; i++) {
        const prize = themedPrizes[i];
        const prizeElement = document.createElement("div");
        prizeElement.classList.add("themed-prize");
        prizeElement.innerHTML = `
            <div class="themed-prize-card">
                <div class="themed-prize-header">
                    <h4>${prize.name}</h4>
                    <button class="themed-prize-icon" onclick="togglePrize(${i})"><img src="./imgs/clear_+.png" alt="+" /></button>
                </div>
                <div class="themed-prize-description">
                    <p>${prize.description}</p>
                </div>
            </div>`;
        rootElement.appendChild(prizeElement);
    }
}

function togglePrize(index) {
    const prizeElement = document.getElementsByClassName("themed-prize")[index];
    const descriptionElement = prizeElement.getElementsByClassName("themed-prize-description")[0];
    const iconElement = prizeElement.getElementsByClassName("themed-prize-icon")[0];
    if (descriptionElement.style.display === "block") {
        descriptionElement.style.display = "none";
        iconElement.classList.remove("rotated");
    } else {
        descriptionElement.style.display = "block";
        iconElement.classList.add("rotated");
    }
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemedPrizes);
} else {
    initThemedPrizes();
}
