import { Card } from './cardInfo.js';

const getProjects = async () => {
    try {

        const response = await fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects');
        const data = await response.json();

        const cardContainer = document.querySelector('.intern-page-form');
        if (cardContainer) {
            const locationPath = window.location.pathname;
            data.forEach(project => {
                 
                    const card = new Card(project);

                    if (locationPath !== card.link){
                        cardContainer.appendChild(card.createCard());
                    }

                

            });
        } 
        console.log(cardContainer);
        // data.forEach(project => {
        //     if(project.name !== 'Lorem ipsum') {
        //         const card = new Card(project);
        //         cardContainer.appendChild(card.createCard());
        //     }

        // });

        
        
        
    } catch (error) {
        console.error('Error', error);
    }
};


getProjects();