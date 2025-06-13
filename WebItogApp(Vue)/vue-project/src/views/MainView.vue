<script setup>
    import TheHeader from '@/components/TheHeader.vue'
    import TheFooter from '@/components/TheFooter.vue'
    import LabSection from '@/components/LabSection.vue'
</script>


<template>
    <TheHeader></TheHeader>
    <section id="about" class="about-section">
        <h1 id="about-title">What's Javista all about?</h1>
        <div class="features">
            <div class="feature" data-category="info">
                <h3>All on one place.</h3>
                <p>Everything you need, in one secure platform.</p>
            </div>
            <div class="feature" data-category="alerts">
                <h3>Get daily alerts.</h3>
                <p>Stay updated with real-time notifications.</p>
            </div>
            <div class="feature" data-category="security">
                <h3>Safe and secure.</h3>
                <p>Your data is protected with top encryption.</p>
            </div>
        </div>
    </section>

    <div id="data-container"></div>

    <section id="track" class="track-section" data-role="automation">

        <div class="track-section">
            <img src="../assets/image.svg" class="track-section" alt="NO PHOTO" />

            <div class="track-section-text">
                <h2> Set, forget, and then track.</h2>
                <p>Choose a direction, study step by step and achieve your goals.</p>
                <ul class="custom-list">
                    <li>
                        <img src="../assets/checkMark.svg" alt="✔" class="check-icon">
                        Understand which technologies are important
                    </li>
                    <li>
                        <img src="../assets/checkMark.svg" alt="✔" class="check-icon">
                        Follow proven learning paths
                    </li>
                    <li>
                        <img src="../assets/checkMark.svg" alt="✔" class="check-icon">
                        Master skills without chaos and wasted time
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section id="automation" class="automation-section">
        <h2>Your tasks, automated.</h2>
        <div class="task-grid">
            <div class="task" data-feature="options">
                <img src="../assets/options.svg" alt="Nothing" />
                <h3>Learn your options.</h3>
                <p>Understand what works best for you.</p>
            </div>
            <div class="task" data-feature="updates">
                <img src="../assets/automate.svg" alt="Nothing" />
                <h3>Stay informed.</h3>
                <p>Get the latest updates and insights.</p>
            </div>
            <div class="task" data-feature="automation">
                <img src="../assets/informed.svg" alt="Nothing" />
                <h3>Automate it all.</h3>
                <p>Let our platform handle the tasks.</p>
            </div>
        </div>
    </section>

    <LabSection></LabSection>

    <TheFooter></TheFooter>
</template>

<style scoped>

    /* Описание проекта */
    .about-section {
        text-align: center;
        padding-bottom: 20px;
    }

    .features {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 30px;
        flex-wrap: wrap; /* Позволяет блокам переноситься на новые строки */
    }

    .feature {
        flex: 1 1 300px; /* Минимальная ширина 300px, блоки адаптируются */
        max-width: 350px;
        padding: 20px;
        background: #f4f4f4;
        border-radius: 10px;
    }

    /* Блок "Set, forget, and then track" */
    .track-section {
        display: flex;
        flex-wrap: wrap; /* Элементы будут переноситься при узких экранах */
        align-items: center;
        background-color: #2b7db7;
        padding: 60px 20px;
        color: white;
        justify-content: center;
        text-align: center;
    }

    .custom-list {
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }


    .track-section-text {
        max-width: 600px;
        padding: 20px;
        text-align: left;
    }

    /* Автоматизация задач */
    .automation-section {
        text-align: center;
        padding: 60px 20px;
        background-color: #fff;
    }

    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap; /* Блоки переносятся, если не влезают */
        gap: 20px;
    }

    .task {
        flex: 1 1 300px;
        max-width: 350px;
        padding: 20px;
        background: #f4f4f4;
        border-radius: 10px;
    }
</style>
