(function () {
    "use strict";

    var layer = document.getElementById("season-layer");
    var body = document.body;

    if (!layer || !body) {
        return;
    }


    /*
     * Nettoyage d'une éventuelle ancienne génération.
     */

    layer.innerHTML = "";


    /*
     * Détection du thème.
     */

    var theme = body.classList.contains("theme-noel")
        ? "noel"
        : body.classList.contains("theme-rentree")
        ? "rentree"
        : body.classList.contains("theme-saint-valentin")
        ? "saint-valentin"
        : body.classList.contains("theme-paques")
        ? "paques"
        : body.classList.contains("theme-halloween")
        ? "halloween"
        : body.classList.contains("theme-nouvel-an")
        ? "nouvel-an"
        : body.classList.contains("theme-ete")
        ? "ete"
        : body.classList.contains("theme-automne")
        ? "automne"
        : "none";


    layer.setAttribute("data-theme", theme);


    if (theme === "none") {
        return;
    }


    /*
     * Création d'une particule.
     *
     * Chaque particule possède :
     *
     * - position horizontale indépendante
     * - vitesse indépendante
     * - délai indépendant
     * - amplitude indépendante
     * - rotation indépendante
     * - taille indépendante
     */

    function createParticle(className, options) {

        var particle = document.createElement("div");

        particle.className =
            "season-particle " + className;


        var left =
            Math.random() * 100;

        var duration =
            options.minDuration +
            Math.random() *
            (options.maxDuration - options.minDuration);

        var delay =
            -(Math.random() * duration);

        var size =
            options.minSize +
            Math.random() *
            (options.maxSize - options.minSize);

        var drift =
            options.minDrift +
            Math.random() *
            (options.maxDrift - options.minDrift);

        var rotation =
            Math.random() * 360;

        var opacity =
            options.minOpacity +
            Math.random() *
            (options.maxOpacity - options.minOpacity);


        particle.style.left = left + "%";

        particle.style.animationDuration =
            duration + "s";

        particle.style.animationDelay =
            delay + "s";

        particle.style.setProperty(
            "--particle-size",
            size + "px"
        );

        particle.style.setProperty(
            "--particle-drift",
            drift + "px"
        );

        particle.style.setProperty(
            "--particle-rotation",
            rotation + "deg"
        );

        particle.style.setProperty(
            "--particle-opacity",
            opacity
        );


        layer.appendChild(particle);

        return particle;
    }


    function createParticles(className, count, options) {

        var i;

        for (i = 0; i < count; i++) {
            createParticle(
                className,
                options
            );
        }
    }


    /*
     * OPTIONS GENERALES
     */

    var gentleParticles = {
        minDuration: 9,
        maxDuration: 18,
        minSize: 5,
        maxSize: 12,
        minDrift: -180,
        maxDrift: 180,
        minOpacity: 0.45,
        maxOpacity: 1
    };


    /*
     * =========================================================
     * NOËL
     * =========================================================
     */

    if (theme === "noel") {

        createParticles(
            "snowflake",
            95,
            {
                minDuration: 8,
                maxDuration: 18,
                minSize: 4,
                maxSize: 12,
                minDrift: -220,
                maxDrift: 220,
                minOpacity: 0.55,
                maxOpacity: 1
            }
        );


        createParticles(
            "snowflake-small",
            55,
            {
                minDuration: 6,
                maxDuration: 14,
                minSize: 2,
                maxSize: 6,
                minDrift: -140,
                maxDrift: 140,
                minOpacity: 0.35,
                maxOpacity: 0.85
            }
        );


        createParticles(
            "christmas-star",
            22,
            {
                minDuration: 3,
                maxDuration: 7,
                minSize: 7,
                maxSize: 16,
                minDrift: -100,
                maxDrift: 100,
                minOpacity: 0.45,
                maxOpacity: 1
            }
        );


        /*
         * Guirlande lumineuse indépendante.
         */

        var lights = document.createElement("div");

        lights.className =
            "christmas-lights";

        var lightColors = [
            "red",
            "green",
            "gold",
            "blue"
        ];

        var l;

        for (l = 0; l < 24; l++) {

            var light =
                document.createElement("span");

            light.className =
                "christmas-bulb " +
                lightColors[l % lightColors.length];

            light.style.animationDelay =
                (-Math.random() * 2) + "s";

            lights.appendChild(light);
        }

        layer.appendChild(lights);


        /*
         * Trajectoire du Père Noël.
         */

        var santa = document.createElement("div");

        santa.className =
            "santa";

        santa.innerHTML =
            '<div class="santa-body">' +
                '<div class="santa-head">' +
                    '<div class="santa-hat"></div>' +
                    '<div class="santa-face"></div>' +
                    '<div class="santa-beard"></div>' +
                    '<div class="santa-nose"></div>' +
                '</div>' +
                '<div class="santa-coat"></div>' +
                '<div class="santa-belt"></div>' +
                '<div class="santa-boots"></div>' +
            '</div>' +
            '<div class="santa-sack"></div>';

        layer.appendChild(santa);


        /*
         * Petit village lumineux au bas de l'écran.
         */

        var village =
            document.createElement("div");

        village.className =
            "christmas-village";

        village.innerHTML =
            '<span></span>' +
            '<span></span>' +
            '<span></span>' +
            '<span></span>' +
            '<span></span>';

        layer.appendChild(village);
    }


    /*
     * =========================================================
     * RENTRÉE
     * =========================================================
     */

    if (theme === "rentree") {

        createParticles(
            "school-paper",
            22,
            {
                minDuration: 8,
                maxDuration: 17,
                minSize: 12,
                maxSize: 24,
                minDrift: -230,
                maxDrift: 230,
                minOpacity: 0.55,
                maxOpacity: 0.95
            }
        );


        createParticles(
            "school-pencil",
            8,
            {
                minDuration: 10,
                maxDuration: 19,
                minSize: 18,
                maxSize: 30,
                minDrift: -200,
                maxDrift: 200,
                minOpacity: 0.45,
                maxOpacity: 0.9
            }
        );


        createParticles(
            "school-star",
            14,
            {
                minDuration: 5,
                maxDuration: 11,
                minSize: 7,
                maxSize: 14,
                minDrift: -160,
                maxDrift: 160,
                minOpacity: 0.4,
                maxOpacity: 0.9
            }
        );


        var schoolBoard =
            document.createElement("div");

        schoolBoard.className =
            "school-board";

        schoolBoard.innerHTML =
            '<div class="school-board-line"></div>' +
            '<div class="school-board-line"></div>' +
            '<div class="school-board-line"></div>';

        layer.appendChild(schoolBoard);
    }


    /*
     * =========================================================
     * SAINT-VALENTIN
     * =========================================================
     */

    if (theme === "saint-valentin") {

        createParticles(
            "heart-particle",
            42,
            {
                minDuration: 7,
                maxDuration: 16,
                minSize: 9,
                maxSize: 22,
                minDrift: -220,
                maxDrift: 220,
                minOpacity: 0.45,
                maxOpacity: 0.95
            }
        );


        var valentineGlow =
            document.createElement("div");

        valentineGlow.className =
            "valentine-glow";

        layer.appendChild(
            valentineGlow
        );
    }


    /*
     * =========================================================
     * PÂQUES
     * =========================================================
     */

    if (theme === "paques") {

        createParticles(
            "easter-egg",
            24,
            {
                minDuration: 9,
                maxDuration: 18,
                minSize: 14,
                maxSize: 28,
                minDrift: -220,
                maxDrift: 220,
                minOpacity: 0.6,
                maxOpacity: 1
            }
        );


        createParticles(
            "spring-flower",
            30,
            {
                minDuration: 7,
                maxDuration: 15,
                minSize: 10,
                maxSize: 20,
                minDrift: -180,
                maxDrift: 180,
                minOpacity: 0.5,
                maxOpacity: 1
            }
        );


        createParticles(
            "spring-butterfly",
            10,
            {
                minDuration: 10,
                maxDuration: 20,
                minSize: 16,
                maxSize: 28,
                minDrift: -260,
                maxDrift: 260,
                minOpacity: 0.45,
                maxOpacity: 0.9
            }
        );


        var easterGrass =
            document.createElement("div");

        easterGrass.className =
            "easter-grass";

        layer.appendChild(
            easterGrass
        );
    }


    /*
     * =========================================================
     * HALLOWEEN
     * =========================================================
     */

    if (theme === "halloween") {

        var moon =
            document.createElement("div");

        moon.className =
            "halloween-moon";

        layer.appendChild(moon);


        var fog =
            document.createElement("div");

        fog.className =
            "halloween-fog";

        layer.appendChild(fog);


        createParticles(
            "bat",
            12,
            {
                minDuration: 9,
                maxDuration: 18,
                minSize: 18,
                maxSize: 34,
                minDrift: -280,
                maxDrift: 280,
                minOpacity: 0.5,
                maxOpacity: 1
            }
        );


        createParticles(
            "pumpkin",
            12,
            {
                minDuration: 6,
                maxDuration: 13,
                minSize: 18,
                maxSize: 30,
                minDrift: -180,
                maxDrift: 180,
                minOpacity: 0.55,
                maxOpacity: 1
            }
        );


        createParticles(
            "ghost",
            8,
            {
                minDuration: 10,
                maxDuration: 19,
                minSize: 20,
                maxSize: 38,
                minDrift: -200,
                maxDrift: 200,
                minOpacity: 0.25,
                maxOpacity: 0.7
            }
        );
    }


    /*
     * =========================================================
     * NOUVEL AN
     * =========================================================
     */

    if (theme === "nouvel-an") {

        createParticles(
            "newyear-star",
            60,
            {
                minDuration: 2,
                maxDuration: 6,
                minSize: 4,
                maxSize: 12,
                minDrift: -120,
                maxDrift: 120,
                minOpacity: 0.5,
                maxOpacity: 1
            }
        );


        function createFirework() {

            var firework =
                document.createElement("div");

            firework.className =
                "firework";

            firework.style.left =
                (10 + Math.random() * 80) + "%";

            firework.style.top =
                (8 + Math.random() * 52) + "%";

            firework.style.setProperty(
                "--firework-scale",
                (0.7 + Math.random() * 0.8)
            );

            layer.appendChild(
                firework
            );


            window.setTimeout(
                function () {

                    if (firework.parentNode) {
                        firework.parentNode.removeChild(
                            firework
                        );
                    }

                },
                2600
            );
        }


        var f;

        for (f = 0; f < 6; f++) {

            window.setTimeout(
                createFirework,
                f * 700
            );
        }


        window.setInterval(
            createFirework,
            2800
        );
    }


    /*
     * =========================================================
     * ÉTÉ
     * =========================================================
     */

    if (theme === "ete") {

        var sun =
            document.createElement("div");

        sun.className =
            "summer-sun";

        layer.appendChild(sun);


        createParticles(
            "summer-spark",
            30,
            {
                minDuration: 5,
                maxDuration: 12,
                minSize: 4,
                maxSize: 10,
                minDrift: -160,
                maxDrift: 160,
                minOpacity: 0.4,
                maxOpacity: 0.9
            }
        );


        createParticles(
            "summer-bubble",
            18,
            {
                minDuration: 8,
                maxDuration: 18,
                minSize: 8,
                maxSize: 24,
                minDrift: -180,
                maxDrift: 180,
                minOpacity: 0.2,
                maxOpacity: 0.7
            }
        );
    }


    /*
     * =========================================================
     * AUTOMNE
     * =========================================================
     */

    if (theme === "automne") {

        createParticles(
            "leaf-particle",
            48,
            {
                minDuration: 7,
                maxDuration: 17,
                minSize: 12,
                maxSize: 28,
                minDrift: -280,
                maxDrift: 280,
                minOpacity: 0.55,
                maxOpacity: 1
            }
        );


        createParticles(
            "leaf-small",
            24,
            {
                minDuration: 8,
                maxDuration: 20,
                minSize: 7,
                maxSize: 15,
                minDrift: -220,
                maxDrift: 220,
                minOpacity: 0.4,
                maxOpacity: 0.85
            }
        );


        var autumnGlow =
            document.createElement("div");

        autumnGlow.className =
            "autumn-glow";

        layer.appendChild(
            autumnGlow
        );
    }

})();