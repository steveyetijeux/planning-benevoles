```javascript
/* =========================================================
   PLANNING FOYER MDL
   SEASONAL EXPERIENCE V2
   =========================================================

   Moteur d'animations saisonnières.

   IMPORTANT :
   - syntaxe volontairement classique
   - pas de classes JS
   - pas de modules
   - pas de dépendances
   - chaque particule reçoit ses propres paramètres
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    "use strict";

    var body = document.body;

    if (!body) {
        return;
    }


    /* =====================================================
       COUCHE PRINCIPALE
    ===================================================== */

    var layer = document.createElement("div");

    layer.className = "season-layer";

    body.appendChild(layer);


    /* =====================================================
       OUTILS
    ===================================================== */

    function random(min, max) {
        return min + Math.random() * (max - min);
    }

    function randomInt(min, max) {
        return Math.floor(random(min, max + 1));
    }

    function setVariable(element, name, value) {
        element.style.setProperty(name, value);
    }


    /*
       Création de particules avec paramètres individuels.
    */

    function createParticles(
        className,
        count,
        options
    ) {

        var i;
        var particle;
        var duration;
        var delay;

        options = options || {};

        for (i = 0; i < count; i++) {

            particle = document.createElement("div");

            particle.className =
                "season-particle " + className;

            particle.style.left =
                random(
                    options.minLeft || 0,
                    options.maxLeft || 100
                ) + "%";


            duration =
                random(
                    options.minDuration || 8,
                    options.maxDuration || 16
                );

            delay =
                -random(
                    0,
                    duration
                );


            setVariable(
                particle,
                "--duration",
                duration + "s"
            );

            setVariable(
                particle,
                "--delay",
                delay + "s"
            );


            if (options.opacity) {
                setVariable(
                    particle,
                    "--opacity",
                    random(
                        options.opacity[0],
                        options.opacity[1]
                    )
                );
            }


            if (options.scale) {
                setVariable(
                    particle,
                    "--scale",
                    random(
                        options.scale[0],
                        options.scale[1]
                    )
                );
            }


            if (options.size) {
                setVariable(
                    particle,
                    "--size",
                    random(
                        options.size[0],
                        options.size[1]
                    ) + "px"
                );
            }


            /* vent / trajectoire totalement individuelle */

            setVariable(
                particle,
                "--wind1",
                random(-120, 120) + "px"
            );

            setVariable(
                particle,
                "--wind2",
                random(-160, 160) + "px"
            );

            setVariable(
                particle,
                "--wind3",
                random(-180, 180) + "px"
            );

            setVariable(
                particle,
                "--wind4",
                random(-150, 150) + "px"
            );

            setVariable(
                particle,
                "--wind5",
                random(-180, 180) + "px"
            );


            if (options.extra) {
                options.extra(
                    particle,
                    i
                );
            }


            layer.appendChild(particle);
        }
    }


    /* =====================================================
       NOËL
    ===================================================== */

    if (body.classList.contains("theme-noel")) {

        /*
         * Neige principale.
         *
         * Beaucoup de flocons mais chacun possède
         * sa propre trajectoire.
         */

        createParticles(
            "snowflake",
            105,
            {
                minDuration: 9,
                maxDuration: 22,
                opacity: [.45, .98],
                scale: [.65, 1.45],
                size: [3, 10]
            }
        );


        /*
         * Petits flocons très lointains.
         */

        createParticles(
            "snowflake small",
            55,
            {
                minDuration: 15,
                maxDuration: 28,
                opacity: [.25, .65],
                scale: [.4, .8],
                size: [2, 5]
            }
        );


        /*
         * Étoiles.
         */

        createParticles(
            "star",
            32,
            {
                minDuration: 2,
                maxDuration: 5,
                size: [2, 5],
                opacity: [.2, 1]
            }
        );


        /*
         * Guirlande lumineuse.
         */

        createParticles(
            "christmas-light",
            22,
            {
                minDuration: 1.4,
                maxDuration: 3.2
            }
        );


        /*
         * Père Noël.
         */

        function createSanta() {

            if (document.querySelector(".santa-flight")) {
                return;
            }

            var santa;
            var glow;
            var trail;
            var sleigh;
            var runner1;
            var runner2;
            var claus;
            var head;
            var beard;
            var hat;
            var santaBody;
            var arm1;
            var arm2;
            var leg1;
            var leg2;
            var boot1;
            var boot2;

            santa = document.createElement("div");
            santa.className = "santa-flight";

            setVariable(
                santa,
                "--santa-top",
                random(9, 30) + "vh"
            );


            /*
             * halo
             */

            glow = document.createElement("div");
            glow.className = "santa-glow";


            /*
             * traînée magique
             */

            trail = document.createElement("div");
            trail.className = "santa-trail";


            /*
             * traîneau
             */

            sleigh = document.createElement("div");
            sleigh.className = "santa-sleigh-body";


            runner1 = document.createElement("div");
            runner1.className = "santa-runner";

            runner2 = document.createElement("div");
            runner2.className = "santa-runner second";


            /*
             * Père Noël.
             */

            claus = document.createElement("div");
            claus.className = "santa-claus";


            head = document.createElement("div");
            head.className = "santa-head";

            beard = document.createElement("div");
            beard.className = "santa-beard";

            hat = document.createElement("div");
            hat.className = "santa-hat";

            santaBody = document.createElement("div");
            santaBody.className = "santa-body";

            arm1 = document.createElement("div");
            arm1.className = "santa-arm left";

            arm2 = document.createElement("div");
            arm2.className = "santa-arm right";

            leg1 = document.createElement("div");
            leg1.className = "santa-leg left";

            leg2 = document.createElement("div");
            leg2.className = "santa-leg right";

            boot1 = document.createElement("div");
            boot1.className = "santa-boot left";

            boot2 = document.createElement("div");
            boot2.className = "santa-boot right";


            head.appendChild(hat);
            head.appendChild(beard);

            claus.appendChild(head);
            claus.appendChild(santaBody);
            claus.appendChild(arm1);
            claus.appendChild(arm2);
            claus.appendChild(leg1);
            claus.appendChild(leg2);
            claus.appendChild(boot1);
            claus.appendChild(boot2);


            santa.appendChild(glow);
            santa.appendChild(trail);
            santa.appendChild(sleigh);
            santa.appendChild(runner1);
            santa.appendChild(runner2);
            santa.appendChild(claus);


            body.appendChild(santa);


            window.setTimeout(
                function () {

                    if (santa.parentNode) {
                        santa.parentNode.removeChild(santa);
                    }

                },
                16000
            );
        }


        /*
         * Premier passage.
         */

        window.setTimeout(
            createSanta,
            3500
        );


        /*
         * Puis régulièrement.
         */

        window.setInterval(
            createSanta,
            30000
        );
    }


    /* =====================================================
       RENTRÉE
    ===================================================== */

    if (body.classList.contains("theme-rentree")) {

        createParticles(
            "school-paper",
            15,
            {
                minDuration: 11,
                maxDuration: 23,
                opacity: [.55, .9],
                scale: [.7, 1.15],

                extra: function (particle) {

                    setVariable(
                        particle,
                        "--paper-width",
                        random(18, 30) + "px"
                    );

                    setVariable(
                        particle,
                        "--paper-height",
                        random(25, 40) + "px"
                    );

                    setVariable(
                        particle,
                        "--rotation-start",
                        random(-40, 40) + "deg"
                    );

                    setVariable(
                        particle,
                        "--rotation-mid",
                        random(60, 180) + "deg"
                    );

                    setVariable(
                        particle,
                        "--rotation2",
                        random(140, 280) + "deg"
                    );

                    setVariable(
                        particle,
                        "--rotation3",
                        random(240, 400) + "deg"
                    );

                    setVariable(
                        particle,
                        "--rotation-end",
                        random(330, 540) + "deg"
                    );
                }
            }
        );


        createParticles(
            "school-pencil",
            8,
            {
                minDuration: 13,
                maxDuration: 24,
                opacity: [.65, 1],
                scale: [.7, 1.1]
            }
        );


        createParticles(
            "school-eraser",
            6,
            {
                minDuration: 14,
                maxDuration: 25,
                opacity: [.6, .95]
            }
        );
    }


    /* =====================================================
       SAINT-VALENTIN
    ===================================================== */

    if (body.classList.contains("theme-saint-valentin")) {

        createParticles(
            "heart-particle",
            38,
            {
                minDuration: 9,
                maxDuration: 18,
                opacity: [.45, .9],

                extra: function (particle) {

                    setVariable(
                        particle,
                        "--heart-size",
                        random(9, 24) + "px"
                    );
                }
            }
        );


        /*
         * Quelques gros cœurs plus rares.
         */

        createParticles(
            "heart-particle",
            8,
            {
                minDuration: 13,
                maxDuration: 22,
                opacity: [.3, .65],

                extra: function (particle) {

                    setVariable(
                        particle,
                        "--heart-size",
                        random(20, 34) + "px"
                    );
                }
            }
        );
    }


    /* =====================================================
       PÂQUES
    ===================================================== */

    if (body.classList.contains("theme-paques")) {

        createParticles(
            "easter-egg",
            24,
            {
                minDuration: 11,
                maxDuration: 22,
                scale: [.65, 1.15],

                extra: function (particle) {

                    var palettes = [
                        ["#f9a8d4", "#fbcfe8"],
                        ["#93c5fd", "#bfdbfe"],
                        ["#fde68a", "#fef3c7"],
                        ["#86efac", "#bbf7d0"],
                        ["#c4b5fd", "#ddd6fe"],
                        ["#fdba74", "#fed7aa"]
                    ];

                    var palette =
                        palettes[
                            randomInt(
                                0,
                                palettes.length - 1
                            )
                        ];

                    setVariable(
                        particle,
                        "--egg-color1",
                        palette[0]
                    );

                    setVariable(
                        particle,
                        "--egg-color2",
                        palette[1]
                    );

                    setVariable(
                        particle,
                        "--egg-width",
                        random(18, 27) + "px"
                    );

                    setVariable(
                        particle,
                        "--egg-height",
                        random(25, 36) + "px"
                    );
                }
            }
        );


        createParticles(
            "spring-flower",
            26,
            {
                minDuration: 9,
                maxDuration: 19,

                extra: function (particle) {

                    var colors = [
                        "#f9a8d4",
                        "#fbcfe8",
                        "#c4b5fd",
                        "#bfdbfe",
                        "#fde68a"
                    ];

                    setVariable(
                        particle,
                        "--flower-color",
                        colors[
                            randomInt(
                                0,
                                colors.length - 1
                            )
                        ]
                    );
                }
            }
        );


        createParticles(
            "spring-butterfly",
            6,
            {
                minDuration: 13,
                maxDuration: 22,

                extra: function (particle) {

                    var colors = [
                        "#c084fc",
                        "#60a5fa",
                        "#f472b6",
                        "#34d399"
                    ];

                    setVariable(
                        particle,
                        "--butterfly-color",
                        colors[
                            randomInt(
                                0,
                                colors.length - 1
                            )
                        ]
                    );
                }
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


        createParticles(
            "bat",
            12,
            {
                minDuration: 10,
                maxDuration: 21,

                extra: function (particle) {

                    setVariable(
                        particle,
                        "--start-y",
                        random(0, 75) + "vh"
                    );

                    setVariable(
                        particle,
                        "--y1",
                        random(-20, 30) + "vh"
                    );

                    setVariable(
                        particle,
                        "--y2",
                        random(-20, 40) + "vh"
                    );

                    setVariable(
                        particle,
                        "--y3",
                        random(-20, 30) + "vh"
                    );

                    setVariable(
                        particle,
                        "--scale",
                        random(.55, 1.2)
                    );
                }
            }
        );


        createParticles(
            "pumpkin",
            11,
            {
                minDuration: 1.8,
                maxDuration: 3.8,

                extra: function (particle) {

                    setVariable(
                        particle,
                        "--pumpkin-width",
                        random(28, 46) + "px"
                    );

                    setVariable(
                        particle,
                        "--pumpkin-height",
                        random(24, 38) + "px"
                    );
                }
            }
        );


        createParticles(
            "ghost",
            5,
            {
                minDuration: 13,
                maxDuration: 23
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
                minDuration: 1.5,
                maxDuration: 5,
                size: [2, 5]
            }
        );


        function createFirework() {

            var firework;
            var colors;

            colors = [
                "#ffffff",
                "#7dd3fc",
                "#c4b5fd",
                "#f9a8d4",
                "#fde68a"
            ];


            firework =
                document.createElement("div");

            firework.className =
                "firework";


            firework.style.left =
                random(12, 88) + "%";

            firework.style.top =
                random(10, 48) + "%";


            setVariable(
                firework,
                "--firework-color",
                colors[
                    randomInt(
                        0,
                        colors.length - 1
                    )
                ]
            );


            setVariable(
                firework,
                "--delay",
                random(0, 1.5) + "s"
            );


            setVariable(
                firework,
                "--duration",
                random(2.1, 3.4) + "s"
            );


            layer.appendChild(firework);


            window.setTimeout(
                function () {

                    if (firework.parentNode) {
                        firework.parentNode.removeChild(
                            firework
                        );
                    }

                },
                4000
            );
        }


        /*
         * Départ décalé pour éviter un feu d'artifice
         * qui explose toujours au même endroit.
         */

        var fireworkIndex;

        for (
            fireworkIndex = 0;
            fireworkIndex < 7;
            fireworkIndex++
        ) {

            window.setTimeout(
                createFirework,
                fireworkIndex * 700
            );
        }


        window.setInterval(
            createFirework,
            2500
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
            "summer-cloud",
            5,
            {
                minDuration: 28,
                maxDuration: 48,

                extra: function (particle) {

                    particle.style.top =
                        random(8, 38) + "vh";

                    setVariable(
                        particle,
                        "--duration",
                        random(28, 48) + "s"
                    );
                }
            }
        );
    }


    /* =====================================================
       AUTOMNE
    ===================================================== */

    if (body.classList.contains("theme-automne")) {

        createParticles(
            "leaf-particle",
            42,
            {
                minDuration: 8,
                maxDuration: 20,
                opacity: [.55, 1],
                scale: [.65, 1.25],

                extra: function (particle) {

                    var colors = [
                        ["#92400e", "#d97706"],
                        ["#b45309", "#f59e0b"],
                        ["#9a3412", "#ea580c"],
                        ["#78350f", "#ca8a04"],
                        ["#a16207", "#eab308"]
                    ];

                    var palette =
                        colors[
                            randomInt(
                                0,
                                colors.length - 1
                            )
                        ];


                    setVariable(
                        particle,
                        "--leaf-color1",
                        palette[0]
                    );

                    setVariable(
                        particle,
                        "--leaf-color2",
                        palette[1]
                    );


                    setVariable(
                        particle,
                        "--leaf-width",
                        random(10, 20) + "px"
                    );

                    setVariable(
                        particle,
                        "--leaf-height",
                        random(16, 27) + "px"
                    );


                    setVariable(
                        particle,
                        "--rot-start",
                        random(-50, 50) + "deg"
                    );

                    setVariable(
                        particle,
                        "--rot1",
                        random(40, 180) + "deg"
                    );

                    setVariable(
                        particle,
                        "--rot2",
                        random(140, 360) + "deg"
                    );

                    setVariable(
                        particle,
                        "--rot3",
                        random(260, 520) + "deg"
                    );

                    setVariable(
                        particle,
                        "--rot4",
                        random(360, 680) + "deg"
                    );

                    setVariable(
                        particle,
                        "--rot5",
                        random(500, 900) + "deg"
                    );
                }
            }
        );


        /*
         * Quelques feuilles très petites,
         * donnant de la profondeur.
         */

        createParticles(
            "leaf-particle",
            25,
            {
                minDuration: 15,
                maxDuration: 28,
                opacity: [.25, .6],
                scale: [.4, .7],

                extra: function (particle) {

                    setVariable(
                        particle,
                        "--leaf-width",
                        random(6, 11) + "px"
                    );

                    setVariable(
                        particle,
                        "--leaf-height",
                        random(10, 17) + "px"
                    );
                }
            }
        );
    }

});
```
