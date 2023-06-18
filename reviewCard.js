class ReviewCard extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        const shadow = this.attachShadow({ mode: "open" })
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'review-card');
        // create user info
        const userInfo = wrapper.appendChild(document.createElement('div'));
        userInfo.setAttribute("class", "user-info");
        const img = userInfo.appendChild(document.createElement('img'));
        img.src = this.hasAttribute('img') ? this.getAttribute('img') : '';
        img.alt = 'user icon';
        img.setAttribute('class', 'user-img')
        // name wrapper
        const nameWrapper = userInfo.appendChild(document.createElement('span'));
        const name = nameWrapper.appendChild(document.createElement('p'))
        name.textContent =  this.hasAttribute('name') ? this.getAttribute('name'): '';
        const subText = nameWrapper.appendChild(document.createElement('p'))
        subText.setAttribute('class', 'sub-text');
        subText.textContent= 'Verified Buyer'

        // user review
        const userReview = wrapper.appendChild(document.createElement('p'));
        userReview.textContent = this.hasAttribute('review') ? this.getAttribute('review'): '';
        const styleCss = document.createElement("link");
        styleCss.setAttribute("rel", "stylesheet");
        styleCss.setAttribute("href", "style.css");
        const resetCss = document.createElement('link');
        resetCss.setAttribute('rel', 'stylesheet');
        resetCss.setAttribute('href', 'reset.css')
        shadow.appendChild(resetCss);
        shadow.appendChild(styleCss);
        shadow.appendChild(wrapper);
    }
    
}

customElements.define('review-card', ReviewCard)