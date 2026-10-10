const quizData = [
  {
    question: "What is the probability of getting a head when tossing a fair coin?",
    options: ["0.25", "0.5", "1", "0"],
    answer: "0.5"
  },
  {
    question: "Which concept explains why money today is worth more than tomorrow?",
    options: ["Inflation", "Time Value of Money", "Risk Pooling", "Discounting"],
    answer: "Time Value of Money"
  }
];

const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result");

quizData.forEach((q, index) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <p>${index + 1}. ${q.question}</p>
    ${q.options.map(opt => `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label>`).join("<br>")}
  `;
  quizContainer.appendChild(div);
});

submitBtn.addEventListener("click", () => {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) score++;
  });
  result.textContent = `You scored ${score} out of ${quizData.length}`;
});
function calculateLoan() {
  let amount = parseFloat(document.getElementById("loanAmount").value);
  let rate = parseFloat(document.getElementById("loanRate").value) / 100 / 12; // monthly rate
  let months = parseInt(document.getElementById("loanMonths").value);

  if (isNaN(amount) || isNaN(rate) || isNaN(months)) {
    document.getElementById("loanResult").innerText = "Please enter valid numbers.";
    return;
  }

  // Formula for monthly repayment: P * r / (1 - (1+r)^-n)
  let repayment = amount * rate / (1 - Math.pow(1 + rate, -months));
  document.getElementById("loanResult").innerText = 
    `Monthly Repayment: ${repayment.toFixed(2)} over ${months} months.`;
}

function calculateSavings() {
  let deposit = parseFloat(document.getElementById("deposit").value);
  let rate = parseFloat(document.getElementById("savingsRate").value) / 100 / 12; // monthly rate
  let duration = parseInt(document.getElementById("duration").value);

  if (isNaN(deposit) || isNaN(rate) || isNaN(duration)) {
    document.getElementById("savingsResult").innerText = "Please enter valid numbers.";
    return;
  }

  // Future value of annuity formula: FV = P * [(1+r)^n - 1] / r
  let futureValue = deposit * (Math.pow(1 + rate, duration) - 1) / rate;
  document.getElementById("savingsResult").innerText = 
    `Future Value: ${futureValue.toFixed(2)} after ${duration} months.`;
}
function trackBudget() {
  let income = parseFloat(document.getElementById("income").value);
  let expenses = parseFloat(document.getElementById("expenses").value);

  if (isNaN(income) || isNaN(expenses)) {
    document.getElementById("budgetResult").innerText = "Please enter valid numbers.";
    return;
  }

  let balance = income - expenses;
  let message = balance >= 0 
    ? `You have a surplus of ${balance.toFixed(2)}.` 
    : `You have a deficit of ${Math.abs(balance).toFixed(2)}.`;

  document.getElementById("budgetResult").innerText = message;
}

function recordTransaction() {
  let member = document.getElementById("memberName").value;
  let type = document.getElementById("transactionType").value;
  let amount = parseFloat(document.getElementById("transactionAmount").value);

  if (!member || isNaN(amount)) {
    alert("Please enter valid member name and amount.");
    return;
  }

  let ledger = document.getElementById("ledger");
  let entry = document.createElement("li");
  entry.textContent = `${member} made a ${type} of ${amount.toFixed(2)}`;
  ledger.appendChild(entry);
}
let currentMentor = null;

function selectMentor(name) {
  currentMentor = name;
  document.getElementById("selectedMentor").innerText = `Chatting with ${name}`;
  document.getElementById("messages").innerHTML = ""; // clear previous chat
}

function sendMessage() {
  let message = document.getElementById("messageInput").value;
  if (!currentMentor) {
    alert("Please select a mentor first.");
    return;
  }
  if (!message.trim()) {
    alert("Please type a message.");
    return;
  }

  let messagesList = document.getElementById("messages");
  let entry = document.createElement("li");
  entry.textContent = `You to ${currentMentor}: ${message}`;
  messagesList.appendChild(entry);

  document.getElementById("messageInput").value = "";
}
function showModule(topic) {
  let content = "";
  if (topic === "budgeting") {
    content = "Budgeting helps you allocate income to expenses, savings, and investments. Always track your spending and set aside at least 20% for savings.";
  } else if (topic === "saving") {
    content = "Smart saving uses compound interest. Even small monthly deposits grow significantly over time. Start early and stay consistent.";
  } else if (topic === "debt") {
    content = "Debt management means prioritizing high-interest loans, making extra payments when possible, and avoiding unnecessary borrowing.";
  }
  alert(content);
}

function loadDisasterTips() {
  const tips = [
    "Build an emergency fund covering 3–6 months of expenses.",
    "Take insurance for health, property, and life risks.",
    "Keep a record of important financial documents in a safe place.",
    "Diversify savings — don’t rely on one source.",
    "Plan for community pooling (chamas/SACCOs) to support members during crises."
  ];

  let list = document.getElementById("disasterTips");
  list.innerHTML = "";
  tips.forEach(tip => {
    let li = document.createElement("li");
    li.textContent = tip;
    list.appendChild(li);
  });
}
alert("Hello Bradox, site is working!");
alert("Deployment successful!");
// This will show a popup when the page loads
alert("Hello Bradox! Deployment successful 🎉");
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
