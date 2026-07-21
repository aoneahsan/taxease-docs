---
id: browser-extension
title: Browser Extension
description: The TaxEase browser extension captures receipts from online purchases for expense and tax tracking.
sidebar_label: Browser Extension
sidebar_position: 4
keywords: [browser extension, receipt capture, expense tracking, chrome, firefox]
---

# Browser Extension

**The TaxEase browser extension helps you capture receipts from online purchases** so your expenses are ready when it is time to handle taxes. It is built with the WXT framework and React, and ships for Chromium browsers and Firefox.

## What it does

- Capture receipt and order details from online purchases as you shop. It recognises order-confirmation pages on Amazon, eBay, Walmart, Target and Best Buy, with a generic fallback elsewhere.
- Keep a running record of expenses, categorised, and export it as CSV or JSON.
- Track U.S. federal tax deadlines, with a reminder a week before each one.

## Installing

The extension is distributed as a standard browser add-on. When the store listings are live they will be linked here and from the marketing site. The extension follows browser-store privacy rules: it bundles all of its code (no remote code execution) and requests only the permissions it needs.

## Privacy

**Captured receipts and expenses stay on your device.** They are held in the browser's own extension storage and are never uploaded to TaxEase or any other server — which also means they do not sync to your TaxEase account or to another browser. Export to CSV or JSON if you want them elsewhere.

The extension only captures a page when you ask it to, and only the order/receipt details relevant to expense tracking. It runs no remote scripts. Signing in with Google is optional and only identifies you; it does not move your data anywhere. Review the in-app and store-listing privacy disclosures for the exact data handled.

## Related

- [Accounts & Sync](/getting-started/accounts) — how TaxEase accounts work.
- [Tools Overview](/tools/overview) — the tax tools your captured expenses feed into.
