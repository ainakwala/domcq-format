```json
{
  "format": "domcq/1",
  "exam": "cpa-isc",
  "set": "Uniform CPA Examination: Information Systems and Controls (ISC) practice – Mixed core review",
  "questions": [
    {
      "stem": "A company's order table includes a CustomerID column. The database is configured so that an order cannot be saved unless its CustomerID matches an existing record in the customer table. Which database integrity concept does this configuration enforce?",
      "options": [
        "Entity integrity",
        "Domain integrity",
        "Referential integrity",
        "Transaction integrity"
      ],
      "answer": "C",
      "explanation": "Referential integrity requires that every foreign key value in a child table match a primary key value in the parent table (or be null). Here, CustomerID in the order table is a foreign key to the customer table, so the database rejects orphan orders. Entity integrity concerns unique, non-null primary keys, and domain integrity concerns the allowable values for a field.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Data management",
      "difficulty": "easy",
      "source": "ISC syllabus: Data management – relational database concepts and data integrity"
    },
    {
      "stem": "A manufacturer's payroll application collects employee timecards throughout the week and processes them together in a single run on Friday night. Which processing method does this describe?",
      "options": [
        "Batch processing",
        "Real-time processing",
        "Online transaction processing",
        "Stream processing"
      ],
      "answer": "A",
      "explanation": "In batch processing, transactions are accumulated over a period and processed together as a group at a scheduled time, which is efficient for high-volume work that is not urgent, such as payroll. Real-time and online transaction processing update records as each transaction occurs, so there is no accumulation delay.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "easy",
      "source": "ISC syllabus: Information systems – transaction processing modes (batch vs. real-time)"
    },
    {
      "stem": "A company rents virtual servers, storage and networking from a cloud provider. The company installs and manages its own operating systems, middleware and applications on those servers. Which cloud service model is the company using?",
      "options": [
        "Software as a Service",
        "Infrastructure as a Service",
        "Platform as a Service",
        "Desktop as a Service"
      ],
      "answer": "B",
      "explanation": "Under Infrastructure as a Service, the provider supplies the virtualized computing infrastructure (servers, storage and network), while the customer remains responsible for the operating system, middleware, runtime and applications. In Platform as a Service the provider also manages the operating system and runtime, and in Software as a Service the provider manages the entire application stack.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "easy",
      "source": "ISC syllabus: Information systems – cloud computing service models (see NIST SP 800-145)"
    },
    {
      "stem": "A retailer is replacing its accounting system. For the first two months after the new system goes live, the retailer will keep processing all transactions in both the old and new systems and compare the results before retiring the old system. Which implementation approach is this?",
      "options": [
        "Direct cutover",
        "Phased implementation",
        "Pilot conversion",
        "Parallel conversion"
      ],
      "answer": "D",
      "explanation": "In a parallel conversion, the old and new systems run at the same time on the same transactions so that results can be compared and discrepancies resolved before the old system is retired. It is the lowest-risk approach but also the most costly and labor-intensive, because all processing is duplicated. Direct cutover switches immediately, phased implementation moves one module or location at a time, and a pilot tests the new system at one site first.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "medium",
      "source": "ISC syllabus: Information systems – systems development life cycle and conversion approaches"
    },
    {
      "stem": "During the nightly load of a data warehouse, a script converts date fields from several source systems to a single standard format, removes duplicate customer records and maps different product codes to a common code. Which stage of the extract-transform-load (ETL) process does this describe?",
      "options": [
        "Extraction",
        "Transformation",
        "Loading",
        "Archiving"
      ],
      "answer": "B",
      "explanation": "The transformation stage cleanses, standardizes, deduplicates and maps data from the source systems into the consistent structure the warehouse requires. Extraction only copies the data out of the sources, and loading writes the prepared data into the warehouse tables. Without transformation, analytics would draw on inconsistent and unreliable data.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Data management",
      "difficulty": "medium",
      "source": "ISC syllabus: Data management – data warehouses, data lakes and ETL processes"
    },
    {
      "stem": "A company's disaster recovery plan states that, after a database failure, it can tolerate losing no more than 30 minutes of committed transactions. Its database is currently backed up once every four hours. Which recovery metric is the current backup schedule failing to meet?",
      "options": [
        "Recovery time objective",
        "Mean time to repair",
        "Recovery point objective",
        "Maximum tolerable downtime"
      ],
      "answer": "C",
      "explanation": "The recovery point objective (RPO) is the maximum amount of data loss, measured in time, that an organization can accept. With backups every four hours, up to four hours of transactions could be lost, which exceeds the 30-minute tolerance, so more frequent backups or continuous replication are needed. Recovery time objective and maximum tolerable downtime address how long systems can be unavailable, not how much data can be lost.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "medium",
      "source": "ISC syllabus: Information systems – business continuity and disaster recovery (RTO and RPO)"
    },
    {
      "stem": "A payroll application is configured to reject any timecard that reports more than 24 hours worked by an employee in a single day. Which type of application input control is this?",
      "options": [
        "Limit check",
        "Existence check",
        "Sequence check",
        "Check digit verification"
      ],
      "answer": "A",
      "explanation": "A limit check compares an input value to a predetermined upper or lower boundary and rejects values outside it, such as more than 24 hours in one day. An existence check confirms that a referenced value, such as an employee ID, exists in the master file, a sequence check confirms that items are in numerical order, and a check digit verification detects transcription errors in identifiers.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "medium",
      "source": "ISC syllabus: Information systems – application controls (input edit and validation checks)"
    },
    {
      "stem": "A table named OrderLines uses the combination of OrderID and ProductID as its primary key and contains these columns: OrderID, ProductID, ProductName and Quantity. Every field holds a single value, and ProductName is determined by ProductID alone. Considering the normal forms in the order first, second, third and Boyce-Codd, which is the first one this design fails to satisfy?",
      "options": [
        "First normal form",
        "Third normal form",
        "Boyce-Codd normal form",
        "Second normal form"
      ],
      "answer": "D",
      "explanation": "A table is in second normal form only if it is in first normal form and every non-key attribute depends on the whole primary key. ProductName depends only on ProductID, which is part of the composite key, so this partial dependency violates second normal form. The fix is to move ProductID and ProductName into a separate Products table, which also removes the repeated storage of product names.",
      "topic": "Information Systems and Data Management",
      "subtopic": "Data management",
      "difficulty": "hard",
      "source": "ISC syllabus: Data management – relational database design and normalization"
    },
    {
      "stem": "To sign in to a company's remote-access portal, an employee enters a password and then types a six-digit code generated by an authenticator app on the employee's smartphone. Which two authentication factor categories does this process combine?",
      "options": [
        "Something you know and something you are",
        "Something you know and something you have",
        "Something you have and something you are",
        "Something you know and somewhere you are"
      ],
      "answer": "B",
      "explanation": "A password is something you know, and a code from a device the employee possesses is something you have, so the process combines two different factor categories. Two passwords, or a password plus a security question, would still be single-factor authentication because both are the same category. A fingerprint or other biometric would be something you are.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Security",
      "difficulty": "easy",
      "source": "ISC syllabus: Security – authentication and access controls (multi-factor authentication)"
    },
    {
      "stem": "A company assigns each document and data set one of four labels, such as Public, Internal, Confidential or Restricted, and applies handling, storage and sharing rules according to the label. Which practice does this describe?",
      "options": [
        "Data normalization",
        "Data replication",
        "Data mining",
        "Data classification"
      ],
      "answer": "D",
      "explanation": "Data classification assigns sensitivity labels to information so that controls such as encryption, access restrictions and retention are applied in proportion to its value and confidentiality needs. It supports confidentiality by making sure the most sensitive data receives the strongest protection. Normalization, replication and mining concern database design, copying data and discovering patterns, respectively.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Confidentiality and privacy",
      "difficulty": "easy",
      "source": "ISC syllabus: Confidentiality and privacy – data classification and handling"
    },
    {
      "stem": "Version 2.0 of the NIST Cybersecurity Framework organizes its outcomes into six Functions. Which Function addresses establishing and monitoring the organization's cybersecurity risk management strategy, expectations and policy?",
      "options": [
        "Govern",
        "Identify",
        "Protect",
        "Respond"
      ],
      "answer": "A",
      "explanation": "Govern, added in version 2.0 of the framework, covers the organizational context, risk management strategy, roles and responsibilities, policy and oversight that guide how the other Functions are carried out. Identify focuses on understanding assets and current risks, Protect on safeguards that reduce risk, and Respond on actions taken once an incident is detected.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Regulations, standards and frameworks",
      "difficulty": "medium",
      "source": "NIST Cybersecurity Framework 2.0 – the six Functions (Govern, Identify, Protect, Detect, Respond, Recover)"
    },
    {
      "stem": "A U.S. online retailer with 40 employees has no office, staff or servers in the European Union. Its website accepts orders in euros from individuals located in EU member states and stores their names and delivery addresses. Under the EU General Data Protection Regulation (GDPR), what is the retailer's status?",
      "options": [
        "Exempt, because it has no establishment in the EU",
        "Exempt, because it has fewer than 250 employees",
        "Subject to the GDPR, because it offers goods to individuals in the EU",
        "Subject to the GDPR only if it stores the data on servers in the EU"
      ],
      "answer": "C",
      "explanation": "The GDPR has extraterritorial reach: under Article 3(2) it applies to organizations outside the EU that offer goods or services to, or monitor the behavior of, individuals in the EU. Where the company's offices or servers are located does not matter. The 250-employee threshold only relaxes certain record-keeping obligations and does not exempt a company from the regulation.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Regulations, standards and frameworks",
      "difficulty": "medium",
      "source": "GDPR Article 3 (territorial scope); ISC syllabus: Regulations, standards and frameworks"
    },
    {
      "stem": "A security analyst confirms that ransomware is actively encrypting files on several of a company's file servers and appears to be spreading to others on the same network segment. Which action should the incident response team take first?",
      "options": [
        "Restore the encrypted files from the most recent backup",
        "Isolate the affected servers from the network",
        "Reimage the affected servers from clean media",
        "Notify the affected customers about the incident"
      ],
      "answer": "B",
      "explanation": "Once an incident is confirmed and still spreading, containment comes first: isolating the affected systems stops the malware from reaching more systems while preserving evidence for analysis. Eradication and recovery steps such as reimaging and restoring from backup come after the threat is contained, or the restored systems could be re-infected. Notifications follow the organization's response plan and legal requirements once the scope is understood.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Incident response",
      "difficulty": "medium",
      "source": "ISC syllabus: Incident response – containment, eradication and recovery (NIST SP 800-61 guidance)"
    },
    {
      "stem": "A company's CFO wants to send a contract file so that the recipient can verify both who sent it and that it was not altered in transit. Which approach accomplishes this?",
      "options": [
        "Hash the file and encrypt the hash with the sender's private key",
        "Hash the file and encrypt the hash with the recipient's public key",
        "Encrypt the whole file with the sender's own public key",
        "Encrypt the whole file with a key known only to the recipient"
      ],
      "answer": "A",
      "explanation": "A digital signature is created by hashing the document and encrypting the hash with the sender's private key. The recipient decrypts it with the sender's public key and compares the result to a freshly computed hash: a match shows the file is unaltered (integrity) and came from the private key holder (authentication and non-repudiation). Encrypting with the recipient's public key or a recipient-held key can be done by anyone, so it proves nothing about who sent the file.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Security",
      "difficulty": "medium",
      "source": "ISC syllabus: Security – encryption, hashing and digital signatures"
    },
    {
      "stem": "A server is valued at $400,000. Management estimates that a successful ransomware attack would destroy 25% of its value and that such an attack is expected about once every two years. A safeguard costing $25,000 per year would reduce the expected frequency to about once every ten years. What is the annual net benefit of the safeguard?",
      "options": [
        "$40,000",
        "$25,000",
        "$15,000",
        "$10,000"
      ],
      "answer": "C",
      "explanation": "Single loss expectancy is $400,000 x 25% = $100,000. Annualized loss expectancy falls from $100,000 x 0.5 = $50,000 to $100,000 x 0.1 = $10,000, a $40,000 reduction in expected annual loss. Subtracting the $25,000 annual cost of the safeguard leaves a net benefit of $15,000, so the safeguard is cost-justified.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Security",
      "difficulty": "hard",
      "source": "ISC syllabus: Security – risk assessment (SLE, ARO, ALE) and cost-benefit analysis of controls"
    },
    {
      "stem": "An attacker used a phished set of valid credentials to sign in to a company's network. Because the internal network is flat, the attacker was then able to connect from the compromised workstation directly to the finance database server and the domain controller. Which control would most directly limit what an attacker can reach after a similar compromise?",
      "options": [
        "Account lockout after five failed sign-ins",
        "Weekly antivirus signature updates",
        "Annual security awareness training",
        "Network segmentation with restrictive firewall rules"
      ],
      "answer": "D",
      "explanation": "Segmenting the network into zones and permitting only the traffic each zone needs contains an intruder who already holds valid credentials, preventing easy lateral movement to high-value systems such as database and domain servers. Account lockout addresses password guessing rather than stolen valid credentials, and antivirus updates and training reduce the likelihood of compromise rather than limiting its reach once it occurs. This reflects the defense-in-depth principle of assuming that some controls will fail.",
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Security",
      "difficulty": "hard",
      "source": "ISC syllabus: Security – network security, segmentation and defense in depth"
    },
    {
      "stem": "A cloud service provider wants to publish on its public website an independent practitioner's report on whether its controls over security and availability met the applicable trust services criteria. Which report is designed for this purpose?",
      "options": [
        "SOC 1 Type 2 report",
        "SOC 2 Type 2 report",
        "SOC 3 report",
        "SOC 2 Type 1 report"
      ],
      "answer": "C",
      "explanation": "A SOC 3 report addresses the trust services criteria without the detailed description of tests of controls and results, and it is a general-use report that can be distributed publicly, often with a seal. SOC 2 reports include detailed system descriptions and test results and are restricted to knowledgeable intended users, while SOC 1 reports address controls relevant to user entities' internal control over financial reporting.",
      "topic": "Considerations for System and Organization Controls (SOC) Engagements",
      "subtopic": "Considerations specific to reporting on a SOC engagement",
      "difficulty": "easy",
      "source": "AICPA SOC suite of services: SOC 1, SOC 2 and SOC 3 report types and intended users"
    },
    {
      "stem": "In a SOC 2 Type 2 examination, the service auditor concludes that controls related to one applicable trust services criterion did not operate effectively throughout the period, while controls for all other criteria did. The deficiency is material but not pervasive. What type of opinion should the service auditor express?",
      "options": [
        "Unmodified opinion with an emphasis-of-matter paragraph",
        "Qualified opinion",
        "Adverse opinion",
        "Disclaimer of opinion"
      ],
      "answer": "B",
      "explanation": "When the evidence shows that controls were not effective for a criterion and the matter is material but not pervasive, the service auditor expresses a qualified ('except for') opinion that describes the exception. An adverse opinion is reserved for matters that are both material and pervasive, and a disclaimer applies when the auditor cannot obtain sufficient appropriate evidence. An emphasis-of-matter paragraph does not cure a material exception in an unmodified opinion.",
      "topic": "Considerations for System and Organization Controls (SOC) Engagements",
      "subtopic": "Considerations specific to reporting on a SOC engagement",
      "difficulty": "medium",
      "source": "AICPA SOC 2 guide: service auditor's report and modified opinions; SSAE 18 AT-C 205"
    },
    {
      "stem": "A service auditor is planning a SOC 2 examination. Which set of criteria will the service auditor use to evaluate whether management's description of the service organization's system is presented fairly?",
      "options": [
        "The description criteria in DC section 200",
        "The trust services criteria in TSP section 100",
        "The COSO Internal Control – Integrated Framework",
        "The control objectives in ISO/IEC 27001"
      ],
      "answer": "A",
      "explanation": "A SOC 2 examination uses two sets of criteria: the description criteria (DC section 200) to evaluate whether the description of the system is presented in accordance with them, and the trust services criteria (TSP section 100) to evaluate whether controls were suitably designed and operating effectively. The trust services criteria are therefore not the yardstick for the description itself. COSO and ISO/IEC 27001 are not the criteria prescribed for evaluating the description in a SOC 2 report.",
      "topic": "Considerations for System and Organization Controls (SOC) Engagements",
      "subtopic": "Considerations specific to planning and performing a SOC engagement",
      "difficulty": "medium",
      "source": "AICPA SOC 2 guide: description criteria (DC 200) and trust services criteria (TSP 100)"
    },
    {
      "stem": "In a SOC 1 Type 2 engagement, a service organization's description states that a control objective over transaction authorization will be achieved only if user entities apply certain controls of their own, such as reviewing exception reports each month. What is the service auditor's responsibility with respect to these complementary user entity controls?",
      "options": [
        "Test the controls at a sample of user entities",
        "Obtain a written assertion from each user entity",
        "Disclaim an opinion on the dependent control objectives",
        "Evaluate whether the description identifies them, without testing them"
      ],
      "answer": "D",
      "explanation": "Complementary user entity controls are controls that user entities must implement for the service organization's control objectives to be achieved. They are not part of the service organization's system, so the service auditor does not test them or opine on their operation. The auditor does evaluate whether the description appropriately identifies them, and the report states that the control objectives can be achieved only if those controls operate effectively, leaving user auditors to consider them.",
      "topic": "Considerations for System and Organization Controls (SOC) Engagements",
      "subtopic": "Considerations specific to planning and performing a SOC engagement",
      "difficulty": "hard",
      "source": "SSAE 18 AT-C 320; AICPA SOC 1 guide: complementary user entity controls"
    }
  ]
}
```
