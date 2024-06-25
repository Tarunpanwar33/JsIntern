let user
document.querySelector('#dashboard').addEventListener('click', () => {
    window.location.href = "../FinalTaskHTML/Dashboard.html";
});

document.querySelector('#employees').addEventListener('click', () => {
    window.location.href = "../FinalTaskHTML/Employee.html";
});

document.querySelector('#leaves').addEventListener('click', () => {
    window.location.href = '../FinalTaskHTML/Leave.html';
});

document.querySelector('#holidays').addEventListener('click', () => {
    window.location.href = "../FinalTaskHTML/Holidays.html";
});

document.querySelector('#company').addEventListener('click', () => {
    window.location.href = '../FinalTaskHTML/AboutCompany.html';
});

document.querySelector('#attendence').addEventListener('click', () => {
    window.location.href = "../FinalTaskHTML/Attendence.html";
});

document.querySelector('#feedback').addEventListener('click', () => {
    window.location.href = '../FinalTaskHTML/FeedBackReciver.html';
});


document.querySelector('#EmpDetails').addEventListener('click', () => {
    window.location.href = '../FinalTaskHTML/EmployeeTypeForm.html';
});

document.querySelector('#Empsalaryform').addEventListener('click', () => {
    window.location.href = '../FinalTaskHTML/EmpSalaryPackagePage.html';
});

document.querySelector('#logout').addEventListener('click', () => {
    localStorage.removeItem('userLogged');
    window.location.href = '../FinalTaskHTML/HrLoginPage.html';
});


function EmpSalary() {
    let getEmployeeSalary = JSON.parse(localStorage.getItem('EmpSignUp')) || [];
    let tbody = document.querySelector('#table-body');
    tbody.innerHTML = '';

    getEmployeeSalary.forEach((sal) => {
    
        let getSalary = document.createElement('tr');
        getSalary.innerHTML = `
            <td>${sal.name}</td>
            <td>${sal.email}</td>
            <td>${sal.employeePackage.ctc}</td>
            <td>${sal.employeePackage.inHandSalary}</td>
            <td>${sal.employeePackage.pf}</td>
            <td>${sal.employeePackage.insurance}</td> 
        `;
        tbody.appendChild(getSalary);
        
      return false;   
    // }
    });
}


EmpSalary();
