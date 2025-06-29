function validateForm() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
  
    let nameError = document.getElementById("nameError");
    let mobileError = document.getElementById("mobileError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");
  
    
    nameError.textContent = "";
    mobileError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
  
    let isValid = true;
  
    if (name === "") {
      nameError.textContent = "Name is required.";
      isValid = false;
    }
  
    if (mobile === "") {
      mobileError.textContent = "Mobile number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      mobileError.textContent = "Mobile number must be 10 digits.";
      isValid = false;
    }
  
    if (email === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!email.includes("@") || !email.includes(".com")) {
      emailError.textContent = "Invalid email format.";
      isValid = false;
    } else {
      let atIndex = email.indexOf("@");
      let dotComIndex = email.indexOf(".com");
      if (atIndex > dotComIndex) {
          emailError.textContent = "@ should be before .com";
          isValid = false;
      }
    }
  
    if (password === "") {
      passwordError.textContent = "Password is required.";
      isValid = false;
    }
  
    if (confirmPassword === "") {
      confirmPasswordError.textContent = "Confirm password is required.";
      isValid = false;
    } else if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      isValid = false;
    }
  
    if (isValid) {
      console.log("Form submitted!");
      document.getElementById("registrationForm").reset();
    }
  }