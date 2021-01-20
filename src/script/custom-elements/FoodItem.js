class FoodItem extends HTMLElement{
    
    set food({name,img,id}){
        this._name=name;
        this._img=img;
        this._id=id;
        this.render();
    }
    render(){
        const foodItemContainer=document.createElement('div');
        foodItemContainer.setAttribute('class','foodItemContainer');
        foodItemContainer.innerHTML=`
        <img src='${this._img}' width='240px' height='240px' alt='${this._name}'>
                <div class='textFoodContainer'>
                    <span>${this._name}</span>
                </div>
        `;
        const button=document.createElement('button');
        button.addEventListener('click',async()=>{
            const fetchResponse=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this._id}`);
            const {meals}=await fetchResponse.json();
            if(meals[0].strSource){
                window.open(meals[0].strSource);
            }else if(meals[0].strYoutube){
                window.open(meals[0].strYoutube);//pake youtube videonya klo sourcenya null
            }
            else{//beberapa urlnya ada yg null (ini last resort kirim ke web yg penuh recipes aja)
                window.open('https://www.bbcgoodfood.com/recipes');
            }
        });
        button.innerText='See More!';
        foodItemContainer.append(button);
        this.append(foodItemContainer);
    }
}
customElements.define('food-item',FoodItem);