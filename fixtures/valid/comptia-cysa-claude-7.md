```json
{
  "format": "domcq/1",
  "exam": "comptia-cysa",
  "set": "CompTIA CySA+ (CS0-004) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A security analyst reviewing firewall logs notices that a workstation has connected to the same external IP address over HTTPS every 60 seconds for the past three days, sending and receiving only a few hundred bytes each time. The user was not logged in for much of this period. Which of the following is the most likely explanation?",
      "options": [
        "The workstation is the target of an external port scan",
        "The workstation is beaconing to a command-and-control server",
        "The workstation is synchronizing its clock with a time server",
        "The workstation is participating in a volumetric DDoS attack"
      ],
      "answer": "B",
      "explanation": "Beaconing is regular, automated outbound traffic at fixed intervals with small payloads, which is how implanted malware checks in with its command-and-control server for instructions. The strict timing, the small and consistent data size, and the activity while no user was logged in all point to an automated process rather than human browsing. A port scan would be inbound, time synchronization uses NTP over UDP 123 rather than HTTPS, and a DDoS would produce high-volume traffic.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, analyze indicators of potential malicious activity",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 objectives, Security Operations: network-related indicators of malicious activity (beaconing)"
    },
    {
      "stem": "An analyst suspects that malware on a Windows workstation is listening for inbound connections. The analyst wants to use a built-in command to list all listening ports together with the process ID that owns each one. Which of the following commands should the analyst run?",
      "options": [
        "ipconfig /displaydns",
        "arp -a",
        "tracert -d",
        "netstat -ano",
        "route print"
      ],
      "answer": "D",
      "explanation": "The netstat -ano command lists all connections and listening ports (-a), shows addresses and ports numerically (-n), and adds the owning process ID (-o). The PID can then be matched to a process name in Task Manager or with tasklist to identify which program opened the port. The other commands show DNS cache entries, ARP entries, network paths or the routing table, none of which map ports to processes.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, use tools to determine malicious activity",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 objectives, Security Operations: tools to determine malicious activity (host and network command-line tools)"
    },
    {
      "stem": "A threat intelligence report states that a group targeting the organization's industry uses living-off-the-land techniques, including PowerShell with encoded commands. The SOC has no alerts related to this activity. An analyst wants to begin a threat hunt. Which of the following should the analyst do first?",
      "options": [
        "Form a hypothesis that encoded PowerShell is in use and identify the data needed to test it",
        "Block PowerShell on all endpoints through a group policy change",
        "Wait for the SIEM to generate an alert that matches the reported behavior",
        "Submit the indicators from the report to a sandbox for detonation",
        "Reimage every endpoint that has run PowerShell in the last 30 days"
      ],
      "answer": "A",
      "explanation": "Threat hunting is proactive and typically starts with a hypothesis, often derived from threat intelligence, about how an adversary might already be operating in the environment. The hunter then determines which data sources, such as PowerShell script block logs or process creation events, are needed to prove or disprove it. Waiting for alerts is reactive monitoring, and blocking or reimaging are response actions taken without any evidence of compromise.",
      "topic": "Security Operations",
      "subtopic": "Explain threat intelligence and threat-hunting concepts",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Security Operations: threat-hunting concepts (hypothesis, data sources, threat intelligence)"
    },
    {
      "stem": "While correlating events in the SIEM during an investigation, an analyst finds that firewall logs, domain controller logs and web server logs record the same connection at times that differ by several minutes. Which of the following should be implemented to resolve this issue for future investigations?",
      "options": [
        "Increase the SIEM's log retention period",
        "Enable verbose logging on the perimeter firewall",
        "Configure all log sources to synchronize with a common NTP source",
        "Forward logs over TLS instead of plain UDP syslog",
        "Deploy a second SIEM collector for redundancy"
      ],
      "answer": "C",
      "explanation": "Accurate correlation depends on every log source recording events against the same clock, so time synchronization is a core part of log ingestion. Pointing all devices at a common, reliable NTP source keeps timestamps consistent, allowing an event to be traced across systems in the correct order. Retention, verbosity, transport encryption and collector redundancy do not fix clock drift between sources.",
      "topic": "Security Operations",
      "subtopic": "Explain concepts related to system and network architecture in security operations",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Security Operations: system and network architecture (log ingestion, time synchronization)"
    },
    {
      "stem": "A SOC receives several hundred user-reported phishing emails each week. For each one, an analyst manually extracts URLs and attachments, checks them against reputation services, searches for other recipients and closes the ticket if nothing malicious is found. The SOC manager wants to reduce the time spent on this work while keeping results consistent. Which of the following would best achieve this goal?",
      "options": [
        "Hiring additional tier 1 analysts to share the workload",
        "Disabling the phishing-report button in the email client",
        "Lowering the priority of all user-reported phishing tickets",
        "Moving phishing review to a single weekly batch process",
        "Creating a SOAR playbook that automates enrichment and triage"
      ],
      "answer": "E",
      "explanation": "Repetitive, well-defined tasks such as indicator extraction, reputation lookups and recipient searches are ideal candidates for security orchestration, automation and response. A SOAR playbook performs the same steps the same way every time, cutting analyst effort and reducing human error, while escalating only the cases that need judgment. Adding staff does not improve efficiency, and the other options reduce visibility or delay response.",
      "topic": "Security Operations",
      "subtopic": "Explain the importance of efficiency and process improvement in security operations",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Security Operations: efficiency and process improvement (automation, SOAR, playbooks)"
    },
    {
      "stem": "An analyst wants to use a publicly available generative AI chatbot to summarize a large set of raw authentication logs that contain internal hostnames, employee usernames and customer IP addresses. Which of the following is the primary security concern with this approach?",
      "options": [
        "The chatbot may not support the log file's character encoding",
        "Sensitive internal and customer data may be disclosed to a third party",
        "The chatbot may take longer than a manual review of the logs",
        "The chatbot may modify the original log files stored in the SIEM"
      ],
      "answer": "B",
      "explanation": "Data submitted to a public AI service leaves the organization's control and may be stored, logged or used for model training by the provider. Logs containing usernames, internal infrastructure details and customer IP addresses are sensitive and may be covered by privacy obligations, so pasting them into a public tool is a data exposure risk. Organizations address this with acceptable use policies for AI and approved tools that keep data within controlled boundaries.",
      "topic": "Security Operations",
      "subtopic": "Summarize concepts related to the use of AI in security operations",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Security Operations: use of AI in security operations (risks, data privacy, acceptable use)"
    },
    {
      "stem": "An analyst is reviewing the process list of a Windows 10 workstation that triggered an EDR alert. Which of the following processes requires further investigation?",
      "options": [
        "lsass.exe in C:\\Windows\\System32, parent process wininit.exe",
        "svchost.exe in C:\\Windows\\System32, parent process services.exe",
        "services.exe in C:\\Windows\\System32, parent process wininit.exe",
        "svchost.exe in C:\\Users\\Public, parent process winword.exe",
        "smss.exe in C:\\Windows\\System32, parent process System"
      ],
      "answer": "D",
      "explanation": "Legitimate svchost.exe always runs from C:\\Windows\\System32 (or SysWOW64) and is started by services.exe. A copy running from a user-writable folder and spawned by Microsoft Word is a classic sign of a malicious macro dropping malware that masquerades under a trusted process name. The other entries show the normal paths and parent-child relationships for these core Windows processes.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, analyze indicators of potential malicious activity",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 objectives, Security Operations: host-based indicators (unauthorized processes, process masquerading)"
    },
    {
      "stem": "A vulnerability scan of Windows servers returned many findings marked as potential and could not determine installed patch levels or local configuration settings. The scan was run from a network scanning appliance without any account information. Which of the following should the analyst take into consideration for future scans?",
      "options": [
        "Running agent-based scans only on the internet-facing servers",
        "Configuring a credentialed scan that uses a dedicated service account",
        "Replacing the scan with passive monitoring of network traffic",
        "Scheduling the scan to run during peak business hours",
        "Reducing the number of plugins enabled in the scan policy"
      ],
      "answer": "B",
      "explanation": "A non-credentialed scan can only see what a host exposes over the network, so it often has to guess from banners and cannot read the registry, installed patches or local settings. A credentialed scan logs in with an account, typically a dedicated, least-privilege service account, to inspect the system directly, which gives more accurate results with fewer false positives. Passive monitoring and fewer plugins would reduce visibility further.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, implement the appropriate vulnerability scanning method",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Vulnerability Management: scanning methods (credentialed vs. non-credentialed)"
    },
    {
      "stem": "An analyst needs to determine the application name and version running on each open port of a target host. Which of the following Nmap options should the analyst use?",
      "options": [
        "-sV",
        "-sS",
        "-sU",
        "-Pn",
        "-sn"
      ],
      "answer": "A",
      "explanation": "The -sV option enables service and version detection, in which Nmap sends probes to open ports and matches the responses to identify the application and its version. Version information is what lets an analyst map a service to known vulnerabilities. The other options select a TCP SYN scan, a UDP scan, skip host discovery or perform host discovery only without a port scan.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze output from vulnerability assessment tools",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 objectives, Vulnerability Management: vulnerability assessment tools (network scanning and mapping, Nmap)"
    },
    {
      "stem": "A vulnerability manager has limited maintenance time and must choose which finding to remediate first. Which of the following findings should be remediated first?",
      "options": [
        "CVSS 9.8 on a lab server on an air-gapped network, with no known exploit",
        "CVSS 8.8 on an internal web app reachable only by authenticated administrators",
        "CVSS 7.5 on an internet-facing VPN appliance, listed as known exploited by CISA",
        "CVSS 5.3 information disclosure on a single employee workstation"
      ],
      "answer": "C",
      "explanation": "The CVSS base score measures technical severity only, so prioritization must also weigh exposure, exploitability and asset criticality. A vulnerability in the CISA Known Exploited Vulnerabilities catalog is being used by attackers right now, and an internet-facing VPN appliance is reachable by anyone, so the real-world likelihood of compromise is far higher than for the air-gapped or tightly restricted systems. This is why risk-based prioritization can rank a lower base score above a higher one.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze data to prioritize and mitigate vulnerabilities",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 objectives, Vulnerability Management: prioritization (CVSS, exploitability, exposure, asset value)"
    },
    {
      "stem": "A manufacturing plant runs a legacy HMI workstation on an unsupported operating system, and the vendor does not permit it to be patched. Replacement is scheduled for next year. Which of the following should the security team implement to reduce risk until the replacement? (Choose TWO.)",
      "options": [
        "Place the workstation in an isolated network segment with strict ACLs",
        "Remove the workstation from the asset inventory to avoid audit findings",
        "Apply application allow-listing so only approved executables can run",
        "Exclude the workstation from all future vulnerability scanning",
        "Give operators local administrator rights to speed up troubleshooting"
      ],
      "answer": "AC",
      "explanation": "When a vulnerability cannot be remediated directly, compensating controls reduce the risk to an acceptable level. Network segmentation limits who can reach the vulnerable system, and application allow-listing blocks unauthorized code from running even if an attacker reaches it. Hiding the asset or excluding it from scans removes visibility, and granting local admin rights increases the attack surface.",
      "topic": "Vulnerability Management",
      "subtopic": "Explain concepts related to control types, risks, and vulnerability management",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Vulnerability Management: control types (compensating controls), legacy and OT systems"
    },
    {
      "stem": "A vulnerability scanner reports that a Red Hat Enterprise Linux web server is vulnerable to several CVEs because the Apache HTTP Server banner shows a version older than the fixed upstream release. The system administrator confirms that all vendor packages are fully up to date. Which of the following is the most likely reason for these findings?",
      "options": [
        "The scanner has found a zero-day vulnerability the vendor has not patched",
        "The administrator installed packages from an untrusted third-party repository",
        "An attacker has modified the web server banner to hide the real version",
        "The vendor backports security fixes without changing the version number",
        "The scan ran without network access to the web server's listening port"
      ],
      "answer": "D",
      "explanation": "Enterprise Linux vendors such as Red Hat commonly backport security patches into an older package version rather than upgrading to the newer upstream release. A scanner that relies on the version banner will therefore flag CVEs that are already fixed, producing false positives. The analyst can validate this by checking the package changelog or vendor advisory for the CVE, or by using a credentialed, package-aware check.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze data to prioritize and mitigate vulnerabilities",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 objectives, Vulnerability Management: validating findings (true positive, false positive)"
    },
    {
      "stem": "An attacker sends targeted employees an email containing a malicious macro-enabled document. In the Lockheed Martin Cyber Kill Chain, which of the following phases does sending the email represent?",
      "options": [
        "Reconnaissance",
        "Weaponization",
        "Delivery",
        "Exploitation",
        "Installation"
      ],
      "answer": "C",
      "explanation": "In the Cyber Kill Chain, delivery is the transmission of the weapon to the target, and phishing email is one of the most common delivery methods. Creating the malicious document was the earlier weaponization phase, and the macro running on the victim's machine would be exploitation. Mapping activity to phases helps defenders choose where to break the chain, for example with email filtering at delivery.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize concepts related to attack methodology frameworks",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 objectives, Incident Response and Management: attack methodology frameworks (Cyber Kill Chain)"
    },
    {
      "stem": "An analyst is documenting an intrusion using the Diamond Model of Intrusion Analysis. The analyst records the domain names, IP addresses and email accounts the attacker used to deliver malware and control compromised hosts. Which of the following Diamond Model features is the analyst documenting?",
      "options": [
        "Adversary",
        "Capability",
        "Victim",
        "Infrastructure"
      ],
      "answer": "D",
      "explanation": "The Diamond Model describes every intrusion event through four core features: adversary, capability, infrastructure and victim. Infrastructure is the physical or logical communication structure the adversary uses to deliver capabilities and maintain control, such as IP addresses, domains and email accounts. Capability would be the malware or tools themselves, and adversary is the actor behind the activity.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize concepts related to attack methodology frameworks",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Incident Response and Management: attack methodology frameworks (Diamond Model of Intrusion Analysis)"
    },
    {
      "stem": "Following a malware incident, the response team has removed the malware and patched the exploited vulnerability. The team is now restoring affected servers from known-good backups and monitoring them closely before returning them to production. Which of the following incident response activities is the team performing?",
      "options": [
        "Containment",
        "Recovery",
        "Preparation",
        "Detection and analysis",
        "Lessons learned"
      ],
      "answer": "B",
      "explanation": "Recovery is the step after eradication in which systems are restored to normal operation, for example from known-good backups, and closely monitored to confirm the threat does not return. Containment limits the spread of an active incident, and eradication removes the cause, both of which the team has already done. Lessons learned takes place after the incident is closed.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize the incident response process",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Incident Response and Management: IR lifecycle; NIST SP 800-61 containment, eradication and recovery"
    },
    {
      "stem": "A responder is about to collect evidence from a running Linux server that is suspected of compromise. A full disk image will be taken afterward. Following the order of volatility, which of the following should be collected before the disk image? (Choose TWO.)",
      "options": [
        "Contents of system memory",
        "Offsite backup tapes from last month",
        "Logs already forwarded to the central SIEM",
        "Active network connections and running processes",
        "Configuration files stored in the /etc directory"
      ],
      "answer": "AD",
      "explanation": "The order of volatility says to collect evidence that disappears fastest first, because it is lost when the system is shut down or changes state. Memory contents, running processes and active network connections exist only while the system runs, whereas files in /etc are on disk and will be captured in the image. Backups and logs already sent to the SIEM are stored elsewhere and are not at risk on the host.",
      "topic": "Incident Response and Management",
      "subtopic": "Given a scenario, implement incident response techniques",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Incident Response and Management: evidence acquisition, order of volatility (RFC 3227)"
    },
    {
      "stem": "An EDR alert shows that a single workstation is actively encrypting files on several mapped network shares. The incident response plan requires that volatile evidence be preserved whenever possible. Which of the following should the responder do first?",
      "options": [
        "Power off the workstation immediately to stop the encryption",
        "Restore the affected file shares from the most recent backup",
        "Reimage the workstation from the standard corporate image",
        "Run a full antivirus scan on the workstation and wait for results",
        "Use the EDR tool to network-isolate the workstation but leave it powered on"
      ],
      "answer": "E",
      "explanation": "Containment comes first, and EDR network isolation cuts the workstation off from the file shares, which stops further encryption of shared data. Leaving the machine powered on preserves memory, where artifacts such as running processes and possibly encryption keys may reside. Powering off destroys this volatile evidence, and restoring or reimaging before containment risks reinfection and loses evidence.",
      "topic": "Incident Response and Management",
      "subtopic": "Given a scenario, implement incident response techniques",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 objectives, Incident Response and Management: containment techniques (isolation) and evidence preservation"
    },
    {
      "stem": "A vulnerability report shows that a critical finding on a payment processing server has remained open for 90 days. The business owner explains that the patch requires a reboot and that a contract with a major client guarantees 99.99% availability, with penalties for unscheduled downtime. Which of the following best describes this situation in the vulnerability management report?",
      "options": [
        "A false positive that should be removed from future reports",
        "A transfer of the risk to the client under the contract",
        "An inhibitor to remediation caused by a service-level agreement",
        "A compensating control that satisfies the remediation requirement"
      ],
      "answer": "C",
      "explanation": "Inhibitors to remediation are business or technical factors that delay or prevent fixing a vulnerability, and service-level agreements, business process interruption and legacy systems are common examples. Reporting them explicitly lets management see why a finding remains open and decide on options such as a planned maintenance window, compensating controls or formal risk acceptance. The finding is still valid, so it is not a false positive, and the contract does not shift the security risk to the client.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of vulnerability management reporting and communication",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 objectives, Reporting and Communication: vulnerability management reporting (inhibitors to remediation)"
    },
    {
      "stem": "Which of the following documents should define which internal and external stakeholders are notified during a security incident, who is responsible for notifying them and when the notifications must occur?",
      "options": [
        "The incident response communication plan",
        "The acceptable use policy",
        "The vulnerability scanning schedule",
        "The hardware asset inventory"
      ],
      "answer": "A",
      "explanation": "A communication plan, usually part of the incident response plan, sets out the stakeholders, escalation paths, approved spokespeople and timing for notifications to parties such as legal, executives, regulators, customers and the media. Defining this in advance prevents premature or inaccurate disclosure and helps meet regulatory reporting deadlines. The other documents govern user behavior, scanning activity or asset tracking.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of security operations and incident response reporting and communication",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 objectives, Reporting and Communication: incident response communication (stakeholders, communication plan)"
    },
    {
      "stem": "A SOC manager wants to report a metric that shows how long, on average, malicious activity goes unnoticed before the team identifies it. Which of the following metrics should the manager report?",
      "options": [
        "Mean time to remediate",
        "Mean time between failures",
        "Recovery time objective",
        "Mean time to detect",
        "Mean time to respond"
      ],
      "answer": "D",
      "explanation": "Mean time to detect measures the average time between the start of malicious activity and its identification by the security team, so it directly reflects how long attackers go unnoticed. Lowering it limits attacker dwell time and the damage they can do. Mean time to respond and mean time to remediate measure what happens after detection, while MTBF and RTO are reliability and continuity measures.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of security operations and incident response reporting and communication",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 objectives, Reporting and Communication: security operations metrics and KPIs (mean time to detect)"
    }
  ]
}
```