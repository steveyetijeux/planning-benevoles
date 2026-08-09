/* =========================================================
   PLANNING FOYER MDL
   ANIMATIONS SAISONNIERES
   VERSION STABLE - AUCUNE DEPENDANCE
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
         * Ne jamais créer deux systèmes d'animation.
         */

        var oldLayer = document.querySelector(".season-layer");

        if (oldLayer) {
            oldLayer.parentNode.removeChild(oldLayer);
        }


        var layer = document.createElement("div");

        layer.className = "season-layer";

        body.appendChild(layer);


        /* =================================================
           OUTILS
        ================================================= */

        function random(min, max) {
            return min + Math.random() * (max - min);
        }


        function setVariable(element, name, value) {
            element.style.setProperty(name, value);
        }


        function createParticle(className, options) {

            var element =
                document.createElement("div");

            element.className =
                "season-particle " + className;


            /*
             * Position initiale complètement indépendante.
             */

            var x =
                random(-10, 100);


            setVariable(
                element,
                "--x0",
                x + "vw"
            );


            /*
             * Chaque particule possède ses propres
             * déplacements horizontaux.
             */

            setVariable(
                element,
                "--drift1",
                random(-140, 140) + "px"
            );

            setVariable(
                element,
                "--drift2",
                random(-180, 180) + "px"
            );

            setVariable(
                element,
                "--drift3",
                random(-220, 220) + "px"
            );

            setVariable(
                element,
                "--drift4",
                random(-260, 260) + "px"
            );


            setVariable(
                element,
                "--duration",
                random(
                    options.minDuration,
                    options.maxDuration
                ) + "s"
            );


            setVariable(
                element,
                "--scale",
                random(
                    options.minScale || 0.6,
                    options.maxScale || 1.3
                )
            );


            setVariable(
                element,
                "--opacity",
                random(
                    options.minOpacity || 0.45,
                    options.maxOpacity || 1
                )
            );


            setVariable(
                element,
                "--rot0",
                random(-180, 180) + "deg"
            );


            if (options.y !== undefined) {

                setVariable(
                    element,
                    "--y0",
                    options.y + "vh"
                );
            }


            if (options.leaf) {

                var leafColors = [
                    ["#b91c1c", "#ef4444"],
                    ["#c2410c", "#f97316"],
                    ["#92400e", "#d97706"],
                    ["#a16207", "#eab308"],
                    ["#7c2d12", "#ea580c"]
                ];

                var pair =
                    leafColors[
                        Math.floor(
                            Math.random() *
                            leafColors.length
                        )
                    ];


                setVariable(
                    element,
                    "--leaf1",
                    pair[0]
                );

                setVariable(
                    element,
                    "--leaf2",
                    pair[1]
                );
            }


            layer.appendChild(element);

            return element;
        }


        function createParticles(
            className,
            count,
            minDuration,
            maxDuration,
            options
        ) {

            var i;

            options =
                options || {};


            options.minDuration =
                minDuration;

            options.maxDuration =
                maxDuration;


            for (i = 0; i < count; i++) {

                createParticle(
                    className,
                    options
                );
            }
        }


        /* =================================================
           NOEL
        ================================================= */

        if (
            body.classList.contains(
                "theme-noel"
            )
        ) {

            createParticles(
                "snowflake",
                70,
                10,
                23,
                {
                    minScale: .45,
                    maxScale: 1.5,
                    minOpacity: .45,
                    maxOpacity: 1
                }
            );


            createParticles(
                "snow-crystal",
                14,
                13,
                24,
                {
                    minScale: .55,
                    maxScale: 1.15,
                    minOpacity: .5,
                    maxOpacity: .9
                }
            );


            createParticles(
                "star",
                25,
                2,
                5,
                {
                    minScale: .5,
                    maxScale: 1.4,
                    minOpacity: .2,
                    maxOpacity: 1
                }
            );


            createParticles(
                "christmas-light",
                20,
                1.5,
                3,
                {
                    minScale: .7,
                    maxScale: 1.2,
                    minOpacity: .3,
                    maxOpacity: 1
                }
            );


            /*
             * Pere Noel / traineau.
             */

            function createSleigh() {

                if (
                    document.querySelector(
                        ".santa-sleigh"
                    )
                ) {
                    return;
                }


                var sleigh =
                    document.createElement("div");

                sleigh.className =
                    "santa-sleigh";


                var snow =
                    document.createElement("div");

                snow.className =
                    "sleigh-snow";


                var reindeer =
                    document.createElement("div");

                reindeer.className =
                    "sleigh-reindeer";


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


                sleigh.appendChild(snow);
                sleigh.appendChild(reindeer);
                sleigh.appendChild(sleighBody);
                sleigh.appendChild(runner1);
                sleigh.appendChild(runner2);


                body.appendChild(sleigh);


                window.setTimeout(
                    function () {

                        if (
                            sleigh.parentNode
                        ) {

                            sleigh.parentNode
                                .removeChild(
                                    sleigh
                                );
                        }

                    },
                    16000
                );
            }


            window.setTimeout(
                createSleigh,
                3000
            );


            window.setInterval(
                createSleigh,
                30000
            );
        }


        /* =================================================
           RENTREE
        ================================================= */

        if (
            body.classList.contains(
                "theme-rentree"
            )
        ) {

            createParticles(
                "school-paper",
                15,
                11,
                22,
                {
                    minScale: .7,
                    maxScale: 1.25,
                    minOpacity: .55,
                    maxOpacity: .95
                }
            );


            createParticles(
                "school-pencil",
                7,
                13,
                25,
                {
                    minScale: .7,
                    maxScale: 1.15,
                    minOpacity: .6,
                    maxOpacity: 1
                }
            );
        }


        /* =================================================
           SAINT VALENTIN
        ================================================= */

        if (
            body.classList.contains(
                "theme-saint-valentin"
            )
        ) {

            createParticles(
                "heart-particle",
                30,
                9,
                19,
                {
                    minScale: .55,
                    maxScale: 1.3,
                    minOpacity: .45,
                    maxOpacity: .95
                }
            );
        }


        /* =================================================
           PAQUES
        ================================================= */

        if (
            body.classList.contains(
                "theme-paques"
            )
        ) {

            createParticles(
                "easter-egg",
                16,
                11,
                21,
                {
                    minScale: .65,
                    maxScale: 1.2,
                    minOpacity: .65,
                    maxOpacity: 1
                }
            );


            createParticles(
                "spring-flower",
                22,
                9,
                19,
                {
                    minScale: .6,
                    maxScale: 1.2,
                    minOpacity: .45,
                    maxOpacity: .9
                }
            );
        }


        /* =================================================
           HALLOWEEN
        ================================================= */

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
                10,
                11,
                22,
                {
                    minScale: .65,
                    maxScale: 1.2,
                    minOpacity: .7,
                    maxOpacity: 1
                }
            );


            createParticles(
                "pumpkin",
                9,
                5,
                11,
                {
                    minScale: .75,
                    maxScale: 1.2,
                    minOpacity: .7,
                    maxOpacity: 1
                }
            );
        }


        /* =================================================
           NOUVEL AN
        ================================================= */

        if (
            body.classList.contains(
                "theme-nouvel-an"
            )
        ) {

            createParticles(
                "newyear-star",
                60,
                2,
                6,
                {
                    minScale: .5,
                    maxScale: 1.5,
                    minOpacity: .2,
                    maxOpacity: 1
                }
            );


            function createFirework() {

                var firework =
                    document.createElement("div");

                firework.className =
                    "firework";


                firework.style.left =
                    random(10, 85) + "%";


                firework.style.top =
                    random(8, 48) + "%";


                layer.appendChild(
                    firework
                );


                window.setTimeout(
                    function () {

                        if (
                            firework.parentNode
                        ) {

                            firework.parentNode
                                .removeChild(
                                    firework
                                );
                        }

                    },
                    3000
                );
            }


            var j;

            for (
                j = 0;
                j < 6;
                j++
            ) {

                window.setTimeout(
                    createFirework,
                    j * 800
                );
            }


            window.setInterval(
                createFirework,
                3000
            );
        }


        /* =================================================
           ETE
        ================================================= */

        if (
            body.classList.contains(
                "theme-ete"
            )
        ) {

            var sun =
                document.createElement("div");

            sun.className =
                "sun";

            body.appendChild(sun);
        }


        /* =================================================
           AUTOMNE
        ================================================= */

        if (
            body.classList.contains(
                "theme-automne"
            )
        ) {

            createParticles(
                "leaf-particle",
                40,
                9,
                20,
                {
                    leaf: true,
                    minScale: .55,
                    maxScale: 1.3,
                    minOpacity: .55,
                    maxOpacity: 1
                }
            );
        }
    }


    /* =====================================================
       DEMARRAGE ROBUSTE
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