function showProductDetails(title, imageUrl, description, price) {
  // Hide other sections
  document.querySelectorAll("main > section").forEach((section) => {
    section.style.display = "none";
  });

  // Show product details section
  const productDetailsSection = document.getElementById("product-details");
  productDetailsSection.style.display = "block";

  // Update product details
  document.getElementById("product-title").textContent = title;
  document.getElementById("product-image").src = imageUrl;
  document.getElementById("product-description").textContent = description;
  document.getElementById("product-price").textContent = price;
}

function goBack() {
  // Hide product details section
  const productDetailsSection = document.getElementById("product-details");
  productDetailsSection.style.display = "none";

  // Show other sections
  document.querySelectorAll("main > section").forEach((section) => {
    section.style.display = "block";
  });
}
// Smooth scroll functionality for anchor links
document.querySelectorAll('header nav ul li a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// copy!!
// script.js
function copyText(elementId) {
  // Get the text from the specified element
  const textToCopy =
    document.getElementById(elementId).textContent ||
    document.getElementById(elementId).innerText;

  // Create a temporary textarea element
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = textToCopy;

  // Append the textarea to the body
  document.body.appendChild(tempTextarea);

  // Select the text in the textarea
  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text to the clipboard
  document.execCommand("copy");

  // Remove the textarea from the body
  document.body.removeChild(tempTextarea);

  // Optional: Notify the user that the text has been copied
  alert("Text copied to clipboard");
}

// script.js H3 COPY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.addEventListener("DOMContentLoaded", () => {
  // Add a click event listener to all h3 elements
  document.querySelectorAll("h3").forEach((h3) => {
    h3.addEventListener("click", () => {
      copyText(h3.textContent);
    });
  });
});

function copyText(text) {
  // Create a temporary textarea element
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = text;

  // Append the textarea to the body
  document.body.appendChild(tempTextarea);

  // Select the text in the textarea
  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text to the clipboard
  document.execCommand("copy");

  // Remove the textarea from the body
  document.body.removeChild(tempTextarea);

  // Optional: Notify the user that the text has been copied
  alert("Text copied to clipboard");
}

// script.js CLICK TO COPY
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("h3").forEach((h3) => {
    h3.addEventListener("click", () => {
      copyText(h3.textContent);
    });
  });
});

function copyText(text) {
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = text;

  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999);

  document.execCommand("copy");
  document.body.removeChild(tempTextarea);

  alert("Text copied to clipboard");
}
