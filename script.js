document.addEventListener("DOMContentLoaded", function () {
  // Show floating order button after the page loads
  const floatingOrderBtn = document.querySelector(".floating-order-btn");
  floatingOrderBtn.style.display = "block";

  // Handle form submission
  const orderForm = document.getElementById("orderForm");
  const responseMessage = document.getElementById("responseMessage");

  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(orderForm);
    fetch(orderForm.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "success") {
          responseMessage.textContent = data.message;
          responseMessage.classList.remove("error");
          responseMessage.classList.add("success");
          orderForm.reset();
        } else {
          responseMessage.textContent = data.message;
          responseMessage.classList.remove("success");
          responseMessage.classList.add("error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        responseMessage.textContent =
          "Failed to submit order. Please try again later.";
        responseMessage.classList.remove("success");
        responseMessage.classList.add("error");
      });
  });
});
