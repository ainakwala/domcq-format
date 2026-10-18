```json
{
  "format": "domcq/1",
  "exam": "comptia-netplus",
  "set": "CompTIA Network+ (N10-009) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "Which of the following OSI layers is responsible for logical addressing and for routing packets between different networks?",
      "options": [
        "Layer 2 (Data link)",
        "Layer 3 (Network)",
        "Layer 4 (Transport)",
        "Layer 5 (Session)"
      ],
      "answer": "B",
      "explanation": "The Network layer (Layer 3) provides logical addressing, such as IPv4 and IPv6 addresses, and determines the path packets take between networks. Routers operate at this layer. Layer 2 delivers frames locally using MAC addresses, and Layer 4 provides end-to-end delivery using ports.",
      "rationales": {
        "A": "Layer 2 delivers frames within one local network using MAC addresses; it does not route between networks.",
        "B": "Layer 3 uses logical addresses such as IP addresses, and routers use them to forward packets between networks.",
        "C": "Layer 4 provides end-to-end delivery services such as ports, segmentation, and reliability, not routing.",
        "D": "Layer 5 sets up, manages, and tears down sessions between applications; it does not route packets."
      },
      "topic": "Networking Concepts",
      "subtopic": "Explain concepts related to the Open Systems Interconnection (OSI) reference model",
      "difficulty": "easy",
      "source": "N10-009 exam objectives 1.1: OSI model layers and their functions"
    },
    {
      "stem": "A firewall administrator is creating rules so that mail clients can retrieve email over connections that are encrypted with TLS from the very start of the session. Which of the following TCP ports should be allowed? Choose TWO.",
      "options": [
        "TCP 110",
        "TCP 143",
        "TCP 993",
        "TCP 995"
      ],
      "answer": "CD",
      "explanation": "IMAP over TLS (IMAPS) uses TCP 993 and POP3 over TLS (POP3S) uses TCP 995; both establish TLS before any mail protocol data is exchanged. The standard ports 110 (POP3) and 143 (IMAP) begin in cleartext and can only be upgraded afterward, for example with STARTTLS. Knowing the secure and insecure port pairs is a common exam topic.",
      "rationales": {
        "A": "TCP 110 is standard POP3, which sends credentials and mail in cleartext unless it is upgraded later.",
        "B": "TCP 143 is standard IMAP, which starts unencrypted and relies on an optional STARTTLS upgrade.",
        "C": "TCP 993 is IMAP over TLS (IMAPS), which is encrypted from the first packet.",
        "D": "TCP 995 is POP3 over TLS (POP3S), which is encrypted from the first packet."
      },
      "topic": "Networking Concepts",
      "subtopic": "Explain common networking ports, protocols, services, and traffic types",
      "difficulty": "medium",
      "source": "N10-009 exam objectives 1.4: common ports and protocols (email protocols)"
    },
    {
      "stem": "A company needs a private, dedicated connection between its on-premises data center and a public cloud provider that does not traverse the public internet. Which of the following should the company implement?",
      "options": [
        "Direct Connect",
        "Site-to-site VPN",
        "NAT gateway",
        "Internet gateway"
      ],
      "answer": "A",
      "explanation": "A direct connect service provides a dedicated private circuit from the customer's site or a colocation facility into the cloud provider's network, giving more predictable latency and bandwidth than the internet. A VPN, even when encrypted, still crosses the public internet. NAT and internet gateways control how cloud workloads reach the internet.",
      "rationales": {
        "A": "Direct Connect provides a private, dedicated circuit into the cloud provider that bypasses the public internet.",
        "B": "A site-to-site VPN is encrypted but still crosses the public internet, so it is not a dedicated private link.",
        "C": "A NAT gateway lets private cloud instances start outbound internet connections; it is not a data center link.",
        "D": "An internet gateway connects a cloud network to the public internet, which is the opposite of a private link."
      },
      "topic": "Networking Concepts",
      "subtopic": "Summarize cloud concepts and connectivity options",
      "difficulty": "medium",
      "source": "N10-009 exam objectives 1.3: cloud connectivity options (VPN, Direct Connect) and cloud gateways"
    },
    {
      "stem": "A technician is configuring a host with the address 172.16.37.130/26. Which of the following is the broadcast address of the subnet that contains this host?",
      "options": [
        "172.16.37.127",
        "172.16.37.190",
        "172.16.37.191",
        "172.16.37.255"
      ],
      "answer": "C",
      "explanation": "A /26 mask (255.255.255.192) creates subnets in blocks of 64 addresses in the last octet. The address ending in .130 falls in the 128 to 191 block, so the network address is 172.16.37.128 and the broadcast address is the last address in that block, 172.16.37.191.",
      "rationales": {
        "A": "172.16.37.127 is the broadcast address of the previous block (64 to 127), not the block that contains .130.",
        "B": "172.16.37.190 is the last usable host address in the subnet, not its broadcast address.",
        "C": "172.16.37.191 is the last address in the 128 to 191 block, which makes it the subnet's broadcast address.",
        "D": "172.16.37.255 would be the broadcast address of a /24 network; a /26 subnet is smaller."
      },
      "topic": "Networking Concepts",
      "subtopic": "Given a scenario, use appropriate IPv4 network addressing",
      "difficulty": "hard",
      "source": "N10-009 exam objectives 1.7: IPv4 subnetting and CIDR notation"
    },
    {
      "stem": "A router's routing table contains these static routes: 10.0.0.0/8 via R1, 10.1.0.0/16 via R2, 10.1.1.0/24 via R3, and 0.0.0.0/0 via R4. A packet arrives that is destined for 10.1.1.50. Which of the following next hops will the router use?",
      "options": [
        "R1 (10.0.0.0/8)",
        "R2 (10.1.0.0/16)",
        "R4 (0.0.0.0/0)",
        "R3 (10.1.1.0/24)"
      ],
      "answer": "D",
      "explanation": "A router forwards each packet using the matching route with the longest prefix length, which is the most specific match. The /8, /16, and /24 routes all match 10.1.1.50, but the /24 is the most specific, so the router chooses R3. The default route is used only when nothing more specific matches.",
      "rationales": {
        "A": "The /8 route matches the destination but is the least specific matching route, so longer prefixes win.",
        "B": "The /16 route matches but has a shorter prefix than the /24 route, so it is not selected.",
        "C": "The default route matches every destination but is used only when no more specific route exists.",
        "D": "The /24 route has the longest matching prefix, so the router forwards the packet to R3."
      },
      "topic": "Network Implementation",
      "subtopic": "Explain characteristics of routing technologies",
      "difficulty": "medium",
      "source": "N10-009 exam objectives 2.1: route selection (prefix length), default route, routing table"
    },
    {
      "stem": "A network administrator is connecting two switches with a single link that must carry traffic for VLANs 10, 20, and 30. Which of the following should the administrator configure on both ports?",
      "options": [
        "Access mode in VLAN 10",
        "802.1Q trunk mode",
        "Port mirroring mode",
        "Port security mode"
      ],
      "answer": "B",
      "explanation": "An 802.1Q trunk adds a VLAN tag to frames so that one physical link can carry traffic for many VLANs between switches. An access port carries only a single VLAN, untagged. Trunking is the standard way to extend VLANs across switches.",
      "rationales": {
        "A": "An access port carries untagged traffic for a single VLAN, so VLANs 20 and 30 would not cross the link.",
        "B": "An 802.1Q trunk tags frames with a VLAN ID so one link can carry several VLANs between switches.",
        "C": "Port mirroring copies traffic to a monitoring port for analysis and does not carry VLANs between switches.",
        "D": "Port security limits which MAC addresses may use a port; it does not allow multiple VLANs on a link."
      },
      "topic": "Network Implementation",
      "subtopic": "Given a scenario, configure switching technologies and features",
      "difficulty": "easy",
      "source": "N10-009 exam objectives 2.2: VLANs and trunking (802.1Q)"
    },
    {
      "stem": "A campus library has several access points that all broadcast the same SSID and connect to the same wired network, so that laptops can roam between them without reconnecting. Which of the following describes this wireless configuration?",
      "options": [
        "Extended service set",
        "Basic service set",
        "Ad hoc network",
        "Point-to-point bridge"
      ],
      "answer": "A",
      "explanation": "An extended service set (ESS) combines multiple access points that share the same SSID and are joined by a wired distribution system, which lets clients roam between them. A basic service set is a single access point and its associated clients. An ad hoc network has no access point at all.",
      "rationales": {
        "A": "An ESS links multiple access points that share one SSID through a common wired network, allowing roaming.",
        "B": "A BSS is a single access point and its clients; it does not describe multiple access points enabling roaming.",
        "C": "An ad hoc network connects wireless clients directly to each other without any access point.",
        "D": "A point-to-point bridge links two networks with a dedicated wireless link and does not serve roaming clients."
      },
      "topic": "Network Implementation",
      "subtopic": "Given a scenario, select and configure wireless devices and technologies",
      "difficulty": "medium",
      "source": "N10-009 exam objectives 2.3: SSID, BSSID and ESSID; infrastructure and ad hoc wireless networks"
    },
    {
      "stem": "A technician is installing a pan-tilt-zoom camera that draws 40 W at the device. No power injectors are available, so the camera must be powered directly from the access switch. Which of the following is the minimum PoE standard that the switch port must support?",
      "options": [
        "IEEE 802.3af",
        "IEEE 802.3at",
        "IEEE 802.3bt",
        "IEEE 802.3ab"
      ],
      "answer": "C",
      "explanation": "Each PoE generation raises the available power: 802.3af provides up to 15.4 W per port, 802.3at (PoE+) up to 30 W, and 802.3bt (PoE++) up to 60 W (Type 3) or 90 W (Type 4). A 40 W device exceeds what af and at can deliver, so the port must support 802.3bt. The switch's total PoE budget must also be large enough for the load.",
      "rationales": {
        "A": "802.3af (PoE) delivers about 15.4 W per port at the switch, far below the 40 W the camera needs.",
        "B": "802.3at (PoE+) delivers up to 30 W per port at the switch, which is still less than 40 W.",
        "C": "802.3bt (PoE++) delivers up to 60 W (Type 3) or 90 W (Type 4) per port, so it can power the camera.",
        "D": "802.3ab defines 1000BASE-T Gigabit Ethernet over copper and does not specify power delivery."
      },
      "topic": "Network Implementation",
      "subtopic": "Given a scenario, configure switching technologies and features",
      "difficulty": "hard",
      "source": "N10-009 exam objectives 2.2: Power over Ethernet (PoE/PoE+); IEEE 802.3af, 802.3at and 802.3bt power levels"
    },
    {
      "stem": "After a disaster, management states that the company can tolerate losing no more than four hours of transaction data. Which of the following metrics does this statement define?",
      "options": [
        "Mean time to repair",
        "Mean time between failures",
        "Recovery time objective",
        "Recovery point objective"
      ],
      "answer": "D",
      "explanation": "The recovery point objective (RPO) is the maximum amount of data loss, expressed as time, that an organization will accept, and it drives how often backups or replication must occur. The recovery time objective (RTO) is about how quickly service must be restored. MTTR and MTBF describe repair time and reliability of components.",
      "rationales": {
        "A": "MTTR is the average time needed to repair a failed component, not how much data can be lost.",
        "B": "MTBF is the average time between failures of a component, so it measures reliability rather than data loss.",
        "C": "RTO is how long a service may be down before it must be restored, not how much data loss is allowed.",
        "D": "RPO is the maximum acceptable data loss measured in time, which matches the four-hour tolerance."
      },
      "topic": "Network Operations",
      "subtopic": "Explain disaster recovery (DR) concepts",
      "difficulty": "easy",
      "source": "N10-009 exam objectives 3.3: disaster recovery metrics (RPO, RTO, MTTR, MTBF)"
    },
    {
      "stem": "A network administrator wants to identify which hosts and applications are consuming the most bandwidth on a WAN link by analyzing records of conversations between IP addresses and ports. Which of the following technologies can provide this data? Choose TWO.",
      "options": [
        "NetFlow",
        "SNMP traps",
        "IPFIX",
        "Syslog"
      ],
      "answer": "AC",
      "explanation": "NetFlow and IPFIX export flow records that summarize conversations, including source and destination addresses, ports, protocols, and byte counts, so an analyzer can show top talkers and applications on a link. SNMP traps and syslog report device events and states rather than per-conversation traffic volumes.",
      "rationales": {
        "A": "NetFlow exports flow records of IP conversations, including addresses, ports, protocols, and byte counts.",
        "B": "SNMP traps are event notifications sent by devices; they do not describe per-conversation traffic volumes.",
        "C": "IPFIX is the IETF standard flow export format, based on NetFlow, and carries the same kind of conversation data.",
        "D": "Syslog carries log messages about device events and does not report per-conversation bandwidth usage."
      },
      "topic": "Network Operations",
      "subtopic": "Given a scenario, use network monitoring technologies",
      "difficulty": "medium",
      "source": "N10-009 exam objectives 3.2: flow data, SNMP, and logs in network monitoring"
    },
    {
      "stem": "Clients on VLAN 30 are not receiving IP addresses. The DHCP server is on a different subnet, and the router interface for VLAN 30 does not forward broadcast traffic. Which of the following should the administrator configure on that router interface?",
      "options": [
        "A DHCP reservation",
        "A DHCP relay agent",
        "A DHCP exclusion range",
        "A longer lease time"
      ],
      "answer": "B",
      "explanation": "DHCP discovery messages are broadcasts, and routers do not forward broadcasts by default. A DHCP relay agent (IP helper) on the router interface receives the client broadcast, forwards it as a unicast to the remote DHCP server, and returns the reply, so one server can serve many subnets.",
      "rationales": {
        "A": "A reservation ties a fixed address to one MAC address but does not carry client requests to a remote server.",
        "B": "A relay agent converts client broadcasts into unicast messages to the remote DHCP server, so one server can serve many subnets.",
        "C": "An exclusion range keeps addresses out of the scope; it does not help requests reach a server on another subnet.",
        "D": "A longer lease time changes how often clients renew, not whether their first requests reach the server."
      },
      "topic": "Network Operations",
      "subtopic": "Given a scenario, implement IPv4 and IPv6 network services",
      "difficulty": "medium",
      "source": "N10-009 exam objectives 3.4: DHCP (scope, reservations, exclusions, lease time, relay or IP helper)"
    },
    {
      "stem": "A network administrator has received approval to upgrade the firmware on a core switch during a scheduled maintenance window. Which of the following should the administrator prepare to ensure the network can be restored if the upgrade fails?",
      "options": [
        "A tested rollback plan",
        "A lessons-learned report",
        "A post-implementation review",
        "An updated network diagram"
      ],
      "answer": "A",
      "explanation": "Change management calls for a rollback (back-out) plan so the previous known-good state can be restored if the change causes problems, ideally with a backup of the current configuration and firmware. Lessons-learned reports, post-implementation reviews, and updated diagrams are produced after the change to evaluate or document it, so they cannot undo a failed upgrade.",
      "rationales": {
        "A": "A tested rollback plan lets the administrator restore the previous firmware and configuration if the upgrade fails.",
        "B": "Lessons learned are recorded after the change is finished and do not help recover from a failure during it.",
        "C": "A post-implementation review evaluates the outcome after the change, so it cannot undo a failed upgrade.",
        "D": "Diagrams are updated to show the final state after the change; they provide no way to revert the upgrade."
      },
      "topic": "Network Operations",
      "subtopic": "Explain the purpose of organizational processes and procedures",
      "difficulty": "medium",
      "source": "N10-009 exam objectives 3.1: change management and configuration management"
    },
    {
      "stem": "Which of the following best describes the core principle of a zero trust architecture?",
      "options": [
        "Hosts inside the corporate LAN are trusted without further verification",
        "A strong perimeter firewall decides which traffic can be trusted",
        "Every request is authenticated and authorized, regardless of network location",
        "A single successful login grants access to all internal resources"
      ],
      "answer": "C",
      "explanation": "Zero trust assumes that no user, device, or network location is trusted by default. Each access request is authenticated and authorized, often with device posture checks, and access is limited to the specific resource needed. This limits lateral movement if the perimeter is breached.",
      "rationales": {
        "A": "Zero trust removes implicit trust based on network location, so internal hosts are still verified.",
        "B": "Zero trust assumes the perimeter can be breached and does not rely on a firewall alone to establish trust.",
        "C": "Zero trust follows 'never trust, always verify', checking identity and permissions on each request.",
        "D": "Zero trust grants least-privilege, per-resource access and re-evaluates it rather than giving blanket access."
      },
      "topic": "Network Security",
      "subtopic": "Explain the importance of basic network security concepts",
      "difficulty": "medium",
      "source": "N10-009 exam objectives 4.1: zero trust, least privilege access, authentication and authorization"
    },
    {
      "stem": "An attacker places a wireless access point near a company's offices that broadcasts the same SSID as the corporate Wi-Fi network in order to capture employees' credentials. Which of the following wireless attacks is this an example of?",
      "options": [
        "War driving",
        "Bluesnarfing",
        "Deauthentication",
        "Evil twin"
      ],
      "answer": "D",
      "explanation": "An evil twin is a rogue access point configured with the same SSID as a legitimate network so that clients connect to it, which lets the attacker capture credentials or intercept traffic. War driving only discovers networks, bluesnarfing targets Bluetooth devices, and deauthentication simply disconnects clients.",
      "rationales": {
        "A": "War driving is searching for wireless networks while moving around; it does not impersonate a network.",
        "B": "Bluesnarfing steals data from Bluetooth devices and does not involve a spoofed Wi-Fi access point.",
        "C": "Deauthentication forces clients off an access point; it can assist an evil twin but is not the impersonation itself.",
        "D": "An evil twin is a rogue access point that mimics a legitimate SSID so clients connect and expose credentials."
      },
      "topic": "Network Security",
      "subtopic": "Summarize various types of attacks and their impact to the network",
      "difficulty": "easy",
      "source": "N10-009 exam objectives 4.2: wireless attacks (rogue access point, evil twin)"
    },
    {
      "stem": "A network administrator wants to protect the access-layer switches from rogue DHCP servers and from forged ARP replies. Which of the following switch features should the administrator enable? Choose TWO.",
      "options": [
        "Port mirroring",
        "DHCP snooping",
        "Jumbo frames",
        "Dynamic ARP inspection"
      ],
      "answer": "BD",
      "explanation": "DHCP snooping builds a table of legitimate DHCP leases and accepts DHCP server responses only on trusted ports, which blocks rogue DHCP servers. Dynamic ARP inspection uses that binding table to check ARP packets and drop forged replies, which defeats ARP spoofing. Port mirroring and jumbo frames serve monitoring and performance purposes, not protection against these attacks.",
      "rationales": {
        "A": "Port mirroring copies traffic to an analyzer port for monitoring; it does not block rogue servers or forged replies.",
        "B": "DHCP snooping drops DHCP server responses that arrive on untrusted ports, which stops rogue DHCP servers.",
        "C": "Jumbo frames raise the maximum frame size to improve throughput and have no security function.",
        "D": "Dynamic ARP inspection checks ARP packets against the DHCP snooping binding table and drops forged replies."
      },
      "topic": "Network Security",
      "subtopic": "Given a scenario, apply network security features, defense techniques, and solutions",
      "difficulty": "hard",
      "source": "N10-009 exam objectives 4.2 and 4.3: rogue DHCP and ARP spoofing attacks; switch-based defenses"
    },
    {
      "stem": "A network technician has tested a theory of probable cause and confirmed that a failed uplink transceiver is responsible for an outage. According to the troubleshooting methodology, which of the following is the next step the technician should take?",
      "options": [
        "Document findings, actions, and outcomes",
        "Establish a plan of action to resolve the problem",
        "Verify full system functionality",
        "Establish a new theory of probable cause"
      ],
      "answer": "B",
      "explanation": "In the CompTIA troubleshooting methodology, once a theory is confirmed the technician establishes a plan of action to resolve the problem and identifies its potential effects before changing anything. Implementation, verification of full functionality, and documentation follow in that order. A new theory is needed only when testing does not confirm the current one.",
      "rationales": {
        "A": "Documentation is the final step and happens only after the solution is implemented and verified.",
        "B": "After a theory is confirmed, the next step is to plan the fix and identify its potential effects.",
        "C": "Verification comes after the solution is implemented, not directly after the cause is confirmed.",
        "D": "A new theory is needed only if testing fails to confirm the current theory, which is not the case here."
      },
      "topic": "Network Troubleshooting",
      "subtopic": "Explain the troubleshooting methodology",
      "difficulty": "easy",
      "source": "N10-009 exam objectives 5.1: the CompTIA network troubleshooting methodology"
    },
    {
      "stem": "Users report slow file transfers to a server. The switch port connected to the server shows increasing late collisions. The server NIC is manually set to 100 Mbps full duplex, and the switch port is set to autonegotiate. Which of the following is the most likely cause?",
      "options": [
        "A duplex mismatch between the server NIC and the switch port",
        "A broadcast storm caused by a switching loop",
        "Excessive electromagnetic interference near the cable",
        "An MTU mismatch between the server and the switch"
      ],
      "answer": "A",
      "explanation": "A NIC hard-coded to full duplex stops sending autonegotiation signals, so the autonegotiating end detects the speed but falls back to half duplex. The half-duplex side then logs late collisions, and throughput drops under load. Configure both ends the same way, preferably autonegotiation on both.",
      "rationales": {
        "A": "A hard-coded full-duplex NIC stops autonegotiating, so the switch port falls back to half duplex and logs late collisions.",
        "B": "A broadcast storm raises utilization across many ports; it does not cause late collisions on one full-duplex link.",
        "C": "EMI can cause CRC errors, but late collisions point to a half-duplex condition rather than interference.",
        "D": "An MTU mismatch causes fragmentation or dropped large frames, not late collisions on the port."
      },
      "topic": "Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common cabling and physical interface issues",
      "difficulty": "hard",
      "source": "N10-009 exam objectives 5.2: interface issues (duplex and speed mismatches, interface counters)"
    },
    {
      "stem": "Users report that they can reach an internal web server and the default gateway by IP address, but they receive 'server not found' errors when they browse to the server by hostname. Which of the following is the most likely cause?",
      "options": [
        "The default gateway address on the clients is wrong",
        "The subnet mask on the clients is wrong",
        "The DNS server address on the clients is wrong",
        "The switch ports are assigned to the wrong VLAN"
      ],
      "answer": "C",
      "explanation": "Hostname resolution is handled by DNS, so when connectivity by IP address works but names fail, the DNS server configured on the clients is incorrect or unreachable. A wrong gateway, subnet mask, or VLAN would break connectivity itself rather than only name lookups.",
      "rationales": {
        "A": "A wrong default gateway would block remote networks, but the gateway and server are reachable by IP address.",
        "B": "A wrong subnet mask would break reachability by IP address, which is not the symptom described.",
        "C": "Names fail while IP connectivity works, which points to a DNS server configuration or reachability problem.",
        "D": "A wrong VLAN would block all connectivity, not just name-based access."
      },
      "topic": "Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common issues with network services",
      "difficulty": "easy",
      "source": "N10-009 exam objectives 5.3: troubleshooting network services (DNS and IP configuration issues)"
    },
    {
      "stem": "Users with wireless voice handsets report that calls drop when they walk between two areas of a manufacturing floor. A wireless survey shows that each access point's signal falls below -80 dBm before the signal from the next access point becomes usable. Which of the following is the most likely cause?",
      "options": [
        "The access points are using a hidden SSID",
        "The handsets have an incorrect pre-shared key",
        "The access points are using overlapping 2.4 GHz channels",
        "There is insufficient coverage overlap between the access points"
      ],
      "answer": "D",
      "explanation": "Roaming works when the coverage cells of neighboring access points overlap enough for a client to move to the next access point before it loses the current signal. The survey shows a gap where neither signal is usable, so calls drop. Adding or repositioning access points, or adjusting power levels, closes the gap.",
      "rationales": {
        "A": "A hidden SSID only removes the name from beacons; it does not create a coverage gap between access points.",
        "B": "A wrong pre-shared key would stop handsets from connecting at all, not drop calls while moving between areas.",
        "C": "Overlapping channels cause interference and lower throughput, but they do not create a gap in coverage.",
        "D": "Roaming needs adjacent cells to overlap so clients can switch before losing signal; the survey shows a gap."
      },
      "topic": "Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common performance issues",
      "difficulty": "medium",
      "source": "N10-009 exam objectives 5.4: wireless performance issues (insufficient coverage, roaming, signal loss)"
    },
    {
      "stem": "A network technician needs to discover which hosts on a subnet are online and which TCP services they are listening on, without installing software on those hosts. Which of the following tools should the technician use?",
      "options": [
        "netstat",
        "nslookup",
        "nmap",
        "arp"
      ],
      "answer": "C",
      "explanation": "Nmap is a network scanner that probes remote hosts to discover live systems and open ports and services, and it needs no agent on the targets. Netstat reports only on the local host's own connections, nslookup queries DNS, and arp shows the local ARP cache.",
      "rationales": {
        "A": "netstat shows connections and listening ports on the local host only; it cannot scan other hosts.",
        "B": "nslookup queries DNS for name and address records and does not discover open ports.",
        "C": "nmap scans remote hosts to find which are online and which ports and services are open.",
        "D": "arp displays the local cache of IP-to-MAC mappings and does not identify listening services."
      },
      "topic": "Network Troubleshooting",
      "subtopic": "Given a scenario, use the appropriate tool or protocol to solve networking issues",
      "difficulty": "medium",
      "source": "N10-009 exam objectives 5.5: software tools and command-line utilities (nmap, netstat, nslookup, arp)"
    }
  ]
}
```
