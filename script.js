const CATEGORIES = [
  {
    id: 'general-government',
    name: 'General Government',
    desc: 'County board, executive, clerk, treasurer, assessing, elections, buildings and grounds.',
    amount: 46567346
  },
  {
    id: 'judicial',
    name: 'Judicial',
    desc: 'Circuit, district, and probate courts, friend of the court, and the prosecuting attorney.',
    amount: 30569884
  },
  {
    id: 'public-safety',
    name: 'Public Safety',
    desc: 'Sheriff, corrections and jail, 911 dispatch, and other public safety operations.',
    amount: 93659999
  },
  {
    id: 'public-works',
    name: 'Public Works',
    desc: 'County road, sanitation, and other public works activities funded through the General Fund.',
    amount: 1366787
  },
  {
    id: 'health-welfare',
    name: 'Health and Welfare',
    desc: 'Substance abuse services, the medical examiner, mental health, veterans programs, and related services.',
    amount: 8941308
  },
  {
    id: 'community-economic-development',
    name: 'Community and Economic Development',
    desc: 'Economic development, register of deeds, and community development programs.',
    amount: 1546551
  },
  {
    id: 'recreation-culture',
    name: 'Recreation and Culture',
    desc: 'County parks and recreation programming.',
    amount: 7731623
  },
  {
    id: 'other',
    name: 'Other (Capital Outlay & Debt Service)',
    desc: 'Capital projects and debt service payments funded through the General Fund.',
    amount: 1627579
  },
  {
    id: 'other-financing-uses',
    name: 'Transfers to Other Funds',
    desc: 'Transfers from the General Fund to other county funds and component units.',
    amount: 55199433
  }
];

const TOTAL_BUDGET = CATEGORIES.reduce((sum, c) => sum + c.amount, 0);

function niceStep(amount) {
  if (amount >= 10000000) return 500000;
  if (amount >= 1000000) return 50000;
  return 5000;
}

function niceMax(amount, step) {
  const target = amount * 2.5;
  return Math.ceil(target / step) * step;
}

function formatCurrency(value) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });
}

const state = {};

const grid = document.getElementById('categoryGrid');

CATEGORIES.forEach(category => {
  const step = niceStep(category.amount);
  const max = niceMax(category.amount, step);
  state[category.id] = category.amount;

  const card = document.createElement('div');
  card.className = 'category-card';
  card.innerHTML = `
    <div class="category-header">
      <span class="category-name">${category.name}</span>
      <span class="category-amount" id="amount-${category.id}">${formatCurrency(category.amount)}</span>
    </div>
    <p class="category-desc">${category.desc}</p>
    <input
      type="range"
      id="slider-${category.id}"
      min="0"
      max="${max}"
      step="${step}"
      value="${category.amount}"
    >
    <div class="range-labels">
      <span>$0</span>
      <span>${formatCurrency(max)}</span>
    </div>
  `;
  grid.appendChild(card);

  const slider = card.querySelector(`#slider-${category.id}`);
  const amountLabel = card.querySelector(`#amount-${category.id}`);

  slider.addEventListener('input', () => {
    const value = Number(slider.value);
    state[category.id] = value;
    amountLabel.textContent = formatCurrency(value);
    updateTotal();
  });
});

const totalBar = document.getElementById('totalBar');
const allocatedValueEl = document.getElementById('allocatedValue');
const budgetValueEl = document.getElementById('budgetValue');
const statusValueEl = document.getElementById('statusValue');
const progressFill = document.getElementById('progressFill');

budgetValueEl.textContent = formatCurrency(TOTAL_BUDGET);

function updateTotal() {
  const allocated = Object.values(state).reduce((sum, v) => sum + v, 0);
  allocatedValueEl.textContent = formatCurrency(allocated);

  const percent = Math.min((allocated / TOTAL_BUDGET) * 100, 100);
  progressFill.style.width = `${percent}%`;

  const diff = allocated - TOTAL_BUDGET;
  const isOver = diff > 0;
  totalBar.classList.toggle('over-budget', isOver);

  if (Math.abs(diff) < 1) {
    statusValueEl.textContent = 'Balanced';
  } else if (isOver) {
    statusValueEl.textContent = `Over by ${formatCurrency(diff)}`;
  } else {
    statusValueEl.textContent = `Under by ${formatCurrency(Math.abs(diff))}`;
  }
}

updateTotal();

const submitBtn = document.getElementById('submitBtn');
const submitNote = document.getElementById('submitNote');

submitBtn.addEventListener('click', () => {
  const allocated = Object.values(state).reduce((sum, v) => sum + v, 0);
  const result = {
    allocations: CATEGORIES.map(c => ({
      category: c.name,
      amount: state[c.id]
    })),
    totalAllocated: allocated,
    totalBudget: TOTAL_BUDGET,
    difference: allocated - TOTAL_BUDGET
  };
  console.log('Kent County Budget Priority Simulator — Final Allocation', result);
  submitNote.textContent = 'Your allocation has been logged to the browser console.';
});
