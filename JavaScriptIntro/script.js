
// Part 1: Variables + Conditionals

let favoriteDrink = "coffee"; // try changing to "tea"

if (favoriteDrink === "coffee") {
    document.getElementById("coffee-result").textContent =
        "You are powered by endless cups of coffee! ☕";
} else {
    document.getElementById("coffee-result").textContent =
        "Tea works too... but coffee still rules! 🍵";
}


// Part 2: Functions

// Function 1: Show a random developer tip
function getRandomTip() {
    const tips = [
        "Don’t forget to take breaks 🧘",
        "Rubber duck debugging solves 80% of problems 🦆",
        "Git commit often, thank yourself later 💾",
        "Indentation saves lives 😅"
    ];
    const randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
}

// Function 2: Greet the developer
function greetDev(name) {
    return `Hello ${name}, welcome back to the code jungle! 🐒`;
}

// Hook button to show random tip
document.getElementById("joke-btn").addEventListener("click", () => {
    document.getElementById("joke").textContent = getRandomTip();
});


// Part 3: Loops


// Loop 1: Display daily struggles
const struggles = [
    "Debugging for hours 🐞",
    "Stack Overflow searches 🔍",
    "Late night coding 🌙",
    "Endless caffeine intake ☕"
];

const strugglesList = document.getElementById("struggles-list");
for (let i = 0; i < struggles.length; i++) {
    const li = document.createElement("li");
    li.textContent = struggles[i];
    strugglesList.appendChild(li);
}

// Loop 2: Count bugs fixed today
let bugsFixed = 3;
for (let i = 1; i <= bugsFixed; i++) {
    console.log(`Bug #${i} fixed! 🎉`);
}


// Part 4: DOM Interactions


// Example 1: Change the page title style
document.getElementById("main-title").style.color = "darkgreen";

// Example 2: Dynamically add a footer message
const footer = document.querySelector("footer");
const msg = document.createElement("p");
msg.textContent = greetDev("Gerald");
footer.appendChild(msg);

// Example 3: Toggle background on button click
document.getElementById("joke-btn").addEventListener("dblclick", () => {
    document.body.style.background =
        document.body.style.background === "lightyellow"
            ? "#f9f9f9"
            : "lightyellow";
});
