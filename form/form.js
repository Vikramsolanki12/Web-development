function validateForm(){
    let name = document.getElementById("name").value;
    let mobile = document.getElementById('mobile').value;
     let nameError = document.getElementById('nameError');
     let mobileError = document.getElementById('mobileError');
     nameError.textContent="";
     mobileError.textContent="";
     let isValid = true;
     if(name === ""){
           nameError.textContent="name required";
           isValid=false;
     }

     if(mobile===""){
        mobileError.textContent="mobile number required.";
        isValid=false;
     } else if(!/^\d{10}$/.test(mobile)){
        mobileError.textContent="wrong mobile number.";
        isValid=false;
     }

     if(isValid){
        console.log('form submitted!');
        document.getElementById('form').reset();
     }
}
