getRandomMeal();

async function getMealbyid(id) {
    const meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
}
async function getMealByName(name) {
    const RespByName = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + name);
    const MealByName = await RespByName.json();
    console.log(MealByName.meals[0])
    

}
async function getRandomMeal() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const RandomMeal = await response.json();
    searchAddMeal(RandomMeal.meals[0]);
}

// search meal function will call search meal by name function and when data return to search function then will change the html content accordingly

function searchAddMeal(Mealdata, random = true) {
    
    const meals = document.querySelector('.meals');
    meals.innerHTML=""
    const meal = document.createElement('div');
    meal.innerHTML = `
    <div class="meal_head">
    <h5 >${random?'random recipe':''}</h5>
    <img src="${Mealdata.strMealThumb}" alt="${Mealdata.strMeal}">
    </div>
    <div class="meal_body">
    <h4>${Mealdata.strMeal}</h4>
    <button class="like_btn"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg></button>
    </div>
    `;
    meals.appendChild(meal)
    const like_btn = document.querySelector('.like_btn');
    like_btn.addEventListener('click',()=>{
        like_btn.classList.toggle('active');
    })
    
}