document.getElementById("dashboard").addEventListener('click', () =>
    window.location = '../FinalTaskHTML/Dashboard.html'
);

document.getElementById("employees").addEventListener('click', () =>
    window.location = '../FinalTaskHTML/Employee.html'
);

document.querySelector('#leaves').addEventListener('click', () => {
    window.location = "../FinalTaskHTML/Leave.html"
});
document.querySelector('#holidays').addEventListener('click', () => {
    window.location = '../FinalTaskHTML/Holidays.html';
});
document.querySelector('#company').addEventListener('click', () => {
    window.location = '../FinalTaskHTML/AboutCompany.html';
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
document.querySelector('#EmployeesalaryForm').addEventListener('click', () => {
    window.location = '../FinalTaskHTML/EmpSalaryPackagePage.html';
});
document.querySelector('#logout').addEventListener('click', () => {
    window.location = '../FinalTaskHTML/HrLoginPage.html';
});


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
        console.log('LeapYear');
        noOfDays = 29;
    } else {
        console.log('Not a Leap year');
        noOfDays = 28;
    }
}

let workingDays = noOfDays - 4;
console.log(workingDays);

let EmployeeAttendce = JSON.parse(localStorage.getItem('EmpSignUp')) || [];
const employeeTable = document.querySelector('#leaves-table');

EmployeeAttendce.forEach((e) => {
    let tr = document.createElement('tr');

    tr.innerHTML = `
         <td>${e.name}</td>
         <td>${e.email}</td>
         <td>${e.contact}</td>
         <td>${e.attendance}/${workingDays}</td>`;

    employeeTable.appendChild(tr);
});
