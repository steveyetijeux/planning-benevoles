(function () {
    "use strict";

    var body = document.body;
    var layer = document.getElementById("season-layer");

    if (!body || !layer) {
        return;
    }

    layer.innerHTML = "";

    function random(min, max) {
        return min + Math.random() * (max - min);
    }

    function randomInt(min, max) {
        return Math.floor(random(min, max + 1));
    }

    function css(element, values) {
        Object.keys(values).forEach(function (key) {
            element.style.setProperty(key, values[key]);
        });
    }

    function create(className) {
        var element = document.createElement("div");
        element.className = "season-particle " + className;
        layer.appendChild(element);
        return element;
    }

    function createParticles(className, count, setup) {
        var i;

        for (i = 0; i < count; i++) {
            var element = create(className);

            if (setup) {
                setup(element, i);
            }
        }
    }


    /* =====================================================
       NOËL
    ===================================================== */

    if (body.classList.contains("theme-noel")) {

        var christmasMoon = document.createElement("div");
        christmasMoon.className = "christmas-moon";
        layer.appendChild(christmasMoon);

        /*
         * 45 FLACONS
         * Chaque flocon possède sa propre position,
         * taille, vitesse et trajectoire.
         */
        createParticles("snowflake", 45, function (snow) {

            css(snow, {
                "--x": random(0, 100) + "%",
                "--size": random(5, 12) + "px",
                "--opacity": random(.45, .95),
                "--duration": random(12, 24) + "s",
                "--delay": random(-24, 0) + "s",
                "--drift": random(-180, 180) + "px"
            });
        });


        /* Étoiles */
        createParticles("christmas-star", 14, function (star) {

            css(star, {
                "--x": random(4, 96) + "%",
                "--y": random(4, 55) + "%",
                "--size": random(4, 10) + "px",
                "--opacity": random(.35, .9),
                "--duration": random(2.5, 5) + "s",
                "--delay": random(-5, 0) + "s"
            });
        });


        /* Lumières statiques/scintillantes */
        var lightColors = [
            "#e53935",
            "#43a047",
            "#ffd54f",
            "#42a5f5"
        ];

        createParticles("christmas-light", 18, function (light) {

            css(light, {
                "--x": random(2, 98) + "%",
                "--y": random(10, 88) + "%",
                "--light-color":
                    lightColors[randomInt(0, lightColors.length - 1)],
                "--duration": random(2.5, 5) + "s",
                "--delay": random(-5, 0) + "s"
            });
        });


        /* Père Noël */
        var santa = document.createElement("div");
        santa.className = "santa";

        var sleigh = document.createElement("div");
        sleigh.className = "santa-sleigh";

        var santaBody = document.createElement("div");
        santaBody.className = "santa-body";

        var santaHead = document.createElement("div");
        santaHead.className = "santa-head";

        var santaBeard = document.createElement("div");
        santaBeard.className = "santa-beard";

        var santaHat = document.createElement("div");
        santaHat.className = "santa-hat";

        var santaNose = document.createElement("div");
        santaNose.className = "santa-nose";

        var santaEyeLeft = document.createElement("div");
        santaEyeLeft.className = "santa-eye left";

        var santaEyeRight = document.createElement("div");
        santaEyeRight.className = "santa-eye right";

        var santaArm = document.createElement("div");
        santaArm.className = "santa-arm";

        santa.appendChild(sleigh);
        santa.appendChild(santaBody);
        santa.appendChild(santaHead);
        santa.appendChild(santaBeard);
        santa.appendChild(santaHat);
        santa.appendChild(santaNose);
        santa.appendChild(santaEyeLeft);
        santa.appendChild(santaEyeRight);
        santa.appendChild(santaArm);


        var reindeer = document.createElement("div");
        reindeer.className = "reindeer";

        var reindeerBody = document.createElement("div");
        reindeerBody.className = "reindeer-body";

        var reindeerHead = document.createElement("div");
        reindeerHead.className = "reindeer-head";

        var antlerLeft = document.createElement("div");
        antlerLeft.className = "reindeer-antler left";

        var antlerRight = document.createElement("div");
        antlerRight.className = "reindeer-antler right";

        reindeer.appendChild(reindeerBody);
        reindeer.appendChild(reindeerHead);
        reindeer.appendChild(antlerLeft);
        reindeer.appendChild(antlerRight);

        santa.appendChild(reindeer);

        css(santa, {
            "--santa-top": random(14, 32) + "%",
            "--santa-scale":
                window.innerWidth < 700 ? ".72" : "1"
        });

        layer.appendChild(santa);
    }


    /* =====================================================
       RENTRÉE
    ===================================================== */

    if (body.classList.contains("theme-rentree")) {

        createParticles("school-paper", 8, function (paper) {

            css(paper, {
                "--x": random(0, 100) + "%",
                "--w": random(28, 45) + "px",
                "--h": random(38, 58) + "px",
                "--rotation": random(-25, 25) + "deg",
                "--duration": random(14, 25) + "s",
                "--delay": random(-25, 0) + "s",
                "--sway1": random(-180, 180) + "px",
                "--sway2": random(-220, 220) + "px",
                "--sway3": random(-260, 260) + "px"
            });
        });

        createParticles("school-pencil", 4, function (pencil) {

            css(pencil, {
                "--x": random(0, 100) + "%",
                "--duration": random(17, 28) + "s",
                "--delay": random(-28, 0) + "s",
                "--sway1": random(-170, 170) + "px",
                "--sway2": random(-220, 220) + "px",
                "--sway3": random(-260, 260) + "px"
            });
        });
    }


    /* =====================================================
       SAINT-VALENTIN
    ===================================================== */

    if (body.classList.contains("theme-saint-valentin")) {

        var heartColors = [
            "#e91e63",
            "#f06292",
            "#c2185b",
            "#ff4d6d",
            "#ad1457"
        ];

        createParticles("heart-particle", 18, function (heart) {

            css(heart, {
                "--x": random(2, 98) + "%",
                "--size": random(10, 21) + "px",
                "--heart-color":
                    heartColors[randomInt(0, heartColors.length - 1)],
                "--duration": random(11, 20) + "s",
                "--delay": random(-20, 0) + "s",
                "--sway1": random(-160, 160) + "px",
                "--sway2": random(-190, 190) + "px",
                "--sway3": random(-220, 220) + "px"
            });
        });
    }


    /* =====================================================
       PÂQUES
    ===================================================== */

    if (body.classList.contains("theme-paques")) {

        var eggs = [
            ["#f4a6c1", "#e85d91"],
            ["#9dd9ff", "#3996d2"],
            ["#ffe59a", "#e5ad22"],
            ["#b8e6a1", "#5fa94a"]
        ];

        createParticles("easter-egg", 12, function (egg, index) {

            var palette = eggs[index % eggs.length];

            css(egg, {
                "--x": random(2, 98) + "%",
                "--w": random(24, 36) + "px",
                "--h": random(34, 48) + "px",
                "--egg-light": palette[0],
                "--egg-color": palette[1],
                "--duration": random(13, 23) + "s",
                "--delay": random(-23, 0) + "s",
                "--sway1": random(-170, 170) + "px",
                "--sway2": random(-210, 210) + "px",
                "--sway3": random(-250, 250) + "px"
            });
        });

        var flowerColors = [
            "#ff8fab",
            "#ffd166",
            "#a78bfa",
            "#f5f5f5"
        ];

        createParticles("spring-flower", 15, function (flower) {

            css(flower, {
                "--x": random(2, 98) + "%",
                "--y": random(12, 85) + "%",
                "--size": random(5, 9) + "px",
                "--flower-color":
                    flowerColors[
                        randomInt(0, flowerColors.length - 1)
                    ],
                "--flower-center": "#f5b82e",
                "--duration": random(4, 8) + "s",
                "--delay": random(-8, 0) + "s",
                "--sway": random(-45, 45) + "px"
            });
        });
    }


    /* =====================================================
       HALLOWEEN
    ===================================================== */

    if (body.classList.contains("theme-halloween")) {

        var halloweenMoon = document.createElement("div");
        halloweenMoon.className = "halloween-moon";
        layer.appendChild(halloweenMoon);

        var fog = document.createElement("div");
        fog.className = "halloween-fog";
        layer.appendChild(fog);

        createParticles("bat", 7, function (bat) {

            css(bat, {
                "--x": random(5, 85) + "%",
                "--y": random(12, 55) + "%",
                "--duration": random(12, 22) + "s",
                "--delay": random(-22, 0) + "s",
                "--sway1": random(-120, 120) + "px",
                "--sway2": random(-180, 180) + "px",
                "--sway3": random(-220, 220) + "px",
                "--swayY1": random(-80, 80) + "px",
                "--swayY2": random(-100, 100) + "px",
                "--swayY3": random(-120, 120) + "px"
            });
        });

        createParticles("pumpkin", 5, function (pumpkin) {

            css(pumpkin, {
                "--x": random(5, 92) + "%",
                "--bottom": random(4, 20) + "%",
                "--size": random(30, 48) + "px",
                "--duration": random(3, 6) + "s",
                "--delay": random(-6, 0) + "s"
            });
        });
    }


    /* =====================================================
       NOUVEL AN
    ===================================================== */

    if (body.classList.contains("theme-nouvel-an")) {

        createParticles("newyear-star", 38, function (star) {

            css(star, {
                "--x": random(2, 98) + "%",
                "--y": random(3, 70) + "%",
                "--size": random(2, 5) + "px",
                "--duration": random(2, 5) + "s",
                "--delay": random(-5, 0) + "s"
            });
        });


        function createFirework() {

            var firework = create("firework");

            css(firework, {
                "--x": random(12, 88) + "%",
                "--y": random(12, 52) + "%",
                "--fire-color":
                    [
                        "#ff4757",
                        "#ffd166",
                        "#5ee7df",
                        "#8ab4ff",
                        "#ff8ad8"
                    ][randomInt(0, 4)]
            });

            setTimeout(function () {

                if (firework.parentNode) {
                    firework.parentNode.removeChild(firework);
                }

            }, 3000);
        }


        var fireworkCount;

        for (fireworkCount = 0; fireworkCount < 3; fireworkCount++) {

            setTimeout(
                createFirework,
                fireworkCount * 1100
            );
        }

        setInterval(createFirework, 3200);
    }


    /* =====================================================
       ÉTÉ
    ===================================================== */

    if (body.classList.contains("theme-ete")) {

        var summerSun = document.createElement("div");
        summerSun.className = "sun";
        layer.appendChild(summerSun);

        createParticles("sun-particle", 18, function (particle) {

            css(particle, {
                "--x": random(3, 97) + "%",
                "--y": random(10, 88) + "%",
                "--size": random(2, 6) + "px",
                "--duration": random(4, 8) + "s",
                "--delay": random(-8, 0) + "s",
                "--sway": random(-80, 80) + "px"
            });
        });
    }


    /* =====================================================
       AUTOMNE
    ===================================================== */

    if (body.classList.contains("theme-automne")) {

        /*
         * EXACTEMENT 42 FEUILLES
         */
        var leafColors = [
            "#8e2f1d",
            "#a63d19",
            "#c55a19",
            "#d4771c",
            "#e39b24",
            "#b74819",
            "#79501d"
        ];

        createParticles("leaf-particle", 42, function (leaf) {

            css(leaf, {
                "--x": random(0, 100) + "%",
                "--size": random(17, 38) + "px",
                "--scale": random(.65, 1.2),
                "--leaf-color":
                    leafColors[
                        randomInt(0, leafColors.length - 1)
                    ],
                "--duration": random(14, 27) + "s",
                "--delay": random(-27, 0) + "s",
                "--sway1": random(-180, 180) + "px",
                "--sway2": random(-240, 240) + "px",
                "--sway3": random(-300, 300) + "px",
                "--sway4": random(-350, 350) + "px"
            });
        });

        var autumnWind = document.createElement("div");
        autumnWind.className = "autumn-wind";
        layer.appendChild(autumnWind);
    }

})();