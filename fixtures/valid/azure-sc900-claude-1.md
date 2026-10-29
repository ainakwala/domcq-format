```json
{
  "format": "domcq/1",
  "exam": "azure-sc900",
  "set": "SC-900: Microsoft Security, Compliance, and Identity Fundamentals practice – Core skills set 1",
  "questions": [
    {
      "stem": "Which of the following are guiding principles of the Zero Trust methodology? Choose THREE.",
      "options": [
        "Assume breach",
        "Implicitly trust traffic that originates inside the corporate network",
        "Verify explicitly",
        "Use least privilege access"
      ],
      "answer": "ACD",
      "explanation": "Zero Trust rests on three guiding principles: verify explicitly (always authenticate and authorize using all available signals), use least privilege access (just-in-time and just-enough access), and assume breach (minimize blast radius and segment access). Trusting traffic just because it comes from inside the corporate network is the traditional perimeter model that Zero Trust explicitly rejects.",
      "topic": "Describe the concepts of security, compliance, and identity",
      "subtopic": "Describe security and compliance concepts",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe security and compliance concepts – Zero Trust methodology"
    },
    {
      "stem": "Under the cloud shared responsibility model, which responsibility always remains with the customer, whether a workload runs on-premises, in IaaS, in PaaS or in SaaS?",
      "options": [
        "Physical security of the datacenter",
        "Maintaining the operating system",
        "Information and data stored in the service",
        "Physical network infrastructure"
      ],
      "answer": "C",
      "explanation": "In every deployment type the customer remains responsible for its information and data, along with the devices that access it and the accounts and identities used. Physical datacenter, host and network responsibilities move to the cloud provider as soon as a workload moves to the cloud, and operating system maintenance moves to the provider in PaaS and SaaS.",
      "topic": "Describe the concepts of security, compliance, and identity",
      "subtopic": "Describe security and compliance concepts",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe security and compliance concepts – shared responsibility model"
    },
    {
      "stem": "A company wants its employees to access a partner organization's web application by signing in with their own company credentials. The partner's identity provider is configured to accept authentication performed by the company's identity provider, so employees do not need separate accounts at the partner. Which identity concept does this describe?",
      "options": [
        "Directory synchronization",
        "Federation",
        "Role-based access control",
        "Multifactor authentication"
      ],
      "answer": "B",
      "explanation": "Federation is a trust relationship between identity providers that lets a user authenticated by one provider access resources governed by another, without a separate account. Directory synchronization copies identities between directories, role-based access control governs what an authenticated user can do, and multifactor authentication strengthens a single sign-in rather than linking organizations.",
      "topic": "Describe the concepts of security, compliance, and identity",
      "subtopic": "Define identity concepts",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Define identity concepts – federated services"
    },
    {
      "stem": "An application running on an Azure virtual machine must authenticate to Azure Key Vault. The developers do not want to store, manage or rotate any credentials, such as secrets or certificates, in code or configuration. Which type of identity should they use?",
      "options": [
        "A guest user account",
        "A service principal with a client secret",
        "A hybrid user identity synchronized from Active Directory",
        "A managed identity"
      ],
      "answer": "D",
      "explanation": "A managed identity is a special type of service principal whose credentials are created and rotated automatically by Azure, so the application never handles a secret. It can be system-assigned (tied to one resource's lifecycle) or user-assigned (a standalone resource shared by several resources). A service principal with a client secret would still require the developers to store and rotate that secret.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe function and identity types of Microsoft Entra ID",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe function and identity types of Microsoft Entra ID – workload identities and managed identities"
    },
    {
      "stem": "An organization wants employees of a partner company to sign in to its Microsoft Teams and SharePoint resources by using the partner's own work accounts. The partner users should be represented in the organization's directory as guest users. Which Microsoft Entra capability should the organization use?",
      "options": [
        "Microsoft Entra B2B collaboration",
        "Microsoft Entra Connect Sync",
        "Microsoft Entra Privileged Identity Management",
        "Microsoft Entra ID Protection"
      ],
      "answer": "A",
      "explanation": "B2B collaboration is part of Microsoft Entra External ID and lets external users sign in with their own credentials while being represented in your tenant as guest users you can grant access to. Connect Sync synchronizes on-premises Active Directory identities, Privileged Identity Management governs privileged roles, and ID Protection detects identity risk, so none of them invite external partners.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe function and identity types of Microsoft Entra ID",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe function and identity types of Microsoft Entra ID – external identities"
    },
    {
      "stem": "Which methods can users sign in with in Microsoft Entra ID as passwordless authentication? Choose THREE.",
      "options": [
        "Security questions",
        "FIDO2 security keys",
        "Microsoft Authenticator app",
        "Windows Hello for Business"
      ],
      "answer": "BCD",
      "explanation": "Microsoft Entra ID supports passwordless sign-in with Windows Hello for Business, the Microsoft Authenticator app (phone sign-in or passkeys) and FIDO2 security keys, each of which replaces the password with something the user has combined with a biometric or PIN. Security questions can only be used as a verification method during self-service password reset; they cannot be used to sign in at all.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe authentication capabilities of Microsoft Entra ID",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe authentication capabilities of Microsoft Entra ID – authentication methods and passwordless"
    },
    {
      "stem": "At which point in the sign-in process are Microsoft Entra Conditional Access policies enforced?",
      "options": [
        "Before the user enters any credentials",
        "After first-factor authentication has completed",
        "Only after the user has been flagged as high risk",
        "Only when the user signs in from outside a named location"
      ],
      "answer": "B",
      "explanation": "Conditional Access policies are enforced after first-factor authentication completes, which is why Conditional Access is not a first line of defense against attacks such as password spraying. Once the user is identified, the policy evaluates signals such as user, location, device, application and risk, then makes a decision such as block access, grant access or require MFA. Risk and location are optional conditions, not prerequisites for a policy to apply.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe access management capabilities of Microsoft Entra ID",
      "difficulty": "hard",
      "source": "SC-900 skills outline: Describe access management capabilities of Microsoft Entra ID – Conditional Access"
    },
    {
      "stem": "An organization wants administrators to hold the Global Administrator role only when they need it. An administrator must request activation, provide a business justification and obtain approval, and the role must be removed automatically after a few hours. Which Microsoft Entra capability provides this?",
      "options": [
        "Access reviews",
        "Entitlement management",
        "Privileged Identity Management",
        "Conditional Access"
      ],
      "answer": "C",
      "explanation": "Privileged Identity Management (PIM) provides just-in-time, time-bound privileged role activation, with options to require justification, approval and MFA when a user activates an eligible role. This reduces standing privilege, supporting the least privilege principle. Access reviews periodically recertify existing access, and entitlement management packages resource access for requesters, but neither activates privileged roles on demand.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe identity protection and governance capabilities of Microsoft Entra",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe identity protection and governance capabilities of Microsoft Entra – Privileged Identity Management"
    },
    {
      "stem": "A project team needs a single bundle that grants access to two security groups, a SharePoint Online site and a SaaS application. Users, including users from other organizations, should be able to request the bundle, have the request approved, and lose the access automatically when the project ends. Which Microsoft Entra feature should be used?",
      "options": [
        "Access packages in entitlement management",
        "Privileged Identity Management",
        "Administrative units",
        "Dynamic group membership rules"
      ],
      "answer": "A",
      "explanation": "Entitlement management, part of Microsoft Entra ID Governance, lets you bundle groups, applications and SharePoint sites into access packages that internal or external users can request, with approval workflows and automatic expiration. Privileged Identity Management focuses on privileged roles, administrative units scope administrative permissions, and dynamic groups assign membership from user attributes rather than through requests.",
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe identity protection and governance capabilities of Microsoft Entra",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe identity protection and governance capabilities of Microsoft Entra – entitlement management"
    },
    {
      "stem": "Administrators need to connect to Azure virtual machines over RDP and SSH directly from the Azure portal over TLS, without assigning public IP addresses to the virtual machines. Which Azure service should they use?",
      "options": [
        "Azure Firewall",
        "Azure DDoS Protection",
        "Network security groups",
        "Azure Bastion"
      ],
      "answer": "D",
      "explanation": "Azure Bastion is a managed PaaS service deployed into a virtual network that provides secure RDP and SSH connectivity to virtual machines through the Azure portal over TLS. Because the virtual machines need no public IP address, their management ports are not exposed to the internet, which reduces the attack surface.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe core infrastructure security services in Azure",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe core infrastructure security services in Azure – Azure Bastion"
    },
    {
      "stem": "You need to allow or deny inbound and outbound network traffic to Azure resources in a virtual network by using rules based on source and destination IP address, port and protocol. The rules must be associated with a subnet or with a network interface. Which Azure feature should you use?",
      "options": [
        "Azure Web Application Firewall",
        "Network security groups",
        "Azure Key Vault",
        "Azure DDoS Protection"
      ],
      "answer": "B",
      "explanation": "A network security group (NSG) contains prioritized security rules that allow or deny traffic based on source, destination, port and protocol, and it is associated with subnets or network interfaces. Web Application Firewall inspects HTTP traffic for web exploits, DDoS Protection mitigates volumetric attacks, and Key Vault stores secrets rather than filtering traffic.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe core infrastructure security services in Azure",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe core infrastructure security services in Azure – network security groups"
    },
    {
      "stem": "In Microsoft Defender for Cloud, which feature expresses the security posture of your Azure, hybrid and multicloud resources as a single percentage that rises as you remediate security recommendations?",
      "options": [
        "Secure score",
        "Workload protection alerts",
        "Just-in-time VM access",
        "Adaptive network hardening"
      ],
      "answer": "A",
      "explanation": "Secure score is the core cloud security posture management measure in Defender for Cloud: it aggregates findings into a percentage, and a higher score indicates a lower identified risk. You raise it by remediating recommendations, which are grouped into security controls. Alerts report active threats detected by workload protection rather than measuring posture.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe security management capabilities of Azure",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe security management capabilities of Azure – Defender for Cloud secure score and CSPM"
    },
    {
      "stem": "A security operations team wants Microsoft Sentinel to automatically disable a user account and post a message to a Microsoft Teams channel whenever a specific type of incident is created. Which Microsoft Sentinel feature, built on Azure Logic Apps, runs this kind of automated response workflow?",
      "options": [
        "Workbooks",
        "Data connectors",
        "Playbooks",
        "Hunting queries"
      ],
      "answer": "C",
      "explanation": "Playbooks are collections of remediation actions built on Azure Logic Apps, and they deliver the SOAR (security orchestration, automation and response) side of Microsoft Sentinel. They can be triggered by automation rules when incidents or alerts are created. Workbooks visualize data, data connectors ingest data, and hunting queries proactively search for threats.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe capabilities of Microsoft Sentinel",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe capabilities of Microsoft Sentinel – threat detection and automated response (SOAR)"
    },
    {
      "stem": "An organization wants to protect users from malicious email attachments, and from links in email messages and Microsoft Teams that lead to phishing sites, by checking each link at the moment it is clicked. Which Microsoft Defender XDR component provides this protection?",
      "options": [
        "Microsoft Defender for Identity",
        "Microsoft Defender for Cloud Apps",
        "Microsoft Defender Vulnerability Management",
        "Microsoft Defender for Office 365"
      ],
      "answer": "D",
      "explanation": "Microsoft Defender for Office 365 protects collaboration and email workloads against threats such as phishing and malware. Its Safe Attachments feature checks attachments in a detonation environment, and Safe Links rewrites and checks URLs at the time of click in email, Teams and Office apps.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe threat protection with Microsoft Defender XDR",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe threat protection with Microsoft Defender XDR – Microsoft Defender for Office 365"
    },
    {
      "stem": "Security analysts need to detect pass-the-hash, pass-the-ticket and other lateral movement attacks against an on-premises Active Directory Domain Services environment by analyzing activity on the domain controllers. Which solution should they use?",
      "options": [
        "Microsoft Entra ID Protection",
        "Microsoft Defender for Identity",
        "Microsoft Defender for Endpoint",
        "Microsoft Defender for Cloud Apps"
      ],
      "answer": "B",
      "explanation": "Microsoft Defender for Identity uses on-premises Active Directory signals, collected by sensors on domain controllers, to detect reconnaissance, compromised credentials, lateral movement such as pass-the-hash and pass-the-ticket, and domain dominance. Microsoft Entra ID Protection evaluates risk for cloud sign-ins to Microsoft Entra ID, not attacks against on-premises domain controllers.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe threat protection with Microsoft Defender XDR",
      "difficulty": "hard",
      "source": "SC-900 skills outline: Describe threat protection with Microsoft Defender XDR – Microsoft Defender for Identity"
    },
    {
      "stem": "Which of the following are capabilities of Microsoft Defender for Cloud Apps? Choose TWO.",
      "options": [
        "Discover the cloud apps in use across the organization and assess their risk",
        "Provide just-in-time access to virtual machine management ports",
        "Monitor and control user sessions to cloud apps in real time",
        "Encrypt the operating system disks of Azure virtual machines"
      ],
      "answer": "AC",
      "explanation": "Defender for Cloud Apps is a cloud access security broker (CASB). It discovers shadow IT and rates the risk of cloud apps, and with Conditional Access app control it can monitor and control user sessions in real time, for example blocking downloads. Just-in-time VM access is a Microsoft Defender for Cloud feature, and VM disk encryption is handled by Azure disk encryption options.",
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe threat protection with Microsoft Defender XDR",
      "difficulty": "hard",
      "source": "SC-900 skills outline: Describe threat protection with Microsoft Defender XDR – Microsoft Defender for Cloud Apps"
    },
    {
      "stem": "An external auditor asks for independent audit reports, such as ISO/IEC 27001 and SOC 2 reports, that cover Microsoft's cloud services. Where can the organization download these documents?",
      "options": [
        "Microsoft Service Trust Portal",
        "Microsoft Purview Compliance Manager",
        "Microsoft Sentinel",
        "Microsoft Entra admin center"
      ],
      "answer": "A",
      "explanation": "The Service Trust Portal is Microsoft's public site for content about how Microsoft cloud services protect data, including third-party audit reports, certifications and compliance guides. It describes Microsoft's own compliance, whereas tools such as Compliance Manager help an organization assess and improve its own compliance posture.",
      "topic": "Describe the capabilities of Microsoft compliance solutions",
      "subtopic": "Describe Microsoft Service Trust Portal and privacy principles",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe Microsoft Service Trust Portal and privacy principles – Service Trust Portal"
    },
    {
      "stem": "A compliance officer wants a risk-based score that measures the organization's progress in completing improvement actions related to data protection standards and regulations, using prebuilt assessments for regulations such as GDPR. Which Microsoft Purview solution provides this?",
      "options": [
        "Microsoft Purview Data Loss Prevention",
        "Microsoft Purview Information Protection",
        "Microsoft Purview Compliance Manager",
        "Microsoft Purview Audit"
      ],
      "answer": "C",
      "explanation": "Compliance Manager provides a compliance score that reflects progress on improvement actions, weighted by the risk each action mitigates. It includes prebuilt assessments for common regulations and standards, step-by-step guidance and tracking of both Microsoft-managed and customer-managed actions. The other solutions protect data or record activity but do not score regulatory compliance progress.",
      "topic": "Describe the capabilities of Microsoft compliance solutions",
      "subtopic": "Describe compliance management capabilities of Microsoft Purview",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe compliance management capabilities of Microsoft Purview – Compliance Manager and compliance score"
    },
    {
      "stem": "Which actions can a Microsoft Purview sensitivity label apply to a document? Choose TWO.",
      "options": [
        "Encrypt the content so that only authorized users can open it",
        "Retain the content for seven years and then delete it automatically",
        "Place the content on hold for a legal investigation",
        "Add a watermark, header or footer to the document"
      ],
      "answer": "AD",
      "explanation": "Sensitivity labels classify and protect content: they can apply encryption with usage rights and add content markings such as watermarks, headers and footers, and the protection travels with the file. Keeping and then deleting content is the job of retention labels and policies in data lifecycle management, and legal holds are placed through eDiscovery.",
      "topic": "Describe the capabilities of Microsoft compliance solutions",
      "subtopic": "Describe information protection, data lifecycle management, and data governance capabilities of Microsoft Purview",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe information protection capabilities of Microsoft Purview – sensitivity labels"
    },
    {
      "stem": "A company wants to identify and investigate risky user activity, such as downloading large numbers of files from SharePoint shortly before the user's resignation date, by correlating activity with signals imported through an HR connector. Which Microsoft Purview solution should it use?",
      "options": [
        "Microsoft Purview Communication Compliance",
        "Microsoft Purview eDiscovery",
        "Microsoft Purview Data Lifecycle Management",
        "Microsoft Purview Insider Risk Management"
      ],
      "answer": "D",
      "explanation": "Insider Risk Management uses policy templates, such as data theft by departing users, that correlate user activity with indicators including HR data like resignation dates to raise alerts for investigation. Communication Compliance instead reviews messages for inappropriate or sensitive content, and eDiscovery finds and preserves content for legal cases rather than detecting risky behavior.",
      "topic": "Describe the capabilities of Microsoft compliance solutions",
      "subtopic": "Describe insider risk, eDiscovery, and audit capabilities in Microsoft Purview",
      "difficulty": "hard",
      "source": "SC-900 skills outline: Describe insider risk, eDiscovery, and audit capabilities in Microsoft Purview – Insider Risk Management"
    }
  ]
}
```
