```json
{
  "format": "domcq/1",
  "exam": "comptia-cysa",
  "set": "CompTIA CySA+ (CS0-004) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A SIEM alert shows that a workstation has made outbound HTTPS connections to the same external IP address roughly every 60 seconds, with slight random variation, for the past three days. Each session transfers fewer than 500 bytes, and the destination domain was registered two weeks ago. Which of the following activities has most likely occurred?",
      "options": [
        "Bulk data exfiltration to a cloud storage provider",
        "Command-and-control beaconing from malware on the workstation",
        "A horizontal port scan originating from the workstation",
        "DNS cache poisoning of the workstation's resolver"
      ],
      "answer": "B",
      "explanation": "Regular, small, repeated connections to a single external host are the classic pattern of beaconing, where implanted malware checks in with its command-and-control server for instructions. Malware often adds jitter (random variation) to the interval to evade simple detection, and newly registered domains are a common C2 indicator. Exfiltration would show larger or irregular transfers, and a port scan would touch many ports or hosts rather than one destination.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, analyze indicators of potential malicious activity",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Security Operations: network-related indicators of malicious activity (beaconing, unusual traffic patterns)"
    },
    {
      "stem": "An analyst has a packet capture file from a network tap and needs to follow an individual TCP stream and export a file that was transferred over HTTP for further analysis. Which of the following tools should the analyst use?",
      "options": [
        "Nmap",
        "Nessus",
        "Metasploit",
        "Wireshark"
      ],
      "answer": "D",
      "explanation": "Wireshark is a protocol analyzer that opens packet captures, decodes protocols, can follow TCP streams to reconstruct a full conversation, and can export objects such as files carried over HTTP. Nmap is a network scanner, Nessus is a vulnerability scanner, and Metasploit is an exploitation framework; none of them is designed to analyze existing capture files.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, use tools to determine malicious activity",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Security Operations: tools to determine malicious activity (packet capture, Wireshark, tcpdump)"
    },
    {
      "stem": "An analyst is correlating domain controller authentication logs, firewall logs, and web proxy logs in the SIEM to build an incident timeline. Events that should be sequential appear out of order, with offsets of several minutes between the log sources. Which of the following should be implemented to resolve this issue?",
      "options": [
        "Configure all systems to synchronize time with a common NTP source",
        "Increase the retention period for logs stored in the SIEM",
        "Enable compression on the log forwarders",
        "Change the syslog transport from UDP to TCP"
      ],
      "answer": "A",
      "explanation": "Accurate correlation depends on every log source stamping events with a consistent, accurate time, so clock drift between systems produces timelines that are out of order. Synchronizing all devices to a common, trusted Network Time Protocol source removes the drift. Retention, compression, and transport reliability affect how long or whether logs arrive, not the timestamps they carry.",
      "topic": "Security Operations",
      "subtopic": "Explain concepts related to system and network architecture in security operations",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Security Operations: system and network architecture, log ingestion and time synchronization"
    },
    {
      "stem": "A threat intelligence team wants to focus its detection engineering on the type of indicator that imposes the greatest cost on an adversary when it is detected and blocked. Which of the following should the team prioritize?",
      "options": [
        "File hash values of known malware samples",
        "IP addresses of known attacker infrastructure",
        "The adversary's tactics, techniques, and procedures",
        "Domain names used in previous campaigns"
      ],
      "answer": "C",
      "explanation": "Hashes, IP addresses, and domains are trivial for an attacker to change by recompiling malware or moving infrastructure, so blocking them causes little lasting disruption. Tactics, techniques, and procedures describe how the adversary actually operates, and detecting behavior forces them to change their methods, which is costly and slow. This idea is often illustrated by the Pyramid of Pain, with TTPs at the top.",
      "topic": "Security Operations",
      "subtopic": "Explain threat intelligence and threat-hunting concepts",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Security Operations: threat intelligence concepts, indicators of compromise vs. TTPs"
    },
    {
      "stem": "SOC analysts spend most of each shift manually copying URLs and attachment hashes from user-reported phishing emails into several reputation services, then closing the alerts that are clean. Leadership wants to reduce analyst workload without reducing detection coverage. Which of the following is the best solution?",
      "options": [
        "Raise the SIEM threshold so that fewer phishing alerts are generated",
        "Stop accepting user-reported phishing emails during peak hours",
        "Assign phishing triage exclusively to the most senior analysts",
        "Lengthen the service-level agreement for phishing report handling",
        "Implement a SOAR playbook that automates enrichment and initial triage"
      ],
      "answer": "E",
      "explanation": "Security orchestration, automation, and response (SOAR) platforms run playbooks that perform repetitive, well-defined tasks such as querying reputation services and closing clearly benign alerts. This frees analysts for work that needs human judgment while keeping every alert evaluated. Raising thresholds or refusing reports reduces workload only by reducing coverage, and reassigning or extending deadlines does not remove the manual effort.",
      "topic": "Security Operations",
      "subtopic": "Explain the importance of efficiency and process improvement in security operations",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Security Operations: efficiency and process improvement, automation and SOAR"
    },
    {
      "stem": "A SOC manager is considering allowing analysts to paste raw incident data, including log excerpts with usernames and internal hostnames, into a public generative AI chatbot to produce incident summaries. Which of the following is the primary risk the manager should address before approving this practice?",
      "options": [
        "Model drift reducing the accuracy of the SIEM's correlation rules",
        "Disclosure of sensitive internal data to a third-party service",
        "Increased log storage costs in the SIEM",
        "Loss of network connectivity to the chatbot during an incident"
      ],
      "answer": "B",
      "explanation": "Data entered into a public AI service leaves the organization's control and may be retained, logged, or used by the provider, so pasting usernames and internal hostnames exposes sensitive information. Before adopting such a tool, the organization needs a policy and an approved service with suitable data-handling terms, or must sanitize the data first. The other options are unrelated to sending data to an external AI service.",
      "topic": "Security Operations",
      "subtopic": "Summarize concepts related to the use of AI in security operations",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Security Operations: use of AI in security operations, risks of data exposure"
    },
    {
      "stem": "An analyst reviews a process listing from a Windows server suspected of compromise. Which of the following processes require further investigation? Choose TWO.",
      "options": [
        "powershell.exe with the -EncodedCommand argument, spawned by winword.exe",
        "lsass.exe running from C:\\Windows\\System32 with wininit.exe as its parent",
        "svchost.exe running from C:\\Users\\Public",
        "explorer.exe running under the interactive user's account",
        "services.exe running from C:\\Windows\\System32 with wininit.exe as its parent"
      ],
      "answer": "AC",
      "explanation": "A Word process launching PowerShell with an encoded command is a common sign of a malicious macro executing an obfuscated payload. The legitimate svchost.exe runs only from C:\\Windows\\System32 (or SysWOW64), so a copy in a user-writable folder is likely malware masquerading as a system process. lsass.exe and services.exe are normally children of wininit.exe in System32, and explorer.exe normally runs as the logged-on user, so those entries are expected.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, analyze indicators of potential malicious activity",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Security Operations: host-based indicators (unauthorized processes, abnormal parent-child relationships)"
    },
    {
      "stem": "A vulnerability scan of several Linux servers returned only open ports and service banners. A system administrator confirms that the servers are missing several operating system patches that the scan did not report. Which of the following should the analyst take into consideration for future scans?",
      "options": [
        "Run the scan from a network segment outside the firewall",
        "Increase the network timeout values in the scan policy",
        "Switch to a passive scanning approach",
        "Configure the scanner to perform credentialed scans"
      ],
      "answer": "D",
      "explanation": "A non-credentialed scan sees a host only from the network, so it can report open ports and banners but usually cannot inspect installed packages and patch levels. A credentialed scan logs in to the host and enumerates installed software and configuration, which reveals missing patches and reduces false negatives. Scanning from outside the firewall or passively would give even less visibility into the host.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, implement the appropriate vulnerability scanning method",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Vulnerability Management: credentialed vs. non-credentialed scanning"
    },
    {
      "stem": "A vulnerability report lists a flaw with the CVSS v3.1 vector AV:L/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H. Which of the following statements best describes this vulnerability?",
      "options": [
        "An attacker with local access and low privileges can exploit it without user interaction, and the impact can extend beyond the vulnerable component.",
        "An attacker with network access and no privileges can exploit it without user interaction, and the impact is limited to the vulnerable component.",
        "An attacker with local access must trick a user into acting, and the impact is limited to the vulnerable component.",
        "An attacker with physical access and high privileges can exploit it, and the impact can extend beyond the vulnerable component."
      ],
      "answer": "A",
      "explanation": "In CVSS v3.1, AV:L means the attack vector is local, PR:L means low privileges are required, and UI:N means no user interaction is needed. S:C indicates a changed scope, meaning a successful exploit can affect resources beyond the security authority of the vulnerable component, such as escaping a container or virtual machine. C:H/I:H/A:H indicates high impact to confidentiality, integrity, and availability.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze output from vulnerability assessment tools",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Vulnerability Management: CVSS base metrics and vector interpretation"
    },
    {
      "stem": "A vulnerability manager has capacity to remediate only one finding this week. Which of the following findings should be remediated first?",
      "options": [
        "A CVSS 9.8 remote code execution flaw on a lab server that is powered off and disconnected from all networks",
        "A CVSS 8.1 privilege escalation flaw on an internal workstation where application allow listing blocks the known exploit",
        "A CVSS 7.5 flaw on an internet-facing web server that is listed in the CISA Known Exploited Vulnerabilities catalog",
        "A CVSS 5.3 information disclosure flaw on an internal test database that contains only synthetic data"
      ],
      "answer": "C",
      "explanation": "Prioritization should weigh exploitability and exposure in the organization's context, not just the CVSS base score. A vulnerability that is being actively exploited in the wild, as shown by the KEV catalog, on an internet-facing system has the highest real-world likelihood of compromise. The higher-scoring flaws are on an isolated system or are mitigated by a compensating control, which lowers their practical risk.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze data to prioritize and mitigate vulnerabilities",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Vulnerability Management: prioritization factors (exploitability, exposure, asset context, compensating controls)"
    },
    {
      "stem": "A manufacturing company runs a legacy controller that cannot be patched because the vendor no longer supports it. Until the system can be replaced, the security team places the controller on an isolated VLAN and restricts access with strict ACLs. Which of the following control types best describes this measure?",
      "options": [
        "Corrective",
        "Compensating",
        "Deterrent",
        "Directive"
      ],
      "answer": "B",
      "explanation": "A compensating control is an alternative safeguard used when the primary control, here patching, cannot be applied. Network isolation and strict access control lists reduce the likelihood that the unpatched weakness can be reached and exploited. Corrective controls fix problems after an event, deterrent controls discourage attempts, and directive controls instruct people through policy or procedure.",
      "topic": "Vulnerability Management",
      "subtopic": "Explain concepts related to control types, risks, and vulnerability management",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Vulnerability Management: control types (compensating controls)"
    },
    {
      "stem": "A dynamic application security test confirms that a web application's login form is vulnerable to SQL injection. Which of the following are the most effective remediations? Choose TWO.",
      "options": [
        "Encode all output with HTML entities before rendering it",
        "Use parameterized queries for all database access",
        "Require TLS 1.3 for all connections to the login page",
        "Validate input on the server side against an allow list",
        "Shorten the session timeout for authenticated users"
      ],
      "answer": "BD",
      "explanation": "Parameterized queries (prepared statements) keep user input separate from the SQL command, so input is always treated as data and cannot change the query's structure. Server-side input validation against an allow list adds defense in depth by rejecting unexpected characters and formats before they reach the database layer. Output encoding mainly prevents cross-site scripting, and TLS and session timeouts do not affect how the application builds its queries.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze data to prioritize and mitigate vulnerabilities",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Vulnerability Management: mitigating common vulnerabilities (injection flaws, secure coding practices)"
    },
    {
      "stem": "A threat-hunting team wants to map observed adversary behavior to a publicly available knowledge base of tactics and techniques that is based on real-world observations and organized as matrices for enterprise, mobile, and ICS environments. Which of the following should the team use?",
      "options": [
        "MITRE ATT&CK",
        "Cyber Kill Chain",
        "Diamond Model of Intrusion Analysis",
        "OWASP Testing Guide"
      ],
      "answer": "A",
      "explanation": "MITRE ATT&CK is a curated knowledge base of adversary tactics (the why) and techniques (the how), built from real-world observations and published as matrices for Enterprise, Mobile, and ICS. The Cyber Kill Chain describes a sequence of intrusion phases, and the Diamond Model relates adversary, capability, infrastructure, and victim, but neither catalogs techniques in matrices. The OWASP Testing Guide is a web application testing methodology.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize concepts related to attack methodology frameworks",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Incident Response and Management: attack methodology frameworks (MITRE ATT&CK)"
    },
    {
      "stem": "During an investigation, an analyst determines that a phishing campaign used a specific set of domains and rented VPS hosts for command and control. When modeling the intrusion with the Diamond Model of Intrusion Analysis, which of the following core features do these domains and hosts represent?",
      "options": [
        "Adversary",
        "Capability",
        "Infrastructure",
        "Victim"
      ],
      "answer": "C",
      "explanation": "The Diamond Model describes every intrusion event with four core features: adversary, capability, infrastructure, and victim. Infrastructure is the physical or logical communication structure the adversary uses to deliver capabilities and maintain control, such as domains, IP addresses, and servers. The capability would be the malware or tools, and the adversary is the actor behind the campaign.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize concepts related to attack methodology frameworks",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Incident Response and Management: attack methodology frameworks (Diamond Model of Intrusion Analysis)"
    },
    {
      "stem": "An incident response team has contained a ransomware outbreak, removed the malware, and restored the affected systems to normal operation. Which of the following is the next step?",
      "options": [
        "Begin the detection and analysis phase for the outbreak",
        "Isolate the affected systems from the network",
        "Acquire memory images from the affected systems",
        "Conduct a lessons-learned review and update the incident response plan"
      ],
      "answer": "D",
      "explanation": "After containment, eradication, and recovery, the incident response life cycle moves into post-incident activity. The lessons-learned review identifies what worked, what failed, and the root cause, and its findings feed back into updated plans, controls, and preparation. Detection, isolation, and memory acquisition belong to earlier phases that the team has already completed.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize the incident response process",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Incident Response and Management: incident response life cycle, post-incident activity (NIST SP 800-61)"
    },
    {
      "stem": "During incident response on a running Linux server, an analyst must collect evidence before the system is shut down. Following the order of volatility, which of the following should be collected first?",
      "options": [
        "A bit-for-bit image of the hard drive",
        "The contents of system memory",
        "Logs stored on the central syslog server",
        "Archived backup tapes for the server"
      ],
      "answer": "B",
      "explanation": "The order of volatility directs responders to collect the evidence most likely to be lost first. System memory holds running processes, network connections, and decrypted data that disappear when the system is powered off, so it is captured before persistent storage. Disk images, remote logs, and archival media survive a shutdown and can be collected afterward.",
      "topic": "Incident Response and Management",
      "subtopic": "Given a scenario, implement incident response techniques",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Incident Response and Management: evidence acquisition, order of volatility (RFC 3227)"
    },
    {
      "stem": "During an incident, analysts confirm that an attacker obtained a copy of the NTDS.dit file from a domain controller and used pass-the-hash to move laterally. The malware has been removed from all known affected hosts. Which of the following is the most important action before the team declares eradication complete?",
      "options": [
        "Reset the KRBTGT account password twice and rotate all privileged account credentials",
        "Block the attacker's known command-and-control IP addresses at the perimeter firewall",
        "Run a full antivirus scan on every domain-joined workstation",
        "Increase the minimum password length in the domain password policy"
      ],
      "answer": "A",
      "explanation": "NTDS.dit contains password hashes for every domain account, including KRBTGT, whose hash lets an attacker forge Kerberos tickets (golden tickets) and keep access even after malware is removed. Active Directory accepts both the current and previous KRBTGT password, so it must be reset twice, with replication in between, to invalidate forged tickets, and other exposed credentials must also be rotated. Blocking IP addresses or scanning for malware does not remove credential-based persistence.",
      "topic": "Incident Response and Management",
      "subtopic": "Given a scenario, implement incident response techniques",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Incident Response and Management: eradication and recovery, credential compromise remediation"
    },
    {
      "stem": "A SOC manager wants a metric for the monthly report that shows the average time between when malicious activity begins and when the SOC identifies it. Which of the following metrics should be reported?",
      "options": [
        "Mean time to respond",
        "Mean time to remediate",
        "Mean time to detect",
        "Mean time between failures"
      ],
      "answer": "C",
      "explanation": "Mean time to detect (MTTD) measures how long, on average, malicious activity goes unnoticed before the security team identifies it. Mean time to respond covers the period from detection to the start of response actions, and mean time to remediate covers fixing the issue. Mean time between failures is a reliability metric for hardware and systems, not a security operations measure.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of security operations and incident response reporting and communication",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Reporting and Communication: security operations metrics and KPIs (MTTD, MTTR)"
    },
    {
      "stem": "An analyst is drafting an incident report that will be presented to the board of directors. Which of the following is most appropriate to include in the report's executive summary?",
      "options": [
        "A complete list of indicators of compromise, including hashes and IP addresses",
        "A command-by-command timeline of the attacker's actions on each host",
        "Raw log excerpts that show the initial access event in detail",
        "A concise statement of business impact, root cause, and recommended actions"
      ],
      "answer": "D",
      "explanation": "An executive summary is written for decision-makers who need to understand what happened, how it affects the business, and what they are being asked to approve. Technical details such as indicators, command timelines, and log excerpts belong in the body or appendices for technical audiences. Tailoring content to the audience is a core principle of incident reporting and communication.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of security operations and incident response reporting and communication",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Reporting and Communication: incident reports, executive summary and audience"
    },
    {
      "stem": "A vulnerability management report shows that several critical findings on a production line's control systems have remained open for months. Which of the following are examples of inhibitors to remediation that the report should explain to stakeholders? Choose TWO.",
      "options": [
        "Credentialed scanning of the production servers",
        "An up-to-date hardware and software asset inventory",
        "Business process interruption caused by required downtime",
        "Automated patch deployment through configuration management",
        "Proprietary systems that the vendor does not allow customers to modify"
      ],
      "answer": "CE",
      "explanation": "Inhibitors to remediation are factors that prevent or delay fixing known vulnerabilities, such as the need to halt critical business processes for patching and proprietary systems that customers cannot change without vendor approval. Reporting them explains why risk remains open and supports decisions on compensating controls or exceptions. Credentialed scanning, accurate inventories, and automated patching support remediation rather than inhibit it.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of vulnerability management reporting and communication",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Reporting and Communication: vulnerability management reporting, inhibitors to remediation"
    }
  ]
}
```