const domains = [
  {
    title: "Triple-net leases",
    detail: "Rent structure, CAM reconciliation, landlord obligations, taxes, insurance, repairs, assignment, estoppel, SNDA, and term risk.",
  },
  {
    title: "Cap rates",
    detail: "Credit quality, remaining term, rent bumps, market rent, replacement cost, financing spreads, location strength, and exit assumptions.",
  },
  {
    title: "Development",
    detail: "Entitlements, utility capacity, access, offsites, budgets, delivery conditions, tenant criteria, phasing, and schedule exposure.",
  },
  {
    title: "Tenant negotiations",
    detail: "Concessions, rent escalations, delivery dates, exclusives, co-tenancy, guarantees, assignment rights, and default remedies.",
  },
  {
    title: "Due diligence",
    detail: "Lease audit, title, survey, environmental, zoning, permits, financials, tenant interviews, service contracts, and closing conditions.",
  },
  {
    title: "Site selection",
    detail: "Traffic, ingress and egress, visibility, trade area, demographics, competition, parcel geometry, parking, and zoning fit.",
  },
  {
    title: "Financing",
    detail: "Debt yield, DSCR, LTC, LTV, amortization, recourse, reserves, covenants, interest rate sensitivity, and lender narratives.",
  },
  {
    title: "LOIs",
    detail: "Economics, deposits, diligence periods, closing timing, contingencies, confidentiality, exclusivity, tenant improvements, and approval paths.",
  },
];

const playbooks = [
  {
    keys: ["triple", "nnn", "net lease", "cam", "estoppel", "snda", "lease"],
    title: "Triple-Net Lease Review",
    answer: [
      "Start with rent durability: base rent schedule, escalations, option periods, percentage rent, and whether expenses are truly pass-through.",
      "Confirm responsibility lines for roof, structure, parking lot, HVAC, taxes, insurance, utilities, and capital replacements.",
      "Request estoppel, SNDA, insurance certificates, CAM history, default notices, amendment history, and any side letters.",
      "Watch for assignment flexibility, go-dark rights, co-tenancy triggers, casualty/condemnation termination rights, and landlord consent standards.",
    ],
    next: "Next move: build a one-page lease abstract and flag every item that can change NOI, control, or exit value.",
  },
  {
    keys: ["cap", "yield", "noi", "return", "valuation"],
    title: "Cap Rate Read",
    answer: [
      "Cap rate is a pricing shorthand, not a full risk answer. Compare the spread to debt costs, Treasury movement, tenant credit, and local replacement cost.",
      "Lower cap rates usually require stronger credit, longer remaining term, clean escalations, durable trade area, and low near-term capital exposure.",
      "Higher cap rates may be justified by short term, flat rent, weak guaranty, dark-store risk, below-average location, or re-tenanting uncertainty.",
      "Normalize NOI before comparing deals: remove one-time income, check recoveries, verify expense caps, and model market rent at rollover.",
    ],
    next: "Next move: create a sensitivity table with exit cap, renewal probability, market rent, and interest rate scenarios.",
  },
  {
    keys: ["development", "entitlement", "permit", "ground-up", "construction", "utility"],
    title: "Development Risk Map",
    answer: [
      "Separate controllable risk from jurisdictional risk: plans, budget, GC pricing, tenant criteria, permits, utilities, traffic studies, and offsite work.",
      "Tie every deadline to responsibility: landlord delivery, tenant plan approval, permit submission, rent commencement, and outside dates.",
      "Underwrite contingency by stage. Raw land, entitlement, civil work, vertical construction, and tenant turnover deserve different contingency levels.",
      "Protect the schedule with clear cure periods, force majeure language, approval milestones, and evidence requirements.",
    ],
    next: "Next move: turn the timeline into a milestone chart with budget exposure beside each milestone.",
  },
  {
    keys: ["tenant", "negotiation", "negotiate", "concession", "exclusive", "cotenant", "co-tenancy"],
    title: "Tenant Negotiation Strategy",
    answer: [
      "Trade economics for certainty. If a tenant wants free rent, TI, exclusives, or termination rights, ask for longer term, stronger guaranty, better bumps, or tighter default remedies.",
      "Clarify operating constraints early: use restrictions, hours, signage, parking, delivery access, trash, patio rights, and prohibited competitors.",
      "For credit tenants, focus on assignment, corporate form, notice addresses, cure rights, and whether the guarantor remains liable after transfer.",
      "Document every business point in the LOI so counsel is not negotiating economics from scratch later.",
    ],
    next: "Next move: write a give/get table before responding to the next tenant markup.",
  },
  {
    keys: ["due diligence", "diligence", "dd", "contingency", "waiving", "closing"],
    title: "Due Diligence Checklist",
    answer: [
      "Lease file: executed lease, amendments, estoppels, SNDAs, rent roll, arrears, deposits, options, and expense recovery history.",
      "Property file: title, survey, zoning, permits, environmental, roof/HVAC reports, utilities, ADA, service contracts, and open violations.",
      "Market file: competing supply, tenant sales signals where available, traffic counts, demographic fit, comparable rents, and replacement tenant depth.",
      "Closing file: lender conditions, insurance, prorations, transfer taxes, assignment consents, entity approvals, and post-closing obligations.",
    ],
    next: "Next move: rank diligence issues by whether they affect value, insurability, financeability, or legal control.",
  },
  {
    keys: ["site", "selection", "traffic", "demographic", "trade area", "parking", "ingress", "egress"],
    title: "Site Selection Screen",
    answer: [
      "Begin with the tenant's operating model: drive-thru, pickup, parking ratio, visibility, signage, delivery pattern, and peak-hour traffic.",
      "Score the site on access, exposure, parcel geometry, competition, co-tenancy, demographics, daytime population, and path-of-travel convenience.",
      "Verify zoning, curb cuts, reciprocal easements, parking rights, utility capacity, stormwater, and any restrictions before relying on a site plan.",
      "A good site is not just busy. It must convert traffic into convenient, legally permitted customer visits.",
    ],
    next: "Next move: compare three sites in one scorecard with weighted criteria tied to tenant revenue drivers.",
  },
  {
    keys: ["financing", "loan", "debt", "dscr", "ltv", "ltc", "debt yield", "lender"],
    title: "Financing Framing",
    answer: [
      "Lenders will focus on DSCR, debt yield, LTV/LTC, sponsor liquidity, tenant credit, remaining lease term, and rollover exposure.",
      "For single-tenant NNN, loan term often wants to fit comfortably inside remaining lease term or include strong renewal evidence.",
      "Stress test interest rate movement, vacancy at rollover, TI/leasing costs, reserves, and exit cap expansion.",
      "Tell the lender story in plain terms: why NOI is durable, why the site is re-leasable, and why the sponsor can carry disruption.",
    ],
    next: "Next move: prepare a lender memo with sources/uses, NOI bridge, tenant credit summary, and downside case.",
  },
  {
    keys: ["loi", "letter of intent", "offer", "term sheet"],
    title: "LOI Structure",
    answer: [
      "Anchor the LOI with parties, property, purchase price or rent, deposit, inspection period, closing date, and approval conditions.",
      "For leases, include premises, term, options, rent bumps, TI, delivery condition, maintenance, use, exclusives, assignment, signage, and guaranty.",
      "For acquisitions, include financing contingency, title/survey review, environmental review, lease review, prorations, representations, and confidentiality.",
      "State what is binding: confidentiality, exclusivity, broker language, governing law, and cost reimbursement if applicable.",
    ],
    next: "Next move: keep the LOI concise, but do not leave major economics for the lease or PSA draft.",
  },
];

const messages = document.querySelector("#messages");
const composer = document.querySelector("#composer");
const question = document.querySelector("#question");
const resetChat = document.querySelector("#resetChat");
const toast = document.querySelector("#toast");
const domainGrid = document.querySelector("#domainGrid");
const leadForm = document.querySelector("#leadForm");

function renderDomains() {
  domainGrid.innerHTML = domains
    .map(
      (domain, index) => `
        <article class="domain-card">
          <b>${String(index + 1).padStart(2, "0")}</b>
          <h3>${domain.title}</h3>
          <p>${domain.detail}</p>
        </article>
      `
    )
    .join("");
}

function addMessage(role, html) {
  const message = document.createElement("article");
  message.className = `message ${role}`;
  message.innerHTML = html;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

function answerQuestion(text) {
  const clean = text.trim().toLowerCase();
  const scored = playbooks
    .map((playbook) => ({
      playbook,
      score: playbook.keys.reduce((total, key) => total + (clean.includes(key) ? 1 : 0), 0),
    }))
    .sort((a, b) => b.score - a.score);

  const best = scored[0].score > 0 ? scored[0].playbook : {
    title: "Deal Triage",
    answer: [
      "Frame the question around value, control, timing, and exit risk. Most CRE issues become clearer when those four buckets are separated.",
      "Identify which documents govern the answer: lease, LOI, PSA, title, survey, zoning letter, loan term sheet, or tenant criteria.",
      "Then test the issue against NOI impact, financeability, legal responsibility, and marketability to the next buyer or lender.",
      "When in doubt, turn the issue into a checklist item with owner, deadline, source document, and decision needed.",
    ],
    next: "Next move: ask a narrower follow-up with the deal type, tenant, term, market, and document stage.",
  };

  const bullets = best.answer.map((item) => `<li>${item}</li>`).join("");
  return `<strong>${best.title}</strong><ul>${bullets}</ul><p>${best.next}</p>`;
}

function submitQuestion(text) {
  if (!text.trim()) return;
  addMessage("user", text.trim());
  window.setTimeout(() => {
    addMessage("assistant", answerQuestion(text));
  }, 240);
  question.value = "";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function seedChat() {
  messages.innerHTML = "";
  addMessage(
    "assistant",
    "<strong>Ready for deal work.</strong><ul><li>Ask me to review lease risk, pressure-test a cap rate, outline diligence, prep tenant negotiation points, or draft an LOI checklist.</li><li>This demo uses a local CRE knowledge base. A production version can connect to OpenAI plus your private templates, leases, and deal files.</li></ul>"
  );
}

document.querySelectorAll("[data-prompt]").forEach((button) => {
  button.addEventListener("click", () => submitQuestion(button.dataset.prompt));
});

document.querySelectorAll("[data-plan]").forEach((button) => {
  button.addEventListener("click", () => {
    const select = leadForm.querySelector("[name='plan']");
    select.value = button.dataset.plan;
    leadForm.scrollIntoView({ behavior: "smooth", block: "center" });
    showToast(`${button.dataset.plan} selected`);
  });
});

composer.addEventListener("submit", (event) => {
  event.preventDefault();
  submitQuestion(question.value);
});

resetChat.addEventListener("click", seedChat);

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(leadForm));
  const leads = JSON.parse(localStorage.getItem("dealdesk-leads") || "[]");
  leads.push({ ...data, createdAt: new Date().toISOString() });
  localStorage.setItem("dealdesk-leads", JSON.stringify(leads));
  leadForm.reset();
  showToast("Access request saved locally");
});

renderDomains();
seedChat();
