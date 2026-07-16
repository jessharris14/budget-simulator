import { auth, db } from './firebase-config.js';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import {
  collection,
  getDocs,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const loadingState = document.getElementById('loadingState');
const loginSection = document.getElementById('loginSection');
const dashboardSection = document.getElementById('dashboardSection');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const logoutBtn = document.getElementById('logoutBtn');
const refreshBtn = document.getElementById('refreshBtn');
const downloadCsvBtn = document.getElementById('downloadCsvBtn');
const tableWrap = document.getElementById('tableWrap');
const fetchError = document.getElementById('fetchError');
const emptyState = document.getElementById('emptyState');
const submissionCount = document.getElementById('submissionCount');

let currentRows = [];
let currentColumns = [];
downloadCsvBtn.disabled = true;

function showLogin() {
  loadingState.style.display = 'none';
  loginSection.style.display = 'block';
  dashboardSection.style.display = 'none';
}

function showDashboard() {
  loadingState.style.display = 'none';
  loginSection.style.display = 'none';
  dashboardSection.style.display = 'block';
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    showDashboard();
    loadSubmissions();
  } else {
    showLogin();
  }
});

const LOGIN_ERROR_MESSAGES = {
  'auth/invalid-email': 'That email address looks invalid.',
  'auth/user-disabled': 'This account has been disabled.',
  'auth/user-not-found': 'No account found with that email.',
  'auth/wrong-password': 'Incorrect password.',
  'auth/invalid-credential': 'Incorrect email or password.',
  'auth/too-many-requests': 'Too many failed attempts. Please wait and try again.'
};

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  loginError.textContent = '';
  const submitBtn = loginForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  try {
    await signInWithEmailAndPassword(auth, emailInput.value.trim(), passwordInput.value);
    passwordInput.value = '';
  } catch (err) {
    loginError.textContent = LOGIN_ERROR_MESSAGES[err.code] || 'Login failed. Please try again.';
  } finally {
    submitBtn.disabled = false;
  }
});

logoutBtn.addEventListener('click', () => {
  signOut(auth);
});

refreshBtn.addEventListener('click', () => {
  loadSubmissions();
});

function formatTimestamp(ts) {
  if (!ts) return '';
  if (typeof ts.toDate === 'function') return ts.toDate().toLocaleString();
  return String(ts);
}

function formatMoney(value) {
  const num = Number(value) || 0;
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

function collectCategoryTotals(sectionArray) {
  const totals = {};
  (sectionArray || []).forEach(entry => {
    totals[entry.category] = entry.total;
  });
  return totals;
}

function collectComments(sectionArray) {
  const comments = [];
  (sectionArray || []).forEach(entry => {
    (entry.subcategories || []).forEach(sub => {
      if (sub.comment && sub.comment.trim()) {
        comments.push(`${sub.name}: ${sub.comment.trim()}`);
      }
    });
  });
  return comments;
}

const MONEY_COLUMNS = new Set([
  'Expenditure Allocated', 'Expenditure Budget', 'Revenue Allocated', 'Revenue Budget'
]);

function isCategoryColumn(col) {
  return col.startsWith('Exp: ') || col.startsWith('Rev: ');
}

async function loadSubmissions() {
  fetchError.textContent = '';
  tableWrap.innerHTML = '';
  emptyState.style.display = 'none';
  submissionCount.textContent = 'Loading…';
  downloadCsvBtn.disabled = true;

  try {
    const q = query(collection(db, 'budgetSubmissions'), orderBy('submittedAt', 'desc'));
    const snap = await getDocs(q);
    const docs = snap.docs.map(d => d.data());

    if (docs.length === 0) {
      submissionCount.textContent = '0 submissions';
      emptyState.style.display = 'block';
      currentRows = [];
      currentColumns = [];
      return;
    }

    // Build the category column set dynamically from whatever's actually in
    // the data, so this keeps working if the resident-facing categories change.
    const expenditureCategoryNames = [];
    const revenueCategoryNames = [];
    docs.forEach(doc => {
      (doc.expenditures || []).forEach(entry => {
        if (!expenditureCategoryNames.includes(entry.category)) expenditureCategoryNames.push(entry.category);
      });
      (doc.revenue || []).forEach(entry => {
        if (!revenueCategoryNames.includes(entry.category)) revenueCategoryNames.push(entry.category);
      });
    });

    currentColumns = [
      'Submitted At', 'Status', 'Expenditure Allocated', 'Expenditure Budget', 'Revenue Allocated', 'Revenue Budget',
      ...expenditureCategoryNames.map(name => `Exp: ${name}`),
      ...revenueCategoryNames.map(name => `Rev: ${name}`),
      'Comments'
    ];

    currentRows = docs.map(doc => {
      const expTotals = collectCategoryTotals(doc.expenditures);
      const revTotals = collectCategoryTotals(doc.revenue);
      const comments = [...collectComments(doc.expenditures), ...collectComments(doc.revenue)];

      const row = {
        'Submitted At': formatTimestamp(doc.submittedAt),
        'Status': doc.status || '',
        'Expenditure Allocated': doc.totalAllocated,
        'Expenditure Budget': doc.totalBudget,
        'Revenue Allocated': doc.revenueTotalAllocated,
        'Revenue Budget': doc.revenueTotalBudget
      };
      expenditureCategoryNames.forEach(name => {
        row[`Exp: ${name}`] = expTotals[name];
      });
      revenueCategoryNames.forEach(name => {
        row[`Rev: ${name}`] = revTotals[name];
      });
      row['Comments'] = comments.join('; ');
      return row;
    });

    renderTable(currentColumns, currentRows);
    submissionCount.textContent = `${docs.length} submission${docs.length === 1 ? '' : 's'}`;
    downloadCsvBtn.disabled = false;
  } catch (err) {
    console.error('Failed to load submissions:', err);
    fetchError.textContent = 'Could not load submissions. Check your connection and Firestore permissions, then try Refresh.';
    submissionCount.textContent = '';
  }
}

function renderTable(columns, rows) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');
  columns.forEach(col => {
    const th = document.createElement('th');
    th.textContent = col;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  rows.forEach(row => {
    const tr = document.createElement('tr');
    columns.forEach(col => {
      const td = document.createElement('td');
      const value = row[col];
      if (col === 'Comments') {
        td.className = 'comments-cell';
        td.textContent = value || '';
      } else if (MONEY_COLUMNS.has(col) || isCategoryColumn(col)) {
        td.textContent = value === undefined || value === null ? '' : formatMoney(value);
      } else {
        td.textContent = value === undefined || value === null ? '' : String(value);
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  tableWrap.innerHTML = '';
  tableWrap.appendChild(table);
}

function csvEscape(value) {
  const str = value === undefined || value === null ? '' : String(value);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function buildCsv(columns, rows) {
  const lines = [columns.map(csvEscape).join(',')];
  rows.forEach(row => {
    lines.push(columns.map(col => csvEscape(row[col])).join(','));
  });
  return lines.join('\r\n');
}

downloadCsvBtn.addEventListener('click', () => {
  if (currentRows.length === 0) return;
  const csv = buildCsv(currentColumns, currentRows);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
  const a = document.createElement('a');
  a.href = url;
  a.download = `budget-submissions-${stamp}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});
