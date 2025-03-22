
const contactSubmit = () => {
    console.log(window.location.pathname);
    

    const subcribeForm = document.querySelector('.form-home');
    const messageForm = document.querySelector('.message-sub-sent');
    const contenidoH3 = document.querySelector('.input-content h3');
    const contenidoP = document.querySelector('.input-content p');
    // form.addEventListener('submit', async (event) => {
        
    if(subcribeForm) {

        subcribeForm.addEventListener('submit', (event) => {
            event.preventDefault();
            subcribeForm.style.display = 'none';
            contenidoH3.style.display = 'none';
            contenidoP.style.display = 'none';
            messageForm.style.display = 'block';

        });

    }


    
};

export default contactSubmit;