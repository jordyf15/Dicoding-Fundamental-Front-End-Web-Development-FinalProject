import {fetchAndRenderFoods} from '../renderRecipe.js';
class FilterItem extends HTMLElement{
    set filter({filter,url}){
        this._filter=filter;
        this._url=url;
        this.render();
    }
    render(){
        this.innerHTML=`
            <li >${this._filter}</li>
        `;
        this.addEventListener('click',()=>{
            fetchAndRenderFoods(this._url);
        });
    }

}

customElements.define('filter-item',FilterItem);