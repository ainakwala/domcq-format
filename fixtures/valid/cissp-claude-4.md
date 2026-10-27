```json
{
  "format": "domcq/1",
  "exam": "cissp",
  "set": "CISSP practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A security manager at a medical device contractor discovers that her employer plans to ship infusion pump firmware with a known flaw that could endanger patients, and she is told to stay quiet to protect the delivery schedule. Under the ISC2 Code of Ethics, which canon is listed first and takes precedence in deciding how she should act?",
      "options": [
        "Provide diligent and competent service to principals",
        "Advance and protect the profession",
        "Protect society, the common good, and the infrastructure",
        "Act honorably, honestly, justly, responsibly, and legally"
      ],
      "answer": "C",
      "explanation": "The ISC2 Code of Ethics canons are presented in order, and the first is to protect society, the common good, necessary public trust and confidence, and the infrastructure. When duties conflict, the earlier canon takes priority over the later ones. Her duty to her employer (a principal) is real, but it ranks below her duty not to let the public be endangered.",
      "rationales": {
        "A": "Service to principals is the third canon, so it ranks below protecting society when the two conflict.",
        "B": "Advancing and protecting the profession is the fourth and last canon, the lowest in the order.",
        "C": "Correct: protecting society, the common good and the infrastructure is the first canon and takes precedence.",
        "D": "Acting honorably and legally is the second canon, important but listed after the duty to protect society."
      },
      "topic": "Security and Risk Management",
      "subtopic": "Understand, adhere to, and promote professional ethics",
      "difficulty": "easy",
      "source": "CISSP Domain 1.1 Understand, adhere to, and promote professional ethics – ISC2 Code of Ethics canons"
    },
    {
      "stem": "A file server holding customer records is valued at $200,000. Analysts estimate that a ransomware incident would destroy 25% of its value, and such an incident is expected about once every two years. What is the annualized loss expectancy (ALE) for this threat?",
      "options": [
        "$25,000",
        "$50,000",
        "$100,000",
        "$12,500"
      ],
      "answer": "A",
      "explanation": "Single loss expectancy is asset value times exposure factor: $200,000 x 0.25 = $50,000. An incident once every two years gives an annualized rate of occurrence of 0.5. ALE is SLE times ARO, so $50,000 x 0.5 = $25,000 per year.",
      "rationales": {
        "A": "Correct: SLE of $50,000 multiplied by an ARO of 0.5 gives an ALE of $25,000.",
        "B": "$50,000 is the single loss expectancy, before it is multiplied by the annualized rate of occurrence.",
        "C": "$100,000 multiplies asset value by ARO and leaves out the 25% exposure factor.",
        "D": "$12,500 applies the 25% exposure factor twice instead of multiplying the SLE by the ARO."
      },
      "topic": "Security and Risk Management",
      "subtopic": "Understand and apply risk management concepts",
      "difficulty": "medium",
      "source": "CISSP Domain 1.9 Understand and apply risk management concepts – quantitative risk analysis (SLE, ARO, ALE)"
    },
    {
      "stem": "A business impact analysis finds that the order-processing function can be unavailable for no more than 48 hours before the organization suffers unacceptable harm. How should the recovery time objective (RTO) for this function be set?",
      "options": [
        "Longer than 48 hours, to leave time for restoration testing",
        "Equal to the recovery point objective, regardless of the 48 hours",
        "Based on backup frequency, independently of the 48-hour limit",
        "At or below 48 hours, so recovery completes within the MTD"
      ],
      "answer": "D",
      "explanation": "The 48-hour limit is the maximum tolerable downtime (MTD), the longest the function can be down before harm becomes unacceptable. The RTO is the target time to restore the function, so it must be no greater than the MTD, and in practice it is set shorter to leave room for verification and work recovery. An RTO beyond the MTD would plan for a failure the business cannot survive.",
      "rationales": {
        "A": "An RTO longer than the MTD means recovery is planned to finish after the point of unacceptable harm.",
        "B": "RPO measures tolerable data loss, not downtime, so it is a separate metric and does not set the RTO.",
        "C": "Backup frequency drives the RPO; the RTO must be set by the MTD found in the BIA.",
        "D": "Correct: the 48 hours is the MTD, and the RTO must be equal to or shorter than the MTD."
      },
      "topic": "Security and Risk Management",
      "subtopic": "Identify, analyze, assess, prioritize, and implement Business Continuity (BC) requirements",
      "difficulty": "medium",
      "source": "CISSP Domain 1.7 Business Continuity requirements – business impact analysis, MTD and RTO"
    },
    {
      "stem": "Which role is primarily accountable for assigning a classification level to a set of business data and approving who may access it?",
      "options": [
        "The data custodian",
        "The data owner",
        "The data processor",
        "The data subject"
      ],
      "answer": "B",
      "explanation": "The data owner is the senior business person accountable for a data set, so they decide its classification and approve access to it. Other roles implement or are affected by those decisions but do not make them. Classification is a business decision because it reflects the value and sensitivity of the data to the organization.",
      "rationales": {
        "A": "The custodian carries out the owner's decisions, such as backups and access controls, but does not set classification.",
        "B": "Correct: the data owner is accountable for the data and decides its classification and who may access it.",
        "C": "A data processor handles data on behalf of a controller and does not classify the organization's data.",
        "D": "The data subject is the person the data is about and has no role in classifying it."
      },
      "topic": "Asset Security",
      "subtopic": "Identify and classify information and assets",
      "difficulty": "easy",
      "source": "CISSP Domain 2.1 Identify and classify information and assets; data roles in Domain 2.4"
    },
    {
      "stem": "An organization will reassign solid-state drives that held confidential data to another internal department. It wants protection against recovery of the old data even with laboratory techniques. Which sanitization method is most appropriate?",
      "options": [
        "Degauss the drives using a high-strength degausser",
        "Delete all partitions and reformat the file system",
        "Run the drive's built-in cryptographic erase or sanitize command",
        "Overwrite all user-addressable blocks with a single pass"
      ],
      "answer": "C",
      "explanation": "Protection against laboratory recovery corresponds to the purge level in NIST SP 800-88. Because of wear leveling and over-provisioned space, SSDs keep data in cells the host cannot address, so host-level overwrites may miss it. The firmware sanitize or cryptographic erase commands act on all of the media, which makes them the recommended purge methods for flash.",
      "rationales": {
        "A": "SSDs store data in flash cells, not magnetically, so degaussing does not reliably remove the data.",
        "B": "Reformatting only rewrites file system structures, so nearly all the underlying data is easy to recover.",
        "C": "Correct: firmware sanitize or cryptographic erase reaches all flash cells and is a recognized purge method for SSDs.",
        "D": "A host overwrite can miss over-provisioned and remapped cells, so it reaches the clear level rather than purge."
      },
      "topic": "Asset Security",
      "subtopic": "Manage data lifecycle",
      "difficulty": "medium",
      "source": "CISSP Domain 2.4 Manage data lifecycle – data remanence and destruction; NIST SP 800-88 media sanitization"
    },
    {
      "stem": "In a system that enforces the Bell-LaPadula model, a user with a Secret clearance tries to save a report into a folder labeled Confidential, and the system blocks the write. Which rule is being enforced?",
      "options": [
        "The simple security property (no read up)",
        "The star (*) security property (no write down)",
        "The Biba simple integrity axiom (no read down)",
        "The Biba star integrity axiom (no write up)"
      ],
      "answer": "B",
      "explanation": "Bell-LaPadula is a confidentiality model, and its star (*) security property forbids a subject from writing to an object at a lower classification. This stops someone with Secret access from moving Secret information, deliberately or by mistake, into a Confidential location where less-cleared users could read it. The simple security property governs reads, not writes.",
      "rationales": {
        "A": "The simple security property stops reading objects above one's clearance; this case is a write to a lower level.",
        "B": "Correct: the star property prohibits writing down, which keeps higher-classified data out of lower-level objects.",
        "C": "Biba is an integrity model, and its simple axiom restricts reading lower-integrity data, not writing.",
        "D": "Biba's star axiom stops writing up to higher integrity levels, which is the reverse of this scenario."
      },
      "topic": "Security Architecture and Engineering",
      "subtopic": "Understand the fundamental concepts of security models (e.g., Biba, Star Model, Bell-LaPadula)",
      "difficulty": "medium",
      "source": "CISSP Domain 3.2 Fundamental concepts of security models – Bell-LaPadula properties"
    },
    {
      "stem": "Which mechanism provides non-repudiation for an email message, so that the sender cannot credibly deny having sent it?",
      "options": [
        "Encrypting it with a shared symmetric key",
        "Encrypting it with the recipient's public key",
        "Hashing it with SHA-256 before sending",
        "Signing it with the sender's private key"
      ],
      "answer": "D",
      "explanation": "A digital signature is made with the sender's private key, which only the sender should hold, and anyone can verify it with the matching public key. Because no one else could have produced the signature, it binds the message to the sender and gives non-repudiation along with integrity. Symmetric keys are shared, so they cannot prove which party created a message.",
      "rationales": {
        "A": "Both parties hold a shared symmetric key, so either could have created the message; this gives no non-repudiation.",
        "B": "Encrypting with the recipient's public key gives confidentiality, but anyone can do it, so it proves nothing about the sender.",
        "C": "A bare hash shows integrity but anyone can compute it, so it does not tie the message to a sender.",
        "D": "Correct: only the holder of the private key can create the signature, which binds the message to the sender."
      },
      "topic": "Security Architecture and Engineering",
      "subtopic": "Select and determine cryptographic solutions",
      "difficulty": "easy",
      "source": "CISSP Domain 3.6 Select and determine cryptographic solutions – digital signatures and non-repudiation"
    },
    {
      "stem": "An attacker wants to find any two different messages that produce the same digest from a hash function with a 128-bit output. Assuming the algorithm has no structural weakness, roughly how many hash computations does a generic birthday attack require?",
      "options": [
        "About 2^64",
        "About 2^32",
        "About 2^127",
        "About 2^128"
      ],
      "answer": "A",
      "explanation": "The birthday paradox means a collision between any two outputs is expected after about the square root of the number of possible outputs. For an n-bit hash that is about 2^(n/2) attempts, so a 128-bit hash gives about 2^64. This is why collision resistance is effectively half the digest length, and why longer digests are chosen when collision resistance matters.",
      "rationales": {
        "A": "Correct: a birthday attack finds a collision in about 2^(n/2) attempts, which is 2^64 for a 128-bit digest.",
        "B": "2^32 would be the birthday bound for a 64-bit hash, not a 128-bit one.",
        "C": "About 2^127 is the average effort to find a preimage for one specific digest, not any collision.",
        "D": "2^128 is the full output space, the worst case for a brute-force preimage search, far above the birthday bound."
      },
      "topic": "Security Architecture and Engineering",
      "subtopic": "Understand methods of cryptanalytic attacks",
      "difficulty": "hard",
      "source": "CISSP Domain 3.7 Understand methods of cryptanalytic attacks – birthday attack and hash collisions"
    },
    {
      "stem": "At which layer of the OSI model do routers make forwarding decisions based on logical (IP) addresses?",
      "options": [
        "Data link layer (Layer 2)",
        "Network layer (Layer 3)",
        "Transport layer (Layer 4)",
        "Session layer (Layer 5)"
      ],
      "answer": "B",
      "explanation": "The network layer handles logical addressing and routing between networks, and IP operates there. Routers read the destination IP address and pick the next hop, which is why they are Layer 3 devices. Knowing which layer a device works at helps you place controls, such as router ACLs filtering on IP addresses.",
      "rationales": {
        "A": "The data link layer uses MAC addresses within a local segment; switches, not routers, work mainly here.",
        "B": "Correct: routing on logical IP addresses is the function of the network layer, Layer 3.",
        "C": "The transport layer manages end-to-end delivery with ports and protocols such as TCP and UDP, not routing.",
        "D": "The session layer sets up and manages sessions between applications and plays no part in packet forwarding."
      },
      "topic": "Communication and Network Security",
      "subtopic": "Apply secure design principles in network architectures",
      "difficulty": "easy",
      "source": "CISSP Domain 4.1 Secure design principles in network architectures – OSI and TCP/IP models"
    },
    {
      "stem": "Two branch offices connect their gateways over the internet. The VPN must encrypt all traffic, conceal the internal IP addresses of hosts at each site from observers on the internet, and work through a NAT device in front of one gateway. Which IPsec configuration meets all of these requirements?",
      "options": [
        "AH in transport mode",
        "AH in tunnel mode",
        "ESP in transport mode",
        "ESP in tunnel mode"
      ],
      "answer": "D",
      "explanation": "ESP is the IPsec protocol that encrypts, and tunnel mode encapsulates the whole original packet, inner IP header included, behind a new outer header between the gateways. This hides internal addressing and suits gateway-to-gateway VPNs. ESP also works through NAT with NAT traversal, whereas AH authenticates IP header fields that NAT changes and gives no confidentiality at all.",
      "rationales": {
        "A": "AH gives no encryption, and its integrity check covers IP header fields that NAT rewrites, so it fails here.",
        "B": "Tunnel mode hides inner addresses, but AH still gives no encryption and breaks when NAT alters the outer header.",
        "C": "ESP transport mode encrypts the payload but keeps the original IP header, so internal addresses stay visible.",
        "D": "Correct: ESP encrypts, tunnel mode wraps the original packet to hide inner addresses, and ESP can traverse NAT."
      },
      "topic": "Communication and Network Security",
      "subtopic": "Implement secure communication channels according to design",
      "difficulty": "hard",
      "source": "CISSP Domain 4.3 Implement secure communication channels – IPsec AH, ESP, transport and tunnel modes"
    },
    {
      "stem": "A small office with no RADIUS server wants its Wi-Fi passphrase to resist offline dictionary attacks by someone who captures the connection handshake. Which option best meets this need?",
      "options": [
        "WPA2-Personal with a longer PSK",
        "WPA2-Enterprise with 802.1X",
        "WPA3-Personal using SAE",
        "WEP with a 128-bit key"
      ],
      "answer": "C",
      "explanation": "WPA3-Personal replaces the WPA2 pre-shared key handshake with Simultaneous Authentication of Equals (SAE), a password-authenticated key exchange. A captured SAE exchange gives an attacker nothing to test guesses against offline, so each guess needs a live interaction. It also needs no authentication server, which fits a small office.",
      "rationales": {
        "A": "A longer PSK slows cracking, but the WPA2 four-way handshake still allows offline dictionary attacks once captured.",
        "B": "WPA2-Enterprise needs an 802.1X authentication server such as RADIUS, which the office does not have.",
        "C": "Correct: SAE in WPA3-Personal resists offline dictionary attacks and needs no authentication server.",
        "D": "WEP has fundamental cryptographic flaws and can be broken quickly whatever key length is used."
      },
      "topic": "Communication and Network Security",
      "subtopic": "Apply secure design principles in network architectures",
      "difficulty": "medium",
      "source": "CISSP Domain 4.1 Secure design principles in network architectures – wireless networks, WPA2 and WPA3"
    },
    {
      "stem": "Which combination provides true multi-factor authentication?",
      "options": [
        "A password and a one-time code from a hardware token",
        "A password and a personal identification number",
        "A fingerprint scan and a palm-vein scan",
        "A passphrase and answers to security questions"
      ],
      "answer": "A",
      "explanation": "Multi-factor authentication requires factors from different categories: something you know, something you have, and something you are. A password is something you know, and a code generated by a hardware token proves possession of something you have. Combining two items from the same category, however many, is still single-factor authentication.",
      "rationales": {
        "A": "Correct: a password (knowledge) combined with a hardware token code (possession) uses two different factor types.",
        "B": "A password and a PIN are both something you know, so this is single-factor authentication.",
        "C": "Fingerprint and palm-vein scans are both something you are, so they count as one factor type.",
        "D": "A passphrase and security answers are both knowledge factors, so this is still single-factor authentication."
      },
      "topic": "Identity and Access Management (IAM)",
      "subtopic": "Design identification and authentication strategy (e.g., people, devices, and services)",
      "difficulty": "easy",
      "source": "CISSP Domain 5.2 Design identification and authentication strategy – multi-factor authentication"
    },
    {
      "stem": "In a SAML 2.0 web single sign-on flow, which entity authenticates the user and issues the signed assertion that the other party relies on to grant access?",
      "options": [
        "The service provider",
        "The identity provider",
        "The user's web browser",
        "The certificate authority"
      ],
      "answer": "B",
      "explanation": "In SAML, the identity provider (IdP) authenticates the user and issues a digitally signed assertion about the user's identity and attributes. The service provider trusts the IdP and uses that assertion to make its access decision without handling the user's credentials. This separation is what lets one login work across federated partners.",
      "rationales": {
        "A": "The service provider consumes and validates the assertion; it does not authenticate the user or issue it.",
        "B": "Correct: the identity provider authenticates the user and issues the signed SAML assertion.",
        "C": "The browser only carries messages between the parties and cannot create a trusted assertion.",
        "D": "A certificate authority may issue the signing certificates, but it takes no part in authenticating users in the flow."
      },
      "topic": "Identity and Access Management (IAM)",
      "subtopic": "Federated identity with a third-party service",
      "difficulty": "medium",
      "source": "CISSP Domain 5.3 Federated identity with a third-party service – SAML identity provider and service provider"
    },
    {
      "stem": "Kerberos authentication fails when a client's clock differs from the key distribution center's clock by more than the allowed skew, which is five minutes by default in many implementations. What is the main security purpose of this time requirement?",
      "options": [
        "To limit replay of captured authenticators",
        "To let tickets renew without the password",
        "To derive session keys from the timestamp",
        "To keep audit logs aligned across realms"
      ],
      "answer": "A",
      "explanation": "Each Kerberos request includes an authenticator holding a timestamp encrypted with the session key. Servers reject authenticators whose timestamps fall outside the allowed skew and can cache recent ones, so a captured authenticator cannot be replayed later. Clocks out of sync would make legitimate authenticators look stale, which is why authentication fails.",
      "rationales": {
        "A": "Correct: timestamped authenticators are only accepted within the skew window, which defeats replay of captured ones.",
        "B": "Ticket renewal relies on the renewable flag and lifetime settings, not on keeping clocks in sync.",
        "C": "Session keys are generated randomly by the KDC; they are not derived from the timestamp.",
        "D": "Aligned logs are a useful side effect, but the security reason for the skew limit is preventing replay."
      },
      "topic": "Identity and Access Management (IAM)",
      "subtopic": "Implement authentication systems",
      "difficulty": "hard",
      "source": "CISSP Domain 5.6 Implement authentication systems – Kerberos tickets, authenticators and time synchronization"
    },
    {
      "stem": "An organization hires a testing firm to assess how well its security operations center detects and responds to a real attack. The testers receive only the company's name, and the security staff are not told that a test is taking place. What type of test is this?",
      "options": [
        "A blind test",
        "A targeted test",
        "A double-blind test",
        "A credentialed vulnerability scan"
      ],
      "answer": "C",
      "explanation": "In a double-blind test the testers have little or no prior knowledge of the target, and the defending security staff are not told about the test either. This makes it the most realistic way to measure detection and response, because defenders react as they would to a real attack. A blind test keeps the testers uninformed, but the defenders know it is happening.",
      "rationales": {
        "A": "In a blind test only the testers lack information; the security staff know about the test.",
        "B": "In a targeted test both testers and staff are informed and work together, the opposite of this scenario.",
        "C": "Correct: neither the testers nor the defending staff have prior knowledge, which is a double-blind test.",
        "D": "A credentialed scan uses valid logins to list vulnerabilities and does not test whether attacks are detected."
      },
      "topic": "Security Assessment and Testing",
      "subtopic": "Conduct security control testing",
      "difficulty": "medium",
      "source": "CISSP Domain 6.2 Conduct security control testing – penetration testing approaches (blind, double-blind, targeted)"
    },
    {
      "stem": "A customer needs a detailed auditor's report on a cloud provider's security controls. The report must describe the tests performed and confirm that the controls operated effectively throughout the past 12 months. Which report should the customer request?",
      "options": [
        "SOC 1 Type I",
        "SOC 2 Type I",
        "SOC 3",
        "SOC 2 Type II"
      ],
      "answer": "D",
      "explanation": "SOC 2 reports cover controls related to the Trust Services Criteria, such as security, availability and confidentiality. A Type II report tests whether those controls operated effectively over a period, commonly six to twelve months, and describes the tests and their results. A Type I report only assesses the design of controls at a single point in time.",
      "rationales": {
        "A": "SOC 1 covers controls relevant to financial reporting, and Type I is a single point in time.",
        "B": "SOC 2 Type I assesses control design at one point in time, not operating effectiveness over 12 months.",
        "C": "SOC 3 is a short general-use summary that leaves out the detailed description of tests and results.",
        "D": "Correct: SOC 2 Type II details the tests of security controls and their operating effectiveness over a period."
      },
      "topic": "Security Assessment and Testing",
      "subtopic": "Conduct or facilitate security audits",
      "difficulty": "medium",
      "source": "CISSP Domain 6.5 Conduct or facilitate security audits – third-party audits and SOC reports"
    },
    {
      "stem": "A server gets a full backup every Sunday night and a differential backup every other night. The disk fails on Thursday morning, before that night's backup runs. What is the minimum set of backups needed to restore the most recent data?",
      "options": [
        "Sunday's full backup and every differential since Sunday",
        "Sunday's full backup and Wednesday's differential",
        "Wednesday's differential backup by itself",
        "Sunday's full backup by itself"
      ],
      "answer": "B",
      "explanation": "A differential backup holds every change made since the last full backup, so each night's differential replaces the previous one. Restoring needs only the last full backup and the latest differential. Incremental backups work the other way: each holds only changes since the previous backup, so every one of them would be needed.",
      "rationales": {
        "A": "Each differential already holds all changes since Sunday, so the earlier ones are redundant.",
        "B": "Correct: the full backup plus the most recent differential restores all data up to Wednesday night.",
        "C": "A differential holds only the changes since the full backup, so without the full backup the restore is incomplete.",
        "D": "The full backup alone loses every change made from Monday to Wednesday."
      },
      "topic": "Security Operations",
      "subtopic": "Implement recovery strategies",
      "difficulty": "medium",
      "source": "CISSP Domain 7.10 Implement recovery strategies – backup storage strategies (full, incremental, differential)"
    },
    {
      "stem": "An investigator responding to a compromised server that is still running follows the order of volatility described in RFC 3227. Which of the following should be collected first?",
      "options": [
        "The ARP cache and routing table",
        "Temporary file system contents",
        "A forensic image of the local disk",
        "Data held on the remote log server"
      ],
      "answer": "A",
      "explanation": "RFC 3227 tells investigators to collect evidence from most volatile to least volatile, because volatile data disappears quickly or changes when the system keeps running. After registers and cache, its list puts the routing table, ARP cache, process table, kernel statistics and memory first, then temporary file systems, then disk, then remote logging data. Collecting the most volatile data first keeps as much evidence as possible.",
      "rationales": {
        "A": "Correct: the ARP cache and routing table are among the most volatile items and come before the other options.",
        "B": "Temporary file systems are listed after routing tables, ARP cache and memory in the order of volatility.",
        "C": "Disk contents are far more persistent than network caches, so imaging comes later in the order.",
        "D": "Remote logs are stored off the host and are not lost when it changes, so they are collected near the end."
      },
      "topic": "Security Operations",
      "subtopic": "Understand and comply with investigations",
      "difficulty": "hard",
      "source": "CISSP Domain 7.1 Understand and comply with investigations – evidence collection; RFC 3227 order of volatility"
    },
    {
      "stem": "Which control most effectively prevents SQL injection in a web application that builds database queries from user input?",
      "options": [
        "Encrypting the database at rest",
        "Suppressing detailed error messages",
        "Serving the application over TLS",
        "Using parameterized queries"
      ],
      "answer": "D",
      "explanation": "SQL injection happens when user input is concatenated into a query and the database interprets part of it as SQL code. Parameterized queries, or prepared statements, send the query structure and the data separately, so input is always treated as a value and never as executable SQL. Other measures may reduce impact or information leakage but leave the injection flaw in place.",
      "rationales": {
        "A": "Encryption at rest protects stored data if media is stolen, but injected queries run through the application with full access.",
        "B": "Hiding errors makes injection harder to discover and exploit, but the underlying flaw remains.",
        "C": "TLS protects data in transit; it delivers malicious input to the server just as securely.",
        "D": "Correct: parameterized queries keep input separate from SQL code, so the input cannot change the query's logic."
      },
      "topic": "Software Development Security",
      "subtopic": "Define and apply secure coding guidelines and standards",
      "difficulty": "easy",
      "source": "CISSP Domain 8.5 Define and apply secure coding guidelines – source-code level weaknesses (injection)"
    },
    {
      "stem": "A development team wants to find security flaws early in the software development life cycle by analyzing the application's source code without executing it. Which technique fits this goal?",
      "options": [
        "Dynamic application security testing (DAST)",
        "Fuzz testing of the input interfaces",
        "Static application security testing (SAST)",
        "Runtime application self-protection (RASP)"
      ],
      "answer": "C",
      "explanation": "Static application security testing examines source code, bytecode or binaries without running the program, looking for patterns such as unsafe functions and tainted data flows. Because it needs no working build or deployed environment, it can run during coding and in CI pipelines, so flaws are found when they are cheapest to fix. Dynamic methods need a running application.",
      "rationales": {
        "A": "DAST tests a running application from the outside, so it requires execution and usually comes later in the SDLC.",
        "B": "Fuzz testing sends malformed input to a running program, so it does not analyze code without executing it.",
        "C": "Correct: SAST analyzes code without running it and supports finding flaws early in development.",
        "D": "RASP protects an application at runtime in production rather than analyzing source code during development."
      },
      "topic": "Software Development Security",
      "subtopic": "Identify and apply security controls in software development ecosystems",
      "difficulty": "medium",
      "source": "CISSP Domain 8.2 Security controls in software development ecosystems – application security testing (SAST, DAST)"
    }
  ]
}
```