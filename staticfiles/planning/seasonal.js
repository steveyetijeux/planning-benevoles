/* =========================================================
   PLANNING FOYER MDL
   THEMES SAISONNIERS
   VERSION ATMOSPHERIQUE + PERSONNAGES
========================================================= */

(function () {
    "use strict";

    function initSeasonal() {

        var body = document.body;

        if (!body) {
            return;
        }

        /* =====================================================
           COUCHE
        ===================================================== */

        var oldLayer = document.querySelector(".season-layer");

        if (oldLayer) {
            oldLayer.remove();
        }

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

        function pick(array) {
            return array[
                Math.floor(Math.random() * array.length)
            ];
        }

        function css(element, property, value) {
            element.style.setProperty(property, value);
        }


        /* =====================================================
           PARTICULES
        ===================================================== */

        function createParticle(
            className,
            minDuration,
            maxDuration,
            options
        ) {

            options = options || {};

            var particle = document.createElement("div");

            particle.className =
                "season-particle " + className;

            var x = random(
                options.minX !== undefined ? options.minX : 0,
                options.maxX !== undefined ? options.maxX : 100
            );

            var duration = random(
                minDuration,
                maxDuration
            );

            var delay =
                options.delayRandom === false
                    ? 0
                    : -random(0, duration);

            var size =
                options.sizeMin !== undefined
                    ? random(
                        options.sizeMin,
                        options.sizeMax
                    )
                    : random(.7, 1.4);

            var opacity =
                options.opacityMin !== undefined
                    ? random(
                        options.opacityMin,
                        options.opacityMax
                    )
                    : random(.5, .95);

            var drift =
                options.driftMin !== undefined
                    ? random(
                        options.driftMin,
                        options.driftMax
                    )
                    : random(-120, 120);

            var sway1 = random(-160, 160);
            var sway2 = random(-180, 180);
            var sway3 = random(-180, 180);
            var sway4 = random(-180, 180);

            var swayY1 = random(-80, 80);
            var swayY2 = random(-120, 120);
            var swayY3 = random(-120, 120);

            particle.style.left = x + "%";
            particle.style.animationDuration =
                duration + "s";
            particle.style.animationDelay =
                delay + "s";

            css(
                particle,
                "--size",
                size + "px"
            );

            css(
                particle,
                "--opacity",
                opacity
            );

            css(
                particle,
                "--drift",
                drift + "px"
            );

            css(
                particle,
                "--sway1",
                sway1 + "px"
            );

            css(
                particle,
                "--sway2",
                sway2 + "px"
            );

            css(
                particle,
                "--sway3",
                sway3 + "px"
            );

            css(
                particle,
                "--sway4",
                sway4 + "px"
            );

            css(
                particle,
                "--swayY1",
                swayY1 + "px"
            );

            css(
                particle,
                "--swayY2",
                swayY2 + "px"
            );

            css(
                particle,
                "--swayY3",
                swayY3 + "px"
            );

            if (options.top !== undefined) {
                particle.style.top =
                    options.top;
            }

            if (options.bottom !== undefined) {
                particle.style.bottom =
                    options.bottom;
            }

            layer.appendChild(particle);

            return particle;
        }


        function createParticles(
            className,
            count,
            minDuration,
            maxDuration,
            options
        ) {

            var i;

            for (i = 0; i < count; i++) {

                createParticle(
                    className,
                    minDuration,
                    maxDuration,
                    options
                );
            }
        }


        /* =====================================================
           NOËL
        ===================================================== */

        if (body.classList.contains("theme-noel")) {

            /*
             * IMPORTANT :
             * 45 vrais flocons.
             * Les lumières ne tombent plus.
             */

            createParticles(
                "snowflake",
                45,
                16,
                28,
                {
                    sizeMin: 3,
                    sizeMax: 10,
                    opacityMin: .45,
                    opacityMax: .95,
                    driftMin: -170,
                    driftMax: 170
                }
            );


            /*
             * Étoiles discrètes dans le ciel.
             */

            createParticles(
                "star",
                18,
                4,
                8,
                {
                    sizeMin: 2,
                    sizeMax: 6,
                    opacityMin: .35,
                    opacityMax: .95,
                    delayRandom: true
                }
            );


            /*
             * Guirlande lumineuse :
             * quelques points fixes qui scintillent.
             */

            var lightColors = [
                "#fff4c2",
                "#ffd166",
                "#ffe9a8",
                "#ffffff",
                "#bfe9ff"
            ];

            var lightCount = 12;

            for (var li = 0; li < lightCount; li++) {

                var light = createParticle(
                    "christmas-light",
                    3.5,
                    6,
                    {
                        minX: 8,
                        maxX: 92,
                        sizeMin: 5,
                        sizeMax: 9,
                        opacityMin: .35,
                        opacityMax: .9
                    }
                );

                light.style.top =
                    random(8, 55) + "%";

                css(
                    light,
                    "--light-color",
                    pick(lightColors)
                );
            }


            /*
             * Père Noël.
             *
             * SVG autonome : aucune dépendance supplémentaire
             * au CSS pour dessiner le personnage.
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

                    '<svg ' +
                    'viewBox="0 0 560 220" ' +
                    'xmlns="http://www.w3.org/2000/svg" ' +
                    'aria-hidden="true">' +

                    /*
                     * TRAÎNÉE DE NEIGE
                     */

                    '<g opacity=".65">' +
                        '<ellipse cx="95" cy="191" rx="75" ry="12" fill="#ffffff"/>' +
                        '<ellipse cx="175" cy="198" rx="85" ry="10" fill="#dff4ff"/>' +
                    '</g>' +


                    /*
                     * RENNE
                     */

                    '<g transform="translate(360 54)">' +

                        '<ellipse ' +
                            'cx="60" cy="82" ' +
                            'rx="55" ry="30" ' +
                            'fill="#7b4327"/>' +

                        '<ellipse ' +
                            'cx="112" cy="66" ' +
                            'rx="29" ry="25" ' +
                            'fill="#8d5030"/>' +

                        '<ellipse ' +
                            'cx="130" cy="76" ' +
                            'rx="18" ry="11" ' +
                            'fill="#5d301d"/>' +

                        '<circle ' +
                            'cx="119" cy="61" ' +
                            'r="4" ' +
                            'fill="#1b1010"/>' +

                        '<circle ' +
                            'cx="133" cy="77" ' +
                            'r="4" ' +
                            'fill="#e63946"/>' +

                        /*
                         * Bois
                         */

                        '<path ' +
                            'd="M104 45 Q91 14 78 5 M92 29 L68 19 M99 37 L84 18" ' +
                            'fill="none" ' +
                            'stroke="#704225" ' +
                            'stroke-width="7" ' +
                            'stroke-linecap="round"/>' +

                        '<path ' +
                            'd="M119 43 Q125 12 142 2 M128 29 L149 18 M123 35 L139 15" ' +
                            'fill="none" ' +
                            'stroke="#704225" ' +
                            'stroke-width="7" ' +
                            'stroke-linecap="round"/>' +

                        /*
                         * Pattes
                         */

                        '<path d="M34 103 L22 137" stroke="#5b301e" stroke-width="9" stroke-linecap="round"/>' +
                        '<path d="M69 106 L62 142" stroke="#5b301e" stroke-width="9" stroke-linecap="round"/>' +
                        '<path d="M88 106 L97 139" stroke="#5b301e" stroke-width="9" stroke-linecap="round"/>' +

                        /*
                         * Harnais
                         */

                        '<path ' +
                            'd="M18 71 Q60 55 106 70" ' +
                            'fill="none" ' +
                            'stroke="#b91c1c" ' +
                            'stroke-width="7"/>' +

                        '<circle ' +
                            'cx="67" cy="69" r="7" ' +
                            'fill="#f7c948"/>' +

                    '</g>' +


                    /*
                     * TRAÎNEAU
                     */

                    '<g>' +

                        /*
                         * Patins
                         */

                        '<path ' +
                            'd="M52 190 Q105 210 235 194 Q290 188 331 197" ' +
                            'fill="none" ' +
                            'stroke="#e7c46a" ' +
                            'stroke-width="8" ' +
                            'stroke-linecap="round"/>' +

                        '<path ' +
                            'd="M72 202 Q145 218 245 204 Q294 197 337 203" ' +
                            'fill="none" ' +
                            'stroke="#c89b3c" ' +
                            'stroke-width="5" ' +
                            'stroke-linecap="round"/>' +

                        /*
                         * Corps du traîneau
                         */

                        '<path ' +
                            'd="M60 130 Q90 105 145 110 L275 110 Q300 111 316 130 L302 173 Q294 187 267 187 L92 183 Q67 178 60 160 Z" ' +
                            'fill="#a71930" ' +
                            'stroke="#f3cf72" ' +
                            'stroke-width="5"/>' +

                        /*
                         * Bordure
                         */

                        '<path ' +
                            'd="M70 136 Q150 153 293 137" ' +
                            'fill="none" ' +
                            'stroke="#ffd86a" ' +
                            'stroke-width="8" ' +
                            'stroke-linecap="round"/>' +

                        /*
                         * Intérieur
                         */

                        '<path ' +
                            'd="M99 124 Q155 103 222 121 L251 139 L109 141 Z" ' +
                            'fill="#651326" ' +
                            'opacity=".7"/>' +

                        /*
                         * Sac de cadeaux
                         */

                        '<path ' +
                            'd="M177 108 Q180 67 217 62 Q254 66 259 110 Z" ' +
                            'fill="#2f6f4e" ' +
                            'stroke="#f0cf70" ' +
                            'stroke-width="4"/>' +

                        '<path ' +
                            'd="M217 65 L217 110" ' +
                            'stroke="#d6b64d" ' +
                            'stroke-width="5"/>' +

                    '</g>' +


                    /*
                     * PÈRE NOËL
                     */

                    '<g transform="translate(108 8)">' +

                        /*
                         * Jambes
                         */

                        '<path ' +
                            'd="M78 142 L72 180" ' +
                            'stroke="#651326" ' +
                            'stroke-width="18" ' +
                            'stroke-linecap="round"/>' +

                        '<path ' +
                            'd="M125 142 L135 180" ' +
                            'stroke="#651326" ' +
                            'stroke-width="18" ' +
                            'stroke-linecap="round"/>' +

                        /*
                         * Bottes
                         */

                        '<path ' +
                            'd="M59 180 Q75 169 91 182 L87 195 L55 195 Q47 188 59 180 Z" ' +
                            'fill="#201820"/>' +

                        '<path ' +
                            'd="M125 180 Q140 170 156 184 L158 196 L125 196 Q117 188 125 180 Z" ' +
                            'fill="#201820"/>' +

                        /*
                         * Corps
                         */

                        '<path ' +
                            'd="M55 72 Q91 54 130 72 L145 144 Q109 164 63 144 Z" ' +
                            'fill="#c81e35" ' +
                            'stroke="#8d1224" ' +
                            'stroke-width="4"/>' +

                        /*
                         * Ceinture
                         */

                        '<path ' +
                            'd="M61 119 Q103 130 140 118" ' +
                            'stroke="#25161a" ' +
                            'stroke-width="11"/>' +

                        '<rect ' +
                            'x="94" y="116" ' +
                            'width="18" ' +
                            'height="18" ' +
                            'rx="3" ' +
                            'fill="#f4ca5b"/>' +

                        /*
                         * Bras
                         */

                        '<path ' +
                            'd="M62 83 Q34 94 30 124" ' +
                            'stroke="#c81e35" ' +
                            'stroke-width="17" ' +
                            'stroke-linecap="round"/>' +

                        '<path ' +
                            'd="M130 83 Q151 93 160 116" ' +
                            'stroke="#c81e35" ' +
                            'stroke-width="17" ' +
                            'stroke-linecap="round"/>' +

                        /*
                         * Gants
                         */

                        '<circle cx="29" cy="128" r="10" fill="#fff"/>' +
                        '<circle cx="162" cy="119" r="10" fill="#fff"/>' +

                        /*
                         * Tête
                         */

                        '<circle ' +
                            'cx="94" cy="53" ' +
                            'r="35" ' +
                            'fill="#f1b58f" ' +
                            'stroke="#c98b68" ' +
                            'stroke-width="3"/>' +

                        /*
                         * Oreilles
                         */

                        '<circle cx="60" cy="58" r="9" fill="#e6a47e"/>' +
                        '<circle cx="128" cy="58" r="9" fill="#e6a47e"/>' +

                        /*
                         * Barbe
                         */

                        '<path ' +
                            'd="M61 58 Q94 71 128 58 Q126 99 94 105 Q64 98 61 58 Z" ' +
                            'fill="#fffdf7" ' +
                            'stroke="#e6e4dc" ' +
                            'stroke-width="3"/>' +

                        /*
                         * Moustache
                         */

                        '<path ' +
                            'd="M68 68 Q80 61 94 70 Q108 61 121 68 Q108 82 94 75 Q80 82 68 68 Z" ' +
                            'fill="#fffdf7"/>' +

                        /*
                         * Yeux
                         */

                        '<circle cx="81" cy="51" r="4" fill="#25191a"/>' +
                        '<circle cx="107" cy="51" r="4" fill="#25191a"/>' +

                        /*
                         * Nez
                         */

                        '<ellipse cx="94" cy="63" rx="7" ry="5" fill="#d77e68"/>' +

                        /*
                         * Bonnet
                         */

                        '<path ' +
                            'd="M58 39 Q70 2 98 4 Q124 6 137 42 Q102 29 58 39 Z" ' +
                            'fill="#c81e35" ' +
                            'stroke="#8d1224" ' +
                            'stroke-width="3"/>' +

                        /*
                         * Fourrure du bonnet
                         */

                        '<path ' +
                            'd="M57 39 Q94 27 137 42 L133 53 Q96 39 59 52 Z" ' +
                            'fill="#fffdf7"/>' +

                        /*
                         * Pompon
                         */

                        '<circle cx="101" cy="7" r="10" fill="#fffdf7"/>' +

                    '</g>' +

                    '</svg>';

                /*
                 * Animation plus lente et plus rare.
                 */

                santa.style.animationDuration =
                    "24s";

                santa.style.animationDelay =
                    "2s";

                layer.appendChild(santa);

                window.setTimeout(
                    function () {

                        if (santa.parentNode) {
                            santa.parentNode.removeChild(
                                santa
                            );
                        }

                    },
                    26000
                );
            }


            /*
             * Un passage du Père Noël,
             * puis de longs intervalles.
             */

            window.setTimeout(
                createSanta,
                7000
            );

            window.setInterval(
                createSanta,
                42000
            );
        }


        /* =====================================================
           RENTRÉE
        ===================================================== */

        if (body.classList.contains("theme-rentree")) {

            createParticles(
                "school-paper",
                18,
                14,
                24,
                {
                    sizeMin: 18,
                    sizeMax: 30,
                    opacityMin: .45,
                    opacityMax: .9,
                    driftMin: -180,
                    driftMax: 180
                }
            );


            createParticles(
                "school-pencil",
                9,
                15,
                26,
                {
                    sizeMin: 7,
                    sizeMax: 9,
                    opacityMin: .5,
                    opacityMax: .9,
                    driftMin: -190,
                    driftMax: 190
                }
            );


            /*
             * Petites touches lumineuses / scolaires.
             * Très discrètes.
             */

            if (
                document.querySelector(
                    ".school-star"
                )
            ) {

                createParticles(
                    "school-star",
                    8,
                    5,
                    9,
                    {
                        sizeMin: 3,
                        sizeMax: 6,
                        opacityMin: .25,
                        opacityMax: .65
                    }
                );
            }
        }


        /* =====================================================
           SAINT-VALENTIN
        ===================================================== */

        if (
            body.classList.contains(
                "theme-saint-valentin"
            )
        ) {

            createParticles(
                "heart-particle",
                30,
                15,
                25,
                {
                    sizeMin: 10,
                    sizeMax: 22,
                    opacityMin: .45,
                    opacityMax: .9,
                    driftMin: -150,
                    driftMax: 150
                }
            );
        }


        /* =====================================================
           PÂQUES
        ===================================================== */

        if (body.classList.contains("theme-paques")) {

            var eggColors = [
                ["#f9a8d4", "#db2777"],
                ["#93c5fd", "#2563eb"],
                ["#fde68a", "#eab308"],
                ["#86efac", "#16a34a"]
            ];


            for (var e = 0; e < 20; e++) {

                var egg = createParticle(
                    "easter-egg",
                    15,
                    25,
                    {
                        sizeMin: 22,
                        sizeMax: 38,
                        opacityMin: .5,
                        opacityMax: .95,
                        driftMin: -170,
                        driftMax: 170
                    }
                );

                var colors =
                    eggColors[
                        e % eggColors.length
                    ];

                css(
                    egg,
                    "--egg-color",
                    colors[1]
                );

                css(
                    egg,
                    "--egg-light",
                    colors[0]
                );

                css(
                    egg,
                    "--w",
                    random(22, 34) + "px"
                );

                css(
                    egg,
                    "--h",
                    random(30, 46) + "px"
                );
            }


            createParticles(
                "spring-flower",
                22,
                8,
                15,
                {
                    sizeMin: 6,
                    sizeMax: 11,
                    opacityMin: .45,
                    opacityMax: .9
                }
            );


            if (
                document.querySelector(
                    ".spring-butterfly"
                )
            ) {

                createParticles(
                    "spring-butterfly",
                    7,
                    14,
                    23,
                    {
                        sizeMin: 5,
                        sizeMax: 10,
                        opacityMin: .4,
                        opacityMax: .8
                    }
                );
            }
        }


        /* =====================================================
           HALLOWEEN
        ===================================================== */

        if (body.classList.contains("theme-halloween")) {

            var moon =
                document.createElement("div");

            moon.className =
                "halloween-moon";

            layer.appendChild(moon);


            var fog =
                document.createElement("div");

            fog.className =
                "halloween-fog";

            layer.appendChild(fog);


            createParticles(
                "bat",
                10,
                17,
                28,
                {
                    sizeMin: 28,
                    sizeMax: 46,
                    opacityMin: .45,
                    opacityMax: .9
                }
            );


            createParticles(
                "pumpkin",
                8,
                5,
                8,
                {
                    sizeMin: 28,
                    sizeMax: 52,
                    opacityMin: .6,
                    opacityMax: 1
                }
            );
        }


        /* =====================================================
           NOUVEL AN
        ===================================================== */

        if (
            body.classList.contains(
                "theme-nouvel-an"
            )
        ) {

            createParticles(
                "newyear-star",
                50,
                2,
                5,
                {
                    sizeMin: 2,
                    sizeMax: 6,
                    opacityMin: .2,
                    opacityMax: .95
                }
            );


            function createFirework() {

                var firework =
                    document.createElement("div");

                firework.className =
                    "firework";

                firework.style.left =
                    random(10, 90) + "%";

                firework.style.top =
                    random(8, 48) + "%";

                firework.style.setProperty(
                    "--fire-color",
                    pick([
                        "#fff",
                        "#ffd166",
                        "#ff6b9d",
                        "#7dd3fc",
                        "#c4b5fd",
                        "#86efac"
                    ])
                );

                firework.style.animationDelay =
                    "0s";

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


            /*
             * Petit bouquet initial.
             */

            for (
                var j = 0;
                j < 5;
                j++
            ) {

                window.setTimeout(
                    createFirework,
                    j * 900
                );
            }


            /*
             * Puis des feux réguliers mais
             * suffisamment espacés pour rester élégants.
             */

            window.setInterval(
                createFirework,
                3000
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

            layer.appendChild(sun);


            /*
             * Petites particules lumineuses.
             */

            createParticles(
                "summer-light",
                18,
                7,
                14,
                {
                    sizeMin: 2,
                    sizeMax: 5,
                    opacityMin: .25,
                    opacityMax: .75,
                    driftMin: -100,
                    driftMax: 100
                }
            );
        }


        /* =====================================================
           AUTOMNE
        ===================================================== */

        if (body.classList.contains("theme-automne")) {

            var autumnColors = [
                "#b45309",
                "#c2410c",
                "#dc2626",
                "#ea580c",
                "#a16207",
                "#92400e",
                "#d97706",
                "#7c2d12"
            ];


            /*
             * EXACTEMENT 42 feuilles.
             */

            for (
                var leafIndex = 0;
                leafIndex < 42;
                leafIndex++
            ) {

                var leaf =
                    createParticle(
                        "leaf-particle",
                        17,
                        30,
                        {
                            sizeMin: 13,
                            sizeMax: 30,
                            opacityMin: .45,
                            opacityMax: .95,
                            driftMin: -210,
                            driftMax: 210
                        }
                    );


                css(
                    leaf,
                    "--leaf-color",
                    pick(autumnColors)
                );


                css(
                    leaf,
                    "--scale",
                    random(.65, 1.25)
                );


                css(
                    leaf,
                    "--sway1",
                    random(-220, 220) + "px"
                );

                css(
                    leaf,
                    "--sway2",
                    random(-260, 260) + "px"
                );

                css(
                    leaf,
                    "--sway3",
                    random(-230, 230) + "px"
                );

                css(
                    leaf,
                    "--sway4",
                    random(-300, 300) + "px"
                );
            }
        }


        /*
         * Sécurité.
         */

        layer.style.pointerEvents =
            "none";

        layer.setAttribute(
            "aria-hidden",
            "true"
        );
    }


    /* =========================================================
       INITIALISATION
    ========================================================= */

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