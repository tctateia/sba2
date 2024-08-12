// JavaScript to create navigation links dynamically
const navbar = document.getElementById('navbar');
const links = [
    { name: "Final Fantasy X", url: "https://finalfantasy.fandom.com/wiki/Final_Fantasy_X" },
    { name: "Final Fantasy XIII", url: "https://finalfantasy.fandom.com/wiki/Final_Fantasy_XIII" },
    { name: "Final Fantasy VIII", url: "https://finalfantasy.fandom.com/wiki/Final_Fantasy_VIII" }
];

links.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.textContent = link.name;
    anchor.className = 'nav-link';
    navbar.appendChild(anchor);
});