```json
{
  "format": "domcq/1",
  "exam": "crm-platform-admin",
  "set": "Salesforce Certified Platform Administrator practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "At Universal Containers, an administrator wants users to see only the Account records they own or that have been explicitly shared with them. Which setting establishes this baseline level of record access?",
      "options": [
        "Role hierarchy",
        "Profile object permissions",
        "Organization-wide defaults",
        "Criteria-based sharing rules"
      ],
      "answer": "C",
      "explanation": "Organization-wide defaults set the most restrictive baseline access users have to records they do not own. Setting Account to Private means users see only their own records, and access is then opened up with the role hierarchy, sharing rules or manual sharing. Object permissions control what a user can do with an object, not which individual records they can see.",
      "rationales": {
        "A": "The role hierarchy only opens access upward to managers; it does not set the baseline for everyone.",
        "B": "Object permissions decide whether a user can read or edit the object at all, not which records are visible.",
        "C": "Organization-wide defaults define the baseline record access, such as Private, for each object.",
        "D": "Sharing rules extend access beyond the baseline; they cannot restrict it."
      },
      "topic": "Configuration and Setup",
      "subtopic": "Sharing and record access",
      "difficulty": "easy",
      "source": "Configuration and Setup: organization-wide defaults and sharing settings (Trailhead: Data Security)"
    },
    {
      "stem": "An administrator must make sure that users assigned the Call Center profile can log in only from the company's office network, and are denied access completely from any other IP address. What should the administrator configure?",
      "options": [
        "Login IP ranges on the Call Center profile",
        "Trusted IP ranges in Network Access settings",
        "Login hours on the Call Center profile",
        "Session security level required at login"
      ],
      "answer": "A",
      "explanation": "Login IP ranges set on a profile block users with that profile from logging in from any address outside the listed ranges. Trusted IP ranges in Network Access work differently: users from those addresses skip the identity verification challenge, while users from other addresses can still log in after verifying. Only the profile setting enforces a hard restriction.",
      "rationales": {
        "A": "Profile login IP ranges deny login from any IP address outside the defined ranges.",
        "B": "Network Access trusted ranges only let users skip identity verification; other IPs can still log in.",
        "C": "Login hours restrict when users can log in, not where they log in from.",
        "D": "Session security level controls access to certain features by authentication strength, not by IP address."
      },
      "topic": "Configuration and Setup",
      "subtopic": "User management and login access",
      "difficulty": "medium",
      "source": "Configuration and Setup: user management – profile login IP ranges vs. Network Access trusted IP ranges"
    },
    {
      "stem": "A permission set group called Sales Operations includes a permission set that grants Delete on Accounts. That same permission set is also included in other permission set groups. The administrator must remove Delete on Accounts for users who get it through Sales Operations, without changing the shared permission set. What should the administrator do?",
      "options": [
        "Clone the users' profile and remove Delete on Accounts from it",
        "Create a restriction rule on Account for these users",
        "Assign the users another permission set with Delete unchecked",
        "Add a muting permission set to the Sales Operations group"
      ],
      "answer": "D",
      "explanation": "A muting permission set lives inside a permission set group and turns off selected permissions that the group's other permission sets grant. It affects only that group, so the shared permission set and the other groups that use it are unchanged. Ordinary permission sets and profiles are additive, so they can never take away a permission granted elsewhere.",
      "rationales": {
        "A": "Profile changes cannot revoke a permission that a permission set already grants, because permissions are additive.",
        "B": "Restriction rules limit which records users can see, not object permissions such as Delete.",
        "C": "Permission sets only add permissions; an unchecked box in another set does not remove one.",
        "D": "A muting permission set disables chosen permissions granted within that specific permission set group."
      },
      "topic": "Configuration and Setup",
      "subtopic": "Permission set groups",
      "difficulty": "hard",
      "source": "Configuration and Setup: user access – permission set groups and muting permission sets"
    },
    {
      "stem": "An administrator is relating a custom Inspection object to a custom Property object. Inspections must be deleted automatically when their Property is deleted, and each Property record needs a roll-up summary field that counts its inspections. Which field type should be created on Inspection?",
      "options": [
        "Lookup relationship",
        "Master-detail relationship",
        "External lookup relationship",
        "Hierarchical relationship"
      ],
      "answer": "B",
      "explanation": "In a master-detail relationship the detail records are deleted when the master record is deleted, and the master object can have roll-up summary fields that count or aggregate its detail records. A lookup relationship is loosely coupled and does not support standard roll-up summary fields. Hierarchical relationships are only available on the User object.",
      "rationales": {
        "A": "A lookup relationship does not support standard roll-up summary fields on the parent.",
        "B": "Master-detail gives cascade delete and lets the master object have roll-up summary fields.",
        "C": "External lookups link to external objects whose data is stored outside Salesforce.",
        "D": "Hierarchical relationships exist only on the User object, for example to link a user to a manager."
      },
      "topic": "Object Manager and Lightning App Builder",
      "subtopic": "Relationship fields",
      "difficulty": "easy",
      "source": "Object Manager: object relationships – master-detail vs. lookup, roll-up summary fields"
    },
    {
      "stem": "On the Opportunity Lightning record page, a sales director wants a Rich Text component with closing instructions to appear only when the opportunity's Stage is Negotiation/Review. How should the administrator meet this requirement with the least effort?",
      "options": [
        "Create a record type for this stage and assign it a new layout",
        "Add the instructions as help text on the Stage field",
        "Add a component visibility filter on Stage in Lightning App Builder",
        "Create a validation rule that shows the instructions on Stage change"
      ],
      "answer": "C",
      "explanation": "Lightning App Builder lets an administrator set component visibility filters, so a component appears only when record field values meet the defined criteria. A filter of Stage equals Negotiation/Review shows the Rich Text component exactly when needed, with no code or extra record types. This is the standard way to make Lightning pages dynamic.",
      "rationales": {
        "A": "Record types are not tied to changing stage values, so this adds effort and does not show content dynamically.",
        "B": "Field help text appears only on hover and is shown regardless of the Stage value.",
        "C": "Component visibility filters show a component only when record field values match the criteria.",
        "D": "Validation rules block saves with an error message; they do not display guidance on the page."
      },
      "topic": "Object Manager and Lightning App Builder",
      "subtopic": "Dynamic Lightning pages",
      "difficulty": "medium",
      "source": "Lightning App Builder: Lightning record pages – component visibility filters"
    },
    {
      "stem": "A sales rep cannot see the Discount Percent field on Opportunity records, while the rep's manager can see it on the same records. Both use the same Lightning record page, which shows fields through the standard Record Detail component. Which TWO could explain this? Choose TWO.",
      "options": [
        "Field-level security hides the field from the rep's profile and permission sets",
        "The Opportunity organization-wide default is set to Private",
        "The rep is below the manager in the role hierarchy",
        "The rep's profile is assigned a page layout that does not include the field"
      ],
      "answer": "AD",
      "explanation": "Whether a user sees a particular field depends on field-level security and, for the Record Detail component, on the page layout assigned to the user's profile and record type. Organization-wide defaults and the role hierarchy control which records a user can access, not which fields appear on records the user can already open. Because the rep can see the records, the cause must be at the field level.",
      "rationales": {
        "A": "If field-level security does not grant visibility, the field is hidden everywhere for that user.",
        "B": "Organization-wide defaults control access to records, and the rep can already see these records.",
        "C": "The role hierarchy affects record access, not the visibility of individual fields.",
        "D": "The Record Detail component shows fields from the assigned page layout, so a layout without the field hides it."
      },
      "topic": "Object Manager and Lightning App Builder",
      "subtopic": "Page layouts and field-level security",
      "difficulty": "medium",
      "source": "Object Manager: page layouts and field-level security; Trailhead: Data Security – field-level security"
    },
    {
      "stem": "A sales rep converts a qualified lead in Salesforce. Which THREE types of records can the lead conversion create? Choose THREE.",
      "options": [
        "Account",
        "Case",
        "Contact",
        "Opportunity"
      ],
      "answer": "ACD",
      "explanation": "Converting a lead turns it into an account and a contact, or links it to existing ones, and can optionally create an opportunity. The lead's field values are mapped onto these records using the lead field mappings. Cases are service records and are not part of lead conversion.",
      "rationales": {
        "A": "Lead conversion creates a new account or attaches the lead to an existing one.",
        "B": "Cases are not created by lead conversion; they belong to the service process.",
        "C": "Lead conversion creates a new contact or merges the lead into an existing contact.",
        "D": "An opportunity can optionally be created during conversion unless the rep chooses not to."
      },
      "topic": "Sales and Marketing Applications",
      "subtopic": "Lead conversion",
      "difficulty": "easy",
      "source": "Sales and Marketing Applications: lead management – lead conversion and field mapping"
    },
    {
      "stem": "An administrator created a new active product and a custom price book called Partner Pricing. When the administrator tries to add the product to Partner Pricing, the product does not appear in the list. What must the administrator do first?",
      "options": [
        "Enable quantity scheduling on the product",
        "Add the product to the Standard Price Book with a standard price",
        "Assign the product to an Opportunity record type",
        "Add the product to a sales process"
      ],
      "answer": "B",
      "explanation": "A product must have a standard price in the Standard Price Book before it can be added to any custom price book. The standard price is the reference list price, and custom price books then hold the alternative prices for particular segments such as partners. Once the standard price exists, the product can be added to Partner Pricing with its own list price.",
      "rationales": {
        "A": "Quantity scheduling controls installment quantities and is not needed to add a product to a price book.",
        "B": "A product needs a standard price in the Standard Price Book before it can go in a custom price book.",
        "C": "Products are not assigned to record types, and record types do not control price book entries.",
        "D": "Sales processes define opportunity stages; they do not contain products."
      },
      "topic": "Sales and Marketing Applications",
      "subtopic": "Products and price books",
      "difficulty": "medium",
      "source": "Sales and Marketing Applications: products, price books and the Standard Price Book"
    },
    {
      "stem": "The support team wants a case to be created automatically whenever a customer sends a message to support@company.com, with the email attached to the new case. Which feature should the administrator set up?",
      "options": [
        "Web-to-Case",
        "Case auto-response rules",
        "Case escalation rules",
        "Email-to-Case"
      ],
      "answer": "D",
      "explanation": "Email-to-Case turns messages sent to a support address into case records and keeps the email on the case so agents can reply from Salesforce. Web-to-Case does the same for submissions from a web form on the company website. Auto-response and escalation rules act on cases that already exist; they do not create them.",
      "rationales": {
        "A": "Web-to-Case creates cases from a website form, not from incoming email.",
        "B": "Auto-response rules send replies to customers about cases; they do not create cases.",
        "C": "Escalation rules reassign or flag cases that stay open too long; they do not create cases.",
        "D": "Email-to-Case creates cases from emails sent to a support address and attaches the email."
      },
      "topic": "Service and Support Applications",
      "subtopic": "Case capture channels",
      "difficulty": "easy",
      "source": "Service and Support Applications: case management – Email-to-Case and Web-to-Case"
    },
    {
      "stem": "A contact center wants new cases pushed automatically to agents in real time, based on each agent's availability status and how much work the agent is already handling. Which feature meets this requirement?",
      "options": [
        "Omni-Channel routing",
        "Case assignment rules",
        "Case queues with list views",
        "Entitlement processes"
      ],
      "answer": "A",
      "explanation": "Omni-Channel routes work items to agents according to their presence status and capacity, pushing work to the agents best able to take it. Case assignment rules only assign a case to a user or queue based on field criteria, without regard to workload or availability. Queues with list views rely on agents to pull work themselves.",
      "rationales": {
        "A": "Omni-Channel pushes work to agents based on their presence status and available capacity.",
        "B": "Assignment rules route by case field criteria and ignore agent availability and workload.",
        "C": "Queues with list views depend on agents picking cases themselves rather than pushing work.",
        "D": "Entitlement processes track service milestones and SLAs; they do not route cases to agents."
      },
      "topic": "Service and Support Applications",
      "subtopic": "Omni-Channel",
      "difficulty": "medium",
      "source": "Service and Support Applications: case routing – Omni-Channel presence and capacity"
    },
    {
      "stem": "A sales manager wants to view open opportunities as cards arranged in columns by Stage, and to move an opportunity to a new stage by dragging its card to another column. What should the manager use?",
      "options": [
        "The split view of an opportunity list view",
        "A dashboard with a funnel chart component",
        "The Kanban view of an opportunity list view",
        "Path on the Opportunity record page"
      ],
      "answer": "C",
      "explanation": "The Kanban view displays list view records as cards grouped into columns by a picklist field such as Stage. Users can drag a card to another column to update that field, which makes it useful for managing a pipeline visually. Path shows the stages of a single record, not many records at once.",
      "rationales": {
        "A": "Split view shows a list next to one open record; it has no columns for dragging cards.",
        "B": "Dashboards display summarized data and cannot be used to edit records.",
        "C": "Kanban view groups records into columns by a field and updates the field when a card is dragged.",
        "D": "Path guides one record through its stages; it does not display many records as cards."
      },
      "topic": "Productivity and Collaboration",
      "subtopic": "List views and Kanban",
      "difficulty": "easy",
      "source": "Productivity and Collaboration: Lightning Experience productivity features – list views and Kanban"
    },
    {
      "stem": "Users want a button on the Account record page that opens a short form for creating a Contact. The new contact must be linked to that account automatically, and its Lead Source must be preset to Partner Referral. What should the administrator create?",
      "options": [
        "A global Create a Record action with a custom layout",
        "An object-specific Create a Record action on Account with a predefined field value",
        "A custom URL button on the Contact object",
        "A screen flow launched from the utility bar"
      ],
      "answer": "B",
      "explanation": "An object-specific action on Account that creates a Contact automatically relates the new record to the account where the action is used. Predefined field values on the action can set Lead Source to Partner Referral, so users only fill in the remaining fields. Global create actions do not link the new record to the record they are launched from.",
      "rationales": {
        "A": "Global create actions are not tied to the current record, so the account would not be linked automatically.",
        "B": "Object-specific actions link the new record to the current account and support predefined field values.",
        "C": "A URL button on Contact would not appear on the Account page and needs fragile URL parameters.",
        "D": "A utility bar flow has no record context by default and is more effort than a quick action."
      },
      "topic": "Productivity and Collaboration",
      "subtopic": "Quick actions",
      "difficulty": "medium",
      "source": "Productivity and Collaboration: actions – object-specific vs. global actions and predefined field values"
    },
    {
      "stem": "An administrator needs to import 300,000 new Contact records from a CSV file into Salesforce. Which tool should the administrator use?",
      "options": [
        "Data Import Wizard",
        "Data Export service",
        "Mass Transfer Records tool",
        "Data Loader"
      ],
      "answer": "D",
      "explanation": "Data Loader is a client application that can insert, update, upsert, delete and export up to 5 million records at a time. The Data Import Wizard is browser-based and easier to use but is limited to 50,000 records per import. Choosing a tool by record volume and object support is a common exam theme.",
      "rationales": {
        "A": "The Data Import Wizard handles at most 50,000 records per import, so 300,000 is too many.",
        "B": "The Data Export service creates backup files of existing data; it does not import records.",
        "C": "Mass Transfer Records changes the owner of existing records; it cannot load new ones.",
        "D": "Data Loader can import up to 5 million records, so it handles 300,000 contacts."
      },
      "topic": "Data and Analytics Management",
      "subtopic": "Data import tools",
      "difficulty": "easy",
      "source": "Data and Analytics Management: importing data – Data Import Wizard vs. Data Loader"
    },
    {
      "stem": "A sales VP wants a report that lists every account together with the name and amount of each of its opportunities, and that also includes accounts with no opportunities at all. What should the administrator do?",
      "options": [
        "Create a custom report type where accounts may or may not have related opportunities",
        "Use the standard Opportunities report type and group the report by Account Name",
        "Add a bucket column on Account Name to a standard Opportunities report",
        "Use an Accounts report with a cross filter of Accounts with Opportunities"
      ],
      "answer": "A",
      "explanation": "A custom report type defines which related records a report can include, and the setting that A records may or may not have related B records produces an outer join. That lets the report show opportunity fields where they exist while still listing accounts with none. Standard opportunity-based report types only return accounts that have opportunities.",
      "rationales": {
        "A": "A may or may not report type includes accounts without opportunities while still showing opportunity fields.",
        "B": "An Opportunities report starts from opportunities, so accounts with none never appear.",
        "C": "Bucket columns group existing rows into categories; they cannot add accounts that have no opportunities.",
        "D": "A with cross filter keeps only accounts that have opportunities, which excludes the ones required."
      },
      "topic": "Data and Analytics Management",
      "subtopic": "Custom report types",
      "difficulty": "medium",
      "source": "Data and Analytics Management: reports – custom report types and object relationships"
    },
    {
      "stem": "A summary report of opportunities is grouped by Stage. The sales director wants each Stage grouping to show the percentage of the report's grand total Amount that it represents. What should the administrator add to the report?",
      "options": [
        "A row-level formula dividing each record's Amount by the report total",
        "A bucket column that sorts stages into percentage ranges",
        "A summary formula using PARENTGROUPVAL to compare each group to the grand total",
        "A cross filter restricting the report to opportunities with an Amount"
      ],
      "answer": "C",
      "explanation": "Summary formulas calculate values from report summaries, and the PARENTGROUPVAL function returns the summary value of a parent grouping or the grand total. Dividing each Stage group's sum of Amount by PARENTGROUPVAL of the sum at the grand summary level gives each group's share as a percentage. Row-level formulas work on one record at a time and cannot reference report totals.",
      "rationales": {
        "A": "Row-level formulas are calculated per record and cannot reference grouped or grand totals.",
        "B": "Bucket columns categorize values into groups; they do not calculate percentages of a total.",
        "C": "PARENTGROUPVAL in a summary formula returns the grand total, so each group can be shown as a percentage of it.",
        "D": "A cross filter changes which records are included; it does not calculate any percentage."
      },
      "topic": "Data and Analytics Management",
      "subtopic": "Report formulas",
      "difficulty": "hard",
      "source": "Data and Analytics Management: reports – summary formulas and PARENTGROUPVAL"
    },
    {
      "stem": "Opportunities with a Discount above 20% must be approved by the owner's manager before they can move forward. While approval is pending the record must be locked against edits, and the manager must be able to approve or reject from email or the Salesforce mobile app. Which tool should the administrator use?",
      "options": [
        "A validation rule that checks the Discount field",
        "An approval process",
        "A schedule-triggered flow that emails the manager",
        "An opportunity team that gives the manager access"
      ],
      "answer": "B",
      "explanation": "An approval process defines entry criteria, approvers such as the owner's manager, and actions for submission, approval and rejection. Records are locked while pending, and approvers can respond from the Approval Requests area, the mobile app or by email reply when email approval is enabled. Validation rules and scheduled flows cannot manage an approve or reject decision.",
      "rationales": {
        "A": "A validation rule can block a save but cannot route the record to a manager for a decision.",
        "B": "Approval processes route records to approvers, lock them while pending and support email and mobile responses.",
        "C": "A scheduled flow sending emails gives no built-in approve or reject step and does not lock the record.",
        "D": "Opportunity teams share access to a record; they do not provide an approval workflow."
      },
      "topic": "Automation",
      "subtopic": "Approval processes",
      "difficulty": "medium",
      "source": "Automation: approval processes – entry criteria, approvers, record locking and email approval"
    },
    {
      "stem": "Whenever an Opportunity is created or edited, an administrator wants to set a custom Priority field on that same opportunity based on its Amount. The administrator wants the most efficient automation for this. Which configuration should be used?",
      "options": [
        "A record-triggered flow optimized for Actions and Related Records",
        "A schedule-triggered flow that runs every night",
        "An autolaunched flow started by a platform event",
        "A record-triggered flow optimized for Fast Field Updates"
      ],
      "answer": "D",
      "explanation": "A record-triggered flow optimized for Fast Field Updates runs before the record is saved, so it can change fields on the triggering record without an extra save. That makes it much faster than an after-save flow, which has to update the record again. After-save flows are for actions on other records, emails or other work that needs the saved record.",
      "rationales": {
        "A": "After-save flows suit updates to related records; updating the same record this way adds an extra save.",
        "B": "A nightly scheduled flow would leave Priority out of date until it runs.",
        "C": "Platform event flows respond to published events, not to record saves, and add needless complexity.",
        "D": "Before-save Fast Field Updates set fields on the triggering record efficiently without an extra save."
      },
      "topic": "Automation",
      "subtopic": "Record-triggered flows",
      "difficulty": "medium",
      "source": "Automation: Flow Builder – record-triggered flows, before-save (Fast Field Updates) vs. after-save"
    },
    {
      "stem": "An administrator needs a validation rule on Opportunity that stops a user from changing an existing opportunity's Stage to Closed Won while Amount is blank. Opportunities that are already Closed Won with a blank Amount must still be editable for other fields. Which error condition formula meets this requirement?",
      "options": [
        "AND(ISCHANGED(StageName), ISPICKVAL(StageName, \"Closed Won\"), ISBLANK(Amount))",
        "AND(ISPICKVAL(StageName, \"Closed Won\"), ISBLANK(Amount))",
        "AND(ISCHANGED(StageName), StageName = \"Closed Won\", ISBLANK(Amount))",
        "OR(ISCHANGED(StageName), ISPICKVAL(StageName, \"Closed Won\"), ISBLANK(Amount))"
      ],
      "answer": "A",
      "explanation": "A validation rule blocks the save when its formula evaluates to true, so every condition must hold together, which needs AND. ISCHANGED limits the rule to edits where Stage actually changes, and ISPICKVAL is required because picklist fields cannot be compared with the equals operator. Without ISCHANGED, existing Closed Won records with no Amount could not be edited at all.",
      "rationales": {
        "A": "This fires only when Stage changes to Closed Won and Amount is blank, as required.",
        "B": "Without ISCHANGED, every edit to an existing Closed Won record with no Amount would be blocked.",
        "C": "Picklist fields cannot be compared with the equals operator, so this formula will not save.",
        "D": "OR fires when any single condition is true, blocking far more edits than intended."
      },
      "topic": "Automation",
      "subtopic": "Validation rules",
      "difficulty": "hard",
      "source": "Validation rules and formula functions: ISCHANGED, ISPICKVAL and ISBLANK"
    },
    {
      "stem": "An administrator is building a customer service agent in Agentforce Builder. Customers ask about order status, returns and shipping. For returns, the administrator wants to group the related actions together with a classification description, a scope and instructions that tell the agent when and how to use them. What should the administrator create?",
      "options": [
        "A prompt template",
        "An agent action",
        "An agent topic",
        "A deployment channel"
      ],
      "answer": "C",
      "explanation": "In Agentforce, a topic represents a job the agent can do. It contains a classification description that helps the agent decide when the topic applies, a scope, instructions, and the actions available for that job. Actions are the individual tasks inside a topic, so grouping them with this guidance is the role of the topic.",
      "rationales": {
        "A": "A prompt template defines a reusable prompt for generative AI; it does not group actions with instructions.",
        "B": "An action is a single task the agent performs; actions are grouped inside topics.",
        "C": "A topic groups related actions with a classification description, scope and instructions.",
        "D": "A channel decides where customers reach the agent; it does not organize the agent's work."
      },
      "topic": "Agentforce",
      "subtopic": "Agent topics and actions",
      "difficulty": "medium",
      "source": "Agentforce: Agentforce Builder – topics, classification descriptions, instructions and actions"
    },
    {
      "stem": "Which THREE can an administrator use as the basis for a custom agent action in Agentforce Builder? Choose THREE.",
      "options": [
        "An autolaunched flow",
        "An invocable Apex method",
        "A record-triggered flow",
        "A prompt template"
      ],
      "answer": "ABD",
      "explanation": "Custom agent actions call reusable logic that the agent can invoke on demand, such as autolaunched flows, invocable Apex methods and prompt templates. These can accept inputs from the conversation and return outputs to the agent. A record-triggered flow runs only when a record is saved and cannot be called directly, so it cannot serve as an agent action.",
      "rationales": {
        "A": "Autolaunched flows can be invoked on demand with inputs and outputs, so they work as agent actions.",
        "B": "Invocable Apex methods can be exposed as agent actions for logic that needs code.",
        "C": "Record-triggered flows run only on record saves and cannot be called by an agent.",
        "D": "Prompt templates can be used as agent actions to generate content with grounded data."
      },
      "topic": "Agentforce",
      "subtopic": "Custom agent actions",
      "difficulty": "hard",
      "source": "Agentforce: agent actions – flows, Apex and prompt templates as action reference types"
    }
  ]
}
```
