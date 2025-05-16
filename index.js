const form = document.querySelector("form");

const cardContainer = document.querySelector(".card-container");

const successCard = document.querySelector(".success-card");
const sendMe = document.getElementById("send-me");
const dismissBtn = document.getElementById("dismiss");

function validateEmail() {
  const email = document.getElementById("input").value.trim();
  const validMessage = document.getElementById("valid-massage");
  // Email pattern
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email)) {
    validMessage.classList.remove("hide");
    return false;
  } else {
    validMessage.classList.add("hide");
    return true;
  }
}

form.addEventListener("submit", e => {
  e.preventDefault();

  if (validateEmail()) {
    cardContainer.classList.add("hide");
    successCard.classList.remove("hide");
  }
});

const getValue = document.getElementById("input").value;
sendMe.textContent = getValue;

dismissBtn.addEventListener("click", () => {
  successCard.style.display = "none";
  cardContainer.classList.remove("hide");
  // cardContainer.style.display = "block";
});
