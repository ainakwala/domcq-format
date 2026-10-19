```json
{
  "format": "domcq/1",
  "exam": "cpa-isc",
  "set": "Uniform CPA Examination: Information Systems and Controls (ISC) practice – Mixed review set 1",
  "questions": [
    {
      "stem": "In a relational database, a company's order table contains a customer_id column that references the customer table. Which mechanism ensures that no order can be saved with a customer_id that does not exist in the customer table?",
      "options": [
        "Entity integrity, enforced by requiring every order to have a unique, non-null primary key",
        "Referential integrity, enforced by a foreign key constraint on the order table",
        "Domain integrity, enforced by restricting customer_id to a numeric data type",
        "Normalization, enforced by moving repeated customer details into a separate table"
      ],
      "answer": "B",
      "explanation": "Referential integrity requires every foreign key value to match an existing primary key value in the referenced table, so the database rejects orders that point to a nonexistent customer. Entity integrity only ensures that each row's primary key is unique and not null. Domain integrity limits the type or range of values in a column, and normalization reduces redundancy but does not by itself prevent orphan records.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Data management",
      "difficulty": "easy",
      "source": "AICPA ISC content specification, Data management: relational database concepts and data integrity"
    },
    {
      "stem": "A company is replacing its legacy payroll application. For the first two pay periods after go-live, payroll staff will process payroll in both the old and the new system and compare the results before the old system is retired. Which implementation approach is the company using?",
      "options": [
        "Direct cutover approach",
        "Pilot approach",
        "Phased approach",
        "Parallel approach"
      ],
      "answer": "D",
      "explanation": "In a parallel approach, the old and new systems run side by side so that results can be compared and errors found before the old system is retired. This lowers the risk of the change but costs extra effort because work is duplicated. Direct cutover replaces the old system at once, a pilot rolls the new system out to one unit first, and a phased approach converts one module or location at a time.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "easy",
      "source": "AICPA ISC content specification, Information systems: systems development and implementation (SDLC)"
    },
    {
      "stem": "A retailer's data steward reviews the customer master file and finds that 12% of the records have a blank postal code field, even though the field is required for shipping. Which data quality dimension is most directly deficient?",
      "options": [
        "Completeness",
        "Accuracy",
        "Timeliness",
        "Uniqueness"
      ],
      "answer": "A",
      "explanation": "Completeness is the extent to which all required data values are present, and blank required fields show that data are missing. Accuracy concerns whether recorded values match the real world, timeliness concerns whether data are current and available when needed, and uniqueness concerns duplicate records.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Data management",
      "difficulty": "medium",
      "source": "AICPA ISC content specification, Data management: data governance and data quality"
    },
    {
      "stem": "A database table named invoices has the columns customer_id, invoice_date and amount. An analyst runs this query: SELECT customer_id, SUM(amount) FROM invoices WHERE invoice_date >= '2025-01-01' GROUP BY customer_id HAVING SUM(amount) > 10000; Which result does the query return?",
      "options": [
        "One row for each invoice dated on or after January 1, 2025 whose own amount exceeds 10,000",
        "One row for each customer, showing total invoices of all dates, for customers whose lifetime total exceeds 10,000",
        "One row for each customer whose total invoiced since January 1, 2025 exceeds 10,000, with that total",
        "A single row showing the total invoiced since January 1, 2025 for all customers, if it exceeds 10,000"
      ],
      "answer": "C",
      "explanation": "The WHERE clause filters individual invoice rows before grouping, so only invoices dated on or after January 1, 2025 are summed. GROUP BY then produces one row per customer, and HAVING filters those groups on the aggregate total. The first option treats HAVING as a row filter, the second ignores the WHERE clause, and the fourth ignores the GROUP BY clause.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Data management",
      "difficulty": "hard",
      "source": "AICPA ISC content specification, Data management; standard SQL SELECT, WHERE, GROUP BY and HAVING semantics"
    },
    {
      "stem": "At 2 a.m., a critical defect in the production order-entry application stops customers from placing orders. The on-call developer needs to deploy a fix immediately, before the change advisory board can meet. Which approach best follows sound change-management practice?",
      "options": [
        "Let the developer deploy the fix and skip any later review, since the outage has already been resolved",
        "Use the documented emergency change procedure, with designated approval, and complete full review and documentation afterward",
        "Wait for the next scheduled change window so that every normal approval and test step can be finished first",
        "Give the developer a shared privileged account overnight so the fix can be deployed without delay or approval"
      ],
      "answer": "B",
      "explanation": "Sound change management anticipates emergencies with a predefined expedited procedure that includes authorization by a designated person and logging of who made the change. After the fix, the change is reviewed, tested, documented and formally approved retroactively so that it is brought back under normal control. Skipping review, using shared accounts or ignoring the business need for a fix all weaken accountability or availability.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "medium",
      "source": "AICPA ISC content specification, Information systems: change management and systems maintenance"
    },
    {
      "stem": "A company copies sales data from several regional systems into a central data warehouse each night. One region stores dates as MM/DD/YYYY, another stores them as DD-MM-YYYY, and some regions record amounts in local currency. The data are converted to a single date format and a single reporting currency before they are written to the warehouse. Which part of the extract, transform and load (ETL) process does this conversion represent?",
      "options": [
        "The transform step, which cleanses and standardizes data into a consistent format",
        "The extract step, which selects and copies data from the source systems",
        "The load step, which writes the prepared data into the target warehouse",
        "The reconciliation step, which confirms that totals loaded agree with source totals"
      ],
      "answer": "A",
      "explanation": "Transformation applies rules that cleanse, standardize, convert and aggregate data so that data from different sources are consistent and can be compared. Extraction only pulls data out of the source systems, and loading only writes the finished data into the target. Reconciling totals is a useful control over the process but is not what converts formats or currencies.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Data management",
      "difficulty": "medium",
      "source": "AICPA ISC content specification, Data management: extraction, transformation and loading (ETL)"
    },
    {
      "stem": "A company moves its inventory application from its own data center to virtual servers rented from a public cloud provider in an infrastructure-as-a-service (IaaS) arrangement. The provider supplies the virtualized hardware, storage and network, and the company installs and manages its own operating systems and application software. Under the typical shared responsibility model for this service model, who is responsible for applying security patches to the operating systems?",
      "options": [
        "The cloud provider, because it owns and operates the physical servers that host the virtual machines",
        "The cloud provider, because operating system patching is always included in the subscription price",
        "The vendor of the inventory application, because it controls the code that runs on the servers",
        "The company, because it manages the operating systems and software that run on the rented servers"
      ],
      "answer": "D",
      "explanation": "In IaaS the provider secures and manages the physical infrastructure and virtualization layer, while the customer manages everything above it, including operating systems, middleware, applications and data. Operating system patching therefore falls to the company. Under software as a service, by contrast, the provider would manage the operating system.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "medium",
      "source": "AICPA ISC content specification, Information systems: cloud computing; NIST SP 800-145 service models"
    },
    {
      "stem": "A bank uses several years of customer data to build a model that estimates the probability that each new loan applicant will default within two years. Which type of data analytics does this model represent?",
      "options": [
        "Descriptive analytics",
        "Diagnostic analytics",
        "Predictive analytics",
        "Prescriptive analytics"
      ],
      "answer": "C",
      "explanation": "Predictive analytics uses historical data and statistical or machine learning methods to estimate the likelihood of future outcomes, such as loan default. Descriptive analytics summarizes what has happened, diagnostic analytics explains why it happened, and prescriptive analytics recommends actions, such as which loan terms to offer.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Data management",
      "difficulty": "easy",
      "source": "AICPA ISC content specification, Data management: data analytics and types of analysis"
    },
    {
      "stem": "A vendor emails a contract amendment to a customer. The customer wants assurance that the document came from the vendor and was not altered in transit. The vendor creates a hash of the document and encrypts the hash to form a digital signature. Which key does the vendor use to encrypt the hash so that the customer can verify the signature?",
      "options": [
        "The customer's public key",
        "The customer's private key",
        "The vendor's private key",
        "The vendor's public key"
      ],
      "answer": "C",
      "explanation": "A digital signature is created by encrypting the hash with the signer's own private key, which only the signer holds. The customer decrypts it with the vendor's public key and compares the result with a hash of the received document, which supports authenticity, integrity and nonrepudiation. Encrypting with the customer's public key would protect confidentiality, not prove who signed.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Security",
      "difficulty": "medium",
      "source": "AICPA ISC content specification, Security: encryption, digital signatures and public key infrastructure"
    },
    {
      "stem": "A company wants to strengthen remote access by requiring true multifactor authentication. Which combination of credentials meets that requirement?",
      "options": [
        "A password and a fingerprint scan",
        "A password and a personal identification number (PIN)",
        "A password and the answer to a security question",
        "A username and a password"
      ],
      "answer": "A",
      "explanation": "Multifactor authentication requires credentials from two or more different categories: something you know, something you have, or something you are. A password is something you know and a fingerprint is something you are. The other combinations use only knowledge-based credentials, so they are single-factor authentication.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Security",
      "difficulty": "easy",
      "source": "AICPA ISC content specification, Security: authentication and logical access controls"
    },
    {
      "stem": "A company wants a network security tool that detects suspicious traffic matching known attack signatures and also automatically blocks that traffic before it reaches internal servers. Which tool provides this capability?",
      "options": [
        "An intrusion detection system (IDS) that monitors a copy of network traffic and alerts staff",
        "A vulnerability scanner that checks the servers for missing patches each week",
        "A security information and event management (SIEM) tool that correlates logs from many sources",
        "An intrusion prevention system (IPS) placed inline with the network traffic"
      ],
      "answer": "D",
      "explanation": "An intrusion prevention system sits inline with network traffic, so it can drop or block malicious packets in real time as well as detect them. An intrusion detection system generally monitors and alerts but does not block. A vulnerability scanner finds weaknesses, and a SIEM aggregates and correlates log data to generate alerts.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Security",
      "difficulty": "easy",
      "source": "AICPA ISC content specification, Security: network security and preventive and detective technologies"
    },
    {
      "stem": "A U.S. company offers its online service to residents of the European Union and is therefore subject to the EU General Data Protection Regulation (GDPR). The company, acting as a data controller, discovers a personal data breach that is likely to result in a risk to individuals' rights and freedoms. Within what period, where feasible, must it notify the supervisory authority after becoming aware of the breach?",
      "options": [
        "24 hours",
        "72 hours",
        "7 days",
        "30 days"
      ],
      "answer": "B",
      "explanation": "GDPR Article 33 requires a controller to notify the supervisory authority without undue delay and, where feasible, no later than 72 hours after becoming aware of a breach that is likely to result in a risk to individuals. Notification is not required if the breach is unlikely to result in such a risk. Article 34 separately requires notifying affected individuals without undue delay when the risk is high.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Regulations, standards and frameworks",
      "difficulty": "medium",
      "source": "GDPR Article 33 (notification of a personal data breach to the supervisory authority)"
    },
    {
      "stem": "Version 2.0 of the NIST Cybersecurity Framework (CSF), released in February 2024, organizes its core outcomes into six functions. Which function was added in CSF 2.0 to address an organization's cybersecurity risk management strategy, expectations and policy?",
      "options": [
        "Identify",
        "Protect",
        "Respond",
        "Govern"
      ],
      "answer": "D",
      "explanation": "CSF 1.1 had five functions: Identify, Protect, Detect, Respond and Recover. CSF 2.0 added Govern, which covers organizational context, risk management strategy, roles and responsibilities, policy and oversight, and it informs how the other five functions are carried out.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Regulations, standards and frameworks",
      "difficulty": "medium",
      "source": "NIST Cybersecurity Framework 2.0 (February 2024), Core functions"
    },
    {
      "stem": "A software company wants its developers to test a new billing module using data that looks and behaves like real customer records, without exposing actual customer names, account numbers or addresses to the developers. Which approach best meets this goal?",
      "options": [
        "Copy the production database to the test environment and rely on the developers' signed confidentiality agreements",
        "Replace the sensitive fields in the test copy with realistic but fictitious values by using data masking",
        "Encrypt the production database and give the developers the decryption key for use during testing",
        "Give the developers read-only access to the production database so that they cannot change any records"
      ],
      "answer": "B",
      "explanation": "Data masking substitutes sensitive values with realistic but fictitious ones while preserving formats and relationships, so the application can be tested without exposing real personal information. Copying real data, even under confidentiality agreements, still exposes it. Sharing the decryption key defeats the purpose of encryption, and read-only access still lets developers see the real data.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Confidentiality and privacy",
      "difficulty": "easy",
      "source": "AICPA ISC content specification, Confidentiality and privacy: protecting confidential and personal information (masking, encryption)"
    },
    {
      "stem": "A company's business impact analysis sets a recovery time objective (RTO) of 12 hours and a recovery point objective (RPO) of 15 minutes for its order-processing system. Management wants the lowest-cost strategy that still meets both objectives. Which strategy should the company choose?",
      "options": [
        "Nightly tape backups sent offsite and restored to a cold site after a disaster is declared",
        "Hourly backups copied to a hot site that runs parallel processing at all times",
        "Continuous transaction-log replication to a warm site with installed hardware and software that is activated after a disaster",
        "Synchronous replication to a fully mirrored hot site with automatic failover"
      ],
      "answer": "C",
      "explanation": "An RPO of 15 minutes means data must be copied almost continuously, which rules out nightly and hourly backups. An RTO of 12 hours leaves enough time to activate a warm site that already has hardware and software installed. A fully mirrored hot site with automatic failover would meet both objectives but at a higher cost than the requirements justify.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Incident response",
      "difficulty": "hard",
      "source": "NIST SP 800-34 Rev. 1 Contingency Planning Guide: RTO, RPO and alternate site types"
    },
    {
      "stem": "Security monitoring shows that a file server is sending data to an unknown external address, and the company expects possible legal action over the incident. The incident response team must act without destroying evidence. Which action should the team take first?",
      "options": [
        "Disconnect the server from the network while leaving it powered on, then capture volatile memory and disk images",
        "Power the server off immediately to stop the transfer, then restore it from last night's backup",
        "Run antivirus software on the server and reboot it to confirm that the malware has been removed",
        "Leave the server connected and untouched for several days to observe what the attacker does next"
      ],
      "answer": "A",
      "explanation": "Containment should stop the ongoing data loss, and isolating the server from the network does this. Leaving it powered on preserves volatile evidence, such as memory contents, running processes and active connections, which would be lost on shutdown. Forensic images should be captured before cleanup or restoration so that evidence is preserved for investigation and any legal action.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Incident response",
      "difficulty": "hard",
      "source": "AICPA ISC content specification, Incident response: containment and evidence preservation; NIST SP 800-61 incident handling guidance"
    },
    {
      "stem": "A payroll-processing company handles payroll transactions for hundreds of client companies. The clients' independent auditors have asked for a report on the processor's controls that affect the clients' financial statements. Which type of SOC report should the payroll processor engage a service auditor to issue?",
      "options": [
        "A SOC 3 report on controls relevant to the trust services criteria for security",
        "A SOC for Cybersecurity report on the entity-wide cybersecurity risk management program",
        "A SOC 2 report on controls relevant to the trust services criteria for security and availability",
        "A SOC 1 report on controls likely to be relevant to user entities' financial reporting"
      ],
      "answer": "D",
      "explanation": "A SOC 1 report, performed under AT-C section 320, addresses controls at a service organization that are likely to be relevant to its user entities' internal control over financial reporting, and user auditors rely on it. SOC 2 and SOC 3 reports address the trust services criteria rather than financial reporting. A SOC for Cybersecurity report covers an entity's overall cybersecurity risk management program.",
      "topic": "Considerations for System and Organization Controls (SOC) Engagements",
      "subtopic": "Considerations specific to planning and performing a SOC engagement",
      "difficulty": "medium",
      "source": "AICPA SOC suite of services: SOC 1 (AT-C section 320, SSAE 18) compared with SOC 2, SOC 3 and SOC for Cybersecurity"
    },
    {
      "stem": "A practitioner is deciding whether to accept an engagement to examine and report on a service organization's description of its system and the controls within it for a SOC 2 report. Which of the following must be in place as a precondition for accepting the engagement?",
      "options": [
        "The service auditor has agreed to prepare the system description on management's behalf",
        "Management acknowledges responsibility for the system description and for providing a written assertion",
        "Every user entity has approved the trust services criteria that the report will address",
        "Every subservice organization has already issued its own SOC report to the service organization"
      ],
      "answer": "B",
      "explanation": "Under the attestation standards, a precondition for an examination is that management accepts responsibility for the subject matter, including the system description, and for providing a written assertion, and that suitable criteria are available. The service auditor cannot prepare the description without impairing independence and shifting management's responsibility. User entities do not approve the criteria, and subservice organization reports are not required because carve-out and inclusive methods are both permitted.",
      "topic": "Considerations for System and Organization Controls (SOC) Engagements",
      "subtopic": "Considerations specific to planning and performing a SOC engagement",
      "difficulty": "medium",
      "source": "AICPA SOC 2 Guide, engagement acceptance; AT-C section 105 and AT-C section 205 (preconditions, written assertion)"
    },
    {
      "stem": "A software-as-a-service provider is preparing for a SOC 2 examination. It hosts its application at a third-party data center operator, which is a subservice organization. Management has decided to use the carve-out method for the data center operator. Which statement about the carve-out method is correct?",
      "options": [
        "It requires the description to identify the services the subservice organization provides and the controls assumed to be implemented there, and the auditor does not test those controls",
        "It allows the description to omit any mention of the subservice organization, because its controls are outside the scope of the service organization's system",
        "It requires the description to include the subservice organization's own controls, and the service auditor must test them as part of the examination",
        "It requires the subservice organization's management to sign the service organization's written assertion about its own controls"
      ],
      "answer": "A",
      "explanation": "Under the carve-out method, the subservice organization's controls are excluded from the scope of the examination, so the service auditor does not test them. The description must still identify the services the subservice organization provides and the types of complementary subservice organization controls that management assumes are implemented there. Including and testing those controls describes the inclusive method instead.",
      "topic": "Considerations for System and Organization Controls (SOC) Engagements",
      "subtopic": "Considerations specific to planning and performing a SOC engagement",
      "difficulty": "hard",
      "source": "AICPA SOC 2 Guide and DC section 200 description criteria: subservice organizations (carve-out and inclusive methods)"
    },
    {
      "stem": "A service auditor is explaining the different SOC reports to a client's management. Which statement about a SOC 3 report is accurate?",
      "options": [
        "It is restricted to user entities and their auditors and includes the service auditor's detailed test results",
        "It reports only on the suitability of the design of controls as of a specified date",
        "It is a general-use report that can be shared publicly and omits the description of tests of controls and results",
        "It reports on an entity-wide cybersecurity risk management program rather than on a system"
      ],
      "answer": "C",
      "explanation": "A SOC 3 report addresses the same trust services criteria as a SOC 2 report but is designed for general use, so it can be distributed publicly and does not include the detailed description of the service auditor's tests of controls and results. SOC 2 reports are restricted to specified knowledgeable parties and include those test details. Reporting on an entity-wide cybersecurity program is the purpose of a SOC for Cybersecurity engagement.",
      "topic": "Considerations for System and Organization Controls (SOC) Engagements",
      "subtopic": "Considerations specific to reporting on a SOC engagement",
      "difficulty": "medium",
      "source": "AICPA SOC suite of services: SOC 3 for Service Organizations (trust services criteria, general use report)"
    }
  ]
}
```