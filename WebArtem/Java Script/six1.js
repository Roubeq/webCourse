// === 1. Получаем заголовок секции ===
const aboutTitle = document.getElementById("about-title");

// === 2. Добавляем абзац после заголовка ===
const newParagraph = document.createElement("p");
newParagraph.textContent = "я строка и я после строки :)";
aboutTitle.insertAdjacentElement("afterend", newParagraph);

// === 3. Функция создания формы ===
function createEmailCheckForm() {
    const form = document.createElement("form");
    form.id = "email-check-form";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Введите email";
    input.style.padding = "8px";
    input.style.marginRight = "10px";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "4px";

    const button = document.createElement("button");
    button.textContent = "Проверить";
    button.type = "submit";
    button.style.padding = "8px 16px";
    button.style.backgroundColor = "#2b7db7";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.cursor = "pointer";

    form.appendChild(input);
    form.appendChild(button);

    // Валидация email при отправке
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const value = input.value.trim();
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

        if (emailPattern.test(value)) {
            alert("✅ Email введён корректно!");
        } else {
            alert("❌ Неверный формат email.");
        }
    });

    // Вставим форму после абзаца
    newParagraph.insertAdjacentElement("afterend", form);
    return form;
}

// === 4. Сразу создаём форму для варианта 1 ===
let form = createEmailCheckForm();
let form2 = form;
let isFormCreated = true;

// === 5. Кнопка скрытия через display ===
const toggleDisplayBtn = document.createElement("button");
toggleDisplayBtn.textContent = "Скрыть/Показать форму (display)";
toggleDisplayBtn.style.marginTop = "20px";
toggleDisplayBtn.style.marginRight = "10px";
toggleDisplayBtn.style.padding = "8px";
toggleDisplayBtn.style.cursor = "pointer";

// Вставляем кнопку после формы
form.insertAdjacentElement("afterend", toggleDisplayBtn);

toggleDisplayBtn.addEventListener("click", () => {
    form.style.display = (form.style.display === "none") ? "block" : "none";
});

// === 6. Кнопка удаления и создания формы ===
const toggleCreateBtn = document.createElement("button");
toggleCreateBtn.textContent = "Скрыть/Показать форму (удаление)";
toggleCreateBtn.style.marginTop = "20px";
toggleCreateBtn.style.marginLeft = "10px";
toggleCreateBtn.style.padding = "8px";
toggleCreateBtn.style.cursor = "pointer";

// Вставляем кнопку после предыдущей кнопки
toggleDisplayBtn.insertAdjacentElement("afterend", toggleCreateBtn);

// Сохраняем текущее состояние display формы
let currentDisplayStyle = "block";

toggleCreateBtn.addEventListener("click", () => {
    if (isFormCreated) {
        // Сохраняем текущий display перед удалением
        currentDisplayStyle = form.style.display;

        // Удаляем форму
        form2.remove();
        isFormCreated = false;
    } else {
        // Воссоздаем форму и применяем сохраненный стиль
        form2 = createEmailCheckForm();
        form2.style.display = currentDisplayStyle; // Восстановим сохраненный display
        isFormCreated = true;
    }
});
