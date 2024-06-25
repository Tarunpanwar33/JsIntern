
let empsal = JSON.parse(localStorage.getItem('EmpSignUp')) || [];

function submitForm(index) {
    const form = document.querySelector('form');
    

    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);
    
    newForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const ctc = document.querySelector('#ctc').value.trim();
        const insurance = document.querySelector('#insaurance').value.trim();
        const inHandSalary = document.querySelector('#in-handsal').value.trim();
        const pf = document.querySelector('#pf').value.trim();
        const errorElement = document.querySelector('.error');
        
        errorElement.innerHTML = '';

        if ([ctc, insurance, inHandSalary, pf].some(field => !field)) {
            errorElement.innerText = 'All fields are required';
            errorElement.style.color = 'red';
            return;
        }

        if ([ctc, insurance, inHandSalary, pf].some(field => isNaN(field))) {
            errorElement.innerText = 'CTC, Insurance, In-hand Salary, and PF must be valid numbers';
            errorElement.style.color = 'red';
            return;
        }

        empsal[index].employeePackage = { ctc, insurance, inHandSalary, pf };
        localStorage.setItem("EmpSignUp", JSON.stringify(empsal));

        newForm.reset();
        updateDropdown();
    });
}


function updateDropdown() {
    const employeeNameDropdown = document.querySelector('#drop-downlist');
    employeeNameDropdown.innerHTML = '<option value="" disabled selected>Select an Employee</option>';

    empsal.forEach((emp, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = emp.name;
        employeeNameDropdown.appendChild(option);
    });
}

const employeeNameDropdown = document.querySelector('#drop-downlist');
employeeNameDropdown.addEventListener('change', () => {
    const selectedIndex = employeeNameDropdown.value;
    if (selectedIndex !== '') {
        const selectedEmployee = empsal[selectedIndex];
        document.querySelector('#email').value = selectedEmployee.email;
        submitForm(selectedIndex);
    }
});

updateDropdown();

