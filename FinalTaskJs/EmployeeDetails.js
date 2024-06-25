document.addEventListener('DOMContentLoaded', () => {
 
    document.querySelector('#sub-form').addEventListener('submit', (e) => {
        e.preventDefault(); 

     
        const formData = collectFormData();
        
    
        const validationError = validateFormData(formData);
        if (validationError) {
            displayError(validationError);
            return; 
        }

      
        saveEmployeeData(formData);


        document.querySelector('#sub-form').reset();



      
    });

 
    function collectFormData() {
        return {
            name: document.querySelector('#name').value.trim(),
            contact: document.querySelector('#contact').value.trim(),
            email: document.querySelector('#email').value.trim(),
            designation: document.querySelector('#emp-type').value === 'Intern' ? 'Intern' : 'Permanent Employee',
            gender: document.querySelector('#Male').checked ? 'Male' : document.querySelector('#Female').checked ? 'Female' : ''
        };
    }


    function validateFormData(data) {
        if (!data.name || !data.contact || !data.email || !data.designation || !data.gender) {
            return 'Fields cannot have empty parameters.';
        }
      
        return null; 
    }


    function displayError(message) {
        const errorElement = document.querySelector('#error');
        errorElement.innerText = ''; 
        const errorMessage = document.createElement('h6');
        errorMessage.innerText = message;
        errorElement.appendChild(errorMessage);
    }

  
    function saveEmployeeData(data) {
        const employeeData = JSON.parse(localStorage.getItem('EmpDetails')) || [];
        employeeData.push(data);
        localStorage.setItem('EmpDetails', JSON.stringify(employeeData));
    }
});
