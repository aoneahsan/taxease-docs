---
id: accounts
title: Accounts & Sync
description: How TaxEase accounts, Google sign-in, and cross-device sync work, and what you can do without an account.
sidebar_label: Accounts
sidebar_position: 3
keywords: [taxease account, google sign in, sync, firebase auth]
---

# Accounts & Sync

**You do not need an account to use the calculators or document generators** — those work for everyone, signed in or not. An account adds saving, history, cross-device sync, and access to the service-request workflow.

## Signing in

TaxEase uses Firebase Authentication, and **Google sign-in is the only option** — there is no email-and-password login. On the web you sign in through a secure Google popup; in the Android app the same sign-in happens through the device's native Google flow, landing you as the same TaxEase user either way.

## What an account unlocks

| Feature | Without account | With account |
|---|---|---|
| Calculators | ✅ Full access | ✅ Full access |
| Document generators | ✅ Full access | ✅ Full access |
| Save results & history | ❌ | ✅ |
| Export to Google Drive | ❌ | ✅ |
| Service requests | ❌ | ✅ |
| Cross-device sync | ❌ | ✅ |
| Notifications | ❌ | ✅ |

## Roles

TaxEase supports different roles for the professional-services workflow — for example a **customer** who submits requests, and **staff/admin** roles who manage and fulfil them. The dashboard and available pages adapt to your role.

## Privacy

Calculator inputs are processed in your browser. When you are signed in and choose to save a result or submit a request, that data is stored in your TaxEase account (Firebase). Uploaded documents are stored via FilesHub. See the in-app Privacy Policy for the full details on what is collected and how to delete your data.

Next: explore the [features](/features/service-requests) or the [tools](/tools/overview).
