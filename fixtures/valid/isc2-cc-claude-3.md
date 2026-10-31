```json
{
  "format": "domcq/1",
  "exam": "isc2-cc",
  "set": "Certified in Cybersecurity (CC) practice – Core concepts mixed set",
  "questions": [
    {
      "stem": "A payroll clerk who is authorized to view salary records uses a flaw in the payroll application to change several employees' salary amounts without approval. Which security principle has been most directly compromised?",
      "options": [
        "Confidentiality",
        "Integrity",
        "Availability",
        "Non-repudiation"
      ],
      "answer": "B",
      "explanation": "Integrity means data is accurate and complete and is changed only by authorized people through authorized processes. The clerk was allowed to view the records, so confidentiality was not breached, and the system stayed available. The unapproved change to the salary data is a direct loss of integrity.",
      "topic": "Security Principles",
      "subtopic": "Understand cybersecurity concepts",
      "difficulty": "easy",
      "source": "ISC2 CC exam outline – Security Principles: CIA triad (confidentiality, integrity, availability)"
    },
    {
      "stem": "A company determines that a data breach could cause major financial losses. Instead of paying for additional security controls, it buys a cyber insurance policy that covers breach-related costs. Which risk treatment has the company chosen?",
      "options": [
        "Risk acceptance",
        "Risk avoidance",
        "Risk mitigation",
        "Risk transference"
      ],
      "answer": "D",
      "explanation": "Risk transference shifts the financial impact of a risk to a third party, most often through insurance or a contract. The risk itself has not been reduced, avoided or simply accepted; someone else now pays if it happens. The organization still remains accountable for protecting its data, and reputational harm cannot be transferred.",
      "topic": "Security Principles",
      "subtopic": "Understand risk management concepts",
      "difficulty": "medium",
      "source": "ISC2 CC exam outline – Security Principles: risk management process and risk treatment options"
    },
    {
      "stem": "An organization has a document that lists the exact, step-by-step actions help desk staff must follow to verify a caller's identity before resetting their password. Which type of governance document is this?",
      "options": [
        "Procedure",
        "Policy",
        "Standard",
        "Guideline"
      ],
      "answer": "A",
      "explanation": "Procedures give detailed, step-by-step instructions for carrying out a specific task. Policies state management's high-level intent, standards set specific mandatory requirements (such as a minimum password length), and guidelines offer recommended, non-mandatory advice. A help desk checklist of exact actions is a procedure.",
      "topic": "Security Principles",
      "subtopic": "Understand governance concepts",
      "difficulty": "medium",
      "source": "ISC2 CC exam outline – Security Principles: governance elements (policies, standards, procedures, guidelines)"
    },
    {
      "stem": "Which of the following is an example of a technical (logical) security control?",
      "options": [
        "A security guard posted at the building entrance",
        "An acceptable use policy signed by employees",
        "A firewall rule that blocks inbound Telnet traffic",
        "A background check performed on new hires"
      ],
      "answer": "C",
      "explanation": "Technical (logical) controls are enforced by hardware or software, such as firewalls, access control lists and encryption. A security guard is a physical control, while an acceptable use policy and a background check are administrative controls, because they rely on management direction and people following processes.",
      "topic": "Security Principles",
      "subtopic": "Understand cybersecurity controls",
      "difficulty": "easy",
      "source": "ISC2 CC exam outline – Security Principles: security controls (technical, administrative, physical)"
    },
    {
      "stem": "An ISC2 member's client tells them to keep quiet about a serious vulnerability in a product widely used in public infrastructure, even though staying silent puts the public at risk. When the canons of the ISC2 Code of Ethics conflict, as they do here, which canon takes precedence?",
      "options": [
        "Protect society, the common good, necessary public trust and confidence, and the infrastructure",
        "Act honorably, honestly, justly, responsibly, and legally",
        "Provide diligent and competent service to principals",
        "Advance and protect the profession"
      ],
      "answer": "A",
      "explanation": "The four canons of the ISC2 Code of Ethics are listed in order of priority, and conflicts between them are resolved in that order. Protecting society, the common good and the infrastructure comes first, ahead of duties to principals such as clients or employers. A member therefore cannot put a client's wishes above serious risk to the public.",
      "topic": "Security Principles",
      "subtopic": "Maintain professional and ethical conduct",
      "difficulty": "hard",
      "source": "ISC2 Code of Ethics – Preamble and Canons"
    },
    {
      "stem": "Which type of alternate processing site is fully equipped with hardware, software, network connectivity and current data, so that operations can resume within minutes to hours after a disaster?",
      "options": [
        "Cold site",
        "Warm site",
        "Hot site",
        "Mobile site"
      ],
      "answer": "C",
      "explanation": "A hot site is a ready-to-run duplicate of the primary facility, with systems and up-to-date data in place, so it supports the shortest recovery times. A warm site has some equipment but needs configuration and data restoration, and a cold site provides little more than space and utilities. The faster recovery of a hot site comes at the highest cost.",
      "topic": "Security Governance",
      "subtopic": "Understand redundancy",
      "difficulty": "easy",
      "source": "ISC2 CC – Business continuity and disaster recovery: alternate sites (hot, warm, cold)"
    },
    {
      "stem": "After a phishing incident, a company wants to reduce the number of employees who click on malicious links in email, without disrupting normal business email. Which approach is most effective over the long term?",
      "options": [
        "Sending a single company-wide email warning about the incident",
        "Requiring all employees to change their passwords every 30 days",
        "Removing every hyperlink from incoming external email messages",
        "Running ongoing awareness training reinforced by simulated phishing"
      ],
      "answer": "D",
      "explanation": "Lasting behavior change comes from security awareness that is repeated and reinforced, not from a one-off warning. Simulated phishing exercises let employees practise spotting real-looking lures and give the organization data on whether click rates are falling. Password changes do not stop clicking, and stripping all links would disrupt legitimate business email.",
      "topic": "Security Governance",
      "subtopic": "Understand security awareness",
      "difficulty": "medium",
      "source": "ISC2 CC – Security awareness training: purpose, phishing awareness and reinforcement"
    },
    {
      "stem": "A security manager needs a metric that shows whether the organization's patch management process is actually working. Which metric is most useful for this purpose?",
      "options": [
        "Number of patches released by vendors this month",
        "Percentage of critical patches applied within the required timeframe",
        "Total number of servers and workstations in the asset inventory",
        "Amount of budget spent on patch management tools this year"
      ],
      "answer": "B",
      "explanation": "A useful effectiveness metric measures the outcome of the process against a defined target. The share of critical patches applied within the required timeframe shows directly whether systems are being fixed fast enough. Vendor release counts, inventory size and spending describe inputs or context, not whether the process achieves its goal.",
      "topic": "Security Governance",
      "subtopic": "Measure cybersecurity effectiveness",
      "difficulty": "medium",
      "source": "ISC2 CC – Measuring security effectiveness: metrics and key performance indicators"
    },
    {
      "stem": "Within an organization, who holds ultimate accountability for the protection of its information assets?",
      "options": [
        "Senior management",
        "Security analysts",
        "System administrators",
        "External auditors"
      ],
      "answer": "A",
      "explanation": "Senior management, including the board, sets direction and is ultimately accountable for protecting the organization's assets. Day-to-day responsibility can be delegated to analysts and administrators, but accountability cannot be delegated. External auditors give independent assurance; they do not own the organization's risk.",
      "topic": "Security Governance",
      "subtopic": "Plan Governance, Risk, and Compliance (GRC)",
      "difficulty": "medium",
      "source": "ISC2 CC – Governance: roles and responsibilities, accountability of senior management"
    },
    {
      "stem": "To log in to the company VPN, a user enters a password and then a six-digit code generated by an authenticator app on their smartphone. Which combination of authentication factor types is being used?",
      "options": [
        "Something you know and something you are",
        "Something you have and something you are",
        "Something you know and somewhere you are",
        "Something you know and something you have"
      ],
      "answer": "D",
      "explanation": "The password is knowledge, so it is something you know. The code comes from an app on a device the user possesses, so it proves something you have. Combining two different factor types is what makes this true multi-factor authentication; two passwords would be only one factor type.",
      "topic": "Identity And Access Management (IAM) Concepts",
      "subtopic": "Understand logical access controls",
      "difficulty": "easy",
      "source": "ISC2 CC – Access controls: authentication factors and multi-factor authentication (MFA)"
    },
    {
      "stem": "Over six years, an employee has transferred between three departments and still holds the access rights from every previous role. Which practice would best detect and correct this problem?",
      "options": [
        "Enforcing longer and more complex passwords",
        "Locking accounts after several failed logins",
        "Conducting periodic user access reviews",
        "Deploying single sign-on across all systems"
      ],
      "answer": "C",
      "explanation": "Accumulating rights from old roles is called privilege creep, and it happens when access is added on a transfer but never removed. Periodic access reviews, where managers or system owners recertify each user's rights, catch permissions that are no longer needed so they can be revoked. Password rules, lockouts and single sign-on control how users log in, not what they are allowed to reach.",
      "topic": "Identity And Access Management (IAM) Concepts",
      "subtopic": "Understand identity life cycle management",
      "difficulty": "medium",
      "source": "ISC2 CC – Identity life cycle: provisioning, transfers, access reviews and privilege creep"
    },
    {
      "stem": "In an organization, permissions are assigned to job functions such as \"Accounts Clerk\" or \"HR Specialist\", and employees receive permissions only by being assigned to one of these functions. Which access control model is this?",
      "options": [
        "Discretionary access control (DAC)",
        "Role-based access control (RBAC)",
        "Mandatory access control (MAC)",
        "Rule-based access control"
      ],
      "answer": "B",
      "explanation": "In role-based access control, permissions are attached to roles that reflect job functions, and users gain access by being assigned to roles. This makes administration simpler, because changing a user's job means changing their role rather than many individual permissions. DAC lets resource owners grant access at their discretion, and MAC relies on system-enforced security labels.",
      "topic": "Identity And Access Management (IAM) Concepts",
      "subtopic": "Understand logical access controls",
      "difficulty": "medium",
      "source": "ISC2 CC – Logical access controls: DAC, MAC and RBAC"
    },
    {
      "stem": "An accounts payable clerk's job description legitimately includes both adding new vendors to the payment system and approving payments to vendors. An auditor flags this as a weakness because one person could create a fake vendor and then pay it. Which security principle does this arrangement violate?",
      "options": [
        "Separation of duties",
        "Least privilege",
        "Need to know",
        "Defense in depth"
      ],
      "answer": "A",
      "explanation": "Separation of duties splits a sensitive process so that no single person can complete it alone, which forces collusion for fraud to succeed. Least privilege is not the issue here, because the clerk's job genuinely requires both permissions; the problem is that the job itself combines conflicting tasks. The fix is to assign vendor creation and payment approval to different people.",
      "topic": "Identity And Access Management (IAM) Concepts",
      "subtopic": "Understand logical access controls",
      "difficulty": "hard",
      "source": "ISC2 CC – Access control principles: separation of duties versus least privilege"
    },
    {
      "stem": "Which TCP port is used by default for HTTPS traffic?",
      "options": [
        "80",
        "443",
        "22",
        "3389"
      ],
      "answer": "B",
      "explanation": "HTTPS, which is HTTP protected by TLS, uses TCP port 443 by default. Port 80 carries unencrypted HTTP, port 22 is used by SSH, and port 3389 is used by Remote Desktop Protocol. Knowing common ports helps when writing firewall rules and reviewing traffic.",
      "topic": "Networking and Cloud Security Concepts",
      "subtopic": "Understand network security",
      "difficulty": "easy",
      "source": "ISC2 CC – Networking: ports and protocols (secure versus insecure protocols)"
    },
    {
      "stem": "A company is deploying a public web server that must be reachable from the internet, while keeping it separated from the company's internal systems. Where should the server be placed?",
      "options": [
        "On the internal user network",
        "On the database server segment",
        "On the management network",
        "In a screened subnet (DMZ)"
      ],
      "answer": "D",
      "explanation": "A screened subnet, also called a DMZ, is a network segment between the internet and the internal network, with firewall rules controlling traffic in both directions. Internet users can reach the public server there, but if it is compromised the attacker still faces another barrier before reaching internal systems. Putting it on any internal segment would expose those systems directly.",
      "topic": "Networking and Cloud Security Concepts",
      "subtopic": "Understand network security architecture",
      "difficulty": "medium",
      "source": "ISC2 CC – Network security architecture: segmentation and screened subnet (DMZ)"
    },
    {
      "stem": "A security team wants a device placed inline on the network that analyzes traffic and automatically drops packets it identifies as malicious. Which device meets this requirement?",
      "options": [
        "Intrusion detection system (IDS)",
        "Honeypot",
        "Intrusion prevention system (IPS)",
        "Security information and event management (SIEM)"
      ],
      "answer": "C",
      "explanation": "An intrusion prevention system sits inline in the traffic path, so it can block or drop malicious traffic as it passes. An IDS typically monitors a copy of the traffic and raises alerts but does not stop the traffic itself. A honeypot is a decoy that attracts attackers, and a SIEM collects and correlates logs rather than filtering traffic.",
      "topic": "Networking and Cloud Security Concepts",
      "subtopic": "Understand network security",
      "difficulty": "medium",
      "source": "ISC2 CC – Network security: intrusion detection and prevention systems (IDS/IPS)"
    },
    {
      "stem": "A company runs its applications on virtual machines rented from an Infrastructure as a Service (IaaS) provider. Under the shared responsibility model, which task is the company's responsibility rather than the provider's?",
      "options": [
        "Securing the physical data center facilities",
        "Patching the operating systems on its virtual machines",
        "Maintaining and patching the hypervisor layer",
        "Replacing failed physical storage hardware"
      ],
      "answer": "B",
      "explanation": "In IaaS the provider secures the physical facilities, hardware and virtualization layer, while the customer manages everything it installs on top, starting with the guest operating system. That means the customer must patch and harden its virtual machines, as well as its applications and data. The customer's share of responsibility shrinks as you move from IaaS to PaaS to SaaS.",
      "topic": "Networking and Cloud Security Concepts",
      "subtopic": "Understand cloud security",
      "difficulty": "hard",
      "source": "ISC2 CC – Cloud security: service models (IaaS, PaaS, SaaS) and the shared responsibility model"
    },
    {
      "stem": "Which type of encryption uses the same secret key to both encrypt and decrypt data?",
      "options": [
        "Symmetric encryption",
        "Asymmetric encryption",
        "One-way hashing",
        "Digital signatures"
      ],
      "answer": "A",
      "explanation": "Symmetric encryption uses a single shared secret key for both encryption and decryption, which makes it fast and well suited to bulk data. Its main challenge is distributing the key securely. Asymmetric encryption uses a mathematically related public and private key pair, and hashing is a one-way function that is not meant to be reversed.",
      "topic": "Security Operations and Incident Response",
      "subtopic": "Understand data security",
      "difficulty": "easy",
      "source": "ISC2 CC – Data security: encryption (symmetric, asymmetric) and hashing"
    },
    {
      "stem": "With written authorization, a tester attempts to actively exploit weaknesses in a company's web application to demonstrate what an attacker could actually achieve. Which activity is this?",
      "options": [
        "Vulnerability scan",
        "Configuration audit",
        "Log review",
        "Penetration test"
      ],
      "answer": "D",
      "explanation": "A penetration test goes beyond finding weaknesses: the tester tries to exploit them, within an agreed and authorized scope, to show their real-world impact. A vulnerability scan identifies and reports potential weaknesses without exploiting them. Written authorization is essential, because the same actions without permission would be an attack.",
      "topic": "Security Operations and Incident Response",
      "subtopic": "Understand security testing",
      "difficulty": "medium",
      "source": "ISC2 CC – Security testing: vulnerability assessment versus penetration testing"
    },
    {
      "stem": "A security team detected malware on several workstations, analyzed it, and has just isolated the infected hosts from the network. Following the incident response phases of preparation; detection and analysis; containment, eradication and recovery; and post-incident activity, what should the team do next?",
      "options": [
        "Restore the workstations from backups and return them to service",
        "Hold a lessons-learned meeting and update the response plan",
        "Remove the malware and close the vulnerability it exploited",
        "Update the incident response policy as part of preparation"
      ],
      "answer": "C",
      "explanation": "Isolating the hosts is containment, and the next step is eradication: removing the malware and fixing the weakness that let it in. Recovering systems before eradication risks reinfection or restoring a still-vulnerable system. Lessons learned and plan updates belong to post-incident activity, after recovery is complete.",
      "topic": "Security Operations and Incident Response",
      "subtopic": "Understand Incident Response (IR)",
      "difficulty": "hard",
      "source": "ISC2 CC – Incident response: containment, eradication and recovery (NIST SP 800-61 Rev. 2 life cycle)"
    }
  ]
}
```
