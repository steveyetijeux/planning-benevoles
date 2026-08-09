```javascript
/* =========================================================
   PLANNING FOYER MDL
   MOTEUR DES THEMES SAISONNIERS
   VERSION ROBUSTE ES5
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       INITIALISATION
       ===================================================== */

    function initSeasonal() {

        var body = document.body;

        if (!body) {
            return;
        }


        /*
         * Si le moteur existe déjà, on ne le recrée pas.
         */
        if (document.getElementById("season-layer")) {
            return;
        }


        var layer = document.createElement("div");

        layer.id = "season-layer";

        layer.className = "season-layer";

        body.appendChild(layer);


        /* =================================================
           OUTILS
           ================================================= */

        function random(min, max) {
            return min + Math.random() * (max - min);
        }


        function randomInt(min, max) {
            return Math.floor(random(min, max + 1));
        }


        function setStyle(element, property, value) {
            element.style[property] = value;
        }


        function particle(
            className,
            left,
            duration,
            delay
        ) {

            var element =
                document.createElement("div");

            element.className =
                "season-particle " + className;

            setStyle(
                element,
                "left",
                left + "%"
            );

            setStyle(
                element,
                "animationDuration",
                duration + "s"
            );

            setStyle(
                element,
                "animationDelay",
                delay + "s"
            );

            layer.appendChild(element);

            return element;
        }


        function createParticles(
            className,
            count,
            minDuration,
            maxDuration
        ) {

            var i;

            for (i = 0; i < count; i++) {

                var duration =
                    random(
                        minDuration,
                        maxDuration
                    );

                var delay =
                    -random(
                        0,
                        maxDuration
                    );

                particle(
                    className,
                    random(0, 100),
                    duration,
                    delay
                );
            }
        }


        function cssVar(
            element,
            name,
            value
        ) {

            element.style.setProperty(
                name,
                value
            );
        }


        /* =================================================
           NOEL
           ================================================= */

        if (
            body.classList &&
            body.classList.contains("theme-noel")
        ) {

            /*
             * Lune
             */

            var christmasMoon =
                document.createElement("div");

            christmasMoon.className =
                "christmas-moon";

            layer.appendChild(christmasMoon);


            /*
             * Neige.
             *
             * Chaque flocon possède :
             * - une position différente
             * - une durée différente
             * - plusieurs amplitudes différentes
             * - une taille différente
             * - une opacité différente
             */

            var i;

            for (i = 0; i < 90; i++) {

                var snowClass =
                    "snowflake";

                var sizeRoll =
                    Math.random();

                if (sizeRoll > 0.84) {
                    snowClass += " big";
                }
                else if (sizeRoll < 0.25) {
                    snowClass += " tiny";
                }

                var snow =
                    particle(
                        snowClass,
                        random(0, 100),
                        random(9, 19),
                        -random(0, 19)
                    );

                cssVar(
                    snow,
                    "--size",
                    random(3, 11) + "px"
                );

                cssVar(
                    snow,
                    "--opacity",
                    random(.45, 1)
                );

                cssVar(
                    snow,
                    "--drift1",
                    random(-80, 100) + "px"
                );

                cssVar(
                    snow,
                    "--drift2",
                    random(-110, 110) + "px"
                );

                cssVar(
                    snow,
                    "--drift3",
                    random(-120, 120) + "px"
                );

                cssVar(
                    snow,
                    "--drift4",
                    random(-100, 100) + "px"
                );

                cssVar(
                    snow,
                    "--drift5",
                    random(-140, 140) + "px"
                );
            }


            /*
             * Etoiles dans le ciel
             */

            createParticles(
                "star",
                35,
                2,
                5
            );


            /*
             * Guirlande lumineuse flottante
             */

            for (i = 0; i < 22; i++) {

                var light =
                    particle(
                        "christmas-light",
                        random(2, 98),
                        random(1.3, 3),
                        -random(0, 3)
                    );

                setStyle(
                    light,
                    "top",
                    random(5, 48) + "%"
                );
            }


            /*
             * Passage du Père Noël.
             */

            function createSanta() {

                if (
                    document.querySelector(
                        ".santa-flight"
                    )
                ) {
                    return;
                }


                var flight =
                    document.createElement("div");

                flight.className =
                    "santa-flight";


                /*
                 * Traîneau
                 */

                var sleigh =
                    document.createElement("div");

                sleigh.className =
                    "santa-sleigh";


                var sleighBody =
                    document.createElement("div");

                sleighBody.className =
                    "santa-sleigh-body";


                var runner1 =
                    document.createElement("div");

                runner1.className =
                    "santa-runner";


                var runner2 =
                    document.createElement("div");

                runner2.className =
                    "santa-runner second";


                /*
                 * Père Noël
                 */

                var santa =
                    document.createElement("div");

                santa.className =
                    "santa-person";


                var santaBody =
                    document.createElement("div");

                santaBody.className =
                    "santa-body";


                var santaHead =
                    document.createElement("div");

                santaHead.className =
                    "santa-head";


                var santaBeard =
                    document.createElement("div");

                santaBeard.className =
                    "santa-beard";


                var santaHat =
                    document.createElement("div");

                santaHat.className =
                    "santa-hat";


                santaHead.appendChild(
                    santaHat
                );

                santaHead.appendChild(
                    santaBeard
                );

                santa.appendChild(
                    santaBody
                );

                santa.appendChild(
                    santaHead
                );


                /*
                 * Renne
                 */

                var reindeer =
                    document.createElement("div");

                reindeer.className =
                    "reindeer";


                /*
                 * Assemblage
                 */

                sleigh.appendChild(
                    sleighBody
                );

                sleigh.appendChild(
                    runner1
                );

                sleigh.appendChild(
                    runner2
                );

                sleigh.appendChild(
                    santa
                );

                sleigh.appendChild(
                    reindeer
                );

                flight.appendChild(
                    sleigh
                );


                /*
                 * Quelques étoiles derrière le
                 * traîneau.
                 */

                var s;

                for (s = 0; s < 6; s++) {

                    var sparkle =
                        document.createElement("div");

                    sparkle.className =
                        "santa-sparkle";

                    setStyle(
                        sparkle,
                        "left",
                        random(0, 330) + "px"
                    );

                    setStyle(
                        sparkle,
                        "top",
                        random(10, 130) + "px"
                    );

                    setStyle(
                        sparkle,
                        "animationDelay",
                        random(0, 1) + "s"
                    );

                    flight.appendChild(
                        sparkle
                    );
                }


                body.appendChild(
                    flight
                );


                window.setTimeout(
                    function () {

                        if (
                            flight &&
                            flight.parentNode
                        ) {

                            flight.parentNode.removeChild(
                                flight
                            );
                        }

                    },
                    16000
                );
            }


            /*
             * Premier passage assez rapidement,
             * puis régulièrement.
             */

            window.setTimeout(
                createSanta,
                2500
            );

            window.setInterval(
                createSanta,
                30000
            );
        }


        /* =================================================
           RENTREE
           ================================================= */

        if (
            body.classList &&
            body.classList.contains("theme-rentree")
        ) {

            var p;

            for (p = 0; p < 18; p++) {

                var paper =
                    particle(
                        "school-paper",
                        random(0, 100),
                        random(11, 20),
                        -random(0, 20)
                    );

                cssVar(
                    paper,
                    "--drift1",
                    random(-100, 120) + "px"
                );

                cssVar(
                    paper,
                    "--drift2",
                    random(-120, 120) + "px"
                );

                cssVar(
                    paper,
                    "--drift3",
                    random(-140, 140) + "px"
                );

                cssVar(
                    paper,
                    "--drift4",
                    random(-100, 100) + "px"
                );
            }


            for (p = 0; p < 10; p++) {

                var pencil =
                    particle(
                        "school-pencil",
                        random(0, 100),
                        random(12, 22),
                        -random(0, 22)
                    );

                cssVar(
                    pencil,
                    "--drift",
                    random(-120, 120) + "px"
                );
            }
        }


        /* =================================================
           SAINT VALENTIN
           ================================================= */

        if (
            body.classList &&
            body.classList.contains(
                "theme-saint-valentin"
            )
        ) {

            var h;

            for (h = 0; h < 35; h++) {

                var heart =
                    particle(
                        "heart-particle",
                        random(0, 100),
                        random(8, 16),
                        -random(0, 16)
                    );

                cssVar(
                    heart,
                    "--drift",
                    random(-100, 100) + "px"
                );

                cssVar(
                    heart,
                    "--drift2",
                    random(-120, 120) + "px"
                );
            }
        }


        /* =================================================
           PAQUES
           ================================================= */

        if (
            body.classList &&
            body.classList.contains("theme-paques")
        ) {

            var e;

            var eggClasses = [
                "egg-pink",
                "egg-blue",
                "egg-yellow",
                "egg-purple"
            ];


            for (e = 0; e < 20; e++) {

                var egg =
                    particle(
                        "easter-egg " +
                        eggClasses[
                            randomInt(
                                0,
                                eggClasses.length - 1
                            )
                        ],
                        random(0, 100),
                        random(10, 18),
                        -random(0, 18)
                    );

                cssVar(
                    egg,
                    "--drift",
                    random(-100, 100) + "px"
                );

                cssVar(
                    egg,
                    "--drift2",
                    random(-120, 120) + "px"
                );
            }


            for (e = 0; e < 25; e++) {

                var flower =
                    particle(
                        "spring-flower",
                        random(0, 100),
                        random(9, 17),
                        -random(0, 17)
                    );

                cssVar(
                    flower,
                    "--drift",
                    random(-100, 100) + "px"
                );
            }
        }


        /* =================================================
           HALLOWEEN
           ================================================= */

        if (
            body.classList &&
            body.classList.contains(
                "theme-halloween"
            )
        ) {

            var moon =
                document.createElement("div");

            moon.className =
                "halloween-moon";

            layer.appendChild(
                moon
            );


            var fog =
                document.createElement("div");

            fog.className =
                "halloween-fog";

            layer.appendChild(
                fog
            );


            var b;

            for (b = 0; b < 12; b++) {

                var bat =
                    particle(
                        "bat",
                        random(-10, 100),
                        random(10, 20),
                        -random(0, 20)
                    );

                cssVar(
                    bat,
                    "--wave1",
                    random(-120, 20) + "px"
                );

                cssVar(
                    bat,
                    "--wave2",
                    random(20, 120) + "px"
                );

                cssVar(
                    bat,
                    "--wave3",
                    random(-100, 60) + "px"
                );

                cssVar(
                    bat,
                    "--wave4",
                    random(-50, 80) + "px"
                );
            }


            var pumpkinCount;

            for (
                pumpkinCount = 0;
                pumpkinCount < 12;
                pumpkinCount++
            ) {

                var pumpkin =
                    particle(
                        "pumpkin",
                        random(0, 100),
                        random(1.5, 3),
                        -random(0, 3)
                    );

                setStyle(
                    pumpkin,
                    "top",
                    random(10, 90) + "%"
                );
            }
        }


        /* =================================================
           NOUVEL AN
           ================================================= */

        if (
            body.classList &&
            body.classList.contains(
                "theme-nouvel-an"
            )
        ) {

            var n;

            for (n = 0; n < 65; n++) {

                var star =
                    particle(
                        "newyear-star",
                        random(0, 100),
                        random(2, 5),
                        -random(0, 5)
                    );

                cssVar(
                    star,
                    "--size",
                    random(2, 5) + "px"
                );
            }


            function createFirework() {

                var firework =
                    document.createElement("div");

                firework.className =
                    "firework";

                setStyle(
                    firework,
                    "left",
                    random(12, 88) + "%"
                );

                setStyle(
                    firework,
                    "top",
                    random(8, 55) + "%"
                );

                setStyle(
                    firework,
                    "animationDelay",
                    "0s"
                );

                layer.appendChild(
                    firework
                );


                window.setTimeout(
                    function () {

                        if (
                            firework &&
                            firework.parentNode
                        ) {

                            firework.parentNode.removeChild(
                                firework
                            );
                        }

                    },
                    2800
                );
            }


            /*
             * Départ avec plusieurs explosions.
             */

            var f;

            for (f = 0; f < 6; f++) {

                window.setTimeout(
                    createFirework,
                    f * 650
                );
            }


            window.setInterval(
                createFirework,
                1800
            );
        }


        /* =================================================
           ETE
           ================================================= */

        if (
            body.classList &&
            body.classList.contains("theme-ete")
        ) {

            var sun =
                document.createElement("div");

            sun.className =
                "sun";

            layer.appendChild(
                sun
            );


            var beach;

            for (beach = 0; beach < 20; beach++) {

                var beachParticle =
                    particle(
                        "beach-particle",
                        random(0, 100),
                        random(8, 14),
                        -random(0, 14)
                    );

                cssVar(
                    beachParticle,
                    "--drift",
                    random(-100, 100) + "px"
                );
            }
        }


        /* =================================================
           AUTOMNE
           ================================================= */

        if (
            body.classList &&
            body.classList.contains(
                "theme-automne"
            )
        ) {

            var gust =
                document.createElement("div");

            gust.className =
                "autumn-gust";

            layer.appendChild(
                gust
            );


            var leafColors = [
                ["#92400e", "#d97706"],
                ["#b45309", "#f59e0b"],
                ["#7c2d12", "#ea580c"],
                ["#9f1239", "#f97316"],
                ["#854d0e", "#eab308"]
            ];


            var l;

            for (l = 0; l < 42; l++) {

                var leaf =
                    particle(
                        "leaf-particle",
                        random(0, 100),
                        random(9, 18),
                        -random(0, 18)
                    );


                var colors =
                    leafColors[
                        randomInt(
                            0,
                            leafColors.length - 1
                        )
                    ];


                cssVar(
                    leaf,
                    "--leaf1",
                    colors[0]
                );

                cssVar(
                    leaf,
                    "--leaf2",
                    colors[1]
                );

                cssVar(
                    leaf,
                    "--leaf-width",
                    random(12, 22) + "px"
                );

                cssVar(
                    leaf,
                    "--leaf-height",
                    random(17, 29) + "px"
                );


                cssVar(
                    leaf,
                    "--drift1",
                    random(-130, 150) + "px"
                );

                cssVar(
                    leaf,
                    "--drift2",
                    random(-150, 150) + "px"
                );

                cssVar(
                    leaf,
                    "--drift3",
                    random(-160, 160) + "px"
                );

                cssVar(
                    leaf,
                    "--drift4",
                    random(-130, 130) + "px"
                );

                cssVar(
                    leaf,
                    "--drift5",
                    random(-170, 170) + "px"
                );
            }
        }

    }


    /* =====================================================
       LANCEMENT ROBUSTE
       ===================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initSeasonal
        );

    } else {

        initSeasonal();
    }

})();
```
