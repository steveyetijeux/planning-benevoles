/* =========================================================
   PLANNING FOYER MDL
   ANIMATIONS SAISONNIERES
   VERSION ROBUSTE
========================================================= */

(function () {

    "use strict";

    function initSeasonal() {

        var body = document.body;

        if (!body) {
            return;
        }

        /*
         * Evite de créer plusieurs couches si le script
         * est chargé plusieurs fois.
         */
        var oldLayer = document.querySelector(".season-layer");

        if (oldLayer) {
            oldLayer.parentNode.removeChild(oldLayer);
        }

        var layer = document.createElement("div");
        layer.className = "season-layer";

        body.appendChild(layer);


        /* =====================================================
           OUTIL PARTICULES
        ===================================================== */

        function createParticles(className, count, minDuration, maxDuration) {

            var i;
            var particle;

            for (i = 0; i < count; i++) {

                particle = document.createElement("div");

                particle.className =
                    "season-particle " + className;

                particle.style.left =
                    (Math.random() * 100) + "%";

                particle.style.animationDuration =
                    (
                        minDuration +
                        Math.random() *
                        (maxDuration - minDuration)
                    ) + "s";

                particle.style.animationDelay =
                    (-Math.random() * maxDuration) + "s";

                layer.appendChild(particle);
            }
        }


        /* =====================================================
           NOEL
        ===================================================== */

        if (body.classList.contains("theme-noel")) {

            createParticles(
                "snowflake",
                55,
                9,
                18
            );

            createParticles(
                "star",
                25,
                2,
                5
            );

            createParticles(
                "christmas-light",
                18,
                1.5,
                3
            );


            function createSleigh() {

                var sleigh;
                var snow;
                var reindeer;
                var sleighBody;
                var runner1;
                var runner2;
                var santa;
                var santaHead;
                var santaBeard;
                var santaHat;
                var santaBody;
                var santaArmLeft;
                var santaArmRight;
                var santaBelt;
                var santaBootLeft;
                var santaBootRight;

                if (document.querySelector(".santa-sleigh")) {
                    return;
                }

                sleigh = document.createElement("div");
                sleigh.className = "santa-sleigh";

                snow = document.createElement("div");
                snow.className = "sleigh-snow";

                reindeer = document.createElement("div");
                reindeer.className = "sleigh-reindeer";

                sleighBody = document.createElement("div");
                sleighBody.className = "sleigh-body";

                runner1 = document.createElement("div");
                runner1.className = "sleigh-runner";

                runner2 = document.createElement("div");
                runner2.className = "sleigh-runner second";

                santa = document.createElement("div");
                santa.className = "santa-character";

                santaBody = document.createElement("div");
                santaBody.className = "santa-body";

                santaHead = document.createElement("div");
                santaHead.className = "santa-head";

                santaBeard = document.createElement("div");
                santaBeard.className = "santa-beard";

                santaHat = document.createElement("div");
                santaHat.className = "santa-hat";

                santaArmLeft = document.createElement("div");
                santaArmLeft.className =
                    "santa-arm santa-arm-left";

                santaArmRight = document.createElement("div");
                santaArmRight.className =
                    "santa-arm santa-arm-right";

                santaBelt = document.createElement("div");
                santaBelt.className = "santa-belt";

                santaBootLeft = document.createElement("div");
                santaBootLeft.className =
                    "santa-boot santa-boot-left";

                santaBootRight = document.createElement("div");
                santaBootRight.className =
                    "santa-boot santa-boot-right";


                santa.appendChild(santaBody);
                santa.appendChild(santaHead);
                santa.appendChild(santaBeard);
                santa.appendChild(santaHat);
                santa.appendChild(santaArmLeft);
                santa.appendChild(santaArmRight);
                santa.appendChild(santaBelt);
                santa.appendChild(santaBootLeft);
                santa.appendChild(santaBootRight);


                sleigh.appendChild(snow);
                sleigh.appendChild(reindeer);
                sleigh.appendChild(sleighBody);
                sleigh.appendChild(santa);
                sleigh.appendChild(runner1);
                sleigh.appendChild(runner2);

                body.appendChild(sleigh);


                window.setTimeout(function () {

                    if (sleigh.parentNode) {

                        sleigh.parentNode.removeChild(
                            sleigh
                        );

                    }

                }, 14000);
            }


            window.setTimeout(
                createSleigh,
                4000
            );

            window.setInterval(
                createSleigh,
                30000
            );
        }


        /* =====================================================
           RENTREE
        ===================================================== */

        if (body.classList.contains("theme-rentree")) {

            createParticles(
                "school-paper",
                12,
                10,
                20
            );

            createParticles(
                "school-pencil",
                7,
                12,
                22
            );
        }


        /* =====================================================
           SAINT-VALENTIN
        ===================================================== */

        if (body.classList.contains("theme-saint-valentin")) {

            createParticles(
                "heart-particle",
                30,
                8,
                16
            );
        }


        /* =====================================================
           PAQUES
        ===================================================== */

        if (body.classList.contains("theme-paques")) {

            createParticles(
                "easter-egg",
                18,
                10,
                18
            );

            createParticles(
                "spring-flower",
                20,
                9,
                17
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


            createParticles(
                "bat",
                10,
                10,
                20
            );

            createParticles(
                "pumpkin",
                10,
                5,
                10
            );
        }


        /* =====================================================
           NOUVEL AN
        ===================================================== */

        if (body.classList.contains("theme-nouvel-an")) {

            createParticles(
                "newyear-star",
                50,
                2,
                5
            );


            function createFirework() {

                var firework =
                    document.createElement("div");

                firework.className =
                    "firework";

                firework.style.left =
                    (15 + Math.random() * 70) + "%";

                firework.style.top =
                    (10 + Math.random() * 45) + "%";

                firework.style.animationDelay =
                    (Math.random() * 2) + "s";

                layer.appendChild(
                    firework
                );


                window.setTimeout(function () {

                    if (firework.parentNode) {

                        firework.parentNode.removeChild(
                            firework
                        );

                    }

                }, 3000);
            }


            var j;

            for (j = 0; j < 5; j++) {

                window.setTimeout(
                    createFirework,
                    j * 900
                );
            }


            window.setInterval(
                createFirework,
                3200
            );
        }


        /* =====================================================
           ETE
        ===================================================== */

        if (body.classList.contains("theme-ete")) {

            var sun =
                document.createElement("div");

            sun.className =
                "sun";

            body.appendChild(
                sun
            );
        }


        /* =====================================================
           AUTOMNE
        ===================================================== */

        if (body.classList.contains("theme-automne")) {

            createParticles(
                "leaf-particle",
                30,
                8,
                17
            );
        }

    }


    /* =========================================================
       INITIALISATION
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