/* ============================================================
   PLANNING FOYER MDL
   SEASONAL EXPERIENCE
   VERSION 2 - STABLE
   ============================================================ */

(function () {

    "use strict";

    function startSeasonal() {

        var body = document.body;

        if (!body) {
            return;
        }

        /*
         * Évite les doublons si Django charge le script
         * plusieurs fois ou après une navigation.
         */
        var oldLayer = document.querySelector(".season-layer");

        if (oldLayer) {
            oldLayer.parentNode.removeChild(oldLayer);
        }

        var layer = document.createElement("div");
        layer.className = "season-layer";
        body.appendChild(layer);


        /* ====================================================
           OUTILS
           ==================================================== */

        function random(min, max) {
            return min + Math.random() * (max - min);
        }

        function randomInt(min, max) {
            return Math.floor(random(min, max + 1));
        }

        function setVar(element, name, value) {
            element.style.setProperty(name, value);
        }

        function particle(className) {

            var element = document.createElement("div");

            element.className =
                "season-particle " + className;

            layer.appendChild(element);

            return element;
        }

        function createParticles(
            className,
            count,
            setup
        ) {

            var i;
            var element;

            for (i = 0; i < count; i++) {

                element = particle(className);

                if (setup) {
                    setup(element, i);
                }
            }
        }


        /* ====================================================
           NOËL
           ==================================================== */

        if (body.classList.contains("theme-noel")) {

            createParticles(
                "snowflake",
                85,
                function (el) {

                    el.style.left =
                        random(0, 100) + "%";

                    setVar(
                        el,
                        "--size",
                        random(4, 11) + "px"
                    );

                    setVar(
                        el,
                        "--duration",
                        random(10, 22) + "s"
                    );

                    setVar(
                        el,
                        "--delay",
                        random(-22, 0) + "s"
                    );

                    setVar(
                        el,
                        "--opacity",
                        random(.45, 1)
                    );

                    setVar(
                        el,
                        "--x1",
                        random(-10, 10) + "vw"
                    );

                    setVar(
                        el,
                        "--x2",
                        random(-16, 16) + "vw"
                    );

                    setVar(
                        el,
                        "--x3",
                        random(-13, 13) + "vw"
                    );

                    setVar(
                        el,
                        "--x4",
                        random(-18, 18) + "vw"
                    );
                }
            );


            createParticles(
                "star",
                30,
                function (el) {

                    el.style.left =
                        random(2, 98) + "%";

                    el.style.top =
                        random(3, 70) + "%";

                    setVar(
                        el,
                        "--star-size",
                        random(2, 5) + "px"
                    );

                    setVar(
                        el,
                        "--duration",
                        random(2, 5) + "s"
                    );

                    setVar(
                        el,
                        "--delay",
                        random(-5, 0) + "s"
                    );
                }
            );


            createParticles(
                "christmas-light",
                24,
                function (el) {

                    el.style.left =
                        random(2, 98) + "%";

                    el.style.top =
                        random(5, 55) + "%";

                    setVar(
                        el,
                        "--duration",
                        random(1.2, 3) + "s"
                    );

                    setVar(
                        el,
                        "--delay",
                        random(-3, 0) + "s"
                    );
                }
            );


            /*
             * Père Noël.
             * Création entièrement en DOM.
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

                santa.style.setProperty(
                    "--santa-top",
                    random(8, 24) + "vh"
                );

                var spark =
                    document.createElement("div");

                spark.className =
                    "sleigh-spark";

                var bodySanta =
                    document.createElement("div");

                bodySanta.className =
                    "santa-body";

                var head =
                    document.createElement("div");

                head.className =
                    "santa-head";

                var hat =
                    document.createElement("div");

                hat.className =
                    "santa-hat";

                var arm =
                    document.createElement("div");

                arm.className =
                    "santa-arm";

                var sleighBody =
                    document.createElement("div");

                sleighBody.className =
                    "sleigh-body";

                var runner1 =
                    document.createElement("div");

                runner1.className =
                    "sleigh-runner";

                var runner2 =
                    document.createElement("div");

                runner2.className =
                    "sleigh-runner second";

                var reindeer =
                    document.createElement("div");

                reindeer.className =
                    "reindeer";

                santa.appendChild(spark);
                santa.appendChild(sleighBody);
                santa.appendChild(runner1);
                santa.appendChild(runner2);
                santa.appendChild(reindeer);
                santa.appendChild(bodySanta);
                santa.appendChild(head);
                santa.appendChild(hat);
                santa.appendChild(arm);

                body.appendChild(santa);

                window.setTimeout(
                    function () {

                        if (santa.parentNode) {
                            santa.parentNode.removeChild(
                                santa
                            );
                        }

                    },
                    14500
                );
            }


            window.setTimeout(
                createSanta,
                3500
            );

            window.setInterval(
                createSanta,
                32000
            );
        }


        /* ====================================================
           RENTRÉE
           ==================================================== */

        if (
            body.classList.contains(
                "theme-rentree"
            )
        ) {

            createParticles(
                "school-paper",
                14,
                function (el) {

                    el.style.left =
                        random(0, 100) + "%";

                    setVar(
                        el,
                        "--paper-w",
                        random(17, 28) + "px"
                    );

                    setVar(
                        el,
                        "--paper-h",
                        random(24, 38) + "px"
                    );

                    setVar(
                        el,
                        "--duration",
                        random(11, 22) + "s"
                    );

                    setVar(
                        el,
                        "--delay",
                        random(-22, 0) + "s"
                    );

                    setVar(
                        el,
                        "--x1",
                        random(-100, 100) + "px"
                    );

                    setVar(
                        el,
                        "--x2",
                        random(-130, 130) + "px"
                    );

                    setVar(
                        el,
                        "--x3",
                        random(-120, 120) + "px"
                    );

                    setVar(
                        el,
                        "--x4",
                        random(-150, 150) + "px"
                    );

                    setVar(
                        el,
                        "--rot-start",
                        random(-40, 40) + "deg"
                    );

                    setVar(
                        el,
                        "--rot1",
                        random(20, 160) + "deg"
                    );

                    setVar(
                        el,
                        "--rot2",
                        random(100, 280) + "deg"
                    );

                    setVar(
                        el,
                        "--rot3",
                        random(180, 400) + "deg"
                    );

                    setVar(
                        el,
                        "--rot4",
                        random(300, 600) + "deg"
                    );
                }
            );


            createParticles(
                "school-pencil",
                7,
                function (el) {

                    el.style.left =
                        random(0, 100) + "%";

                    setVar(
                        el,
                        "--duration",
                        random(12, 23) + "s"
                    );

                    setVar(
                        el,
                        "--delay",
                        random(-22, 0) + "s"
                    );

                    setVar(
                        el,
                        "--drift",
                        random(-180, 180) + "px"
                    );

                    setVar(
                        el,
                        "--rotation",
                        random(300, 700) + "deg"
                    );
                }
            );
        }


        /* ====================================================
           SAINT-VALENTIN
           ==================================================== */

        if (
            body.classList.contains(
                "theme-saint-valentin"
            )
        ) {

            createParticles(
                "heart-particle",
                28,
                function (el) {

                    el.style.left =
                        random(0, 100) + "%";

                    setVar(
                        el,
                        "--heart-size",
                        random(10, 22) + "px"
                    );

                    setVar(
                        el,
                        "--duration",
                        random(8, 17) + "s"
                    );

                    setVar(
                        el,
                        "--delay",
                        random(-17, 0) + "s"
                    );

                    setVar(
                        el,
                        "--x1",
                        random(-80, 80) + "px"
                    );

                    setVar(
                        el,
                        "--x2",
                        random(-100, 100) + "px"
                    );

                    setVar(
                        el,
                        "--x3",
                        random(-70, 70) + "px"
                    );
                }
            );
        }


        /* ====================================================
           PÂQUES
           ==================================================== */

        if (
            body.classList.contains(
                "theme-paques"
            )
        ) {

            var eggColors = [
                "#f9a8d4",
                "#93c5fd",
                "#fde68a",
                "#86efac",
                "#c4b5fd",
                "#fdba74"
            ];

            createParticles(
                "easter-egg",
                18,
                function (el, index) {

                    el.style.left =
                        random(0, 100) + "%";

                    setVar(
                        el,
                        "--egg-color",
                        eggColors[
                            index % eggColors.length
                        ]
                    );

                    setVar(
                        el,
                        "--egg-w",
                        random(17, 27) + "px"
                    );

                    setVar(
                        el,
                        "--egg-h",
                        random(24, 36) + "px"
                    );

                    setVar(
                        el,
                        "--duration",
                        random(10, 19) + "s"
                    );

                    setVar(
                        el,
                        "--delay",
                        random(-19, 0) + "s"
                    );

                    setVar(
                        el,
                        "--x1",
                        random(-80, 80) + "px"
                    );

                    setVar(
                        el,
                        "--x2",
                        random(-110, 110) + "px"
                    );

                    setVar(
                        el,
                        "--x3",
                        random(-80, 80) + "px"
                    );
                }
            );


            createParticles(
                "spring-flower",
                22,
                function (el) {

                    el.style.left =
                        random(0, 100) + "%";

                    setVar(
                        el,
                        "--duration",
                        random(9, 18) + "s"
                    );

                    setVar(
                        el,
                        "--delay",
                        random(-18, 0) + "s"
                    );

                    setVar(
                        el,
                        "--drift",
                        random(-120, 120) + "px"
                    );
                }
            );


            createParticles(
                "butterfly",
                5,
                function (el) {

                    setVar(
                        el,
                        "--duration",
                        random(13, 21) + "s"
                    );

                    setVar(
                        el,
                        "--delay",
                        random(-20, 0) + "s"
                    );
                }
            );
        }


        /* ====================================================
           HALLOWEEN
           ==================================================== */

        if (
            body.classList.contains(
                "theme-halloween"
            )
        ) {

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
                9,
                function (el) {

                    el.style.top =
                        random(10, 65) + "vh";

                    setVar(
                        el,
                        "--duration",
                        random(10, 20) + "s"
                    );

                    setVar(
                        el,
                        "--delay",
                        random(-20, 0) + "s"
                    );

                    setVar(
                        el,
                        "--y0",
                        random(-30, 40) + "px"
                    );

                    setVar(
                        el,
                        "--y1",
                        random(-100, 80) + "px"
                    );

                    setVar(
                        el,
                        "--y2",
                        random(-70, 100) + "px"
                    );
                }
            );


            createParticles(
                "pumpkin",
                8,
                function (el) {

                    el.style.left =
                        random(5, 95) + "%";

                    el.style.top =
                        random(35, 90) + "%";

                    setVar(
                        el,
                        "--duration",
                        random(4, 8) + "s"
                    );

                    setVar(
                        el,
                        "--delay",
                        random(-8, 0) + "s"
                    );
                }
            );
        }


        /* ====================================================
           NOUVEL AN
           ==================================================== */

        if (
            body.classList.contains(
                "theme-nouvel-an"
            )
        ) {

            createParticles(
                "newyear-star",
                55,
                function (el) {

                    el.style.left =
                        random(0, 100) + "%";

                    el.style.top =
                        random(0, 75) + "%";

                    setVar(
                        el,
                        "--star-size",
                        random(2, 5) + "px"
                    );

                    setVar(
                        el,
                        "--duration",
                        random(1.5, 4) + "s"
                    );

                    setVar(
                        el,
                        "--delay",
                        random(-4, 0) + "s"
                    );
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
                    random(8, 52) + "%";

                firework.style.animationDelay =
                    random(0, 1.2) + "s";

                layer.appendChild(firework);

                window.setTimeout(
                    function () {

                        if (firework.parentNode) {
                            firework.parentNode.removeChild(
                                firework
                            );
                        }

                    },
                    3000
                );
            }


            var f;

            for (f = 0; f < 6; f++) {

                window.setTimeout(
                    createFirework,
                    f * 750
                );
            }


            window.setInterval(
                createFirework,
                2800
            );
        }


        /* ====================================================
           ÉTÉ
           ==================================================== */

        if (
            body.classList.contains(
                "theme-ete"
            )
        ) {

            var sun =
                document.createElement("div");

            sun.className = "sun";

            body.appendChild(sun);


            createParticles(
                "summer-glow",
                25,
                function (el) {

                    el.style.left =
                        random(0, 100) + "%";

                    setVar(
                        el,
                        "--duration",
                        random(7, 14) + "s"
                    );

                    setVar(
                        el,
                        "--delay",
                        random(-14, 0) + "s"
                    );

                    setVar(
                        el,
                        "--drift",
                        random(-100, 100) + "px"
                    );
                }
            );
        }


        /* ====================================================
           AUTOMNE
           ==================================================== */

        if (
            body.classList.contains(
                "theme-automne"
            )
        ) {

            var leafColors = [
                "#b45309",
                "#d97706",
                "#ea580c",
                "#dc2626",
                "#92400e",
                "#ca8a04"
            ];


            createParticles(
                "leaf-particle",
                45,
                function (el, index) {

                    el.style.left =
                        random(0, 100) + "%";

                    setVar(
                        el,
                        "--leaf-color",
                        leafColors[
                            index % leafColors.length
                        ]
                    );

                    setVar(
                        el,
                        "--leaf-w",
                        random(10, 19) + "px"
                    );

                    setVar(
                        el,
                        "--leaf-h",
                        random(15, 27) + "px"
                    );

                    setVar(
                        el,
                        "--scale",
                        random(.65, 1.25)
                    );

                    setVar(
                        el,
                        "--duration",
                        random(8, 18) + "s"
                    );

                    setVar(
                        el,
                        "--delay",
                        random(-18, 0) + "s"
                    );

                    setVar(
                        el,
                        "--x1",
                        random(-130, 130) + "px"
                    );

                    setVar(
                        el,
                        "--x2",
                        random(-180, 180) + "px"
                    );

                    setVar(
                        el,
                        "--x3",
                        random(-160, 160) + "px"
                    );

                    setVar(
                        el,
                        "--x4",
                        random(-220, 220) + "px"
                    );

                    setVar(
                        el,
                        "--rotation-start",
                        random(-180, 180) + "deg"
                    );

                    setVar(
                        el,
                        "--rotation1",
                        random(60, 240) + "deg"
                    );

                    setVar(
                        el,
                        "--rotation2",
                        random(160, 420) + "deg"
                    );

                    setVar(
                        el,
                        "--rotation3",
                        random(260, 600) + "deg"
                    );

                    setVar(
                        el,
                        "--rotation4",
                        random(420, 800) + "deg"
                    );
                }
            );
        }

    }


    /* ========================================================
       DÉMARRAGE ROBUSTE
       ======================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            startSeasonal
        );

    } else {

        startSeasonal();

    }

})();