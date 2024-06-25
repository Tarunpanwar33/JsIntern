let employees = JSON.parse(localStorage.getItem('EmpSignUp')) || [];
let emp = JSON.parse(localStorage.getItem('userLogged'));
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#empName').value;
    const empid = document.querySelector('#empid').value;
    const contact = document.querySelector('#contact').value;
    const email = document.querySelector('#email').value;
    const leavesrequire = document.querySelector('#leaves').value;
    const reasonforLeaves = document.querySelector('#leaves-reason').value;

    let leavesrequired = '';
    let parseintoNumber = parseInt(leavesrequire);
  
    
    const storedData = JSON.parse(localStorage.getItem('EmpLeave')) || [];

    const formData = {
        name: name,
        empid: empid,
        contact: contact,
        email: email,
        leavesrequire: leavesrequired,
        reasonforLeaves: reasonforLeaves,
        leaveStatus: "",

    };



    storedData.unshift(formData);
    localStorage.setItem('EmpLeave', JSON.stringify(storedData));

    e.reset();
    console.log('Form data stored successfully:', formData);

});
