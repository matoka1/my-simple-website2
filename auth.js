// SIGN-UP LOGIC
document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  const message = document.getElementById("signupMessage");

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }

  // Save to localStorage
  localStorage.setItem("user", JSON.stringify({ username, password }));
  message.textContent = "Account created successfully!";
  message.style.color = "green";

  // Optionally auto-fill login fields
  document.getElementById("loginUsername").value = username;
  document.getElementById("loginPassword").value = password;

  setTimeout(() => {
    message.textContent = "";
  }, 2000);
});

// LOGIN LOGIC
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem("user"));
  const message = document.getElementById("loginMessage");

  if (!user) {
    message.textContent = "No user found. Please sign up first.";
    message.style.color = "red";
    return;
  }

  if (user.username === username && user.password === password) {
    localStorage.setItem("loggedIn", true);
    window.location.href = "content.html";
  } else {
    message.textContent = "Invalid credentials. Try again.";
    message.style.color = "red";
  }
});
