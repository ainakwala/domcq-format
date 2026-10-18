```json
{
  "format": "domcq/1",
  "exam": "azure-az900",
  "set": "AZ-900: Microsoft Azure Fundamentals practice – Core skills mixed set",
  "questions": [
    {
      "stem": "A company stops buying its own servers every few years and instead pays a monthly bill for the Azure resources it actually uses. Which term describes this kind of spending?",
      "options": [
        "Capital expenditure (CapEx)",
        "Operational expenditure (OpEx)",
        "Reserved capacity commitment",
        "Fixed-asset depreciation"
      ],
      "answer": "B",
      "explanation": "Paying for cloud services as you consume them is operational expenditure: an ongoing cost for services or products, charged in the period it is incurred. Capital expenditure is up-front spending on physical infrastructure such as servers, whose value is depreciated over time. The cloud's consumption-based model shifts IT spending from CapEx to OpEx, so there is no up-front infrastructure cost and you stop paying when you stop using resources.",
      "topic": "Describe cloud concepts",
      "subtopic": "Describe cloud computing",
      "difficulty": "easy",
      "source": "Microsoft Learn AZ-900: Describe cloud computing – Describe the consumption-based model (CapEx vs OpEx)"
    },
    {
      "stem": "An online retailer configures its web tier so that additional virtual machine instances are added automatically during holiday traffic peaks and removed when traffic returns to normal. Which type of scaling does this describe?",
      "options": [
        "Vertical scaling",
        "Geo-replication",
        "Disaster recovery failover",
        "Horizontal scaling"
      ],
      "answer": "D",
      "explanation": "Horizontal scaling (scaling out and in) changes the number of instances running a workload, which is exactly what happens when VMs are added at peak times and removed afterwards. Vertical scaling (scaling up and down) instead changes the capacity of an existing resource, such as giving a VM more CPU or memory. Because the cloud can scale automatically to match demand, you pay for extra capacity only while it is needed.",
      "topic": "Describe cloud concepts",
      "subtopic": "Describe the benefits of using cloud services",
      "difficulty": "medium",
      "source": "Microsoft Learn AZ-900: Describe the benefits of using cloud services – Describe scalability in the cloud"
    },
    {
      "stem": "A bank must keep its customer account database in its own datacenter to meet regulatory requirements, but it wants to run its public website and seasonal analytics workloads in Azure, with the two environments connected so they can work together. Which cloud model does this describe?",
      "options": [
        "Hybrid cloud",
        "Private cloud",
        "Public cloud",
        "Multi-cloud"
      ],
      "answer": "A",
      "explanation": "A hybrid cloud combines a private cloud, such as an organization's own datacenter, with a public cloud such as Azure, connected so workloads can interoperate. It suits organizations that must keep some data on-premises for compliance while using public cloud capacity for other workloads. Multi-cloud means using more than one public cloud provider, and a purely private or purely public model would not include both environments.",
      "topic": "Describe cloud concepts",
      "subtopic": "Describe cloud computing",
      "difficulty": "medium",
      "source": "Microsoft Learn AZ-900: Describe cloud computing – Define cloud models (public, private, hybrid, multi-cloud)"
    },
    {
      "stem": "A company deploys a web application to Azure App Service, a platform as a service (PaaS) offering. Under the shared responsibility model, which TWO responsibilities remain with the company? Choose TWO.",
      "options": [
        "Applying security updates to the operating system of the underlying servers",
        "Protecting and classifying the data that the application stores",
        "Managing the user accounts and identities that can access the application",
        "Maintaining the physical network inside the Azure datacenters"
      ],
      "answer": "BC",
      "explanation": "Whatever the service type, the customer always remains responsible for its information and data, the devices that connect to the service, and its accounts and identities. With PaaS, Microsoft manages the operating system, and the physical hosts, network and datacenter are always Microsoft's responsibility. Moving from IaaS toward SaaS shifts more work to the provider, but data and identities never transfer to it.",
      "topic": "Describe cloud concepts",
      "subtopic": "Describe cloud computing",
      "difficulty": "hard",
      "source": "Microsoft Learn AZ-900: Describe cloud computing – Describe the shared responsibility model"
    },
    {
      "stem": "A company subscribes to a hosted email and office productivity suite that employees use through a web browser. The provider manages the application, its updates and all of the underlying infrastructure. Which cloud service type is this?",
      "options": [
        "Infrastructure as a service (IaaS)",
        "Platform as a service (PaaS)",
        "Software as a service (SaaS)",
        "Function as a service (FaaS)"
      ],
      "answer": "C",
      "explanation": "With software as a service, the customer uses a complete, ready-made application while the provider manages the application, the platform and the infrastructure beneath it. Email, calendaring and office tools such as Microsoft 365 are classic SaaS examples. The customer is still responsible for its data, devices and user accounts, but SaaS carries the least management overhead of the three service types.",
      "topic": "Describe cloud concepts",
      "subtopic": "Describe cloud service types",
      "difficulty": "easy",
      "source": "Microsoft Learn AZ-900: Describe cloud service types – Describe software as a service"
    },
    {
      "stem": "Which Azure feature consists of physically separate locations within a single Azure region, each made up of one or more datacenters with independent power, cooling and networking?",
      "options": [
        "Region pairs",
        "Resource groups",
        "Sovereign regions",
        "Availability zones"
      ],
      "answer": "D",
      "explanation": "Availability zones are physically separate datacenter locations within one Azure region, each with independent power, cooling and networking, joined by high-speed, low-latency connections. If one zone goes down, resources deployed in the other zones keep running, so spreading a workload across zones protects it from a datacenter-level failure. Region pairs, by contrast, relate two different regions to each other.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe the core architectural components of Azure",
      "difficulty": "easy",
      "source": "Microsoft Learn AZ-900: Describe the core architectural components of Azure – Describe Azure regions, availability zones, and region pairs"
    },
    {
      "stem": "Which TWO statements about Azure region pairs are correct? Choose TWO.",
      "options": [
        "Planned Azure platform updates are rolled out to one region of a pair at a time",
        "Every Azure region is paired with another region in a different geography",
        "In a broad outage, restoring one region from each pair is prioritized",
        "Data in a region is automatically copied to its paired region by every service"
      ],
      "answer": "AC",
      "explanation": "Most Azure regions are paired with another region in the same geography, typically at least 300 miles apart. Microsoft rolls out planned updates to one region of a pair at a time and, in an extensive outage, prioritizes restoring one region from every pair, which helps applications replicated across a pair stay available. Not every region has a pair, and data is copied to the paired region only when a service or option, such as geo-redundant storage, is configured to do so.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe the core architectural components of Azure",
      "difficulty": "hard",
      "source": "Microsoft Learn AZ-900: Describe the core architectural components of Azure – Describe Azure regions, availability zones, and region pairs"
    },
    {
      "stem": "Which statement about Azure resource groups is true?",
      "options": [
        "A resource can belong to several resource groups at the same time",
        "Every resource must belong to exactly one resource group",
        "Resource groups can be nested inside other resource groups",
        "Deleting a resource group leaves its resources in place"
      ],
      "answer": "B",
      "explanation": "A resource group is a logical container, and every Azure resource must be placed in exactly one resource group at a time, although it can be moved to another group later. Resource groups cannot be nested. Because the group governs the lifecycle of its contents, deleting a resource group deletes every resource in it, and settings such as RBAC permissions applied to the group are inherited by its resources.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe the core architectural components of Azure",
      "difficulty": "medium",
      "source": "Microsoft Learn AZ-900: Describe the core architectural components of Azure – Describe Azure management infrastructure (resource groups)"
    },
    {
      "stem": "A team wants to run a single containerized application in Azure without managing virtual machines or configuring a container orchestration platform. Which Azure service is the simplest fit?",
      "options": [
        "Azure Container Instances",
        "Azure Kubernetes Service",
        "Azure Virtual Machine Scale Sets",
        "Azure Virtual Desktop"
      ],
      "answer": "A",
      "explanation": "Azure Container Instances is a platform as a service offering that lets you upload and run a container directly, without provisioning or managing any virtual machines. Azure Kubernetes Service is an orchestration service for managing many containers at scale, which adds complexity a single container does not need. Scale sets run groups of VMs that you manage yourself, and Azure Virtual Desktop delivers desktops and apps rather than hosting containers.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure compute and networking services",
      "difficulty": "medium",
      "source": "Microsoft Learn AZ-900: Describe Azure compute and networking services – Describe Azure container services"
    },
    {
      "stem": "A company needs a private connection between its on-premises network and Azure that does not travel over the public internet and offers more consistent latency than an internet connection. Which Azure service should it use?",
      "options": [
        "Azure VPN Gateway",
        "Azure DNS",
        "Azure ExpressRoute",
        "Virtual network peering"
      ],
      "answer": "C",
      "explanation": "ExpressRoute extends an on-premises network into the Microsoft cloud over a private connection supplied by a connectivity provider, so traffic does not cross the public internet. This gives more reliability, faster speeds, more consistent latency and higher security than internet-based links. A VPN gateway also connects on-premises networks to Azure, but it sends encrypted traffic over the public internet, and virtual network peering connects Azure virtual networks to each other.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure compute and networking services",
      "difficulty": "medium",
      "source": "Microsoft Learn AZ-900: Describe Azure compute and networking services – Describe Azure ExpressRoute"
    },
    {
      "stem": "A company needs an Azure Storage redundancy option that keeps data available for reads and writes if a single datacenter in the primary region fails, and that also maintains a copy of the data in a secondary region in case the entire primary region becomes unavailable. Which option meets both requirements?",
      "options": [
        "Locally redundant storage (LRS)",
        "Zone-redundant storage (ZRS)",
        "Geo-redundant storage (GRS)",
        "Geo-zone-redundant storage (GZRS)"
      ],
      "answer": "D",
      "explanation": "GZRS copies data synchronously across three availability zones in the primary region, so losing one datacenter or zone does not interrupt reads and writes, and it also replicates data asynchronously to a secondary region. GRS also copies data to a secondary region, but within the primary region it uses LRS, keeping all three copies in a single datacenter, so a datacenter failure leaves the data unavailable until a failover. ZRS survives a zone failure but keeps no copy outside the primary region, and LRS protects only against drive and server failures.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure storage services",
      "difficulty": "hard",
      "source": "Microsoft Learn AZ-900: Describe Azure storage services – Describe Azure storage redundancy"
    },
    {
      "stem": "An administrator wants Microsoft Entra ID to require multifactor authentication only when users sign in from outside the corporate network or from an unfamiliar device. Which feature should be used?",
      "options": [
        "Azure role-based access control",
        "Conditional Access",
        "Microsoft Entra Domain Services",
        "Self-service password reset"
      ],
      "answer": "B",
      "explanation": "Conditional Access is a Microsoft Entra ID feature that evaluates identity-driven signals, such as who the user is, where they are signing in from and which device they use, and then allows access, requires MFA or blocks the attempt. This lets organizations demand extra verification only when the risk is higher instead of at every sign-in. Role-based access control governs what an authenticated user can do with Azure resources, not how they must sign in.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure identity, access, and security",
      "difficulty": "medium",
      "source": "Microsoft Learn AZ-900: Describe Azure identity, access, and security – Describe Azure Conditional Access"
    },
    {
      "stem": "A company wants employees to sign in to their Windows devices and Microsoft Entra ID resources using a biometric gesture or a PIN tied to the device, instead of typing a password. Which feature meets this requirement?",
      "options": [
        "Windows Hello for Business",
        "Microsoft Entra Connect",
        "Self-service password reset",
        "Microsoft Entra B2B collaboration"
      ],
      "answer": "A",
      "explanation": "Windows Hello for Business replaces passwords with strong two-factor authentication on the user's own PC: a credential bound to the device combined with a biometric gesture or PIN. It is one of the passwordless methods Microsoft Entra ID supports, alongside the Microsoft Authenticator app and FIDO2 security keys. Passwordless sign-in is more convenient for users and removes the password as a target for phishing and reuse.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure identity, access, and security",
      "difficulty": "medium",
      "source": "Microsoft Learn AZ-900: Describe Azure identity, access, and security – Describe Azure authentication methods (passwordless)"
    },
    {
      "stem": "Before deploying anything, a team wants to estimate the monthly cost of a planned solution made up of several virtual machines, managed disks and a SQL database. Which tool should it use?",
      "options": [
        "Azure Advisor",
        "Microsoft Cost Management",
        "Azure pricing calculator",
        "Azure Monitor"
      ],
      "answer": "C",
      "explanation": "The Azure pricing calculator estimates the cost of services you plan to provision: you select services, choose options such as region, tier and expected usage, and it produces an estimated price. Microsoft Cost Management analyzes and reports on spending for resources that are already deployed, and Azure Advisor makes recommendations about existing resources. Because nothing has been deployed yet, the pricing calculator is the right tool.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe cost management in Azure",
      "difficulty": "easy",
      "source": "Microsoft Learn AZ-900: Describe cost management in Azure – Compare the pricing and TCO calculators"
    },
    {
      "stem": "Which TWO of the following factors affect how much an organization pays for its Azure resources? Choose TWO.",
      "options": [
        "Outbound data transfer from Azure datacenters (egress)",
        "The number of resource groups in the subscription",
        "Inbound data transfer into Azure datacenters (ingress)",
        "The Azure region where the resources are deployed"
      ],
      "answer": "AD",
      "explanation": "Azure prices vary by region because operating costs differ by location, so the same resource can cost more in one region than in another. Bandwidth also matters: most inbound data transfer into Azure datacenters is free, while outbound data transfer is charged according to volume and zone. Resource groups are free logical containers and add no cost themselves.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe cost management in Azure",
      "difficulty": "medium",
      "source": "Microsoft Learn AZ-900: Describe cost management in Azure – Describe factors that can affect costs in Azure"
    },
    {
      "stem": "A company wants to ensure that new Azure resources can be created only in two approved regions, and that any attempt to create a resource in another region is denied. Which service should it use?",
      "options": [
        "Resource tags",
        "Azure Policy",
        "Azure role-based access control",
        "Microsoft Purview"
      ],
      "answer": "B",
      "explanation": "Azure Policy lets you create and assign rules that evaluate resource properties, such as location, SKU or required tags, and it can deny non-compliant deployments and flag existing resources that are out of compliance. The built-in Allowed locations policy definition restricts the regions where resources can be created. Role-based access control decides who can perform actions, not which properties a resource may have, and tags only add metadata.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe features and tools in Azure for governance and compliance",
      "difficulty": "easy",
      "source": "Microsoft Learn AZ-900: Describe features and tools in Azure for governance and compliance – Describe the purpose of Azure Policy"
    },
    {
      "stem": "An administrator wants users with the right permissions to keep modifying the resources in a production resource group, but to prevent anyone from accidentally deleting those resources. What should the administrator apply to the resource group?",
      "options": [
        "A ReadOnly resource lock",
        "A tag named Protected",
        "A Reader role assignment for all users",
        "A Delete resource lock"
      ],
      "answer": "D",
      "explanation": "A Delete lock (CanNotDelete) lets authorized users read and modify a resource but blocks its deletion, and a lock applied to a resource group is inherited by every resource in the group. A ReadOnly lock would also block modifications, and assigning the Reader role would remove users' ability to make changes. Locks apply regardless of RBAC permissions, so even an Owner must remove the lock before deleting the resource.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe features and tools in Azure for governance and compliance",
      "difficulty": "medium",
      "source": "Microsoft Learn AZ-900: Describe features and tools in Azure for governance and compliance – Describe the purpose of resource locks"
    },
    {
      "stem": "A company runs servers in its own datacenter and Kubernetes clusters in another public cloud. It wants to manage and govern them from Azure with the same tools, such as Azure Policy and role-based access control, that it uses for its Azure resources. Which service enables this?",
      "options": [
        "Azure Arc",
        "Azure Migrate",
        "Azure Cloud Shell",
        "Azure Resource Manager templates"
      ],
      "answer": "A",
      "explanation": "Azure Arc extends Azure management and governance to resources outside Azure, including on-premises servers, Kubernetes clusters and resources in other clouds, by projecting them into Azure Resource Manager. Once connected, they can be organized, tagged, governed with Azure Policy and secured with RBAC alongside native Azure resources. Azure Migrate, by contrast, helps move workloads into Azure rather than manage them where they already run.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe features and tools for managing and deploying Azure resources",
      "difficulty": "medium",
      "source": "Microsoft Learn AZ-900: Describe features and tools for managing and deploying Azure resources – Describe the purpose of Azure Arc"
    },
    {
      "stem": "An administrator wants a personalized view of Azure service incidents and planned maintenance that affect the specific services and regions the organization uses, with the option to receive alerts about them. Which tool provides this?",
      "options": [
        "Azure Advisor",
        "Log Analytics",
        "Azure Service Health",
        "Microsoft Defender for Cloud"
      ],
      "answer": "C",
      "explanation": "Azure Service Health brings together three views: Azure status, a global view of Azure's health; Service health, a personalized view of incidents, planned maintenance and advisories for the services and regions you use; and Resource health, the health of your individual resources. You can configure alerts so you are notified when an issue affects you. Azure Advisor gives best-practice recommendations rather than reporting outages.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe monitoring tools in Azure",
      "difficulty": "easy",
      "source": "Microsoft Learn AZ-900: Describe monitoring tools in Azure – Describe Azure Service Health"
    },
    {
      "stem": "Azure Advisor groups its recommendations into categories. Which TWO of the following are Azure Advisor recommendation categories? Choose TWO.",
      "options": [
        "Compliance",
        "Operational excellence",
        "Identity",
        "Cost"
      ],
      "answer": "BD",
      "explanation": "Azure Advisor analyzes your deployed resources and gives personalized recommendations in five categories: Reliability, Security, Performance, Operational Excellence and Cost. Cost recommendations help reduce spending, for example by resizing or shutting down underused VMs, while Operational Excellence recommendations improve process efficiency and deployment best practices. Assessment against regulatory compliance standards is done by Microsoft Defender for Cloud, and identity is not an Advisor category.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe monitoring tools in Azure",
      "difficulty": "hard",
      "source": "Microsoft Learn AZ-900: Describe monitoring tools in Azure – Describe the purpose of Azure Advisor"
    }
  ]
}
```
