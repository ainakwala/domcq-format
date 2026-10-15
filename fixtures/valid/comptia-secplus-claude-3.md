```json
{
  "format": "domcq/1",
  "exam": "comptia-secplus",
  "set": "CompTIA Security+ practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A security team deploys a system that generates an alert whenever a user account signs in from two different countries within one hour. Which of the following control types best describes this system?",
      "options": [
        "Preventive control",
        "Detective control",
        "Corrective control",
        "Directive control"
      ],
      "answer": "B",
      "explanation": "A detective control identifies and signals that a suspicious event has occurred but does not stop it. The alert tells the team about the impossible-travel sign-in after it happens so that they can investigate. A preventive control would block the activity, a corrective control would repair damage afterward, and a directive control would instruct people through policy.",
      "topic": "General Security Concepts",
      "subtopic": "Compare and contrast various types of security controls",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 objective 1.1 (control categories and control types: preventive, deterrent, detective, corrective, compensating, directive)"
    },
    {
      "stem": "A developer is designing the login system for a new web application. The application must verify passwords but never needs to recover them, and a database breach must not reveal them. Which of the following is the best way to store the passwords?",
      "options": [
        "Encrypt each password with AES-256 and keep the key on the application server",
        "Encode each password with Base64 and store the result in the database",
        "Store each password in plaintext in a database on an encrypted volume",
        "Hash each password with a unique salt using a slow algorithm such as bcrypt"
      ],
      "answer": "D",
      "explanation": "Passwords that never need to be recovered should be stored as one-way hashes rather than in a reversible form. A unique salt per password defeats precomputed rainbow tables and stops identical passwords from producing identical hashes, and a deliberately slow algorithm such as bcrypt makes offline guessing expensive. Encryption is reversible by anyone who obtains the key from the application server, Base64 is only an encoding, and volume encryption does not protect against queries run by an attacker who reaches the database.",
      "topic": "General Security Concepts",
      "subtopic": "Explain the importance of using appropriate cryptographic solutions",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 1.4 (hashing, salting, key stretching)"
    },
    {
      "stem": "An investigation reveals that attackers used custom malware and previously unknown exploits to stay inside a defense contractor's network for 18 months, quietly copying weapons design files. Which of the following threat actors is the most likely responsible?",
      "options": [
        "Nation-state actor",
        "Hacktivist group",
        "Unskilled attacker",
        "Malicious insider"
      ],
      "answer": "A",
      "explanation": "Long-term, stealthy access combined with custom tools, zero-day exploits and a goal of espionage points to a nation-state actor, which has the funding and skill to sustain such a campaign. Hacktivists are usually motivated by ideology and want publicity rather than quiet theft, and unskilled attackers rely on prebuilt tools and rarely keep access for long. A malicious insider would not normally need custom malware to get into the network.",
      "topic": "Threats, Vulnerabilities, and Mitigations",
      "subtopic": "Compare and contrast common threat actors and motivations",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 objective 2.1 (threat actors: nation-state, unskilled attacker, hacktivist, insider threat; motivation: espionage)"
    },
    {
      "stem": "A security analyst reviews authentication logs and sees one external IP address making a single failed sign-in attempt against each of 3,000 different employee accounts, always using the same two common passwords. The attempts are spaced out to stay under the account lockout threshold. Which of the following attacks is the company facing?",
      "options": [
        "Brute-force attack",
        "Credential stuffing",
        "Password spraying",
        "Rainbow table attack"
      ],
      "answer": "C",
      "explanation": "Password spraying tries a small number of common passwords against a large number of accounts so that no single account accumulates enough failures to lock out. Brute force instead hammers one account with many guesses, and credential stuffing replays username and password pairs leaked from other breaches. Rainbow table attacks work offline against stolen password hashes, so they would not appear as failed sign-ins in the logs.",
      "topic": "Threats, Vulnerabilities, and Mitigations",
      "subtopic": "Given a scenario, analyze indicators of malicious activity",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 2.4 (password attacks: spraying, brute force)"
    },
    {
      "stem": "A penetration tester demonstrates that text entered in a web application's search box is executed as part of a database query, allowing the tester to read data from unrelated tables. Which of the following would best mitigate this vulnerability? Choose TWO.",
      "options": [
        "Use parameterized queries for every database call",
        "Increase the web session timeout to eight hours",
        "Validate and sanitize all input on the server side",
        "Enable HTTP Strict Transport Security on the site"
      ],
      "answer": "AC",
      "explanation": "The flaw is SQL injection, which occurs when untrusted input is concatenated into a query so that the database treats data as code. Parameterized queries keep user input separate from the query structure, and server-side validation rejects unexpected input before it reaches the database. Longer session timeouts and HSTS relate to session handling and transport security, and neither stops malformed input from changing the query.",
      "topic": "Threats, Vulnerabilities, and Mitigations",
      "subtopic": "Explain various types of vulnerabilities",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 2.3 (web-based vulnerabilities: SQL injection) and objective 4.1 (application security: input validation)"
    },
    {
      "stem": "An attacker steals a valid session cookie from an employee's browser using malware and replays it from another device to access a cloud application, bypassing the multifactor prompt the employee completed earlier. Which of the following would be the most effective way to reduce this risk?",
      "options": [
        "Require longer minimum password lengths for all accounts",
        "Issue short-lived session tokens bound to the client device",
        "Send six-digit rather than four-digit one-time codes",
        "Add a CAPTCHA to the application's sign-in page"
      ],
      "answer": "B",
      "explanation": "Once authentication has completed, the session token alone proves identity, so stronger sign-in controls such as longer passwords, longer codes or a CAPTCHA do nothing against a stolen cookie. Short-lived tokens limit how long a stolen cookie stays useful, and binding the token to the device, or requiring re-authentication for sensitive actions, stops a different device from reusing it. Cookie theft is a post-authentication attack, so the defense has to protect the session rather than the credentials.",
      "topic": "Threats, Vulnerabilities, and Mitigations",
      "subtopic": "Explain the purpose of mitigation techniques used to secure the enterprise",
      "difficulty": "hard",
      "source": "CompTIA Security+ SY0-701 objective 2.5 (mitigation techniques) and objective 2.4 (network attacks: credential replay)"
    },
    {
      "stem": "A company is defining recovery objectives for its order database. Management states that after an outage the company can tolerate losing no more than 15 minutes of transactions. Which of the following metrics is the company defining?",
      "options": [
        "Recovery time objective",
        "Mean time to repair",
        "Recovery point objective",
        "Mean time between failures"
      ],
      "answer": "C",
      "explanation": "The recovery point objective (RPO) is the maximum amount of data loss, measured in time, that the business will accept, and it drives how often data must be backed up or replicated. A 15-minute RPO means the data must be copied at least every 15 minutes. The recovery time objective is how long restoration may take, while mean time to repair and mean time between failures describe repair duration and component reliability.",
      "topic": "Security Architecture",
      "subtopic": "Explain the importance of resilience and recovery in security architecture",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 objective 3.4 (recovery objectives: RTO, RPO, MTTR, MTBF)"
    },
    {
      "stem": "A network administrator is deploying a public-facing web server. If the server is compromised, the company wants to prevent the attacker from directly reaching the workstations and file servers on the internal network. Which of the following is the best way to deploy the server?",
      "options": [
        "In a screened subnet isolated by firewall rules",
        "On the internal LAN with a host-based firewall",
        "On the same VLAN as the domain controllers",
        "Directly on the internet with no firewall in front"
      ],
      "answer": "A",
      "explanation": "A screened subnet, formerly called a DMZ, places internet-facing systems in a separate segment between the internet and the internal LAN, with firewall rules controlling traffic in both directions. If the web server is compromised, the attacker still cannot reach internal hosts except through tightly limited, filtered paths. Putting the server on the internal network or in a shared VLAN gives an attacker a foothold inside the trust boundary, and exposing it with no firewall removes filtering altogether.",
      "topic": "Security Architecture",
      "subtopic": "Given a scenario, apply security principles to secure enterprise infrastructure",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 3.2 (infrastructure considerations: device placement, security zones)"
    },
    {
      "stem": "A payment processor replaces each stored card number with a random substitute value and keeps the real card numbers in a separate, tightly controlled vault. Which of the following data protection methods is being used?",
      "options": [
        "Geographic restrictions",
        "Data masking",
        "Key escrow",
        "Tokenization"
      ],
      "answer": "D",
      "explanation": "Tokenization swaps a sensitive value for a random, meaningless token and stores the original in a separate secured vault, so a breach of the system holding the tokens exposes nothing useful. Unlike encryption, the token has no mathematical relationship to the original value and cannot be reversed without access to the vault. Masking only hides part of a value, for example showing the last four digits, and key escrow is the storage of encryption keys with a trusted party for recovery.",
      "topic": "Security Architecture",
      "subtopic": "Compare and contrast concepts and strategies to protect data",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 objective 3.3 (methods to secure data: tokenization, masking, encryption, obfuscation, segmentation)"
    },
    {
      "stem": "A company is adopting a Zero Trust architecture. In the control plane, which of the following components evaluates each access request against policy and decides whether to grant it?",
      "options": [
        "Policy administrator",
        "Policy engine",
        "Policy enforcement point",
        "Implicit trust zone"
      ],
      "answer": "B",
      "explanation": "In the Zero Trust control plane, the policy engine makes the decision to grant, deny or revoke access by evaluating the request against policy and context such as identity, device posture and threat intelligence. The policy administrator carries out that decision by instructing the data plane components, and the policy enforcement point is the data plane gateway that actually permits or blocks the connection. An implicit trust zone is the area in which subjects are trusted once the enforcement point has admitted them.",
      "topic": "Security Architecture",
      "subtopic": "Compare and contrast security implications of different architecture models",
      "difficulty": "hard",
      "source": "CompTIA Security+ SY0-701 objective 3.1 (zero trust: control plane and data plane components)"
    },
    {
      "stem": "A security administrator wants endpoints to run only applications that the company has reviewed and approved, and to block every other program by default. Which of the following techniques should the administrator implement?",
      "options": [
        "Application deny list",
        "Host-based intrusion detection",
        "Application allow list",
        "Full-disk encryption"
      ],
      "answer": "C",
      "explanation": "An application allow list permits only explicitly approved software to execute and denies everything else by default, which blocks unknown malware and unauthorized tools. A deny list works the opposite way and can only block programs that are already known to be bad. Host-based intrusion detection monitors and alerts but does not control which programs run, and full-disk encryption protects stored data rather than application execution.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, apply common security techniques to computing resources",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 objective 2.5 (application allow list) and objective 4.1 (hardening targets)"
    },
    {
      "stem": "A security analyst is deciding between credentialed and non-credentialed vulnerability scans of internal servers. Which of the following best describes an advantage of running a credentialed scan?",
      "options": [
        "It inspects installed software and settings, producing fewer false positives",
        "It shows how an unauthenticated outside attacker views the host",
        "It automatically exploits each flaw to prove the flaw is real",
        "It avoids sending any traffic to the systems being assessed"
      ],
      "answer": "A",
      "explanation": "A credentialed scan signs in to the target with an account, so it can read installed software versions, patch levels and configuration settings directly instead of inferring them from network responses. This produces more accurate results and fewer false positives. A non-credentialed scan is the one that approximates an outside attacker's view, and neither scan type exploits flaws automatically or avoids contacting the target.",
      "topic": "Security Operations",
      "subtopic": "Explain various activities associated with vulnerability management",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 4.3 (vulnerability identification methods and analysis, including false positives)"
    },
    {
      "stem": "A security operations center wants a single platform that collects logs from firewalls, servers and endpoints, correlates events across them, and raises alerts about suspicious patterns. Which of the following tools best meets this need?",
      "options": [
        "Network access control server",
        "Data loss prevention system",
        "Vulnerability scanner",
        "SIEM platform"
      ],
      "answer": "D",
      "explanation": "A security information and event management (SIEM) platform aggregates logs from many sources, normalizes them, and applies correlation rules so that related events spread across different systems can raise a single meaningful alert. This reduces the manual work of reviewing each device's logs separately. Network access control decides which devices may join the network, data loss prevention stops sensitive data from leaving, and a vulnerability scanner finds weaknesses rather than detecting active events.",
      "topic": "Security Operations",
      "subtopic": "Explain security alerting and monitoring concepts and tools",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 objective 4.4 (tools: SIEM; log aggregation, alerting and correlation)"
    },
    {
      "stem": "An analyst suspects a compromised workstation has been sending data to an unfamiliar external server. Full packet captures are not available, but the analyst needs to see which external IP addresses the workstation contacted, when, and how much data was transferred. Which of the following data sources would be the most helpful?",
      "options": [
        "Vulnerability scan reports for the subnet",
        "NetFlow records from the core switches",
        "Patch-compliance reports for the workstation",
        "Spam statistics from the email gateway"
      ],
      "answer": "B",
      "explanation": "NetFlow, or similar flow data, summarizes network conversations by source and destination address, ports, timing and byte counts without storing packet contents. That is exactly what the analyst needs to trace outbound connections and estimate how much data left the workstation. Vulnerability, patch and spam reports describe weaknesses or mail traffic and would not show where the workstation sent data.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, use data sources to support an investigation",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 4.4 (NetFlow) and objective 4.9 (data sources to support an investigation)"
    },
    {
      "stem": "A company wants to require multifactor authentication for its VPN. Which of the following combinations draw on two different authentication factors? Choose TWO.",
      "options": [
        "A password and a four-digit PIN",
        "A password and a code from an authenticator app",
        "A security question answer and a password",
        "A fingerprint scan and a smart card"
      ],
      "answer": "BD",
      "explanation": "Multifactor authentication requires factors from at least two different categories: something you know, something you have, something you are, or somewhere you are. A password (know) with an authenticator-app code (have), and a fingerprint (are) with a smart card (have), each combine two categories. A password with a PIN, or with a security question answer, uses two knowledge factors, which is still a single factor type used twice.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, implement and maintain identity and access management",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 4.6 (multifactor authentication: something you know, have, are, somewhere you are)"
    },
    {
      "stem": "An analyst must collect evidence from a running server that is suspected to be compromised, and the server cannot be left running for long. According to the order of volatility, which of the following should be collected first?",
      "options": [
        "Contents of system memory",
        "Forensic image of the hard drive",
        "Archived log files stored on disk",
        "Offsite backup media"
      ],
      "answer": "A",
      "explanation": "The order of volatility directs investigators to collect the most short-lived evidence first, because it disappears when power is lost or the system keeps running. Data in memory, such as running processes and network connections, is more volatile than data on disk, and disk data is more volatile than archived logs or offsite backups. Capturing memory first preserves artifacts that a later disk image or shutdown would destroy.",
      "topic": "Security Operations",
      "subtopic": "Explain appropriate incident response activities",
      "difficulty": "hard",
      "source": "CompTIA Security+ SY0-701 objective 4.8 (digital forensics: acquisition and preservation of evidence)"
    },
    {
      "stem": "A company's data center has an asset value of $200,000. Risk analysis shows that a flood would damage 25 percent of its value, and a flood is expected about once every five years. Which of the following is the annualized loss expectancy (ALE) for the flood risk?",
      "options": [
        "$250,000",
        "$50,000",
        "$40,000",
        "$10,000"
      ],
      "answer": "D",
      "explanation": "ALE is calculated as the single loss expectancy (SLE) multiplied by the annualized rate of occurrence (ARO). The SLE is the asset value multiplied by the exposure factor, so $200,000 x 0.25 = $50,000, and a flood once every five years gives an ARO of 0.2. Multiplying $50,000 by 0.2 yields an ALE of $10,000; $50,000 is the SLE alone, which ignores how often the event occurs.",
      "topic": "Security Program Management and Oversight",
      "subtopic": "Explain elements of the risk management process",
      "difficulty": "hard",
      "source": "CompTIA Security+ SY0-701 objective 5.2 (risk analysis: quantitative, SLE, ALE, ARO, exposure factor)"
    },
    {
      "stem": "Before signing a contract with a cloud vendor that will host its customer portal, a company wants a binding document that sets measurable service targets, such as 99.9 percent monthly uptime, along with remedies if the vendor misses them. Which of the following documents should the company require?",
      "options": [
        "Memorandum of understanding (MOU)",
        "Non-disclosure agreement (NDA)",
        "Service-level agreement (SLA)",
        "Statement of work (SOW)"
      ],
      "answer": "C",
      "explanation": "A service-level agreement defines the expected level of service in measurable terms, such as uptime or response time, and spells out remedies like credits or penalties if the vendor falls short. A statement of work describes the tasks and deliverables of a project, and an NDA protects confidential information. An MOU records mutual intent but is typically not binding and does not set performance remedies.",
      "topic": "Security Program Management and Oversight",
      "subtopic": "Explain the processes associated with third-party risk assessment and management",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 5.3 (agreement types: SLA, MOA, MOU, MSA, SOW, NDA, BPA)"
    },
    {
      "stem": "A retail company uses an external firm to run payroll for its employees. Under privacy regulations such as the GDPR, the payroll firm handles the employees' personal data only on the retail company's instructions. Which of the following best describes the role of the payroll firm?",
      "options": [
        "Data controller",
        "Data processor",
        "Data subject",
        "Data protection officer"
      ],
      "answer": "B",
      "explanation": "A data processor handles personal data on behalf of, and on the documented instructions of, the data controller. The retail company decides why and how its employees' data is used, which makes it the controller, while the employees are the data subjects. A data protection officer is a role inside an organization that oversees privacy compliance, not an outside firm that processes data for someone else.",
      "topic": "Security Program Management and Oversight",
      "subtopic": "Summarize elements of effective security compliance",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 5.4 (privacy: data subject, controller versus processor)"
    },
    {
      "stem": "A company's largest customers require independent assurance that its security controls are effective, and they will not accept the company's own statements as sufficient. Which of the following would best provide this assurance?",
      "options": [
        "An external audit by an independent assessor",
        "An internal audit by the security team",
        "A vulnerability scan by the IT department",
        "A self-assessment by the control owners"
      ],
      "answer": "A",
      "explanation": "External audits are performed by independent third parties, so their conclusions carry a credibility with customers, regulators and partners that internal reviews cannot. Internal audits and self-assessments are valuable for finding gaps early, but they are performed by people within the organization and do not provide independent assurance. A vulnerability scan is a technical test of systems for known weaknesses, not an evaluation of whether controls are designed and operating effectively.",
      "topic": "Security Program Management and Oversight",
      "subtopic": "Explain types and purposes of audits and assessments",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 objective 5.5 (audits and assessments: internal, external, independent third-party audit, attestation)"
    }
  ]
}
```
