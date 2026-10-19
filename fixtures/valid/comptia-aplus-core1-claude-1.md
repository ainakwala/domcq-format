```json
{
  "format": "domcq/1",
  "exam": "comptia-aplus-core1",
  "set": "CompTIA A+ Core 1 (220-1201) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A technician is upgrading the storage in a thin-and-light laptop. The service manual states that the laptop has a single M.2 2280 slot with an M key and that the slot supports only PCIe NVMe drives. Which of the following drives should the technician purchase?",
      "options": [
        "M.2 2280 SATA SSD with B+M keying",
        "2.5-inch SATA SSD with a 7 mm height",
        "M.2 2280 PCIe NVMe SSD with M keying",
        "mSATA SSD in the full-size form factor",
        "M.2 2242 SATA SSD with B+M keying"
      ],
      "answer": "C",
      "explanation": "M.2 is a physical form factor, not an interface: the same slot can carry SATA or PCIe/NVMe signaling depending on how the motherboard is wired. A B+M-keyed SATA M.2 drive can physically fit an M-key slot but will not be detected when the slot provides only PCIe lanes. The 2280 designation means 22 mm wide by 80 mm long, so the drive must also match that length to reach the mounting standoff, while 2.5-inch and mSATA drives use different connectors entirely.",
      "topic": "Mobile Devices",
      "subtopic": "Given a scenario, monitor mobile device hardware and use appropriate replacement techniques",
      "difficulty": "hard",
      "source": "CompTIA A+ 220-1201 Objective 1.1 – Mobile device hardware replacement (HDD/SSD); Objective 3.4 – Storage devices (M.2, NVMe, SATA)"
    },
    {
      "stem": "A user wants to pay for purchases at store checkout terminals by holding a smartphone a few centimeters from the payment reader. Which of the following technologies must be enabled on the smartphone?",
      "options": [
        "Near-field communication (NFC)",
        "Bluetooth Low Energy (BLE)",
        "Infrared (IR) transmission",
        "Wi-Fi Direct peer-to-peer"
      ],
      "answer": "A",
      "explanation": "Contactless tap-to-pay systems use NFC, a radio technology that works only over a few centimeters and is designed for quick, deliberate exchanges between a device and a reader. Its very short range is a security benefit, because the phone must be intentionally held next to the terminal. Bluetooth and Wi-Fi Direct work over several meters and are used for pairing accessories and transferring files rather than point-of-sale payments.",
      "topic": "Mobile Devices",
      "subtopic": "Compare and contrast accessories and connectivity options for mobile devices",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 Objective 1.2 – Mobile device connection methods: wireless (NFC, Bluetooth, hotspot)"
    },
    {
      "stem": "A user's smartphone automatically uploads all new photos and videos to a cloud storage account. After a trip, the user receives a notice from the carrier that the monthly cellular data cap was exceeded. The user wants the photos to keep backing up without losing the ability to make calls or use cellular data for other apps. Which of the following should a technician configure?",
      "options": [
        "Disable location services for the camera application",
        "Enable airplane mode whenever the user is traveling",
        "Turn off Bluetooth and the personal hotspot feature",
        "Restrict photo synchronization to Wi-Fi connections only",
        "Switch the cellular radio from 5G to 4G/LTE only"
      ],
      "answer": "D",
      "explanation": "Synchronizing large media files over a cellular connection is a common cause of data-cap overages. Cloud photo and sync apps can be set to upload only over Wi-Fi (or have their cellular data permission turned off), so backups pause on cellular and resume automatically when the phone joins a Wi-Fi network. Airplane mode would also block calls, and changing the cellular generation or disabling location services does not reduce how much data is uploaded.",
      "topic": "Mobile Devices",
      "subtopic": "Given a scenario, configure basic mobile device network connectivity and provide application support",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 1.3 – Mobile device synchronization: data to synchronize, recognizing data caps"
    },
    {
      "stem": "A small company hosts its own mail server. The firewall must allow the server to send and receive email with other mail servers on the internet, and must allow employees' email clients to access messages that stay stored and synchronized on the server. The company uses each protocol's default unencrypted port. Which of the following ports should the technician open? Choose TWO.",
      "options": [
        "25",
        "110",
        "143",
        "389",
        "445"
      ],
      "answer": "AC",
      "explanation": "SMTP on TCP port 25 is the protocol mail servers use to transfer messages to one another, so the server needs it to send and receive internet email. IMAP on TCP port 143 lets clients read mail that remains on the server and stays synchronized across all of a user's devices. POP3 on port 110 is designed to download messages to one client, typically removing them from the server, while 389 is LDAP and 445 is SMB, neither of which carries email.",
      "topic": "Networking",
      "subtopic": "Compare and contrast Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) ports, protocols",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 2.1 – Ports and protocols: SMTP (25), POP3 (110), IMAP (143), LDAP (389), SMB (445)"
    },
    {
      "stem": "A small office is located in a building with heavy congestion on the 2.4 GHz and 5 GHz bands. The owner wants new wireless equipment that can operate in the 6 GHz band. Which of the following should the technician look for when selecting the access point and client adapters?",
      "options": [
        "Wi-Fi 5 (802.11ac)",
        "Wi-Fi 6E (802.11ax)",
        "Wi-Fi 6 (802.11ax)",
        "Wi-Fi 4 (802.11n)"
      ],
      "answer": "B",
      "explanation": "The 802.11ax standard is marketed as Wi-Fi 6 when devices use only the 2.4 GHz and 5 GHz bands, and as Wi-Fi 6E when they also support the 6 GHz band. The 6 GHz band offers many wide, non-overlapping channels with no legacy traffic, which is why it relieves congestion. Both the access point and the clients must support 6E to use it; Wi-Fi 5 operates only at 5 GHz and Wi-Fi 4 uses 2.4 GHz and 5 GHz.",
      "topic": "Networking",
      "subtopic": "Explain wireless networking technologies",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 2.2 – Wireless networking technologies: frequencies (2.4, 5, 6 GHz) and 802.11 standards"
    },
    {
      "stem": "A network administrator wants the routers, switches, and firewalls across the company to send their event and error messages to one central server, where the messages can be searched and retained. Which of the following servers should the administrator deploy?",
      "options": [
        "DHCP server",
        "Proxy server",
        "File server",
        "Mail server",
        "Syslog server"
      ],
      "answer": "E",
      "explanation": "A syslog server collects log messages that network devices and hosts send over the network, giving administrators one place to search, correlate, and archive events. Most routers, switches, and firewalls can simply be pointed at a syslog collector's IP address. A DHCP server assigns addresses, a proxy forwards client requests, and file and mail servers store user data rather than device logs.",
      "topic": "Networking",
      "subtopic": "Summarize services provided by networked hosts",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 Objective 2.3 – Services provided by networked hosts: server roles (syslog)"
    },
    {
      "stem": "Recipients are reporting phishing emails that appear to come from a company's domain but were sent from servers the company does not own. The administrator wants to publish, in the company's public DNS zone, a list of the mail servers that are authorized to send email for the domain so receiving servers can reject spoofed messages. Which of the following DNS record types should the administrator create?",
      "options": [
        "MX",
        "TXT",
        "CNAME",
        "AAAA",
        "PTR"
      ],
      "answer": "B",
      "explanation": "Sender Policy Framework (SPF) policies are published as TXT records, as are DKIM keys and DMARC policies; receiving mail servers query them to check whether a message came from an authorized sender. An MX record does a different job: it tells other servers where to deliver mail coming into the domain, not which servers may send mail out. CNAME creates an alias, AAAA maps a name to an IPv6 address, and PTR is used for reverse lookups.",
      "topic": "Networking",
      "subtopic": "Explain common network configuration concepts",
      "difficulty": "hard",
      "source": "CompTIA A+ 220-1201 Objective 2.4 – DNS record types: MX and TXT (spam management: SPF, DKIM, DMARC)"
    },
    {
      "stem": "A technician must mount a new wireless access point on a ceiling where no electrical outlet is available. The access point supports PoE, but the existing switch in the wiring closet does not provide PoE, and the budget does not allow replacing the switch. Which of the following should the technician install?",
      "options": [
        "Power over Ethernet injector",
        "Unmanaged Ethernet switch",
        "Copper cable patch panel",
        "Wireless range extender"
      ],
      "answer": "A",
      "explanation": "A PoE injector sits between a non-PoE switch port and the powered device, adding DC power to the Ethernet cable so a single cable run delivers both data and power to the access point. This avoids installing a new outlet or replacing the switch. A patch panel only terminates cable runs, an unmanaged switch without PoE supplies no power, and a range extender still needs its own power source.",
      "topic": "Networking",
      "subtopic": "Compare and contrast common networking hardware devices",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 2.5 – Networking hardware: Power over Ethernet (PoE) switches and injectors"
    },
    {
      "stem": "A technician must run an Ethernet cable through the space above a drop ceiling that is used as part of the building's air-return system. The run passes next to several large fluorescent light fixtures and an elevator motor. Which of the following cable characteristics should the technician select? Choose TWO.",
      "options": [
        "PVC (non-plenum) jacket",
        "Plenum-rated jacket",
        "Direct burial rating",
        "Shielded twisted pair (STP)",
        "Crossover pinout"
      ],
      "answer": "BD",
      "explanation": "Spaces used for air circulation require plenum-rated cable, whose jacket resists burning and gives off less toxic smoke than standard PVC, as fire codes require. Shielded twisted pair adds foil or braided shielding that protects the signal from the electromagnetic interference produced by fluorescent fixtures and motors. Direct burial cable is built for underground runs, and a crossover pinout only changes which pairs transmit and receive; it does nothing to protect the signal.",
      "topic": "Hardware",
      "subtopic": "Summarize basic cable types and their connectors, features, and purposes",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 3.2 – Network cables: plenum, shielded twisted pair vs. unshielded twisted pair, direct burial"
    },
    {
      "stem": "A technician is configuring four identical drives in a network-attached storage device for a small business. The array must keep running with no data loss if any two of the drives fail at the same time, and its usable capacity must be at least half of the total raw capacity. Which of the following RAID levels should the technician configure?",
      "options": [
        "RAID 0",
        "RAID 1",
        "RAID 5",
        "RAID 6",
        "RAID 10"
      ],
      "answer": "D",
      "explanation": "RAID 6 stripes data across the drives with two independent sets of parity, so it can rebuild the data after any two drives fail, and with four drives half of the raw capacity remains usable. RAID 10 also provides 50% capacity, but it survives a second failure only if the failed drives are in different mirrored pairs; losing both drives of one pair destroys the array. RAID 5 tolerates only one failed drive, RAID 0 has no fault tolerance, and mirroring all four drives with RAID 1 would leave only a quarter of the capacity usable.",
      "topic": "Hardware",
      "subtopic": "Compare and contrast storage devices",
      "difficulty": "hard",
      "source": "CompTIA A+ 220-1201 Objective 3.4 – Storage devices: RAID 0, 1, 5, 6, and 10"
    },
    {
      "stem": "A technician is building a compact home theater PC. The chosen case accepts only motherboards that measure 170 mm x 170 mm (about 6.7 in x 6.7 in). Which of the following motherboard form factors should the technician purchase?",
      "options": [
        "ATX",
        "microATX",
        "Mini-ITX",
        "Extended ATX"
      ],
      "answer": "C",
      "explanation": "Mini-ITX motherboards measure 170 mm square, which makes them the standard choice for small form factor builds such as home theater PCs. A full ATX board is 305 mm x 244 mm and a microATX board can be up to 244 mm x 244 mm, so neither fits a case built only for Mini-ITX, and Extended ATX is larger still. The form factor sets the board's size and mounting-hole positions, so it must match the case.",
      "topic": "Hardware",
      "subtopic": "Given a scenario, install and configure motherboards, central processing units (CPUs), and add-on cards",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 Objective 3.5 – Motherboard form factors: ATX, microATX, ITX"
    },
    {
      "stem": "A technician is selecting a power supply for a new workstation. The combined power draw of the components at full load is estimated at 520 W, and the customer wants to minimize unused cables inside the case to improve airflow. Which of the following power supplies should the technician choose?",
      "options": [
        "450 W modular power supply",
        "650 W modular power supply",
        "650 W non-modular power supply",
        "500 W non-modular power supply"
      ],
      "answer": "B",
      "explanation": "A power supply's wattage rating must exceed the components' peak draw, and leaving headroom (here about 25%) keeps the unit running efficiently and allows for future upgrades. A modular power supply lets the technician attach only the cables the system actually needs, which reduces clutter and improves airflow. The 450 W and 500 W units fall below the estimated 520 W load, and a non-modular unit has all of its cables permanently attached.",
      "topic": "Hardware",
      "subtopic": "Given a scenario, install the appropriate power supply",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 3.6 – Power supply: wattage rating, modular power supply"
    },
    {
      "stem": "An office laser printer has printed several hundred thousand pages. Its control panel now displays a message stating that scheduled maintenance is due, although print quality is still acceptable. Which of the following should the technician do?",
      "options": [
        "Replace the toner cartridge and print a configuration page",
        "Clean the print heads and run a nozzle alignment check",
        "Replace the ribbon and clean the print head with alcohol",
        "Update the printer driver on every client computer",
        "Install a maintenance kit and reset the page counter"
      ],
      "answer": "E",
      "explanation": "Laser printers track their page count and prompt for a maintenance kit at the manufacturer's service interval; the kit replaces high-wear parts such as the rollers before they start causing problems. After installing the kit, the technician must reset the maintenance counter, or the message will keep appearing. Print-head cleaning applies to inkjet printers and ribbons to impact printers, and neither a toner change nor a driver update clears a scheduled-maintenance alert.",
      "topic": "Hardware",
      "subtopic": "Given a scenario, perform appropriate printer maintenance",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 3.8 – Printer maintenance: laser printer maintenance kit, resetting page counts"
    },
    {
      "stem": "A company plans to consolidate ten physical servers onto one powerful host. To maximize performance and reduce overhead, the virtualization software must be installed directly on the host's hardware rather than running on top of a general-purpose operating system. Which of the following should the company use?",
      "options": [
        "Type 1 hypervisor",
        "Type 2 hypervisor",
        "Application virtualization",
        "Virtual desktop infrastructure"
      ],
      "answer": "A",
      "explanation": "A Type 1 (bare-metal) hypervisor runs directly on the physical hardware and allocates CPU, memory, storage, and network resources to virtual machines with no host operating system in between, giving better performance and fewer layers to secure. A Type 2 (hosted) hypervisor runs as an application on an existing OS and is better suited to desktop testing than to server consolidation. Application virtualization delivers individual applications, and VDI is a way of delivering desktops to users, not a type of hypervisor.",
      "topic": "Virtualization and Cloud Computing",
      "subtopic": "Explain virtualization concepts",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 Objective 4.1 – Virtualization concepts: hypervisor Type 1 vs. Type 2"
    },
    {
      "stem": "Four independent regional hospitals must all meet the same healthcare data-privacy regulations. They want to share the cost of a cloud infrastructure that is used only by these hospitals and is not available to the general public. Which of the following cloud models should the organizations adopt?",
      "options": [
        "Public cloud",
        "Hybrid cloud",
        "Private cloud",
        "Community cloud"
      ],
      "answer": "D",
      "explanation": "A community cloud is shared by several organizations with common concerns, such as the same regulatory, security, or mission requirements, and its costs are divided among those members. Unlike a public cloud, access is limited to the member organizations. A private cloud serves a single organization, and a hybrid cloud combines two or more deployment models rather than describing infrastructure shared among peer organizations.",
      "topic": "Virtualization and Cloud Computing",
      "subtopic": "Summarize cloud computing concepts",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 4.2 – Cloud computing concepts: deployment models (public, private, hybrid, community)"
    },
    {
      "stem": "A technician replaced the CPU in a desktop computer. The computer now boots normally, but it shuts down without warning after a few minutes under load. The hardware monitor in the UEFI setup shows the CPU temperature rising rapidly. Which of the following should the technician check? Choose TWO.",
      "options": [
        "Whether the CMOS battery is seated and holding a charge",
        "Whether thermal paste was applied between the CPU and cooler",
        "Whether the boot order lists the system drive first",
        "Whether the memory modules are installed in matched pairs",
        "Whether the cooler is fully seated and its fan is connected"
      ],
      "answer": "BE",
      "explanation": "A rapidly rising CPU temperature followed by sudden shutdowns indicates overheating: the processor's thermal protection turns the system off to prevent damage. After a CPU replacement, the usual causes are missing or poorly applied thermal paste, which leaves air gaps that block heat transfer, and a cooler that is not seated evenly or whose fan is not plugged into the CPU fan header. The CMOS battery, boot order, and memory pairing have no effect on CPU temperature.",
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot motherboards, RAM, CPUs, and power",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 5.1 – Troubleshooting: sudden shutdown, overheating; Objective 3.5 – CPU cooling, thermal paste"
    },
    {
      "stem": "A user reports that a desktop computer has started making a repetitive clicking noise and that opening files has become very slow. A diagnostic tool shows that the hard drive's S.M.A.R.T. reallocated sector count is increasing. Which of the following should the technician do first?",
      "options": [
        "Back up the user's data to another location",
        "Run a full defragmentation of the drive",
        "Reinstall the operating system on the drive",
        "Replace the SATA data cable with a new one",
        "Update the motherboard firmware to the latest version"
      ],
      "answer": "A",
      "explanation": "Clicking noises and a rising reallocated sector count are classic signs of a mechanically failing hard drive that could stop working at any moment. Protecting the user's data is the priority, so the technician should back it up before doing anything else and then replace the drive. Defragmenting or reinstalling the OS would put heavy extra load on the failing drive and could destroy data, and a cable or firmware change does not fix a physical failure.",
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot drive and RAID issues",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 Objective 5.2 – Troubleshooting drives: clicking or grinding noises, S.M.A.R.T. failure"
    },
    {
      "stem": "A user reports that a laptop's built-in display has suddenly become almost completely dark. When the technician shines a flashlight at the screen, the desktop and icons can be faintly seen. An external monitor connected to the laptop displays the image normally. Which of the following is most likely causing the issue?",
      "options": [
        "The graphics driver is corrupted",
        "The screen resolution is set too high",
        "The display backlight has failed",
        "The touchscreen digitizer is damaged",
        "The graphics processor has failed"
      ],
      "answer": "C",
      "explanation": "An image that is present but visible only under a flashlight means the LCD panel is still forming pixels, but nothing is lighting it from behind. That points to a failed backlight (or, on older CCFL-lit panels, the inverter that powers it). Because the external monitor works, the GPU and driver are producing video correctly, and the digitizer handles touch input rather than illumination.",
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot video, projector, and display issues",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 5.3 – Troubleshooting video and display issues: dim image, backlight"
    },
    {
      "stem": "A company's office network uses a single /24 subnet. The company recently hired many new staff and added several wireless IoT devices. Employees who arrive early connect without problems, but several employees who arrive later in the morning cannot access any network resources, and their laptops show IPv4 addresses beginning with 169.254. Which of the following is most likely causing the issue?",
      "options": [
        "The DNS server is failing to resolve internal hostnames",
        "The default gateway address on the router is incorrect",
        "The wireless access point is set to an overlapping channel",
        "The switch ports in the office are set to half duplex",
        "The DHCP scope has run out of available addresses"
      ],
      "answer": "E",
      "explanation": "A 169.254.x.x address is an APIPA (link-local) address that a client assigns itself when it cannot obtain a lease from a DHCP server. Because early arrivals receive valid addresses and later arrivals do not, the DHCP server is reachable but has already leased every address in its pool to the new staff and IoT devices. The fix is to enlarge the scope or shorten the lease duration; DNS, gateway, and duplex problems would affect clients that already have valid addresses rather than stop them from getting one.",
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot network issues",
      "difficulty": "hard",
      "source": "CompTIA A+ 220-1201 Objective 5.5 – Troubleshooting network issues: limited connectivity (APIPA); Objective 2.4 – DHCP scope and leases"
    },
    {
      "stem": "Pages printed on a laser printer look normal when they come out, but the toner smears and rubs off easily when the user touches the page. Which of the following components is most likely causing the issue?",
      "options": [
        "Toner cartridge",
        "Fuser assembly",
        "Pickup roller",
        "Transfer roller"
      ],
      "answer": "B",
      "explanation": "In the laser imaging process, the fusing step uses heat and pressure to melt the toner particles and bond them permanently to the paper. If the fuser is not reaching the proper temperature or its pressure roller is worn, the toner sits loosely on the page and smears or rubs off. The pickup roller only feeds paper into the printer, and the transfer roller moves toner onto the paper before fusing takes place.",
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot printer issues",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 Objective 5.6 – Troubleshooting printers: toner not fusing; Objective 3.7 – Laser imaging process (fusing)"
    }
  ]
}
```
