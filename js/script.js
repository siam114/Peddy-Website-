// create load categories
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err))
}

const removeActiveClass = () => {
  const buttons = document.getElementsByClassName("category-btn");
  console.log(buttons);
  for(let btn of buttons){
    btn.classList.remove("active")
  }
}

// create load cards
const loadCards = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => displayCards(data.pets))
    .catch(err => console.log(err))
}

// create click card
const loadCategoryCard = (id) => {
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then(res => res.json())
    .then(data => {
      // All active class remove
      removeActiveClass();
      // id er active class add
      const activeBtn = document.getElementById(`btn-${id}`);
      activeBtn.classList.add("active");
      console.log(activeBtn)
      displayCards(data.data)
    })
    .catch(err => console.log(err))
}

// like imageShow
const imageShow = (id) => {
  console.log(id);
  const imageContainer = document.getElementById('image');

  const images = document.createElement('div');
  images.innerHTML = `
      <img class="rounded-md " src = "${id}"/>
  `
  imageContainer.appendChild(images)
}

// create categories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    categories.forEach((item) => {
        
        // create a buttom
        const buttonContainer = document.createElement("div");
        buttonContainer.classList = "";
        
        buttonContainer.innerHTML = `
           <button id="btn-${item.category}" onclick ="loadCategoryCard('${item.category}')" class="lg:px-20 px-5 py-3 border-2 rounded-lg hover:border-[#0e798188] hover:bg-[#0e7a811a] font-bold flex justify-center gap-3 category-btn">
           <img src="${item.category_icon}" class="w-7 h-7"/> 
           ${item.category}
           </button>
           
        `

        // add button to displayContainer
        categoryContainer.append(buttonContainer);
    });
}

// create cards
const displayCards = (cards) => {
    const cardContainer = document.getElementById('cards');
    cardContainer.innerHTML = "" ;
    if(cards.length == 0){
      cardContainer.classList.remove('grid');
      cardContainer.innerHTML = `
         <div class="min-h-[400px] flex flex-col gap-5 justify-center items-center bg-[#D2DCFD] rounded-md">
         <img class ="w-16 h-16 sm:w-28 sm:h-28" src="images/error.webp" />
         <h4 class="font-bold text-2xl">No Information Available</h4>
         <p class="px-5 lg:px-10 hidden sm:block">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.</p>
         </div>
      `;
    }else{
      cardContainer.classList.add('grid');
    }
    cards.forEach((card) => {
        // console.log(card);
        // create card
        const div = document.createElement('div');
        div.classList = "card border-2 px-3 py-3"
        div.innerHTML = `
               <figure>
                      <img
                        src=${card.image}
                        alt=""
                        class="rounded-xl" />
                    </figure>

                    <div class="text-start space-y-1">
                      <h3 class="pt-3 font-bold">${card.pet_name}</h3>
                      <div>
                        <div class="flex gap-2 items-center">
                          <img class="w-5 h-5" src="https://img.icons8.com/?size=24&id=S9FoMsb5cl4y&format=png" alt="">
                          <h5 class="text-gray-500">Breed: ${card.breed}</h5>
                        </div>
                          <div class="flex gap-2 items-center">
                            <img class="w-5 h-5" src="https://img.icons8.com/?size=80&id=UTe6yKq2hvHK&format=png" alt="">
                            <h5 class="text-gray-500">Birth: ${card.date_of_birth}</h5>
                          </div>
                          <div class="flex gap-2 items-center">
                            <img class="w-5 h-5" src="https://img.icons8.com/?size=32&id=16271&format=png" alt="">
                            <h5 class="text-gray-500">Gender: ${card.gender}</h5>
                          </div>
                          <div class="flex gap-2 items-center pb-3 border-b-2">
                            <img class="w-5 h-5" src="https://img.icons8.com/?size=64&id=YmwAREsVO2DE&format=png" alt="">
                            <h5 class="text-gray-500">Price : ${card.price}$</h5>
                          </div>
                      </div>
                      <div class="flex justify-between items-center pt-3">
                        <button onclick ="imageShow('${card.image}')" class="border px-3 py-2 rounded-lg text-[#0E7A81] font-semibold hover:border-[#0e798188] hover:bg-[#0e7a811a]"><img class="w-5 h-5" src="https://img.icons8.com/?size=32&id=33481&format=png" alt=""></button>
                        <button class="border px-3 py-2 rounded-lg text-[#0E7A81] font-semibold hover:border-[#0e798188] hover:bg-[#0e7a811a]">Adopt</button>
                        <button class="border px-3 py-2 rounded-lg text-[#0E7A81] font-semibold hover:border-[#0e798188] hover:bg-[#0e7a811a]">Details</button>
                      </div>
                      
                    </div>
        `;
        cardContainer.append(div)
    })

}
loadCategories();
loadCards();