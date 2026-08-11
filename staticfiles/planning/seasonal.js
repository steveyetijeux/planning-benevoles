(function () {
"use strict";


/* =========================================================
   PLANNING FOYER MDL
   THEMES SAISONNIERS
   VERSION ATMOSPHERIQUE + ELEMENTS INDEPENDANTS
========================================================= */


function initSeasonal() {

    var body = document.body;
    var layer = document.getElementById("season-layer");

    if (!body || !layer) {
        return;
    }

    layer.innerHTML = "";


    /* =====================================================
       DETECTION DU THEME
    ===================================================== */

    var mode =
        body.classList.contains("theme-noel") ? "noel" :
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


    /* =====================================================
       OUTILS
    ===================================================== */

    function random(min, max) {
        return min + Math.random() * (max - min);
    }

    function randomInt(min, max) {
        return Math.floor(random(min, max + 1));
    }

    function create(className) {

        var element = document.createElement("div");

        element.className =
            "season-particle " + className;

        layer.appendChild(element);

        return element;
    }

    function setVar(element, name, value) {
        element.style.setProperty(name, value);
    }

    function setPosition(element, x, y) {
        setVar(element, "--x", x + "%");
        setVar(element, "--y", y + "%");
    }

    function setFlight(element) {

        setVar(element, "--sway1", random(-18, 18) + "vw");
        setVar(element, "--sway2", random(-24, 24) + "vw");
        setVar(element, "--sway3", random(-30, 30) + "vw");

        setVar(element, "--swayY1", random(-10, 10) + "vh");
        setVar(element, "--swayY2", random(-15, 15) + "vh");
        setVar(element, "--swayY3", random(-20, 20) + "vh");

        setVar(element, "--duration", random(14, 24) + "s");
        setVar(element, "--delay", random(-24, 0) + "s");
    }


    /* =====================================================
       NOEL
    ===================================================== */

    if (mode === "noel") {

        /* -------------------------------------------------
           LUNE
        ------------------------------------------------- */

        var moon = create("christmas-moon");

        moon.style.left = "auto";
        moon.style.top = "7%";
        moon.style.right = "7%";


        /* -------------------------------------------------
           45 FLOCONS
        ------------------------------------------------- */

        for (var i = 0; i < 45; i++) {

            var snow = create("snowflake");

            setVar(
                snow,
                "--x",
                random(-5, 100) + "%"
            );

            setVar(
                snow,
                "--size",
                random(4, 11) + "px"
            );

            setVar(
                snow,
                "--opacity",
                random(.45, .95)
            );

            setVar(
                snow,
                "--drift",
                random(-90, 90) + "px"
            );

            setVar(
                snow,
                "--duration",
                random(13, 25) + "s"
            );

            setVar(
                snow,
                "--delay",
                random(-25, 0) + "s"
            );
        }


        /* -------------------------------------------------
           ETOILES
        ------------------------------------------------- */

        for (var s = 0; s < 22; s++) {

            var star = create("star");

            setPosition(
                star,
                random(3, 97),
                random(3, 58)
            );

            setVar(
                star,
                "--size",
                random(3, 7) + "px"
            );

            setVar(
                star,
                "--opacity",
                random(.35, .9)
            );

            setVar(
                star,
                "--duration",
                random(3, 7) + "s"
            );

            setVar(
                star,
                "--delay",
                random(-7, 0) + "s"
            );
        }


        /* -------------------------------------------------
           LUMIERES
           Elles restent en place.
        ------------------------------------------------- */

        var lightColors = [
            "#fff6b0",
            "#ff6b6b",
            "#8be9fd",
            "#ffd166",
            "#ffffff"
        ];

        for (var l = 0; l < 28; l++) {

            var light = create("christmas-light");

            setPosition(
                light,
                random(4, 96),
                random(8, 72)
            );

            setVar(
                light,
                "--light-color",
                lightColors[
                    randomInt(0, lightColors.length - 1)
                ]
            );

            setVar(
                light,
                "--duration",
                random(2.5, 5.5) + "s"
            );

            setVar(
                light,
                "--delay",
                random(-5, 0) + "s"
            );
        }


        /* -------------------------------------------------
           PERE NOEL
           Structure correspondant au CSS existant.
        ------------------------------------------------- */

        var santa = create("santa-sleigh");

        var sleighBody = document.createElement("div");
        sleighBody.className = "sleigh-body";
        santa.appendChild(sleighBody);

        var runner1 = document.createElement("div");
        runner1.className = "sleigh-runner";
        santa.appendChild(runner1);

        var runner2 = document.createElement("div");
        runner2.className = "sleigh-runner second";
        santa.appendChild(runner2);

        var reindeer = document.createElement("div");
        reindeer.className = "sleigh-reindeer";
        santa.appendChild(reindeer);

        var sleighSnow = document.createElement("div");
        sleighSnow.className = "sleigh-snow";
        santa.appendChild(sleighSnow);

        /*
         * Corps du Père Noël.
         * On crée plusieurs éléments plutôt qu'une simple forme
         * afin que le CSS puisse réellement lui donner une silhouette.
         */

        var santaBody = document.createElement("div");
        santaBody.className = "santa-body";
        santa.appendChild(santaBody);

        var santaHead = document.createElement("div");
        santaHead.className = "santa-head";
        santa.appendChild(santaHead);

        var santaHat = document.createElement("div");
        santaHat.className = "santa-hat";
        santa.appendChild(santaHat);

        var santaBeard = document.createElement("div");
        santaBeard.className = "santa-beard";
        santa.appendChild(santaBeard);

        var santaArm = document.createElement("div");
        santaArm.className = "santa-arm";
        santa.appendChild(santaArm);

        var santaBoot = document.createElement("div");
        santaBoot.className = "santa-boot";
        santa.appendChild(santaBoot);
    }


    /* =====================================================
       RENTREE
    ===================================================== */

    if (mode === "rentree") {

        /* Beaucoup moins dense que la neige,
           mais chaque élément possède son vol propre. */

        for (var p = 0; p < 18; p++) {

            var paper = create("school-paper");

            setVar(
                paper,
                "--x",
                random(-5, 100) + "%"
            );

            setVar(
                paper,
                "--w",
                random(20, 34) + "px"
            );

            setVar(
                paper,
                "--h",
                random(28, 46) + "px"
            );

            setVar(
                paper,
                "--sway1",
                random(-25, 25) + "vw"
            );

            setVar(
                paper,
                "--sway2",
                random(-30, 30) + "vw"
            );

            setVar(
                paper,
                "--sway3",
                random(-35, 35) + "vw"
            );

            setVar(
                paper,
                "--duration",
                random(15, 25) + "s"
            );

            setVar(
                paper,
                "--delay",
                random(-25, 0) + "s"
            );
        }


        for (var cr = 0; cr < 12; cr++) {

            var pencil = create("school-pencil");

            setVar(
                pencil,
                "--x",
                random(-5, 100) + "%"
            );

            setVar(
                pencil,
                "--sway1",
                random(-30, 30) + "vw"
            );

            setVar(
                pencil,
                "--sway2",
                random(-35, 35) + "vw"
            );

            setVar(
                pencil,
                "--sway3",
                random(-40, 40) + "vw"
            );

            setVar(
                pencil,
                "--duration",
                random(17, 28) + "s"
            );

            setVar(
                pencil,
                "--delay",
                random(-28, 0) + "s"
            );
        }
    }


    /* =====================================================
       SAINT VALENTIN
    ===================================================== */

    if (mode === "saint-valentin") {

        var heartColors = [
            "#e11d48",
            "#f43f5e",
            "#fb7185",
            "#be123c",
            "#ec4899",
            "#fda4af"
        ];

        for (var h = 0; h < 20; h++) {

            var heart = create("heart-particle");

            setVar(
                heart,
                "--x",
                random(-5, 100) + "%"
            );

            setVar(
                heart,
                "--size",
                random(11, 24) + "px"
            );

            setVar(
                heart,
                "--heart-color",
                heartColors[
                    randomInt(0, heartColors.length - 1)
                ]
            );

            setVar(
                heart,
                "--sway1",
                random(-20, 20) + "vw"
            );

            setVar(
                heart,
                "--sway2",
                random(-30, 30) + "vw"
            );

            setVar(
                heart,
                "--sway3",
                random(-35, 35) + "vw"
            );

            setVar(
                heart,
                "--duration",
                random(15, 25) + "s"
            );

            setVar(
                heart,
                "--delay",
                random(-25, 0) + "s"
            );
        }
    }


    /* =====================================================
       PAQUES
    ===================================================== */

    if (mode === "paques") {

        var eggColors = [
            ["#f9a8d4", "#db2777"],
            ["#93c5fd", "#2563eb"],
            ["#fde68a", "#f59e0b"],
            ["#86efac", "#16a34a"]
        ];

        for (var e = 0; e < 20; e++) {

            var egg = create("easter-egg");

            var palette =
                eggColors[
                    randomInt(0, eggColors.length - 1)
                ];

            setVar(
                egg,
                "--x",
                random(-5, 100) + "%"
            );

            setVar(
                egg,
                "--w",
                random(22, 34) + "px"
            );

            setVar(
                egg,
                "--h",
                random(31, 46) + "px"
            );

            setVar(
                egg,
                "--egg-light",
                palette[0]
            );

            setVar(
                egg,
                "--egg-color",
                palette[1]
            );

            setVar(
                egg,
                "--sway1",
                random(-20, 20) + "vw"
            );

            setVar(
                egg,
                "--sway2",
                random(-28, 28) + "vw"
            );

            setVar(
                egg,
                "--sway3",
                random(-35, 35) + "vw"
            );

            setVar(
                egg,
                "--duration",
                random(15, 25) + "s"
            );

            setVar(
                egg,
                "--delay",
                random(-25, 0) + "s"
            );
        }


        for (var f = 0; f < 18; f++) {

            var flower = create("spring-flower");

            setPosition(
                flower,
                random(2, 98),
                random(8, 90)
            );

            setVar(
                flower,
                "--size",
                random(5, 9) + "px"
            );

            setVar(
                flower,
                "--flower-color",
                [
                    "#f9a8d4",
                    "#fca5a5",
                    "#bfdbfe",
                    "#c4b5fd",
                    "#fde68a"
                ][randomInt(0, 4)]
            );

            setVar(
                flower,
                "--flower-center",
                "#facc15"
            );

            setVar(
                flower,
                "--sway",
                random(15, 55) + "px"
            );

            setVar(
                flower,
                "--duration",
                random(4, 8) + "s"
            );

            setVar(
                flower,
                "--delay",
                random(-8, 0) + "s"
            );
        }
    }


    /* =====================================================
       HALLOWEEN
    ===================================================== */

    if (mode === "halloween") {

        var halloweenMoon = create("halloween-moon");

        halloweenMoon.style.left = "auto";
        halloweenMoon.style.top = "7%";
        halloweenMoon.style.right = "9%";


        var fog = create("halloween-fog");


        /* Chauves-souris */
        for (var b = 0; b < 12; b++) {

            var bat = create("bat");

            setVar(
                bat,
                "--x",
                random(-10, 100) + "%"
            );

            setVar(
                bat,
                "--y",
                random(8, 55) + "%"
            );

            setVar(
                bat,
                "--sway1",
                random(10, 35) + "vw"
            );

            setVar(
                bat,
                "--sway2",
                random(35, 75) + "vw"
            );

            setVar(
                bat,
                "--sway3",
                random(70, 120) + "vw"
            );

            setVar(
                bat,
                "--swayY1",
                random(-8, 8) + "vh"
            );

            setVar(
                bat,
                "--swayY2",
                random(-15, 15) + "vh"
            );

            setVar(
                bat,
                "--swayY3",
                random(-20, 20) + "vh"
            );

            setVar(
                bat,
                "--duration",
                random(15, 25) + "s"
            );

            setVar(
                bat,
                "--delay",
                random(-25, 0) + "s"
            );
        }


        /* Citrouilles */
        for (var pu = 0; pu < 8; pu++) {

            var pumpkin = create("pumpkin");

            setVar(
                pumpkin,
                "--x",
                random(3, 94) + "%"
            );

            setVar(
                pumpkin,
                "--bottom",
                random(3, 15) + "%"
            );

            setVar(
                pumpkin,
                "--size",
                random(30, 52) + "px"
            );

            setVar(
                pumpkin,
                "--duration",
                random(3, 6) + "s"
            );

            setVar(
                pumpkin,
                "--delay",
                random(-6, 0) + "s"
            );
        }
    }


    /* =====================================================
       NOUVEL AN
    ===================================================== */

    if (mode === "nouvel-an") {

        for (var ns = 0; ns < 35; ns++) {

            var newStar = create("newyear-star");

            setPosition(
                newStar,
                random(2, 98),
                random(3, 72)
            );

            setVar(
                newStar,
                "--size",
                random(2, 6) + "px"
            );

            setVar(
                newStar,
                "--duration",
                random(2, 5) + "s"
            );

            setVar(
                newStar,
                "--delay",
                random(-5, 0) + "s"
            );
        }


        function launchFirework() {

            if (!document.body.classList.contains("theme-nouvel-an")) {
                return;
            }

            var firework = create("firework");

            setVar(
                firework,
                "--fire-x",
                random(8, 92) + "%"
            );

            setVar(
                firework,
                "--fire-y",
                random(8, 48) + "%"
            );

            var colors = [
                "#ffffff",
                "#facc15",
                "#60a5fa",
                "#f472b6",
                "#a78bfa",
                "#34d399"
            ];

            setVar(
                firework,
                "--fire-color",
                colors[
                    randomInt(0, colors.length - 1)
                ]
            );

            setTimeout(function () {

                if (firework.parentNode) {
                    firework.parentNode.removeChild(firework);
                }

            }, 3000);
        }


        /*
         * Feux visibles et réguliers,
         * sans transformer l'écran en sapin de Noël.
         */

        for (var fw = 0; fw < 4; fw++) {

            setTimeout(
                launchFirework,
                fw * 900
            );
        }

        setInterval(
            launchFirework,
            1800
        );
    }


    /* =====================================================
       ETE
    ===================================================== */

    if (mode === "ete") {

        var sun = create("sun");

        sun.style.left = "auto";
        sun.style.top = "7%";
        sun.style.right = "7%";


        for (var sp = 0; sp < 24; sp++) {

            var summerParticle =
                create("summer-particle");

            setPosition(
                summerParticle,
                random(2, 98),
                random(5, 95)
            );

            setVar(
                summerParticle,
                "--size",
                random(2, 7) + "px"
            );

            setVar(
                summerParticle,
                "--duration",
                random(3, 8) + "s"
            );

            setVar(
                summerParticle,
                "--delay",
                random(-8, 0) + "s"
            );
        }
    }


    /* =====================================================
       AUTOMNE
    ===================================================== */

    if (mode === "automne") {

        var autumnColors = [
            "#b45309",
            "#c2410c",
            "#ea580c",
            "#dc2626",
            "#a16207",
            "#92400e",
            "#f59e0b",
            "#78350f"
        ];


        /*
         * EXACTEMENT 42 FEUILLES.
         * Chaque feuille possède :
         * - sa taille
         * - sa position
         * - sa vitesse
         * - ses trajectoires
         * - sa rotation
         * - son délai
         */

        for (var leafIndex = 0; leafIndex < 42; leafIndex++) {

            var leaf = create("leaf-particle");

            setVar(
                leaf,
                "--x",
                random(-5, 100) + "%"
            );

            setVar(
                leaf,
                "--size",
                random(15, 34) + "px"
            );

            setVar(
                leaf,
                "--scale",
                random(.65, 1.35)
            );

            setVar(
                leaf,
                "--leaf-color",
                autumnColors[
                    randomInt(0, autumnColors.length - 1)
                ]
            );

            setVar(
                leaf,
                "--sway1",
                random(-25, 25) + "vw"
            );

            setVar(
                leaf,
                "--sway2",
                random(-35, 35) + "vw"
            );

            setVar(
                leaf,
                "--sway3",
                random(-45, 45) + "vw"
            );

            setVar(
                leaf,
                "--sway4",
                random(-55, 55) + "vw"
            );

            setVar(
                leaf,
                "--duration",
                random(14, 24) + "s"
            );

            setVar(
                leaf,
                "--delay",
                random(-24, 0) + "s"
            );
        }
    }


    console.log(
        "🌿 SEASONAL ATMOSPHERE ACTIVE:",
        mode
    );
}


/* =========================================================
   INITIALISATION ROBUSTE
========================================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initSeasonal
    );

} else {

    initSeasonal();
}


})();