
let userLogged = JSON.parse(localStorage.getItem('userLogged'));
let getSignUp = JSON.parse(localStorage.getItem('EmpSignUp'));





// Attendance Marking
document.querySelector('#Mark').addEventListener('click', (e) => {
   e.preventDefault();

   const date = new Date();
   e.target.innerText = 'Present';
   e.target.style.color = "green";
   e.target.style.backgroundColor = "#fff";
   e.target.setAttribute('disabled', 'disabled');
   alert(`Logged in time: ${date.toLocaleTimeString()}`);

   
   setTimeout(() => {
      e.target.innerText = "Mark your Attendance";
      e.target.style.border = "none";
      e.target.style.outline = "none";
      e.target.style.padding = "10px";
      e.target.style.borderRadius = "13px";
      e.target.style.backgroundColor = "#777";
      e.target.style.color = "#fff";
      e.target.style.fontSize = "1rem";
      e.target.removeAttribute('disabled');
   }, 32400000);

   // Update attendance count for the logged-in user
   
   getSignUp.forEach((value) => {
      if (value.email === userLogged.userid) {
         value.attendance = (value.attendance || 0) + 1;
         localStorage.setItem('EmpSignUp', JSON.stringify(getSignUp));
         document.querySelector('#Attendence').innerText = `${value.attendance}`;
      }
   });
});

// Apply Leaves
let requiredDays;
document.querySelector('#Apply').addEventListener('click', (e) => {
   e.preventDefault();
   let leavesDisplay = document.querySelector('.noOfLeaves');
   getSignUp.forEach((user, index) => {
      if (user.email === userLogged.userid) {
      if (getSignUp[index].leavesLeft === 0) {
         leavesDisplay.style.visibility = 'hidden';
      } else {
         leavesDisplay.style.visibility = 'visible';
      }
   }
   });




   let days = document.querySelectorAll('.noOfLeaves li');
   days.forEach((dayElement) => {
      dayElement.addEventListener('click', () => {
         requiredDays = Number(dayElement.innerText);
         console.log(`Required Days: ${requiredDays}`);
         getEndDate();
      });
   });
});

function getEndDate() {
   let currentDate = new Date();
   let futureDate = new Date(currentDate);
   futureDate.setDate(currentDate.getDate() + requiredDays);

   console.log(`Start Date: ${currentDate.toDateString()}`);
   console.log(`End Date: ${futureDate.toDateString()}`);

   getSignUp.forEach((employee) => {
      if (employee.email === userLogged.userid) {
         employee.leaves = {
            startDate: currentDate,
            endDate: futureDate,
            days: requiredDays
         };
         localStorage.setItem('EmpSignUp', JSON.stringify(getSignUp));
      }
   });
}

// Display User Info
if (getSignUp) {
   getSignUp.forEach((e) => {
      if (e.email === userLogged.userid) {
         let leftDiv = document.querySelector('.Left');
         leftDiv.innerHTML = `
            <div class="users">
               <img src="../pics/a11cb521eb3d0951fc49163f861dac09.jpg" alt="Profile Picture">
               <button id='logout'>Logout</button>
            </div>
            <p class="info">Name: ${e.name}</p>
            <p class="info">Email: ${e.email}</p>
            <p class="info">Contact: ${e.contact}</p>
            <p class="info">D.O.B: ${e.dob}</p>
         `;
      }
   });
}

// Display Salary Package
function showEmployeePackage() {
   if (Array.isArray(getSignUp) && getSignUp.length > 0) {
      getSignUp.forEach((eachobj) => {
         let createElement = document.createElement('li');
         createElement.innerHTML = `
                CTC : => ${eachobj.employeePackage.ctc} <br>
                In-Hand Salary : => ${eachobj.employeePackage.inHandSalary} <br>
                Insurance : => ${eachobj.employeePackage.insurance}
            `;
         document.querySelector('#Left').appendChild(createElement);
         createElement.style.margin = '35px 0';
         createElement.style.padding = '10px';
         createElement.style.border = '1px solid #ccc';
         createElement.style.fontSize = '1.7em'
         createElement.style.color = '#000';
         createElement.style.color = '#f9f9f9';
         createElement.style.listStyle = 'none';
         createElement.style.textAlign = 'center'
      });
   } else {
      console.error("No employee data available or data is not in the expected format.");
   }
}
showEmployeePackage();

// Display Leaves Balance
let totalLeaves = document.querySelector('#Leaves');
if (getSignUp.length > 0) {
   let loggedInUser = getSignUp.find(emp => emp.email === userLogged.userid);
   if (loggedInUser && loggedInUser.leavesLeft !== undefined) {
      totalLeaves.innerText = loggedInUser.leavesLeft;
   } else {
      totalLeaves.innerText = "No data available";
   }
}

// Log Out Functionality
let logoutButton = document.querySelector('#logout');
if (logoutButton) {
   logoutButton.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('userLogged');
      window.location.href = '../FinalTaskHTML/EmployeeLoginPage.html';
   });
}
