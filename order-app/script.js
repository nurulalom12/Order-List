
const scriptURL = "https://script.google.com/macros/s/AKfycbx0XVQIUbzHoPiBUT8BIAB54a4_ksdIhBX361DK8MMPI7o7FggClSu63YKsHLgCaF5eSA/exec";

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    orderId: document.getElementById("orderId").value.trim(),
    clientName: document.getElementById("clientName").value.trim(),
    status: document.getElementById("status").value.trim(),
    payment: document.getElementById("payment").value.trim(),
    date: document.getElementById("date").value
  };

  fetch(scriptURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.text())
    .then(msg => {
      document.getElementById("message").innerText = msg;
      document.getElementById("orderForm").reset();
    })
    .catch(err => {
      document.getElementById("message").innerText = "❌ Error: " + err.message;
    });
});
