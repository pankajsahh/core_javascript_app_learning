getRandomMeal();


async function  getMealbyid(id) {
    const meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
}
async function getMealByName(name){
    const RespByName = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+name);
    const MealByName = await RespByName.json();
    console.log(MealByName.meals[0])
    return MealByName.meals[0];
    
}
async function getRandomMeal(){
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const RandomMeal= await response.json(); 
}

// search meal function will call search meal by name function and when data return to search function then will change the html content accordingly

function searchMeal(){
    
}