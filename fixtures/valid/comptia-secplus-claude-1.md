```json
{
  "format": "domcq/1",
  "exam": "comptia-secplus",
  "set": "CompTIA Security+ practice – Mixed Domain Set 1",
  "questions": [
    {
      "stem": "A company posts signs along its data center fence warning that trespassers will be prosecuted. The signs are intended only to discourage people from attempting unauthorized entry. Which of the following control types do the signs represent?",
      "options": [
        "Corrective control",
        "Compensating control",
        "Deterrent control",
        "Detective control"
      ],
      "answer": "C",
      "explanation": "Deterrent controls discourage an attacker from acting by raising the perceived risk of being caught or punished; they do not physically stop or detect an intrusion. A warning sign threatening prosecution is a classic example. Detective controls identify events, corrective controls limit damage or restore operations, and compensating controls substitute for a primary control that cannot be used.",
      "topic": "General Security Concepts",
      "subtopic": "Compare and contrast various types of security controls",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 exam objectives, 1.1 – control types (preventive, deterrent, detective, corrective, compensating, directive)"
    },
    {
      "stem": "A security engineer is designing a system that stores user passwords as hashes. The engineer wants two users who choose the same password to end up with different stored hash values, and also wants precomputed rainbow tables to be ineffective. Which of the following should the engineer implement?",
      "options": [
        "Adding a unique random salt to each password before hashing it",
        "Adding the same secret value to every password before hashing it",
        "Hashing each password repeatedly with a fixed number of iterations",
        "Encrypting each stored hash with a single symmetric key"
      ],
      "answer": "A",
      "explanation": "A salt is a unique random value combined with each password before it is hashed, so identical passwords produce different hashes and a single precomputed rainbow table cannot be used against every account. Adding the same secret to every password or repeating the hash a fixed number of times still gives identical passwords identical results, and encrypting the stored hashes does not change how they are generated.",
      "topic": "General Security Concepts",
      "subtopic": "Explain the importance of using appropriate cryptographic solutions",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 exam objectives, 1.4 – salting, hashing, key stretching"
    },
    {
      "stem": "A teenager with very little technical knowledge downloads a free, publicly available tool and uses it to flood a small company's website with traffic for personal amusement. Which of the following best describes this threat actor?",
      "options": [
        "Nation-state actor",
        "Organized crime group",
        "Malicious insider",
        "Unskilled attacker"
      ],
      "answer": "D",
      "explanation": "An unskilled attacker (often called a script kiddie) relies on existing tools or scripts instead of building their own and is typically motivated by curiosity, notoriety or amusement. Nation-state actors are well funded and pursue strategic goals, organized crime is structured and financially motivated, and insiders already hold legitimate access to the organization.",
      "topic": "Threats, Vulnerabilities, and Mitigations",
      "subtopic": "Compare and contrast common threat actors and motivations",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 exam objectives, 2.1 – threat actors (unskilled attacker) and motivations"
    },
    {
      "stem": "A security analyst reviewing authentication logs sees exactly one failed login for each of 800 different user accounts over several hours, all using the same password and all from a single external IP address. No individual account has been locked out. Which of the following attacks is the most likely cause?",
      "options": [
        "Brute-force attack",
        "Password spraying",
        "Replay attack",
        "Pass-the-hash attack"
      ],
      "answer": "B",
      "explanation": "Password spraying tries one or a few common passwords against many accounts, which keeps the number of failures per account below typical lockout thresholds. A traditional brute-force attack makes many guesses against a single account and would produce lockouts, while replay and pass-the-hash attacks reuse captured authentication data instead of guessing passwords.",
      "topic": "Threats, Vulnerabilities, and Mitigations",
      "subtopic": "Given a scenario, analyze indicators of malicious activity",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 exam objectives, 2.4 – indicators of malicious activity (password attacks: spraying, brute force)"
    },
    {
      "stem": "A user who is logged in to an online banking site clicks a link in an email. The link silently causes the user's browser to submit a funds transfer request to the bank, which processes it because the user's session cookie is sent automatically with the request. No script is injected into the bank's pages. Which of the following would best mitigate this attack?",
      "options": [
        "Encrypting the session cookie with a stronger cipher suite",
        "Blocking SQL keywords in all submitted form fields",
        "Requiring an unpredictable token with each state-changing request",
        "Encoding user-supplied output so scripts cannot execute"
      ],
      "answer": "C",
      "explanation": "This is cross-site request forgery: the attacker abuses the browser's automatic inclusion of the session cookie so the server accepts a request the user never intended. Because the server cannot tell a forged request from a genuine one, it needs a value the attacker cannot predict, which is an anti-forgery token validated on every state-changing request. Cookie encryption, SQL keyword filtering and output encoding address eavesdropping, SQL injection and cross-site scripting, none of which is the cause here.",
      "topic": "Threats, Vulnerabilities, and Mitigations",
      "subtopic": "Given a scenario, analyze indicators of malicious activity",
      "difficulty": "hard",
      "source": "CompTIA Security+ SY0-701 exam objectives, 2.4 – application attacks (forgery)"
    },
    {
      "stem": "A security administrator is hardening a newly deployed Linux web server before it goes into production. Which of the following actions would most reduce the server's attack surface? Choose TWO.",
      "options": [
        "Disable network services that the web application does not need",
        "Install additional development tools to simplify troubleshooting",
        "Remove software packages that are not required for the server's role",
        "Enable remote desktop access for all administrators"
      ],
      "answer": "AC",
      "explanation": "Every running service and installed package is a potential entry point, so disabling or removing anything the server's role does not require reduces the number of vulnerabilities an attacker can reach. Extra development tools and broader remote access add software and exposed interfaces, which enlarges the attack surface instead of shrinking it.",
      "topic": "Threats, Vulnerabilities, and Mitigations",
      "subtopic": "Explain the purpose of mitigation techniques used to secure the enterprise",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 exam objectives, 2.5 – hardening techniques (disabling ports and protocols, removing unnecessary software)"
    },
    {
      "stem": "A company migrates its servers to virtual machines hosted by an infrastructure-as-a-service (IaaS) provider. Under the shared responsibility model, which of the following remains the company's responsibility?",
      "options": [
        "Physical security of the provider's data center",
        "Patching the operating systems on the virtual machines",
        "Maintaining the hypervisor that hosts the virtual machines",
        "Replacing failed hardware in the provider's host servers"
      ],
      "answer": "B",
      "explanation": "In IaaS the provider secures the physical facility, the hardware and the virtualization layer, while the customer is responsible for everything it deploys on top, including guest operating systems and their patches, applications, data and access configuration. The other three tasks all belong to the provider.",
      "topic": "Security Architecture",
      "subtopic": "Compare and contrast security implications of different architecture models",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 exam objectives, 3.1 – cloud service models and the responsibility matrix"
    },
    {
      "stem": "A security team wants to deploy an intrusion detection sensor that analyzes a copy of production network traffic. The team requires that a failure of the sensor must never interrupt traffic flowing between users and servers. Which of the following deployments best meets this requirement?",
      "options": [
        "A passive sensor connected to a network TAP",
        "An inline sensor configured to fail closed",
        "A reverse proxy placed in front of the servers",
        "A load balancer placed between users and servers"
      ],
      "answer": "A",
      "explanation": "A TAP (or SPAN port) delivers a copy of the traffic to a passive sensor, so the sensor is not in the traffic path and its failure cannot disrupt production traffic, although it can only detect, not block. Inline devices, including sensors that fail closed, reverse proxies and load balancers, sit in the path and become points of failure for the traffic they handle.",
      "topic": "Security Architecture",
      "subtopic": "Given a scenario, apply security principles to secure enterprise infrastructure",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 exam objectives, 3.2 – device attributes (active vs. passive, inline vs. tap/monitor) and failure modes"
    },
    {
      "stem": "A payment processor wants to keep real credit card numbers out of its application databases. The application will store a random substitute value, while the real card numbers are kept in a separate, tightly controlled vault. Which of the following data protection methods is being used?",
      "options": [
        "Hashing",
        "Masking",
        "Obfuscation",
        "Tokenization"
      ],
      "answer": "D",
      "explanation": "Tokenization replaces sensitive data with a non-sensitive token that has no mathematical relationship to the original, while the mapping is stored in a secured vault that only authorized systems can query. Masking hides part of a value, such as showing only the last four digits, without a vault, and hashing is a one-way function that is not meant to be reversed.",
      "topic": "Security Architecture",
      "subtopic": "Compare and contrast concepts and strategies to protect data",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 exam objectives, 3.3 – methods to secure data (tokenization, masking, hashing)"
    },
    {
      "stem": "A company runs a full backup of a file server every Sunday at 11:00 p.m. and an incremental backup every other night at 11:00 p.m. The server's storage fails on Thursday at 9:00 a.m. Which of the following is the minimum set of backups needed to restore the server to its state at the Wednesday night backup?",
      "options": [
        "The Sunday full backup and only the Wednesday incremental backup",
        "Only the Wednesday incremental backup, as the most recent one",
        "The Sunday full backup, then each incremental from Monday to Wednesday",
        "The Monday to Wednesday incrementals without the Sunday full backup"
      ],
      "answer": "C",
      "explanation": "Each incremental backup contains only the data that changed since the previous backup of any type, so recovery requires the last full backup plus every incremental taken since then, restored in sequence. Skipping the full backup or any link in the chain leaves data from that interval unrecoverable. A differential scheme would behave differently, needing only the full backup and the latest differential.",
      "topic": "Security Architecture",
      "subtopic": "Explain the importance of resilience and recovery in security architecture",
      "difficulty": "hard",
      "source": "CompTIA Security+ SY0-701 exam objectives, 3.4 – backups (frequency and recovery); backup types in your study guide's resilience chapter"
    },
    {
      "stem": "A company requires employees to enter a password and then scan their fingerprint to log in to a laptop. Which of the following authentication factors does the fingerprint scan represent?",
      "options": [
        "Something you know",
        "Something you are",
        "Something you have",
        "Somewhere you are"
      ],
      "answer": "B",
      "explanation": "Biometrics such as fingerprints, iris patterns and facial geometry are inherent characteristics, which makes them the 'something you are' factor. A password is 'something you know', a token or smart card is 'something you have', and location-based checks are 'somewhere you are'. Combining a password and a fingerprint is multifactor because the two come from different categories.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, implement and maintain identity and access management",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 exam objectives, 4.6 – multifactor authentication and biometrics"
    },
    {
      "stem": "A security team has 300 open findings from a vulnerability scan and can remediate only a small number of them this week. Which of the following is the best way to prioritize the remediation work?",
      "options": [
        "Following the order in which the scanner listed the findings",
        "Starting with the findings on the oldest servers in the environment",
        "Starting with the findings that have the shortest vendor advisories",
        "Weighing severity, exploitability and the criticality of each affected asset"
      ],
      "answer": "D",
      "explanation": "Remediation should be prioritized by risk: combine the severity score (such as CVSS) with whether the flaw is actually exploitable, how exposed the system is, and how important the affected asset is to the business. Scanner ordering, server age and advisory length say nothing about the likelihood or impact of exploitation.",
      "topic": "Security Operations",
      "subtopic": "Explain various activities associated with vulnerability management",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 exam objectives, 4.3 – vulnerability analysis and prioritization (CVSS, exposure, environmental variables, risk tolerance)"
    },
    {
      "stem": "When a SIEM alert indicates that an employee's credentials were stolen, a security operations center wants the user's account to be disabled and the user's endpoint to be isolated automatically, without waiting for an analyst. Which of the following would best accomplish this?",
      "options": [
        "A SOAR playbook triggered by the SIEM alert",
        "A vulnerability scanner scheduled to run hourly",
        "A honeypot deployed on the user's network segment",
        "A DLP policy applied to outbound email messages"
      ],
      "answer": "A",
      "explanation": "Security orchestration, automation and response (SOAR) platforms take in alerts and run predefined playbooks that call other tools such as the directory service, the EDR agent and the firewall, so actions like disabling an account or isolating a host happen in seconds. Scanners find weaknesses, honeypots attract attackers, and DLP controls data leaving the organization; none of them orchestrates a response to a SIEM alert.",
      "topic": "Security Operations",
      "subtopic": "Explain the importance of automation and orchestration related to secure operations",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 exam objectives, 4.7 – automation and orchestration (use cases and benefits)"
    },
    {
      "stem": "A security analyst confirms that ransomware is actively encrypting files on a user's workstation that is connected to the corporate network. Which of the following actions should the analyst take next?",
      "options": [
        "Restore the user's files from the most recent backup",
        "Hold a lessons-learned meeting with the IT department",
        "Isolate the workstation from the network",
        "Reimage the workstation to remove the malware"
      ],
      "answer": "C",
      "explanation": "After an incident is detected and analyzed, the next step in the incident response process is containment: limit the spread and the damage, for example by disconnecting the host from the network, before eradicating the malware and recovering data. Restoring or reimaging first could allow reinfection or destroy evidence, and the lessons-learned review comes last.",
      "topic": "Security Operations",
      "subtopic": "Explain appropriate incident response activities",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 exam objectives, 4.8 – incident response process (preparation, detection, analysis, containment, eradication, recovery, lessons learned)"
    },
    {
      "stem": "A firewall log shows that a workstation made an outbound connection to a suspicious external IP address. The analyst needs to determine which specific process on the workstation initiated the connection. Which of the following data sources would be the most helpful?",
      "options": [
        "Telemetry from the endpoint detection and response agent",
        "NetFlow records exported by the core switch",
        "Query logs from the internal DNS server",
        "Access logs from the web proxy"
      ],
      "answer": "A",
      "explanation": "Only data collected on the host itself can tie a network connection to a specific process, which is what EDR telemetry and operating system endpoint logs record (process name, parent process, command line and network connections). Network-side sources such as NetFlow, DNS logs and proxy logs show where traffic went and which address or user was involved, but they have no visibility into the process that generated it.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, use data sources to support an investigation",
      "difficulty": "hard",
      "source": "CompTIA Security+ SY0-701 exam objectives, 4.9 – data sources (log data: endpoint logs, OS-specific security logs, network logs)"
    },
    {
      "stem": "An administrator wants to reduce the likelihood that attackers can send email that appears to come from the company's domain and have it accepted by recipients' mail servers. Which of the following should the administrator implement? Choose TWO.",
      "options": [
        "A second MX record with a lower priority",
        "An SPF record listing the authorized sending servers",
        "Open recursion on the company's public DNS servers",
        "DKIM signing of all outbound messages"
      ],
      "answer": "BD",
      "explanation": "SPF publishes which servers may send mail for the domain, and DKIM adds a cryptographic signature that receivers verify against a public key in DNS; together, usually enforced with a DMARC policy, they let recipients reject forged messages. MX records only direct inbound mail, and open recursion on a public DNS server is a vulnerability rather than an anti-spoofing control.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, modify enterprise capabilities to enhance security",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 exam objectives, 4.5 – email security (SPF, DKIM, DMARC)"
    },
    {
      "stem": "A company purchases a cyber insurance policy so that an insurer will cover a portion of the financial losses from a future data breach. Which of the following risk management strategies does this represent?",
      "options": [
        "Avoid",
        "Transfer",
        "Accept",
        "Mitigate"
      ],
      "answer": "B",
      "explanation": "Risk transfer shifts some or all of the financial impact of a risk to a third party, most commonly through insurance or contractual arrangements. The risk itself still exists, which separates transfer from avoiding the activity, accepting the residual risk, or mitigating it with controls that reduce likelihood or impact.",
      "topic": "Security Program Management and Oversight",
      "subtopic": "Explain elements of the risk management process",
      "difficulty": "easy",
      "source": "CompTIA Security+ SY0-701 exam objectives, 5.2 – risk management strategies (transfer, accept, avoid, mitigate)"
    },
    {
      "stem": "A company is evaluating a SaaS vendor that will process the company's customer data. The company wants independent assurance, rather than the vendor's own claims, that the vendor's security controls operate effectively over time. Which of the following should the company request?",
      "options": [
        "A security questionnaire completed by the vendor's sales team",
        "A mutual non-disclosure agreement signed by both parties",
        "A memorandum of understanding outlining the intended partnership",
        "A SOC 2 Type II report issued by an independent auditor"
      ],
      "answer": "D",
      "explanation": "A SOC 2 Type II report is an attestation by an independent auditor that evaluates the design and operating effectiveness of a service organization's controls over a period of time, which makes it strong evidence for vendor due diligence. A self-completed questionnaire is unverified, and NDAs and MOUs set expectations about confidentiality or intent without testing any security controls.",
      "topic": "Security Program Management and Oversight",
      "subtopic": "Explain the processes associated with third-party risk assessment and management",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 exam objectives, 5.3 – vendor assessment (independent assessments) and agreement types"
    },
    {
      "stem": "A server is valued at $200,000. A flood would destroy 40 percent of its value, and floods are expected to occur once every five years. A mitigation that costs $5,000 per year would reduce the expected frequency of that flood loss to once every twenty years. Which of the following is the annual net benefit of the mitigation (the reduction in annualized loss expectancy minus its annual cost)?",
      "options": [
        "$4,000",
        "$7,000",
        "$11,000",
        "$12,000"
      ],
      "answer": "B",
      "explanation": "The single loss expectancy is $200,000 × 0.40 = $80,000. The original annualized loss expectancy is $80,000 × 0.2 (once every five years) = $16,000, and with the mitigation it is $80,000 × 0.05 (once every twenty years) = $4,000. The mitigation therefore cuts expected annual loss by $12,000, and after subtracting its $5,000 annual cost the net benefit is $7,000.",
      "topic": "Security Program Management and Oversight",
      "subtopic": "Explain elements of the risk management process",
      "difficulty": "hard",
      "source": "CompTIA Security+ SY0-701 exam objectives, 5.2 – quantitative risk analysis (SLE, ALE, ARO, exposure factor)"
    },
    {
      "stem": "A cloud analytics company processes customer personal data on behalf of a retail chain, strictly following the retail chain's instructions about why and how the data is used. Under common privacy regulations, which of the following roles does the analytics company hold?",
      "options": [
        "Data controller",
        "Data owner",
        "Data processor",
        "Data subject"
      ],
      "answer": "C",
      "explanation": "A data processor handles personal data on behalf of another organization and only under that organization's instructions, whereas the data controller decides the purposes and means of the processing. The data owner is the person accountable for a data set inside an organization, and the data subject is the individual the data is about.",
      "topic": "Security Program Management and Oversight",
      "subtopic": "Summarize elements of effective security compliance",
      "difficulty": "medium",
      "source": "CompTIA Security+ SY0-701 exam objectives, 5.4 – privacy (data subject, controller vs. processor, data ownership)"
    }
  ]
}
```
