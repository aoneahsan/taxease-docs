---
id: documents
title: Documents
description: Upload, store, and manage documents in TaxEase, backed by FilesHub storage.
sidebar_label: Documents
sidebar_position: 2
keywords: [document upload, fileshub, document management, attachments]
---

# Documents

**TaxEase stores the files attached to your requests and account using FilesHub**, a hosted file-storage service. Uploads are validated before they are stored, and your documents stay associated with the request or record they belong to.

## Uploading

When a form or request needs a file, use its upload field. Drag-and-drop is supported on the web. Every upload is checked against one policy before it is stored:

- **Maximum size:** 10 MB per file.
- **Accepted types:** PDF, Word (`.doc`, `.docx`), Excel (`.xls`, `.xlsx`), images (JPEG, PNG, GIF, WebP), and ZIP/RAR archives.

A file outside those limits is rejected with a message naming the reason, and nothing is stored.

## Where files live

Documents are stored through the FilesHub object store rather than inside the app database. Each file is referenced by the request, message, or profile it belongs to, so related files stay grouped with their context.

## Managing documents

- View the documents attached to any request from that request's detail view.
- Replace or remove a document where the workflow allows it.
- When you delete your account, associated files are removed as part of the deletion flow.

## Honest framing

TaxEase uses public-read object storage for uploaded files so they can be fetched reliably across the app. Avoid uploading highly sensitive material you would not want stored this way; for confidential legal documents, share them directly with your provider through an appropriately secure channel.
