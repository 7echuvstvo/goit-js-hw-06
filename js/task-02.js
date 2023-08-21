const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Находим список ul#ingredients
const ingredientsList = document.querySelector("#ingredients");

// Создаем фрагмент для добавления всех элементов сразу
const fragment = document.createDocumentFragment();

// Проходимся по массиву ingredients и создаем элементы <li>
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  fragment.appendChild(li);
});

// Вставляем все элементы <li> в список ul#ingredients
ingredientsList.appendChild(fragment);
