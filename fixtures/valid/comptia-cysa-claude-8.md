```json
{
  "format": "domcq/1",
  "exam": "comptia-cysa",
  "set": "CompTIA CySA+ (CS0-004) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A SOC analyst reviews firewall logs and finds that a workstation has made an outbound HTTPS connection to the same external IP address exactly every 300 seconds for three days. Each session transfers about 200 bytes. The IP address belongs to a hosting provider the company does not use, and the assigned user has been on leave all week. Which of the following has most likely occurred?",
      "options": [
        "The workstation is checking a vendor server for operating system updates",
        "The workstation is beaconing to a command-and-control server",
        "The workstation is participating in a distributed denial-of-service attack",
        "The workstation is exfiltrating a large database in compressed chunks"
      ],
      "answer": "B",
      "explanation": "Malware on a compromised host commonly beacons to its command-and-control (C2) server at a fixed interval, sending small check-in messages to ask for instructions. The strict periodicity, tiny transfer size, unfamiliar hosting provider and absence of user activity together point to automated C2 traffic rather than legitimate use. Analysts often detect beaconing by looking for regular timing and consistent byte counts in flow or proxy logs.",
      "rationales": {
        "A": "Update checks go to known vendor domains and providers, not to an unrelated hosting provider the company does not use.",
        "B": "Correct: fixed-interval, small, consistent connections to an unknown external host are the classic signature of C2 beaconing.",
        "C": "A DDoS participant would send high volumes of traffic toward a target, not one tiny session every five minutes.",
        "D": "Exfiltrating a large database would show significant outbound volume, not roughly 200 bytes per session."
      },
      "topic": "Security Operations",
      "subtopic": "Given a scenario, analyze indicators of potential malicious activity",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Domain 1: Analyze indicators of potential malicious activity – network-related indicators such as beaconing"
    },
    {
      "stem": "An analyst is reviewing a large packet capture in Wireshark and wants to display only HTTP requests in which a client submitted data to a web server using the POST method. Which of the following display filters should the analyst apply?",
      "options": [
        "http.response.code == 200",
        "tcp.port == 80 && http.response",
        "http.request.method == \"POST\"",
        "http.request.uri contains \"GET\""
      ],
      "answer": "C",
      "explanation": "Wireshark display filters use protocol field names, and the HTTP dissector exposes the request method as http.request.method. Comparing that field to the string POST shows only client requests that used the POST method, regardless of which TCP port carried them. Knowing field-based filters lets an analyst quickly isolate suspicious uploads, form submissions or exfiltration attempts in large captures.",
      "rationales": {
        "A": "This shows server responses with status 200, not client requests, and does not filter by method.",
        "B": "This matches HTTP responses on port 80 only, so it shows server replies rather than POST requests.",
        "C": "Correct: http.request.method is the field holding the HTTP method, so this filter isolates POST requests.",
        "D": "This searches the requested URI for the text GET, which neither checks the method field nor isolates POST requests."
      },
      "topic": "Security Operations",
      "subtopic": "Given a scenario, use tools to determine malicious activity",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Domain 1: Use tools to determine malicious activity – packet capture analysis with Wireshark and tcpdump"
    },
    {
      "stem": "Analysts correlating events in the SIEM notice that timestamps from several Linux servers differ by up to seven minutes from the firewall and domain controller logs, which makes incident timelines unreliable. Which of the following should be implemented to resolve this issue?",
      "options": [
        "Increase the SIEM log retention period",
        "Forward all logs using syslog over TLS",
        "Enable SNMPv3 traps on all servers",
        "Synchronize all devices with a common NTP source"
      ],
      "answer": "D",
      "explanation": "Accurate event correlation depends on every log source sharing a consistent time reference. Configuring all systems to synchronize with the same authoritative Network Time Protocol source removes clock drift, so events from different devices line up in the correct order. Time synchronization is a foundational logging requirement in security operations architecture.",
      "rationales": {
        "A": "Retention controls how long logs are kept; it does nothing to correct clock drift between sources.",
        "B": "TLS protects logs in transit but does not fix inaccurate clocks on the devices that generate them.",
        "C": "SNMP traps report device events and status; they do not synchronize system clocks.",
        "D": "Correct: a common NTP source keeps clocks aligned so events from all devices correlate accurately."
      },
      "topic": "Security Operations",
      "subtopic": "Explain concepts related to system and network architecture in security operations",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Domain 1: System and network architecture – log ingestion, time synchronization and logging levels"
    },
    {
      "stem": "A threat intelligence team must decide which type of indicator to prioritize for detection engineering. The team wants detections that are hardest for an adversary to evade by simply changing its tooling or infrastructure. Which of the following should the team focus on?",
      "options": [
        "The adversary's tactics, techniques, and procedures",
        "The SHA-256 hashes of the adversary's malware samples",
        "The IP addresses of the adversary's staging servers",
        "The domain names registered for the adversary's phishing",
        "The file names used by the adversary's droppers"
      ],
      "answer": "A",
      "explanation": "Hashes, IP addresses, domains and file names are atomic indicators that an attacker can change cheaply by recompiling malware or rotating infrastructure. Tactics, techniques and procedures describe how the adversary operates, and changing that behavior requires far more effort, retraining and retooling. Behavior-based detections mapped to frameworks such as MITRE ATT&CK therefore stay effective longer, a concept often illustrated by the Pyramid of Pain.",
      "rationales": {
        "A": "Correct: TTPs describe adversary behavior, which is costly to change, so detections built on them are the hardest to evade.",
        "B": "Changing a single byte and recompiling produces a new hash, so hash-based detections are trivial to evade.",
        "C": "Attackers can rotate to new IP addresses quickly and cheaply, so this indicator has a short useful life.",
        "D": "New domains are cheap and fast to register, so domain indicators are easy for an adversary to replace.",
        "E": "File names can be changed at will with no effect on the malware's function, making them easy to evade."
      },
      "topic": "Security Operations",
      "subtopic": "Explain threat intelligence and threat-hunting concepts",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Domain 1: Threat intelligence and threat hunting – indicators of compromise vs. TTPs; Pyramid of Pain; MITRE ATT&CK"
    },
    {
      "stem": "A SOC receives several hundred user-reported phishing emails each day. For every report, a tier 1 analyst manually extracts URLs and attachments, checks them against reputation services and then blocks malicious senders. Response times are growing and analysts report fatigue. Which of the following would most improve the efficiency of this process?",
      "options": [
        "Remove the phish-reporting button from the email client",
        "Hire additional tier 1 analysts to work the report queue",
        "Extend the SIEM log retention period to one year",
        "Require users to report suspicious emails by phone",
        "Implement a SOAR playbook to enrich and triage the reports"
      ],
      "answer": "E",
      "explanation": "Security orchestration, automation and response (SOAR) platforms run playbooks that automatically extract indicators, query threat intelligence and reputation sources, and take predefined actions such as blocking a sender. Automating repetitive, well-defined tasks reduces response time and alert fatigue while freeing analysts for work that needs human judgment. Adding headcount or discouraging reports does not fix the underlying manual process.",
      "rationales": {
        "A": "Removing reporting reduces visibility into phishing; it cuts workload by hiding threats rather than improving the process.",
        "B": "More staff may shorten the queue temporarily but keeps a slow manual process and raises cost.",
        "C": "Longer retention helps investigate past events but does not speed up phishing triage.",
        "D": "Phone reporting adds manual effort and loses the message data analysts need for enrichment.",
        "E": "Correct: a SOAR playbook automates repetitive enrichment and response steps, cutting triage time and fatigue."
      },
      "topic": "Security Operations",
      "subtopic": "Explain the importance of efficiency and process improvement in security operations",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Domain 1: Efficiency and process improvement – standardizing processes, automation, SOAR and playbooks"
    },
    {
      "stem": "A SOC manager proposes that analysts paste full incident tickets, including internal hostnames, usernames and customer records, into a free public generative AI chatbot to produce quick summaries for shift handover. Which of the following are the most significant risks of this proposal? (Choose TWO.)",
      "options": [
        "The chatbot may produce plausible but inaccurate summaries that analysts accept without verification",
        "The chatbot will automatically isolate any endpoints that are named in the tickets",
        "Sensitive internal and customer data may be disclosed to and retained by the AI provider",
        "The chatbot will reduce the SIEM's events-per-second ingestion capacity",
        "The chatbot will invalidate the digital certificates used by the ticketing system"
      ],
      "answer": "AC",
      "explanation": "Generative AI models can hallucinate, producing confident but incorrect content, so their output must be validated by a human before it influences decisions. Submitting sensitive data to a public service also risks disclosure, because the provider may store prompts or use them outside the organization's control, which can breach privacy and contractual obligations. Organizations typically address these risks with approved, governed AI tools, data-handling rules and human-in-the-loop review.",
      "rationales": {
        "A": "Correct: AI hallucination can introduce errors into handover notes if analysts do not verify the output.",
        "B": "A public chatbot has no access to the organization's endpoints and cannot take containment actions.",
        "C": "Correct: pasting sensitive data into a public service can expose it to a third party and breach privacy obligations.",
        "D": "Using a separate web chatbot has no effect on the SIEM's ingestion capacity.",
        "E": "Summarizing ticket text does not interact with or revoke the ticketing system's certificates."
      },
      "topic": "Security Operations",
      "subtopic": "Summarize concepts related to the use of AI in security operations",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Domain 1: Use of AI in security operations – risks such as sensitive data leakage and inaccurate output"
    },
    {
      "stem": "During a threat hunt on a Windows Server host, an analyst reviews process creation events. Every executable listed below runs from C:\\Windows\\System32. Which of the following processes requires further investigation?",
      "options": [
        "svchost.exe -k netsvcs with parent process services.exe",
        "svchost.exe with no -k argument and parent process cmd.exe",
        "lsass.exe with parent process wininit.exe",
        "services.exe with parent process wininit.exe",
        "smss.exe with parent process System"
      ],
      "answer": "B",
      "explanation": "Analysts spot masquerading malware by comparing running processes against known-good parent-child relationships. Legitimate svchost.exe instances are started by services.exe and are launched with a -k argument naming a service group, so an svchost.exe spawned from a command shell without that argument is anomalous even when it runs from the expected folder. The other entries match the normal Windows startup hierarchy.",
      "rationales": {
        "A": "This is normal: services.exe launches svchost.exe with -k to host a group of services.",
        "B": "Correct: svchost.exe should be started by services.exe with a -k group, so a cmd.exe parent suggests masquerading.",
        "C": "This is normal: on modern Windows, wininit.exe starts lsass.exe during boot.",
        "D": "This is normal: wininit.exe starts services.exe, the Service Control Manager.",
        "E": "This is normal: the Session Manager, smss.exe, is started by the System process."
      },
      "topic": "Security Operations",
      "subtopic": "Given a scenario, analyze indicators of potential malicious activity",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Domain 1: Host-based indicators – unauthorized processes and abnormal parent-child process relationships"
    },
    {
      "stem": "A vulnerability analyst runs weekly network scans of the company's Linux servers. The scans report very few findings, but the patch management console shows that many installed packages are several versions out of date. Which of the following should the analyst do to improve the accuracy of future scans?",
      "options": [
        "Switch to a passive scan that only monitors network traffic",
        "Limit the scans to externally exposed ports only",
        "Configure the scans to use authenticated credentials",
        "Reduce the scan frequency from weekly to monthly",
        "Disable plugin updates to keep results consistent"
      ],
      "answer": "C",
      "explanation": "An unauthenticated scan sees only what services reveal over the network, such as open ports and banners, so it misses outdated locally installed packages. A credentialed scan logs in to each host and inspects installed package versions and configuration directly, producing far more complete and accurate results. Using a dedicated, least-privilege scanning account keeps this approach secure.",
      "rationales": {
        "A": "Passive scanning observes traffic and sees even less of a host's installed packages than an active scan.",
        "B": "Restricting scope to exposed ports reduces coverage and would find even fewer outdated packages.",
        "C": "Correct: credentialed scans inspect installed software locally, revealing missing patches that network-only scans miss.",
        "D": "Scanning less often reduces visibility and does nothing to improve the accuracy of each scan.",
        "E": "Outdated plugins miss newly published vulnerabilities, making results less accurate rather than more."
      },
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, implement the appropriate vulnerability scanning method",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Domain 2: Vulnerability scanning methods – credentialed vs. non-credentialed, active vs. passive scanning"
    },
    {
      "stem": "An analyst must scan a single server at 10.0.0.5 that blocks ICMP echo requests. The scan must use TCP SYN (half-open) scanning, check all 65,535 TCP ports and identify the versions of running services. Which of the following commands meets these requirements?",
      "options": [
        "nmap -sT -sV -Pn -p 1-1024 10.0.0.5",
        "nmap -sS -sV -sn -p- 10.0.0.5",
        "nmap -sU -sV -Pn -p- 10.0.0.5",
        "nmap -sS -O -Pn -F 10.0.0.5",
        "nmap -sS -sV -Pn -p- 10.0.0.5"
      ],
      "answer": "E",
      "explanation": "In Nmap, -sS performs a TCP SYN scan, -sV probes open ports to determine service versions, -p- scans every port from 1 to 65535, and -Pn skips host discovery so a host that ignores ping is still scanned. Only the combination of all four options satisfies every requirement. Being able to read and build Nmap syntax lets an analyst confirm that a scan will actually collect the intended data.",
      "rationales": {
        "A": "-sT is a full TCP connect scan, and -p 1-1024 covers only the first 1,024 ports.",
        "B": "-sn disables port scanning and performs host discovery only, so no ports or versions would be reported.",
        "C": "-sU performs a UDP scan, not the required TCP SYN scan.",
        "D": "-O performs OS detection rather than service version detection, and -F scans only the 100 most common ports.",
        "E": "Correct: -sS, -sV, -Pn and -p- together give a SYN scan of all ports with version detection, skipping ping."
      },
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze output from vulnerability assessment tools",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Domain 2: Vulnerability assessment tools – network scanning and mapping with Nmap; Nmap reference guide on scan and detection options"
    },
    {
      "stem": "A vulnerability manager has capacity to remediate only one of the following findings this week. Which of the following should be remediated first?",
      "options": [
        "CVSS 7.5 on an internet-facing VPN appliance, listed in the CISA Known Exploited Vulnerabilities catalog",
        "CVSS 9.8 on an air-gapped lab server that holds no production data",
        "CVSS 8.8 on an internal print server, with no public exploit code available",
        "CVSS 6.1 cross-site scripting flaw on an internal wiki behind single sign-on",
        "CVSS 10.0 on a powered-off server that is scheduled for disposal tomorrow"
      ],
      "answer": "A",
      "explanation": "Prioritization should weigh exploitability, exposure and asset context, not just the CVSS base score. A vulnerability that is actively exploited in the wild and sits on an internet-facing perimeter device is the most likely and immediate path to compromise. Isolated, internal or decommissioned assets with higher base scores carry less real-world risk because attackers cannot readily reach them.",
      "rationales": {
        "A": "Correct: active exploitation plus internet exposure on a perimeter device makes this the most urgent real-world risk.",
        "B": "Despite a high score, an air-gapped system with no production data is hard to reach and has limited impact.",
        "C": "An internal print server with no available exploit is less exposed and less likely to be attacked soon.",
        "D": "A moderate XSS flaw on an internal, authenticated wiki is lower in both severity and exposure.",
        "E": "A powered-off server about to be disposed of cannot be reached by attackers and will soon be retired."
      },
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze data to prioritize and mitigate vulnerabilities",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Domain 2: Prioritizing vulnerabilities – CVSS, exploitability and weaponization, asset value, exposure; CISA KEV catalog"
    },
    {
      "stem": "A manufacturing company cannot patch a legacy SCADA workstation because the vendor no longer supports its operating system. To reduce risk, the security team moves the workstation to an isolated network segment and allows only the specific traffic the control process requires. Which of the following best describes this control with respect to the unpatched vulnerability?",
      "options": [
        "Deterrent",
        "Detective",
        "Corrective",
        "Compensating",
        "Directive"
      ],
      "answer": "D",
      "explanation": "A compensating control is an alternative safeguard used when the primary control, in this case applying a patch, cannot be implemented. Segmenting the system and tightly restricting its traffic lowers the likelihood that the vulnerability can be exploited, making up for the missing patch. Compensating controls are common for legacy and operational technology systems that cannot be updated.",
      "rationales": {
        "A": "A deterrent control discourages attackers, such as a warning banner; network isolation does more than discourage.",
        "B": "Detective controls identify events as or after they occur, such as an IDS; segmentation detects nothing.",
        "C": "Corrective controls fix or restore after an incident, such as restoring backups; nothing is being corrected here.",
        "D": "Correct: segmentation is an alternative safeguard used because the primary control, patching, is not possible.",
        "E": "Directive controls instruct behavior, such as policies; this is a technical network restriction."
      },
      "topic": "Vulnerability Management",
      "subtopic": "Explain concepts related to control types, risks, and vulnerability management",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Domain 2: Control types – managerial, operational, technical; preventive, detective, corrective, compensating and others"
    },
    {
      "stem": "A vulnerability scan flags a critical remote code execution vulnerability on a Red Hat Enterprise Linux web server because the reported Apache HTTP Server version matches an affected release. The analyst checks the package changelog and confirms that the vendor backported the security fix into the installed package without changing the upstream version number. Which of the following best describes this finding?",
      "options": [
        "True positive",
        "False positive",
        "True negative",
        "False negative"
      ],
      "answer": "B",
      "explanation": "A false positive occurs when a tool reports a vulnerability that is not actually present. Enterprise Linux vendors often backport security fixes into older package versions, so scanners that rely only on version strings or banners can wrongly flag patched software. Validating findings against package changelogs or vendor advisories keeps teams from wasting remediation effort.",
      "rationales": {
        "A": "A true positive requires the vulnerability to actually be present, but the fix is already installed.",
        "B": "Correct: the scanner reported a vulnerability that is not present because the fix was backported.",
        "C": "A true negative means the scanner correctly reported no issue, but here it wrongly reported one.",
        "D": "A false negative is a real vulnerability the scanner missed, the opposite of an incorrect alert."
      },
      "topic": "Vulnerability Management",
      "subtopic": "Given a scenario, analyze output from vulnerability assessment tools",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Domain 2: Analyzing vulnerability assessment output – validating findings, true/false positives and negatives"
    },
    {
      "stem": "An attacker researches a company's finance staff on social media, builds a spreadsheet containing a malicious macro and then emails the spreadsheet to three accounts payable clerks. Which phase of the Lockheed Martin Cyber Kill Chain does sending the email represent?",
      "options": [
        "Reconnaissance",
        "Weaponization",
        "Delivery",
        "Exploitation",
        "Installation"
      ],
      "answer": "C",
      "explanation": "The delivery phase of the Cyber Kill Chain is the transmission of the weapon to the target, and phishing email is one of the most common delivery vectors. Researching staff is reconnaissance and building the malicious macro is weaponization, both of which come before delivery. Exploitation happens only when the macro actually executes on a victim's system.",
      "rationales": {
        "A": "Reconnaissance was the social media research that happened before the email was sent.",
        "B": "Weaponization was creating the malicious macro, which preceded its transmission.",
        "C": "Correct: sending the weaponized file to the victims is the delivery phase.",
        "D": "Exploitation occurs when the macro runs on a victim's machine, which has not yet happened.",
        "E": "Installation follows exploitation, when malware establishes persistence on the host."
      },
      "topic": "Incident Response and Management",
      "subtopic": "Summarize concepts related to attack methodology frameworks",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Domain 3: Attack methodology frameworks – Lockheed Martin Cyber Kill Chain"
    },
    {
      "stem": "An analyst modeling an intrusion with the Diamond Model of Intrusion Analysis records that the threat actor delivered its payloads from a set of rented virtual private servers and a domain registered with a bulletproof hosting provider. To which core feature of the Diamond Model do these servers and the domain belong?",
      "options": [
        "Capability",
        "Victim",
        "Adversary",
        "Infrastructure"
      ],
      "answer": "D",
      "explanation": "The Diamond Model describes every intrusion event with four core features: adversary, capability, infrastructure and victim. Infrastructure is the physical and logical communication structure the adversary uses to deliver capabilities and maintain control, such as servers, IP addresses and domains. Classifying these items correctly lets analysts pivot from known infrastructure to related activity.",
      "rationales": {
        "A": "Capability refers to the tools and techniques used, such as the malware, not the servers hosting it.",
        "B": "The victim is the targeted organization or asset, not the attacker's hosting resources.",
        "C": "The adversary is the actor behind the attack; the servers are resources that actor uses.",
        "D": "Correct: servers, IP addresses and domains used to deliver and control attacks are infrastructure."
      },
      "topic": "Incident Response and Management",
      "subtopic": "Summarize concepts related to attack methodology frameworks",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Domain 3: Attack methodology frameworks – Diamond Model of Intrusion Analysis"
    },
    {
      "stem": "An incident response team has identified a compromised public web server, disconnected it from the production network and acquired verified forensic images of its disk and memory. Which of the following is the next step?",
      "options": [
        "Restore the server from the most recent backup and return it to production",
        "Hold the lessons-learned meeting with all stakeholders",
        "Update the incident response plan with a new playbook",
        "Reconnect the server to watch for further attacker activity",
        "Remove the malicious artifacts and fix the exploited vulnerability"
      ],
      "answer": "E",
      "explanation": "In the NIST incident response lifecycle, containment, eradication and recovery follow detection and analysis. Isolating the server and preserving evidence complete containment, so the next step is eradication: removing malware, backdoors and unauthorized accounts and fixing the weakness that allowed the compromise. Recovering before eradication risks returning a still-vulnerable or still-infected system to production.",
      "rationales": {
        "A": "Restoring before eradication could reintroduce the same vulnerability or a backdoor present in the backup.",
        "B": "Lessons learned is a post-incident activity that comes after recovery is complete.",
        "C": "Updating plans is part of post-incident improvement, not the next operational step.",
        "D": "Reconnecting a compromised server would undo containment and expose the network to further harm.",
        "E": "Correct: after containment and evidence preservation, eradication removes the threat and closes the entry point."
      },
      "topic": "Incident Response and Management",
      "subtopic": "Summarize the incident response process",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Domain 3: Incident response process – NIST SP 800-61 Rev. 2 lifecycle (containment, eradication and recovery)"
    },
    {
      "stem": "During an investigation, an analyst confirms that an attacker obtained the password hash of the KRBTGT account in an Active Directory domain and has been forging Kerberos ticket-granting tickets (golden tickets) to impersonate any user. Which of the following eradication steps will invalidate the forged tickets?",
      "options": [
        "Reset the passwords of every user account the attacker impersonated",
        "Reboot all domain controllers to clear cached Kerberos tickets",
        "Reset the KRBTGT account password twice, allowing replication between resets",
        "Disable NTLM authentication across the entire domain",
        "Revoke and reissue the domain controllers' TLS certificates"
      ],
      "answer": "C",
      "explanation": "Golden tickets are signed with a key derived from the KRBTGT account's password, so domain controllers accept them for as long as that key remains valid. Because Active Directory honors both the current and the previous KRBTGT keys, the password must be reset twice, with time for replication between resets, to invalidate every ticket signed with the compromised key. Resetting user passwords does not help, because the forged tickets do not depend on user credentials.",
      "rationales": {
        "A": "Golden tickets are signed with the KRBTGT key, not user passwords, so user resets do not invalidate them.",
        "B": "The forged tickets are held by the attacker, and rebooting does not change the key that validates them.",
        "C": "Correct: two KRBTGT resets remove both the current and previous keys, invalidating tickets signed with the stolen hash.",
        "D": "Golden tickets are Kerberos tickets, so disabling NTLM does not stop them.",
        "E": "TLS certificates play no part in signing or validating Kerberos ticket-granting tickets."
      },
      "topic": "Incident Response and Management",
      "subtopic": "Given a scenario, implement incident response techniques",
      "difficulty": "hard",
      "source": "CySA+ CS0-004 Domain 3: Incident response techniques – eradication after credential compromise; Microsoft guidance on resetting the KRBTGT password"
    },
    {
      "stem": "A forensic analyst must create a disk image of a laptop's hard drive seized during an insider threat investigation, and the evidence may later be used in court. Which of the following technical steps should the analyst take to demonstrate that the image is unaltered and matches the original? (Choose TWO.)",
      "options": [
        "Boot the laptop normally to confirm the files are present before imaging",
        "Connect the drive through a hardware write blocker during acquisition",
        "Defragment the drive before imaging to speed up acquisition",
        "Calculate and record cryptographic hashes of the original drive and the image",
        "Run an antivirus scan on the original drive to remove any malware"
      ],
      "answer": "BD",
      "explanation": "A write blocker lets the analyst read the original drive while preventing any writes that would alter the evidence. Generating a cryptographic hash, such as SHA-256, of both the source and the image and showing that the values match proves the copy is an exact, unchanged duplicate. Together with chain-of-custody documentation, these steps support the integrity and admissibility of the evidence.",
      "rationales": {
        "A": "Booting the system writes to the disk, changing timestamps and logs and altering the evidence.",
        "B": "Correct: a write blocker prevents the acquisition process from modifying the original drive.",
        "C": "Defragmenting rewrites data on the disk, destroying unallocated and slack space and altering the evidence.",
        "D": "Correct: matching hashes of the original and the image prove the copy is exact and unaltered.",
        "E": "Antivirus may delete or quarantine files, destroying evidence and modifying the original drive."
      },
      "topic": "Incident Response and Management",
      "subtopic": "Given a scenario, implement incident response techniques",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Domain 3: Incident response techniques – evidence acquisition, write blockers, hashing for integrity validation, chain of custody"
    },
    {
      "stem": "The CISO asks a security analyst to prepare the monthly vulnerability management report for the board of directors. Which of the following should the report primarily contain?",
      "options": [
        "Trends in overall risk exposure, remediation SLA compliance and business impact",
        "A complete list of CVE identifiers with plugin output for every scanned host",
        "Command-line remediation steps for each affected server and application",
        "Scanner configuration settings, plugin versions and scan schedule details"
      ],
      "answer": "A",
      "explanation": "Reports must be tailored to their audience. Executives and board members need a concise view of risk, such as trends, compliance with remediation timelines and potential business impact, so they can make decisions about priorities and resources. Detailed technical data such as per-host findings, remediation commands and scanner settings belongs in reports for system owners and technical teams.",
      "rationales": {
        "A": "Correct: board members need high-level risk trends and business impact to support governance decisions.",
        "B": "Per-host technical findings overwhelm a non-technical audience and suit system owners instead.",
        "C": "Remediation commands are for the administrators performing the fixes, not for the board.",
        "D": "Scanner configuration details matter to the vulnerability team, not to executive decision-makers."
      },
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of vulnerability management reporting and communication",
      "difficulty": "easy",
      "source": "CySA+ CS0-004 Domain 4: Vulnerability management reporting – stakeholder identification and communication, metrics and KPIs"
    },
    {
      "stem": "A SOC manager wants a key performance indicator that shows, on average, how long attackers remain unnoticed, calculated as the time between the start of malicious activity and the point at which the SOC identifies it. Which of the following metrics should the manager track?",
      "options": [
        "Mean time to respond",
        "Recovery time objective",
        "Mean time between failures",
        "Mean time to detect"
      ],
      "answer": "D",
      "explanation": "Mean time to detect (MTTD) averages the interval between when an incident begins and when the security team discovers it, so it directly reflects how long threats go unnoticed. Lowering MTTD reduces attacker dwell time and the damage an intrusion can cause. It is commonly reported alongside mean time to respond and mean time to remediate to show SOC performance.",
      "rationales": {
        "A": "Mean time to respond measures how quickly the team acts after detection, not how long detection takes.",
        "B": "RTO is a business continuity target for how quickly a service must be restored after a disruption.",
        "C": "MTBF measures how reliably hardware or systems run between failures, not detection of attacks.",
        "D": "Correct: MTTD measures the average time from the start of malicious activity to its detection."
      },
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of security operations and incident response reporting and communication",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Domain 4: Incident response reporting and communication – metrics and KPIs such as mean time to detect and respond"
    },
    {
      "stem": "An incident response lead is writing the final report on a ransomware incident. The investigation found that the attacker logged in to the corporate VPN with a user's password that had been exposed in an unrelated third-party breach, and the VPN required only a username and password. The attacker then deployed ransomware to the file servers, and the EDR tool did not alert until encryption began. Which of the following should the report document as the root cause?",
      "options": [
        "Ransomware encrypted the data stored on the corporate file servers",
        "The VPN allowed single-factor logins, so a reused breached password granted access",
        "The EDR tool did not generate an alert until encryption had already started",
        "The attacker encrypted data to extort the organization for a ransom payment"
      ],
      "answer": "B",
      "explanation": "A root cause analysis identifies the underlying condition that, if corrected, would have prevented the incident, rather than its symptoms or later detection failures. Here, the lack of multifactor authentication on the VPN allowed a single compromised password to grant remote access, which enabled everything that followed. Recording the true root cause in the final report drives the most effective corrective action, such as enforcing MFA on remote access.",
      "rationales": {
        "A": "This describes the impact of the incident, not the condition that allowed the attacker in.",
        "B": "Correct: single-factor VPN access is the underlying weakness that let a breached password grant initial access.",
        "C": "The late EDR alert is a detection gap that increased impact, but it did not enable the initial access.",
        "D": "This describes the attacker's motive and objective, not the weakness that made the incident possible."
      },
      "topic": "Reporting and Communication",
      "subtopic": "Explain the importance of security operations and incident response reporting and communication",
      "difficulty": "medium",
      "source": "CySA+ CS0-004 Domain 4: Incident response reporting – root cause analysis, lessons learned and recommendations"
    }
  ]
}
```
