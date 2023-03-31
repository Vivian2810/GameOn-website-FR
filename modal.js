function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalThx = document.querySelector(".thx-modal");
const closeBtn = document.querySelectorAll(".close");
const submitBtn = document.getElementsByClassName(".btn-submit");

//modal form
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const villes = document.getElementById("location1");

// modal validation
const userNames = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userCity = document.getElementById("user-city");

// launch modal event
modalBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    modalbg.style.display = "block";
  })
);

closeBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    modalbg.style.display = "none";
    modalThx.style.display = "none";
  })
);

function testInputLocation(input) {
  let hasOneCheck = false;
  console.log(input);
  input.forEach((location) => {
    console.log(location);
    if (location.checked) {
      this.locationChecked = location.value;
      hasOneCheck = true;
      console.log(hasOneCheck);
    }
    if (!hasOneCheck) {
      console.log("error");
      location.dataset.errorVisible = "true";
      return false;
    }
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    validateFirstName() &&
    validateLastName() &&
    validateEmail() &&
    validateBirthdate() &&
    validateQuantity() &&
    validLocation()
  ) {
    const user = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      city: this.locationChecked,
    };

    modalbg.style.display = "none";

    userNames.innerHTML = user.firstName + " " + user.lastName;
    userEmail.innerHTML = user.email;
    userCity.innerHTML = user.city;

    modalThx.style.display = "block";

    form.reset();
  }
});

validateFirstName = () => {
  if (!form.firstName.value) {
    setErreur(form.firstName, "Veuillez renseigner un prénom.");
    return false;
  } else if (form.firstName.value.length <= 1) {
    setErreur(
      form.firstName,
      "Veuillez entrer 2 caractères ou plus pour le champ du prenom."
    );
    return false;
  } else if (form.firstName.value.match(/^ *$/)) {
    setErreur(form.firstName, "Veuillez entrer un prénom valide.");
    return false;
  } else {
    setValid(form.firstName);
    return true;
  }
};

validateLastName = () => {
  if (!form.lastName.value) {
    setErreur(form.lastName, "Veuillez renseigner un nom.");
    return false;
  } else if (form.lastName.value.length <= 1) {
    setErreur(
      form.lastName,
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    return false;
  } else if (form.lastName.value.match(/^ *$/)) {
    setErreur(form.lastName, "Veuillez entrer un nom valide.");
    return false;
  } else {
    setValid(form.lastName);
    return true;
  }
};

validateEmail = () => {
  if (!form.email.value) {
    setErreur(form.email, "Veuillez renseigner un email.");
    return false;
  } else if (form.email.value.length <= 1) {
    setErreur(
      form.email,
      "Veuillez entrer 2 caractères ou plus pour le champ de l'email."
    );
    return false;
  } else if (form.email.value.match(/^ *$/)) {
    setErreur(form.email, "Veuillez entrer un email valide.");
    return false;
  } else {
    setValid(form.email);
    return true;
  }
};

validateBirthdate = () => {
  if (!form.birthdate.value) {
    setErreur(form.birthdate, "Veuillez renseigner une date de naissance.");
    return false;
  } else if (form.birthdate.value.length <= 1) {
    setErreur(
      form.birthdate,
      "Veuillez entrer 2 caractères ou plus pour le champ de la date de naissance."
    );
    return false;
  } else if (form.birthdate.value.match(/^ *$/)) {
    setErreur(form.birthdate, "Veuillez entrer une date de naissance valide.");
    return false;
  } else {
    setValid(form.birthdate);
    return true;
  }
};

validateQuantity = () => {
  if (!form.quantity.value) {
    setErreur(form.quantity, "Veuillez renseigner une quantité.");
    return false;
  } else {
    setValid(form.quantity);
    return true;
  }
};
function validLocation() {
  let radioCheck = document.querySelector('input[name = "location"]:checked');
  console.log(radioCheck);
  if (radioCheck != null) {
    //Test if something was checked
    setValidCheckbox(villes);
    return true;
  } else {
    setErreurCheckbox(villes, "Veuillez renseigner une localisation.");
    return false;
  }
}
function setErreurCheckbox(input, message) {
  // Form elements for error and validation
  const formDataInput = input.parentElement; // Select input
  const small = formDataInput.querySelector("small"); // Select div for error message

  small.innerText = message;
}
function setValidCheckbox(input) {
  // Form elements for error and validation
  const formDataInput = input.parentElement; // Select input
  const small = formDataInput.querySelector("small"); // Select div for error message
  this.locationChecked = input.value;
  small.innerText = " "; // Reset error message
}

function setValid(input) {
  // Form elements for error and validation
  const formDataInput = input.parentElement; // Select input
  const small = formDataInput.querySelector("small"); // Select div for error message

  small.innerText = " "; // Reset error message
  input.className = "text-control input-valid";
}

function setErreur(input, message) {
  // Form elements for error and validation
  const formDataInput = input.parentElement; // Select input
  const small = formDataInput.querySelector("small"); // Select div for error message

  small.innerText = message;
  input.className = "text-control input-error";
}
