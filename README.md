# DealDesk AI

DealDesk AI is a sellable prototype for a commercial real estate assistant focused on:

- Triple-net leases
- Cap rates
- Development
- Tenant negotiations
- Due diligence
- Site selection
- Financing
- LOIs

Open `index.html` in a browser to use the demo.

## Business Model

The product is packaged for three self-serve subscription tiers and one enterprise path:

- Solo Broker: `$49/month`
- Pro Advisor: `$99/month`
- Brokerage Team: `$199/month`
- Enterprise: custom license with private knowledge base, SSO, compliance controls, templates, and CRM integration

## Current Prototype

This version runs entirely in the browser:

- Local CRE answer engine
- Prompt chips for common deal questions
- Pricing cards for individual, team, and enterprise plans
- Lead capture saved to browser local storage
- Commercial real estate visual asset in `assets/dealdesk-visual.png`

## Production Path

To turn this into a live AI product:

1. Add a backend endpoint for chat requests.
2. Connect that endpoint to an AI model.
3. Add retrieval over private documents: leases, LOIs, diligence checklists, tenant criteria, financing memos, and brokerage templates.
4. Store accounts, plans, and usage in a database.
5. Add Stripe subscriptions for `$49`, `$99`, and `$199` plans.
6. Add enterprise controls: SSO, team permissions, audit logs, admin-managed knowledge base, and custom disclaimers.

## Recommended Knowledge Base Structure

Use these folders when adding real training materials:

```text
knowledge/
  leases/
  cap-rates/
  development/
  tenant-negotiations/
  due-diligence/
  site-selection/
  financing/
  lois/
```

Keep source documents labeled by asset type, market, tenant category, and effective date so answers can cite the right material later.
