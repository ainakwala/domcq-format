```json
{
  "format": "domcq/1",
  "exam": "comptia-cysa",
  "set": "CompTIA CySA+ (CS0-004) practice – Core domains mixed set",
  "questions": [
    {
      "stem": "A security analyst reviewing firewall logs notices that a single workstation has made an outbound HTTPS connection to the same external IP address every 300 seconds for the past three days. Each connection transfers a similar small number of bytes, and the pattern continues overnight when no user is logged in. Which of the following is most likely occurring?",
      "options": [
        "The workstation is downloading operating system updates",
        "The workstation is the target of an inbound port scan",
        "The workstation is beaconing to a command-and-control server",
        "The workstation is experiencing DNS cache poisoning"
      ],
      "answer": "C",
      "explanation": "Beaconing is the regular, automated check-in that malware performs with its command-and-control (C2) infrastructure, typically at a fixed interval with small, consistent payloads. The fixed timing, single destination and activity with no user present are classic indicators. Legitimate update traffic is usually irregular and goes to well-known vendor content networks rather than one unexplained IP address.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, analyze indicators of potential malicious activity",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 objectives, Security Operations: analyze indicators of potential malicious activity (network-related indicators, beaconing)"
    },
    {
      "stem": "An analyst receives a suspicious email attachment that antivirus does not flag. The analyst needs to observe the file's runtime behavior, including registry modifications, processes spawned and network connections attempted, without risking production systems. Which of the following should the analyst do?",
      "options": [
        "Detonate the attachment in an isolated sandbox environment",
        "Compare the file's hash against the internal allow list",
        "Run the strings utility against the file on a workstation",
        "Move the attachment into the mail gateway quarantine"
      ],
      "answer": "A",
      "explanation": "A sandbox is an isolated, instrumented environment where a suspicious file can be executed safely so its dynamic behavior can be recorded. Only dynamic analysis reveals what a file actually does at runtime, such as registry changes, child processes and callbacks. Hash comparison and strings are static techniques that do not show runtime behavior, and quarantining stops delivery but provides no analysis.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, use tools to determine malicious activity",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Security Operations: use tools to determine malicious activity (sandboxing, dynamic analysis)"
    },
    {
      "stem": "A SOC analyst is building a timeline of an intrusion using logs from firewalls, domain controllers and Linux web servers collected in the SIEM. The analyst finds that the device clocks differ from one another by between two and seven minutes, making the order of events unreliable. Which of the following should be implemented to prevent this problem in the future?",
      "options": [
        "Increase log retention on all devices to 365 days",
        "Forward all logs to the SIEM using syslog over TLS",
        "Add custom parsers to normalize log fields in the SIEM",
        "Configure all devices to synchronize with a common NTP source"
      ],
      "answer": "D",
      "explanation": "Accurate correlation across many log sources depends on every device recording events against the same reference time. Synchronizing all devices to a common Network Time Protocol (NTP) source removes clock drift so timestamps can be compared reliably. Retention, transport encryption and field normalization are useful log-ingestion practices, but none of them corrects inaccurate device clocks.",
      "topic": "Security Operations",
      "subtopic": "Explain concepts related to system and network architecture in security operations",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Security Operations: system and network architecture (log ingestion, time synchronization)"
    },
    {
      "stem": "A threat intelligence report describes a group that is well funded, develops custom zero-day exploits, keeps access to targeted defense contractors for months without being detected and focuses on espionage rather than financial gain. Which of the following threat actor types does this best describe?",
      "options": [
        "Hacktivist",
        "Nation-state",
        "Organized crime",
        "Insider threat",
        "Script kiddie"
      ],
      "answer": "B",
      "explanation": "Nation-state actors, often tracked as advanced persistent threats (APTs), have the funding and skill to develop zero-day exploits and the patience to remain hidden in a network for long periods. Their typical motivation is espionage or strategic advantage rather than profit. Organized crime is usually financially motivated, and hacktivists seek publicity for a cause.",
      "topic": "Security Operations",
      "subtopic": "Explain threat intelligence and threat-hunting concepts",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 objectives, Security Operations: threat intelligence and threat-hunting concepts (threat actors, APT)"
    },
    {
      "stem": "A SOC receives about 400 user-reported phishing emails per day. Analysts spend most of each shift manually extracting URLs, checking their reputation and deleting matching messages from user mailboxes. Which of the following would most improve the team's efficiency?",
      "options": [
        "Hire additional tier 1 analysts to share the workload",
        "Raise the spam filter sensitivity on the mail gateway",
        "Remove the phishing report button from the mail client",
        "Require users to forward reported emails as plain text",
        "Implement a SOAR playbook to automate enrichment and cleanup"
      ],
      "answer": "E",
      "explanation": "Security orchestration, automation and response (SOAR) playbooks automate repetitive, well-defined tasks such as extracting indicators, querying reputation services and purging matching messages. Automating this workflow frees analysts for work that needs human judgment and reduces response time. Adding staff scales cost rather than efficiency, and the other options either degrade detection or do not remove the manual steps.",
      "topic": "Security Operations",
      "subtopic": "Explain the importance of efficiency and process improvement in security operations",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Security Operations: efficiency and process improvement (automation, SOAR, playbooks)"
    },
    {
      "stem": "A SOC manager plans to let analysts paste alert details and log excerpts, including internal hostnames and usernames, into a public third-party generative AI chatbot to speed up triage. Which of the following are the most significant risks of this plan? (Choose TWO.)",
      "options": [
        "Sensitive internal data could be retained or disclosed by the provider",
        "The volume of events ingested by the SIEM will increase",
        "The model may return plausible but inaccurate conclusions",
        "Mean time to respond for low-severity alerts may decrease",
        "Detection rules in the SIEM will be overwritten automatically"
      ],
      "answer": "AC",
      "explanation": "Submitting internal data to a public AI service can expose it, because the provider may store, log or use the prompts outside the organization's control. Generative models can also hallucinate, producing confident but wrong analysis that an analyst might act on without verification. A lower mean time to respond is a potential benefit, not a risk, and the chatbot has no effect on SIEM ingestion or detection rules.",
      "topic": "Security Operations",
      "subtopic": "Summarize concepts related to the use of AI in security operations",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 objectives, Security Operations: use of AI in security operations (data privacy, accuracy and hallucination risks)"
    },
    {
      "stem": "During an investigation of a Windows server, an analyst suspects that a backdoor is listening on TCP port 4444. The analyst needs to identify the process ID associated with that listening port using a built-in command-line utility. Which of the following commands should the analyst use?",
      "options": [
        "nslookup",
        "netstat -ano",
        "tracert",
        "ipconfig /all",
        "arp -a"
      ],
      "answer": "B",
      "explanation": "The netstat command with -a lists all connections and listening ports, -n shows addresses and ports numerically, and -o adds the owning process ID. The analyst can then match that PID to a process in Task Manager or with tasklist. The other utilities handle name resolution, routing paths, interface configuration and the ARP cache, none of which map ports to processes.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, use tools to determine malicious activity",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Security Operations: use tools to determine malicious activity (command-line host analysis tools)"
    },
    {
      "stem": "A vulnerability scan of the company's Windows servers reports only open ports and service banners. It does not report missing patches or local configuration weaknesses. Which of the following should the analyst take into consideration for future scans?",
      "options": [
        "Switch to a passive scan using network taps",
        "Run the scan during peak business hours",
        "Reduce the number of enabled scan plugins",
        "Configure the scan to use valid credentials"
      ],
      "answer": "D",
      "explanation": "A credentialed scan logs in to the target, so it can read installed software versions, patch levels, registry settings and local configuration. A non-credentialed scan sees only what the host exposes to the network, such as open ports and banners, which matches the incomplete results described. Passive scanning and fewer plugins would reveal even less, and timing does not change what the scanner can see.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, implement the appropriate vulnerability scanning method",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 objectives, Vulnerability Management: implement the appropriate scanning method (credentialed vs. non-credentialed)"
    },
    {
      "stem": "An analyst must decide which vulnerability to remediate first after a scan. Which of the following should be prioritized?",
      "options": [
        "CVSS 8.1 on an internet-facing web server, listed in the CISA Known Exploited Vulnerabilities catalog",
        "CVSS 9.8 on an isolated lab system with no network connectivity and no sensitive data",
        "CVSS 7.5 on an internal print server with no public exploit code available",
        "CVSS 5.3 on an internal file server with no known exploit and existing mitigations"
      ],
      "answer": "A",
      "explanation": "Prioritization should weigh more than the CVSS base score: exposure, asset criticality and evidence of active exploitation all affect real risk. A vulnerability in the CISA Known Exploited Vulnerabilities catalog is being exploited in the wild, and an internet-facing server is reachable by any attacker. The 9.8 finding has a higher base score but very low likelihood of exploitation because the system is isolated.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze data to prioritize and mitigate vulnerabilities",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Vulnerability Management: prioritize and mitigate vulnerabilities (exploitability, asset value, CISA KEV)"
    },
    {
      "stem": "A scanner flags a Red Hat Enterprise Linux server as vulnerable to a CVE because the Apache banner reports version 2.4.37. The analyst confirms that the vendor has backported the fix for that CVE into the installed package, which is fully up to date, without changing the upstream version number. Which of the following best describes the scanner's finding?",
      "options": [
        "True positive",
        "False negative",
        "False positive",
        "True negative"
      ],
      "answer": "C",
      "explanation": "A false positive is a finding that reports a vulnerability that does not actually exist on the system. Version-based checks can be fooled when a vendor backports security fixes without changing the version string, so the banner looks vulnerable even though the code is patched. Validating findings against vendor advisories or with a credentialed, package-level check helps avoid wasting remediation effort.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze output from vulnerability assessment tools",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Vulnerability Management: analyze output from vulnerability assessment tools (validating results, false positives)"
    },
    {
      "stem": "A manufacturing plant runs a critical human-machine interface (HMI) on an unsupported operating system. The vendor will not provide patches, and the system cannot be replaced for 18 months. Which of the following are the most appropriate compensating controls? (Choose TWO.)",
      "options": [
        "Run an unauthenticated vulnerability scan against it every month",
        "Place it in an isolated network segment with strict ACLs",
        "Apply the latest OS feature update without vendor approval",
        "Formally accept the risk with no additional controls applied",
        "Enforce application allow listing on the host"
      ],
      "answer": "BE",
      "explanation": "Compensating controls reduce risk when the primary control, here patching, cannot be applied. Network segmentation with strict access control lists limits who can reach the vulnerable system, and application allow listing prevents unapproved code from running on it. Monthly scanning only detects the known weaknesses again, an unapproved update could break a critical industrial system, and accepting risk with no controls is not a compensating control.",
      "topic": "Vulnerability Management",
      "subtopic": "Explain concepts related to control types, risks, and vulnerability management",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 objectives, Vulnerability Management: control types, risks and vulnerability management (compensating controls, legacy systems)"
    },
    {
      "stem": "An organization has many remote laptops that rarely connect to the corporate network. Scheduled network-based vulnerability scans consistently miss these devices. Which of the following scanning approaches would best address this gap?",
      "options": [
        "Schedule the network scans to run overnight",
        "Increase the scanner's host discovery timeout",
        "Use a passive network sensor at the perimeter",
        "Deploy agent-based scanning on the laptops"
      ],
      "answer": "D",
      "explanation": "Agent-based scanning installs a lightweight agent on each endpoint that assesses the device locally and reports results whenever it has an internet connection. This removes the need for the device to be on the corporate network when a scan runs. Changing scan timing or timeouts does not help when the laptops are not present, and a perimeter sensor cannot see devices that are off the network.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, implement the appropriate vulnerability scanning method",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 objectives, Vulnerability Management: implement the appropriate scanning method (agent vs. agentless)"
    },
    {
      "stem": "An analyst observes an attacker using a tool to dump the memory of the LSASS process on a compromised Windows host. According to the MITRE ATT&CK framework, which of the following tactics does this activity map to?",
      "options": [
        "Credential Access",
        "Lateral Movement",
        "Exfiltration",
        "Initial Access",
        "Persistence"
      ],
      "answer": "A",
      "explanation": "The LSASS process holds credential material such as password hashes and Kerberos tickets for logged-on users, so dumping its memory is a way to steal credentials. MITRE ATT&CK classifies this as OS Credential Dumping, a technique under the Credential Access tactic. The stolen credentials may later enable lateral movement, but the dumping activity itself is credential access.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize concepts related to attack methodology frameworks",
      "difficulty": "medium",
      "source": "MITRE ATT&CK, Credential Access tactic (TA0006), OS Credential Dumping: LSASS Memory; CySA+ objectives: attack methodology frameworks"
    },
    {
      "stem": "During a ransomware incident, the response team has isolated all infected hosts from the network and captured forensic images of them. The team has not yet determined how the attacker gained access or what persistence mechanisms were installed. Which of the following is the next step?",
      "options": [
        "Restore the hosts from the most recent backups and reconnect them",
        "Hold the lessons-learned meeting with all stakeholders",
        "Identify and eliminate the root cause and persistence mechanisms",
        "Notify users that affected services have been fully restored",
        "Begin drafting the organization's incident response plan"
      ],
      "answer": "C",
      "explanation": "With containment complete and evidence preserved, the next phase is eradication: finding and removing the root cause, malware and persistence. Restoring and reconnecting systems before the entry point and persistence are understood risks immediate reinfection, possibly from backups that also contain the attacker's tools. Lessons learned follow recovery, and the incident response plan should exist before an incident occurs.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize the incident response process",
      "difficulty": "hard",
      "source": "NIST SP 800-61, incident handling lifecycle (containment, eradication and recovery); CySA+ objectives: incident response process"
    },
    {
      "stem": "An incident responder must collect evidence from a running, compromised server and wants to follow the order of volatility. Which of the following should be collected first?",
      "options": [
        "Archived backup tapes",
        "System memory (RAM)",
        "Hard disk contents",
        "Remote log server entries"
      ],
      "answer": "B",
      "explanation": "The order of volatility says to collect the evidence that will disappear soonest first. RAM holds running processes, network connections, encryption keys and injected code that are lost when the system is powered off or changed. Disk contents, remote logs and backups persist much longer and can be collected afterward.",
      "topic": "Incident Response and Management",
      "subtopic": "Given a scenario, implement incident response techniques",
      "difficulty": "easy",
      "source": "RFC 3227, Guidelines for Evidence Collection and Archiving (order of volatility); CySA+ objectives: incident response techniques"
    },
    {
      "stem": "After acquiring a forensic image of a suspect's laptop drive, an analyst must be able to prove later in legal proceedings that the image has not been altered since acquisition. Which of the following should the analyst do?",
      "options": [
        "Compress the image to save evidence storage space",
        "Copy the image to the analyst's own workstation",
        "Mount the image in read-write mode to review it",
        "Rename the image file using the case number",
        "Record a SHA-256 hash of the image in the chain of custody"
      ],
      "answer": "E",
      "explanation": "A cryptographic hash acts as a fingerprint of the image at the moment of acquisition; recomputing it later and getting the same value shows the data has not changed. Recording the hash in the chain-of-custody documentation links that proof to every handoff of the evidence. Mounting the image read-write could modify it, and the other actions do nothing to demonstrate integrity.",
      "topic": "Incident Response and Management",
      "subtopic": "Given a scenario, implement incident response techniques",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Incident Response and Management: incident response techniques (evidence acquisition, integrity validation, chain of custody)"
    },
    {
      "stem": "Using the Lockheed Martin Cyber Kill Chain, an analyst determines that an attacker has just emailed a weaponized document to several employees, but no recipient has opened it yet. Which of the following phases has the attack reached?",
      "options": [
        "Delivery",
        "Exploitation",
        "Installation",
        "Reconnaissance",
        "Actions on objectives"
      ],
      "answer": "A",
      "explanation": "In the Cyber Kill Chain, delivery is the phase in which the attacker transmits the weaponized payload to the target, for example by email, web download or USB drive. Exploitation begins only when the payload is triggered, such as when a user opens the document and its code runs. Stopping an attack at delivery, for example by quarantining the email, prevents every later phase.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize concepts related to attack methodology frameworks",
      "difficulty": "medium",
      "source": "Lockheed Martin Cyber Kill Chain (delivery phase); CySA+ CS0-004 objectives: attack methodology frameworks"
    },
    {
      "stem": "A vulnerability report shows that a critical patch for an e-commerce platform is 60 days overdue. The system owner explains that applying the patch requires eight hours of downtime, and the company's contracts with its customers guarantee 99.99% availability. Which of the following inhibitors to remediation is the owner describing?",
      "options": [
        "Legacy system",
        "Proprietary system",
        "Degrading functionality",
        "Service-level agreement",
        "Memorandum of understanding"
      ],
      "answer": "D",
      "explanation": "A service-level agreement (SLA) is a contractual commitment to customers about performance or availability, and an availability guarantee can block the downtime a patch requires. Recognizing the SLA as the inhibitor lets the analyst propose options such as a negotiated maintenance window or a compensating control. A memorandum of understanding is a less formal, usually non-binding arrangement, and nothing in the scenario indicates an old, vendor-locked or degraded system.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of vulnerability management reporting and communication",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 objectives, Reporting and Communication: vulnerability management reporting and communication (inhibitors to remediation)"
    },
    {
      "stem": "A SOC manager wants a metric that shows the average time between when malicious activity begins in the environment and when the SOC identifies it. Which of the following metrics should the manager report?",
      "options": [
        "Mean time to respond",
        "Mean time to remediate",
        "Mean time to detect",
        "Mean time between failures"
      ],
      "answer": "C",
      "explanation": "Mean time to detect (MTTD) measures the average interval from the start of an incident to its discovery, so it reflects the effectiveness of monitoring and detection. Mean time to respond and mean time to remediate measure what happens after detection. Mean time between failures is a reliability metric for hardware and systems, not a security operations metric.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of security operations and incident response reporting and communication",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 objectives, Reporting and Communication: security operations and incident response reporting (metrics and KPIs, MTTD)"
    },
    {
      "stem": "Following a data breach involving customer PII, the incident manager must prepare a report for the board of directors. Which of the following should the report emphasize?",
      "options": [
        "Full packet captures and raw log excerpts from the incident",
        "Business impact, risk and high-level recommendations",
        "Step-by-step commands the analysts ran during response",
        "Detailed findings from reverse engineering the malware"
      ],
      "answer": "B",
      "explanation": "Incident communication must be tailored to its audience, and a board needs information to make governance and investment decisions. An executive-level report focuses on business impact, legal and regulatory risk, and recommendations, presented without deep technical detail. Packet captures, command logs and malware analysis belong in the technical report for the security team.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of security operations and incident response reporting and communication",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Reporting and Communication: incident response reporting (stakeholder communication, executive summary)"
    }
  ]
}
```
