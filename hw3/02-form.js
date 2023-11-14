//Add your code here
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-container");

  // This function will handle the form submission
  function handleFormSubmit(e) {
    // Prevent the default form submission
    e.preventDefault();

    // store form data in an object
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // check if all fields are filled
    let isFormValid = true;
    for (let key in data) {
      if (!data[key]) {
        isFormValid = false;
        break;
      }
    }

    // If the form is valid, format and log the data to the console
    if (isFormValid) {
      console.log("========Form Submission========");
      console.log(`    Name: ${data.name}`);
      console.log(`    Username: ${data.username}`);
      console.log(`    Email: ${data.email}`);
      console.log(`    Date of Birth: ${dateFormat(data.dob)}`);
      console.log(`    Preferred Pronouns: ${data.pronouns}`);
    } else {
      console.log("Cannot submit, all fields are required.");
    }
  }
  //convert date of birth to a desired format
  function dateFormat(date) {
    const dob = new Date(date);
    const dobFormatted = dob.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return dobFormatted;
  }

  // Add the event listener for the 'submit' event
  form.addEventListener("submit", handleFormSubmit);

  // Reset form to ensure it's empty on load
  form.reset();
});
