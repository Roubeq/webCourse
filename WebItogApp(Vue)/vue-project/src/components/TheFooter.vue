<script>
    import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
    <footer class="footer">
        <div class="footer__section footer__brand">
            <p>Built by <a href="https://vk.com/roubeq">Artem Blinov</a></p>
            <img src="@/assets/logo.png" alt="Javista Logo" class="footer__logo">
            <p>Javista</p>
        </div>

        <div class="footer__section footer__info">
            <h3>Info</h3>
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </div>

        <div class="footer__section footer__admin">
            <h3>Admin</h3>
            <ul>
                <li><a href="#">Style Guide</a></li>
                <li><a href="#">Licenses</a></li>
                <li><a href="#">Instructions</a></li>
            </ul>
        </div>

        <div class="footer__section footer__newsletter">
            <h3>Newsletter</h3>
            <p>Sign up for the latest news, company insights, and Whirl updates.</p>
            <form class="feedback-form">
                <label for="first-name">Имя:</label>
                <input type="text" id="first-name" name="first-name" required>

                <label for="last-name">Фамилия:</label>
                <input type="text" id="last-name" name="last-name" required>

                <label for="review">Отзыв:</label>
                <textarea id="review" name="review" rows="4" required></textarea>

                <button type="submit">Отправить</button>
            </form>

        </div>
    </footer>
    <footer class="all-rights">
        <p>&copy; 2023 All rights reserved.</p>
    </footer>
</template>

<style scoped>
    /* Футер */
    .footer {
        background: #f8f8f8;
        width: 100%;
        max-width: 100vw;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        text-align: center;
        padding: 20px;
        margin-top: auto;
    }

    a {
        text-decoration: none;
    }

    .footer__section {
        flex: 1 1 200px;
        max-width: 300px;
        margin-bottom: 20px;
    }

    .footer__brand img {
        width: 200px;
        margin-bottom: 10px;
    }

    .footer__section h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .footer__section ul {
        list-style: none;
        padding: 0;
    }

        .footer__section ul li a {
            text-decoration: none;
            color: #333;
            transition: color 0.3s;
        }

            .footer__section ul li a:hover {
                color: #007bff;
            }

    /* Форма обратной связи */
    .feedback-form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 400px;
        margin: auto;
    }

        .feedback-form input,
        .feedback-form textarea {
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
        }

        .feedback-form button {
            background: #2b7db7;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
        }

            .feedback-form button:hover {
                background: #1a5a85;
            }

    .all-rights {
        background-color: #333;
        color: #fff;
        text-align: center;
        position: fixed;
        margin-top: 100px;
        bottom: 0;
        width: 100%;
        z-index: 1;
    }
</style>