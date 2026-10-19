```json
{
  "format": "domcq/1",
  "exam": "cisa",
  "set": "Certified Information Systems Auditor (CISA) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "Six months ago, an IS auditor helped design the access controls for a new payroll application. The auditor has now been assigned to audit the controls of that application. Which of the following actions should the IS auditor take FIRST?",
      "options": [
        "Proceed with the audit, since knowledge of the design will make testing more efficient",
        "Disclose the potential impairment of objectivity to audit management before starting",
        "Perform the audit but leave the access controls out of the scope of testing",
        "Obtain written confirmation from the application owner that the auditor is objective"
      ],
      "answer": "B",
      "explanation": "Auditing controls that you helped design means reviewing your own work, which threatens objectivity in fact and in appearance. ISACA standards require the auditor to disclose such an impairment to audit management (and, where relevant, other appropriate parties) so that they can decide whether to reassign the work or apply safeguards. Quietly narrowing the scope or relying on the auditee's assurance does not resolve the threat.",
      "topic": "Information System Auditing Process",
      "subtopic": "IS Audit Standards, Guidelines, Functions, and Codes of Ethics",
      "difficulty": "easy",
      "source": "ITAF general standards on organizational independence and auditor objectivity (1002, 1003); ISACA Code of Professional Ethics"
    },
    {
      "stem": "An IS audit manager is developing the annual risk-based IS audit plan for the organization. Which of the following should be done FIRST?",
      "options": [
        "Select the sampling methods to be used on each engagement",
        "Assign audit staff based on the hours used in the prior year",
        "Evaluate the design of controls over critical applications",
        "Identify the organization's key business processes and their risks"
      ],
      "answer": "D",
      "explanation": "A risk-based audit plan starts with understanding the business: its objectives, its key processes and the IT that supports them, so that the risks to those processes can be identified and assessed. The audit universe is then prioritized by risk and resources are allocated to match. Choosing sampling methods and evaluating control design are engagement-level activities that come later, and allocating effort by last year's hours ignores current risk.",
      "topic": "Information System Auditing Process",
      "subtopic": "Risk-Based Audit Planning",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 1: Risk-Based Audit Planning; ITAF performance standard on risk assessment in planning"
    },
    {
      "stem": "An IS auditor is testing whether user access requests were approved before access was granted. The auditor wants to estimate the rate of deviations from this control in the population. Which sampling method is MOST appropriate?",
      "options": [
        "Attribute sampling",
        "Variable sampling",
        "Stratified mean per unit sampling",
        "Difference estimation sampling"
      ],
      "answer": "A",
      "explanation": "This is a compliance test: each item either has the required approval or does not, and the auditor wants to estimate how often the control fails. Attribute sampling is designed to estimate the rate of occurrence of a characteristic in a population. Variable sampling, including stratified mean per unit and difference estimation, estimates a monetary amount or other quantity and is used mainly in substantive testing.",
      "topic": "Information System Auditing Process",
      "subtopic": "Audit Testing and Sampling Methodology",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 1: Audit Testing and Sampling Methodology (attribute vs. variable sampling)"
    },
    {
      "stem": "An IS auditor plans to use data analytics to test the entire population of two million vendor payments for duplicates, using a data extract provided by the IT department. Which of the following should the IS auditor do FIRST to ensure the results can be relied on?",
      "options": [
        "Run a fuzzy-matching routine on vendor names and invoice numbers",
        "Select a statistical sample of flagged payments for follow-up testing",
        "Reconcile record counts and control totals of the extract to the source system",
        "Document the duplicate payments identified in the draft audit report"
      ],
      "answer": "C",
      "explanation": "Conclusions from data analytics are only as reliable as the data analyzed, and an extract prepared by the auditee might be incomplete or altered. Before running any tests, the auditor should validate the completeness and accuracy of the data, for example by reconciling record counts and payment totals to the source system or to independent reports. If this step is skipped, duplicates in records that were never extracted would go undetected, and the full-population test would give false assurance.",
      "topic": "Information System Auditing Process",
      "subtopic": "Audit Data Analytics (including audit algorithms)",
      "difficulty": "hard",
      "source": "CISA Review Manual, Domain 1: Audit Data Analytics; ITAF standard on evidence (sufficiency and reliability)"
    },
    {
      "stem": "Which of the following is ultimately accountable for IT governance in an organization?",
      "options": [
        "The board of directors",
        "The chief information officer",
        "The IT steering committee",
        "The chief information security officer"
      ],
      "answer": "A",
      "explanation": "IT governance is part of enterprise governance, which is the responsibility of the board of directors and executive management. The board can delegate activities to committees and executives, but it keeps ultimate accountability for setting direction and overseeing IT. The CIO, the steering committee and the CISO carry out management responsibilities within that direction.",
      "topic": "Governance and Management of IT",
      "subtopic": "Organizational Structure, IT Governance, and IT Strategy",
      "difficulty": "easy",
      "source": "CISA Review Manual, Domain 2: IT Governance and IT Strategy; COBIT 2019 distinction between governance and management"
    },
    {
      "stem": "A retailer plans to use customer data that was collected for order fulfillment to train a new marketing model. From a privacy perspective, which of the following should the IS auditor recommend FIRST?",
      "options": [
        "Encrypt the customer data before copying it to the analytics platform",
        "Limit access to the analytics platform to approved data scientists",
        "Assess whether the new use is consistent with the purpose the data was collected for",
        "Mask the data fields that the marketing team considers most sensitive"
      ],
      "answer": "C",
      "explanation": "Under the purpose limitation principle, personal data should be used only for the purposes specified when it was collected, or for compatible purposes, unless consent or another lawful basis exists. The first step is therefore to determine whether the new processing is permitted at all, typically through a privacy impact assessment. Technical safeguards such as encryption, access restrictions or masking protect the data but do not make an impermissible use acceptable.",
      "topic": "Governance and Management of IT",
      "subtopic": "Privacy Program and Principles",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 2: Privacy Program and Principles (purpose limitation, privacy impact assessment)"
    },
    {
      "stem": "An organization is about to sign a contract to outsource its payroll processing to a cloud service provider. Which of the following provisions is MOST important for the IS auditor to confirm is included in the contract?",
      "options": [
        "A clause fixing the service price for the full contract term",
        "A right to audit or to receive independent assurance reports",
        "A requirement that the provider use the organization's software",
        "A clause naming the provider's account manager for the service"
      ],
      "answer": "B",
      "explanation": "An organization can outsource a service, but it cannot outsource its accountability for the data and for the controls over it. A right-to-audit clause, or a contractual right to receive independent assurance reports such as a SOC 2 Type 2 report, is how the organization obtains evidence that the provider's controls are operating effectively. The other clauses deal with commercial or relationship matters and do not provide assurance over controls.",
      "topic": "Governance and Management of IT",
      "subtopic": "IT Vendor Management",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 2: IT Vendor Management (outsourcing contracts and right-to-audit clauses)"
    },
    {
      "stem": "A risk assessment shows that the residual risk of a fraud scenario in a payments system exceeds the organization's risk appetite. IT management decides not to implement the recommended additional control because its cost exceeds the expected benefit. Which of the following should the IS auditor ensure?",
      "options": [
        "The risk is removed from the risk register so that reporting is not misleading",
        "The recommended control is implemented regardless of its cost",
        "The risk is transferred to an insurer before the next audit cycle",
        "The acceptance is approved by senior management with authority for that level of risk"
      ],
      "answer": "D",
      "explanation": "Accepting a risk is a legitimate response, but it must be made by someone with the authority to accept that level of risk. Residual risk above the stated appetite normally has to be escalated to senior management or the board, and the acceptance documented and monitored in the risk register. The problem here is that IT management alone has accepted a risk outside appetite; the auditor does not dictate which controls are implemented, and removing the risk from the register would hide it.",
      "topic": "Governance and Management of IT",
      "subtopic": "Enterprise Risk Management (ERM)",
      "difficulty": "hard",
      "source": "CISA Review Manual, Domain 2: Enterprise Risk Management (risk appetite, risk response and risk acceptance)"
    },
    {
      "stem": "The PRIMARY purpose of a post-implementation review of a new system is to determine whether:",
      "options": [
        "the project was completed within the approved budget",
        "all test scripts were executed before go-live",
        "the expected business benefits and requirements were achieved",
        "users were trained on the new system before go-live"
      ],
      "answer": "C",
      "explanation": "A post-implementation review is carried out once the system has stabilized in production. It compares actual results with the business case and requirements to determine whether the system meets its objectives and is delivering the expected benefits, and it records lessons learned. Budget performance, testing and training may be looked at, but they are not the main purpose of the review.",
      "topic": "Information Systems Acquisition, Development, and Implementation",
      "subtopic": "Post-Implementation Review",
      "difficulty": "easy",
      "source": "CISA Review Manual, Domain 3: Post-Implementation Review"
    },
    {
      "stem": "A data entry clerk occasionally transposes digits when keying customer account numbers into a billing application. Which input control would BEST detect this type of error at the point of entry?",
      "options": [
        "Check digit",
        "Range check",
        "Reasonableness check",
        "Completeness check"
      ],
      "answer": "A",
      "explanation": "A check digit is a value calculated mathematically from the other digits of a number and appended to it. When the number is keyed in, the application recalculates the check digit and rejects the entry if it does not match, which catches transposition and transcription errors. A transposed account number can still fall within a valid range or look reasonable, and a completeness check only confirms that the field is not empty.",
      "topic": "Information Systems Acquisition, Development, and Implementation",
      "subtopic": "Control Identification and Design",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 3: Control Identification and Design (input and data validation edits, check digits)"
    },
    {
      "stem": "The recovery point objective (RPO) for an application is based on:",
      "options": [
        "the maximum time allowed to restore the application after a disruption",
        "the time needed to obtain replacement hardware from suppliers",
        "the annual cost of maintaining an alternate processing site",
        "the maximum amount of data loss the business can tolerate"
      ],
      "answer": "D",
      "explanation": "The RPO is set from the amount of data loss the business can accept, expressed as the point in time to which data must be recovered. It determines how often data must be backed up or replicated: a lower RPO requires more frequent backups or continuous replication. The maximum time allowed to restore the application describes the recovery time objective (RTO), not the RPO.",
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "Business Impact Analysis (BIA)",
      "difficulty": "easy",
      "source": "CISA Review Manual, Domain 4: Business Impact Analysis; recovery point objective and recovery time objective"
    },
    {
      "stem": "An organization takes a full backup of its file server every Sunday night. It wants a daily backup scheme for Monday to Saturday under which recovering the files as they stood on Thursday night requires restoring only the Sunday full backup plus one other backup set. Which scheme meets this requirement?",
      "options": [
        "Daily incremental backups",
        "Daily differential backups",
        "Daily backups of transaction logs only",
        "Daily backups of newly created files only"
      ],
      "answer": "B",
      "explanation": "A differential backup copies all changes made since the last full backup, so Thursday's differential contains every change from Monday to Thursday, and a restore needs only the full backup plus that one set. An incremental backup copies only changes since the previous backup of any type, so a restore needs the full backup plus every incremental from Monday to Thursday. The trade-off is that differential backups grow during the week and take longer to run, but restoring from them is faster.",
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "Data Backup, Storage, and Restoration",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 4: Data Backup, Storage, and Restoration (full, incremental and differential backups)"
    },
    {
      "stem": "A critical application failed during the night, and an urgent fix was moved into production to restore service without going through the normal change approval process. Which of the following is MOST important for the IS auditor to verify?",
      "options": [
        "The change was documented and subsequently reviewed and approved",
        "The programmer who made the fix was senior and experienced",
        "The fix was moved during a period of low transaction volume",
        "The help desk notified all users after the fix was applied"
      ],
      "answer": "A",
      "explanation": "Emergency changes are sometimes necessary, but they must still be brought under change management: logged, made using controlled emergency access, and reviewed, tested and formally approved after the fact as soon as practicable. Without this retrospective control, unauthorized or erroneous changes could stay in production undetected, and the production environment would drift away from its documented baseline. The programmer's experience, the timing and user notification do not provide this assurance.",
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "IT Change, Configuration, and Patch Management",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 4: IT Change, Configuration, and Patch Management (emergency changes)"
    },
    {
      "stem": "System administrators can modify and delete the operating system logs on the servers they administer. Which of the following would BEST ensure the integrity of the record of administrator activity?",
      "options": [
        "Requiring administrators to review their own server logs weekly",
        "Increasing log file sizes so older entries are not overwritten",
        "Forwarding logs in real time to a central log server they cannot alter",
        "Enabling the most detailed logging level on every server"
      ],
      "answer": "C",
      "explanation": "Logs of privileged activity must be protected from the people whose actions they record. Sending events immediately to a separate, centrally managed log server or SIEM controlled by another team means administrators cannot tamper with the record after the fact, which segregates the duties of performing and recording activity. Self-review is a segregation of duties conflict, and larger or more detailed logs can still be edited or deleted locally.",
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "Operational Log Management",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 4: Operational Log Management (log protection and segregation of duties)"
    },
    {
      "stem": "A business impact analysis concluded that the order processing function can tolerate a total outage of no more than 8 hours. The disaster recovery plan restores the order processing application within 6 hours, after which users need a further 4 hours to re-enter lost transactions and verify data before processing can resume. What should the IS auditor conclude?",
      "options": [
        "The plan meets the requirement because the application is restored within 8 hours",
        "The plan exceeds the requirement, so recovery resources could be reduced",
        "The plan cannot be assessed until a full interruption test has been performed",
        "The plan does not meet the requirement because processing resumes after 10 hours"
      ],
      "answer": "D",
      "explanation": "The tolerance set in the BIA applies to the business function, not just to the IT system. Processing can only resume once the application is restored and the lost data has been re-entered and verified, which takes 6 plus 4 hours, or 10 hours, more than the 8 hours the business can tolerate. The recovery strategy must be revised, for example through faster recovery or more frequent replication to reduce the data to be re-entered; a test could confirm the timings, but the shortfall is already clear from the plan itself.",
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "Disaster Recovery Plans (DRP)",
      "difficulty": "hard",
      "source": "CISA Review Manual, Domain 4: Business Impact Analysis and Disaster Recovery Plans (RTO, RPO and acceptable outage)"
    },
    {
      "stem": "Which of the following should be responsible for authorizing user access to the data in a business application?",
      "options": [
        "The system administrator",
        "The data owner",
        "The security administrator",
        "The help desk manager"
      ],
      "answer": "B",
      "explanation": "The data owner, usually a business manager responsible for the data, is accountable for deciding who needs access and at what level, based on business need and least privilege. Security administrators implement access as authorized, and system administrators act as custodians of the systems. Leaving authorization to IT staff separates access decisions from the business knowledge needed to make them correctly.",
      "topic": "Protection of Information Assets",
      "subtopic": "Identity and Access Management",
      "difficulty": "easy",
      "source": "CISA Review Manual, Domain 5: Identity and Access Management (data owner responsibilities and access authorization)"
    },
    {
      "stem": "An organization runs its business applications on virtual machines in an infrastructure as a service (IaaS) cloud. Which of the following is typically responsible for patching the operating systems of those virtual machines?",
      "options": [
        "The cloud service provider, as part of the hosting service",
        "The hypervisor vendor, through its automatic updates",
        "The organization, as the cloud service customer",
        "The internet service provider that connects to the cloud"
      ],
      "answer": "C",
      "explanation": "Under the shared responsibility model for IaaS, the provider manages the physical facilities, hardware, network and virtualization layer, while the customer manages everything it deploys on top: guest operating systems, middleware, applications and data, including their patching and configuration. Responsibility shifts further toward the provider in PaaS and SaaS. The IS auditor should therefore confirm that the customer has effective patch management processes for its own virtual machines.",
      "topic": "Protection of Information Assets",
      "subtopic": "Cloud and Virtualized Environments",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 5: Cloud and Virtualized Environments (shared responsibility by service model)"
    },
    {
      "stem": "An organization wants its email messages to be readable only by the intended recipient, and wants the sender to be unable to deny having sent them. Which of the following uses of keys achieves BOTH objectives?",
      "options": [
        "Sign with the sender's private key and encrypt with the recipient's public key",
        "Sign with the sender's public key and encrypt with the recipient's private key",
        "Sign with the recipient's public key and encrypt with the sender's private key",
        "Sign with the recipient's private key and encrypt with the sender's public key"
      ],
      "answer": "A",
      "explanation": "Nonrepudiation requires a digital signature made with a key that only the sender holds, which is the sender's private key applied to a hash of the message; anyone can verify it with the sender's public key. Confidentiality requires encryption that only the recipient can reverse, so the message (in practice, its symmetric session key) is encrypted with the recipient's public key and decrypted with the recipient's private key. Each party's private key is never shared, so the other combinations either cannot be performed or do not provide the required assurance.",
      "topic": "Protection of Information Assets",
      "subtopic": "Public Key Infrastructure (PKI)",
      "difficulty": "hard",
      "source": "CISA Review Manual, Domain 5: Data Encryption and Public Key Infrastructure (digital signatures, asymmetric encryption)"
    },
    {
      "stem": "During an investigation of a compromised workstation, its hard drive has been removed and placed under chain of custody. Before any analysis is performed, which of the following should the investigator do?",
      "options": [
        "Boot a lab computer from the drive to review the installed programs",
        "Run antivirus software on the drive to remove any malware found",
        "Search the original drive for files modified on the incident date",
        "Create a verified bit-stream image and perform analysis on the copy"
      ],
      "answer": "D",
      "explanation": "Forensic work must preserve the integrity of the original evidence so that findings are reliable and admissible. The investigator should make a bit-by-bit image of the drive, typically using a write blocker, confirm with hash values that the image matches the original, and analyze only the copy. Booting from, scanning or searching the original drive alters data and timestamps and can destroy evidence.",
      "topic": "Protection of Information Assets",
      "subtopic": "Evidence Collection and Forensics",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 5: Evidence Collection and Forensics (data imaging, preservation and chain of custody)"
    },
    {
      "stem": "Which of the following is the MOST effective control to prevent SQL injection attacks against a web application?",
      "options": [
        "Encrypting the database that stores application data",
        "Using parameterized queries for all database access",
        "Placing the database server behind a network firewall",
        "Enforcing complex passwords for application users"
      ],
      "answer": "B",
      "explanation": "SQL injection works when user input is combined directly into SQL statements, so the database interprets attacker-supplied text as commands. Parameterized queries (prepared statements) keep code and data separate, so input is only ever treated as values; input validation and least-privilege database accounts add further protection. Encryption, firewalls and password rules do not stop malicious input that arrives through the application's legitimate web traffic.",
      "topic": "Protection of Information Assets",
      "subtopic": "Information System Attack Methods and Techniques",
      "difficulty": "easy",
      "source": "CISA Review Manual, Domain 5: Information System Attack Methods and Techniques (SQL injection); OWASP Top 10, Injection"
    }
  ]
}
```
