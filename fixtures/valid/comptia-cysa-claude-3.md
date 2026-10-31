```json
{
  "format": "domcq/1",
  "exam": "comptia-cysa",
  "set": "CompTIA CySA+ (CS0-004) practice – Mixed domains set 3",
  "questions": [
    {
      "stem": "A SOC analyst reviews NetFlow data for a workstation whose user left the office at 18:00. Between 18:00 and 06:00, the workstation opened an HTTPS session to the same external IP address every 300 seconds, each session sending about 400 bytes and receiving about 1 KB. The destination domain was registered four days ago. Which of the following is the most likely explanation?",
      "options": [
        "A misconfigured time client repeatedly resynchronizing its clock",
        "An ARP spoofing attack redirecting the workstation's traffic",
        "Malware beaconing to a command-and-control server",
        "A volumetric denial-of-service attack originating from the host"
      ],
      "answer": "C",
      "explanation": "Beaconing is characterized by regular, periodic connections with small, consistent payloads to the same destination, often while the user is inactive. A newly registered domain is a common indicator of attacker-controlled infrastructure. The small byte counts rule out a denial-of-service attack, and the traffic pattern is host-initiated outbound HTTPS rather than local address manipulation.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, analyze indicators of potential malicious activity",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Security Operations: analyze indicators of potential malicious activity (network-related indicators, beaconing)"
    },
    {
      "stem": "An analyst receives a suspicious executable that was attached to a phishing email. Its hash returns no results on reputation services. The analyst needs to observe the file's runtime behavior, including registry modifications, spawned processes and network connections, without putting production systems at risk. Which of the following should the analyst do?",
      "options": [
        "Execute the file in an isolated sandbox and review the behavioral report",
        "Run the strings utility against the file and review its printable text",
        "Copy the file to a shared file server so other analysts can examine it",
        "Execute the file on the analyst's workstation with antivirus disabled"
      ],
      "answer": "A",
      "explanation": "A sandbox is an isolated, instrumented environment that runs a sample and records its dynamic behavior, such as file and registry changes, child processes and network activity. Static techniques like strings reveal embedded text but do not show what the file actually does when executed. Running unknown malware on production or analyst systems risks infection and spread.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, use tools to determine malicious activity",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Security Operations: use tools to determine malicious activity (sandboxing, dynamic analysis)"
    },
    {
      "stem": "An information sharing and analysis center (ISAC) wants its members' threat intelligence platforms to automatically retrieve structured indicators of compromise from the ISAC's server over HTTPS. Which of the following should be used as the transport mechanism for this exchange?",
      "options": [
        "STIX",
        "YARA",
        "OpenIOC",
        "TAXII",
        "CVSS"
      ],
      "answer": "D",
      "explanation": "TAXII (Trusted Automated eXchange of Intelligence Information) is an application-layer protocol that runs over HTTPS and defines how threat intelligence is shared between servers and clients. STIX is the language used to structure the intelligence itself, so STIX content is commonly carried by TAXII. YARA is a pattern-matching rule language and CVSS is a vulnerability severity scoring system.",
      "topic": "Security Operations",
      "subtopic": "Explain threat intelligence and threat-hunting concepts",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Security Operations: threat intelligence and threat-hunting concepts (information sharing, STIX/TAXII)"
    },
    {
      "stem": "While building an incident timeline, an analyst finds that the same user login appears on the domain controller at 09:14:05, on the VPN concentrator at 09:21:40 and on the firewall at 09:08:12. Which of the following should be implemented to make future event correlation reliable?",
      "options": [
        "Longer log retention periods on each device",
        "A common time source using NTP on all devices",
        "Syslog forwarding over TLS from each device",
        "Increased logging verbosity on the VPN concentrator"
      ],
      "answer": "B",
      "explanation": "Accurate correlation across log sources depends on every device recording events against the same clock. Synchronizing all systems to a common, authoritative time source with NTP removes the drift that makes the same event appear minutes apart. Retention, encrypted transport and verbosity improve other aspects of logging but do not fix inconsistent timestamps.",
      "topic": "Security Operations",
      "subtopic": "Explain concepts related to system and network architecture in security operations",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Security Operations: system and network architecture concepts (log ingestion, time synchronization)"
    },
    {
      "stem": "During a threat hunt on a Windows 10 workstation, an analyst reviews running processes, their file locations and their parent processes. Which of the following processes requires further investigation?",
      "options": [
        "svchost.exe running from System32 with parent process services.exe",
        "lsass.exe running from System32 with parent process wininit.exe",
        "explorer.exe running from the Windows folder with parent userinit.exe",
        "taskhostw.exe running from System32 with parent process svchost.exe",
        "svchost.exe running from System32 with parent process explorer.exe"
      ],
      "answer": "E",
      "explanation": "Legitimate svchost.exe instances are started by the Service Control Manager, services.exe, so an svchost.exe launched by explorer.exe is anomalous even though its file path looks correct. Attackers often masquerade as well-known system processes, so analysts must check parent-child relationships, not just names and paths. The other relationships shown are normal for Windows.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, analyze indicators of potential malicious activity",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Security Operations: analyze indicators of potential malicious activity (host-based indicators, unauthorized processes)"
    },
    {
      "stem": "A SOC's analysts spend most of their time on user-reported phishing emails. For each report, an analyst manually extracts URLs and attachment hashes, checks them against threat intelligence feeds and opens a ticket. Which of the following would most improve the efficiency of this process?",
      "options": [
        "Hiring additional tier 1 analysts for the phishing queue",
        "Increasing the SIEM's log retention period to one year",
        "A SOAR playbook that automates enrichment and ticket creation",
        "Moving phishing reports to a separate shared mailbox"
      ],
      "answer": "C",
      "explanation": "Security orchestration, automation and response (SOAR) playbooks are designed to automate repetitive, well-defined tasks such as extracting indicators, querying intelligence sources and creating tickets. Automating these steps reduces mean time to respond and frees analysts for work that needs human judgment. Adding staff scales cost rather than improving the process itself.",
      "topic": "Security Operations",
      "subtopic": "Explain the importance of efficiency and process improvement in security operations",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Security Operations: efficiency and process improvement (automation, orchestration, SOAR)"
    },
    {
      "stem": "A SOC plans to send alerts, including raw email bodies and web server logs, to a third-party cloud-hosted large language model (LLM) that will summarize them for analysts. Which of the following risks should the SOC address before deployment? (Choose TWO.)",
      "options": [
        "Attacker-crafted text inside the logs could manipulate the model's output",
        "The model could automatically delete the SIEM's correlation rules",
        "The model could require every endpoint to run a local inference agent",
        "Sensitive incident data could be exposed to the external model provider",
        "The model could saturate bandwidth on the core network switches"
      ],
      "answer": "AD",
      "explanation": "When an LLM processes attacker-controlled content such as email bodies or logged request strings, embedded instructions can alter its output, which is known as prompt injection. Sending raw incident data to an external provider also raises data privacy and leakage concerns, so data handling terms and minimization must be addressed. A summarization service does not by itself change SIEM rules, need endpoint agents or generate meaningful network load.",
      "topic": "Security Operations",
      "subtopic": "Summarize concepts related to the use of AI in security operations",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Security Operations: concepts related to the use of AI in security operations (AI risks, prompt injection, data privacy)"
    },
    {
      "stem": "A vulnerability scan of Windows file servers reports only open ports and a few TLS configuration findings. Patch management records show that several of the servers are missing months of operating system updates, but the scanner did not report them. Which of the following should the analyst take into consideration for future scans?",
      "options": [
        "Switching the port discovery method from TCP to UDP",
        "Configuring credentialed scans with a suitable service account",
        "Reducing the scan's concurrency to avoid network timeouts",
        "Scheduling the scans to run outside of business hours"
      ],
      "answer": "B",
      "explanation": "A non-credentialed scan sees only what a host exposes over the network, so it misses missing patches, local software versions and configuration settings. A credentialed scan logs in to the host and can enumerate installed updates and software accurately. Changing timing or protocols does not give the scanner visibility into the operating system's patch level.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, implement the appropriate vulnerability scanning method",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Vulnerability Management: implement the appropriate scanning method (credentialed vs. non-credentialed scans)"
    },
    {
      "stem": "A manufacturer wants to identify vulnerabilities on the PLCs and HMIs in its plant. Previous active scans caused several PLCs to fault and halted a production line. Which of the following scanning methods should be implemented?",
      "options": [
        "Authenticated active scans scheduled during the night shift",
        "Full-range TCP SYN scans throttled to a lower packet rate",
        "Dynamic web application scanning of each HMI interface",
        "Passive scanning that analyzes mirrored network traffic"
      ],
      "answer": "D",
      "explanation": "Industrial control system devices are often fragile and can fail when probed by active scanners, even at low rates or off-hours. Passive scanning inspects copies of network traffic, for example from a SPAN port or tap, to identify devices, firmware versions and protocols without sending packets to the devices. This makes it the safer choice for operational technology environments.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, implement the appropriate vulnerability scanning method",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Vulnerability Management: implement the appropriate scanning method (active vs. passive scanning, OT/ICS considerations)"
    },
    {
      "stem": "A vulnerability assessment report lists a finding with the vector CVSS:3.1/AV:A/AC:H/PR:L/UI:R/S:C/C:L/I:L/A:N. Which of the following statements about this vulnerability is accurate?",
      "options": [
        "Exploitation requires network adjacency to the target and an action by a user",
        "An unauthenticated attacker can exploit it remotely across the internet",
        "A successful exploit affects only the vulnerable component's own resources",
        "A successful exploit causes a total loss of the target's availability",
        "The attack can be reliably repeated with little preparation by the attacker"
      ],
      "answer": "A",
      "explanation": "AV:A means the attacker must be on an adjacent network, such as the same broadcast domain, and UI:R means a user must take some action for the exploit to succeed. PR:L shows that low privileges are required, S:C shows that the impact can extend beyond the vulnerable component, A:N means no availability impact, and AC:H means conditions outside the attacker's control make exploitation harder. Reading each base metric lets an analyst judge exploitability beyond the single numeric score.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze output from vulnerability assessment tools",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Vulnerability Management: analyze data to prioritize vulnerabilities; FIRST CVSS v3.1 Specification, base metrics"
    },
    {
      "stem": "A vulnerability manager must decide which of the following findings to remediate first. Remediation effort is the same for each. Which of the following should be prioritized?",
      "options": [
        "CVSS 9.8 remote code execution on a lab server with no network connectivity, EPSS 0.02",
        "CVSS 8.1 privilege escalation on an internal build server, no known exploit, EPSS 0.01",
        "CVSS 7.5 authentication bypass on an internet-facing VPN appliance, listed in CISA KEV",
        "CVSS 6.5 information disclosure on an internal wiki, proof of concept public, EPSS 0.05"
      ],
      "answer": "C",
      "explanation": "Risk-based prioritization weighs exploitability and exposure, not only the CVSS base score. A vulnerability listed in the CISA Known Exploited Vulnerabilities catalog is confirmed to be exploited in the wild, and an internet-facing VPN appliance is directly reachable by attackers and often grants internal access. The higher-scored finding on an isolated lab server has little realistic attack path, and the low EPSS values indicate a low likelihood of exploitation for the others.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze data to prioritize and mitigate vulnerabilities",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Vulnerability Management: analyze data to prioritize vulnerabilities (exploitability, asset exposure, context awareness)"
    },
    {
      "stem": "A hospital's medical imaging system runs an unsupported operating system that cannot be patched. The security team places it on an isolated VLAN with ACLs that allow only the image archive server to communicate with it. Which of the following types of control has the team implemented?",
      "options": [
        "Corrective",
        "Deterrent",
        "Directive",
        "Detective",
        "Compensating"
      ],
      "answer": "E",
      "explanation": "A compensating control is an alternative safeguard used when the primary control, here patching, cannot be applied. Segmenting the system and tightly restricting what can reach it reduces the likelihood that the unpatched vulnerabilities are exploited. Corrective controls fix issues after they occur, and detective controls identify events rather than reducing exposure.",
      "topic": "Vulnerability Management",
      "subtopic": "Explain concepts related to control types, risks, and vulnerability management",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Vulnerability Management: control types, risks, and vulnerability management (compensating controls)"
    },
    {
      "stem": "Which of the following frameworks provides a knowledge base of adversary tactics and techniques, each with its own identifier and drawn from real-world observations, to which analysts can map their detections?",
      "options": [
        "Lockheed Martin Cyber Kill Chain",
        "MITRE ATT&CK",
        "Diamond Model of Intrusion Analysis",
        "OWASP Web Security Testing Guide"
      ],
      "answer": "B",
      "explanation": "MITRE ATT&CK is a curated, continuously updated knowledge base of adversary tactics (the goals) and techniques (how the goals are achieved), each with an ID such as T1059, based on observed intrusions. Analysts use it to map detections, find coverage gaps and describe adversary behavior consistently. The Cyber Kill Chain and Diamond Model are higher-level analytical models and do not catalog individual techniques.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize concepts related to attack methodology frameworks",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Incident Response and Management: attack methodology frameworks (MITRE ATT&CK)"
    },
    {
      "stem": "Using the Diamond Model of Intrusion Analysis, an analyst records the domain names and IP addresses that an attacker used to deliver malware and to receive stolen data. To which of the following core features should the analyst assign this information?",
      "options": [
        "Infrastructure",
        "Capability",
        "Adversary",
        "Victim"
      ],
      "answer": "A",
      "explanation": "The Diamond Model describes every intrusion event with four core features: adversary, capability, infrastructure and victim. Infrastructure is the physical or logical communication structure the adversary uses to deliver capabilities and maintain control, such as IP addresses, domains and email accounts. Capability would describe the malware or tools themselves, not the systems used to deliver them.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize concepts related to attack methodology frameworks",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Incident Response and Management: attack methodology frameworks (Diamond Model of Intrusion Analysis)"
    },
    {
      "stem": "A ransomware incident has been contained by isolating the affected hosts. The team has since removed the malware, closed the exposed RDP service that was exploited and reset all compromised credentials. Which of the following is the next step?",
      "options": [
        "Acquire forensic images of the affected hosts",
        "Conduct a lessons-learned meeting with stakeholders",
        "Identify the full scope of affected systems",
        "Restore systems from known-good backups and monitor them",
        "Update the incident response plan with new procedures"
      ],
      "answer": "D",
      "explanation": "The scenario describes completed containment and eradication, so the next activity is recovery: returning systems to normal operation from trusted backups and monitoring them closely for signs of reinfection. Scoping and evidence acquisition belong to earlier phases. Lessons-learned meetings and plan updates are post-incident activities that follow recovery.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize the incident response process",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Incident Response and Management: incident response process; NIST SP 800-61 Rev. 2, containment, eradication and recovery"
    },
    {
      "stem": "An EDR alert indicates that a server is infected with fileless malware that resides only in memory. Leadership has approved isolating the server from the network, and evidence may be needed later. Which of the following should the analyst do first?",
      "options": [
        "Power off the server to stop the malware from spreading",
        "Reboot the server into safe mode and run an antivirus scan",
        "Capture a memory image of the server before it is shut down",
        "Reimage the server from the approved golden image"
      ],
      "answer": "C",
      "explanation": "Fileless malware leaves little or no trace on disk, so system memory holds the key evidence, such as injected code, process details and network connections. Memory is volatile and is lost when the system is powered off, rebooted or reimaged, so it must be captured first. This follows the order of volatility, which collects the most short-lived data before more persistent sources.",
      "topic": "Incident Response and Management",
      "subtopic": "Given a scenario, implement incident response techniques",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Incident Response and Management: implement incident response techniques (evidence acquisition); RFC 3227 order of volatility"
    },
    {
      "stem": "A server's hard disk will be acquired as evidence in a case that may go to court. Which of the following actions will best help demonstrate that the evidence was not altered? (Choose TWO.)",
      "options": [
        "Copy only the files modified during the incident window",
        "Connect the original disk through a hardware write blocker",
        "Run a full antivirus scan on the original disk before imaging",
        "Mount the original disk read-write to confirm it is readable",
        "Hash the original disk and the image and record both values"
      ],
      "answer": "BE",
      "explanation": "A write blocker allows data to be read from the original disk while preventing any writes, so acquisition does not change the evidence. Hashing the original and the image and recording matching values proves the copy is identical and lets anyone verify later that it has not changed. Scanning, mounting read-write or copying selected files can modify metadata or omit data, which undermines evidence integrity.",
      "topic": "Incident Response and Management",
      "subtopic": "Given a scenario, implement incident response techniques",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Incident Response and Management: implement incident response techniques (forensic acquisition, integrity validation, chain of custody)"
    },
    {
      "stem": "The CISO asks for a monthly vulnerability management report for the executive committee that shows whether the program is meeting its remediation commitments. Which of the following metrics is most appropriate to include?",
      "options": [
        "Percentage of critical findings remediated within the SLA timeframe",
        "Number of vulnerability scans executed during the reporting month",
        "Count of scanner plugins updated during the reporting month",
        "Complete list of CVE identifiers detected on every host"
      ],
      "answer": "A",
      "explanation": "Executives need concise metrics tied to business commitments, and SLA compliance for remediation directly shows whether vulnerabilities are being fixed within agreed timeframes. Activity counts such as scans run or plugins updated measure effort rather than outcomes. A full CVE list is technical detail suited to remediation teams, not an executive audience.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of vulnerability management reporting and communication",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Reporting and Communication: vulnerability management reporting (metrics and KPIs, SLAs, stakeholder identification)"
    },
    {
      "stem": "A critical patch for an order-processing database requires a six-hour outage. The business unit refuses to schedule it before the end of the quarter because orders cannot be taken while the database is offline. Which of the following inhibitors to remediation does this describe?",
      "options": [
        "Legacy system",
        "Proprietary system",
        "Memorandum of understanding",
        "Business process interruption",
        "Degrading functionality"
      ],
      "answer": "D",
      "explanation": "Business process interruption is an inhibitor to remediation in which applying a fix would stop or disrupt a critical business operation, so the business delays it. Here the outage would halt order processing, which is why the unit refuses. Degrading functionality applies when a fix itself breaks or reduces features, and legacy or proprietary systems relate to support and vendor constraints.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of vulnerability management reporting and communication",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Reporting and Communication: vulnerability management reporting and communication (inhibitors to remediation)"
    },
    {
      "stem": "A SOC manager wants to report a metric showing the average time between the start of malicious activity in the environment and the moment the SOC identifies it. Which of the following metrics should the manager report?",
      "options": [
        "Mean time to respond",
        "Mean time to detect",
        "Mean time to remediate",
        "Mean time between failures"
      ],
      "answer": "B",
      "explanation": "Mean time to detect (MTTD) measures how long, on average, malicious activity goes unnoticed before the SOC identifies it, which reflects the effectiveness of monitoring and detection. Mean time to respond and mean time to remediate measure what happens after detection. Mean time between failures is a reliability metric, not a security operations metric.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of security operations and incident response reporting and communication",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Reporting and Communication: security operations and incident response reporting (metrics and KPIs, mean time to detect)"
    }
  ]
}
```