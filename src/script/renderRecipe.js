import $ from 'jquery';
import './custom-elements/FilterList';
import './custom-elements/FoodItem';
import './custom-elements/Loader';
const baseUrl='https://www.themealdb.com/api/json/v1/1';

const searchBar=()=>{
    $('#searchFilterContainer').append(`
        <form id='searchForm'>
            <input placeholder='Delicious Foods' type='text' name='search'>
            <button type='submit'><i class="fas fa-search"></i></button>
        </form>
    `);
    $('#searchForm').on('submit',(event)=>{
        event.preventDefault();
        fetchAndRenderFoods(`${baseUrl}/search.php?s=${event.target.search.value}`);
    });
};
const filter=async()=>{
    $('#searchFilterContainer').append(`
    <div id='dropdown'>
        <button>Filter</button>
        <div id='filterListContainer'>
        </div>
    </div>
    `);
    const promiseCategories=fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const promiseArea=fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const promiseIngredient=fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const [fetchCategory,fetchArea,fetchIngredient]=await Promise.all([promiseCategories,promiseArea,promiseIngredient]);
    const [categoryJson,areaJson,ingredientJson]=await Promise.all([fetchCategory.json(),fetchArea.json(),fetchIngredient.json()]);
    const categories=categoryJson.meals;
    const areas=areaJson.meals;
    const ingredients=ingredientJson.meals;
   
    const ingredientList=document.createElement('filter-list');
    ingredientList.list={id:'ingredientList', type:'Ingredient',filters: ingredients};
    $('#filterListContainer').append(ingredientList);
    const areaList=document.createElement('filter-list');
    areaList.list={id: 'areaList',type:'Area',filters: areas};
    $('#filterListContainer').append(areaList);
    const categoryList=document.createElement('filter-list');
    categoryList.list={id: 'categoryList',type: 'Category',filters: categories};
    $('#filterListContainer').append(categoryList);
   
};

export const fetchAndRenderFoods=async(url)=>{
    $('#foodsContainer').html('');
    const loading=document.createElement('loader-element');
    loading.load='load';
    $('main').append(loading);
    const fetchResponse=await fetch(url);
    const {meals}=await fetchResponse.json();
    $('loader-element').remove();
    if(meals){
    meals.forEach((m)=>{
        const foodItem=document.createElement('food-item');
        foodItem.food={name: m.strMeal,img: m.strMealThumb,id: m.idMeal};
        $('#foodsContainer').append(foodItem);
    });
    }else{
        $('#foodsContainer').append(`<h2 id='failSearch'>Dish not Found..</h2>`);
    }
};

const renderRecipe=()=>{
    $('#home,#about,#contact').removeAttr('class');
    $('#recipe').attr('class','current');
    $('main').html('');
    $('main').append('<div id="searchFilterContainer"></div>');
    $('main').append('<div id="foodsContainer"></div>');
    filter();
    searchBar();
    fetchAndRenderFoods(`${baseUrl}/filter.php?a=Japanese`);
};

export default renderRecipe;