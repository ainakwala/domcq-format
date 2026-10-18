```json
{
  "format": "domcq/1",
  "exam": "comptia-netplus",
  "set": "CompTIA Network+ (N10-009) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "Which of the following OSI model layers is responsible for logical addressing and for routing packets between different networks?",
      "options": [
        "Layer 2 (Data Link)",
        "Layer 3 (Network)",
        "Layer 4 (Transport)",
        "Layer 5 (Session)"
      ],
      "answer": "B",
      "explanation": "The Network layer (Layer 3) uses logical addresses such as IP addresses and relies on routers to forward packets between networks. The Data Link layer uses physical (MAC) addresses within a single network segment. The Transport layer provides end-to-end delivery using port numbers, and the Session layer manages dialogs between applications.",
      "topic": "Networking Concepts",
      "subtopic": "Explain concepts related to the Open Systems Interconnection (OSI) reference model",
      "difficulty": "easy",
      "source": "CompTIA Network+ N10-009 exam objectives, 1.1: OSI reference model layers and their functions"
    },
    {
      "stem": "Which of the following are the default ports for POP3 over TLS (POP3S) and IMAP over TLS (IMAPS)? Choose TWO.",
      "options": [
        "TCP 110",
        "TCP 993",
        "TCP 143",
        "TCP 995"
      ],
      "answer": "BD",
      "explanation": "IMAP over TLS uses TCP 993 and POP3 over TLS uses TCP 995, and both encrypt the session from the start of the connection. TCP 110 is the default for unencrypted POP3, and TCP 143 is the default for unencrypted IMAP.",
      "topic": "Networking Concepts",
      "subtopic": "Explain common networking ports, protocols, services, and traffic types",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 exam objectives, 1.4: common ports and protocols (IMAP and POP3 over SSL/TLS)"
    },
    {
      "stem": "A development team wants to deploy its web application to a cloud environment without managing servers, operating systems, or runtime patching. The team still wants full control over its application code and data. Which of the following cloud service models best meets this requirement?",
      "options": [
        "Infrastructure as a Service (IaaS)",
        "Software as a Service (SaaS)",
        "Platform as a Service (PaaS)",
        "Desktop as a Service (DaaS)"
      ],
      "answer": "C",
      "explanation": "With PaaS the provider manages the servers, operating system, and runtime, and the customer deploys and controls only the application and its data. With IaaS the customer must still manage the operating system and runtime. With SaaS the customer uses a finished application and does not control its code, and DaaS delivers virtual desktops rather than an application platform.",
      "topic": "Networking Concepts",
      "subtopic": "Summarize cloud concepts and connectivity options",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 exam objectives, 1.3: cloud service models (SaaS, PaaS, IaaS, DaaS)"
    },
    {
      "stem": "A host is configured with the IP address 10.20.37.130 and the subnet mask 255.255.255.192. Which of the following is the broadcast address of the subnet to which this host belongs?",
      "options": [
        "10.20.37.159",
        "10.20.37.255",
        "10.20.37.192",
        "10.20.37.191"
      ],
      "answer": "D",
      "explanation": "The mask 255.255.255.192 is a /26, which creates subnets in blocks of 64 addresses: .0, .64, .128, and .192. The host at .130 falls in the .128 subnet, whose range is .128 to .191, and the last address in the range (.191) is the broadcast address. The address .159 would be the broadcast for a /27, .255 for a /24, and .192 is the network address of the next subnet.",
      "topic": "Networking Concepts",
      "subtopic": "Given a scenario, use appropriate IPv4 network addressing",
      "difficulty": "hard",
      "source": "CompTIA Network+ N10-009 exam objectives, 1.7: IPv4 subnetting and CIDR notation"
    },
    {
      "stem": "Which of the following routing protocols is used to exchange routing information between autonomous systems on the internet?",
      "options": [
        "Border Gateway Protocol (BGP)",
        "Open Shortest Path First (OSPF)",
        "Routing Information Protocol (RIP)",
        "Enhanced Interior Gateway Routing Protocol (EIGRP)"
      ],
      "answer": "A",
      "explanation": "BGP is the exterior gateway protocol used between autonomous systems, and it is the protocol that holds the internet's inter-provider routing together. OSPF, RIP, and EIGRP are interior gateway protocols that operate inside a single autonomous system.",
      "topic": "Network Implementation",
      "subtopic": "Explain characteristics of routing technologies",
      "difficulty": "easy",
      "source": "CompTIA Network+ N10-009 exam objectives, 2.1: dynamic routing protocols (BGP, OSPF, EIGRP, RIP)"
    },
    {
      "stem": "A network administrator wants to combine two 1 Gbps links between two switches into a single logical link that provides more bandwidth and keeps working if one of the physical links fails. Which of the following should the administrator configure?",
      "options": [
        "Port mirroring (SPAN)",
        "Spanning Tree Protocol (STP)",
        "Link aggregation (LACP)",
        "802.1Q trunking"
      ],
      "answer": "C",
      "explanation": "Link aggregation, commonly negotiated with LACP (IEEE 802.3ad/802.1AX), bundles multiple physical ports into one logical interface that shares the load and survives the loss of a member link. STP would block one of two parallel links to prevent a loop rather than use both. Trunking carries multiple VLANs over a link, and port mirroring copies traffic to a monitoring port.",
      "topic": "Network Implementation",
      "subtopic": "Given a scenario, configure switching technologies and features",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 exam objectives, 2.2: switching features (link aggregation, spanning tree, trunking, port mirroring)"
    },
    {
      "stem": "A wireless engineer is planning access point channels for an office in North America. The APs use the 2.4 GHz band with a 20 MHz channel width, and neighboring APs must avoid adjacent-channel interference. Which of the following channels do not overlap with one another and can be used together? Choose THREE.",
      "options": [
        "Channel 1",
        "Channel 6",
        "Channel 9",
        "Channel 11"
      ],
      "answer": "ABD",
      "explanation": "Channels in the 2.4 GHz band are spaced only 5 MHz apart, but each transmission occupies roughly 20 to 22 MHz, so only channels 1, 6, and 11 are far enough apart not to overlap in North America. Channel 9 overlaps with both channel 6 and channel 11, so using it would cause adjacent-channel interference.",
      "topic": "Network Implementation",
      "subtopic": "Given a scenario, select and configure wireless devices and technologies",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 exam objectives, 2.3: wireless channel selection and non-overlapping channels"
    },
    {
      "stem": "A data center uses a hot-aisle/cold-aisle layout. A technician is mounting a new switch so that its ports face the rear of the rack, which opens onto the hot aisle. The switch must draw in cool air from the cold aisle at the front of the rack and expel the heated air into the hot aisle. Which of the following airflow designs should the technician select for the switch?",
      "options": [
        "Port-side intake airflow",
        "Port-side exhaust airflow",
        "Side-to-side airflow",
        "Bottom-to-top airflow"
      ],
      "answer": "B",
      "explanation": "Port-side exhaust means the fans blow air out of the side of the switch that has the ports, and air is drawn in from the opposite side. Because the ports face the hot aisle, the exhaust goes into the hot aisle and the intake faces the cold aisle. Port-side intake would pull hot air in from the hot aisle, and side-to-side airflow does not match a front-to-back rack layout.",
      "topic": "Network Implementation",
      "subtopic": "Explain important factors of physical installations",
      "difficulty": "hard",
      "source": "CompTIA Network+ N10-009 exam objectives, 2.4: installation implications (rack, port-side exhaust/intake, environmental factors)"
    },
    {
      "stem": "A company's disaster recovery plan requires that, after a failure, restored systems may be missing no more than 4 hours of data. Which of the following metrics does this requirement define?",
      "options": [
        "Recovery point objective (RPO)",
        "Recovery time objective (RTO)",
        "Mean time to repair (MTTR)",
        "Mean time between failures (MTBF)"
      ],
      "answer": "A",
      "explanation": "The RPO is the maximum amount of data loss, measured in time, that the business can tolerate, and it determines how often data must be backed up or replicated. The RTO is how quickly service must be restored. MTTR and MTBF are reliability averages for repair time and time between failures, not recovery targets for lost data.",
      "topic": "Network Operations",
      "subtopic": "Explain disaster recovery (DR) concepts",
      "difficulty": "easy",
      "source": "CompTIA Network+ N10-009 exam objectives, 3.3: recovery metrics (RPO, RTO, MTTR, MTBF)"
    },
    {
      "stem": "A network administrator needs to identify which hosts and applications are consuming the most bandwidth on a WAN link, based on source and destination IP addresses, ports, and byte counts. Which of the following should the administrator use?",
      "options": [
        "SNMP polling of interface counters",
        "Syslog messages from the router",
        "SNMP traps from the router",
        "NetFlow records from the router"
      ],
      "answer": "D",
      "explanation": "NetFlow (and similar flow data such as IPFIX) summarizes conversations by source and destination address, port, protocol, and volume, which makes it well suited to finding top talkers. SNMP interface counters show total utilization of an interface but not which hosts or applications generate it. Syslog and SNMP traps report events rather than traffic volumes per conversation.",
      "topic": "Network Operations",
      "subtopic": "Given a scenario, use network monitoring technologies",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 exam objectives, 3.2: network monitoring (flow data, SNMP, log aggregation)"
    },
    {
      "stem": "A network administrator wants shop.example.com to resolve to the same web server as www.example.com, so that only a single IP address entry needs to be updated if the server's address ever changes. Which of the following DNS record types should the administrator create for shop.example.com?",
      "options": [
        "A record",
        "MX record",
        "CNAME record",
        "PTR record"
      ],
      "answer": "C",
      "explanation": "A CNAME record makes one name an alias of another name, so shop.example.com can point to www.example.com and follow it automatically when the underlying A record changes. A second A record would work today but would have to be edited separately whenever the address changes. MX records direct mail, and PTR records map an IP address back to a name.",
      "topic": "Network Operations",
      "subtopic": "Given a scenario, implement IPv4 and IPv6 network services",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 exam objectives, 3.4: DNS record types (A, AAAA, CNAME, MX, PTR, TXT)"
    },
    {
      "stem": "A remote employee uses a client VPN. The company wants only traffic destined for internal corporate subnets to be sent through the encrypted tunnel, while all other internet traffic leaves directly through the employee's home connection. Which of the following VPN configurations accomplishes this?",
      "options": [
        "Clientless VPN",
        "Full tunnel",
        "Site-to-site VPN",
        "Split tunnel"
      ],
      "answer": "D",
      "explanation": "A split tunnel sends only traffic for the defined corporate networks through the VPN and lets everything else use the local internet connection, which reduces load on the VPN gateway. A full tunnel sends all of the client's traffic through the VPN. A clientless VPN gives browser-based access to specific resources, and a site-to-site VPN links two networks rather than an individual client.",
      "topic": "Network Operations",
      "subtopic": "Compare and contrast network access and management methods",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 exam objectives, 3.5: VPN types (client-to-site, split tunnel, full tunnel, clientless)"
    },
    {
      "stem": "A company wants a centralized protocol for administrator logins to its routers and switches that separates authentication, authorization, and accounting and encrypts the entire body of each packet. Which of the following should the company deploy?",
      "options": [
        "TACACS+",
        "RADIUS",
        "Kerberos",
        "LDAP"
      ],
      "answer": "A",
      "explanation": "TACACS+ treats authentication, authorization, and accounting as separate functions and encrypts the full packet body, which also allows fine-grained per-command authorization on network devices. RADIUS combines authentication and authorization and encrypts only the password in the access request. Kerberos is a ticket-based authentication protocol, and LDAP is a directory access protocol rather than an AAA protocol for device administration.",
      "topic": "Network Security",
      "subtopic": "Explain the importance of basic network security concepts",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 exam objectives, Domain 4.0 Network Security: identity and access management and authentication methods (TACACS+, RADIUS)"
    },
    {
      "stem": "An attacker connects a laptop to an access port on a switch and runs a tool that generates thousands of Ethernet frames, each with a different random source MAC address. Shortly afterward, the laptop begins receiving unicast traffic that was addressed to other hosts in the same VLAN. Which of the following best explains why the attacker can now see that traffic?",
      "options": [
        "The other hosts' ARP caches were poisoned with the attacker's MAC address",
        "The MAC address table filled, so the switch flooded unicast frames out all ports",
        "The switch port was dynamically promoted to a trunk carrying every VLAN",
        "The DHCP scope was exhausted, so hosts fell back to link-local addressing"
      ],
      "answer": "B",
      "explanation": "This is MAC flooding. The switch's MAC address table has a finite size, and once the forged entries fill it the switch cannot learn legitimate addresses, so it floods frames with unknown destinations out all ports in the VLAN, including the attacker's. Limiting the number of MAC addresses per port with port security is the usual mitigation.",
      "topic": "Network Security",
      "subtopic": "Summarize various types of attacks and their impact to the network",
      "difficulty": "hard",
      "source": "CompTIA Network+ N10-009 exam objectives, 4.2: attack types (MAC flooding, ARP poisoning, VLAN hopping)"
    },
    {
      "stem": "A network administrator is hardening a new access-layer switch before placing it in production. Which of the following actions should the administrator take? Choose TWO.",
      "options": [
        "Disable unused switch ports",
        "Enable Telnet for remote management",
        "Change the default administrator credentials",
        "Leave unused services running for later use"
      ],
      "answer": "AC",
      "explanation": "Device hardening reduces the attack surface: unused ports and services should be disabled, and default credentials must be changed because they are publicly documented. Telnet sends credentials in clear text, so an encrypted method such as SSH should be used instead. Leaving unused services running only adds exposure.",
      "topic": "Network Security",
      "subtopic": "Given a scenario, apply network security features, defense techniques, and solutions",
      "difficulty": "easy",
      "source": "CompTIA Network+ N10-009 exam objectives, 4.3: device hardening (disable unused ports and services, change default passwords)"
    },
    {
      "stem": "A network technician has gathered information about a connectivity problem and has established a theory of probable cause. According to the CompTIA troubleshooting methodology, which of the following is the next step the technician should take?",
      "options": [
        "Implement the solution",
        "Document the findings and outcomes",
        "Establish a plan of action",
        "Test the theory to determine the cause"
      ],
      "answer": "D",
      "explanation": "The methodology runs in order: identify the problem, establish a theory of probable cause, test the theory to determine the cause, establish a plan of action, implement the solution or escalate, verify full functionality, and document. The theory must be confirmed before any plan or fix is built on it, so testing comes immediately after establishing the theory.",
      "topic": "Network Troubleshooting",
      "subtopic": "Explain the troubleshooting methodology",
      "difficulty": "easy",
      "source": "CompTIA Network+ N10-009 exam objectives, 5.1: network troubleshooting methodology steps"
    },
    {
      "stem": "A switch interface connected to an older workstation shows a rapidly increasing number of CRC errors. Which of the following are the most likely causes? Choose TWO.",
      "options": [
        "An incorrect default gateway on the workstation",
        "A damaged or poorly terminated patch cable",
        "A duplex mismatch between the port and the NIC",
        "An expired DHCP lease on the workstation"
      ],
      "answer": "BC",
      "explanation": "CRC errors mean received frames failed the frame check sequence, so they were corrupted on the wire. Typical causes are faulty or badly terminated cabling, interference, a failing NIC or transceiver, and a duplex mismatch. A wrong default gateway or an expired DHCP lease are Layer 3 problems and do not corrupt frames at Layer 2.",
      "topic": "Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common cabling and physical interface issues",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 exam objectives, 5.2: interface counters (CRC errors, runts, giants) and speed/duplex issues"
    },
    {
      "stem": "A company migrated its DHCP service to a new server at 10.0.0.50 in the server VLAN. Since the migration, clients in the server VLAN receive addresses normally, but clients in VLAN 30 configure 169.254.x.x addresses. The new server is reachable from the VLAN 30 gateway and has an active scope for VLAN 30 with addresses available. Which of the following is the most likely cause?",
      "options": [
        "The DNS server option in the VLAN 30 scope is set to an unreachable address",
        "The default gateway option in the VLAN 30 scope is incorrect",
        "The IP helper address on the VLAN 30 gateway still points to the old server",
        "The lease duration in the VLAN 30 scope is set too short"
      ],
      "answer": "C",
      "explanation": "DHCP discovery messages are broadcasts that do not cross routers, so the VLAN 30 gateway must relay them to the DHCP server using a helper (relay) address. If that address still points to the old server, the new server never sees the requests, and clients fall back to APIPA addresses. Wrong scope options such as DNS, gateway, or lease time only affect clients that have already received a lease.",
      "topic": "Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common issues with network services",
      "difficulty": "hard",
      "source": "CompTIA Network+ N10-009 exam objectives, 5.3: DHCP issues (DHCP relay/IP helper, incorrect scope, APIPA)"
    },
    {
      "stem": "A user on a video conference reports choppy audio and video. A packet capture shows that packets are arriving with highly inconsistent delays between them, but few packets are being lost. Which of the following best describes this condition?",
      "options": [
        "Jitter",
        "Latency",
        "Packet loss",
        "Attenuation"
      ],
      "answer": "A",
      "explanation": "Jitter is the variation in delay between packets, and real-time traffic such as voice and video is especially sensitive to it. Latency is the overall delay, which can be high but steady without causing choppy playback. Packet loss would show missing packets, which the capture does not, and attenuation is signal weakening over distance.",
      "topic": "Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common performance issues",
      "difficulty": "easy",
      "source": "CompTIA Network+ N10-009 exam objectives, 5.4: performance issues (latency, jitter, packet loss, congestion)"
    },
    {
      "stem": "A technician needs to determine the exact distance to a break in a single-mode fiber-optic cable that runs between two buildings. Which of the following tools should the technician use?",
      "options": [
        "A tone generator and probe",
        "An optical time-domain reflectometer",
        "A digital multimeter",
        "A fiber loopback adapter"
      ],
      "answer": "B",
      "explanation": "An optical time-domain reflectometer (OTDR) sends light pulses down the fiber and measures the reflections and backscatter, which lets it report the distance to breaks, bad splices, and connectors. A tone generator and probe trace copper cables, a multimeter measures electrical values, and a loopback adapter tests a port or transceiver rather than locating a fault along the cable.",
      "topic": "Network Troubleshooting",
      "subtopic": "Given a scenario, use the appropriate tool or protocol to solve networking issues",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 exam objectives, 5.5: hardware tools (OTDR, tone generator, multimeter, loopback adapter)"
    }
  ]
}
```
