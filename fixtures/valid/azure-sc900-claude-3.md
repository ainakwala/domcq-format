```json
{
  "format": "domcq/1",
  "exam": "azure-sc900",
  "set": "SC-900: Microsoft Security, Compliance, and Identity Fundamentals practice – Core skills mix",
  "questions": [
    {
      "stem": "Which of the following is one of the three guiding principles of the Zero Trust security model?",
      "options": [
        "Trust devices on the corporate network",
        "Protect the network perimeter first",
        "Assume breach",
        "Grant broad access to reduce friction"
      ],
      "answer": "C",
      "explanation": "Zero Trust is built on three principles: verify explicitly, use least privilege access, and assume breach. Assume breach means designing defenses as if an attacker is already inside, so you segment access, minimize blast radius and use analytics to detect threats. Zero Trust rejects the idea that anything is trustworthy simply because it sits inside the corporate network perimeter.",
      "topic": "Describe the concepts of security, compliance, and identity",
      "subtopic": "Describe security and compliance concepts",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe security and compliance concepts – Zero Trust methodology"
    },
    {
      "stem": "A company runs workloads on-premises, on IaaS virtual machines, on PaaS services and in SaaS applications. Under the shared responsibility model, which responsibility stays with the company in all four of these deployment types?",
      "options": [
        "Patching the operating system",
        "Protecting information and data",
        "Securing the physical hosts",
        "Configuring network controls"
      ],
      "answer": "B",
      "explanation": "In the shared responsibility model, the customer always retains responsibility for information and data, devices (mobile and PCs), and accounts and identities, whatever the deployment type. Physical host security moves to the cloud provider as soon as you adopt IaaS, while operating system patching and network controls shift partly or fully to the provider in PaaS and SaaS.",
      "topic": "Describe the concepts of security, compliance, and identity",
      "subtopic": "Describe security and compliance concepts",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe security and compliance concepts – shared responsibility model"
    },
    {
      "stem": "After a user has signed in, an application checks whether that user is permitted to edit a specific document. What is this check called?",
      "options": [
        "Authentication",
        "Federation",
        "Auditing",
        "Authorization"
      ],
      "answer": "D",
      "explanation": "Authentication proves who a user is, for example by checking a password or a second factor. Authorization happens afterwards and decides what that authenticated identity is allowed to do or access, such as editing a particular document. Federation is about trust between identity providers, and auditing records activity after it happens.",
      "topic": "Describe the concepts of security, compliance, and identity",
      "subtopic": "Define identity concepts",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Define identity concepts – authentication and authorization"
    },
    {
      "stem": "A developer has an application running on an Azure virtual machine that must read secrets from Azure Key Vault. The developer does not want to store or rotate any credentials in the application code. Which type of Microsoft Entra identity should the application use?",
      "options": [
        "A managed identity",
        "A guest user account",
        "A registered device identity",
        "A dynamic security group"
      ],
      "answer": "A",
      "explanation": "A managed identity is a workload identity, a special kind of service principal, whose credentials Azure creates, stores and rotates automatically. The application requests a token for the managed identity and uses it to authenticate to services such as Key Vault, so no secret ever appears in code. Guest accounts are for external people, device identities represent hardware, and groups are not identities that can sign in.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe function and identity types of Microsoft Entra ID",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe function and identity types of Microsoft Entra ID – workload identities, managed identities"
    },
    {
      "stem": "Which of the following are passwordless authentication methods supported by Microsoft Entra ID? Choose TWO.",
      "options": [
        "Windows Hello for Business",
        "A password plus a security question answer",
        "FIDO2 security keys",
        "A password plus an SMS verification code"
      ],
      "answer": "AC",
      "explanation": "Passwordless methods replace the password entirely with something you have (a device or key) combined with something you are or know locally (a biometric or PIN). Windows Hello for Business and FIDO2 security keys both work this way, as does the Microsoft Authenticator app. Any method that still starts with a password, even with an extra factor added, is not passwordless.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe authentication capabilities of Microsoft Entra ID",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe authentication capabilities of Microsoft Entra ID – authentication methods, passwordless"
    },
    {
      "stem": "An administrator wants to prevent users from choosing passwords that contain the company name or the names of its products. Which Microsoft Entra capability provides this?",
      "options": [
        "Self-service password reset",
        "Microsoft Entra Password Protection",
        "Privileged Identity Management",
        "Microsoft Entra access reviews"
      ],
      "answer": "B",
      "explanation": "Microsoft Entra Password Protection blocks weak passwords using a global banned password list maintained by Microsoft and a custom banned password list that the organization fills with terms such as its company and product names. It can also be extended to on-premises Active Directory Domain Services. Self-service password reset lets users reset their own passwords but does not decide which passwords are acceptable.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe authentication capabilities of Microsoft Entra ID",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe authentication capabilities of Microsoft Entra ID – password protection and management"
    },
    {
      "stem": "At what point in the sign-in process does Microsoft Entra ID enforce Conditional Access policies?",
      "options": [
        "Before the user is prompted for any credentials",
        "Only when the user's password has expired",
        "After first-factor authentication has completed",
        "Only during the user's initial device registration"
      ],
      "answer": "C",
      "explanation": "Conditional Access policies are enforced after first-factor authentication has completed. At that point Microsoft Entra ID has signals such as the user, location, device, application and risk level, and the policy uses them to decide whether to block access, grant it, or grant it only with requirements such as multifactor authentication. Because of this timing, Conditional Access is not a first line of defense against attacks such as denial of service.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe access management capabilities of Microsoft Entra ID",
      "difficulty": "hard",
      "source": "SC-900 skills outline: Describe access management capabilities of Microsoft Entra ID – Conditional Access"
    },
    {
      "stem": "An organization wants administrators to receive the Global Administrator role only when they need it, for a limited time, and only after approval. Which Microsoft Entra feature provides this?",
      "options": [
        "Microsoft Entra ID Protection",
        "Conditional Access named locations",
        "Entitlement management catalogs",
        "Privileged Identity Management"
      ],
      "answer": "D",
      "explanation": "Privileged Identity Management (PIM) provides just-in-time and time-bound access to privileged roles. Users are made eligible for a role and must activate it when needed, optionally with approval, justification and multifactor authentication, and the assignment expires automatically. This reduces the number of people holding standing administrative access.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe identity protection and governance capabilities of Microsoft Entra",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe identity protection and governance capabilities of Microsoft Entra – Privileged Identity Management"
    },
    {
      "stem": "Microsoft Entra ID Protection detects that a user's username and password have appeared in a public credential leak. Which type of risk does this detection contribute to?",
      "options": [
        "User risk",
        "Sign-in risk",
        "Device compliance risk",
        "Application consent risk"
      ],
      "answer": "A",
      "explanation": "ID Protection uses two risk types. User risk is the probability that an identity or account itself has been compromised, and leaked credentials is a classic user risk detection. Sign-in risk is the probability that a particular authentication request was not made by the identity's owner, based on detections such as anonymous IP addresses or atypical travel.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe identity protection and governance capabilities of Microsoft Entra",
      "difficulty": "hard",
      "source": "SC-900 skills outline: Describe identity protection and governance capabilities of Microsoft Entra – Microsoft Entra ID Protection"
    },
    {
      "stem": "Which Azure service is designed to protect Azure resources from volumetric attacks that try to overwhelm them with traffic so that they become unavailable to legitimate users?",
      "options": [
        "Azure Key Vault",
        "Azure DDoS Protection",
        "Azure Policy",
        "Microsoft Entra ID Protection"
      ],
      "answer": "B",
      "explanation": "A distributed denial of service (DDoS) attack floods a resource with traffic to exhaust its capacity and make it unavailable. Azure DDoS Protection monitors traffic to public endpoints and automatically mitigates volumetric, protocol and resource-layer attacks when traffic exceeds normal patterns. Key Vault stores secrets, Azure Policy enforces configuration rules, and ID Protection deals with identity risk.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe core infrastructure security services in Azure",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe core infrastructure security services in Azure – Azure DDoS Protection"
    },
    {
      "stem": "Administrators need to connect to Azure virtual machines using RDP and SSH directly from the Azure portal over TLS, without assigning public IP addresses to the virtual machines. Which service should they use?",
      "options": [
        "Azure Firewall",
        "Network security groups",
        "Azure Bastion",
        "Azure Front Door"
      ],
      "answer": "C",
      "explanation": "Azure Bastion is a fully managed service deployed into a virtual network that provides RDP and SSH connectivity to virtual machines through the Azure portal over TLS. Because the virtual machines need no public IP address and RDP and SSH ports are not exposed to the internet, the attack surface is reduced. Firewalls and network security groups filter traffic but do not provide this browser-based remote session.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe core infrastructure security services in Azure",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe core infrastructure security services in Azure – Azure Bastion"
    },
    {
      "stem": "With which Azure resources can a network security group (NSG) be associated? Choose TWO.",
      "options": [
        "An Azure subscription",
        "A virtual network subnet",
        "A Microsoft Entra tenant",
        "A virtual machine's network interface"
      ],
      "answer": "BD",
      "explanation": "A network security group holds allow and deny rules that filter inbound and outbound traffic by source, destination, port and protocol. It is applied by associating it with a subnet, a network interface, or both; when both are used, traffic must be allowed at each level. Subscriptions and tenants are management and identity boundaries, not points where network traffic is filtered.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe core infrastructure security services in Azure",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe core infrastructure security services in Azure – network security groups"
    },
    {
      "stem": "In Microsoft Defender for Cloud, what does secure score represent?",
      "options": [
        "A measure of security posture based on remediated recommendations",
        "A count of the security incidents that are currently open",
        "A certification that resources meet a specific regulation",
        "The share of virtual machines with antimalware installed"
      ],
      "answer": "A",
      "explanation": "Secure score is part of Defender for Cloud's cloud security posture management and summarizes your security posture as a single figure: the higher the score, the lower the identified risk. Recommendations are grouped into security controls, and you gain points by remediating all the affected resources in a control. It does not count incidents or certify regulatory compliance.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe security management capabilities of Azure",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe security management capabilities of Azure – Defender for Cloud secure score, CSPM"
    },
    {
      "stem": "Which categories of solution does Microsoft Sentinel provide? Choose TWO.",
      "options": [
        "Cloud access security broker (CASB)",
        "Security information and event management (SIEM)",
        "Security orchestration, automation and response (SOAR)",
        "Mobile device management (MDM)"
      ],
      "answer": "BC",
      "explanation": "Microsoft Sentinel is a cloud-native SIEM and SOAR solution. As a SIEM it collects and correlates data at cloud scale to detect threats, and as a SOAR it automates and orchestrates the response to them. A cloud access security broker is provided by Microsoft Defender for Cloud Apps, and mobile device management by Microsoft Intune.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe capabilities of Microsoft Sentinel",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe capabilities of Microsoft Sentinel – SIEM and SOAR concepts"
    },
    {
      "stem": "A security team using Microsoft Sentinel wants a set of remediation steps, such as disabling a user account, to run automatically when an analytics rule creates an incident. Which Sentinel feature should they use, and what technology is it built on?",
      "options": [
        "Workbooks, built on Azure Monitor Workbooks",
        "Hunting queries, built on Kusto Query Language",
        "Notebooks, built on Jupyter",
        "Playbooks, built on Azure Logic Apps"
      ],
      "answer": "D",
      "explanation": "Playbooks are collections of procedures that run in response to an alert or incident, and they are built on Azure Logic Apps, which gives them connectors to many services. Automation rules can trigger a playbook automatically when an incident is created. Workbooks visualize data, hunting queries search proactively for threats, and notebooks support deeper investigation, but none of them automates remediation.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe capabilities of Microsoft Sentinel",
      "difficulty": "hard",
      "source": "SC-900 skills outline: Describe capabilities of Microsoft Sentinel – threat detection and mitigation, automation and playbooks"
    },
    {
      "stem": "Which Microsoft Defender XDR component uses signals from on-premises Active Directory Domain Services domain controllers to detect compromised identities and lateral movement by attackers?",
      "options": [
        "Microsoft Defender for Office 365",
        "Microsoft Defender for Identity",
        "Microsoft Defender for Cloud Apps",
        "Microsoft Defender Vulnerability Management"
      ],
      "answer": "B",
      "explanation": "Microsoft Defender for Identity installs sensors on domain controllers and related identity servers to monitor on-premises Active Directory activity. It detects reconnaissance, compromised credentials, lateral movement and domain dominance techniques. Defender for Office 365 protects email and collaboration, and Defender for Cloud Apps protects use of cloud apps.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe threat protection with Microsoft Defender XDR",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe threat protection with Microsoft Defender XDR – Microsoft Defender for Identity"
    },
    {
      "stem": "An auditor asks a company for Microsoft's independent third-party audit reports, such as SOC and ISO reports, covering Microsoft cloud services. Which Microsoft resource is intended for obtaining these reports?",
      "options": [
        "Microsoft Service Trust Portal",
        "Microsoft Purview Compliance Manager",
        "Azure Monitor",
        "Azure Advisor"
      ],
      "answer": "A",
      "explanation": "The Service Trust Portal is Microsoft's public site for publishing audit reports and other documents about how Microsoft cloud services protect data. Customers sign in to download independent audit reports such as SOC and ISO reports to support their own compliance work. Compliance Manager helps you manage your own compliance posture rather than distributing Microsoft's audit reports.",
      "topic": "Describe the capabilities of Microsoft compliance solutions",
      "subtopic": "Describe Microsoft Service Trust Portal and privacy principles",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe Microsoft Service Trust Portal and privacy principles – Service Trust Portal"
    },
    {
      "stem": "Which statement about compliance score in Microsoft Purview Compliance Manager is correct?",
      "options": [
        "It certifies that the organization complies with a regulation",
        "It is calculated only from actions that Microsoft manages",
        "It measures progress on actions that reduce compliance risk",
        "It is calculated only from actions your organization manages"
      ],
      "answer": "C",
      "explanation": "Compliance score measures your progress in completing recommended improvement actions that help reduce risks around data protection and regulatory standards. It includes points for both Microsoft-managed actions and customer-managed actions, weighted by type, such as mandatory or discretionary and preventive, detective or corrective. It is a risk-reduction indicator, not an absolute measure or certification of compliance with any standard.",
      "topic": "Describe the capabilities of Microsoft compliance solutions",
      "subtopic": "Describe compliance management capabilities of Microsoft Purview",
      "difficulty": "hard",
      "source": "SC-900 skills outline: Describe compliance management capabilities of Microsoft Purview – Compliance Manager, compliance score"
    },
    {
      "stem": "Which Microsoft Purview feature can encrypt a document and add content markings such as a header or watermark, with the protection staying with the document when it is shared outside the organization?",
      "options": [
        "Retention labels",
        "eDiscovery holds",
        "Audit (Standard)",
        "Sensitivity labels"
      ],
      "answer": "D",
      "explanation": "Sensitivity labels classify content and can apply protection such as encryption and content markings like headers, footers and watermarks. The label is stored in the file's metadata, so the classification and protection travel with the content wherever it goes. Retention labels control how long content is kept or when it is deleted, not who can open it.",
      "topic": "Describe the capabilities of Microsoft compliance solutions",
      "subtopic": "Describe information protection, data lifecycle management, and data governance capabilities of Microsoft Purview",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe information protection capabilities of Microsoft Purview – sensitivity labels"
    },
    {
      "stem": "An organization is concerned that employees who have resigned may copy confidential files to USB drives or personal cloud storage before their last day. Which Microsoft Purview solution is designed to identify and act on this kind of activity?",
      "options": [
        "Communication compliance",
        "Insider risk management",
        "eDiscovery (Standard)",
        "Records management"
      ],
      "answer": "B",
      "explanation": "Insider risk management detects, investigates and acts on risky activities by users inside the organization. Its policy templates include data theft by departing users, which can correlate a resignation date from an HR connector with activity such as copying files to USB or uploading to personal cloud storage. Communication compliance focuses on inappropriate messages, and eDiscovery finds content for legal cases rather than detecting risky behavior.",
      "topic": "Describe the capabilities of Microsoft compliance solutions",
      "subtopic": "Describe insider risk, eDiscovery, and audit capabilities in Microsoft Purview",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe insider risk, eDiscovery, and audit capabilities in Microsoft Purview – insider risk management"
    }
  ]
}
```
