```json
{
  "format": "domcq/1",
  "exam": "azure-sc900",
  "set": "SC-900: Microsoft Security, Compliance, and Identity Fundamentals practice – Core skills mix",
  "questions": [
    {
      "stem": "An organization is adopting the Zero Trust security model. Which of the following is one of the three guiding principles of Zero Trust?",
      "options": [
        "Trust devices that are connected to the corporate network",
        "Grant administrators permanent elevated access",
        "Use least privileged access",
        "Rely on a single perimeter firewall"
      ],
      "answer": "C",
      "explanation": "Zero Trust is built on three guiding principles: verify explicitly, use least privileged access, and assume breach. Least privileged access means giving users only the access they need, for only as long as they need it, often with just-in-time and just-enough-access controls. Zero Trust deliberately rejects the idea that anything inside the network perimeter is automatically trusted.",
      "rationales": {
        "A": "Wrong: Zero Trust never trusts a device just because of its network location; every request is verified.",
        "B": "Wrong: permanent elevated access contradicts least privilege; Zero Trust favors just-in-time, time-bound access.",
        "C": "Correct: use least privileged access is one of the three Zero Trust principles, with verify explicitly and assume breach.",
        "D": "Wrong: depending on a single perimeter is the traditional model Zero Trust replaces; it assumes breach instead."
      },
      "topic": "Describe the concepts of security, compliance, and identity",
      "subtopic": "Describe security and compliance concepts",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe security and compliance concepts – Zero Trust methodology"
    },
    {
      "stem": "Under the cloud shared responsibility model, which responsibility always remains with the customer, whether a workload is deployed as SaaS, PaaS, IaaS, or on-premises?",
      "options": [
        "Physical security of the datacenter",
        "Information and data stored in the service",
        "Patching of the operating system",
        "Configuration of the physical network hosts"
      ],
      "answer": "B",
      "explanation": "In the shared responsibility model, the split of duties between customer and cloud provider changes with the deployment type, but some responsibilities never move to the provider. The customer always owns its information and data, the devices that access it, and its accounts and identities. Physical datacenter, host and network responsibilities move to the provider in every cloud model.",
      "rationales": {
        "A": "Wrong: physical datacenter security is the cloud provider's responsibility in SaaS, PaaS and IaaS.",
        "B": "Correct: the customer always remains responsible for its information and data in every deployment type.",
        "C": "Wrong: operating system patching is the customer's job in IaaS but moves to the provider in PaaS and SaaS.",
        "D": "Wrong: physical network hosts are managed by the cloud provider in all cloud deployment types."
      },
      "topic": "Describe the concepts of security, compliance, and identity",
      "subtopic": "Describe security and compliance concepts",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe security and compliance concepts – shared responsibility model"
    },
    {
      "stem": "A company wants its users, who sign in with the company's own identity provider, to access a partner's applications without separate accounts being created for them in the partner's directory. The partner's identity provider is configured to trust authentication performed by the company's identity provider. Which identity concept does this describe?",
      "options": [
        "Authorization",
        "Role-based access control",
        "Directory synchronization",
        "Federation"
      ],
      "answer": "D",
      "explanation": "Federation is a trust relationship between identity providers, so that a user authenticated by one provider can access resources protected by another without a separate set of credentials. The resource side does not authenticate the user itself; it relies on the identity provider it trusts. Trust can be one-way or two-way and does not require the two organizations to share a directory.",
      "rationales": {
        "A": "Wrong: authorization decides what an authenticated identity may do; it does not establish trust between providers.",
        "B": "Wrong: role-based access control assigns permissions by role inside a system; it is not cross-provider trust.",
        "C": "Wrong: directory synchronization copies identities between directories, which this scenario avoids.",
        "D": "Correct: federation lets one identity provider trust authentication done by another, so no extra accounts are needed."
      },
      "topic": "Describe the concepts of security, compliance, and identity",
      "subtopic": "Define identity concepts",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Define identity concepts – federation"
    },
    {
      "stem": "A developer is building an application that runs on an Azure virtual machine and needs to read secrets from Azure Key Vault. The developer does not want to store, manage or rotate any credentials in the application's code or configuration. Which type of Microsoft Entra identity should be used?",
      "options": [
        "Managed identity",
        "Guest user account",
        "Member user account",
        "Device identity"
      ],
      "answer": "A",
      "explanation": "A managed identity is a special type of service principal whose credentials are created and rotated automatically by Azure. An Azure resource such as a virtual machine can use it to obtain tokens for services that support Microsoft Entra authentication, such as Key Vault, without any secrets in code. This removes the risk of leaked or expired application credentials.",
      "rationales": {
        "A": "Correct: a managed identity gives an Azure resource an identity whose credentials Azure manages and rotates automatically.",
        "B": "Wrong: a guest account represents an external person invited to the tenant, not a workload running on a VM.",
        "C": "Wrong: a member user account represents a person and would require storing a password for the application.",
        "D": "Wrong: a device identity represents a registered or joined device, not an application accessing Key Vault."
      },
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe function and identity types of Microsoft Entra ID",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe function and identity types of Microsoft Entra ID – workload identities"
    },
    {
      "stem": "A company uses Microsoft Entra Connect for hybrid identity. Its security policy requires that user passwords are validated directly against on-premises Active Directory at sign-in, using lightweight agents installed on on-premises servers, and that no password hashes are stored in the cloud. Which sign-in method meets these requirements?",
      "options": [
        "Password hash synchronization",
        "Pass-through authentication",
        "Microsoft Entra B2B collaboration",
        "Self-service password reset"
      ],
      "answer": "B",
      "explanation": "Pass-through authentication lets users sign in to cloud services with their on-premises passwords, which are validated directly against on-premises Active Directory by lightweight agents. Because validation happens on-premises, password hashes do not need to be synchronized to the cloud. This suits organizations whose policies require on-premises password validation without deploying a full federation infrastructure.",
      "rationales": {
        "A": "Wrong: password hash synchronization stores a hash of the password hash in Microsoft Entra ID, which the policy forbids.",
        "B": "Correct: pass-through authentication uses on-premises agents to validate passwords against Active Directory.",
        "C": "Wrong: B2B collaboration invites external users as guests; it is not a hybrid sign-in method for employees.",
        "D": "Wrong: self-service password reset lets users reset their own passwords; it does not define how sign-in is validated."
      },
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe function and identity types of Microsoft Entra ID",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe function and identity types of Microsoft Entra ID – hybrid identity"
    },
    {
      "stem": "Which of the following can be used as passwordless authentication methods in Microsoft Entra ID? Choose TWO.",
      "options": [
        "Windows Hello for Business",
        "Voice call verification",
        "FIDO2 security keys (passkeys)",
        "Security questions"
      ],
      "answer": "AC",
      "explanation": "Passwordless methods replace the password with something the user has combined with a biometric or PIN. Windows Hello for Business uses a credential bound to the device and unlocked by a biometric or PIN, and FIDO2 security keys (passkeys) use public key cryptography with a hardware or device-bound key. Microsoft Authenticator and certificate-based authentication are other passwordless options.",
      "rationales": {
        "A": "Correct: Windows Hello for Business replaces the password with a device-bound credential unlocked by biometric or PIN.",
        "B": "Wrong: a voice call is only a second verification factor after a password; it cannot be used as a primary method.",
        "C": "Correct: FIDO2 security keys (passkeys) let users sign in with a key and biometric or PIN instead of a password.",
        "D": "Wrong: security questions can be used only for self-service password reset, not for signing in."
      },
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe authentication capabilities of Microsoft Entra ID",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe authentication capabilities of Microsoft Entra ID – authentication methods"
    },
    {
      "stem": "At what point during the sign-in process does Microsoft Entra ID evaluate and enforce Conditional Access policies?",
      "options": [
        "Before the user is prompted for any credentials",
        "Only when the user signs in from an untrusted network",
        "Only when the user's session token is renewed",
        "After first-factor authentication is completed"
      ],
      "answer": "D",
      "explanation": "Conditional Access policies are enforced after first-factor authentication has completed, because the policy engine needs to know who the user is to evaluate signals such as user, group, location, device and risk. It is therefore not a first line of defense against attacks such as denial of service. Policies then apply decisions such as block access, grant access or require MFA.",
      "rationales": {
        "A": "Wrong: Conditional Access needs the user's identity as a signal, so it runs after the first factor, not before.",
        "B": "Wrong: location is only one possible signal; policies are evaluated on every applicable sign-in, not just untrusted networks.",
        "C": "Wrong: policies are evaluated at sign-in to the targeted resource, not only when a session token is renewed.",
        "D": "Correct: Conditional Access policies are enforced after first-factor authentication has been completed."
      },
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe access management capabilities of Microsoft Entra ID",
      "difficulty": "hard",
      "source": "SC-900 skills outline: Describe access management capabilities of Microsoft Entra ID – Conditional Access"
    },
    {
      "stem": "An organization wants administrators to activate privileged Microsoft Entra roles only when they need them, for a limited time, with approval required and a justification recorded. Which capability should the organization use?",
      "options": [
        "Access reviews",
        "Entitlement management",
        "Privileged Identity Management",
        "Microsoft Entra ID Protection"
      ],
      "answer": "C",
      "explanation": "Privileged Identity Management (PIM) provides just-in-time, time-bound privileged access to Microsoft Entra and Azure roles. Eligible users activate a role when needed, and activation can require approval, MFA and a justification, with every activation audited. This reduces the risk of standing administrative access being misused.",
      "rationales": {
        "A": "Wrong: access reviews periodically recertify who still needs access; they do not handle just-in-time role activation.",
        "B": "Wrong: entitlement management bundles resources into access packages; it is not for time-bound privileged role activation.",
        "C": "Correct: PIM gives just-in-time, time-bound role activation with approval, justification and auditing.",
        "D": "Wrong: ID Protection detects and responds to identity risk; it does not control privileged role activation."
      },
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe identity protection and governance capabilities of Microsoft Entra",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe identity protection and governance capabilities of Microsoft Entra – Privileged Identity Management"
    },
    {
      "stem": "Microsoft Entra ID Protection detects that a user's valid username and password have been found in a public leak. This detection is classified as which type of risk?",
      "options": [
        "Sign-in risk",
        "User risk",
        "Device compliance risk",
        "Insider risk"
      ],
      "answer": "B",
      "explanation": "ID Protection classifies detections as user risk or sign-in risk. User risk is the probability that an identity or account is compromised, and leaked credentials indicate exactly that, regardless of any particular sign-in. Sign-in risk instead describes the probability that a specific authentication request was not made by the account owner, such as a sign-in from an anonymous IP address.",
      "rationales": {
        "A": "Wrong: sign-in risk applies to a specific authentication request, whereas leaked credentials concern the account itself.",
        "B": "Correct: leaked credentials are a user risk detection, indicating the account itself is likely compromised.",
        "C": "Wrong: device compliance is a Conditional Access condition from Intune, not an ID Protection risk type.",
        "D": "Wrong: insider risk is a Microsoft Purview solution for risky user activity, not an ID Protection risk type."
      },
      "topic": "Describe the capabilities of Microsoft Entra",
      "subtopic": "Describe identity protection and governance capabilities of Microsoft Entra",
      "difficulty": "hard",
      "source": "SC-900 skills outline: Describe identity protection and governance capabilities of Microsoft Entra – Microsoft Entra ID Protection"
    },
    {
      "stem": "A company hosts a public-facing web application in Azure and is concerned about large-scale volumetric attacks that try to overwhelm its network resources and make the application unavailable to legitimate users. Which Azure service is specifically designed to mitigate this type of attack?",
      "options": [
        "Azure DDoS Protection",
        "Azure Bastion",
        "Azure Key Vault",
        "Microsoft Defender for Identity"
      ],
      "answer": "A",
      "explanation": "A distributed denial of service (DDoS) attack tries to exhaust an application's resources so it becomes unavailable. Azure DDoS Protection monitors traffic to public endpoints, learns normal traffic patterns and automatically mitigates volumetric, protocol and resource-layer attacks. Its paid tiers add adaptive tuning, attack metrics and alerting beyond the infrastructure protection every Azure service receives.",
      "rationales": {
        "A": "Correct: Azure DDoS Protection detects and mitigates attacks that try to overwhelm resources and cause unavailability.",
        "B": "Wrong: Azure Bastion provides secure RDP and SSH to virtual machines; it does not mitigate denial of service attacks.",
        "C": "Wrong: Azure Key Vault stores secrets, keys and certificates; it does not filter attack traffic.",
        "D": "Wrong: Defender for Identity monitors on-premises Active Directory signals, not traffic to Azure endpoints."
      },
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe core infrastructure security services in Azure",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe core infrastructure security services in Azure – Azure DDoS Protection"
    },
    {
      "stem": "Administrators need to connect to Azure virtual machines using RDP and SSH directly from the Azure portal over TLS, without assigning public IP addresses to those virtual machines. Which Azure service should they use?",
      "options": [
        "Azure Firewall",
        "Network security groups",
        "Azure Web Application Firewall",
        "Azure Bastion"
      ],
      "answer": "D",
      "explanation": "Azure Bastion is a fully managed service deployed into a virtual network that provides RDP and SSH access to virtual machines through the Azure portal or native client over TLS. Because the virtual machines do not need public IP addresses, their RDP and SSH ports are never exposed to the internet. This removes a common target for port scanning and brute-force attacks.",
      "rationales": {
        "A": "Wrong: Azure Firewall filters network traffic; it does not provide browser-based RDP or SSH sessions to virtual machines.",
        "B": "Wrong: NSGs allow or deny traffic by rule but cannot provide RDP or SSH access without exposing the virtual machines.",
        "C": "Wrong: a Web Application Firewall protects web apps against exploits such as SQL injection, not remote VM access.",
        "D": "Correct: Azure Bastion gives RDP and SSH access over TLS from the portal without public IP addresses on the VMs."
      },
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe core infrastructure security services in Azure",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe core infrastructure security services in Azure – Azure Bastion"
    },
    {
      "stem": "Which statements about Azure network security groups (NSGs) are correct? Choose TWO.",
      "options": [
        "NSGs filter traffic by using Microsoft threat intelligence feeds",
        "NSG rules are processed in priority order, with lower numbers first",
        "The default security rules in an NSG can be deleted",
        "An NSG can be associated with a subnet or a network interface"
      ],
      "answer": "BD",
      "explanation": "An NSG contains security rules that allow or deny inbound and outbound traffic based on source, destination, port and protocol. Rules are processed in priority order, lowest number first, and processing stops at the first matching rule. An NSG can be associated with subnets and network interfaces, and its default rules cannot be removed, only overridden by higher-priority custom rules.",
      "rationales": {
        "A": "Wrong: threat intelligence-based filtering is a feature of Azure Firewall, not of network security groups.",
        "B": "Correct: NSG rules are evaluated by priority, lower numbers first, and processing stops at the first match.",
        "C": "Wrong: default NSG rules cannot be deleted; they can only be overridden by custom rules with higher priority.",
        "D": "Correct: an NSG can be associated with a subnet, a network interface, or both."
      },
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe core infrastructure security services in Azure",
      "difficulty": "hard",
      "source": "SC-900 skills outline: Describe core infrastructure security services in Azure – network security groups"
    },
    {
      "stem": "When Microsoft Defender for Cloud is enabled on an Azure subscription, which security standard is assigned by default and used to generate the security recommendations that feed the secure score?",
      "options": [
        "ISO/IEC 27001",
        "NIST SP 800-53",
        "Microsoft cloud security benchmark",
        "PCI DSS"
      ],
      "answer": "C",
      "explanation": "The Microsoft cloud security benchmark (MCSB) is Microsoft's set of security best practices for cloud workloads, and Defender for Cloud assigns it by default. Defender for Cloud assesses resources against it, produces recommendations, and calculates the secure score from them. Other regulatory standards can be added to the regulatory compliance dashboard, but they are not the default.",
      "rationales": {
        "A": "Wrong: ISO/IEC 27001 can be added as a regulatory standard, but it is not assigned by default.",
        "B": "Wrong: NIST SP 800-53 is an optional standard that can be added; the default is Microsoft's own benchmark.",
        "C": "Correct: the Microsoft cloud security benchmark is the default standard behind recommendations and secure score.",
        "D": "Wrong: PCI DSS can be added for payment card compliance but is not applied by default."
      },
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe security management capabilities of Azure",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe security management capabilities of Azure – Microsoft Defender for Cloud and the Microsoft cloud security benchmark"
    },
    {
      "stem": "A security operations team uses Microsoft Sentinel. When a specific type of incident is created, the team wants a workflow to run automatically that disables the compromised user account and posts a message to a Microsoft Teams channel. Which Microsoft Sentinel feature, built on Azure Logic Apps, provides these automated response actions?",
      "options": [
        "Playbooks",
        "Workbooks",
        "Data connectors",
        "Hunting queries"
      ],
      "answer": "A",
      "explanation": "Microsoft Sentinel is both a SIEM and a SOAR solution. Its SOAR capability comes from playbooks, which are collections of response actions built on Azure Logic Apps and can be run automatically from automation rules or manually on an incident. Playbooks can call many services, such as disabling a user in Microsoft Entra ID or sending a Teams message.",
      "rationales": {
        "A": "Correct: playbooks are Logic Apps workflows that automate responses to Sentinel alerts and incidents.",
        "B": "Wrong: workbooks are interactive reports and dashboards for visualizing data; they do not perform response actions.",
        "C": "Wrong: data connectors ingest data into Sentinel from sources; they do not respond to incidents.",
        "D": "Wrong: hunting queries help analysts proactively search for threats; they do not automate remediation."
      },
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe capabilities of Microsoft Sentinel",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe capabilities of Microsoft Sentinel – SIEM and SOAR, automation"
    },
    {
      "stem": "Which Microsoft Defender XDR service protects an organization against malicious links and attachments in email messages and in collaboration tools such as Microsoft Teams?",
      "options": [
        "Microsoft Defender for Identity",
        "Microsoft Defender for Office 365",
        "Microsoft Defender for Endpoint",
        "Microsoft Defender for Cloud Apps"
      ],
      "answer": "B",
      "explanation": "Microsoft Defender for Office 365 protects email and collaboration workloads against threats such as phishing, business email compromise, and malicious links and files. Features such as Safe Links and Safe Attachments check URLs at time of click and detonate attachments in a sandbox. Its protection extends to Microsoft Teams, SharePoint and OneDrive as well as Exchange Online.",
      "rationales": {
        "A": "Wrong: Defender for Identity uses on-premises Active Directory signals to detect identity attacks, not email threats.",
        "B": "Correct: Defender for Office 365 protects email and collaboration tools against malicious links and attachments.",
        "C": "Wrong: Defender for Endpoint protects devices such as laptops and servers, not email and collaboration content.",
        "D": "Wrong: Defender for Cloud Apps is a CASB for discovering and controlling SaaS app use, not email filtering."
      },
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe threat protection with Microsoft Defender XDR",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe threat protection with Microsoft Defender XDR – Microsoft Defender for Office 365"
    },
    {
      "stem": "A company wants to detect reconnaissance, pass-the-hash attempts and other lateral movement activity by monitoring signals from its on-premises Active Directory Domain Services domain controllers. Which Microsoft Defender XDR service should it use?",
      "options": [
        "Microsoft Defender for Cloud Apps",
        "Microsoft Defender for Office 365",
        "Microsoft Defender Vulnerability Management",
        "Microsoft Defender for Identity"
      ],
      "answer": "D",
      "explanation": "Microsoft Defender for Identity uses sensors on domain controllers and other identity infrastructure to monitor on-premises Active Directory signals. It learns normal user behavior and identifies reconnaissance, compromised credentials, lateral movement such as pass-the-hash, and domain dominance activity. Its alerts feed into the Microsoft Defender portal for correlation with other Defender XDR signals.",
      "rationales": {
        "A": "Wrong: Defender for Cloud Apps monitors SaaS app usage and cloud activity, not domain controller traffic.",
        "B": "Wrong: Defender for Office 365 protects email and collaboration content, not on-premises Active Directory.",
        "C": "Wrong: Defender Vulnerability Management finds and prioritizes weaknesses on devices; it does not detect lateral movement.",
        "D": "Correct: Defender for Identity uses domain controller signals to detect reconnaissance and lateral movement attacks."
      },
      "topic": "Describe the capabilities of Microsoft security solutions",
      "subtopic": "Describe threat protection with Microsoft Defender XDR",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe threat protection with Microsoft Defender XDR – Microsoft Defender for Identity"
    },
    {
      "stem": "An external auditor asks for Microsoft's independent third-party audit reports, such as SOC 2 and ISO/IEC 27001 reports, that cover Microsoft cloud services. Which Microsoft resource provides these reports for download?",
      "options": [
        "Microsoft Service Trust Portal",
        "Microsoft Purview Compliance Manager",
        "Microsoft Purview Audit",
        "Azure Advisor"
      ],
      "answer": "A",
      "explanation": "The Service Trust Portal is Microsoft's public site for publishing audit reports and other information about how Microsoft cloud services protect data. It contains independent audit reports such as SOC and ISO reports, whitepapers, and industry- and region-specific compliance resources. Signing in with a Microsoft cloud account gives access to the full documents.",
      "rationales": {
        "A": "Correct: the Service Trust Portal publishes Microsoft's third-party audit reports, such as SOC and ISO, for download.",
        "B": "Wrong: Compliance Manager measures your own organization's compliance posture; it is not the library of Microsoft audit reports.",
        "C": "Wrong: Purview Audit records user and admin activity in your tenant; it does not hold Microsoft's audit reports.",
        "D": "Wrong: Azure Advisor gives best-practice recommendations for Azure resources, not compliance audit reports."
      },
      "topic": "Describe the capabilities of Microsoft compliance solutions",
      "subtopic": "Describe Microsoft Service Trust Portal and privacy principles",
      "difficulty": "easy",
      "source": "SC-900 skills outline: Describe Microsoft Service Trust Portal and privacy principles – Service Trust Portal"
    },
    {
      "stem": "A compliance officer wants a single measurement of the organization's progress toward meeting regulatory requirements such as GDPR, together with recommended improvement actions and the points each action contributes when completed. Which Microsoft Purview capability provides this?",
      "options": [
        "Data lifecycle management",
        "Content search",
        "Compliance Manager",
        "Communication compliance"
      ],
      "answer": "C",
      "explanation": "Microsoft Purview Compliance Manager helps organizations manage compliance requirements using assessments built from regulatory templates. It calculates a risk-based compliance score from the improvement actions that are completed, weighting actions by how much risk they reduce. It also provides step-by-step guidance and lets actions be assigned and tracked.",
      "rationales": {
        "A": "Wrong: data lifecycle management retains and deletes content; it does not score regulatory compliance.",
        "B": "Wrong: content search finds content across Microsoft 365 locations; it does not measure compliance posture.",
        "C": "Correct: Compliance Manager provides a compliance score with improvement actions mapped to regulations.",
        "D": "Wrong: communication compliance detects inappropriate messages; it does not measure regulatory compliance progress."
      },
      "topic": "Describe the capabilities of Microsoft compliance solutions",
      "subtopic": "Describe compliance management capabilities of Microsoft Purview",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe compliance management capabilities of Microsoft Purview – Compliance Manager and compliance score"
    },
    {
      "stem": "An organization wants to classify confidential documents and apply encryption and a watermark that stay with each file even after it is shared outside the organization. Which Microsoft Purview capability should be used?",
      "options": [
        "Retention labels",
        "Sensitivity labels",
        "Data loss prevention policies",
        "Communication compliance policies"
      ],
      "answer": "B",
      "explanation": "Sensitivity labels classify and protect content. A label can apply encryption, content markings such as headers, footers and watermarks, and access restrictions. Because the label is stored in the file's metadata, the protection travels with the document wherever it goes, including outside the organization.",
      "rationales": {
        "A": "Wrong: retention labels control how long content is kept or when it is deleted; they do not encrypt or watermark it.",
        "B": "Correct: sensitivity labels apply encryption and visual markings that persist with the file wherever it is stored.",
        "C": "Wrong: DLP policies detect and block risky sharing of sensitive data but do not add persistent encryption or watermarks.",
        "D": "Wrong: communication compliance reviews messages for policy violations; it does not protect documents."
      },
      "topic": "Describe the capabilities of Microsoft compliance solutions",
      "subtopic": "Describe information protection, data lifecycle management, and data governance capabilities of Microsoft Purview",
      "difficulty": "medium",
      "source": "SC-900 skills outline: Describe information protection capabilities of Microsoft Purview – sensitivity labels"
    },
    {
      "stem": "A company wants to identify employees who download or exfiltrate large amounts of sensitive data shortly before they leave the organization, using resignation and termination dates imported through an HR data connector. Which Microsoft Purview solution should it use?",
      "options": [
        "Communication Compliance",
        "Information barriers",
        "eDiscovery (Premium)",
        "Insider Risk Management"
      ],
      "answer": "D",
      "explanation": "Microsoft Purview Insider Risk Management correlates signals across Microsoft 365 and other sources to detect risky user activity. Its data theft by departing users policy template uses HR connector data, such as resignation or termination dates, as a trigger and then looks for activities like mass downloads or copying files to USB. Analysts can then triage alerts and investigate cases.",
      "rationales": {
        "A": "Wrong: Communication Compliance scans messages for inappropriate content, not data theft linked to HR events.",
        "B": "Wrong: information barriers stop specific groups from communicating; they do not detect data exfiltration.",
        "C": "Wrong: eDiscovery (Premium) collects and reviews content for legal cases; it does not detect risky user behavior.",
        "D": "Correct: Insider Risk Management uses HR signals and activity data to detect data theft by departing users."
      },
      "topic": "Describe the capabilities of Microsoft compliance solutions",
      "subtopic": "Describe insider risk, eDiscovery, and audit capabilities in Microsoft Purview",
      "difficulty": "hard",
      "source": "SC-900 skills outline: Describe insider risk, eDiscovery, and audit capabilities in Microsoft Purview – Insider Risk Management"
    }
  ]
}
```
