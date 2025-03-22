import {Card} from './cardInfo.js'; 

const getProjects = async () => {
    try {

        const response = await fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects');
        const data = await response.json();

        const cardContainer = document.querySelector('.card-container');
        data.forEach(project => {
            if(project.name !== 'Lorem ipsum') {
                const card = new Card(project);
                cardContainer.appendChild(card.createCard());
            }

        });

        cardContainer.removeChild(cardContainer.firstChild);
        
        
    } catch (error) {
        console.error('Error fetching projects', error);
    }
};


getProjects();