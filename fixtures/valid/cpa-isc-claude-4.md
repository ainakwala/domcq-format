```json
{
  "format": "domcq/1",
  "exam": "cpa-isc",
  "set": "Uniform CPA Examination: Information Systems and Controls (ISC) practice – Mixed set 1",
  "questions": [
    {
      "stem": "A company rents virtual servers, storage, and networking from a cloud provider. The company installs its own operating systems and application software on the virtual servers and is responsible for maintaining them. Which cloud service model is the company using?",
      "options": [
        "Software as a service (SaaS)",
        "Infrastructure as a service (IaaS)",
        "Platform as a service (PaaS)",
        "Function as a service (FaaS)"
      ],
      "answer": "B",
      "explanation": "In IaaS, the provider supplies virtualized infrastructure (compute, storage, and networking) and the customer is responsible for the operating system, middleware, and applications. With PaaS the provider also manages the operating system and runtime, and with SaaS it manages the entire application. The more layers the customer manages itself, the closer the model is to IaaS.",
      "rationales": {
        "A": "SaaS delivers a finished application run by the provider, so the customer would not install or maintain its own operating systems and software.",
        "B": "IaaS provides virtualized servers, storage, and networking, and the customer manages the operating systems and applications on top of them.",
        "C": "PaaS provides the operating system and runtime so the customer only deploys applications, which does not fit a customer that manages its own operating systems.",
        "D": "FaaS runs individual code functions with no server or operating system management by the customer, which is the opposite of this setup."
      },
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "easy",
      "source": "ISC syllabus: Information systems, cloud computing service models; NIST SP 800-145, The NIST Definition of Cloud Computing (SaaS, PaaS, IaaS)"
    },
    {
      "stem": "A company's change management policy states that the developer who writes a program change cannot move it into the production environment. A separate release manager migrates the change only after documented approval and successful testing. Which risk does this policy primarily address?",
      "options": [
        "Users are not trained on new system functionality before go-live",
        "Program source code is not backed up to an offsite location",
        "System documentation is not updated after a change is made",
        "Unauthorized or untested code is introduced into production"
      ],
      "answer": "D",
      "explanation": "Separating the people who develop changes from those who migrate them to production is a segregation-of-duties control within change management. It keeps a developer from pushing code that has not been approved or tested, which could introduce errors or fraud into production. It does not address training, backups, or documentation.",
      "rationales": {
        "A": "Training addresses user readiness, not the risk created when one person can both write and release code, so this policy does not affect it.",
        "B": "Offsite backup of source code protects against data loss, but restricting who can migrate changes has no bearing on backups.",
        "C": "Documentation updates are a separate change management step; the migration restriction does not ensure documentation is current.",
        "D": "Separating development from migration, with approval and testing required, prevents unauthorized or untested code from reaching production."
      },
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "medium",
      "source": "ISC syllabus: IT operations and change management; IT general controls for program changes and segregation of duties"
    },
    {
      "stem": "A company's disaster recovery plan requires its order system to be operational within 8 hours of a disaster and requires that restored data be no more than 15 minutes old. The company replicates database changes to a secondary site every 30 minutes. Which statement is correct?",
      "options": [
        "The 30-minute replication interval cannot meet the recovery point objective of 15 minutes",
        "The 30-minute replication interval cannot meet the recovery time objective of 8 hours",
        "The 30-minute replication interval meets both objectives because it is shorter than 8 hours",
        "The 30-minute replication interval meets the recovery point objective but not the recovery time objective"
      ],
      "answer": "A",
      "explanation": "The recovery point objective (RPO) is the maximum acceptable amount of data loss measured in time, here 15 minutes. If changes are replicated only every 30 minutes, a disaster just before the next replication could lose up to 30 minutes of data, so the RPO is not met. The recovery time objective (RTO) of 8 hours concerns how fast service is restored and is not determined by the replication interval.",
      "rationales": {
        "A": "Changes are copied only every 30 minutes, so up to 30 minutes of data could be lost, which exceeds the 15-minute recovery point objective.",
        "B": "The RTO concerns how quickly service is restored; the replication interval does not show that the 8-hour restoration target would be missed.",
        "C": "Replication frequency is judged against the data-loss tolerance (RPO), not the restoration time (RTO), so comparing it to 8 hours is the wrong test.",
        "D": "The interval fails, rather than meets, the 15-minute RPO, and nothing about the replication interval indicates whether the 8-hour RTO is met."
      },
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "hard",
      "source": "ISC syllabus: IT operations, business continuity and disaster recovery planning (recovery time objective and recovery point objective)"
    },
    {
      "stem": "A company performs a full backup of its file server every Sunday night and an incremental backup (all changes since the previous backup of any type) every other night. The server's storage fails on Thursday morning, before that night's backup. Which backup sets must be restored to recover the data as it stood at the end of Wednesday's backup?",
      "options": [
        "Wednesday's incremental backup alone, because it contains all changes since Sunday",
        "The Sunday full backup and Wednesday's incremental backup, because Wednesday's covers all changes since Sunday",
        "The Sunday full backup and each of the Monday, Tuesday, and Wednesday incremental backups",
        "The Sunday full backup alone, because later incremental backups only duplicate its contents"
      ],
      "answer": "C",
      "explanation": "An incremental backup copies only the data changed since the last backup of any kind, so each night's set holds just that day's changes. To rebuild the server you restore the last full backup and then every incremental taken after it, in order. A differential backup, by contrast, would require only the full backup and the most recent differential.",
      "rationales": {
        "A": "Wednesday's incremental holds only Wednesday's changes, so it cannot rebuild the server on its own; this describes a cumulative approach instead.",
        "B": "Wednesday's incremental does not include Monday's and Tuesday's changes, so those changes would be missing from the restored data.",
        "C": "Each incremental holds only changes since the prior backup, so the full backup and every later incremental must be restored in sequence.",
        "D": "Later incrementals contain data changed after Sunday rather than duplicates of the full backup, so omitting them loses that data."
      },
      "topic": "Information Systems and Data Management",
      "subtopic": "Information systems",
      "difficulty": "hard",
      "source": "ISC syllabus: IT operations, data backup and recovery (full, incremental, and differential backups)"
    },
    {
      "stem": "In a relational database, the Customers table uses CustomerID to uniquely identify each customer. The Orders table also contains a CustomerID field that links each order to its customer, and the same value can appear on many orders. What is CustomerID in the Orders table?",
      "options": [
        "A foreign key",
        "A primary key",
        "A composite key",
        "An alternate key"
      ],
      "answer": "A",
      "explanation": "A foreign key is a field in one table that matches the primary key of another table and establishes the relationship between them. Because one customer can place many orders, CustomerID repeats in the Orders table, so it cannot be that table's primary key. Foreign keys also help enforce referential integrity between related tables.",
      "rationales": {
        "A": "A foreign key references the primary key of another table, creating the link between orders and customers, and its values may repeat.",
        "B": "A primary key must be unique within its own table; CustomerID repeats in Orders, so it cannot be the primary key there.",
        "C": "A composite key combines several fields to form a unique identifier, while the stem describes a single linking field that repeats.",
        "D": "An alternate key is a candidate key not chosen as the primary key, so it would still be unique in its table, which is not true here."
      },
      "topic": "Information Systems and Data Management",
      "subtopic": "Data management",
      "difficulty": "easy",
      "source": "ISC syllabus: Data management, relational database structure (primary keys, foreign keys, referential integrity)"
    },
    {
      "stem": "A company is building a data warehouse. Customer state values arrive from three source systems as 'CA', 'Calif.', and 'California'. A process converts all of them to 'CA' before the data are placed in the warehouse. Which stage of the extract, transform, load (ETL) process is this?",
      "options": [
        "Extraction",
        "Loading",
        "Transformation",
        "Replication"
      ],
      "answer": "C",
      "explanation": "In ETL, extraction pulls data from the source systems, transformation cleanses, standardizes, and restructures the data to fit the target, and loading writes the prepared data into the target. Converting inconsistent state values to one standard format is a cleansing and standardization task, so it occurs in the transformation stage.",
      "rationales": {
        "A": "Extraction pulls the data out of the source systems; it does not change the format of the values.",
        "B": "Loading writes the prepared data into the warehouse; standardizing the values happens before this stage.",
        "C": "Transformation cleanses, standardizes, and restructures data, so converting varied state values to one format belongs here.",
        "D": "Replication copies data between systems and is not one of the three stages of ETL."
      },
      "topic": "Information Systems and Data Management",
      "subtopic": "Data management",
      "difficulty": "medium",
      "source": "ISC syllabus: Data management, data warehousing and ETL processes"
    },
    {
      "stem": "Which statement best describes a difference between a data lake and a traditional data warehouse?",
      "options": [
        "A data lake stores only structured, cleansed data defined by a fixed schema before loading",
        "A data lake stores raw data in its native format and applies structure when the data are read",
        "A data lake holds only current transactions for daily processing, while a warehouse holds history",
        "A data lake is used only for backup purposes and cannot be used for analytics"
      ],
      "answer": "B",
      "explanation": "A data lake keeps large volumes of raw data, whether structured, semi-structured, or unstructured, in its original form and applies a schema only when the data are queried (schema-on-read). A traditional data warehouse stores cleansed, integrated, structured data using a schema defined before loading (schema-on-write) and is optimized for reporting.",
      "rationales": {
        "A": "This describes a data warehouse, which stores cleansed, structured data under a schema defined before loading, not a data lake.",
        "B": "A data lake keeps raw structured and unstructured data in native form and applies a schema when the data are read (schema-on-read).",
        "C": "Lakes typically hold large volumes of raw data, including history, for analysis; they are not limited to current transactions.",
        "D": "Data lakes are commonly used for analytics, data science, and reporting, so they are not limited to backup."
      },
      "topic": "Information Systems and Data Management",
      "subtopic": "Data management",
      "difficulty": "medium",
      "source": "ISC syllabus: Data management, data warehouses, data lakes, and data storage architectures"
    },
    {
      "stem": "While testing a vendor master file, an analyst finds that 4% of the records contain a 'date added' value that is not a real calendar date, such as 31 February 2025. Which data quality dimension is most directly affected?",
      "options": [
        "Completeness",
        "Timeliness",
        "Uniqueness",
        "Validity"
      ],
      "answer": "D",
      "explanation": "Validity measures whether data conform to defined formats, data types, and permitted values. A date that does not exist on the calendar breaks the field's rules even though a value is present. Completeness concerns missing data, uniqueness concerns duplicates, and timeliness concerns whether the data are current enough for their use.",
      "rationales": {
        "A": "Completeness concerns missing records or values; these records have a value present, so completeness is not the main issue.",
        "B": "Timeliness concerns whether data are current enough for use; a nonexistent date is not a currency problem.",
        "C": "Uniqueness concerns duplicate records, and nothing in the scenario indicates duplicates.",
        "D": "Validity concerns whether values conform to defined formats and rules, and a date that does not exist on the calendar violates them."
      },
      "topic": "Information Systems and Data Management",
      "subtopic": "Data management",
      "difficulty": "medium",
      "source": "ISC syllabus: Data management, data quality and data governance (completeness, validity, accuracy, timeliness, uniqueness)"
    },
    {
      "stem": "Version 2.0 of the NIST Cybersecurity Framework, released in 2024, added a sixth core function to the five functions in version 1.1 (Identify, Protect, Detect, Respond, and Recover). Which function was added?",
      "options": [
        "Assess",
        "Govern",
        "Monitor",
        "Prepare"
      ],
      "answer": "B",
      "explanation": "CSF 2.0 added the Govern function, which covers an organization's cybersecurity risk management strategy, expectations, roles, responsibilities, and policy. It informs how the other five functions are carried out. The other options are not core functions of the framework.",
      "rationales": {
        "A": "Assess is not a CSF core function, although risk assessment is a category within the Identify function.",
        "B": "Govern was added in CSF 2.0 to cover cybersecurity risk management strategy, roles, responsibilities, and policy.",
        "C": "Monitor is not a CSF core function; continuous monitoring activities are mostly part of the Detect function.",
        "D": "Prepare is a step in the NIST Risk Management Framework, not a core function of the Cybersecurity Framework."
      },
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Regulations, standards and frameworks",
      "difficulty": "medium",
      "source": "NIST Cybersecurity Framework 2.0 (2024), core functions; ISC syllabus: Regulations, standards and frameworks"
    },
    {
      "stem": "Which of the following is an example of multifactor authentication?",
      "options": [
        "A user enters a password and then answers a security question",
        "A user enters a PIN and then a second, longer password",
        "A user enters a password and then a one-time code from a phone app",
        "A user enters a 20-character password that is changed every 90 days"
      ],
      "answer": "C",
      "explanation": "Multifactor authentication combines at least two different categories of evidence: something you know, something you have, and something you are. A password plus a one-time code from a phone app combines knowledge with possession. A PIN, a password, and a security question are all knowledge factors, so combining them adds steps but not a second factor type.",
      "rationales": {
        "A": "A password and a security question are both something the user knows, so they are the same factor type.",
        "B": "A PIN and a password are both knowledge factors, so this is single-factor authentication performed twice.",
        "C": "The password is something the user knows and the phone app code relies on something the user has, which makes two factor types.",
        "D": "A long, regularly changed password is still a single knowledge factor, however strong the password policy."
      },
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Security",
      "difficulty": "easy",
      "source": "ISC syllabus: Security, authentication and access controls (knowledge, possession, and inherence factors)"
    },
    {
      "stem": "A help-desk employee needs only to reset user passwords. The employee's account has also been given administrator rights over an entire server, which no part of the employee's job requires. Which security principle is most directly violated?",
      "options": [
        "Least privilege",
        "Defense in depth",
        "Non-repudiation",
        "Redundancy"
      ],
      "answer": "A",
      "explanation": "The principle of least privilege gives users only the access they need to perform their assigned duties. Administrator rights that the job does not require increase the damage that an error, a compromised account, or misuse could cause. Defense in depth, non-repudiation, and redundancy address other security objectives.",
      "rationales": {
        "A": "Least privilege limits access to the minimum needed for assigned duties, and administrator rights the job does not require violate it.",
        "B": "Defense in depth uses layered controls; the scenario concerns the amount of access granted, not layering.",
        "C": "Non-repudiation prevents a party from denying an action, which is not the issue with excessive access rights.",
        "D": "Redundancy provides duplicate components for availability and is unrelated to how much access a user is given."
      },
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Security",
      "difficulty": "easy",
      "source": "ISC syllabus: Security, logical access controls and the principle of least privilege"
    },
    {
      "stem": "A sender wants a recipient to be able to verify that a contract file was not altered in transit and that it came from the sender, so that the sender cannot later deny sending it. The file itself does not need to be kept secret. Which approach provides this assurance?",
      "options": [
        "Hashing the file and encrypting the hash with the recipient's public key",
        "Encrypting the entire file with the recipient's public key",
        "Encrypting the entire file with a symmetric key shared with the recipient",
        "Hashing the file and encrypting the hash with the sender's private key"
      ],
      "answer": "D",
      "explanation": "A digital signature is created by hashing the document and encrypting the hash with the sender's private key. The recipient decrypts the hash with the sender's public key and compares it to a hash computed from the received file. A match shows integrity, and because only the sender holds the private key, it also supports authentication and non-repudiation.",
      "rationales": {
        "A": "Anyone can encrypt with the recipient's public key, so this does not prove who sent the file or prevent the sender from denying it.",
        "B": "Encrypting with the recipient's public key provides confidentiality but not proof of origin, since anyone can use a public key.",
        "C": "A shared symmetric key cannot show which party created the message, so the sender could deny sending it.",
        "D": "Encrypting the hash with the sender's private key lets anyone verify integrity and origin with the sender's public key, supporting non-repudiation."
      },
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Security",
      "difficulty": "hard",
      "source": "ISC syllabus: Security, encryption, hashing, and digital signatures (public key infrastructure)"
    },
    {
      "stem": "A retailer's privacy officer wants to apply the data minimization principle to the personal information the company handles. Which action best reflects that principle?",
      "options": [
        "Encrypting all personal information stored in the customer database",
        "Requiring customers to accept the privacy notice again every year",
        "Collecting only the personal information needed for a stated purpose",
        "Replicating personal information to a second data center"
      ],
      "answer": "C",
      "explanation": "Data minimization means limiting the collection, use, and retention of personal information to what is necessary for the identified purposes. Encryption and replication protect or preserve data but do not reduce how much is collected. Re-accepting a notice relates to notice and consent rather than to minimization.",
      "rationales": {
        "A": "Encryption protects the confidentiality of stored data but does not reduce how much personal information is collected.",
        "B": "Annual re-acceptance of a notice relates to notice and consent, not to limiting the amount of data collected.",
        "C": "Data minimization limits collection and retention of personal information to what is needed for the stated purposes.",
        "D": "Replicating data to another site supports availability and may increase the number of copies of personal information held."
      },
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Confidentiality and privacy",
      "difficulty": "easy",
      "source": "ISC syllabus: Confidentiality and privacy, privacy principles; GDPR Article 5(1)(c), data minimisation"
    },
    {
      "stem": "A company's security team confirms that ransomware is encrypting files on a file server and is spreading to other servers on the same network segment. Which action should the incident response team take first?",
      "options": [
        "Isolate the affected systems from the network to stop the spread",
        "Restore the encrypted files from the most recent backup",
        "Rebuild the infected server from a clean operating system image",
        "Pay the ransom to obtain the decryption key as quickly as possible"
      ],
      "answer": "A",
      "explanation": "Once an incident is confirmed and spreading, containment is the priority. Isolating the affected systems limits further damage while preserving evidence for investigation. Eradication and recovery steps such as rebuilding and restoring come after containment, or reinfection is likely, and paying a ransom is not a containment step, offers no guarantee of recovery, and is generally discouraged.",
      "rationales": {
        "A": "Containment is the priority for a spreading attack; isolating affected systems limits damage and preserves evidence.",
        "B": "Restoring files before the threat is contained risks reinfection and belongs to recovery, which follows containment and eradication.",
        "C": "Rebuilding is part of eradication and recovery and would destroy evidence if done before the spread is contained.",
        "D": "Paying a ransom is not a containment step, does not guarantee data recovery, and is generally discouraged."
      },
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Incident response",
      "difficulty": "medium",
      "source": "ISC syllabus: Incident response, containment, eradication, and recovery in the response lifecycle"
    },
    {
      "stem": "A hospital's patient records contain protected health information. Which U.S. federal law establishes privacy and security requirements for covered entities that handle this information?",
      "options": [
        "Gramm-Leach-Bliley Act (GLBA)",
        "Health Insurance Portability and Accountability Act (HIPAA)",
        "Family Educational Rights and Privacy Act (FERPA)",
        "Children's Online Privacy Protection Act (COPPA)"
      ],
      "answer": "B",
      "explanation": "HIPAA's Privacy and Security Rules apply to covered entities, such as health care providers and health plans, and to their business associates, and they protect protected health information. GLBA applies to financial institutions, FERPA to student education records, and COPPA to online collection of personal information from children.",
      "rationales": {
        "A": "GLBA governs privacy and safeguards for nonpublic personal information held by financial institutions, not health records.",
        "B": "HIPAA sets privacy and security requirements for covered entities and business associates that handle protected health information.",
        "C": "FERPA protects the privacy of student education records, not patient health information.",
        "D": "COPPA regulates online collection of personal information from children under 13, not hospital patient records."
      },
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Regulations, standards and frameworks",
      "difficulty": "easy",
      "source": "ISC syllabus: Regulations, standards and frameworks; HIPAA Privacy Rule and Security Rule (HHS)"
    },
    {
      "stem": "A company is adopting a zero trust security model. Which principle best describes how access requests are handled under that model?",
      "options": [
        "Users on the internal corporate network are trusted by default",
        "Company-owned devices are exempt from re-verification once enrolled",
        "A strong perimeter firewall makes internal traffic safe to leave unrestricted",
        "Each access request is verified, whatever the requester's network location"
      ],
      "answer": "D",
      "explanation": "Zero trust assumes no implicit trust based on network location or asset ownership. Each access request is authenticated and authorized using identity, device posture, and other context, typically with least-privilege access and continuous monitoring. Trusting internal users or relying on the perimeter alone is the traditional model that zero trust replaces.",
      "rationales": {
        "A": "Trusting users because they are on the internal network is the perimeter model that zero trust replaces.",
        "B": "Zero trust does not exempt any device from verification; trust is evaluated per request using device and identity context.",
        "C": "Relying on the perimeter and leaving internal traffic unrestricted contradicts zero trust's assumption that threats may already be inside.",
        "D": "Zero trust has no implicit trust; every access request is authenticated and authorized regardless of network location."
      },
      "topic": "Security, Confidentiality and Privacy",
      "subtopic": "Security",
      "difficulty": "medium",
      "source": "NIST SP 800-207, Zero Trust Architecture; ISC syllabus: Security, network security and access control concepts"
    },
    {
      "stem": "A service organization asks a CPA to perform a SOC 2 examination. Which trust services category must be included in every SOC 2 examination?",
      "options": [
        "Security",
        "Availability",
        "Processing integrity",
        "Privacy"
      ],
      "answer": "A",
      "explanation": "A SOC 2 examination reports on controls relevant to one or more of five trust services categories: security, availability, processing integrity, confidentiality, and privacy. Security is always in scope because its common criteria apply to all of the categories. Management chooses which of the other categories to include based on the services provided and the needs of report users.",
      "rationales": {
        "A": "Security is required in every SOC 2 examination, and its common criteria also underlie the other categories.",
        "B": "Availability is an optional category that management includes only if it is relevant to the services provided.",
        "C": "Processing integrity is optional and is included when users depend on the accuracy and completeness of the system's processing.",
        "D": "Privacy is optional and is included when the service organization collects or handles personal information."
      },
      "topic": "Considerations for System and Organization Controls (SOC) Engagements",
      "subtopic": "Considerations specific to planning and performing a SOC engagement",
      "difficulty": "medium",
      "source": "AICPA 2017 Trust Services Criteria (with 2022 revised points of focus); ISC syllabus: SOC 2 engagements"
    },
    {
      "stem": "The auditors of a service organization's customers want evidence that controls relevant to the customers' financial reporting operated effectively throughout the year. Which report would provide that evidence?",
      "options": [
        "A SOC 1 Type 1 report",
        "A SOC 2 Type 1 report",
        "A SOC 1 Type 2 report",
        "A SOC for Cybersecurity report"
      ],
      "answer": "C",
      "explanation": "SOC 1 reports address controls at a service organization that are relevant to user entities' internal control over financial reporting. A Type 2 report includes the service auditor's opinion on operating effectiveness over a specified period, supported by tests of controls and their results. A Type 1 report covers only the fairness of the description and the suitability of design at a point in time.",
      "rationales": {
        "A": "A Type 1 report covers only the design of controls at a point in time, so it gives no evidence of operating effectiveness during the year.",
        "B": "A SOC 2 report addresses trust services criteria rather than financial reporting controls, and a Type 1 does not test operation.",
        "C": "A SOC 1 Type 2 report opines on design and operating effectiveness of financial-reporting-relevant controls over a period.",
        "D": "A SOC for Cybersecurity report addresses an entity's cybersecurity risk management program, not controls relevant to user entities' financial reporting."
      },
      "topic": "Considerations for System and Organization Controls (SOC) Engagements",
      "subtopic": "Considerations specific to planning and performing a SOC engagement",
      "difficulty": "medium",
      "source": "AICPA SOC 1 guidance and AT-C 320; ISC syllabus: SOC engagements, Type 1 versus Type 2 reports"
    },
    {
      "stem": "A service organization hosts its application at a third-party data center, which is a subservice organization. In its SOC 1 report, management elects the carve-out method for the data center. How does the report treat the data center's controls?",
      "options": [
        "The description includes the data center's controls, and the service auditor tests them in the engagement",
        "The report does not mention the data center, because its controls are outside the engagement scope",
        "The service auditor opines on the data center's controls by relying on the data center's own report",
        "The description excludes the data center's controls but discloses the controls expected to operate there"
      ],
      "answer": "D",
      "explanation": "Under the carve-out method, the description identifies the services performed by the subservice organization but excludes that organization's relevant controls from the description and from the service auditor's opinion. The description must also disclose the complementary subservice organization controls that are assumed to be implemented there. Under the inclusive method, those controls would be included in the description and tested.",
      "rationales": {
        "A": "That describes the inclusive method; under the carve-out method the subservice organization's controls are excluded from the description and the opinion.",
        "B": "The carve-out method still requires the description to identify the subservice organization and the services it performs.",
        "C": "Under carve-out the service auditor expresses no opinion on the subservice organization's controls, so there is nothing to opine on using its report.",
        "D": "Under the carve-out method the description excludes those controls but discloses the complementary controls expected to operate there."
      },
      "topic": "Considerations for System and Organization Controls (SOC) Engagements",
      "subtopic": "Considerations specific to reporting on a SOC engagement",
      "difficulty": "hard",
      "source": "AICPA SOC 1 guidance and AT-C 320: carve-out and inclusive methods for subservice organizations; ISC syllabus: SOC reporting"
    },
    {
      "stem": "In a SOC 2 examination, which of the following is the responsibility of the service organization's management rather than the service auditor?",
      "options": [
        "Expressing an opinion on whether the controls operated effectively",
        "Preparing the description of the system and a written assertion about it",
        "Designing and performing tests of controls to obtain sufficient evidence",
        "Describing the tests of controls performed and their results in the report"
      ],
      "answer": "B",
      "explanation": "Management is responsible for the description of the system, for providing a written assertion about it, and for designing, implementing, and operating the controls. The service auditor's responsibility is to express an opinion based on the examination, which includes designing and performing tests of controls and reporting the results of those tests.",
      "rationales": {
        "A": "Expressing an opinion on the description and the controls is the service auditor's responsibility.",
        "B": "Management prepares the description of the system and the written assertion, and is responsible for the controls and for the suitability of the criteria.",
        "C": "Designing and performing tests of controls to obtain evidence is the service auditor's work.",
        "D": "Describing the tests performed and their results in the report is done by the service auditor."
      },
      "topic": "Considerations for System and Organization Controls (SOC) Engagements",
      "subtopic": "Considerations specific to reporting on a SOC engagement",
      "difficulty": "medium",
      "source": "AICPA SOC 2 guide; AT-C 205, assertion-based examination engagements; ISC syllabus: SOC reporting"
    }
  ]
}
```
