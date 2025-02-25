document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let formData = new FormData(this);
  let jsonData = {};

  formData.forEach((value, key) => { jsonData[key] = value; });

  fetch("https://script.google.com/macros/s/AKfycbwpd9PAo3wFG7fHaAPq2C9gcyWetUqTCGKTsCuXAFbbsbZdfdxvsdvav7VWW6GofxRq/exec", {
    method: "POST",
    body: JSON.stringify(jsonData),
    headers: { "Content-Type": "application/json" },
    mode: 'no-cors'
  })
    .then(response => response.text())
    .then(data => alert("Contact saved!"))
    .catch(error => console.error("Error:", error));
});

