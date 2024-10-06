// create load categories
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err))
}

// create categories
const displayCategories = (categories) => {
    categories.forEach((item) => {
        const categoryContainer = document.getElementById('categories');
        
        // create a buttom
        const button = document.createElement("button");
        button.classList = "px-10 py-3 border-2 rounded-lg hover:border-[#0e798188] hover:bg-[#0e7a811a] hover:rounded-full font-bold flex flex-row-reverse	 gap-3";
        const img = document.createElement("img");
        img.src= item.category_icon
        button.innerText = (item.category)
        img.classList = "w-7 h-7";

        // add button to displayContainer
        button.appendChild(img)
        categoryContainer.append(button);
    });
}
loadCategories();