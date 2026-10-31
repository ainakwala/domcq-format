```json
{
  "format": "domcq/1",
  "exam": "isc2-cc",
  "set": "Certified in Cybersecurity (CC) practice – Core concepts mix",
  "questions": [
    {
      "stem": "A hospital deploys controls to ensure that patient medication records cannot be changed by anyone without authorization, and that any unauthorized change would be detected. Which security principle is the hospital primarily protecting?",
      "options": [
        "Confidentiality",
        "Integrity",
        "Availability",
        "Privacy"
      ],
      "answer": "B",
      "explanation": "Integrity is the assurance that data is accurate and complete and has not been altered by unauthorized parties, including the ability to detect improper changes. Confidentiality is about preventing unauthorized disclosure, and availability is about timely, reliable access. Preventing and detecting unauthorized modification is the defining concern of integrity.",
      "rationales": {
        "A": "Confidentiality protects against unauthorized disclosure, not unauthorized modification of records.",
        "B": "Correct: integrity ensures data is not altered without authorization and that improper changes can be detected.",
        "C": "Availability ensures records can be accessed when needed; it does not address unauthorized changes.",
        "D": "Privacy concerns the proper handling of personal information, not preventing alteration of data."
      },
      "topic": "Security Principles",
      "subtopic": "Understand cybersecurity concepts",
      "difficulty": "easy",
      "source": "ISC2 CC outline: Security Principles – CIA triad (confidentiality, integrity, availability)"
    },
    {
      "stem": "A small online retailer decides that the financial impact of a possible data breach is too large to absorb on its own, so it buys a cyber insurance policy that covers breach-related costs. Which risk treatment has the retailer chosen?",
      "options": [
        "Risk avoidance",
        "Risk acceptance",
        "Risk mitigation",
        "Risk transference"
      ],
      "answer": "D",
      "explanation": "Risk transference shifts the financial consequences of a risk to another party, most commonly an insurer or a contractual partner. Buying insurance does not make a breach less likely; it moves the cost of the impact elsewhere. Note that the organization still remains accountable for protecting the data even when the financial loss is transferred.",
      "rationales": {
        "A": "Avoidance means stopping the risky activity altogether, such as no longer selling online.",
        "B": "Acceptance means knowingly bearing the risk without further action, the opposite of buying cover.",
        "C": "Mitigation reduces likelihood or impact through controls; insurance does not reduce either directly.",
        "D": "Correct: insurance transfers the financial impact of the risk to a third party."
      },
      "topic": "Security Principles",
      "subtopic": "Understand risk management concepts",
      "difficulty": "medium",
      "source": "ISC2 CC outline: Security Principles – risk management concepts (risk treatment options)"
    },
    {
      "stem": "An organization publishes a document that lists the exact, step-by-step actions administrators must follow to create a new user account in its directory service. Which type of governance document is this?",
      "options": [
        "Procedure",
        "Policy",
        "Standard",
        "Guideline"
      ],
      "answer": "A",
      "explanation": "Procedures are detailed, step-by-step instructions that describe exactly how to carry out a task in a consistent way. Policies are high-level statements of management intent, standards set specific mandatory requirements (such as a minimum password length), and guidelines offer recommended but optional advice. Because this document tells administrators precisely which actions to perform and in what order, it is a procedure.",
      "rationales": {
        "A": "Correct: procedures give the detailed, ordered steps needed to perform a specific task.",
        "B": "A policy states management's high-level goals and direction, not individual operational steps.",
        "C": "A standard sets specific mandatory requirements, such as configurations, rather than task steps.",
        "D": "A guideline offers recommended, non-mandatory advice rather than required step-by-step actions."
      },
      "topic": "Security Principles",
      "subtopic": "Understand governance concepts",
      "difficulty": "medium",
      "source": "ISC2 CC outline: Security Principles – governance elements (policies, procedures, standards)"
    },
    {
      "stem": "After ransomware encrypts the data on a file server, the IT team wipes the server and restores its data from the previous night's backup. In this situation, which type of control is the backup restoration acting as?",
      "options": [
        "Deterrent control",
        "Detective control",
        "Corrective control",
        "Preventive control"
      ],
      "answer": "C",
      "explanation": "Corrective controls act after an incident has occurred to fix the damage and return systems to a known good state. Restoring from backup does not stop the ransomware from running or discourage the attacker; it repairs the effect of the attack. Classifying a control by when and how it acts relative to an incident is the key to telling control types apart.",
      "rationales": {
        "A": "Deterrent controls discourage attackers beforehand, such as warning banners; restoring data does not.",
        "B": "Detective controls identify that an incident happened, such as alerts; restoration repairs damage instead.",
        "C": "Correct: restoring from backup remedies the damage after the incident, which is a corrective function.",
        "D": "Preventive controls stop an incident from occurring; here the encryption had already happened."
      },
      "topic": "Security Principles",
      "subtopic": "Understand cybersecurity controls",
      "difficulty": "medium",
      "source": "ISC2 CC outline: Security Principles – security controls (control types and functions)"
    },
    {
      "stem": "An ISC2 member working as a consultant discovers that a client's medical device software has a flaw that could endanger patients. The client asks the member to stay silent so a product launch is not delayed. Under the ISC2 Code of Ethics, which canon should carry the most weight in the member's decision?",
      "options": [
        "Protect society, the common good and the infrastructure",
        "Act honorably, honestly, justly, responsibly and legally",
        "Provide diligent and competent service to principals",
        "Advance and protect the profession and its reputation"
      ],
      "answer": "A",
      "explanation": "The ISC2 Code of Ethics canons are listed in order of priority, and conflicts between them are resolved in favor of the earlier canon. The first canon, protecting society, the common good, public trust and the infrastructure, outranks the duty to serve principals such as a client. A flaw that could harm patients is a direct threat to society, so it must take precedence over the client's commercial wishes.",
      "rationales": {
        "A": "Correct: the first canon has the highest priority, and public safety outweighs the client's interests.",
        "B": "Acting honorably and legally is important but ranks second, below protecting society.",
        "C": "Service to principals is the third canon and is subordinate to protecting society when they conflict.",
        "D": "Advancing the profession is the fourth canon, the lowest priority of the four."
      },
      "topic": "Security Principles",
      "subtopic": "Maintain professional and ethical conduct",
      "difficulty": "hard",
      "source": "ISC2 Code of Ethics – Preamble and Canons"
    },
    {
      "stem": "A company that accepts credit card payments from customers is told by its bank that it must comply with PCI DSS. Which statement best describes PCI DSS?",
      "options": [
        "A federal law enacted by the US government that applies to all retailers",
        "An industry standard set by the payment card brands and enforced by contract",
        "A voluntary guideline with no consequences for merchants who ignore it",
        "An international privacy regulation enforced by EU data protection authorities"
      ],
      "answer": "B",
      "explanation": "The Payment Card Industry Data Security Standard is maintained by the PCI Security Standards Council, which was founded by the major card brands. It is not a government law; merchants are bound to it through their agreements with acquiring banks and card brands, which can impose fines or remove card-processing privileges. This illustrates that compliance obligations can come from contracts and industry standards as well as from legislation.",
      "rationales": {
        "A": "PCI DSS is not a law passed by any government, although some laws reference it.",
        "B": "Correct: it is an industry standard from the card brands, made binding through merchant contracts.",
        "C": "Non-compliance can lead to fines and loss of the ability to accept cards, so it is not consequence-free.",
        "D": "This describes the GDPR; PCI DSS is a global card-industry standard, not an EU regulation."
      },
      "topic": "Security Governance",
      "subtopic": "Plan Governance, Risk, and Compliance (GRC)",
      "difficulty": "medium",
      "source": "ISC2 CC outline: governance and compliance – standards and regulations; PCI Security Standards Council, PCI DSS"
    },
    {
      "stem": "An organization needs an alternate processing facility that already has all hardware installed, network connectivity in place and near-current data, so that critical operations can resume within minutes to a few hours after a disaster. Which type of alternate site meets this need?",
      "options": [
        "Cold site",
        "Warm site",
        "Hot site",
        "Mobile site"
      ],
      "answer": "C",
      "explanation": "A hot site is a fully equipped, fully connected duplicate facility with up-to-date or near-current data, allowing very fast failover. Warm sites have some equipment and connectivity but need data restoration and configuration, and cold sites provide only space and basic utilities. The faster the required recovery time, the more ready, and more expensive, the alternate site must be.",
      "rationales": {
        "A": "A cold site offers only space and utilities, so recovery takes days or weeks.",
        "B": "A warm site has partial equipment but needs data and setup, so recovery is slower than required.",
        "C": "Correct: a hot site is fully equipped with current data and can take over within minutes to hours.",
        "D": "A mobile site is a transportable facility that must be delivered and set up, not instantly ready."
      },
      "topic": "Security Governance",
      "subtopic": "Understand redundancy",
      "difficulty": "easy",
      "source": "ISC2 CC outline: business continuity and disaster recovery – alternate processing sites"
    },
    {
      "stem": "A security manager is designing a program for all staff. Which statement correctly distinguishes security awareness from security training?",
      "options": [
        "Awareness is only required for IT staff, while training is required for every employee",
        "Awareness is delivered once at hiring, while training must be repeated every year",
        "Awareness teaches hands-on technical skills, while training only shares posters and tips",
        "Awareness focuses attention on security broadly, while training builds skills for a role"
      ],
      "answer": "D",
      "explanation": "Security awareness aims to make everyone recognize security issues and respond appropriately, for example spotting a suspicious email, and is usually delivered through ongoing reminders, campaigns and short sessions. Security training goes further by teaching specific skills that people need to perform their job securely, such as how an administrator hardens a server. Both should be ongoing, and both apply across the organization according to need.",
      "rationales": {
        "A": "Awareness applies to everyone in the organization, not only IT staff.",
        "B": "Effective awareness is continuous rather than a one-time event at hiring.",
        "C": "This reverses the two: training builds skills, while awareness relies on reminders and messages.",
        "D": "Correct: awareness builds broad recognition, while training develops specific, role-based skills."
      },
      "topic": "Security Governance",
      "subtopic": "Understand security awareness",
      "difficulty": "medium",
      "source": "ISC2 CC outline: security awareness training – awareness versus training"
    },
    {
      "stem": "A company runs monthly simulated phishing campaigns as part of its security awareness program. Which measurement best shows whether the program is actually changing employee behavior?",
      "options": [
        "The trend in click rates and report rates on the simulated emails over time",
        "The number of awareness posters displayed around the office each month",
        "The total number of simulated phishing emails sent during the year",
        "The amount of money spent on awareness training content each quarter"
      ],
      "answer": "A",
      "explanation": "An effectiveness metric should measure the outcome the program is meant to produce, not just the activity or effort put into it. Falling click rates and rising report rates on simulated phishing show that employees are recognizing and reporting suspicious emails more often. Counts of posters, emails sent or money spent measure inputs and say nothing about whether behavior has improved.",
      "rationales": {
        "A": "Correct: click and report rates over time directly measure the change in employee behavior.",
        "B": "Poster counts measure activity, not whether employees behave more securely.",
        "C": "The number of emails sent measures effort, not how employees responded to them.",
        "D": "Spending measures investment, not the program's effect on behavior."
      },
      "topic": "Security Governance",
      "subtopic": "Measure cybersecurity effectiveness",
      "difficulty": "easy",
      "source": "ISC2 CC outline: security awareness – measuring program effectiveness and security metrics"
    },
    {
      "stem": "An employee has resigned, and their last working day is Friday. According to good identity life cycle management practice, what should happen to the employee's user accounts?",
      "options": [
        "Leave them active for 90 days in case the employee decides to return",
        "Transfer the accounts and their passwords to the employee's manager",
        "Disable them promptly when employment ends, then remove them per policy",
        "Delete only the email account and keep all other accounts active"
      ],
      "answer": "C",
      "explanation": "Deprovisioning is the final stage of the identity life cycle, and access should be revoked as soon as the person no longer needs it, typically at the moment employment ends. Disabling first preserves the account for audit or data recovery while preventing use, and the account is later deleted according to retention policy. Leaving former employees' accounts active is a common route for unauthorized access.",
      "rationales": {
        "A": "Dormant accounts of departed users are a security risk and violate least privilege.",
        "B": "Sharing credentials breaks accountability; a manager should get access to data, not the account itself.",
        "C": "Correct: prompt disabling at departure, followed by policy-based removal, is standard deprovisioning.",
        "D": "Leaving other accounts active still allows the former employee to access systems."
      },
      "topic": "Identity And Access Management (IAM) Concepts",
      "subtopic": "Understand identity life cycle management",
      "difficulty": "easy",
      "source": "ISC2 CC outline: Identity and access management – provisioning and deprovisioning"
    },
    {
      "stem": "Over eight years, an employee has moved from finance to purchasing and then to human resources. An audit finds the employee still holds the access rights from every previous role in addition to the current one. What is this condition called?",
      "options": [
        "Privilege escalation",
        "Privilege creep",
        "Separation of duties",
        "Need to know"
      ],
      "answer": "B",
      "explanation": "Privilege creep is the gradual accumulation of access rights as a person changes roles without old permissions being removed. It violates least privilege and can let one person perform combinations of tasks that should be separated. It is addressed by adjusting access whenever a role changes and by running periodic access reviews or recertifications.",
      "rationales": {
        "A": "Privilege escalation is gaining higher rights than granted, usually through an exploit, not gradual buildup.",
        "B": "Correct: privilege creep is the build-up of unneeded rights as a user moves between roles.",
        "C": "Separation of duties is a control that splits tasks among people; this condition actually undermines it.",
        "D": "Need to know is a principle that limits access to required information, which is being violated here."
      },
      "topic": "Identity And Access Management (IAM) Concepts",
      "subtopic": "Understand identity life cycle management",
      "difficulty": "medium",
      "source": "ISC2 CC outline: Identity and access management – privilege creep and access reviews"
    },
    {
      "stem": "A web application asks users to enter a password and then a separate four-digit PIN before granting access. Why does this login process NOT qualify as multi-factor authentication?",
      "options": [
        "Because a PIN is shorter than a password and is therefore weaker",
        "Because both values are typed into the same login page in sequence",
        "Because a PIN is classed as something you have, like a hardware token",
        "Because both values are something you know, which is a single factor type"
      ],
      "answer": "D",
      "explanation": "Multi-factor authentication requires evidence from two or more different factor types: something you know, something you have, and something you are. A password and a PIN are both knowledge factors, so using both is still single-factor authentication, even though there are two steps. Adding a different factor type, such as a token code or a fingerprint, would make it multi-factor.",
      "rationales": {
        "A": "Strength is not the issue; MFA is defined by using different factor types, not value length.",
        "B": "Factors can be entered on the same page and still be MFA if they are of different types.",
        "C": "A PIN is something you know, not something you have.",
        "D": "Correct: two knowledge factors are the same type, so this is not multi-factor authentication."
      },
      "topic": "Identity And Access Management (IAM) Concepts",
      "subtopic": "Understand logical access controls",
      "difficulty": "medium",
      "source": "ISC2 CC outline: Access controls – authentication factors and multi-factor authentication"
    },
    {
      "stem": "A defense contractor's system labels every file with a classification such as Secret or Top Secret and assigns each user a clearance. Two analysts with the same job title receive different access because one holds a higher clearance, and file owners cannot change who may read their files. Which access control model does this system use?",
      "options": [
        "Role-based access control (RBAC)",
        "Discretionary access control (DAC)",
        "Mandatory access control (MAC)",
        "Rule-based access control"
      ],
      "answer": "C",
      "explanation": "Mandatory access control makes access decisions by comparing security labels on objects with clearances held by subjects, and it is enforced by the system rather than by data owners. The fact that owners cannot change permissions rules out discretionary access control. The fact that two people in the same role get different access based on clearance rules out a purely role-based model.",
      "rationales": {
        "A": "RBAC grants access by job role, but here users with the same role get different access.",
        "B": "DAC lets owners decide who can access their files, which this system explicitly prevents.",
        "C": "Correct: MAC compares classification labels with user clearances and is enforced centrally.",
        "D": "Rule-based access applies general rules such as time or address limits, not labels and clearances."
      },
      "topic": "Identity And Access Management (IAM) Concepts",
      "subtopic": "Understand logical access controls",
      "difficulty": "hard",
      "source": "ISC2 CC outline: Logical access controls – DAC, MAC and RBAC"
    },
    {
      "stem": "An administrator manages network switches using Telnet, which sends usernames and passwords across the network in cleartext. Which protocol should replace Telnet to provide encrypted remote command-line access?",
      "options": [
        "Secure Shell (SSH)",
        "Simple Network Management Protocol version 1 (SNMPv1)",
        "File Transfer Protocol (FTP)",
        "Hypertext Transfer Protocol (HTTP)"
      ],
      "answer": "A",
      "explanation": "SSH provides an encrypted channel for remote command-line administration, protecting credentials and session data from eavesdropping. It is the standard secure replacement for Telnet and typically uses TCP port 22. Replacing cleartext protocols with encrypted equivalents is a basic network hardening step.",
      "rationales": {
        "A": "Correct: SSH encrypts remote terminal sessions and is the secure replacement for Telnet.",
        "B": "SNMPv1 is a management protocol that sends community strings in cleartext and is not a remote shell.",
        "C": "FTP transfers files and sends credentials in cleartext, so it is neither a shell nor secure.",
        "D": "HTTP is an unencrypted web protocol and does not provide command-line access."
      },
      "topic": "Networking and Cloud Security Concepts",
      "subtopic": "Understand network security",
      "difficulty": "easy",
      "source": "ISC2 CC outline: Network security – ports and protocols, secure versus insecure protocols"
    },
    {
      "stem": "An attacker sends a very large number of TCP SYN packets with spoofed source addresses to a web server and never completes the three-way handshake. What is the attacker primarily trying to achieve?",
      "options": [
        "Steal session cookies from legitimate users of the web server",
        "Exhaust the server's capacity for half-open connections, denying service",
        "Decrypt the TLS traffic exchanged between the server and its clients",
        "Map which ports are open on the server without appearing in any logs"
      ],
      "answer": "B",
      "explanation": "This is a SYN flood, a denial-of-service attack. Each SYN causes the server to reserve resources for a half-open connection while it waits for the final ACK, which never arrives, so the connection table fills and legitimate users cannot connect. Spoofed source addresses mean the attacker never sees the replies, which shows the goal is resource exhaustion rather than gathering information.",
      "rationales": {
        "A": "A SYN flood never establishes a session, so it cannot capture users' session cookies.",
        "B": "Correct: a SYN flood fills the server's half-open connection queue, causing denial of service.",
        "C": "No handshake or TLS session is completed, so no traffic is decrypted.",
        "D": "With spoofed addresses the attacker cannot receive the replies needed to map open ports."
      },
      "topic": "Networking and Cloud Security Concepts",
      "subtopic": "Understand network security",
      "difficulty": "medium",
      "source": "ISC2 CC outline: Network threats and attacks – denial of service (SYN flood)"
    },
    {
      "stem": "A company wants to host a public web server that internet users can reach, while keeping it separated from internal systems so that a compromise of the web server does not give the attacker direct access to the internal network. Where should the web server be placed?",
      "options": [
        "On the internal LAN alongside the company's file servers",
        "Directly on the internet with no firewall in front of it",
        "On the same VLAN as the employees' desktop workstations",
        "In a DMZ (screened subnet) separated by firewall rules"
      ],
      "answer": "D",
      "explanation": "A DMZ, or screened subnet, is a network segment that sits between the internet and the internal network, with firewall rules controlling traffic in both directions. Public-facing services placed there can be reached from outside, but if one is compromised, the firewall still restricts the attacker's access to internal systems. This is a core example of network segmentation and defense in depth.",
      "rationales": {
        "A": "Placing it on the internal LAN would give an attacker who compromises it direct internal access.",
        "B": "With no firewall the server is fully exposed, and nothing limits attacks on or from it.",
        "C": "Sharing a VLAN with workstations exposes employee systems if the web server is compromised.",
        "D": "Correct: a DMZ lets the public reach the server while firewalls isolate it from the internal network."
      },
      "topic": "Networking and Cloud Security Concepts",
      "subtopic": "Understand network security architecture",
      "difficulty": "medium",
      "source": "ISC2 CC outline: Network security infrastructure – network segmentation and DMZ"
    },
    {
      "stem": "A company currently runs its application on virtual machines under an Infrastructure as a Service (IaaS) cloud model and plans to move it to a Platform as a Service (PaaS) offering from the same provider. Under the shared responsibility model, which task typically moves from the company to the provider as a result of this change?",
      "options": [
        "Classifying the data that the application stores",
        "Managing which user accounts can access the application",
        "Patching the operating system the application runs on",
        "Physically securing the data center that hosts the servers"
      ],
      "answer": "C",
      "explanation": "In IaaS the provider manages the physical facilities, hardware and virtualization layer, while the customer manages the guest operating system and everything above it. In PaaS the provider also manages the operating system and runtime, so OS patching shifts to the provider. Data classification and user access management remain the customer's responsibility in every service model, and physical security is the provider's in both.",
      "rationales": {
        "A": "Data classification stays with the customer in IaaS, PaaS and SaaS alike.",
        "B": "Managing who can access the application remains the customer's job in both models.",
        "C": "Correct: the customer patches the OS in IaaS, but the provider manages the OS in PaaS.",
        "D": "Physical data center security is already the provider's responsibility under IaaS."
      },
      "topic": "Networking and Cloud Security Concepts",
      "subtopic": "Understand cloud security",
      "difficulty": "hard",
      "source": "ISC2 CC outline: Cloud security – service models and shared responsibility; NIST SP 800-145 service models"
    },
    {
      "stem": "During a security incident, the response team disconnects a malware-infected workstation from the network to stop the malware from spreading to other systems. They have not yet removed the malware from the workstation. Which incident response activity are they performing?",
      "options": [
        "Containment",
        "Eradication",
        "Recovery",
        "Preparation"
      ],
      "answer": "A",
      "explanation": "Containment limits the scope and impact of an incident by isolating affected systems so the damage does not spread. Eradication, which comes next, removes the cause of the incident, such as the malware itself, and recovery then returns systems to normal operation. Isolating a host before cleaning it is the classic containment step.",
      "rationales": {
        "A": "Correct: isolating the infected host to stop the spread is containment.",
        "B": "Eradication removes the malware, which the stem says has not happened yet.",
        "C": "Recovery restores systems to normal service after the threat has been removed.",
        "D": "Preparation happens before an incident, such as building the plan and team."
      },
      "topic": "Security Operations and Incident Response",
      "subtopic": "Understand Incident Response (IR)",
      "difficulty": "medium",
      "source": "ISC2 CC outline: Incident response – containment, eradication and recovery; NIST SP 800-61 incident response life cycle"
    },
    {
      "stem": "Alice wants to send Bob a confidential file using asymmetric cryptography so that only Bob can decrypt and read it. Which key should Alice use to encrypt the file?",
      "options": [
        "Alice's private key",
        "Bob's public key",
        "Alice's public key",
        "Bob's private key"
      ],
      "answer": "B",
      "explanation": "In asymmetric cryptography, data encrypted with a public key can be decrypted only with the matching private key. Encrypting with Bob's public key means only Bob, the sole holder of his private key, can decrypt the file, which provides confidentiality. Encrypting with the sender's private key does the opposite: anyone with the public key can decrypt it, which supports digital signatures rather than secrecy.",
      "rationales": {
        "A": "Anything encrypted with Alice's private key can be decrypted by anyone with her public key, so it is not confidential.",
        "B": "Correct: only Bob's private key can decrypt data encrypted with Bob's public key.",
        "C": "Data encrypted with Alice's public key could only be decrypted by Alice, not Bob.",
        "D": "Alice should never have Bob's private key; it must remain secret to Bob."
      },
      "topic": "Security Operations and Incident Response",
      "subtopic": "Understand data security",
      "difficulty": "hard",
      "source": "ISC2 CC outline: Data security – encryption (symmetric and asymmetric)"
    },
    {
      "stem": "An organization is deciding between commissioning a vulnerability scan and a penetration test of its network. What is the key difference between these two activities?",
      "options": [
        "A vulnerability scan is always manual, while a penetration test is always automated",
        "A vulnerability scan needs written permission, while a penetration test never does",
        "A vulnerability scan exploits weaknesses, while a penetration test only lists them",
        "A vulnerability scan identifies weaknesses, while a penetration test tries to exploit them"
      ],
      "answer": "D",
      "explanation": "A vulnerability scan uses tools to identify and report known weaknesses, such as missing patches or misconfigurations, without exploiting them. A penetration test goes further by actively attempting to exploit weaknesses, as an attacker would, to show what real impact is possible. Both require proper authorization, and penetration tests usually combine automated tools with skilled manual work.",
      "rationales": {
        "A": "Scans are typically automated, and penetration tests usually involve significant manual effort.",
        "B": "Both activities require authorization; a penetration test without written permission is an attack.",
        "C": "This reverses the two: it is the penetration test that attempts exploitation.",
        "D": "Correct: scans find and report weaknesses, while penetration tests attempt to exploit them."
      },
      "topic": "Security Operations and Incident Response",
      "subtopic": "Understand security testing",
      "difficulty": "easy",
      "source": "ISC2 CC outline: Security operations – vulnerability assessment versus penetration testing"
    }
  ]
}
```
