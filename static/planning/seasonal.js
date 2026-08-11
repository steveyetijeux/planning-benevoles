(function () {
    "use strict";

    function initSeasonal() {

        var body = document.body;

        if (!body) {
            return;
        }

        var oldLayer = document.querySelector(".season-layer");

        if (oldLayer) {
            oldLayer.remove();
        }

        var layer = document.createElement("div");

        layer.className = "season-layer";

        body.appendChild(layer);


        function random(min, max) {
            return min + Math.random() * (max - min);
        }


        function randomInt(min, max) {
            return Math.floor(
                random(min, max + 1)
            );
        }


        function css(element, values) {

            Object.keys(values).forEach(function (key) {

                element.style.setProperty(
                    key,
                    values[key]
                );

            });

        }


        function create(className) {

            var element =
                document.createElement("div");

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

            for (i = 0; i < count; i++) {

                var element =
                    create(className);

                if (setup) {
                    setup(element, i);
                }

            }

        }


        /* =====================================================
           NOEL
        ===================================================== */

        if (
            body.classList.contains(
                "theme-noel"
            )
        ) {

            var christmasMoon =
                document.createElement("div");

            christmasMoon.className =
                "christmas-moon";

            layer.appendChild(
                christmasMoon
            );


            createParticles(
                "snowflake",
                45,
                function (snow) {

                    css(snow, {

                        "--x":
                            random(0, 100) + "%",

                        "--size":
                            random(5, 12) + "px",

                        "--opacity":
                            random(.5, .95),

                        "--duration":
                            random(14, 25) + "s",

                        "--delay":
                            random(-25, 0) + "s",

                        "--drift":
                            random(-190, 190) + "px"

                    });

                }
            );


            createParticles(
                "star",
                14,
                function (star) {

                    css(star, {

                        "--x":
                            random(4, 96) + "%",

                        "--y":
                            random(4, 58) + "%",

                        "--size":
                            random(4, 9) + "px",

                        "--opacity":
                            random(.35, .9),

                        "--duration":
                            random(3, 6) + "s",

                        "--delay":
                            random(-6, 0) + "s"

                    });

                }
            );


            var lightColors = [
                "#ff4d5a",
                "#53d769",
                "#ffd447",
                "#62b6ff"
            ];


            createParticles(
                "christmas-light",
                18,
                function (light) {

                    css(light, {

                        "--x":
                            random(3, 97) + "%",

                        "--y":
                            random(8, 86) + "%",

                        "--light-color":
                            lightColors[
                                randomInt(
                                    0,
                                    lightColors.length - 1
                                )
                            ],

                        "--duration":
                            random(2.5, 5) + "s",

                        "--delay":
                            random(-5, 0) + "s"

                    });

                }
            );


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


                layer.appendChild(sleigh);


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
                    22000
                );

            }


            window.setTimeout(
                createSleigh,
                3500
            );


            window.setInterval(
                createSleigh,
                32000
            );

        }


        /* =====================================================
           RENTREE
        ===================================================== */

        if (
            body.classList.contains(
                "theme-rentree"
            )
        ) {

            createParticles(
                "school-paper",
                8,
                function (paper) {

                    css(paper, {

                        "--x":
                            random(0, 100) + "%",

                        "--w":
                            random(25, 44) + "px",

                        "--h":
                            random(36, 58) + "px",

                        "--duration":
                            random(16, 25) + "s",

                        "--delay":
                            random(-25, 0) + "s",

                        "--sway1":
                            random(-190, 190) + "px",

                        "--sway2":
                            random(-240, 240) + "px",

                        "--sway3":
                            random(-280, 280) + "px"

                    });

                }
            );


            createParticles(
                "school-pencil",
                4,
                function (pencil) {

                    css(pencil, {

                        "--x":
                            random(0, 100) + "%",

                        "--duration":
                            random(18, 28) + "s",

                        "--delay":
                            random(-28, 0) + "s",

                        "--sway1":
                            random(-180, 180) + "px",

                        "--sway2":
                            random(-230, 230) + "px",

                        "--sway3":
                            random(-280, 280) + "px"

                    });

                }
            );

        }


        /* =====================================================
           SAINT VALENTIN
        ===================================================== */

        if (
            body.classList.contains(
                "theme-saint-valentin"
            )
        ) {

            var heartColors = [
                "#e11d48",
                "#ec4899",
                "#be185d",
                "#fb7185",
                "#f43f5e"
            ];


            createParticles(
                "heart-particle",
                18,
                function (heart) {

                    css(heart, {

                        "--x":
                            random(2, 98) + "%",

                        "--size":
                            random(11, 22) + "px",

                        "--heart-color":
                            heartColors[
                                randomInt(
                                    0,
                                    heartColors.length - 1
                                )
                            ],

                        "--duration":
                            random(13, 22) + "s",

                        "--delay":
                            random(-22, 0) + "s",

                        "--sway1":
                            random(-170, 170) + "px",

                        "--sway2":
                            random(-210, 210) + "px",

                        "--sway3":
                            random(-260, 260) + "px"

                    });

                }
            );

        }


        /* =====================================================
           PAQUES
        ===================================================== */

        if (
            body.classList.contains(
                "theme-paques"
            )
        ) {

            var eggs = [

                ["#ffc2dc", "#e85d91"],

                ["#b9e6ff", "#3996d2"],

                ["#fff0a8", "#e5ad22"],

                ["#c8efb2", "#5fa94a"]

            ];


            createParticles(
                "easter-egg",
                12,
                function (egg, index) {

                    var palette =
                        eggs[
                            index %
                            eggs.length
                        ];


                    css(egg, {

                        "--x":
                            random(2, 98) + "%",

                        "--w":
                            random(25, 37) + "px",

                        "--h":
                            random(35, 50) + "px",

                        "--egg-light":
                            palette[0],

                        "--egg-color":
                            palette[1],

                        "--duration":
                            random(16, 25) + "s",

                        "--delay":
                            random(-25, 0) + "s",

                        "--sway1":
                            random(-180, 180) + "px",

                        "--sway2":
                            random(-230, 230) + "px",

                        "--sway3":
                            random(-280, 280) + "px"

                    });

                }
            );


            var flowerColors = [
                "#ff8fab",
                "#ffd166",
                "#a78bfa",
                "#ffffff",
                "#f472b6"
            ];


            createParticles(
                "spring-flower",
                15,
                function (flower) {

                    css(flower, {

                        "--x":
                            random(2, 98) + "%",

                        "--y":
                            random(12, 85) + "%",

                        "--size":
                            random(5, 9) + "px",

                        "--flower-color":
                            flowerColors[
                                randomInt(
                                    0,
                                    flowerColors.length - 1
                                )
                            ],

                        "--flower-center":
                            "#f5b82e",

                        "--duration":
                            random(5, 9) + "s",

                        "--delay":
                            random(-9, 0) + "s",

                        "--sway":
                            random(-55, 55) + "px"

                    });

                }
            );

        }


        /* =====================================================
           HALLOWEEN
        ===================================================== */

        if (
            body.classList.contains(
                "theme-halloween"
            )
        ) {

            var halloweenMoon =
                document.createElement("div");

            halloweenMoon.className =
                "halloween-moon";

            layer.appendChild(
                halloweenMoon
            );


            var fog =
                document.createElement("div");

            fog.className =
                "halloween-fog";

            layer.appendChild(
                fog
            );


            createParticles(
                "bat",
                7,
                function (bat) {

                    css(bat, {

                        "--x":
                            random(3, 88) + "%",

                        "--y":
                            random(12, 58) + "%",

                        "--duration":
                            random(16, 25) + "s",

                        "--delay":
                            random(-25, 0) + "s",

                        "--sway1":
                            random(-160, 160) + "px",

                        "--sway2":
                            random(-230, 230) + "px",

                        "--sway3":
                            random(-320, 320) + "px",

                        "--swayY1":
                            random(-100, 100) + "px",

                        "--swayY2":
                            random(-130, 130) + "px",

                        "--swayY3":
                            random(-160, 160) + "px"

                    });

                }
            );


            createParticles(
                "pumpkin",
                5,
                function (pumpkin) {

                    css(pumpkin, {

                        "--x":
                            random(5, 92) + "%",

                        "--bottom":
                            random(4, 20) + "%",

                        "--size":
                            random(32, 50) + "px",

                        "--duration":
                            random(3.5, 6) + "s",

                        "--delay":
                            random(-6, 0) + "s"

                    });

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
                38,
                function (star) {

                    css(star, {

                        "--x":
                            random(2, 98) + "%",

                        "--y":
                            random(3, 72) + "%",

                        "--size":
                            random(2, 5) + "px",

                        "--duration":
                            random(2, 5) + "s",

                        "--delay":
                            random(-5, 0) + "s"

                    });

                }
            );


            function createFirework() {

                var firework =
                    create("firework");


                var colors = [
                    "#ff4757",
                    "#ffd166",
                    "#5ee7df",
                    "#8ab4ff",
                    "#ff8ad8",
                    "#ffffff"
                ];


                css(firework, {

                    "--fire-x":
                        random(12, 88) + "%",

                    "--fire-y":
                        random(12, 52) + "%",

                    "--fire-color":
                        colors[
                            randomInt(
                                0,
                                colors.length - 1
                            )
                        ]

                });


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
                j < 4;
                j++
            ) {

                window.setTimeout(
                    createFirework,
                    j * 1000
                );

            }


            window.setInterval(
                createFirework,
                2600
            );

        }


        /* =====================================================
           ETE
        ===================================================== */

        if (
            body.classList.contains(
                "theme-ete"
            )
        ) {

            var summerSun =
                document.createElement("div");

            summerSun.className =
                "sun";

            layer.appendChild(
                summerSun
            );


            createParticles(
                "sun-particle",
                18,
                function (particle) {

                    css(particle, {

                        "--x":
                            random(3, 97) + "%",

                        "--y":
                            random(10, 88) + "%",

                        "--size":
                            random(2, 6) + "px",

                        "--duration":
                            random(5, 10) + "s",

                        "--delay":
                            random(-10, 0) + "s",

                        "--sway":
                            random(-90, 90) + "px"

                    });

                }
            );

        }


        /* =====================================================
           AUTOMNE
        ===================================================== */

        if (
            body.classList.contains(
                "theme-automne"
            )
        ) {

            var leafColors = [

                "#7f2418",
                "#9f3219",
                "#b84b19",
                "#d16b1f",
                "#e09a26",
                "#c94d19",
                "#70451f"

            ];


            createParticles(
                "leaf-particle",
                42,
                function (leaf) {

                    css(leaf, {

                        "--x":
                            random(0, 100) + "%",

                        "--size":
                            random(17, 38) + "px",

                        "--scale":
                            random(.65, 1.2),

                        "--leaf-color":
                            leafColors[
                                randomInt(
                                    0,
                                    leafColors.length - 1
                                )
                            ],

                        "--duration":
                            random(18, 30) + "s",

                        "--delay":
                            random(-30, 0) + "s",

                        "--sway1":
                            random(-200, 200) + "px",

                        "--sway2":
                            random(-270, 270) + "px",

                        "--sway3":
                            random(-330, 330) + "px",

                        "--sway4":
                            random(-400, 400) + "px"

                    });

                }
            );

        }

    }


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