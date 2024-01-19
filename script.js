function validateRegistrationForm(event) {
  event.preventDefault();

  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Basic client-side validation
  if (fullName.trim() === "" || email.trim() === "" || username.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
    document.getElementById("registrationResult").innerHTML = "Please fill in all fields.";
  } else if (password !== confirmPassword) {
    document.getElementById("registrationResult").innerHTML = "Passwords do not match.";
  } else if (!isPasswordValid(password)) {
    
    document.getElementById("registrationResult").innerHTML = "Password must be at least 6 characters long and include upper and lower case letters, a number, and a symbol.";
  } else {
    // Proceed with registration (you can add AJAX logic here if needed)
    document.getElementById("registrationResult").innerHTML = "Registration successful!";
    // You can also reset the form if needed: document.getElementById("registrationForm").reset();
  }
}

function isPasswordValid(password) {
  // Password must be at least 6 characters long and include upper and lower case letters, a number, and a symbol
  var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return passwordRegex.test(password);
}
