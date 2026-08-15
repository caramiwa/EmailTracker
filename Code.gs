/**
 * NOTICE OF AWARD ACCESS AUDIT
 *
 * STATUS: PLANNED / PSEUDO-CODE ONLY
 *
 * Purpose:
 * Record when a recipient accesses an individualized link
 * associated with a specific Notice of Award or other official
 * correspondence.
 *
 * This is NOT an email read tracker.
 *
 * The system should record an ACCESS_EVENT, not claim that
 * the recipient read the email or read the entire document.
 */

function sendCorrespondence() {
  // 1. Receive correspondence details:
  //    - correspondence / NOA number
  //    - recipient email address
  //    - subject
  //    - notice/document location

  // 2. Generate a unique correspondence ID.

  // 3. Generate a unique access token.

  // 4. Save the correspondence record to the audit log:
  //    - correspondence ID
  //    - recipient
  //    - date/time sent
  //    - access token
  //    - document location
  //    - access status = NOT_ACCESSED

  // 5. Construct an individualized access URL containing
  //    the access token.

  // 6. Send the email containing a link such as:
  //    "View Notice of Award"
  //
  //    The link points to the GAS Web App, not directly to
  //    the underlying document.
}


function doGet(e) {
  // 1. Receive the access token from the request URL.

  // 2. Validate the token.
  //    If invalid or unknown, do not expose the document.

  // 3. Locate the corresponding correspondence record.

  // 4. Record an ACCESS_EVENT:
  //    - correspondence ID
  //    - timestamp
  //    - access token / event identifier
  //    - optional technical metadata, if appropriate

  // 5. Update the correspondence record:
  //    - access status = ACCESSED
  //    - first access timestamp = current timestamp
  //
  //    Do not overwrite the first access timestamp if the
  //    correspondence has already been accessed.

  // 6. Display the Notice of Award or redirect the recipient
  //    to its intended document location.
}


function recordAccessEvent(token) {
  // Locate the correspondence associated with the token.
  //
  // Append an immutable access event to the audit log.
  //
  // IMPORTANT:
  // The event means only:
  // "The individualized link to the correspondence was accessed
  //  at [timestamp]."
  //
  // It must NOT be labelled:
  // "READ"
  // "EMAIL OPENED"
  // or "RECIPIENT READ DOCUMENT"
}


function generateAccessToken() {
  // FUTURE IMPLEMENTATION:
  // Generate a sufficiently unique, non-guessable token.
  //
  // Do not implement until token security requirements are defined.
}


function logCorrespondence() {
  // FUTURE IMPLEMENTATION:
  // Write correspondence metadata to the audit sheet/database.
}


function acknowledgeReceipt() {
  // OPTIONAL FUTURE FEATURE:
  // Provide a deliberate acknowledgment action after the
  // correspondence has been accessed.
  //
  // This would be a separate event from ACCESS_EVENT and should
  // be recorded as ACKNOWLEDGED only when the recipient actively
  // selects the acknowledgment action.
}
