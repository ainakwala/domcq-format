```json
{
  "format": "domcq/1",
  "exam": "cisa",
  "set": "Certified Information Systems Auditor (CISA) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "An IS auditor needs to estimate the total monetary value of errors in a population of 12,000 customer invoices. Which of the following sampling methods is MOST appropriate?",
      "options": [
        "Attribute sampling",
        "Variable sampling",
        "Discovery sampling",
        "Stop-or-go sampling"
      ],
      "answer": "B",
      "explanation": "Variable sampling is used in substantive testing to estimate a numeric characteristic of a population, such as a monetary amount or the total value of misstatements. Attribute, discovery and stop-or-go sampling are attribute-based methods used mainly in compliance testing to estimate the rate or presence of deviations, so they answer 'how often' rather than 'how much'.",
      "topic": "Information System Auditing Process",
      "subtopic": "Audit Testing and Sampling Methodology",
      "difficulty": "easy",
      "source": "CISA Domain 1 – Audit Testing and Sampling Methodology: variable vs. attribute sampling"
    },
    {
      "stem": "An IS auditor is developing the annual risk-based IS audit plan. Which of the following should the auditor do FIRST?",
      "options": [
        "Understand the business objectives and the processes and IT assets that support them",
        "Select the sampling methods and audit procedures to be used in each engagement",
        "Evaluate the operating effectiveness of key application controls in each unit",
        "Allocate audit staff to each area based on the hours used in last year's plan"
      ],
      "answer": "A",
      "explanation": "Risk-based audit planning starts with understanding the business: its objectives, its processes and the information systems and assets that support them. Only with this understanding can the auditor identify and rank risks and decide where audit resources should go. Selecting procedures and testing controls happen later at the engagement level, and carrying forward last year's hours ignores changes in risk.",
      "topic": "Information System Auditing Process",
      "subtopic": "Risk-Based Audit Planning",
      "difficulty": "medium",
      "source": "CISA Domain 1 – Risk-Based Audit Planning; ITAF performance standards on risk assessment in planning"
    },
    {
      "stem": "During an audit, an IS auditor identifies that a critical server is missing a required security patch. Before the audit report is issued, the system administrator applies the patch and the auditor verifies the fix. How should the IS auditor treat this finding?",
      "options": [
        "Remove it from the report, because the issue no longer exists",
        "Delay issuing the report until the patch has operated for a full quarter",
        "Include it in the report and note that corrective action has been taken",
        "Communicate it verbally to the administrator only, without documenting it"
      ],
      "answer": "C",
      "explanation": "A finding remains a valid result of the audit even if it is corrected before the report is issued, because it shows that a control weakness existed during the period under review. The report should include the finding and state that management has already remediated it, so readers get a complete and accurate picture. Removing the finding or handling it only verbally would make the report incomplete and could hide an underlying process weakness, such as an ineffective patch management process.",
      "topic": "Information System Auditing Process",
      "subtopic": "Reporting and Communication Techniques",
      "difficulty": "medium",
      "source": "CISA Domain 1 – Reporting and Communication Techniques: reporting findings corrected before report issuance"
    },
    {
      "stem": "An IS auditor wants audit software embedded in the organization's host application to continuously screen live transactions and record those that meet predefined audit criteria, such as payments above a set threshold, in a separate file for later review. Which continuous auditing technique does this describe?",
      "options": [
        "Integrated test facility using dummy entities",
        "Snapshots recording transactions at processing points",
        "Audit hooks that alert the auditor in real time",
        "Systems control audit review file with embedded audit modules"
      ],
      "answer": "D",
      "explanation": "SCARF/EAM involves embedding specially written audit software in the host application so that transactions are monitored selectively and those meeting auditor-defined criteria are recorded in a separate file for review. Snapshots instead capture images of tagged transactions at points along their processing path, audit hooks flag suspect transactions so the auditor can act immediately, and an ITF runs test transactions against dummy entities in the live system. The right choice depends on whether the auditor needs criteria-based collection, path tracing, immediate alerts or test data.",
      "topic": "Information System Auditing Process",
      "subtopic": "Audit Data Analytics (including audit algorithms)",
      "difficulty": "hard",
      "source": "CISA Domain 1 – Audit Data Analytics: continuous online auditing techniques (SCARF/EAM, snapshots, audit hooks, ITF)"
    },
    {
      "stem": "Which of the following is a PRIMARY function of an IT steering committee?",
      "options": [
        "Approving access requests for business applications",
        "Configuring and monitoring the organization's network",
        "Prioritizing and approving IT projects against business goals",
        "Performing the annual audit of IT general controls"
      ],
      "answer": "C",
      "explanation": "An IT steering committee is a management-level body, typically made up of business and IT executives, that oversees delivery of the IT strategy. Its key duties include reviewing, prioritizing and approving IT investments and projects so that resources go to initiatives aligned with business objectives, and monitoring their progress. Access approvals and network operations are operational tasks, and auditing IT controls belongs to the independent audit function.",
      "topic": "Governance and Management of IT",
      "subtopic": "Organizational Structure, IT Governance, and IT Strategy",
      "difficulty": "easy",
      "source": "CISA Domain 2 – Organizational Structure, IT Governance, and IT Strategy: IT steering committee"
    },
    {
      "stem": "An IS auditor reviewing a data classification program finds that the IT security team assigns the classification level for all business data. Which of the following should the IS auditor recommend?",
      "options": [
        "Assign responsibility for classifying data to the business data owners",
        "Have database administrators classify data based on where it is stored",
        "Classify all business data at the highest level to avoid errors",
        "Have internal audit approve every data classification decision"
      ],
      "answer": "A",
      "explanation": "Data owners, usually business managers, are accountable for their data and understand its value and sensitivity, so they are responsible for determining its classification. The security team and custodians such as database administrators implement the protection that the classification calls for, but they are not best placed to judge business value. Classifying everything at the highest level wastes resources, and internal audit approving classification decisions would impair its independence.",
      "topic": "Governance and Management of IT",
      "subtopic": "Data Governance and Classification",
      "difficulty": "medium",
      "source": "CISA Domain 2 – Data Governance and Classification: roles of data owners and data custodians"
    },
    {
      "stem": "An organization plans to outsource the processing of its customer billing to a third-party service provider. From an IS audit perspective, which of the following contract provisions is MOST important?",
      "options": [
        "Fixed pricing for all future enhancement requests",
        "Use of the same software versions as the organization",
        "A requirement that provider staff work on-site",
        "The right to audit the provider's relevant controls"
      ],
      "answer": "D",
      "explanation": "Outsourcing a process does not transfer accountability for it, so the organization still needs assurance that the provider's controls protect its data and processing. A right-to-audit clause, which may also be satisfied through independent assurance reports, gives the organization and its auditors a contractual basis for obtaining that assurance. Pricing, software versions and staff location are commercial or operational matters that do not by themselves provide control assurance.",
      "topic": "Governance and Management of IT",
      "subtopic": "IT Vendor Management",
      "difficulty": "medium",
      "source": "CISA Domain 2 – IT Vendor Management: outsourcing contracts and right-to-audit clauses"
    },
    {
      "stem": "A business unit manager has formally accepted a risk whose residual level exceeds the risk appetite approved by the board. There is no record of escalation to, or approval by, senior management. Which of the following should be the IS auditor's GREATEST concern?",
      "options": [
        "The risk register does not express the risk in monetary terms",
        "The risk was accepted by someone without authority to do so",
        "The risk owner did not consider transferring the risk to an insurer",
        "The acceptance was not reviewed by the IT security team"
      ],
      "answer": "B",
      "explanation": "Risk appetite is set by the board, and accepting residual risk above that level is a decision only senior management or the board can make, usually through a formal exception process. When a manager accepts such risk without escalation, the organization may be exposed beyond what its governance bodies have agreed, which undermines the enterprise risk management framework. The other points concern the quality of risk analysis or the choice of treatment options and are secondary to this breakdown in accountability.",
      "topic": "Governance and Management of IT",
      "subtopic": "Enterprise Risk Management (ERM)",
      "difficulty": "hard",
      "source": "CISA Domain 2 – Enterprise Risk Management (ERM): risk appetite, risk acceptance and accountability"
    },
    {
      "stem": "Which of the following is the PRIMARY objective of a post-implementation review of a new system?",
      "options": [
        "To determine whether the project's objectives and expected benefits were achieved",
        "To obtain final user acceptance sign-off before the system goes live",
        "To identify which developers were responsible for coding defects",
        "To confirm that every planned unit test script was executed"
      ],
      "answer": "A",
      "explanation": "A post-implementation review is performed after the system has been in production for a period of time to assess whether it meets the business requirements and delivers the benefits set out in the business case. Its findings also provide lessons learned for future projects. User acceptance sign-off happens before go-live, and test execution and assigning individual blame are not the purpose of the review.",
      "topic": "Information Systems Acquisition, Development, and Implementation",
      "subtopic": "Post-Implementation Review",
      "difficulty": "easy",
      "source": "CISA Domain 3 – Post-Implementation Review: objectives and benefits realization"
    },
    {
      "stem": "An organization is migrating customer account data from a legacy system to a new platform. Which of the following controls BEST ensures that the data was converted completely and accurately?",
      "options": [
        "Having the vendor certify that the conversion tool is free of defects",
        "Running the new system in production for one month before review",
        "Reconciling record counts and control totals between the old and new systems",
        "Requiring users to report any errors they notice after cut-over"
      ],
      "answer": "C",
      "explanation": "Reconciling record counts, hash totals and financial control totals between the source and target data gives direct, measurable evidence that all records were transferred and that key values were not altered. It is performed as part of the conversion, before the legacy data is retired. Vendor assurances, waiting for production use or relying on users to notice errors are weaker, indirect or after-the-fact controls.",
      "topic": "Information Systems Acquisition, Development, and Implementation",
      "subtopic": "System Migration, Infrastructure Deployment, and Data Conversion",
      "difficulty": "medium",
      "source": "CISA Domain 3 – System Migration, Infrastructure Deployment, and Data Conversion: data conversion controls"
    },
    {
      "stem": "Following a business impact analysis, the owner of an order-processing system states that the business can afford to lose no more than two hours of transaction data in a disruption. Which of the following does this define?",
      "options": [
        "Recovery time objective (RTO)",
        "Recovery point objective (RPO)",
        "Maximum tolerable downtime (MTD)",
        "Service delivery objective (SDO)"
      ],
      "answer": "B",
      "explanation": "The RPO is the maximum acceptable amount of data loss, expressed as the point in time to which data must be recovered; here it is two hours. It drives how often data must be backed up or replicated. The RTO and MTD relate to how long the system can be unavailable, and the SDO is the level of service to be reached while operating in alternate processing mode.",
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "Business Impact Analysis (BIA)",
      "difficulty": "easy",
      "source": "CISA Domain 4 – Business Impact Analysis (BIA): RPO, RTO and related recovery metrics"
    },
    {
      "stem": "An organization takes a full backup every Sunday night and a differential backup every night from Monday to Saturday. The database fails on Thursday morning, before that day's backup has run. Which of the following backups are needed to restore the most recent data?",
      "options": [
        "Sunday's full backup only",
        "Wednesday's differential backup only",
        "Sunday's full backup and the Monday to Wednesday differentials",
        "Sunday's full backup and Wednesday's differential backup"
      ],
      "answer": "D",
      "explanation": "A differential backup copies all data changed since the last full backup, so each differential contains everything captured in the earlier differentials. Restoration therefore needs only the last full backup plus the most recent differential. With incremental backups, by contrast, the full backup and every incremental taken since it would have to be restored in sequence.",
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "Data Backup, Storage, and Restoration",
      "difficulty": "medium",
      "source": "CISA Domain 4 – Data Backup, Storage, and Restoration: full, differential and incremental backup schemes"
    },
    {
      "stem": "An organization wants to test its business continuity and disaster recovery arrangements in a way that gives the GREATEST assurance about its recovery capability without interrupting normal production processing. Which type of test should be performed?",
      "options": [
        "Checklist review of the plan",
        "Structured walk-through (tabletop) test",
        "Parallel test at the recovery site",
        "Full interruption test"
      ],
      "answer": "C",
      "explanation": "In a parallel test, the recovery site is brought to operational readiness and processes real or representative workloads while the primary site keeps running, so actual recovery capability is exercised without stopping production. Checklist reviews and walk-throughs only examine the plan on paper. A full interruption test gives the most realistic assurance but deliberately shuts down primary operations, which the requirement rules out and which carries significant risk.",
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "Business Continuity Plan (BCP)",
      "difficulty": "medium",
      "source": "CISA Domain 4 – Business Continuity Plan (BCP) and Disaster Recovery Plans (DRP): types of plan tests"
    },
    {
      "stem": "To resolve urgent production failures outside business hours, developers are allowed to use an emergency user ID that has access to the production environment. Which of the following controls is MOST important for this arrangement?",
      "options": [
        "Logging emergency ID use and reviewing and approving the changes afterward",
        "Requiring developers to change the emergency ID password every 90 days",
        "Limiting the emergency ID to developers with more than five years' experience",
        "Allowing the emergency ID to be used only on weekends and public holidays"
      ],
      "answer": "A",
      "explanation": "Emergency (firecall) access bypasses normal change controls, so the key compensating control is detective: all use of the emergency ID must be logged, and every change made with it must be reviewed and formally approved through the normal change management process after the fact. This ensures that unauthorized or erroneous changes are detected and that emergency access is not misused for routine work. Password rotation, experience requirements and time restrictions do not show what was actually changed.",
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "IT Change, Configuration, and Patch Management",
      "difficulty": "medium",
      "source": "CISA Domain 4 – IT Change, Configuration, and Patch Management: emergency changes"
    },
    {
      "stem": "In a distributed database environment, a single transaction updates records held at several different sites. Which of the following mechanisms ensures that the update is either committed at every site or rolled back at every site?",
      "options": [
        "Record locking",
        "Two-phase commit",
        "Checkpoint restart",
        "Database normalization"
      ],
      "answer": "B",
      "explanation": "A two-phase commit protocol first asks every participating site to prepare and confirm that it can commit; only if all sites agree are they instructed to commit, otherwise all of them roll back. This preserves the atomicity and integrity of transactions that span multiple databases. Record locking prevents conflicts between concurrent updates, checkpoint restart supports recovery of long-running jobs, and normalization reduces data redundancy in database design.",
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "Database Management",
      "difficulty": "hard",
      "source": "CISA Domain 4 – Database Management: database integrity and concurrency controls"
    },
    {
      "stem": "A user receives an email that the sender has digitally signed. Which key does the recipient's software use to verify the digital signature?",
      "options": [
        "The sender's private key",
        "The recipient's private key",
        "The recipient's public key",
        "The sender's public key"
      ],
      "answer": "D",
      "explanation": "The sender creates a digital signature by signing a hash of the message with the sender's private key, which only the sender should hold. Anyone can verify it with the sender's public key, typically obtained from a certificate issued by a trusted certificate authority, by checking it against a fresh hash of the message. A valid result shows the message's integrity and origin and supports nonrepudiation.",
      "topic": "Protection of Information Assets",
      "subtopic": "Public Key Infrastructure (PKI)",
      "difficulty": "easy",
      "source": "CISA Domain 5 – Public Key Infrastructure (PKI): digital signatures and key usage"
    },
    {
      "stem": "Which of the following physical access controls is MOST effective in preventing an unauthorized person from following an authorized employee into a data center (piggybacking)?",
      "options": [
        "A mantrap (deadman door) entrance",
        "CCTV cameras at the entrance",
        "A visitor sign-in log book",
        "Badge readers on the main door"
      ],
      "answer": "A",
      "explanation": "A mantrap uses two doors, and the second door cannot open until the first has closed behind a single person, so it physically prevents someone from slipping in behind an authorized employee. CCTV and log books are mainly detective or administrative controls, and a badge reader on a single door can be defeated when an employee holds the door open for the person behind them.",
      "topic": "Protection of Information Assets",
      "subtopic": "Physical and Environmental Controls",
      "difficulty": "easy",
      "source": "CISA Domain 5 – Physical and Environmental Controls: physical access controls (mantraps, deadman doors)"
    },
    {
      "stem": "An organization runs its applications on virtual machines rented from an infrastructure as a service (IaaS) provider. Under the shared responsibility model, who is normally responsible for patching the guest operating systems on those virtual machines?",
      "options": [
        "The cloud provider, as part of its standard service",
        "The hypervisor vendor, through automatic updates",
        "The customer organization that deploys the virtual machines",
        "The internet service provider for the customer's connection"
      ],
      "answer": "C",
      "explanation": "In IaaS, the provider is responsible for the physical facilities, hardware, network and virtualization layer, while the customer manages everything it deploys on top, including guest operating systems, middleware, applications and data. Patching the guest operating systems is therefore the customer's job. An IS auditor should check that the organization's patch management process covers cloud-hosted workloads rather than assuming the provider handles them.",
      "topic": "Protection of Information Assets",
      "subtopic": "Cloud and Virtualized Environments",
      "difficulty": "medium",
      "source": "CISA Domain 5 – Cloud and Virtualized Environments: cloud service models and shared responsibility"
    },
    {
      "stem": "An organization commissions a penetration test in which the testers receive no information about the target environment and the organization's IT and security staff are not told that the test is taking place. Which type of test is this?",
      "options": [
        "Blind test",
        "Double-blind test",
        "Targeted test",
        "Internal test"
      ],
      "answer": "B",
      "explanation": "In a double-blind test, the testers have little or no prior knowledge of the target and the defending staff are not informed in advance, so the test evaluates both the security controls and the organization's ability to detect and respond to an attack. In a blind test only the testers lack information, while the staff know the test is happening. In a targeted test the testers and the IT team both know about the test and share information, and an internal test describes where the attack is launched from rather than who is informed.",
      "topic": "Protection of Information Assets",
      "subtopic": "Security Testing Tools and Techniques",
      "difficulty": "hard",
      "source": "CISA Domain 5 – Security Testing Tools and Techniques: penetration testing types (blind, double-blind, targeted)"
    },
    {
      "stem": "An organization suspects that a running file server has been compromised and plans to investigate the incident forensically. To preserve as much evidence as possible, which of the following actions should be taken FIRST?",
      "options": [
        "Shut the server down to stop the attacker's activity",
        "Run a full antivirus scan to remove any malicious code",
        "Restore the server from the most recent clean backup",
        "Capture an image of the server's volatile memory"
      ],
      "answer": "D",
      "explanation": "Volatile data such as memory contents, running processes and active network connections is lost when a system is powered off, so evidence should be collected in order of volatility, starting with memory. Shutting down, scanning or restoring the server would alter or destroy evidence and could leave the investigation incomplete or the evidence inadmissible. Collection should follow a documented procedure that maintains the chain of custody.",
      "topic": "Protection of Information Assets",
      "subtopic": "Evidence Collection and Forensics",
      "difficulty": "medium",
      "source": "CISA Domain 5 – Evidence Collection and Forensics: order of volatility and preservation of evidence"
    }
  ]
}
```
