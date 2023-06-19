class StarRating extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const shadow = this.attachShadow({mode: "open"});
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'star-ratings')
        const numOfStars = this.getAttribute('stars') ??0;

        for(let i = 0; i < numOfStars; i++){
            const img = wrapper.appendChild(document.createElement('img'));
            img.src = 'images/icon-star.svg';
        }

        const style = document.createElement("style");
        style.textContent = `.star-ratings {
            display: flex;
            gap: 10px;
            justify-content: center;
        }`;
        shadow.append(style,wrapper);
    }
}

customElements.define('star-rating', StarRating)