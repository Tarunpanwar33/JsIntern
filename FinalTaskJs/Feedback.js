document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
    let name = document.querySelector('#name').value.trim();
    let email = document.querySelector('#email').value.trim();
    let contact = document.querySelector('#contact').value.trim();
    let textMessage = document.querySelector('#textarea').value.trim();


    let emptyObjError = document.querySelector('#error');
    emptyObjError.innerHTML = '';  

    if (name === '' || email === '' || contact === '' || textMessage === '') {
        let createElement = document.createElement('h3');
        createElement.innerText = 'Fields cannot be empty. Please fill in the fields.';
        createElement.style.color = 'red'; 
        createElement.style.paddingTop = '20px'
        emptyObjError.appendChild(createElement);
        return false; 
    }

    let feedbackObj = {
        name: name,
        email: email,
        contact: contact,
        textMessage: textMessage
    };


    let feedbackForm = JSON.parse(localStorage.getItem('FeedBackForm')) || [];
    feedbackForm.push(feedbackObj);

   
    localStorage.setItem('FeedBackForm', JSON.stringify(feedbackForm));
    event.target.reset();
});
