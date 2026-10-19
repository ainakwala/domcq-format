```json
{
  "format": "domcq/1",
  "exam": "comptia-aplus-core1",
  "set": "CompTIA A+ Core 1 (220-1201) practice – Mixed domains 1",
  "questions": [
    {
      "stem": "A user wants to pay for purchases by holding a smartphone within a few centimeters of the store's checkout terminal. Which of the following wireless technologies does this feature use?",
      "options": [
        "Bluetooth Low Energy",
        "Near-field communication",
        "Wi-Fi Direct",
        "Infrared"
      ],
      "answer": "B",
      "explanation": "Tap-to-pay uses near-field communication (NFC), which works only over a few centimeters at 13.56 MHz. That very short range is deliberate: the user must physically bring the phone to the reader, which limits eavesdropping and accidental transactions. Bluetooth and Wi-Fi Direct work over meters and need pairing or connection setup, so they are not used for contactless payment.",
      "rationales": {
        "A": "Wrong: Bluetooth Low Energy works over several meters and uses pairing, not the tap-at-the-terminal method used for payments.",
        "B": "Correct: NFC operates over a few centimeters, which is exactly the tap-to-pay interaction with a payment terminal.",
        "C": "Wrong: Wi-Fi Direct creates peer-to-peer Wi-Fi links over meters for file sharing or printing, not contactless payments.",
        "D": "Wrong: infrared needs line of sight and is used for remote controls, not for smartphone payments at a terminal."
      },
      "topic": "Mobile Devices",
      "subtopic": "Compare and contrast accessories and connectivity options for mobile devices",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 exam objectives, 1.2 Compare and contrast accessories and connectivity options for mobile devices (NFC)"
    },
    {
      "stem": "A company lets employees read corporate email on their personal smartphones. When an employee leaves, management wants to remove company email and documents from the device without erasing the employee's personal photos and apps. Which of the following should the technician implement?",
      "options": [
        "Mobile application management for the corporate apps",
        "A remote factory reset triggered by the help desk",
        "Bluetooth pairing restricted by a shared PIN",
        "Cellular location services with tracking alerts"
      ],
      "answer": "A",
      "explanation": "Mobile application management (MAM) applies policies to specific managed apps and the data inside them rather than to the whole device. Because corporate email and documents live in managed apps, IT can perform a selective wipe that removes only that data and leaves personal content untouched. This is why MAM suits bring-your-own-device (BYOD) programs, where a full device wipe would destroy the employee's own data.",
      "rationales": {
        "A": "Correct: MAM controls corporate apps and their data, so a selective wipe removes company data and leaves personal content alone.",
        "B": "Wrong: a factory reset erases the entire device, including the employee's personal photos and apps.",
        "C": "Wrong: a Bluetooth pairing PIN controls accessory connections and cannot remove corporate data from the phone.",
        "D": "Wrong: location services can help find a device but do not remove company email or documents."
      },
      "topic": "Mobile Devices",
      "subtopic": "Given a scenario, configure basic mobile device network connectivity and provide application support",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 exam objectives, 1.3 Mobile device network connectivity and application support (MDM/MAM)"
    },
    {
      "stem": "A technician replaces a failed M.2 wireless card in a laptop. Windows detects the new card and the driver installs without errors, but the laptop only sees wireless networks when it is in the same room as the access point, and the signal is very weak. Other laptops in the office show a strong signal. Which of the following should the technician check first?",
      "options": [
        "Whether the driver supports WPA3 encryption",
        "Whether the display inverter is seated correctly",
        "Whether the antenna leads are attached to the card",
        "Whether the access point is broadcasting its SSID"
      ],
      "answer": "C",
      "explanation": "In most laptops the Wi-Fi antennas run through the display lid and connect to the wireless card with small coaxial leads that snap onto terminals on the card. If the leads are not reattached after a card swap, the card still works and is detected by the OS, but it can only pick up very nearby signals. Reconnecting the leads to the correct terminals is a standard step when replacing a laptop wireless card.",
      "rationales": {
        "A": "Wrong: an encryption mismatch would stop the laptop joining a network, not make every network appear weak and short-ranged.",
        "B": "Wrong: an inverter powers older CCFL backlights; it affects screen brightness, not wireless signal strength.",
        "C": "Correct: without the antenna leads connected, the card is detected but receives only very weak, short-range signals.",
        "D": "Wrong: other laptops see a strong signal, so the access point is broadcasting normally and is not the cause."
      },
      "topic": "Mobile Devices",
      "subtopic": "Given a scenario, monitor mobile device hardware and use appropriate replacement techniques",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 exam objectives, 1.1 Monitor mobile device hardware and use appropriate replacement techniques (laptop component replacement)"
    },
    {
      "stem": "A help desk technician needs to connect to employees' Windows workstations using Remote Desktop Protocol, but a firewall between the help desk and the workstations blocks the sessions. Which of the following ports should be opened on the firewall?",
      "options": [
        "TCP 22",
        "TCP 23",
        "TCP 445",
        "TCP 3389"
      ],
      "answer": "D",
      "explanation": "Remote Desktop Protocol listens on port 3389 (TCP, with UDP 3389 also used by newer versions for better performance). Opening this port lets RDP clients reach the Remote Desktop service on the workstations. Knowing the well-known port numbers lets a technician quickly tell which firewall rule a service needs.",
      "rationales": {
        "A": "Wrong: TCP 22 is SSH, used for encrypted command-line remote access, not Remote Desktop.",
        "B": "Wrong: TCP 23 is Telnet, an unencrypted legacy command-line protocol.",
        "C": "Wrong: TCP 445 is SMB/CIFS, used for Windows file and printer sharing.",
        "D": "Correct: TCP 3389 is the well-known port for Remote Desktop Protocol."
      },
      "topic": "Networking",
      "subtopic": "Compare and contrast Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) ports, protocols",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 exam objectives, 2.1 TCP and UDP ports and protocols (RDP, port 3389)"
    },
    {
      "stem": "An administrator has already published SPF and DKIM records for the company's email domain. The administrator now wants receiving mail servers to quarantine or reject messages that fail these checks and to send reports about those failures back to the company. Which of the following should the administrator add to the domain's DNS?",
      "options": [
        "An MX record with a lower preference value",
        "A CNAME record that aliases the mail server",
        "A second TXT record containing an SPF policy",
        "An AAAA record for the outbound mail server",
        "A TXT record containing a DMARC policy"
      ],
      "answer": "E",
      "explanation": "DMARC is published as a TXT record (at _dmarc.<domain>) and builds on SPF and DKIM. It tells receiving servers what to do with mail that fails those checks (none, quarantine or reject) and where to send aggregate and failure reports. SPF only lists which servers may send for the domain, and DKIM only publishes the key used to verify message signatures; neither defines a handling policy or reporting.",
      "rationales": {
        "A": "Wrong: MX records direct inbound mail to the domain's mail servers; the preference value sets priority, not handling of failed checks.",
        "B": "Wrong: a CNAME only aliases one host name to another and carries no email authentication policy.",
        "C": "Wrong: a domain should have only one SPF record, and SPF lists authorized senders without setting a reject policy or reports.",
        "D": "Wrong: an AAAA record maps a host name to an IPv6 address and does nothing for email authentication.",
        "E": "Correct: a DMARC TXT record sets the quarantine or reject policy for failed SPF/DKIM checks and the reporting address."
      },
      "topic": "Networking",
      "subtopic": "Explain common network configuration concepts",
      "difficulty": "hard",
      "source": "CompTIA A+ 220-1201 exam objectives, 2.4 Common network configuration concepts (DNS TXT records: SPF, DKIM, DMARC)"
    },
    {
      "stem": "A technician is planning a wireless network for a warehouse where the 2.4 GHz band is heavily congested. Which of the following 802.11 standards operate only in the 5 GHz band? Choose TWO.",
      "options": [
        "802.11g",
        "802.11a",
        "802.11n",
        "802.11ac",
        "802.11b"
      ],
      "answer": "BD",
      "explanation": "802.11a (the original 54 Mbps 5 GHz standard) and 802.11ac (Wi-Fi 5) are defined only for the 5 GHz band. 802.11b and 802.11g use only 2.4 GHz, while 802.11n (Wi-Fi 4) can run in either 2.4 GHz or 5 GHz. Knowing each standard's bands helps a technician choose equipment and channels that avoid a crowded 2.4 GHz environment.",
      "rationales": {
        "A": "Wrong: 802.11g runs at up to 54 Mbps in the 2.4 GHz band only.",
        "B": "Correct: 802.11a operates only in the 5 GHz band.",
        "C": "Wrong: 802.11n (Wi-Fi 4) can operate in both the 2.4 GHz and 5 GHz bands.",
        "D": "Correct: 802.11ac (Wi-Fi 5) operates only in the 5 GHz band.",
        "E": "Wrong: 802.11b runs at up to 11 Mbps in the 2.4 GHz band only."
      },
      "topic": "Networking",
      "subtopic": "Explain wireless networking technologies",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 exam objectives, 2.2 Wireless networking technologies (frequencies and 802.11 standards)"
    },
    {
      "stem": "A small office wants to mount two IP cameras on a warehouse ceiling where there are no electrical outlets. The cameras support Power over Ethernet (PoE), but the existing switch does not supply PoE, and the office does not want to replace the switch. Which of the following should the technician install?",
      "options": [
        "A PoE injector",
        "A patch panel",
        "A network tap",
        "A cable modem"
      ],
      "answer": "A",
      "explanation": "A PoE injector sits between a non-PoE switch port and the powered device: it takes data from the switch, adds DC power from its own outlet, and sends both over the single Ethernet cable to the camera. This lets PoE devices be installed where there is no outlet, without replacing the switch. The injector itself needs power, but it can sit in the network closet next to the switch.",
      "rationales": {
        "A": "Correct: an injector adds power to the Ethernet cable from a non-PoE switch so the cameras need no local outlet.",
        "B": "Wrong: a patch panel just terminates and organizes cable runs; it supplies no power.",
        "C": "Wrong: a network tap copies traffic for monitoring and does not power devices.",
        "D": "Wrong: a cable modem connects the office to an ISP's coaxial network and does not power devices."
      },
      "topic": "Networking",
      "subtopic": "Compare and contrast common networking hardware devices",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 exam objectives, 2.5 Common networking hardware devices (Power over Ethernet injectors)"
    },
    {
      "stem": "A network printer in a small office receives its IP configuration from the router's DHCP server. Every few weeks the printer receives a different IP address and users can no longer print. The technician wants the printer always to get the same IP address while still obtaining its subnet mask, default gateway and DNS settings from DHCP. Which of the following should the technician configure?",
      "options": [
        "A DHCP exclusion for the printer's current address",
        "A DHCP reservation bound to the printer's MAC address",
        "A shorter DHCP lease time for every client",
        "An APIPA address configured on the printer",
        "A larger DHCP scope with more available addresses"
      ],
      "answer": "B",
      "explanation": "A DHCP reservation tells the DHCP server to always lease a specific IP address to the device with a given MAC address. The printer keeps a predictable address, and because it is still a DHCP client it continues to receive the subnet mask, gateway, DNS and other options centrally. An exclusion does the opposite: it stops the server from handing out that address at all, so the printer would then need a manually entered static configuration.",
      "rationales": {
        "A": "Wrong: an exclusion stops DHCP from issuing that address, so the printer would need manual static settings instead.",
        "B": "Correct: a reservation always leases the same address to the printer's MAC while still supplying all DHCP options.",
        "C": "Wrong: shorter leases make address changes more frequent, not less.",
        "D": "Wrong: APIPA addresses (169.254.x.x) are self-assigned when DHCP fails, are not on the office subnet and receive no gateway or DNS.",
        "E": "Wrong: a larger scope adds addresses but does not guarantee the printer keeps the same one."
      },
      "topic": "Networking",
      "subtopic": "Explain common network configuration concepts",
      "difficulty": "hard",
      "source": "CompTIA A+ 220-1201 exam objectives, 2.4 Common network configuration concepts (DHCP reservations and exclusions)"
    },
    {
      "stem": "A company is purchasing a server to host a critical database and requires memory that can detect and automatically correct single-bit errors to prevent data corruption. Which of the following RAM characteristics should the technician specify?",
      "options": [
        "SODIMM form factor",
        "Dual-channel configuration",
        "Non-parity unbuffered modules",
        "Error-correcting code (ECC)"
      ],
      "answer": "D",
      "explanation": "ECC memory stores extra check bits with each word of data, letting the memory controller detect and correct single-bit errors on the fly (and detect, but not correct, double-bit errors). This protects against silent data corruption, which is why ECC is standard in servers. The motherboard and CPU must also support ECC for it to work.",
      "rationales": {
        "A": "Wrong: SODIMM is the small form factor used in laptops and small systems and has nothing to do with error correction.",
        "B": "Wrong: dual-channel increases memory bandwidth by using two channels at once but does not correct errors.",
        "C": "Wrong: non-parity modules have no error-checking bits, so they cannot detect or correct errors.",
        "D": "Correct: ECC modules use extra check bits so the controller can detect and correct single-bit memory errors."
      },
      "topic": "Hardware",
      "subtopic": "Compare and contrast RAM characteristics",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 exam objectives, 3.3 RAM characteristics (error-correcting code)"
    },
    {
      "stem": "A technician is building a storage array from four identical 4 TB hard drives. The array must keep running if any two drives fail at the same time and, within that requirement, must provide the most usable capacity. Which of the following RAID levels should the technician configure?",
      "options": [
        "RAID 0",
        "RAID 5",
        "RAID 6",
        "RAID 10"
      ],
      "answer": "C",
      "explanation": "RAID 6 stripes data with two independent sets of parity, so it survives the failure of any two drives; with four 4 TB drives it provides 8 TB usable (the capacity of n - 2 drives). RAID 10 also gives 8 TB, but it mirrors pairs of drives and is lost if both failures hit the same mirrored pair, so it cannot guarantee survival of any two failures. RAID 5 has only single parity, and RAID 0 has no redundancy at all.",
      "rationales": {
        "A": "Wrong: RAID 0 stripes with no redundancy, so the failure of any single drive destroys the array.",
        "B": "Wrong: RAID 5 uses single parity and survives only one drive failure.",
        "C": "Correct: RAID 6 uses dual parity, survives any two drive failures and gives 8 TB usable from four 4 TB drives.",
        "D": "Wrong: RAID 10 survives two failures only if they are in different mirrored pairs, not any two drives."
      },
      "topic": "Hardware",
      "subtopic": "Compare and contrast storage devices",
      "difficulty": "hard",
      "source": "CompTIA A+ 220-1201 exam objectives, 3.4 Storage devices (drive configurations: RAID 0, 5, 6, 10)"
    },
    {
      "stem": "A technician is explaining the laser printer imaging process to a new employee. Which of the following steps immediately follows the exposing step?",
      "options": [
        "Transferring",
        "Charging",
        "Fusing",
        "Cleaning",
        "Developing"
      ],
      "answer": "E",
      "explanation": "The laser imaging process runs in this order: processing, charging, exposing, developing, transferring, fusing and cleaning. During exposing, the laser discharges the drum wherever the image should appear; in developing, charged toner is attracted to those discharged areas, forming a toner image on the drum. That image is then transferred to the paper and fused, and finally the drum is cleaned for the next page.",
      "rationales": {
        "A": "Wrong: transferring moves the toner image from the drum to the paper, which happens after developing.",
        "B": "Wrong: charging applies a uniform charge to the drum before the laser exposes it.",
        "C": "Wrong: fusing comes after transferring, near the end of the process.",
        "D": "Wrong: cleaning removes leftover toner and charge from the drum as the final step.",
        "E": "Correct: developing follows exposing, attracting toner to the drum areas the laser discharged."
      },
      "topic": "Hardware",
      "subtopic": "Given a scenario, perform appropriate printer maintenance",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 exam objectives, 3.8 Printer maintenance (laser imaging process)"
    },
    {
      "stem": "In a shared office, confidential HR documents are often left in the output tray of a networked multifunction printer, where other employees can read them. Which of the following printer settings would best prevent this?",
      "options": [
        "Hold print jobs until the user badges in at the device",
        "Set duplex printing as the default for all users",
        "Change the print driver from PCL to PostScript",
        "Enable network scanning to an SMB shared folder"
      ],
      "answer": "A",
      "explanation": "Secured printing (often called badge release or pull printing) holds each job in a queue until its owner authenticates at the device, for example with a badge or PIN. The document prints only while the user is standing at the printer, so it is never left unattended in the tray. This is a common security setting for shared multifunction devices.",
      "rationales": {
        "A": "Correct: secured print holds jobs until the owner authenticates at the device, so pages are not left in the tray.",
        "B": "Wrong: duplex printing saves paper but leaves confidential pages in the tray just the same.",
        "C": "Wrong: the driver language affects how pages are rendered, not who can collect them.",
        "D": "Wrong: scan-to-SMB sends scanned documents to a share; it has no effect on printed output."
      },
      "topic": "Hardware",
      "subtopic": "Given a scenario, deploy and configure multifunction devices/printers and settings",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 exam objectives, 3.7 Multifunction devices/printers and settings (security: secured prints, badging)"
    },
    {
      "stem": "A technician is preparing a new desktop for full-disk encryption that stores its encryption keys in hardware. The encryption software reports that no Trusted Platform Module is available, although the motherboard documentation states that the board includes a firmware-based TPM. Which of the following should the technician do?",
      "options": [
        "Install a hardware security module in a PCIe slot",
        "Disable Secure Boot in the UEFI firmware settings",
        "Enable the TPM in the UEFI firmware settings",
        "Switch the SATA controller to legacy IDE mode"
      ],
      "answer": "C",
      "explanation": "Many motherboards include a firmware TPM (Intel PTT or AMD fTPM) that is configured in UEFI and may be disabled by default. Until it is enabled there, the operating system and encryption software cannot see it. Once the TPM is enabled, tools such as BitLocker can seal the drive's keys to it so they are released only to a trusted, unmodified boot environment.",
      "rationales": {
        "A": "Wrong: an HSM is a separate key-management device used mainly by servers; the board already has a TPM that only needs enabling.",
        "B": "Wrong: disabling Secure Boot weakens boot protection and does not make a disabled TPM visible.",
        "C": "Correct: a firmware TPM must be enabled in UEFI before the OS and encryption software can use it.",
        "D": "Wrong: the SATA controller mode affects how drives are accessed and has no effect on TPM availability."
      },
      "topic": "Hardware",
      "subtopic": "Given a scenario, install and configure motherboards, central processing units (CPUs), and add-on cards",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 exam objectives, 3.5 Motherboards, CPUs and add-on cards (BIOS/UEFI settings, TPM)"
    },
    {
      "stem": "A company wants to consolidate several physical servers running different operating systems onto one powerful host. The virtualization software must run directly on the host hardware rather than on top of a general-purpose operating system. Which of the following should the company use?",
      "options": [
        "A Type 2 hypervisor",
        "A Type 1 hypervisor",
        "A container platform",
        "An application virtualization tool"
      ],
      "answer": "B",
      "explanation": "A Type 1 (bare-metal) hypervisor is installed directly on the server hardware and manages the virtual machines itself, with no general-purpose host OS underneath. This gives better performance and stability, which is why Type 1 hypervisors such as VMware ESXi are used for server consolidation. Each virtual machine can run its own, different operating system.",
      "rationales": {
        "A": "Wrong: a Type 2 hypervisor runs as an application on top of a host operating system, which the requirement rules out.",
        "B": "Correct: a Type 1 hypervisor runs directly on the hardware and hosts VMs that can each run a different OS.",
        "C": "Wrong: containers share the host's operating system kernel, so they cannot run different operating systems side by side.",
        "D": "Wrong: application virtualization isolates individual apps; it does not host complete server operating systems."
      },
      "topic": "Virtualization and Cloud Computing",
      "subtopic": "Explain virtualization concepts",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 exam objectives, 4.1 Virtualization concepts (hypervisor types)"
    },
    {
      "stem": "An online retailer's web servers are overwhelmed during holiday sales but sit mostly idle the rest of the year. The retailer wants a cloud service that automatically adds capacity during peaks, removes it afterward and charges only for the resources actually consumed. Which of the following cloud characteristics meet these requirements? Choose TWO.",
      "options": [
        "Rapid elasticity",
        "File synchronization",
        "Multitenancy",
        "Metered utilization",
        "Community cloud"
      ],
      "answer": "AD",
      "explanation": "Rapid elasticity is the ability to scale resources out and back in quickly, often automatically, as demand changes. Metered utilization means the provider measures the resources each customer consumes and bills accordingly, so the retailer pays for peak capacity only while it is in use. Together they let the retailer handle seasonal spikes without paying for idle servers all year.",
      "rationales": {
        "A": "Correct: rapid elasticity adds and removes capacity quickly as demand rises and falls.",
        "B": "Wrong: file synchronization keeps files consistent across devices and has nothing to do with scaling compute.",
        "C": "Wrong: multitenancy means many customers share the provider's infrastructure; it does not control scaling or billing.",
        "D": "Correct: metered utilization measures actual consumption so the customer is billed only for what is used.",
        "E": "Wrong: a community cloud is a deployment model shared by organizations with common needs, not a scaling or billing feature."
      },
      "topic": "Virtualization and Cloud Computing",
      "subtopic": "Summarize cloud computing concepts",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 exam objectives, 4.2 Cloud computing concepts (cloud characteristics)"
    },
    {
      "stem": "A desktop computer is unplugged from the wall every night. Each morning when it is turned on, the system clock shows the wrong date and time and the firmware settings have reverted to their defaults. Which of the following is most likely causing the issue?",
      "options": [
        "A failing power supply unit",
        "A faulty RAM module",
        "Incorrect OS time zone settings",
        "A depleted CMOS battery"
      ],
      "answer": "D",
      "explanation": "The small coin-cell (CMOS) battery on the motherboard keeps the real-time clock running, and on many boards preserves firmware settings, while the PC has no external power. When the battery is depleted, the clock and settings are lost every time power is fully removed, which is why the problem appears after the PC is unplugged overnight. Replacing the battery (typically a CR2032) and reconfiguring the firmware fixes it.",
      "rationales": {
        "A": "Wrong: a failing PSU causes random shutdowns or no power; it does not reset the clock when the PC is unplugged.",
        "B": "Wrong: faulty RAM causes crashes or POST errors, not lost date, time and firmware settings.",
        "C": "Wrong: a wrong time zone gives a consistent offset; it would not reset firmware settings to defaults.",
        "D": "Correct: a dead CMOS battery cannot keep the real-time clock and settings alive while the PC is unplugged."
      },
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot motherboards, RAM, CPUs, and power",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 exam objectives, 5.1 Troubleshoot motherboards, RAM, CPUs and power (inaccurate system date/time)"
    },
    {
      "stem": "A user reports that a desktop has become very slow when opening files. The technician hears a repetitive clicking noise from the computer's mechanical hard drive, and the drive's S.M.A.R.T. status shows a warning. Which of the following should the technician do first?",
      "options": [
        "Defragment the drive to improve read times",
        "Run a full format to remap the bad sectors",
        "Back up the user's data to another device",
        "Update the storage controller's driver"
      ],
      "answer": "C",
      "explanation": "Clicking from a hard drive combined with a S.M.A.R.T. warning indicates impending mechanical failure, and the drive could stop working at any moment. The first priority is to copy the user's data to another device while it is still readable; the drive should then be replaced. Defragmenting or formatting puts heavy load on a failing drive and can destroy the data the technician needs to save.",
      "rationales": {
        "A": "Wrong: defragmenting causes heavy disk activity that can make a failing drive die before data is saved.",
        "B": "Wrong: formatting erases the user's data and stresses a drive that is already failing.",
        "C": "Correct: a clicking drive with a S.M.A.R.T. warning may fail soon, so saving the data comes first.",
        "D": "Wrong: a driver update cannot fix a mechanical fault indicated by clicking and S.M.A.R.T. warnings."
      },
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot drive and RAID issues",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 exam objectives, 5.2 Troubleshoot drive and RAID issues (clicking sounds, S.M.A.R.T. failure)"
    },
    {
      "stem": "A user reports that a smartphone's screen has started to lift away from the frame along one edge and that the back of the phone appears to bulge. The phone still powers on and charges normally. Which of the following should the technician do?",
      "options": [
        "Stop using and charging the phone and replace the battery",
        "Press the screen back into place and reseal it with adhesive",
        "Calibrate the battery by fully draining and recharging it",
        "Install a firmware update to correct battery reporting"
      ],
      "answer": "A",
      "explanation": "A screen lifting from the frame and a bulging back are classic signs of a swollen lithium-ion battery, caused by gas building up inside the cell. A swollen battery can rupture or catch fire, especially if it is punctured, pressed or charged, so the phone should be taken out of use and the battery replaced. The old battery must be disposed of according to hazardous-waste rules rather than thrown in the trash.",
      "rationales": {
        "A": "Correct: a bulging case means a swollen battery, which is a fire risk and must be replaced, not used or charged.",
        "B": "Wrong: pressing on a swollen battery can puncture it and cause a fire; the swelling is the cause, not loose adhesive.",
        "C": "Wrong: calibration only adjusts the charge reading and cannot fix a physically swollen battery.",
        "D": "Wrong: firmware cannot reverse physical swelling, and the phone would remain unsafe to use."
      },
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common mobile device issues",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 exam objectives, 5.4 Troubleshoot common mobile device issues (swollen battery)"
    },
    {
      "stem": "Users in a small office report that VoIP calls become choppy, with words cutting out, but only while large backups upload to a cloud provider during business hours. Ping tests during the backups show that average latency is acceptable, but it varies widely from packet to packet. Which of the following should the technician configure to resolve the issue?",
      "options": [
        "Cat 6 patch cables in place of the Cat 5e cables",
        "Static IP addresses on each of the VoIP phones",
        "Different DNS servers on the office router",
        "QoS on the router to prioritize voice traffic"
      ],
      "answer": "D",
      "explanation": "Packet-to-packet variation in delay is called jitter, and real-time traffic such as VoIP is very sensitive to it. Here the backups saturate the internet uplink, so voice packets wait in queues behind bulk data. Quality of service (QoS) on the router classifies voice traffic and sends it first, keeping its delay low and consistent even when the link is busy.",
      "rationales": {
        "A": "Wrong: the bottleneck is the busy internet uplink, so faster LAN cabling will not reduce the jitter.",
        "B": "Wrong: how phones get their IP addresses does not change how their packets are queued on a congested link.",
        "C": "Wrong: DNS resolves names to addresses and does not change how voice packets are queued during a call.",
        "D": "Correct: QoS prioritizes voice packets over bulk backup traffic, reducing jitter on the congested link."
      },
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot network issues",
      "difficulty": "hard",
      "source": "CompTIA A+ 220-1201 exam objectives, 5.5 Troubleshoot network issues (jitter, poor VoIP quality)"
    },
    {
      "stem": "Pages from a laser printer come out with sharp, correctly placed text, but the toner smears and rubs off onto the user's fingers when the pages are handled. Which of the following components should the technician replace?",
      "options": [
        "Pickup roller",
        "Fuser assembly",
        "Imaging drum",
        "Transfer roller"
      ],
      "answer": "B",
      "explanation": "The fuser assembly uses heat and pressure to melt toner and bond it permanently to the paper. If the fuser is not reaching the right temperature or its rollers are worn, the image is formed and transferred correctly but the toner is left loose on the page and smears. Because the text is sharp and well placed, the earlier imaging and transfer stages are working.",
      "rationales": {
        "A": "Wrong: the pickup roller feeds paper from the tray; a fault causes misfeeds or jams, not loose toner.",
        "B": "Correct: the fuser melts and bonds toner to the paper, so a failing fuser leaves toner that smears off.",
        "C": "Wrong: a drum fault causes repeating marks, lines or faded images rather than toner that rubs off.",
        "D": "Wrong: a transfer roller fault gives faint or blank areas, because toner does not reach the paper properly."
      },
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot printer issues",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 exam objectives, 5.6 Troubleshoot printer issues (toner not fusing to paper)"
    }
  ]
}
```
