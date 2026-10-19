```json
{
  "format": "domcq/1",
  "exam": "cisa",
  "set": "Certified Information Systems Auditor (CISA) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "An IS audit manager is preparing the annual audit plan using a risk-based approach. Which of the following is the PRIMARY benefit of this approach?",
      "options": [
        "It ensures that every application is audited at least once each year",
        "It directs limited audit resources to the areas of greatest risk to the organization",
        "It removes the need for auditors to perform substantive testing",
        "It allows the audit plan to be completed without input from management"
      ],
      "answer": "B",
      "explanation": "Risk-based planning ranks auditable areas by the likelihood and impact of risks to business objectives, so limited audit time and staff are spent where they give the most assurance value. It does not guarantee that every area is covered each year, and it does not replace substantive testing; the nature and extent of testing are still set by the assessed risk. ISACA's audit standards require audit plans to be based on a risk assessment, which normally draws on management's input.",
      "topic": "Information System Auditing Process",
      "subtopic": "Risk-Based Audit Planning",
      "difficulty": "easy",
      "source": "CISA Domain 1 – Risk-Based Audit Planning; ISACA ITAF standard on risk assessment in planning"
    },
    {
      "stem": "An IS auditor wants to estimate the percentage of purchase orders in a population that were approved without the required second signature. Which sampling method is MOST appropriate?",
      "options": [
        "Variable sampling",
        "Stratified mean-per-unit sampling",
        "Difference estimation sampling",
        "Attribute sampling"
      ],
      "answer": "D",
      "explanation": "Attribute sampling is used in compliance testing (tests of controls) to estimate the rate at which a characteristic, such as a missing approval, occurs in a population, expressed as a percentage. Variable sampling methods, including mean-per-unit and difference estimation, estimate a monetary amount or other quantity and are used in substantive testing. The choice of method depends on whether the auditor is measuring a deviation rate or a value.",
      "topic": "Information System Auditing Process",
      "subtopic": "Audit Testing and Sampling Methodology",
      "difficulty": "easy",
      "source": "CISA Domain 1 – Audit Testing and Sampling Methodology: compliance vs substantive testing, attribute and variable sampling"
    },
    {
      "stem": "An IS auditor tests an online application's processing logic by entering test transactions against a fictitious entity, such as a dummy branch, that has been set up in the live production files, so that the test transactions are processed together with live transactions. Which technique is the IS auditor using?",
      "options": [
        "Integrated test facility",
        "Parallel simulation",
        "Snapshot technique",
        "Base case system evaluation"
      ],
      "answer": "A",
      "explanation": "An integrated test facility (ITF) creates dummy entities within the production system so that test transactions run through the same programs as live data, letting the auditor compare actual results with predetermined expected results. Its main risk is that test transactions may affect live totals or reports, so they must be identified and excluded or reversed. Parallel simulation instead uses auditor-controlled programs to reprocess real production data, and a snapshot records the state of a transaction at selected points in processing.",
      "topic": "Information System Auditing Process",
      "subtopic": "Audit Data Analytics (including audit algorithms)",
      "difficulty": "medium",
      "source": "CISA Domain 1 – CAATs and continuous online auditing techniques (ITF, snapshots, parallel simulation)"
    },
    {
      "stem": "During fieldwork, an IS auditor identifies a significant control weakness. Before the audit report is issued, management corrects the weakness and the IS auditor verifies the correction. The IS auditor should:",
      "options": [
        "remove the finding from the report because it no longer exists",
        "communicate the finding verbally to management only",
        "include the finding in the report and note that it has been corrected",
        "delay issuing the report until the next scheduled audit"
      ],
      "answer": "C",
      "explanation": "The audit report must give a complete and objective account of the conditions found; the weakness existed during the period under review and may have been exploited before it was fixed, so it remains relevant to the report's readers. Reporting the finding together with management's corrective action gives management credit while preserving the integrity of the audit record. Omitting it or handling it only informally would undermine the auditor's objectivity and the completeness of the report.",
      "topic": "Information System Auditing Process",
      "subtopic": "Reporting and Communication Techniques",
      "difficulty": "medium",
      "source": "CISA Domain 1 – Reporting and Communication Techniques; ISACA ITAF reporting standard"
    },
    {
      "stem": "Which of the following holds ultimate accountability for the governance of enterprise IT?",
      "options": [
        "The chief information officer",
        "The IT steering committee",
        "The chief information security officer",
        "The board of directors"
      ],
      "answer": "D",
      "explanation": "Governance, meaning evaluating, directing and monitoring, is the responsibility of the board of directors, as distinct from management, which plans, builds, runs and monitors activities in line with the board's direction. The CIO, CISO and IT steering committee carry out or oversee IT management and investment prioritization, but they are accountable to the board. COBIT 2019 makes this separation between governance and management explicit.",
      "topic": "Governance and Management of IT",
      "subtopic": "Organizational Structure, IT Governance, and IT Strategy",
      "difficulty": "easy",
      "source": "CISA Domain 2 – IT Governance; COBIT 2019 Framework: governance vs management, Evaluate, Direct and Monitor (EDM) objectives"
    },
    {
      "stem": "Which of the following roles is responsible for determining the classification level of a set of business data?",
      "options": [
        "The data custodian",
        "The data owner",
        "The security administrator",
        "The database administrator"
      ],
      "answer": "B",
      "explanation": "The data owner, typically a business manager accountable for the data, decides how sensitive and critical the data is and therefore its classification and who may access it. Custodians, such as IT operations staff and database administrators, implement and maintain the protections the owner specifies, and the security administrator enforces the resulting access rules. Leaving classification to IT staff would separate the decision from the business knowledge of the data's value and risk.",
      "topic": "Governance and Management of IT",
      "subtopic": "Data Governance and Classification",
      "difficulty": "easy",
      "source": "CISA Domain 2 – Data Governance and Classification: data ownership and custodianship"
    },
    {
      "stem": "An organization plans to implement a new customer analytics platform that will process large volumes of personal data. Which of the following should be performed FIRST to identify and address the platform's privacy risks?",
      "options": [
        "A privacy impact assessment during the design stage",
        "A penetration test after the platform goes live",
        "A post-implementation review of the platform",
        "A vulnerability scan of the platform's servers"
      ],
      "answer": "A",
      "explanation": "A privacy impact assessment (PIA) evaluates how personal data will be collected, used, shared and retained so that privacy risks can be identified and mitigated before the system is built. Performing it early supports privacy by design, because changes are cheaper and more effective at the design stage. Penetration tests, vulnerability scans and post-implementation reviews happen later and focus on technical security or benefits rather than on privacy risk to individuals.",
      "topic": "Governance and Management of IT",
      "subtopic": "Privacy Program and Principles",
      "difficulty": "medium",
      "source": "CISA Domain 2 – Privacy Program and Principles: privacy impact assessments and privacy by design"
    },
    {
      "stem": "An organization outsources its payroll processing to a service provider. The organization's IS auditor needs assurance, without testing the provider directly, that the provider's controls relevant to the organization's financial reporting operated effectively throughout the past year. Which of the following reports BEST meets this need?",
      "options": [
        "A SOC 1 Type 1 report from an independent service auditor",
        "A SOC 2 Type 1 report from an independent service auditor",
        "A SOC 1 Type 2 report from an independent service auditor",
        "A SOC 3 report published on the provider's website"
      ],
      "answer": "C",
      "explanation": "SOC 1 reports cover a service organization's controls relevant to its customers' internal control over financial reporting, which payroll processing directly affects. A Type 2 report includes the service auditor's tests of the operating effectiveness of those controls over a specified period, whereas a Type 1 report addresses only the design of controls at a point in time. SOC 2 and SOC 3 reports address the Trust Services Criteria, such as security and availability, rather than financial reporting controls, and a SOC 3 is a general-use summary without detailed test results.",
      "topic": "Governance and Management of IT",
      "subtopic": "IT Vendor Management",
      "difficulty": "hard",
      "source": "CISA Domain 2 – IT Vendor Management: third-party assurance reports; AICPA SOC 1 (SSAE 18) and SOC 2 reporting"
    },
    {
      "stem": "An organization is converting customer account data from a legacy system to a new system. Which of the following controls BEST ensures that the data has been converted completely and accurately?",
      "options": [
        "Having the software vendor certify the conversion program",
        "Reconciling record counts and control totals between the old and new systems",
        "Running the conversion program during non-business hours",
        "Taking a full backup of the legacy database before conversion"
      ],
      "answer": "B",
      "explanation": "Reconciling record counts, hash totals and financial control totals between the source and target data gives direct evidence that no records were lost, duplicated or altered during conversion. Exception reports and sample checks of individual records can supplement the reconciliation. A backup supports recovery if the conversion fails, and vendor certification or scheduling choices do not show that this particular conversion produced complete and accurate results.",
      "topic": "Information Systems Acquisition, Development, and Implementation",
      "subtopic": "System Migration, Infrastructure Deployment, and Data Conversion",
      "difficulty": "medium",
      "source": "CISA Domain 3 – System Migration, Infrastructure Deployment, and Data Conversion: data conversion controls"
    },
    {
      "stem": "An IS auditor reviewing a system development project obtains the following earned value data at the current reporting date: planned value is $500,000, earned value is $400,000 and actual cost is $450,000. Based on this data, the project is:",
      "options": [
        "ahead of schedule and under budget",
        "ahead of schedule and over budget",
        "behind schedule and under budget",
        "behind schedule and over budget"
      ],
      "answer": "D",
      "explanation": "Schedule variance is earned value minus planned value ($400,000 - $500,000 = -$100,000), so less work has been completed than planned and the project is behind schedule (schedule performance index 0.8). Cost variance is earned value minus actual cost ($400,000 - $450,000 = -$50,000), so the completed work has cost more than its budgeted value and the project is over budget (cost performance index about 0.89). Earned value analysis lets the auditor judge progress objectively instead of relying on reported percentage complete.",
      "topic": "Information Systems Acquisition, Development, and Implementation",
      "subtopic": "Project Governance and Management",
      "difficulty": "hard",
      "source": "CISA Domain 3 – Project Governance and Management: project control and earned value analysis (EVA)"
    },
    {
      "stem": "Which of the following is the PRIMARY purpose of a business impact analysis (BIA)?",
      "options": [
        "To identify critical business processes and the impact of their disruption",
        "To document the detailed steps for restoring IT systems after a disaster",
        "To select the most cost-effective alternate processing site",
        "To verify that backup media can be restored successfully"
      ],
      "answer": "A",
      "explanation": "A BIA identifies the organization's critical processes and the resources that support them, and evaluates the operational and financial impact of their disruption over time. Its results, such as recovery priorities and recovery time objectives, form the basis for the business continuity and recovery strategy. Selecting a recovery site, writing recovery procedures and testing backups are later activities that depend on what the BIA establishes.",
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "Business Impact Analysis (BIA)",
      "difficulty": "easy",
      "source": "CISA Domain 4 – Business Impact Analysis (BIA)"
    },
    {
      "stem": "Management has set a recovery point objective (RPO) of close to zero for a high-volume payment processing system. Which of the following data protection approaches BEST meets this requirement?",
      "options": [
        "Daily full backups sent to an offsite storage facility",
        "Weekly full backups with daily incremental backups",
        "Synchronous replication of data to a remote site",
        "Nightly snapshots of the database stored on a local server"
      ],
      "answer": "C",
      "explanation": "The RPO is the maximum amount of data loss, measured in time, that the business can tolerate. Synchronous replication (mirroring) writes each transaction to the remote site before the transaction is confirmed, so almost no committed data is lost if the primary site fails. Daily, weekly or nightly backups could lose up to a day or more of transactions and therefore cannot meet an RPO near zero.",
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "Data Backup, Storage, and Restoration",
      "difficulty": "medium",
      "source": "CISA Domain 4 – Data Backup, Storage, and Restoration; recovery point objective (RPO)"
    },
    {
      "stem": "To restore service quickly, developers occasionally make emergency changes directly to production programs using a special privileged ID. Which of the following is the MOST important control over this practice?",
      "options": [
        "Developers retain permanent access to production to avoid delays",
        "The password for the privileged ID is changed once each year",
        "Emergency changes are prohibited regardless of business impact",
        "Use of the ID is logged and each change is approved after the fact"
      ],
      "answer": "D",
      "explanation": "Emergency changes bypass the normal approval and testing path, so the key compensating control is to record when the emergency ID is used and what was changed, and then put each change through retrospective review, documentation and management approval under the normal change process. This preserves accountability and allows unauthorized changes to be detected. Prohibiting emergency changes is unrealistic for service continuity, and permanent developer access to production would breach segregation of duties.",
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "IT Change, Configuration, and Patch Management",
      "difficulty": "medium",
      "source": "CISA Domain 4 – IT Change, Configuration, and Patch Management: emergency changes"
    },
    {
      "stem": "Which of the following is the PRIMARY objective of problem management, as distinct from incident management?",
      "options": [
        "Restoring normal service to users as quickly as possible",
        "Determining the root cause of incidents to prevent recurrence",
        "Logging and categorizing all calls received by the service desk",
        "Approving and scheduling changes to production systems"
      ],
      "answer": "B",
      "explanation": "Incident management focuses on restoring normal service quickly and minimizing business impact, often through workarounds. Problem management investigates the underlying root cause of one or more incidents and seeks a permanent fix, usually implemented through a change request, so that the incidents do not recur. By tracking known errors and trends, problem management reduces the number and impact of incidents over time.",
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "Problem and Incident Management",
      "difficulty": "medium",
      "source": "CISA Domain 4 – Problem and Incident Management"
    },
    {
      "stem": "An organization wants a disaster recovery test that gives a high level of assurance that its recovery site can process actual production workloads, without interrupting operations at the primary site. Which type of test is MOST appropriate?",
      "options": [
        "Parallel test",
        "Full interruption test",
        "Simulation test",
        "Structured walk-through"
      ],
      "answer": "A",
      "explanation": "In a parallel test, the recovery site is brought to operational readiness and processes production data alongside the primary site, so results can be compared without stopping normal operations. A full interruption test gives the most realistic assurance but deliberately shuts down the primary site, which is costly and risky and is done only after lesser tests have succeeded. Walk-throughs and simulation tests exercise the plan and staff roles but do not prove that the recovery site can actually run production workloads.",
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "Disaster Recovery Plans (DRP)",
      "difficulty": "hard",
      "source": "CISA Domain 4 – Disaster Recovery Plans (DRP): types of recovery plan tests"
    },
    {
      "stem": "Which of the following is the MOST effective control for preventing unauthorized persons from following an authorized employee into a secure computer room?",
      "options": [
        "A closed-circuit television camera at the entrance",
        "A visitor log at the reception desk",
        "A mantrap with interlocking doors",
        "A single door with a badge reader"
      ],
      "answer": "C",
      "explanation": "Tailgating, or piggybacking, occurs when an unauthorized person enters behind someone who has opened a controlled door. A mantrap (deadman door) uses two interlocked doors so that the second opens only after the first has closed, letting one person through at a time, which prevents rather than merely records unauthorized entry. CCTV and visitor logs are mainly detective, and a single badge-controlled door can easily be held open for others.",
      "topic": "Protection of Information Assets",
      "subtopic": "Physical and Environmental Controls",
      "difficulty": "easy",
      "source": "CISA Domain 5 – Physical and Environmental Controls: physical access controls"
    },
    {
      "stem": "A sender wants to ensure that the recipient of an electronic message can verify its origin and that the sender cannot later deny having sent it. The sender should:",
      "options": [
        "encrypt a hash of the message with the sender's public key",
        "encrypt a hash of the message with the sender's private key",
        "encrypt the message with the recipient's public key",
        "encrypt the message with a shared symmetric key"
      ],
      "answer": "B",
      "explanation": "Encrypting a message digest with the sender's private key creates a digital signature that anyone can verify with the sender's public key; because only the sender holds the private key, the signature provides authentication and nonrepudiation as well as integrity. Encrypting with the recipient's public key provides confidentiality but proves nothing about who sent the message. A shared symmetric key cannot provide nonrepudiation because both parties hold the same key.",
      "topic": "Protection of Information Assets",
      "subtopic": "Data Encryption",
      "difficulty": "medium",
      "source": "CISA Domain 5 – Data Encryption: asymmetric encryption and digital signatures"
    },
    {
      "stem": "An IS auditor finds that several user accounts belonging to employees who left the organization months ago are still active. Which of the following is the BEST recommendation to address the root cause?",
      "options": [
        "Perform an annual review of all active user accounts",
        "Disable accounts after 90 days without a successful login",
        "Ask departing employees to notify the help desk on their last day",
        "Link HR termination notices to a process for prompt account removal"
      ],
      "answer": "D",
      "explanation": "The root cause is that access administrators are not reliably informed when employment ends, so the fix is a formal deprovisioning process triggered by HR's termination notice, ideally automated, with access removed on or before the last working day. Inactivity-based disabling and annual reviews are useful detective or compensating controls, but they leave accounts open for long periods after departure. Relying on departing employees to notify the help desk is unreliable, especially for involuntary terminations.",
      "topic": "Protection of Information Assets",
      "subtopic": "Identity and Access Management",
      "difficulty": "medium",
      "source": "CISA Domain 5 – Identity and Access Management: user provisioning and deprovisioning"
    },
    {
      "stem": "An organization runs its applications on virtual machines rented under an infrastructure as a service (IaaS) cloud model. Under the shared responsibility model, which of the following is normally the organization's responsibility rather than the provider's?",
      "options": [
        "Patching the guest operating systems on its virtual machines",
        "Maintaining the hypervisor that hosts the virtual machines",
        "Securing physical access to the provider's data centers",
        "Replacing failed physical storage devices in the provider's facility"
      ],
      "answer": "A",
      "explanation": "In IaaS, the provider is responsible for the physical facilities, hardware, network infrastructure and virtualization layer, while the customer manages what it deploys on top, including guest operating systems, middleware, applications, data and user access. The customer must therefore patch and harden its own virtual machine operating systems. Responsibilities shift further toward the provider in PaaS and SaaS, so the IS auditor must confirm the split for the specific service model and contract.",
      "topic": "Protection of Information Assets",
      "subtopic": "Cloud and Virtualized Environments",
      "difficulty": "medium",
      "source": "CISA Domain 5 – Cloud and Virtualized Environments: cloud service models and shared responsibility"
    },
    {
      "stem": "A security team confirms that a running server has been compromised, and management intends to pursue legal action against the attacker. Which of the following should be done FIRST to preserve evidence?",
      "options": [
        "Shut down the server to stop the attacker from deleting files",
        "Restore the server from the most recent clean backup",
        "Acquire a forensic copy of the server's volatile memory",
        "Run a malware removal tool to identify the attacker's code"
      ],
      "answer": "C",
      "explanation": "Evidence should be collected in order of volatility, and the contents of memory, such as running processes, network connections, encryption keys and malware that may exist only in RAM, are lost as soon as the system is powered off. Capturing memory with forensically sound tools, while documenting the chain of custody, preserves this evidence before disk images are taken. Shutting down, restoring or cleaning the server destroys or alters evidence and may make it inadmissible.",
      "topic": "Protection of Information Assets",
      "subtopic": "Evidence Collection and Forensics",
      "difficulty": "hard",
      "source": "CISA Domain 5 – Evidence Collection and Forensics; IETF RFC 3227 Guidelines for Evidence Collection and Archiving (order of volatility)"
    }
  ]
}
```
