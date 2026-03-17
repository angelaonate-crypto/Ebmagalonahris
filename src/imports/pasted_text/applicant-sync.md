Update the Applicant Management page to ensure that all applicant data remains synchronized across the interface.

This page already merges the following modules:

Application List
Application Evaluation
Applicant Ranking
Hiring Decision

Do not change the visual design, colors, spacing, typography, or layout style.

---

Applicant Synchronization

Ensure that all applicant information is synchronized across the following sections:

Top Ranked Applicants
Applicant List
Evaluation Panel
Hiring Decision Status

The following fields must always stay consistent:

Applicant Number (#)
Applicant Name
Evaluation Scores
Total Score
Ranking Position
Application Status
Hiring Decision Status

If any of these values change, the updates must automatically reflect across all sections.

---

Applicant Numbering

Each applicant should have a **unique applicant number** such as:

#1 Applicant
#2 Applicant
#3 Applicant

The numbering should correspond to the **applicant ranking based on total evaluation score**.

Example:

Highest total score = #1
Second highest score = #2
Third highest score = #3

The numbering should update automatically if ranking changes.

---

Status Synchronization

Ensure that the applicant status shown in the Applicant List matches the evaluation and hiring decision.

Possible statuses include:

Pending Evaluation
Under Review
Qualified
Not Qualified
Selected
Rejected

The status badge displayed in the Applicant List must match the evaluation and hiring decision panel.

---

Top Ranked Applicants Sync

The **Top Ranked Applicants (Top 1–5)** section must automatically display the highest ranked applicants based on total evaluation score.

If a new applicant receives a higher score, the Top Ranked section should update accordingly.

---

Evaluation Panel Sync

When an applicant is selected from the Applicant List:

Display the correct evaluation scores:

Education
Eligibility
Training
Experience
Total Score

The evaluation data must match the applicant's stored data and ranking.

---

Hiring Decision Sync

When the HR Officer selects:

Approve for Hiring
Reject Applicant

The applicant status should automatically update in:

Applicant List
Top Ranked Section (if applicable)
Evaluation Panel

Status examples:

Selected
Rejected

---

Goal

Ensure the Applicant Management page functions as a **synchronized recruitment management interface** where applicant numbers, rankings, evaluation scores, and hiring decisions are consistent across the entire page.
