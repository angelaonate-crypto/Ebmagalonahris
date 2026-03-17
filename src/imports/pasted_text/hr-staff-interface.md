Create the **HR Staff interface for the Human Resource Information System (HRIS)**.

This interface is for HR personnel who handle operational HR tasks such as employee records management, attendance monitoring, leave processing, recruitment assistance, and training records.

Maintain the same **HRIS design system used in the HR Officer, Department Head, and Employee interfaces**.

Color Theme
Primary: Red (#C62828)
Secondary: Yellow (#FFC107)
Background: White (#FFFFFF)
Text: Dark Gray (#424242)

Design Style
Modern enterprise dashboard
Clean SaaS layout
Rounded cards
Soft shadows
Consistent sidebar and header design

Create each screen as **separate frames under a Figma page titled “HR Staff UI”**.

---

AUTHENTICATION FLOW

HR Staff use the same authentication process as other users.

Login Page
Facial Verification Page

Authentication flow:

Login → Facial Verification → HR Staff Dashboard

---

HEADER

The header should include:

Page title
Search bar
Notification bell icon
HR Staff profile avatar
Dropdown menu:

Profile
Settings
Logout

Notifications should appear only in the **header**, not in the sidebar.

---

SIDEBAR NAVIGATION

Dashboard
Employees
Attendance
Leave Management
Payroll Preparation
Applicant Management
Training Management
Reports
Announcements
Settings
Logout

---

DASHBOARD

Create a dashboard that displays HR operational data.

Summary Cards:

Total Employees
Employees Present Today
Pending Leave Requests
New Applicants
Training Requests

Charts:

Attendance trends
Department employee distribution

Widgets:

Recent employee activity
Upcoming birthdays
HR announcements

---

EMPLOYEES

Display the **Employee Directory interface**.

Use the same **two-column layout used in HR Officer and Department Head views**.

LEFT COLUMN

Employee list.

Fields include:

Employee Name
Employee ID
Position
Department
Status

Include search and filters.

RIGHT COLUMN

Employee profile using the **Personal Data Sheet (PDS) structure**.

Sections include:

Personal Information
Family Background
Educational Background
Civil Service Eligibility
Work Experience
Training Programs
Employment Information

HR Staff can **update employee records but cannot modify performance evaluations or payroll approvals**.

---

ATTENDANCE

Display attendance monitoring tools.

Features:

View facial recognition attendance logs
Monitor employee clock-in / clock-out

Table columns:

Employee Name
Date
Clock In
Clock Out
Work Hours
Status

Include filters:

Date
Department
Employee

Include attendance summary chart.

---

LEAVE MANAGEMENT

Display leave requests.

Fields:

Employee Name
Leave Type
Start Date
End Date
Reason
Status

Actions:

Verify Leave
Forward for Approval

Final approval is handled by **Department Head or HR Officer**.

---

PAYROLL PREPARATION

HR Staff prepare payroll but do not approve it.

Display payroll preparation table.

Columns:

Employee Name
Department
Base Salary
Overtime
Deductions
Net Salary

Features:

Upload payroll data
Generate payroll draft

Payroll approval remains under **HR Officer**.

---

APPLICANT MANAGEMENT

Display the same **Applicant Management interface used by HR Officer**, but with limited permissions.

Layout:

Header

Applicant List
Upload New Application button

Description:

View and manage job applicants with automated evaluation scores.

---

TOP RANKED APPLICANTS

Display Top 1 – 5 applicants based on automated evaluation score.

---

APPLICANT LIST

Two-column layout.

LEFT COLUMN

Applicant list.

Fields:

Applicant Number
Applicant Name
Position Applied
Application Date
Status

RIGHT COLUMN

Evaluation breakdown:

Education Score
Eligibility Score
Training Score
Experience Score
Total Score

HR Staff can **encode or upload applicant documents** but cannot finalize hiring decisions.

---

TRAINING MANAGEMENT

Display employee training records.

Fields:

Training Title
Training Provider
Date Conducted
Number of Hours
Status

Actions:

Add Training Record
Update Training Records

---

REPORTS

Create a **single Reports page**.

Include sections:

Attendance Reports
Leave Reports
Employee Records
Training Reports

Include charts and export options.

---

ANNOUNCEMENTS

Display HR announcements and updates.

Examples:

Policy updates
Training schedules
HR notices

Use card layout.

---

GOAL

Design the **HR Staff interface** so HR personnel can:

Manage employee records using the PDS structure
Monitor attendance logs
Process leave requests
Prepare payroll data
Manage applicant records
Track training programs

while maintaining the same **consistent HRIS interface used across all system roles**.
