```json
{
  "format": "domcq/1",
  "exam": "comptia-cysa",
  "set": "CompTIA CySA+ (CS0-004) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A SOC receives hundreds of user-reported phishing emails each day. Analysts manually extract URLs, query reputation services, and purge matching messages from mailboxes. The SOC manager wants these repetitive steps to run automatically according to predefined playbooks. Which of the following should the SOC implement?",
      "options": [
        "A security information and event management platform",
        "A security orchestration, automation, and response platform",
        "A data loss prevention solution for outbound email",
        "A cloud access security broker for email services"
      ],
      "answer": "B",
      "explanation": "SOAR platforms connect to security tools through integrations and run playbooks that automate repeatable tasks such as enrichment, reputation lookups, and quarantine actions. A SIEM's core job is collecting, normalizing, and correlating events to raise alerts, not orchestrating response workflows across tools. Automating routine triage frees analysts for higher-value investigation and improves consistency and response time.",
      "topic": "Security Operations",
      "subtopic": "Explain the importance of efficiency and process improvement in security operations",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Security Operations domain – efficiency and process improvement: automation, SOAR, playbooks"
    },
    {
      "stem": "A network analyst reviewing NetFlow data notices that a workstation opens an outbound HTTPS connection to the same external IP address every 60 seconds. Each connection transfers approximately 300 bytes, and the pattern continues overnight when no user is logged on. Which of the following has most likely occurred?",
      "options": [
        "A bulk data exfiltration transfer",
        "ARP cache poisoning on the local segment",
        "A rogue DHCP server responding to requests",
        "Command-and-control beaconing"
      ],
      "answer": "D",
      "explanation": "Malware that has established command and control typically checks in with its server at a regular interval using small, consistent payloads, and it does so regardless of user activity. Exfiltration would show large or growing outbound volumes rather than tiny fixed-size sessions. ARP poisoning and rogue DHCP are local Layer 2/Layer 3 issues and would not appear as periodic sessions to a single external host.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, analyze indicators of potential malicious activity",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Security Operations domain – network-related indicators: beaconing, irregular peer-to-peer communication"
    },
    {
      "stem": "An analyst reviews the headers of a suspicious email. The From header shows billing@example.com. The Return-Path is bounce@mailer-service.net, and SPF passes for mailer-service.net. The message has no DKIM signature. The example.com domain publishes a DMARC record with p=reject. Which of the following best describes how a receiving server that enforces DMARC will handle this message?",
      "options": [
        "It fails DMARC because the SPF-authenticated domain does not align with the From domain, so it is rejected",
        "It passes DMARC because SPF passed for the envelope sender, so it is delivered to the inbox",
        "It passes DMARC because a missing DKIM signature is ignored whenever SPF passes",
        "It fails SPF because bulk mail services cannot be authorized in SPF records, so it is rejected"
      ],
      "answer": "A",
      "explanation": "DMARC requires that at least one of SPF or DKIM both passes and aligns with the domain in the visible From header. Here SPF passes only for mailer-service.net, which does not align with example.com, and there is no DKIM signature to provide alignment, so DMARC fails. Because the domain owner published p=reject, an enforcing receiver rejects the message.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, use tools to determine malicious activity",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Security Operations domain – email analysis: SPF, DKIM, DMARC; RFC 7489 identifier alignment"
    },
    {
      "stem": "A threat-hunting team begins with the assumption that an adversary is already using stolen credentials to move laterally inside the network. The team then searches authentication logs for unusual logon types and access patterns that would support or refute that assumption. Which of the following best describes this approach?",
      "options": [
        "Signature-based intrusion detection",
        "Credentialed vulnerability scanning",
        "Hypothesis-driven threat hunting",
        "Automated alert triage"
      ],
      "answer": "C",
      "explanation": "Threat hunting is proactive: rather than waiting for alerts, hunters form a hypothesis about adversary behavior, often informed by threat intelligence or frameworks such as ATT&CK, and then look for evidence in their data. The assumption of compromise and the targeted search of authentication logs are the defining features of hypothesis-driven hunting. Signature-based detection and alert triage are reactive, and vulnerability scanning looks for weaknesses, not adversary activity.",
      "topic": "Security Operations",
      "subtopic": "Explain threat intelligence and threat-hunting concepts",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Security Operations domain – threat hunting: establishing a hypothesis, assume breach"
    },
    {
      "stem": "An analyst is reviewing a Windows Server host suspected of compromise. Which of the following findings are indicators of potentially malicious activity? (Choose TWO.)",
      "options": [
        "lsass.exe running as a child process of wininit.exe",
        "svchost.exe executing from C:\\Users\\Public instead of C:\\Windows\\System32",
        "The Windows Update service running under the LocalSystem account",
        "A scheduled task that runs a Base64-encoded PowerShell command at every logon",
        "The DNS Client service caching recently resolved host names"
      ],
      "answer": "BD",
      "explanation": "Legitimate svchost.exe runs only from the System32 directory, so a copy executing from a user-writable folder is a classic sign of masquerading malware. A scheduled task launching encoded PowerShell at logon is a common persistence and obfuscation technique. The other findings describe normal Windows behavior: lsass.exe is spawned by wininit.exe, Windows Update runs as LocalSystem, and the DNS Client service caches lookups by design.",
      "topic": "Security Operations",
      "subtopic": "Given a scenario, analyze indicators of potential malicious activity",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Security Operations domain – host-based indicators: malicious processes, unauthorized scheduled tasks"
    },
    {
      "stem": "A SOC analyst correlating an incident in the SIEM notices that firewall events appear several minutes after the related server authentication events, even though the firewall blocked the connection before the login attempt occurred. Which of the following should be implemented to improve correlation accuracy?",
      "options": [
        "Configure all log sources to synchronize time with a common NTP source",
        "Increase the SIEM's log retention period for firewall events",
        "Enable full packet capture on the perimeter firewall",
        "Forward firewall logs using TCP instead of UDP syslog"
      ],
      "answer": "A",
      "explanation": "SIEM correlation depends on accurate, consistent timestamps across all log sources; if device clocks drift, events are ordered incorrectly and timelines become misleading. Synchronizing every device to a common NTP source fixes the root cause. Retention, packet capture, and transport protocol affect how long or how reliably data is kept, not whether timestamps agree.",
      "topic": "Security Operations",
      "subtopic": "Explain concepts related to system and network architecture in security operations",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Security Operations domain – log ingestion: time synchronization, logging levels"
    },
    {
      "stem": "A SOC uses a generative AI assistant to summarize alerts for analysts. During a review, the team finds that several summaries reference IP addresses and user accounts that do not appear anywhere in the underlying logs. No instructions or unusual text were found in the logs, and the model has not been retrained. Which of the following risks does this finding illustrate?",
      "options": [
        "Prompt injection",
        "Data poisoning",
        "Hallucination",
        "Model inversion"
      ],
      "answer": "C",
      "explanation": "A hallucination occurs when a generative model produces fluent, confident output that is not supported by its input or by fact. Inventing IP addresses and accounts absent from the source logs is exactly that failure. This is why AI-generated summaries in security operations need human validation against the original evidence before they drive decisions.",
      "topic": "Security Operations",
      "subtopic": "Summarize concepts related to the use of AI in security operations",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Security Operations domain – use of AI in security operations: risks and limitations of generative AI"
    },
    {
      "stem": "A quarterly vulnerability scan of Linux servers reports only open ports and service banners. The security team suspects that outdated locally installed packages are not being detected. Which of the following should the analyst configure for future scans?",
      "options": [
        "An external scan from an internet-facing scanner",
        "Credentialed scanning using a dedicated service account",
        "Passive scanning based on observed network traffic",
        "A host discovery scan using ICMP ping sweeps"
      ],
      "answer": "B",
      "explanation": "A non-credentialed scan sees a host only from the network, so it can report open ports and banners but cannot inspect installed packages, patch levels, or local configuration. Credentialed scanning logs in to each host and enumerates installed software directly, producing far more accurate results with fewer false negatives. A dedicated, least-privilege service account should be used and protected.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, implement the appropriate vulnerability scanning method",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Vulnerability Management domain – credentialed vs. non-credentialed scanning"
    },
    {
      "stem": "A vulnerability report lists a finding with the CVSS v3.1 vector CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H. Which of the following best describes this vulnerability?",
      "options": [
        "It requires local access with high privileges and affects only the availability of the host",
        "It is exploitable from an adjacent network but requires a user to open a crafted file",
        "It requires physical access but no privileges, and it changes the scope of the impact",
        "It is exploitable remotely without privileges or user interaction and has high CIA impact"
      ],
      "answer": "D",
      "explanation": "AV:N means the attack vector is the network, AC:L means low attack complexity, PR:N means no privileges are required, and UI:N means no user interaction is needed. S:U indicates the scope is unchanged, and C:H/I:H/A:H indicate high impact to confidentiality, integrity, and availability. This combination yields a base score of 9.8, which is rated Critical.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze data to prioritize and mitigate vulnerabilities",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Vulnerability Management domain – CVSS interpretation; FIRST CVSS v3.1 Specification, base metrics"
    },
    {
      "stem": "An analyst must choose which of two findings to remediate first. Finding 1 has a CVSS base score of 9.1 on a test server that is isolated from all other networks and holds no production data. Finding 2 has a CVSS base score of 7.5 on an internet-facing web server that processes customer payments, and its CVE is listed in CISA's Known Exploited Vulnerabilities catalog. Which of the following should the analyst do?",
      "options": [
        "Remediate Finding 2 first because it is actively exploited and affects an exposed, critical asset",
        "Remediate Finding 1 first because its CVSS base score is higher than that of Finding 2",
        "Remediate both findings together during the next scheduled quarterly patch cycle",
        "Defer both findings until the vendor publishes updated CVSS scores for each CVE"
      ],
      "answer": "A",
      "explanation": "The CVSS base score measures technical severity in isolation; real-world prioritization should also weigh exploitability, exposure, and asset criticality. A vulnerability known to be exploited in the wild on an internet-facing payment server presents far greater actual risk than a higher-scored flaw on an isolated test system. Risk-based prioritization therefore puts Finding 2 first.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze data to prioritize and mitigate vulnerabilities",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Vulnerability Management domain – context awareness, exploitability/weaponization, asset value; CISA KEV catalog"
    },
    {
      "stem": "A manufacturing plant runs a control workstation on an operating system that the vendor no longer supports, and no patches are available for several critical vulnerabilities. The workstation must remain in service. Which of the following are appropriate compensating controls? (Choose TWO.)",
      "options": [
        "Remove the workstation from the scope of future vulnerability scans",
        "Increase the frequency of vulnerability scans against the workstation",
        "Place the workstation on an isolated network segment with restrictive ACLs",
        "Accept the risk informally without documenting a formal exception",
        "Enforce application allow listing so only approved executables can run"
      ],
      "answer": "CE",
      "explanation": "A compensating control reduces risk when the primary control, here patching, cannot be applied. Network segmentation with restrictive ACLs limits who can reach the vulnerable system, and application allow listing prevents unapproved code from executing even if an attacker gets access. Removing the host from scans, scanning more often, or accepting risk without documentation does nothing to reduce the likelihood or impact of exploitation.",
      "topic": "Vulnerability Management",
      "subtopic": "Explain concepts related to control types, risks, and vulnerability management",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Vulnerability Management domain – control types: compensating controls; legacy/end-of-life systems"
    },
    {
      "stem": "An Nmap scan of an internal Windows file server reports 445/tcp open microsoft-ds, and the smb2-security-mode script output states 'Message signing enabled but not required.' Which of the following attacks is the server most susceptible to as a result of this configuration?",
      "options": [
        "DNS zone transfers that reveal internal host records to the attacker",
        "NTLM relay attacks that forward captured authentication to the server",
        "Cross-site scripting attacks against users who browse the file server",
        "SSL stripping attacks that downgrade the server's HTTPS sessions"
      ],
      "answer": "B",
      "explanation": "When SMB signing is not required, an attacker who intercepts or coerces an NTLM authentication attempt can relay it to the server and authenticate as the victim, because the session is not cryptographically bound to the original client. Requiring SMB signing defeats this by ensuring each message is signed with a key the relaying attacker does not possess. The other attacks target DNS, web applications, or HTTPS and are unrelated to SMB signing.",
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze output from vulnerability assessment tools",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Vulnerability Management domain – network scanning and mapping tools: Nmap output analysis"
    },
    {
      "stem": "An attacker researches a company's employees on social media, builds a malicious macro-enabled document, and then emails it to the finance team. In the Lockheed Martin Cyber Kill Chain, which phase is represented by emailing the document to the finance team?",
      "options": [
        "Reconnaissance",
        "Weaponization",
        "Delivery",
        "Exploitation"
      ],
      "answer": "C",
      "explanation": "The Cyber Kill Chain's seven phases are reconnaissance, weaponization, delivery, exploitation, installation, command and control, and actions on objectives. Researching employees is reconnaissance and building the malicious document is weaponization, while transmitting the payload to the target, here by email, is delivery. Exploitation happens only when the macro actually executes on the victim's system.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize concepts related to attack methodology frameworks",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Incident Response and Management domain – attack frameworks: Lockheed Martin Cyber Kill Chain"
    },
    {
      "stem": "While documenting an intrusion using the Diamond Model of Intrusion Analysis, an analyst records the command-and-control domains and the rented virtual private servers that the attacker used. Which core feature of the model do these details describe?",
      "options": [
        "Adversary",
        "Capability",
        "Victim",
        "Infrastructure"
      ],
      "answer": "D",
      "explanation": "The Diamond Model describes every intrusion event with four core features: adversary, capability, infrastructure, and victim. Infrastructure covers the physical and logical communication structures the adversary uses to deliver capabilities and maintain control, such as domains, IP addresses, and servers. Capability refers to the tools and techniques, while adversary and victim describe the attacker and target.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize concepts related to attack methodology frameworks",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Incident Response and Management domain – attack frameworks: Diamond Model of Intrusion Analysis"
    },
    {
      "stem": "During a ransomware incident, the response team isolated the affected hosts, identified the initial access vector, and removed all malware and persistence mechanisms from the environment. Which of the following is the next step?",
      "options": [
        "Restore the affected systems from known-good backups and monitor them closely",
        "Hold a lessons-learned meeting and update the incident response plan",
        "Begin initial detection and analysis to determine the scope of the incident",
        "Develop the incident response policy and train the response team members"
      ],
      "answer": "A",
      "explanation": "Isolating hosts is containment and removing malware and persistence is eradication, so the next activity is recovery: restoring systems to normal operation from trusted backups and monitoring them for signs of reinfection. Lessons learned belongs to post-incident activity, which follows recovery. Detection and analysis came earlier, and policy development and training belong to preparation.",
      "topic": "Incident Response and Management",
      "subtopic": "Summarize the incident response process",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Incident Response and Management domain – IR life cycle: containment, eradication, and recovery; NIST SP 800-61"
    },
    {
      "stem": "A forensic analyst is collecting evidence from a running compromised system and must follow the order of volatility. Which of the following are the two most volatile sources that should be collected before the others? (Choose TWO.)",
      "options": [
        "CPU registers and cache",
        "Data on the local hard disk",
        "Archived backup media",
        "Contents of system memory (RAM)",
        "Logs stored on a remote syslog server",
        "Physical network topology documentation"
      ],
      "answer": "AD",
      "explanation": "The order of volatility directs responders to collect the most short-lived evidence first, because it is lost when the system changes state or loses power. CPU registers and cache change constantly, and RAM contents, which hold running processes, network connections, and decryption keys, disappear at shutdown. Disk data, remote logs, topology, and archival media persist much longer and can be collected afterward.",
      "topic": "Incident Response and Management",
      "subtopic": "Given a scenario, implement incident response techniques",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Incident Response and Management domain – evidence acquisition; RFC 3227 Order of Volatility"
    },
    {
      "stem": "An incident responder confirms that a compromised web server is actively sending data to an external IP address. The team must stop the data transfer while preserving volatile evidence, such as running processes and active network connections, for later analysis. Which of the following is the best action?",
      "options": [
        "Shut down the server immediately to stop all malicious activity",
        "Isolate the server on a quarantine VLAN while keeping it powered on",
        "Reimage the server from a gold image and return it to service",
        "Delete the malicious files identified on the server's local disk"
      ],
      "answer": "B",
      "explanation": "Network isolation is a containment technique that cuts off the attacker's communication path while leaving the system running, so memory, processes, and connection state remain available for forensic capture. Powering off destroys volatile evidence, and reimaging or deleting files destroys evidence and may miss other persistence. Containment decisions should balance stopping damage against preserving evidence.",
      "topic": "Incident Response and Management",
      "subtopic": "Given a scenario, implement incident response techniques",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Incident Response and Management domain – containment techniques: isolation, segmentation; evidence preservation"
    },
    {
      "stem": "A SOC manager wants a metric for the monthly report that shows how long, on average, the team takes to contain and remediate incidents after they are detected. Which of the following metrics should the manager use?",
      "options": [
        "Mean time to detect",
        "Recovery time objective",
        "Mean time to respond",
        "Mean time between failures"
      ],
      "answer": "C",
      "explanation": "Mean time to respond measures the average elapsed time from detection of an incident to its containment and remediation, so it reflects how quickly the team acts once it knows about a problem. Mean time to detect covers the earlier interval from compromise to discovery. Recovery time objective is a business continuity target, and mean time between failures is a reliability measure, not an incident response KPI.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of security operations and incident response reporting and communication",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Reporting and Communication domain – metrics and KPIs: mean time to detect, respond, remediate"
    },
    {
      "stem": "An analyst is preparing a vulnerability management report for the executive leadership team, who will use it to make budget and risk acceptance decisions. Which of the following should the report primarily include?",
      "options": [
        "The complete raw scanner output for every scanned host",
        "Detailed exploit code and proof-of-concept steps for each finding",
        "A list of every plugin ID and CVE detected during the scan",
        "A risk-focused summary of trends, top risks, and remediation status"
      ],
      "answer": "D",
      "explanation": "Reports should be tailored to their audience. Executives need concise, business-oriented information such as overall risk posture, trends over time, the most significant risks, and progress against remediation targets, so they can prioritize resources. Raw output, plugin lists, and exploit details are useful to technical teams but obscure the decisions leadership must make.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of vulnerability management reporting and communication",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Reporting and Communication domain – vulnerability management reporting: stakeholder identification, trends, top risks"
    },
    {
      "stem": "During an incident, the response team confirms that an attacker accessed a database containing customers' personal information. Which of the following stakeholders is primarily responsible for advising the organization on its breach notification obligations?",
      "options": [
        "Legal counsel",
        "Public relations",
        "The help desk",
        "The scanning vendor"
      ],
      "answer": "A",
      "explanation": "Breach notification duties are set by laws, regulations, and contracts that vary by jurisdiction and data type, so legal counsel determines whether, when, and to whom notification is required. Public relations helps craft and deliver external messaging, but only after legal requirements are understood. Involving legal early also helps protect privileged communications during the investigation.",
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of security operations and incident response reporting and communication",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Reporting and Communication domain – incident response communication: stakeholders, legal, regulatory reporting"
    }
  ]
}
```