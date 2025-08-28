# Rewin Admin Panel V2 - Development Rules & Structure

## 🎯 CORE PRINCIPLES

### 1. **ONE FEATURE = ONE FILE**
- Each page must be in its own file
- Each component must be in its own file
- Each service must be in its own file
- Each utility must be in its own file

### 2. **PREDICTABLE LOCATION**
- Every icon, button, and element has a designated location
- Follow the exact file structure defined below
- Never deviate from naming conventions

### 3. **COMPLETE SEPARATION**
- Features are completely independent
- No cross-dependencies between pages
- Shared logic goes in dedicated shared folders

---

## 📁 MANDATORY FILE STRUCTURE

```
rewin-admin-panel-v2/
├── README.md
├── AdminPanelTheme.md
├── DEVELOPMENT_RULES.md (this file)
├── PROGRESS_TRACKER.md (auto-updated)
│
├── frontend/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── index.html
│   │
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   │
│   │   ├── pages/                    # ONE FILE PER PAGE
│   │   │   ├── auth/
│   │   │   │   ├── LoginPage.tsx
│   │   │   │   └── ForgotPasswordPage.tsx
│   │   │   │
│   │   │   ├── dashboard/
│   │   │   │   └── DashboardPage.tsx
│   │   │   │
│   │   │   ├── users/
│   │   │   │   ├── UsersListPage.tsx
│   │   │   │   ├── UserCreatePage.tsx
│   │   │   │   ├── UserEditPage.tsx
│   │   │   │   └── UserDetailsPage.tsx
│   │   │   │
│   │   │   ├── outlets/
│   │   │   │   ├── OutletsListPage.tsx
│   │   │   │   ├── OutletCreatePage.tsx
│   │   │   │   ├── OutletEditPage.tsx
│   │   │   │   └── OutletDetailsPage.tsx
│   │   │   │
│   │   │   ├── customers/
│   │   │   │   ├── CustomersListPage.tsx
│   │   │   │   ├── CustomerCreatePage.tsx
│   │   │   │   ├── CustomerEditPage.tsx
│   │   │   │   └── CustomerDetailsPage.tsx
│   │   │   │
│   │   │   ├── transactions/
│   │   │   │   ├── TransactionsListPage.tsx
│   │   │   │   └── TransactionDetailsPage.tsx
│   │   │   │
│   │   │   ├── analytics/
│   │   │   │   ├── AnalyticsOverviewPage.tsx
│   │   │   │   ├── AnalyticsReportsPage.tsx
│   │   │   │   └── AnalyticsChartsPage.tsx
│   │   │   │
│   │   │   ├── email/
│   │   │   │   ├── EmailTemplatesPage.tsx
│   │   │   │   └── EmailSendersPage.tsx
│   │   │   │
│   │   │   └── system/
│   │   │       ├── SystemSettingsPage.tsx
│   │   │       ├── SystemLogsPage.tsx
│   │   │       └── SystemBackupPage.tsx
│   │   │
│   │   ├── components/               # REUSABLE COMPONENTS
│   │   │   ├── layout/
│   │   │   │   ├── Layout.tsx
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   └── Navigation.tsx
│   │   │   │
│   │   │   ├── ui/                   # BASIC UI COMPONENTS
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Toast.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Select.tsx
│   │   │   │   ├── Table.tsx
│   │   │   │   ├── Spinner.tsx
│   │   │   │   └── Badge.tsx
│   │   │   │
│   │   │   ├── forms/                # FORM COMPONENTS
│   │   │   │   ├── UserForm.tsx
│   │   │   │   ├── OutletForm.tsx
│   │   │   │   ├── CustomerForm.tsx
│   │   │   │   └── EmailTemplateForm.tsx
│   │   │   │
│   │   │   └── charts/               # CHART COMPONENTS
│   │   │       ├── LineChart.tsx
│   │   │       ├── BarChart.tsx
│   │   │       ├── PieChart.tsx
│   │   │       └── StatsCard.tsx
│   │   │
│   │   ├── hooks/                    # CUSTOM HOOKS
│   │   │   ├── useAuth.ts
│   │   │   ├── useUsers.ts
│   │   │   ├── useOutlets.ts
│   │   │   ├── useCustomers.ts
│   │   │   ├── useTransactions.ts
│   │   │   ├── useAnalytics.ts
│   │   │   ├── useEmail.ts
│   │   │   └── useToast.ts
│   │   │
│   │   ├── services/                 # API SERVICES
│   │   │   ├── api.ts               # Base API client
│   │   │   ├── auth.service.ts
│   │   │   ├── users.service.ts
│   │   │   ├── outlets.service.ts
│   │   │   ├── customers.service.ts
│   │   │   ├── transactions.service.ts
│   │   │   ├── analytics.service.ts
│   │   │   ├── email.service.ts
│   │   │   └── firebase.service.ts
│   │   │
│   │   ├── types/                    # TYPE DEFINITIONS
│   │   │   ├── auth.types.ts
│   │   │   ├── user.types.ts
│   │   │   ├── outlet.types.ts
│   │   │   ├── customer.types.ts
│   │   │   ├── transaction.types.ts
│   │   │   ├── analytics.types.ts
│   │   │   ├── email.types.ts
│   │   │   └── common.types.ts
│   │   │
│   │   ├── utils/                    # UTILITY FUNCTIONS
│   │   │   ├── formatters.ts
│   │   │   ├── validators.ts
│   │   │   ├── constants.ts
│   │   │   ├── helpers.ts
│   │   │   └── date.utils.ts
│   │   │
│   │   ├── styles/                   # STYLING
│   │   │   ├── globals.css
│   │   │   ├── theme.ts             # Theme variables
│   │   │   └── components.css       # Component-specific styles
│   │   │
│   │   └── assets/                   # STATIC ASSETS
│   │       ├── images/
│   │       ├── icons/
│   │       └── fonts/
│   │
│   └── public/
│       ├── favicon.ico
│       ├── ic_rewin_logo_new.png
│       └── manifest.json
│
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── .env.example
│   │
│   ├── routes/                       # API ROUTES
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── outlets.js
│   │   ├── customers.js
│   │   ├── transactions.js
│   │   ├── analytics.js
│   │   ├── email.js
│   │   └── system.js
│   │
│   ├── services/                     # BUSINESS LOGIC
│   │   ├── AuthService.js
│   │   ├── UserService.js
│   │   ├── OutletService.js
│   │   ├── CustomerService.js
│   │   ├── TransactionService.js
│   │   ├── AnalyticsService.js
│   │   ├── EmailService.js
│   │   └── FirebaseService.js
│   │
│   ├── middleware/                   # MIDDLEWARE
│   │   ├── auth.middleware.js
│   │   ├── validation.middleware.js
│   │   ├── error.middleware.js
│   │   └── cors.middleware.js
│   │
│   ├── utils/                        # BACKEND UTILITIES
│   │   ├── validators.js
│   │   ├── formatters.js
│   │   ├── constants.js
│   │   └── helpers.js
│   │
│   └── config/                       # CONFIGURATION
│       ├── firebase.config.js
│       ├── database.config.js
│       └── email.config.js
│
└── shared/                           # SHARED BETWEEN FRONTEND/BACKEND
    ├── types/
    ├── constants/
    └── utils/
```

---

## 🎨 ICON & ELEMENT PLACEMENT RULES

### Navigation Icons (Sidebar)
```typescript
// EXACT ICON MAPPING - NEVER CHANGE
const NAVIGATION_ICONS = {
  dashboard: 'BarChart3',      // Dashboard page
  users: 'Users',              // Users management
  outlets: 'Store',            // Outlets management
  customers: 'User',           // Customers management
  transactions: 'CreditCard',  // Transactions
  analytics: 'TrendingUp',     // Analytics & reports
  email: 'Mail',               // Email management
  system: 'Settings',          // System settings
  logout: 'LogOut'             // Logout action
};
```

### Action Icons (Buttons)
```typescript
// STANDARD ACTION ICONS - CONSISTENT ACROSS ALL PAGES
const ACTION_ICONS = {
  create: 'Plus',              // Add/Create new item
  edit: 'Edit',                // Edit existing item
  delete: 'Trash2',            // Delete item
  view: 'Eye',                 // View details
  search: 'Search',            // Search functionality
  filter: 'Filter',            // Filter data
  export: 'Download',          // Export data
  import: 'Upload',            // Import data
  refresh: 'RefreshCw',        // Refresh data
  save: 'Save',                // Save changes
  cancel: 'X',                 // Cancel action
  back: 'ArrowLeft',           // Go back
  forward: 'ArrowRight',       // Go forward
  send: 'Send',                // Send email/message
  copy: 'Copy',                // Copy to clipboard
  settings: 'Settings',        // Settings/configuration
  google: 'GmailIcon'          // Google Auth (using custom Google "G" logo SVG component)
};
```

### Status Icons
```typescript
// STATUS INDICATORS - CONSISTENT COLORS & ICONS
const STATUS_ICONS = {
  success: 'CheckCircle',      // Success state (green)
  error: 'XCircle',            // Error state (red)
  warning: 'AlertTriangle',    // Warning state (orange)
  info: 'Info',                // Information state (blue)
  loading: 'Loader',           // Loading state (animated)
  pending: 'Clock',            // Pending state (gray)
  active: 'CheckCircle2',      // Active status (green)
  inactive: 'XCircle'          // Inactive status (red)
};
```

### Custom Brand Icons
```typescript
// CUSTOM SVG COMPONENTS - FOR BRAND LOGOS ONLY
// Location: components/ui/
const BRAND_ICONS = {
  google: 'GmailIcon',         // Google "G" logo SVG component for Google Auth
  // Add other brand icons here as needed
};
```

---

## 📋 PAGE STRUCTURE TEMPLATE

### EVERY PAGE MUST FOLLOW THIS EXACT STRUCTURE:

```typescript
// Example: UsersListPage.tsx
import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, Search, Filter } from 'lucide-react';
import { useUsers } from '../../hooks/useUsers';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Table } from '../../components/ui/Table';
import { Modal } from '../../components/ui/Modal';
import { Toast } from '../../components/ui/Toast';
import { User } from '../../types/user.types';

const UsersListPage: React.FC = () => {
  // 1. STATE MANAGEMENT
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);

  // 2. HOOKS
  const { fetchUsers, deleteUser } = useUsers();

  // 3. EFFECTS
  useEffect(() => {
    loadUsers();
  }, []);

  // 4. HANDLERS
  const loadUsers = async () => {
    // Implementation
  };

  const handleCreate = () => {
    // Implementation
  };

  const handleEdit = (user: User) => {
    // Implementation
  };

  const handleDelete = (user: User) => {
    // Implementation
  };

  const handleView = (user: User) => {
    // Implementation
  };

  // 5. RENDER HELPERS
  const renderHeader = () => (
    <div style={{ /* Header styles from theme */ }}>
      <div>
        <h1>Users Management</h1>
        <p>Manage all users in the system</p>
      </div>
      <div>
        <Button onClick={handleCreate} variant="primary">
          <Plus size={16} />
          Add User
        </Button>
      </div>
    </div>
  );

  const renderFilters = () => (
    <Card>
      <div style={{ /* Filter styles */ }}>
        <div>
          <Search size={16} />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="secondary">
          <Filter size={16} />
          Filters
        </Button>
      </div>
    </Card>
  );

  const renderTable = () => (
    <Card>
      <Table
        data={users}
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'status', label: 'Status' },
          { key: 'actions', label: 'Actions' }
        ]}
        renderActions={(user) => (
          <div>
            <Button onClick={() => handleView(user)} variant="ghost">
              <Eye size={16} />
            </Button>
            <Button onClick={() => handleEdit(user)} variant="ghost">
              <Edit size={16} />
            </Button>
            <Button onClick={() => handleDelete(user)} variant="danger">
              <Trash2 size={16} />
            </Button>
          </div>
        )}
      />
    </Card>
  );

  // 6. MAIN RENDER
  return (
    <div>
      {renderHeader()}
      {renderFilters()}
      {renderTable()}
      
      {/* Modals */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {/* Modal content */}
        </Modal>
      )}
    </div>
  );
};

export default UsersListPage;
```

---

## 🔄 WORKFLOW & PROGRESS TRACKING SYSTEM

### BEFORE STARTING ANY WORK:

1. **UPDATE PROGRESS_TRACKER.md**
   ```markdown
   ## Current Session: [Date]
   ### Working On: [Feature Name]
   ### Status: [In Progress/Testing/Complete]
   ### Files Modified:
   - [ ] File 1
   - [ ] File 2
   ### Next Steps:
   1. Step 1
   2. Step 2
   ```

2. **CREATE TODO LIST**
   - Use the todo_write tool IMMEDIATELY
   - Break down the feature into specific tasks
   - Mark current task as "in_progress"

3. **FOLLOW THE EXACT STRUCTURE**
   - Never deviate from the file structure
   - Use exact icon mappings
   - Follow page template structure

### DURING DEVELOPMENT:

1. **ONE FEATURE AT A TIME**
   - Complete entire feature before moving to next
   - Test thoroughly before marking complete
   - Update progress tracker after each major step

2. **CONSISTENT NAMING**
   ```typescript
   // File naming convention
   ComponentName.tsx          // PascalCase for components
   serviceName.service.ts     // camelCase for services
   hookName.ts               // camelCase for hooks
   typeName.types.ts         // camelCase for types
   ```

3. **MANDATORY COMMENTS**
   ```typescript
   // FEATURE: User Management
   // FILE: UsersListPage.tsx
   // PURPOSE: Display and manage list of users
   // ICONS USED: Plus, Edit, Trash2, Eye, Search, Filter
   // LAST MODIFIED: [Date]
   ```

### AFTER COMPLETING WORK:

1. **UPDATE PROGRESS TRACKER**
   - Mark tasks as complete
   - Document any issues encountered
   - Note next session priorities

2. **UPDATE TODO LIST**
   - Mark completed tasks
   - Add any new tasks discovered
   - Set next task as "pending"

3. **VERIFY CONSISTENCY**
   - Check all icons are from approved list
   - Verify file structure compliance
   - Confirm theme adherence

---

## 🚨 CRITICAL RULES - NEVER BREAK

### 1. **ICON CONSISTENCY**
- NEVER use an icon not in the approved lists above
- NEVER change icon assignments without updating this document
- ALWAYS use the same icon for the same action across all pages

### 2. **FILE STRUCTURE**
- NEVER create files outside the defined structure
- NEVER combine multiple features in one file
- ALWAYS follow the exact naming conventions

### 3. **COMPONENT SEPARATION**
- NEVER put business logic in components
- NEVER put API calls directly in components
- ALWAYS use services and hooks for data management

### 4. **THEME COMPLIANCE**
- NEVER use colors not defined in AdminPanelTheme.md
- NEVER create custom styles without updating theme documentation
- ALWAYS reference theme variables, never hardcode values

### 5. **PROGRESS TRACKING**
- NEVER start work without updating progress tracker
- NEVER leave session without documenting current state
- ALWAYS use todo_write tool for task management

### 6. **TECHNOLOGY STACK COMPLIANCE**
- NEVER use anything other than React 18 + TypeScript + Vite for frontend
- NEVER use anything other than Node.js + Express + TypeScript for backend
- NEVER use CSS frameworks other than custom CSS following AdminPanelTheme.md
- NEVER use icon libraries other than Lucide React (exception: custom brand SVG components in components/ui/)
- ALWAYS use Firebase Firestore for database operations
- ALWAYS use Firebase Auth for authentication

### 7. **AI ASSISTANT COMPLIANCE** (For Development Sessions)
- NEVER start work without reading DEVELOPMENT_RULES.md and PROGRESS_TRACKER.md
- NEVER create files without verifying location against structure rules
- NEVER use icons without checking approved mappings
- NEVER apply styling without referencing AdminPanelTheme.md
- ALWAYS update progress tracker before and after work
- ALWAYS use todo_write tool for task management
- ALWAYS ask for approval before deviating from any rule

---

## 📊 PROGRESS TRACKING TEMPLATE

Create `PROGRESS_TRACKER.md` with this structure:

```markdown
# Rewin Admin Panel V2 - Progress Tracker

## Project Status: [Planning/Development/Testing/Complete]

## Current Session: [Date & Time]
### Developer: [Name]
### Working On: [Current Feature]
### Session Status: [Starting/In Progress/Paused/Complete]

### Today's Goals:
- [ ] Goal 1
- [ ] Goal 2
- [ ] Goal 3

### Files Being Modified:
- [ ] File 1 - [Status]
- [ ] File 2 - [Status]

### Issues Encountered:
- Issue 1: [Description] - [Resolution]
- Issue 2: [Description] - [Status]

### Next Session Priorities:
1. Priority 1
2. Priority 2
3. Priority 3

## Feature Completion Status:

### Phase 1: Foundation
- [ ] Project setup
- [ ] Theme system
- [ ] Base components
- [ ] Authentication

### Phase 2: Core Features
- [ ] Dashboard
- [ ] User management
- [ ] Navigation system

### Phase 3: Business Features
- [ ] Outlet management
- [ ] Customer management
- [ ] Transaction handling

### Phase 4: Advanced Features
- [ ] Email system
- [ ] Analytics
- [ ] System settings

## Session History:
### [Date] - [Feature Worked On]
- Completed: [List]
- Issues: [List]
- Next: [List]
```

---

## 🎯 SUMMARY

This document is the **SINGLE SOURCE OF TRUTH** for all development decisions. Every file, icon, component, and feature must follow these rules exactly. 

**NEVER DEVIATE FROM THESE RULES WITHOUT UPDATING THIS DOCUMENT FIRST.**

The structure ensures:
- ✅ Easy navigation and editing
- ✅ Consistent user experience
- ✅ Maintainable codebase
- ✅ Clear progress tracking
- ✅ No lost work or forgotten tasks

Follow these rules religiously, and the admin panel will be built efficiently with perfect consistency.

---

## 🔒 COMPLIANCE & ENFORCEMENT SYSTEM

### PRE-WORK CHECKLIST (Mandatory for Every Session)
Before starting any development work, the following must be completed:

1. ✅ **Read DEVELOPMENT_RULES.md** - Refresh all standards and requirements
2. ✅ **Check PROGRESS_TRACKER.md** - Understand current status and priorities  
3. ✅ **Review TODO List** - Know what tasks are pending/in-progress
4. ✅ **Verify Context** - Confirm understanding of current feature being worked on
5. ✅ **State Compliance Intent** - Explicitly confirm following all rules

### DURING-WORK VERIFICATION (Before Every Action)
For each file creation, modification, or feature implementation:

```markdown
📋 COMPLIANCE CHECK:
- File Location: [Exact path per mandatory structure] ✅
- Icons Used: [Only from approved mappings] ✅  
- Theme Compliance: [References AdminPanelTheme.md] ✅
- Progress Updated: [PROGRESS_TRACKER.md modified] ✅
- TODO Status: [Current task marked in-progress] ✅
```

### MANDATORY VERIFICATION QUESTIONS
Before proceeding with any action, ask:
- "Does this file belong in the exact location defined by the structure?"
- "Are all icons from the approved NAVIGATION_ICONS, ACTION_ICONS, or STATUS_ICONS lists?"
- "Does every style reference match the AdminPanelTheme.md specifications?"
- "Have I updated the progress tracker with current work?"
- "Am I following the exact page template structure?"

### RULE DEVIATION PROTOCOL
If any rule needs to be changed or deviated from:

1. **STOP** all work immediately
2. **IDENTIFY** the specific rule that needs modification
3. **EXPLAIN** why the change is necessary
4. **REQUEST** explicit user approval
5. **UPDATE** this rules document first
6. **PROCEED** only after approval and documentation

### ENFORCEMENT CONSEQUENCES
- **Minor Violation**: Immediate correction and documentation
- **Major Violation**: Session restart with proper compliance
- **Repeated Violations**: Complete rule system review required

### SESSION COMPLETION REQUIREMENTS
Before ending any development session:

1. ✅ **Update PROGRESS_TRACKER.md** with work completed
2. ✅ **Mark TODO items** as completed or update status
3. ✅ **Document Issues** encountered and resolutions
4. ✅ **Set Next Priorities** for following session
5. ✅ **Verify Compliance** - confirm all rules were followed

### ACCOUNTABILITY MEASURES
- All file locations must match the mandatory structure exactly
- All icons must be traceable to approved mappings
- All styling must reference AdminPanelTheme.md specifications
- All work must be documented in PROGRESS_TRACKER.md
- All tasks must be managed through the TODO system

**RULE VIOLATION = DEVELOPMENT FAILURE**
Breaking these rules compromises the entire project's consistency and maintainability.
