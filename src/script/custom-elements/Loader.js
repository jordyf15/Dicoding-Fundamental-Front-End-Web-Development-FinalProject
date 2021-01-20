class Loader extends HTMLElement{
    set load(load){
        this.render();
    }
    render(){
        this.innerHTML=`
            <div id='loadingContainer'>
                <div id='loading'></div>
                <p>Fetching dishes please wait..</p>
            </div>
        `;
    }
}

customElements.define('loader-element',Loader);