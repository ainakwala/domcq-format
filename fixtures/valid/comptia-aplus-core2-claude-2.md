```json
{
  "format": "domcq/1",
  "exam": "comptia-aplus-core2",
  "set": "CompTIA A+ Core 2 (220-1202) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A systems administrator has just changed a domain Group Policy setting that applies to a user's Windows workstation. The user cannot wait for the next automatic background refresh. Which of the following commands should a technician run on the workstation to apply the updated policy immediately?",
      "options": [
        "gpresult /r",
        "sfc /scannow",
        "gpupdate /force",
        "net use /persistent:yes"
      ],
      "answer": "C",
      "explanation": "gpupdate tells Windows to download and reapply Group Policy from the domain controller instead of waiting for the background refresh (about every 90 minutes, with a random offset), and /force reapplies every setting rather than only those that changed. gpresult only reports which policies have been applied, so it is useful for checking the result afterwards but does not refresh anything. sfc repairs protected system files and net use manages mapped drives, so neither applies policy.",
      "topic": "Operating Systems",
      "subtopic": "Given a scenario, use the appropriate Microsoft command-line tools",
      "difficulty": "easy",
      "source": "220-1202 Objective 1.5 – Microsoft command-line tools: OS management (gpupdate, gpresult)"
    },
    {
      "stem": "A video editor needs a 256GB USB flash drive formatted so it can be read and written natively on both a Windows 11 PC and a macOS laptop. Some of the video files are larger than 4GB. Which of the following file systems should the technician use?",
      "options": [
        "exFAT",
        "FAT32",
        "NTFS",
        "APFS"
      ],
      "answer": "A",
      "explanation": "exFAT can be read and written by both Windows and macOS without extra software, and it has no practical per-file size limit, which makes it the usual choice for large removable drives shared between platforms. FAT32 is just as compatible but cannot store a single file of 4GB or larger. macOS can read NTFS but cannot write to it natively, and Windows cannot read APFS without third-party tools.",
      "topic": "Operating Systems",
      "subtopic": "Explain common operating system (OS) types and their purposes",
      "difficulty": "medium",
      "source": "220-1202 Objective 1.1 – OS types: file system types and compatibility (exFAT, FAT32, NTFS, APFS)"
    },
    {
      "stem": "A small business purchased several laptops that came with Windows 11 Home installed. Which of the following capabilities will the business be unable to use until the laptops are upgraded to Windows 11 Pro? (Choose TWO.)",
      "options": [
        "Signing in with Windows Hello facial recognition",
        "Joining an Active Directory domain",
        "Running Microsoft Defender Antivirus",
        "Accepting incoming Remote Desktop connections"
      ],
      "answer": "BD",
      "explanation": "Windows 11 Home can only belong to a workgroup, so joining an Active Directory domain requires Pro or a higher edition. Home can act as a Remote Desktop client but cannot host incoming Remote Desktop sessions; the RDP host role starts at Pro. Windows Hello sign-in and Microsoft Defender Antivirus are included in every Windows 11 edition, so they do not require an upgrade.",
      "topic": "Operating Systems",
      "subtopic": "Compare and contrast basic features of Microsoft Windows editions",
      "difficulty": "medium",
      "source": "220-1202 Objective 1.3 – Windows editions: domain vs workgroup, availability of RDP"
    },
    {
      "stem": "A user needs to install an engineering application that is available only as a 64-bit build. The user's computer has a 64-bit-capable CPU and 8GB of RAM but runs a 32-bit edition of Windows 10. Which of the following should the technician do to meet the application's requirements?",
      "options": [
        "Run the installer in compatibility mode for an earlier Windows version",
        "Perform an in-place upgrade to the 64-bit edition of Windows",
        "Back up the user's data and perform a clean installation of 64-bit Windows",
        "Install the application into the Program Files (x86) folder"
      ],
      "answer": "C",
      "explanation": "A 64-bit application needs a 64-bit operating system; a 64-bit-capable CPU is not enough when the installed OS is 32-bit, and compatibility mode or a different install folder cannot change the OS architecture. Windows does not support an in-place upgrade from a 32-bit edition to a 64-bit edition, so the technician must back up the user's data and settings and then perform a clean installation. A side benefit is that 64-bit Windows can use all 8GB of RAM, whereas a 32-bit edition is limited to about 4GB.",
      "topic": "Operating Systems",
      "subtopic": "Given a scenario, install applications according to requirements",
      "difficulty": "hard",
      "source": "220-1202 Objective 1.10 – System requirements for applications: 32-bit vs 64-bit dependent application requirements"
    },
    {
      "stem": "A Linux administrator runs the command chmod 750 backup.sh on a shell script. Which of the following describes the resulting permissions on the file?",
      "options": [
        "Owner can read and write; group can read and execute; others can only read",
        "Owner can read, write, and execute; group can read and execute; others have no access",
        "Owner can read, write, and execute; group can read and write; others can only execute",
        "Owner can read and execute; group can only read; others have no access"
      ],
      "answer": "B",
      "explanation": "Each chmod digit is the sum of read (4), write (2) and execute (1), and the three digits apply in order to the owner, the group and all others. 7 = 4+2+1 gives the owner rwx, 5 = 4+1 gives the group r-x, and 0 gives others no permissions, so the result is rwxr-x---. This is a common setting for a script that the owner maintains and the group only needs to run.",
      "topic": "Operating Systems",
      "subtopic": "Identify common features and tools of the Linux client/desktop operating system",
      "difficulty": "hard",
      "source": "220-1202 Objective 1.9 – Linux file management commands: chmod"
    },
    {
      "stem": "A macOS user accidentally deleted a project folder three days ago and has already emptied the Trash. The Mac has been backing up automatically every hour to an attached external drive. Which of the following should the technician use to recover the folder?",
      "options": [
        "Spotlight",
        "Keychain Access",
        "Time Machine",
        "Disk Utility"
      ],
      "answer": "C",
      "explanation": "Time Machine is the backup feature built into macOS; with an external backup disk attached it keeps hourly backups for the past 24 hours, daily backups for the past month and weekly backups for older data. The technician can open Time Machine, browse back to a point before the deletion and restore the folder. Spotlight only searches files that still exist, Keychain Access stores passwords and certificates, and Disk Utility manages and repairs volumes but does not restore deleted files.",
      "topic": "Operating Systems",
      "subtopic": "Explain common features and tools of the macOS/desktop operating system",
      "difficulty": "easy",
      "source": "220-1202 Objective 1.8 – macOS features and tools: Time Machine"
    },
    {
      "stem": "Several employees receive a text message on their mobile phones claiming to be from the company's payroll provider. The message says their direct deposit will be suspended unless they tap a link and confirm their bank login details. Which of the following describes this attack?",
      "options": [
        "Smishing",
        "Vishing",
        "Whaling",
        "Tailgating"
      ],
      "answer": "A",
      "explanation": "Smishing is phishing delivered by SMS text message: the attacker impersonates a trusted organization and uses urgency to get victims to follow a link and hand over credentials. Vishing uses voice calls, whaling specifically targets senior executives, and tailgating is following an authorized person through a secured physical entrance.",
      "topic": "Security",
      "subtopic": "Compare and contrast common social engineering attacks, threats, and vulnerabilities",
      "difficulty": "easy",
      "source": "220-1202 Objective 2.5 – Social engineering: phishing, smishing, vishing, whaling, tailgating"
    },
    {
      "stem": "A technician is configuring a new SOHO wireless network. The owner is concerned that an attacker could capture the Wi-Fi authentication handshake and then try to guess the passphrase offline. Which of the following should the technician configure to best address this concern?",
      "options": [
        "WPA2-Personal with TKIP",
        "WPA2-Personal with AES",
        "MAC address filtering",
        "WPA3-Personal"
      ],
      "answer": "D",
      "explanation": "WPA3-Personal replaces WPA2's pre-shared key handshake with Simultaneous Authentication of Equals (SAE). With SAE, a captured exchange cannot be used to test password guesses offline; each guess requires a live interaction with the access point, which defeats offline dictionary attacks. WPA2-Personal is vulnerable to offline guessing against a captured four-way handshake whether it uses AES or TKIP, and MAC filtering does nothing to protect the passphrase because MAC addresses are easy to spoof.",
      "topic": "Security",
      "subtopic": "Compare and contrast wireless security protocols and authentication methods",
      "difficulty": "medium",
      "source": "220-1202 Objective 2.3 – Wireless security protocols: WPA2, WPA3, TKIP, AES"
    },
    {
      "stem": "A technician has confirmed that a Windows 11 Home computer in a small office is infected with malware and has disconnected it from the network. According to the recommended malware removal procedure, which of the following should the technician do next?",
      "options": [
        "Educate the user about how the infection occurred",
        "Disable System Restore on the computer",
        "Schedule regular scans and run updates",
        "Create a new System Restore point"
      ],
      "answer": "B",
      "explanation": "CompTIA's malware removal procedure is: investigate and verify symptoms, quarantine the system, disable System Restore (in Windows Home), remediate (update anti-malware, then scan and remove, for example in Safe Mode or a preinstallation environment), schedule scans and run updates, re-enable System Restore and create a restore point, and finally educate the user. System Restore is disabled before cleaning because existing restore points may contain the malware, and restoring one later could reinfect the computer. Creating a fresh restore point and educating the user come only after the system is clean.",
      "topic": "Security",
      "subtopic": "Given a scenario, implement procedures for basic small office/home office (SOHO) malware removal",
      "difficulty": "medium",
      "source": "220-1202 Objective 2.6 – SOHO malware removal procedure (order of steps)"
    },
    {
      "stem": "A user belongs to a group that has Read share permission on a shared folder on a Windows file server. The same group has Modify NTFS permission on that folder. The user reports being unable to save changes to files when opening the folder through its UNC path from a workstation. Which of the following best explains why the user cannot save changes?",
      "options": [
        "NTFS permissions override share permissions for network access",
        "Share permissions apply only to users signed in locally at the server",
        "The more restrictive of the share and NTFS permissions applies",
        "Modify permission does not allow changes to existing files"
      ],
      "answer": "C",
      "explanation": "When a folder is accessed over the network, Windows evaluates both the share permissions and the NTFS permissions and applies whichever is more restrictive. The share grants only Read, so the user's effective access through the UNC path is Read even though NTFS allows Modify. Signing in locally at the server would use only the NTFS permissions; a common practice is to set broad share permissions and control access precisely with NTFS.",
      "topic": "Security",
      "subtopic": "Given a scenario, configure and apply basic Microsoft Windows OS security settings",
      "difficulty": "hard",
      "source": "220-1202 Objective 2.2 – Windows OS security settings: NTFS vs share permissions"
    },
    {
      "stem": "A company plans to donate its old desktop computers to a local school. The hard disk drives must remain usable by the school, but no company data may be recoverable from them. Which of the following methods should the technician use?",
      "options": [
        "Degauss each hard disk drive",
        "Perform a quick format of each drive",
        "Drill through the platters of each drive",
        "Overwrite each drive with a disk-wiping utility"
      ],
      "answer": "D",
      "explanation": "Overwriting every sector with a disk-wiping utility removes the old data so it cannot be recovered with ordinary recovery tools, while leaving the drive fully functional for reuse. A quick format only rebuilds the file system structures, so the underlying data can still be recovered. Degaussing erases the magnetic servo information a hard disk drive needs to operate, and drilling physically destroys the platters, so both make the drives unusable for the school.",
      "topic": "Security",
      "subtopic": "Compare and contrast common data destruction and disposal methods",
      "difficulty": "medium",
      "source": "220-1202 Objective 2.9 – Data destruction: recycling or repurposing (erasing/wiping, standard formatting) vs physical destruction"
    },
    {
      "stem": "A technician is installing a new wireless router for a small office. Which of the following should the technician do first to prevent unauthorized people from changing the router's configuration?",
      "options": [
        "Change the default administrator username and password",
        "Disable broadcasting of the wireless network's SSID",
        "Create DHCP reservations for every office workstation",
        "Reduce the transmit power of the wireless radios"
      ],
      "answer": "A",
      "explanation": "Default router administrator credentials are published in manuals and online, so anyone who can reach the management interface could log in and change settings. Changing the default username and password is therefore the first hardening step for any new SOHO router. Hiding the SSID, reserving DHCP addresses and lowering transmit power do not stop someone who knows the default credentials from logging in to the router.",
      "topic": "Security",
      "subtopic": "Given a scenario, apply security settings on SOHO wireless and wired networks",
      "difficulty": "easy",
      "source": "220-1202 Objective 2.10 – SOHO router settings: change default passwords"
    },
    {
      "stem": "A Windows 11 workstation began displaying a blue screen error during startup immediately after a cumulative update was installed last night. The technician can boot the computer into the Windows Recovery Environment. Which of the following is the best approach in this scenario?",
      "options": [
        "Reimage the workstation from the company's standard image",
        "Run chkdsk /r to scan the drive for bad sectors",
        "Uninstall the most recently installed quality update",
        "Replace the RAM modules and test the system again"
      ],
      "answer": "C",
      "explanation": "The blue screen began immediately after the cumulative update, which points strongly to the update as the cause. From the Windows Recovery Environment the technician can choose Troubleshoot > Advanced options > Uninstall Updates and remove the latest quality update, which is the least disruptive fix. Reimaging would also work but is a last resort because it removes installed applications and settings, and chkdsk or replacing RAM targets hardware faults that the timing does not suggest.",
      "topic": "Software Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common Windows OS issues",
      "difficulty": "medium",
      "source": "220-1202 Objective 3.1 – Windows OS issues: BSOD; troubleshooting steps: roll back updates"
    },
    {
      "stem": "A user's Android phone has recently started showing full-screen ads even when no app is open, and the battery drains much faster than before. A week ago the user installed a free flashlight app from a link on a website instead of from Google Play. Which of the following should a technician do first?",
      "options": [
        "Perform a factory reset to restore the phone to default settings",
        "Uninstall the app that was installed from outside Google Play",
        "Replace the battery with a new manufacturer-approved part",
        "Turn off Wi-Fi and use only the cellular data connection"
      ],
      "answer": "B",
      "explanation": "Full-screen ads outside apps and sudden battery drain are classic signs of adware, and an app sideloaded from a website bypasses the vetting done by the official store. Removing the suspicious app is the targeted, least disruptive first step; the technician should then scan with mobile anti-malware and consider a factory reset only if the symptoms persist. Replacing the battery or changing the network connection does nothing about the malicious app.",
      "topic": "Software Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common mobile OS and application security issues",
      "difficulty": "medium",
      "source": "220-1202 Objective 3.3 – Mobile security issues: application source/unofficial stores; high number of ads"
    },
    {
      "stem": "A user reports that every time they open their web browser, the home page has changed to an unfamiliar search engine, and searches are redirected to sites full of ads. The problem began after the user installed a free PDF converter. Which of the following should the technician check first?",
      "options": [
        "The DHCP lease assigned to the workstation",
        "The certificates in the browser's certificate store",
        "The power and sleep settings in Windows",
        "The extensions installed in the browser"
      ],
      "answer": "D",
      "explanation": "A changed home page, a hijacked search engine and redirects to ad-filled sites are typical symptoms of a browser hijacker, which free software often installs as a bundled browser extension. The technician should look for and remove unknown extensions, reset the browser's home page and search settings, and then run an anti-malware scan. The DHCP lease, certificate store and power settings do not control which pages the browser opens or where searches go.",
      "topic": "Software Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common personal computer (PC) security issues",
      "difficulty": "easy",
      "source": "220-1202 Objective 3.4 – PC security issues: browser-related symptoms (redirection, pop-ups)"
    },
    {
      "stem": "After a power outage, a user signs in to a domain-joined Windows 11 workstation and receives a notification stating that they have been signed in with a temporary profile. The user's desktop is empty and their usual settings are missing. Other users can sign in to the same workstation normally. Which of the following is the best approach in this scenario?",
      "options": [
        "Rebuild the user's profile and migrate data from the old profile folder",
        "Reimage the workstation and restore the user's data from backup",
        "Run sfc /scannow and restart the workstation",
        "Reset the user's password in Active Directory"
      ],
      "answer": "A",
      "explanation": "A temporary profile means Windows could not load the user's own profile, usually because the profile folder or its registry entry was corrupted, for example by an improper shutdown. Because other users sign in normally, the fault is limited to this one profile, so the targeted fix is to rebuild it: remove or rename the damaged profile and its registry entry, let Windows create a new profile at the next sign-in, and copy the user's data from the old profile folder. Reimaging affects the whole workstation unnecessarily, sfc repairs system files rather than user profiles, and a password reset does not change how the profile loads.",
      "topic": "Software Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common Windows OS issues",
      "difficulty": "hard",
      "source": "220-1202 Objective 3.1 – Windows OS issues: slow profile load; troubleshooting steps: rebuild Windows profiles"
    },
    {
      "stem": "A technician is about to install an additional memory module in a desktop computer that has been powered off and unplugged. Which of the following should the technician use to protect the module from damage while handling it?",
      "options": [
        "Safety goggles",
        "An antistatic wrist strap",
        "An air filtration mask",
        "A surge suppressor"
      ],
      "answer": "B",
      "explanation": "Memory modules can be damaged by electrostatic discharge at voltages too low for a person to feel. An antistatic wrist strap connected to a ground point, such as an ESD mat or the computer chassis, keeps the technician at the same electrical potential as the equipment so static does not discharge through the module. Safety goggles and an air filtration mask protect the technician rather than the component, and a surge suppressor protects powered equipment from voltage spikes on the power line.",
      "topic": "Operational Procedures",
      "subtopic": "Given a scenario, use common safety procedures",
      "difficulty": "easy",
      "source": "220-1202 Objective 4.4 – Safety procedures: ESD straps, ESD mats, proper component handling"
    },
    {
      "stem": "A company performs a full backup of a file server every Sunday night and a differential backup every Monday through Saturday night. The server's drive fails on Thursday morning before any backup has run that day. Which of the following backup sets will the technician need to restore all data up to the most recent backup?",
      "options": [
        "Only the Wednesday differential backup",
        "The Sunday full backup and the Monday, Tuesday, and Wednesday differentials",
        "Only the Sunday full backup",
        "The Sunday full backup and the Wednesday differential backup"
      ],
      "answer": "D",
      "explanation": "A differential backup copies every change made since the last full backup, so each night's differential contains all the changes since Sunday. To restore, the technician needs the Sunday full backup plus only the most recent differential, which is Wednesday's. Restoring every differential is unnecessary, and a differential on its own is incomplete because it does not include files that have not changed since the full backup; it is incremental backups that must all be restored in sequence.",
      "topic": "Operational Procedures",
      "subtopic": "Given a scenario, implement workstation backup and recovery methods",
      "difficulty": "medium",
      "source": "220-1202 Objective 4.3 – Backup and recovery: full, incremental, differential"
    },
    {
      "stem": "A help desk manager is considering letting technicians paste customer ticket details into a free, public generative AI chatbot to draft troubleshooting replies. Which of the following are the most significant concerns with this plan? (Choose TWO.)",
      "options": [
        "Each technician's workstation will need a dedicated GPU to run the chatbot",
        "Customer information entered into the tool could be retained by the provider or used to train its models",
        "The chatbot may produce responses that sound confident but contain inaccurate steps",
        "The chatbot will apply its suggested fixes directly to customers' computers without approval"
      ],
      "answer": "BC",
      "explanation": "Data pasted into a public AI service leaves the company's control and may be stored by the provider or used to train its models, which creates privacy and compliance risks for customer information. Generative AI can also hallucinate, producing fluent, confident answers that are wrong, so every suggested step needs checking before it reaches a customer. A public chatbot runs on the provider's servers, so it does not need a local GPU, and it only produces text; it cannot make changes to customers' computers.",
      "topic": "Operational Procedures",
      "subtopic": "Explain basic concepts related to artificial intelligence (AI)",
      "difficulty": "medium",
      "source": "220-1202 Objective 4.10 – AI basics: private vs public (data privacy), limitations (hallucinations, accuracy)"
    },
    {
      "stem": "A technician plans to deploy a new version of the company's accounting software to all workstations. The change request requires the technician to confirm that the new version works with the company's existing applications without risking disruption to production systems. Which of the following should the technician use to meet this requirement?",
      "options": [
        "A documented rollback plan",
        "End-user acceptance sign-off",
        "A scheduled change freeze",
        "A sandbox test environment"
      ],
      "answer": "D",
      "explanation": "Sandbox testing means trying the change in an isolated environment that mirrors production, so problems with existing applications can be found without affecting live systems. A rollback plan describes how to reverse a change if it fails but does not confirm compatibility beforehand. End-user acceptance comes after implementation, and a change freeze is a period during which changes are not allowed.",
      "topic": "Operational Procedures",
      "subtopic": "Given a scenario, apply change management procedures",
      "difficulty": "medium",
      "source": "220-1202 Objective 4.2 – Change management: documented business processes (sandbox testing, rollback plan)"
    }
  ]
}
```
