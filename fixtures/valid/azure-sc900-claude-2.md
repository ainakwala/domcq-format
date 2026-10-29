```json
{
  "format": "domcq/1",
  "exam": "azure-sc900",
  "set": "SC-900: Microsoft Security, Compliance, and Identity Fundamentals practice – Mixed domains set",
  "questions": [
    {
      "stem": "Under the shared responsibility model, which responsibility always stays with the customer, regardless of whether a workload is deployed on-premises or as IaaS, PaaS or SaaS?",
      "options": [
        "Physical hosts and datacenter security",
        "Operating system patching",
        "Information and data",
        "Network controls"
      ],
      "answer": "C",
      "explanation": "In every deployment model the customer keeps responsibility for its information and data, the devices that access it, and its accounts and identities. Physical datacenter security moves to the cloud provider in all cloud models, operating system management moves to the provider in PaaS and SaaS, and network controls move to the provider in SaaS. The more managed the service, the more the provider takes on, but data ownership never transfers.",
      "topic": "Describe the concepts of security, compliance, and identity",
      "subtopic": "Describe security and compliance concepts",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe the shared responsibility model"
    },
    {
      "stem": "Which of the following are guiding principles of the Zero Trust model? Choose THREE.",
      "options": [
        "Verify explicitly",
        "Use least privilege access",
        "Trust devices on the corporate network",
        "Assume breach"
      ],
      "answer": "ABD",
      "explanation": "Zero Trust follows the idea of 'never trust, always verify' and rests on three principles: verify explicitly using all available data points, use least privilege access (just-in-time and just-enough access), and assume breach by segmenting access and minimizing blast radius. Automatically trusting anything inside the corporate network perimeter is exactly the assumption Zero Trust rejects.",
      "topic": "Describe the concepts of security, compliance, and identity",
      "subtopic": "Describe security and compliance concepts",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe the Zero Trust model"
    },
    {
      "stem": "Employees of a company need to use a partner organization's web application by signing in with their own company credentials. The partner trusts the company's identity provider to authenticate them, so the employees do not need separate accounts at the partner. Which identity concept does this describe?",
      "options": [
        "Authorization",
        "Federation",
        "Role-based access control",
        "Directory synchronization"
      ],
      "answer": "B",
      "explanation": "Federation establishes a trust relationship between separate identity providers, so a service can accept users authenticated by another organization's identity provider instead of maintaining its own credentials for them. The trust does not have to be bidirectional: the partner trusts the company's identity provider without the company necessarily trusting the partner's. Authorization and role-based access control decide what an already authenticated user may do, and directory synchronization copies identities between directories rather than trusting another provider.",
      "topic": "Describe the concepts of security, compliance, and identity",
      "subtopic": "Define identity concepts",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe the concept of federation"
    },
    {
      "stem": "An application runs on an Azure virtual machine and must read secrets from Azure Key Vault. The security team does not want any credentials stored in the application code or configuration files. Which type of Microsoft Entra identity should the application use?",
      "options": [
        "A guest user account",
        "A device identity",
        "A shared user account",
        "A managed identity"
      ],
      "answer": "D",
      "explanation": "A managed identity is a special type of service principal whose credentials Azure creates, stores and rotates automatically, so developers never handle secrets. The virtual machine can use its managed identity to obtain a token from Microsoft Entra ID and authenticate to Key Vault. A system-assigned managed identity is tied to the lifecycle of the resource and is deleted when the resource is deleted.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe function and identity types of Microsoft Entra ID",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe the types of identities (workload identities, managed identities)"
    },
    {
      "stem": "An organization synchronizes its on-premises Active Directory Domain Services users to Microsoft Entra ID. Policy requires that user passwords are validated directly against the on-premises domain controllers at sign-in, and the organization does not want to deploy or maintain a separate federation server infrastructure. Which hybrid authentication method meets these requirements?",
      "options": [
        "Pass-through authentication",
        "Password hash synchronization",
        "Federated authentication with AD FS",
        "Microsoft Entra Domain Services"
      ],
      "answer": "A",
      "explanation": "Pass-through authentication uses lightweight software agents installed on on-premises servers to validate users' passwords directly against Active Directory Domain Services, without a federation infrastructure. Password hash synchronization instead stores a hash of the password hash in Microsoft Entra ID and validates sign-ins in the cloud. AD FS also validates on-premises but requires deploying and maintaining federation servers, and Microsoft Entra Domain Services provides managed domain services rather than a sign-in method for synchronized users.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe function and identity types of Microsoft Entra ID",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe hybrid identity"
    },
    {
      "stem": "Which two authentication methods can Microsoft Entra ID use for passwordless sign-in? Choose TWO.",
      "options": [
        "Windows Hello for Business",
        "Security questions",
        "FIDO2 security keys",
        "Voice call verification"
      ],
      "answer": "AC",
      "explanation": "Passwordless authentication replaces the password with something the user has combined with something they are or know. Windows Hello for Business and FIDO2 security keys (along with the Microsoft Authenticator app) are passwordless methods in Microsoft Entra ID. Security questions can be used only for self-service password reset, and voice call verification is used as a second factor for multifactor authentication or password reset, not as a passwordless sign-in method.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe authentication capabilities of Microsoft Entra ID",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe the authentication methods available in Microsoft Entra ID"
    },
    {
      "stem": "In a Microsoft Entra Conditional Access policy, which two items are access controls (decisions applied when the policy's conditions are met) rather than signals? Choose TWO.",
      "options": [
        "Sign-in risk level",
        "Require multifactor authentication",
        "Named location based on IP range",
        "Require device to be marked as compliant"
      ],
      "answer": "BD",
      "explanation": "Conditional Access works as an if-then statement: signals such as user or group membership, location, device platform, application and real-time sign-in risk are evaluated, and an access decision is enforced. Grant controls such as requiring multifactor authentication or requiring a compliant device are decisions, as is blocking access. Sign-in risk level and named locations are conditions the policy evaluates, not controls it applies.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe access management capabilities of Microsoft Entra ID",
      "difficulty": "hard",
      "source": "SC-900 skills outline: Describe Conditional Access"
    },
    {
      "stem": "An organization wants administrators to hold privileged Microsoft Entra roles only when needed. Administrators must request activation, which can require approval, and the role assignment must end automatically after a set time. Which Microsoft Entra capability provides this?",
      "options": [
        "Entitlement management",
        "Access reviews",
        "Privileged Identity Management",
        "Identity Protection"
      ],
      "answer": "C",
      "explanation": "Privileged Identity Management (PIM) provides just-in-time and time-bound privileged access, with optional approval, justification, multifactor authentication on activation, notifications and an audit history. This reduces the number of people holding standing administrative access. Entitlement management bundles resources into access packages, access reviews periodically re-certify existing access, and Identity Protection detects identity risks.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe identity protection and governance capabilities of Microsoft Entra",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe the capabilities of Privileged Identity Management"
    },
    {
      "stem": "Microsoft Entra ID Protection calculates both user risk and sign-in risk. Which detection contributes to user risk rather than to sign-in risk?",
      "options": [
        "Leaked credentials",
        "Anonymous IP address",
        "Atypical travel",
        "Unfamiliar sign-in properties"
      ],
      "answer": "A",
      "explanation": "User risk represents the probability that an identity or account itself is compromised; leaked credentials, where a user's valid credentials are found in a public or dark web source, is a user risk detection. Sign-in risk represents the probability that a particular authentication request was not made by the identity's owner, so detections tied to a single sign-in, such as an anonymous IP address, atypical travel and unfamiliar sign-in properties, are sign-in risks. Both risk levels can be used as Conditional Access conditions.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe identity protection and governance capabilities of Microsoft Entra",
      "difficulty": "hard",
      "source": "SC-900 skills outline: Describe the capabilities of Microsoft Entra ID Protection"
    },
    {
      "stem": "Administrators need to connect to Azure virtual machines over RDP and SSH from the Azure portal using TLS, without assigning public IP addresses to the virtual machines. Which Azure service should they use?",
      "options": [
        "Azure Firewall",
        "Azure Bastion",
        "Azure DDoS Protection",
        "Azure Web Application Firewall"
      ],
      "answer": "B",
      "explanation": "Azure Bastion is a fully managed service deployed into a virtual network that provides secure RDP and SSH connectivity to virtual machines over TLS directly from the Azure portal. Because the virtual machines need no public IP addresses, they are not exposed to port scanning from the internet. Azure Firewall filters traffic, DDoS Protection mitigates volumetric attacks, and Web Application Firewall protects web applications from common exploits.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe core infrastructure security services in Azure",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe Azure Bastion"
    },
    {
      "stem": "Which Azure resource filters network traffic to and from resources in a virtual network by using inbound and outbound rules that specify source, destination, port and protocol, processes those rules in priority order, and can be associated with subnets or network interfaces?",
      "options": [
        "Azure Bastion",
        "Azure DDoS Protection",
        "Azure Key Vault",
        "Network security group"
      ],
      "answer": "D",
      "explanation": "A network security group (NSG) contains security rules that allow or deny traffic based on source, source port, destination, destination port and protocol. Rules are processed in priority order, with lower numbers processed first, and processing stops at the first match. NSGs can be associated with subnets or individual network interfaces and include default rules that can be overridden by higher-priority rules.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe core infrastructure security services in Azure",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe network segmentation in Azure and network security groups"
    },
    {
      "stem": "Which two capabilities does Microsoft Defender for Cloud provide? Choose TWO.",
      "options": [
        "Data loss prevention for email messages",
        "Cloud security posture management (CSPM)",
        "Cloud workload protection (CWP)",
        "Access reviews for group memberships"
      ],
      "answer": "BC",
      "explanation": "Microsoft Defender for Cloud is a cloud-native application protection platform that combines cloud security posture management, which assesses configurations and provides recommendations and a secure score, with cloud workload protection, which uses Defender plans to protect workloads such as servers, containers, storage and databases. It covers Azure, other clouds such as AWS and Google Cloud, and on-premises resources. Data loss prevention is a Microsoft Purview capability, and access reviews belong to Microsoft Entra ID Governance.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe security management capabilities of Azure",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe Microsoft Defender for Cloud, CSPM and cloud workload protection"
    },
    {
      "stem": "Which Microsoft service is a scalable, cloud-native solution that provides both security information and event management (SIEM) and security orchestration, automation and response (SOAR)?",
      "options": [
        "Microsoft Sentinel",
        "Microsoft Defender for Cloud",
        "Microsoft Purview Compliance Manager",
        "Microsoft Entra ID Protection"
      ],
      "answer": "A",
      "explanation": "Microsoft Sentinel collects data at cloud scale from users, devices, applications and infrastructure, detects threats with analytics, supports investigation and hunting, and responds through automation. The SIEM role covers collecting and analyzing security data, while the SOAR role covers automating responses to incidents. Defender for Cloud focuses on posture management and workload protection rather than acting as the organization's SIEM.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe capabilities of Microsoft Sentinel",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe SIEM and SOAR, and how Microsoft Sentinel provides them"
    },
    {
      "stem": "A security operations team uses Microsoft Sentinel. When a specific type of incident is created, they want a collection of automated remediation steps to run, such as disabling a user account and posting a message to a Microsoft Teams channel. Which Sentinel feature, built on Azure Logic Apps, should they use?",
      "options": [
        "Workbooks",
        "Data connectors",
        "Playbooks",
        "Analytics rules"
      ],
      "answer": "C",
      "explanation": "Playbooks are collections of procedures that run in response to alerts or incidents, and they are based on workflows built in Azure Logic Apps, so they can call many services to take remediation actions. They can be run manually or triggered automatically, for example by an automation rule. Workbooks visualize data, data connectors bring data into Sentinel, and analytics rules detect threats and generate incidents.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe capabilities of Microsoft Sentinel",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe threat detection and mitigation capabilities in Microsoft Sentinel"
    },
    {
      "stem": "Which Microsoft Defender XDR component uses sensors installed on on-premises Active Directory Domain Services domain controllers to detect identity-based threats such as reconnaissance activity and pass-the-hash attacks?",
      "options": [
        "Microsoft Defender for Endpoint",
        "Microsoft Defender for Cloud Apps",
        "Microsoft Defender for Office 365",
        "Microsoft Defender for Identity"
      ],
      "answer": "D",
      "explanation": "Microsoft Defender for Identity uses signals from on-premises Active Directory, collected by sensors on domain controllers, to identify and investigate advanced threats, compromised identities and malicious insider actions. It detects reconnaissance, compromised credentials, lateral movement techniques such as pass-the-hash and pass-the-ticket, and domain dominance activity. Defender for Endpoint protects devices, Defender for Cloud Apps protects SaaS apps, and Defender for Office 365 protects email and collaboration.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe threat protection with Microsoft Defender XDR",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe Microsoft Defender for Identity"
    },
    {
      "stem": "Which capability is included in Microsoft Defender for Office 365 Plan 2 but not in Plan 1?",
      "options": [
        "Safe Attachments",
        "Attack simulation training",
        "Safe Links",
        "Real-time detections"
      ],
      "answer": "B",
      "explanation": "Defender for Office 365 Plan 1 provides protections such as Safe Attachments, Safe Links, advanced anti-phishing and real-time detections. Plan 2 includes everything in Plan 1 and adds attack simulation training, Threat Explorer, threat trackers, automated investigation and response, and campaign views. Attack simulation training lets organizations run realistic phishing simulations and assign training to users.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe threat protection with Microsoft Defender XDR",
      "difficulty": "hard",
      "source": "SC-900 skills outline: Describe Microsoft Defender for Office 365"
    },
    {
      "stem": "A company's auditors want to review independent audit reports, such as ISO 27001 and SOC reports, that describe how Microsoft's cloud services meet security and compliance standards. Where can these reports be obtained?",
      "options": [
        "Microsoft Purview Compliance Manager",
        "Microsoft Defender for Cloud",
        "Microsoft Service Trust Portal",
        "Microsoft Priva"
      ],
      "answer": "C",
      "explanation": "The Service Trust Portal is Microsoft's site for publishing audit reports and other information about how Microsoft cloud services protect data and meet compliance standards. Some documents require signing in with a Microsoft cloud services account. Compliance Manager helps an organization manage its own compliance posture, while Defender for Cloud and Priva address workload security and privacy management respectively.",
      "topic": "Describe the capabilities of Microsoft compliance solutions",
      "subtopic": "Describe Microsoft Service Trust Portal and privacy principles",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe the Service Trust Portal"
    },
    {
      "stem": "An organization wants a tool that turns the requirements of regulations and standards such as GDPR and ISO 27001 into assessments with recommended improvement actions, and that shows a score reflecting its progress in completing those actions. Which solution should it use?",
      "options": [
        "Microsoft Purview Compliance Manager",
        "Microsoft Service Trust Portal",
        "Microsoft Sentinel",
        "Microsoft Entra ID Governance"
      ],
      "answer": "A",
      "explanation": "Microsoft Purview Compliance Manager uses regulatory templates to create assessments made up of controls and improvement actions, and it calculates a compliance score from the points earned by completing actions. The score includes both Microsoft-managed actions and the customer-managed actions the organization is responsible for. The Service Trust Portal only publishes Microsoft's own compliance documentation, and it does not track the organization's progress.",
      "topic": "Describe the capabilities of Microsoft compliance solutions",
      "subtopic": "Describe compliance management capabilities of Microsoft Purview",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe Compliance Manager and compliance score"
    },
    {
      "stem": "An organization wants Word documents containing confidential project information to be encrypted and to show a 'Confidential' header and watermark, with these protections travelling with the file even when it is shared outside the organization. Which Microsoft Purview feature should be applied to the documents?",
      "options": [
        "A retention label",
        "A data loss prevention policy",
        "A retention policy",
        "A sensitivity label"
      ],
      "answer": "D",
      "explanation": "Sensitivity labels classify content and can apply protection such as encryption and content markings like headers, footers and watermarks. The label is stored in the file's metadata, so the classification and protection stay with the content wherever it goes. Retention labels and retention policies control how long content is kept or when it is deleted, and data loss prevention policies detect and block risky sharing rather than marking or encrypting files.",
      "topic": "Describe the capabilities of Microsoft compliance solutions",
      "subtopic": "Describe information protection, data lifecycle management, and data governance capabilities of Microsoft Purview",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe sensitivity labels and policies"
    },
    {
      "stem": "A company wants to detect when employees who have resigned download and copy large volumes of sensitive files before they leave. It plans to import resignation dates from its HR system through a connector and to use a policy template designed for this scenario. Which Microsoft Purview solution should it use?",
      "options": [
        "Communication compliance",
        "Insider risk management",
        "eDiscovery (Premium)",
        "Audit (Premium)"
      ],
      "answer": "B",
      "explanation": "Insider risk management correlates activity signals to identify potentially risky user behavior, and it provides policy templates such as 'Data theft by departing users', which can use resignation or termination dates from an HR data connector as the triggering event. User names can be pseudonymized by default to protect privacy during review. Communication compliance reviews messages for inappropriate content, eDiscovery supports legal case investigations, and Audit records activity without scoring insider risk.",
      "topic": "Describe the capabilities of Microsoft compliance solutions",
      "subtopic": "Describe insider risk, eDiscovery, and audit capabilities in Microsoft Purview",
      "difficulty": "hard",
      "source": "SC-900 skills outline: Describe insider risk management"
    }
  ]
}
```
