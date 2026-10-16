```json
{
  "format": "domcq/1",
  "exam": "comptia-secplus",
  "set": "CompTIA Security+ practice – SY0-701 mixed domains",
  "questions": [
    {
      "stem": "A company is deploying a zero trust architecture. A component in the data plane sits in front of each enterprise resource and allows, monitors and terminates connections between a subject and that resource, based on decisions made by the control plane. Which of the following components is being described?",
      "options": [
        "Policy administrator",
        "Policy enforcement point",
        "Policy engine",
        "Implicit trust zone"
      ],
      "answer": "B",
      "explanation": "Zero trust splits responsibilities between a control plane and a data plane. The control plane (policy engine and policy administrator) decides whether a request should be allowed, while the policy enforcement point in the data plane sits in front of the resource and enables, monitors and terminates the connection according to that decision. Knowing which plane each component belongs to is the key to telling them apart.",
      "rationales": {
        "A": "The policy administrator is part of the control plane; it relays decisions to the enforcement point rather than handling the traffic itself.",
        "B": "Correct. The policy enforcement point is the data-plane gatekeeper that enables, monitors and terminates connections per the control plane's decisions.",
        "C": "The policy engine is in the control plane and decides whether to grant access; it does not sit in the traffic path.",
        "D": "An implicit trust zone is the area where subjects are trusted after passing the enforcement point; it is not the component that enforces access."
      },
      "topic": "General Security Concepts",
      "subtopic": "Summarize fundamental security concepts",
      "difficulty": "hard",
      "source": "CompTIA Security+ SY0-701 Objective 1.2 (zero trust: control plane and data plane)"
    },
    {
      "stem": "A change advisory board is reviewing a request to modify firewall rules in a production environment. Which TWO of the following should the change request include before the board approves it? Choose TWO.",
      "options": [
        "A backout plan for restoring the previous firewall configuration",
        "An impact analysis covering the systems that depend on the firewall",
        "A waiver that exempts the change from any testing requirement",
        "A statement that the change will be made without advance notice"
      ],
      "answer": "AB",
      "explanation": "Change management reduces the risk that a modification causes an outage or opens a security gap. A backout plan lets the team restore the prior state if the change fails, and an impact analysis identifies dependent systems and risks so approvers can judge whether to proceed. Skipping testing or notification undermines the purpose of the process.",
      "rationales": {
        "A": "Correct. A backout plan lets the team quickly restore the prior firewall configuration if the change causes problems.",
        "B": "Correct. An impact analysis shows which systems and users could be affected, so approvers can weigh the risk before authorizing the change.",
        "C": "Change processes call for testing; exempting a production firewall change from testing raises the risk of an outage or security gap.",
        "D": "Stakeholders must be told about scheduled changes; making changes without notice defeats the purpose of change management."
      },
      "topic": "General Security Concepts",
      "subtopic": "Explain the importance of change management processes and the impact to security",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 Objective 1.3 (change management: approval process, impact analysis, backout plan)"
    },
    {
      "stem": "Security analysts at a defense contractor discover that an unknown party has kept covert access to their network for more than a year, quietly copying design documents for a military aircraft. The activity shows substantial funding and custom tooling. Which of the following threat actors is the MOST likely?",
      "options": [
        "Hacktivist",
        "Insider threat",
        "Unskilled attacker",
        "Nation-state"
      ],
      "answer": "D",
      "explanation": "Long-term, stealthy theft of sensitive defense designs by a well-funded party using custom tooling is the classic profile of a nation-state actor, whose usual motivation is espionage. Threat actors are distinguished by their resources, sophistication and motivation, and these attributes point to the right category.",
      "rationales": {
        "A": "Hacktivists are driven by political or social causes and usually seek publicity, not months of quiet theft of design documents.",
        "B": "An insider would use legitimate access, and nothing here points to an employee; the funding and custom tooling suggest an external organization.",
        "C": "Unskilled attackers rely on ready-made tools and rarely sustain a well-funded, stealthy campaign for a year.",
        "D": "Correct. Nation-states are well funded and patient, and espionage against defense contractors is a classic nation-state objective."
      },
      "topic": "Threats, Vulnerabilities, and Mitigations",
      "subtopic": "Compare and contrast common threat actors and motivations",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 Objective 2.1 (threat actors: nation-state, attributes and motivations)"
    },
    {
      "stem": "A security analyst reviewing authentication logs sees about 5,000 failed logins against a company's VPN portal over two hours. The attempts come from many source IP addresses, each targeting a different username, and every attempt uses the same common password, 'Winter2026!'. Which of the following attacks is the company facing?",
      "options": [
        "Brute force",
        "Credential stuffing",
        "Password spraying",
        "Rainbow table attack"
      ],
      "answer": "C",
      "explanation": "Password spraying tries one or a few common passwords across many accounts, which avoids tripping per-account lockout thresholds. Brute force tries many passwords against a single account, and credential stuffing replays username and password pairs leaked from earlier breaches. A rainbow table attack is an offline attack against password hashes.",
      "rationales": {
        "A": "Brute force tries many different passwords against one account; here one password is tried against many accounts.",
        "B": "Credential stuffing replays leaked username and password pairs, so each account would see a different password, not one shared password.",
        "C": "Correct. Trying one common password across many usernames is password spraying, designed to avoid account lockouts.",
        "D": "Rainbow tables are precomputed hash lookups used offline; they are not used to make failed online logins against a portal."
      },
      "topic": "Threats, Vulnerabilities, and Mitigations",
      "subtopic": "Given a scenario, analyze indicators of malicious activity",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 Objective 2.4 (indicators of malicious activity: password attacks, spraying and brute force)"
    },
    {
      "stem": "A system administrator is hardening a newly built Linux file server before connecting it to the production network. Which THREE of the following actions would contribute to hardening the server? Choose THREE.",
      "options": [
        "Disabling services and ports that the server does not need",
        "Allowing remote administration from any network address",
        "Removing default accounts and changing default credentials",
        "Enabling a host-based firewall that permits only required traffic"
      ],
      "answer": "ACD",
      "explanation": "Hardening reduces a system's attack surface before it goes into production. Disabling unneeded services and ports, removing or changing default accounts and credentials, and enabling a host-based firewall all take away easy paths for attackers. Opening remote administration to any address does the opposite by increasing exposure.",
      "rationales": {
        "A": "Correct. Every running service and open port adds attack surface, so the ones the server does not need should be disabled.",
        "B": "Allowing administration from any address widens exposure; remote management should be limited to specific trusted hosts.",
        "C": "Correct. Default accounts and credentials are publicly documented and commonly targeted, so they should be removed or changed.",
        "D": "Correct. A host-based firewall limits inbound and outbound traffic to what the server actually requires."
      },
      "topic": "Threats, Vulnerabilities, and Mitigations",
      "subtopic": "Explain the purpose of mitigation techniques used to secure the enterprise",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 Objective 2.5 (mitigation techniques: hardening techniques)"
    },
    {
      "stem": "A developer reviews a program that first checks whether the calling user is permitted to write to a temporary file and then, in a separate step, opens the file for writing. During testing, an attacker replaces the file with a link to a protected system file in the short interval between the two steps, and the program overwrites the protected file. Which of the following vulnerabilities is the attacker exploiting?",
      "options": [
        "Time-of-check to time-of-use race condition",
        "Stack-based buffer overflow",
        "Memory injection into a running process",
        "Use of hard-coded credentials"
      ],
      "answer": "A",
      "explanation": "A time-of-check to time-of-use (TOCTOU) race condition occurs when the state of a resource changes between the moment it is checked and the moment it is used. The attacker exploits the gap by swapping the file after the permission check passes. The usual fix is to make the check and the use a single atomic operation.",
      "rationales": {
        "A": "Correct. The file changes between the permission check and the write, which is the defining pattern of a TOCTOU race condition.",
        "B": "A buffer overflow writes past the bounds of a memory buffer; nothing in the scenario involves oversized input or memory corruption.",
        "C": "Memory injection places malicious code into another process's memory; here the attacker only swaps a file between two steps.",
        "D": "Hard-coded credentials are secrets embedded in code; the attack here does not involve any credentials."
      },
      "topic": "Threats, Vulnerabilities, and Mitigations",
      "subtopic": "Explain various types of vulnerabilities",
      "difficulty": "hard",
      "source": "CompTIA Security+ SY0-701 Objective 2.3 (application vulnerabilities: race conditions, time-of-check/time-of-use)"
    },
    {
      "stem": "A company moves several servers to virtual machines hosted in an infrastructure as a service (IaaS) offering from a public cloud provider. Under the shared responsibility model, which of the following is the company MOST likely responsible for?",
      "options": [
        "Maintaining power and cooling in the provider's data centers",
        "Patching the hypervisor that runs the virtual machines",
        "Patching the operating systems installed on the virtual machines",
        "Controlling physical access to the provider's server racks"
      ],
      "answer": "C",
      "explanation": "In IaaS the provider secures the facilities, hardware and virtualization layer, while the customer manages everything it installs on top: guest operating systems, applications, data and access configuration. The more abstracted the service model (PaaS, then SaaS), the more responsibility shifts to the provider.",
      "rationales": {
        "A": "Power and cooling are facility concerns that the provider handles in every cloud service model.",
        "B": "The hypervisor belongs to the provider's virtualization layer; the customer cannot patch it in IaaS.",
        "C": "Correct. In IaaS the customer controls and must patch the guest operating systems, along with applications and data.",
        "D": "Physical access to the provider's racks is controlled by the provider, not by the customer."
      },
      "topic": "Security Architecture",
      "subtopic": "Compare and contrast security implications of different architecture models",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 Objective 3.1 (architecture models: cloud and the responsibility matrix)"
    },
    {
      "stem": "A retailer's payment application must keep processing refunds against past card purchases, but the company wants its database to hold no real card numbers. The security team decides to replace each card number with a randomly generated value and to keep the mapping to the real numbers in a separate, tightly controlled vault. Which of the following data protection techniques is the team implementing?",
      "options": [
        "Data masking",
        "Salting",
        "Hashing",
        "Tokenization"
      ],
      "answer": "D",
      "explanation": "Tokenization substitutes sensitive data with a random surrogate value, called a token, and keeps the mapping in a secured vault. Applications can still reference the original record without storing the real value. Masking hides parts of a value for display, hashing is a one-way transformation, and salting adds random data to a hash input.",
      "rationales": {
        "A": "Masking obscures part of a value, such as showing only the last four digits, and does not keep a lookup back to the original.",
        "B": "Salting adds random data to a value before hashing to defeat precomputed attacks; it does not create a replaceable surrogate.",
        "C": "Hashing is a one-way transformation, so the original numbers could not be retrieved later to process refunds.",
        "D": "Correct. Replacing values with random tokens and keeping the mapping in a secured vault is tokenization."
      },
      "topic": "Security Architecture",
      "subtopic": "Compare and contrast concepts and strategies to protect data",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 Objective 3.3 (data protection: tokenization, masking, obfuscation)"
    },
    {
      "stem": "A company wants administrators to manage servers in a restricted network segment only through a single hardened system that enforces multifactor authentication and records each administrative session. Which of the following should the company deploy?",
      "options": [
        "Load balancer",
        "Jump server",
        "Honeypot",
        "Reverse proxy"
      ],
      "answer": "B",
      "explanation": "A jump server (jump box) is a hardened host that acts as the single controlled entry point to a more secure network segment. Because all administrative traffic passes through it, the organization can enforce MFA, restrict who may connect and log every session. Load balancers, honeypots and reverse proxies serve different purposes.",
      "rationales": {
        "A": "A load balancer distributes client traffic across servers for availability; it does not provide controlled administrative access.",
        "B": "Correct. A hardened jump server is the single, monitored path administrators use to reach a restricted segment.",
        "C": "A honeypot is a decoy system meant to attract and study attackers, not a gateway for legitimate administration.",
        "D": "A reverse proxy fronts application servers for client requests; it is not an administrative access point with session recording."
      },
      "topic": "Security Architecture",
      "subtopic": "Given a scenario, apply security principles to secure enterprise infrastructure",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 Objective 3.2 (infrastructure considerations: jump server and secure access)"
    },
    {
      "stem": "A company backs up its order database every six hours. After a storage failure, leadership states that the business can tolerate losing no more than 30 minutes of transactions. Which of the following metrics is the current backup schedule failing to meet?",
      "options": [
        "Recovery point objective (RPO)",
        "Recovery time objective (RTO)",
        "Mean time between failures (MTBF)",
        "Mean time to repair (MTTR)"
      ],
      "answer": "A",
      "explanation": "The recovery point objective is the maximum acceptable amount of data loss measured in time, and it determines how often data must be backed up or replicated. With backups every six hours, up to six hours of transactions could be lost, which exceeds the 30-minute tolerance. RTO measures how long restoration may take, not how much data can be lost.",
      "rationales": {
        "A": "Correct. RPO is the maximum tolerable data loss in time; six-hour backups cannot meet a 30-minute tolerance.",
        "B": "RTO is how quickly service must be restored; the scenario is about how much data can be lost, not restoration time.",
        "C": "MTBF is the average time between failures of a component; it says nothing about acceptable data loss.",
        "D": "MTTR is the average time needed to repair a failed component; it does not describe acceptable data loss."
      },
      "topic": "Security Architecture",
      "subtopic": "Explain the importance of resilience and recovery in security architecture",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 Objectives 3.4 (backups and recovery) and 5.2 (business impact analysis: RPO, RTO, MTBF, MTTR)"
    },
    {
      "stem": "A vulnerability scanner reports a critical remote-code-execution flaw on a company web server. The security analyst checks the server and finds that the vendor patch for that flaw was installed last month and the vulnerable service is not running. How should the analyst classify this scanner finding?",
      "options": [
        "True positive",
        "True negative",
        "False positive",
        "False negative"
      ],
      "answer": "C",
      "explanation": "A false positive is a finding the scanner reports that is not actually present or exploitable. Here the patch is installed and the service is not running, so the reported flaw does not exist on the server. Validating scanner results against the real state of the system is a core part of vulnerability analysis.",
      "rationales": {
        "A": "A true positive would be a reported flaw that really exists; the analyst confirmed it does not.",
        "B": "A true negative means no flaw exists and none was reported; here the scanner did report one.",
        "C": "Correct. The scanner reported a flaw that is not present, which is a false positive.",
        "D": "A false negative is a real flaw the scanner failed to report, the opposite of this situation."
      },
      "topic": "Security Operations",
      "subtopic": "Explain various activities associated with vulnerability management",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 Objective 4.3 (vulnerability analysis: confirmation, false positives and false negatives)"
    },
    {
      "stem": "A company wants access to its finance application to be granted only when the request comes from a user in the Finance department, on a device that meets the endpoint compliance policy, during business hours. Which of the following access control models BEST supports this requirement?",
      "options": [
        "Role-based access control (RBAC)",
        "Attribute-based access control (ABAC)",
        "Mandatory access control (MAC)",
        "Discretionary access control (DAC)"
      ],
      "answer": "B",
      "explanation": "Attribute-based access control makes decisions by evaluating several attributes of the user, the device, the resource and the environment, such as department, compliance status and time of day. Role-based control assigns permissions by job role alone and does not natively evaluate device posture or context. MAC relies on labels and clearances, and DAC lets resource owners set permissions.",
      "rationales": {
        "A": "RBAC grants permissions by role and does not natively evaluate device compliance or time of day.",
        "B": "Correct. ABAC evaluates multiple attributes together, such as department, device compliance and time, to make each decision.",
        "C": "MAC enforces access using security labels and clearances set by policy, not contextual factors like device posture.",
        "D": "DAC lets resource owners decide who gets access, which does not enforce department, device and time conditions centrally."
      },
      "topic": "Security Operations",
      "subtopic": "Given a scenario, implement and maintain identity and access management",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 Objective 4.6 (access control models: ABAC, RBAC, MAC, DAC)"
    },
    {
      "stem": "When the endpoint detection and response (EDR) tool flags ransomware behavior, a security operations center wants the workstation isolated from the network, a ticket opened and the on-call analyst paged automatically, with no manual steps. Which of the following would BEST accomplish this?",
      "options": [
        "A SIEM dashboard with correlation rules",
        "A NAC policy with posture checks",
        "A DLP policy with endpoint agents",
        "A SOAR playbook with automated actions"
      ],
      "answer": "D",
      "explanation": "SOAR platforms run playbooks that chain actions across tools, such as isolating an endpoint, creating a ticket and paging an analyst, without manual steps. This shortens response time and keeps responses consistent. A SIEM collects and correlates events, NAC controls network admission and DLP prevents data exfiltration; none of them orchestrates a multi-step response.",
      "rationales": {
        "A": "A SIEM aggregates and correlates events and raises alerts, but it does not orchestrate isolation, ticketing and paging on its own.",
        "B": "NAC could restrict a device's network access but does not open tickets or page analysts as part of a coordinated response.",
        "C": "DLP detects and blocks sensitive data leaving the organization; it is not built to orchestrate an incident response workflow.",
        "D": "Correct. A SOAR playbook automates and orchestrates multi-step responses across tools without analyst intervention."
      },
      "topic": "Security Operations",
      "subtopic": "Explain the importance of automation and orchestration related to secure operations",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 Objectives 4.7 (automation use cases: ticket creation, escalation) and 4.4 (SOAR)"
    },
    {
      "stem": "During an incident response, an analyst arrives at a running workstation suspected of hosting malware. The analyst needs to preserve evidence and follows the order of volatility. Which of the following should be collected FIRST?",
      "options": [
        "The contents of system memory (RAM)",
        "A forensic image of the hard drive",
        "Logs already forwarded to a remote syslog server",
        "Archived backup tapes stored offsite"
      ],
      "answer": "A",
      "explanation": "Evidence in volatile storage is lost when power is removed or changes as the system keeps running, so collection proceeds from the most to the least volatile source. System memory holds running processes, network connections and encryption keys that disappear at shutdown, so it is captured before disk images, remote logs and offline backups, which persist.",
      "rationales": {
        "A": "Correct. RAM is the most volatile source listed and is lost on power-off, so it is collected first.",
        "B": "Disk contents persist when the machine is powered off, so imaging the drive comes after volatile data is captured.",
        "C": "Logs already stored on a remote server are not at risk from the workstation's state and can be collected later.",
        "D": "Offsite backup tapes are archival and the least volatile source, so they are collected last."
      },
      "topic": "Security Operations",
      "subtopic": "Explain appropriate incident response activities",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 Objective 4.8 (digital forensics: acquisition and preservation of evidence)"
    },
    {
      "stem": "A company is upgrading the wireless network in a small office that uses a shared passphrase. The administrator wants to resist offline dictionary attacks against captured handshakes. Which of the following wireless features should the administrator enable?",
      "options": [
        "WPS PIN pairing for all new devices",
        "WPA2 with TKIP encryption enabled",
        "WPA3-Personal using the SAE handshake",
        "WEP with the longest key size"
      ],
      "answer": "C",
      "explanation": "WPA3-Personal replaces the WPA2 pre-shared key exchange with the Simultaneous Authentication of Equals (SAE) handshake, so an attacker who captures a handshake cannot test passphrase guesses offline. WEP, TKIP and WPS PIN pairing are legacy or weak mechanisms with well-known attacks and should not be used.",
      "rationales": {
        "A": "WPS PIN pairing has well-known brute-force weaknesses and makes the network easier to attack, not harder.",
        "B": "TKIP is a deprecated encryption scheme, and WPA2-Personal handshakes remain open to offline guessing.",
        "C": "Correct. WPA3-Personal's SAE handshake prevents captured handshakes from being used for offline passphrase guessing.",
        "D": "WEP is fundamentally broken, and a longer key does not fix its design flaws."
      },
      "topic": "Security Operations",
      "subtopic": "Given a scenario, apply common security techniques to computing resources",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 Objective 4.1 (wireless security settings: WPA3)"
    },
    {
      "stem": "A company is retiring laptops that contain solid-state drives (SSDs) holding sensitive customer data, and it plans to donate the laptops with their drives still installed. Which of the following is the MOST appropriate way to make the data unrecoverable?",
      "options": [
        "Quick-format each drive and reinstall the operating system",
        "Run each drive's secure-erase or cryptographic-erase command",
        "Degauss each drive with a strong magnet",
        "Shred each drive with an industrial shredder"
      ],
      "answer": "B",
      "explanation": "A quick format leaves the underlying data recoverable, and degaussing does not affect flash memory. Running the drive's secure-erase or cryptographic-erase command sanitizes the data while leaving the hardware usable, which meets the goal of making the data unrecoverable and still allows the donation. Physical shredding would also destroy the data but would destroy the drives too.",
      "rationales": {
        "A": "A quick format only removes file system pointers, so the data can usually be recovered with common tools.",
        "B": "Correct. Secure erase or cryptographic erase sanitizes SSDs and leaves the drives working so the laptops can be donated.",
        "C": "Degaussing works on magnetic media, not on the flash memory in SSDs, so the data would remain.",
        "D": "Shredding makes the data unrecoverable but destroys the drives, which conflicts with donating the laptops with the drives installed."
      },
      "topic": "Security Operations",
      "subtopic": "Explain the security implications of proper hardware, software, and data asset management",
      "difficulty": "hard",
      "source": "CompTIA Security+ SY0-701 Objective 4.2 (disposal and decommissioning: sanitization, destruction, certification)"
    },
    {
      "stem": "A risk analyst is evaluating a threat to a database that is valued at $500,000. The analyst estimates that a successful attack would destroy 40% of the database's value, and that such an attack is expected to occur once every four years. Which of the following is the annualized loss expectancy (ALE)?",
      "options": [
        "$200,000",
        "$80,000",
        "$800,000",
        "$50,000"
      ],
      "answer": "D",
      "explanation": "ALE equals the single loss expectancy (SLE) multiplied by the annualized rate of occurrence (ARO). SLE is the asset value times the exposure factor: $500,000 x 0.40 = $200,000. An event expected once every four years has an ARO of 0.25, so ALE = $200,000 x 0.25 = $50,000.",
      "rationales": {
        "A": "$200,000 is the single loss expectancy for one attack, not the annualized figure.",
        "B": "$80,000 results from applying the 40% exposure factor to the $200,000 SLE a second time, which is not part of the formula.",
        "C": "$800,000 results from multiplying the SLE by four instead of dividing by four; the ARO is 0.25, not 4.",
        "D": "Correct. SLE of $200,000 multiplied by an ARO of 0.25 gives an ALE of $50,000."
      },
      "topic": "Security Program Management and Oversight",
      "subtopic": "Explain elements of the risk management process",
      "difficulty": "hard",
      "source": "CompTIA Security+ SY0-701 Objective 5.2 (quantitative risk analysis: SLE, ARO, ALE, exposure factor)"
    },
    {
      "stem": "A company is signing a contract with a managed service provider and wants the agreement to state the minimum monthly uptime the provider must deliver and the penalties if that target is missed. Which of the following documents is designed for this purpose?",
      "options": [
        "Service-level agreement (SLA)",
        "Non-disclosure agreement (NDA)",
        "Memorandum of understanding (MOU)",
        "Rules of engagement (ROE)"
      ],
      "answer": "A",
      "explanation": "A service-level agreement defines measurable service commitments such as uptime and response times, along with the remedies or penalties if targets are missed. An NDA protects confidential information, an MOU states general intent between parties without detailed enforceable metrics, and rules of engagement define the limits of a security test.",
      "rationales": {
        "A": "Correct. An SLA sets measurable commitments, such as uptime, and the consequences when the provider misses them.",
        "B": "An NDA protects confidential information shared between parties; it does not set service levels.",
        "C": "An MOU records general intent or shared goals and typically lacks detailed, enforceable performance metrics.",
        "D": "Rules of engagement define the scope and limits of a penetration test, not a provider's uptime commitments."
      },
      "topic": "Security Program Management and Oversight",
      "subtopic": "Explain the processes associated with third-party risk assessment and management",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 Objective 5.3 (agreement types: SLA, MOU, NDA)"
    },
    {
      "stem": "A company based in Germany contracts a cloud provider to store and process its customers' personal data. The provider handles the data only according to the company's documented instructions and does not decide why the data is collected. Under the General Data Protection Regulation (GDPR), which of the following BEST describes the cloud provider's role?",
      "options": [
        "Data controller",
        "Data subject",
        "Data processor",
        "Data protection officer"
      ],
      "answer": "C",
      "explanation": "Under the GDPR, a controller determines the purposes and means of processing personal data, while a processor handles the data on the controller's behalf and under its instructions. A cloud provider that only stores and processes data as directed is a processor. The data subject is the individual the data relates to.",
      "rationales": {
        "A": "The controller decides why and how personal data is processed; here the company, not the provider, makes those decisions.",
        "B": "The data subject is the individual whom the personal data is about, not an organization that handles it.",
        "C": "Correct. A provider that processes personal data only on the company's instructions is a data processor.",
        "D": "A data protection officer is a role that oversees compliance inside an organization; it does not describe a processing service provider."
      },
      "topic": "Security Program Management and Oversight",
      "subtopic": "Summarize elements of effective security compliance",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 Objective 5.4 (privacy: data subject, controller versus processor)"
    },
    {
      "stem": "A company hires an outside firm to test the security of its public-facing web applications. To simulate an attacker with no inside knowledge, the company gives the testers only its company name and provides no credentials, source code or network diagrams. Which of the following BEST describes this type of penetration test?",
      "options": [
        "Known environment",
        "Unknown environment",
        "Partially known environment",
        "Integrated"
      ],
      "answer": "B",
      "explanation": "Penetration tests are classified by how much information the testers receive. In an unknown environment test, often called black box, the testers start with essentially no internal knowledge, which mimics an outside attacker. Known environment testing provides full details, and partially known testing provides some, such as credentials or limited documentation.",
      "rationales": {
        "A": "Known environment testing gives testers full information such as source code and diagrams, which the scenario withholds.",
        "B": "Correct. Giving testers only the company name leaves them with no internal knowledge, as a real outside attacker would have.",
        "C": "Partially known testing provides some inside information, such as credentials or limited documentation, which was not given here.",
        "D": "Integrated testing combines offensive and defensive activities; it is not defined by how much knowledge the testers start with."
      },
      "topic": "Security Program Management and Oversight",
      "subtopic": "Explain types and purposes of audits and assessments",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 Objective 5.5 (penetration testing: known, partially known and unknown environment)"
    }
  ]
}
```
