document.querySelector('#logo').addEventListener('click', () => {
    window.location = "../FinalTaskHTML/Dashboard.html"
});

document.querySelector('#employees').addEventListener('click', () => {
    window.location = "../FinalTaskHTML/Employee.html"
});

document.querySelector('#leaves').addEventListener('click', () => {
    window.location = "../FinalTaskHTML/Leave.html"
});
document.querySelector('#holidays').addEventListener('click', () => {
    window.location = '../FinalTaskHTML/Holidays.html';
});
document.querySelector('#company').addEventListener('click', () => {
    window.location = '../FinalTaskHTML/AboutCompany.html';
});
document.querySelector('#attendence').addEventListener('click', () => {
    window.location = '../FinalTaskHTML/Attendence.html';
});

document.querySelector('#feedback').addEventListener('click', () => {
    window.location = '../FinalTaskHTML/FeedBackReciver.html';
});
document.querySelector('#salary').addEventListener('click', () => {
    window.location = '../FinalTaskHTML/Salary.html';
});

document.querySelector('#EmpDetails').addEventListener('click', () => {
    window.location = '../FinalTaskHTML/EmployeeTypeForm.html';
});
document.querySelector('#Empsalaryform').addEventListener('click', () => {
    window.location = '../FinalTaskHTML/EmpSalaryPackagePage.html';
});

document.querySelector('#logout').addEventListener('click', () => {
    window.location = '../FinalTaskHTML/HrLoginPage.html';
});


function TotalEmployee() {
    let getEmpDetails = JSON.parse(localStorage.getItem('EmpDetails')) || [];
    document.querySelector('#empcount').innerHTML = getEmpDetails.length;

    let empcount = 0;
    let internsCount = 0;
    for (let i = 0; i < getEmpDetails.length; i++) {
        if (getEmpDetails[i].designation === 'Permanent Employee') {
            empcount++;
        } else if (getEmpDetails[i].designation === 'Intern') {
            internsCount++;
        }
    }
    document.querySelector('#permanent-emp').innerHTML = empcount;
    document.querySelector('#interns').innerHTML = internsCount;
}

TotalEmployee();
const totalWorkingDays = new Date();
let currMonth = totalWorkingDays.getMonth();
let noOfDays;

if (currMonth == 0 || currMonth == 2 || currMonth == 4 || currMonth == 6 || currMonth == 7 || currMonth == 9 || currMonth == 11) {
    noOfDays = 31;
} else if (currMonth == 3 || currMonth == 5 || currMonth == 8 || currMonth == 10) {
    noOfDays = 30;
} else {
    let year = totalWorkingDays.getFullYear();
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        noOfDays = 29;
    } else {
        noOfDays = 28;
    }
}

let workingDays = noOfDays - 4;

let workingDays1 = document.querySelector('#working-days');
let createElement = document.createElement('h3');
createElement.innerText = ` ${workingDays}`;
workingDays1.appendChild(createElement);
