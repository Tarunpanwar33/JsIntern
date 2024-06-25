let element = document.getElementById("form").addEventListener('submit',login);
function login(e) {
  e.preventDefault();
  let username = document.getElementById("user-id");
  let password = document.getElementById("pass-word");
  if (username.value === "Tarun@123" && password.value === "12345678") {
    window.location = "http://127.0.0.1:5500/JsIntern/FinalTask/Dashboard.html"
  }else{
    alert("Username && Password is Not Correct");
  }
}
/////////////////////////////////////////////////////////////////////////////////////

