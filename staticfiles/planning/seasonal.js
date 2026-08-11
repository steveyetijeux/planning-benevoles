(function () {
"use strict";

function initSeasonal() {
    var body = document.body;
    var layer = document.getElementById("season-layer");

    if (!body || !layer) {
        return;
    }

    layer.innerHTML = "";

    var mode = body.classList.contains("theme-noel") ? "noel" :
               body.classList.contains("theme-halloween") ? "halloween" :
               body.classList.contains("theme-paques") ? "paques" :
               body.classList.contains("theme-rentree") ? "rentree" :
               body.classList.contains("theme-saint-valentin") ? "saint-valentin" :
               body.classList.contains("theme-nouvel-an") ? "nouvel-an" :
               body.classList.contains("theme-ete") ? "ete" :
               body.classList.contains("theme-automne") ? "automne" :
               null;

    if (!mode) {
        return;
    }

    layer.setAttribute("data-event-mode", mode);
    layer.classList.add("season-active");

    function random(min, max) {
        return min + Math.random() * (max - min);
    }

    function createParticle(className) {
        var particle = document.createElement("div");
        particle.className = "season-particle " + className;

        particle.style.left = random(0, 100) + "%";
        particle.style.top = random(-15, 100) + "%";

        layer.appendChild(particle);

        return particle;
    }

    function createParticles(className, count) {
        var i;

        for (i = 0; i < count; i++) {
            var particle = createParticle(className);

            particle.style.animationDelay =
                random(-20, 0) + "s";
        }
    }

    function createNoel() {
        createParticles("snowflake", 70);
        createParticles("snowflake-large", 25);
        createParticles("christmas-star", 18);

        var lights = document.createElement("div");
        lights.className = "christmas-lights";

        for (var i = 0; i < 24; i++) {
            var light = document.createElement("span");

            light.style.left = (i * 4.4 + random(-1, 1)) + "%";
            light.style.animationDelay = random(-3, 0) + "s";

            lights.appendChild(light);
        }

        layer.appendChild(lights);

        var santa = document.createElement("div");
        santa.className = "santa-fly";

        santa.innerHTML =
            '<div class="santa-body">' +
                '<div class="santa-head">' +
                    '<div class="santa-hat"></div>' +
                    '<div class="santa-face"></div>' +
                '</div>' +
                '<div class="santa-coat"></div>' +
                '<div class="santa-arm santa-arm-left"></div>' +
                '<div class="santa-arm santa-arm-right"></div>' +
            '</div>' +
            '<div class="santa-sack"></div>';

        layer.appendChild(santa);
    }

    function createHalloween() {
        createParticles("bat", 12);
        createParticles("pumpkin", 10);
        createParticles("halloween-fog", 3);

        var moon = document.createElement("div");
        moon.className = "halloween-moon";
        layer.appendChild(moon);

        var ghost = document.createElement("div");
        ghost.className = "halloween-ghost";
        ghost.innerHTML = "👻";
        layer.appendChild(ghost);
    }

    function createPaques() {
        createParticles("easter-egg", 18);
        createParticles("easter-flower", 20);
        createParticles("easter-bunny", 5);
        createParticles("easter-petal", 25);
    }

    function createRentree() {
        createParticles("school-paper", 12);
        createParticles("school-pencil", 7);
        createParticles("school-star", 12);

        var confetti = document.createElement("div");
        confetti.className = "school-confetti";

        for (var i = 0; i < 30; i++) {
            var piece = document.createElement("span");

            piece.style.left = random(0, 100) + "%";
            piece.style.animationDelay = random(-8, 0) + "s";

            confetti.appendChild(piece);
        }

        layer.appendChild(confetti);
    }

    function createValentin() {
        createParticles("heart-particle", 35);
        createParticles("valentine-sparkle", 20);
    }

    function createNouvelAn() {
        createParticles("newyear-star", 45);

        for (var i = 0; i < 8; i++) {
            var firework = document.createElement("div");
            firework.className = "firework";

            firework.style.left = random(10, 90) + "%";
            firework.style.top = random(10, 55) + "%";
            firework.style.animationDelay = random(-4, 0) + "s";

            layer.appendChild(firework);
        }
    }

    function createEte() {
        var sun = document.createElement("div");
        sun.className = "summer-sun";
        layer.appendChild(sun);

        createParticles("summer-sparkle", 25);
    }

    function createAutomne() {
        createParticles("leaf-particle leaf-red", 18);
        createParticles("leaf-particle leaf-orange", 22);
        createParticles("leaf-particle leaf-yellow", 18);
        createParticles("leaf-particle leaf-brown", 14);
    }

    if (mode === "noel") {
        createNoel();
    }

    if (mode === "halloween") {
        createHalloween();
    }

    if (mode === "paques") {
        createPaques();
    }

    if (mode === "rentree") {
        createRentree();
    }

    if (mode === "saint-valentin") {
        createValentin();
    }

    if (mode === "nouvel-an") {
        createNouvelAn();
    }

    if (mode === "ete") {
        createEte();
    }

    if (mode === "automne") {
        createAutomne();
    }

    console.log("SEASONAL ACTIVE:", mode);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSeasonal);
} else {
    initSeasonal();
}

})();
