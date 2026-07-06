const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Input Fields
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let age = document.getElementById("age").value.trim();
    let gender = document.getElementById("gender").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let terms = document.getElementById("terms").checked;

    // Error Elements
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("ageError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";
    document.getElementById("termsError").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";

    let isValid = true;

    // Name Validation
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        isValid = false;
    }

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email address";
        isValid = false;
    }

    // Phone Validation
    let phonePattern = /^[0-9]{10}$/;

    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "Phone number is required";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Enter a valid 10-digit number";
        isValid = false;
    }

    // Age Validation
    if (age === "") {
        document.getElementById("ageError").innerHTML = "Age is required";
        isValid = false;
    } else if (age < 18) {
        document.getElementById("ageError").innerHTML = "Age must be 18 or above";
        isValid = false;
    }

    // Gender Validation
    if (gender === "") {
        document.getElementById("genderError").innerHTML = "Please select a gender";
        isValid = false;
    }

    // Password Validation
    if (password.length < 8) {
        document.getElementById("passwordError").innerHTML =
            "Password must contain at least 8 characters";
        isValid = false;
    }

    // Confirm Password Validation
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerHTML =
            "Confirm your password";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML =
            "Passwords do not match";
        isValid = false;
    }

    // Terms Validation
    if (!terms) {
        document.getElementById("termsError").innerHTML =
            "Please accept the Terms & Conditions";
        isValid = false;
    }

    // Success Message
    if (isValid) {

        document.getElementById("successMessage").innerHTML =
            "🎉 Registration Successful!";

        form.reset();
    }

});