const lines = document.querySelectorAll(".rotator span");
let current = 0;

setInterval(function () {
    if (!lines.length) return;
    const old = lines[current];
    old.classList.remove("active");
    old.classList.add("out");
    setTimeout(function () { old.classList.remove("out"); }, 700);

    current = (current + 1) % lines.length;
    lines[current].classList.add("active");
}, 3500);

const navMenu = document.getElementById("navMenu");

function menu() {
    if (!navMenu) return;
    const isOpen = navMenu.classList.toggle("show");
    const icon = document.querySelector("#menuBtn i");
    if (icon) icon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}

if (navMenu) {
    navMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");
            const icon = document.querySelector("#menuBtn i");
            if (icon) icon.className = "fa-solid fa-bars";
        });
    });
}

const cards = document.querySelectorAll(".property-card");
const tabs = document.querySelectorAll(".categories .category");
const noResult = document.getElementById("noResult");

function setActiveTab(cat) {
    tabs.forEach(function (tab) {
        tab.classList.toggle("active-category", tab.dataset.cat === cat);
    });
}

function showCards(test) {
    let count = 0;
    cards.forEach(function (card) {
        const match = test(card);
        card.classList.toggle("hidden", !match);
        if (match) count++;
    });
    if (noResult) noResult.hidden = count > 0;
}

function filterCategory(cat) {
    setActiveTab(cat);
    showCards(function (card) {
        return cat === "all" || card.dataset.category === cat;
    });
}

// "A place for every plan" cards: filter the list, then scroll up to it
function showCategory(cat) {
    filterCategory(cat);
    document.getElementById("properties").scrollIntoView({ behavior: "smooth" });
}

function filterByPurpose(purpose) {
    setActiveTab("");
    showCards(function (card) {
        return card.dataset.purpose === purpose;
    });
}

const priceRanges = {
    "under-20": [0, 2000000],
    "20-50": [2000000, 5000000],
    "50-100": [5000000, 10000000],
    "above-100": [10000000, Infinity]
};

function searchProperties() {
    const purpose = document.getElementById("searchPurpose").value;
    const city = document.getElementById("searchCity").value.toLowerCase();
    const keyword = document.getElementById("searchKeyword").value.trim().toLowerCase();
    const type = document.getElementById("searchType").value;
    const area = document.getElementById("searchArea").value;
    const beds = document.getElementById("searchBeds").value;
    const price = document.getElementById("searchPrice").value;

    setActiveTab(type);

    showCards(function (card) {
        const cardBeds = parseInt(card.dataset.beds);
        const cardPrice = parseInt(card.dataset.price);

        const matchPurpose = purpose === "all" || card.dataset.purpose === purpose;
        const matchCity = city === "all" || card.dataset.city.toLowerCase() === city;
        const matchType = type === "all" || card.dataset.category === type;
        const matchKeyword = !keyword || card.textContent.toLowerCase().includes(keyword);
        const matchArea = area === "all" || card.querySelector(".property-details").textContent.includes(area);
        const matchBeds = beds === "all" || cardBeds === parseInt(beds) || (beds === "4" && cardBeds >= 4);
        const matchPrice = price === "all" || (cardPrice >= priceRanges[price][0] && cardPrice < priceRanges[price][1]);

        return matchPurpose && matchCity && matchType && matchKeyword && matchArea && matchBeds && matchPrice;
    });

    document.getElementById("properties").scrollIntoView({ behavior: "smooth" });
}

const keywordInput = document.getElementById("searchKeyword");
if (keywordInput) {
    keywordInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") searchProperties();
    });
}

document.querySelectorAll(".favorite").forEach(function (button) {
    button.addEventListener("click", function () {
        button.classList.toggle("selected");
        const icon = button.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-regular");
            icon.classList.toggle("fa-solid");
        }
    });
});

const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        e.target.reset();
        const formMsg = document.getElementById("formMsg");
        if (formMsg) formMsg.hidden = false;
    });
}