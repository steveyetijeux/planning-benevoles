```javascript
/*
=========================================================
 PLANNING FOYER MDL
 ANIMATIONS SAISONNIÈRES — VERSION WOW
=========================================================
*/

(function () {
    "use strict";

    function initSeasonal() {

        var body = document.body;

        if (!body) {
            return;
        }

        /* Empêche une double initialisation */
        if (document.querySelector(".season-layer")) {
            return;
        }

        var layer = document.createElement("div");
        layer.className = "season-layer";
        body.appendChild(layer);

        console.log("🌟 SEASONAL WOW V3 ACTIVE 🌟");


        /* =====================================================
           OUTILS
        ===================================================== */

        function random(min, max) {
            return min + Math.random() * (max - min);
        }

        function randomInt(min, max) {
            return Math.floor(random(min, max + 1));
        }

        function setStyles(element, styles) {
            Object.keys(styles).forEach(function (key) {
                element.style[key] = styles[key];
            });
        }

        function createElement(className, parent) {

            var element = document.createElement("div");

            element.className =
                "season-particle " + className;

            (parent || layer).appendChild(element);

            return element;
        }


        /*
        ---------------------------------------------------------
        PARTICULES FLOTTANTES

        Chaque élément possède :
        - position différente
        - vitesse différente
        - délai différent
        - amplitude horizontale différente
        - rotation différente
        - échelle différente
        ---------------------------------------------------------
        */

        function createParticles(className, count, options) {

            options = options || {};

            var durationMin =
                options.durationMin || 8;

            var durationMax =
                options.durationMax || 18;

            var delayMax =
                options.delayMax || durationMax;

            for (var i = 0; i < count; i++) {

                var particle =
                    createElement(className);

                var startX =
                    random(0, 100);

                var drift =
                    random(
                        options.driftMin || -100,
                        options.driftMax || 100
                    );

                var rotation =
                    random(
                        options.rotationMin || -360,
                        options.rotationMax || 360
                    );

                var duration =
                    random(
                        durationMin,
                        durationMax
                    );

                var scale =
                    random(
                        options.scaleMin || 0.6,
                        options.scaleMax || 1.4
                    );

                var delay =
                    random(-delayMax, 0);

                var opacity =
                    random(
                        options.opacityMin || 0.35,
                        options.opacityMax || 1
                    );

                setStyles(particle, {

                    left: startX + "%",

                    "--drift":
                        drift + "px",

                    "--rotation":
                        rotation + "deg",

                    "--scale":
                        scale,

                    "--particle-opacity":
                        opacity,

                    animationDuration:
                        duration + "s",

                    animationDelay:
                        delay + "s"
                });
            }
        }


        /* =====================================================
           NOËL
        ===================================================== */

        if (body.classList.contains("theme-noel")) {

            /*
            -----------------------------------------------------
            CIEL NOCTURNE / AURA
            -----------------------------------------------------
            */

            var christmasGlow =
                createElement("christmas-glow");

            christmasGlow.style.animationDelay =
                random(-5, 0) + "s";


            /*
            -----------------------------------------------------
            NEIGE

            Beaucoup de flocons mais avec des trajectoires
            indépendantes.
            -----------------------------------------------------
            */

            createParticles(
                "snowflake snow-depth-1",
                35,
                {
                    durationMin: 11,
                    durationMax: 21,
                    driftMin: -180,
                    driftMax: 180,
                    scaleMin: 0.45,
                    scaleMax: 0.8,
                    opacityMin: 0.35,
                    opacityMax: 0.75
                }
            );

            createParticles(
                "snowflake snow-depth-2",
                28,
                {
                    durationMin: 8,
                    durationMax: 16,
                    driftMin: -240,
                    driftMax: 240,
                    scaleMin: 0.7,
                    scaleMax: 1.15,
                    opacityMin: 0.6,
                    opacityMax: 1
                }
            );

            createParticles(
                "snowflake snow-depth-3",
                12,
                {
                    durationMin: 6,
                    durationMax: 12,
                    driftMin: -300,
                    driftMax: 300,
                    scaleMin: 1,
                    scaleMax: 1.65,
                    opacityMin: 0.75,
                    opacityMax: 1
                }
            );


            /*
            -----------------------------------------------------
            ÉTOILES
            -----------------------------------------------------
            */

            createParticles(
                "star",
                28,
                {
                    durationMin: 2,
                    durationMax: 5,
                    driftMin: -20,
                    driftMax: 20,
                    scaleMin: 0.5,
                    scaleMax: 1.8,
                    opacityMin: 0.25,
                    opacityMax: 1
                }
            );


            /*
            -----------------------------------------------------
            GUIRLANDE
            -----------------------------------------------------
            */

            var garland =
                document.createElement("div");

            garland.className =
                "christmas-garland";

            body.appendChild(garland);

            var bulbColors = [
                "red",
                "gold",
                "green",
                "blue",
                "red",
                "gold",
                "green",
                "blue",
                "red",
                "gold",
                "green",
                "blue"
            ];

            bulbColors.forEach(function (color, index) {

                var bulb =
                    document.createElement("span");

                bulb.className =
                    "christmas-bulb " + color;

                bulb.style.animationDelay =
                    (-index * 0.15) + "s";

                garland.appendChild(bulb);
            });


            /*
            -----------------------------------------------------
            FLOCONS LUMINEUX
            -----------------------------------------------------
            */

            createParticles(
                "christmas-spark",
                20,
                {
                    durationMin: 3,
                    durationMax: 7,
                    driftMin: -140,
                    driftMax: 140,
                    scaleMin: 0.5,
                    scaleMax: 1.4
                }
            );


            /*
            -----------------------------------------------------
            PÈRE NOËL

            Construction CSS :
            tête + bonnet + barbe + corps + sac +
            traîneau + rennes.
            -----------------------------------------------------
            */

            function createSanta() {

                if (document.querySelector(".santa-flight")) {
                    return;
                }

                var santa =
                    document.createElement("div");

                santa.className =
                    "santa-flight";

                santa.innerHTML =

                    '<div class="santa-trail"></div>' +

                    '<div class="santa-sleigh-wow">' +

                        '<div class="sleigh-seat"></div>' +

                        '<div class="sleigh-runner-wow runner-one"></div>' +
                        '<div class="sleigh-runner-wow runner-two"></div>' +

                        '<div class="santa-body">' +
                            '<div class="santa-belt"></div>' +
                            '<div class="santa-buckle"></div>' +
                            '<div class="santa-arm"></div>' +
                            '<div class="santa-arm santa-arm-two"></div>' +
                            '<div class="santa-head">' +
                                '<div class="santa-face"></div>' +
                                '<div class="santa-beard"></div>' +
                                '<div class="santa-hat">' +
                                    '<div class="santa-hat-pom"></div>' +
                                '</div>' +
                                '<div class="santa-nose"></div>' +
                            '</div>' +
                        '</div>' +

                        '<div class="santa-gift gift-one"></div>' +
                        '<div class="santa-gift gift-two"></div>' +

                    '</div>' +

                    '<div class="reindeer-group">' +
                        '<div class="reindeer reindeer-one">' +
                            '<span class="reindeer-antler"></span>' +
                        '</div>' +
                        '<div class="reindeer reindeer-two">' +
                            '<span class="reindeer-antler"></span>' +
                        '</div>' +
                        '<div class="reindeer reindeer-three">' +
                            '<span class="reindeer-antler"></span>' +
                        '</div>' +
                    '</div>';

                body.appendChild(santa);

                setTimeout(function () {

                    if (santa.parentNode) {
                        santa.parentNode.removeChild(santa);
                    }

                }, 17000);
            }

            setTimeout(createSanta, 5000);

            setInterval(createSanta, 36000);
        }


        /* =====================================================
           RENTRÉE
        ===================================================== */

        if (body.classList.contains("theme-rentree")) {

            /*
            Cahier / feuilles
            */

            createParticles(
                "school-paper",
                13,
                {
                    durationMin: 9,
                    durationMax: 17,
                    driftMin: -260,
                    driftMax: 260,
                    rotationMin: -180,
                    rotationMax: 180,
                    scaleMin: 0.6,
                    scaleMax: 1.2
                }
            );

            /*
            Crayons
            */

            createParticles(
                "school-pencil",
                8,
                {
                    durationMin: 8,
                    durationMax: 15,
                    driftMin: -220,
                    driftMax: 220,
                    rotationMin: -500,
                    rotationMax: 500,
                    scaleMin: 0.7,
                    scaleMax: 1.2
                }
            );

            /*
            Petites étoiles / poussière
            */

            createParticles(
                "school-spark",
                20,
                {
                    durationMin: 4,
                    durationMax: 9,
                    driftMin: -180,
                    driftMax: 180,
                    scaleMin: 0.5,
                    scaleMax: 1.4
                }
            );

            /*
            Règles / traits décoratifs
            */

            for (var r = 0; r < 5; r++) {

                var line =
                    createElement("school-ruler");

                line.style.left =
                    random(0, 100) + "%";

                line.style.top =
                    random(15, 90) + "%";

                line.style.transform =
                    "rotate(" +
                    random(-25, 25) +
                    "deg)";
            }
        }


        /* =====================================================
           SAINT-VALENTIN
        ===================================================== */

        if (body.classList.contains("theme-saint-valentin")) {

            createParticles(
                "heart-particle heart-small",
                28,
                {
                    durationMin: 7,
                    durationMax: 14,
                    driftMin: -220,
                    driftMax: 220,
                    rotationMin: -180,
                    rotationMax: 180,
                    scaleMin: 0.5,
                    scaleMax: 1
                }
            );

            createParticles(
                "heart-particle heart-large",
                12,
                {
                    durationMin: 10,
                    durationMax: 19,
                    driftMin: -300,
                    driftMax: 300,
                    rotationMin: -240,
                    rotationMax: 240,
                    scaleMin: 0.8,
                    scaleMax: 1.5
                }
            );

            createParticles(
                "love-spark",
                18,
                {
                    durationMin: 3,
                    durationMax: 7,
                    driftMin: -120,
                    driftMax: 120
                }
            );
        }


        /* =====================================================
           PÂQUES
        ===================================================== */

        if (body.classList.contains("theme-paques")) {

            createParticles(
                "easter-egg",
                15,
                {
                    durationMin: 9,
                    durationMax: 17,
                    driftMin: -280,
                    driftMax: 280,
                    rotationMin: -240,
                    rotationMax: 240,
                    scaleMin: 0.6,
                    scaleMax: 1.35
                }
            );

            createParticles(
                "spring-flower",
                22,
                {
                    durationMin: 8,
                    durationMax: 16,
                    driftMin: -220,
                    driftMax: 220,
                    rotationMin: -360,
                    rotationMax: 360,
                    scaleMin: 0.5,
                    scaleMax: 1.3
                }
            );

            createParticles(
                "butterfly",
                7,
                {
                    durationMin: 11,
                    durationMax: 20,
                    driftMin: -350,
                    driftMax: 350,
                    rotationMin: -20,
                    rotationMax: 20,
                    scaleMin: 0.7,
                    scaleMax: 1.25
                }
            );

            createParticles(
                "spring-spark",
                18,
                {
                    durationMin: 4,
                    durationMax: 9,
                    driftMin: -160,
                    driftMax: 160
                }
            );
        }


        /* =====================================================
           HALLOWEEN
        ===================================================== */

        if (body.classList.contains("theme-halloween")) {

            var moon =
                document.createElement("div");

            moon.className =
                "halloween-moon";

            body.appendChild(moon);


            var fog =
                document.createElement("div");

            fog.className =
                "halloween-fog";

            body.appendChild(fog);


            var fogTwo =
                document.createElement("div");

            fogTwo.className =
                "halloween-fog fog-two";

            body.appendChild(fogTwo);


            createParticles(
                "bat",
                9,
                {
                    durationMin: 8,
                    durationMax: 16,
                    driftMin: -350,
                    driftMax: 350,
                    rotationMin: -30,
                    rotationMax: 30,
                    scaleMin: 0.6,
                    scaleMax: 1.25
                }
            );

            createParticles(
                "pumpkin",
                9,
                {
                    durationMin: 6,
                    durationMax: 13,
                    driftMin: -220,
                    driftMax: 220,
                    rotationMin: -90,
                    rotationMax: 90,
                    scaleMin: 0.6,
                    scaleMax: 1.2
                }
            );

            createParticles(
                "ghost",
                5,
                {
                    durationMin: 9,
                    durationMax: 17,
                    driftMin: -280,
                    driftMax: 280,
                    scaleMin: 0.6,
                    scaleMax: 1.2
                }
            );
        }


        /* =====================================================
           NOUVEL AN
        ===================================================== */

        if (body.classList.contains("theme-nouvel-an")) {

            createParticles(
                "newyear-star",
                55,
                {
                    durationMin: 2,
                    durationMax: 5,
                    driftMin: -40,
                    driftMax: 40,
                    scaleMin: 0.5,
                    scaleMax: 1.8,
                    opacityMin: 0.2,
                    opacityMax: 1
                }
            );


            function createFirework() {

                var firework =
                    document.createElement("div");

                firework.className =
                    "firework";

                firework.style.left =
                    random(12, 88) + "%";

                firework.style.top =
                    random(10, 52) + "%";

                firework.style.setProperty(
                    "--firework-scale",
                    random(0.7, 1.45)
                );

                firework.style.animationDelay =
                    random(0, 1.2) + "s";

                layer.appendChild(firework);

                setTimeout(function () {

                    if (firework.parentNode) {
                        firework.parentNode.removeChild(firework);
                    }

                }, 3600);
            }


            for (var f = 0; f < 7; f++) {

                setTimeout(
                    createFirework,
                    f * 650
                );
            }


            setInterval(
                createFirework,
                2800
            );
        }


        /* =====================================================
           ÉTÉ
        ===================================================== */

        if (body.classList.contains("theme-ete")) {

            var sun =
                document.createElement("div");

            sun.className =
                "sun";

            body.appendChild(sun);


            createParticles(
                "summer-spark",
                24,
                {
                    durationMin: 4,
                    durationMax: 10,
                    driftMin: -180,
                    driftMax: 180,
                    scaleMin: 0.4,
                    scaleMax: 1.2
                }
            );

            createParticles(
                "summer-bubble",
                15,
                {
                    durationMin: 8,
                    durationMax: 17,
                    driftMin: -240,
                    driftMax: 240,
                    scaleMin: 0.5,
                    scaleMax: 1.3
                }
            );

            createParticles(
                "summer-cloud",
                5,
                {
                    durationMin: 30,
                    durationMax: 50,
                    driftMin: -300,
                    driftMax: 300,
                    scaleMin: 0.8,
                    scaleMax: 1.5
                }
            );
        }


        /* =====================================================
           AUTOMNE
        ===================================================== */

        if (body.classList.contains("theme-automne")) {

            /*
            Plusieurs familles de feuilles.
            Chaque feuille possède une trajectoire différente.
            */

            createParticles(
                "leaf-particle leaf-orange",
                22,
                {
                    durationMin: 7,
                    durationMax: 15,
                    driftMin: -320,
                    driftMax: 320,
                    rotationMin: -720,
                    rotationMax: 720,
                    scaleMin: 0.55,
                    scaleMax: 1.25
                }
            );

            createParticles(
                "leaf-particle leaf-red",
                17,
                {
                    durationMin: 9,
                    durationMax: 18,
                    driftMin: -420,
                    driftMax: 420,
                    rotationMin: -900,
                    rotationMax: 900,
                    scaleMin: 0.6,
                    scaleMax: 1.35
                }
            );

            createParticles(
                "leaf-particle leaf-yellow",
                13,
                {
                    durationMin: 6,
                    durationMax: 13,
                    driftMin: -260,
                    driftMax: 260,
                    rotationMin: -500,
                    rotationMax: 500,
                    scaleMin: 0.5,
                    scaleMax: 1.15
                }
            );


            createParticles(
                "autumn-dust",
                25,
                {
                    durationMin: 5,
                    durationMax: 11,
                    driftMin: -240,
                    driftMax: 240,
                    scaleMin: 0.4,
                    scaleMax: 1
                }
            );
        }

    }


    /*
    =========================================================
    INITIALISATION
    =========================================================
    */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initSeasonal
        );

    } else {

        initSeasonal();

    }

})();
```
