```json
{
  "format": "domcq/1",
  "exam": "isc2-cc",
  "set": "Certified in Cybersecurity (CC) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A payroll clerk changes an employee's salary figure in the payroll database without authorization. Which security property has been violated most directly?",
      "options": [
        "Availability",
        "Integrity",
        "Confidentiality",
        "Non-repudiation"
      ],
      "answer": "B",
      "explanation": "Integrity means data is accurate, complete and changed only by authorized parties in authorized ways. An unauthorized modification of a record is a direct integrity violation, even if the data was never disclosed (confidentiality) and the system stayed online (availability).",
      "topic": "Security Principles",
      "subtopic": "Understand cybersecurity concepts",
      "difficulty": "easy",
      "source": "ISC2 CC Domain 1: Security Principles – CIA triad (confidentiality, integrity, availability)"
    },
    {
      "stem": "A company buys a cyber insurance policy to cover the financial losses it would suffer from a potential data breach. Which risk treatment is the company applying?",
      "options": [
        "Risk avoidance",
        "Risk acceptance",
        "Risk mitigation",
        "Risk transference"
      ],
      "answer": "D",
      "explanation": "Risk transference shifts the financial impact of a risk to a third party, most commonly through insurance or contracts. The company still faces the possibility of a breach, so the risk is not avoided or reduced; only the cost of the consequences is moved to the insurer.",
      "topic": "Security Principles",
      "subtopic": "Understand risk management concepts",
      "difficulty": "medium",
      "source": "ISC2 CC Domain 1: Risk management – risk treatment (avoid, accept, mitigate, transfer)"
    },
    {
      "stem": "Which type of governance document provides detailed, step-by-step instructions for carrying out a specific task, such as creating a new user account in the directory service?",
      "options": [
        "Procedure",
        "Policy",
        "Guideline",
        "Standard"
      ],
      "answer": "A",
      "explanation": "Procedures are the most detailed governance documents and describe exactly how to perform a task step by step. Policies state high-level management intent, standards set mandatory specific requirements that support policies, and guidelines offer recommended but optional advice.",
      "topic": "Security Principles",
      "subtopic": "Understand governance concepts",
      "difficulty": "medium",
      "source": "ISC2 CC Domain 1: Governance elements – policies, standards, procedures and guidelines"
    },
    {
      "stem": "A legacy production system cannot support multifactor authentication. To reduce the resulting risk, the organization places the system on an isolated network segment and adds enhanced logging and monitoring of all access to it. Which type of control best describes these measures?",
      "options": [
        "Corrective control",
        "Deterrent control",
        "Compensating control",
        "Directive control"
      ],
      "answer": "C",
      "explanation": "A compensating control is an alternative safeguard used when the preferred or required control cannot be implemented, providing a comparable level of protection. Here, segmentation and monitoring are put in place specifically because MFA is not possible, which is the defining feature of a compensating control.",
      "topic": "Security Principles",
      "subtopic": "Understand cybersecurity controls",
      "difficulty": "hard",
      "source": "ISC2 CC Domain 1: Security controls – control types and functions (preventive, detective, corrective, compensating)"
    },
    {
      "stem": "The ISC2 Code of Ethics contains four canons, listed in order of precedence. Which canon is listed first?",
      "options": [
        "Protect society, the common good, necessary public trust and confidence, and the infrastructure",
        "Act honorably, honestly, justly, responsibly, and legally",
        "Provide diligent and competent service to principals",
        "Advance and protect the profession"
      ],
      "answer": "A",
      "explanation": "The first canon of the ISC2 Code of Ethics is to protect society, the common good, necessary public trust and confidence, and the infrastructure. The canons are ordered so that, when obligations conflict, duties to society come before duties to principals and to the profession.",
      "topic": "Security Principles",
      "subtopic": "Maintain professional and ethical conduct",
      "difficulty": "easy",
      "source": "ISC2 Code of Ethics – Preamble and Canons"
    },
    {
      "stem": "In a Governance, Risk, and Compliance (GRC) program, which activity belongs primarily to the compliance element?",
      "options": [
        "Defining who holds authority and accountability for security decisions",
        "Identifying and assessing threats that could affect organizational assets",
        "Verifying that the organization meets applicable legal, regulatory and contractual requirements",
        "Configuring perimeter firewalls to block unauthorized inbound traffic"
      ],
      "answer": "C",
      "explanation": "Compliance is about demonstrating that the organization adheres to external obligations such as laws, regulations and contracts, as well as to its own internal policies. Assigning authority is governance, assessing threats is risk management, and configuring firewalls is an operational control rather than part of the GRC structure itself.",
      "topic": "Security Governance",
      "subtopic": "Plan Governance, Risk, and Compliance (GRC)",
      "difficulty": "medium",
      "source": "ISC2 CC Security Governance – Plan Governance, Risk, and Compliance (GRC)"
    },
    {
      "stem": "A server writes identical copies of all data to two separate disks at the same time, so that it can keep running without data loss if either disk fails. Which redundancy technique is this?",
      "options": [
        "RAID 0 (striping)",
        "RAID 1 (mirroring)",
        "Incremental backup to tape",
        "Load balancing across two web servers"
      ],
      "answer": "B",
      "explanation": "RAID 1 mirrors data, writing the same blocks to two disks so either one can continue serving data if the other fails. RAID 0 stripes data across disks for performance but provides no redundancy, so the failure of any single disk loses data.",
      "topic": "Security Governance",
      "subtopic": "Understand redundancy",
      "difficulty": "easy",
      "source": "ISC2 CC Security Governance – Understand redundancy (RAID levels, fault tolerance)"
    },
    {
      "stem": "A security manager wants an activity that both reinforces employees' phishing awareness training and measures whether their behavior has actually changed. Which approach best meets both goals?",
      "options": [
        "Send a one-time annual training video to all staff and record completion",
        "Publish the acceptable use policy on the company intranet",
        "Display phishing awareness posters in common areas of the office",
        "Run periodic simulated phishing exercises and track click and report rates"
      ],
      "answer": "D",
      "explanation": "Simulated phishing exercises give employees realistic practice and produce measurable results, such as how many people clicked a link versus how many reported the message. Completion records, posters and published policies may raise awareness, but none of them show whether people behave more securely when faced with a real-looking attack.",
      "topic": "Security Governance",
      "subtopic": "Understand security awareness",
      "difficulty": "medium",
      "source": "ISC2 CC Security Governance – Understand security awareness (training, phishing simulation)"
    },
    {
      "stem": "A CISO wants a metric that shows whether the organization's vulnerability management program is becoming more effective over time. Which metric is most suitable?",
      "options": [
        "Number of security tools purchased during the year",
        "Headcount of the vulnerability management team",
        "Mean time to remediate critical vulnerabilities",
        "Number of pages in the vulnerability management policy"
      ],
      "answer": "C",
      "explanation": "Effectiveness metrics should measure outcomes, not inputs. Mean time to remediate critical vulnerabilities directly reflects how quickly the program reduces real exposure, and a falling trend shows improvement, whereas spending, staffing and document length say nothing about results.",
      "topic": "Security Governance",
      "subtopic": "Measure cybersecurity effectiveness",
      "difficulty": "medium",
      "source": "ISC2 CC Security Governance – Measure cybersecurity effectiveness (metrics, KPIs)"
    },
    {
      "stem": "An employee resigns and their last working day is today. From an identity life cycle perspective, what is the most important action to take regarding the employee's accounts?",
      "options": [
        "Disable the account and revoke all access as soon as employment ends",
        "Leave the account active for 90 days in case the employee returns",
        "Reset the password and give the new password to the employee's manager",
        "Move the account's permissions into a shared team account"
      ],
      "answer": "A",
      "explanation": "Deprovisioning is the final stage of the identity life cycle, and access should be removed promptly when someone leaves so the account cannot be misused by the former employee or an attacker. Dormant accounts, shared credentials and shared team accounts all weaken accountability and increase risk.",
      "topic": "Identity And Access Management (IAM) Concepts",
      "subtopic": "Understand identity life cycle management",
      "difficulty": "easy",
      "source": "ISC2 CC IAM Concepts – Identity life cycle: provisioning, review and deprovisioning"
    },
    {
      "stem": "In which access control model does the owner of a resource, such as the creator of a file, decide which other users may access it and with what permissions?",
      "options": [
        "Mandatory access control (MAC)",
        "Role-based access control (RBAC)",
        "Rule-based access control",
        "Discretionary access control (DAC)"
      ],
      "answer": "D",
      "explanation": "Discretionary access control leaves access decisions to the discretion of the resource owner, which is how most desktop file systems work by default. In mandatory access control the system enforces access based on labels and clearances that users cannot change, and in role-based access control permissions come from job roles defined by the organization.",
      "topic": "Identity And Access Management (IAM) Concepts",
      "subtopic": "Understand logical access controls",
      "difficulty": "easy",
      "source": "ISC2 CC IAM Concepts – Logical access controls: DAC, MAC and RBAC"
    },
    {
      "stem": "Over five years, an employee has transferred between three departments and still holds the access rights that were granted for each previous role. What is this problem, and which control most directly addresses it?",
      "options": [
        "Separation of duties violation, addressed by job rotation",
        "Privilege creep, addressed by periodic access reviews",
        "Account sharing, addressed by multifactor authentication",
        "Privilege escalation, addressed by patching the system"
      ],
      "answer": "B",
      "explanation": "Privilege creep is the gradual accumulation of access rights as people change roles without old permissions being removed, which violates least privilege. Periodic access reviews (recertification) by managers or resource owners catch and remove access that is no longer needed. Privilege escalation, by contrast, is an attacker exploiting a flaw to gain higher rights.",
      "topic": "Identity And Access Management (IAM) Concepts",
      "subtopic": "Understand identity life cycle management",
      "difficulty": "hard",
      "source": "ISC2 CC IAM Concepts – Least privilege, privilege creep and access reviews"
    },
    {
      "stem": "Which of the following authentication methods qualifies as true multifactor authentication?",
      "options": [
        "A password plus a one-time code from a hardware token",
        "A password plus a separately memorized PIN",
        "A fingerprint scan plus a facial recognition scan",
        "A smart card plus a proximity badge"
      ],
      "answer": "A",
      "explanation": "Multifactor authentication requires factors from different categories: something you know, something you have and something you are. A password (know) combined with a hardware token code (have) uses two categories, while the other pairs each use two factors from the same category and are therefore single-factor, even though two items are checked.",
      "topic": "Identity And Access Management (IAM) Concepts",
      "subtopic": "Understand logical access controls",
      "difficulty": "medium",
      "source": "ISC2 CC IAM Concepts – Authentication factors and multifactor authentication"
    },
    {
      "stem": "A network administrator wants to replace Telnet with a protocol that encrypts remote command-line administration sessions, including the login credentials. Which protocol and default port should the administrator use?",
      "options": [
        "FTP over TCP port 21",
        "HTTPS over TCP port 443",
        "SSH over TCP port 22",
        "SNMP over UDP port 161"
      ],
      "answer": "C",
      "explanation": "Secure Shell (SSH) provides encrypted remote command-line access and uses TCP port 22 by default. Telnet sends everything, including passwords, in cleartext, which is why SSH is its standard secure replacement; FTP is for file transfer, HTTPS for web traffic and SNMP for network device management.",
      "topic": "Networking and Cloud Security Concepts",
      "subtopic": "Understand network security",
      "difficulty": "easy",
      "source": "ISC2 CC Networking – Common ports and protocols; secure alternatives to insecure protocols"
    },
    {
      "stem": "An attacker sends a large volume of TCP connection requests to a server but never completes the three-way handshake, leaving the server holding many half-open connections until it cannot accept legitimate ones. Which attack is this?",
      "options": [
        "Smurf attack",
        "On-path (man-in-the-middle) attack",
        "DNS cache poisoning",
        "SYN flood"
      ],
      "answer": "D",
      "explanation": "A SYN flood abuses the TCP handshake: the attacker sends SYN packets, the server replies with SYN-ACK and reserves resources, but the final ACK never arrives. The server's connection table fills with half-open sessions, denying service to legitimate users. A Smurf attack, by contrast, uses ICMP echo requests sent to broadcast addresses.",
      "topic": "Networking and Cloud Security Concepts",
      "subtopic": "Understand network security",
      "difficulty": "medium",
      "source": "ISC2 CC Networking – Network threats and attacks: denial of service, TCP three-way handshake"
    },
    {
      "stem": "A company hosts a public-facing web server that must be reachable from the internet, but it wants to limit the damage to internal systems if that server is compromised. Where should the web server be placed?",
      "options": [
        "On the internal LAN alongside the file servers",
        "In a screened subnet (DMZ) between the internet and the internal network",
        "On the same VLAN as the employee workstations",
        "Directly behind the internal network's core switch"
      ],
      "answer": "B",
      "explanation": "A screened subnet, often called a DMZ, is a separate network segment for systems that must accept connections from untrusted networks. Firewall rules allow internet users to reach the server while tightly restricting traffic from the DMZ into the internal network, so a compromised web server does not give an attacker direct access to internal assets.",
      "topic": "Networking and Cloud Security Concepts",
      "subtopic": "Understand network security architecture",
      "difficulty": "medium",
      "source": "ISC2 CC Networking – Network security architecture: segmentation, DMZ (screened subnet)"
    },
    {
      "stem": "A company runs its own virtual machines on an Infrastructure as a Service (IaaS) cloud platform. Under the shared responsibility model, who is responsible for applying security patches to the guest operating systems on those virtual machines?",
      "options": [
        "The cloud provider, because it owns the physical host servers",
        "The hypervisor vendor, because it supplies the virtualization layer",
        "The cloud customer, because it manages the operating system",
        "The internet service provider, because it carries the traffic"
      ],
      "answer": "C",
      "explanation": "In IaaS the provider secures the physical facilities, hardware, network and virtualization layer, while the customer is responsible for everything it installs on top, including the guest operating system, applications and data. The customer's share of responsibility shrinks as you move to PaaS and SaaS, where the provider also manages the operating system.",
      "topic": "Networking and Cloud Security Concepts",
      "subtopic": "Understand cloud security",
      "difficulty": "hard",
      "source": "ISC2 CC Cloud Security – Service models (IaaS, PaaS, SaaS) and the shared responsibility model"
    },
    {
      "stem": "An organization is retiring a batch of solid-state drives (SSDs) that held confidential data. The drives will not be reused or resold. Which sanitization method most reliably ensures the data cannot be recovered?",
      "options": [
        "Physically shred or disintegrate the drives",
        "Degauss the drives with a high-strength degausser",
        "Perform a single quick format of each drive",
        "Overwrite the free space using a file-wiping utility"
      ],
      "answer": "A",
      "explanation": "Physical destruction such as shredding or disintegration is the most reliable way to sanitize media that will not be reused. Degaussing only works on magnetic media and has no effect on the flash memory in SSDs, and because SSD wear leveling remaps blocks, overwriting from the operating system may miss copies of data. A quick format merely removes file system references.",
      "topic": "Security Operations and Incident Response",
      "subtopic": "Understand data security",
      "difficulty": "hard",
      "source": "ISC2 CC Security Operations – Data handling and destruction; NIST SP 800-88 media sanitization"
    },
    {
      "stem": "During a security incident, an analyst disconnects an infected workstation from the network to stop malware from spreading to other systems. The malware has not yet been removed from the workstation. Which incident response activity is the analyst performing?",
      "options": [
        "Preparation",
        "Eradication",
        "Post-incident activity",
        "Containment"
      ],
      "answer": "D",
      "explanation": "Containment limits the scope and impact of an incident by stopping it from spreading, for example by isolating affected hosts. Eradication comes afterward and removes the root cause, such as the malware itself, before systems are restored during recovery.",
      "topic": "Security Operations and Incident Response",
      "subtopic": "Understand Incident Response (IR)",
      "difficulty": "medium",
      "source": "ISC2 CC Incident Response – IR phases: containment, eradication and recovery"
    },
    {
      "stem": "What most clearly distinguishes a penetration test from a vulnerability scan?",
      "options": [
        "It is always performed without the knowledge of the IT staff",
        "It actively attempts to exploit weaknesses to show real impact",
        "It only checks systems for missing patches and misconfigurations",
        "It runs continuously using automated tools without human input"
      ],
      "answer": "B",
      "explanation": "A vulnerability scan identifies and reports potential weaknesses, usually with automated tools, while a penetration test goes further by attempting to exploit those weaknesses to demonstrate what an attacker could actually achieve. Penetration tests are performed with authorization and may be announced or unannounced, so secrecy is not their defining feature.",
      "topic": "Security Operations and Incident Response",
      "subtopic": "Understand security testing",
      "difficulty": "medium",
      "source": "ISC2 CC Security Operations – Understand security testing: vulnerability scanning vs penetration testing"
    }
  ]
}
```
