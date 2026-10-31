```json
{
  "format": "domcq/1",
  "exam": "comptia-cysa",
  "set": "CompTIA CySA+ (CS0-004) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A SOC analyst notices that a workstation has made an outbound HTTPS connection to the same external IP address every 60 seconds for the past three days, including overnight when no user is logged on. Each session transfers roughly 300 bytes. Which of the following activities has most likely occurred?",
      "options": [
        "Bulk data exfiltration over an encrypted channel",
        "Beaconing to a command-and-control server",
        "Horizontal port scanning of the internal subnet",
        "Poisoning of the local DNS resolver cache"
      ],
      "answer": "B",
      "explanation": "Small, fixed-interval connections to a single destination that continue regardless of user activity are the classic signature of beaconing, where an implant checks in with its C2 server for instructions. Exfiltration would show large or growing transfer volumes, scanning would show many destinations or ports, and DNS cache poisoning affects name resolution rather than producing periodic sessions.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, analyze indicators of potential malicious activity",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Security Operations: analyze indicators of potential malicious activity – network indicators (beaconing)"
    },
    {
      "stem": "An analyst has obtained the SHA-256 hash of a suspicious executable found in an email attachment. The analyst wants to quickly learn whether multiple antivirus engines already identify the file as malicious, without executing it. Which of the following tools should the analyst use?",
      "options": [
        "Nmap",
        "Wireshark",
        "VirusTotal",
        "Metasploit"
      ],
      "answer": "C",
      "explanation": "VirusTotal accepts a file hash and returns the verdicts of dozens of antivirus engines and related reputation data, so an analyst can check a sample against known detections without running it. Nmap is a network scanner, Wireshark is a packet analyzer, and Metasploit is an exploitation framework; none of them provides multi-engine reputation lookups for a hash.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, use tools to determine malicious activity",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Security Operations: use tools to determine malicious activity – file analysis and reputation tools"
    },
    {
      "stem": "A security analyst is correlating events in the SIEM from firewalls, web servers, and domain controllers. Events belonging to the same user session appear out of sequence, with timestamps several minutes apart across devices. Which of the following should the analyst recommend first to improve correlation?",
      "options": [
        "Configure all log sources to synchronize with a common NTP source",
        "Increase the retention period for all logs ingested by the SIEM",
        "Enable debug-level logging on all perimeter firewall interfaces",
        "Forward all logs to the SIEM using an encrypted syslog transport"
      ],
      "answer": "A",
      "explanation": "SIEM correlation depends on accurate, consistent timestamps; when device clocks drift, related events from different sources cannot be placed in the correct order. Synchronizing every log source to a common NTP time source fixes the root cause. Longer retention, more verbose logging, and encrypted transport do not correct clock skew.",
      "topic": "Security Operations",
      "subtopic": "Explain concepts related to system and network architecture in security operations",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Security Operations: system and network architecture – log ingestion and time synchronization"
    },
    {
      "stem": "No alerts have fired, but a security team suspects an adversary may be using built-in administration tools for lateral movement. The team forms a hypothesis and searches endpoint telemetry for unusual PsExec and WMI remote execution between workstations. Which of the following best describes this activity?",
      "options": [
        "Vulnerability scanning",
        "Incident containment",
        "Penetration testing",
        "Threat hunting"
      ],
      "answer": "D",
      "explanation": "Threat hunting is the proactive, hypothesis-driven search for adversary activity that existing detections have not flagged. The team is not testing for weaknesses (scanning or penetration testing) and has not yet confirmed an incident to contain; it is looking for evidence of a suspected technique, such as living-off-the-land lateral movement, in existing telemetry.",
      "topic": "Security Operations",
      "subtopic": "Explain threat intelligence and threat-hunting concepts",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Security Operations: threat intelligence and threat-hunting concepts – hypothesis-driven hunting"
    },
    {
      "stem": "Tier 1 analysts spend most of each shift manually enriching phishing alerts by looking up the sender domain, embedded URLs, and attachment hashes in the same three reputation services. Which of the following would best improve the efficiency of this process?",
      "options": [
        "Raising the SIEM severity threshold for phishing alerts",
        "Implementing a SOAR playbook that performs the lookups automatically",
        "Hiring additional tier 1 analysts for the busiest shifts",
        "Requiring users to forward suspicious emails to the help desk"
      ],
      "answer": "B",
      "explanation": "Repetitive, well-defined enrichment steps are ideal candidates for automation and orchestration. A SOAR playbook can query the reputation services through their APIs and attach the results to each alert, freeing analysts to focus on decisions. Raising thresholds risks missing real phishing, and adding staff or routing emails elsewhere does not remove the manual work.",
      "topic": "Security Operations",
      "subtopic": "Explain the importance of efficiency and process improvement in security operations",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Security Operations: efficiency and process improvement – automation, orchestration and SOAR"
    },
    {
      "stem": "A SOC manager proposes pasting incident tickets into a free, public generative AI chatbot to produce shift summaries. The tickets contain internal hostnames, employee usernames, and customer account details. Which of the following is the primary concern with this proposal?",
      "options": [
        "The chatbot may respond more slowly than the SIEM",
        "The summaries may use a different format than the ticketing system",
        "Sensitive data may be disclosed to and retained by a third party",
        "The chatbot may increase the volume of alerts sent to analysts"
      ],
      "answer": "C",
      "explanation": "Submitting internal and customer data to a public AI service sends that data outside the organization's control, where it may be stored, logged, or used for training, creating privacy, regulatory, and confidentiality risks. Before using AI tools in security operations, organizations should apply data-handling policies and prefer approved tools with appropriate data protections; output should also be reviewed by a human for accuracy.",
      "topic": "Security Operations",
      "subtopic": "Summarize concepts related to the use of AI in security operations",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Security Operations: use of AI in security operations – data privacy and governance risks"
    },
    {
      "stem": "An analyst is reviewing activity on a Windows file server after users report they cannot open shared documents. Which of the following observations most strongly indicate ransomware activity? (Choose TWO.)",
      "options": [
        "The backup service account logged on during its scheduled nightly window",
        "Thousands of files were renamed with the same new extension within minutes",
        "A cumulative Windows update was installed during the maintenance window",
        "CPU utilization rose during the scheduled overnight antivirus scan",
        "The command vssadmin delete shadows /all /quiet was executed",
        "The server synchronized its clock with the domain controller"
      ],
      "answer": "BE",
      "explanation": "Ransomware typically encrypts large numbers of files rapidly and appends a common new extension, producing a burst of file modifications and renames. It also commonly deletes Volume Shadow Copies with vssadmin so victims cannot restore files without paying. The other observations are expected, scheduled activity that matches normal baselines.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, analyze indicators of potential malicious activity",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Security Operations: analyze indicators of potential malicious activity – host-based and file system indicators"
    },
    {
      "stem": "A manufacturing company wants to identify vulnerabilities on its industrial control network. Several PLCs on that network have previously stopped responding when probed by network scanners, and the plant cannot tolerate downtime. Which of the following scanning methods should the analyst use?",
      "options": [
        "Passive scanning that analyzes mirrored network traffic",
        "Credentialed active scanning during production hours",
        "Unauthenticated active scanning with aggressive timing",
        "Agent-based scanning with agents installed on each PLC"
      ],
      "answer": "A",
      "explanation": "OT and ICS devices are often fragile and can fail when actively probed, so passive scanning, which identifies assets and vulnerabilities by observing traffic from a SPAN port or tap, avoids sending packets to the devices. Any active scan, credentialed or not, risks disrupting production, and PLCs generally cannot run third-party scanning agents.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, implement the appropriate vulnerability scanning method",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Vulnerability Management: implement the appropriate scanning method – passive vs. active scanning, OT/ICS considerations"
    },
    {
      "stem": "An unauthenticated vulnerability scan of Windows servers reported only a few low-severity findings. A separate patch audit shows that the same servers are missing dozens of critical operating system patches. Which of the following should the analyst take into consideration for future scans?",
      "options": [
        "Scanning the servers from an external IP address",
        "Reducing the number of plugins enabled in the scan policy",
        "Scheduling the scans outside of business hours",
        "Configuring the scans to use administrative credentials"
      ],
      "answer": "D",
      "explanation": "An unauthenticated scan sees only what the host exposes over the network, so it misses missing patches and local configuration flaws, producing false negatives. A credentialed scan logs on to the host and can inspect installed software, patch levels, and registry settings, giving a far more complete picture. Changing the scan location, timing, or plugin count would not reveal the missing patches.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, implement the appropriate vulnerability scanning method",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Vulnerability Management: implement the appropriate scanning method – credentialed vs. non-credentialed scans"
    },
    {
      "stem": "A vulnerability scanner flags a Linux web server as vulnerable to a critical OpenSSH CVE based solely on the version string in the service banner. The system administrator shows that the distribution vendor backported the security fix into the installed package without changing the upstream version number, and the vendor's advisory confirms the package is not affected. Which of the following best describes this finding?",
      "options": [
        "True positive",
        "False positive",
        "True negative",
        "False negative"
      ],
      "answer": "B",
      "explanation": "A false positive is a reported vulnerability that does not actually exist on the system. Banner-based detection only compares version numbers, so it cannot see fixes that a distribution vendor has backported into an older-numbered package. Validating findings against vendor advisories or with credentialed checks helps analysts avoid wasting remediation effort on such results.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze output from vulnerability assessment tools",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Vulnerability Management: analyze output from vulnerability assessment tools – validating results, false positives"
    },
    {
      "stem": "A vulnerability scan produces four findings. Which of the following should the analyst remediate first?",
      "options": [
        "CVSS 9.8 on a lab server with no network connectivity to production or the internet",
        "CVSS 8.8 on an internal workstation, requiring user interaction, with no known exploit",
        "CVSS 5.3 information disclosure on an internal wiki server reachable only over VPN",
        "CVSS 7.5 on an internet-facing web server, listed in the CISA KEV catalog"
      ],
      "answer": "D",
      "explanation": "Prioritization should reflect actual risk, not the CVSS base score alone. A vulnerability in CISA's Known Exploited Vulnerabilities catalog is being exploited in the wild, and an internet-facing asset is directly exposed to attackers, so its likelihood of exploitation is far higher. The isolated lab server's high score is offset by its lack of reachability, and the other findings have lower exploitability or impact.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze data to prioritize and mitigate vulnerabilities",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Vulnerability Management: analyze data to prioritize vulnerabilities – exploitability, exposure, asset criticality"
    },
    {
      "stem": "A legacy application server cannot be patched for a known vulnerability until the vendor releases an update next quarter. In the meantime, the security team moves the server to an isolated VLAN and restricts access to it with strict ACLs. Which of the following types of control has the team implemented?",
      "options": [
        "Corrective",
        "Compensating",
        "Deterrent",
        "Directive"
      ],
      "answer": "B",
      "explanation": "A compensating control is an alternative measure that reduces risk when the primary control, here patching, cannot be applied. Network segmentation and restrictive ACLs limit who can reach the vulnerable service until the patch is available. Corrective controls fix problems after an event, deterrent controls discourage attackers, and directive controls instruct people through policy or procedure.",
      "topic": "Vulnerability Management",
      "subtopic": "Explain concepts related to control types, risks, and vulnerability management",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Vulnerability Management: control types, risks, and vulnerability management – compensating controls"
    },
    {
      "stem": "An attacker sends employees an email containing a malicious macro-enabled document crafted for the target company. According to the Lockheed Martin Cyber Kill Chain, which of the following phases does sending this email represent?",
      "options": [
        "Reconnaissance",
        "Weaponization",
        "Delivery",
        "Exploitation"
      ],
      "answer": "C",
      "explanation": "In the Cyber Kill Chain, delivery is the transmission of the weapon to the target, and phishing email is one of the most common delivery vectors. Building the malicious document is weaponization, which comes before delivery, and the macro running on the victim's machine is exploitation, which comes after.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize concepts related to attack methodology frameworks",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Incident Response and Management: attack methodology frameworks – Lockheed Martin Cyber Kill Chain"
    },
    {
      "stem": "A threat intelligence team wants to map adversary behaviors observed during an intrusion, such as credential dumping from LSASS memory and scheduled-task persistence, to a standardized knowledge base of tactics and techniques so it can identify detection gaps. Which of the following should the team use?",
      "options": [
        "MITRE ATT&CK",
        "OWASP Top 10",
        "Diamond Model of Intrusion Analysis",
        "Common Vulnerability Scoring System"
      ],
      "answer": "A",
      "explanation": "MITRE ATT&CK is a curated knowledge base of adversary tactics and techniques, each with an identifier, drawn from real-world observations. Mapping observed behaviors to ATT&CK techniques lets teams compare them with their detection coverage and find gaps. The Diamond Model relates adversary, capability, infrastructure, and victim but is not a technique catalog; OWASP Top 10 covers web application risks and CVSS scores vulnerabilities.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize concepts related to attack methodology frameworks",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Incident Response and Management: attack methodology frameworks – MITRE ATT&CK"
    },
    {
      "stem": "A workstation confirmed to be infected with a remote access trojan has been disconnected from the network, and forensic images of its disk and memory have been captured. The analyst has identified a malicious registry Run key used for persistence. Which of the following is the next step?",
      "options": [
        "Reconnect the workstation to production and monitor it",
        "Hold the lessons-learned meeting with all stakeholders",
        "Restore user data to the workstation from last night's backup",
        "Remove the malware and its persistence mechanisms from the host"
      ],
      "answer": "D",
      "explanation": "The host has been contained and evidence preserved, so the next phase is eradication: removing the malware and every persistence mechanism, or rebuilding the system from a known-good image. Restoring data and returning the host to production belong to recovery, which follows eradication, and the lessons-learned meeting happens in post-incident activity after recovery.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize the incident response process",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Incident Response and Management: incident response process – containment, eradication, and recovery (NIST SP 800-61)"
    },
    {
      "stem": "An analyst is collecting evidence from a compromised server that is still running. Following the order of volatility, which of the following should the analyst collect first?",
      "options": [
        "Files stored on the local hard drive",
        "Contents of system memory (RAM)",
        "Logs already forwarded to a remote SIEM",
        "Archived backup media stored off-site"
      ],
      "answer": "B",
      "explanation": "Evidence should be collected from the most volatile source to the least volatile, because volatile data is lost when the system is powered off or changes quickly. System memory holds running processes, network connections, and decryption keys and disappears at shutdown, so it comes before disk contents, remote logs, and archival media.",
      "topic": "Incident Response and Management",
      "subtopic": "Given a scenario, implement incident response techniques",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Incident Response and Management: incident response techniques – evidence acquisition and order of volatility (RFC 3227)"
    },
    {
      "stem": "An analyst is acquiring the hard drive of an employee's laptop for an investigation that may lead to legal proceedings. Which of the following actions will best preserve the integrity and admissibility of the evidence? (Choose THREE.)",
      "options": [
        "Use a hardware write blocker when acquiring the disk image",
        "Run antivirus on the original drive to remove malware first",
        "Record hash values of the original drive and the acquired image",
        "Analyze the original drive directly to avoid copying errors",
        "Document every transfer of the evidence on a chain-of-custody form",
        "Reboot the laptop so that unstable processes are cleared"
      ],
      "answer": "ACE",
      "explanation": "A write blocker prevents any changes to the original media during acquisition, matching hashes prove the image is an exact, unaltered copy, and a chain-of-custody record shows who handled the evidence and when. Together these let the evidence withstand legal scrutiny. Running antivirus, analyzing the original, or rebooting all alter the evidence and can destroy volatile data.",
      "topic": "Incident Response and Management",
      "subtopic": "Given a scenario, implement incident response techniques",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Incident Response and Management: incident response techniques – forensic acquisition, hashing, chain of custody"
    },
    {
      "stem": "The CISO asks a security analyst for a single metric to show the board whether the vulnerability management program is improving over time. Which of the following would best meet this need?",
      "options": [
        "Total number of plugins enabled in the scanner policy",
        "Number of IP addresses included in the scan scope",
        "Mean time to remediate critical vulnerabilities each quarter",
        "Count of informational findings reported in each scan"
      ],
      "answer": "C",
      "explanation": "Executive reporting should use outcome-focused metrics that show risk being reduced. Mean time to remediate critical vulnerabilities, tracked as a trend, shows how quickly the most dangerous exposures are being closed and whether that is getting better. Plugin counts, scope size, and informational findings describe scanner activity rather than program effectiveness.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of vulnerability management reporting and communication",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Reporting and Communication: vulnerability management reporting – metrics, KPIs, and trends"
    },
    {
      "stem": "During an active incident, the response team suspects that the attacker has compromised the corporate email server and may be reading internal messages. Which of the following should the team use to coordinate response activities?",
      "options": [
        "A preestablished out-of-band communication channel",
        "A reply-all thread on the corporate email system",
        "A post on the internal company intranet homepage",
        "A help desk ticket that emails updates to the team"
      ],
      "answer": "A",
      "explanation": "When normal communication systems may be compromised, responders should switch to an out-of-band channel, set up in advance during preparation, so the attacker cannot monitor the response and adapt. Every other option relies on corporate systems the attacker may be able to read, and an intranet post would also share sensitive details too widely.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of security operations and incident response reporting and communication",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Reporting and Communication: incident response communication – stakeholder communication, out-of-band channels"
    },
    {
      "stem": "A vulnerability report recommends immediately patching a critical flaw on a vendor-managed appliance that processes customer payments. The system owner pushes back on the recommendation. Which of the following are recognized inhibitors to remediation that the analyst should document in the report? (Choose TWO.)",
      "options": [
        "The vulnerability has been assigned a public CVE identifier",
        "The vendor SLA prohibits customer-applied changes to the appliance",
        "The finding was detected using a credentialed vulnerability scan",
        "Patching requires downtime of a revenue-critical business process",
        "The vulnerability has a CVSS base score higher than 9.0"
      ],
      "answer": "BD",
      "explanation": "Inhibitors to remediation are business or contractual factors that prevent or delay a fix, such as service-level agreements, MOUs, business process interruption, degraded functionality, and legacy or proprietary systems. A vendor SLA that forbids customer changes and the need to take down a revenue-critical process are both examples. A CVE identifier, credentialed detection, and a high CVSS score describe the vulnerability itself and argue for remediation rather than against it.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of vulnerability management reporting and communication",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Reporting and Communication: vulnerability management reporting – inhibitors to remediation"
    }
  ]
}
```
