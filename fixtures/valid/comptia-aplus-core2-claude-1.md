```json
{
  "format": "domcq/1",
  "exam": "comptia-aplus-core2",
  "set": "CompTIA A+ Core 2 (220-1202) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "An administrator has just linked a new Group Policy Object that applies updated security settings to the Sales organizational unit. A user in that OU needs the new settings applied immediately instead of waiting for the next background refresh. Which of the following commands should the technician run on the user's workstation?",
      "options": [
        "gpresult /r",
        "whoami /groups",
        "gpupdate /force",
        "net use"
      ],
      "answer": "C",
      "explanation": "gpupdate refreshes Group Policy on the local computer, and the /force switch reapplies every policy setting rather than only those that have changed, so the user does not have to wait for the background refresh (by default about every 90 minutes). gpresult /r only reports which policies were applied, which is useful for confirming the result afterward. whoami /groups lists the user's group memberships, and net use manages mapped network drives.",
      "topic": "Operating Systems",
      "subtopic": "Given a scenario, use the appropriate Microsoft command-line tools",
      "difficulty": "easy",
      "source": "220-1202 Objective 1.5: Microsoft command-line tools – gpupdate and gpresult"
    },
    {
      "stem": "A small accounting firm has five laptops running Windows 11 Home. The firm is setting up an Active Directory domain and wants to join the laptops to it and manage BitLocker drive encryption centrally through Group Policy. Which of the following is the most cost-effective way to meet these requirements?",
      "options": [
        "Upgrade each laptop to Windows 11 Pro",
        "Upgrade each laptop to Windows 11 Pro for Workstations",
        "Turn on Device Encryption and sign in with Microsoft accounts",
        "Join each laptop to the domain from the System Properties dialog"
      ],
      "answer": "A",
      "explanation": "Windows 11 Home cannot join an Active Directory domain and does not support Group Policy management or full BitLocker, so an edition upgrade is required. Windows 11 Pro is the lowest-cost edition that adds domain join, Group Policy and BitLocker, and Home can be upgraded to Pro in place with a product key. Pro for Workstations includes the same features but costs more and targets high-end hardware, while Home's Device Encryption cannot be managed through domain Group Policy.",
      "topic": "Operating Systems",
      "subtopic": "Compare and contrast basic features of Microsoft Windows editions",
      "difficulty": "medium",
      "source": "220-1202 Objective 1.3: Windows editions – feature differences (domain vs workgroup, BitLocker, gpedit.msc) and upgrade paths"
    },
    {
      "stem": "A user reports that a Linux workstation shows \"No space left on device\" errors when saving files. The technician wants a quick summary of the total, used and available space on every mounted file system. Which of the following commands should the technician run?",
      "options": [
        "du -sh /home",
        "fsck /dev/sda1",
        "top",
        "df -h"
      ],
      "answer": "D",
      "explanation": "df reports space at the file-system level, listing size, used space, available space and mount point for every mounted file system; -h shows the values in human-readable units such as G and M. du reports how much space files and directories consume, which helps find what is filling a volume once the full file system is identified, but it does not show free space per mount. fsck checks and repairs file-system integrity, and top shows running processes with their CPU and memory use.",
      "topic": "Operating Systems",
      "subtopic": "Identify common features and tools of the Linux client/desktop operating system",
      "difficulty": "medium",
      "source": "220-1202 Objective 1.9: Linux commands – informational (df, du, top) and filesystem management (fsck)"
    },
    {
      "stem": "A manager is concerned that if her company MacBook is stolen, a thief could read the files on its internal drive. The technician needs to make sure the startup disk's contents cannot be read without the user's password or a recovery key. Which of the following macOS features should the technician enable?",
      "options": [
        "Time Machine",
        "FileVault",
        "Keychain",
        "Gatekeeper"
      ],
      "answer": "B",
      "explanation": "FileVault provides full-disk encryption for the Mac's startup volume, so its contents cannot be read unless the disk is unlocked with an authorized user's password or the recovery key. The recovery key should be stored securely (for example, escrowed by the company's device management), because losing both the password and the key means losing the data. Time Machine creates backups, Keychain stores passwords and certificates, and Gatekeeper checks that apps come from identified developers before they run.",
      "topic": "Operating Systems",
      "subtopic": "Explain common features and tools of the macOS/desktop operating system",
      "difficulty": "easy",
      "source": "220-1202 Objective 1.8: macOS features and tools – FileVault"
    },
    {
      "stem": "A technician is preparing a desktop PC for an in-place upgrade from Windows 10 to Windows 11. The PC has a supported 64-bit CPU, 16GB of RAM, a 512GB SSD and an enabled TPM 2.0 chip, but the compatibility check fails. The technician finds that the firmware is running in legacy BIOS (CSM) mode and the system disk uses the MBR partition style. The user's data and applications must be kept. Which of the following should the technician do?",
      "options": [
        "Switch the firmware to UEFI with Secure Boot and keep the MBR system disk",
        "Clear the TPM, then run the upgrade from USB media while in legacy mode",
        "Convert the system disk to GPT in place, then switch to UEFI and enable Secure Boot",
        "Wipe the disk with diskpart, convert it to GPT, then switch to UEFI mode"
      ],
      "answer": "C",
      "explanation": "Windows 11 requires UEFI firmware that is Secure Boot capable, and a Windows system disk booted through UEFI must use GPT. Microsoft's MBR2GPT tool converts the system disk from MBR to GPT in place without deleting data, and the firmware is switched to UEFI (CSM disabled) with Secure Boot enabled only after the conversion, because UEFI cannot boot Windows from the MBR disk. Running diskpart clean erases everything on the disk, and clearing the TPM does nothing about the legacy-BIOS problem. As with any partition change, the data should be backed up first.",
      "topic": "Operating Systems",
      "subtopic": "Given a scenario, perform OS installations and upgrades in a diverse environment",
      "difficulty": "hard",
      "source": "220-1202 Objective 1.2: OS installations and upgrades – partitioning (GPT vs MBR), upgrade considerations, hardware compatibility"
    },
    {
      "stem": "A company is moving to a cloud-based productivity suite for email, file storage and office applications. User accounts are created in the company's on-premises directory. The IT manager wants every new hire to sign in to the suite with the same credentials they use on premises and to get access to its apps without a technician setting it up by hand. Which of the following should the administrator configure? Choose TWO.",
      "options": [
        "Identity synchronization between the on-premises directory and the cloud tenant",
        "Folder redirection of each user's Documents folder to an on-premises file server",
        "A local account on each workstation that matches the user's cloud username",
        "Automatic license assignment based on membership in a directory group"
      ],
      "answer": "AD",
      "explanation": "Identity synchronization (for example, Microsoft Entra Connect) copies user accounts from the on-premises directory to the cloud tenant so users sign in with the same credentials. A synchronized account still cannot use the suite's apps until it is licensed, and group-based license assignment grants a license automatically when the user is added to the appropriate group. Folder redirection and local workstation accounts do nothing to provision access to cloud services.",
      "topic": "Operating Systems",
      "subtopic": "Given a scenario, install and configure cloud-based productivity tools",
      "difficulty": "medium",
      "source": "220-1202 Objective 1.11: Cloud-based productivity tools – identity synchronization and licensing assignment"
    },
    {
      "stem": "Employees notice posters in the building lobby advertising a free lunch voucher. Scanning the QR code on the poster with a phone opens a web page that looks like the company's sign-in portal and asks for network credentials. Which of the following describes this attack?",
      "options": [
        "Smishing",
        "QR code phishing",
        "Whaling",
        "Evil twin"
      ],
      "answer": "B",
      "explanation": "QR code phishing (sometimes called quishing) uses a QR code to send victims to a malicious site, often a fake sign-in page that harvests credentials. Because phones often show a shortened or hidden URL and the link never passes through email filters, this attack can bypass the usual defenses. Smishing uses text messages, whaling targets senior executives, and an evil twin is a rogue access point that imitates a legitimate wireless network.",
      "topic": "Security",
      "subtopic": "Compare and contrast common social engineering attacks, threats, and vulnerabilities",
      "difficulty": "easy",
      "source": "220-1202 Objective 2.5: Social engineering – QR code phishing, smishing, whaling; threats – evil twin"
    },
    {
      "stem": "A small office is replacing its wireless access point, and every client device supports WPA3. The owner wants to prevent attackers from capturing authentication handshakes and cracking the Wi-Fi passphrase offline, and does not want to run an authentication server. Which of the following configurations should the technician choose?",
      "options": [
        "WPA3/WPA2-Personal transition mode",
        "WPA2-Personal with AES and a long passphrase",
        "WPA2-Enterprise with 802.1X and RADIUS",
        "WPA3-Personal using SAE only"
      ],
      "answer": "D",
      "explanation": "WPA3-Personal replaces the WPA2 pre-shared key handshake with Simultaneous Authentication of Equals (SAE), which resists offline dictionary attacks because a captured handshake cannot be used to test passphrase guesses offline; each guess requires interacting with the access point. WPA2-Personal handshakes can be captured and cracked offline, and a long passphrase only makes that slower. Transition mode still accepts WPA2 connections, so clients can be pushed onto the weaker handshake, and WPA2-Enterprise requires a RADIUS server that the owner does not want to run.",
      "topic": "Security",
      "subtopic": "Compare and contrast wireless security protocols and authentication methods",
      "difficulty": "hard",
      "source": "220-1202 Objective 2.3: Wireless security protocols (WPA2, WPA3) and authentication methods (RADIUS)"
    },
    {
      "stem": "A technician is removing malware from a customer's Windows 11 Home laptop. The technician has already verified the symptoms, quarantined the laptop, disabled System Restore, updated the anti-malware software and removed the infection, and a follow-up scan is clean. According to best-practice malware removal procedures, which of the following should the technician do next?",
      "options": [
        "Re-enable System Restore and create a new restore point",
        "Schedule regular scans and run OS and application updates",
        "Educate the customer on how to avoid future infections",
        "Reimage the laptop from the manufacturer's recovery partition"
      ],
      "answer": "A",
      "explanation": "CompTIA's malware removal procedure is: investigate and verify symptoms, quarantine, disable System Restore (Windows Home), remediate (update anti-malware, then scan and remove), re-enable System Restore and create a restore point, schedule scans and run updates, and finally educate the end user. System Restore was disabled earlier so that infected restore points were deleted and could not reintroduce the malware. Once the system is clean, re-enabling it and creating a fresh restore point gives the user a known-good recovery point.",
      "topic": "Security",
      "subtopic": "Given a scenario, implement procedures for basic small office/home office (SOHO) malware removal",
      "difficulty": "medium",
      "source": "220-1202 Objective 2.6: Procedures for basic SOHO malware removal (seven-step process)"
    },
    {
      "stem": "A user belongs to both the Marketing and Sales groups. The \\\\FS01\\Campaigns share grants the Everyone group the Read share permission. On the shared folder, NTFS permissions grant the Marketing group Modify and the Sales group Read, and no Deny entries exist. The user connects to the share from a workstation and tries to save changes to a file in it. Which of the following will occur?",
      "options": [
        "The save succeeds because the Marketing group's NTFS Modify permission applies",
        "The file cannot be opened because the Marketing and Sales permissions conflict",
        "The file opens, but the save fails because the share permission allows only Read",
        "The save succeeds because NTFS permissions always override share permissions"
      ],
      "answer": "C",
      "explanation": "When a folder is accessed over the network, Windows works out the effective share permission and the effective NTFS permission separately, then applies the more restrictive of the two. NTFS permissions are cumulative across groups, so the user's NTFS permission is Modify, but the only share permission is Everyone: Read, so the effective access is Read. To let the user edit files, the share permission must be raised to Change or Full Control; NTFS permissions alone govern access only when the user is signed in locally.",
      "topic": "Security",
      "subtopic": "Given a scenario, configure and apply basic Microsoft Windows OS security settings",
      "difficulty": "hard",
      "source": "220-1202 Objective 2.2: Windows OS security settings – NTFS vs share permissions"
    },
    {
      "stem": "A company issues smartphones to its field sales staff. Management wants to make sure that, if a phone is lost or stolen, whoever finds it cannot read the company data stored on it. Which of the following should the technician configure? Choose TWO.",
      "options": [
        "A remote backup app that syncs the phone's data to cloud storage",
        "Full-device encryption protected by a strong screen-lock passcode",
        "A locator app that reports the phone's current GPS location",
        "Remote wipe capability enforced through the MDM solution"
      ],
      "answer": "BD",
      "explanation": "Full-device encryption combined with a strong screen-lock passcode keeps stored data unreadable to anyone who cannot unlock the phone. Remote wipe through MDM lets the company erase the data as soon as the loss is reported. A remote backup app protects the company's copy of the data and a locator app helps find the phone, but neither stops the finder from reading what is on the device.",
      "topic": "Security",
      "subtopic": "Given a scenario, apply common methods for securing mobile devices",
      "difficulty": "medium",
      "source": "220-1202 Objective 2.8: Securing mobile devices – device encryption, screen locks, remote wipes, locator apps, MDM"
    },
    {
      "stem": "A company plans to donate its old desktop PCs, which contain magnetic hard drives, to a local school. The drives must remain usable, but none of the company's data should be recoverable from them. Which of the following should the technician do?",
      "options": [
        "Overwrite every sector of each drive with a disk-wiping utility",
        "Perform a quick format of each drive and reinstall the OS",
        "Degauss each drive with a strong electromagnetic field",
        "Delete all partitions on each drive using Disk Management"
      ],
      "answer": "A",
      "explanation": "A disk-wiping utility overwrites every sector, so the previous data cannot be recovered, yet the drive remains fully usable for the school. A quick format or deleting partitions removes only the file system structures, leaving the data recoverable with readily available tools. Degaussing destroys the data on magnetic media but also erases the drive's factory servo information, which makes a hard drive unusable.",
      "topic": "Security",
      "subtopic": "Compare and contrast common data destruction and disposal methods",
      "difficulty": "easy",
      "source": "220-1202 Objective 2.9: Data destruction – erasing/wiping vs standard formatting vs degaussing"
    },
    {
      "stem": "Shortly after a user installed an updated graphics driver, a Windows 11 workstation began showing a blue screen error a few seconds after the user signs in. The technician is able to start the computer in Safe Mode. Which of the following should the technician do first to fix the issue?",
      "options": [
        "Reimage the workstation from the company's standard image",
        "Replace the graphics card with a known-good one",
        "Run chkdsk /r on the system drive",
        "Roll back the graphics driver in Device Manager"
      ],
      "answer": "D",
      "explanation": "The blue screens began right after the driver update, so the new driver is the most likely cause, and the least invasive fix is to undo that change. Safe Mode loads only a basic display driver, which lets the technician open Device Manager and use Roll Back Driver to restore the previous version. Disk checks, reimaging or replacing hardware should be considered only if rolling back the driver does not resolve the problem.",
      "topic": "Software Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common Windows OS issues",
      "difficulty": "easy",
      "source": "220-1202 Objective 3.1: Troubleshoot Windows OS issues – BSOD; roll back updates and drivers"
    },
    {
      "stem": "A user's Android phone has started showing full-screen ads even when no apps are open, its mobile data usage has jumped sharply, and the battery drains much faster than before. The symptoms began after the user installed a free flashlight app from a link in a text message instead of from the Google Play Store. Which of the following is the most likely cause?",
      "options": [
        "The battery is failing and needs to be replaced",
        "A pending OS update is downloading in the background",
        "The sideloaded app is malicious and running in the background",
        "The phone's cellular APN settings have been misconfigured"
      ],
      "answer": "C",
      "explanation": "Installing apps from untrusted sources bypasses the official store's screening, and unexpected ads outside any app, a sharp rise in data usage and fast battery drain together are classic signs of a malicious app running in the background. A failing battery would not cause ads or extra data use, an OS update would not display ads, and a misconfigured APN would cause a loss of mobile data rather than higher usage. The technician should remove the app, scan the device and advise the user to install apps only from official stores.",
      "topic": "Software Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common mobile OS and application security issues",
      "difficulty": "medium",
      "source": "220-1202 Objective 3.3: Mobile security issues – application source, high network traffic, high number of ads"
    },
    {
      "stem": "On one domain-joined Windows workstation, users see authentication errors when they try to open network shares, while other workstations on the same subnet can access the shares normally. The technician notices that the workstation's clock is 12 minutes ahead of the domain controller's clock. Which of the following should the technician do?",
      "options": [
        "Rejoin the workstation to the domain to reset its computer account",
        "Resynchronize the workstation's clock with the domain's time source",
        "Flush the DNS cache and renew the workstation's IP configuration",
        "Rebuild the affected users' Windows profiles on the workstation"
      ],
      "answer": "B",
      "explanation": "Active Directory authentication uses Kerberos, which by default rejects requests when a client's clock differs from the domain controller's by more than 5 minutes, so a 12-minute skew causes authentication failures when accessing network resources. Resynchronizing with the domain time hierarchy (for example, w32tm /resync with the Windows Time service running) fixes the issue, and if the clock keeps losing time the CMOS battery should be checked. Rejoining the domain, renewing the IP configuration or rebuilding profiles does not correct the time difference.",
      "topic": "Software Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common Windows OS issues",
      "difficulty": "hard",
      "source": "220-1202 Objective 3.1: Troubleshoot Windows OS issues – time drift"
    },
    {
      "stem": "A user reports that the web browser's home page and default search engine keep changing to an unfamiliar site, and pop-up ads appear even on websites that normally have none. A full anti-malware scan of the PC finds nothing, and the problem occurs only in that one browser. Which of the following should the technician do to fix the issue?",
      "options": [
        "Remove unrecognized browser extensions and reset the browser settings",
        "Clear the browser cache and delete the saved passwords",
        "Flush the DNS cache and renew the network adapter's IP address",
        "Turn off the browser's pop-up blocker and enable private browsing"
      ],
      "answer": "A",
      "explanation": "Symptoms confined to one browser, with a clean system-wide scan, point to a malicious or unwanted extension (a browser hijacker) that changes the home page and search engine and injects ads. Removing extensions the user does not recognize and resetting the browser to its default settings removes the hijacker and its changes. Clearing the cache does not remove extensions, a DNS problem would affect every browser, and turning off the pop-up blocker would make things worse.",
      "topic": "Software Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common personal computer (PC) security issues",
      "difficulty": "medium",
      "source": "220-1202 Objective 3.4: PC security issues – browser-related symptoms (pop-ups, redirection); Objective 2.11: extensions"
    },
    {
      "stem": "A technician configures a full backup of a file server every Sunday night. For the daily backups on Monday through Saturday, the manager wants each backup to be smaller than a full backup, and a restore on any day to need only the Sunday full backup plus one other backup set. Which of the following backup types should the technician use for the daily backups?",
      "options": [
        "Incremental",
        "Synthetic full",
        "Full",
        "Differential"
      ],
      "answer": "D",
      "explanation": "A differential backup copies everything that has changed since the last full backup, so each daily set grows over the week but stays smaller than a full backup, and a restore needs only the full backup plus the most recent differential. An incremental backup copies only what changed since the previous backup of any type, so a restore needs the full backup plus every incremental in sequence. Full and synthetic full backups each produce a complete, full-size backup set.",
      "topic": "Operational Procedures",
      "subtopic": "Given a scenario, implement workstation backup and recovery methods",
      "difficulty": "medium",
      "source": "220-1202 Objective 4.3: Backup and recovery – backup types (full, incremental, differential, synthetic full)"
    },
    {
      "stem": "A technician needs to know how to clean up spilled toner safely, what first aid to give if toner gets into someone's eyes, and how to dispose of the empty cartridge. Which of the following documents should the technician consult?",
      "options": [
        "Service-level agreement",
        "Acceptable use policy",
        "Safety data sheet",
        "End-user license agreement"
      ],
      "answer": "C",
      "explanation": "A safety data sheet (SDS, formerly MSDS) is supplied by the manufacturer for products containing hazardous substances, such as toner, and describes the hazards, safe handling, spill cleanup, first-aid measures and disposal requirements. A service-level agreement defines service commitments, an acceptable use policy defines how users may use company systems, and an end-user license agreement sets the terms for using software.",
      "topic": "Operational Procedures",
      "subtopic": "Summarize environmental impacts and local environment controls",
      "difficulty": "easy",
      "source": "220-1202 Objective 4.5: Environmental impacts – MSDS/SDS documentation for handling and disposal (toner)"
    },
    {
      "stem": "A change to install a security patch on all web servers was approved for next Saturday's maintenance window. On Tuesday, the vendor announces that the vulnerability is being actively exploited, and the security team wants the patch installed as soon as possible. Which of the following is the best approach?",
      "options": [
        "Install the patch now, since security patches are exempt from change control",
        "Submit it as an emergency change for expedited approval with a rollback plan",
        "Wait for Saturday, since an approved change cannot be moved to another date",
        "Install the patch now and submit a standard change request after it is done"
      ],
      "answer": "B",
      "explanation": "Change management includes an emergency change type for urgent situations, such as an actively exploited vulnerability, which follows an expedited approval path instead of bypassing control. The request still documents the scope, risk analysis and rollback plan so it can be reviewed quickly and the change undone if it fails. No change is exempt from the process, waiting leaves a known exploited weakness open, and a standard change is a pre-approved, low-risk routine change rather than a way to record work after the fact.",
      "topic": "Operational Procedures",
      "subtopic": "Given a scenario, apply change management procedures",
      "difficulty": "medium",
      "source": "220-1202 Objective 4.2: Change management – change type, risk analysis, rollback plan, change board approvals"
    },
    {
      "stem": "A support manager wants technicians to paste full ticket histories, including customers' names, home addresses and account numbers, into a free public generative AI chatbot so it can draft replies faster. Which of the following is the greatest concern with pasting this information into the chatbot?",
      "options": [
        "Replies could contain invented details that technicians fail to notice",
        "Replies could reuse wording from other sources and count as plagiarism",
        "Replies could reflect bias against certain groups of customers",
        "Customer PII entered could be retained by the provider or used for training"
      ],
      "answer": "D",
      "explanation": "Prompts entered into a public AI service leave the company's control and, depending on the provider's terms, may be logged, retained, reviewed or used to train future models, which exposes customers' PII and may breach privacy regulations and company policy. Using an approved private or enterprise AI service with data-protection terms, or removing PII before submitting text, addresses this risk. Hallucinations, plagiarism and bias are real AI limitations, but they concern the quality of the output rather than the exposure of the sensitive data being entered.",
      "topic": "Operational Procedures",
      "subtopic": "Explain basic concepts related to artificial intelligence (AI)",
      "difficulty": "medium",
      "source": "220-1202 Objective 4.10: Basic AI concepts – private vs public AI (data security, data privacy), limitations"
    }
  ]
}
```
