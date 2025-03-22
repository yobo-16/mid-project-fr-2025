export class Card{
    constructor(data){
        this.name = data.name;
        this.description = data.description;
        this.image = data.image;
        this.link = '/pages/'+data.name.toLowerCase().trim().replace(/\s+/g, '')+'.html';
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('card', 'especial-card');

        card.innerHTML = `
                <img src="${this.image}" alt="Project" class="img-card">
                <div class="card-content">
                    <div class="copy">
                        <p class="body-medium">${this.name}</p>
                        <p class="headline-regular">${this.description}</p>
                    </div>
                    <div class="link">
                        <a href="${this.link}">Learn more</a>
                    </div>
                </div>
        `

        return card;

    }

    addDomCard(){
        const cardContainer = document.querySelector('.card-container');
        cardContainer.appendChild(this.createCard());
    }
}