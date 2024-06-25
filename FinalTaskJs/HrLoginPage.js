
let userobj = JSON.parse(localStorage.getItem('HrSignUp')) || [];


let userid = document.querySelector('#user-id');
let userpass = document.querySelector('#pass-word');
let btn = document.querySelector('#btn');

btn.addEventListener("click", (event) => {
   event.preventDefault();
 

   let checkUser = document.querySelector('.signed-up');
   let userNotFound = document.querySelector('.userNotFound');
   

   if (checkUser) checkUser.innerText = '';
   if (userNotFound) userNotFound.innerText = '';


   if (userobj.length === 0) {
      if (checkUser) {
         let createUserElement = document.createElement('h3');
         createUserElement.innerText = 'No users signed up yet.';
         checkUser.appendChild(createUserElement);
         checkUser.style.color = 'red'
      }
      return;
   }


   let user = userobj.find((e) => e.email === userid.value && e.password === userpass.value);

   if (user) {

      let obj = {
         userid: user.email,
         userpass: user.password
      };
      localStorage.setItem('userLog', JSON.stringify(obj));
      window.location.href = '../FinalTaskHTML/Dashboard.html';
   }
    else {
      if (userNotFound) {
         let createElementUser = document.createElement('h3');
         createElementUser.innerHTML = 'Invalid credentials';
         createElementUser.style.color = 'red';
         createElementUser.style.marginTop = '15px'
         userNotFound.appendChild(createElementUser);
      }
   }
});
