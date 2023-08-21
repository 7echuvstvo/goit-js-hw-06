// Находим ul#categories элемент
const categoriesList = document.querySelector("#categories");

// Находим все элементы li.item внутри ul#categories
const categoryItems = categoriesList.querySelectorAll(".item");

// Выводим количество категорий
console.log(`Number of categories: ${categoryItems.length}`);

// Проходимся по каждому элементу li.item
categoryItems.forEach((categoryItem) => {
  // Находим заголовок h2 внутри текущей категории
  const categoryTitle = categoryItem.querySelector("h2").textContent;

  // Находим все элементы li внутри текущей категории
  const categoryElements = categoryItem.querySelectorAll("li").length;

  // Выводим информацию о текущей категории
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
