const refs = {
  categories: document.querySelectorAll(".item"),
};

console.log(`Number of categories: ${refs.categories.length}`);

refs.categories.forEach((categorie) => {
  console.log(`Category: ${categorie.querySelector("h2").textContent}`);
  console.log(`Elements: ${categorie.querySelectorAll("ul li").length}`);
});
