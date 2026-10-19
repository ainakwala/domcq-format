```json
{
  "format": "domcq/1",
  "exam": "comptia-aplus-core2",
  "set": "CompTIA A+ Core 2 (220-1202) practice – Mixed objectives review",
  "questions": [
    {
      "stem": "After an unexpected power loss, a Windows 11 workstation displays errors stating that several system DLL files are missing or corrupt. Which of the following commands should a technician run to scan and repair protected Windows system files?",
      "options": [
        "chkdsk /r",
        "gpupdate /force",
        "sfc /scannow",
        "diskpart"
      ],
      "answer": "C",
      "explanation": "System File Checker (sfc) verifies the integrity of protected Windows system files and replaces corrupt or missing ones with cached known-good copies. The /scannow switch scans all protected files immediately and repairs them where possible. chkdsk works at the file system and disk level rather than on individual Windows component files.",
      "rationales": {
        "A": "chkdsk /r finds bad sectors and file system errors on a volume; it does not restore individual Windows system files.",
        "B": "gpupdate /force reapplies Group Policy settings and has no ability to repair system files.",
        "C": "Correct: sfc /scannow checks protected system files and replaces corrupted or missing ones with good cached copies.",
        "D": "diskpart manages disks, partitions and volumes; it cannot check or repair system files."
      },
      "topic": "Operating Systems",
      "subtopic": "Given a scenario, use the appropriate Microsoft command-line tools",
      "difficulty": "easy",
      "source": "220-1202 objectives – Use the appropriate Microsoft command-line tools (sfc)"
    },
    {
      "stem": "A small business has purchased laptops running Windows 11 Home. The owner wants the laptops joined to the company's Active Directory domain and managed with Group Policy. Which of the following should the technician do?",
      "options": [
        "Upgrade the laptops to Windows 11 Pro",
        "Join the laptops to a workgroup named after the domain",
        "Sign in to the laptops with Microsoft accounts",
        "Install Remote Server Administration Tools on the laptops"
      ],
      "answer": "A",
      "explanation": "Windows 11 Home cannot join an Active Directory domain and does not process domain Group Policy; those capabilities start at the Pro edition and are also in Enterprise and Education. Upgrading Home to Pro, which can be done with a product key from the Activation settings, adds domain join, Group Policy, BitLocker and the Remote Desktop host.",
      "rationales": {
        "A": "Correct: Pro adds domain join and Group Policy support, which the Home edition lacks.",
        "B": "A workgroup is a peer-to-peer arrangement; naming it after the domain does not join the domain or apply Group Policy.",
        "C": "A Microsoft account is a consumer cloud identity and does not provide Active Directory domain membership.",
        "D": "RSAT are consoles for administering servers; installing them does not let a Home edition join a domain."
      },
      "topic": "Operating Systems",
      "subtopic": "Compare and contrast basic features of Microsoft Windows editions",
      "difficulty": "medium",
      "source": "220-1202 objectives – Compare and contrast basic features of Microsoft Windows editions (domain vs. workgroup, upgrade paths)"
    },
    {
      "stem": "A technician is installing Windows 11 on a recently purchased desktop whose firmware was configured to support an older operating system. Setup reports that the PC does not meet Windows 11 requirements, although the CPU, RAM and storage all exceed the minimums. Which of the following firmware settings should the technician enable? Choose TWO.",
      "options": [
        "TPM 2.0",
        "Wake-on-LAN",
        "UEFI boot with Secure Boot",
        "Hardware virtualization"
      ],
      "answer": "AC",
      "explanation": "Besides CPU, RAM and storage minimums, Windows 11 requires UEFI firmware with Secure Boot capability and a Trusted Platform Module version 2.0. Many boards ship with the firmware TPM (Intel PTT or AMD fTPM) turned off, or with legacy CSM boot enabled for older systems, and either one fails the requirements check. Enabling the TPM and switching to UEFI with Secure Boot lets setup continue.",
      "rationales": {
        "A": "Correct: Windows 11 requires TPM 2.0, which is often a firmware TPM that must be turned on in the firmware settings.",
        "B": "Wake-on-LAN lets a network card power on the PC remotely; it is not a Windows 11 requirement.",
        "C": "Correct: Windows 11 requires UEFI firmware with Secure Boot capability; legacy CSM boot fails the check.",
        "D": "Virtualization extensions are needed for Hyper-V and virtual machines, not to meet Windows 11 installation requirements."
      },
      "topic": "Operating Systems",
      "subtopic": "Given a scenario, perform OS installations and upgrades in a diverse environment",
      "difficulty": "medium",
      "source": "220-1202 objectives – Perform OS installations and upgrades (boot methods, Windows 11 requirements: UEFI, Secure Boot, TPM 2.0)"
    },
    {
      "stem": "A user on a Linux workstation receives a \"No space left on device\" error when saving a file. Which of the following commands should a technician run first to see how much free space remains on each mounted file system?",
      "options": [
        "du -h",
        "free -h",
        "top",
        "df -h"
      ],
      "answer": "D",
      "explanation": "df (disk free) reports total, used and available space for every mounted file system, so it quickly shows which one is full; -h prints sizes in human-readable units. du is the natural next step once the full file system is known, because it shows which directories are consuming the space.",
      "rationales": {
        "A": "du -h reports space used by files and directories, not the free space on each mounted file system.",
        "B": "free -h shows RAM and swap usage, not disk space.",
        "C": "top shows running processes and CPU and memory load, not storage capacity.",
        "D": "Correct: df -h lists size, used and available space for every mounted file system."
      },
      "topic": "Operating Systems",
      "subtopic": "Identify common features and tools of the Linux client/desktop operating system",
      "difficulty": "medium",
      "source": "220-1202 objectives – Linux client/desktop OS features and tools (df, du)"
    },
    {
      "stem": "A user connects a Windows 11 laptop to the free Wi-Fi network at an airport. The technician wants to make sure the laptop is not discoverable by other devices on that network and that file and printer sharing is blocked. Which of the following should the technician configure?",
      "options": [
        "Set the network profile to Private",
        "Set the network profile to Public",
        "Set the connection as metered",
        "Assign a static IP address"
      ],
      "answer": "B",
      "explanation": "Windows applies different firewall and sharing settings depending on the network profile. The Public profile is designed for untrusted networks such as airports and cafes: network discovery and file and printer sharing are turned off and stricter firewall rules apply. The Private profile is meant for trusted home or work networks where discovery is wanted.",
      "rationales": {
        "A": "The Private profile is for trusted networks and allows network discovery, the opposite of what is needed.",
        "B": "Correct: the Public profile turns off discovery and sharing and applies stricter firewall rules for untrusted networks.",
        "C": "A metered connection limits background data use and updates; it does not control discovery or sharing.",
        "D": "A static IP address changes addressing only and has no effect on discovery or sharing."
      },
      "topic": "Operating Systems",
      "subtopic": "Given a scenario, configure Microsoft Windows networking features on a client/desktop",
      "difficulty": "easy",
      "source": "220-1202 objectives – Configure Microsoft Windows networking features on a client/desktop (public vs. private network profiles)"
    },
    {
      "stem": "A graphic designer needs to install a 64-bit-only design application on a workstation running a 32-bit edition of Windows 10 Pro. The workstation has a 64-bit-capable processor and 8GB of RAM, and the user's data is already backed up. Which of the following should the technician do so the application can be installed?",
      "options": [
        "Run the application's installer in compatibility mode",
        "Perform an in-place upgrade to a 64-bit edition",
        "Perform a clean install of a 64-bit edition of Windows",
        "Install the application into the Program Files (x86) folder"
      ],
      "answer": "C",
      "explanation": "A 64-bit application cannot run on a 32-bit operating system, even when the processor itself is 64-bit capable. Windows offers no in-place upgrade path from a 32-bit to a 64-bit edition, so the technician must perform a clean installation of the 64-bit OS, then reinstall applications and restore user data. As a bonus, a 64-bit edition can use all 8GB of RAM, which a 32-bit edition cannot.",
      "rationales": {
        "A": "Compatibility mode imitates older Windows versions' behavior; it cannot let a 32-bit OS execute 64-bit code.",
        "B": "Windows does not support an in-place upgrade from a 32-bit to a 64-bit edition; the architecture change needs a clean install.",
        "C": "Correct: only a 64-bit OS can run 64-bit applications, and moving from 32-bit requires a clean installation.",
        "D": "Program Files (x86) holds 32-bit apps on 64-bit Windows; it does not exist on a 32-bit OS and would change nothing."
      },
      "topic": "Operating Systems",
      "subtopic": "Given a scenario, install applications according to requirements",
      "difficulty": "hard",
      "source": "220-1202 objectives – Install applications according to requirements (32-bit vs. 64-bit application requirements)"
    },
    {
      "stem": "A company wants each employee to sign in to the office Wi-Fi network with their own domain credentials instead of a shared passphrase, so that access can be revoked for individual users. Which of the following should the technician configure?",
      "options": [
        "WPA3-Personal with a long, complex passphrase",
        "Wi-Fi Protected Setup with push-button pairing",
        "MAC address filtering on each access point",
        "WPA3-Enterprise with a RADIUS server"
      ],
      "answer": "D",
      "explanation": "The Enterprise mode of WPA2 and WPA3 uses 802.1X, in which the access point passes each user's credentials to an authentication server, usually RADIUS, that can check them against the domain directory. Because every user authenticates individually, disabling one account removes that person's access without affecting anyone else. Personal mode relies on a single pre-shared key that everyone knows.",
      "rationales": {
        "A": "Personal mode uses one shared passphrase for everyone, so a single user's access cannot be revoked individually.",
        "B": "WPS simplifies device pairing and is considered insecure; it does not use individual domain credentials.",
        "C": "MAC filtering identifies devices, not users, and MAC addresses are easily spoofed.",
        "D": "Correct: Enterprise mode uses 802.1X with RADIUS to authenticate each user with their own credentials."
      },
      "topic": "Security",
      "subtopic": "Compare and contrast wireless security protocols and authentication methods",
      "difficulty": "medium",
      "source": "220-1202 objectives – Wireless security protocols and authentication methods (WPA3, RADIUS)"
    },
    {
      "stem": "An employee receives a phone call from someone claiming to work for the company's bank. The caller says there is suspicious activity on the corporate account and asks the employee to confirm the online banking username and password. Which of the following describes this attack?",
      "options": [
        "Vishing",
        "Smishing",
        "Whaling",
        "Tailgating"
      ],
      "answer": "A",
      "explanation": "Vishing (voice phishing) is social engineering carried out over a phone call or voicemail, where the attacker impersonates a trusted party to pressure the victim into revealing information. The claimed suspicious activity creates urgency, a classic pressure tactic. The correct response is to end the call and contact the bank on a known, published number.",
      "rationales": {
        "A": "Correct: vishing is phishing performed over a voice call, with the attacker posing as a trusted organization.",
        "B": "Smishing uses SMS text messages to deliver the lure, not a live phone call.",
        "C": "Whaling targets senior executives specifically; nothing indicates the employee is an executive.",
        "D": "Tailgating is following an authorized person through a secured door; it is a physical attack."
      },
      "topic": "Security",
      "subtopic": "Compare and contrast common social engineering attacks, threats, and vulnerabilities",
      "difficulty": "easy",
      "source": "220-1202 objectives – Social engineering attacks, threats and vulnerabilities (vishing)"
    },
    {
      "stem": "A security tool alerts on a workstation where a malicious PowerShell script is running directly in memory, launched by a registry entry at each sign-in. No malicious executable files can be found on the disk. Which of the following types of malware is this?",
      "options": [
        "Rootkit",
        "Fileless",
        "Boot sector virus",
        "Trojan"
      ],
      "answer": "B",
      "explanation": "Fileless malware avoids writing a malicious executable to disk; it runs in memory and abuses legitimate built-in tools such as PowerShell or WMI, often storing its launch command in the registry for persistence. Because there is no file to match against signatures, it evades traditional antivirus scanning and is better caught by behavior-based endpoint detection.",
      "rationales": {
        "A": "A rootkit modifies the OS or kernel to hide itself and keep privileged access; memory-only script execution is not its defining trait.",
        "B": "Correct: fileless malware runs in memory through trusted tools like PowerShell and leaves no malicious file on disk.",
        "C": "A boot sector virus infects the disk's boot code and loads before the OS, not through a PowerShell script.",
        "D": "A Trojan masquerades as a legitimate program the user installs, so a malicious file would be present."
      },
      "topic": "Security",
      "subtopic": "Summarize types of malware and tools/methods for detection, removal, and prevention",
      "difficulty": "medium",
      "source": "220-1202 objectives – Types of malware and tools/methods for detection, removal and prevention (fileless)"
    },
    {
      "stem": "A technician has investigated and verified malware symptoms on a Windows 11 Home desktop in a small office and has disconnected the computer from the network. According to the best practice malware removal procedure, which of the following should the technician do next?",
      "options": [
        "Update the anti-malware software",
        "Educate the end user",
        "Disable System Restore",
        "Schedule scans and run updates"
      ],
      "answer": "C",
      "explanation": "The best practice order is: investigate and verify symptoms, quarantine the system, disable System Restore (in Windows Home), remediate (update anti-malware, then scan and remove), schedule scans and run updates, re-enable System Restore and create a restore point, and educate the user. Disconnecting from the network is the quarantine step, so disabling System Restore comes next; this stops infected restore points from being used to bring the malware back after cleaning.",
      "rationales": {
        "A": "Updating anti-malware is part of remediation, which comes after System Restore has been disabled.",
        "B": "Educating the end user is the final step, after the system is clean and protected.",
        "C": "Correct: after quarantine, disabling System Restore stops infected restore points from reintroducing malware.",
        "D": "Scheduling scans and running updates follows remediation, so it is too early at this point."
      },
      "topic": "Security",
      "subtopic": "Given a scenario, implement procedures for basic small office/home office (SOHO) malware removal",
      "difficulty": "hard",
      "source": "220-1202 objectives – Implement procedures for basic SOHO malware removal (order of steps)"
    },
    {
      "stem": "A company is donating its old desktop computers, which contain magnetic hard drives, to a local school. The drives must remain usable by the school, but the company's data must not be recoverable. Which of the following methods should the technician use?",
      "options": [
        "Overwrite the drives with a data-wiping utility",
        "Perform a quick format on each drive",
        "Degauss each drive before donating it",
        "Send the drives to a shredding service"
      ],
      "answer": "A",
      "explanation": "Overwriting (wiping) replaces every sector with new data, such as zeros or random patterns, so the previous contents cannot be recovered, yet the drive remains fully usable. Degaussing and shredding also destroy the data but leave a hard drive unusable, and a quick format only rewrites file system structures, leaving the old data recoverable.",
      "rationales": {
        "A": "Correct: overwriting every sector removes recoverable data while leaving the drive usable.",
        "B": "A quick format only resets file system structures; the underlying data remains and can be recovered with tools.",
        "C": "Degaussing erases the magnetic platters but also destroys the servo tracks, leaving the drive unusable.",
        "D": "Shredding physically destroys the drives, so the school could not reuse them."
      },
      "topic": "Security",
      "subtopic": "Compare and contrast common data destruction and disposal methods",
      "difficulty": "medium",
      "source": "220-1202 objectives – Data destruction and disposal methods (recycling/repurposing, erasing/wiping, degaussing, shredding)"
    },
    {
      "stem": "A technician is hardening a Windows 11 workstation that is used in a busy reception area and is sometimes left unattended. Which of the following should the technician configure? Choose TWO.",
      "options": [
        "Enable Remote Desktop for all users",
        "Set a screen lock after a short inactivity timeout",
        "Enable the built-in Administrator account",
        "Disable AutoRun for removable media"
      ],
      "answer": "BD",
      "explanation": "Workstation hardening reduces what an attacker can do with physical or remote access. A screen lock timeout protects the signed-in session if the user walks away, and disabling AutoRun/AutoPlay stops malicious code on a USB drive or disc from running automatically when inserted. Both are standard measures for workstations in public-facing areas.",
      "rationales": {
        "A": "Enabling Remote Desktop for all users widens the attack surface instead of reducing it.",
        "B": "Correct: an automatic screen lock protects the signed-in session when the workstation is unattended.",
        "C": "The built-in Administrator account should stay disabled because it is a well-known, highly privileged target.",
        "D": "Correct: disabling AutoRun stops code on inserted USB drives or discs from launching automatically."
      },
      "topic": "Security",
      "subtopic": "Given a scenario, apply workstation security options and hardening techniques",
      "difficulty": "medium",
      "source": "220-1202 objectives – Workstation security options and hardening techniques (screen lock timeout, disable AutoRun/AutoPlay)"
    },
    {
      "stem": "After a technician installs an updated graphics driver, a Windows 11 PC displays a black screen immediately after the user signs in. The technician is able to start the PC in Safe Mode. Which of the following actions should the technician take to fix the issue?",
      "options": [
        "Run chkdsk /f on the system drive",
        "Rebuild the boot configuration data",
        "Reset the PC and keep personal files",
        "Roll back the driver in Device Manager"
      ],
      "answer": "D",
      "explanation": "Safe Mode loads only basic drivers, including a generic display driver, which is why the PC works there; that points to the new graphics driver as the cause. Device Manager's Roll Back Driver option reinstates the previously working driver version with minimal disruption. More drastic steps, such as resetting Windows, are unnecessary when the cause is a single recent driver change.",
      "rationales": {
        "A": "chkdsk repairs file system errors; nothing suggests disk corruption, and the problem began with the driver change.",
        "B": "Rebuilding the BCD fixes boot loader failures, but this PC boots normally and fails only after sign-in.",
        "C": "Resetting the PC removes installed apps and is far more disruptive than needed when one driver is at fault.",
        "D": "Correct: rolling back restores the previous working graphics driver, reversing the change that caused the problem."
      },
      "topic": "Software Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common Windows OS issues",
      "difficulty": "medium",
      "source": "220-1202 objectives – Troubleshoot common Windows OS issues (black screen; roll back drivers, Safe Mode)"
    },
    {
      "stem": "A user reports that their smartphone's battery has been draining much faster since they installed several new apps last week. Which of the following should the technician check first?",
      "options": [
        "The warranty status of the device",
        "Battery usage by app in the device settings",
        "The amount of available storage space",
        "The list of paired Bluetooth devices"
      ],
      "answer": "B",
      "explanation": "Both Android and iOS show which apps have used the most battery, including background activity. Because the drain began after new apps were installed, this view quickly identifies a misbehaving app, which can then be restricted, updated or uninstalled. Checking the simplest, most likely cause before drastic steps such as a factory reset follows the troubleshooting methodology.",
      "rationales": {
        "A": "Warranty status matters only if hardware replacement is needed, which is not indicated yet.",
        "B": "Correct: per-app battery usage reveals which newly installed app is consuming power.",
        "C": "Low storage can slow a device but does not typically cause faster battery drain.",
        "D": "Paired Bluetooth devices are unrelated to the timing of the new apps and are an unlikely cause."
      },
      "topic": "Software Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common mobile OS and application issues",
      "difficulty": "easy",
      "source": "220-1202 objectives – Troubleshoot common mobile OS and application issues (battery life issues)"
    },
    {
      "stem": "A user's Android phone has started showing full-screen ads even on the home screen, and mobile data usage has increased sharply. The user recently installed a free game from a website link instead of from the Google Play Store. Which of the following is the most likely cause?",
      "options": [
        "The phone's operating system is out of date",
        "The cellular carrier has changed the data plan",
        "The game is malware installed from an untrusted source",
        "The phone's battery is failing and needs replacing"
      ],
      "answer": "C",
      "explanation": "Installing an APK from outside an official app store (sideloading) bypasses the store's vetting, and such apps commonly bundle adware or spyware. Ads appearing outside any app and unexplained data usage are typical symptoms. The fix is to uninstall the app (using Safe Mode if it resists), scan the device and turn off installs from unknown sources.",
      "rationales": {
        "A": "An out-of-date OS is a vulnerability, but it does not by itself produce home-screen ads and data spikes.",
        "B": "A data plan change would not make ads appear outside apps or increase the device's actual data use.",
        "C": "Correct: apps from untrusted sources skip store vetting and often carry adware that causes these symptoms.",
        "D": "A failing battery causes power symptoms such as rapid drain or swelling, not ads or high data use."
      },
      "topic": "Software Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common mobile OS and application security issues",
      "difficulty": "medium",
      "source": "220-1202 objectives – Troubleshoot mobile OS and application security issues (APK sources, unexpected ads, high network traffic)"
    },
    {
      "stem": "After a monthly quality update installs overnight, a Windows 11 laptop repeatedly fails to start and boots into the Windows Recovery Environment. Startup Repair reports that it could not repair the PC. The user has unsynced files and installed applications that must be kept. Which of the following should the technician try next?",
      "options": [
        "Uninstall the latest quality update from Advanced options",
        "Reset this PC and choose the Remove everything option",
        "Run diskpart and clean the system disk",
        "Perform a clean install from installation media"
      ],
      "answer": "A",
      "explanation": "The Windows Recovery Environment's Advanced options include Uninstall Updates, which can remove the latest quality or feature update when it is causing the boot failure. Because the problem began right after the update and Startup Repair failed, removing the update is the least destructive step that targets the probable cause, and it keeps both user files and installed applications. Resetting, cleaning the disk or reinstalling would lose applications, data or both.",
      "rationales": {
        "A": "Correct: WinRE can uninstall the latest quality update, reversing the probable cause while keeping files and apps.",
        "B": "Remove everything erases the user's files and applications, which the user needs to keep.",
        "C": "diskpart clean wipes the disk's partition information, making all data on it inaccessible.",
        "D": "A clean install replaces the existing installation, removing applications and any files not backed up."
      },
      "topic": "Software Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common Windows OS issues",
      "difficulty": "hard",
      "source": "220-1202 objectives – Troubleshoot common Windows OS issues (update failures, failure to boot; WinRE uninstall updates)"
    },
    {
      "stem": "A technician is implementing an approved change to upgrade the company's accounting software. Partway through, the upgrade causes the application to stop working for all users. Which of the following parts of the change request should the technician follow?",
      "options": [
        "Risk analysis",
        "Scope of the change",
        "End-user acceptance",
        "Rollback plan"
      ],
      "answer": "D",
      "explanation": "A rollback (backout) plan documents how to return systems to their previous working state if a change fails. It is written and approved before implementation, so the technician can restore service quickly instead of improvising. Risk analysis and scope are completed during planning and do not tell the technician how to undo the change.",
      "rationales": {
        "A": "Risk analysis estimates the likelihood and impact of problems during planning; it does not describe how to undo a change.",
        "B": "The scope defines what the change covers, not how to recover when it fails.",
        "C": "End-user acceptance confirms that a completed change works for users; it does not apply to a failed change.",
        "D": "Correct: the rollback plan describes how to restore the previous working state when a change fails."
      },
      "topic": "Operational Procedures",
      "subtopic": "Given a scenario, apply change management procedures",
      "difficulty": "easy",
      "source": "220-1202 objectives – Apply change management procedures (rollback plan)"
    },
    {
      "stem": "A server is backed up with a full backup every Sunday at 11 p.m. and a differential backup Monday through Saturday at 11 p.m. On Thursday at 10 a.m., the server's data is corrupted. Which of the following should the technician restore to recover the most recent data using the fewest backup sets?",
      "options": [
        "Sunday's full backup and Thursday's differential backup",
        "Sunday's full backup and Wednesday's differential backup",
        "Sunday's full backup and Monday's through Wednesday's differential backups",
        "Wednesday's differential backup only"
      ],
      "answer": "B",
      "explanation": "A differential backup contains every change since the last full backup, so each new differential supersedes the previous one. A restore needs only the last full backup plus the most recent differential, which here is Wednesday's, because Thursday's backup has not yet run at 10 a.m. Incremental backups, by contrast, hold only the changes since the previous backup and must all be restored in sequence.",
      "rationales": {
        "A": "Thursday's differential runs at 11 p.m., after the corruption at 10 a.m., so it does not exist yet.",
        "B": "Correct: the last full backup plus the latest differential restores all data with only two sets.",
        "C": "Each differential already contains all earlier changes, so restoring Monday's and Tuesday's adds sets without adding data.",
        "D": "A differential holds only the changes since the full backup, so it cannot be restored without the full backup."
      },
      "topic": "Operational Procedures",
      "subtopic": "Given a scenario, implement workstation backup and recovery methods",
      "difficulty": "hard",
      "source": "220-1202 objectives – Implement workstation backup and recovery methods (full, incremental, differential)"
    },
    {
      "stem": "A technician must dispose of several empty laser printer toner cartridges and wants the manufacturer's handling and disposal guidance for the toner. Which of the following documents should the technician consult?",
      "options": [
        "Acceptable use policy (AUP)",
        "Service-level agreement (SLA)",
        "Safety data sheet (SDS)",
        "End-user license agreement (EULA)"
      ],
      "answer": "C",
      "explanation": "A safety data sheet, formerly called a material safety data sheet (MSDS), is supplied by the manufacturer of a hazardous product. It describes the substance's hazards, safe handling, first aid, spill cleanup and disposal considerations, so it is the first reference for disposing of toner. Local regulations still govern where the cartridges go, and many manufacturers run recycling programs.",
      "rationales": {
        "A": "An AUP sets rules for how employees may use company IT resources, not how to handle materials.",
        "B": "An SLA defines service levels between a provider and a customer, such as response times.",
        "C": "Correct: the SDS gives a product's hazards and its safe handling and disposal guidance.",
        "D": "A EULA sets the licensing terms for software and says nothing about consumables."
      },
      "topic": "Operational Procedures",
      "subtopic": "Summarize environmental impacts and local environment controls",
      "difficulty": "easy",
      "source": "220-1202 objectives – Environmental impacts and local environment controls (MSDS/SDS documentation for handling and disposal)"
    },
    {
      "stem": "A company wants employees to use generative AI to summarize internal reports that contain confidential financial data. Management is concerned that the data could be retained by the AI provider or used to train a model available to others. Which of the following is the best approach in this scenario?",
      "options": [
        "Provide a private AI tool whose data stays under company control",
        "Allow employees to use any public AI chatbot they prefer",
        "Have employees paste the reports into public chatbots in parts",
        "Require employees to check public chatbot summaries for accuracy"
      ],
      "answer": "A",
      "explanation": "A private AI deployment, either self-hosted or an enterprise service with contractual data protections, keeps prompts and documents within the organization's control and out of public model training. Public AI tools may retain submitted data, which creates data security and privacy risks for confidential information. Checking output accuracy addresses hallucinations but does nothing to protect data that has already been submitted.",
      "rationales": {
        "A": "Correct: a private AI tool keeps confidential prompts and documents under the company's control and out of public training.",
        "B": "Public chatbots may retain and train on submitted data, exposing confidential information.",
        "C": "Splitting the reports still sends all of the confidential data to the public provider.",
        "D": "Checking summaries addresses accuracy and hallucinations, not the exposure of the submitted data."
      },
      "topic": "Operational Procedures",
      "subtopic": "Explain basic concepts related to artificial intelligence (AI)",
      "difficulty": "medium",
      "source": "220-1202 objectives – Basic concepts related to AI (private vs. public: data security, data privacy)"
    }
  ]
}
```
