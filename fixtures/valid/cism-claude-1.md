```json
{
  "format": "domcq/1",
  "exam": "cism",
  "set": "Certified Information Security Manager (CISM) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "Which of the following is the PRIMARY objective of an information security strategy?",
      "options": [
        "Implementing all controls recommended by a recognized framework",
        "Aligning security activities with the organization's business objectives",
        "Eliminating all security incidents across the organization",
        "Achieving compliance with every applicable technical standard"
      ],
      "answer": "B",
      "explanation": "Information security exists to support the enterprise, so the primary objective of a security strategy is to align security activities with business objectives and deliver value at an acceptable level of risk. Frameworks, compliance and incident reduction are means to that end, not the goal itself. Eliminating all incidents is unrealistic, and implementing every recommended control regardless of business need wastes resources.",
      "topic": "Information Security Governance",
      "subtopic": "Information Security Strategy Development",
      "difficulty": "easy",
      "source": "CISM Job Practice, Domain 1B Information Security Strategy – Information Security Strategy Development"
    },
    {
      "stem": "An information security manager finds that business unit leaders regard security as an IT issue and rarely take part in security decisions. Which of the following would be the BEST way to address this?",
      "options": [
        "Assign all security decisions to the IT department on behalf of the business",
        "Send more detailed technical security reports to business unit leaders",
        "Require all business unit staff to complete annual awareness training",
        "Establish a security steering committee that includes business unit leaders"
      ],
      "answer": "D",
      "explanation": "Treating security as purely an IT problem is a governance weakness, because business leaders own the processes and the risk. A steering committee with business unit representation gives those leaders a formal role in setting security priorities and making decisions, which builds ownership and alignment. More reports or training may raise awareness but do not create accountability, and handing decisions to IT reinforces the problem.",
      "topic": "Information Security Governance",
      "subtopic": "Organizational Structures, Roles, and Responsibilities",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 1A Enterprise Governance – Organizational Structures, Roles, and Responsibilities (steering committee)"
    },
    {
      "stem": "An information security manager learns that employees in a key department routinely bypass a newly introduced security control because it significantly slows down a time-critical business process. Which of the following is the BEST course of action?",
      "options": [
        "Work with the process owners to reassess the control against the risk it addresses",
        "Introduce disciplinary sanctions for employees who bypass the control",
        "Remove the control and document acceptance of the resulting risk",
        "Increase monitoring to identify the employees who bypass the control"
      ],
      "answer": "A",
      "explanation": "Routine circumvention is a sign that the control may be poorly aligned with business needs, so the information security manager should first understand the business impact and reassess, with the process owners, whether the control is the right way to address the risk. Security should enable the business, and a control that obstructs a critical process will keep being bypassed regardless of sanctions. Sanctions and monitoring treat the symptom, while removing the control without analysis could leave the risk unmanaged.",
      "topic": "Information Security Governance",
      "subtopic": "Organizational Culture",
      "difficulty": "hard",
      "source": "CISM Job Practice, Domain 1A Enterprise Governance – Organizational Culture"
    },
    {
      "stem": "During a risk assessment, the information security manager finds that the likelihood of a particular threat is difficult to estimate because the organization has little historical data about it. Which of the following is the BEST approach?",
      "options": [
        "Postpone the assessment until enough incident data has been collected",
        "Assign the highest possible likelihood rating to the threat",
        "Use qualitative ratings based on expert judgment and documented assumptions",
        "Exclude the threat until it has materialized at least once"
      ],
      "answer": "C",
      "explanation": "Qualitative analysis using informed expert judgment is the accepted approach when reliable historical data is not available. Documenting the assumptions makes the rating transparent and allows it to be refined as more information becomes available. Delaying the assessment or excluding the threat leaves the risk unmanaged, and defaulting to the highest rating distorts priorities and resource allocation.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Assessment and Analysis",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 2A Information Security Risk Assessment – Risk Assessment and Analysis (qualitative analysis)"
    },
    {
      "stem": "Which of the following is in the BEST position to decide whether to accept a risk affecting a business process?",
      "options": [
        "The business process owner",
        "The information security manager",
        "The internal audit manager",
        "The IT operations manager"
      ],
      "answer": "A",
      "explanation": "Risk acceptance is a business decision, so it belongs to the risk owner: the person with the accountability and authority to manage the risk, typically the owner of the affected business process. The information security manager advises on the risk and the treatment options but does not own business risk. Internal audit must remain independent, and IT operations manages technical activities rather than owning business risk.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk and Control Ownership",
      "difficulty": "easy",
      "source": "CISM Job Practice, Domain 2B Information Security Risk Response – Risk and Control Ownership"
    },
    {
      "stem": "An organization has purchased a cyber insurance policy that covers the financial costs of a customer data breach. Which of the following BEST describes the effect of this decision?",
      "options": [
        "Responsibility for protecting the customer data has passed to the insurer",
        "The risk has been eliminated and no longer needs to be monitored",
        "The organization is relieved of its breach notification obligations",
        "The financial impact is shared, but accountability remains with the organization"
      ],
      "answer": "D",
      "explanation": "Insurance is a form of risk transfer (sharing), which shifts some or all of the financial consequences of a loss to another party. Accountability for protecting the data, legal and regulatory obligations such as breach notification, and reputational impact all remain with the organization. The underlying risk still exists and must continue to be monitored.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Treatment / Risk Response Options",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 2B Information Security Risk Response – Risk Treatment / Risk Response Options (risk transfer)"
    },
    {
      "stem": "Which of the following is the MOST important characteristic of an effective key risk indicator (KRI)?",
      "options": [
        "It is derived from historical counts of security incidents",
        "It provides early warning that exposure is approaching a defined threshold",
        "It is reported to the board of directors every quarter",
        "It measures how well individual security controls are performing"
      ],
      "answer": "B",
      "explanation": "A key risk indicator is valuable because it signals a change in risk exposure before an impact occurs, giving management time to act before risk tolerance is exceeded. Historical incident counts are lagging rather than leading measures. Measuring how well controls perform is the role of control or performance indicators, and the frequency of board reporting does not make an indicator effective.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Monitoring and Reporting",
      "difficulty": "hard",
      "source": "CISM Job Practice, Domain 2B Information Security Risk Response – Risk Monitoring and Reporting (key risk indicators)"
    },
    {
      "stem": "Which of the following should be the PRIMARY basis for assigning a classification level to an information asset?",
      "options": [
        "The replacement cost of the systems that store the asset",
        "The number of employees who need access to the asset",
        "The business impact of unauthorized disclosure or loss of the asset",
        "The storage location and format of the asset"
      ],
      "answer": "C",
      "explanation": "Classification should reflect the asset's value to the organization, which is determined by the business impact if its confidentiality, integrity or availability were compromised. This makes protection proportionate to the asset's sensitivity and criticality. Hardware replacement cost, the number of users and the storage location do not measure how harmful a compromise of the information itself would be.",
      "topic": "Information Security Program",
      "subtopic": "Information Asset Identification and Classification",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 3A Information Security Program Development – Information Asset Identification and Classification"
    },
    {
      "stem": "Which of the following BEST describes the purpose of an information security policy?",
      "options": [
        "Detailed, step-by-step instructions for performing security tasks",
        "Recommended practices that staff may follow at their discretion",
        "Mandatory technical configuration settings for each platform",
        "A high-level statement of management's intent and direction on security"
      ],
      "answer": "D",
      "explanation": "A policy is a high-level, mandatory statement of management's intent, expectations and direction. Standards set specific mandatory requirements such as configuration settings, procedures give step-by-step instructions, and guidelines offer discretionary recommendations. Keeping policies high level lets them remain stable while the supporting documents change with technology and practice.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Policies, Procedures, and Guidelines",
      "difficulty": "easy",
      "source": "CISM Job Practice, Domain 3A Information Security Program Development – Information Security Policies, Procedures, and Guidelines"
    },
    {
      "stem": "An organization plans to outsource the processing of sensitive customer data to a third-party provider. Which of the following should the information security manager ensure is done FIRST?",
      "options": [
        "A security risk assessment of the provider is performed before contract signing",
        "The provider's staff complete the organization's security awareness training",
        "The provider's systems are added to the internal vulnerability scanning schedule",
        "A joint incident response exercise is conducted with the provider"
      ],
      "answer": "A",
      "explanation": "Before sensitive data is entrusted to a third party, the organization must understand the risk the relationship introduces, so due diligence through a security risk assessment comes first. Its results determine whether to proceed and which security requirements, right-to-audit clauses and service levels must be written into the contract. The other activities may follow, but only once the provider has been assessed and formally engaged.",
      "topic": "Information Security Program",
      "subtopic": "Management of External Services (e.g., providers, suppliers, third parties, fourth parties)",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 3B Information Security Program Management – Management of External Services (third-party risk)"
    },
    {
      "stem": "Which of the following metrics would be MOST useful to senior management in evaluating the effectiveness of the information security program?",
      "options": [
        "Number of malware attachments blocked at the email gateway each month",
        "Number of firewall rule changes approved by the change advisory board",
        "Trend in residual risk to critical business processes against risk appetite",
        "Average number of days taken to apply operating system patches"
      ],
      "answer": "C",
      "explanation": "Senior management needs metrics that relate security to business objectives and risk appetite so it can judge whether the program is keeping risk at an acceptable level, and a trend in residual risk to critical processes does exactly that. Counts of blocked malware, firewall changes or patching times are operational metrics that are useful to technical managers. On their own they do not show whether the program is effective in business terms.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Program Metrics",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 3A Information Security Program Development – Information Security Program Metrics"
    },
    {
      "stem": "Testing confirms that a newly implemented access control is operating exactly as designed, yet incidents of the type it was meant to prevent continue to occur. Which of the following is the MOST likely explanation?",
      "options": [
        "The control's operation has degraded since it was tested",
        "The control's design does not fully address the threat scenario",
        "The testing was not performed by an independent party",
        "Users are misreporting unrelated events as incidents"
      ],
      "answer": "B",
      "explanation": "Control evaluation considers both design effectiveness and operating effectiveness. If testing shows that the control operates as designed but the targeted incidents still occur, the most likely problem is the design: the control does not address the actual threat scenario or attack path. The remedy is to reassess the risk and redesign or supplement the control rather than simply retest its operation.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Control Testing and Evaluation",
      "difficulty": "hard",
      "source": "CISM Job Practice, Domain 3B Information Security Program Management – Information Security Control Testing and Evaluation"
    },
    {
      "stem": "Which of the following is the BEST indicator of the effectiveness of a security awareness program?",
      "options": [
        "A decline over time in employees failing simulated phishing tests",
        "The percentage of employees who completed the annual training course",
        "The number of awareness newsletters published during the year",
        "Employee satisfaction scores collected after each training session"
      ],
      "answer": "A",
      "explanation": "The goal of awareness training is to change behavior, so the best indicator is a measurable improvement in how people act, such as a falling failure rate in simulated phishing exercises over time. Completion rates, the volume of materials published and satisfaction scores measure activity or opinion. They do not show whether employees actually behave more securely.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Awareness and Training",
      "difficulty": "easy",
      "source": "CISM Job Practice, Domain 3B Information Security Program Management – Information Security Awareness and Training"
    },
    {
      "stem": "An organization wants to obtain independent certification of its information security management system (ISMS) against an internationally recognized standard. Which of the following should it use as the basis for certification?",
      "options": [
        "ISO/IEC 27002",
        "NIST SP 800-53",
        "COBIT 2019",
        "ISO/IEC 27001"
      ],
      "answer": "D",
      "explanation": "ISO/IEC 27001 specifies the requirements for establishing, implementing, maintaining and continually improving an ISMS, and organizations can be independently audited and certified against it. ISO/IEC 27002 provides guidance on implementing controls but is not a certifiable standard. NIST SP 800-53 is a catalog of security and privacy controls, and COBIT is a governance framework; neither is used to certify an ISMS.",
      "topic": "Information Security Program",
      "subtopic": "Industry Standards and Frameworks for Information Security",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 3A – Industry Standards and Frameworks for Information Security; ISO/IEC 27001 scope"
    },
    {
      "stem": "Which of the following is the PRIMARY output of a business impact analysis (BIA)?",
      "options": [
        "An inventory of technical vulnerabilities in critical systems",
        "The selection of an alternate processing facility",
        "Recovery priorities and time objectives for critical business processes",
        "Step-by-step procedures for restoring systems after a disaster"
      ],
      "answer": "C",
      "explanation": "A BIA identifies critical business processes and how the impact of their disruption grows over time, which allows the organization to set recovery priorities and objectives such as maximum tolerable downtime, recovery time objectives and recovery point objectives. These results then drive the choice of recovery strategies, such as the type of alternate site, and the writing of detailed recovery procedures. Identifying vulnerabilities belongs to risk assessment, not the BIA.",
      "topic": "Incident Management",
      "subtopic": "Business Impact Analysis (BIA)",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 4A Incident Management Readiness – Business Impact Analysis (BIA)"
    },
    {
      "stem": "Which of the following is the PRIMARY purpose of an incident response plan?",
      "options": [
        "To identify and discipline the individuals responsible for incidents",
        "To enable a timely, consistent response that limits business impact",
        "To prevent all future security incidents from occurring",
        "To produce the evidence required to pass compliance audits"
      ],
      "answer": "B",
      "explanation": "An incident response plan exists so the organization can detect, respond to and recover from incidents in an organized, timely and consistent way, limiting damage and business impact. No plan can prevent all incidents. While the plan may support investigations and audits, assigning blame and producing compliance evidence are not its primary purpose.",
      "topic": "Incident Management",
      "subtopic": "Incident Response Plan",
      "difficulty": "easy",
      "source": "CISM Job Practice, Domain 4A Incident Management Readiness – Incident Response Plan"
    },
    {
      "stem": "A server containing sensitive data has been compromised, and management believes legal action against the attacker is likely. The server has already been isolated from the network. Which of the following should the incident response team do NEXT?",
      "options": [
        "Reboot the server to terminate any malicious processes",
        "Run antivirus software on the server to remove the malware",
        "Restore the server from the most recent clean backup",
        "Capture a forensic image of the server and record the chain of custody"
      ],
      "answer": "D",
      "explanation": "When legal action is likely, evidence must be preserved in a forensically sound manner before anything alters the system. Capturing a forensic image, including volatile data where possible, and documenting the chain of custody keeps the evidence admissible and allows analysis to be done on a copy. Rebooting, running antivirus or restoring from backup would change or destroy the evidence.",
      "topic": "Incident Management",
      "subtopic": "Incident Investigation and Evaluation",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 4B Incident Management Operations – Incident Investigation and Evaluation (evidence handling, chain of custody)"
    },
    {
      "stem": "A payment processing system has a recovery point objective (RPO) close to zero and a recovery time objective (RTO) of 24 hours. Which of the following recovery strategies would BEST meet the RPO requirement?",
      "options": [
        "Synchronous replication of transaction data to a remote site",
        "A hot site with fully configured hardware and network connections",
        "Hourly incremental backups stored at an offsite facility",
        "Daily full backups copied to a cloud storage service"
      ],
      "answer": "A",
      "explanation": "The RPO defines how much data loss is tolerable, measured back from the point of disruption, so a near-zero RPO requires data to be copied to another location as each transaction is committed, which synchronous replication provides. A hot site addresses recovery time, which is not the constraint here given a 24-hour RTO, and it does not by itself protect the most recent data. Hourly or daily backups would lose up to an hour or a day of transactions.",
      "topic": "Incident Management",
      "subtopic": "Disaster Recovery Plan (DRP)",
      "difficulty": "hard",
      "source": "CISM Job Practice, Domain 4A Incident Management Readiness – Disaster Recovery Plan (RPO, RTO and recovery strategies)"
    },
    {
      "stem": "Which of the following types of test involves incident response team members discussing their roles and actions in response to a simulated scenario, without affecting any production systems?",
      "options": [
        "Full interruption test",
        "Tabletop exercise",
        "Parallel test",
        "Penetration test"
      ],
      "answer": "B",
      "explanation": "A tabletop exercise is a discussion-based test in which participants walk through a scenario and talk through their roles, decisions and actions without touching production systems. It is a low-cost way to validate plan content and the team's understanding of it. Parallel and full interruption tests involve actual recovery processing, and a penetration test assesses technical vulnerabilities rather than the plan.",
      "topic": "Incident Management",
      "subtopic": "Incident Management Training, Testing, and Evaluation",
      "difficulty": "easy",
      "source": "CISM Job Practice, Domain 4A Incident Management Readiness – Incident Management Training, Testing, and Evaluation (test types)"
    },
    {
      "stem": "After a major security incident has been resolved, which of the following should be the PRIMARY objective of the post-incident review?",
      "options": [
        "Determining which employees should face disciplinary action",
        "Calculating the total cost of the incident for an insurance claim",
        "Identifying improvements to controls and to the response process",
        "Confirming that affected systems have returned to normal operation"
      ],
      "answer": "C",
      "explanation": "The post-incident (lessons learned) review establishes what happened, why it happened and how well the response worked, so that controls and the incident response process can be improved. Confirming that systems are back to normal is part of recovery, which should already be complete. Cost figures may be gathered during the review but are not its main purpose, and a blame-focused review discourages open reporting.",
      "topic": "Incident Management",
      "subtopic": "Post-incident Review Practices",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 4B Incident Management Operations – Post-incident Review Practices"
    }
  ]
}
```
