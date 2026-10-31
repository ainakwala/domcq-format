```json
{
  "format": "domcq/1",
  "exam": "crm-platform-admin",
  "set": "Salesforce Certified Platform Administrator practice – Core Domains Set 1",
  "questions": [
    {
      "stem": "Universal Containers has set the organization-wide default for Opportunity to Private, and Grant Access Using Hierarchies is enabled. Sales managers need to view the opportunities owned by the sales reps who report to them, but not opportunities owned by other teams. What should the administrator do?",
      "options": [
        "Give sales managers a permission set with View All on Opportunity",
        "Change the Opportunity organization-wide default to Public Read Only",
        "Place each manager's role above their reps' roles in the role hierarchy",
        "Assign sales managers a profile with the Modify All Data permission"
      ],
      "answer": "C",
      "explanation": "With Grant Access Using Hierarchies enabled, users higher in the role hierarchy automatically get the same access as the record owners below them. Placing each manager's role above their reps' roles gives managers access to their team's opportunities only. View All, Modify All Data and a Public Read Only default would all expose every opportunity in the org, which is more access than the requirement allows.",
      "topic": "Configuration and Setup",
      "subtopic": "Role hierarchy and record access",
      "difficulty": "medium",
      "source": "Configuration and Setup – security and access: organization-wide defaults and the role hierarchy"
    },
    {
      "stem": "Users with the Support Agent profile must not be able to log in to Salesforce at all unless they are connecting from the corporate network range 203.0.113.0 to 203.0.113.255. What should the administrator configure?",
      "options": [
        "Login IP ranges on the Support Agent profile",
        "Trusted IP ranges in the org-wide Network Access settings",
        "The session setting that locks sessions to the originating IP address",
        "Login hours on the Support Agent profile"
      ],
      "answer": "A",
      "explanation": "Login IP ranges set on a profile block any login attempt by users with that profile from addresses outside the range. Trusted IP ranges in Network Access do not block anyone: they only define addresses from which users can log in without an identity verification challenge, so users elsewhere can still log in after verifying. Locking sessions to the originating IP protects against session hijacking, and login hours restrict when users can log in, not from where.",
      "topic": "Configuration and Setup",
      "subtopic": "Login access restrictions",
      "difficulty": "hard",
      "source": "Configuration and Setup – user setup and security: profile login IP ranges versus Network Access trusted IP ranges"
    },
    {
      "stem": "An administrator notices that a validation rule on the Account object was deactivated last week. They need to find out which administrator made the change and when it happened. Which feature should they use?",
      "options": [
        "Field history tracking",
        "Login history",
        "Debug logs",
        "Setup Audit Trail"
      ],
      "answer": "D",
      "explanation": "Setup Audit Trail records configuration changes made in Setup, showing the date, the user who made the change and what was changed, for the last 180 days. Field history tracking records changes to data in record fields, not to metadata such as validation rules. Login history shows login attempts, and debug logs capture transaction execution details.",
      "topic": "Configuration and Setup",
      "subtopic": "Monitoring setup changes",
      "difficulty": "easy",
      "source": "Configuration and Setup – org monitoring: View Setup Audit Trail"
    },
    {
      "stem": "A company has a custom Inspection object whose records must always belong to a Property record. Inspections must be deleted automatically when their Property is deleted, and the Property must show the number of related inspections in a roll-up summary field. Which field should be created on the Inspection object?",
      "options": [
        "A lookup relationship to Property",
        "A master-detail relationship to Property",
        "A hierarchical relationship to Property",
        "An external lookup relationship to Property"
      ],
      "answer": "B",
      "explanation": "A master-detail relationship makes the detail record depend on its master: the relationship field is required, deleting the master deletes its details, and the master can have roll-up summary fields such as COUNT. A lookup relationship is looser and does not support roll-up summary fields on custom objects. Hierarchical relationships exist only on the User object, and external lookups relate records to external objects.",
      "topic": "Object Manager and Lightning App Builder",
      "subtopic": "Relationship types",
      "difficulty": "easy",
      "source": "Object Manager and Lightning App Builder – relationship fields: lookup versus master-detail, roll-up summary fields"
    },
    {
      "stem": "An administrator needs to convert an existing lookup relationship from the custom Expense object to the custom Trip object into a master-detail relationship. The org already contains 5,000 Expense records. What must be true before the conversion can be saved?",
      "options": [
        "The Trip object must have no existing roll-up summary fields",
        "The Expense organization-wide default must be Public Read/Write",
        "Every existing Expense record must have a value in the lookup field",
        "The Expense object must have no other relationship fields"
      ],
      "answer": "C",
      "explanation": "A master-detail field is required on every detail record, so Salesforce only allows a lookup to be converted when no existing record has a blank value in that field. The administrator would first populate any blank values, for example with Data Loader. After conversion, the Expense sharing setting becomes Controlled by Parent automatically, and the object may still have other lookup fields.",
      "topic": "Object Manager and Lightning App Builder",
      "subtopic": "Converting relationship fields",
      "difficulty": "hard",
      "source": "Object Manager and Lightning App Builder – relationship fields: considerations for converting a lookup to master-detail"
    },
    {
      "stem": "On the Opportunity Lightning record page, a sales director wants a Rich Text component containing renewal instructions to appear only when the opportunity's Stage is Closed Won. The administrator must do this without creating new record types or page layouts. What should the administrator do in Lightning App Builder?",
      "options": [
        "Add a component visibility filter on the Rich Text component based on Stage",
        "Create a Closed Won record type and assign it a separate record page",
        "Add a validation rule that hides the component unless Stage is Closed Won",
        "Activate the record page as the app default for Closed Won opportunities"
      ],
      "answer": "A",
      "explanation": "Lightning App Builder lets an administrator set component visibility filters so a component appears only when conditions are met, such as a record field value, the user's permissions or the form factor. A filter on Stage equals Closed Won shows the component exactly when needed. Validation rules enforce data quality and do not control the user interface, and page activation assigns pages by app, record type and profile, not by field value.",
      "topic": "Object Manager and Lightning App Builder",
      "subtopic": "Component visibility",
      "difficulty": "medium",
      "source": "Object Manager and Lightning App Builder – Lightning record pages: dynamic component visibility filters"
    },
    {
      "stem": "Universal Containers has two divisions that sell through opportunities. The Hardware division uses six sales stages and the Services division uses four different stages. Each division's reps should see only their own division's values in the Stage picklist. What should the administrator configure?",
      "options": [
        "A global value set containing all ten stages shared by both divisions",
        "Two lead processes, each assigned to one division's profile",
        "A validation rule that blocks the other division's stages",
        "Two sales processes, each assigned to its own opportunity record type"
      ],
      "answer": "D",
      "explanation": "A sales process defines which Stage values are available, and it is applied through an opportunity record type that is assigned to the right profiles. Creating one sales process and record type per division shows each team only its own stages. Lead processes control Lead Status values, and a validation rule would still display every stage in the picklist.",
      "topic": "Sales and Marketing Applications",
      "subtopic": "Sales processes and record types",
      "difficulty": "medium",
      "source": "Sales and Marketing Applications – opportunity management: sales processes and opportunity record types"
    },
    {
      "stem": "A sales rep converts a qualified lead in Lightning Experience. Which records can be created as part of the lead conversion? Choose THREE.",
      "options": [
        "Account",
        "Contact",
        "Case",
        "Opportunity"
      ],
      "answer": "ABD",
      "explanation": "Lead conversion creates a new account and contact, or matches the lead to existing ones, and can optionally create an opportunity at the same time. Lead field mappings let custom lead field values carry over to these records. Cases are not part of lead conversion; they belong to the service process.",
      "topic": "Sales and Marketing Applications",
      "subtopic": "Lead conversion",
      "difficulty": "easy",
      "source": "Sales and Marketing Applications – lead management: converting leads and lead field mapping"
    },
    {
      "stem": "Customers submit cases through a Web-to-Case form on the company website. The support manager wants each customer to automatically receive a confirmation email that the case was received, using a different email template depending on the product selected. What should the administrator configure?",
      "options": [
        "Case assignment rules",
        "Case auto-response rules",
        "Case escalation rules",
        "Support processes"
      ],
      "answer": "B",
      "explanation": "Case auto-response rules send an email template to the person who submitted a case through Web-to-Case or Email-to-Case, and rule entries with criteria let different templates be used for different products. Assignment rules decide who owns a new case, and escalation rules act on cases that are not resolved in time. Support processes define which Status values are available for cases.",
      "topic": "Service and Support Applications",
      "subtopic": "Auto-response rules",
      "difficulty": "easy",
      "source": "Service and Support Applications – case management: Web-to-Case and auto-response rules"
    },
    {
      "stem": "High-priority cases that are still open four business hours after they were created must be reassigned to the Tier 2 queue, and the queue's manager must be notified by email. Which feature is designed for this requirement?",
      "options": [
        "A case assignment rule with a time-based criterion",
        "An Omni-Channel routing configuration with a push timeout",
        "A case escalation rule with an escalation action",
        "A Web-to-Case setting with a default case owner"
      ],
      "answer": "C",
      "explanation": "Case escalation rules evaluate cases against criteria and, after a set age that can respect business hours, run escalation actions that reassign the case to a user or queue and send notifications. Assignment rules only run when a case is created or edited and have no time-based escalation. An Omni-Channel push timeout reroutes work an agent does not accept within seconds; it does not track case age.",
      "topic": "Service and Support Applications",
      "subtopic": "Escalation rules",
      "difficulty": "medium",
      "source": "Service and Support Applications – case management: escalation rules, escalation actions and business hours"
    },
    {
      "stem": "Sales reps want to log a call against an account from the action bar in the Salesforce mobile app. The Log a Call action exists in the org, but it does not appear on account records in the mobile app. The account record page does not use dynamic actions. Where should the administrator add the action?",
      "options": [
        "The Salesforce Mobile and Lightning Experience Actions section of the account page layout",
        "The Quick Actions in the Salesforce Classic Publisher section of the account page layout",
        "The utility bar of the Sales app in App Manager",
        "The Salesforce mobile navigation menu in Setup"
      ],
      "answer": "A",
      "explanation": "In the mobile app and Lightning Experience, the actions shown on a record come from the Salesforce Mobile and Lightning Experience Actions section of the object's page layout, unless dynamic actions are used. The Classic Publisher section affects only Salesforce Classic. The utility bar is a desktop app feature, and the mobile navigation menu controls the items in the app's navigation, not the actions on a record.",
      "topic": "Productivity and Collaboration",
      "subtopic": "Actions in the Salesforce mobile app",
      "difficulty": "medium",
      "source": "Productivity and Collaboration – Salesforce mobile app: quick actions and page layout action sections"
    },
    {
      "stem": "A sales manager wants to see open opportunities as cards arranged in columns by stage, and to move an opportunity to a new stage by dragging its card to another column. Which feature should the manager use?",
      "options": [
        "A matrix report grouped by Stage",
        "The Path component on the opportunity record page",
        "A dashboard with a stacked bar chart",
        "The Kanban view of an opportunity list view"
      ],
      "answer": "D",
      "explanation": "The Kanban view displays list view records as cards grouped into columns by a picklist field, such as Stage, and dragging a card to another column updates that field on the record. Path shows the stages of a single record and guidance for each stage. Reports and dashboards display data but cannot be used to edit records by dragging.",
      "topic": "Productivity and Collaboration",
      "subtopic": "List views and Kanban",
      "difficulty": "easy",
      "source": "Productivity and Collaboration – Lightning Experience productivity: list views and Kanban view"
    },
    {
      "stem": "An administrator must load 120,000 new contact records from a CSV file in a single job. Which tool should the administrator use?",
      "options": [
        "Data Import Wizard",
        "Data Loader",
        "Data Export Service",
        "Mass Transfer Records"
      ],
      "answer": "B",
      "explanation": "Data Loader is a client application that can insert, update, upsert, delete and export up to five million records at a time. The Data Import Wizard is limited to 50,000 records per import, so it cannot load 120,000 records in one job. The Data Export Service produces backup files, and Mass Transfer Records changes record ownership.",
      "topic": "Data and Analytics Management",
      "subtopic": "Data import tools",
      "difficulty": "easy",
      "source": "Data and Analytics Management – data management: Data Import Wizard versus Data Loader"
    },
    {
      "stem": "A sales operations manager wants an account report that groups accounts into Small, Medium and Large categories based on ranges of Annual Revenue. The categories are needed only for this report, and no new fields may be added to the Account object. What should the administrator use?",
      "options": [
        "A bucket column in the report",
        "A custom summary formula in the report",
        "A cross filter in the report",
        "A conditional highlighting rule in the report"
      ],
      "answer": "A",
      "explanation": "A bucket column lets a report categorize records into named groups, such as ranges of a number field, without creating a field on the object. The bucket can then be used to group, sort and filter the report. Custom summary formulas calculate values at grouping levels, cross filters include or exclude records based on related objects, and conditional highlighting only colors summary values.",
      "topic": "Data and Analytics Management",
      "subtopic": "Bucket columns",
      "difficulty": "medium",
      "source": "Data and Analytics Management – reports: bucket fields and report customization"
    },
    {
      "stem": "The VP of Sales wants one dashboard that every sales rep can open, where each rep sees only the opportunity data they have access to in Salesforce. What should the administrator configure?",
      "options": [
        "A dashboard with the running user set to the VP of Sales",
        "A separate dashboard for each rep, saved in a private folder",
        "A dynamic dashboard that runs as the logged-in user",
        "A dashboard filter on Opportunity Owner with each rep's name"
      ],
      "answer": "C",
      "explanation": "A dynamic dashboard runs as the person viewing it, so each user sees data according to their own sharing and field-level access. A dashboard with a fixed running user shows that user's data to everyone who can open it, which would expose the VP's view to all reps. A dashboard filter is a viewing convenience that any viewer can change, so it does not restrict data.",
      "topic": "Data and Analytics Management",
      "subtopic": "Dynamic dashboards",
      "difficulty": "medium",
      "source": "Data and Analytics Management – dashboards: running user and dynamic dashboards"
    },
    {
      "stem": "Whenever a case is created or updated, a custom Priority Score number field on the same case must be set based on the case's Origin and Type. The administrator wants the automation to run as fast as possible without an extra database update. Which automation should the administrator build?",
      "options": [
        "A record-triggered flow optimized for Actions and Related Records",
        "A schedule-triggered flow that runs every hour",
        "An autolaunched flow invoked from a Process Builder process",
        "A record-triggered flow optimized for Fast Field Updates"
      ],
      "answer": "D",
      "explanation": "A record-triggered flow optimized for Fast Field Updates runs before the record is saved, so it can change fields on the triggering record without an additional save, which makes it much faster than after-save automation. The Actions and Related Records option runs after the save and is meant for updating other records or running actions. Process Builder is retired for new automation, and an hourly schedule-triggered flow would not update the field immediately.",
      "topic": "Automation",
      "subtopic": "Before-save record-triggered flows",
      "difficulty": "hard",
      "source": "Automation – Flow Builder: record-triggered flows, Fast Field Updates versus Actions and Related Records"
    },
    {
      "stem": "When a sales rep sets an opportunity's Discount Percent above 20%, the opportunity must be locked and sent to the rep's manager, who must approve or reject the discount. Which feature should the administrator use?",
      "options": [
        "A validation rule that requires the manager's name",
        "An approval process with the manager as the approver",
        "An escalation rule that notifies the manager",
        "A sharing rule that grants the manager edit access"
      ],
      "answer": "B",
      "explanation": "An approval process defines entry criteria, such as a discount above 20%, routes the record to an approver such as the submitter's manager, and locks the record while it is pending. It can also run actions when the record is submitted, approved or rejected. A validation rule can only block a save, and sharing rules and escalation rules do not provide an approve or reject step.",
      "topic": "Automation",
      "subtopic": "Approval processes",
      "difficulty": "medium",
      "source": "Automation – approval processes: entry criteria, approvers and record locking"
    },
    {
      "stem": "An administrator needs to send an email to each contract's owner 30 days before the contract's End Date, without anyone having to start the process manually. Which approach should the administrator use?",
      "options": [
        "A record-triggered flow with a scheduled path based on End Date",
        "A screen flow launched from the contract record page",
        "A Lightning email template with a merge field for End Date",
        "An outbound message sent when the contract is activated"
      ],
      "answer": "A",
      "explanation": "A scheduled path in a record-triggered flow runs its actions at a time relative to a date field on the record, such as 30 days before End Date, so the reminder is sent automatically. A screen flow needs a user to launch it, and an email template only defines the content of an email, not when it is sent. Outbound messages send data to an external endpoint rather than emailing users.",
      "topic": "Automation",
      "subtopic": "Scheduled paths",
      "difficulty": "medium",
      "source": "Automation – Flow Builder: record-triggered flows with scheduled paths"
    },
    {
      "stem": "An administrator is configuring an Agentforce agent in Agentforce Builder. Which element groups related instructions and actions to define a job the agent can do, such as handling order inquiries, and is used by the reasoning engine to decide how to respond to a user's request?",
      "options": [
        "A prompt template",
        "A channel",
        "A topic",
        "A data library"
      ],
      "answer": "C",
      "explanation": "A topic defines a job for the agent through a classification description, a scope, instructions and the actions it may use. When a user sends a request, the reasoning engine matches it to the most relevant topic and then chooses from that topic's actions. Prompt templates are used by individual actions, channels are where the agent is deployed, and data libraries supply knowledge for grounding answers.",
      "topic": "Agentforce",
      "subtopic": "Topics and actions",
      "difficulty": "medium",
      "source": "Agentforce – agent configuration: topics, instructions and actions in Agentforce Builder"
    },
    {
      "stem": "A company is rolling out Agentforce and is concerned about exposing customer data to the third-party large language model that generates responses. Which Einstein Trust Layer capabilities address this concern? Choose TWO.",
      "options": [
        "Encryption of CRM records at rest with a customer-managed key",
        "Masking of sensitive data in the prompt before it is sent to the model",
        "Fine-tuning of the external model on the org's prompt history",
        "Zero data retention agreements with the model provider"
      ],
      "answer": "BD",
      "explanation": "The Einstein Trust Layer can mask sensitive data, such as personal information, by replacing it with placeholders before the prompt reaches the model, and then restore the values in the response. Zero data retention means the external model provider does not store prompts or responses or use them for training. Encryption at rest with a customer-managed key is part of Shield Platform Encryption, not the Trust Layer, and training a provider's model on prompts would be the opposite of zero retention.",
      "topic": "Agentforce",
      "subtopic": "Einstein Trust Layer",
      "difficulty": "hard",
      "source": "Agentforce – Einstein Trust Layer: data masking and zero data retention"
    }
  ]
}
```
