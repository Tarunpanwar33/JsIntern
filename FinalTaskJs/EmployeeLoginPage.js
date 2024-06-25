let userobj = JSON.parse(localStorage.getItem('EmpSignUp')) || [];
let userid = document.querySelector('#user-id');
let userpass = document.querySelector('#pass-word');
let btn = document.querySelector('#btn');

btn.addEventListener("click", (event) => {
   event.preventDefault();

   if (userobj.length === 0) {
      let checkUser = document.querySelector('.signed-upUser');
      checkUser.innerHTML = '';
      let createUserElement = document.createElement('h3');
      createUserElement.innerText = 'No users signed up yet.';
      checkUser.appendChild(createUserElement);
      return;
   }

   let userFound = false; 
   userobj.forEach((e) => {
      if (e.email === userid.value && e.password === userpass.value) {
         userFound = true;
      
         let obj = {
            userid: e.email,
            password : e.password
         }
         localStorage.setItem('userLogged', JSON.stringify(obj));
         window.location.href = '../FinalTaskHTML/EmployeeDashboard.html';
         return; 
      }
   });

   if (!userFound) {
      let userNotFound = document.querySelector('.userNotFound');
      userNotFound.innerHTML = ''; 
      let createElementUser = document.createElement('h3');
      createElementUser.innerHTML = 'Invalid credentials';
      createElementUser.style.color = 'red';
      userNotFound.appendChild(createElementUser);
   }
});
