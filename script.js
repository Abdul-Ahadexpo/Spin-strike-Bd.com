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
