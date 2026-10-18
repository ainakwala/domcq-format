```json
{
  "format": "domcq/1",
  "exam": "comptia-netplus",
  "set": "CompTIA Network+ (N10-009) practice – Mixed domains set",
  "questions": [
    {
      "stem": "A junior technician is learning where devices operate in the OSI model. At which of the following layers does a router make forwarding decisions based on destination IP addresses?",
      "options": [
        "Layer 2 (Data Link)",
        "Layer 3 (Network)",
        "Layer 4 (Transport)",
        "Layer 5 (Session)"
      ],
      "answer": "B",
      "explanation": "Routers operate at Layer 3, the Network layer, where logical (IP) addressing is used to forward packets between different networks. Layer 2 devices such as switches forward frames using MAC addresses, and Layer 4 deals with end-to-end segments and port numbers.",
      "topic": "Networking Concepts",
      "subtopic": "Explain concepts related to the Open Systems Interconnection (OSI) reference model",
      "difficulty": "easy",
      "source": "CompTIA Network+ N10-009 objective 1.1: OSI reference model layers"
    },
    {
      "stem": "A network administrator is configuring a firewall so that a monitoring server can poll switches for interface statistics and also receive unsolicited alerts from them using SNMP. Which of the following default ports must be permitted? Choose TWO.",
      "options": [
        "UDP 123",
        "UDP 161",
        "TCP 389",
        "UDP 162"
      ],
      "answer": "BD",
      "explanation": "SNMP managers poll agents on UDP 161 for queries and responses, and agents send unsolicited traps and informs to the manager on UDP 162. UDP 123 is NTP and TCP 389 is LDAP, so neither is part of SNMP.",
      "topic": "Networking Concepts",
      "subtopic": "Explain common networking ports, protocols, services, and traffic types",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 objective 1.4: common ports and protocols (SNMP)"
    },
    {
      "stem": "A company wants a connection from its data center to a public cloud provider that is private and dedicated, does not traverse the public internet, and offers more consistent latency than an encrypted tunnel over the internet. Which of the following cloud connectivity options meets these requirements?",
      "options": [
        "A site-to-site VPN over the internet",
        "A client-to-site VPN with split tunneling",
        "A TLS-protected session over the internet",
        "A private-direct connection to the provider"
      ],
      "answer": "D",
      "explanation": "A private-direct connection (for example, AWS Direct Connect or Azure ExpressRoute) is a dedicated circuit between the customer and the cloud provider, so traffic stays off the public internet and latency is more predictable. VPNs and TLS sessions, even when encrypted, still ride the public internet and share its variability.",
      "topic": "Networking Concepts",
      "subtopic": "Summarize cloud concepts and connectivity options",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 objective 1.3: cloud connectivity options (VPN, private-direct connection)"
    },
    {
      "stem": "A host is configured with the address 10.1.77.130/20. Which of the following is the broadcast address of the subnet to which this host belongs?",
      "options": [
        "10.1.64.255",
        "10.1.77.255",
        "10.1.79.255",
        "10.1.80.255"
      ],
      "answer": "C",
      "explanation": "A /20 mask is 255.255.240.0, so the third octet increments in blocks of 16. The value 77 falls in the block 64-79, which gives a network address of 10.1.64.0 and a broadcast address (all host bits set to 1) of 10.1.79.255.",
      "topic": "Networking Concepts",
      "subtopic": "Given a scenario, use appropriate IPv4 network addressing",
      "difficulty": "hard",
      "source": "CompTIA Network+ N10-009 objective 1.7: IPv4 subnetting and CIDR notation"
    },
    {
      "stem": "A router's routing table contains these entries: 10.0.0.0/8 via R1, 10.1.0.0/16 via R2, 10.1.1.0/24 via R3, and 0.0.0.0/0 via R4. The router receives a packet destined for 10.1.1.55. Which of the following next hops will the router use?",
      "options": [
        "R3",
        "R1",
        "R2",
        "R4"
      ],
      "answer": "A",
      "explanation": "A router selects the matching route with the longest prefix, which is the most specific match. The address 10.1.1.55 matches the /8, /16, /24 and default routes, but the /24 has the longest prefix, so the packet is forwarded to R3.",
      "topic": "Network Implementation",
      "subtopic": "Explain characteristics of routing technologies",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 objective 2.1: routing technologies, route selection (prefix length)"
    },
    {
      "stem": "An administrator has connected two switches with two 10 Gbps links, and spanning tree is blocking one of them. The administrator wants both links to carry traffic as one logical connection with 20 Gbps of aggregate bandwidth and failover if one link fails. Which of the following should be configured?",
      "options": [
        "An 802.1Q trunk on each link",
        "Link aggregation using LACP",
        "Port mirroring on both links",
        "PortFast on both switch ports"
      ],
      "answer": "B",
      "explanation": "Link aggregation (LACP, IEEE 802.3ad/802.1AX) bundles several physical links into one logical interface, which spanning tree treats as a single link, so all member links forward traffic and the bundle survives the loss of one member. A trunk carries multiple VLANs without combining bandwidth, mirroring copies traffic for analysis, and PortFast only speeds up forwarding on access ports.",
      "topic": "Network Implementation",
      "subtopic": "Given a scenario, configure switching technologies and features",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 objective 2.2: switching technologies and features (link aggregation, spanning tree)"
    },
    {
      "stem": "A technician is deploying three access points with overlapping coverage in a building in North America. All of them use the 2.4 GHz band with 20 MHz channels. Which of the following channel assignments minimizes co-channel and adjacent-channel interference?",
      "options": [
        "Channels 1, 3, and 5",
        "Channels 6, 7, and 8",
        "Channels 1, 6, and 11",
        "Channels 2, 4, and 6"
      ],
      "answer": "C",
      "explanation": "In the 2.4 GHz band, channels are spaced 5 MHz apart but each 20 MHz-wide channel spans roughly 22 MHz, so only channels 1, 6, and 11 do not overlap in the North American channel plan. The other sets place neighboring access points on overlapping channels, which increases interference and retransmissions.",
      "topic": "Network Implementation",
      "subtopic": "Given a scenario, select and configure wireless devices and technologies",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 objective 2.3: wireless frequencies and channels (2.4 GHz)"
    },
    {
      "stem": "A switch has a total PoE budget of 370 W and reserves 15.4 W per port for each 802.3af device and 30 W per port for each 802.3at device. Currently, eight 802.3af IP phones and six 802.3at cameras are connected and drawing their reserved power. Which of the following is the maximum number of additional 802.3at devices the switch can power without exceeding the budget?",
      "options": [
        "2 devices",
        "6 devices",
        "8 devices",
        "12 devices"
      ],
      "answer": "A",
      "explanation": "The reserved power is 8 x 15.4 W = 123.2 W for the phones plus 6 x 30 W = 180 W for the cameras, or 303.2 W of the 370 W budget. The remaining 66.8 W is enough for only two more 30 W devices (60 W). Ignoring the existing load would suggest 12 devices, and ignoring the phones would suggest 6.",
      "topic": "Network Implementation",
      "subtopic": "Explain important factors of physical installations",
      "difficulty": "hard",
      "source": "CompTIA Network+ N10-009 objective 2.4: physical installation factors (power, PoE)"
    },
    {
      "stem": "After an outage, an organization's disaster recovery policy states that no more than 15 minutes of data may be lost. Which of the following metrics does this requirement describe?",
      "options": [
        "Mean time to repair (MTTR)",
        "Recovery time objective (RTO)",
        "Mean time between failures (MTBF)",
        "Recovery point objective (RPO)"
      ],
      "answer": "D",
      "explanation": "The recovery point objective defines the maximum acceptable amount of data loss measured in time, which determines how often data must be backed up or replicated. The RTO is how long it may take to restore service, MTTR is the average time needed to repair a failure, and MTBF is the average time between failures.",
      "topic": "Network Operations",
      "subtopic": "Explain disaster recovery (DR) concepts",
      "difficulty": "easy",
      "source": "CompTIA Network+ N10-009 objective 3.3: disaster recovery concepts (RPO, RTO, MTTR, MTBF)"
    },
    {
      "stem": "A network administrator wants to determine which hosts and applications are consuming the most bandwidth on a congested WAN link. Which of the following should the administrator implement?",
      "options": [
        "SNMP traps for interface-down events",
        "Syslog messages from the WAN router",
        "Flow data export (NetFlow or IPFIX) to a collector",
        "A baseline of router CPU utilization"
      ],
      "answer": "C",
      "explanation": "Flow data such as NetFlow or IPFIX summarizes conversations by source and destination address, port, protocol and byte count, so a collector can report the top talkers and top applications on a link. SNMP traps signal events, syslog records log messages, and a CPU baseline does not describe the composition of traffic.",
      "topic": "Network Operations",
      "subtopic": "Given a scenario, use network monitoring technologies",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 objective 3.2: network monitoring technologies (flow data)"
    },
    {
      "stem": "A company has a single DHCP server in VLAN 10. A new VLAN 20 was created with its own subnet and a Layer 3 gateway, and a matching scope was added on the DHCP server, but clients in VLAN 20 still cannot obtain addresses. Which of the following should be configured on the VLAN 20 gateway interface?",
      "options": [
        "A DHCP relay agent (IP helper) pointing to the server",
        "A DHCP reservation for each VLAN 20 client",
        "An exclusion range in the VLAN 10 scope",
        "A DNS forwarder pointing to the DHCP server"
      ],
      "answer": "A",
      "explanation": "A client's DHCP discovery is a broadcast, which routers do not forward by default, so requests from VLAN 20 never reach the server in VLAN 10. A DHCP relay agent (ip helper-address) on the VLAN 20 gateway converts the broadcast into a unicast to the server and includes the gateway interface address, so the server selects the VLAN 20 scope.",
      "topic": "Network Operations",
      "subtopic": "Given a scenario, implement IPv4 and IPv6 network services",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 objective 3.4: DHCP (scope options, reservations, relay/IP helper)"
    },
    {
      "stem": "A network administrator is hardening the management plane of a branch router and wants to leave enabled only protocols that encrypt management traffic. Which of the following should remain enabled? Choose THREE.",
      "options": [
        "SSH with key-based login",
        "Telnet with a strong password",
        "HTTPS with a trusted certificate",
        "SNMPv3 with authPriv enabled"
      ],
      "answer": "ACD",
      "explanation": "SSH, HTTPS (which uses TLS) and SNMPv3 in authPriv mode all encrypt the traffic exchanged with the device, so credentials and configuration data are protected from eavesdropping. Telnet sends everything, including the password, in clear text, no matter how strong the password is.",
      "topic": "Network Operations",
      "subtopic": "Compare and contrast network access and management methods",
      "difficulty": "easy",
      "source": "CompTIA Network+ N10-009 objective 3.5: network access and management methods (SSH, GUI)"
    },
    {
      "stem": "A person carrying several boxes waits outside a badge-controlled entrance. As an employee badges in, the person follows closely behind and slips through the door before it closes, without presenting a badge. Which of the following social engineering attacks is this an example of?",
      "options": [
        "Phishing",
        "Tailgating",
        "Shoulder surfing",
        "Dumpster diving"
      ],
      "answer": "B",
      "explanation": "Tailgating is gaining physical access to a secured area by following an authorized person through an access-controlled entry without authenticating. Phishing is a fraudulent electronic message, shoulder surfing is observing someone's screen or keystrokes to capture information, and dumpster diving is searching discarded materials for sensitive data.",
      "topic": "Network Security",
      "subtopic": "Summarize various types of attacks and their impact to the network",
      "difficulty": "easy",
      "source": "CompTIA Network+ N10-009 objective 4.2: social engineering (tailgating, phishing, shoulder surfing)"
    },
    {
      "stem": "A network administrator discovers that an employee connected a personal router to an access-layer switch port, and it is handing out incorrect IP addresses to nearby clients. Which of the following switch features should the administrator enable to stop unauthorized DHCP offers from reaching clients?",
      "options": [
        "BPDU guard on the access ports",
        "Port mirroring on the uplink port",
        "Dynamic ARP inspection on the VLAN",
        "DHCP snooping with trusted uplink ports"
      ],
      "answer": "D",
      "explanation": "DHCP snooping classifies switch ports as trusted or untrusted and drops DHCP server messages, such as offers and acknowledgments, that arrive on untrusted ports, so a rogue DHCP server on an access port cannot answer clients. The ports leading to the legitimate DHCP server or relay are marked trusted. Dynamic ARP inspection addresses ARP spoofing, BPDU guard protects spanning tree, and port mirroring only copies traffic for analysis.",
      "topic": "Network Security",
      "subtopic": "Given a scenario, apply network security features, defense techniques, and solutions",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 objective 4.3: network security features and defense techniques (rogue DHCP)"
    },
    {
      "stem": "A company is selecting an AAA protocol for network device administration. The requirements are to authorize individual commands that an administrator types on a router, keep authentication, authorization and accounting as separate functions, and encrypt the entire payload of each packet. Which of the following protocols best meets these requirements?",
      "options": [
        "RADIUS",
        "Kerberos",
        "TACACS+",
        "LDAP"
      ],
      "answer": "C",
      "explanation": "TACACS+ separates authentication, authorization and accounting, supports per-command authorization on network devices, and encrypts the full body of each packet over TCP port 49. RADIUS combines authentication and authorization and encrypts only the password field, Kerberos is a ticket-based authentication protocol, and LDAP is a directory access protocol.",
      "topic": "Network Security",
      "subtopic": "Explain the importance of basic network security concepts",
      "difficulty": "hard",
      "source": "CompTIA Network+ N10-009 objective 4.1: authentication and AAA (RADIUS, TACACS+, LDAP)"
    },
    {
      "stem": "A network technician has gathered information about a user's connectivity problem, questioned the user, and established a theory of probable cause. Which of the following is the next step in the troubleshooting methodology?",
      "options": [
        "Document findings, actions, and outcomes",
        "Implement the solution or escalate as necessary",
        "Verify full system functionality",
        "Test the theory to determine the cause"
      ],
      "answer": "D",
      "explanation": "The methodology runs in order: identify the problem, establish a theory of probable cause, test the theory to determine the cause, establish a plan of action and identify potential effects, implement the solution or escalate, verify full system functionality, and document findings, actions, outcomes, and lessons learned. A theory must be tested before any fix is planned or applied.",
      "topic": "Network Troubleshooting",
      "subtopic": "Explain the troubleshooting methodology",
      "difficulty": "easy",
      "source": "CompTIA Network+ N10-009 objective 5.1: network troubleshooting methodology"
    },
    {
      "stem": "A technician installs a new Gigabit Ethernet link to an IP camera at the far end of a warehouse. The link comes up at only 100 Mbps and the switch port reports a growing number of CRC errors. A cable certifier shows that the Cat 6 UTP run is 118 meters long. Which of the following is the most likely cause?",
      "options": [
        "The switch port is placed in the wrong VLAN",
        "The cable run exceeds the 100-meter channel limit",
        "The cable ends use a crossover pinout",
        "The camera uses an incorrect default gateway"
      ],
      "answer": "B",
      "explanation": "Twisted-pair Ethernet is limited to 100 meters per channel, and beyond that attenuation and noise degrade the signal, which can force a fallback to a lower speed and cause CRC errors. A wrong VLAN or gateway affects reachability but does not corrupt frames, and a miswired cable would typically prevent the link from coming up rather than cause a distance-related fallback.",
      "topic": "Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common cabling and physical interface issues",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 objective 5.2: cabling and physical interface issues (attenuation, distance limits)"
    },
    {
      "stem": "After a power outage, a Linux server that is joined to a Kerberos-based domain can no longer authenticate users. The logs show 'clock skew too great' errors, and the server's system time is 20 minutes ahead of the domain controllers. Which of the following services is most likely misconfigured or unreachable on the server?",
      "options": [
        "Time synchronization (NTP)",
        "Address assignment (DHCP)",
        "Network monitoring (SNMP)",
        "Log forwarding (syslog)"
      ],
      "answer": "A",
      "explanation": "Kerberos relies on timestamps to prevent replay attacks and rejects requests when clocks differ by more than a small tolerance, typically 5 minutes by default. A clock that is 20 minutes off points to a failure of time synchronization, so the NTP configuration and reachability of the time source should be checked. DHCP, SNMP and syslog do not set the system clock.",
      "topic": "Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common issues with network services",
      "difficulty": "medium",
      "source": "CompTIA Network+ N10-009 objective 5.3: network service issues; objective 3.4: NTP"
    },
    {
      "stem": "Users report very slow file transfers to a file server. The server NIC was manually configured for 100 Mbps full duplex, while the switch port it connects to is set to auto-negotiate. The switch interface counters show rising late collisions, runts and CRC errors. Which of the following is the most likely cause?",
      "options": [
        "A broadcast storm caused by a switching loop",
        "Excessive attenuation on a fiber-optic link",
        "A duplex mismatch between the server and the switch",
        "An incorrect DNS server address on the clients"
      ],
      "answer": "C",
      "explanation": "When one end is hard-coded and the other is set to auto-negotiate, the auto-negotiating end cannot negotiate with the fixed end and falls back to half duplex at the detected speed, while the fixed end stays at full duplex. The resulting mismatch produces late collisions, runts and CRC errors, which cause retransmissions and poor throughput. A loop would cause a broadcast storm, and DNS problems affect name resolution rather than frame errors.",
      "topic": "Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common performance issues",
      "difficulty": "hard",
      "source": "CompTIA Network+ N10-009 objectives 5.2 and 5.4: duplexing issues, performance issues"
    },
    {
      "stem": "A technician suspects that a workstation is resolving an internal hostname to the wrong IP address and wants to query a specific DNS server directly from the command line to see its answer. Which of the following tools can be used for this? Choose TWO.",
      "options": [
        "tracert",
        "netstat",
        "nslookup",
        "dig"
      ],
      "answer": "CD",
      "explanation": "Both nslookup and dig can send a query to a DNS server that you specify and display the records returned, which lets the technician compare answers from different servers. The tracert command shows the path packets take to a destination, and netstat lists local connections and listening ports; neither queries DNS records.",
      "topic": "Network Troubleshooting",
      "subtopic": "Given a scenario, use the appropriate tool or protocol to solve networking issues",
      "difficulty": "easy",
      "source": "CompTIA Network+ N10-009 objective 5.5: software tools (nslookup, dig)"
    }
  ]
}
```
