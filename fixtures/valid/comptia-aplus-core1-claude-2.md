```json
{
  "format": "domcq/1",
  "exam": "comptia-aplus-core1",
  "set": "CompTIA A+ Core 1 (220-1201) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A technician is replacing the 2.5in SATA hard drive in a user's laptop with a faster SSD. The user wants the operating system, installed applications, settings, and files to remain exactly as they are now. Which of the following should the technician do?",
      "options": [
        "Perform a clean installation of the operating system on the SSD",
        "Copy the user profile folder to the SSD in an external enclosure",
        "Clone the existing drive to the SSD and then install the SSD",
        "Format the SSD and restore the user's files from cloud storage"
      ],
      "answer": "C",
      "explanation": "Cloning copies the entire source drive, including partitions, boot information, the operating system, applications, and data, onto the new SSD, so the laptop boots exactly as before once the SSD is installed. This is the standard data-migration approach when upgrading laptop storage. A clean installation or copying only the profile or files would force the user to reinstall applications and reconfigure settings.",
      "topic": "Mobile Devices",
      "subtopic": "Given a scenario, monitor mobile device hardware and use appropriate replacement techniques",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 objectives – Mobile Devices: mobile device hardware replacement (HDD/SSD replacement and data migration)"
    },
    {
      "stem": "A sales representative is working from a hotel that has no Wi-Fi and needs to give a laptop internet access by using a smartphone's cellular data plan. Which of the following features should the representative enable on the smartphone?",
      "options": [
        "Mobile hotspot",
        "Near-field communication",
        "Location services",
        "Screen mirroring"
      ],
      "answer": "A",
      "explanation": "A mobile hotspot turns the smartphone into a small wireless access point that shares its cellular data connection with nearby devices such as a laptop. NFC works only over a few centimeters and is used for tasks like contactless payments and quick pairing. Screen mirroring and location services do not provide internet access to other devices.",
      "topic": "Mobile Devices",
      "subtopic": "Compare and contrast accessories and connectivity options for mobile devices",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 objectives – Mobile Devices: accessories and connectivity options (hotspot, NFC, Bluetooth)"
    },
    {
      "stem": "A company wants to configure corporate email on employee smartphones automatically, enforce a screen-lock passcode on every device, and be able to remotely wipe a device if it is lost. Which of the following should the company implement?",
      "options": [
        "Virtual private network",
        "Single sign-on",
        "Remote Desktop Protocol",
        "Mobile device management"
      ],
      "answer": "D",
      "explanation": "Mobile device management (MDM) enrolls devices so administrators can centrally push configuration profiles such as corporate email accounts, enforce security policies like passcodes and encryption, deploy corporate apps, and remotely lock or wipe lost devices. A VPN only protects traffic in transit, SSO simplifies sign-in across services, and RDP provides remote access to a desktop, so none of them can enforce device policies.",
      "topic": "Mobile Devices",
      "subtopic": "Given a scenario, configure basic mobile device network connectivity and provide application support",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 objectives – Mobile Devices: MDM/MAM (corporate email configuration, policies, remote wipe)"
    },
    {
      "stem": "A technician is writing firewall rules and needs to know which protocols communicate over UDP by default. Which of the following protocols primarily use UDP? Choose TWO.",
      "options": [
        "SMTP",
        "DHCP",
        "SSH",
        "SNMP",
        "IMAP"
      ],
      "answer": "BD",
      "explanation": "DHCP uses UDP ports 67 (server) and 68 (client) because a client without an IP address must broadcast its request and cannot set up a TCP session. SNMP uses UDP 161 for polling and UDP 162 for traps, keeping management traffic lightweight. SMTP (TCP 25), SSH (TCP 22), and IMAP (TCP 143) need reliable, connection-oriented sessions, so they use TCP.",
      "topic": "Networking",
      "subtopic": "Compare and contrast Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) ports, protocols",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 objectives – Networking: TCP and UDP ports, protocols, and their purposes"
    },
    {
      "stem": "A technician in the United States is installing three wireless access points in an office that will use the 2.4GHz band. To minimize interference between the access points, which of the following channel assignments should the technician use?",
      "options": [
        "1, 3, and 5",
        "1, 6, and 11",
        "2, 4, and 6",
        "4, 7, and 10"
      ],
      "answer": "B",
      "explanation": "In the 2.4GHz band, channel center frequencies are only 5MHz apart, but each channel is about 20MHz wide, so channels close to each other overlap. Channels 1, 6, and 11 are the only set within the U.S. range of channels 1 to 11 that do not overlap, which lets neighboring access points avoid adjacent-channel interference. Every other set listed places access points on overlapping frequencies.",
      "topic": "Networking",
      "subtopic": "Explain wireless networking technologies",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 objectives – Networking: wireless networking technologies (2.4GHz channels, regulations)"
    },
    {
      "stem": "Recipients report that email sent from a company's domain is often marked as spam. The administrator wants to publish, in DNS, the list of mail servers that are authorized to send email on behalf of the domain. Which of the following should the administrator configure?",
      "options": [
        "An MX record that lists the outbound mail servers",
        "A CNAME record that aliases the mail server",
        "A TXT record that contains an SPF policy",
        "An AAAA record for the mail server's address"
      ],
      "answer": "C",
      "explanation": "Sender Policy Framework (SPF) is published as a DNS TXT record that lists the hosts and IP addresses permitted to send mail for the domain, and receiving servers check it to decide whether a message is legitimate. MX records identify the servers that receive inbound mail for a domain, not the authorized senders. DKIM and DMARC are also published as TXT records and work alongside SPF to reduce spoofing and spam flagging.",
      "topic": "Networking",
      "subtopic": "Explain common network configuration concepts",
      "difficulty": "hard",
      "source": "CompTIA A+ 220-1201 objectives – Networking: network configuration concepts (DNS records: MX, TXT, SPF, DKIM, DMARC)"
    },
    {
      "stem": "A technician connects a new PoE+ (IEEE 802.3at) security camera to a switch port that supports only IEEE 802.3af. The cable run is 30m (98ft) and passes a cable test. The camera works during the day, but each night when its infrared illuminators turn on, the camera reboots. Which of the following is the most likely cause?",
      "options": [
        "The switch port cannot supply enough power for the camera",
        "The camera's IP address is conflicting with another host",
        "The switch port is assigned to the wrong VLAN",
        "The camera's link is negotiating at half duplex"
      ],
      "answer": "A",
      "explanation": "IEEE 802.3af PoE provides at most 15.4W per port at the switch, while 802.3at PoE+ provides up to 30W. When the infrared illuminators switch on, the camera's power draw rises beyond what the 802.3af port can deliver, so the camera loses power and reboots. Replacing the switch with a PoE+ model or adding a PoE+ injector fixes the problem; the other options would not depend on the illuminators turning on.",
      "topic": "Networking",
      "subtopic": "Compare and contrast common networking hardware devices",
      "difficulty": "hard",
      "source": "CompTIA A+ 220-1201 objectives – Networking: networking hardware devices (PoE switches, injectors, 802.3af/at)"
    },
    {
      "stem": "A technician needs to determine which unlabeled cable at a patch panel connects to a specific wall jack in an office. Which of the following tools should the technician use?",
      "options": [
        "Loopback plug",
        "Punchdown tool",
        "Wi-Fi analyzer",
        "Toner probe"
      ],
      "answer": "D",
      "explanation": "A toner probe kit has two parts: the tone generator is connected at the wall jack and places an audible signal on the cable, and the inductive probe is moved across the cables at the patch panel until the tone is heard. A loopback plug tests whether a port can send and receive, a punchdown tool terminates wires, and a Wi-Fi analyzer examines wireless signals.",
      "topic": "Networking",
      "subtopic": "Explain networking tools and their purposes",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 objectives – Networking: networking tools and their purposes (toner probe)"
    },
    {
      "stem": "A user wants a monitor that can display true blacks because each pixel emits its own light and the panel does not require a backlight. Which of the following display technologies should the user choose?",
      "options": [
        "IPS",
        "TN",
        "OLED",
        "VA"
      ],
      "answer": "C",
      "explanation": "In an OLED display, each pixel contains organic compounds that emit light when current is applied, so a pixel can be switched off completely to produce true black. IPS, TN, and VA are all types of LCD panel that need a backlight shining through the liquid crystals, so some light leaks through even on black areas.",
      "topic": "Hardware",
      "subtopic": "Compare and contrast display components and attributes",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 objectives – Hardware: display components and attributes (LCD types, OLED)"
    },
    {
      "stem": "A technician is running network cable through the air-handling space above a drop ceiling in an office building. Which of the following cable types should the technician use to comply with fire codes?",
      "options": [
        "Riser-rated",
        "Plenum-rated",
        "Direct burial-rated",
        "Shielded twisted pair"
      ],
      "answer": "B",
      "explanation": "Air-handling spaces circulate air through the building, so fire codes require plenum-rated cable, whose jacket is made of fire-retardant materials that produce less smoke and fewer toxic fumes than standard PVC. Riser-rated cable is intended for vertical runs between floors, direct burial cable is for underground runs, and shielding protects against interference rather than fire.",
      "topic": "Hardware",
      "subtopic": "Summarize basic cable types and their connectors, features, and purposes",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 objectives – Hardware: basic cable types (plenum, direct burial, shielded twisted pair)"
    },
    {
      "stem": "A technician installs two identical DDR4 memory modules in a desktop motherboard that has four DIMM slots. After booting, the UEFI setup utility reports that the memory is running in single-channel mode. Which of the following should the technician do?",
      "options": [
        "Move the modules into the slots the motherboard manual specifies for dual-channel use",
        "Enable the XMP memory profile in the UEFI setup utility to raise the memory speed",
        "Replace both modules with ECC memory modules that have the same total capacity",
        "Increase the memory voltage in the UEFI setup utility to stabilize the modules"
      ],
      "answer": "A",
      "explanation": "Dual-channel operation requires one module on each memory channel, and on four-slot boards the slots are paired so that installing both modules on the same channel forces single-channel mode. The motherboard manual (and often slot color coding) shows which slots to use. XMP and voltage settings change speed and stability, and ECC adds error correction, but none of them changes the channel mode.",
      "topic": "Hardware",
      "subtopic": "Compare and contrast RAM characteristics",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 objectives – Hardware: RAM characteristics (single-channel, dual-channel, multichannel)"
    },
    {
      "stem": "A technician is configuring a storage array using five 4TB drives. The array must keep running if any two drives fail at the same time, and it should provide as much usable capacity as possible within that requirement. Which of the following configurations should the technician select?",
      "options": [
        "RAID 5, providing 16TB of usable space",
        "RAID 10, providing 8TB of usable space",
        "RAID 6, providing 16TB of usable space",
        "RAID 6, providing 12TB of usable space",
        "RAID 0, providing 20TB of usable space"
      ],
      "answer": "D",
      "explanation": "RAID 6 stripes data with two independent parity blocks distributed across all drives, so it survives the failure of any two drives. Its usable capacity is the number of drives minus two, multiplied by the drive size: (5 - 2) x 4TB = 12TB. RAID 5 has single parity and tolerates only one failure, RAID 10 survives two failures only if they are in different mirror pairs, and RAID 0 has no fault tolerance.",
      "topic": "Hardware",
      "subtopic": "Compare and contrast storage devices",
      "difficulty": "hard",
      "source": "CompTIA A+ 220-1201 objectives – Hardware: storage devices (RAID 0, 1, 5, 6, 10)"
    },
    {
      "stem": "A laser printer displays a message that maintenance is required. The technician installs the manufacturer's maintenance kit, but the message continues to appear. Which of the following should the technician do to clear the message?",
      "options": [
        "Replace the toner cartridge",
        "Reset the maintenance page counter",
        "Run the printhead calibration",
        "Clean the transfer roller with alcohol"
      ],
      "answer": "B",
      "explanation": "Laser printers count the pages printed since the last service and display the maintenance message when that count reaches a threshold. After installing the kit, which typically contains a fuser and rollers, the technician must reset the counter from the printer's menu or utility, or the message persists. Printhead calibration applies to inkjet printers, and replacing toner does not affect the maintenance counter.",
      "topic": "Hardware",
      "subtopic": "Given a scenario, perform appropriate printer maintenance",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 objectives – Hardware: printer maintenance (laser maintenance kit, resetting the page count)"
    },
    {
      "stem": "A technician installs a Type 2 hypervisor on a developer's desktop computer. When the technician tries to start a virtual machine, an error states that hardware-assisted virtualization is not available, even though the CPU supports Intel VT-x. Which of the following should the technician do?",
      "options": [
        "Install additional RAM in the desktop computer",
        "Change the virtual machine's network adapter to bridged",
        "Enable virtualization support in the UEFI setup utility",
        "Reinstall the hypervisor with administrator privileges"
      ],
      "answer": "C",
      "explanation": "CPU virtualization extensions such as Intel VT-x and AMD-V are often disabled by default in the system firmware, and the hypervisor cannot use them until they are enabled in BIOS/UEFI and the computer is restarted. Adding RAM, changing the virtual network mode, or reinstalling the hypervisor does not expose the CPU's virtualization features.",
      "topic": "Virtualization and Cloud Computing",
      "subtopic": "Explain virtualization concepts",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 objectives – Virtualization and Cloud Computing: virtualization concepts (BIOS/UEFI virtualization support)"
    },
    {
      "stem": "Several regional hospitals with the same regulatory compliance requirements want to share the cost of a cloud infrastructure that is used only by their organizations and is not available to the general public. Which of the following cloud models should the hospitals adopt?",
      "options": [
        "Community",
        "Public",
        "Hybrid",
        "Private"
      ],
      "answer": "A",
      "explanation": "A community cloud is shared by several organizations with common concerns, such as the same regulatory or security requirements, and is closed to the general public, so the members can split costs while keeping the infrastructure restricted to their group. A private cloud serves a single organization, a public cloud is open to any customer, and a hybrid cloud combines two or more cloud models.",
      "topic": "Virtualization and Cloud Computing",
      "subtopic": "Summarize cloud computing concepts",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 objectives – Virtualization and Cloud Computing: cloud computing concepts (public, private, hybrid, community)"
    },
    {
      "stem": "A technician replaces a desktop computer's CPU and reinstalls the original cooler. The computer boots normally but shuts down without warning after a few minutes of use, and the UEFI hardware monitor shows the CPU temperature climbing rapidly. Which of the following is most likely causing the issue?",
      "options": [
        "The CMOS battery is failing",
        "A memory module is not fully seated",
        "The power supply is set to the wrong input voltage",
        "Thermal paste was not applied between the CPU and cooler"
      ],
      "answer": "D",
      "explanation": "Thermal paste fills the microscopic gaps between the CPU and the cooler's base so heat can transfer efficiently. Without fresh paste, those gaps hold air, which insulates the CPU; it overheats quickly and its thermal protection shuts the system down. A failing CMOS battery causes lost time and settings, and a poorly seated memory module causes POST or stability errors rather than rising CPU temperatures.",
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot motherboards, RAM, CPUs, and power",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 objectives – Hardware and Network Troubleshooting: motherboards, RAM, CPUs, and power (overheating, sudden shutdown)"
    },
    {
      "stem": "Pages printed by a laser printer come out with toner that smears or rubs off easily when touched. Which of the following components is most likely faulty?",
      "options": [
        "Pickup roller",
        "Fuser assembly",
        "Imaging drum",
        "Separation pad"
      ],
      "answer": "B",
      "explanation": "The fuser assembly uses heat and pressure to melt toner particles and bond them to the paper. If the fuser does not reach its operating temperature, the toner stays loose on the page and smears when touched. Pickup rollers and separation pads cause paper-feed problems such as jams or multiple sheets, and imaging drum faults typically cause repeating marks or faded print.",
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot printer issues",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 objectives – Hardware and Network Troubleshooting: printer issues (toner not fusing to paper)"
    },
    {
      "stem": "A user reports that a laptop's screen appears completely black after startup. When the technician shines a flashlight at the screen, the desktop and icons are faintly visible. Which of the following is most likely causing the issue?",
      "options": [
        "Failed display backlight",
        "Corrupted graphics driver",
        "Damaged touchscreen digitizer",
        "Incorrect display resolution"
      ],
      "answer": "A",
      "explanation": "An LCD panel forms the image, but it depends on a backlight to make that image visible. If the image can be seen under external light, the graphics hardware and the panel are working, so the backlight (or, on older laptops, its inverter) has failed. A driver or resolution problem would produce a distorted or missing image, and the digitizer handles touch input rather than display output.",
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot video, projector, and display issues",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 objectives – Hardware and Network Troubleshooting: video, projector, and display issues (dim or no image, backlight)"
    },
    {
      "stem": "A user brings in a smartphone because the screen has started lifting away from the frame and the protective case no longer fits. The technician suspects a swollen battery. Which of the following actions should the technician take? Choose TWO.",
      "options": [
        "Stop charging the phone and power it off",
        "Press the screen back into place with a clamp",
        "Replace the battery with an approved part",
        "Fully charge the battery to recalibrate it",
        "Puncture the battery to release the gas"
      ],
      "answer": "AC",
      "explanation": "A swollen lithium-ion battery has started to fail internally and is a fire risk, so the device should be disconnected from power and switched off right away. The battery must then be replaced with a manufacturer-approved part and the old one recycled according to local regulations. Pressing, puncturing, or continuing to charge a swollen battery can cause thermal runaway and fire.",
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common mobile device issues",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 objectives – Hardware and Network Troubleshooting: common mobile device issues (swollen battery, physical damage)"
    },
    {
      "stem": "Several computers that were connected to an office network today are receiving IP addresses in the 169.254.0.0/16 range, while computers that have been on the network for weeks continue to work normally. The new computers show an active link and are set to obtain an address automatically. Which of the following is the most likely cause?",
      "options": [
        "The DNS server is not resolving hostnames",
        "The default gateway is unreachable",
        "The DHCP scope has no available addresses",
        "The new computers have an incorrect subnet mask"
      ],
      "answer": "C",
      "explanation": "A client assigns itself a 169.254.x.x APIPA address when it requests an address but receives no DHCP offer. The existing computers keep working because they already hold leases that the server continues to renew, which shows the server is reachable but has no free addresses left for new clients. Expanding the scope, shortening lease times, or clearing stale leases resolves it; DNS or gateway problems do not stop a client from getting an address.",
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot network issues",
      "difficulty": "hard",
      "source": "CompTIA A+ 220-1201 objectives – Hardware and Network Troubleshooting: network issues (APIPA addresses, DHCP)"
    }
  ]
}
```
