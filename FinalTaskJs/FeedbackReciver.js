document.querySelector('#dashboard').addEventListener('click',()=>{
    window.location = "../FinalTaskHTML/Dashboard.html"
    });

document.querySelector('#employees').addEventListener('click',()=>{
    window.location = "../FinalTaskHTML/Employee.html"
    });

document.querySelector('#leaves').addEventListener('click',()=>{
window.location = "../FinalTaskHTML/Leave.html"
});
document.querySelector('#holidays').addEventListener('click',()=>{
    window.location = '../FinalTaskHTML/Holidays.html';
});

document.querySelector('#attendence').addEventListener('click',()=>{
    window.location = '../FinalTaskHTML/Attendence.html';
});

document.querySelector('#company').addEventListener('click',()=>{
    window.location = '../FinalTaskHTML/AboutCompany.html';
});

document.querySelector('#salary').addEventListener('click',()=>{
    window.location = '../FinalTaskHTML/Salary.html';
});
document.querySelector('#Employee-details').addEventListener('click',()=>{
    window.location = '../FinalTaskHTML/EmployeeTypeForm.html';
});
document.querySelector('#Employee-salaryForm').addEventListener('click',()=>{
    window.location = '../FinalTaskHTML/EmpSalaryPackagePage.html';
});
document.querySelector('#logout').addEventListener('click',()=>{
    window.location = '../FinalTaskHTML/HrLoginPage.html';
});


let feebackData = JSON.parse(localStorage.getItem('FeedBackForm')) || [];
function ShowFormData() {

    let formData = document.querySelector('.boxes');
    formData.innerHTML="";

    feebackData.forEach(feed => {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="inner-box">
                <div class="img">
                 <i class="fa-regular fa-user"></i>
                </div>
                <div class="details">
                   <h3> Name  :<span>  ${feed.name}</span></h3>
                   <h3> Email :<span>  ${feed.email}</span></h3>
                   <h3> Contact :<span>  ${feed.contact}</span></h3>
                </div>            
            </div>
            <div class = 'textMsg'>
                <p> ${feed.textMessage}</p>
            </div>`

        formData.appendChild(card);
    });
}

ShowFormData();