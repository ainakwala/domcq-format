```json
{
  "format": "domcq/1",
  "exam": "crm-platform-admin",
  "set": "Salesforce Certified Platform Administrator practice – Mixed Syllabus Set 1",
  "questions": [
    {
      "stem": "A sales rep is locked out of Salesforce after entering the wrong password too many times. She remembers her password and wants to log in right away without changing it. What should the administrator do?",
      "options": [
        "Reset the user's password from the Users list in Setup",
        "Deactivate the user and then reactivate the account",
        "Click Unlock on the user's detail page in Setup",
        "Raise the lockout threshold in the profile's password policy"
      ],
      "answer": "C",
      "explanation": "When a user exceeds the maximum invalid login attempts, Salesforce locks the account and an Unlock button appears on the user's detail page. Unlocking restores access immediately and leaves the existing password unchanged. Resetting the password would also restore access but forces a new password, which the user does not want, and changing the policy does not release a lock that has already happened.",
      "topic": "Configuration and Setup",
      "subtopic": "User management",
      "difficulty": "easy",
      "source": "Exam guide: Configuration and Setup – user setup and maintenance; Salesforce Help: Unlock Users"
    },
    {
      "stem": "The organization-wide default for Opportunity is Private. Sales reps in the West Sales role must be able to view, but not edit, opportunities owned by other reps in the same role. Reps in other regions must not gain access to West opportunities. What should the administrator configure?",
      "options": [
        "An owner-based sharing rule that shares West Sales role opportunities with the West Sales role as Read Only",
        "The Grant Access Using Hierarchies setting on Opportunity so peers in a role can see each other's records",
        "A change to the Opportunity organization-wide default from Private to Public Read Only",
        "The View All permission on Opportunity added to the profile used by the West sales reps"
      ],
      "answer": "A",
      "explanation": "The role hierarchy only opens access upward to managers, not sideways between peers in the same role, so sharing rules are the tool for extending access horizontally. An owner-based sharing rule can share records owned by members of one role with members of the same role at Read Only. Changing the organization-wide default or granting View All would open West opportunities to far more users than required.",
      "topic": "Configuration and Setup",
      "subtopic": "Sharing and record access",
      "difficulty": "medium",
      "source": "Exam guide: Configuration and Setup – security and access; Salesforce Help: Sharing Rules"
    },
    {
      "stem": "A company requires that its call center agents can log in to Salesforce only between 8:00 AM and 6:00 PM, and only from the corporate office network. Which two settings should the administrator configure to enforce this? Choose TWO.",
      "options": [
        "Add the corporate IP range to the org's Network Access trusted IP ranges",
        "Set login hours on the profile assigned to the agents",
        "Reduce the session timeout value in Session Settings",
        "Set login IP ranges on the profile assigned to the agents"
      ],
      "answer": "BD",
      "explanation": "Login hours and login IP ranges on a profile are enforced restrictions: users with that profile cannot log in outside the defined hours or from an address outside the defined ranges. Org-level trusted IP ranges under Network Access do not block anyone; they only let users from those addresses skip identity verification. Session timeout controls how long an inactive session lasts, not when or where a user may log in.",
      "topic": "Configuration and Setup",
      "subtopic": "Login access restrictions",
      "difficulty": "hard",
      "source": "Exam guide: Configuration and Setup – security and access; Salesforce Help: Restrict Login Access by IP Address and Login Hours"
    },
    {
      "stem": "An administrator is creating a custom Inspection object related to a custom Property object. Inspections must be deleted when their property is deleted, must inherit the property's sharing, and the Property record must show a roll-up summary count of its inspections. Which relationship type should be used?",
      "options": [
        "Lookup relationship",
        "Master-detail relationship",
        "External lookup relationship",
        "Hierarchical relationship"
      ],
      "answer": "B",
      "explanation": "In a master-detail relationship the detail record's ownership and sharing are controlled by the master, deleting the master deletes its detail records, and roll-up summary fields can be created on the master. A lookup relationship is loosely coupled and does not support standard roll-up summary fields. External lookups link to external objects, and hierarchical relationships exist only on the User object.",
      "topic": "Object Manager and Lightning App Builder",
      "subtopic": "Object relationships",
      "difficulty": "easy",
      "source": "Exam guide: Object Manager and Lightning App Builder – relationships; Salesforce Help: Object Relationships Overview"
    },
    {
      "stem": "On the Lightning record page for Opportunity, a custom component showing onboarding steps should appear only when the opportunity's Stage is Closed Won. The page should look the same for all other stages. How should the administrator achieve this?",
      "options": [
        "Add a section to the page layout and mark it as read-only",
        "Create a new record type for Closed Won opportunities",
        "Write a validation rule that hides the component on save",
        "Add a component visibility filter on Stage in Lightning App Builder"
      ],
      "answer": "D",
      "explanation": "Lightning App Builder lets an administrator set component visibility filters based on record field values, user attributes, device form factor and permissions. A filter of Stage equals Closed Won makes the component render only for those records, without needing extra layouts or record types. Validation rules only check data on save and have no effect on what a page displays.",
      "topic": "Object Manager and Lightning App Builder",
      "subtopic": "Lightning record pages",
      "difficulty": "medium",
      "source": "Exam guide: Object Manager and Lightning App Builder – Lightning App Builder; Salesforce Help: Dynamic Lightning Pages"
    },
    {
      "stem": "An administrator is considering record types to support two different business units that use the Case object. Which two things can record types control? Choose TWO.",
      "options": [
        "Which picklist values are available when users create or edit a record",
        "Which users are able to see a record, based on its record type",
        "Which page layout a user sees, in combination with the user's profile",
        "Which fields are read-only for a user through field-level security"
      ],
      "answer": "AC",
      "explanation": "Record types determine the picklist values (and, for some objects, the business process) available for a record, and page layouts are assigned per combination of record type and profile. Record types do not grant or restrict record visibility; that is handled by organization-wide defaults, the role hierarchy and sharing. Field-level security is set on profiles and permission sets, independently of record types.",
      "topic": "Object Manager and Lightning App Builder",
      "subtopic": "Record types and page layouts",
      "difficulty": "hard",
      "source": "Exam guide: Object Manager and Lightning App Builder – record types; Salesforce Help: Record Types"
    },
    {
      "stem": "A sales rep converts a qualified lead using standard lead conversion. Which records can be created or updated as part of the conversion? Choose THREE.",
      "options": [
        "Case",
        "Account",
        "Contact",
        "Opportunity"
      ],
      "answer": "BCD",
      "explanation": "Standard lead conversion turns the lead into an account and a contact, either creating new records or matching existing ones, and can optionally create an opportunity. The lead record is then marked as converted. Cases are not part of lead conversion, because they track customer support issues rather than the sales cycle.",
      "topic": "Sales and Marketing Applications",
      "subtopic": "Lead management",
      "difficulty": "medium",
      "source": "Exam guide: Sales and Marketing Applications – lead conversion; Salesforce Help: Convert Leads"
    },
    {
      "stem": "A company sells new business deals and renewal deals. Renewal opportunities move through a shorter set of stages than new business opportunities, and reps should only see the stages that apply to each type in the Stage picklist. What should the administrator configure?",
      "options": [
        "Create two sales processes and assign each to its own opportunity record type",
        "Create two page layouts and assign each one to a different sales profile",
        "Map each group of stages to a different forecast category in Setup",
        "Create a validation rule that blocks stages based on opportunity type"
      ],
      "answer": "A",
      "explanation": "A sales process defines which Opportunity Stage values are available, and each sales process is applied through an opportunity record type. Creating a new business sales process and a renewal sales process, each linked to its own record type, shows reps only the relevant stages. Page layouts and forecast categories do not filter Stage values, and a validation rule only rejects bad choices after they are made.",
      "topic": "Sales and Marketing Applications",
      "subtopic": "Opportunity management",
      "difficulty": "medium",
      "source": "Exam guide: Sales and Marketing Applications – sales process; Salesforce Help: Create Multiple Business Processes"
    },
    {
      "stem": "Cases arrive through Email-to-Case. Cases whose subject contains the word \"invoice\" should automatically go to the Billing queue, and all other cases should go to the General Support queue. What should the administrator configure?",
      "options": [
        "An escalation rule",
        "An auto-response rule",
        "A case assignment rule",
        "An entitlement process"
      ],
      "answer": "C",
      "explanation": "Case assignment rules evaluate rule entries in order when a case is created and assign it to a user or queue based on criteria such as subject, origin or product. Only one assignment rule can be active at a time, but it can hold many entries, so one entry can route invoice cases to Billing and a final entry can catch everything else. Escalation rules act on cases that stay open too long, and auto-response rules only send acknowledgment emails.",
      "topic": "Service and Support Applications",
      "subtopic": "Case management",
      "difficulty": "easy",
      "source": "Exam guide: Service and Support Applications – case assignment; Salesforce Help: Set Up Assignment Rules"
    },
    {
      "stem": "Support management wants any High priority case that has not been closed within four hours of creation to be reassigned automatically to the Tier 2 queue, with the support manager notified by email. Which solution meets this requirement?",
      "options": [
        "A case assignment rule that re-runs every four hours",
        "An escalation rule with an age-over escalation action",
        "A queue configured with a four-hour membership limit",
        "A Service Console macro that reassigns the case"
      ],
      "answer": "B",
      "explanation": "Escalation rules run on cases that meet their criteria and fire escalation actions once a case has been open longer than a set age, measured in hours. Each action can reassign the case to a user or queue and send notification emails to chosen users. Assignment rules run only at creation or when explicitly triggered, and macros require an agent to run them.",
      "topic": "Service and Support Applications",
      "subtopic": "Case escalation",
      "difficulty": "medium",
      "source": "Exam guide: Service and Support Applications – case escalation; Salesforce Help: Set Up Escalation Rules"
    },
    {
      "stem": "Sales reps want to log a call from the Account record page in one click, with the task's Subject already set to \"Outbound Call\" and its Type set to \"Call\", and with the task linked to that account. What should the administrator create?",
      "options": [
        "A workflow rule that fills in the fields after the task is saved",
        "A custom list view on Activities filtered by Subject and Type",
        "A validation rule that requires Subject and Type before saving",
        "An object-specific Log a Call action with predefined field values"
      ],
      "answer": "D",
      "explanation": "An object-specific action created on Account automatically relates the new task to the account the user is viewing. Predefined field values on the action prefill fields such as Subject and Type so reps do not have to type them. Validation rules only check data, list views only display records, and new workflow rules can no longer be created.",
      "topic": "Productivity and Collaboration",
      "subtopic": "Actions and activities",
      "difficulty": "medium",
      "source": "Exam guide: Productivity and Collaboration – activities and actions; Salesforce Help: Set Predefined Field Values for Quick Action Fields"
    },
    {
      "stem": "A company wants to add electronic signature functionality to Salesforce using a prebuilt solution from a third-party vendor rather than building it themselves. Where should the administrator look for such a solution?",
      "options": [
        "AppExchange",
        "Trailhead",
        "Installed Packages in Setup",
        "Salesforce Help documentation"
      ],
      "answer": "A",
      "explanation": "AppExchange is Salesforce's marketplace for apps, components and consulting services built by Salesforce and its partners, and it is where admins find and install prebuilt solutions. Trailhead and Salesforce Help are learning and documentation resources. The Installed Packages page in Setup lists packages already installed in the org but is not a place to discover new ones.",
      "topic": "Productivity and Collaboration",
      "subtopic": "AppExchange",
      "difficulty": "easy",
      "source": "Exam guide: Productivity and Collaboration – AppExchange; Trailhead: AppExchange Basics"
    },
    {
      "stem": "A marketing coordinator needs to load 30,000 new lead records from a CSV file. Leads whose email address already exists in Salesforce must not be created again, and the coordinator cannot install any software on her computer. Which tool should she use?",
      "options": [
        "Data Loader",
        "Data Export Service",
        "Data Import Wizard",
        "Mass Transfer Records"
      ],
      "answer": "C",
      "explanation": "The Data Import Wizard runs in the browser, handles up to 50,000 records at a time for supported objects including leads, and can match imported leads to existing ones by email to avoid creating duplicates. Data Loader is a client application that must be installed and has no built-in duplicate matching. Data Export Service only exports data, and Mass Transfer Records changes ownership rather than importing records.",
      "topic": "Data and Analytics Management",
      "subtopic": "Data import",
      "difficulty": "easy",
      "source": "Exam guide: Data and Analytics Management – importing data; Salesforce Help: Choose a Method for Importing Data"
    },
    {
      "stem": "The sales director wants a report listing every account that has no opportunities at all, so the team can target them. What should the administrator build?",
      "options": [
        "An Opportunities report filtered where Amount equals zero",
        "An Accounts report with a cross filter of Accounts without Opportunities",
        "An Accounts with Opportunities report grouped by account name",
        "An Accounts report with a bucket field on the account's annual revenue"
      ],
      "answer": "B",
      "explanation": "A cross filter lets a report include or exclude parent records based on whether related child records exist, using with or without. Applying \"Accounts without Opportunities\" to an Accounts report returns only accounts that have no related opportunity. A report based on Accounts with Opportunities only returns accounts that do have opportunities, so it can never show the ones without.",
      "topic": "Data and Analytics Management",
      "subtopic": "Report filters",
      "difficulty": "medium",
      "source": "Exam guide: Data and Analytics Management – reports; Salesforce Help: Filter Across Objects with Cross Filters"
    },
    {
      "stem": "An account manager wants one report that shows, for each account, its open opportunities and its open cases side by side. Opportunities and cases are both children of Account and are not related to each other. Which report solution meets this requirement?",
      "options": [
        "A summary report based on the Accounts with Opportunities report type",
        "A matrix report grouped by account in rows and case status in columns",
        "A custom report type with Account, then Opportunities, then Cases",
        "A joined report with one block for opportunities and one for cases"
      ],
      "answer": "D",
      "explanation": "A joined report combines several report blocks, each with its own report type and filters, and groups them on a common field such as account. This makes it possible to show two sibling child objects of Account together. A custom report type links objects in a single parent-to-child chain, so Cases would have to be a child of Opportunities, which they are not.",
      "topic": "Data and Analytics Management",
      "subtopic": "Joined reports",
      "difficulty": "hard",
      "source": "Exam guide: Data and Analytics Management – report types and formats; Salesforce Help: Joined Reports"
    },
    {
      "stem": "Whenever an opportunity is created or edited, a custom Region field on that same opportunity must be set based on the account's billing country. The administrator wants the most efficient declarative solution. What should be used?",
      "options": [
        "A record-triggered flow optimized for Fast Field Updates",
        "A record-triggered flow optimized for Actions and Related Records",
        "A schedule-triggered flow that runs every hour on opportunities",
        "A screen flow added to the opportunity Lightning record page"
      ],
      "answer": "A",
      "explanation": "A record-triggered flow optimized for Fast Field Updates runs before the record is saved, so it can change fields on the triggering record without an extra save operation. This makes it much faster than an after-save flow for same-record updates. The after-save option is meant for updating other records or performing actions, and a scheduled or screen flow would not run reliably on every save.",
      "topic": "Automation",
      "subtopic": "Record-triggered flows",
      "difficulty": "medium",
      "source": "Exam guide: Automation – Flow Builder; Salesforce Help: Flow Trigger Types"
    },
    {
      "stem": "Any opportunity with a Discount Percent greater than 20% must be approved by the rep's manager before it can move forward, and the record should be locked while it is waiting for a decision. What should the administrator configure?",
      "options": [
        "A validation rule that blocks discounts greater than 20%",
        "A record-triggered flow that emails the rep's manager",
        "An approval process with entry criteria on Discount Percent",
        "A sharing rule that gives managers edit access to opportunities"
      ],
      "answer": "C",
      "explanation": "An approval process routes a record to designated approvers, such as the submitter's manager, when its entry criteria are met. When the record is submitted it is locked by default, and approval or rejection can trigger field updates and other actions. A validation rule would simply forbid the discount, and an email alone gives no formal approve or reject decision.",
      "topic": "Automation",
      "subtopic": "Approval processes",
      "difficulty": "easy",
      "source": "Exam guide: Automation – approval processes; Salesforce Help: Approval Processes"
    },
    {
      "stem": "Thirty days before a contract's End Date, the account owner should automatically receive an email reminder. The administrator must use the automation tool Salesforce currently recommends for new automation. Which solution should be used?",
      "options": [
        "A screen flow on the contract page that sends the reminder",
        "A record-triggered flow with a scheduled path 30 days before End Date",
        "A record-triggered flow optimized for Fast Field Updates that sends an email",
        "A new workflow rule with a time-dependent email alert action"
      ],
      "answer": "B",
      "explanation": "Scheduled paths in a record-triggered flow run actions at a time relative to a date field on the record, such as 30 days before End Date, and they adjust if that date changes. Flows optimized for Fast Field Updates run before save and cannot perform actions such as sending email. Workflow rules are retired for new automation, and a screen flow only runs when a user launches it.",
      "topic": "Automation",
      "subtopic": "Scheduled paths",
      "difficulty": "hard",
      "source": "Exam guide: Automation – Flow Builder; Salesforce Help: Run Part of a Record-Triggered Flow After the Triggering Event"
    },
    {
      "stem": "In Agentforce, which element groups the instructions and actions that an agent uses for a particular kind of job, and is chosen by the agent based on its classification description and scope?",
      "options": [
        "A prompt template",
        "A data library",
        "An agent action",
        "A topic"
      ],
      "answer": "D",
      "explanation": "A topic defines a category of jobs an agent can do, with a classification description, a scope, instructions and the actions available for that job. When a user sends a request, the agent's reasoning engine compares it to the topics' descriptions to choose the right one, then uses that topic's instructions and actions. An action is a single task the agent can perform, and a topic is what bundles related actions together.",
      "topic": "Agentforce",
      "subtopic": "Agent topics and actions",
      "difficulty": "medium",
      "source": "Exam guide: Agentforce – agent configuration; Salesforce Help: Agentforce Topics"
    },
    {
      "stem": "A company is enabling Agentforce. Its security team is concerned that the external large language model provider might store customer prompts and generated responses or use them to train its models. Which Einstein Trust Layer feature addresses this concern?",
      "options": [
        "Zero data retention agreements with the LLM providers",
        "Data masking of sensitive fields before prompts are sent",
        "Toxicity detection scoring on generated responses",
        "Dynamic grounding of prompts with CRM record data"
      ],
      "answer": "A",
      "explanation": "Under the Einstein Trust Layer's zero data retention policy, third-party LLM providers do not keep prompts or responses after processing them and do not use them for model training. Data masking reduces what sensitive data is sent in the first place but does not govern what the provider keeps. Toxicity detection scores the content of outputs, and grounding adds relevant CRM data to prompts.",
      "topic": "Agentforce",
      "subtopic": "Einstein Trust Layer",
      "difficulty": "medium",
      "source": "Exam guide: Agentforce – trust and security; Salesforce Help: Einstein Trust Layer"
    }
  ]
}
```
