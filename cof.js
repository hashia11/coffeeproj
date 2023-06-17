document.getElementById("openPopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
  });
  
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
  });
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform login logic here
  });
  
  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform registration logic here
  });
  