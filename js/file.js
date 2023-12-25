document
  .getElementById("cityForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the selected city
    var selectedCity = document.querySelector('input[name="options"]:checked');

    if (selectedCity) {
      // Redirect to the home.html page
      window.location.href = "home.html";
    }
  });
