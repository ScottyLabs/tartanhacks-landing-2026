// Injects themed and sponsor prizes into the page, following the pattern from faq.js

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
        description: "Most significant technological innovation that disrupts the status quo."
    },
    {
        name: "Emerald Tile",
        description: "Most significant innovation in sustainability."
    },
    {
        name: "First Penguin",
        description: "Awarded to the team that took the biggest gamble while not meeting its goals… a prize for ‘glorious failure’."
    }
];

const sponsorPrizes = [
    {
        name: "AppLovin",
        description: "Build a fully playable, self-contained mobile browser game with a total bundle size under 15 KB.<br><br><strong>Prizes:</strong> 1st: $4000, 2nd: $3000, 3rd: $2000, Bonus: $500-$1000"
    },
    {
        name: "BNY",
        description: "TBD<br><br><strong>Prize:</strong> $2000"
    },
    {
        name: "Capital One",
        description: "Best financial hack<br><br><strong>Prize:</strong> $2000"
    },
    {
        name: "Conway",
        description: "Best AI for decision support<br><br><strong>Prizes:</strong> 1st: $1000, 2nd: $650, 3rd: $350"
    },
    {
        name: "CodeRabbit",
        description: "Best use of CodeRabbit<br><br><strong>Prize:</strong> TBD"
    },
    {
        name: "Dedalus: Best use of Dedalus API",
        description: "Awarded for the most innovative use of multi-modality in the Dedalus SDK (combining text, images, audio, and more).<br><br><strong>Prize:</strong> $500<br><br><strong>Bonus:</strong> $100 API credits to all TartanHacks participants on our site!"
    },
    {
        name: "Dedalus: Best use of tool calling",
        description: "Awarded for exceptional use of MCPs, local tools, or custom tool implementations in the Dedalus SDK.<br><br><strong>Prize:</strong> $500<br><br><strong>Bonus:</strong> $100 API credits to all TartanHacks participants on our site!"
    },
    {
        name: "Ripple",
        description: "Build an MVP that leverages the XRP Ledger's core features to solve a real-world problem.<br><br><strong>Prizes:</strong> 1st: $1000, 2nd: $500, 3rd: $250, Dev Feedback: $250"
    },
    {
        name: "Roboclub",
        description: "Best hardware hack<br><br><strong>Prize:</strong> Small Robotics Grant"
    },
    {
        name: "Visa",
        description: "Intelligent Budget Planner: Design a smart financial planning tool that helps users manage spending across categories including subscriptions, recurring expenses, and day‑to‑day purchases, while surfacing personalized insights and simple, actionable guidance.<br><br><strong>Prize:</strong> $2000 total"
    }
];

function renderPrizeList(prizes, containerId, prefix) {
    const rootElement = document.getElementById(containerId);
    if (!rootElement) return;

    rootElement.innerHTML = ''; // Clear existing

    for (let i = 0; i < prizes.length; i++) {
        const prize = prizes[i];
        const prizeElement = document.createElement("div");
        prizeElement.classList.add("themed-prize");
        prizeElement.innerHTML = `
            <div class="themed-prize-card" onclick="togglePrize('${prefix}', ${i})">
                <div class="themed-prize-header">
                    <h4>${prize.name}</h4>
                    <button class="themed-prize-icon" id="${prefix}-icon-${i}">
                        <img src="./imgs/clear_+.png" alt="+" />
                    </button>
                </div>
                <div class="themed-prize-description" id="${prefix}-desc-${i}">
                    <p>${prize.description}</p>
                </div>
            </div>`;
        rootElement.appendChild(prizeElement);
    }
}

function initPrizes() {
    renderPrizeList(themedPrizes, "themed-prizes-content", "themed");
    renderPrizeList(sponsorPrizes, "sponsor-prizes-content", "sponsor");
}

function togglePrize(prefix, index) {
    const descriptionElement = document.getElementById(`${prefix}-desc-${index}`);
    const iconElement = document.getElementById(`${prefix}-icon-${index}`);

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
    document.addEventListener('DOMContentLoaded', initPrizes);
} else {
    initPrizes();
}
