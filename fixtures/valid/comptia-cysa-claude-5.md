```json
{
  "format": "domcq/1",
  "exam": "comptia-cysa",
  "set": "CompTIA CySA+ (CS0-004) practice – Core Domains Mixed Set 1",
  "questions": [
    {
      "stem": "A network analyst reviewing proxy logs notices that a single workstation makes an HTTPS connection to the same external IP address every 300 seconds, around the clock, with nearly identical request and response sizes. The assigned user is not logged in overnight. Which of the following has most likely occurred?",
      "options": [
        "The workstation is beaconing to a command-and-control server",
        "The workstation is the target of a distributed denial-of-service attack",
        "An attacker is performing ARP cache poisoning on the local segment",
        "An external host is conducting a horizontal port scan of the network"
      ],
      "answer": "A",
      "explanation": "Regular, fixed-interval outbound connections with consistent payload sizes, continuing when no user is present, are a classic sign of malware beaconing to its command-and-control (C2) infrastructure. Implants check in on a timer to receive instructions, which produces this periodic pattern. A DDoS or port scan would show inbound traffic from many or external sources, and ARP poisoning is a local Layer 2 attack that does not create periodic outbound HTTPS sessions.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, analyze indicators of potential malicious activity",
      "difficulty": "easy",
      "source": "CySA+ CS0-004, Security Operations: analyze indicators of potential malicious activity (network indicators, beaconing)"
    },
    {
      "stem": "An analyst finds an unknown executable on a user's workstation and wants to quickly check whether its SHA-256 hash has been flagged as malicious by multiple antivirus engines, without executing the file. Which of the following tools should the analyst use?",
      "options": [
        "Nmap",
        "Wireshark",
        "VirusTotal",
        "Nessus"
      ],
      "answer": "C",
      "explanation": "VirusTotal aggregates results from dozens of antivirus engines and reputation services, so submitting or searching a file hash shows whether the sample is already known to be malicious without running it. Searching by hash rather than uploading the file also avoids disclosing a potentially sensitive file. Nmap is a network scanner, Wireshark is a packet analyzer, and Nessus is a vulnerability scanner, so none of them provide multi-engine file reputation.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, use tools to determine malicious activity",
      "difficulty": "easy",
      "source": "CySA+ CS0-004, Security Operations: use tools to determine malicious activity (file analysis, reputation tools)"
    },
    {
      "stem": "A company with many remote employees wants to replace its VPN concentrators and on-premises web proxies with a single cloud-delivered service that converges SD-WAN networking with secure web gateway, CASB, firewall-as-a-service, and zero trust network access capabilities. Which of the following architectures best meets this requirement?",
      "options": [
        "Security orchestration, automation, and response (SOAR)",
        "Secure access service edge (SASE)",
        "Network access control (NAC)",
        "Virtual desktop infrastructure (VDI)"
      ],
      "answer": "B",
      "explanation": "SASE is a cloud-delivered architecture that combines wide-area networking such as SD-WAN with security services like SWG, CASB, FWaaS, and ZTNA, enforcing policy close to the user wherever they connect. This lets organizations retire backhauling through on-premises VPNs and proxies. SOAR automates SOC workflows, NAC controls device admission to a local network, and VDI hosts desktops centrally; none of them converges networking and security as a service.",
      "topic": "Security Operations",
      "subtopic": "Explain concepts related to system and network architecture in security operations",
      "difficulty": "medium",
      "source": "CySA+ CS0-004, Security Operations: system and network architecture concepts (SASE, zero trust)"
    },
    {
      "stem": "A threat intelligence analyst receives a report from an industry sharing group marked TLP:AMBER under the Traffic Light Protocol version 2.0. Which of the following best describes how the analyst may share this report?",
      "options": [
        "It may be published publicly, subject only to standard copyright rules",
        "It may be shared with peers and partners in the wider community, but not published",
        "It may not be shared beyond the individual recipients who received it directly",
        "It may be shared within the recipient's organization and its clients on a need-to-know basis"
      ],
      "answer": "D",
      "explanation": "Under FIRST TLP 2.0, TLP:AMBER means limited disclosure: recipients may share the information only on a need-to-know basis within their own organization and with its clients. TLP:CLEAR allows public release, TLP:GREEN allows sharing within the wider community but not publicly, and TLP:RED restricts the information to the individual recipients only. TLP:AMBER+STRICT further narrows AMBER to the recipient's organization alone.",
      "topic": "Security Operations",
      "subtopic": "Explain threat intelligence and threat-hunting concepts",
      "difficulty": "medium",
      "source": "FIRST Traffic Light Protocol (TLP) version 2.0 definitions; CySA+ CS0-004 threat intelligence sharing"
    },
    {
      "stem": "SOC analysts spend most of each shift manually enriching phishing alerts: looking up sender reputation, submitting attachments to a sandbox, and opening tickets. The alert backlog is growing every week. Which of the following would best improve the team's efficiency?",
      "options": [
        "Increasing the SIEM log retention period",
        "Deploying an additional network IDS sensor",
        "Lowering the severity threshold for phishing alerts",
        "Requiring analysts to document each alert in more detail",
        "Implementing a SOAR playbook to automate enrichment and ticketing"
      ],
      "answer": "E",
      "explanation": "Repetitive, rule-based tasks such as reputation lookups, sandbox submission, and ticket creation are ideal for automation with SOAR playbooks. Automating them frees analysts to focus on decisions that need human judgment and shortens response times. The other options either add more data or alerts, or add manual work, which would make the backlog worse rather than better.",
      "topic": "Security Operations",
      "subtopic": "Explain the importance of efficiency and process improvement in security operations",
      "difficulty": "easy",
      "source": "CySA+ CS0-004, Security Operations: efficiency and process improvement (automation, SOAR, playbooks)"
    },
    {
      "stem": "A SOC plans to use a generative AI assistant to summarize incident tickets, some of which contain sensitive customer data. Which of the following controls best reduce the risks of this use? (Choose TWO.)",
      "options": [
        "Allowing the assistant to close tickets it rates as false positives without review",
        "Requiring analyst validation of AI-generated findings before any action is taken",
        "Granting the assistant's service account domain administrator rights for faster lookups",
        "Limiting the data submitted to the model to what approved data-handling policies permit",
        "Treating the model's summaries as authoritative evidence in incident reports"
      ],
      "answer": "BD",
      "explanation": "Generative AI can produce confident but incorrect output, so a human-in-the-loop review before acting on its conclusions guards against errors and hallucinations. Sensitive data sent to a model can be retained or exposed, so limiting inputs to what data-handling policy allows reduces leakage risk. Autonomous ticket closure, excessive privileges, and treating output as authoritative evidence all increase risk instead of reducing it.",
      "topic": "Security Operations",
      "subtopic": "Summarize concepts related to the use of AI in security operations",
      "difficulty": "medium",
      "source": "CySA+ CS0-004, Security Operations: use of AI in security operations (risks, human oversight, data protection)"
    },
    {
      "stem": "An analyst reviews a process listing exported from an EDR tool on a Windows 10 workstation. Which of the following processes requires further investigation?",
      "options": [
        "svchost.exe -k netsvcs, parent services.exe, image path C:\\Windows\\System32\\svchost.exe",
        "lsass.exe, parent wininit.exe, image path C:\\Windows\\System32\\lsass.exe",
        "services.exe, parent wininit.exe, image path C:\\Windows\\System32\\services.exe",
        "svchost.exe -k netsvcs, parent explorer.exe, image path C:\\Windows\\System32\\svchost.exe",
        "smss.exe, parent System, image path C:\\Windows\\System32\\smss.exe"
      ],
      "answer": "D",
      "explanation": "Legitimate svchost.exe instances are started by the Service Control Manager, so their parent should be services.exe. An svchost.exe launched by explorer.exe means a user-context process started it, a common sign of malware masquerading as a system process even when the image path looks correct. The other parent-child relationships are normal: services.exe and lsass.exe are started by wininit.exe, and smss.exe is started by the System process.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, analyze indicators of potential malicious activity",
      "difficulty": "hard",
      "source": "CySA+ CS0-004, Security Operations: host-based indicators (unauthorized processes, abnormal parent-child relationships)"
    },
    {
      "stem": "A vulnerability analyst notices that recent scans of Windows servers report many vulnerabilities as \"potential\" based only on service banners, and the scanner cannot verify installed patch levels or local configuration settings. Which of the following should the analyst take into consideration for future scans?",
      "options": [
        "Switching the scanner to passive monitoring mode only",
        "Configuring credentialed scans using a dedicated service account",
        "Limiting the scan to the 100 most common TCP ports",
        "Running the scans only during peak business hours"
      ],
      "answer": "B",
      "explanation": "A non-credentialed scan sees a host only from the network, so it infers vulnerabilities from banners and open ports and cannot read the registry, installed patches, or local settings. A credentialed scan logs in to the host and checks these directly, which reduces false positives and finds issues that are invisible from outside. The account should be dedicated and given only the privileges the scan needs.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, implement the appropriate vulnerability scanning method",
      "difficulty": "medium",
      "source": "CySA+ CS0-004, Vulnerability Management: scanning methods (credentialed vs. non-credentialed)"
    },
    {
      "stem": "An analyst runs nmap -sV against an internet-facing server and receives these results: 21/tcp open ftp vsftpd 2.3.4; 22/tcp open ssh OpenSSH; 443/tcp open https nginx; 3306/tcp filtered mysql. The analyst has already confirmed that the SSH and nginx packages are at the latest vendor-supported versions. Which of the following findings should the analyst prioritize for remediation?",
      "options": [
        "The FTP service running vsftpd 2.3.4 on port 21",
        "The SSH service running OpenSSH on port 22",
        "The HTTPS service running nginx on port 443",
        "The filtered MySQL service on port 3306"
      ],
      "answer": "A",
      "explanation": "The vsftpd 2.3.4 source archive was distributed with a backdoor (CVE-2011-2523) that gives an attacker a remote root shell, and public exploits for it are widely available. FTP also sends credentials in cleartext, which adds to the risk on an internet-facing host. The SSH and web services have been confirmed as current, and a filtered port is not reachable through the firewall, so neither is the priority.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze output from vulnerability assessment tools",
      "difficulty": "medium",
      "source": "CySA+ CS0-004, Vulnerability Management: analyze output from assessment tools (Nmap service/version detection)"
    },
    {
      "stem": "A vulnerability manager has the capacity to remediate only one finding this week. Which of the following should be remediated first?",
      "options": [
        "CVSS 9.8 on an air-gapped test server scheduled for decommissioning next month",
        "CVSS 8.8 with a low EPSS score on an internal HR application reachable only over VPN",
        "CVSS 7.5 on an internet-facing payment portal, listed in the CISA KEV catalog",
        "CVSS 6.5 on an internet-facing marketing website with no known public exploit"
      ],
      "answer": "C",
      "explanation": "The CVSS base score measures technical severity, but prioritization should also weigh exploitability, exposure, and asset value. A vulnerability in the CISA Known Exploited Vulnerabilities catalog is being actively exploited, and here it sits on an internet-facing system that handles payment data, so it presents the greatest real-world risk. The 9.8 finding is on an isolated system that is soon to be retired, and the others have lower likelihood of exploitation or lower impact.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze data to prioritize and mitigate vulnerabilities",
      "difficulty": "hard",
      "source": "CySA+ CS0-004, Vulnerability Management: prioritization (CVSS, exploitability, asset criticality, CISA KEV, EPSS)"
    },
    {
      "stem": "A manufacturing plant runs an HMI on an unsupported operating system that the vendor will not patch. The security team cannot replace it this year, so it moves the HMI to an isolated VLAN and restricts all traffic to it with strict ACLs. Which of the following control types best describes these measures?",
      "options": [
        "Corrective",
        "Deterrent",
        "Directive",
        "Detective",
        "Compensating"
      ],
      "answer": "E",
      "explanation": "A compensating control is an alternative safeguard used when the primary control, here patching, cannot be applied. Network isolation and strict ACLs reduce the likelihood that the unpatched vulnerabilities can be reached and exploited. Corrective controls fix problems after an event, deterrent controls discourage attackers, directive controls tell people what to do, and detective controls identify events; none fits as well.",
      "topic": "Vulnerability Management",
      "subtopic": "Explain concepts related to control types, risks, and vulnerability management",
      "difficulty": "easy",
      "source": "CySA+ CS0-004, Vulnerability Management: control types (compensating controls) and legacy system risk"
    },
    {
      "stem": "A company is choosing between agent-based and agentless network-based vulnerability scanning for its endpoint fleet. Which of the following requirements favor an agent-based approach? (Choose TWO.)",
      "options": [
        "Most endpoints are laptops that are frequently off the corporate network",
        "The organization wants to avoid installing any software on endpoints",
        "Assessments must run continuously rather than waiting for a scheduled network scan window",
        "Many targets are network appliances that do not support third-party software",
        "The team needs to discover unknown, unmanaged devices connected to the network"
      ],
      "answer": "AC",
      "explanation": "Agents run locally on the host, so they can assess laptops wherever they are and report results when they reconnect, and they can scan continuously or on their own schedule without depending on network scan windows. Agentless scanning is the better fit when software cannot or should not be installed, such as on network appliances. Agents also cannot find devices that have no agent, so discovering unmanaged devices requires network-based scanning.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, implement the appropriate vulnerability scanning method",
      "difficulty": "hard",
      "source": "CySA+ CS0-004, Vulnerability Management: scanning methods (agent-based vs. agentless)"
    },
    {
      "stem": "Which of the following frameworks provides a knowledge base of adversary tactics and techniques, each with an identifier such as T1059, that analysts can use to map observed attacker behavior?",
      "options": [
        "MITRE ATT&CK",
        "Lockheed Martin Cyber Kill Chain",
        "Diamond Model of Intrusion Analysis",
        "OSSTMM",
        "OWASP Web Security Testing Guide"
      ],
      "answer": "A",
      "explanation": "MITRE ATT&CK is a curated knowledge base of real-world adversary behavior, organized into tactics (the attacker's goals) and techniques with identifiers such as T1059 for Command and Scripting Interpreter. Analysts use it to map detections, find coverage gaps, and describe incidents in a common language. The Cyber Kill Chain describes seven high-level attack stages, the Diamond Model relates four core features of an intrusion, and OSSTMM and the OWASP guide are testing methodologies.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize concepts related to attack methodology frameworks",
      "difficulty": "easy",
      "source": "CySA+ CS0-004, Incident Response and Management: attack methodology frameworks (MITRE ATT&CK)"
    },
    {
      "stem": "During an investigation, an analyst models a phishing campaign using the Diamond Model of Intrusion Analysis. The analyst records the domain names, mail servers, and IP addresses the attacker used to deliver the payload and receive callbacks. Which of the following core features of the model is the analyst documenting?",
      "options": [
        "Adversary",
        "Capability",
        "Infrastructure",
        "Victim"
      ],
      "answer": "C",
      "explanation": "The Diamond Model describes every intrusion event through four core features: adversary, capability, infrastructure, and victim. Infrastructure covers the physical and logical communication structures the adversary uses to deliver capabilities and keep control, such as domains, IP addresses, and mail servers. Capability refers to the tools and techniques, such as the malware itself, while adversary and victim are the attacker and the target.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize concepts related to attack methodology frameworks",
      "difficulty": "medium",
      "source": "CySA+ CS0-004, Incident Response and Management: attack methodology frameworks (Diamond Model of Intrusion Analysis)"
    },
    {
      "stem": "A ransomware outbreak has been contained, the malware has been eradicated, and the affected systems have been restored from verified backups. Monitoring for two weeks shows no sign of recurrence. Which of the following is the next step?",
      "options": [
        "Restore the affected systems again from older backups",
        "Conduct a lessons-learned review and update the response plan",
        "Isolate the affected network segment from the rest of the network",
        "Identify the initial indicators of compromise for the incident",
        "Create forensic images of the affected systems for analysis"
      ],
      "answer": "B",
      "explanation": "Once containment, eradication, and recovery are complete, the incident response life cycle moves to post-incident activity. A lessons-learned review examines what happened, what worked, and what did not, and the results feed back into preparation by updating plans, controls, and training. Isolation, identifying indicators, and imaging belong to earlier phases.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize the incident response process",
      "difficulty": "easy",
      "source": "NIST SP 800-61 incident response life cycle (post-incident activity); CySA+ CS0-004 incident response process"
    },
    {
      "stem": "An incident responder arrives at a running Linux server suspected of compromise and must preserve evidence following the order of volatility. Which of the following should be collected first?",
      "options": [
        "A full forensic image of the system disk",
        "Swap space and temporary file system contents",
        "Logs stored on the central syslog server",
        "Archived backup media for the server",
        "Contents of system memory"
      ],
      "answer": "E",
      "explanation": "The order of volatility says to collect the evidence most likely to change or disappear first. RAM holds running processes, network connections, and decryption keys that are lost or overwritten quickly, so it comes before swap and temporary files, then disk, then remote logs, and finally archival media. Imaging the disk first would give the volatile memory time to change or be lost.",
      "topic": "Incident Response and Management",
      "subtopic": "Given a scenario, implement incident response techniques",
      "difficulty": "medium",
      "source": "RFC 3227 Guidelines for Evidence Collection and Archiving (order of volatility); CySA+ CS0-004 IR techniques"
    },
    {
      "stem": "An EDR alert shows a workstation communicating with a known command-and-control server. The incident response plan requires stopping the communication immediately while preserving volatile evidence for analysis. Which of the following actions should the analyst take? (Choose TWO.)",
      "options": [
        "Power off the workstation immediately",
        "Reimage the workstation from the standard build",
        "Isolate the workstation using the EDR network containment feature",
        "Run a full antivirus scan and delete any detected files",
        "Capture a memory image of the workstation"
      ],
      "answer": "CE",
      "explanation": "EDR network containment cuts the host off from the network, stopping C2 traffic, while leaving the system running so that volatile state is kept. Capturing a memory image then preserves processes, injected code, and network artifacts for analysis. Powering off destroys memory contents, and reimaging or deleting files with antivirus are eradication steps that alter or destroy evidence before it has been collected.",
      "topic": "Incident Response and Management",
      "subtopic": "Given a scenario, implement incident response techniques",
      "difficulty": "hard",
      "source": "CySA+ CS0-004, Incident Response and Management: containment and evidence preservation techniques"
    },
    {
      "stem": "The CISO asks the vulnerability management team to prepare a monthly report for the board of directors. Which of the following would be most appropriate to include?",
      "options": [
        "Risk trends over time, remediation SLA compliance, and top risks in business terms",
        "Raw scanner plugin output for every host, including proof-of-concept evidence",
        "A complete list of every CVE identifier detected, sorted by hostname",
        "Command-line steps for patching each affected operating system version"
      ],
      "answer": "A",
      "explanation": "Reports should be tailored to their audience, and executives need to understand risk posture and trends so they can make decisions about resources and risk acceptance. Trend metrics, compliance with remediation SLAs, and the most significant risks described in business terms serve that purpose. Raw scan output, full CVE lists, and patching steps are technical details meant for system owners and engineers.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of vulnerability management reporting and communication",
      "difficulty": "medium",
      "source": "CySA+ CS0-004, Reporting and Communication: vulnerability management reporting (stakeholders, metrics, trends)"
    },
    {
      "stem": "A SOC manager wants a metric that shows how long, on average, the team takes to contain incidents from the moment they are first identified. Which of the following metrics should the manager report?",
      "options": [
        "Mean time to detect (MTTD)",
        "Mean time between failures (MTBF)",
        "Recovery point objective (RPO)",
        "Mean time to respond (MTTR)",
        "Attacker dwell time"
      ],
      "answer": "D",
      "explanation": "Mean time to respond measures the average time from detection or identification of an incident until the team has contained or resolved it, so it directly reflects response efficiency. Mean time to detect and dwell time measure how long an attacker is present before discovery, which comes before the period being asked about. MTBF is a reliability metric, and RPO defines acceptable data loss for recovery planning.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of security operations and incident response reporting and communication",
      "difficulty": "medium",
      "source": "CySA+ CS0-004, Reporting and Communication: incident response metrics and KPIs (MTTD, MTTR)"
    },
    {
      "stem": "A vulnerability report shows that a critical database server has not been patched for 90 days. The application owner explains that the company's contract with its largest customer guarantees 99.99% availability and imposes financial penalties for any unscheduled downtime. Which of the following inhibitors to remediation is the application owner describing?",
      "options": [
        "Memorandum of understanding",
        "Legacy system",
        "Service-level agreement",
        "Proprietary system",
        "Organizational governance"
      ],
      "answer": "C",
      "explanation": "A service-level agreement is a binding contract that sets measurable commitments such as uptime, often with penalties when they are missed. Such commitments can delay patching because applying fixes requires maintenance windows that may break the agreed availability. A memorandum of understanding is usually a non-binding statement of intent, while legacy and proprietary systems and governance processes are different kinds of inhibitor.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of vulnerability management reporting and communication",
      "difficulty": "medium",
      "source": "CySA+ CS0-004, Reporting and Communication: inhibitors to remediation (SLAs, MOUs, legacy and proprietary systems)"
    }
  ]
}
```
