import './FilterItem.js';
class FilterList extends HTMLElement{
    set list({id,type,filters}){
        this._type=type;
        this._filters=filters;
        this.setAttribute('id',id);
        this.setAttribute('class','listSection');
        this.render();
    }
    render(){
        const listHeader=document.createElement('h3');
        listHeader.innerText=this._type;
        const ul=document.createElement('ul');
        this._filters.forEach((f)=>{
            const filterItem=document.createElement('filter-item');
            if(this._type==='Category'){
                filterItem.filter={filter: f.strCategory,url:`https://www.themealdb.com/api/json/v1/1/filter.php?c=${f.strCategory}`};
            }else if(this._type==='Area'){
                filterItem.filter={filter:f.strArea,url: `https://www.themealdb.com/api/json/v1/1/filter.php?a=${f.strArea}`};
            }else{
                filterItem.filter={filter:f.strIngredient,url:`https://www.themealdb.com/api/json/v1/1/filter.php?i=${f.strIngredient}`};
            }
            ul.appendChild(filterItem);
        });
        this.append(listHeader);
        this.append(ul);
    };
};
customElements.define('filter-list',FilterList);