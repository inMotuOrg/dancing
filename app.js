document.getElementById("feedback-button").addEventListener("click", function(event) {
  event.preventDefault();

  fetch("https://script.google.com/macros/s/AKfycbykO2ZK1-ycstfDz3t1_-PkQW3ZYdRw9OMSs38inTPkqcMM657lDFwHAW9ighf4Gz0T/exec", {
    method: "POST",
    body: JSON.stringify({}),
    headers: { "Content-Type": "application/json" },
    mode: 'no-cors'
  })
    .then(response => response.text())
    .then(() => console.log("Redirect submitted!"))
    .catch(error => console.error("Error:", error));

  window.location.href='feedback.html';
});

window.addEventListener("load", function() {
  fetch("https://script.google.com/macros/s/AKfycbw-J8kSOaDjLxDox-dwOuHH95DxsL0fM5Z9JG9rPsaM_x84FOQoeR9VFB-4_jPiEwP6Mw/exec", {
    method: "POST",
    body: JSON.stringify({}),
    headers: { "Content-Type": "application/json" },
    mode: 'no-cors'
  })
    .then(response => response.text())
    .then(() => console.log("Visit submitted!"))
    .catch(error => console.error("Error:", error));
});
