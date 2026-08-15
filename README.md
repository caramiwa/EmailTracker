# Notice of Award Access Audit

**Status:** Planned / Not Yet Implemented

## Purpose

This repository is a parking place for a possible lightweight audit system for electronic procurement correspondence, particularly Notices of Award (NOAs).

The goal is **not** to build an email read tracker. The goal is to establish an auditable record that an individualized link to a specific correspondence was accessed.

## Proposed workflow

1. The BAC Secretariat prepares the correspondence/Notice of Award.
2. A unique correspondence ID and access token are generated.
3. The recipient receives an email containing an individualized **View Notice of Award** link.
4. The link points to a Google Apps Script Web App.
5. When the link is accessed, the Web App records an `ACCESS_EVENT` with a timestamp.
6. The recipient is then shown or redirected to the Notice of Award.

## Proposed audit trail

A correspondence record may eventually contain:

- Correspondence ID / NOA number
- Recipient email address
- Subject
- Date/time sent
- Access token
- Notice/document location
- Access event(s)
- First access timestamp
- Optional response/acknowledgment information

## Evidence wording

The system should **not** claim:

> "The recipient read the email."

or

> "The recipient read the Notice of Award."

The defensible event is narrower:

> **"The individualized link to the correspondence was accessed at [date/time]."**

## Why use a unique link?

A tracking pixel can be requested by email security systems, image proxies, or mail clients without the recipient deliberately opening the message. A deliberate link click is therefore a more meaningful access signal for this particular use case.

A link-based system also avoids requiring the BAC Secretariat to manually approve Google Drive access requests for every recipient.

## Current scope

This repository is intentionally **not production code**. The initial `Code.gs` is pseudo-code only. Implementation should begin only after the AppSheet tutorial/project currently in progress is completed or deliberately paused.

## Future considerations

Before implementation, verify:

- Google Apps Script Web App behavior and deployment permissions
- How the Notice itself will be hosted
- Whether the recipient must authenticate
- How unique tokens will be generated and protected
- What information can safely be logged
- Data retention and privacy requirements
- Whether the resulting audit trail is appropriate for the intended procurement use
