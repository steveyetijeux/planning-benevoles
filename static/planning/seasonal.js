```javascript
/* =========================================================
   PLANNING FOYER MDL
   ANIMATIONS SAISONNIÈRES
   VERSION 401 - RECONSTRUCTION COMPLÈTE
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       OUTILS
    ===================================================== */

    function random(min, max) {

        return min + Math.random() * (max - min);
    }


    function randomInt(min, max) {

        return Math.floor(
            random(min, max + 1)
        );
    }


    function choose(array) {

        return array[
            Math.floor(
                Math.random() * array.length
            )
        ];
    }


    /* =====================================================
       INITIALISATION
    ===================================================== */

    var body = document.body;

    if (!body) {

        console.error(
            "[SEASONAL] document.body introuvable."
        );

        return;
    }


    var layer =
        document.getElementById("season-layer");


    /*
     * Sécurité absolue :
     * si le HTML ne contient pas la couche,
     * on la crée nous-mêmes.
     */

    if (!layer) {

        layer =
            document.createElement("div");

        layer.id =
            "season-layer";

        layer.className =
            "season-layer";

        layer.setAttribute(
            "aria-hidden",
            "true"
        );

        body.insertBefore(
            layer,
            body.firstChild
        );
    }


    /*
     * Nettoyage d'une éventuelle ancienne
     * initialisation.
     */

    layer.innerHTML = "";


    layer.style.position = "fixed";
    layer.style.inset = "0";
    layer.style.width = "100vw";
    layer.style.height = "100vh";
    layer.style.pointerEvents = "none";
    layer.style.overflow = "hidden";
    layer.style.zIndex = "999999";


    body.classList.add(
        "season-active"
    );


    /* =====================================================
       DÉTECTION DU THÈME
    ===================================================== */

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


    var i;


    for (
        i = 0;
        i < themes.length;
        i++
    ) {

        if (
            body.classList.contains(
                themes[i]
            )
        ) {

            theme =
                themes[i];

            break;
        }
    }


    /*
     * Fallback :
     * le thème est aussi inscrit dans le HTML
     * du layer.
     */

    if (!theme) {

        var layerTheme =
            layer.getAttribute(
                "data-theme"
            );


        if (
            layerTheme &&
            themes.indexOf(layerTheme) !== -1
        ) {

            theme =
                layerTheme;
        }
    }


    console.log(
        "[SEASONAL] body =",
        body.className
    );


    console.log(
        "[SEASONAL] thème détecté =",
        theme
    );


    console.log(
        "[SEASONAL] layer =",
        layer
    );


    if (!theme) {

        console.warn(
            "[SEASONAL] Aucun thème actif."
        );

        return;
    }


    layer.setAttribute(
        "data-theme",
        theme
    );


    /* =====================================================
       CRÉATION D'UNE PARTICULE
    ===================================================== */

    function createParticle(
        className,
        options
    ) {

        var particle =
            document.createElement("div");


        particle.className =
            "season-particle " +
            className;


        /*
         * Position horizontale complètement
         * indépendante.
         */

        particle.style.left =
            random(0, 100) + "%";


        /*
         * Taille.
         */

        particle.style.setProperty(
            "--particle-size",
            random(
                options.minSize || 0.7,
                options.maxSize || 1.4
            )
        );


        /*
         * Opacité.
         */

        particle.style.setProperty(
            "--particle-opacity",
            random(
                options.minOpacity || 0.55,
                options.maxOpacity || 1
            )
        );


        /*
         * Durée.
         */

        var duration =
            random(
                options.minDuration || 8,
                options.maxDuration || 16
            );


        particle.style.setProperty(
            "--particle-duration",
            duration + "s"
        );


        /*
         * Délai négatif :
         * certaines particules sont déjà
         * en plein mouvement dès le chargement.
         */

        particle.style.setProperty(
            "--particle-delay",
            (-random(0, duration)) + "s"
        );


        /*
         * Chaque particule possède quatre
         * amplitudes différentes.
         */

        particle.style.setProperty(
            "--drift-a",
            random(-100, 100) + "px"
        );


        particle.style.setProperty(
            "--drift-b",
            random(-160, 160) + "px"
        );


        particle.style.setProperty(
            "--drift-c",
            random(-140, 140) + "px"
        );


        particle.style.setProperty(
            "--drift-d",
            random(-180, 180) + "px"
        );


        /*
         * Rotation totalement indépendante.
         */

        particle.style.setProperty(
            "--rotation",
            random(0, 360) + "deg"
        );


        /*
         * Quelques propriétés spécifiques.
         */

        if (options.size) {

            particle.style.setProperty(
                "--snow-size",
                options.size()
            );
        }


        if (options.width) {

            particle.style.setProperty(
                "--paper-width",
                options.width()
            );
        }


        if (options.height) {

            particle.style.setProperty(
                "--paper-height",
                options.height()
            );
        }


        if (options.color) {

            particle.style.setProperty(
                "--leaf-color",
                options.color()
            );
        }


        if (options.lightColor) {

            particle.style.setProperty(
                "--light-color",
                options.lightColor()
            );
        }


        layer.appendChild(
            particle
        );


        return particle;
    }


    /* =====================================================
       CRÉATION DE PLUSIEURS PARTICULES
    ===================================================== */

    function createParticles(
        className,
        count,
        options
    ) {

        var index;


        for (
            index = 0;
            index < count;
            index++
        ) {

            createParticle(
                className,
                options || {}
            );
        }
    }


    /* =====================================================
       NOËL
    ===================================================== */

    if (
        theme === "theme-noel"
    ) {

        createParticles(
            "snowflake",
            100,
            {
                minDuration: 8,
                maxDuration: 18,
                minSize: 0.65,
                maxSize: 1.45,
                minOpacity: 0.55,
                maxOpacity: 1,

                size: function () {

                    return random(
                        4,
                        13
                    ) + "px";
                }
            }
        );


        createParticles(
            "star",
            35,
            {
                minDuration: 2.5,
                maxDuration: 6,
                minSize: 0.7,
                maxSize: 1.3,
                minOpacity: 0.4,
                maxOpacity: 1
            }
        );


        createParticles(
            "christmas-light",
            24,
            {
                minDuration: 1.2,
                maxDuration: 3,
                minSize: 0.8,
                maxSize: 1.2,
                minOpacity: 0.6,
                maxOpacity: 1,

                lightColor: function () {

                    return choose([
                        "#ff4d4d",
                        "#ffe66d",
                        "#62d9ff",
                        "#9cff57"
                    ]);
                }
            }
        );


        /*
         * Traîneau.
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


            body.appendChild(
                santa
            );


            window.setTimeout(
                function () {

                    if (
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


        window.setTimeout(
            createSanta,
            2500
        );


        window.setInterval(
            createSanta,
            30000
        );
    }


    /* =====================================================
       RENTRÉE
    ===================================================== */

    if (
        theme === "theme-rentree"
    ) {

        createParticles(
            "school-paper",
            20,
            {
                minDuration: 9,
                maxDuration: 19,

                minSize: 0.7,
                maxSize: 1.3,

                minOpacity: 0.55,
                maxOpacity: 1,

                width: function () {

                    return random(
                        22,
                        36
                    ) + "px";
                },

                height: function () {

                    return random(
                        30,
                        50
                    ) + "px";
                }
            }
        );


        createParticles(
            "school-pencil",
            9,
            {
                minDuration: 10,
                maxDuration: 20,

                minSize: 0.8,
                maxSize: 1.2,

                minOpacity: 0.6,
                maxOpacity: 1
            }
        );


        createParticles(
            "school-star",
            14,
            {
                minDuration: 4,
                maxDuration: 8,

                minSize: 0.7,
                maxSize: 1.3,

                minOpacity: 0.5,
                maxOpacity: 1
            }
        );
    }


    /* =====================================================
       SAINT-VALENTIN
    ===================================================== */

    if (
        theme ===
        "theme-saint-valentin"
    ) {

        createParticles(
            "heart-particle",
            40,
            {
                minDuration: 7,
                maxDuration: 16,

                minSize: 0.65,
                maxSize: 1.3,

                minOpacity: 0.45,
                maxOpacity: 1
            }
        );
    }


    /* =====================================================
       PÂQUES
    ===================================================== */

    if (
        theme === "theme-paques"
    ) {

        createParticles(
            "easter-egg",
            24,
            {
                minDuration: 8,
                maxDuration: 17,

                minSize: 0.65,
                maxSize: 1.35,

                minOpacity: 0.55,
                maxOpacity: 1
            }
        );


        createParticles(
            "spring-flower",
            28,
            {
                minDuration: 7,
                maxDuration: 16,

                minSize: 0.7,
                maxSize: 1.25,

                minOpacity: 0.55,
                maxOpacity: 1
            }
        );


        createParticles(
            "spring-butterfly",
            8,
            {
                minDuration: 10,
                maxDuration: 19,

                minSize: 0.8,
                maxSize: 1.2,

                minOpacity: 0.65,
                maxOpacity: 1
            }
        );
    }


    /* =====================================================
       HALLOWEEN
    ===================================================== */

    if (
        theme === "theme-halloween"
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
            14,
            {
                minDuration: 9,
                maxDuration: 19,

                minSize: 0.7,
                maxSize: 1.3,

                minOpacity: 0.5,
                maxOpacity: 1
            }
        );


        createParticles(
            "pumpkin",
            12,
            {
                minDuration: 5,
                maxDuration: 11,

                minSize: 0.7,
                maxSize: 1.2,

                minOpacity: 0.6,
                maxOpacity: 1
            }
        );
    }


    /* =====================================================
       NOUVEL AN
    ===================================================== */

    if (
        theme === "theme-nouvel-an"
    ) {

        createParticles(
            "newyear-star",
            55,
            {
                minDuration: 2,
                maxDuration: 5,

                minSize: 0.6,
                maxSize: 1.4,

                minOpacity: 0.4,
                maxOpacity: 1
            }
        );


        function createFirework() {

            var firework =
                document.createElement(
                    "div"
                );


            firework.className =
                "firework";


            firework.style.left =
                random(
                    10,
                    90
                ) + "%";


            firework.style.top =
                random(
                    8,
                    50
                ) + "%";


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
                3000
            );
        }


        var fireworkIndex;


        for (
            fireworkIndex = 0;
            fireworkIndex < 6;
            fireworkIndex++
        ) {

            window.setTimeout(
                createFirework,
                fireworkIndex * 700
            );
        }


        window.setInterval(
            createFirework,
            3000
        );
    }


    /* =====================================================
       ÉTÉ
    ===================================================== */

    if (
        theme === "theme-ete"
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


    /* =====================================================
       AUTOMNE
    ===================================================== */

    if (
        theme === "theme-automne"
    ) {

        createParticles(
            "leaf-particle",
            40,
            {
                minDuration: 8,
                maxDuration: 18,

                minSize: 0.65,
                maxSize: 1.35,

                minOpacity: 0.55,
                maxOpacity: 1,

                color: function () {

                    return choose([
                        "#b83b20",
                        "#d65a1f",
                        "#e58b24",
                        "#a84b16",
                        "#7d3f1d",
                        "#c43d2f"
                    ]);
                }
            }
        );
    }


    /* =====================================================
       DIAGNOSTIC
    ===================================================== */

    console.log(
        "[SEASONAL] Initialisation terminée."
    );


    console.log(
        "[SEASONAL] Thème :",
        theme
    );


    console.log(
        "[SEASONAL] Particules créées :",
        layer.children.length
    );


})();
```
