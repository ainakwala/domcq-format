```json
{
  "format": "domcq/1",
  "exam": "cism",
  "set": "Certified Information Security Manager (CISM) practice – All-domain mixed set",
  "questions": [
    {
      "stem": "Which of the following is ULTIMATELY accountable for information security governance in an organization?",
      "options": [
        "The chief information security officer",
        "The cross-functional IT steering committee",
        "The board of directors and executive management",
        "The data owners and data custodians"
      ],
      "answer": "C",
      "explanation": "Governance is a responsibility of the board and executive management. They set direction, approve risk appetite and answer to stakeholders for how information risk is managed. The CISO and committees carry out and coordinate security activities, and responsibility can be delegated to them, but accountability for governance stays at the top. ISACA treats information security governance as part of enterprise governance for this reason.",
      "rationales": {
        "A": "The CISO manages and runs the security program but answers to senior management, so the CISO is not ultimately accountable for governance.",
        "B": "A steering committee coordinates and prioritizes activities across functions. It supports governance but does not hold ultimate accountability.",
        "C": "Correct: information security governance is part of enterprise governance, and the board and executive management are accountable for it.",
        "D": "Owners are accountable for specific assets and custodians implement their protection, but neither is accountable for governance overall."
      },
      "topic": "Information Security Governance",
      "subtopic": "Organizational Structures, Roles, and Responsibilities",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 1: Information Security Governance – Organizational Structures, Roles, and Responsibilities"
    },
    {
      "stem": "A new data protection regulation will apply to an organization in 12 months. Which of the following should the information security manager do FIRST?",
      "options": [
        "Determine how the regulation applies and identify gaps in current practices",
        "Purchase tools that vendors market as ensuring compliance with the regulation",
        "Rewrite the security policy so that it restates the regulation's requirements",
        "Ask internal audit to test the organization's compliance with the regulation"
      ],
      "answer": "A",
      "explanation": "Before committing resources, the manager needs to know which requirements actually apply to the organization and where current controls and processes fall short. A gap analysis provides the basis for a prioritized, risk-based compliance plan and for budget requests. Buying tools, rewriting policy and auditing compliance all come later, and without this understanding they would be aimed at the wrong things.",
      "rationales": {
        "A": "Correct: understanding how the regulation applies and where the gaps are is the basis for any compliance plan, budget or control change.",
        "B": "Buying tools before the applicable requirements and gaps are known risks spending money on controls that do not meet the real need.",
        "C": "Policy states management intent. Restating the regulation before analyzing its impact adds little and may not reflect what must change.",
        "D": "Testing compliance before the requirements are understood and addressed would only confirm gaps that are still unknown, so it is not the first step."
      },
      "topic": "Information Security Governance",
      "subtopic": "Legal, Regulatory, and Contractual Requirements",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 1: Information Security Governance – Legal, Regulatory, and Contractual Requirements"
    },
    {
      "stem": "Senior management has previously rejected security proposals, describing them as technical spending with unclear value. The information security manager is now preparing a business case for a data loss prevention (DLP) program. Which of the following would BEST support the business case?",
      "options": [
        "A comparison of the organization's security spending with industry peers",
        "A list of the technical vulnerabilities found in the latest penetration test",
        "A summary of the features offered by the leading DLP product vendors",
        "An analysis of the program's risk reduction for key processes against its cost"
      ],
      "answer": "D",
      "explanation": "A business case persuades decision makers by showing value in their own terms. It explains how the investment reduces risk to the processes and objectives the business cares about, and whether that benefit justifies the cost. Senior management can then weigh it against other uses of funds and against the organization's risk appetite. Peer spending, technical findings and product features can support the case, but none of them shows business value on its own.",
      "rationales": {
        "A": "Peer benchmarks show relative spending, not whether this program addresses the organization's own risks or justifies its cost.",
        "B": "Technical findings may help explain the need, but they do not translate the risk into business impact or show the program's value.",
        "C": "Product features describe possible solutions. They do not show why the business should invest or what benefit it will receive.",
        "D": "Correct: tying risk reduction for key business processes to cost shows business value and supports an informed funding decision."
      },
      "topic": "Information Security Governance",
      "subtopic": "Strategic Planning (e.g., budgets, resources, business case)",
      "difficulty": "hard",
      "source": "CISM Review Manual, Domain 1: Information Security Governance – Strategic Planning (budgets, resources, business case)"
    },
    {
      "stem": "An organization purchases a cyber insurance policy to cover financial losses that could result from a data breach. Which risk response does this represent?",
      "options": [
        "Risk acceptance",
        "Risk transfer",
        "Risk avoidance",
        "Risk mitigation"
      ],
      "answer": "B",
      "explanation": "Insurance shifts some or all of the financial impact of a risk event to a third party, which is risk transfer (also called risk sharing). It does not make a breach less likely. The organization also stays accountable for protecting the data and for consequences such as reputational damage and regulatory obligations. For this reason, transfer is usually combined with other responses rather than used alone.",
      "rationales": {
        "A": "Acceptance means taking on the risk without further action, whereas buying insurance is an active step to shift the financial impact.",
        "B": "Correct: insurance transfers or shares the financial impact of the risk with a third party, though accountability stays with the organization.",
        "C": "Avoidance means stopping the activity that creates the risk, such as no longer holding the data, and that is not what happened here.",
        "D": "Mitigation uses controls to reduce likelihood or impact. Insurance does not change the chance of a breach occurring."
      },
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Treatment / Risk Response Options",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 2: Information Security Risk Management – Risk Treatment / Risk Response Options"
    },
    {
      "stem": "After planned controls are implemented, some residual risk remains for a critical customer billing application. Who should decide whether this residual risk is acceptable?",
      "options": [
        "The information security manager",
        "The IT operations manager",
        "The head of internal audit",
        "The business owner of the application"
      ],
      "answer": "D",
      "explanation": "Accepting risk is a business decision, so it belongs to the risk owner. That is the business manager who is accountable for the process or asset and who bears the consequences if the risk materializes. The information security manager advises on the level of risk and the treatment options but should not make the acceptance decision for the business. Acceptance should be documented, and it should be escalated when the risk exceeds the owner's authority or the organization's appetite.",
      "rationales": {
        "A": "The security manager assesses risk and recommends treatment but should not accept risk on behalf of the business.",
        "B": "IT operations runs the systems as a custodian. It does not own the business risk or bear its consequences.",
        "C": "Internal audit must stay independent to provide assurance, and accepting risk would compromise that independence.",
        "D": "Correct: the business owner is the risk owner, accountable for the process and best placed to weigh the risk against the business benefit."
      },
      "topic": "Information Security Risk Management",
      "subtopic": "Risk and Control Ownership",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 2: Information Security Risk Management – Risk and Control Ownership"
    },
    {
      "stem": "Which of the following is the PRIMARY advantage of a quantitative risk analysis over a qualitative risk analysis?",
      "options": [
        "It expresses risk in monetary terms that support cost-benefit decisions",
        "It removes subjective judgment from estimates of likelihood and impact",
        "It can be completed more quickly and with fewer resources",
        "It identifies a wider range of relevant threats and vulnerabilities"
      ],
      "answer": "A",
      "explanation": "Quantitative analysis puts numeric, usually financial, values on impact and frequency, for example as annualized loss expectancy. Management can then compare the expected loss with the cost of controls. It still relies on estimates and assumptions, so it does not remove judgment, and it usually needs more data and effort than qualitative methods. Threats are identified before the analysis begins, so the choice of method does not change how many are found.",
      "rationales": {
        "A": "Correct: monetary values such as annualized loss expectancy allow expected loss to be compared directly with control costs.",
        "B": "Quantitative inputs are still estimates based on assumptions, so subjective judgment is reduced but not removed.",
        "C": "Quantitative analysis usually needs more data, time and expertise than qualitative analysis, not less.",
        "D": "Threats and vulnerabilities are identified before the analysis, so the method chosen does not widen their range."
      },
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Assessment and Analysis",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 2: Information Security Risk Management – Risk Assessment and Analysis"
    },
    {
      "stem": "An information security manager is selecting a key risk indicator (KRI) for an internet-facing customer portal. The goal is to warn management that exposure is increasing before an incident occurs. Which of the following would be the MOST effective KRI?",
      "options": [
        "Number of security incidents that affected the portal last quarter",
        "Percentage of portal administrators who completed security training",
        "Number of critical portal vulnerabilities open past their remediation deadline",
        "Average time taken to close security incident tickets for the portal"
      ],
      "answer": "C",
      "explanation": "A good KRI is a leading indicator. It tracks a condition that raises the likelihood or impact of a risk event, so that action can be taken before a loss occurs. Overdue critical vulnerabilities on an internet-facing system directly measure growing exposure and can be compared with thresholds tied to risk appetite. Incident counts and ticket closure times are lagging measures of events that have already happened. Training completion measures how a control activity is performing, not the risk itself.",
      "rationales": {
        "A": "Incident counts are lagging. They show that the risk has already materialized rather than warning that exposure is rising.",
        "B": "Training completion measures how a control activity is performing and is only loosely linked to the portal's exposure.",
        "C": "Correct: overdue critical vulnerabilities are a leading indicator of rising exposure and can be tied to thresholds.",
        "D": "Ticket closure time is a lagging performance measure of the response process, not an early warning of risk."
      },
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Monitoring and Reporting",
      "difficulty": "hard",
      "source": "CISM Review Manual, Domain 2: Information Security Risk Management – Risk Monitoring and Reporting (key risk indicators)"
    },
    {
      "stem": "Which of the following should be the PRIMARY basis for assigning a classification level to an information asset?",
      "options": [
        "The cost of the system on which the information is stored",
        "The impact on the business if the information is compromised",
        "The number of users who need access to the information",
        "The security controls that currently protect the information"
      ],
      "answer": "B",
      "explanation": "Classification reflects how sensitive and critical information is, and that is determined by the business impact of losing its confidentiality, integrity or availability. Once the level is set, it drives the handling requirements and controls that must be applied. Controls therefore follow from classification rather than defining it. Storage cost and number of users do not show how much harm a compromise would cause.",
      "rationales": {
        "A": "The cost of the hardware or system does not reflect the sensitivity or criticality of the information it holds.",
        "B": "Correct: classification is based on sensitivity and criticality, measured by the business impact of a compromise.",
        "C": "The number of users affects access management but does not determine how damaging a compromise would be.",
        "D": "Controls should be chosen based on classification, so using existing controls as the basis reverses that logic."
      },
      "topic": "Information Security Program",
      "subtopic": "Information Asset Identification and Classification",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Information Asset Identification and Classification"
    },
    {
      "stem": "Each month, an information security manager reports to the board the number of intrusion attempts blocked by the organization's firewalls. Which of the following is the PRIMARY weakness of this metric?",
      "options": [
        "It is difficult to collect consistently from month to month",
        "It relies on data produced by a single type of technology",
        "It is likely to fluctuate widely from one month to the next",
        "It does not show whether security objectives are being achieved"
      ],
      "answer": "D",
      "explanation": "Metrics for the board should show whether the security program is meeting its objectives and keeping risk within appetite. A count of blocked attempts is an operational figure. It mostly reflects attacker activity, says nothing about attacks that succeeded or went undetected, and gives the board nothing to base decisions on. Metrics should be linked to business and security objectives and be meaningful to the audience that receives them.",
      "rationales": {
        "A": "Firewall logs make this count easy to collect automatically, so collection is not its main weakness.",
        "B": "A single data source limits coverage, but the bigger problem is that the figure is not linked to objectives.",
        "C": "The ups and downs reflect attacker activity and can be trended, so they are not the main reason the metric fails the board.",
        "D": "Correct: the count does not tell the board whether objectives are met or risk is within appetite, so it cannot guide decisions."
      },
      "topic": "Information Security Program",
      "subtopic": "Information Security Program Metrics",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Information Security Program Metrics"
    },
    {
      "stem": "An organization is about to engage a cloud service provider to process sensitive customer data. Which of the following is the MOST effective way to ensure that the provider meets the organization's security requirements?",
      "options": [
        "Include the security requirements and a right-to-audit clause in the contract",
        "Require the provider to complete an annual security self-assessment questionnaire",
        "Obtain a copy of the provider's information security policy before signing",
        "Perform a site visit to the provider's facilities after the service goes live"
      ],
      "answer": "A",
      "explanation": "Contract terms are what make security requirements enforceable. They define what the provider must do, how it will show compliance and what happens if it does not. A right-to-audit clause, or agreed independent assurance reports, lets the organization check compliance over time. Questionnaires, policies and site visits provide useful information, but none of them binds the provider to meet the requirements.",
      "rationales": {
        "A": "Correct: contract terms make the requirements binding, and the audit right allows compliance to be checked on an ongoing basis.",
        "B": "A self-assessment relies on the provider's own claims and does not create an enforceable obligation.",
        "C": "A policy shows the provider's intentions but does not commit it to the organization's specific requirements.",
        "D": "A visit after go-live is too late to shape the provider's obligations and gives only a point-in-time view."
      },
      "topic": "Information Security Program",
      "subtopic": "Management of External Services (e.g., providers, suppliers, third parties, fourth parties)",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Management of External Services (providers, suppliers, third parties)"
    },
    {
      "stem": "Two proposed controls would each reduce a risk to within the organization's risk appetite. Control X has a lower purchase price but needs substantial ongoing manual effort to operate, while Control Y costs more to acquire but is largely automated. Which of the following should be the PRIMARY basis for choosing between them?",
      "options": [
        "The initial acquisition cost of each control",
        "The amount by which each control reduces the risk",
        "The total cost of ownership of each control over its life",
        "The extent to which industry peers have adopted each control"
      ],
      "answer": "C",
      "explanation": "When both options bring the risk within appetite, the aim is to reach that result at the lowest overall cost to the organization. Total cost of ownership covers acquisition, implementation, staffing, maintenance and operating costs over the control's life. It therefore captures the ongoing manual effort that the purchase price hides. Reducing risk further than the appetite requires is a secondary consideration once both options meet it.",
      "rationales": {
        "A": "The purchase price ignores operating, staffing and maintenance costs, and for Control X those costs are substantial.",
        "B": "Both controls already meet the risk appetite, so any additional reduction matters less than meeting it cost-effectively.",
        "C": "Correct: total cost of ownership reflects all costs over the control's life and identifies the most cost-effective option.",
        "D": "Peer adoption may say something about feasibility but does not show which control is more cost-effective for this organization."
      },
      "topic": "Information Security Program",
      "subtopic": "Information Security Control Design and Selection",
      "difficulty": "hard",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Information Security Control Design and Selection (total cost of ownership)"
    },
    {
      "stem": "Which of the following is MOST appropriate to include in an information security policy?",
      "options": [
        "Step-by-step instructions for configuring server security settings",
        "High-level statements of management's intent and direction",
        "Recommended practices that staff may follow at their discretion",
        "The specific product versions approved for use on endpoints"
      ],
      "answer": "B",
      "explanation": "Policies are high-level statements of management's intent, expectations and direction, and they should stay stable as technology changes. Detailed mandatory requirements belong in standards, step-by-step instructions belong in procedures, and optional advice belongs in guidelines. Keeping these layers separate makes policies easier to approve, communicate and maintain.",
      "rationales": {
        "A": "Step-by-step instructions are procedures. They support policy and change more often than a policy should.",
        "B": "Correct: a policy states management's intent and direction at a high level and is supported by standards and procedures.",
        "C": "Optional recommendations are guidelines, whereas policy statements are mandatory expressions of management intent.",
        "D": "Approved products and versions are specific requirements, so they belong in standards rather than in the policy itself."
      },
      "topic": "Information Security Program",
      "subtopic": "Information Security Policies, Procedures, and Guidelines",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Information Security Policies, Procedures, and Guidelines"
    },
    {
      "stem": "Which of the following would BEST indicate that an organization's security awareness program is effective?",
      "options": [
        "The number of employees who attended awareness sessions this year",
        "Positive feedback scores from employees on the training content",
        "The number of awareness messages distributed on the intranet",
        "A sustained drop in staff responses to simulated phishing emails"
      ],
      "answer": "D",
      "explanation": "Awareness training aims to change behavior, so the best evidence that it works is a measurable improvement in how people act when they face real or simulated threats. A sustained fall in phishing simulation failure rates shows that staff are recognizing and resisting attacks. Attendance, satisfaction scores and message counts measure activity or opinion, not whether behavior has changed.",
      "rationales": {
        "A": "Attendance shows how far the program reached, not whether employees changed how they behave.",
        "B": "Satisfaction scores show that employees liked the content, which does not prove their security behavior improved.",
        "C": "Message counts measure program activity rather than its effect on employee behavior.",
        "D": "Correct: a sustained fall in simulated phishing responses is direct evidence that staff behavior has improved."
      },
      "topic": "Information Security Program",
      "subtopic": "Information Security Awareness and Training",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Information Security Awareness and Training"
    },
    {
      "stem": "Senior management wants assurance that a key user access review control operated effectively throughout the past year. Which of the following provides the MOST reliable evidence?",
      "options": [
        "Independent testing of a sample of reviews performed across the year",
        "An interview with the control owner about how reviews are performed",
        "A walkthrough of the documented access review procedure with the owner",
        "A self-assessment completed by the managers who perform the reviews"
      ],
      "answer": "A",
      "explanation": "Showing operating effectiveness takes evidence that the control actually worked as designed over the period. That means testing instances of its operation, for example sampling completed reviews and checking that inappropriate access was removed. Evidence gathered by an independent party is more reliable than statements from the people who run the control. Interviews, walkthroughs and self-assessments mainly show how the control is supposed to work, or depend on the operators' own view.",
      "rationales": {
        "A": "Correct: independent sample testing across the period gives direct, objective evidence that the control operated as designed.",
        "B": "An interview gives the owner's own account, which is not objective evidence that the control operated over the period.",
        "C": "A walkthrough confirms how the procedure is designed, not that it was performed consistently throughout the year.",
        "D": "Self-assessments lack independence because the people performing the control are evaluating themselves."
      },
      "topic": "Information Security Program",
      "subtopic": "Information Security Control Testing and Evaluation",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Information Security Control Testing and Evaluation"
    },
    {
      "stem": "What is the PRIMARY purpose of a business impact analysis (BIA)?",
      "options": [
        "To identify the threats and vulnerabilities affecting IT systems",
        "To verify that the disaster recovery plan works as designed",
        "To determine the impact of disruption and set recovery priorities",
        "To calculate the insurance coverage needed for business interruption"
      ],
      "answer": "C",
      "explanation": "A BIA identifies the organization's critical business processes and how their disruption affects the business over time, including financial, operational, legal and reputational effects. Its results set recovery priorities and recovery objectives such as RTO and RPO, which in turn drive the continuity and recovery strategies. Identifying threats and vulnerabilities is part of risk assessment, and checking that a plan works is done through testing.",
      "rationales": {
        "A": "Identifying threats and vulnerabilities is part of risk assessment, whereas a BIA focuses on the impact of disruption.",
        "B": "Plans are verified through testing. The BIA comes earlier and informs what the plan must achieve.",
        "C": "Correct: the BIA determines how disruption affects critical processes over time, and this sets recovery priorities and objectives.",
        "D": "BIA results may inform insurance decisions, but calculating coverage is not the BIA's primary purpose."
      },
      "topic": "Incident Management",
      "subtopic": "Business Impact Analysis (BIA)",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 4: Incident Management – Business Impact Analysis (BIA)"
    },
    {
      "stem": "An organization determines that it can tolerate losing no more than four hours of transaction data from its order processing system after a disruption. Which recovery parameter does this define?",
      "options": [
        "Recovery time objective (RTO)",
        "Recovery point objective (RPO)",
        "Maximum tolerable outage (MTO)",
        "Service delivery objective (SDO)"
      ],
      "answer": "B",
      "explanation": "The RPO is the point in time to which data must be restored, which is the same as the maximum data loss the business can tolerate. A four-hour RPO means backups or replication must capture data at least every four hours. RTO and MTO are about how long processing can be unavailable or run in alternate mode. The SDO is the level of service required during alternate processing.",
      "rationales": {
        "A": "The RTO is the time within which the system must be restored, not the amount of data that may be lost.",
        "B": "Correct: the RPO sets the maximum tolerable data loss, measured back from the point of disruption.",
        "C": "The MTO is how long the organization can operate without normal processing, so it is about duration rather than data loss.",
        "D": "The SDO is the level of service required during alternate processing, not the tolerable amount of data loss."
      },
      "topic": "Incident Management",
      "subtopic": "Disaster Recovery Plan (DRP)",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 4: Incident Management – Disaster Recovery Plan (DRP), recovery objectives (RTO, RPO)"
    },
    {
      "stem": "A security analyst confirms that a file server is infected with ransomware that is actively attempting to encrypt shared drives across the network. Which of the following should be done FIRST?",
      "options": [
        "Isolate the infected server from the network",
        "Restore the affected files from the latest backup",
        "Rebuild the server from a trusted system image",
        "Identify the ransomware strain to find a decryptor"
      ],
      "answer": "A",
      "explanation": "Once an incident is confirmed, containment comes before eradication and recovery, because the priority is to stop the damage from spreading. Isolating the server stops it encrypting further shares and limits the attacker's reach, while keeping the system available for evidence collection. Restoring or rebuilding before containment risks reinfection and loss of evidence. Identifying the strain can wait until the spread has been stopped.",
      "rationales": {
        "A": "Correct: isolating the server contains the incident, stopping further encryption while preserving the system for investigation.",
        "B": "Restoring files before the infection is contained risks the restored files being encrypted again.",
        "C": "Rebuilding is an eradication step that should come after containment and evidence preservation, not before them.",
        "D": "Identifying the strain helps with recovery planning but delays the urgent need to stop the spread."
      },
      "topic": "Incident Management",
      "subtopic": "Incident Containment Methods",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 4: Incident Management – Incident Containment Methods"
    },
    {
      "stem": "During an investigation, an analyst confirms that cardholder data was copied from a payment server to an external IP address. The incident response plan requires senior management to be notified of any confirmed data exfiltration. The team lead suggests finishing containment first so that management receives a complete picture. Which of the following is the BEST course of action for the information security manager?",
      "options": [
        "Wait until containment is complete so management gets full information",
        "Notify affected cardholders directly before informing senior management",
        "Report to law enforcement first and defer internal escalation until later",
        "Escalate to senior management now while the team continues containment"
      ],
      "answer": "D",
      "explanation": "An incident response plan sets escalation criteria so that decision makers learn of an incident in time to act on its legal, regulatory, customer and business implications, such as notification deadlines and bringing in legal counsel. Once the criteria are met, escalation should happen promptly and run in parallel with the technical response, and management can be updated as more information comes in. Holding back escalation to get a complete picture defeats the purpose of predefined criteria and can cause the organization to miss its obligations.",
      "rationales": {
        "A": "Waiting delays decisions that management must make, such as legal and regulatory notifications, and ignores the plan's criteria.",
        "B": "Notifying customers is a business and legal decision for management, and informing them first bypasses escalation.",
        "C": "Management decides whether and when to involve law enforcement, so this is no reason to defer internal escalation.",
        "D": "Correct: the plan's criteria are met, so escalate promptly and provide updates as containment and investigation continue."
      },
      "topic": "Incident Management",
      "subtopic": "Incident Response Communications (e.g., reporting, notification, escalation)",
      "difficulty": "hard",
      "source": "CISM Review Manual, Domain 4: Incident Management – Incident Response Communications (reporting, notification, escalation)"
    },
    {
      "stem": "Following the resolution of a major security incident, which of the following should be the PRIMARY focus of the post-incident review?",
      "options": [
        "Identifying the employees responsible for the incident",
        "Identifying improvements to the response plan and controls",
        "Calculating the incident's cost for the annual report",
        "Confirming that all affected systems are back in service"
      ],
      "answer": "B",
      "explanation": "A post-incident (lessons-learned) review looks at what happened, the root cause and how well detection and response worked. The findings are used to improve the incident response plan, procedures and controls, reducing the likelihood and impact of similar incidents in future. A review focused on blame discourages openness. Cost figures and system status are inputs to the review, not its main purpose.",
      "rationales": {
        "A": "A review focused on blame discourages honest reporting and does not address root causes or weaknesses in the process.",
        "B": "Correct: lessons learned should improve the plan, procedures and controls so that similar incidents are prevented or handled better.",
        "C": "Cost information may be gathered during the review, but gathering it is not the review's primary purpose.",
        "D": "Restoring service is part of recovery and should be finished before the review, so it is not the review's focus."
      },
      "topic": "Incident Management",
      "subtopic": "Post-incident Review Practices",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 4: Incident Management – Post-incident Review Practices (lessons learned)"
    },
    {
      "stem": "An organization has updated its business continuity and disaster recovery plans. Management wants to verify that critical systems can actually be recovered and run at the alternate site, without disrupting production operations. Which type of test would BEST meet this requirement?",
      "options": [
        "Checklist review",
        "Tabletop walk-through",
        "Parallel test",
        "Full interruption test"
      ],
      "answer": "C",
      "explanation": "In a parallel test, the recovery site is brought to operational readiness and critical systems are recovered and run there while the primary site carries on with normal processing. This demonstrates recovery capability without affecting production. Checklist reviews and tabletop walk-throughs check the plan's content and the participants' understanding, but they do not recover any systems. A full interruption test gives the highest assurance but deliberately shuts down production, which is exactly the disruption management wants to avoid.",
      "rationales": {
        "A": "A checklist review confirms plan content and resources but recovers no systems, so it cannot prove recovery capability.",
        "B": "A tabletop exercise tests understanding of roles and procedures through discussion, not through actual system recovery.",
        "C": "Correct: a parallel test recovers and runs systems at the alternate site while production continues unaffected.",
        "D": "A full interruption test shuts down primary operations, so it fails the requirement not to disrupt production."
      },
      "topic": "Incident Management",
      "subtopic": "Incident Management Training, Testing, and Evaluation",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 4: Incident Management – Incident Management Training, Testing, and Evaluation (BCP/DRP test types)"
    }
  ]
}
```
