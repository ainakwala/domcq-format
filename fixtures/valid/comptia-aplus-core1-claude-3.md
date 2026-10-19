```json
{
  "format": "domcq/1",
  "exam": "comptia-aplus-core1",
  "set": "CompTIA A+ Core 1 (220-1201) practice – Mixed review across all five domains",
  "questions": [
    {
      "stem": "A user wants to pay for purchases by holding a smartphone near a store's contactless payment terminal. Which of the following technologies must be enabled on the smartphone?",
      "options": [
        "Bluetooth Low Energy",
        "Near-field communication",
        "Infrared transmission",
        "Wi-Fi Direct"
      ],
      "answer": "B",
      "explanation": "NFC is a very short-range radio technology (a few centimeters) designed for tap-style exchanges, and mobile wallets use it to pass tokenized payment data to contactless terminals. Bluetooth and Wi-Fi Direct work over several meters and are used for pairing accessories or transferring files, while infrared requires line of sight and is not used by payment terminals.",
      "topic": "Mobile Devices",
      "subtopic": "Compare and contrast accessories and connectivity options for mobile devices",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 Objective 1.2 – Mobile device connection methods: NFC"
    },
    {
      "stem": "A technician replaced a failed internal wireless card in a laptop. The new card appears in Device Manager and the laptop can see nearby networks, but signal strength is very low even when the laptop is next to the access point. Signal strength was normal before the card failed. Which of the following is most likely causing the issue?",
      "options": [
        "An outdated wireless driver",
        "An incorrect access point channel",
        "Bluetooth radio interference",
        "Disconnected antenna leads"
      ],
      "answer": "D",
      "explanation": "Laptop Wi-Fi antennas are usually built into the display bezel and connect to the internal wireless card through small coaxial leads that snap onto terminals on the card. If the leads are left off or not fully seated, the card still works and can detect nearby networks, but signal strength is very poor. Because only the card was changed and signal was normal before, the antenna connection is the most likely problem rather than a driver or access point setting.",
      "topic": "Mobile Devices",
      "subtopic": "Given a scenario, monitor mobile device hardware and use appropriate replacement techniques",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 1.1 – Mobile device hardware replacement: wireless cards and antennas"
    },
    {
      "stem": "A company allows employees to use their personal smartphones to access corporate email and files. Management wants to be able to remove only the corporate apps and data from a phone when an employee leaves, without affecting the employee's personal photos and apps. Which of the following should the company implement?",
      "options": [
        "Mobile application management",
        "A full-device remote wipe policy",
        "A device locator application",
        "Two-factor authentication"
      ],
      "answer": "A",
      "explanation": "Mobile application management (MAM) controls specific corporate apps and the data inside them instead of the whole device, so an administrator can selectively wipe corporate email, files and apps from a personal phone. A full-device remote wipe would erase the employee's personal data, a locator app only finds a lost device, and two-factor authentication protects sign-in but cannot remove data already on the phone. This app-level control is why MAM is commonly paired with bring-your-own-device (BYOD) policies.",
      "topic": "Mobile Devices",
      "subtopic": "Given a scenario, configure basic mobile device network connectivity and provide application support",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 1.3 – Mobile device management (MDM) and mobile application management (MAM)"
    },
    {
      "stem": "A network administrator must allow only encrypted remote command-line administration and encrypted web browsing traffic through a firewall. Which of the following ports should be opened? (Choose TWO.)",
      "options": [
        "TCP 21",
        "TCP 22",
        "TCP 23",
        "TCP 80",
        "TCP 443"
      ],
      "answer": "BE",
      "explanation": "SSH uses TCP port 22 and encrypts the whole remote command-line session, replacing Telnet on TCP 23, which sends commands and credentials in plaintext. HTTPS uses TCP port 443 to carry web traffic inside a TLS-encrypted session, whereas HTTP on port 80 is unencrypted. FTP on port 21 also transmits credentials in cleartext, so it does not meet the requirement.",
      "topic": "Networking",
      "subtopic": "Compare and contrast Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) ports, protocols",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 2.1 – TCP and UDP ports and protocols: SSH, Telnet, FTP, HTTP, HTTPS"
    },
    {
      "stem": "A small office wants to deploy new wireless access points that can operate in the 6 GHz band to avoid congestion on the 2.4 GHz and 5 GHz bands. Which of the following standards should the technician select?",
      "options": [
        "802.11n (Wi-Fi 4)",
        "802.11ac (Wi-Fi 5)",
        "802.11ax (Wi-Fi 6E)",
        "802.11ax (Wi-Fi 6)"
      ],
      "answer": "C",
      "explanation": "Wi-Fi 6E is the extension of the 802.11ax standard into the 6 GHz band, which offers many additional non-overlapping channels and much less congestion. Standard Wi-Fi 6 uses the same 802.11ax technology but only on 2.4 GHz and 5 GHz, Wi-Fi 5 (802.11ac) uses 5 GHz only, and Wi-Fi 4 (802.11n) uses 2.4 GHz and 5 GHz. Both the access points and the client devices must support 6 GHz for clients to connect on that band.",
      "topic": "Networking",
      "subtopic": "Explain wireless networking technologies",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 Objective 2.2 – Wireless frequencies (2.4 GHz, 5 GHz, 6 GHz) and 802.11 standards"
    },
    {
      "stem": "A company's outbound email is often marked as spam by recipient mail servers. The administrator wants to publish, in the company's public DNS zone, the list of mail servers that are authorized to send email on behalf of the company's domain. Which of the following should the administrator create?",
      "options": [
        "An MX record for each outbound mail server",
        "A TXT record containing an SPF policy",
        "A CNAME record that points to the mail server",
        "An AAAA record for each outbound mail server"
      ],
      "answer": "B",
      "explanation": "Sender Policy Framework (SPF) is published as a DNS TXT record that lists the servers and IP addresses permitted to send email for the domain, and receiving servers compare the sending server's address against it. An MX record tells other servers where to deliver inbound mail for the domain, not which servers may send it. CNAME records create aliases and AAAA records map names to IPv6 addresses, so neither authorizes senders; DKIM and DMARC policies are also published as TXT records to further improve deliverability.",
      "topic": "Networking",
      "subtopic": "Explain common network configuration concepts",
      "difficulty": "hard",
      "source": "CompTIA A+ 220-1201 Objective 2.4 – DNS record types: TXT records for SPF, DKIM and DMARC; MX records"
    },
    {
      "stem": "Users frequently lose access to a network printer because its IP address changes after the printer restarts. The administrator wants the printer to keep receiving the same IP address from the DHCP server without changing any settings on the printer itself. Which of the following should the administrator configure?",
      "options": [
        "A DHCP exclusion range",
        "A longer DHCP lease time",
        "A larger DHCP scope",
        "An APIPA address on the printer",
        "A DHCP reservation"
      ],
      "answer": "E",
      "explanation": "A DHCP reservation ties a specific IP address to the printer's MAC address, so the DHCP server always hands the printer the same address while addressing stays centrally managed. A longer lease only delays address changes, a larger scope adds addresses without fixing any to a device, and an exclusion range only removes addresses from the pool, which would then require a static address configured on the printer. APIPA addresses are self-assigned when no DHCP server responds and are not suitable for a shared printer.",
      "topic": "Networking",
      "subtopic": "Explain common network configuration concepts",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 2.4 – DHCP: leases, reservations, scope, exclusions"
    },
    {
      "stem": "A technician is installing an outdoor pan-tilt-zoom (PTZ) security camera that draws up to 25 W over its Ethernet cable. The existing switch supports only IEEE 802.3af, and the switch cannot be replaced. Which of the following should the technician use to power the camera?",
      "options": [
        "An IEEE 802.3at (PoE+) injector",
        "An IEEE 802.3af (PoE) injector",
        "A VLAN configured on the switch port",
        "A shielded Cat 6 patch cable"
      ],
      "answer": "A",
      "explanation": "IEEE 802.3af (PoE) supplies up to 15.4 W per port, about 12.95 W at the device, which is not enough for a 25 W camera. IEEE 802.3at (PoE+) supplies up to 30 W per port, about 25.5 W at the device, so a PoE+ injector placed between the existing switch and the camera adds sufficient power while passing data through. Configuring a VLAN or changing the patch cable does not increase the power available to the camera.",
      "topic": "Networking",
      "subtopic": "Compare and contrast common networking hardware devices",
      "difficulty": "hard",
      "source": "CompTIA A+ 220-1201 Objective 2.5 – Power over Ethernet (PoE): injectors, switches, PoE standards"
    },
    {
      "stem": "A technician is servicing a laser printer that has reached the page count at which the manufacturer recommends installing a maintenance kit. Which of the following components are typically replaced as part of a laser printer maintenance kit? (Choose TWO.)",
      "options": [
        "Toner cartridge",
        "Fuser assembly",
        "Laser scanning unit",
        "Pickup rollers",
        "Formatter board"
      ],
      "answer": "BD",
      "explanation": "Laser printer maintenance kits contain the parts that wear out after a set number of pages, typically the fuser assembly, pickup and feed rollers, separation pads and often the transfer roller. The toner cartridge is a consumable replaced whenever it runs low rather than on a maintenance schedule, and the laser scanning unit and formatter board are not routine wear items. After installing the kit, the technician should reset the printer's maintenance counter so the reminder clears.",
      "topic": "Hardware",
      "subtopic": "Given a scenario, perform appropriate printer maintenance",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 3.8 – Laser printer maintenance: applying a maintenance kit"
    },
    {
      "stem": "A technician is building a database server and must select memory that can detect and correct single-bit errors to help prevent data corruption. Which of the following should the technician select?",
      "options": [
        "Registered (buffered) memory",
        "A dual-channel memory kit",
        "Higher-capacity memory modules",
        "Error-correcting code (ECC) memory"
      ],
      "answer": "D",
      "explanation": "Error-correcting code (ECC) memory stores extra check bits with each data word so the memory controller can detect and correct single-bit errors and detect multi-bit errors, which is why it is used in servers holding critical data. Registered (buffered) memory improves electrical stability when many modules are installed but does not by itself correct errors, and dual-channel kits or larger modules only change bandwidth or capacity. The motherboard and CPU must both support ECC for it to work.",
      "topic": "Hardware",
      "subtopic": "Compare and contrast RAM characteristics",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 Objective 3.3 – RAM characteristics: error-correcting code (ECC) vs. non-ECC"
    },
    {
      "stem": "A technician must run a copper Ethernet cable 90 m (295 ft) from a switch to a workstation that requires a 10 Gbps connection. Which of the following cable categories should the technician use?",
      "options": [
        "Cat 5",
        "Cat 5e",
        "Cat 6a",
        "Cat 6"
      ],
      "answer": "C",
      "explanation": "Cat 6a is rated for 10GBASE-T over the full 100 m (328 ft) channel length, so it supports 10 Gbps on a 90 m run. Cat 6 can carry 10 Gbps only up to about 55 m (180 ft) because of crosstalk, while Cat 5e is rated for 1 Gbps and Cat 5 for 100 Mbps at 100 m.",
      "topic": "Hardware",
      "subtopic": "Summarize basic cable types and their connectors, features, and purposes",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 3.2 – Network cables: Cat 5, Cat 5e, Cat 6, Cat 6a"
    },
    {
      "stem": "A server has six identical drives. The administrator needs an array that will keep operating if any two drives fail at the same time, while providing more usable capacity than mirroring the drives. Which of the following RAID levels should the administrator configure?",
      "options": [
        "RAID 0",
        "RAID 1",
        "RAID 5",
        "RAID 6",
        "RAID 10"
      ],
      "answer": "D",
      "explanation": "RAID 6 stripes data with two independent sets of parity, so the array keeps running if any two drives fail, and with six drives it provides the usable capacity of four. RAID 5 has only one set of parity and survives a single drive failure, and RAID 0 has no fault tolerance at all. RAID 10 survives two failures only when they occur in different mirrored pairs and, like RAID 1 mirroring, gives only half of the raw capacity.",
      "topic": "Hardware",
      "subtopic": "Compare and contrast storage devices",
      "difficulty": "hard",
      "source": "CompTIA A+ 220-1201 Objective 3.4 – Drive configurations: RAID 0, 1, 5, 6, 10"
    },
    {
      "stem": "A shared multifunction printer in an office often leaves confidential documents sitting in the output tray where anyone can pick them up. Management wants to ensure that pages are printed only when the person who sent the job is standing at the device. Which of the following should the technician configure?",
      "options": [
        "Secured prints with badge or PIN release",
        "Audit logs for all submitted print jobs",
        "Duplex printing enabled by default",
        "A dedicated tray for confidential paper"
      ],
      "answer": "A",
      "explanation": "Secured printing (often called pull printing or print release) holds each job until the sender authenticates at the device with a badge, PIN or credentials, so confidential pages are never left unattended in the output tray. Audit logs record who printed what but do not stop others from picking up the pages, while duplex printing and tray assignment change only how the job is printed.",
      "topic": "Hardware",
      "subtopic": "Given a scenario, deploy and configure multifunction devices/printers and settings",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 3.7 – Printer/MFD security: user authentication, badging, audit logs, secured prints"
    },
    {
      "stem": "A company wants to consolidate several physical servers onto one host. The hypervisor must be installed directly on the server hardware rather than running as an application within a host operating system. Which of the following should the company use?",
      "options": [
        "A Type 2 hypervisor",
        "A container runtime",
        "A Type 1 hypervisor",
        "A virtual desktop client"
      ],
      "answer": "C",
      "explanation": "A Type 1 (bare-metal) hypervisor, such as VMware ESXi, is installed directly on the server hardware and manages virtual machines without a general-purpose host operating system underneath, which reduces overhead and suits server consolidation. A Type 2 hypervisor, such as Oracle VirtualBox or VMware Workstation, runs as an application on top of an existing operating system. Containers share the host OS kernel rather than virtualizing hardware, and a virtual desktop client only connects to hosted desktops.",
      "topic": "Virtualization and Cloud Computing",
      "subtopic": "Explain virtualization concepts",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 Objective 4.1 – Hypervisors: Type 1 and Type 2"
    },
    {
      "stem": "Several regional hospitals want to share a cloud infrastructure that is built to meet their common regulatory and privacy requirements, with costs divided among the hospitals and no access for the general public. Which of the following cloud models should the hospitals adopt?",
      "options": [
        "Public cloud",
        "Community cloud",
        "Private cloud",
        "Hybrid cloud"
      ],
      "answer": "B",
      "explanation": "A community cloud is shared by several organizations that have common concerns, such as the same regulatory, security or compliance requirements, and its costs are split among those members. A private cloud serves a single organization, a public cloud is open to any paying customer, and a hybrid cloud combines two or more models rather than describing a shared, members-only infrastructure.",
      "topic": "Virtualization and Cloud Computing",
      "subtopic": "Summarize cloud computing concepts",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 4.2 – Common cloud models: private, public, hybrid, community"
    },
    {
      "stem": "A user brings in a smartphone whose screen has started lifting away from the frame on one side. The back of the phone also appears slightly bulged. Which of the following should the technician do?",
      "options": [
        "Reseat the screen using new adhesive",
        "Recalibrate the touchscreen digitizer",
        "Fully charge the phone to stabilize it",
        "Power it off and replace the battery"
      ],
      "answer": "D",
      "explanation": "A screen lifting away from the frame together with a bulging case are classic signs of a swollen lithium-ion battery, caused by gas building up as the cells degrade. A swollen battery can rupture or catch fire, especially when charged, pressed or punctured, so the phone should be powered off and taken out of use until the battery is replaced and the old one is recycled as hazardous waste. Pressing the screen back down or charging the phone adds pressure and heat to a damaged cell.",
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common mobile device issues",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 Objective 5.4 – Common mobile device issues: swollen battery"
    },
    {
      "stem": "A conference room projector shuts itself off after about 20 minutes of use and will not turn back on until it has sat for several minutes. While it is running, the image is bright and clear. Which of the following will most likely resolve the issue?",
      "options": [
        "Clean the air filter and intake vents",
        "Replace the projector lamp",
        "Replace the HDMI cable",
        "Select a different input source"
      ],
      "answer": "A",
      "explanation": "Projectors have thermal protection that shuts the unit off when internal temperatures get too high, and they will not restart until they cool down, which matches the pattern described. The most common cause is a clogged air filter or blocked vents that keep the fan from cooling the lamp. A failing lamp usually produces a dim image or will not light at all, and cable or input source problems cause a missing or poor signal rather than repeated power-offs.",
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot video, projector, and display issues",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 5.3 – Projector issues: intermittent projector shutdown"
    },
    {
      "stem": "A user reports that network connectivity drops for a few seconds at a time throughout the day. The switch log shows the user's port repeatedly transitioning between up and down states. Other users on the same switch are unaffected. Which of the following is the most likely cause?",
      "options": [
        "An exhausted DHCP address scope",
        "Slow responses from the DNS server",
        "A faulty patch cable or connector",
        "A duplicate IP address on the network"
      ],
      "answer": "C",
      "explanation": "A switch port that repeatedly goes up and down is called port flapping, and it means the physical link itself is being lost; the most common causes are a damaged cable, a loose or bad connector, or a failing NIC or switch port. DHCP scope exhaustion, slow DNS and duplicate IP addresses are addressing or name-resolution problems that can disrupt communication, but they do not make the switch see the physical link drop. Replacing the patch cable is the quickest first test.",
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot network issues",
      "difficulty": "hard",
      "source": "CompTIA A+ 220-1201 Objective 5.5 – Network issues: port flapping, intermittent connectivity"
    },
    {
      "stem": "A laser printer frequently pulls several sheets at once from the paper tray, causing jams. The paper is the correct type and weight and was fanned before loading. Which of the following components should the technician replace?",
      "options": [
        "Fuser assembly",
        "Separation pad",
        "Transfer roller",
        "Imaging drum"
      ],
      "answer": "B",
      "explanation": "The separation pad (or separation roller) uses friction to hold back all but the top sheet as the pickup roller feeds paper into the printer; when it becomes worn or glazed, several sheets are pulled through together. The fuser, transfer roller and imaging drum handle toner and the image after the paper has already been fed, so they do not cause multiple sheets to be picked up.",
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot printer issues",
      "difficulty": "medium",
      "source": "CompTIA A+ 220-1201 Objective 5.6 – Printer issues: multipage misfeed, paper jams"
    },
    {
      "stem": "A user reports that a desktop computer makes repeated clicking noises from inside the case, and the operating system displays a S.M.A.R.T. warning for the hard drive. Which of the following should the technician do first?",
      "options": [
        "Defragment the hard drive",
        "Reinstall the operating system",
        "Update the system firmware",
        "Back up the user's data"
      ],
      "answer": "D",
      "explanation": "Clicking noises combined with a S.M.A.R.T. predictive-failure warning indicate that the hard drive is likely to fail soon, so the priority is to copy the user's data while it can still be read, and then replace the drive. Defragmenting puts heavy read/write stress on a failing drive and can hasten the failure, while reinstalling the operating system or updating firmware does not fix failing hardware and risks the data.",
      "topic": "Hardware and Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot drive and RAID issues",
      "difficulty": "easy",
      "source": "CompTIA A+ 220-1201 Objective 5.2 – Drive issues: clicking sounds, S.M.A.R.T. failure"
    }
  ]
}
```
