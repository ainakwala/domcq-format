```json
{
  "format": "domcq/1",
  "exam": "azure-az900",
  "set": "AZ-900: Microsoft Azure Fundamentals practice – Core skills mix",
  "questions": [
    {
      "stem": "Under the cloud shared responsibility model, which responsibility always belongs to the cloud provider, regardless of whether the service is IaaS, PaaS, or SaaS?",
      "options": [
        "The information and data stored in the cloud",
        "The accounts and identities of users and services",
        "The physical security of the datacenter",
        "The devices that are allowed to connect to the cloud"
      ],
      "answer": "C",
      "explanation": "The shared responsibility model divides duties between the provider and the customer, and the split changes with the service type. However, the provider always owns the physical layer: the datacenter, the physical network, and the physical hosts. Conversely, the customer always keeps responsibility for its data, its endpoint devices, and its accounts and identities, even in SaaS.",
      "rationales": {
        "A": "Wrong: the customer always remains responsible for its own information and data, in every service type.",
        "B": "Wrong: managing accounts and identities stays with the customer regardless of service type.",
        "C": "Correct: the physical datacenter, network, and hosts are always the cloud provider's responsibility.",
        "D": "Wrong: the customer always decides and manages which devices may connect to its cloud services."
      },
      "topic": "Describe cloud concepts",
      "subtopic": "Describe cloud computing",
      "difficulty": "easy",
      "source": "AZ-900 skills outline: Describe cloud computing – Describe the shared responsibility model"
    },
    {
      "stem": "A company currently buys physical servers up front every few years. It plans to move its workloads to Azure and pay each month only for the compute it actually uses. How does this change the way it spends on IT?",
      "options": [
        "It shifts spending from capital expenditure (CapEx) to operational expenditure (OpEx)",
        "It shifts spending from operational expenditure (OpEx) to capital expenditure (CapEx)",
        "It replaces variable monthly costs with one fixed up-front payment",
        "It increases the value of hardware assets recorded on its balance sheet"
      ],
      "answer": "A",
      "explanation": "Capital expenditure is a one-time, up-front spend on physical assets such as servers, which then depreciate over time. Cloud computing uses a consumption-based model in which you pay for resources as you use them, which is operational expenditure. Moving from buying servers to paying monthly for usage is therefore a shift from CapEx to OpEx, with no up-front infrastructure cost and the ability to stop paying when resources are no longer needed.",
      "rationales": {
        "A": "Correct: buying hardware up front is CapEx, while paying for cloud resources as they are consumed is OpEx.",
        "B": "Wrong: this is the reverse; the company stops buying servers up front and starts paying per use.",
        "C": "Wrong: consumption-based pricing produces variable costs that track usage, not one fixed up-front payment.",
        "D": "Wrong: the company stops buying servers, so it records fewer owned hardware assets, not more."
      },
      "topic": "Describe cloud concepts",
      "subtopic": "Describe cloud computing",
      "difficulty": "easy",
      "source": "AZ-900 skills outline: Describe cloud computing – Describe the consumption-based model"
    },
    {
      "stem": "An application runs on two Azure virtual machines and is slowing down under increased demand. An administrator adds three more virtual machines of the same size so that all five share the workload. Which type of scaling is this?",
      "options": [
        "Vertical scaling (scaling up)",
        "Vertical scaling (scaling down)",
        "Horizontal scaling (scaling in)",
        "Horizontal scaling (scaling out)"
      ],
      "answer": "D",
      "explanation": "Horizontal scaling changes the number of resource instances: adding instances is scaling out, and removing them is scaling in. Vertical scaling instead changes the capability of an existing resource, such as adding CPUs or memory to a VM (scaling up) or reducing them (scaling down). Adding more identical VMs to share the load increases the instance count, so it is scaling out.",
      "rationales": {
        "A": "Wrong: scaling up adds CPU or memory to existing virtual machines rather than adding more machines.",
        "B": "Wrong: scaling down reduces the size of existing machines, the opposite of increasing capacity.",
        "C": "Wrong: scaling in removes instances, whereas the administrator added three virtual machines.",
        "D": "Correct: adding more instances of the same size to share the workload is horizontal scaling out."
      },
      "topic": "Describe cloud concepts",
      "subtopic": "Describe the benefits of using cloud services",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe the benefits of using cloud services – high availability and scalability in the cloud"
    },
    {
      "stem": "A development team wants to deploy its own web application code to Azure. It does not want to manage virtual machines, operating systems, or runtime patching, but it does want full control over the application and its data. Which cloud service type best meets these requirements?",
      "options": [
        "Infrastructure as a service (IaaS)",
        "Platform as a service (PaaS)",
        "Software as a service (SaaS)",
        "Hybrid cloud"
      ],
      "answer": "B",
      "explanation": "PaaS provides a managed platform: the cloud provider maintains the physical infrastructure, operating systems, and development tools such as runtimes, while the customer deploys and manages its applications and data. This lets developers focus on code instead of servers. IaaS would leave OS and runtime management with the team, and SaaS delivers a finished application rather than hosting the team's own code.",
      "rationales": {
        "A": "Wrong: with IaaS the customer manages the operating system, runtime, and patching of its virtual machines.",
        "B": "Correct: PaaS hosts the customer's code while the provider manages the OS, runtime, and infrastructure.",
        "C": "Wrong: SaaS delivers a complete application from the provider, so the team could not deploy its own code.",
        "D": "Wrong: hybrid cloud is a deployment model combining public and private clouds, not a service type."
      },
      "topic": "Describe cloud concepts",
      "subtopic": "Describe cloud service types",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe cloud service types – Describe platform as a service (PaaS)"
    },
    {
      "stem": "A company is comparing a public cloud with a private cloud hosted in its own datacenter. Which TWO statements describe advantages of the public cloud? Choose TWO.",
      "options": [
        "Capacity can be increased without buying more hardware",
        "The company has complete control over hardware and security",
        "Costs follow a consumption-based, pay-for-what-you-use model",
        "Data is never collocated with other organizations' data"
      ],
      "answer": "AC",
      "explanation": "In a public cloud, the provider owns, maintains, and expands the hardware, so customers can add capacity on demand without purchasing equipment and pay only for what they consume. A private cloud gives the organization complete control over resources and security and keeps its data off shared hardware, but the organization must buy and maintain that hardware itself. Control and isolation are therefore private cloud advantages, while on-demand capacity and consumption-based billing are public cloud advantages.",
      "rationales": {
        "A": "Correct: the provider owns and expands the hardware, so customers add public cloud capacity without buying equipment.",
        "B": "Wrong: complete control over hardware and physical security is a characteristic of a private cloud.",
        "C": "Correct: public cloud services are billed on a consumption basis, so you pay only for what you use.",
        "D": "Wrong: public cloud resources typically run on shared provider hardware; data isolation from others is a private cloud trait."
      },
      "topic": "Describe cloud concepts",
      "subtopic": "Describe cloud computing",
      "difficulty": "hard",
      "source": "AZ-900 skills outline: Describe cloud computing – Define cloud models, including public, private, and hybrid"
    },
    {
      "stem": "Which statement correctly describes an Azure availability zone?",
      "options": [
        "An isolated instance of Azure reserved for government or sovereign workloads",
        "A logical container that groups related Azure resources for management",
        "A discrete market of two or more regions that preserves data residency",
        "A physically separate location within a region with its own power, cooling, and networking"
      ],
      "answer": "D",
      "explanation": "Availability zones are physically separate datacenters within an Azure region; each zone is made up of one or more datacenters with independent power, cooling, and networking. Because zones are isolated from one another, an outage in one zone doesn't take down the others, so running replicas of a workload across zones provides high availability within a single region. Zone-enabled regions have a minimum of three zones.",
      "rationales": {
        "A": "Wrong: this describes a sovereign region, such as Azure Government, not an availability zone.",
        "B": "Wrong: this describes a resource group, which is a management container, not a physical location.",
        "C": "Wrong: this describes an Azure geography, which contains regions rather than sitting inside one.",
        "D": "Correct: each availability zone is one or more datacenters with independent power, cooling, and networking."
      },
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe the core architectural components of Azure",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe the core architectural components of Azure – Describe availability zones"
    },
    {
      "stem": "Which TWO statements about Azure region pairs are correct? Choose TWO.",
      "options": [
        "Every Azure resource is automatically replicated to the paired region",
        "Planned Azure system updates are rolled out to paired regions one at a time",
        "Paired regions are always placed in different geographies for extra separation",
        "During a broad outage, one region in each pair is prioritized for recovery"
      ],
      "answer": "BD",
      "explanation": "Most Azure regions are paired with another region in the same geography, typically at least 300 miles apart, to support disaster recovery. Microsoft rolls out planned system updates to paired regions sequentially rather than simultaneously, which limits the impact of a faulty update, and during an extensive outage it prioritizes restoring one region in every pair. Pairing does not replicate your resources on its own; replication depends on the service and the options you choose, such as geo-redundant storage.",
      "rationales": {
        "A": "Wrong: replication to the paired region is not automatic for all resources; it depends on service and configuration.",
        "B": "Correct: Microsoft updates paired regions one region at a time to reduce the risk of downtime from an update.",
        "C": "Wrong: region pairs are generally kept within the same geography to respect data residency requirements.",
        "D": "Correct: in an extensive outage, one region out of every pair is prioritized so it can be restored quickly."
      },
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe the core architectural components of Azure",
      "difficulty": "hard",
      "source": "AZ-900 skills outline: Describe the core architectural components of Azure – Describe Azure regions, region pairs, and sovereign regions"
    },
    {
      "stem": "A developer wants to run a short piece of code each time a new message arrives in a storage queue. The developer does not want to manage any servers and wants to pay only when the code runs. Which Azure service best fits this requirement?",
      "options": [
        "Azure Virtual Machines",
        "Azure Virtual Desktop",
        "Azure Functions",
        "Azure Kubernetes Service"
      ],
      "answer": "C",
      "explanation": "Azure Functions is an event-driven, serverless compute service: code runs in response to triggers such as a queue message, an HTTP request, or a timer. Azure provisions and scales the underlying infrastructure automatically, and on the Consumption plan you are billed only for the time your code actually executes. This makes Functions a natural fit for small tasks that respond to events.",
      "rationales": {
        "A": "Wrong: virtual machines are IaaS, so the developer would manage the server and pay while it runs, even when idle.",
        "B": "Wrong: Azure Virtual Desktop delivers virtualized Windows desktops and apps to users, not event-driven code.",
        "C": "Correct: Azure Functions runs code in response to triggers such as queue messages and bills per execution.",
        "D": "Wrong: AKS orchestrates containerized applications on a cluster of nodes, far more than this event-driven task needs."
      },
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure compute and networking services",
      "difficulty": "easy",
      "source": "AZ-900 skills outline: Describe Azure compute and networking services – Describe Azure Functions"
    },
    {
      "stem": "A company needs a dedicated, private connection between its on-premises network and Azure. The connection must not travel over the public internet. Which Azure service should the company use?",
      "options": [
        "Azure ExpressRoute",
        "Azure VPN Gateway (site-to-site)",
        "Azure DNS",
        "Azure virtual network peering"
      ],
      "answer": "A",
      "explanation": "ExpressRoute extends an on-premises network into the Microsoft cloud over a private connection supplied by a connectivity provider. Because the traffic does not go over the public internet, ExpressRoute offers more reliability, faster speeds, more consistent latency, and higher security than typical internet connections. A site-to-site VPN encrypts traffic, but that traffic still travels across the public internet.",
      "rationales": {
        "A": "Correct: ExpressRoute uses a private connection through a connectivity provider and bypasses the public internet.",
        "B": "Wrong: a site-to-site VPN encrypts traffic, but that traffic still travels across the public internet.",
        "C": "Wrong: Azure DNS hosts DNS domains for name resolution; it does not connect networks.",
        "D": "Wrong: peering connects Azure virtual networks to each other, not an on-premises network to Azure."
      },
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure compute and networking services",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe Azure compute and networking services – Describe ExpressRoute and VPN Gateway"
    },
    {
      "stem": "A company must retain compliance records in Azure Blob Storage for seven years. The records will almost never be read, and when they are, a retrieval delay of several hours is acceptable. Which access tier provides the lowest storage cost for this data?",
      "options": [
        "Hot tier",
        "Cool tier",
        "Cold tier",
        "Archive tier"
      ],
      "answer": "D",
      "explanation": "Blob Storage access tiers trade storage cost against access cost and latency. The Archive tier has the lowest storage cost but the highest retrieval cost, and it stores data offline, so a blob must be rehydrated to an online tier before it can be read, which can take hours. It is intended for data that is rarely accessed and kept for at least 180 days, which fits long-term compliance records.",
      "rationales": {
        "A": "Wrong: the Hot tier is optimized for frequently accessed data and has the highest storage cost.",
        "B": "Wrong: the Cool tier suits infrequently accessed data kept at least 30 days but still costs more to store than Archive.",
        "C": "Wrong: the Cold tier is for rarely accessed data kept at least 90 days, but it is online and costs more than Archive.",
        "D": "Correct: Archive has the lowest storage cost and accepts hours of rehydration latency, ideal for rarely read records."
      },
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure storage services",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe Azure storage services – Describe storage tiers"
    },
    {
      "stem": "A company needs its Azure Storage data to remain available if an entire availability zone in the primary region fails, by replicating synchronously across three zones. The data must also be copied asynchronously to a secondary region for disaster recovery. Which redundancy option meets both requirements?",
      "options": [
        "Geo-redundant storage (GRS)",
        "Geo-zone-redundant storage (GZRS)",
        "Zone-redundant storage (ZRS)",
        "Locally redundant storage (LRS)"
      ],
      "answer": "B",
      "explanation": "GZRS combines zone redundancy and geo-replication: data is copied synchronously across three availability zones in the primary region, as with ZRS, and then copied asynchronously to a single physical location in a secondary region. GRS also replicates to a secondary region, but within the primary region it uses LRS, keeping all three copies in one datacenter. ZRS protects against a zone failure but has no secondary region copy, and LRS protects only against hardware failures within one datacenter.",
      "rationales": {
        "A": "Wrong: GRS keeps its three primary-region copies in a single datacenter (LRS), so it does not span availability zones.",
        "B": "Correct: GZRS replicates synchronously across three zones in the primary region and asynchronously to a secondary region.",
        "C": "Wrong: ZRS spans three availability zones but does not copy data to a secondary region.",
        "D": "Wrong: LRS keeps three copies in a single datacenter and offers neither zone nor regional protection."
      },
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure storage services",
      "difficulty": "hard",
      "source": "AZ-900 skills outline: Describe Azure storage services – Describe redundancy options"
    },
    {
      "stem": "An organization wants to require multifactor authentication only when users sign in from outside the corporate network, and to block sign-ins from devices that are not compliant. Which Microsoft Entra ID feature should it use?",
      "options": [
        "Azure role-based access control (Azure RBAC)",
        "Microsoft Entra Domain Services",
        "Microsoft Entra Conditional Access",
        "Single sign-on (SSO)"
      ],
      "answer": "C",
      "explanation": "Conditional Access is a Microsoft Entra ID tool that uses identity signals, such as the user, location, device, and application, to decide whether to allow access, require additional verification such as MFA, or block access. This lets an organization apply stronger controls only when risk is higher, for example from an unfamiliar location, without burdening users who sign in from trusted networks.",
      "rationales": {
        "A": "Wrong: Azure RBAC controls what actions users can perform on Azure resources, not the conditions of sign-in.",
        "B": "Wrong: Entra Domain Services provides managed domain services such as domain join and Kerberos, not sign-in policies.",
        "C": "Correct: Conditional Access evaluates signals like location and device to allow, block, or require MFA at sign-in.",
        "D": "Wrong: SSO lets users sign in once to reach many apps; it does not apply location- or device-based conditions."
      },
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure identity, access, and security",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe Azure identity, access, and security – Describe Microsoft Entra Conditional Access"
    },
    {
      "stem": "Which security model is built on the guiding principles of verifying explicitly, using least privilege access, and assuming breach?",
      "options": [
        "Zero Trust",
        "Defense in depth",
        "Shared responsibility model",
        "Perimeter-based security"
      ],
      "answer": "A",
      "explanation": "Zero Trust assumes that no user or device should be trusted by default, even inside the corporate network. Every access request is authenticated and authorized using all available data points, users receive only the access they need, and systems are designed on the assumption that an attacker may already be present. This replaces the older idea of trusting everything inside a secure network perimeter.",
      "rationales": {
        "A": "Correct: verify explicitly, use least privilege access, and assume breach are the three Zero Trust principles.",
        "B": "Wrong: defense in depth uses layers of protection, from physical security to data, to slow down attackers.",
        "C": "Wrong: the shared responsibility model divides security duties between the cloud provider and the customer.",
        "D": "Wrong: perimeter-based security trusts users inside the network boundary, which Zero Trust specifically rejects."
      },
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure identity, access, and security",
      "difficulty": "easy",
      "source": "AZ-900 skills outline: Describe Azure identity, access, and security – Describe the concept of Zero Trust"
    },
    {
      "stem": "Before migrating, a company wants to compare the cost of running its current on-premises servers, storage, and networking with the estimated cost of running the same workloads in Azure. Which tool is designed for this comparison?",
      "options": [
        "Azure pricing calculator",
        "Total Cost of Ownership (TCO) calculator",
        "Microsoft Cost Management",
        "Azure Monitor"
      ],
      "answer": "B",
      "explanation": "The TCO calculator compares the cost of on-premises infrastructure with the cost of running equivalent workloads in Azure. You enter details of your current servers, databases, storage, and networking, along with assumptions such as power and IT labor costs, and it produces a side-by-side report. The pricing calculator, by contrast, only estimates the cost of the Azure services you plan to provision.",
      "rationales": {
        "A": "Wrong: the pricing calculator estimates the cost of planned Azure services but does not model on-premises costs.",
        "B": "Correct: the TCO calculator compares on-premises infrastructure costs with the cost of equivalent Azure workloads.",
        "C": "Wrong: Cost Management analyzes actual Azure spending after resources exist, not a pre-migration comparison.",
        "D": "Wrong: Azure Monitor collects and analyzes metrics and logs from resources; it does not estimate costs."
      },
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe cost management in Azure",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe cost management in Azure – Compare the pricing calculator and the TCO calculator"
    },
    {
      "stem": "A finance team wants to receive an email notification when spending in an Azure subscription reaches 80 percent of a monthly amount that the team sets. What should the team configure?",
      "options": [
        "Enable Microsoft Defender for Cloud on the subscription",
        "Add a cost center tag to every resource",
        "Configure autoscale rules for the virtual machines",
        "Create a budget with an alert at that threshold"
      ],
      "answer": "D",
      "explanation": "Budgets in Microsoft Cost Management let you set a spending amount for a scope such as a subscription or resource group and define alert conditions at percentage thresholds. When actual or forecasted spending reaches a threshold, Azure notifies the configured recipients by email. Budget alerts inform you about spending; they don't stop resources by themselves, although they can trigger automated actions through action groups.",
      "rationales": {
        "A": "Wrong: Defender for Cloud monitors security posture and threats, not spending against a set amount.",
        "B": "Wrong: tags help group and report costs by category, but they cannot send spending notifications.",
        "C": "Wrong: autoscale adjusts the number of VM instances to match demand; it does not alert on spending.",
        "D": "Correct: a budget with an alert condition emails recipients when spending reaches a chosen percentage."
      },
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe cost management in Azure",
      "difficulty": "easy",
      "source": "AZ-900 skills outline: Describe cost management in Azure – Describe the Microsoft Cost Management tool"
    },
    {
      "stem": "A company wants to ensure that new Azure resources can be created only in the West Europe and North Europe regions, and that any attempt to create a resource in another region is denied. What should the company use?",
      "options": [
        "Azure Policy",
        "Azure role-based access control (Azure RBAC)",
        "Microsoft Purview",
        "Resource tags"
      ],
      "answer": "A",
      "explanation": "Azure Policy lets you create, assign, and manage rules that evaluate resource properties against required standards. A policy with a deny effect, such as the built-in Allowed locations definition, blocks the creation of any resource that doesn't comply. Policies can be assigned at management group, subscription, or resource group scope and are inherited by everything below that scope.",
      "rationales": {
        "A": "Correct: Azure Policy, for example the built-in Allowed locations definition, can deny resources created in other regions.",
        "B": "Wrong: Azure RBAC controls who can perform actions, not which regions a permitted user may deploy to.",
        "C": "Wrong: Microsoft Purview provides data governance, risk, and compliance across data estates, not deployment rules.",
        "D": "Wrong: tags are name-value labels for organizing resources and cannot block deployments by themselves."
      },
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe features and tools in Azure for governance and compliance",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe features and tools in Azure for governance and compliance – Describe Azure Policy"
    },
    {
      "stem": "An administrator applies a Delete lock (CanNotDelete) to a resource group. Later, a user who has the Owner role on that resource group tries to delete a storage account inside the group. What happens?",
      "options": [
        "The deletion succeeds because the Owner role overrides resource locks",
        "The deletion succeeds because resource group locks do not apply to its resources",
        "The deletion is blocked until the lock on the resource group is removed",
        "The deletion is queued and runs automatically when the lock expires"
      ],
      "answer": "C",
      "explanation": "Resource locks apply to all users and roles, including Owner, so role-based permissions cannot bypass them. Locks are inherited, meaning a lock on a resource group also protects every resource in that group. A Delete lock allows resources to be read and modified but not deleted. Locks never expire on their own, so to delete the storage account, someone with permission to manage locks must first remove the lock.",
      "rationales": {
        "A": "Wrong: resource locks apply to every user regardless of role, including Owner.",
        "B": "Wrong: locks are inherited, so a lock on a resource group protects all resources inside it.",
        "C": "Correct: the inherited Delete lock blocks the deletion for everyone until the lock is removed.",
        "D": "Wrong: locks have no expiry time; they stay in place until someone explicitly removes them."
      },
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe features and tools in Azure for governance and compliance",
      "difficulty": "hard",
      "source": "AZ-900 skills outline: Describe features and tools in Azure for governance and compliance – Describe resource locks"
    },
    {
      "stem": "A team wants to define its Azure infrastructure in a declarative file kept in source control, so that the same environment can be deployed repeatedly with consistent results. Which Azure feature is designed for this?",
      "options": [
        "Azure Arc",
        "Azure Resource Manager (ARM) templates",
        "Azure Cloud Shell",
        "The Azure portal"
      ],
      "answer": "B",
      "explanation": "ARM templates are JSON files that describe infrastructure as code: you declare the resources and configuration you want, and Azure Resource Manager works out how to deploy them. Because the template is declarative and can be versioned in source control, the same environment can be deployed many times with consistent results. Bicep is a more concise language that compiles to ARM templates and serves the same purpose.",
      "rationales": {
        "A": "Wrong: Azure Arc extends Azure management to servers and services outside Azure; it is not a template format.",
        "B": "Correct: ARM templates declare resources in JSON so deployments are repeatable and can be version-controlled.",
        "C": "Wrong: Cloud Shell is a browser-based shell for running commands; it is a tool, not a declarative definition file.",
        "D": "Wrong: the portal is a graphical interface for manual tasks, which makes repeatable, consistent deployments harder."
      },
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe features and tools for managing and deploying Azure resources",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe features and tools for managing and deploying Azure resources – infrastructure as code and ARM templates"
    },
    {
      "stem": "Which Azure service analyzes your deployed resources and gives personalized recommendations to improve their reliability, security, performance, operational excellence, and cost?",
      "options": [
        "Azure Monitor",
        "Microsoft Defender for Cloud",
        "Azure Arc",
        "Azure Advisor"
      ],
      "answer": "D",
      "explanation": "Azure Advisor evaluates your Azure resources against best practices and makes recommendations in five categories: reliability, security, performance, operational excellence, and cost. The recommendations are tailored to your actual configuration and usage, for example suggesting that you resize an underused virtual machine to save money. Advisor is available in the Azure portal and through APIs.",
      "rationales": {
        "A": "Wrong: Azure Monitor collects, analyzes, and acts on metrics and logs; it is not the best-practice recommendation engine.",
        "B": "Wrong: Defender for Cloud gives security recommendations only, not cost, performance, or reliability advice.",
        "C": "Wrong: Azure Arc brings resources outside Azure under Azure management; it does not generate recommendations.",
        "D": "Correct: Azure Advisor gives personalized best-practice recommendations across these five categories."
      },
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe monitoring tools in Azure",
      "difficulty": "easy",
      "source": "AZ-900 skills outline: Describe monitoring tools in Azure – Describe the purpose of Azure Advisor"
    },
    {
      "stem": "A company wants to be notified when an Azure service incident or planned maintenance in a region could affect the specific resources it uses, rather than checking the global Azure status page. Which Azure service should it use?",
      "options": [
        "Azure Service Health",
        "Microsoft Purview",
        "Azure Arc",
        "Microsoft Defender for Cloud"
      ],
      "answer": "A",
      "explanation": "Azure Service Health gives a personalized view of the health of the Azure services and regions you use. It combines Azure status (the global view), Service Health (incidents, planned maintenance, and advisories that affect your services and regions), and Resource Health (the health of individual resources). You can configure Service Health alerts so that you are notified when an issue or upcoming maintenance could affect your resources.",
      "rationales": {
        "A": "Correct: Service Health tracks incidents and planned maintenance affecting your services and regions and can send alerts.",
        "B": "Wrong: Microsoft Purview governs and protects data; it does not report on the health of Azure services.",
        "C": "Wrong: Azure Arc extends Azure management to non-Azure resources and does not report Azure platform incidents.",
        "D": "Wrong: Defender for Cloud alerts on security threats and posture, not on Azure service outages or maintenance."
      },
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe monitoring tools in Azure",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe monitoring tools in Azure – Describe Azure Service Health"
    }
  ]
}
```
