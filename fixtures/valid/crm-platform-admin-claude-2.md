```json
{
  "format": "domcq/1",
  "exam": "crm-platform-admin",
  "set": "Salesforce Certified Platform Administrator practice – Core Admin Mix",
  "questions": [
    {
      "stem": "Universal Containers requires that users assigned to the Sales User profile can log in to Salesforce only from the corporate office network (203.0.113.0 to 203.0.113.255). Login attempts from any other IP address must be blocked. What should the administrator configure?",
      "options": [
        "Add the range to Trusted IP Ranges in Network Access",
        "Set a shorter session timeout value in Session Settings",
        "Add the range to Login IP Ranges on the Sales User profile",
        "Enable multi-factor authentication for Sales User logins"
      ],
      "answer": "C",
      "explanation": "Login IP Ranges set on a profile define the only addresses from which users with that profile may log in; attempts from outside the range are denied. Trusted IP Ranges in Network Access work differently: they only let users log in from those addresses without an identity verification challenge, while users elsewhere can still log in after verifying. Session timeout and MFA control session length and authentication strength, not where logins come from.",
      "topic": "Configuration and Setup",
      "subtopic": "Login access restrictions",
      "difficulty": "easy",
      "source": "Configuration and Setup: Restrict Login IP Ranges on profiles; Set Trusted IP Ranges for your organization (Salesforce Help)"
    },
    {
      "stem": "An administrator wants regional managers to handle routine user maintenance for their own teams without giving them the System Administrator profile, so the administrator sets up delegated administration. Which TWO actions can a delegated administrator be allowed to perform? Choose TWO.",
      "options": [
        "Change the organization-wide sharing defaults for any object",
        "Create and edit users in specified roles and their subordinate roles",
        "Edit the object and field permissions of the profiles they can assign",
        "Assign users to the profiles that are specified in the delegated group"
      ],
      "answer": "BD",
      "explanation": "A delegated administration group lets chosen users create and edit users in specified roles and all roles below them, reset passwords, unlock users, and assign users to the profiles and permission sets named in the group. Delegated administrators cannot change the permissions inside those profiles, and they cannot change org-wide settings such as sharing defaults. That way managers can look after their own users without getting full admin access.",
      "topic": "Configuration and Setup",
      "subtopic": "Delegated administration",
      "difficulty": "medium",
      "source": "Configuration and Setup: Delegate Administrative Duties (delegated administration groups)"
    },
    {
      "stem": "Universal Containers has set the organization-wide default for Opportunity to Public Read Only. Leadership now requires that users in the Partner Desk role must not see any opportunities they do not own, while all other users keep read access to every opportunity. What should the administrator do?",
      "options": [
        "Change the Opportunity default to Private and add sharing rules granting read access to the other roles",
        "Create a criteria-based sharing rule that removes read access to opportunities from the Partner Desk role",
        "Remove the Read permission on Opportunity from the profile assigned to the Partner Desk users",
        "Turn off Grant Access Using Hierarchies for the Opportunity object in the Sharing Settings page"
      ],
      "answer": "A",
      "explanation": "Organization-wide defaults set the most restrictive baseline. Sharing rules, the role hierarchy and manual sharing can only open up access from there, never take it away. To stop one group seeing records, the baseline has to drop to Private, and then sharing rules give access back to the users who still need it, for example a public group containing all the other roles. Removing the object Read permission would also stop Partner Desk users seeing their own opportunities, and Grant Access Using Hierarchies cannot be turned off for standard objects.",
      "topic": "Configuration and Setup",
      "subtopic": "Sharing model",
      "difficulty": "hard",
      "source": "Configuration and Setup: Record access — organization-wide defaults, role hierarchy and sharing rules"
    },
    {
      "stem": "Universal Containers sells both hardware and consulting services. The hardware sales team and the consulting sales team need different Stage picklist values and different page layouts on the Opportunity object. What should the administrator configure?",
      "options": [
        "Two Lightning apps, each with its own Opportunity tab",
        "Two field sets on the Opportunity object, one per team",
        "Two public groups with a sharing rule for each team",
        "Two sales processes and two Opportunity record types"
      ],
      "answer": "D",
      "explanation": "Record types let you give different users different business processes, picklist values and page layouts on the same object. On opportunities, each record type is tied to a sales process that controls which Stage values are available, and page layouts are assigned by profile and record type. Apps, field sets and sharing rules do not control which picklist values or layouts a record uses.",
      "topic": "Object Manager and Lightning App Builder",
      "subtopic": "Record types and business processes",
      "difficulty": "easy",
      "source": "Object Manager and Lightning App Builder: Record types, sales processes and page layout assignment"
    },
    {
      "stem": "On the Account Lightning record page, the administrator wants a Rich Text component with renewal instructions to appear only when the account's Type field is 'Customer - Direct'. All other accounts should use the same record page without that component. What should the administrator do?",
      "options": [
        "Create a second record page and assign it to the app",
        "Add a component visibility filter on the Rich Text component",
        "Place the instructions in a page layout section for that type",
        "Create a validation rule that checks the Account Type field"
      ],
      "answer": "B",
      "explanation": "In Lightning App Builder, component visibility filters show or hide a component based on record field values, device form factor, or user and permission criteria. One record page can then serve every account, and the component appears only when its filter is met. Page layout sections cannot be shown or hidden based on a field value, and validation rules only stop invalid saves.",
      "topic": "Object Manager and Lightning App Builder",
      "subtopic": "Dynamic Lightning pages",
      "difficulty": "medium",
      "source": "Object Manager and Lightning App Builder: Lightning record pages — component visibility filters"
    },
    {
      "stem": "A custom object Invoice__c has a lookup relationship to Account, and some existing invoices have no Account value. Finance wants a field on Account that shows the total Amount of that account's invoices, calculated declaratively with a standard field type and no code. Which TWO steps should the administrator take? Choose TWO.",
      "options": [
        "Populate the Account field on every existing Invoice record",
        "Create a cross-object formula field on Account that sums invoices",
        "Convert the lookup relationship to a master-detail relationship",
        "Create a junction object between Account and the Invoice object"
      ],
      "answer": "AC",
      "explanation": "Roll-up summary fields can only be created on the master object of a master-detail relationship, apart from a few built-in standard relationships such as Account to Opportunity. A lookup can be converted to master-detail only once every existing child record has a value in the lookup field, so the blank Account values must be filled in first. Cross-object formulas read fields from a parent record and cannot add up child records.",
      "topic": "Object Manager and Lightning App Builder",
      "subtopic": "Relationships and roll-up summary fields",
      "difficulty": "hard",
      "source": "Object Manager and Lightning App Builder: Object relationships; roll-up summary fields; converting lookup to master-detail"
    },
    {
      "stem": "When a sales rep converts a qualified lead in Salesforce, which THREE types of records can be created from the lead conversion? Choose THREE.",
      "options": [
        "Case",
        "Account",
        "Contact",
        "Opportunity"
      ],
      "answer": "BCD",
      "explanation": "Converting a lead creates an account and a contact, or links the lead to existing ones, and can also create an opportunity, which the user can choose to skip. Values from lead fields copy into the mapped fields on those records. Cases are not part of lead conversion.",
      "topic": "Sales and Marketing Applications",
      "subtopic": "Lead conversion",
      "difficulty": "easy",
      "source": "Sales and Marketing Applications: Lead management — converting leads and lead field mapping"
    },
    {
      "stem": "A sales rep tries to add the product 'Premium Support' to an opportunity, but the product does not appear in the list of products to choose from. The product record itself is active. What is the most likely cause?",
      "options": [
        "The product has no active entry in the opportunity's price book",
        "The opportunity has not yet reached the Closed Won stage",
        "The product record has no value in the Product Family field",
        "The opportunity does not have a synced quote attached to it"
      ],
      "answer": "A",
      "explanation": "Products are added to an opportunity through price book entries. Only products with an active entry in the price book chosen on that opportunity appear for selection, so an active product with no entry, or an inactive one, in that price book is not listed. Product Family, opportunity stage and quotes do not affect whether a product can be selected.",
      "topic": "Sales and Marketing Applications",
      "subtopic": "Products and price books",
      "difficulty": "medium",
      "source": "Sales and Marketing Applications: Products, price books and price book entries on opportunities"
    },
    {
      "stem": "Customers submit cases through a Web-to-Case form on Universal Containers' website. Support wants each customer to automatically receive an email confirming that their case was received, using a different email template depending on the case's Product field. What should the administrator configure?",
      "options": [
        "A case escalation rule with an email notification",
        "A case assignment rule that routes to a queue",
        "A case auto-response rule with rule entries",
        "A separate support process for each product"
      ],
      "answer": "C",
      "explanation": "Case auto-response rules send an automatic email reply to the person who submitted a case through Web-to-Case or Email-to-Case. Rule entries are checked in order, and the first one that matches picks the email template, so each product can get its own message. Assignment rules route cases to users or queues, and escalation rules act on cases that are not resolved in time.",
      "topic": "Service and Support Applications",
      "subtopic": "Case auto-response rules",
      "difficulty": "easy",
      "source": "Service and Support Applications: Case management — auto-response rules for Web-to-Case and Email-to-Case"
    },
    {
      "stem": "Support managers at Universal Containers want new cases to be pushed automatically to agents who are online and have available capacity, instead of agents picking cases from queues themselves. Which feature should the administrator implement?",
      "options": [
        "Case escalation rules",
        "Omni-Channel routing",
        "Case teams with roles",
        "Case assignment rules"
      ],
      "answer": "B",
      "explanation": "Omni-Channel routes work items such as cases to agents based on their presence status, their capacity and, optionally, their skills, and pushes the work to the agent instead of waiting for it to be picked. Case assignment rules assign records based on their field values but do not check whether an agent is online or how much work they already have. Escalation rules and case teams do not distribute incoming work.",
      "topic": "Service and Support Applications",
      "subtopic": "Omni-Channel",
      "difficulty": "medium",
      "source": "Service and Support Applications: Omni-Channel — routing configurations, presence statuses and capacity"
    },
    {
      "stem": "Sales reps at Universal Containers often hold one meeting with several contacts from the same customer. They want to log a single event related to all of those contacts, instead of creating a separate event for each contact. What should the administrator enable?",
      "options": [
        "Activity reminders in Activity Settings",
        "Enhanced Email for the organization",
        "Public calendars for the sales team",
        "Shared Activities in Activity Settings"
      ],
      "answer": "D",
      "explanation": "Shared Activities lets users relate one task or event to several contacts, up to 50, and the activity then shows up on each of those contacts. Without it, an activity's Name field can point to only one contact or lead. Once Shared Activities is turned on it cannot be turned off, so plan for it before enabling.",
      "topic": "Productivity and Collaboration",
      "subtopic": "Activity management",
      "difficulty": "medium",
      "source": "Productivity and Collaboration: Activity management — Shared Activities"
    },
    {
      "stem": "An administrator found a managed package on AppExchange that might meet a business need. Before rolling it out, the administrator wants to see how it interacts with the org's existing customizations without affecting production users or data. What should the administrator do first?",
      "options": [
        "Install the package in a sandbox and test it there",
        "Install the package in production for admins only",
        "Install the package in production for all users",
        "Ask the vendor to deploy it using a change set"
      ],
      "answer": "A",
      "explanation": "Installing in a sandbox lets you test the package against a copy of your org's setup before anything touches production. An admins-only install still adds the package's objects, components and any automation to the live org. Managed packages are installed from AppExchange or an install link, and cannot be moved with change sets.",
      "topic": "Productivity and Collaboration",
      "subtopic": "AppExchange",
      "difficulty": "medium",
      "source": "Productivity and Collaboration: AppExchange — evaluating and installing packages; sandbox testing"
    },
    {
      "stem": "An administrator must import 200,000 historical Opportunity records from a legacy system into Salesforce. Which tool should the administrator use?",
      "options": [
        "Data Import Wizard",
        "Data Loader",
        "Data Export Service",
        "Mass Transfer Records"
      ],
      "answer": "B",
      "explanation": "Data Import Wizard handles up to 50,000 records at a time and supports only certain objects, such as accounts, contacts, leads, solutions, campaign members and custom objects, so it cannot import opportunities. Data Loader is a client application that uses the API, supports most standard and custom objects, and can load up to 5 million records. Data Export Service only exports data, and Mass Transfer Records only changes who owns existing records.",
      "topic": "Data and Analytics Management",
      "subtopic": "Data import tools",
      "difficulty": "easy",
      "source": "Data and Analytics Management: Data import options — Data Import Wizard vs Data Loader"
    },
    {
      "stem": "A sales director wants a single report that lists every account, including accounts that have no opportunities, together with each account's opportunities where they exist. Which approach meets this requirement?",
      "options": [
        "Run a standard Accounts report with a cross filter of Accounts without Opportunities",
        "Run a standard Opportunities report and group the rows by the Account Name field",
        "Build a custom report type with Accounts as primary and Opportunities as optional",
        "Run a standard Accounts report and add a bucket field based on the Account Type"
      ],
      "answer": "C",
      "explanation": "The report type decides which records a report can return. A custom report type with Accounts as object A and Opportunities as object B, set to 'A records may or may not have related B records', returns every account and shows opportunity details where they exist, like an outer join. A cross filter for accounts without opportunities would show only the accounts that have none, and an opportunity report includes only accounts that have opportunities.",
      "topic": "Data and Analytics Management",
      "subtopic": "Custom report types",
      "difficulty": "medium",
      "source": "Data and Analytics Management: Custom report types — defining object relationships"
    },
    {
      "stem": "Universal Containers wants to reduce duplicate lead records using Salesforce duplicate management. Which TWO statements about matching rules and duplicate rules are true? Choose TWO.",
      "options": [
        "A duplicate rule uses a matching rule to identify potential duplicates",
        "A matching rule automatically merges duplicates as soon as it finds them",
        "Duplicate rules run only when a record is created, never when edited",
        "A duplicate rule can block the save or allow it with an alert to the user"
      ],
      "answer": "AD",
      "explanation": "Duplicate management has two parts. Matching rules define how records are compared (which fields, and exact or fuzzy matching), and duplicate rules decide what happens when a matching rule finds potential duplicates. Duplicate rule actions are set separately for create and for edit, either Allow (optionally with an alert and a report) or Block. Neither rule merges records automatically; merging is a separate step.",
      "topic": "Data and Analytics Management",
      "subtopic": "Duplicate management",
      "difficulty": "hard",
      "source": "Data and Analytics Management: Data quality — matching rules and duplicate rules"
    },
    {
      "stem": "Universal Containers needs new declarative automation that updates related records whenever an account's status changes. Which tool does Salesforce recommend for building new declarative automation like this?",
      "options": [
        "Workflow Rules",
        "Process Builder",
        "Apex triggers",
        "Flow Builder"
      ],
      "answer": "D",
      "explanation": "Flow Builder is Salesforce's recommended tool for declarative automation. Workflow Rules and Process Builder have been retired, and Salesforce provides the Migrate to Flow tool to move existing automation into flows. A record-triggered flow can update related records when a field changes, and Apex triggers are code rather than declarative automation.",
      "topic": "Automation",
      "subtopic": "Choosing an automation tool",
      "difficulty": "easy",
      "source": "Automation: Flow Builder and record-triggered flows; Workflow Rule and Process Builder retirement"
    },
    {
      "stem": "When a sales rep enters a Discount greater than 20% on an opportunity, the rep's manager must approve or reject it, and the rep must not be able to edit the opportunity while the decision is pending. What should the administrator use?",
      "options": [
        "An approval process with entry criteria on Discount",
        "A validation rule that checks the Discount field value",
        "A before-save flow that resets the Discount field",
        "A sharing rule that grants the manager edit access"
      ],
      "answer": "A",
      "explanation": "An approval process sends a record that meets its entry criteria to chosen approvers, such as the submitter's manager, and locks the record once it is submitted, so only approvers and administrators can edit it until a decision is made. Approval and rejection actions can then update fields or send emails. A validation rule can only block a save, and neither a flow nor a sharing rule gives you an approve or reject step with record locking.",
      "topic": "Automation",
      "subtopic": "Approval processes",
      "difficulty": "medium",
      "source": "Automation: Approval processes — entry criteria, approvers and record locking"
    },
    {
      "stem": "An administrator is building a record-triggered flow on Case that only needs to set the value of one field on the same Case record that triggered the flow. The flow must run with the best possible performance. How should the administrator configure the flow?",
      "options": [
        "Optimize for Actions and Related Records and add an Update Records element",
        "Run the field update on an asynchronous path after the record is saved",
        "Optimize for Fast Field Updates and assign the value to the triggering record",
        "Launch a screen flow from a quick action that updates the field on the case"
      ],
      "answer": "C",
      "explanation": "A before-save flow (Optimize for Fast Field Updates) runs before the record is written to the database, so changes to the triggering record's fields are saved as part of the original save with no extra database update. Salesforce documents this as much faster than an after-save flow. An after-save flow (Actions and Related Records) or an asynchronous path needs a separate update, which costs more and can trigger automation again. Before-save flows can only change the triggering record, which is exactly what this flow needs.",
      "topic": "Automation",
      "subtopic": "Record-triggered flows",
      "difficulty": "hard",
      "source": "Automation: Record-triggered flows — before-save (Fast Field Updates) vs after-save (Actions and Related Records)"
    },
    {
      "stem": "An administrator is configuring an Agentforce agent for customer service. The agent must handle order-status questions using a specific set of instructions and only the actions relevant to orders. In Agentforce, which component groups the classification description, scope, instructions and actions for this job?",
      "options": [
        "A prompt template",
        "A topic",
        "An agent action",
        "A Data Cloud data stream"
      ],
      "answer": "B",
      "explanation": "An Agentforce agent is organized into topics. Each topic describes one kind of job: a classification description the reasoning engine uses to pick the topic, a scope, and instructions. Each topic also holds the actions the agent may use for that job. Actions and prompt templates are building blocks inside a topic and do not define the job themselves.",
      "topic": "Agentforce",
      "subtopic": "Topics and actions",
      "difficulty": "medium",
      "source": "Agentforce: Agent Builder — agent topics, instructions and actions"
    },
    {
      "stem": "Universal Containers' security team asks how the Einstein Trust Layer protects company data when Agentforce and other generative AI features send prompts to a large language model. Which TWO capabilities are part of the Einstein Trust Layer? Choose TWO.",
      "options": [
        "Encrypting stored record data at rest using customer-managed keys",
        "Masking sensitive data such as PII in prompts before they are sent",
        "Zero data retention by third-party LLM providers after a response",
        "Using the org's prompts to train the provider's public LLM models"
      ],
      "answer": "BC",
      "explanation": "The Einstein Trust Layer sits between Salesforce apps and the language models they call. Its features include secure data retrieval and dynamic grounding, masking of sensitive data before prompts leave Salesforce, zero data retention agreements so external providers neither keep prompts and responses nor train on them, toxicity detection, and an audit trail. Encrypting stored data at rest is done by Shield Platform Encryption, a separate product.",
      "topic": "Agentforce",
      "subtopic": "Einstein Trust Layer",
      "difficulty": "medium",
      "source": "Agentforce: Einstein Trust Layer — data masking, zero data retention, toxicity detection and audit trail"
    }
  ]
}
```
