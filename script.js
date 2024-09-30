document.querySelector('.create').onclick = function() {
  var password = document.getElementById("password").value,
    confirmPassword = document.getElementById('confirm-password').value;

  if (password == "") {
    alert("Password field cannot be empty.");
  } else if (password != confirmPassword) {
    alert("Passwords didn't match, please try again.");
    return false; // Prevent form submission if needed
  } else {
    alert("Passwords match!");
  }
};