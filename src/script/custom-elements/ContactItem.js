class ContactItem extends HTMLElement{

    set contact({icon,title,desc,url}){
        this._icon=icon;
        this._title=title;
        this._desc=desc;
        this._url=url;
        this.render();
    }
    render(){
        this.innerHTML=`
                <i class='${this._icon}'></i>
                <span class='contactItemTitle'>
                    ${this._title}
                </span>
                <span class='contactItemDesc'>
                    ${this._desc}
                </span>
                <button onclick='window.open("${this._url}")'>See More!</button>
        `;
    }
}
customElements.define('contact-item',ContactItem);