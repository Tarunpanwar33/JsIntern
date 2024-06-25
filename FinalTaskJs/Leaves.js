
let leavesReq = JSON.parse(localStorage.getItem('EmpSignUp')) || [];


document.querySelector('#dashboard').addEventListener('click', () => {
    window.location = "../FinalTaskHTML/Dashboard.html";
});

document.querySelector('#employees').addEventListener('click', () => {
    window.location = "../FinalTaskHTML/Employee.html";
});

document.querySelector('#holidays').addEventListener('click', () => {
    window.location = "../FinalTaskHTML/Holidays.html";
});

document.querySelector('#company').addEventListener('click', () => {
    window.location = '../FinalTaskHTML/AboutCompany.html';
});

document.querySelector('#attendence').addEventListener('click', () => {
    window.location = "../FinalTaskHTML/Attendence.html";
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


const employeeTable = document.querySelector('#leaves-table');


leavesReq.forEach((e) => {

    if (e.leaves && e.leaves.days != undefined) {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${e.name}</td>
            <td>${e.email}</td>
            <td>${e.contact}</td>
            <td>${e.leaves.days}</td>
            <td class="icon">
                <i class="fa-solid fa-circle-check icon1" id='icon1'></i>
                <i class="fa-solid fa-circle-xmark icon2" id='icon2'></i>
            </td>`;

 
        employeeTable.appendChild(tr);


        tr.querySelector('.icon1').addEventListener('click', () => {
            let remaining =  e.leavesLeft - e.leaves.days;
            if (remaining >= 0) {
                e.leaveStatus = 'Agree';
                tr.querySelector('.icon').textContent = "Accepted";
                e.leavesLeft = remaining;
                e.leaves = {}; 
                localStorage.setItem('EmpSignUp', JSON.stringify(leavesReq));
            } 
        });

      
        tr.querySelector('.icon2').addEventListener('click', () => {
            e.leaveStatus = 'Deny';
            tr.querySelector('.icon').textContent = "Denied";
            localStorage.setItem('EmpSignUp', JSON.stringify(leavesReq));
        });
    }
});
