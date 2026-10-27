```json
{
  "format": "domcq/1",
  "exam": "cissp",
  "set": "CISSP practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "An ISC2-certified security manager discovers that her employer's product contains a safety-related flaw that could endanger members of the public. Her employer instructs her to keep the flaw confidential to protect sales. According to the ISC2 Code of Ethics, how should she resolve the conflict between her obligations?",
      "options": [
        "Give priority to the canon on providing diligent and competent service to principals",
        "Give priority to the canon on protecting society, the common good and the infrastructure",
        "Give priority to the canon on advancing and protecting the profession",
        "Give priority to the canon on acting honorably, honestly, justly and legally"
      ],
      "answer": "B",
      "explanation": "The four canons of the ISC2 Code of Ethics are listed in order of precedence, and conflicts between them are resolved in that order. Protecting society, the common good, necessary public trust and confidence, and the infrastructure comes first, so it outweighs the duty to serve an employer or other principal. Public safety therefore takes priority over the employer's wish to keep the flaw secret.",
      "topic": "Security and Risk Management",
      "subtopic": "Understand, adhere to, and promote professional ethics",
      "difficulty": "medium",
      "source": "ISC2 Code of Ethics – Preamble and Canons; CISSP Domain 1.1"
    },
    {
      "stem": "A server room holds equipment valued at $200,000 and is exposed to flooding. A flood is expected to destroy 25% of the equipment's value, and floods are expected once every five years. What is the annualized loss expectancy (ALE) for this risk?",
      "options": [
        "$2,500",
        "$40,000",
        "$50,000",
        "$10,000"
      ],
      "answer": "D",
      "explanation": "Single loss expectancy (SLE) is asset value times exposure factor: $200,000 x 0.25 = $50,000. The annualized rate of occurrence (ARO) for one flood every five years is 0.2. ALE = SLE x ARO = $50,000 x 0.2 = $10,000. The $50,000 distractor is the SLE, and $40,000 wrongly applies the ARO to the full asset value.",
      "topic": "Security and Risk Management",
      "subtopic": "Understand and apply risk management concepts",
      "difficulty": "easy",
      "source": "CISSP Domain 1.10 Risk management concepts – quantitative risk analysis (SLE, ARO, ALE)"
    },
    {
      "stem": "During a business impact analysis, the payroll process is given a maximum tolerable downtime (MTD) of 72 hours. Once the payroll system is restored, staff will need an estimated 24 hours to verify data and catch up on backlogged work. What is the longest recovery time objective (RTO) the organization can set for the payroll system?",
      "options": [
        "48 hours",
        "24 hours",
        "72 hours",
        "96 hours"
      ],
      "answer": "A",
      "explanation": "The MTD is the total time the business function can be unavailable, and it has to cover both restoring the system (RTO) and the work recovery time (WRT) needed to make the process fully operational again. Because RTO + WRT must not exceed MTD, the RTO can be at most 72 - 24 = 48 hours. Setting the RTO equal to the MTD ignores the time needed after the technology is back.",
      "topic": "Security and Risk Management",
      "subtopic": "Identify, analyze, assess, prioritize, and implement Business Continuity (BC) requirements",
      "difficulty": "hard",
      "source": "CISSP Domain 1.7 Business Continuity requirements – Business Impact Analysis (MTD, RTO, WRT)"
    },
    {
      "stem": "At a retail company, the vice president of sales decides that the customer database must be classified as Confidential and approves who may access it. A database administrator then sets the access permissions, runs nightly backups and checks backup integrity as instructed. Which role does the database administrator fill for this data?",
      "options": [
        "Data owner",
        "Data controller",
        "Data custodian",
        "Data subject"
      ],
      "answer": "C",
      "explanation": "A data custodian carries out the day-to-day protection of data, such as backups, implementing permissions and maintaining integrity, as directed by the data owner. The data owner, here the vice president, is accountable for the data and decides its classification and who may access it. The custodian follows those decisions but does not make them.",
      "topic": "Asset Security",
      "subtopic": "Manage data lifecycle",
      "difficulty": "medium",
      "source": "CISSP Domain 2.4 Manage data lifecycle – data roles (owners, controllers, custodians, processors, users, subjects)"
    },
    {
      "stem": "A company is retiring solid-state drives that held highly sensitive customer records. The drives will go to an external recycler and will leave the company's control. Which sanitization approach is most appropriate?",
      "options": [
        "Degaussing each drive with a high-strength degausser",
        "Physically shredding the drives to an approved particle size",
        "Overwriting every addressable block three times",
        "Deleting the partitions and reformatting each drive"
      ],
      "answer": "B",
      "explanation": "Solid-state drives store data in flash memory, not on magnetic media, so degaussing has no effect on them. Wear leveling and over-provisioned cells mean that overwriting addressable blocks may leave data behind in areas the host cannot reach. For highly sensitive media leaving organizational control, NIST SP 800-88 points to destruction, such as shredding to a specified particle size, as the most reliable option. Reformatting only removes file system references.",
      "topic": "Asset Security",
      "subtopic": "Manage data lifecycle",
      "difficulty": "medium",
      "source": "NIST SP 800-88 Guidelines for Media Sanitization – Clear, Purge, Destroy; CISSP Domain 2.4 data destruction"
    },
    {
      "stem": "A system enforces the Bell-LaPadula model. A user cleared for Secret tries to save a document into a folder labeled Confidential. What happens, and why?",
      "options": [
        "The write is allowed because the user's clearance dominates the folder label",
        "The write is allowed because Bell-LaPadula restricts only reading, not writing",
        "The write is blocked because the simple security property prohibits reading up",
        "The write is blocked because the star property prohibits writing down"
      ],
      "answer": "D",
      "explanation": "Bell-LaPadula is a confidentiality model. Its star (*) property prevents a subject from writing to an object at a lower classification, because a Secret subject could otherwise copy Secret information into a Confidential container. The simple security property is a separate rule that blocks reading objects above the subject's clearance.",
      "topic": "Security Architecture and Engineering",
      "subtopic": "Understand the fundamental concepts of security models (e.g., Biba, Star Model, Bell-LaPadula)",
      "difficulty": "easy",
      "source": "CISSP Domain 3.2 Security models – Bell-LaPadula simple security property and star property"
    },
    {
      "stem": "A contracts manager sends electronic purchase orders to a supplier. The supplier must be able to prove to an independent third party that the manager, and no one else, created each order. Which technique meets this requirement?",
      "options": [
        "Signing a hash of each order with the manager's private key",
        "Computing an HMAC of each order with a key shared with the supplier",
        "Encrypting each order with the supplier's public key",
        "Encrypting each order with a randomly generated AES session key"
      ],
      "answer": "A",
      "explanation": "Non-repudiation requires proof that only one party could have produced the message. A digital signature made with the manager's private key gives this proof, because only the manager holds that key and anyone can verify the signature with the manager's public key. An HMAC uses a key shared by both parties, so either one could have created it. Encryption alone provides confidentiality, not proof of origin.",
      "topic": "Security Architecture and Engineering",
      "subtopic": "Select and determine cryptographic solutions",
      "difficulty": "medium",
      "source": "CISSP Domain 3.6 Cryptographic solutions – digital signatures and non-repudiation"
    },
    {
      "stem": "A designer is evaluating a hash function that produces a 128-bit output. Roughly how many hash computations would an attacker need to find any two different inputs that produce the same output with a reasonable probability of success?",
      "options": [
        "2^32",
        "2^127",
        "2^64",
        "2^128"
      ],
      "answer": "C",
      "explanation": "Because of the birthday paradox, finding any collision in an n-bit hash takes about 2^(n/2) attempts, not 2^n. For a 128-bit hash that is about 2^64 computations. This is why collision resistance is roughly half the output length in bits, and why longer digests are recommended where collision attacks matter. Finding an input that matches one specific hash (a preimage) would take closer to 2^128 attempts.",
      "topic": "Security Architecture and Engineering",
      "subtopic": "Understand methods of cryptanalytic attacks",
      "difficulty": "hard",
      "source": "CISSP Domain 3.7 Methods of cryptanalytic attacks – birthday attack and hash collisions"
    },
    {
      "stem": "An organization is building a site-to-site IPsec VPN and requires that the payload of every packet be encrypted. Which IPsec component provides this confidentiality?",
      "options": [
        "Encapsulating Security Payload (ESP)",
        "Authentication Header (AH)",
        "Internet Key Exchange (IKE)",
        "Security Association Database (SAD)"
      ],
      "answer": "A",
      "explanation": "ESP encrypts the packet payload and can also provide integrity and authentication. AH provides integrity and origin authentication but no encryption. IKE negotiates security associations and keying material. The SAD is where the parameters of established security associations are stored.",
      "topic": "Communication and Network Security",
      "subtopic": "Implement secure communication channels according to design",
      "difficulty": "easy",
      "source": "CISSP Domain 4 – IPsec components (AH, ESP, IKE); RFC 4303 ESP"
    },
    {
      "stem": "An attacker connected to an access-layer switch port sends thousands of frames with random source MAC addresses. The switch's MAC address table fills up and the switch starts flooding traffic out of all ports, letting the attacker capture other users' traffic. Which control most directly prevents this attack?",
      "options": [
        "Dynamic ARP inspection on the affected VLAN",
        "DHCP snooping on untrusted access ports",
        "BPDU guard on edge ports",
        "Port security limiting MAC addresses per port"
      ],
      "answer": "D",
      "explanation": "This is MAC flooding, which fills the switch's CAM table so that it falls back to flooding frames like a hub. Port security limits how many MAC addresses a single port can learn and can shut down or restrict the port when the limit is exceeded, which stops the attack at its source. Dynamic ARP inspection targets ARP spoofing, DHCP snooping targets rogue DHCP servers, and BPDU guard protects the spanning tree topology.",
      "topic": "Communication and Network Security",
      "subtopic": "Secure network components",
      "difficulty": "medium",
      "source": "CISSP Domain 4.2 Secure network components – switch security, MAC flooding and port security"
    },
    {
      "stem": "A security engineer is replacing WPA2-Personal on a small office wireless network. With WPA2-Personal, an attacker who captures the four-way handshake can run an offline dictionary attack against the passphrase. Which WPA3 feature is designed specifically to resist this attack?",
      "options": [
        "Protected Management Frames (PMF)",
        "Simultaneous Authentication of Equals (SAE)",
        "Opportunistic Wireless Encryption (OWE)",
        "Counter Mode CBC-MAC Protocol (CCMP)"
      ],
      "answer": "B",
      "explanation": "WPA3-Personal replaces the pre-shared key exchange with SAE, a password-authenticated key exchange based on Dragonfly. With SAE, a captured exchange cannot be used to test password guesses offline: each guess needs a live interaction, and the protocol also provides forward secrecy. PMF protects management frames such as deauthentication messages. OWE encrypts open networks that have no password. CCMP is the AES-based data encryption protocol, not a key exchange.",
      "topic": "Communication and Network Security",
      "subtopic": "Apply secure design principles in network architectures",
      "difficulty": "hard",
      "source": "CISSP Domain 4.1 Wireless networks – WPA3 and SAE; Wi-Fi Alliance WPA3 specification"
    },
    {
      "stem": "Which of the following combinations is an example of multifactor authentication?",
      "options": [
        "A password and the answer to a security question",
        "A fingerprint scan and a facial recognition scan",
        "A smart card and a personal identification number",
        "A user ID and a memorized password"
      ],
      "answer": "C",
      "explanation": "Multifactor authentication combines factors from different categories: something you know, something you have and something you are. A smart card is something you have and a PIN is something you know, so together they are two factors. A password with a security question uses two knowledge factors, and two biometrics are both inherence factors, so each of those is still single-factor. A user ID is an identification claim, not an authentication factor.",
      "topic": "Identity and Access Management (IAM)",
      "subtopic": "Design identification and authentication strategy (e.g., people, devices, and services)",
      "difficulty": "easy",
      "source": "CISSP Domain 5.2 Identification and authentication strategy – authentication factors and MFA"
    },
    {
      "stem": "A developer is building a mobile app that lets users sign in with an account they already have at a large online provider. The app needs a standardized, signed token stating who the user is, and the solution must build on OAuth 2.0 authorization flows. Which protocol should the developer use?",
      "options": [
        "Security Assertion Markup Language (SAML) 2.0",
        "Kerberos version 5",
        "Remote Authentication Dial-In User Service (RADIUS)",
        "OpenID Connect (OIDC)"
      ],
      "answer": "D",
      "explanation": "OAuth 2.0 is an authorization framework. It delegates access to resources but does not, by itself, tell the app who the user is. OpenID Connect adds an identity layer on top of OAuth 2.0 and issues a signed ID token, usually a JWT, with claims about the authenticated user. SAML 2.0 also supports federated sign-on, but it uses XML assertions and is not built on OAuth. Kerberos and RADIUS are designed for enterprise and network access rather than consumer web and mobile sign-in.",
      "topic": "Identity and Access Management (IAM)",
      "subtopic": "Implement authentication systems",
      "difficulty": "medium",
      "source": "CISSP Domain 5.6 Implement authentication systems – OpenID Connect (OIDC)/OAuth, SAML"
    },
    {
      "stem": "A hospital wants to enforce a rule that clinicians may view a patient record only if they are assigned to the patient's ward, the request occurs during their scheduled shift, and the request comes from a hospital-managed device. Which access control model best supports this policy?",
      "options": [
        "Attribute-based access control",
        "Role-based access control",
        "Discretionary access control",
        "Mandatory access control"
      ],
      "answer": "A",
      "explanation": "Attribute-based access control decides access by evaluating policies over attributes of the subject (assigned ward), the environment (time of the shift) and the context (device management status), along with attributes of the resource. RBAC grants permissions by job role alone and cannot easily express conditions such as time and device. DAC leaves access decisions to the resource owner. MAC relies on fixed classification labels and clearances.",
      "topic": "Identity and Access Management (IAM)",
      "subtopic": "Implement and manage authorization mechanisms",
      "difficulty": "medium",
      "source": "CISSP Domain 5.4 Authorization mechanisms – ABAC, RBAC, MAC, DAC; NIST SP 800-162"
    },
    {
      "stem": "Before testing begins, a penetration testing team receives the target application's source code, network diagrams and administrator credentials. Which type of test is this?",
      "options": [
        "Unknown-environment (black-box) test",
        "Known-environment (white-box) test",
        "Partially known-environment (gray-box) test",
        "Double-blind test"
      ],
      "answer": "B",
      "explanation": "In a known-environment, or white-box, test the testers have full knowledge of the target, including its code, architecture and credentials. This allows deep, efficient coverage of the internals. An unknown-environment test starts with no inside knowledge, much like an external attacker, and a partially known-environment test gives only limited information. Double-blind describes a test where the defending staff are also not told it is happening.",
      "topic": "Security Assessment and Testing",
      "subtopic": "Conduct security control testing",
      "difficulty": "easy",
      "source": "CISSP Domain 6.2 Security control testing – penetration testing perspectives (known, unknown, partially known environment)"
    },
    {
      "stem": "A company evaluating a cloud service provider wants an independent auditor's detailed report on the provider's controls for security and availability. The report must include the tests performed and state whether the controls operated effectively over a period of several months. Which report should the company request?",
      "options": [
        "SOC 1 Type 1 report",
        "SOC 2 Type 1 report",
        "SOC 2 Type 2 report",
        "SOC 3 report"
      ],
      "answer": "C",
      "explanation": "SOC 2 reports cover controls relevant to the Trust Services Criteria, such as security and availability. A Type 2 report evaluates whether those controls operated effectively over a period of time and describes the tests and their results. A Type 1 report covers only the design of controls at a single point in time. SOC 1 focuses on internal control over financial reporting. SOC 3 is a general-use summary that leaves out the detailed test results.",
      "topic": "Security Assessment and Testing",
      "subtopic": "Conduct or facilitate security audits",
      "difficulty": "medium",
      "source": "CISSP Domain 6 – third-party audits and SOC reports (SOC 1, SOC 2, SOC 3; Type 1 vs Type 2); AICPA SOC framework"
    },
    {
      "stem": "A responder arrives at a running server suspected of compromise and plans to collect evidence in order of volatility. Which of the following should be collected first?",
      "options": [
        "Files in the temporary file system",
        "Logs held on a remote syslog server",
        "Data stored on the local hard disk",
        "The system's ARP cache"
      ],
      "answer": "D",
      "explanation": "Order of volatility means collecting the evidence most likely to change or disappear first. The ARP cache is held in memory and its entries expire within minutes, so it is far more volatile than temporary files, local disk contents or logs on a remote server. RFC 3227 lists routing and ARP caches near the top of the order, before temporary file systems, disk and remote logging data.",
      "topic": "Security Operations",
      "subtopic": "Understand and comply with investigations",
      "difficulty": "hard",
      "source": "RFC 3227 Guidelines for Evidence Collection and Archiving – Order of Volatility; CISSP Domain 7.1"
    },
    {
      "stem": "During a disaster recovery test, the recovery team brings critical systems online at the alternate site and processes a copy of real transactions, while the primary site keeps handling production operations as normal. Which type of test is this?",
      "options": [
        "Parallel test",
        "Simulation test",
        "Structured walk-through",
        "Full-interruption test"
      ],
      "answer": "A",
      "explanation": "A parallel test actually brings up systems at the recovery site and processes real data, while production continues at the primary site. This proves the recovery capability without risking operations. A structured walk-through is a discussion-based review of the plan. A simulation exercises responses to a scenario without moving real processing. A full-interruption test shuts down the primary site and carries the highest risk.",
      "topic": "Security Operations",
      "subtopic": "Test Disaster Recovery Plans (DRP)",
      "difficulty": "medium",
      "source": "CISSP Domain 7.12 Test Disaster Recovery Plans – read-through, walk-through, simulation, parallel, full interruption"
    },
    {
      "stem": "A web application builds database queries by concatenating user-supplied text directly into SQL statements, and testers have shown it is vulnerable to SQL injection. Which change most effectively eliminates this vulnerability?",
      "options": [
        "Encrypting the database with transparent data encryption",
        "Requiring HTTPS for all application traffic",
        "Using parameterized queries with bound variables",
        "Suppressing detailed database error messages"
      ],
      "answer": "C",
      "explanation": "SQL injection happens when user input is interpreted as part of the SQL command. Parameterized queries keep the query structure separate from the data, so the database always treats input as a value and never as executable SQL. Encryption at rest and HTTPS protect data in storage and in transit, but they do nothing to stop malicious input from being executed. Hiding error messages only makes the flaw harder to find.",
      "topic": "Software Development Security",
      "subtopic": "Define and apply secure coding guidelines and standards",
      "difficulty": "easy",
      "source": "CISSP Domain 8.5 Secure coding guidelines – input handling and SQL injection; OWASP SQL Injection Prevention"
    },
    {
      "stem": "A development team's applications rely on dozens of open-source libraries. The security lead wants every build to automatically identify third-party components with known published vulnerabilities and flag license problems. Which category of tool best meets this need?",
      "options": [
        "Static application security testing (SAST)",
        "Software composition analysis (SCA)",
        "Dynamic application security testing (DAST)",
        "Interactive application security testing (IAST)"
      ],
      "answer": "B",
      "explanation": "Software composition analysis inventories the third-party and open-source components an application uses, often producing a software bill of materials. It then checks those components against vulnerability databases and license information. SAST examines the team's own source code for coding flaws, while DAST and IAST test the running application's behavior. None of those three is designed mainly to track known vulnerabilities and licenses in dependencies.",
      "topic": "Software Development Security",
      "subtopic": "Identify and apply security controls in software development ecosystems",
      "difficulty": "medium",
      "source": "CISSP Domain 8.2 Software development ecosystems – application security testing (SAST, DAST, SCA, IAST)"
    }
  ]
}
```