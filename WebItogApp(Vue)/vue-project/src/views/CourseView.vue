<script setup>
    import TheHeader from "@/components/TheHeader.vue"
    import TheFooter from "@/components/TheFooter.vue"
</script>

<template>

    <TheHeader />


    <main>
        <section class="course-details">
            <h2>Java Course</h2>
            <img src="@/assets/logo.png" alt="Java Logo" class="course-image">
            <p class="course-description">
                This course is designed for those who want to master one of the most popular programming languages � Java.
                You will learn the basics of the language, object-oriented programming, working with databases, multithreading, and much more.
            </p>
            <ul class="course-topics">
                <li>Introduction to Java</li>
                <li>Syntax and Program Structure</li>
                <li>Object-Oriented Programming</li>
                <li>Working with Collections</li>
                <li>Multithreading</li>
                <li>Working with Databases (JDBC)</li>
                <li>Creating Web Applications (Spring Framework)</li>
            </ul>
            <button class="enroll-button">Enroll in the Course</button>
        </section>
    </main>

    <TheFooter />

</template>

<style scoped>
    /* Стили для основного контента */
    main {
        padding: 20px;
    }

    .course-details {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        max-width: 800px;
        margin: 0 auto;
    }

        .course-details h2 {
            margin-top: 0;
        }

    .course-image {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 20px 0;
        border-radius: 8px;
    }

    .course-description {
        line-height: 1.6;
    }

    .course-topics {
        list-style-type: disc;
        padding-left: 20px;
    }

        .course-topics li {
            margin-bottom: 10px;
        }

    .enroll-button {
        background-color: #28a745;
        color: #fff;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        display: block;
        margin: 20px auto 0;
        margin-bottom: 35px;
    }

        .enroll-button:hover {
            background-color: #218838;
        }
</style>