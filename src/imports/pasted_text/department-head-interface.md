Create the **Department Head interface for the Human Resource Information System (HRIS)**.

This interface is for Department Heads who supervise employees within their department. They should be able to monitor staff attendance, review employee performance, approve leave requests, and participate in recruitment decisions.

Maintain the same **HRIS design system** used in the HR Officer and Employee interfaces.

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

Create each screen as **separate frames under a Figma page titled “Department Head UI”**.

---

AUTHENTICATION FLOW

Department Heads use the same login and verification process as other users.

Login Page
Facial Verification Page

Authentication flow:

Login → Facial Verification → Department Head Dashboard

---

HEADER

The header should include:

Page title
Search bar
Notification bell icon
Department Head profile avatar
Dropdown menu:

Profile
Settings
Logout

Notifications should appear only in the **header**, not the sidebar.

---

SIDEBAR NAVIGATION

Dashboard
My Attendance
Team Attendance
Employees
Leave Requests
Performance Evaluation
Applicant Review
Reports
Announcements
Settings
Logout

---

DASHBOARD

Create an overview dashboard showing department-level information.

Summary Cards

Employees in Department
Employees Present Today
Employees on Leave
Pending Leave Requests
Applicants for Department

Charts

Department attendance trends
Employee performance summary

Widgets

Recent employee activity
Upcoming birthdays
Department announcements

---

MY ATTENDANCE

Department Heads must also record their own attendance.

Use **facial recognition attendance** similar to the employee attendance system.

Attendance actions:

Clock In
Clock Out

When the user selects an action, activate facial verification.

Camera panel should display:

Webcam preview
Face scanning outline
Scanning indicator

After verification:

Automatically record:

Date
Clock In / Clock Out Time

Below the camera panel display **attendance history**.

Table columns:

Date
Clock In
Clock Out
Work Hours
Status (Present / Late / Absent)

---

TEAM ATTENDANCE

Department Heads can monitor attendance of employees in their department.

Display an attendance table.

Columns:

Employee Name
Date
Clock In Time
Clock Out Time
Work Hours
Status

Include:

Date filter
Employee search
Department summary chart

---

EMPLOYEES

Department Heads can view employees in their department.

Use a **two-column layout**.

LEFT COLUMN

Employee list.

Fields:

Employee Name
Employee ID
Position
Status

Include search bar.

RIGHT COLUMN

Employee profile information using **PDS structure**.

Sections include:

Personal Information
Educational Background
Civil Service Eligibility
Work Experience
Training Programs
Employment Information

Department Heads can view records but cannot edit official HR data.

---

LEAVE REQUESTS

Department Heads approve leave requests from employees in their department.

Table fields:

Employee Name
Leave Type
Start Date
End Date
Reason
Status

Actions:

Approve
Reject

Include filters:

Pending
Approved
Rejected

---

PERFORMANCE EVALUATION

Department Heads conduct employee performance evaluation.

Display evaluation interface based on **SPMS performance rating**.

Fields may include:

Employee Name
Performance Indicators
Rating Score
Supervisor Comments

Include summary chart for employee performance.

---

APPLICANT REVIEW

Department Heads participate in recruitment decisions.

Display applicants applying to their department.

Page layout:

Top section:

Top Ranked Applicants (Top 1–5)

Display:

Applicant Name
Position Applied
Evaluation Score

Below:

Applicant list.

Columns:

Applicant Name
Position Applied
Evaluation Score
Status

Right panel:

Evaluation breakdown

Education
Eligibility
Training
Experience
Total Score

Department Heads can recommend candidates but **final hiring decision is made by HR Officer**.

---

REPORTS

Create a single **Reports page**.

Include sections:

Attendance Reports
Leave Reports
Performance Reports

Include charts and downloadable reports.

---

ANNOUNCEMENTS

Display HR or department announcements.

Examples:

HR announcements
Department updates
Training schedules

Use card layout.

---

GOAL

Design a **Department Head interface** that allows supervisors to:

Monitor employee attendance
Record their own attendance
Approve leave requests
Review employee performance
View employee records
Participate in recruitment evaluation

while maintaining the same modern HRIS interface used across the system.
