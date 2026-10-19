```json
{
  "format": "domcq/1",
  "exam": "cism",
  "set": "Certified Information Security Manager (CISM) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "Which of the following should be the PRIMARY basis for developing an information security strategy?",
      "options": [
        "Findings of the most recent vulnerability assessment",
        "The organization's business goals and objectives",
        "Security architectures adopted by industry peers",
        "Capabilities of currently available security technologies"
      ],
      "answer": "B",
      "explanation": "An information security strategy exists to help the organization achieve its goals, so it must be derived from and aligned with business objectives. Vulnerability findings, peer practices and available technologies are useful inputs to how the strategy is carried out, but they do not define what the business needs protected or why. A strategy built on business objectives is also what earns senior management support and funding.",
      "topic": "Information Security Governance",
      "subtopic": "Information Security Strategy Development",
      "difficulty": "easy",
      "source": "CISM Exam Content Outline, Domain 1 Part B: Information Security Strategy Development"
    },
    {
      "stem": "An organization is establishing an information security steering committee composed of senior representatives from each major business function. Which of the following is the PRIMARY benefit of this structure?",
      "options": [
        "It allows technical security designs to be approved more quickly",
        "It transfers accountability for security from executives to the committee",
        "It reduces the operational workload of the information security team",
        "It aligns security activities with business priorities across functions"
      ],
      "answer": "D",
      "explanation": "A cross-functional steering committee brings business leaders into security decision-making, so priorities, investments and policies reflect what the business actually needs and gain buy-in across departments. It is a governance mechanism, not a technical review board or a way to offload operational work. Accountability for security remains with senior management and the board and cannot be transferred to a committee.",
      "topic": "Information Security Governance",
      "subtopic": "Organizational Structures, Roles, and Responsibilities",
      "difficulty": "medium",
      "source": "CISM Exam Content Outline, Domain 1 Part A: Organizational Structures, Roles, and Responsibilities"
    },
    {
      "stem": "A multinational organization learns that a newly enacted data protection law in one country where it operates imposes requirements that are stricter than its global information security policy. Which of the following should the information security manager do FIRST?",
      "options": [
        "Perform a gap analysis between the new requirements and current practices",
        "Revise the global policy so that all locations adopt the stricter requirements",
        "Implement additional controls at the affected location without delay",
        "Request a formal exemption from the regulator for existing operations"
      ],
      "answer": "A",
      "explanation": "Before deciding how to respond, the information security manager must understand what the law actually requires of the organization and where current practices fall short. A gap analysis establishes the scope, impact and cost of compliance, which senior management needs in order to decide whether to change the global policy, apply local controls or take another approach. Rewriting policy or deploying controls first risks spending resources on the wrong changes, and seeking an exemption is premature without knowing the gaps.",
      "topic": "Information Security Governance",
      "subtopic": "Legal, Regulatory, and Contractual Requirements",
      "difficulty": "hard",
      "source": "CISM Exam Content Outline, Domain 1 Part A: Legal, Regulatory, and Contractual Requirements"
    },
    {
      "stem": "After mitigating controls have been implemented for a new business system, the remaining residual risk is still above the organization's risk appetite. Which of the following is the BEST course of action for the information security manager?",
      "options": [
        "Accept the residual risk on behalf of the business unit",
        "Keep adding controls until the risk has been fully eliminated",
        "Present the residual risk to the risk owner for a treatment decision",
        "Record the risk in the risk register and close the action item"
      ],
      "answer": "C",
      "explanation": "Decisions about how to treat risk that exceeds appetite, whether by further mitigation, transfer, avoidance or formal acceptance, belong to the risk owner and senior management, not the security function. The information security manager's role is to analyze the risk and present options and their costs so the owner can make an informed decision. Risk can rarely be eliminated at reasonable cost, and simply logging it without a decision leaves the organization exposed beyond its appetite.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Treatment / Risk Response Options",
      "difficulty": "medium",
      "source": "CISM Exam Content Outline, Domain 2 Part B: Risk Treatment / Risk Response Options"
    },
    {
      "stem": "Which of the following is the PRIMARY advantage of a quantitative risk analysis over a qualitative risk analysis?",
      "options": [
        "It expresses risk in monetary terms that support cost-benefit decisions",
        "It can be completed with less time, data and specialist effort",
        "It removes subjective judgment from estimates of likelihood",
        "It does not require an inventory of information assets"
      ],
      "answer": "A",
      "explanation": "Quantitative analysis estimates values such as single loss expectancy and annualized loss expectancy, expressing risk in financial terms. This lets management compare the cost of a control directly with the reduction in expected loss it provides. It usually requires more data and effort than qualitative analysis, and its inputs, especially likelihood estimates, still involve judgment.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Assessment and Analysis",
      "difficulty": "easy",
      "source": "CISM Exam Content Outline, Domain 2 Part A: Risk Assessment and Analysis"
    },
    {
      "stem": "A customer relationship management (CRM) application supports the organization's sales process. Who is the MOST appropriate owner of the risk associated with this application?",
      "options": [
        "The database administrator who maintains the application data",
        "The information security manager who assessed the application",
        "The head of the sales function that relies on the application",
        "The IT operations manager who hosts the application"
      ],
      "answer": "C",
      "explanation": "Risk ownership should rest with the person who has the authority and accountability to manage the risk and who bears the business impact if it materializes. That is the business manager responsible for the process the application supports, here the head of sales. IT and security staff act as custodians and advisers: they operate controls and assess risk, but they do not own the business consequences.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk and Control Ownership",
      "difficulty": "easy",
      "source": "CISM Exam Content Outline, Domain 2 Part B: Risk and Control Ownership"
    },
    {
      "stem": "An information security manager is selecting a key risk indicator (KRI) for the risk of unauthorized access through the user accounts of employees who have left the organization. Which of the following would be the MOST effective KRI?",
      "options": [
        "Number of unauthorized access incidents traced to former employees",
        "Percentage of managers who completed access management training",
        "Number of access requests processed by the service desk each month",
        "Number of departed employees' accounts still active past the removal deadline"
      ],
      "answer": "D",
      "explanation": "An effective KRI is a leading indicator: it shows an increase in exposure before the risk materializes, giving management time to act. Active accounts belonging to departed employees directly measure the condition that enables this risk, so a rising count signals growing exposure. A count of past incidents is a lagging indicator that reports harm after it has occurred, while training completion and request volumes are only loosely related to this specific risk.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Monitoring and Reporting",
      "difficulty": "hard",
      "source": "CISM Exam Content Outline, Domain 2 Part B: Risk Monitoring and Reporting (key risk indicators)"
    },
    {
      "stem": "Which of the following roles is responsible for determining the classification level of a set of business information?",
      "options": [
        "The data custodian",
        "The data owner",
        "The information security manager",
        "The internal auditor"
      ],
      "answer": "B",
      "explanation": "The data owner, typically a senior business manager, is accountable for the information and understands its value and sensitivity to the business, so the owner assigns its classification. The custodian implements and maintains the protection the classification requires, and the information security manager provides the classification scheme and guidance. Internal audit provides independent assurance and should not set classifications it may later review.",
      "topic": "Information Security Program",
      "subtopic": "Information Asset Identification and Classification",
      "difficulty": "easy",
      "source": "CISM Exam Content Outline, Domain 3 Part A: Information Asset Identification and Classification"
    },
    {
      "stem": "Which of the following metrics would BEST demonstrate the effectiveness of the information security program to senior management?",
      "options": [
        "Number of firewall rule changes reviewed during the quarter",
        "Number of malicious emails blocked by the email gateway",
        "Percentage of high risks to critical processes reduced to within appetite",
        "Percentage of security staff holding professional certifications"
      ],
      "answer": "C",
      "explanation": "Senior management needs metrics that show whether the program is achieving its purpose, which is to keep risk to the business within acceptable levels. A measure tied to risk to critical business processes and to the risk appetite speaks directly to that objective. Counts of firewall reviews or blocked emails are operational activity measures, and staff certifications describe capability rather than results.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Program Metrics",
      "difficulty": "medium",
      "source": "CISM Exam Content Outline, Domain 3 Part A: Information Security Program Metrics"
    },
    {
      "stem": "System administrators must follow a documented, step-by-step sequence of actions when hardening newly built servers. In which type of document should these steps be recorded?",
      "options": [
        "Procedure",
        "Policy",
        "Guideline",
        "Standard"
      ],
      "answer": "A",
      "explanation": "Procedures describe the detailed, sequential steps needed to carry out a task in a way that complies with policies and standards. Policies state management's high-level intent and direction, standards set mandatory requirements such as the configuration settings a server must meet, and guidelines offer recommended but non-mandatory practices. A hardening procedure therefore tells administrators how to achieve the baseline that the standard defines.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Policies, Procedures, and Guidelines",
      "difficulty": "easy",
      "source": "CISM Exam Content Outline, Domain 3 Part A: Information Security Policies, Procedures, and Guidelines"
    },
    {
      "stem": "When choosing among several controls that could mitigate an identified risk, which of the following should be the PRIMARY consideration of the information security manager?",
      "options": [
        "Whether the control is widely adopted by peer organizations",
        "Whether the control can be operated by existing staff",
        "Whether the control is offered by the current technology vendor",
        "Whether the control cost-effectively brings risk within acceptable levels"
      ],
      "answer": "D",
      "explanation": "Controls exist to reduce risk to a level the organization is willing to accept, and the cost of a control should be justified by the risk reduction it delivers. Comparing candidate controls on their effectiveness against the specific risk and on their cost relative to the potential impact is therefore the primary basis for selection. Peer adoption, staffing and vendor relationships are secondary factors that may affect implementation but do not determine whether the control addresses the risk.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Control Design and Selection",
      "difficulty": "medium",
      "source": "CISM Exam Content Outline, Domain 3 Part B: Information Security Control Design and Selection"
    },
    {
      "stem": "An organization is negotiating a contract with a cloud service provider that will store and process regulated customer data. Which of the following contract provisions is MOST important from an information security perspective?",
      "options": [
        "Service credits payable when availability falls below agreed levels",
        "The right to audit or receive independent assurance on its controls",
        "A fixed service price for the full term of the agreement",
        "Use of hardware models approved by the organization's IT team"
      ],
      "answer": "B",
      "explanation": "When regulated data is outsourced, the organization remains accountable for its protection, so it must be able to verify that the provider's controls meet its requirements. A right-to-audit clause, or a contractual right to receive independent assurance such as SOC 2 reports or ISO/IEC 27001 certification evidence, provides that ongoing verification. Service credits compensate for downtime but do not protect the data, and price or hardware terms are commercial or operational matters.",
      "topic": "Information Security Program",
      "subtopic": "Management of External Services (e.g., providers, suppliers, third parties, fourth parties)",
      "difficulty": "medium",
      "source": "CISM Exam Content Outline, Domain 3 Part B: Management of External Services (e.g., providers, suppliers, third parties, fourth parties)"
    },
    {
      "stem": "Which of the following would BEST indicate that a security awareness program is changing employee behavior?",
      "options": [
        "A declining click rate in periodic simulated phishing exercises",
        "The number of employees who attended awareness sessions",
        "The number of awareness posters displayed in the offices",
        "High satisfaction scores in post-training feedback surveys"
      ],
      "answer": "A",
      "explanation": "The goal of awareness training is changed behavior, so the best measures observe what employees actually do. A falling click rate across repeated phishing simulations shows that staff are recognizing and resisting a common attack. Attendance, posters and satisfaction scores measure how the program was delivered and received, not whether it has reduced risky behavior.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Awareness and Training",
      "difficulty": "easy",
      "source": "CISM Exam Content Outline, Domain 3 Part B: Information Security Awareness and Training"
    },
    {
      "stem": "A new access control has been implemented to reduce the risk of fraudulent payments. Which of the following would provide the GREATEST assurance that the control is operating effectively?",
      "options": [
        "Written confirmation from the control owner that the control is in place",
        "Documentation showing the control was designed to the approved standard",
        "The absence of reported payment fraud since the control was implemented",
        "Independent testing of the control's operation over a period of time"
      ],
      "answer": "D",
      "explanation": "Operating effectiveness means the control has worked as designed, consistently, throughout a period, and that is best demonstrated by testing performed by someone independent of its operation. A control owner's statement is self-assessment, and design documentation shows only that the control should work, not that it does. The absence of incidents is weak evidence because fraud may have gone undetected or the threat may simply not have occurred.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Control Testing and Evaluation",
      "difficulty": "hard",
      "source": "CISM Exam Content Outline, Domain 3 Part B: Information Security Control Testing and Evaluation"
    },
    {
      "stem": "Which of the following is the PRIMARY objective of a business impact analysis (BIA)?",
      "options": [
        "To identify the threats and vulnerabilities affecting IT systems",
        "To select the most suitable alternate site for recovery",
        "To determine the impact of disruption on critical processes over time",
        "To evaluate the effectiveness of existing security controls"
      ],
      "answer": "C",
      "explanation": "A BIA identifies the organization's critical business processes and determines how the impact of their disruption grows over time, in financial, operational, legal and reputational terms. These results establish recovery priorities and inform recovery objectives such as the RTO and RPO. Threat and vulnerability identification belongs to risk assessment, and recovery site selection is a later strategy decision that depends on the BIA's results.",
      "topic": "Incident Management",
      "subtopic": "Business Impact Analysis (BIA)",
      "difficulty": "medium",
      "source": "CISM Exam Content Outline, Domain 4 Part A: Business Impact Analysis (BIA)"
    },
    {
      "stem": "The incident response team confirms that ransomware on an employee workstation is actively spreading to other systems on the network. Which of the following should the team do FIRST?",
      "options": [
        "Restore the workstation from the most recent clean backup",
        "Isolate the affected systems from the network",
        "Notify law enforcement and provide details of the attack",
        "Identify the ransomware variant and its point of entry"
      ],
      "answer": "B",
      "explanation": "When an incident is actively spreading, containment takes priority to limit damage to other systems and data. Isolating the infected systems, for example by disconnecting them or moving them to a quarantined network segment, stops further propagation while preserving them for investigation. Analyzing the variant, notifying authorities and restoring systems are all necessary but come after the spread has been contained.",
      "topic": "Incident Management",
      "subtopic": "Incident Containment Methods",
      "difficulty": "medium",
      "source": "CISM Exam Content Outline, Domain 4 Part B: Incident Containment Methods"
    },
    {
      "stem": "The business owners of an order processing system state that no more than two hours of transaction data may be lost after a disruption. Which of the following is MOST directly determined by this requirement?",
      "options": [
        "The time allowed to restore the system to service",
        "The processing capacity required at the alternate site",
        "The order in which systems are recovered after a disaster",
        "The frequency of data backup or replication for the system"
      ],
      "answer": "D",
      "explanation": "The maximum acceptable data loss is the recovery point objective (RPO), and it determines how often data must be backed up or replicated: to lose no more than two hours of data, copies must be taken at least every two hours or continuously. The time allowed to restore service is governed by the recovery time objective (RTO), not the RPO. Alternate site capacity and recovery sequence are driven by other BIA results and recovery strategy decisions.",
      "topic": "Incident Management",
      "subtopic": "Disaster Recovery Plan (DRP)",
      "difficulty": "medium",
      "source": "CISM Exam Content Outline, Domain 4 Part A: Disaster Recovery Plan (DRP); recovery point objective (RPO)"
    },
    {
      "stem": "Which of the following is the PRIMARY reason for defining incident severity levels before incidents occur?",
      "options": [
        "To enable consistent prioritization and escalation based on business impact",
        "To identify the employees responsible for causing security incidents",
        "To meet the documentation expectations of external auditors",
        "To reduce the number of events reported to the service desk"
      ],
      "answer": "A",
      "explanation": "Predefined severity criteria let responders quickly and consistently judge how serious an incident is, based mainly on its actual or potential impact on the business. The severity level then drives who must be notified, how quickly escalation occurs and what resources are committed. Without agreed criteria, similar incidents may be handled inconsistently and serious ones may not reach management in time.",
      "topic": "Incident Management",
      "subtopic": "Incident Classification/Categorization",
      "difficulty": "medium",
      "source": "CISM Exam Content Outline, Domain 4 Part A: Incident Classification/Categorization"
    },
    {
      "stem": "After a malware incident, a compromised web server was restored from a backup that had been scanned and confirmed clean. Within hours of being reconnected, the server was compromised again using the same attack method. Which of the following is the MOST likely cause?",
      "options": [
        "The server was restored onto different hardware from the original",
        "The restoration was performed outside the approved change window",
        "The weakness exploited in the original attack was not remediated",
        "The forensic image of the compromised server was not retained"
      ],
      "answer": "C",
      "explanation": "Restoring from a clean backup returns a system to a known state, but if that state still contains the vulnerability or misconfiguration the attacker exploited, the attack can simply be repeated. Eradication must therefore identify and remove the root cause, for example by patching, hardening or revoking compromised credentials, before the system returns to production. The other options describe process or evidence-handling issues that do not explain why the same attack succeeded again.",
      "topic": "Incident Management",
      "subtopic": "Incident Eradication and Recovery",
      "difficulty": "hard",
      "source": "CISM Exam Content Outline, Domain 4 Part B: Incident Eradication and Recovery"
    },
    {
      "stem": "During a significant data breach, a journalist contacts a system administrator on the incident response team and asks for details about what happened. Which of the following is the BEST response by the administrator?",
      "options": [
        "Share only the facts that the investigation has already confirmed",
        "Refer the journalist to the spokesperson designated in the response plan",
        "Ask the information security manager for approval to answer questions",
        "Decline to comment and take no further action on the request"
      ],
      "answer": "B",
      "explanation": "Incident response plans should designate who may communicate with the media and other external parties, typically corporate communications or public relations working with legal counsel. Routing inquiries to that spokesperson keeps messages accurate and consistent and avoids disclosures that could harm the investigation, breach legal obligations or damage the organization's reputation. Individual responders should not release even confirmed facts, and ignoring the request loses the chance to manage the message.",
      "topic": "Incident Management",
      "subtopic": "Incident Response Communications (e.g., reporting, notification, escalation)",
      "difficulty": "medium",
      "source": "CISM Exam Content Outline, Domain 4 Part B: Incident Response Communications (e.g., reporting, notification, escalation)"
    }
  ]
}
```
