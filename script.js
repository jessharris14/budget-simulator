// All amounts below are FY2025 General Fund ACTUALS (the F65's "General
// Fund" column) — not the "General Fund Final Amended Budget" column used
// in earlier versions of this app.
const CATEGORIES = [
  {
    id: 'general-government',
    name: 'General Government',
    desc: 'County board, administration, clerk, treasurer, assessing, elections, buildings and grounds.',
    subcategories: [
      { name: 'Legislative (Council, Board, Commission)', amount: 1331752,
        desc: "Funds the Kent County Board of Commissioners, including commissioner compensation, meetings, and legislative support staff." },
      { name: 'Chief Executive', amount: 4118016,
        desc: "Funds the County Administrator/Controller's office, which runs day-to-day county operations under the Board's direction." },
      { name: 'Treasurer', amount: 1382872,
        desc: "Funds the County Treasurer's office, which collects property taxes and manages county investments and cash." },
      { name: 'Clerk', amount: 3304951,
        desc: "Funds the County Clerk's office, which maintains vital records, court records, and the county archive." },
      { name: 'Assessing Equalization', amount: 1686589,
        desc: "Funds property assessment and equalization work that sets taxable property values across the county." },
      { name: 'Finance and Tax Administration', amount: 2543053,
        desc: "Funds general financial management and tax administration functions.",
        ambiguous: true },
      { name: 'Elections', amount: 1227320,
        desc: "Funds the administration of county and local elections, including staffing, equipment, and ballot processing." },
      { name: 'Building and Grounds', amount: 15220708,
        desc: "Funds maintenance, utilities, and upkeep of county-owned buildings and grounds." },
      { name: 'Attorney/Corporation Counsel', amount: 342762,
        desc: "Funds legal counsel services provided to Kent County." },
      { name: 'All Other General Government', amount: 13167739,
        desc: "A catch-all line covering general administrative functions not itemized elsewhere in the form, such as HR, IT, or purchasing.",
        ambiguous: true }
    ]
  },
  {
    id: 'judicial',
    name: 'Judicial',
    desc: 'Circuit, district, and probate courts, court libraries, probation, and the prosecuting attorney.',
    subcategories: [
      { name: 'Circuit Court', amount: 16369357,
        desc: "Funds the 17th Circuit Court, which hears felony criminal cases, civil cases, and family law matters." },
      { name: 'District/Municipal Court', amount: 3621784,
        desc: "Funds the 63rd District Court, which handles misdemeanors, traffic violations, and smaller civil claims." },
      { name: 'Law Library', amount: 15824,
        desc: "Funds the county law library, which provides legal research materials for courts, attorneys, and the public." },
      { name: 'Probate Court', amount: 2717176,
        desc: "Funds the Probate Court, which handles wills, estates, guardianships, and mental health commitments." },
      { name: 'Probation', amount: 18295,
        desc: "Funds probation services that supervise people sentenced to community supervision instead of jail." },
      { name: 'Prosecuting Attorney', amount: 6047358,
        desc: "Funds the Prosecutor's Office which prosecutes criminal cases on behalf of the county." }
    ]
  },
  {
    id: 'public-safety',
    name: 'Public Safety',
    desc: 'Sheriff, corrections and jail, 911 dispatch, and other public safety operations.',
    subcategories: [
      { name: 'Police/Sheriff/Constable', amount: 31535288,
        desc: "Funds the Kent County Sheriff's Office, including patrol, investigations, and general law enforcement." },
      { name: 'Fire', amount: 0,
        desc: "The form lists a Fire line item, but Kent County's General Fund actuals show $0 here — fire protection appears to be funded through other county funds.",
        ambiguous: true },
      { name: 'Combined Public Safety Department', amount: 0,
        desc: "A line item for a merged police/fire department model; Kent County reports $0 here, suggesting it doesn't use this structure.",
        ambiguous: true },
      { name: 'Emergency 911 Dispatch Activities', amount: 6850913,
        desc: "Funds county emergency dispatch, which routes 911 calls to police, fire, and EMS providers." },
      { name: 'Corrections/Jail', amount: 50193370,
        desc: "Funds operation of the Kent County Correctional Facility, including staffing and inmate services." },
      { name: 'All Other Public Safety Activities', amount: 2767159,
        desc: "A catch-all line covering public safety functions not itemized elsewhere, such as animal control or emergency management.",
        ambiguous: true }
    ]
  },
  {
    id: 'public-works',
    name: 'Public Works',
    desc: 'County road, sanitation, and other public works activities funded through the General Fund.',
    subcategories: [
      { name: 'All Other Public Works', amount: 1351084,
        desc: "The only Public Works line funded through the General Fund; roads, sanitation, and airports are funded through other county funds and aren't broken out here.",
        ambiguous: true }
    ]
  },
  {
    id: 'health-welfare',
    name: 'Health and Welfare',
    desc: 'Substance abuse services, the medical examiner, mental health, and other health and welfare programs.',
    subcategories: [
      { name: 'Alcoholism and Substance Abuse', amount: 2635169,
        desc: "Funds county substance abuse prevention, treatment, and recovery programs." },
      { name: 'Medical Examiner', amount: 1710274,
        desc: "Funds the County Medical Examiner's Office, which investigates deaths requiring an official cause determination." },
      { name: 'Mental Health', amount: 2025942,
        desc: "Funds county-level mental health services and programs." },
      { name: 'Human Services & Medical Care Facility', amount: 457276,
        desc: "Funds county human services programs and any county-operated medical care facility." },
      { name: 'Area Agency on Aging', amount: 15560,
        desc: "Funds services supporting older adults through the Area Agency on Aging of West Michigan, such as meal programs and senior services coordination." },
      { name: 'All Other Health & Welfare', amount: 1393836,
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
      { name: 'Register of Deeds', amount: 620184,
        desc: "Funds the Register of Deeds office, which records and maintains property deeds and land records." },
      { name: 'All Other Community Development', amount: 512521,
        desc: "A catch-all line covering community development functions not itemized elsewhere in the form.",
        ambiguous: true }
    ]
  },
  {
    id: 'recreation-culture',
    name: 'Recreation and Culture',
    desc: 'County parks and recreation programming.',
    subcategories: [
      { name: 'Parks and Recreation', amount: 7641332,
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
      { name: 'Transfers (Out)', amount: 53324149,
        desc: "Funds transfers from the General Fund to other county funds, such as special revenue or capital project funds, to support their operations.",
        locked: true,
        lockNote: "These transfers are legally committed to other county funds and can't be adjusted by residents." }
    ]
  },
  {
    id: 'addition-to-reserves',
    name: 'Addition to Reserves',
    desc: 'The surplus Kent County added to its fund balance (savings) rather than spending, per the FY2025 General Fund actuals.',
    subcategories: [
      { name: 'Addition to Reserves', amount: 2980522,
        desc: "Reflects the county's actual increase to its General Fund balance for FY2025 — money set aside in reserves rather than spent on services.",
        locked: true,
        lockNote: "This is money the county actually set aside in reserves, not resident-facing spending, and it can't be adjusted by residents." }
    ]
  }
];

const REVENUE_CATEGORIES = [
  {
    id: 'tax-revenue',
    name: 'Tax Revenue',
    desc: 'Property taxes and other tax collections that fund the General Fund.',
    subcategories: [
      { name: 'Payment in-Lieu-of Taxes (PILOT)', amount: 305052,
        desc: "Payments made by tax-exempt property owners, such as certain nonprofits or housing authorities, in place of regular property taxes." },
      { name: 'Trailer Taxes (Act 243 of 1959)', amount: 59530,
        desc: "A state-authorized specific tax collected on mobile homes instead of standard property tax." },
      { name: 'Industrial Facilities Tax (Act 198 of 1974)', amount: 748607,
        desc: "A reduced-rate property tax paid by industrial facilities granted state tax abatements to encourage investment." },
      { name: 'Property Tax', amount: 140642108,
        desc: "The county's general property tax levy, including delinquent payments, penalties, interest, and community-wide special assessments." }
    ]
  },
  {
    id: 'special-assessments',
    name: 'Special Assessments',
    desc: 'Assessments charged to specific properties for improvements that benefit them, such as roads or utilities.',
    subcategories: [
      { name: 'Special Assessments (General Fund)', amount: 0,
        desc: "Kent County collects special assessments, but records that revenue entirely in other county funds — the General Fund actuals show $0 here for FY2025.",
        ambiguous: true }
    ]
  },
  {
    id: 'licenses-permits',
    name: 'Licenses and Permits',
    desc: 'Fees collected for business and non-business licenses and permits.',
    subcategories: [
      { name: 'Business Licenses and Permits', amount: 7020,
        desc: "Fees collected for business-related licenses and permits issued by the county." },
      { name: 'Non-Business Licenses and Permits', amount: 211997,
        desc: "Fees collected for other licenses and permits issued to residents, such as certain personal or property-related permits." }
    ]
  },
  {
    id: 'federal-grants',
    name: 'Federal Grants',
    desc: 'Federal grant funding received by the county.',
    subcategories: [
      { name: 'Federal Grants', amount: 67068,
        desc: "Federal grant revenue Kent County actually received in the General Fund for FY2025, supporting public safety programs.",
        locked: true,
        lockNote: "Federal grant terms are set by the awarding federal agency and can't be adjusted locally." }
    ]
  },
  {
    id: 'state-grants',
    name: 'State Grants',
    desc: 'State revenue sharing and other state grant funding.',
    subcategories: [
      { name: 'State Grants', amount: 31247097,
        desc: "Combines state revenue sharing, public safety grants, and other state aid actually received in the General Fund for FY2025.",
        locked: true,
        lockNote: "State revenue sharing and grant amounts are set by the State of Michigan and can't be adjusted locally." }
    ]
  },
  {
    id: 'contributions-local-units',
    name: 'Contributions from Local Units',
    desc: 'Payments from cities, townships, and other local governments toward shared county services.',
    subcategories: [
      { name: 'Public Safety', amount: 1951916,
        desc: "Contributions from local units of government toward shared public safety services." },
      { name: 'Culture and Recreation', amount: 12261,
        desc: "Contributions from local units of government toward shared culture and recreation programs." }
    ]
  },
  {
    id: 'charges-for-services',
    name: 'Charges for Services',
    desc: 'Fees the county charges for services it provides to residents and businesses.',
    subcategories: [
      { name: 'All Other Services Rendered Charges', amount: 16296107,
        desc: "Fees charged for county services, such as recording documents, inspections, or administrative processing.",
        ambiguous: true },
      { name: 'All Other Sales, Use, & Admission Fees', amount: 4416005,
        desc: "Fees from admissions, sales, and use charges for county facilities and programs, such as parks or recreation sites.",
        ambiguous: true },
      { name: 'All Other Fees', amount: 10454527,
        desc: "A catch-all line covering other service fees not itemized elsewhere in the form.",
        ambiguous: true }
    ]
  },
  {
    id: 'fines-forfeits',
    name: 'Fines and Forfeits',
    desc: 'Revenue from court fines and forfeited bonds or property.',
    subcategories: [
      { name: 'All Fines, Penalties & Forfeits', amount: 1381434,
        desc: "Revenue from court fines, civil infraction penalties, and forfeited bonds or property." }
    ]
  },
  {
    id: 'interest-rents',
    name: 'Interest and Rents',
    desc: 'Investment income and rental income from county-owned property.',
    subcategories: [
      { name: 'Interest and Rents', amount: 7456818,
        desc: "Combines investment income and rental income the county actually earned in the General Fund for FY2025.",
        locked: true,
        lockNote: "Investment returns and lease terms are set by market conditions and existing agreements, and can't be adjusted locally." }
    ]
  },
  {
    id: 'other-revenue',
    name: 'Other Revenue',
    desc: 'Reimbursements, asset sales, contributions, and other miscellaneous revenue.',
    subcategories: [
      { name: 'Other Revenue', amount: 6917240,
        desc: "Combines reimbursements, capital asset sales, donations, and other miscellaneous revenue actually received in the General Fund for FY2025.",
        locked: true,
        lockNote: "This combines revenue tied to prior agreements or one-time transactions and isn't adjustable locally." }
    ]
  },
  {
    id: 'other-financing-sources',
    name: 'Other Financing Sources',
    desc: 'Transfers into the General Fund from other county funds.',
    subcategories: [
      { name: 'Transfers In', amount: 18965193,
        desc: "Funds transferred into the General Fund from other county funds to support General Fund operations." }
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

// Builds a stacked composition bar + legend into the given elements and
// returns an update() function. Used for both the expenditure chart (money
// going out) and the revenue chart (money coming in) — each shows only its
// adjustable categories; locked/fixed lines still count toward the overall
// Surplus/Balanced/Deficit total but aren't part of either breakdown.
function createCompositionChart(chartCategories, colors, barEl, legendEl, stateObj) {
  const segmentEls = {};
  const segmentLabelEls = {};
  const legendPercentEls = {};

  chartCategories.forEach(category => {
    const segment = document.createElement('div');
    segment.className = 'composition-segment';
    segment.style.background = colors[category.id];
    segment.innerHTML = '<span class="segment-label"></span>';
    barEl.appendChild(segment);
    segmentEls[category.id] = segment;
    segmentLabelEls[category.id] = segment.querySelector('.segment-label');

    const legendRow = document.createElement('div');
    legendRow.className = 'legend-row';
    legendRow.innerHTML = `
      <span class="legend-swatch" style="background:${colors[category.id]}"></span>
      <span class="legend-name">${category.name}</span>
      <span class="legend-percent"></span>
    `;
    legendEl.appendChild(legendRow);
    legendPercentEls[category.id] = legendRow.querySelector('.legend-percent');
  });

  return function update() {
    const totals = chartCategories.map(category => ({
      category,
      total: category.subcategories.reduce((sum, sub) => sum + stateObj[sub.key], 0)
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
  };
}

// Expenditure chart: the 8 main spending categories. Transfers to Other
// Funds and Addition to Reserves are locked, non-spending lines, so they're
// excluded from this breakdown.
const CHART_CATEGORIES = CATEGORIES.filter(c => c.id !== 'other-financing-uses' && c.id !== 'addition-to-reserves');

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

const updateComposition = createCompositionChart(
  CHART_CATEGORIES,
  CHART_COLORS,
  document.getElementById('compositionBar'),
  document.getElementById('compositionLegend'),
  state
);

// Revenue chart: only the adjustable revenue categories. Federal Grants,
// State Grants, Interest and Rents, and Other Revenue are locked, so they're
// excluded from this breakdown (they still count toward the total below).
const REVENUE_CHART_CATEGORIES = REVENUE_CATEGORIES.filter(
  c => !['federal-grants', 'state-grants', 'interest-rents', 'other-revenue'].includes(c.id)
);

const REVENUE_CHART_COLORS = {
  'tax-revenue': '#2a78d6',
  'special-assessments': '#008300',
  'licenses-permits': '#e87ba4',
  'contributions-local-units': '#eda100',
  'charges-for-services': '#1baf7a',
  'fines-forfeits': '#eb6834',
  'other-financing-sources': '#4a3aa7'
};

const updateRevenueComposition = createCompositionChart(
  REVENUE_CHART_CATEGORIES,
  REVENUE_CHART_COLORS,
  document.getElementById('revenueCompositionBar'),
  document.getElementById('revenueCompositionLegend'),
  revenueState
);

const budgetStatusEl = document.getElementById('budgetStatus');
const statusDot = document.getElementById('statusDot');
const statusLabel = document.getElementById('statusLabel');
const statusDetail = document.getElementById('statusDetail');

function getBudgetStatusLabel(diff) {
  if (Math.abs(diff) < 1) return 'Balanced';
  return diff < 0 ? 'Surplus' : 'Deficit';
}

// Status compares the resident's adjusted revenue total to their adjusted
// expenditure total (not either side to its own fixed starting budget), so
// offsetting changes on both sides — e.g. +$1M revenue and +$1M spending —
// leave the status unchanged.
function updateBudgetStatus() {
  const expenditureAllocated = Object.values(state).reduce((sum, v) => sum + v, 0);
  const revenueAllocated = Object.values(revenueState).reduce((sum, v) => sum + v, 0);
  const diff = expenditureAllocated - revenueAllocated;
  const label = getBudgetStatusLabel(diff);
  budgetStatusEl.classList.remove('status-surplus', 'status-balanced', 'status-deficit');
  budgetStatusEl.classList.add(`status-${label.toLowerCase()}`);
  statusLabel.textContent = label;

  if (label === 'Balanced') {
    statusDetail.textContent = 'Your planned revenue matches your planned expenditures exactly.';
  } else if (label === 'Surplus') {
    statusDetail.textContent = `${formatCurrency(Math.abs(diff))} more revenue than planned expenditures.`;
  } else {
    statusDetail.textContent = `${formatCurrency(diff)} more planned expenditures than revenue.`;
  }
}

function updateTotal() {
  const allocated = Object.values(state).reduce((sum, v) => sum + v, 0);
  allocatedValueEl.textContent = formatCurrency(allocated);
  updateComposition();
  updateBudgetStatus();
}

const revenueBudgetValueEl = document.getElementById('revenueBudgetValue');
const revenueAllocatedValueEl = document.getElementById('revenueAllocatedValue');
revenueBudgetValueEl.textContent = formatCurrency(TOTAL_REVENUE_BUDGET);

function updateRevenueTotal() {
  const allocated = Object.values(revenueState).reduce((sum, v) => sum + v, 0);
  revenueAllocatedValueEl.textContent = formatCurrency(allocated);
  updateRevenueComposition();
  updateBudgetStatus();
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

submitBtn.addEventListener('click', async () => {
  const allocated = Object.values(state).reduce((sum, v) => sum + v, 0);
  const revenueAllocated = Object.values(revenueState).reduce((sum, v) => sum + v, 0);
  const difference = allocated - revenueAllocated;
  const status = getBudgetStatusLabel(difference);

  const submission = {
    expenditures: buildAllocationLog(CATEGORIES, state, comments),
    revenue: buildAllocationLog(REVENUE_CATEGORIES, revenueState, revenueComments),
    totalAllocated: allocated,
    totalBudget: TOTAL_BUDGET,
    difference,
    status,
    revenueTotalAllocated: revenueAllocated,
    revenueTotalBudget: TOTAL_REVENUE_BUDGET
  };

  console.log('Kent County Budget Priority Simulator — Final Allocation', submission);

  submitBtn.disabled = true;
  submitNote.classList.remove('submit-error');
  submitNote.textContent = 'Submitting…';

  // Firebase is loaded on demand, right when it's needed, rather than as a
  // page-load dependency — a slow or blocked CDN request only affects the
  // Submit action, not the sliders and the rest of the simulator.
  try {
    const [{ db }, { collection, addDoc, serverTimestamp }] = await Promise.all([
      import('./firebase-config.js'),
      import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js')
    ]);
    await addDoc(collection(db, 'budgetSubmissions'), {
      ...submission,
      submittedAt: serverTimestamp()
    });
    submitNote.textContent = 'Thank you — your budget priorities have been recorded.';
  } catch (err) {
    console.error('Failed to save budget submission:', err);
    submitNote.classList.add('submit-error');
    submitNote.textContent = "Something went wrong saving your submission. Please try again.";
  } finally {
    submitBtn.disabled = false;
  }
});
