```json
{
  "format": "domcq/1",
  "exam": "comptia-aplus-core2",
  "set": "CompTIA A+ Core 2 (220-1202) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A macOS user wants all data on the laptop's startup disk to be encrypted so that it cannot be read if the laptop is stolen. Which of the following built-in features should a technician enable?",
      "options": [
        "Keychain",
        "FileVault",
        "Gatekeeper",
        "Time Machine"
      ],
      "answer": "B",
      "explanation": "FileVault is the full-disk encryption feature built into macOS. It encrypts the entire startup volume, so the data cannot be read without the user's login password or the recovery key. Keychain stores passwords and certificates, Gatekeeper controls which downloaded apps are allowed to run, and Time Machine is the built-in backup tool, so none of them protects the contents of a stolen disk.",
      "topic": "Operating Systems",
      "subtopic": "Explain common features and tools of the macOS/desktop operating system",
      "difficulty": "easy",
      "source": "220-1202 Objective 1.8 – macOS features and tools: FileVault"
    },
    {
      "stem": "A user needs to format a 256 GB USB flash drive so that it can be read and written natively by both Windows and macOS computers. Some of the files to be stored on it are larger than 4 GB. Which of the following file systems should the technician use?",
      "options": [
        "FAT32",
        "NTFS",
        "ext4",
        "exFAT"
      ],
      "answer": "D",
      "explanation": "exFAT can be read and written natively by both Windows and macOS, and it has no practical 4 GB per-file limit, which makes it the usual choice for large removable flash media shared between platforms. FAT32 is also cross-platform but cannot store a single file of 4 GB or larger. macOS can read NTFS but cannot write to it without third-party software, and ext4 is a Linux file system that neither Windows nor macOS supports natively.",
      "topic": "Operating Systems",
      "subtopic": "Explain common operating system (OS) types and their purposes",
      "difficulty": "easy",
      "source": "220-1202 Objective 1.1 – Filesystem types: exFAT, FAT32, NTFS, ext4"
    },
    {
      "stem": "A user's home office PC runs Windows 11 Home. The user wants to connect to this PC from a work laptop using the built-in Remote Desktop Connection client, but the setting that allows incoming Remote Desktop connections is not available on the home office PC. Which of the following is the best approach in this scenario?",
      "options": [
        "Upgrade the home office PC to Windows 11 Pro",
        "Install the Windows 11 N edition on the PC",
        "Open TCP port 3389 in Windows Defender Firewall",
        "Add the user to the Remote Desktop Users group"
      ],
      "answer": "A",
      "explanation": "Windows Home editions include the Remote Desktop client but cannot act as a Remote Desktop host, so they cannot accept incoming RDP connections. Pro, Enterprise and Education editions include the host feature, so an in-place edition upgrade to Pro adds the capability while keeping the user's files and apps. Opening port 3389 or changing group membership cannot add a feature the edition lacks, and N editions differ only by omitting certain media components.",
      "topic": "Operating Systems",
      "subtopic": "Compare and contrast basic features of Microsoft Windows editions",
      "difficulty": "medium",
      "source": "220-1202 Objective 1.3 – Windows edition feature differences: availability of Remote Desktop Protocol (RDP)"
    },
    {
      "stem": "A technician is attempting to install Windows 11 on a desktop PC that has a 64-bit processor on Microsoft's supported CPU list, 16 GB of RAM and a 1 TB SSD. Setup reports that the PC does not meet the system requirements. In the firmware setup, the technician sees that the PC is configured for legacy BIOS (CSM) boot mode and that the motherboard's firmware TPM 2.0 is disabled. Which of the following should the technician do so that Windows 11 can be installed? Choose TWO.",
      "options": [
        "Install additional RAM to meet the minimum requirement",
        "Enable the firmware TPM 2.0 in the UEFI/BIOS setup",
        "Run the 32-bit version of Windows 11 Setup instead",
        "Change the firmware boot mode from legacy BIOS to UEFI"
      ],
      "answer": "BD",
      "explanation": "Windows 11 requires a 64-bit processor, at least 4 GB of RAM and 64 GB of storage, UEFI firmware that is Secure Boot capable, and TPM version 2.0. This PC already exceeds the CPU, memory and storage minimums, so the failed check comes from the legacy BIOS (CSM) boot mode and the disabled TPM. Switching to UEFI mode (the installer then uses a GPT-partitioned disk) and enabling the firmware TPM (often called fTPM or Intel PTT) resolve both problems, and there is no 32-bit edition of Windows 11.",
      "topic": "Operating Systems",
      "subtopic": "Given a scenario, perform OS installations and upgrades in a diverse environment",
      "difficulty": "hard",
      "source": "220-1202 Objective 1.2 – OS installations and upgrades; Windows 11 hardware requirements (UEFI, Secure Boot, TPM 2.0)"
    },
    {
      "stem": "A user reports that a Windows workstation becomes slow at unpredictable times during the day. A technician wants to record processor, memory and disk counters continuously over the next 48 hours and review the collected data afterward. Which of the following tools should the technician use?",
      "options": [
        "Task Manager",
        "Resource Monitor",
        "Performance Monitor",
        "System Information"
      ],
      "answer": "C",
      "explanation": "Performance Monitor (perfmon.msc) can use data collector sets to log selected counters, such as processor time, available memory and disk queue length, to a file over a set period, and the log can be opened later as a graph or report. Task Manager and Resource Monitor show live activity and do not keep a long-term record. System Information (msinfo32) reports static hardware and software configuration rather than performance over time.",
      "topic": "Operating Systems",
      "subtopic": "Given a scenario, use Microsoft Windows operating system features and tools",
      "difficulty": "medium",
      "source": "220-1202 Objective 1.4 – Windows features and tools: Performance Monitor (perfmon.msc)"
    },
    {
      "stem": "A Linux administrator creates a script named backup.sh. The file's owner must be able to read, write and execute it, members of the file's group must be able to read and execute it, and all other users must have no access. Which of the following commands should the administrator run?",
      "options": [
        "chmod 755 backup.sh",
        "chmod 750 backup.sh",
        "chmod 640 backup.sh",
        "chmod 570 backup.sh"
      ],
      "answer": "B",
      "explanation": "Linux octal permissions use one digit each for the owner, the group and others, where read = 4, write = 2 and execute = 1. Owner rwx is 4+2+1 = 7, group r-x is 4+1 = 5, and others with no access is 0, which gives chmod 750. 755 would let all other users read and execute the script, 640 removes execute permission entirely, and 570 reverses the owner and group rights.",
      "topic": "Operating Systems",
      "subtopic": "Identify common features and tools of the Linux client/desktop operating system",
      "difficulty": "medium",
      "source": "220-1202 Objective 1.9 – Linux commands: chmod (file permissions)"
    },
    {
      "stem": "An unauthorized person waits near a badge-controlled entrance and, without the employee noticing, slips through the door behind an employee before it closes. Which of the following describes this attack?",
      "options": [
        "Shoulder surfing",
        "Dumpster diving",
        "Impersonation",
        "Tailgating"
      ],
      "answer": "D",
      "explanation": "Tailgating is a physical social engineering attack in which an unauthorized person follows an authorized person through a secured entrance without that person's knowledge. It defeats badge systems because only one valid credential is used to open the door, which is why access control vestibules, guards and staff awareness training are used against it. Shoulder surfing is watching someone's screen or keypad, dumpster diving is searching discarded material, and impersonation is pretending to be someone else.",
      "topic": "Security",
      "subtopic": "Compare and contrast common social engineering attacks, threats, and vulnerabilities",
      "difficulty": "easy",
      "source": "220-1202 Objective 2.5 – Social engineering: tailgating"
    },
    {
      "stem": "A small business is replacing an older wireless network that used WPA2-Personal. The owner wants the new network to resist offline dictionary attacks against the shared passphrase. Which of the following features of WPA3-Personal addresses this requirement?",
      "options": [
        "Simultaneous Authentication of Equals (SAE)",
        "Temporal Key Integrity Protocol (TKIP)",
        "Wi-Fi Protected Setup (WPS)",
        "Extensible Authentication Protocol (EAP)"
      ],
      "answer": "A",
      "explanation": "WPA3-Personal replaces the WPA2 pre-shared key handshake with Simultaneous Authentication of Equals (SAE), a password-authenticated key exchange. With WPA2-Personal, an attacker who captures the four-way handshake can test passphrase guesses offline, but with SAE each guess requires a live exchange with the access point, and SAE also provides forward secrecy. TKIP is a deprecated WPA cipher, WPS is a convenience setup feature with known weaknesses, and EAP is used for enterprise authentication with a RADIUS server rather than a shared passphrase.",
      "topic": "Security",
      "subtopic": "Compare and contrast wireless security protocols and authentication methods",
      "difficulty": "medium",
      "source": "220-1202 Objective 2.3 – Wireless security protocols: WPA2 vs. WPA3"
    },
    {
      "stem": "A user reports that a desktop PC's fans run loudly even when no applications are open. A technician finds an unfamiliar process that consumes more than 90% of the CPU and GPU at all times and makes constant outbound network connections. No files have been encrypted, and no pop-up advertisements appear. Which of the following types of malware is most likely present?",
      "options": [
        "Ransomware",
        "Adware",
        "Keylogger",
        "Cryptominer"
      ],
      "answer": "D",
      "explanation": "A cryptominer secretly uses the victim's CPU and GPU to mine cryptocurrency for the attacker, so its typical symptoms are constant high processor and graphics usage, heat, loud fans and network traffic to mining pools. Ransomware would encrypt files and demand payment, adware would display unwanted advertisements, and a keylogger records keystrokes quietly with little visible resource use.",
      "topic": "Security",
      "subtopic": "Summarize types of malware and tools/methods for detection, removal, and prevention",
      "difficulty": "medium",
      "source": "220-1202 Objective 2.4 – Malware types: cryptominers"
    },
    {
      "stem": "A technician is setting up a new wireless router for a small office. Which of the following should the technician do to improve the security of the router's configuration? Choose TWO.",
      "options": [
        "Change the default administrator password",
        "Enable Universal Plug and Play (UPnP)",
        "Disable Wi-Fi Protected Setup (WPS)",
        "Configure WPA2 encryption using TKIP"
      ],
      "answer": "AC",
      "explanation": "Default router administrator credentials are published in manuals and online, so changing them prevents anyone on the network from simply logging in and reconfiguring the device. WPS, especially its PIN method, is vulnerable to brute-force attacks that can reveal the wireless passphrase, so it should be disabled. UPnP lets internal devices or malware open inbound firewall ports without administrator approval and is normally disabled, and TKIP is a deprecated cipher; WPA2 should use AES, or WPA3 should be used where supported.",
      "topic": "Security",
      "subtopic": "Given a scenario, apply security settings on SOHO wireless and wired networks",
      "difficulty": "medium",
      "source": "220-1202 Objective 2.10 – SOHO router settings: default passwords, WPS, UPnP, encryption"
    },
    {
      "stem": "A technician is following the recommended malware removal procedure on a Windows 11 Home laptop. The technician has investigated and verified the malware symptoms and has quarantined the laptop from the network. Which of the following should the technician do next?",
      "options": [
        "Update the anti-malware software and scan",
        "Disable System Restore on the laptop",
        "Educate the end user about safe browsing",
        "Create a new restore point on the laptop"
      ],
      "answer": "B",
      "explanation": "CompTIA's malware removal procedure is: investigate and verify symptoms, quarantine the system, disable System Restore (in Windows Home), remediate by updating anti-malware software and scanning and removing, schedule scans and run updates, enable System Restore and create a restore point, and educate the end user. System Restore is disabled before remediation because existing restore points can contain the malware and could reinfect the system if they were used later. Creating a new restore point and educating the user come only after the system is clean.",
      "topic": "Security",
      "subtopic": "Given a scenario, implement procedures for basic small office/home office (SOHO) malware removal",
      "difficulty": "medium",
      "source": "220-1202 Objective 2.6 – SOHO malware removal procedure (ordered steps)"
    },
    {
      "stem": "A folder on a Windows file server is shared with a share permission of Full Control for the Everyone group. On the folder's Security tab, the only NTFS permission that applies to a particular user is Read, granted through the Sales group. Which of the following is the user's effective permission when accessing the folder through the network share?",
      "options": [
        "Full Control, because the share permission takes precedence",
        "Modify, because the share and NTFS permissions are combined",
        "Read, because the more restrictive permission applies",
        "No access, because the two permissions conflict"
      ],
      "answer": "C",
      "explanation": "When a folder is accessed through a network share, Windows evaluates the share permissions and the NTFS permissions separately, and the user's effective access is the more restrictive of the two results. Here the share allows Full Control but NTFS allows only Read, so the user can only read. When the same user is logged on locally, only the NTFS permissions apply, which is why many administrators set broad share permissions and control access with NTFS.",
      "topic": "Security",
      "subtopic": "Given a scenario, configure and apply basic Microsoft Windows OS security settings",
      "difficulty": "hard",
      "source": "220-1202 Objective 2.2 – Windows security settings: NTFS vs. share permissions"
    },
    {
      "stem": "After an interrupted update, several built-in Windows 11 utilities on a user's PC display errors stating that required system files are missing or corrupted. Which of the following commands should a technician run to scan for and repair protected Windows system files?",
      "options": [
        "chkdsk /r",
        "gpupdate /force",
        "diskpart",
        "sfc /scannow"
      ],
      "answer": "D",
      "explanation": "System File Checker (sfc /scannow) checks the integrity of protected Windows system files and replaces any that are missing or corrupted with cached known-good copies. If SFC cannot repair the files, DISM /Online /Cleanup-Image /RestoreHealth can repair the component store it relies on, after which SFC can be run again. chkdsk checks the file system and disk for errors, gpupdate refreshes Group Policy, and diskpart manages disks and partitions, so none of them replaces damaged system files.",
      "topic": "Software Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common Windows OS issues",
      "difficulty": "easy",
      "source": "220-1202 Objective 3.1 – Windows OS issues; Objective 1.5 – OS management command: sfc"
    },
    {
      "stem": "A user reports that the screen on a tablet stays in portrait orientation in every app when the device is turned sideways. The tablet worked correctly yesterday and has not been dropped or damaged. Which of the following should a technician check first?",
      "options": [
        "Whether the accelerometer needs replacement",
        "Whether the rotation lock setting is enabled",
        "Whether a factory reset resolves the problem",
        "Whether the digitizer needs to be recalibrated"
      ],
      "answer": "B",
      "explanation": "Troubleshooting starts with the simplest, most likely cause, and a problem that affects every app on an undamaged device points to a system-wide setting. When rotation lock (portrait orientation lock, or a disabled auto-rotate toggle) is on, the screen stays fixed regardless of how the device is held, and it is easily switched on by accident from the quick settings or Control Center. Hardware replacement, recalibration or a factory reset should be considered only after simple settings have been ruled out.",
      "topic": "Software Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common mobile OS and application issues",
      "difficulty": "easy",
      "source": "220-1202 Objective 3.2 – Mobile OS and application issues: screen does not autorotate"
    },
    {
      "stem": "A user reports that every HTTPS website, including well-known banking and search sites, now shows a certificate warning in all installed browsers. Other computers on the same network are not affected. Earlier that day, the PC lost power and displayed a CMOS checksum error at the next startup. Which of the following should a technician do first?",
      "options": [
        "Verify and correct the system date and time",
        "Reinstall the web browsers on the computer",
        "Flush the DNS cache with ipconfig /flushdns",
        "Clear the browsers' cached images and files"
      ],
      "answer": "A",
      "explanation": "Certificates are valid only between their issue and expiry dates, so if a PC's clock is far wrong, the browser treats every site's certificate as expired or not yet valid. A CMOS checksum error after a power loss indicates that the firmware settings and real-time clock were reset, often because of a failing CMOS battery, and the fact that every browser and site fails on only this PC points to a system-wide setting. Correcting the date and time, and replacing the CMOS battery if it keeps resetting, resolves the warnings, whereas cache, DNS or browser changes would not.",
      "topic": "Software Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common personal computer (PC) security issues",
      "difficulty": "medium",
      "source": "220-1202 Objective 3.4 – PC security issues: browser-related symptoms, certificate warnings"
    },
    {
      "stem": "A line-of-business application's Windows service is set to start automatically, but after a reboot it remains stopped. Event Viewer shows that the service did not start due to a logon failure. The service runs under a dedicated domain account whose password was changed the previous day in accordance with company policy. Which of the following is the best way to resolve the issue?",
      "options": [
        "Change the startup type to Automatic (Delayed Start)",
        "Run chkdsk /f on the system drive and restart",
        "Enter the account's new password on the Log On tab",
        "Reinstall the application to re-register the service"
      ],
      "answer": "C",
      "explanation": "When a Windows service runs under a specific user account, the service configuration stores that account's password, and changing the password in Active Directory does not update the stored copy. At the next start, the Service Control Manager cannot log on as the account, so the service fails with a logon failure. Entering the new password on the Log On tab of the service's properties in services.msc fixes the problem, while delayed start, disk checks or reinstalling do not address the stale credential.",
      "topic": "Software Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common Windows OS issues",
      "difficulty": "hard",
      "source": "220-1202 Objective 3.1 – Windows OS issues: services not starting; Objective 1.4 – Services (services.msc)"
    },
    {
      "stem": "A technician needs to find out the correct handling, storage and first-aid procedures for a cleaning solvent used in the repair shop. Which of the following documents should the technician consult?",
      "options": [
        "Acceptable use policy (AUP)",
        "Safety data sheet (SDS)",
        "Service-level agreement (SLA)",
        "End-user license agreement (EULA)"
      ],
      "answer": "B",
      "explanation": "A safety data sheet (SDS), provided by the product's manufacturer or supplier, describes a chemical's hazards, safe handling and storage, required protective equipment, spill response, first aid and disposal. Organizations must keep SDSs available for the hazardous materials used in the workplace, and technicians should consult them before handling or disposing of such products. An AUP, SLA and EULA are policy or contractual documents and contain no chemical safety information.",
      "topic": "Operational Procedures",
      "subtopic": "Summarize environmental impacts and local environment controls",
      "difficulty": "easy",
      "source": "220-1202 Objective 4.5 – Safety data sheet (SDS) documentation for handling and disposal"
    },
    {
      "stem": "A company runs a full backup of a file server every Sunday night and a differential backup every Monday through Saturday night. This week, Thursday night's differential job failed and did not run. The server's data volume failed on Friday afternoon. Which of the following is the minimum set of backups needed to restore the most recent data available?",
      "options": [
        "Sunday's full backup only",
        "Wednesday's differential backup only",
        "Sunday's full backup plus every differential since Sunday",
        "Sunday's full backup plus Wednesday's differential"
      ],
      "answer": "D",
      "explanation": "A differential backup copies all changes made since the last full backup, so each new differential contains everything in the previous ones, and only the latest is needed alongside the full backup. Because Thursday's job did not run, Wednesday's differential is the most recent backup, and restoring Sunday's full backup followed by Wednesday's differential recovers data up to Wednesday night. A differential cannot be restored on its own without the full backup, and restoring the earlier differentials adds no data. With incremental backups, by contrast, every incremental since the full backup would be needed, in order.",
      "topic": "Operational Procedures",
      "subtopic": "Given a scenario, implement workstation backup and recovery methods",
      "difficulty": "hard",
      "source": "220-1202 Objective 4.3 – Backup and recovery: full, incremental and differential backups"
    },
    {
      "stem": "An employee wants to paste a spreadsheet of customer names, addresses and account numbers into a free, public AI chatbot so that it can summarize purchasing trends. Which of the following is the primary concern with this request?",
      "options": [
        "Sensitive data may be retained or exposed by the AI provider",
        "The summary may include text plagiarized from other sources",
        "The response may be inaccurate because of AI hallucinations",
        "The summary may reflect bias in the chatbot's training data"
      ],
      "answer": "A",
      "explanation": "Public AI services may store prompts, use them to improve their models or make them visible to the provider's staff, so entering customer names, addresses and account numbers could breach privacy policies and regulations. Sensitive data should be processed only with an approved private or enterprise AI tool that has contractual data protections, or it should be removed or anonymized first. Bias, plagiarism and hallucinations are concerns about the quality of AI output, but the immediate risk here is exposure of the data itself.",
      "topic": "Operational Procedures",
      "subtopic": "Explain basic concepts related to artificial intelligence (AI)",
      "difficulty": "medium",
      "source": "220-1202 Objective 4.10 – AI: private vs. public, data security and data privacy"
    },
    {
      "stem": "A technician submits a change request to update the firmware on all of a branch office's network switches during a weekend maintenance window. The change advisory board returns the request and asks how the switches will be returned to their original state if the update fails. Which of the following should the technician add to the request?",
      "options": [
        "A summary of sandbox test results",
        "A plan for end-user acceptance",
        "A documented rollback plan",
        "A risk level analysis"
      ],
      "answer": "C",
      "explanation": "A rollback (backout) plan documents how to return systems to their previous known-good state if a change fails, for example by keeping the current firmware image and configuration backups along with the steps to reinstall them. Change advisory boards expect this before approving a change so that a failed update does not leave the network down. Sandbox testing lowers the chance of failure, risk analysis estimates its likelihood and impact, and end-user acceptance confirms success afterward, but none of them describes how to recover.",
      "topic": "Operational Procedures",
      "subtopic": "Given a scenario, apply change management procedures",
      "difficulty": "medium",
      "source": "220-1202 Objective 4.2 – Change management: rollback plan"
    }
  ]
}
```
