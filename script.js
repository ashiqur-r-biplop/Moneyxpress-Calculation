const loanButtons = document.querySelectorAll(".loan-amount");
const payButtons = document.querySelectorAll(".pay");
const calculateAmount = document.querySelector(
  ".hidden-text-and-calculate-amount"
);

let selectedLoanAmount = null;
let selectedPayFrequency = null;

const paymentAmounts = {
  500: { week: 63, biweekly: 125, monthly: 250 },
  750: { week: 94, biweekly: 188, monthly: 282 },
  1000: { week: 126, biweekly: 250, monthly: 375 },
  1250: { week: 155, biweekly: 312, monthly: 470 },
  1500: { week: 187, biweekly: 375, monthly: 562 },
};

function updateCalculateAmount() {
  if (selectedLoanAmount && selectedPayFrequency) {
    const amount = paymentAmounts[selectedLoanAmount][selectedPayFrequency];
    document.getElementById("calculate-amount").textContent = `$ ${amount}*`;
    calculateAmount.classList.remove("hidden");
  } else {
    calculateAmount.classList.add("hidden");
  }
}

loanButtons.forEach((button) => {
  button.addEventListener("click", () => {
    loanButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    selectedLoanAmount = parseInt(button.textContent.replace("$", ""));
    updateCalculateAmount();
  });
});

payButtons.forEach((button) => {
  button.addEventListener("click", () => {
    payButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    selectedPayFrequency = button.textContent
      .replace("every ", "")
      .toLowerCase();
    updateCalculateAmount();
  });
});
