const CATEGORIES = [
  {
    id: 'general-government',
    name: 'General Government',
    desc: 'County board, administration, clerk, treasurer, assessing, elections, buildings and grounds.',
    subcategories: [
      { name: 'Legislative (Council, Board, Commission)', amount: 1415542,
        desc: "Funds the Kent County Board of Commissioners, including commissioner compensation, meetings, and legislative support staff." },
      { name: 'Chief Executive', amount: 4351846,
        desc: "Funds the County Administrator/Controller's office, which runs day-to-day county operations under the Board's direction." },
      { name: 'Treasurer', amount: 1503388,
        desc: "Funds the County Treasurer's office, which collects property taxes and manages county investments and cash." },
      { name: 'Clerk', amount: 3381946,
        desc: "Funds the County Clerk's office, which maintains vital records, court records, and the county archive." },
      { name: 'Assessing Equalization', amount: 1869048,
        desc: "Funds property assessment and equalization work that sets taxable property values across the county." },
      { name: 'Finance and Tax Administration', amount: 2691879,
        desc: "Funds general financial management and tax administration functions.",
        ambiguous: true },
      { name: 'Elections', amount: 1239620,
        desc: "Funds the administration of county and local elections, including staffing, equipment, and ballot processing." },
      { name: 'Building and Grounds', amount: 15483031,
        desc: "Funds maintenance, utilities, and upkeep of county-owned buildings and grounds." },
      { name: 'Attorney/Corporation Counsel', amount: 390000,
        desc: "Funds legal counsel services provided to Kent County." },
      { name: 'All Other General Government', amount: 14241046,
        desc: "A catch-all line covering general administrative functions not itemized elsewhere in the form, such as HR, IT, or purchasing.",
        ambiguous: true }
    ]
  },
  {
    id: 'judicial',
    name: 'Judicial',
    desc: 'Circuit, district, and probate courts, court libraries, probation, and the prosecuting attorney.',
    subcategories: [
      { name: 'Circuit Court', amount: 17669316,
        desc: "Funds the 17th Circuit Court, which hears felony criminal cases, civil cases, and family law matters." },
      { name: 'District/Municipal Court', amount: 3773439,
        desc: "Funds the 63rd District Court, which handles misdemeanors, traffic violations, and smaller civil claims." },
      { name: 'Law Library', amount: 22000,
        desc: "Funds the county law library, which provides legal research materials for courts, attorneys, and the public." },
      { name: 'Probate Court', amount: 2802393,
        desc: "Funds the Probate Court, which handles wills, estates, guardianships, and mental health commitments." },
      { name: 'Probation', amount: 35334,
        desc: "Funds probation services that supervise people sentenced to community supervision instead of jail." },
      { name: 'Prosecuting Attorney', amount: 6267402,
        desc: "Funds the Prosecutor's Office which prosecutes criminal cases on behalf of the county." }
    ]
  },
  {
    id: 'public-safety',
    name: 'Public Safety',
    desc: 'Sheriff, corrections and jail, 911 dispatch, and other public safety operations.',
    subcategories: [
      { name: 'Police/Sheriff/Constable', amount: 31676271,
        desc: "Funds the Kent County Sheriff's Office, including patrol, investigations, and general law enforcement." },
      { name: 'Fire', amount: 0,
        desc: "The form lists a Fire line item, but Kent County budgets $0 to it from the General Fund — fire protection appears to be funded through other county funds.",
        ambiguous: true },
      { name: 'Combined Public Safety Department', amount: 0,
        desc: "A line item for a merged police/fire department model; Kent County reports $0 here, suggesting it doesn't use this structure.",
        ambiguous: true },
      { name: 'Emergency 911 Dispatch Activities', amount: 6858891,
        desc: "Funds county emergency dispatch, which routes 911 calls to police, fire, and EMS providers." },
      { name: 'Corrections/Jail', amount: 52110177,
        desc: "Funds operation of the Kent County Correctional Facility, including staffing and inmate services." },
      { name: 'All Other Public Safety Activities', amount: 3014660,
        desc: "A catch-all line covering public safety functions not itemized elsewhere, such as animal control or emergency management.",
        ambiguous: true }
    ]
  },
  {
    id: 'public-works',
    name: 'Public Works',
    desc: 'County road, sanitation, and other public works activities funded through the General Fund.',
    subcategories: [
      { name: 'All Other Public Works', amount: 1366787,
        desc: "The only Public Works line funded through the General Fund; roads, sanitation, and airports are funded through other county funds and aren't broken out here.",
        ambiguous: true }
    ]
  },
  {
    id: 'health-welfare',
    name: 'Health and Welfare',
    desc: 'Substance abuse services, the medical examiner, mental health, and other health and welfare programs.',
    subcategories: [
      { name: 'Alcoholism and Substance Abuse', amount: 2900000,
        desc: "Funds county substance abuse prevention, treatment, and recovery programs." },
      { name: 'Medical Examiner', amount: 2042188,
        desc: "Funds the County Medical Examiner's Office, which investigates deaths requiring an official cause determination." },
      { name: 'Mental Health', amount: 2025942,
        desc: "Funds county-level mental health services and programs." },
      { name: 'Human Services & Medical Care Facility', amount: 492068,
        desc: "Funds county human services programs and any county-operated medical care facility." },
      { name: 'Area Agency on Aging', amount: 16110,
        desc: "Funds services supporting older adults through the Area Agency on Aging of West Michigan, such as meal programs and senior services coordination." },
      { name: 'All Other Health & Welfare', amount: 1465000,
        desc: "A catch-all line covering health and welfare functions not itemized elsewhere in the form.",
        ambiguous: true }
    ]
  },
  {
    id: 'community-economic-development',
    name: 'Community and Economic Development',
    desc: 'Economic development, register of deeds, and community development programs.',
    subcategories: [
      { name: 'Economic Development', amount: 300000,
        desc: "Funds county programs that support business growth, job creation, and economic development initiatives." },
      { name: 'Register of Deeds', amount: 715016,
        desc: "Funds the Register of Deeds office, which records and maintains property deeds and land records." },
      { name: 'All Other Community Development', amount: 531535,
        desc: "A catch-all line covering community development functions not itemized elsewhere in the form.",
        ambiguous: true }
    ]
  },
  {
    id: 'recreation-culture',
    name: 'Recreation and Culture',
    desc: 'County parks and recreation programming.',
    subcategories: [
      { name: 'Parks and Recreation', amount: 7649357,
        desc: "Funds county parks, trails, and recreational facilities and programming." },
      { name: 'All Other Recreation and Culture', amount: 82266,
        desc: "A catch-all line covering recreation and culture functions not itemized elsewhere in the form.",
        ambiguous: true }
    ]
  },
  {
    id: 'other',
    name: 'Other (Capital Outlay & Debt Service)',
    desc: 'Capital projects and debt service payments funded through the General Fund.',
    subcategories: [
      { name: 'Debt Service', amount: 1627579,
        desc: "Funds principal and interest payments on county debt supported by the General Fund.",
        ambiguous: true,
        locked: true,
        lockNote: "This is legally committed debt repayment — Kent County is contractually obligated to pay it and it can't be adjusted by residents." }
    ]
  },
  {
    id: 'other-financing-uses',
    name: 'Transfers to Other Funds',
    desc: 'Transfers from the General Fund to other county funds and component units.',
    subcategories: [
      { name: 'Transfers (Out)', amount: 55199433,
        desc: "Funds transfers from the General Fund to other county funds, such as special revenue or capital project funds, to support their operations.",
        locked: true,
        lockNote: "These transfers are legally committed to other county funds and can't be adjusted by residents." }
    ]
  }
];

const REVENUE_CATEGORIES = [
  {
    id: 'tax-revenue',
    name: 'Tax Revenue',
    desc: 'Property taxes and other tax collections that fund the General Fund.',
    subcategories: [
      { name: 'Payment in-Lieu-of Taxes (PILOT)', amount: 272000,
        desc: "Payments made by tax-exempt property owners, such as certain nonprofits or housing authorities, in place of regular property taxes." },
      { name: 'Trailer Taxes (Act 243 of 1959)', amount: 55000,
        desc: "A state-authorized specific tax collected on mobile homes instead of standard property tax." },
      { name: 'Industrial Facilities Tax (Act 198 of 1974)', amount: 775000,
        desc: "A reduced-rate property tax paid by industrial facilities granted state tax abatements to encourage investment." },
      { name: 'Property Tax', amount: 137890810,
        desc: "The county's general property tax levy, including delinquent payments, penalties, interest, and community-wide special assessments." }
    ]
  },
  {
    id: 'licenses-permits',
    name: 'Licenses and Permits',
    desc: 'Fees collected for business and non-business licenses and permits.',
    subcategories: [
      { name: 'Business Licenses and Permits', amount: 3900,
        desc: "Fees collected for business-related licenses and permits issued by the county." },
      { name: 'Non-Business Licenses and Permits', amount: 304000,
        desc: "Fees collected for other licenses and permits issued to residents, such as certain personal or property-related permits." }
    ]
  },
  {
    id: 'fines-forfeits',
    name: 'Fines and Forfeits',
    desc: 'Revenue from court fines and forfeited bonds or property.',
    subcategories: [
      { name: 'All Fines, Penalties & Forfeits', amount: 1349010,
        desc: "Revenue from court fines, civil infraction penalties, and forfeited bonds or property." }
    ]
  },
  {
    id: 'federal-grants',
    name: 'Federal Grants',
    desc: 'Federal grant funding received by the county.',
    subcategories: [
      { name: 'Federal Grant Revenue (General Fund)', amount: 0,
        desc: "Kent County receives federal grants for public safety, health, welfare, and other programs, but records that funding in other county funds — the General Fund budgets $0 here for FY2025.",
        ambiguous: true }
    ]
  },
  {
    id: 'state-grants',
    name: 'State Grants',
    desc: 'State revenue sharing and other state grant funding.',
    subcategories: [
      { name: 'State Revenue Sharing', amount: 15299452,
        desc: "Funding the state distributes to counties from state sales and other tax revenue, for general county use." },
      { name: 'Public Safety', amount: 2704000,
        desc: "State grant funding supporting county public safety programs." },
      { name: 'Other General/All Other State Aid Grants', amount: 11091000,
        desc: "A catch-all line covering other state grant funding not itemized elsewhere in the form.",
        ambiguous: true }
    ]
  },
  {
    id: 'charges-for-services',
    name: 'Charges for Services',
    desc: 'Fees the county charges for services it provides to residents and businesses.',
    subcategories: [
      { name: 'All Other Services Rendered Charges', amount: 16610673,
        desc: "Fees charged for county services, such as recording documents, inspections, or administrative processing.",
        ambiguous: true },
      { name: 'All Other Sales, Use, & Admission Fees', amount: 4024410,
        desc: "Fees from admissions, sales, and use charges for county facilities and programs, such as parks or recreation sites.",
        ambiguous: true },
      { name: 'All Other Fees', amount: 9670000,
        desc: "A catch-all line covering other service fees not itemized elsewhere in the form.",
        ambiguous: true }
    ]
  },
  {
    id: 'interest-rents',
    name: 'Interest and Rents',
    desc: 'Investment income and rental income from county-owned property.',
    subcategories: [
      { name: 'Interest & Dividends', amount: 5000000,
        desc: "Investment income earned on the county's cash and investment balances." },
      { name: 'Rents & Royalties', amount: 3081200,
        desc: "Income from leasing or renting county-owned property and facilities." }
    ]
  },
  {
    id: 'other-revenue',
    name: 'Other Revenue',
    desc: 'Reimbursements, asset sales, contributions, and other miscellaneous revenue.',
    subcategories: [
      { name: 'Reimbursements', amount: 3154714,
        desc: "Payments received from other governments, agencies, or parties reimbursing the county for shared costs or services." },
      { name: 'Sale of Capital Assets', amount: 170000,
        desc: "Proceeds from selling county-owned equipment, vehicles, land, or other capital assets." },
      { name: 'Public and Private Contributions', amount: 3034090,
        desc: "Donations and contributions from individuals, organizations, or businesses to support county programs." },
      { name: 'Refunds & Rebates', amount: 50,
        desc: "Refunds and rebates received back from vendors, insurers, or other payments the county previously made." },
      { name: 'Miscellaneous/Other Revenue', amount: 85720,
        desc: "A catch-all line covering revenue not itemized elsewhere in the form.",
        ambiguous: true }
    ]
  }
];

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

[CATEGORIES, REVENUE_CATEGORIES].forEach(list => {
  list.forEach(category => {
    category.subcategories.forEach(sub => {
      sub.id = slugify(sub.name);
      sub.key = `${category.id}__${sub.id}`;
    });
  });
});

const TOTAL_BUDGET = CATEGORIES.reduce(
  (sum, c) => sum + c.subcategories.reduce((s, sub) => s + sub.amount, 0),
  0
);

const TOTAL_REVENUE_BUDGET = REVENUE_CATEGORIES.reduce(
  (sum, c) => sum + c.subcategories.reduce((s, sub) => s + sub.amount, 0),
  0
);

function niceStep(amount) {
  if (amount >= 10000000) return 500000;
  if (amount >= 1000000) return 50000;
  if (amount >= 100000) return 5000;
  return 1000;
}

function niceMax(amount, step) {
  if (amount === 0) return 250000;
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
const comments = {};
const revenueState = {};
const revenueComments = {};

function renderSection(categoryList, gridEl, stateObj, commentsObj, onChange) {
  categoryList.forEach(category => {
    category.subcategories.forEach(sub => {
      stateObj[sub.key] = sub.amount;
      commentsObj[sub.key] = '';
    });

    const card = document.createElement('div');
    card.className = 'category-card';

    function sumCategory(cat) {
      return cat.subcategories.reduce((sum, sub) => sum + stateObj[sub.key], 0);
    }

    const singleLineNote = category.subcategories.length === 1
      ? `<p class="single-line-note">This category isn't broken down further within the General Fund budget — the full amount is reported under "${category.subcategories[0].name}."</p>`
      : '';

    const subRowsHtml = category.subcategories.map(sub => {
      const reviewBadge = sub.ambiguous ? '<span class="review-badge">Review wording</span>' : '';
      const commentBlock = `
        <label class="comment-label" for="comment-${sub.key}">Your reasoning (optional)</label>
        <input type="text" id="comment-${sub.key}" class="subcategory-comment" placeholder="e.g., increased for new parks millage">
      `;

      if (sub.locked) {
        return `
          <div class="subcategory-row locked-row" data-key="${sub.key}">
            <div class="subcategory-top">
              <span class="subcategory-name-wrap">
                <span class="subcategory-name">${sub.name}</span>
                <span class="info-wrap">
                  <button type="button" class="info-btn" aria-label="What does ${sub.name} cover?" aria-describedby="floatingTooltip">i</button>
                </span>
                <span class="locked-badge">Locked</span>
                ${reviewBadge}
              </span>
              <div class="subcategory-controls">
                <span class="locked-amount">${formatCurrency(sub.amount)}</span>
              </div>
            </div>
            <p class="lock-note">${sub.lockNote}</p>
            ${commentBlock}
          </div>
        `;
      }

      const step = niceStep(sub.amount);
      const max = niceMax(sub.amount, step);
      return `
        <div class="subcategory-row" data-key="${sub.key}">
          <div class="subcategory-top">
            <span class="subcategory-name-wrap">
              <span class="subcategory-name">${sub.name}</span>
              <span class="info-wrap">
                <button type="button" class="info-btn" aria-label="What does ${sub.name} cover?" aria-describedby="floatingTooltip">i</button>
              </span>
              ${reviewBadge}
            </span>
            <div class="subcategory-controls">
              <input type="number" class="subcategory-number" min="0" step="1" value="${sub.amount}" aria-label="${sub.name} amount">
              <button type="button" class="reset-btn">Reset</button>
            </div>
          </div>
          <input
            type="range"
            class="subcategory-slider"
            min="0"
            max="${max}"
            step="${step}"
            value="${sub.amount}"
          >
          <div class="range-labels">
            <span>$0</span>
            <span class="max-label">${formatCurrency(max)}</span>
          </div>
          ${commentBlock}
        </div>
      `;
    }).join('');

    card.innerHTML = `
      <button type="button" class="category-toggle" aria-expanded="false">
        <span class="category-name">${category.name}</span>
        <span class="category-amount" id="amount-${category.id}">${formatCurrency(sumCategory(category))}</span>
        <span class="chevron">&#9662;</span>
      </button>
      <p class="category-desc">${category.desc}</p>
      <div class="subcategory-list">
        <div class="subcategory-list-inner">
          ${subRowsHtml}
          ${singleLineNote}
        </div>
      </div>
    `;
    gridEl.appendChild(card);

    const categoryAmountEl = card.querySelector(`#amount-${category.id}`);
    const toggleBtn = card.querySelector('.category-toggle');
    const subList = card.querySelector('.subcategory-list');
    const subListInner = card.querySelector('.subcategory-list-inner');

    toggleBtn.addEventListener('click', () => {
      const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', String(!expanded));
      card.classList.toggle('expanded', !expanded);
      subList.style.maxHeight = expanded ? '0px' : `${subListInner.scrollHeight}px`;
      hideFloatingTooltip();
    });

    category.subcategories.forEach(sub => {
      const row = card.querySelector(`.subcategory-row[data-key="${sub.key}"]`);
      const infoBtn = row.querySelector('.info-btn');
      infoBtn.dataset.desc = sub.desc;

      infoBtn.addEventListener('mouseenter', () => showFloatingTooltip(infoBtn));
      infoBtn.addEventListener('focus', () => showFloatingTooltip(infoBtn));
      infoBtn.addEventListener('mouseleave', restoreOrHideTooltip);
      infoBtn.addEventListener('blur', restoreOrHideTooltip);
      infoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (pinnedTooltipBtn === infoBtn) {
          pinnedTooltipBtn = null;
          hideFloatingTooltip();
        } else {
          pinnedTooltipBtn = infoBtn;
          showFloatingTooltip(infoBtn);
        }
      });

      const commentInput = row.querySelector('.subcategory-comment');
      commentInput.addEventListener('input', () => {
        commentsObj[sub.key] = commentInput.value;
      });

      if (sub.locked) return;

      const slider = row.querySelector('.subcategory-slider');
      const number = row.querySelector('.subcategory-number');
      const maxLabel = row.querySelector('.max-label');
      const resetBtn = row.querySelector('.reset-btn');

      function applyValue(rawValue) {
        let value = Math.max(0, Math.round(Number(rawValue) || 0));
        if (value > Number(slider.max)) {
          slider.max = value;
          maxLabel.textContent = formatCurrency(value);
        }
        stateObj[sub.key] = value;
        slider.value = value;
        number.value = value;
        categoryAmountEl.textContent = formatCurrency(sumCategory(category));
        if (subList.style.maxHeight && subList.style.maxHeight !== '0px') {
          subList.style.maxHeight = `${subListInner.scrollHeight}px`;
        }
        onChange();
      }

      slider.addEventListener('input', () => applyValue(slider.value));

      number.addEventListener('input', () => {
        if (number.value === '') return;
        applyValue(number.value);
      });

      number.addEventListener('blur', () => {
        if (number.value === '' || isNaN(Number(number.value))) {
          applyValue(sub.amount);
        }
      });

      resetBtn.addEventListener('click', () => applyValue(sub.amount));
    });
  });
}

// Shared tooltip, portaled to <body> so it can escape the accordion's
// overflow: hidden (required for the collapse animation) and render above
// neighboring cards instead of being clipped by them.
const floatingTooltip = document.createElement('div');
floatingTooltip.className = 'floating-tooltip';
floatingTooltip.id = 'floatingTooltip';
floatingTooltip.setAttribute('role', 'tooltip');
document.body.appendChild(floatingTooltip);

let pinnedTooltipBtn = null;

function positionFloatingTooltip(btn) {
  const margin = 8;
  const rect = btn.getBoundingClientRect();
  const tw = floatingTooltip.offsetWidth;
  const th = floatingTooltip.offsetHeight;

  let left = rect.left;
  if (left + tw > window.innerWidth - margin) {
    left = window.innerWidth - tw - margin;
  }
  left = Math.max(margin, left);

  let top = rect.bottom + 6;
  if (top + th > window.innerHeight - margin) {
    top = rect.top - th - 6;
  }
  top = Math.max(margin, top);

  floatingTooltip.style.left = `${left}px`;
  floatingTooltip.style.top = `${top}px`;
}

function showFloatingTooltip(btn) {
  floatingTooltip.textContent = btn.dataset.desc;
  floatingTooltip.style.display = 'block';
  positionFloatingTooltip(btn);
}

function hideFloatingTooltip() {
  floatingTooltip.style.display = 'none';
}

function restoreOrHideTooltip() {
  if (pinnedTooltipBtn) {
    showFloatingTooltip(pinnedTooltipBtn);
  } else {
    hideFloatingTooltip();
  }
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.info-wrap')) {
    pinnedTooltipBtn = null;
    hideFloatingTooltip();
  }
});

window.addEventListener('scroll', () => {
  pinnedTooltipBtn = null;
  hideFloatingTooltip();
}, { passive: true, capture: true });

window.addEventListener('resize', () => {
  pinnedTooltipBtn = null;
  hideFloatingTooltip();
});

const allocatedValueEl = document.getElementById('allocatedValue');
const budgetValueEl = document.getElementById('budgetValue');

budgetValueEl.textContent = formatCurrency(TOTAL_BUDGET);

// The composition chart shows the resident's mix across the 8 main spending
// categories only — inter-fund transfers aren't a resident spending priority,
// so they're excluded from this breakdown (they still count toward the
// overall Surplus/Balanced/Deficit total below).
const CHART_CATEGORIES = CATEGORIES.filter(c => c.id !== 'other-financing-uses');

const CHART_COLORS = {
  'general-government': '#2660b8',
  'judicial': '#eb6834',
  'public-safety': '#1baf7a',
  'public-works': '#4a3aa7',
  'health-welfare': '#eda100',
  'community-economic-development': '#307fe2',
  'recreation-culture': '#e87ba4',
  'other': '#a8623a'
};

const compositionBar = document.getElementById('compositionBar');
const compositionLegend = document.getElementById('compositionLegend');
const segmentEls = {};
const segmentLabelEls = {};
const legendPercentEls = {};

CHART_CATEGORIES.forEach(category => {
  const segment = document.createElement('div');
  segment.className = 'composition-segment';
  segment.style.background = CHART_COLORS[category.id];
  segment.innerHTML = '<span class="segment-label"></span>';
  compositionBar.appendChild(segment);
  segmentEls[category.id] = segment;
  segmentLabelEls[category.id] = segment.querySelector('.segment-label');

  const legendRow = document.createElement('div');
  legendRow.className = 'legend-row';
  legendRow.innerHTML = `
    <span class="legend-swatch" style="background:${CHART_COLORS[category.id]}"></span>
    <span class="legend-name">${category.name}</span>
    <span class="legend-percent"></span>
  `;
  compositionLegend.appendChild(legendRow);
  legendPercentEls[category.id] = legendRow.querySelector('.legend-percent');
});

function updateComposition() {
  const totals = CHART_CATEGORIES.map(category => ({
    category,
    total: category.subcategories.reduce((sum, sub) => sum + state[sub.key], 0)
  }));
  const chartSum = totals.reduce((sum, t) => sum + t.total, 0);

  totals.forEach(({ category, total }) => {
    const pct = chartSum > 0 ? (total / chartSum) * 100 : 0;
    const segment = segmentEls[category.id];
    segment.style.width = `${pct}%`;
    segment.title = `${category.name}: ${formatCurrency(total)} (${pct.toFixed(1)}%)`;
    segmentLabelEls[category.id].textContent = pct >= 6 ? `${category.name} ${pct.toFixed(0)}%` : '';
    legendPercentEls[category.id].textContent = `${pct.toFixed(1)}%`;
  });
}

const budgetStatusEl = document.getElementById('budgetStatus');
const statusDot = document.getElementById('statusDot');
const statusLabel = document.getElementById('statusLabel');
const statusDetail = document.getElementById('statusDetail');

function updateBudgetStatus(allocated) {
  const diff = allocated - TOTAL_BUDGET;
  budgetStatusEl.classList.remove('status-surplus', 'status-balanced', 'status-deficit');

  if (Math.abs(diff) < 1) {
    budgetStatusEl.classList.add('status-balanced');
    statusLabel.textContent = 'Balanced';
    statusDetail.textContent = 'Your allocation matches the starting county budget exactly.';
  } else if (diff < 0) {
    budgetStatusEl.classList.add('status-surplus');
    statusLabel.textContent = 'Surplus';
    statusDetail.textContent = `${formatCurrency(Math.abs(diff))} under the starting county budget.`;
  } else {
    budgetStatusEl.classList.add('status-deficit');
    statusLabel.textContent = 'Deficit';
    statusDetail.textContent = `${formatCurrency(diff)} over the starting county budget.`;
  }
}

function updateTotal() {
  const allocated = Object.values(state).reduce((sum, v) => sum + v, 0);
  allocatedValueEl.textContent = formatCurrency(allocated);
  updateComposition();
  updateBudgetStatus(allocated);
}

const revenueBudgetValueEl = document.getElementById('revenueBudgetValue');
const revenueAllocatedValueEl = document.getElementById('revenueAllocatedValue');
revenueBudgetValueEl.textContent = formatCurrency(TOTAL_REVENUE_BUDGET);

function updateRevenueTotal() {
  const allocated = Object.values(revenueState).reduce((sum, v) => sum + v, 0);
  revenueAllocatedValueEl.textContent = formatCurrency(allocated);
}

const categoryGrid = document.getElementById('categoryGrid');
const revenueGrid = document.getElementById('revenueGrid');

renderSection(CATEGORIES, categoryGrid, state, comments, updateTotal);
renderSection(REVENUE_CATEGORIES, revenueGrid, revenueState, revenueComments, updateRevenueTotal);

updateTotal();
updateRevenueTotal();

const submitBtn = document.getElementById('submitBtn');
const submitNote = document.getElementById('submitNote');

function buildAllocationLog(categoryList, stateObj, commentsObj) {
  return categoryList.map(category => ({
    category: category.name,
    total: category.subcategories.reduce((sum, sub) => sum + stateObj[sub.key], 0),
    subcategories: category.subcategories.map(sub => ({
      name: sub.name,
      amount: stateObj[sub.key],
      locked: Boolean(sub.locked),
      comment: commentsObj[sub.key] || ''
    }))
  }));
}

submitBtn.addEventListener('click', () => {
  const allocated = Object.values(state).reduce((sum, v) => sum + v, 0);
  const revenueAllocated = Object.values(revenueState).reduce((sum, v) => sum + v, 0);
  const result = {
    expenditures: {
      allocations: buildAllocationLog(CATEGORIES, state, comments),
      totalAllocated: allocated,
      totalBudget: TOTAL_BUDGET,
      difference: allocated - TOTAL_BUDGET
    },
    revenue: {
      allocations: buildAllocationLog(REVENUE_CATEGORIES, revenueState, revenueComments),
      totalAllocated: revenueAllocated,
      totalBudget: TOTAL_REVENUE_BUDGET,
      difference: revenueAllocated - TOTAL_REVENUE_BUDGET
    }
  };
  console.log('Kent County Budget Priority Simulator — Final Allocation', result);
  submitNote.textContent = 'Your allocation has been logged to the browser console.';
});
