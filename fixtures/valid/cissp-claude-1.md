```json
{
  "format": "domcq/1",
  "exam": "cissp",
  "set": "CISSP practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "Which of the following is the first canon of the ISC2 Code of Ethics?",
      "options": [
        "Act honorably, honestly, justly, responsibly, and legally",
        "Protect society, the common good, necessary public trust and confidence, and the infrastructure",
        "Provide diligent and competent service to principals",
        "Advance and protect the profession"
      ],
      "answer": "B",
      "explanation": "The ISC2 Code of Ethics has four canons, and the first is the duty to protect society, the common good, public trust and the infrastructure. It comes before the duties to act honorably, to serve principals, and to advance the profession. CISSP study materials use this order as guidance when obligations conflict, so a member's duty to society comes before a duty to an employer or client.",
      "topic": "Security and Risk Management",
      "subtopic": "Understand, adhere to, and promote professional ethics",
      "difficulty": "easy",
      "source": "ISC2 Code of Ethics – Canons; CISSP Domain 1.1 Professional ethics"
    },
    {
      "stem": "A company values a customer database at $200,000. A ransomware incident is expected to destroy 25% of the database's value and is estimated to occur once every five years. A proposed control that costs $4,000 per year would reduce the expected frequency to once every twenty years. What is the annual value of the control to the company?",
      "options": [
        "$3,500",
        "$6,000",
        "$7,500",
        "$10,000"
      ],
      "answer": "A",
      "explanation": "The single loss expectancy is $200,000 x 0.25 = $50,000. The annualized loss expectancy is $50,000 x 0.2 = $10,000 before the control and $50,000 x 0.05 = $2,500 after it. The value of a safeguard is ALE before minus ALE after minus the safeguard's annual cost: $10,000 - $2,500 - $4,000 = $3,500. A positive value means the control is cost-justified.",
      "topic": "Security and Risk Management",
      "subtopic": "Understand and apply risk management concepts",
      "difficulty": "hard",
      "source": "CISSP Domain 1 – Quantitative risk analysis (SLE, ARO, ALE, safeguard cost/benefit)"
    },
    {
      "stem": "During a business impact analysis, a company finds that its order-processing function has a maximum tolerable downtime (MTD) of 8 hours. Which statement about the recovery time objective (RTO) for this function is correct?",
      "options": [
        "The RTO must be longer than 8 hours to leave time for testing",
        "The RTO must equal the recovery point objective for the function",
        "The RTO is set only after the recovery site contract is signed",
        "The RTO must be equal to or shorter than 8 hours"
      ],
      "answer": "D",
      "explanation": "The MTD is the longest a business function can be unavailable before the organization suffers unacceptable harm. The RTO is the target time to restore the function, so it must fit within the MTD or the recovery plan would accept damage the business cannot tolerate. RTO and RPO measure different things (time to restore versus acceptable data loss), and the RTO drives which recovery site is chosen, not the other way round.",
      "topic": "Security and Risk Management",
      "subtopic": "Identify, analyze, assess, prioritize, and implement Business Continuity (BC) requirements",
      "difficulty": "medium",
      "source": "CISSP Domain 1 – Business impact analysis: MTD, RTO and RPO"
    },
    {
      "stem": "At a bank, the head of retail lending classifies loan records as Confidential and approves who may access them. A database administrator then runs the daily backups and configures the access controls that the head of lending specified. In CISSP terms, what role does the database administrator fill for this data?",
      "options": [
        "Data owner",
        "Data controller",
        "Data custodian",
        "Data subject"
      ],
      "answer": "C",
      "explanation": "The data custodian carries out the day-to-day protection of data, such as backups, access control configuration and maintenance, as directed by the data owner. The data owner, here the head of lending, is accountable for the data and decides its classification and who may access it. The data controller (a privacy-law term for whoever decides the purposes of processing) and the data subject (the person the data describes) are different roles.",
      "topic": "Asset Security",
      "subtopic": "Establish information and asset handling requirements",
      "difficulty": "medium",
      "source": "CISSP Domain 2 – Data roles: owner, custodian, controller, processor, subject"
    },
    {
      "stem": "A company plans to sell its retired laptops. Their solid-state drives (SSDs) held confidential data. Which sanitization approach is most appropriate before the drives leave the company?",
      "options": [
        "Degauss each drive with a high-strength degausser",
        "Run the drive's built-in sanitize or cryptographic erase command",
        "Overwrite the logical volume once with zeros",
        "Delete all partitions and perform a quick format"
      ],
      "answer": "B",
      "explanation": "SSDs store data in flash memory, not on magnetic media, so degaussing does not remove it. Wear leveling and over-provisioning mean that overwriting the logical volume may never reach every physical cell, and formatting only removes file system references. NIST SP 800-88 lists firmware-based sanitize commands and cryptographic erase as purge methods for flash media, which suits drives that will be reused. Physical destruction is the alternative when the drives do not need to be reused.",
      "topic": "Asset Security",
      "subtopic": "Manage data lifecycle",
      "difficulty": "medium",
      "source": "NIST SP 800-88 Rev. 1 – Purge methods for flash memory; CISSP Domain 2 data remanence"
    },
    {
      "stem": "Under the Bell-LaPadula model, which rule prevents a subject cleared for Secret from writing information into a document classified as Confidential?",
      "options": [
        "Simple Security Property",
        "Discretionary Security Property",
        "Simple Integrity Axiom",
        "Star (*) Security Property"
      ],
      "answer": "D",
      "explanation": "Bell-LaPadula is a confidentiality model. Its Star (*) Security Property is the \"no write down\" rule: a subject may not write to an object at a lower classification, which stops secret information leaking into less protected documents. The Simple Security Property is \"no read up\", the Discretionary Security Property enforces an access matrix, and the Simple Integrity Axiom belongs to the Biba integrity model.",
      "topic": "Security Architecture and Engineering",
      "subtopic": "Understand the fundamental concepts of security models (e.g., Biba, Star Model, Bell-LaPadula)",
      "difficulty": "easy",
      "source": "CISSP Domain 3 – Security models: Bell-LaPadula properties"
    },
    {
      "stem": "Alice must send Bob a message that only Bob can read and that Bob can later prove was sent by Alice. Using asymmetric cryptography, which combination of keys achieves both goals?",
      "options": [
        "Sign with Alice's private key and encrypt with Bob's public key",
        "Sign with Alice's public key and encrypt with Bob's private key",
        "Sign with Bob's private key and encrypt with Alice's public key",
        "Sign with Alice's private key and encrypt with Alice's public key"
      ],
      "answer": "A",
      "explanation": "A digital signature is made with the sender's private key, which only the sender holds. Anyone can verify it with the sender's public key, and that gives non-repudiation. Confidentiality comes from encrypting with the recipient's public key, because only the recipient's matching private key can decrypt it. So Alice signs with her private key and encrypts for Bob with Bob's public key.",
      "topic": "Security Architecture and Engineering",
      "subtopic": "Select and determine cryptographic solutions",
      "difficulty": "medium",
      "source": "CISSP Domain 3 – Asymmetric cryptography, digital signatures and non-repudiation"
    },
    {
      "stem": "Encrypting data twice with DES using two independent 56-bit keys (Double DES) was abandoned in favor of Triple DES. Which attack explains why Double DES provides little more security than single DES?",
      "options": [
        "Birthday attack",
        "Related-key attack",
        "Meet-in-the-middle attack",
        "Chosen-ciphertext attack"
      ],
      "answer": "C",
      "explanation": "In a meet-in-the-middle attack, the attacker takes a known plaintext-ciphertext pair, encrypts the plaintext under every possible first key and decrypts the ciphertext under every possible second key, then looks for matching intermediate values. This takes roughly twice the work of breaking single DES, not the square of it, so the second key adds very little effective strength. Triple DES was adopted because the extra stage pushes the work far beyond this attack.",
      "topic": "Security Architecture and Engineering",
      "subtopic": "Understand methods of cryptanalytic attacks",
      "difficulty": "hard",
      "source": "CISSP Domain 3 – Cryptanalytic attacks: meet-in-the-middle; DES, 2DES and 3DES"
    },
    {
      "stem": "Which Wi-Fi security standard replaces the pre-shared key handshake with Simultaneous Authentication of Equals (SAE) so that the passphrase resists offline dictionary attacks?",
      "options": [
        "WEP",
        "WPA",
        "WPA2",
        "WPA3"
      ],
      "answer": "D",
      "explanation": "WPA3-Personal replaces WPA2's pre-shared key four-way handshake with SAE, a password-authenticated key exchange based on the Dragonfly handshake. Under WPA2-PSK, an attacker who captures the handshake can test passphrase guesses offline. SAE forces each guess to interact with the network and also provides forward secrecy. WEP and the original WPA are older, weaker protocols that do not use SAE.",
      "topic": "Communication and Network Security",
      "subtopic": "Apply secure design principles in network architectures",
      "difficulty": "easy",
      "source": "CISSP Domain 4 – Wireless networks: WPA2 vs WPA3 (SAE)"
    },
    {
      "stem": "Two offices connect over the internet through an IPsec VPN between their gateways. The company requires both the payload and the original IP headers of internal traffic to be encrypted in transit. Which IPsec configuration meets this requirement?",
      "options": [
        "AH in transport mode",
        "ESP in tunnel mode",
        "ESP in transport mode",
        "AH in tunnel mode"
      ],
      "answer": "B",
      "explanation": "Authentication Header (AH) provides integrity and origin authentication but no encryption, so it cannot meet a confidentiality requirement. Transport mode protects only the payload and leaves the original IP header visible. Tunnel mode wraps the whole original packet, header included, inside a new IP header between the gateways, and ESP encrypts that wrapped packet. ESP in tunnel mode is therefore the standard choice for gateway-to-gateway VPNs.",
      "topic": "Communication and Network Security",
      "subtopic": "Implement secure communication channels according to design",
      "difficulty": "medium",
      "source": "CISSP Domain 4 – IPsec: AH vs ESP, transport vs tunnel mode"
    },
    {
      "stem": "A company signs its authoritative DNS zones with DNSSEC, and its customers' resolvers perform DNSSEC validation. Which protection does this provide?",
      "options": [
        "Resolvers can verify that responses came from the zone and were not altered",
        "DNS queries and responses are encrypted so they cannot be observed in transit",
        "The authoritative servers are shielded from volumetric denial-of-service attacks",
        "Attackers can no longer list the names in the zone by walking its records"
      ],
      "answer": "A",
      "explanation": "DNSSEC adds digital signatures to DNS records and links them in a chain of trust from the root through DS records. A validating resolver can therefore confirm that data is authentic and unmodified, which defeats cache poisoning and spoofed responses. It does not encrypt anything; DNS over TLS or HTTPS does that. It does not stop denial of service, and its larger signed responses can even worsen amplification. NSEC records actually make zone walking possible, and NSEC3 only makes it harder.",
      "topic": "Communication and Network Security",
      "subtopic": "Secure network components",
      "difficulty": "hard",
      "source": "CISSP Domain 4 – Secure protocols: DNSSEC (origin authentication and integrity)"
    },
    {
      "stem": "Which combination of authentication methods is an example of multifactor authentication?",
      "options": [
        "A password and a personal identification number",
        "A fingerprint scan and an iris scan",
        "A password and a one-time code from a hardware token",
        "A password and answers to security questions"
      ],
      "answer": "C",
      "explanation": "Multifactor authentication combines factors of different types: something you know, something you have, and something you are. A password is something you know, and a hardware token that generates one-time codes is something you have, so together they are two factors. A password with a PIN, or a password with security questions, are both knowledge factors. Two biometric scans are both inherence factors, so each of those pairs is only single-factor.",
      "topic": "Identity and Access Management (IAM)",
      "subtopic": "Design identification and authentication strategy (e.g., people, devices, and services)",
      "difficulty": "easy",
      "source": "CISSP Domain 5 – Authentication factors and multifactor authentication"
    },
    {
      "stem": "Employees sign in to a third-party SaaS application with their corporate credentials through SAML 2.0 web single sign-on. Which party creates and digitally signs the SAML assertion that the application relies on?",
      "options": [
        "The service provider operated by the SaaS vendor",
        "The employee's web browser acting as the user agent",
        "The certificate authority that issued the vendor's TLS certificate",
        "The identity provider operated by the employer"
      ],
      "answer": "D",
      "explanation": "In SAML, the identity provider authenticates the user and issues a signed assertion about the user's identity and attributes. The service provider, here the SaaS vendor, trusts that assertion based on a pre-established federation relationship and does not handle the user's password itself. The browser only carries messages between the two parties, and a TLS certificate authority plays no part in issuing assertions.",
      "topic": "Identity and Access Management (IAM)",
      "subtopic": "Federated identity with a third-party service",
      "difficulty": "medium",
      "source": "CISSP Domain 5 – Federated identity: SAML identity provider and service provider roles"
    },
    {
      "stem": "In Kerberos, a user who already holds a ticket-granting ticket requests access to a file server and receives a service ticket. Which key is used to encrypt that service ticket?",
      "options": [
        "The user's long-term key derived from their password",
        "The secret key shared between the KDC and the file server",
        "The session key shared between the user and the TGS",
        "The public key from the file server's X.509 certificate"
      ],
      "answer": "B",
      "explanation": "The ticket-granting service encrypts the service ticket with the long-term secret key it shares with the target service. Only that service, and the KDC, can decrypt it, so the client can pass the ticket along but cannot read or forge it. Inside the ticket is a new client-to-server session key. The client receives a separate copy of that session key encrypted under the TGS session key, which is why that key is a common point of confusion. Standard Kerberos uses symmetric keys, not service public keys.",
      "topic": "Identity and Access Management (IAM)",
      "subtopic": "Implement authentication systems",
      "difficulty": "hard",
      "source": "CISSP Domain 5 – Kerberos: KDC, AS, TGS, tickets and session keys"
    },
    {
      "stem": "A company hires an outside firm to test its external defenses. To simulate an outside attacker, the testers are given only the company's name, with no network diagrams, credentials or system details. What kind of test is this?",
      "options": [
        "Zero-knowledge (black-box) test",
        "Full-knowledge (white-box) test",
        "Partial-knowledge (gray-box) test",
        "Credentialed vulnerability scan"
      ],
      "answer": "A",
      "explanation": "In a zero-knowledge, or black-box, penetration test the testers start with no inside information. They have to do their own reconnaissance, just as an external attacker would. White-box testers get full details such as architecture and source code, and gray-box testers get partial information. A credentialed scan is an automated vulnerability assessment run with valid accounts, not a penetration test without prior knowledge.",
      "topic": "Security Assessment and Testing",
      "subtopic": "Conduct security control testing",
      "difficulty": "easy",
      "source": "CISSP Domain 6 – Penetration testing: zero, partial and full knowledge"
    },
    {
      "stem": "A company's security team is evaluating a cloud provider and needs a detailed independent auditor's report on how effectively the provider's security and availability controls operated over the past twelve months. Which report should it request?",
      "options": [
        "SOC 1 Type I report",
        "SOC 1 Type II report",
        "SOC 2 Type II report",
        "SOC 3 report"
      ],
      "answer": "C",
      "explanation": "SOC 1 reports cover controls relevant to a customer's financial reporting. SOC 2 reports cover the Trust Services Criteria, such as security and availability. A Type II report tests whether controls operated effectively over a period of time, while a Type I report assesses only their design at a single point in time. A SOC 3 report addresses the same criteria as SOC 2 but is a brief general-use summary without the detailed test results.",
      "topic": "Security Assessment and Testing",
      "subtopic": "Conduct or facilitate security audits",
      "difficulty": "medium",
      "source": "CISSP Domain 6 – Third-party audits: SSAE 18 SOC 1, SOC 2, SOC 3; Type I vs Type II"
    },
    {
      "stem": "During a disaster recovery test, staff bring systems up at the alternate site and process real transactions there, while the primary site continues to run normal production. Which type of test is this?",
      "options": [
        "Structured walk-through (tabletop) test",
        "Simulation test",
        "Full-interruption test",
        "Parallel test"
      ],
      "answer": "D",
      "explanation": "A parallel test activates the recovery site and runs actual operations there while the primary site keeps running. This proves that the alternate site works without putting production at risk. Walk-through and simulation tests discuss or rehearse the plan without moving real processing. A full-interruption test actually shuts down the primary site, which gives the most assurance but carries the highest risk.",
      "topic": "Security Operations",
      "subtopic": "Test Disaster Recovery Plans (DRP)",
      "difficulty": "medium",
      "source": "CISSP Domain 7 – DRP testing: read-through, walk-through, simulation, parallel, full interruption"
    },
    {
      "stem": "An incident responder must collect evidence from a compromised server that is still running. Following the order of volatility, which source should be collected first?",
      "options": [
        "Contents of system memory",
        "Data in the temporary file system",
        "Files on the local disk",
        "Archived backup media"
      ],
      "answer": "A",
      "explanation": "The order of volatility says to collect the most short-lived evidence first, because it is lost when the system changes state or loses power. System memory holds running processes, network connections and encryption keys that vanish at shutdown. Temporary file systems, local disks and archival media last progressively longer. RFC 3227 lists memory before temporary file systems, disk and archival media.",
      "topic": "Security Operations",
      "subtopic": "Understand and comply with investigations",
      "difficulty": "medium",
      "source": "RFC 3227 Guidelines for Evidence Collection – Order of volatility; CISSP Domain 7 investigations"
    },
    {
      "stem": "A developer builds SQL statements by concatenating user-supplied form fields directly into the query string. Which change most effectively prevents SQL injection?",
      "options": [
        "Validate the form fields with client-side JavaScript",
        "Encrypt the database tables that hold sensitive data",
        "Use parameterized queries with bound variables",
        "Filter input against a list of known SQL keywords"
      ],
      "answer": "C",
      "explanation": "Parameterized queries, or prepared statements, send the SQL structure and the user data to the database separately. Input is therefore always treated as a value and can never change the query's logic. Client-side validation is easily bypassed because the attacker controls the client. Keyword blocklists can be evaded with encoding and alternative syntax, and encrypting the tables does nothing to stop a malicious query that the application runs.",
      "topic": "Software Development Security",
      "subtopic": "Define and apply secure coding guidelines and standards",
      "difficulty": "easy",
      "source": "CISSP Domain 8 – Secure coding: input handling and SQL injection; OWASP Top 10 Injection"
    },
    {
      "stem": "A development team wants its build pipeline to flag third-party open-source libraries in the application that have publicly known vulnerabilities or problematic licenses. Which testing approach is designed for this purpose?",
      "options": [
        "Static application security testing (SAST)",
        "Software composition analysis (SCA)",
        "Dynamic application security testing (DAST)",
        "Interactive application security testing (IAST)"
      ],
      "answer": "B",
      "explanation": "Software composition analysis inventories the open-source and third-party components in an application, including transitive dependencies. It checks them against vulnerability databases and license information. SAST analyzes the team's own source code for flaws without running it. DAST probes the running application from outside, and IAST uses instrumentation inside the running application. None of these three is built mainly to track known-vulnerable dependencies.",
      "topic": "Software Development Security",
      "subtopic": "Identify and apply security controls in software development ecosystems",
      "difficulty": "medium",
      "source": "CISSP Domain 8.2 – Application security testing (SAST, DAST, SCA, IAST)"
    }
  ]
}
```