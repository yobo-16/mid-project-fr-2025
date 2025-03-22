
const contactSubmit = () => {
    console.log(window.location.pathname);
    console.log('contactSubmit');

    if(window.location.pathname === '/pages/contact.html') {

        const messageForm = document.querySelector('.message-sent');
        const form = document.querySelector('.contact-form');
        // form.addEventListener('submit', async (event) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.style.display = 'none';
            messageForm.style.display = 'block';
            // console.log('Form submitted');
            // const formData = new FormData(form);
            // const formObject = Object.fromEntries(formData);
            // console.log(formObject);

            // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(formObject)
            // });

            // const data = await response.json();
            // console.log(data);
        });


    }
    
};

export default contactSubmit;