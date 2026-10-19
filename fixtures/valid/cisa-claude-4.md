```json
{
  "format": "domcq/1",
  "exam": "cisa",
  "set": "Certified Information Systems Auditor (CISA) practice – Mixed Domains Set 1",
  "questions": [
    {
      "stem": "An IS audit function has limited staff and cannot review every system each year. Which of the following is the PRIMARY reason for the IS auditor to use a risk-based approach when developing the annual audit plan?",
      "options": [
        "To reduce the total number of audit hours charged to each engagement",
        "To focus audit resources on the areas that present the greatest exposure",
        "To remove the need for substantive testing in the lower-risk areas",
        "To ensure that every application is reviewed on a fixed rotation"
      ],
      "answer": "B",
      "explanation": "Audit resources are always limited, so a risk-based approach ranks auditable areas by the likelihood and impact of risks to the organization's objectives and schedules the highest-risk areas first. This gives management and the audit committee the most meaningful assurance for the effort spent. Efficiency gains and changes to the extent of testing are consequences of the approach, not its primary purpose.",
      "rationales": {
        "A": "Incorrect: saving hours may be a side effect, but the purpose is to cover the most significant risks.",
        "B": "Correct: risk-based planning allocates limited audit resources to the areas of highest risk to the organization.",
        "C": "Incorrect: risk assessment shapes the nature and extent of testing; it does not remove the need for substantive tests.",
        "D": "Incorrect: a fixed rotation treats all systems alike and ignores their relative risk."
      },
      "topic": "Information System Auditing Process",
      "subtopic": "Risk-Based Audit Planning",
      "difficulty": "easy",
      "source": "CISA Review Manual, Domain 1 – Risk-Based Audit Planning; ITAF standard on risk assessment in planning"
    },
    {
      "stem": "Which of the following types of audit evidence is generally the MOST reliable?",
      "options": [
        "An oral statement from the system administrator describing the control",
        "A spreadsheet summary prepared by the auditee's finance team",
        "A copy of a system report supplied by the department being audited",
        "A confirmation sent directly to the IS auditor by an independent third party"
      ],
      "answer": "D",
      "explanation": "Evidence is more reliable when it comes from a source independent of the auditee and reaches the auditor without passing through the auditee's hands. A confirmation sent directly to the IS auditor by an independent third party meets both conditions, so the risk of bias or alteration is low. Oral statements and documents prepared or supplied by the auditee are useful but less objective and usually need corroboration.",
      "rationales": {
        "A": "Incorrect: oral evidence is the least objective form and normally needs corroboration by other evidence.",
        "B": "Incorrect: a summary prepared by the auditee could be incomplete or biased and is not independent.",
        "C": "Incorrect: a copy supplied by the auditee may have been altered and lacks independence.",
        "D": "Correct: it comes from an independent source and goes straight to the auditor, so it is the most objective."
      },
      "topic": "Information System Auditing Process",
      "subtopic": "Audit Evidence Collection Techniques",
      "difficulty": "easy",
      "source": "CISA Review Manual, Domain 1 – Audit Evidence Collection Techniques (reliability of evidence); ITAF standard on evidence"
    },
    {
      "stem": "An IS auditor is testing whether purchase orders above a set value were approved by an authorized manager before being sent to suppliers. The auditor wants to estimate the rate at which this control was not followed across the whole population of purchase orders. Which sampling method is MOST appropriate?",
      "options": [
        "Attribute sampling",
        "Variable sampling",
        "Mean-per-unit sampling",
        "Difference estimation sampling"
      ],
      "answer": "A",
      "explanation": "Testing whether a control was performed is a compliance test, and the question is how often a characteristic (a deviation) occurs. Attribute sampling estimates the rate of occurrence of such a characteristic in a population and is the standard method for tests of controls. Variable sampling methods, such as mean-per-unit and difference estimation, estimate monetary values or quantities and are used in substantive testing.",
      "rationales": {
        "A": "Correct: attribute sampling estimates the rate at which a control deviation occurs, which is what the auditor needs.",
        "B": "Incorrect: variable sampling estimates a monetary amount or quantity, not a rate of deviation.",
        "C": "Incorrect: mean-per-unit is a variable sampling technique for estimating values in substantive tests.",
        "D": "Incorrect: difference estimation is a variable sampling technique for estimating misstatement amounts."
      },
      "topic": "Information System Auditing Process",
      "subtopic": "Audit Testing and Sampling Methodology",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 1 – Audit Testing and Sampling Methodology (attribute vs. variable sampling)"
    },
    {
      "stem": "During fieldwork, an IS auditor identifies a significant control weakness in a payment system. Before the audit report is issued, management corrects the weakness and the auditor confirms that the fix is effective. The IS auditor should:",
      "options": [
        "remove the finding from the report because it has been resolved",
        "communicate the finding verbally to management only",
        "include the finding in the report and note the corrective action",
        "delay the report until the fix has operated for a full year"
      ],
      "answer": "C",
      "explanation": "The audit report must fairly and completely describe the conditions found during the audit. A significant weakness existed and could have been exploited before it was fixed, so stakeholders need to know about it; omitting it would understate the risk the organization was exposed to. Recording management's corrective action and the auditor's verification keeps the report balanced and accurate.",
      "rationales": {
        "A": "Incorrect: removing it would make the report incomplete, because the weakness existed during the period audited.",
        "B": "Incorrect: significant findings belong in the written report, not only in informal verbal communication.",
        "C": "Correct: reporting the finding together with the corrective action gives a complete and balanced picture.",
        "D": "Incorrect: there is no need to delay; the auditor has verified the fix and can report it with the finding."
      },
      "topic": "Information System Auditing Process",
      "subtopic": "Reporting and Communication Techniques",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 1 – Reporting and Communication Techniques; ITAF reporting standard"
    },
    {
      "stem": "Which of the following roles is PRIMARILY responsible for determining the classification level of a set of business data?",
      "options": [
        "The data owner",
        "The data custodian",
        "The security administrator",
        "The database administrator"
      ],
      "answer": "A",
      "explanation": "The data owner is a business manager accountable for a set of data and is best placed to judge its value, sensitivity and the impact of its disclosure or loss. The owner therefore decides the classification and approves who may access the data. Custodians and administrators implement and operate the protective controls that the classification requires, but they do not set it.",
      "rationales": {
        "A": "Correct: the data owner is accountable for the data and decides its classification level.",
        "B": "Incorrect: the custodian stores and protects the data according to the classification the owner sets.",
        "C": "Incorrect: the security administrator implements access controls but does not decide data sensitivity.",
        "D": "Incorrect: the database administrator manages the database technically and does not own the business data."
      },
      "topic": "Governance and Management of IT",
      "subtopic": "Data Governance and Classification",
      "difficulty": "easy",
      "source": "CISA Review Manual, Domain 2 – Data Governance and Classification (data owner responsibilities)"
    },
    {
      "stem": "Which of the following BEST describes the primary role of an IT strategy committee in an organization's IT governance structure?",
      "options": [
        "Prioritizing individual IT projects and monitoring their delivery",
        "Approving and scheduling changes to production systems",
        "Advising the board on how IT supports the business strategy",
        "Supervising daily IT operations and service desk performance"
      ],
      "answer": "C",
      "explanation": "An IT strategy committee operates at board level and advises the board on strategic IT matters, such as how IT supports and enables business strategy, IT investment and IT-related risk. Executive-level bodies handle implementation: the IT steering committee prioritizes and monitors projects, a change advisory board approves changes, and IT management runs operations. Keeping these roles distinct is part of effective IT governance.",
      "rationales": {
        "A": "Incorrect: project prioritization and monitoring are the role of the executive-level IT steering committee.",
        "B": "Incorrect: approving production changes belongs to change management, such as a change advisory board.",
        "C": "Correct: the IT strategy committee advises the board on IT's alignment with and support of business strategy.",
        "D": "Incorrect: day-to-day operations are managed by IT management, not by a board-level governance committee."
      },
      "topic": "Governance and Management of IT",
      "subtopic": "Organizational Structure, IT Governance, and IT Strategy",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 2 – Organizational Structure, IT Governance, and IT Strategy (IT strategy vs. steering committee)"
    },
    {
      "stem": "An organization plans to launch a new customer analytics platform that will combine personal data collected from several existing systems. Which of the following should be performed FIRST to identify and address the privacy risks of this initiative?",
      "options": [
        "A penetration test of the new analytics platform",
        "A privacy impact assessment of the planned processing",
        "A review of the platform vendor's financial stability",
        "A tuning exercise for the data loss prevention rules"
      ],
      "answer": "B",
      "explanation": "A privacy impact assessment is performed early, while the initiative is still being designed, to analyze what personal data will be collected, how it will be used, shared and retained, and what risks this creates for individuals and for compliance. Its results let the organization build privacy controls, such as data minimization and purpose limitation, into the design. Security testing and DLP tuning are useful later but do not address whether the processing itself is appropriate.",
      "rationales": {
        "A": "Incorrect: a penetration test checks the technical security of a built system, not the privacy risks of the processing.",
        "B": "Correct: a PIA identifies the privacy risks of the planned processing early so that controls can be designed in.",
        "C": "Incorrect: vendor financial stability is a sourcing concern, not a means of identifying privacy risks.",
        "D": "Incorrect: DLP tuning is an operational control applied later and does not assess the planned use of personal data."
      },
      "topic": "Governance and Management of IT",
      "subtopic": "Privacy Program and Principles",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 2 – Privacy Program and Principles (privacy impact assessment, privacy by design)"
    },
    {
      "stem": "An organization relies on a third-party service provider to process its payroll. The contract does not include a right-to-audit clause, and the IS auditor must obtain assurance that the provider's relevant controls operated effectively during the past year. Which of the following is the BEST source of evidence?",
      "options": [
        "A service auditor's Type 1 report on the provider's control design",
        "The provider's completed security self-assessment questionnaire",
        "Monthly service level reports produced by the provider",
        "A service auditor's Type 2 report covering the relevant period"
      ],
      "answer": "D",
      "explanation": "A Type 2 service auditor's report (for example, a SOC 1 Type 2 under SSAE 18 or a report under ISAE 3402) contains an independent auditor's opinion on whether controls were suitably designed and operated effectively throughout a specified period. Because the IS auditor needs evidence of operating effectiveness over the past year and cannot audit the provider directly, this is the best source. A Type 1 report covers design only at a point in time, and self-assessments or provider-produced reports lack independence. The auditor should still confirm the report's scope and period and consider the complementary user entity controls it lists.",
      "rationales": {
        "A": "Incorrect: a Type 1 report addresses control design at a point in time, not operating effectiveness over a period.",
        "B": "Incorrect: a self-assessment is prepared by the provider itself and offers no independent assurance.",
        "C": "Incorrect: SLA reports show service performance, not whether controls operated effectively, and are not independent.",
        "D": "Correct: a Type 2 report gives an independent opinion on control operating effectiveness over the period."
      },
      "topic": "Governance and Management of IT",
      "subtopic": "IT Vendor Management",
      "difficulty": "hard",
      "source": "CISA Review Manual, Domain 2 – IT Vendor Management; service organization control reports (SSAE 18 / ISAE 3402)"
    },
    {
      "stem": "An organization is migrating customer account data from a legacy system to a new application. Which of the following provides the BEST assurance that the data was converted completely and accurately?",
      "options": [
        "Reviewing the source code of the data conversion programs",
        "Running the conversion during a low-volume weekend period",
        "Reconciling record counts and control totals between the systems",
        "Having users test a sample of screens in the new application"
      ],
      "answer": "C",
      "explanation": "Completeness and accuracy of a conversion are best proven by comparing the actual results: record counts show that every record was transferred, and control totals (such as account balance totals or hash totals) show that values were not altered. Reconciling these between the legacy and new systems covers the entire population. Code review shows only what the programs are supposed to do, and screen testing covers just a sample.",
      "rationales": {
        "A": "Incorrect: code review evaluates the logic but does not prove that the actual conversion run was complete and accurate.",
        "B": "Incorrect: timing reduces business disruption but does nothing to verify the converted data.",
        "C": "Correct: reconciling counts and totals verifies completeness and accuracy across the whole population.",
        "D": "Incorrect: user testing of a sample of screens covers only a small part of the data and may miss errors."
      },
      "topic": "Information Systems Acquisition, Development, and Implementation",
      "subtopic": "System Migration, Infrastructure Deployment, and Data Conversion",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 3 – System Migration, Infrastructure Deployment, and Data Conversion"
    },
    {
      "stem": "An IS auditor reviews the earned value data for a system development project at its mid-point. The planned value (PV) is $450,000, the earned value (EV) is $400,000 and the actual cost (AC) is $500,000. Which of the following conclusions should the IS auditor draw?",
      "options": [
        "The project is over budget and behind schedule",
        "The project is over budget but ahead of schedule",
        "The project is under budget but behind schedule",
        "The project is under budget and ahead of schedule"
      ],
      "answer": "A",
      "explanation": "Earned value analysis compares the value of the work actually completed (EV) with both what was planned (PV) and what was spent (AC). Cost variance is EV minus AC, here -$100,000 (cost performance index 0.8), so the project has spent more than the value of the work done and is over budget. Schedule variance is EV minus PV, here -$50,000 (schedule performance index about 0.89), so less work has been completed than planned and the project is behind schedule.",
      "rationales": {
        "A": "Correct: EV is below AC, so the project is over budget, and EV is below PV, so it is behind schedule.",
        "B": "Incorrect: EV of $400,000 is less than PV of $450,000, so the project is behind schedule, not ahead.",
        "C": "Incorrect: AC of $500,000 exceeds EV of $400,000, so the project is over budget, not under.",
        "D": "Incorrect: both the cost and schedule variances are negative, so neither under budget nor ahead applies."
      },
      "topic": "Information Systems Acquisition, Development, and Implementation",
      "subtopic": "Project Governance and Management",
      "difficulty": "hard",
      "source": "CISA Review Manual, Domain 3 – Project Governance and Management (earned value analysis)"
    },
    {
      "stem": "When defining disaster recovery requirements, the recovery point objective (RPO) for an application is based on:",
      "options": [
        "the maximum acceptable time to restore the application after an outage",
        "the cost of contracting an alternate processing facility for the application",
        "the number of users who depend on the application during peak periods",
        "the maximum acceptable data loss, measured back from the time of the outage"
      ],
      "answer": "D",
      "explanation": "The recovery point objective defines the point in time to which data must be recovered, which is the amount of data loss, measured in time, that the business can tolerate. It is set from the business impact analysis and drives how often data is backed up or replicated: a near-zero RPO requires techniques such as continuous replication or mirroring. The maximum acceptable downtime is a separate measure, the recovery time objective.",
      "rationales": {
        "A": "Incorrect: the maximum acceptable time to restore service is the recovery time objective (RTO).",
        "B": "Incorrect: site cost is weighed when choosing a recovery strategy; it does not define the RPO.",
        "C": "Incorrect: user numbers may affect criticality but do not define the acceptable point of data recovery.",
        "D": "Correct: RPO is the acceptable data loss expressed in time, and it determines backup or replication frequency."
      },
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "Disaster Recovery Plans (DRP)",
      "difficulty": "easy",
      "source": "CISA Review Manual, Domain 4 – Disaster Recovery Plans (recovery objectives)"
    },
    {
      "stem": "During a business impact analysis (BIA), which of the following parties should PRIMARILY determine the criticality of each business process?",
      "options": [
        "The IT operations manager",
        "The business process owners",
        "The internal audit department",
        "The disaster recovery vendor"
      ],
      "answer": "B",
      "explanation": "Criticality depends on the operational, financial, legal and reputational impact of a process being unavailable over time, and the business process owners understand those impacts best. Their input drives the ranking of processes and the recovery objectives, which senior management then approves. IT supplies technical recovery information, and the IS auditor should not make management decisions that would impair independence.",
      "rationales": {
        "A": "Incorrect: IT operations supports recovery but cannot judge the business impact of a process outage.",
        "B": "Correct: process owners understand the business impact of disruption and are best placed to judge criticality.",
        "C": "Incorrect: internal audit may review the BIA but should not make management decisions about criticality.",
        "D": "Incorrect: an external vendor lacks knowledge of the organization's business impacts and priorities."
      },
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "Business Impact Analysis (BIA)",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 4 – Business Impact Analysis (BIA)"
    },
    {
      "stem": "An IS auditor is reviewing the procedures for emergency changes to production systems. Which of the following is MOST important?",
      "options": [
        "Emergency changes are documented and approved afterward through normal procedures",
        "Emergency changes are made only by the developer who originally wrote the program",
        "Developers keep standing access to production so they can apply urgent fixes",
        "Emergency changes skip testing so that system downtime is kept to a minimum"
      ],
      "answer": "A",
      "explanation": "Emergency changes skip some normal steps to restore service quickly, which creates a risk that unauthorized or faulty changes reach production. The key compensating control is that every emergency change is logged and then documented, reviewed and approved through the normal change management process soon after it is made. Access used for the fix should be temporary and monitored, and the change should still be tested as far as circumstances allow.",
      "rationales": {
        "A": "Correct: after-the-fact documentation, review and approval keep emergency changes authorized and traceable.",
        "B": "Incorrect: limiting changes to the original developer does not ensure they are authorized or reviewed.",
        "C": "Incorrect: standing developer access to production breaks segregation of duties; access should be temporary.",
        "D": "Incorrect: skipping testing entirely increases the risk of failure; emergency changes should still be tested."
      },
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "IT Change, Configuration, and Patch Management",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 4 – IT Change, Configuration, and Patch Management (emergency changes)"
    },
    {
      "stem": "Which of the following is the PRIMARY objective of problem management, as distinct from incident management?",
      "options": [
        "Restoring normal service operation as quickly as possible",
        "Logging and categorizing every user request for service",
        "Identifying and eliminating the root cause of incidents",
        "Approving changes before they are moved into production"
      ],
      "answer": "C",
      "explanation": "Incident management aims to restore normal service as quickly as possible, often by using a workaround. Problem management looks beyond individual incidents to find the underlying root cause of one or more incidents, records known errors and initiates a permanent fix, usually through change management, so the incidents do not recur. Over time this reduces the number and impact of incidents.",
      "rationales": {
        "A": "Incorrect: restoring service quickly is the primary objective of incident management.",
        "B": "Incorrect: logging and categorizing requests is a service desk and request fulfillment activity.",
        "C": "Correct: problem management finds and removes underlying causes so that incidents do not recur.",
        "D": "Incorrect: approving changes is part of change management, which problem management feeds into."
      },
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "Problem and Incident Management",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 4 – Problem and Incident Management"
    },
    {
      "stem": "An organization performs a full backup every Sunday night and a differential backup every other night of the week. A disk failure destroys the production data on Thursday afternoon, before that night's backup has run. Which is the MINIMUM set of backups required to restore the data to the most recent possible point?",
      "options": [
        "Sunday's full backup plus the Monday, Tuesday and Wednesday differentials",
        "Wednesday's differential backup alone, as it holds every change since Sunday",
        "Sunday's full backup alone, as differentials cannot be applied to it",
        "Sunday's full backup plus the differential taken on Wednesday night"
      ],
      "answer": "D",
      "explanation": "A differential backup copies all data changed since the last full backup, so each night's differential contains everything in the earlier ones. Restoration therefore needs only the last full backup followed by the most recent differential. With incremental backups, which copy only the changes since the previous backup of any type, the full backup and every subsequent incremental would be needed instead.",
      "rationales": {
        "A": "Incorrect: Wednesday's differential already includes Monday's and Tuesday's changes, so those are not required.",
        "B": "Incorrect: a differential holds only changes since the full backup and cannot restore the data on its own.",
        "C": "Incorrect: differentials can be applied, and using only the full backup would lose all changes since Sunday.",
        "D": "Correct: the last full backup plus the latest differential restores all data up to Wednesday night."
      },
      "topic": "Information Systems Operations and Business Resilience",
      "subtopic": "Data Backup, Storage, and Restoration",
      "difficulty": "hard",
      "source": "CISA Review Manual, Domain 4 – Data Backup, Storage, and Restoration (full, differential and incremental backups)"
    },
    {
      "stem": "Which of the following provides the STRONGEST authentication for employees accessing the corporate network remotely?",
      "options": [
        "A complex password that must be changed every 30 days",
        "A password combined with a one-time code from a hardware token",
        "A user ID together with a memorized personal identification number",
        "Two different passwords entered one after the other"
      ],
      "answer": "B",
      "explanation": "Strong authentication combines factors from different categories: something the user knows, something the user has and something the user is. A password with a one-time code from a hardware token uses two different factors, so an attacker who steals the password still cannot log in without the token. Complex passwords, PINs and multiple passwords are all knowledge factors and therefore remain single-factor authentication.",
      "rationales": {
        "A": "Incorrect: a complex, frequently changed password is still a single knowledge factor and can be phished.",
        "B": "Correct: it combines something the user knows with something the user has, which is two-factor authentication.",
        "C": "Incorrect: a user ID is only an identifier and a PIN is a knowledge factor, so this is single-factor.",
        "D": "Incorrect: two passwords are both knowledge factors, so this is still single-factor authentication."
      },
      "topic": "Protection of Information Assets",
      "subtopic": "Identity and Access Management",
      "difficulty": "easy",
      "source": "CISA Review Manual, Domain 5 – Identity and Access Management (multifactor authentication)"
    },
    {
      "stem": "A sender wants to use asymmetric encryption so that only the intended recipient can read a confidential message. The sender should encrypt the message with the:",
      "options": [
        "sender's private key",
        "sender's public key",
        "recipient's public key",
        "recipient's private key"
      ],
      "answer": "C",
      "explanation": "In asymmetric cryptography, data encrypted with one key of a pair can be decrypted only with the other key. Encrypting with the recipient's public key means only the holder of the matching private key, the recipient, can decrypt the message, which provides confidentiality. Encrypting with the sender's private key proves origin, which is the basis of digital signatures, but anyone with the sender's public key could read the message.",
      "rationales": {
        "A": "Incorrect: anyone with the sender's public key could decrypt it, so this gives authentication, not confidentiality.",
        "B": "Incorrect: only the sender's private key could decrypt it, so the recipient could not read the message.",
        "C": "Correct: only the recipient's private key can decrypt it, so only the recipient can read the message.",
        "D": "Incorrect: the recipient's private key must remain secret to the recipient, so the sender should never hold it."
      },
      "topic": "Protection of Information Assets",
      "subtopic": "Data Encryption",
      "difficulty": "easy",
      "source": "CISA Review Manual, Domain 5 – Data Encryption (asymmetric encryption)"
    },
    {
      "stem": "In a public key infrastructure, which of the following components is responsible for verifying the identity of a subscriber before the certificate request is passed on for issuance?",
      "options": [
        "The registration authority",
        "The certificate revocation list",
        "The certification practice statement",
        "The certificate repository"
      ],
      "answer": "A",
      "explanation": "The registration authority performs identity proofing: it verifies that a subscriber is who they claim to be and is entitled to the requested certificate, then forwards the approved request to the certification authority, which issues and signs the certificate. Separating registration from issuance lets the CA delegate identity checks while keeping control of signing. The other items are PKI elements with different roles: listing revoked certificates, documenting CA practices and publishing certificates.",
      "rationales": {
        "A": "Correct: the registration authority verifies the subscriber's identity before the CA issues the certificate.",
        "B": "Incorrect: a CRL lists certificates revoked before their expiry; it does not verify applicants.",
        "C": "Incorrect: the CPS is a document describing how the CA operates; it does not perform verification.",
        "D": "Incorrect: a repository publishes certificates and CRLs for users to retrieve; it does not verify identities."
      },
      "topic": "Protection of Information Assets",
      "subtopic": "Public Key Infrastructure (PKI)",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 5 – Public Key Infrastructure (PKI) components"
    },
    {
      "stem": "An organization moves its applications to an infrastructure as a service (IaaS) cloud offering. Under the typical shared responsibility model, which of the following remains the responsibility of the customer?",
      "options": [
        "Physical security of the provider's data center facilities",
        "Maintenance and patching of the provider's hypervisor layer",
        "Replacement of failed storage and network hardware",
        "Patching of the guest operating systems on its virtual machines"
      ],
      "answer": "D",
      "explanation": "Under the shared responsibility model for IaaS, the provider is responsible for the physical facilities, hardware, network infrastructure and virtualization layer. The customer is responsible for everything it deploys on top: guest operating systems, middleware, applications, data, identities and security configuration. Patching the guest operating system is therefore the customer's job, while in PaaS and SaaS more of these layers shift to the provider.",
      "rationales": {
        "A": "Incorrect: physical security of data centers is the provider's responsibility in all cloud service models.",
        "B": "Incorrect: the hypervisor is part of the virtualization layer, which the IaaS provider manages.",
        "C": "Incorrect: physical hardware maintenance and replacement are handled by the IaaS provider.",
        "D": "Correct: in IaaS the customer manages the guest operating systems, including their patching."
      },
      "topic": "Protection of Information Assets",
      "subtopic": "Cloud and Virtualized Environments",
      "difficulty": "medium",
      "source": "CISA Review Manual, Domain 5 – Cloud and Virtualized Environments (shared responsibility model)"
    },
    {
      "stem": "An incident response team discovers that a running server has been compromised and may hold evidence needed for legal action. To preserve evidence, which of the following should the team do FIRST?",
      "options": [
        "Create a bit-stream image of the server's hard disk",
        "Capture the contents of the server's volatile memory",
        "Power off the server to stop any further changes",
        "Restore the server from the last known-good backup"
      ],
      "answer": "B",
      "explanation": "Evidence should be collected in order of volatility, starting with the data that is lost most easily. Volatile memory holds running processes, network connections, logged-in sessions and possibly encryption keys or memory-resident malware, all of which disappear when the server is powered off. Disk contents persist, so imaging the disk follows, and all evidence should be handled under a documented chain of custody.",
      "rationales": {
        "A": "Incorrect: a disk image is essential, but disk data persists, so the more volatile memory should be captured first.",
        "B": "Correct: memory contents are the most volatile evidence and would be lost if the server lost power.",
        "C": "Incorrect: powering off destroys volatile memory evidence and can alter the state of the system.",
        "D": "Incorrect: restoring from backup overwrites the compromised system and destroys the evidence."
      },
      "topic": "Protection of Information Assets",
      "subtopic": "Evidence Collection and Forensics",
      "difficulty": "hard",
      "source": "CISA Review Manual, Domain 5 – Evidence Collection and Forensics (order of volatility, chain of custody)"
    }
  ]
}
```
