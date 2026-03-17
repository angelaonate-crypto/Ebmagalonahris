Refactor the HR Officer design system in this Figma file to eliminate duplicated UI elements and improve maintainability while keeping the visual UI exactly the same.

This is a **design system cleanup only**.
Do not change colors, layout, spacing, typography, or styling.

---

GOAL

Convert repeated UI elements into reusable Figma components and organize the design structure so the HR Officer module is easier to maintain.

---

1. Create Shared Components

Create a shared components section called:

Components / Shared

Extract the following reusable UI components.

---

Status Badge Component

Create a reusable **Status Badge component**.

The component should accept a **status label** and automatically apply the correct pill color.

Status color mapping:

Green
Approved
Active
Present
Completed

Yellow / Amber
Pending
Late
In Progress

Red
Rejected
Absent
Not Qualified

Gray
Default or unknown statuses

Replace all existing status badge elements across the HR Officer pages with this reusable component.

---

Stat Card Component

Create a reusable **Stat Card component** used in dashboard summary sections.

Properties:

Label
Value
Optional subtext
Optional icon

Replace the repeated summary cards found in:

Employee Management
Employment History
Leave Management
Payroll Management
Training Management
Attendance Monitoring

All pages should use this Stat Card component instead of duplicated card designs.

---

Data Table Component

Create a reusable **Data Table component**.

The component should support:

Table headers
Row data
Optional alignment for columns

Keep the current visual styling exactly the same:

Header style
text-left
py-3 px-4
text-sm font-medium
text-gray-600

Row style
border-b border-gray-100
hover:bg-gray-50

Cell style
py-3 px-4
text-sm text-gray-700

Replace all manually designed tables in the HR Officer pages with this reusable Data Table component.

---

2. Clean Up Navigation Structure

Update the HR Officer sidebar navigation to remove duplicate or redundant sections.

Remove the duplicate Payroll Reports link that conflicts with Reports → Payroll.

Keep only:

Reports → Payroll

---

Add missing navigation item:

Under the Recruitment group add:

Applicant Evaluation

Place it between:

Applicant List
Applicant Ranking

---

3. Remove Redundant Screens

Remove the separate screens for:

Leave Requests
Training Records

These tables already exist inside the main pages:

Leave Management
Training Management

Update the navigation so these links open the main pages instead.

---

4. Organize Pages

Group HR Officer screens into sections:

Authentication
Dashboard
Recruitment
Employee Management
Attendance & Leave
Payroll
Performance Evaluation
Training Management
Reports

---

Constraints

Do not change:

Colors
Spacing
Typography
Layout structure
Tailwind-based styling appearance

This refactor should only convert duplicated elements into reusable components and organize the design file.

---

Expected Result

Cleaner Figma file with:

Reusable components for badges, stat cards, and tables
Consistent navigation structure
Reduced duplicated UI elements
Better maintainability for the HR Officer module
