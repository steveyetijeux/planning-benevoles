/* =========================================================
   PLANNING FOYER MDL
   SYSTEME DE THEMES SAISONNIERS
   VERSION 100 - REBUILD COMPLET
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       INITIALISATION
    ===================================================== */

    function initSeasonal() {

        var body;
        var layer;
        var oldLayer;


        body = document.body;


        if (!body) {
            return;
        }


        /* -------------------------------------------------
           Supprimer une ancienne couche
        ------------------------------------------------- */

        oldLayer =
            document.querySelector(
                ".season-layer"
            );


        if (oldLayer) {

            oldLayer.parentNode.removeChild(
                oldLayer
            );

        }


        /* -------------------------------------------------
           Création de la couche
        ------------------------------------------------- */

        layer =
            document.createElement(
                "div"
            );


        layer.className =
            "season-layer";


        layer.setAttribute(
            "aria-hidden",
            "true"
        );


        body.appendChild(
            layer
        );


        /* =================================================
           OUTIL PARTICULES
        ================================================= */

        function createParticles(
            particleClass,
            count,
            minDuration,
            maxDuration
        ) {

            var i;
            var particle;
            var duration;
            var delay;


            for (
                i = 0;
                i < count;
                i++
            ) {

                particle =
                    document.createElement(
                        "div"
                    );


                particle.className =
                    "season-particle " +
                    particleClass;


                particle.style.left =
                    (
                        Math.random() * 100
                    ) + "%";


                duration =
                    minDuration +
                    (
                        Math.random() *
                        (
                            maxDuration -
                            minDuration
                        )
                    );


                delay =
                    Math.random() *
                    duration;


                particle.style.animationDuration =
                    duration + "s";


                particle.style.animationDelay =
                    "-" + delay + "s";


                layer.appendChild(
                    particle
                );

            }

        }


        /* =================================================
           NOËL
        ================================================= */

        if (
            body.classList.contains(
                "theme-noel"
            )
        ) {

            createParticles(
                "snowflake",
                70,
                8,
                16
            );


            createParticles(
                "star",
                30,
                2,
                5
            );


            createParticles(
                "christmas-light",
                24,
                1.5,
                3
            );


            /* ---------------------------------------------
               TRAINEAU
            --------------------------------------------- */

            function createSleigh() {

                var sleigh;
                var snow;
                var reindeer;
                var sleighBody;
                var runner1;
                var runner2;


                if (
                    document.querySelector(
                        ".santa-sleigh"
                    )
                ) {

                    return;

                }


                sleigh =
                    document.createElement(
                        "div"
                    );


                sleigh.className =
                    "santa-sleigh";


                snow =
                    document.createElement(
                        "div"
                    );


                snow.className =
                    "sleigh-snow";


                reindeer =
                    document.createElement(
                        "div"
                    );


                reindeer.className =
                    "sleigh-reindeer";


                sleighBody =
                    document.createElement(
                        "div"
                    );


                sleighBody.className =
                    "sleigh-body";


                runner1 =
                    document.createElement(
                        "div"
                    );


                runner1.className =
                    "sleigh-runner";


                runner2 =
                    document.createElement(
                        "div"
                    );


                runner2.className =
                    "sleigh-runner second";


                sleigh.appendChild(
                    snow
                );


                sleigh.appendChild(
                    reindeer
                );


                sleigh.appendChild(
                    sleighBody
                );


                sleigh.appendChild(
                    runner1
                );


                sleigh.appendChild(
                    runner2
                );


                body.appendChild(
                    sleigh
                );


                window.setTimeout(
                    function () {

                        if (
                            sleigh.parentNode
                        ) {

                            sleigh.parentNode.removeChild(
                                sleigh
                            );

                        }

                    },
                    14000
                );

            }


            window.setTimeout(
                createSleigh,
                3000
            );


            window.setInterval(
                createSleigh,
                25000
            );

        }


        /* =================================================
           RENTRÉE
        ================================================= */

        if (
            body.classList.contains(
                "theme-rentree"
            )
        ) {

            createParticles(
                "school-paper",
                15,
                9,
                16
            );


            createParticles(
                "school-pencil",
                8,
                10,
                18
            );

        }


        /* =================================================
           SAINT-VALENTIN
        ================================================= */

        if (
            body.classList.contains(
                "theme-saint-valentin"
            )
        ) {

            createParticles(
                "heart-particle",
                35,
                7,
                14
            );

        }


        /* =================================================
           PÂQUES
        ================================================= */

        if (
            body.classList.contains(
                "theme-paques"
            )
        ) {

            createParticles(
                "easter-egg",
                20,
                8,
                15
            );


            createParticles(
                "spring-flower",
                25,
                7,
                14
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
                document.createElement(
                    "div"
                );


            moon.className =
                "halloween-moon";


            body.appendChild(
                moon
            );


            var fog =
                document.createElement(
                    "div"
                );


            fog.className =
                "halloween-fog";


            body.appendChild(
                fog
            );


            createParticles(
                "bat",
                12,
                8,
                16
            );


            createParticles(
                "pumpkin",
                10,
                5,
                9
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
                55,
                2,
                5
            );


            function createFirework() {

                var firework =
                    document.createElement(
                        "div"
                    );


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
                        Math.random() * 45
                    ) + "%";


                firework.style.animationDelay =
                    (
                        Math.random() * 0.5
                    ) + "s";


                layer.appendChild(
                    firework
                );


                window.setTimeout(
                    function () {

                        if (
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


            var j;


            for (
                j = 0;
                j < 6;
                j++
            ) {

                window.setTimeout(
                    createFirework,
                    j * 700
                );

            }


            window.setInterval(
                createFirework,
                2400
            );

        }


        /* =================================================
           ÉTÉ
        ================================================= */

        if (
            body.classList.contains(
                "theme-ete"
            )
        ) {

            var sun =
                document.createElement(
                    "div"
                );


            sun.className =
                "sun";


            body.appendChild(
                sun
            );

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
                35,
                7,
                14
            );

        }


        /* =================================================
           DEBUG
        ================================================= */

        window.seasonalLoaded =
            true;


        window.seasonalTheme =
            body.className;


        window.seasonalParticles =
            layer.children.length;

    }


    /* =====================================================
       LANCEMENT
    ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initSeasonal
        );

    } else {

        initSeasonal();

    }


})();