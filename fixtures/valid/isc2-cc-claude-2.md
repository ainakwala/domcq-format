```json
{
  "format": "domcq/1",
  "exam": "isc2-cc",
  "set": "Certified in Cybersecurity (CC) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "An attacker floods a company's public web server with so much traffic that legitimate customers can no longer reach the site. Which element of the CIA triad is primarily affected?",
      "options": [
        "Confidentiality",
        "Availability",
        "Integrity",
        "Non-repudiation"
      ],
      "answer": "B",
      "explanation": "Availability means authorized users can access systems and data when they need them. A denial-of-service flood does not read or change data; it stops legitimate users from reaching the service. Non-repudiation is a related security concept but is not part of the CIA triad.",
      "topic": "Security Principles",
      "subtopic": "Understand cybersecurity concepts",
      "difficulty": "easy",
      "source": "ISC2 CC exam outline – Security Principles: Understand cybersecurity concepts (confidentiality, integrity, availability)"
    },
    {
      "stem": "A company buys a cyber insurance policy so that the financial losses from a potential data breach would be paid by the insurer. Which risk treatment option has the company chosen?",
      "options": [
        "Risk acceptance",
        "Risk avoidance",
        "Risk mitigation",
        "Risk transference"
      ],
      "answer": "D",
      "explanation": "Risk transference shifts the financial impact of a risk to another party, most commonly through insurance or a contract. The breach could still happen, so the risk is not avoided or reduced in likelihood; only who bears the cost changes. Acceptance would mean taking no action and absorbing the loss.",
      "topic": "Security Principles",
      "subtopic": "Understand risk management concepts",
      "difficulty": "medium",
      "source": "ISC2 CC exam outline – Security Principles: Understand risk management concepts (risk treatment)"
    },
    {
      "stem": "The help desk keeps a document that lists, in order, each action a technician must take to verify a caller's identity and reset their password. Which type of governance document is this?",
      "options": [
        "Procedure",
        "Policy",
        "Guideline",
        "Standard"
      ],
      "answer": "A",
      "explanation": "Procedures are detailed, step-by-step instructions for carrying out a specific task. Policies state high-level management intent, standards set mandatory specific requirements such as a minimum password length, and guidelines are recommendations that are not mandatory. A sequenced list of actions for one task is a procedure.",
      "topic": "Security Principles",
      "subtopic": "Understand governance concepts",
      "difficulty": "medium",
      "source": "ISC2 CC exam outline – Security Principles: Understand governance concepts (policies, procedures, standards, guidelines)"
    },
    {
      "stem": "A security policy requires all servers to receive vendor security patches, but one legacy server runs software whose vendor no longer issues patches. Instead, the organization places the server on an isolated network segment with strict firewall rules. In relation to the unmet patching requirement, what kind of control is the segmentation?",
      "options": [
        "Corrective control",
        "Detective control",
        "Compensating control",
        "Deterrent control"
      ],
      "answer": "C",
      "explanation": "A compensating control is an alternative measure used when the primary required control cannot be implemented, providing a comparable reduction in risk. Here patching is impossible, so isolation is used to limit exposure instead. It does not fix damage after an event (corrective), identify events (detective) or discourage attackers psychologically (deterrent).",
      "topic": "Security Principles",
      "subtopic": "Understand cybersecurity controls",
      "difficulty": "hard",
      "source": "ISC2 CC exam outline – Security Principles: Understand cybersecurity controls (control functions, compensating controls)"
    },
    {
      "stem": "The ISC2 Code of Ethics contains four canons that are listed in order of priority. Which canon is listed first?",
      "options": [
        "Protect society, the common good, and the infrastructure",
        "Act honorably, honestly, justly, responsibly, and legally",
        "Provide diligent and competent service to principals",
        "Advance and protect the profession"
      ],
      "answer": "A",
      "explanation": "The first canon is to protect society, the common good, necessary public trust and confidence, and the infrastructure. The canons are ordered so that, when they conflict, duties to society come before duties to individuals, principals and the profession. Members are expected to resolve ethical conflicts using this order.",
      "topic": "Security Principles",
      "subtopic": "Maintain professional and ethical conduct",
      "difficulty": "easy",
      "source": "ISC2 Code of Ethics – Code of Ethics Canons"
    },
    {
      "stem": "Which of the following is an industry standard, enforced through contracts with the card brands rather than by law, that applies to organizations that store, process or transmit payment card data?",
      "options": [
        "HIPAA",
        "GDPR",
        "PCI DSS",
        "SOX"
      ],
      "answer": "C",
      "explanation": "The Payment Card Industry Data Security Standard is created by the PCI Security Standards Council and is enforced contractually by the card brands and acquiring banks. HIPAA and SOX are US laws, and GDPR is an EU regulation with legal force. Knowing whether a requirement comes from law, regulation or an industry standard matters for compliance planning.",
      "topic": "Security Governance",
      "subtopic": "Plan Governance, Risk, and Compliance (GRC)",
      "difficulty": "medium",
      "source": "PCI Security Standards Council – PCI DSS; ISC2 CC outline: laws, regulations and standards"
    },
    {
      "stem": "A small server has two identical disks. The administrator wants every write copied to both disks so that the server keeps running with no data loss if either disk fails. Which RAID level provides this?",
      "options": [
        "RAID 0",
        "RAID 1",
        "RAID 5",
        "RAID 6"
      ],
      "answer": "B",
      "explanation": "RAID 1 is disk mirroring: identical data is written to two disks, so either one can fail without data loss. RAID 0 stripes data with no redundancy, while RAID 5 and RAID 6 use parity and need at least three and four disks respectively. Mirroring is a simple form of redundancy that removes a single disk as a single point of failure.",
      "topic": "Security Governance",
      "subtopic": "Understand redundancy",
      "difficulty": "easy",
      "source": "ISC2 CC exam outline – Understand redundancy (RAID, avoiding single points of failure)"
    },
    {
      "stem": "After annual security awareness training, a security team wants evidence of whether employees actually apply what they learned when a suspicious email arrives in their inbox. Which activity best provides this evidence?",
      "options": [
        "Running an authenticated vulnerability scan of all workstations",
        "Commissioning a penetration test of the public website",
        "Reviewing a month of perimeter firewall logs",
        "Sending a controlled, simulated phishing email campaign"
      ],
      "answer": "D",
      "explanation": "A simulated phishing campaign tests real user behavior, showing who clicks, who enters credentials and who reports the message. It measures the human element that awareness training targets. Vulnerability scans, website penetration tests and firewall log reviews assess technical weaknesses, not how employees respond to social engineering.",
      "topic": "Security Governance",
      "subtopic": "Understand security awareness",
      "difficulty": "medium",
      "source": "ISC2 CC exam outline – Understand security awareness (phishing, social engineering, training)"
    },
    {
      "stem": "A CISO wants a metric that warns leadership when the organization's exposure to a specific risk is rising, so action can be taken before a loss actually occurs. Which type of metric best fits this purpose?",
      "options": [
        "Key performance indicator (KPI)",
        "Service level agreement (SLA)",
        "Key risk indicator (KRI)",
        "Return on security investment (ROSI)"
      ],
      "answer": "C",
      "explanation": "A key risk indicator is a forward-looking measure that signals increasing risk exposure, such as a growing number of unpatched critical systems, and typically has thresholds that trigger escalation. A KPI measures how well a process is performing against its goals rather than warning of risk. An SLA is a contractual service commitment and ROSI evaluates the value of security spending.",
      "topic": "Security Governance",
      "subtopic": "Measure cybersecurity effectiveness",
      "difficulty": "hard",
      "source": "ISC2 CC exam outline – Measure cybersecurity effectiveness (security metrics, KPIs and KRIs)"
    },
    {
      "stem": "An employee transfers from the finance department to the marketing department. According to good identity life cycle management, what should happen to the access rights the employee held in finance?",
      "options": [
        "They should be removed when access is reprovisioned for the new role",
        "They should be kept in case the employee helps former colleagues",
        "They should be left active until the next annual access review",
        "They should be moved to the account of the employee's new manager"
      ],
      "answer": "A",
      "explanation": "When a user changes roles, access that is no longer needed must be removed and new access granted for the new role. Keeping old rights leads to privilege creep, where users accumulate permissions beyond what their job requires, violating least privilege. Periodic access reviews help catch mistakes but should not replace prompt changes at transfer time.",
      "topic": "Identity And Access Management (IAM) Concepts",
      "subtopic": "Understand identity life cycle management",
      "difficulty": "medium",
      "source": "ISC2 CC exam outline – IAM: Understand identity life cycle management (provisioning, transfers, privilege creep)"
    },
    {
      "stem": "Which of the following is an example of the something you are authentication factor?",
      "options": [
        "A smart card inserted into a reader",
        "A PIN typed on a keypad",
        "A one-time code from an authenticator app",
        "A fingerprint read by a scanner"
      ],
      "answer": "D",
      "explanation": "Something you are refers to biometric characteristics such as fingerprints, facial features or iris patterns. A smart card and an authenticator app code are something you have, because they depend on possessing a device. A PIN is something you know.",
      "topic": "Identity And Access Management (IAM) Concepts",
      "subtopic": "Understand logical access controls",
      "difficulty": "easy",
      "source": "ISC2 CC exam outline – IAM: authentication factors (knowledge, possession, inherence)"
    },
    {
      "stem": "On a company file server, the employee who creates a document can personally choose which colleagues may read it or edit it. Which access control model does this describe?",
      "options": [
        "Mandatory access control (MAC)",
        "Discretionary access control (DAC)",
        "Role-based access control (RBAC)",
        "Attribute-based access control (ABAC)"
      ],
      "answer": "B",
      "explanation": "In discretionary access control, the owner of an object decides who is granted access to it. In MAC, a central authority sets access based on labels and clearances that users cannot change. RBAC grants access based on job roles, and ABAC evaluates attributes of the user, resource and environment against policies.",
      "topic": "Identity And Access Management (IAM) Concepts",
      "subtopic": "Understand logical access controls",
      "difficulty": "medium",
      "source": "ISC2 CC exam outline – IAM: Understand logical access controls (DAC, MAC, RBAC)"
    },
    {
      "stem": "To reduce the risk of fraud, a company configures its payment system so that the employee who adds a new vendor record cannot also approve payments to that vendor. Which security principle is being applied?",
      "options": [
        "Separation of duties",
        "Least privilege",
        "Need to know",
        "Defense in depth"
      ],
      "answer": "A",
      "explanation": "Separation of duties splits a sensitive process into parts performed by different people, so no single person can complete a fraudulent transaction alone. Committing fraud would then require collusion between two or more people. Least privilege limits each user to the minimum rights for their job, but it is the deliberate splitting of one task between people that defines separation of duties.",
      "topic": "Identity And Access Management (IAM) Concepts",
      "subtopic": "Understand logical access controls",
      "difficulty": "medium",
      "source": "ISC2 CC exam outline – IAM: Understand logical access controls (separation of duties, least privilege)"
    },
    {
      "stem": "A web server becomes unresponsive during an attack. Analysis shows its connection table is full of half-open TCP connections from spoofed source addresses. Which attack technique is the most likely cause?",
      "options": [
        "Sending oversized ICMP echo requests that crash the target when reassembled",
        "Sending forged ARP replies that map the gateway IP address to the attacker's MAC",
        "Sending many SYN requests and never returning the final ACK of the handshake",
        "Sending spoofed DNS responses that redirect clients to a malicious server"
      ],
      "answer": "C",
      "explanation": "A SYN flood abuses the TCP three-way handshake: the attacker sends SYN packets, the server replies with SYN-ACK and reserves resources, but the final ACK never arrives. The half-open connections fill the server's queue so legitimate clients cannot connect. Ping of death, ARP poisoning and DNS spoofing work differently and do not leave half-open TCP connections.",
      "topic": "Networking and Cloud Security Concepts",
      "subtopic": "Understand network security",
      "difficulty": "hard",
      "source": "ISC2 CC exam outline – Understand network security (TCP handshake, network threats and attacks such as DoS)"
    },
    {
      "stem": "An organization needs a public web server that customers can reach from the internet, while keeping it separated from the internal network where employee workstations and databases reside. Where should the server be placed?",
      "options": [
        "On the internal LAN alongside employee workstations",
        "On the same VLAN as the internal database servers",
        "Behind the internal firewall in the data center core",
        "In a screened subnet, also known as a DMZ"
      ],
      "answer": "D",
      "explanation": "A screened subnet (DMZ) is a network segment between the internet and the internal network, with firewall rules that allow public access to specific services while restricting traffic to the internal network. If a server in the DMZ is compromised, the attacker still faces another barrier before reaching internal systems. Placing public servers on internal segments exposes the internal network directly.",
      "topic": "Networking and Cloud Security Concepts",
      "subtopic": "Understand network security architecture",
      "difficulty": "easy",
      "source": "ISC2 CC exam outline – Understand network security architecture (DMZ/screened subnet, segmentation)"
    },
    {
      "stem": "A company runs its applications on virtual machines rented from an Infrastructure as a Service (IaaS) provider. Under the shared responsibility model, who is normally responsible for patching the operating systems installed on those virtual machines?",
      "options": [
        "The cloud service provider",
        "The cloud customer",
        "The cloud broker",
        "The cloud auditor"
      ],
      "answer": "B",
      "explanation": "In IaaS, the provider secures the physical facilities, hardware and virtualization layer, while the customer is responsible for the guest operating system, applications and data. As the service model moves toward PaaS and SaaS, more of these responsibilities shift to the provider. A broker and an auditor are separate cloud roles that do not operate the customer's systems.",
      "topic": "Networking and Cloud Security Concepts",
      "subtopic": "Understand cloud security",
      "difficulty": "medium",
      "source": "ISC2 CC exam outline – Understand cloud security (service models, shared responsibility); NIST SP 800-145"
    },
    {
      "stem": "Several government agencies with similar missions, security requirements and compliance obligations jointly use a cloud infrastructure that is closed to the general public. Which cloud deployment model is this?",
      "options": [
        "Public cloud",
        "Private cloud",
        "Community cloud",
        "Hybrid cloud"
      ],
      "answer": "C",
      "explanation": "A community cloud is shared by a specific group of organizations with common concerns such as mission, security or compliance requirements. A private cloud serves a single organization, a public cloud is open to the general public, and a hybrid cloud combines two or more distinct deployment models.",
      "topic": "Networking and Cloud Security Concepts",
      "subtopic": "Understand cloud security",
      "difficulty": "medium",
      "source": "NIST SP 800-145, The NIST Definition of Cloud Computing – Deployment models"
    },
    {
      "stem": "A software vendor publishes a fixed-length value next to its installer download so that users can confirm the file was not altered in transit. Which technique is used to produce this value?",
      "options": [
        "Hashing with an algorithm such as SHA-256",
        "Symmetric encryption with an algorithm such as AES",
        "Encoding with a scheme such as Base64",
        "Data masking that replaces characters with symbols"
      ],
      "answer": "A",
      "explanation": "A cryptographic hash function produces a fixed-length digest, and any change to the file produces a different digest, so comparing values verifies integrity. Hashing is one-way and is not meant to be reversed. Encryption protects confidentiality, encoding only changes data representation, and masking hides data from view; none of them is designed to prove a file is unchanged.",
      "topic": "Security Operations and Incident Response",
      "subtopic": "Understand data security",
      "difficulty": "easy",
      "source": "ISC2 CC exam outline – Understand data security (cryptography, hashing, integrity)"
    },
    {
      "stem": "During a malware outbreak, the incident response team disconnects an infected laptop from the network to stop the malware spreading to other systems, before removing the malware. Which incident response activity does disconnecting the laptop belong to?",
      "options": [
        "Preparation",
        "Detection and analysis",
        "Post-incident activity",
        "Containment"
      ],
      "answer": "D",
      "explanation": "Containment limits the scope and damage of an incident, for example by isolating affected systems so the threat cannot spread. It comes after detection and analysis and before eradication, which removes the malware, and recovery, which restores normal operations. Preparation happens before incidents and post-incident activity covers lessons learned.",
      "topic": "Security Operations and Incident Response",
      "subtopic": "Understand Incident Response (IR)",
      "difficulty": "medium",
      "source": "ISC2 CC exam outline – Understand Incident Response; NIST SP 800-61 Rev. 2 incident response life cycle"
    },
    {
      "stem": "A company is retiring a laptop whose solid-state drive (SSD) held confidential customer data. The drive will not be reused. Which method most reliably ensures the data cannot be recovered?",
      "options": [
        "Degaussing the drive with a strong magnetic field",
        "Physically destroying it by shredding or disintegration",
        "Overwriting all visible sectors once with zeros",
        "Deleting the partitions and performing a quick format"
      ],
      "answer": "B",
      "explanation": "Physical destruction such as shredding or disintegration gives the highest assurance that data on an SSD cannot be recovered when the media will not be reused. SSDs store data in flash memory, so degaussing has no effect, and wear leveling means overwriting visible sectors may miss remapped blocks. A quick format only removes file system references and leaves the data in place.",
      "topic": "Security Operations and Incident Response",
      "subtopic": "Understand asset protection",
      "difficulty": "hard",
      "source": "NIST SP 800-88, Guidelines for Media Sanitization (clear, purge, destroy); ISC2 CC data handling and disposal"
    }
  ]
}
```
