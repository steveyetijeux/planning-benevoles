(function () {

    "use strict";


    /* =========================================================
       INITIALISATION
    ========================================================= */

    var body = document.body;

    if (!body) {
        return;
    }


    var layer = document.getElementById("season-layer");

    if (!layer) {
        console.error(
            "[SEASONAL] #season-layer introuvable."
        );

        return;
    }


    /* =========================================================
       NETTOYAGE
    ========================================================= */

    layer.innerHTML = "";

    body.classList.add("season-active");


    /* =========================================================
       DÉTECTION DU THÈME
    ========================================================= */

    var themes = [
        "theme-noel",
        "theme-rentree",
        "theme-saint-valentin",
        "theme-paques",
        "theme-halloween",
        "theme-nouvel-an",
        "theme-ete",
        "theme-automne"
    ];


    var theme = null;

    for (var i = 0; i < themes.length; i++) {

        if (body.classList.contains(themes[i])) {
            theme = themes[i];
            break;
        }

    }


    console.log(
        "[SEASONAL] Initialisation :",
        theme
    );


    if (!theme) {

        console.log(
            "[SEASONAL] Aucun thème actif."
        );

        return;
    }


    layer.setAttribute(
        "data-theme",
        theme
    );


    /* =========================================================
       OUTIL DE CRÉATION
    ========================================================= */

    function createParticle(
        className,
        index,
        total,
        minDuration,
        maxDuration
    ) {

        var particle =
            document.createElement("div");

        particle.className =
            "season-particle " + className;


        /*
         * Position complètement indépendante.
         *
         * On ne se contente pas d'un left aléatoire :
         * chaque élément reçoit également :
         *
         * - durée
         * - délai
         * - taille
         * - opacité
         * - amplitude
         * - rotation
         */

        var left =
            Math.random() * 100;

        var duration =
            minDuration +
            Math.random() *
            (maxDuration - minDuration);

        var delay =
            -(Math.random() * duration);

        var size =
            0.65 +
            Math.random() * 0.9;

        var opacity =
            0.45 +
            Math.random() * 0.55;

        var drift =
            -100 +
            Math.random() * 200;

        var rotation =
            Math.random() * 360;


        particle.style.left =
            left + "%";

        particle.style.animationDuration =
            duration + "s";

        particle.style.animationDelay =
            delay + "s";

        particle.style.setProperty(
            "--particle-size",
            size
        );

        particle.style.setProperty(
            "--particle-opacity",
            opacity
        );

        particle.style.setProperty(
            "--particle-drift",
            drift + "px"
        );

        particle.style.setProperty(
            "--particle-rotation",
            rotation + "deg"
        );


        layer.appendChild(particle);


        return particle;
    }


    function createParticles(
        className,
        count,
        minDuration,
        maxDuration
    ) {

        for (
            var i = 0;
            i < count;
            i++
        ) {

            createParticle(
                className,
                i,
                count,
                minDuration,
                maxDuration
            );

        }

    }


    /* =========================================================
       NOËL
    ========================================================= */

    if (theme === "theme-noel") {

        createParticles(
            "snowflake",
            90,
            8,
            18
        );

        createParticles(
            "star",
            35,
            2,
            5
        );

        createParticles(
            "christmas-light",
            28,
            1.2,
            3
        );


        /*
         * Traîneau
         */

        function createSanta() {

            if (
                document.querySelector(
                    ".santa-sleigh"
                )
            ) {
                return;
            }


            var santa =
                document.createElement("div");

            santa.className =
                "santa-sleigh";


            santa.innerHTML =
                '<div class="sleigh-snow"></div>' +
                '<div class="sleigh-reindeer"></div>' +
                '<div class="sleigh-body"></div>' +
                '<div class="sleigh-runner"></div>' +
                '<div class="sleigh-runner second"></div>';


            body.appendChild(santa);


            setTimeout(
                function () {

                    if (
                        santa &&
                        santa.parentNode
                    ) {

                        santa.parentNode.removeChild(
                            santa
                        );

                    }

                },
                15000
            );

        }


        setTimeout(
            createSanta,
            2500
        );


        setInterval(
            createSanta,
            30000
        );

    }


    /* =========================================================
       RENTRÉE
    ========================================================= */

    if (theme === "theme-rentree") {

        createParticles(
            "school-paper",
            18,
            9,
            17
        );

        createParticles(
            "school-pencil",
            8,
            10,
            19
        );

        createParticles(
            "school-star",
            12,
            4,
            8
        );

    }


    /* =========================================================
       SAINT-VALENTIN
    ========================================================= */

    if (
        theme ===
        "theme-saint-valentin"
    ) {

        createParticles(
            "heart-particle",
            38,
            7,
            15
        );

    }


    /* =========================================================
       PÂQUES
    ========================================================= */

    if (theme === "theme-paques") {

        createParticles(
            "easter-egg",
            22,
            8,
            16
        );

        createParticles(
            "spring-flower",
            25,
            7,
            15
        );

        createParticles(
            "spring-butterfly",
            8,
            10,
            18
        );

    }


    /* =========================================================
       HALLOWEEN
    ========================================================= */

    if (theme === "theme-halloween") {

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


        createParticles(
            "bat",
            12,
            9,
            18
        );


        createParticles(
            "pumpkin",
            10,
            4,
            9
        );


        createParticles(
            "halloween-ghost",
            6,
            10,
            18
        );

    }


    /* =========================================================
       NOUVEL AN
    ========================================================= */

    if (
        theme ===
        "theme-nouvel-an"
    ) {

        createParticles(
            "newyear-star",
            60,
            2,
            6
        );


        function createFirework() {

            var firework =
                document.createElement("div");

            firework.className =
                "firework";


            firework.style.left =
                (
                    10 +
                    Math.random() * 80
                ) + "%";


            firework.style.top =
                (
                    8 +
                    Math.random() * 52
                ) + "%";


            firework.style.animationDelay =
                (
                    Math.random() * 0.5
                ) + "s";


            layer.appendChild(
                firework
            );


            setTimeout(
                function () {

                    if (
                        firework.parentNode
                    ) {

                        firework.parentNode.removeChild(
                            firework
                        );

                    }

                },
                3200
            );

        }


        for (
            var j = 0;
            j < 7;
            j++
        ) {

            setTimeout(
                createFirework,
                j * 700
            );

        }


        setInterval(
            createFirework,
            2500
        );

    }


    /* =========================================================
       ÉTÉ
    ========================================================= */

    if (theme === "theme-ete") {

        var sun =
            document.createElement("div");

        sun.className =
            "sun";

        body.appendChild(sun);


        createParticles(
            "summer-spark",
            30,
            4,
            10
        );

        createParticles(
            "summer-bubble",
            15,
            8,
            16
        );

    }


    /* =========================================================
       AUTOMNE
    ========================================================= */

    if (theme === "theme-automne") {

        createParticles(
            "leaf-particle",
            45,
            7,
            16
        );

        createParticles(
            "leaf-small",
            25,
            5,
            13
        );

    }


    /* =========================================================
       DIAGNOSTIC
    ========================================================= */

    console.log(
        "[SEASONAL] Couche créée :",
        layer
    );

    console.log(
        "[SEASONAL] Particules :",
        layer.children.length
    );


})();