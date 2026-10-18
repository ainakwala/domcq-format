```json
{
  "format": "domcq/1",
  "exam": "comptia-netplus",
  "set": "CompTIA Network+ (N10-009) practice – Mixed Domains Set 1",
  "questions": [
    {
      "stem": "A technician is documenting the protocols used on a company network. At which of the following OSI layers do TCP and UDP operate?",
      "options": [
        "Layer 3, the Network layer",
        "Layer 4, the Transport layer",
        "Layer 5, the Session layer",
        "Layer 2, the Data Link layer"
      ],
      "answer": "B",
      "explanation": "TCP and UDP are transport-layer (Layer 4) protocols. They provide communication between applications on different hosts and use port numbers to identify the sending and receiving application, with TCP adding reliable delivery and UDP providing connectionless delivery. IP, by contrast, operates at Layer 3.",
      "topic": "Networking Concepts",
      "subtopic": "Explain concepts related to the Open Systems Interconnection (OSI) reference model",
      "difficulty": "easy",
      "source": "N10-009 objective 1.1 (OSI reference model layers and their protocols)"
    },
    {
      "stem": "A network administrator needs to allow encrypted command-line management and encrypted web-based management of a branch router from the corporate network, and does not want to open any port that carries cleartext management traffic. Which of the following ports should the administrator allow? Choose TWO.",
      "options": [
        "TCP 23",
        "TCP 22",
        "TCP 80",
        "TCP 443"
      ],
      "answer": "BD",
      "explanation": "SSH uses TCP port 22 and provides an encrypted command-line session, and HTTPS uses TCP port 443 and provides encrypted web-based management. Telnet (TCP 23) and HTTP (TCP 80) send credentials and commands in cleartext, so they should remain blocked.",
      "topic": "Networking Concepts",
      "subtopic": "Explain common networking ports, protocols, services, and traffic types",
      "difficulty": "medium",
      "source": "N10-009 objective 1.4 (common ports and protocols: SSH, Telnet, HTTP, HTTPS)"
    },
    {
      "stem": "A workstation is configured with the IP address 172.16.43.77 and the subnet mask 255.255.240.0. Which of the following is the broadcast address of the subnet this workstation belongs to?",
      "options": [
        "172.16.47.255",
        "172.16.43.255",
        "172.16.63.255",
        "172.16.39.255"
      ],
      "answer": "A",
      "explanation": "The mask 255.255.240.0 is /20, so the third octet increments in blocks of 16 (256 minus 240). The address 172.16.43.77 falls in the block from 172.16.32.0 to 172.16.47.255, so the network address is 172.16.32.0 and the broadcast address, with all host bits set to 1, is 172.16.47.255.",
      "topic": "Networking Concepts",
      "subtopic": "Given a scenario, use appropriate IPv4 network addressing",
      "difficulty": "hard",
      "source": "N10-009 objective 1.7 (IPv4 subnetting, CIDR notation, broadcast addresses)"
    },
    {
      "stem": "A company wants to move a legacy application off its own servers. It wants to choose the operating system and install the application itself on virtual machines, while the cloud provider manages the physical hosts, storage and virtualization layer. Which of the following cloud service models does this describe?",
      "options": [
        "Software as a Service (SaaS)",
        "Platform as a Service (PaaS)",
        "Infrastructure as a Service (IaaS)",
        "Desktop as a Service (DaaS)"
      ],
      "answer": "C",
      "explanation": "With IaaS, the provider supplies virtualized compute, storage and networking, and the customer is responsible for the guest operating system, middleware and applications. With PaaS the provider would also manage the operating system and runtime, SaaS delivers a finished application, and DaaS delivers virtual desktops.",
      "topic": "Networking Concepts",
      "subtopic": "Summarize cloud concepts and connectivity options",
      "difficulty": "easy",
      "source": "N10-009 objective 1.3 (cloud service models: IaaS, PaaS, SaaS, DaaS)"
    },
    {
      "stem": "A router's routing table contains the following routes: 10.1.0.0/16 via a static route (administrative distance 1); 10.1.1.0/24 via OSPF (administrative distance 110); 10.1.1.128/25 via RIP (administrative distance 120); and 0.0.0.0/0 via a static default route (administrative distance 1). The router receives a packet destined for 10.1.1.200. Which of the following routes will the router use to forward the packet?",
      "options": [
        "The 10.1.0.0/16 static route, because it has the lowest administrative distance",
        "The 10.1.1.0/24 OSPF route, because OSPF is preferred over RIP",
        "The 0.0.0.0/0 default route, because static routes are always preferred",
        "The 10.1.1.128/25 RIP route, because it has the longest prefix match"
      ],
      "answer": "D",
      "explanation": "A router first selects the route with the longest matching prefix, and uses administrative distance only to choose between routes to the same prefix learned from different sources. The destination 10.1.1.200 matches the /16, /24, /25 and default routes, and the /25 route is the most specific, so the RIP route is used even though its administrative distance is the highest.",
      "topic": "Network Implementation",
      "subtopic": "Explain characteristics of routing technologies",
      "difficulty": "hard",
      "source": "N10-009 objective 2.1 (route selection: prefix length, administrative distance, metric)"
    },
    {
      "stem": "A network administrator needs to carry traffic for VLANs 10, 20 and 30 between two switches over a single physical link. Which of the following should the administrator configure on the link?",
      "options": [
        "An 802.1Q trunk on both switch ports",
        "An access port in VLAN 10 on both switch ports",
        "A port mirroring session on both switch ports",
        "PortFast on both switch ports"
      ],
      "answer": "A",
      "explanation": "A trunk uses 802.1Q tagging to carry frames from several VLANs over one physical connection, with each frame identified by its VLAN ID. An access port carries only one VLAN, port mirroring copies traffic to a monitoring port, and PortFast only skips the spanning tree delay on edge ports.",
      "topic": "Network Implementation",
      "subtopic": "Given a scenario, configure switching technologies and features",
      "difficulty": "easy",
      "source": "N10-009 objective 2.2 (VLANs and 802.1Q trunking)"
    },
    {
      "stem": "A technician is installing three access points in an office in North America. The access points are close enough to hear one another, and all three must use the 2.4 GHz band with 20 MHz channels. Which of the following sets of channels should the technician assign to avoid overlap between the access points?",
      "options": [
        "Channels 1, 3 and 5",
        "Channels 2, 4 and 8",
        "Channels 1, 6 and 11",
        "Channels 3, 4 and 5"
      ],
      "answer": "C",
      "explanation": "In the 2.4 GHz band, channel numbers are only 5 MHz apart while a 20 MHz channel is much wider, so channels must be at least five numbers apart to avoid overlapping. Channels 1, 6 and 11 are the standard non-overlapping set, which keeps neighbouring access points from interfering with one another.",
      "topic": "Network Implementation",
      "subtopic": "Given a scenario, select and configure wireless devices and technologies",
      "difficulty": "medium",
      "source": "N10-009 objective 2.3 (wireless channels, channel width, non-overlapping channels)"
    },
    {
      "stem": "A technician is racking new servers in a data center that uses a hot aisle/cold aisle layout. Which of the following describes how the servers should be oriented?",
      "options": [
        "Air intakes face the hot aisle and exhausts face the cold aisle",
        "Air intakes face the cold aisle and exhausts face the hot aisle",
        "Air intakes face the exhausts of the adjacent row of racks",
        "Air intakes face the side walls and exhausts face the ceiling"
      ],
      "answer": "B",
      "explanation": "In a hot aisle/cold aisle layout, racks sit in alternating rows so that the fronts of the servers, which draw in air, face a cold aisle supplied with cooled air, and the rears, which blow out warm air, face a hot aisle. This keeps hot exhaust from being pulled back into the intakes and makes cooling more efficient.",
      "topic": "Network Implementation",
      "subtopic": "Explain important factors of physical installations",
      "difficulty": "easy",
      "source": "N10-009 objective 2.4 (installation implications: port-side intake/exhaust, environmental factors)"
    },
    {
      "stem": "A company's disaster recovery plan states that, after an outage, no more than four hours of data may be lost. Which of the following DR metrics does this requirement define?",
      "options": [
        "Recovery time objective (RTO)",
        "Mean time to repair (MTTR)",
        "Mean time between failures (MTBF)",
        "Recovery point objective (RPO)"
      ],
      "answer": "D",
      "explanation": "The RPO is the maximum acceptable amount of data loss measured in time, and it determines how often backups or replication must occur. The RTO, by contrast, is how long a service may be down before it must be restored.",
      "topic": "Network Operations",
      "subtopic": "Explain disaster recovery (DR) concepts",
      "difficulty": "easy",
      "source": "N10-009 objective 3.3 (DR metrics: RPO, RTO, MTTR, MTBF)"
    },
    {
      "stem": "A network administrator needs to identify which hosts and applications are consuming the most bandwidth on an internet-facing router. The administrator wants per-flow records that include source and destination addresses, ports and byte counts, exported by the router rather than full packet captures. Which of the following should the administrator use?",
      "options": [
        "NetFlow exports from the router",
        "SNMP traps sent by the router",
        "Syslog messages sent by the router",
        "SNMP polling of interface error counters"
      ],
      "answer": "A",
      "explanation": "NetFlow (and the similar IPFIX) has the router summarize traffic into flow records that list source and destination addresses, ports, protocol and byte counts, and export them to a collector. This shows who is using the bandwidth without the storage cost of full packet captures. SNMP traps, syslog and error counters do not provide per-flow detail.",
      "topic": "Network Operations",
      "subtopic": "Given a scenario, use network monitoring technologies",
      "difficulty": "medium",
      "source": "N10-009 objective 3.2 (network monitoring: flow data, SNMP, syslog)"
    },
    {
      "stem": "A network administrator needs the hostname www.example.com to resolve to the same IP address as web01.example.com, so that only one record needs to be updated if the server's address changes. Which of the following DNS record types should the administrator create for www?",
      "options": [
        "A record",
        "MX record",
        "CNAME record",
        "PTR record"
      ],
      "answer": "C",
      "explanation": "A CNAME record maps an alias name to another canonical hostname, so www follows whatever address web01 resolves to. An A record would hold its own IP address that would have to be updated separately, an MX record identifies mail servers, and a PTR record maps an IP address back to a name.",
      "topic": "Network Operations",
      "subtopic": "Given a scenario, implement IPv4 and IPv6 network services",
      "difficulty": "medium",
      "source": "N10-009 objective 3.4 (DNS record types: A, AAAA, CNAME, MX, PTR, TXT)"
    },
    {
      "stem": "A network administrator needs to be able to manage the switches and routers at a remote branch office even when the branch's production WAN link is down. Which of the following methods would meet this requirement? Choose TWO.",
      "options": [
        "A console server with a serial connection to each device and a cellular uplink",
        "SSH sessions to each device's management IP address across the WAN link",
        "A dedicated management port on each device connected to a separate management network with its own circuit",
        "A web-based GUI on each device reached through a site-to-site VPN over the WAN link"
      ],
      "answer": "AC",
      "explanation": "Out-of-band management uses a path that is independent of the production network, such as a console server reached over a cellular link or a dedicated management network on its own circuit. SSH and HTTPS over the production WAN or VPN are in-band methods, so they stop working when that link fails.",
      "topic": "Network Operations",
      "subtopic": "Compare and contrast network access and management methods",
      "difficulty": "medium",
      "source": "N10-009 objective 3.5 (in-band vs out-of-band management, console server)"
    },
    {
      "stem": "A network administrator is selecting a protocol for centralized AAA of administrator logins to routers and switches. The protocol must keep authentication, authorization and accounting as separate functions and must encrypt the entire body of each packet, not only the password. Which of the following protocols should the administrator choose?",
      "options": [
        "RADIUS",
        "TACACS+",
        "LDAP",
        "Kerberos"
      ],
      "answer": "B",
      "explanation": "TACACS+ runs over TCP, separates authentication, authorization and accounting, and encrypts the full packet body, which is why it is commonly used for device administration. RADIUS combines authentication and authorization and encrypts only the password in the Access-Request packet. LDAP is a directory access protocol and Kerberos is a ticket-based authentication protocol, so neither provides the separated AAA functions described.",
      "topic": "Network Security",
      "subtopic": "Explain the importance of basic network security concepts",
      "difficulty": "medium",
      "source": "N10-009 objective 4.1 (identity and access management: RADIUS, TACACS+, LDAP)"
    },
    {
      "stem": "A security analyst finds that a user on an access port in VLAN 1 sent frames containing two 802.1Q tags and reached hosts in VLAN 20 on a second switch, even though the user is not permitted in that VLAN. The trunk between the two switches uses VLAN 1 as its native VLAN. Which of the following is the best way to mitigate this attack?",
      "options": [
        "Enable BPDU guard on all access ports",
        "Reduce the MAC address aging time on both switches",
        "Shorten the DHCP lease time in VLAN 20",
        "Change the native VLAN on the trunk to an unused VLAN"
      ],
      "answer": "D",
      "explanation": "This is a VLAN hopping attack that uses double tagging. The first switch removes the outer tag because it matches the trunk's native VLAN and then forwards the frame, still carrying the inner VLAN 20 tag, across the trunk. Moving the native VLAN to an unused VLAN that has no access ports (and keeping user ports out of VLAN 1) removes the condition the attack depends on.",
      "topic": "Network Security",
      "subtopic": "Summarize various types of attacks and their impact to the network",
      "difficulty": "hard",
      "source": "N10-009 objective 4.2 (VLAN hopping) and objective 4.3 (device hardening: unused ports and VLANs)"
    },
    {
      "stem": "A company deploys 802.1X on its wired access switches, with a RADIUS server performing the authentication. When a laptop connects to a switch port, which of the following devices acts as the authenticator?",
      "options": [
        "The access switch the laptop connects to",
        "The laptop requesting network access",
        "The RADIUS server verifying the credentials",
        "The directory service holding the accounts"
      ],
      "answer": "A",
      "explanation": "In 802.1X the supplicant is the client requesting access, the authenticator is the network device (here, the switch) that keeps the port blocked until authentication succeeds, and the authentication server (RADIUS) decides whether to grant access. The switch relays EAP messages between the supplicant and the server and opens the port when the server approves.",
      "topic": "Network Security",
      "subtopic": "Given a scenario, apply network security features, defense techniques, and solutions",
      "difficulty": "medium",
      "source": "N10-009 objective 4.3 (network access control: 802.1X, RADIUS)"
    },
    {
      "stem": "A network administrator has tested a theory and confirmed that a failed uplink transceiver is the cause of an outage. Which of the following is the next step in the troubleshooting methodology?",
      "options": [
        "Implement the solution or escalate as necessary",
        "Verify full system functionality",
        "Establish a plan of action to resolve the problem and identify potential effects",
        "Document findings, actions, outcomes, and lessons learned"
      ],
      "answer": "C",
      "explanation": "The CompTIA methodology runs in this order: identify the problem, establish a theory of probable cause, test the theory to determine the cause, establish a plan of action and identify potential effects, implement the solution or escalate, verify full system functionality, and document. Once the cause is confirmed, the plan of action, including its possible side effects, is made before any change is implemented.",
      "topic": "Network Troubleshooting",
      "subtopic": "Explain the troubleshooting methodology",
      "difficulty": "easy",
      "source": "N10-009 objective 5.1 (network troubleshooting methodology, steps in order)"
    },
    {
      "stem": "A technician installs a new workstation at the end of a 140 m Cat 6 twisted-pair run to the switch. A wire map test shows correct pin-outs on both ends. The link negotiates at 100 Mbps, but it repeatedly drops and the switch interface reports many CRC errors. Which of the following is the most likely reason?",
      "options": [
        "The transmit and receive pairs are reversed",
        "The cable length exceeds the limit for twisted-pair Ethernet",
        "The switch port is assigned to the wrong VLAN",
        "The workstation has a duplicate IP address"
      ],
      "answer": "B",
      "explanation": "Twisted-pair Ethernet has a maximum channel length of 100 meters (328 feet). Beyond that, signal attenuation degrades the signal and produces CRC errors, link drops and packet loss even when the pin-outs are correct. The run must be shortened or extended with a switch or a fiber media converter.",
      "topic": "Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common cabling and physical interface issues",
      "difficulty": "medium",
      "source": "N10-009 objective 5.2 (cabling issues: attenuation); objective 1.5 (copper cable types and distance limits)"
    },
    {
      "stem": "A user reports that a laptop cannot reach the file server or the internet. The technician finds that the laptop's IP address is 169.254.62.18 and that other laptops on the same switch work normally. Which of the following is the most likely reason?",
      "options": [
        "The laptop's DNS server address is incorrectly configured",
        "The laptop's default gateway has the wrong IP address",
        "The file server's firewall is blocking the laptop",
        "The laptop was unable to obtain a lease from a DHCP server"
      ],
      "answer": "D",
      "explanation": "An address in 169.254.0.0/16 is an APIPA (link-local) address that an operating system assigns to itself when no DHCP server answers its request. The laptop therefore never received a valid address, mask or gateway, which explains the loss of connectivity. The technician should check the laptop's cable, the port's VLAN and whether its DHCP requests reach the server.",
      "topic": "Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common issues with network services",
      "difficulty": "medium",
      "source": "N10-009 objective 1.7 (APIPA) and objective 5.3 (troubleshooting DHCP and IP addressing issues)"
    },
    {
      "stem": "Users report slow file transfers to a server. The switch port connected to the server is set to auto-negotiate, and the server's NIC is hard-coded to 100 Mbps full duplex. The switch interface shows late collisions and runt frames. Which of the following is the most likely cause?",
      "options": [
        "Duplex mismatch between the switch port and the NIC",
        "Native VLAN mismatch between the two ends of the link",
        "MTU mismatch between the switch and the server",
        "Excessive broadcast traffic from a spanning tree loop"
      ],
      "answer": "A",
      "explanation": "When one end is hard-coded and the other auto-negotiates, the auto-negotiating end cannot learn the duplex setting and usually falls back to half duplex while the hard-coded end stays at full duplex. The half-duplex end then records late collisions and runts because the full-duplex end transmits whenever it likes, and throughput drops from the resulting errors and retransmissions. Configuring both ends the same (both auto, or both fixed) fixes it.",
      "topic": "Network Troubleshooting",
      "subtopic": "Given a scenario, troubleshoot common cabling and physical interface issues",
      "difficulty": "hard",
      "source": "N10-009 objective 5.2 (duplexing issues; interface errors: CRC, runts, giants, collisions)"
    },
    {
      "stem": "A network administrator needs to confirm that a web server is listening on TCP port 8443 and to see which remote hosts currently have established connections to that port. Which of the following command-line tools should the administrator run on the server?",
      "options": [
        "arp",
        "nslookup",
        "netstat",
        "tracert"
      ],
      "answer": "C",
      "explanation": "The netstat command (or ss on modern Linux systems) lists listening ports and active connections together with local and remote addresses and connection states, which is how an administrator confirms that a service is listening and who is connected to it. The nslookup tool queries DNS, arp shows the IP-to-MAC address cache, and tracert shows the path to a destination.",
      "topic": "Network Troubleshooting",
      "subtopic": "Given a scenario, use the appropriate tool or protocol to solve networking issues",
      "difficulty": "medium",
      "source": "N10-009 objective 5.5 (command-line tools: netstat, nslookup, arp, tracert/traceroute)"
    }
  ]
}
```
