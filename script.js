const loanButtons = document.querySelectorAll('.loan-amount');
const payButtons = document.querySelectorAll('.pay');
const calculateAmount = document.querySelector('.hidden-text-and-calculate-amount');

let selectedLoanAmount = null;
let selectedPayFrequency = null;

function updateCalculateAmount() {
    if (selectedLoanAmount && selectedPayFrequency) {
        calculateAmount.classList.remove('hidden');
        // Calculate the amount here based on selectedLoanAmount and selectedPayFrequency
        document.getElementById('calculate-amount').textContent = `$${selectedLoanAmount * 0.04}`;
    } else {
        calculateAmount.classList.add('hidden');
    }
}

loanButtons.forEach(button => {
    button.addEventListener('click', () => {
        loanButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedLoanAmount = parseInt(button.textContent.replace('$', ''));
        updateCalculateAmount();
    });
});

payButtons.forEach(button => {
    button.addEventListener('click', () => {
        payButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedPayFrequency = button.textContent;
        updateCalculateAmount();
    });
});
