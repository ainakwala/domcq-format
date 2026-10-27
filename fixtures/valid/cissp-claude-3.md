```json
{
  "format": "domcq/1",
  "exam": "cissp",
  "set": "CISSP practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "Which canon is listed first in the ISC2 Code of Ethics?",
      "options": [
        "Act honorably, honestly, justly, responsibly, and legally",
        "Protect society, the common good, necessary public trust and confidence, and the infrastructure",
        "Provide diligent and competent service to principals",
        "Advance and protect the profession"
      ],
      "answer": "B",
      "explanation": "The ISC2 Code of Ethics has four canons, and the first one is protecting society, the common good, necessary public trust and confidence, and the infrastructure. The order matters: a member's duty to society comes before duties to principals or to the profession. When the canons seem to point in different directions, that ordering helps a professional decide which obligation carries more weight.",
      "topic": "Security and Risk Management",
      "subtopic": "Understand, adhere to, and promote professional ethics",
      "difficulty": "easy",
      "source": "CISSP Domain 1 – ISC2 Code of Ethics: preamble and canons"
    },
    {
      "stem": "During a business impact analysis, a team finds that the order-processing function has a maximum tolerable downtime (MTD) of 48 hours. Which statement about the recovery time objective (RTO) for this function is correct?",
      "options": [
        "It should exceed 48 hours so recovery can be fully validated",
        "It should be set equal to the function's recovery point objective",
        "It can be set independently because RTO and MTD are unrelated",
        "It must be no longer than 48 hours, and is normally shorter"
      ],
      "answer": "D",
      "explanation": "MTD is the longest a function can be unavailable before the organization suffers unacceptable harm. RTO is the target time for restoring the function, so it has to fit inside the MTD. It is usually set shorter to leave a safety margin. RPO is a different measure: it is the amount of data loss that can be tolerated, expressed in time, and it has nothing to do with how long restoration takes.",
      "topic": "Security and Risk Management",
      "subtopic": "Identify, analyze, assess, prioritize, and implement Business Continuity (BC) requirements",
      "difficulty": "medium",
      "source": "CISSP Domain 1 – Business Impact Analysis: MTD, RTO and RPO"
    },
    {
      "stem": "A risk has a single loss expectancy (SLE) of $150,000 and an annualized rate of occurrence (ARO) of 0.6. A proposed safeguard would reduce the ARO to 0.2 and costs $45,000 per year. Using the standard cost/benefit calculation, what is the annual value of the safeguard to the organization?",
      "options": [
        "$15,000",
        "$60,000",
        "$45,000",
        "$105,000"
      ],
      "answer": "A",
      "explanation": "The ALE before the safeguard is $150,000 x 0.6 = $90,000. After the safeguard it is $150,000 x 0.2 = $30,000. The safeguard's value is the ALE before, minus the ALE after, minus the annual cost of the safeguard: $90,000 - $30,000 - $45,000 = $15,000. A positive result means the safeguard saves more than it costs. The $60,000 option is a common mistake that leaves out the cost of the safeguard.",
      "topic": "Security and Risk Management",
      "subtopic": "Understand and apply risk management concepts",
      "difficulty": "hard",
      "source": "CISSP Domain 1 – Quantitative risk analysis: SLE, ARO, ALE and safeguard cost/benefit"
    },
    {
      "stem": "Which role is ultimately responsible for assigning a classification level to a business dataset and approving who may access it?",
      "options": [
        "Data custodian",
        "System administrator",
        "Data owner",
        "Data processor"
      ],
      "answer": "C",
      "explanation": "The data owner is usually a senior business manager who is accountable for the data. That person decides how the data is classified and who may access it. The data custodian carries out the owner's decisions day to day, for example by running backups and applying access controls. A data processor handles data on behalf of a controller and does not set its classification.",
      "topic": "Asset Security",
      "subtopic": "Identify and classify information and assets",
      "difficulty": "easy",
      "source": "CISSP Domain 2 – Data roles: owner, custodian, controller, processor"
    },
    {
      "stem": "An organization is retiring solid-state drives (SSDs) that stored confidential data and plans to reuse them internally. Which sanitization method is the most reliable choice for these drives?",
      "options": [
        "Use the drive's built-in cryptographic erase or secure erase function",
        "Degauss each drive with a high-strength degausser before reuse",
        "Overwrite every user-addressable block once with zeros",
        "Delete all partitions and reformat the file system"
      ],
      "answer": "A",
      "explanation": "SSDs use wear leveling and keep spare blocks that the operating system cannot address. That means overwriting from the host can leave old data behind. Degaussing has no effect on flash memory because it is not magnetic. NIST SP 800-88 recommends purge methods such as cryptographic erase or the manufacturer's secure erase command for flash media that will be reused. Reformatting only removes file system pointers, so the data itself stays on the drive.",
      "topic": "Asset Security",
      "subtopic": "Manage data lifecycle",
      "difficulty": "medium",
      "source": "NIST SP 800-88 Rev. 1, Guidelines for Media Sanitization – purge methods for flash media"
    },
    {
      "stem": "A system enforces the Bell-LaPadula model, including its star (*) property. A subject with a Secret clearance attempts to write information into a file labeled Confidential. What is the result?",
      "options": [
        "Allowed, because the subject's clearance dominates the object's label",
        "Allowed, because Bell-LaPadula restricts only read operations",
        "Denied, because the star property prohibits writing down",
        "Denied, because the simple security property prohibits it"
      ],
      "answer": "C",
      "explanation": "Bell-LaPadula is a confidentiality model. Its star property says no write down: a subject may not write to an object at a lower classification, because that could leak higher-level information to a lower level. The simple security property controls reading (no read up), not writing. A higher clearance lets a subject read lower-level objects, but it does not let the subject write to them.",
      "topic": "Security Architecture and Engineering",
      "subtopic": "Understand the fundamental concepts of security models (e.g., Biba, Star Model, Bell-LaPadula)",
      "difficulty": "easy",
      "source": "CISSP Domain 3 – Security models: Bell-LaPadula simple security and star properties"
    },
    {
      "stem": "Alice wants Bob to be able to verify that a message came from her and was not modified in transit. Confidentiality is not required. Which operation creates the digital signature that meets this need?",
      "options": [
        "Encrypt the message with Bob's public key",
        "Encrypt the message hash with Bob's public key",
        "Encrypt the message with Alice's public key",
        "Encrypt the message hash with Alice's private key"
      ],
      "answer": "D",
      "explanation": "To make a digital signature, the sender hashes the message and encrypts the hash with the sender's own private key. Bob decrypts it with Alice's public key and compares the result with his own hash of the message. A match shows that the message is intact and came from the holder of Alice's private key. Encrypting with the recipient's public key gives confidentiality, not proof of origin.",
      "topic": "Security Architecture and Engineering",
      "subtopic": "Select and determine cryptographic solutions",
      "difficulty": "medium",
      "source": "CISSP Domain 3 – Cryptography: digital signatures, hashing and asymmetric key usage"
    },
    {
      "stem": "A hash function produces 160-bit digests. Using a birthday attack, approximately how many hash computations would an attacker expect to need to find any two different inputs that produce the same digest?",
      "options": [
        "About 2^160 computations",
        "About 2^80 computations",
        "About 2^40 computations",
        "About 2^159 computations"
      ],
      "answer": "B",
      "explanation": "The birthday paradox means a collision between any two inputs turns up after about the square root of the number of possible outputs. For an n-bit hash, that is about 2^(n/2) attempts. For a 160-bit digest this is about 2^80, which is why a hash's collision resistance is only half its output length. Finding a match for one specific digest is much harder, close to 2^160 work.",
      "topic": "Security Architecture and Engineering",
      "subtopic": "Understand methods of cryptanalytic attacks",
      "difficulty": "hard",
      "source": "CISSP Domain 3 – Cryptanalytic attacks: birthday attack and hash collision resistance"
    },
    {
      "stem": "Two security gateways connect branch office networks over the internet. The design requires that the entire original IP packet, including the internal source and destination addresses, be encrypted in transit. Which IPsec configuration meets this requirement?",
      "options": [
        "ESP in tunnel mode",
        "AH in transport mode",
        "ESP in transport mode",
        "AH in tunnel mode"
      ],
      "answer": "A",
      "explanation": "Encapsulating Security Payload (ESP) is the IPsec protocol that encrypts. Authentication Header (AH) gives integrity and origin authentication only. In tunnel mode, the whole original packet, header included, is encapsulated inside a new IP packet between the gateways, so ESP in tunnel mode hides the internal addresses. Transport mode protects only the payload and leaves the original IP header visible.",
      "topic": "Communication and Network Security",
      "subtopic": "Implement secure communication channels according to design",
      "difficulty": "medium",
      "source": "CISSP Domain 4 – IPsec: AH vs ESP, transport vs tunnel mode"
    },
    {
      "stem": "A small office wants its Wi-Fi to keep using a shared passphrase but resist offline dictionary attacks against captured authentication handshakes. Which option best meets this requirement?",
      "options": [
        "WEP with a 128-bit key",
        "WPA2-Personal with AES-CCMP",
        "WPA3-Personal",
        "WPA2-Enterprise with 802.1X"
      ],
      "answer": "C",
      "explanation": "WPA3-Personal replaces the WPA2 pre-shared key handshake with Simultaneous Authentication of Equals (SAE), also called the Dragonfly handshake. With SAE, a captured handshake cannot be guessed against offline; each guess requires a live exchange. SAE also provides forward secrecy. WPA2-Personal handshakes can be captured and cracked offline. WPA2-Enterprise uses individual credentials through 802.1X rather than a shared passphrase.",
      "topic": "Communication and Network Security",
      "subtopic": "Secure network components",
      "difficulty": "medium",
      "source": "CISSP Domain 4 – Wireless security: WPA2 vs WPA3 and SAE"
    },
    {
      "stem": "An attacker connected to a switch access port sends frames carrying two 802.1Q VLAN tags, hoping the frames will be delivered into a different VLAN on a neighboring switch. Which configuration change most directly prevents this double-tagging attack?",
      "options": [
        "Enable port security to limit the MAC addresses learned per port",
        "Set trunk native VLANs to an unused VLAN ID with no access ports",
        "Enable DHCP snooping on all access VLANs",
        "Require 802.1X authentication on all inter-switch trunk ports"
      ],
      "answer": "B",
      "explanation": "Double tagging only works when the attacker's access VLAN is the same as the trunk's native VLAN. The first switch removes the outer tag and sends the frame across the trunk untagged, and the next switch then reads the inner tag and forwards the frame into the target VLAN. Moving the native VLAN to an unused ID, or forcing native VLAN traffic to be tagged, breaks that condition. Port security and DHCP snooping deal with other threats, such as MAC flooding and rogue DHCP servers.",
      "topic": "Communication and Network Security",
      "subtopic": "Apply secure design principles in network architectures",
      "difficulty": "hard",
      "source": "CISSP Domain 4 – Network segmentation and VLAN security: VLAN hopping attacks"
    },
    {
      "stem": "A web application requires users to enter a password and then answer a personal security question chosen at enrollment. How should this authentication be classified?",
      "options": [
        "Two-factor, because two separate secrets are verified",
        "Two-factor, because the question adds a possession element",
        "Multifactor, because each step uses a different prompt",
        "Single-factor, because both items are something you know"
      ],
      "answer": "D",
      "explanation": "Authentication factors are grouped by type: something you know, something you have, and something you are. A password and a security answer are both things the user knows, so this is single-factor authentication, even though two checks happen. Multifactor authentication needs factors of at least two different types, for example a password plus a hardware token.",
      "topic": "Identity and Access Management (IAM)",
      "subtopic": "Design identification and authentication strategy (e.g., people, devices, and services)",
      "difficulty": "easy",
      "source": "CISSP Domain 5 – Authentication factors and multifactor authentication"
    },
    {
      "stem": "A developer's application already uses OAuth 2.0 to obtain delegated access to an API, but now also needs to verify who the signed-in user is. Which protocol builds on OAuth 2.0 by adding an ID token for this purpose?",
      "options": [
        "OpenID Connect",
        "SAML 2.0 with artifact binding",
        "Kerberos with PKINIT",
        "OAuth 2.0 client credentials grant"
      ],
      "answer": "A",
      "explanation": "OAuth 2.0 is an authorization framework. It issues access tokens for delegated access but does not, on its own, tell the client who the user is. OpenID Connect adds an identity layer on top of OAuth 2.0 and issues an ID token, a signed JSON Web Token that carries claims about the authenticated user. SAML is a separate XML-based federation standard, and the client credentials grant involves no user at all.",
      "topic": "Identity and Access Management (IAM)",
      "subtopic": "Federated identity with a third-party service",
      "difficulty": "medium",
      "source": "CISSP Domain 5 – Federated identity: SAML, OAuth 2.0 and OpenID Connect"
    },
    {
      "stem": "A hospital requires that nurses may view a patient's record only while they are assigned to that patient's ward and only during their scheduled shift. Access decisions must be evaluated at request time from properties of the user, the resource and the environment. Which access control model best fits this requirement?",
      "options": [
        "Role-based access control",
        "Mandatory access control",
        "Discretionary access control",
        "Attribute-based access control"
      ],
      "answer": "D",
      "explanation": "Attribute-based access control (ABAC) evaluates policies that combine user attributes (such as ward assignment), resource attributes (the patient's ward) and environmental attributes (the current time against the shift) each time a request is made. Role-based access control grants permissions by job role, so it cannot easily express context-dependent conditions like these. MAC relies on classification labels, and DAC leaves access decisions to the resource owner.",
      "topic": "Identity and Access Management (IAM)",
      "subtopic": "Implement and manage authorization mechanisms",
      "difficulty": "medium",
      "source": "CISSP Domain 5 – Authorization mechanisms: RBAC, rule-based, MAC, DAC and ABAC"
    },
    {
      "stem": "A customer wants assurance about a cloud provider's controls relevant to security and availability, including an independent auditor's opinion on whether those controls operated effectively over a review period. The customer accepts that the report has restricted distribution. Which report should the customer request?",
      "options": [
        "SOC 1 Type II report",
        "SOC 3 report",
        "SOC 2 Type II report",
        "SOC 2 Type I report"
      ],
      "answer": "C",
      "explanation": "SOC 2 reports cover controls related to the Trust Services Criteria, which include security and availability. A Type II report tests whether those controls operated effectively over a period of time, while a Type I report only describes their design at a single point in time. SOC 1 reports cover controls over financial reporting. SOC 3 is a general-use summary without the detailed test results.",
      "topic": "Security Assessment and Testing",
      "subtopic": "Conduct or facilitate security audits",
      "difficulty": "medium",
      "source": "CISSP Domain 6 – Audits: SSAE 18 / SOC 1, SOC 2 and SOC 3 reports, Type I vs Type II"
    },
    {
      "stem": "A test team reports that every decision point in a module, such as each if statement, has been executed with both a true outcome and a false outcome at least once. Which code coverage metric is the team describing?",
      "options": [
        "Statement coverage",
        "Branch coverage",
        "Function coverage",
        "Condition coverage"
      ],
      "answer": "B",
      "explanation": "Branch coverage, also called decision coverage, measures whether each decision has been taken both ways, so that every branch out of it has executed. Statement coverage only asks whether each line ran. Function coverage asks whether each function was called. Condition coverage looks at each individual Boolean sub-expression inside a decision rather than the outcome of the decision as a whole, which is why it is easy to confuse with branch coverage.",
      "topic": "Security Assessment and Testing",
      "subtopic": "Conduct security control testing",
      "difficulty": "hard",
      "source": "CISSP Domain 6 – Software testing: code review, test coverage analysis (statement, branch, condition, function, loop)"
    },
    {
      "stem": "Using the incident management steps described in ISC2 study material, a team has contained a malware outbreak and restored the affected systems to service. Which step focuses on identifying the root cause and implementing changes so the same incident does not recur?",
      "options": [
        "Remediation",
        "Recovery",
        "Reporting",
        "Mitigation"
      ],
      "answer": "A",
      "explanation": "In the remediation step, the team performs root cause analysis and puts changes in place, such as patches, configuration fixes or new controls, so the same incident does not happen again. Mitigation contains the incident and limits its spread. Recovery returns systems to normal operation. Reporting tells the appropriate parties about the incident. Keeping these steps separate helps make sure fixing the underlying cause does not get skipped once service is restored.",
      "topic": "Security Operations",
      "subtopic": "Conduct incident management",
      "difficulty": "medium",
      "source": "CISSP Domain 7 – Incident management steps: detection, response, mitigation, reporting, recovery, remediation, lessons learned"
    },
    {
      "stem": "Which type of disaster recovery test requires shutting down operations at the primary site and shifting them to the recovery site?",
      "options": [
        "Parallel test",
        "Simulation test",
        "Structured walk-through",
        "Full-interruption test"
      ],
      "answer": "D",
      "explanation": "A full-interruption test actually stops primary site operations and runs the business from the recovery site. This makes it the most realistic test and also the most disruptive and risky. A parallel test brings up the recovery site while the primary site keeps running. Walk-throughs and simulations are discussion-based or partial exercises that do not move live operations.",
      "topic": "Security Operations",
      "subtopic": "Test Disaster Recovery Plans (DRP)",
      "difficulty": "easy",
      "source": "CISSP Domain 7 – DRP testing: read-through, walk-through, simulation, parallel, full interruption"
    },
    {
      "stem": "A web application builds SQL statements by concatenating user-supplied form fields into query strings. Which secure coding practice most effectively prevents SQL injection in this code?",
      "options": [
        "Encode output as HTML entities before displaying it",
        "Encrypt the database connection using TLS",
        "Use parameterized queries with bound variables",
        "Run the database under a least-privilege service account"
      ],
      "answer": "C",
      "explanation": "Parameterized queries, also called prepared statements, keep the SQL command structure separate from the data. User input is always treated as a value and never interpreted as SQL code. This removes the root cause of injection, which is mixing untrusted data into executable statements. Least privilege limits the damage from a successful attack but does not prevent it, and TLS and output encoding address other threats.",
      "topic": "Software Development Security",
      "subtopic": "Define and apply secure coding guidelines and standards",
      "difficulty": "easy",
      "source": "CISSP Domain 8 – Secure coding: input validation and parameterized queries (OWASP injection)"
    },
    {
      "stem": "In the Software Capability Maturity Model (SW-CMM) as presented in CISSP study material, at which level does an organization use detailed quantitative measures of its development process and product quality to manage them?",
      "options": [
        "Level 2, Repeatable",
        "Level 4, Managed",
        "Level 3, Defined",
        "Level 5, Optimizing"
      ],
      "answer": "B",
      "explanation": "SW-CMM has five levels: Initial, Repeatable, Defined, Managed and Optimizing. At Level 4 (Managed), the organization collects quantitative measures of its process and product quality and uses them to control development. Level 5 (Optimizing) builds on those measurements to pursue continuous process improvement. Level 3 (Defined) means documented, standardized processes, but they are not yet managed by the numbers.",
      "topic": "Software Development Security",
      "subtopic": "Understand and integrate security in the Software Development Life Cycle (SDLC)",
      "difficulty": "medium",
      "source": "CISSP Domain 8 – Software development maturity models: SW-CMM levels"
    }
  ]
}
```