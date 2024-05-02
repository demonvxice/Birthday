document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".btn").addEventListener("click", function() {
    var username = document.querySelector("input[type='text']").value;
    var password = document.querySelector("input[type='password']").value;

    // Check if username and password are correct
    if (username === "Rubi" && password === "06112023") {
      // Redirect user if login is successful
      window.location.href = "ILoveYou.html";
    } else {
      // Display error message or handle incorrect credentials
      alert("Incorrect username or password. Please try again.");
    }
  });
});
