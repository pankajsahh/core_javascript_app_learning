const favList = document.querySelector('.fav_add');
getRandomMeal();
showallfavmeal();


async function getMealbyid(id) {
    const meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
    const meals_ids =await meal.json();
    return meals_ids.meals[0];
    
}
async function getMealByName(name) {
    const RespByName = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + name);
    const MealByName = await RespByName.json();
    return MealByName.meals[0] ;
    

}
async function getRandomMeal() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const RandomMeal = await response.json();
    // console.log(RandomMeal.meals[0])
    RandomMealsrh(RandomMeal.meals[0]);

}

//search meal on basis oof search name function here
async function searchMeal(){
    const search_val = document.querySelector('#search_input').value;
    mealRes = await getMealByName(search_val);
    RandomMealsrh(mealRes,false)
}

// search meal function will call search meal by name function and when data return to search function then will change the html content accordingly

function RandomMealsrh(Mealdata, random = true) {
    console.log(random?'':Mealdata);
    const meals = document.querySelector('.meals');
    meals.innerHTML=""
    const meal = document.createElement('div');
    meal.innerHTML = `
    <div class="meal_head">
    <h5 >${random?'random recipe':'searched'}</h5>
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
        if(like_btn.classList.contains('active')){
            // like_btn.classList.toggle('active');
            addmealLS(Mealdata.idMeal);
            // showallfavmeal();
        }else{
            removemealLS(Mealdata.idMeal);
            
        }
        
    })
    
}
//this function will search all meals and display on as a favourate meals
async function showallfavmeal(){
    favList.innerHTML="";
    const allmeals = getmealLS();
    const siz =allmeals.length;
    for(let i=0; i<siz ; i++){
        const item = document.createElement('li');
       const mealdata = await getMealbyid(allmeals[i]);
       
        item.innerHTML = `
        <img src="${mealdata.strMealThumb}" alt=""><span>${mealdata.strMeal}</span> <div onClick="removemealLS(${mealdata.idMeal})" class="rm_btn">X</div>
        `
        favList.appendChild(item);
    }

}


function addmealLS(id){
    const meals = getmealLS();
    localStorage.setItem('meals',JSON.stringify([...meals,id]));
    showallfavmeal();

}

function getmealLS(){
    const meals = JSON.parse(localStorage.getItem('meals'));
    return meals===null ? []:meals; 
}

function removemealLS(id){
    console.log(id)
    const meals = getmealLS();
    localStorage.setItem('meals',JSON.stringify(meals.filter((e)=>id!=e)));
    showallfavmeal();
}