
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const contact = document.querySelector('#contact').value;
    const dob = document.querySelector('#dob').value;
    const genderMale = document.querySelector('#male').checked;
    const genderFemale = document.querySelector('#female').checked;
    const password = document.querySelector('#password').value;
    const rePass = document.querySelector('#re-password').value;

    function checkPassword() {
        const incorrectPass = document.querySelector('.incorrectPass');
        if (password !== rePass) {

            let createMsg = document.createElement('h3');
            createMsg.innerHTML = 'Password parameters do not match';
            incorrectPass.innerHTML = '';
            incorrectPass.appendChild(createMsg);
            createMsg.style.color = 'red';
            createMsg.style.marginTop = '18px'
            return false;
        }
        else {

            incorrectPass.innerHTML = '';

        }
        return true;
    }

    function checkParameters() {
        const emptyFields = document.querySelector('.emptyFieldsError');
        if (name === '' || email === '' || contact === '' || dob === '' || !(genderMale || genderFemale)) {
            let createElement = document.createElement('h3');
            createElement.innerHTML = 'Please fill in all fields';
            emptyFields.innerHTML = '';
            emptyFields.appendChild(createElement);
            createElement.style.color = 'red';
            createElement.style.fontSize = '1.3em'
            createElement.style.font = '700'
            createElement.style.margin = '15px'
            return false;
        }
        else {
            emptyFields.innerHTML = '';
        }
        return true;
    }

    if (!checkPassword() || !checkParameters()) {
        return;
    }

    const gender = genderMale ? 'Male' : 'Female';

    const user = {
        name: name,
        email: email,
        contact: contact,
        dob: dob,
        gender: gender,
        password: password,
    };

    let arr = JSON.parse(localStorage.getItem('HrSignUp')) || [];

    const isDuplicateEmail = arr.some(data => data.email === email);
    if (isDuplicateEmail) {
        const error = document.querySelector('#error');
        error.innerHTML = '';
        let createErrorMessage = document.createElement('h2');
        createErrorMessage.textContent = `Email is already registered`;
        createErrorMessage.style.color = 'red';
        error.appendChild(createErrorMessage);
        setTimeout(() => {
            error.removeChild(createErrorMessage);
        }, 2000);
        return;
    }

    arr.push(user);
    localStorage.setItem('HrSignUp', JSON.stringify(arr));
    e.target.reset();
    window.location = '../FinalTaskHTML/HrLoginPage.html';
});
