document.querySelector('#dashboard').addEventListener('click', () => {
    window.location = "../FinalTaskHTML/Dashboard.html"
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


const userData = localStorage.getItem('EmpDetails') || '[]';
const user = JSON.parse(userData);
let right = document.querySelector('.Right-sec');
user.forEach((e) => {
    let main = document.createElement('div');
    main.className = 'sub-div';
    let imgSrc = e.gender.toLowerCase() === 'male' ?
        '../pics/a11cb521eb3d0951fc49163f861dac09.jpg' :
        '../pics/jack.jpeg';

    main.innerHTML = `
        <div class="img">
            <img src="${imgSrc}" alt="#" />
        </div>
        <div class="Designation" id="Designation3">
            <h1>${e.name}</h1>
            <h3>${e.designation}</h3>
        </div>
        <p class="line"></p>
        <div class="details" id="details3">
            <p id="job-type"><i class="fa-solid fa-briefcase"></i>${e.gender}</p>
            <p id="email"><i class="fa-solid fa-envelope"></i>${e.email}</p>
            <p id="contact"><i class="fa-solid fa-phone"></i>${e.contact}</p>
        </div>`;
        main.style.margin = '85px';
    right.appendChild(main);
});
document.querySelector('#total-emp').innerHTML = user.length;
document.querySelector('')