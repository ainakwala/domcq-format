```json
{
  "format": "domcq/1",
  "exam": "comptia-secplus",
  "set": "CompTIA Security+ practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A legacy manufacturing controller cannot be upgraded to support multifactor authentication. To reduce the risk, the security team places the controller on an isolated network segment and requires administrators to connect through a monitored jump server. Which of the following control types best describes the isolation and jump server in this scenario?",
      "options": [
        "Detective",
        "Corrective",
        "Compensating",
        "Deterrent"
      ],
      "answer": "C",
      "explanation": "A compensating control is an alternative safeguard used when the primary control, here multifactor authentication, cannot be implemented. Isolating the device and forcing access through a monitored jump server lowers the risk to a level comparable to the missing control. It is not detective, corrective or deterrent, because its purpose is to stand in for the unavailable control.",
      "topic": "General Security Concepts",
      "subtopic": "Compare and contrast various types of security controls",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 1.1: Compare and contrast various types of security controls (control types: compensating)"
    },
    {
      "stem": "An organization is deploying a zero trust architecture. When a user requests access to a file share, one component evaluates the request against policy, using signals such as user identity, device posture and location, and decides whether access should be granted. Which of the following components performs this function?",
      "options": [
        "Policy engine",
        "Policy administrator",
        "Policy enforcement point",
        "Implicit trust zone"
      ],
      "answer": "A",
      "explanation": "In zero trust, the control plane contains the policy engine, which evaluates each access request against policy and contextual signals and makes the grant or deny decision. The policy administrator then carries out that decision by establishing or tearing down the session, and the policy enforcement point in the data plane enforces it at the resource. Separating the decision from the enforcement allows access to be evaluated consistently for every request.",
      "topic": "General Security Concepts",
      "subtopic": "Summarize fundamental security concepts",
      "difficulty": "hard",
      "source": "CompTIA Security+ SY0-701 objective 1.2: Summarize fundamental security concepts (zero trust: control plane and data plane)"
    },
    {
      "stem": "A company's public website is defaced with messages condemning its environmental practices. No ransom is demanded and no data is stolen or sold. Which of the following threat actors is most likely responsible?",
      "options": [
        "Organized crime",
        "Hacktivist",
        "Insider threat",
        "Nation-state"
      ],
      "answer": "B",
      "explanation": "Hacktivists attack to promote a political or social cause and usually want publicity rather than money. The public message, the absence of a ransom demand and the lack of data theft all point to an ideological motivation. Organized crime is financially motivated, and nation-states typically pursue espionage or strategic goals rather than public protest.",
      "topic": "Threats, Vulnerabilities, and Mitigations",
      "subtopic": "Compare and contrast common threat actors and motivations",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 objective 2.1: Compare and contrast common threat actors and motivations (hacktivist; philosophical/political beliefs)"
    },
    {
      "stem": "A security analyst reviewing authentication logs sees that one user account signed in from an office in Chicago at 9:02 a.m. and then successfully signed in from a data center IP address in Singapore at 9:25 a.m. the same morning. Which of the following indicators of malicious activity does this best describe?",
      "options": [
        "Blocked content",
        "Resource consumption",
        "Missing logs",
        "Impossible travel"
      ],
      "answer": "D",
      "explanation": "Impossible travel is an account-compromise indicator in which sign-ins occur from locations too far apart for one person to travel between in the time elapsed. Chicago and Singapore are thousands of miles apart, so the same user cannot legitimately sign in from both 23 minutes apart. The analyst should treat the account as potentially compromised and investigate.",
      "topic": "Threats, Vulnerabilities, and Mitigations",
      "subtopic": "Given a scenario, analyze indicators of malicious activity",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 objective 2.4: Given a scenario, analyze indicators of malicious activity (account indicators: impossible travel)"
    },
    {
      "stem": "A web application builds its login query by concatenating the username and password fields directly into a SQL statement. A penetration tester enters ' OR '1'='1 as the username and is logged in without valid credentials. Which of the following changes would most effectively remediate the vulnerability?",
      "options": [
        "Require HTTPS and HSTS for every connection to the login page",
        "Use parameterized queries with server-side input validation",
        "Add a CAPTCHA challenge and rate limiting to the login form",
        "Lock accounts for 30 minutes after five failed login attempts"
      ],
      "answer": "B",
      "explanation": "The tester changed the logic of the query because user input was treated as part of the SQL command, which is SQL injection. Parameterized queries keep data separate from code so that input cannot alter the query structure, and input validation adds a second layer of defense. HTTPS protects data in transit, and CAPTCHA, rate limiting and lockout slow automated guessing, but none of them stops a single crafted request from succeeding.",
      "topic": "Threats, Vulnerabilities, and Mitigations",
      "subtopic": "Explain various types of vulnerabilities",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 2.3: Explain various types of vulnerabilities (application: SQL injection)"
    },
    {
      "stem": "Ransomware entered a company through one compromised workstation and then spread to dozens of other workstations by connecting to their SMB file-sharing service. Workstations never need to share files with each other. Which TWO of the following actions would best limit this type of lateral movement in the future? Choose TWO.",
      "options": [
        "Block inbound SMB between workstations using host firewall rules",
        "Enable full-disk encryption on all workstations and laptops",
        "Add attachment scanning and sandboxing at the email gateway",
        "Segment the network so workstations cannot reach each other directly"
      ],
      "answer": "AD",
      "explanation": "Lateral movement depends on one compromised host being able to reach services on its peers. Host-based firewall rules that block workstation-to-workstation SMB, and segmentation that prevents direct communication, both remove that path and contain an infection to a single machine. Disk encryption protects data at rest and email filtering reduces initial entry, but neither stops malware that is already inside from spreading over the network.",
      "topic": "Threats, Vulnerabilities, and Mitigations",
      "subtopic": "Explain the purpose of mitigation techniques used to secure the enterprise",
      "difficulty": "hard",
      "source": "CompTIA Security+ SY0-701 objective 2.5: Explain the purpose of mitigation techniques used to secure the enterprise (segmentation; hardening techniques: host-based firewalls)"
    },
    {
      "stem": "A company is migrating a legacy application to a cloud provider. The company wants the provider to supply virtual servers, storage and networking, while the company continues to install and patch the operating system and the application itself. Which of the following cloud service models best fits this requirement?",
      "options": [
        "Software as a service (SaaS)",
        "Platform as a service (PaaS)",
        "Infrastructure as a service (IaaS)",
        "Function as a service (FaaS)"
      ],
      "answer": "C",
      "explanation": "In IaaS the provider delivers virtualized compute, storage and networking, and the customer is responsible for everything above the hypervisor, including the operating system, patching, middleware and applications. In PaaS the provider also manages the operating system and runtime, and in SaaS the provider manages the entire application. Because this company wants to keep control of operating system patching, IaaS is the match.",
      "topic": "Security Architecture",
      "subtopic": "Compare and contrast security implications of different architecture models",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 objective 3.1: Compare and contrast security implications of different architecture models (cloud; responsibility matrix)"
    },
    {
      "stem": "A company must make a customer-facing web server reachable from the internet. The web server queries a database server that should never be reachable directly from the internet. Which of the following network designs best protects the database server?",
      "options": [
        "Place both servers in the screened subnet and filter traffic with one firewall",
        "Place the web server in a screened subnet and the database server on an internal network segment",
        "Place both servers on the internal network and forward ports from the internet to each",
        "Place the database server in the screened subnet and the web server on the internal network"
      ],
      "answer": "B",
      "explanation": "A screened subnet (DMZ) holds services that must be exposed to the internet, so a compromise of the web server does not put the attacker directly on the internal network. Keeping the database on an internal segment, reachable only from the web server through firewall rules, forces an attacker to get past another layer to reach the data. This is defense in depth, whereas exposing the database or placing both servers in the screened subnet widens the attack surface.",
      "topic": "Security Architecture",
      "subtopic": "Given a scenario, apply security principles to secure enterprise infrastructure",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 3.2: Given a scenario, apply security principles to secure enterprise infrastructure (screened subnet; network segmentation)"
    },
    {
      "stem": "An e-commerce company stores customers' payment card numbers. The company wants its order database to hold only substitute values that have no mathematical relationship to the real card numbers, while the real numbers are kept in a separate, tightly controlled system. Which of the following data protection methods is being described?",
      "options": [
        "Hashing",
        "Masking",
        "Salting",
        "Tokenization"
      ],
      "answer": "D",
      "explanation": "Tokenization replaces sensitive data with a randomly generated surrogate value that cannot be reversed by calculation, and the mapping back to the original is held in a secured token vault. Hashing and salting are one-way transformations of the data itself, and masking hides part of a value for display, such as showing only the last four digits. Tokenization lets the order database be used without ever holding the card numbers.",
      "topic": "Security Architecture",
      "subtopic": "Compare and contrast concepts and strategies to protect data",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 3.3: Compare and contrast concepts and strategies to protect data (methods to secure data: tokenization, masking, hashing)"
    },
    {
      "stem": "A hospital's recovery plan states that the patient records system must be back in service within 4 hours of an outage, and that no more than 15 minutes of data may be lost. Which of the following correctly identifies these two requirements?",
      "options": [
        "Recovery time objective of 4 hours and recovery point objective of 15 minutes",
        "Recovery point objective of 4 hours and recovery time objective of 15 minutes",
        "Mean time to repair of 4 hours and mean time between failures of 15 minutes",
        "Mean time between failures of 4 hours and recovery time objective of 15 minutes"
      ],
      "answer": "A",
      "explanation": "The recovery time objective (RTO) is the maximum acceptable time to restore a service after an outage, here 4 hours. The recovery point objective (RPO) is the maximum acceptable amount of data loss measured in time, here 15 minutes, and it determines how often data must be backed up or replicated. MTTR and MTBF describe repair time and reliability of components, not recovery targets.",
      "topic": "Security Architecture",
      "subtopic": "Explain the importance of resilience and recovery in security architecture",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 objective 3.4 (resilience and recovery) and objective 5.2 (business impact analysis: RTO, RPO, MTTR, MTBF)"
    },
    {
      "stem": "A company issues smartphones to employees and wants to enforce a screen-lock PIN, restrict which applications can be installed, and remotely wipe a device if it is lost. Which of the following solutions should the company deploy?",
      "options": [
        "Network access control (NAC)",
        "Mobile device management (MDM)",
        "Data loss prevention (DLP)",
        "Intrusion prevention system (IPS)"
      ],
      "answer": "B",
      "explanation": "MDM platforms let administrators push security policies such as PIN requirements and application restrictions to enrolled devices and remotely lock or wipe them. NAC controls which devices may join a network, DLP monitors for sensitive data leaving the organization, and an IPS inspects network traffic. None of those manage the settings on the phone itself.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, apply common security techniques to computing resources",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 objective 4.1: Given a scenario, apply common security techniques to computing resources (mobile solutions: mobile device management)"
    },
    {
      "stem": "A vulnerability scanner reports that a web server is missing a critical security patch. The administrator checks the server and confirms that the patch was installed and that the scanner misread the version banner. Which of the following best describes this scan result?",
      "options": [
        "True positive",
        "True negative",
        "False positive",
        "False negative"
      ],
      "answer": "C",
      "explanation": "A false positive occurs when a scanner reports a vulnerability that does not actually exist. Here the server is patched and the scanner relied on an inaccurate banner, so the finding is incorrect. A false negative would be the opposite, a real vulnerability that the scanner failed to report, and validating findings prevents wasted remediation effort.",
      "topic": "Security Operations",
      "subtopic": "Explain various activities associated with vulnerability management",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 objective 4.3: Explain various activities associated with vulnerability management (analysis: confirmation, false positive, false negative)"
    },
    {
      "stem": "Analysts at a security operations center spend hours on every phishing report extracting URLs, checking their reputation, deleting matching messages from all mailboxes and opening a ticket. The manager wants these steps to run automatically, in a defined sequence, whenever a report arrives. Which of the following should the manager implement?",
      "options": [
        "A SIEM correlation rule that raises an alert for each report",
        "A change management ticket template for the help desk",
        "A data loss prevention rule that blocks suspicious attachments",
        "A SOAR playbook that automates the response workflow"
      ],
      "answer": "D",
      "explanation": "Security orchestration, automation, and response (SOAR) platforms connect security tools through APIs and run playbooks that carry out a response workflow automatically, which reduces response time and removes repetitive manual work. A SIEM correlation rule can detect an event and raise an alert, but it does not itself perform multi-step remediation across mail and ticketing systems.",
      "topic": "Security Operations",
      "subtopic": "Explain the importance of automation and orchestration related to secure operations",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 4.7: Explain the importance of automation and orchestration related to secure operations (use cases and benefits)"
    },
    {
      "stem": "A security administrator is configuring multifactor authentication for a remote access system and wants each login to require factors from two different categories. Which TWO of the following combinations meet this requirement? Choose TWO.",
      "options": [
        "A password and a PIN",
        "A smart card and a PIN",
        "A fingerprint scan and a facial scan",
        "A hardware token and a fingerprint scan"
      ],
      "answer": "BD",
      "explanation": "Multifactor authentication requires factors from at least two different categories: something you know, something you have and something you are. A smart card (have) with a PIN (know), and a hardware token (have) with a fingerprint (are), each combine two categories. A password and a PIN are both knowledge factors, and a fingerprint and a facial scan are both inherence factors, so those pairs use two factors of the same type rather than true multifactor authentication.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, implement and maintain identity and access management",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 4.6: Given a scenario, implement and maintain identity and access management (multifactor authentication: something you know, have, are)"
    },
    {
      "stem": "A SOC analyst confirms that a user's workstation is infected with malware and is sending regular beacons to an external command-and-control server. The incident has been declared, and the analyst has not yet taken any action on the workstation. According to the incident response process, which of the following should the analyst do next?",
      "options": [
        "Isolate the workstation from the network",
        "Reimage the workstation to remove the malware",
        "Hold a lessons-learned meeting with the team",
        "Restore the user's files from the last backup"
      ],
      "answer": "A",
      "explanation": "After detection and analysis confirm an active compromise, containment comes next. Isolating the host stops the malware from communicating with the attacker and spreading to other systems while evidence is preserved. Eradication (removing the malware, for example by reimaging) and recovery (restoring data and returning the system to service) follow only after the threat is contained, and lessons learned comes at the end of the incident.",
      "topic": "Security Operations",
      "subtopic": "Explain appropriate incident response activities",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 4.8: Explain appropriate incident response activities (process: detection, analysis, containment, eradication, recovery, lessons learned)"
    },
    {
      "stem": "A firewall evaluates its rules from top to bottom and applies the first rule that matches a packet. The current rule set is: (1) Allow TCP 443 from any source to 10.0.1.10; (2) Deny all traffic from 203.0.113.0/24 to any destination; (3) Allow TCP 22 from 10.0.0.0/8 to any destination; (4) Deny all traffic from any source to any destination. A host at 203.0.113.50 attempts to open a TCP 443 connection to 10.0.1.10. Which of the following will occur?",
      "options": [
        "The connection is denied because rule 2 blocks the source network",
        "The connection is denied because rule 4 denies all traffic by default",
        "The connection is allowed because rule 1 matches the packet first",
        "The connection is denied because rule 3 only permits SSH traffic"
      ],
      "answer": "C",
      "explanation": "Firewalls process rules in order and stop at the first match, so rule order matters. The packet matches rule 1 (TCP 443 to 10.0.1.10 from any source) before it ever reaches the rule 2 block on its source network, so the connection is allowed. To block that network from the web server, the deny rule would need to be placed above the allow rule.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, modify enterprise capabilities to enhance security",
      "difficulty": "hard",
      "source": "CompTIA Security+ SY0-701 objective 4.5: Given a scenario, modify enterprise capabilities to enhance security (firewall: rules and access control lists)"
    },
    {
      "stem": "A company's encryption policy requires that laptop data be encrypted. Management now wants a separate document that is mandatory, states the specific minimum algorithm and key length that laptops must use, and is referenced by the encryption policy, but that does not explain how to configure the encryption. Which of the following document types is being described?",
      "options": [
        "Guideline",
        "Standard",
        "Procedure",
        "Policy"
      ],
      "answer": "B",
      "explanation": "A standard is a mandatory document that sets specific, measurable requirements, such as a minimum algorithm and key length, in support of a higher-level policy. A policy states management's broad intent, a procedure gives step-by-step instructions for carrying out a task, and a guideline offers recommended, non-mandatory advice.",
      "topic": "Security Program Management and Oversight",
      "subtopic": "Summarize elements of effective security governance",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 5.1: Summarize elements of effective security governance (guidelines; policies; standards; procedures)"
    },
    {
      "stem": "A company is about to contract a vendor to process customer data. The company's compliance team wants the contract to allow it, or an independent auditor it appoints, to inspect the vendor's security controls and facilities when needed. Which of the following contract provisions should the team require?",
      "options": [
        "A non-disclosure agreement",
        "A statement of work",
        "A service-level agreement",
        "A right-to-audit clause"
      ],
      "answer": "D",
      "explanation": "A right-to-audit clause gives the customer contractual authority to examine a vendor's controls, records and facilities, which supports ongoing oversight of third-party risk. A non-disclosure agreement protects the confidentiality of shared information, a statement of work defines tasks and deliverables, and a service-level agreement defines measurable service performance such as uptime. None of those grants inspection rights.",
      "topic": "Security Program Management and Oversight",
      "subtopic": "Explain the processes associated with third-party risk assessment and management",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 5.3: Explain the processes associated with third-party risk assessment and management (right-to-audit clause; agreement types)"
    },
    {
      "stem": "A flood would destroy 30 percent of the value of a company's $400,000 data center, and floods of that severity are expected about once every five years. A flood barrier costing $15,000 per year would reduce the damage from such a flood to 10 percent of the data center's value. Which of the following is the most accurate conclusion about the barrier?",
      "options": [
        "Justified, because it lowers the annualized loss expectancy from $120,000 to $40,000, an $80,000 saving",
        "Not justified, because the $15,000 yearly cost exceeds the $8,000 annualized loss expectancy that remains",
        "Justified, because it lowers the annualized loss expectancy from $24,000 to $8,000, a $16,000 saving",
        "Not justified, because the $16,000 yearly saving is smaller than the $24,000 annualized loss expectancy"
      ],
      "answer": "C",
      "explanation": "Annualized loss expectancy (ALE) equals single loss expectancy (SLE) multiplied by annualized rate of occurrence (ARO). Without the barrier, SLE is $400,000 x 30% = $120,000 and ARO is 0.2, so ALE is $24,000; with it, SLE is $40,000 and ALE is $8,000. The $16,000 annual reduction slightly exceeds the $15,000 cost, so the control is cost-justified, though only marginally.",
      "topic": "Security Program Management and Oversight",
      "subtopic": "Explain elements of the risk management process",
      "difficulty": "hard",
      "source": "CompTIA Security+ SY0-701 objective 5.2: Explain elements of the risk management process (quantitative risk analysis: SLE, ARO, ALE)"
    },
    {
      "stem": "A security awareness team is updating its annual training so that employees can recognize and report warning signs from coworkers, such as expressing resentment toward the company, suddenly accessing systems unrelated to their role, and copying large amounts of data to personal storage. Which of the following training topics should be added?",
      "options": [
        "Insider threat",
        "Password management",
        "Clean desk policy",
        "Social engineering"
      ],
      "answer": "A",
      "explanation": "Insider threat awareness teaches employees to recognize behavioral and technical warning signs, such as disgruntlement, access to resources outside job duties and unusual data transfers, and to report them through the proper channel. The other topics address password hygiene, physical workspace practices and manipulation by outsiders, not warning signs from coworkers.",
      "topic": "Security Program Management and Oversight",
      "subtopic": "Given a scenario, implement security awareness practices",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 5.6: Given a scenario, implement security awareness practices (recognizing insider threats; anomalous behavior recognition)"
    }
  ]
}
```
