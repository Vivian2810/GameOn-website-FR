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
const CGV = document.getElementById ('checkbox1');

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    validateInput(form.firstName) &&
    validateInput(form.lastName) &&
    validateInput(form.email) &&
    validateInput(form.birthdate) &&
    validateInput(form.quantity) &&
    validLocation() &&
    vlidateCondition()
  ) {
    const user = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
    };
    modalbg.style.display = "none";
    userNames.innerHTML = user.firstName + " " + user.lastName;
    userEmail.innerHTML = user.email;
    modalThx.style.display = "block";
    form.reset();
  }
});

validateInput = (input) => {
  if (!input.value) {
    setErreur(input, `Veuillez renseigner un ${input.name}.`);
    return false;
  } else if (
    input.value.length <= 1 &&
    input.id !== "email" &&
    input.id !== "quantity"
  ) {
    setErreur(
      input,
      `Veuillez entrer 2 caractères ou plus pour le champ du ${input.name}.`
    );
    return false;
  } else if (input.value.match(/^ *$/)) {
    setErreur(input, `Veuillez entrer un ${input.name} valide.`);
    return false;
  } else if (
    input.id === "email" &&
    !input.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
  ) {
    setErreur(
      input,
      `Veuillez entrer une adresse email valide contenant '@' ainsi que '.' .`
    );
    return false;
  } else {
    setValid(input);
    return true;
  }
};

function validateQuantity() {
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
  if (radioCheck != null) {
    setValid(villes);
    return true;
  } else {
    setErreur(villes, "Veuillez renseigner une localisation.");
    return false;
  }
}

function vlidateCondition() {
  if (CGV.checked) {
    setValidCheckbox(CGV);
    return true;
  } else {
    setErreurCheckbox(CGV, "Veuillez accepter les CGV.");
    return false;
  }
}
function setValidCheckbox(input) {
  const formDataInput = input.parentElement;
  const small = formDataInput.querySelector('small'); 
  small.innerText = " ";
}
function setValid(input) {
  const formDataInput = input.parentElement;
  formDataInput.dataset.errorVisible = false;
  const small = formDataInput.querySelector("small");
  small.innerText = " ";
  if (input.type != "radio") input.className = "text-control input-error";
  else this.locationChecked = input.value;
}
function setErreurCheckbox(input, message) {
  const formDataInput = input.parentElement;
  const small = formDataInput.querySelector('small'); 
  small.innerText = message;
}
function setErreur(input, message) {
  const formDataInput = input.parentElement;
  const small = formDataInput.querySelector("small");
  formDataInput.dataset.errorVisible = true;
  small.innerText = message;
  if (input.type != "radio") input.className = "text-control input-error";
}
