const facts = [
    {
        fact: "The Sun is over 300,000 times larger than Earth.",
        category: "Astronomy",
        source: "NASA"
    },
    {
        fact: "Venus is the hottest planet in our solar system.",
        category: "Planets",
        source: "ESA"
    },
    {
        fact: "A day on Venus is longer than a year on Venus.",
        category: "Planets",
        source: "NASA"
    },
    {
        fact: "There are more stars in the universe than grains of sand on all the Earth's beaches.",
        category: "Cosmology",
        source: "Scientific American"
    },
    {
        fact: "Jupiter has the shortest day of all the planets.",
        category: "Planets",
        source: "NASA"
    }
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('fact').textContent = randomFact.fact;
    document.getElementById('category').textContent = `Category: ${randomFact.category}`;
    document.getElementById('source').textContent = `Source: ${randomFact.source}`;
}

// Show a random fact on initial load
showRandomFact();
