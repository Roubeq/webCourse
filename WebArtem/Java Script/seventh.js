function getRequest() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/octocat', true); // GitHub API
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            const dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = ''; // Очищаем старое

            // Создаём и вставляем элементы
            const nameElement = document.createElement('p');
            nameElement.textContent = `Имя: ${data.name}`;

            const loginElement = document.createElement('p');
            loginElement.textContent = `Логин: ${data.login}`;

            const bioElement = document.createElement('p');
            bioElement.textContent = `Описание: ${data.bio}`;

            const avatar = document.createElement('img');
            avatar.src = data.avatar_url;
            avatar.alt = 'Avatar';
            avatar.style.width = '150px';
            avatar.style.borderRadius = '10px';

            dataContainer.appendChild(nameElement);
            dataContainer.appendChild(loginElement);
            dataContainer.appendChild(bioElement);
            dataContainer.appendChild(avatar);

        } else {
            console.error('Ошибка при выполнении GET запроса');
        }
    };

    xhr.send();
}

getRequest();


function postRequest() {
    const postData = {
        name: 'Alice',
        job: 'Engineer'
    };

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(response => response.json()) //promise -> json(promise) -> data - вернулся объект и уже с ним работаем
        .then(data => {
            console.log('Ответ от сервера:', data);

            // Выводим результат на страницу
            const container = document.getElementById('data-container');
            const result = document.createElement('p');
            result.textContent = `Создан пользователь: ${data.name}, Должность: ${data.job}, ID: ${data.id}, Время: ${data.createdAt}`;
            container.appendChild(result);
        })
        .catch(error => {
            console.error('Ошибка при выполнении POST запроса:', error);
        });
}

postRequest();
