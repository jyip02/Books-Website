function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the entered credentials match
    if (username === "admin" && password === "12345") {
	  window.location.href = "./Welcome.html";
    } else {
      alert("Invalid username or password. Please try again.");
	  document.getElementById("username").value="";
	  document.getElementById("password").value="";
    }
  }