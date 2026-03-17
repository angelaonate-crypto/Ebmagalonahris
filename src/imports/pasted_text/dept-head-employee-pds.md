Update the **Department Head Employee module** so that employee profiles and evaluation follow the **official Personal Data Sheet (CS Form 212 Revised 2025)** structure that was provided.

Do not change the HRIS design system, colors, typography, sidebar layout, or header components. Maintain the same UI style used in the HR Officer and Employee interfaces.

---

SIDEBAR NAVIGATION UPDATE

Under **Employees**, create a dropdown menu.

Employees ▼

Dropdown items:

• Employee List
• Performance Evaluation

---

EMPLOYEE LIST PAGE

Keep the existing **Employee Directory layout**.

Use a two-column layout.

LEFT COLUMN
Employee List

Display:

Employee Name
Employee ID
Position
Department
Employment Status

Include a search bar.

RIGHT COLUMN
Employee Profile

Display the employee record using the **Personal Data Sheet (PDS) sections**.

---

PDS SECTION I — PERSONAL INFORMATION

Display the following fields based on the PDS:

Surname
First Name
Middle Name
Name Extension (Jr., Sr.)

Date of Birth
Place of Birth
Sex at Birth
Civil Status
Citizenship

Physical details:

Height
Weight
Blood Type

Government IDs:

UMID ID No.
PAG-IBIG ID No.
PhilHealth No.
PhilSys No.
TIN No.
Agency Employee No.

Addresses:

Residential Address
Permanent Address

Contact Information:

Telephone No.
Mobile No.
Email Address

---

PDS SECTION II — FAMILY BACKGROUND

Fields include:

Spouse Name
Spouse Occupation
Employer / Business Name
Business Address
Telephone Number

Parents:

Father’s Name
Mother’s Maiden Name

Children Table:

Child Name
Date of Birth

---

PDS SECTION III — EDUCATIONAL BACKGROUND

Display a table with:

Level (Elementary / Secondary / Vocational / College / Graduate Studies)

Columns:

Name of School
Degree / Course
Period of Attendance (From – To)
Highest Level / Units Earned
Year Graduated
Scholarships / Academic Honors

---

PDS SECTION IV — CIVIL SERVICE ELIGIBILITY

Display a table with:

Eligibility Type
Rating
Date of Examination
Place of Examination
License Number
Validity Date

---

PDS SECTION V — WORK EXPERIENCE

Display work history.

Columns:

Inclusive Dates (From – To)
Position Title
Department / Agency / Office / Company
Status of Appointment
Government Service (Yes / No)

Include expandable details from the **Work Experience Sheet**:

Accomplishments
Summary of Duties

List work experience **from most recent to oldest**.

---

PDS SECTION VI — VOLUNTARY WORK

Table columns:

Organization Name
Inclusive Dates (From – To)
Number of Hours
Position / Nature of Work

---

PDS SECTION VII — LEARNING AND DEVELOPMENT

Table columns:

Training Title
Inclusive Dates (From – To)
Number of Hours
Type of Training (Managerial / Supervisory / Technical)
Conducted / Sponsored By

---

PDS SECTION VIII — OTHER INFORMATION

Fields include:

Special Skills and Hobbies
Non-Academic Distinctions / Recognition
Membership in Associations / Organizations

---

PDS SECTION IX — REFERENCES

Table fields:

Reference Name
Office / Address
Contact Number / Email

---

EVALUATE EMPLOYEE BUTTON

Inside the **Employee List**, add an action button:

Evaluate Employee

This button opens the **Performance Evaluation page** for that employee.

---

PERFORMANCE EVALUATION PAGE

Create an evaluation interface based on the **SPMS Rating Scale**.

Ratings:

5 — Outstanding
4 — Very Satisfactory
3 — Satisfactory
2 — Unsatisfactory
1 — Poor

Display the rating description beside each score.

---

EVALUATION FORM

Fields include:

Employee Name
Position
Department
Evaluation Period

Rating Selection

Supervisor Comments
Strengths
Areas for Improvement

Buttons:

Submit Evaluation
Save Draft

---

GOAL

Ensure the Department Head interface uses the **official Personal Data Sheet structure** for employee records and integrates **SPMS performance evaluation** into the HRIS system.
