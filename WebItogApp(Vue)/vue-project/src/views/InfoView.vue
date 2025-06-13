<script setup>
    import TheHeader from "@/components/TheHeader.vue"
    import TheFooter from "@/components/TheFooter.vue"
</script>

<template>
    <TheHeader />

    <div class="first-frame">
        <div class="first-frame-second-layer">
            <div class="first-frame-text">
                <p><strong>Your everyday tasks, automated.</strong></p>
                <p>Whirl lets you design and streamline your everyday tasks and workflows in just a few clicks.</p>
            </div>
            <div class="first-frame-img"></div>
        </div>
    </div>

    <div class="second-frame">
        <div class="second-frame-block">
            <img class="photo-second-frame" src="@/assets/second/first.svg" alt="NOOOOOOOOOOOOOOO" />
            <strong>Dive into Java.</strong>
            <p>Learn the fundamentals and advanced topics with step-by-step explanations.</p>
        </div>

        <div class="second-frame-block">
            <img class="photo-second-frame" src="@/assets/second/second.svg" alt="NOOOOOOOOOOOOOOO" />
            <strong>Practice with real projects.</strong>
            <p>Master Java through coding challenges and real-world cases.</p>
        </div>

        <div class="second-frame-block">
            <img class="photo-second-frame" src="@/assets/second/third.svg" alt="NOOOOOOOOOOOOOOO" />
            <strong>Get job-ready.</strong>
            <p>Go from beginner to in-demand Java developer.</p>
        </div>

    </div>

    <div class="third-frame">
        <div class="third-frame-podframe">
            <div class="third-frame-podframe1">
                <a>Get smarter, with our blog.</a>
            </div>
            <div class="third-frame-podframe2">
                <div class="block">
                    <img src="@/assets/third/first.svg" alt="nooo" />
                    <div>
                        <a> Professional & Engaging</a>
                        <h1>Boost Productivity with Mobile Automation</h1>
                        <a>"Stay ahead with our latest insights. Discover trends, expert tips, and real-world stories to boost your knowledge and skills."</a>
                    </div>
                </div>
                <div class="block">
                    <img src="@/assets/third/second.svg" alt="nooo" />
                    <div>
                        <a>Friendly & Inviting</a>
                        <h1>Smarter Learning: Can AI Help Your Study Groups?</h1>
                        <a>"Looking for tips to automate tasks, enhance productivity, or level up your skills? Explore our blog for fresh ideas and expert insights!"</a>
                    </div>
                </div>
                <div class="block">
                    <img src="@/assets/third/third.svg" alt="nooo" />
                    <div>
                        <a>Short & Catchy</a>
                        <h1>Big Investment, Bigger Impact: Meet Our Backers</h1>
                        <a>"Insights, trends, and hacks—all in one place. Welcome to our blog!"</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <TheFooter />

</template>

<style scoped>
    /* Основное содержимое */
    .main-content {
        flex: 1;
    }

    /* Первая секция */
    .first-frame {
        position: relative;
        text-align: center;
        padding: 20px;
    }

        .first-frame strong {
            font-family: 'Fraunces', serif;
            font-size: 58px;
            color: #1F1F1F;
        }

        .first-frame p {
            font-family: 'Inter', sans-serif;
            font-size: 20px;
            color: #1F1F1F;
        }

    /* Блоки второй секции */
    .second-frame {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin: 50px auto;
        max-width: 90%;
    }

    .second-frame-block {
        display: flex;
        flex-direction: column;
        align-items: start;
        text-align: start;
        gap: 20px;
        background-color: #ffd800;
        height: auto;
        padding: 20px;
        flex: 1 1 300px;
        max-width: 350px;
        border-radius: 8px;
    }

        .second-frame-block strong {
            font-family: 'Fraunces', serif;
            font-size: 35px;
            color: #1F1F1F;
        }

        .second-frame-block p {
            font-family: 'Inter', sans-serif;
            font-size: 19px;
            color: #1F1F1F;
        }

    /* Блог (третья секция) */
    .third-frame {
        max-width: 90%;
        margin: 50px auto;
    }

    .third-frame-podframe1 a {
        font-family: 'Fraunces', serif;
        font-size: 40px;
        font-weight: 700;
        color: #1F1F1F;
        text-decoration: none;
    }

    .third-frame-podframe2 {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 40px;
    }

    .block {
        background-color: #fff;
        border-radius: 8px;
        padding: 20px;
        flex: 1 1 300px;
        max-width: 350px;
        text-align: left;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

        .block img {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }

        .block div {
            margin-top: 15px;
        }

        .block h1 {
            font-family: 'Fraunces', serif;
            font-size: 22px;
            color: #1F1F1F;
            margin: 10px 0;
        }

</style>