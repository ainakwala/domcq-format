```json
{
  "format": "domcq/1",
  "exam": "cpa-isc",
  "set": "Uniform CPA Examination: Information Systems and Controls (ISC) practice – Mixed core set",
  "questions": [
    {
      "stem": "A company has finished building and testing a new inventory module in its test environment. Before the module is approved for release to production, the warehouse supervisors who will use it run realistic scenarios to confirm that it supports their daily business processes. Which type of testing are the supervisors performing?",
      "options": [
        "Unit testing by the development team",
        "Integration testing of connected modules",
        "User acceptance testing by the business",
        "Stress testing of processing capacity"
      ],
      "answer": "C",
      "explanation": "User acceptance testing is performed by the people who will use the system, in a realistic setting, to confirm that it meets business requirements before it is approved for production. Unit testing is done by developers on individual components, integration testing checks that modules work together, and stress testing measures behavior under heavy load.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "easy",
      "source": "AICPA ISC blueprint: Information systems – systems development life cycle, testing and change management."
    },
    {
      "stem": "A database designer reviews a customer order table whose primary key is the order number. The table also stores the customer's credit rating, which depends on the customer ID rather than directly on the order number. The designer moves the credit rating to a separate customer table. Which normal form is the designer working to satisfy by removing this dependency?",
      "options": [
        "Third normal form",
        "First normal form",
        "Second normal form",
        "Fourth normal form"
      ],
      "answer": "A",
      "explanation": "The order number determines the customer ID, and the customer ID determines the credit rating, so the rating depends on the key only through a non-key attribute. That is a transitive dependency, which third normal form removes. First normal form eliminates repeating groups, second normal form removes partial dependencies on part of a composite key (not possible with a single-attribute key), and fourth normal form addresses multivalued dependencies.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Data management",
      "difficulty": "medium",
      "source": "AICPA ISC blueprint: Data management – database design and normalization."
    },
    {
      "stem": "During a review of an order-entry database, an accountant finds sales order records that reference customer ID numbers that no longer exist in the customer master table, because customers were deleted while open orders remained. Which database control would have prevented this condition?",
      "options": [
        "A check digit added to the customer ID field",
        "A data type restriction on the customer ID field",
        "A primary key constraint on the order number field",
        "A foreign key constraint linking orders to customers"
      ],
      "answer": "D",
      "explanation": "Referential integrity requires every foreign key value in a child table to match an existing primary key value in the parent table. With a foreign key constraint in place, the database management system would reject the deletion of a customer who still has orders, or cascade the change according to the rule defined. The other controls test the format or uniqueness of individual values and cannot detect a missing parent record.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Data management",
      "difficulty": "medium",
      "source": "AICPA ISC blueprint: Data management – database integrity controls (entity and referential integrity)."
    },
    {
      "stem": "An entity takes a full backup of its file server every Sunday night and a differential backup every other night. The server fails on Thursday morning, before that day's backup, and its data must be restored to the last available point. Which backups are needed to restore the server?",
      "options": [
        "The Sunday full backup and all three nightly differential backups",
        "The Sunday full backup and the Wednesday night differential backup",
        "The Wednesday night differential backup, with no full backup",
        "The three nightly differential backups, restored in sequence"
      ],
      "answer": "B",
      "explanation": "A differential backup copies everything that has changed since the last full backup, so the Wednesday night differential already contains all changes made since Sunday. A restore therefore needs only the last full backup plus the most recent differential. Under an incremental scheme, by contrast, every incremental backup since the full backup would have to be restored in order.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "medium",
      "source": "AICPA ISC blueprint: Information systems – backup, business continuity and disaster recovery."
    },
    {
      "stem": "A retailer's order processing system must be restored within 4 hours after an outage, and management will accept losing no more than 15 minutes of transactions. The system's database is backed up to offsite storage once each night, and a tested restore takes about 3 hours. Based on these facts, which statement is correct?",
      "options": [
        "The recovery time objective is met, but the nightly backup cannot meet the recovery point objective",
        "The recovery point objective is met, but the restore time cannot meet the recovery time objective",
        "Both the recovery point objective and the recovery time objective are met by the current approach",
        "Neither objective is met, because a 3-hour restore time exceeds the recovery point objective"
      ],
      "answer": "A",
      "explanation": "The recovery time objective is the maximum tolerable downtime (4 hours), and a 3-hour restore fits within it. The recovery point objective is the maximum tolerable data loss measured back from the failure (15 minutes), but a nightly backup can lose almost a full day of transactions. Meeting the 15-minute objective would require more frequent replication, log shipping or real-time mirroring.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "hard",
      "source": "AICPA ISC blueprint: Information systems – business continuity and disaster recovery (RTO and RPO)."
    },
    {
      "stem": "A manufacturer moves its application servers to an infrastructure as a service (IaaS) provider. The provider operates the physical data centers, hardware and virtualization layer. Under the usual shared responsibility model, which of the following remains the manufacturer's responsibility?",
      "options": [
        "Physical access controls over the data center buildings",
        "Replacement of failed physical host server hardware",
        "Security patching of the guest operating systems it runs",
        "Redundant power and cooling for the server rooms"
      ],
      "answer": "C",
      "explanation": "In an IaaS arrangement the provider manages the facilities, physical hardware, network and hypervisor, while the customer manages everything it deploys on top, including guest operating systems, middleware, applications, data and access configuration. In platform as a service the operating system would move to the provider, and in software as a service most of the stack would.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "easy",
      "source": "AICPA ISC blueprint: Information systems – cloud computing service models and shared responsibility."
    },
    {
      "stem": "A payroll clerk keys time-card data into a batch for processing. Before the batch is entered, a supervisor adds up all of the employee ID numbers on the time cards and later compares that sum with the sum the system computes after entry. The total has no financial meaning. What is this control called?",
      "options": [
        "Check digit verification",
        "Hash total reconciliation",
        "Financial total reconciliation",
        "Record count reconciliation"
      ],
      "answer": "B",
      "explanation": "A hash total is a control total calculated over a non-financial field, such as employee ID numbers. If the before-and-after totals differ, records were lost, duplicated or altered during entry. A financial total uses dollar amounts, a record count only compares the number of items, and a check digit tests the validity of a single identifier.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "easy",
      "source": "AICPA ISC blueprint: Information systems – application input controls and control totals."
    },
    {
      "stem": "A production outage occurs at 2 a.m., and a developer who normally has no production access must fix a program immediately. IT management wants the change process to remain controlled even though normal testing and approval cannot be completed beforehand. Which approach best addresses the risk of an unauthorized or faulty emergency change?",
      "options": [
        "Give the developer a shared administrator account and change its password afterward",
        "Let the developer deploy the fix and turn off logging to avoid delaying the repair",
        "Require full pre-implementation testing and approval before any fix is applied",
        "Issue temporary individual privileged access, log activity, and approve and review the change afterward"
      ],
      "answer": "D",
      "explanation": "Emergency change procedures allow expedited implementation while preserving accountability: access is temporary and tied to an individual, activity is logged, and change management reviews, tests, approves and documents the change retroactively before access is revoked. A shared account destroys accountability, turning off logging removes detection, and insisting on full pre-approval defeats the purpose of an emergency process.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "hard",
      "source": "AICPA ISC blueprint: Information systems – change management, including emergency changes."
    },
    {
      "stem": "In February 2024 the National Institute of Standards and Technology (NIST) released version 2.0 of its Cybersecurity Framework. Which function did version 2.0 add to the five functions in the earlier version (Identify, Protect, Detect, Respond and Recover)?",
      "options": [
        "Assess",
        "Govern",
        "Monitor",
        "Authorize"
      ],
      "answer": "B",
      "explanation": "Version 2.0 of the NIST Cybersecurity Framework added Govern, which covers the organization's cybersecurity risk management strategy, roles and responsibilities, policies and oversight. Assess, Authorize and Monitor are steps in the NIST Risk Management Framework, not functions of the Cybersecurity Framework.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Regulations, standards and frameworks",
      "difficulty": "medium",
      "source": "AICPA ISC blueprint: Security – frameworks (NIST Cybersecurity Framework 2.0, core functions)."
    },
    {
      "stem": "A company in the European Union that determines the purposes and means of processing personal data discovers a personal data breach that is likely to result in a risk to the rights and freedoms of individuals. Under the General Data Protection Regulation (GDPR), what is the company's obligation to notify the supervisory authority?",
      "options": [
        "Notify within 24 hours after the breach occurs, in every case",
        "Notify within 30 days, once the forensic investigation has been completed",
        "Notify within 72 hours after becoming aware of it, where feasible",
        "Notify only if affected individuals first file a complaint with the authority"
      ],
      "answer": "C",
      "explanation": "Article 33 of the GDPR requires the controller to notify the supervisory authority without undue delay and, where feasible, within 72 hours after becoming aware of a breach that is likely to result in a risk to individuals. The clock starts at awareness, not at the end of the investigation, and a notification made later must explain the reasons for the delay.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Regulations, standards and frameworks",
      "difficulty": "medium",
      "source": "AICPA ISC blueprint: Security, confidentiality and privacy – regulations (GDPR, Article 33 breach notification)."
    },
    {
      "stem": "An accounts payable clerk can enter invoices and, because of a role copied from a former employee, can also change vendor bank account details. Management removes the vendor-change access because the clerk's job does not require it. Which security principle is management applying?",
      "options": [
        "The principle of least privilege",
        "The principle of defense in depth",
        "The principle of non-repudiation",
        "The principle of data minimization"
      ],
      "answer": "A",
      "explanation": "Least privilege means users receive only the access they need to perform their assigned duties, which limits the damage from errors, fraud or compromised credentials. Defense in depth is the layering of several controls, non-repudiation prevents a party from denying an action, and data minimization limits the personal data an organization collects.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Security",
      "difficulty": "easy",
      "source": "AICPA ISC blueprint: Security – logical access controls and the principle of least privilege."
    },
    {
      "stem": "A company wants the recipient of an electronic contract to be able to verify both that the document was not altered in transit and that it came from the named sender, who cannot later deny sending it. Which technique accomplishes this?",
      "options": [
        "Encrypting the entire document using the recipient's public key",
        "Encrypting the entire document using a symmetric key shared by both",
        "Hashing the document and sending the hash with the document",
        "Encrypting a hash of the document using the sender's private key"
      ],
      "answer": "D",
      "explanation": "A digital signature is created by hashing the document and encrypting the hash with the sender's private key. The recipient decrypts it with the sender's public key and compares it with a fresh hash of the document, which shows integrity, and because only the sender holds the private key, it also supports authenticity and non-repudiation. Encrypting with the recipient's public key or a shared key provides confidentiality but not non-repudiation.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Security",
      "difficulty": "medium",
      "source": "AICPA ISC blueprint: Security – encryption, hashing and digital signatures."
    },
    {
      "stem": "An entity requires remote employees to authenticate before connecting to its virtual private network. Which of the following methods is an example of multifactor authentication?",
      "options": [
        "A password followed by a security question answer",
        "A password followed by a personal identification number",
        "A password followed by a code from a hardware token",
        "A fingerprint scan followed by a facial recognition scan"
      ],
      "answer": "C",
      "explanation": "Multifactor authentication requires evidence from at least two different categories: something the user knows, something the user has, and something the user is. A password (knowledge) combined with a hardware token code (possession) meets that test. The other options use two items from the same category, so they are two steps but not multiple factors.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Security",
      "difficulty": "easy",
      "source": "AICPA ISC blueprint: Security – authentication methods and multifactor authentication."
    },
    {
      "stem": "A bank wants its software testers to use realistic customer records in a test environment but must keep the testers from seeing real names and account numbers. Which technique best meets this need while preserving the data's format for testing?",
      "options": [
        "Encrypting the production database and sharing the decryption key with the testers",
        "Masking the sensitive fields with realistic substitute values before loading the data",
        "Compressing the production data files before copying them to the test environment",
        "Restricting the testers to read-only access to the copied production data"
      ],
      "answer": "B",
      "explanation": "Data masking replaces sensitive values with fictitious but format-consistent ones, so test scenarios still work while real identities are never exposed in the non-production environment. Encryption with a shared key lets the testers read the data, compression is not a security control, and read-only access limits changes but not disclosure.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Confidentiality and privacy",
      "difficulty": "medium",
      "source": "AICPA ISC blueprint: Confidentiality and privacy – protecting sensitive data (masking, encryption, non-production use)."
    },
    {
      "stem": "An analyst confirms that ransomware is actively encrypting files on a file server that holds customer records, and the incident response plan is activated. Which action should the team take first to limit the damage?",
      "options": [
        "Isolate the affected server from the network while preserving its current state",
        "Restore the server's files from the most recent backup immediately",
        "Wipe and reinstall the server's operating system to remove the malware",
        "Notify every customer whose records were stored on the server"
      ],
      "answer": "A",
      "explanation": "Containment comes before eradication and recovery. Isolating the server stops the ransomware from spreading or encrypting more data and preserves evidence for investigation. Restoring while the malware is still active risks re-encryption, wiping the system destroys forensic evidence, and customer notification follows once the scope of the incident and legal obligations are understood.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Incident response",
      "difficulty": "medium",
      "source": "AICPA ISC blueprint: Incident response – detection, containment, eradication and recovery."
    },
    {
      "stem": "A security analyst suspects that malware is running on a production server and must collect forensic evidence before the system is shut down for repair. To preserve the most perishable evidence first, which source should the analyst capture before the others?",
      "options": [
        "Archived logs stored on offsite backup media",
        "A forensic image of the server's hard disk",
        "Configuration files stored on the server's disk",
        "Running processes and the contents of the server's memory"
      ],
      "answer": "D",
      "explanation": "Evidence should be collected in order of volatility, starting with the data that will be lost soonest. Memory contents, running processes and active network connections disappear when the system is powered off or rebooted, while data on disk persists and archived logs on backup media are the most durable.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Incident response",
      "difficulty": "hard",
      "source": "AICPA ISC blueprint: Incident response – evidence collection and preservation (order of volatility)."
    },
    {
      "stem": "A service organization's SOC 2 system description states that certain criteria will be met only if user entities implement specific controls, such as reviewing the monthly access reports that the service organization provides to them. What does SOC 2 guidance call these controls?",
      "options": [
        "Complementary subservice organization controls",
        "Complementary user entity controls",
        "Compensating controls at the service organization",
        "Compensating controls at the user entity"
      ],
      "answer": "B",
      "explanation": "Complementary user entity controls are controls that the service organization assumes user entities will implement for the stated criteria to be met, and the description of the system must identify them. Complementary subservice organization controls are the ones expected at a subservice organization, while compensating controls are alternative controls that offset a weakness in another control.",
      "topic": "Considerations for System and Organization Controls (SOC) Engagements",
      "subtopic": "Considerations specific to planning and performing a SOC engagement",
      "difficulty": "medium",
      "source": "AICPA SOC 2 Guide – system description and complementary user entity controls."
    },
    {
      "stem": "A service organization uses a hosting company as a subservice organization. Management's SOC 2 system description identifies the services provided by the hosting company and the controls it is expected to operate, but the service auditor does not test the hosting company's controls. Which statement correctly describes this approach?",
      "options": [
        "Inclusive method, because the hosting company is named in the system description",
        "Inclusive method, because management monitors the hosting company's performance",
        "Carve-out method, because the hosting company's controls are outside the examination",
        "Carve-out method, because the hosting company has no controls relevant to the criteria"
      ],
      "answer": "C",
      "explanation": "Under the carve-out method, the description identifies the services the subservice organization performs and the controls expected at it, but the subservice organization's own controls are excluded from the scope of the examination and are not tested. Under the inclusive method, those controls are included in the description and tested. Naming the subservice organization or monitoring it occurs under either method, and a carved-out organization typically does have controls that the criteria depend on.",
      "topic": "Considerations for System and Organization Controls (SOC) Engagements",
      "subtopic": "Considerations specific to planning and performing a SOC engagement",
      "difficulty": "hard",
      "source": "AICPA SOC 2 Guide – subservice organizations: carve-out and inclusive methods."
    },
    {
      "stem": "A service organization wants a report on its controls relevant to security and availability that it can freely distribute to prospective customers and post on its website with a seal, without limiting use to specified parties. Which report meets this need?",
      "options": [
        "A SOC 3 report",
        "A SOC 2 Type 1 report",
        "A SOC 2 Type 2 report",
        "A SOC 1 Type 2 report"
      ],
      "answer": "A",
      "explanation": "A SOC 3 report addresses the trust services criteria in a short-form, general-use report that can be distributed freely and can display a seal. A SOC 2 report contains a detailed system description and, for Type 2, test results, and is restricted to specified parties with sufficient knowledge. A SOC 1 report relates to controls relevant to user entities' financial reporting and is restricted to user entities and their auditors.",
      "topic": "Considerations for System and Organization Controls (SOC) Engagements",
      "subtopic": "Considerations specific to reporting on a SOC engagement",
      "difficulty": "easy",
      "source": "AICPA SOC suite of services – SOC 1, SOC 2 and SOC 3 report types and intended use."
    },
    {
      "stem": "A service auditor issues a SOC 2 Type 1 report for one client and a SOC 2 Type 2 report for another. Which of the following is included in a Type 2 report but is not included in a Type 1 report?",
      "options": [
        "Management's written assertion on the system description",
        "The service auditor's opinion on the system description",
        "A description of the service organization's system",
        "A description of the auditor's tests of controls and results"
      ],
      "answer": "D",
      "explanation": "A Type 2 report addresses the operating effectiveness of controls over a period, so it must describe the tests the service auditor performed and the results, including any exceptions. Both report types contain the service auditor's report, management's assertion and the description of the system, but a Type 1 report speaks to design only as of a point in time.",
      "topic": "Considerations for System and Organization Controls (SOC) Engagements",
      "subtopic": "Considerations specific to reporting on a SOC engagement",
      "difficulty": "medium",
      "source": "AICPA SOC 2 Guide – contents of Type 1 and Type 2 reports."
    }
  ]
}
```
