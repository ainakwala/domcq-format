```json
{
  "format": "domcq/1",
  "exam": "azure-az900",
  "set": "AZ-900: Microsoft Azure Fundamentals practice – Full-syllabus mix",
  "questions": [
    {
      "stem": "Under the shared responsibility model, which responsibility always remains with the customer, whether a workload is deployed as infrastructure as a service (IaaS), platform as a service (PaaS) or software as a service (SaaS)?",
      "options": [
        "Maintaining the physical network devices",
        "Patching the server operating system",
        "Protecting the data and information it stores",
        "Securing the physical datacenter hosts"
      ],
      "answer": "C",
      "explanation": "In the shared responsibility model, the split of duties shifts with the service type: Microsoft takes on more as you move from IaaS to PaaS to SaaS. Some responsibilities, however, are always kept by the customer in every cloud model: the information and data stored, the devices allowed to connect, and the accounts and identities used. Physical hosts, networks and datacenters are always Microsoft's responsibility in the cloud, while operating system patching moves to Microsoft in PaaS and SaaS.",
      "topic": "Describe cloud concepts",
      "subtopic": "Describe cloud computing",
      "difficulty": "easy",
      "source": "AZ-900 skills outline > Describe cloud computing > Describe the shared responsibility model"
    },
    {
      "stem": "A company currently buys its servers up front and depreciates them over several years. After moving its workloads to Azure, it pays each month only for the resources it actually consumes. How is this cloud spending classified?",
      "options": [
        "Operational expenditure (OpEx)",
        "Capital expenditure (CapEx)",
        "Fixed asset investment",
        "Long-term equipment lease"
      ],
      "answer": "A",
      "explanation": "Cloud computing uses a consumption-based model, so spending is operational expenditure (OpEx): you pay for services or resources as you use them, and the cost is accounted for in the period in which it is incurred. Capital expenditure (CapEx) is the up-front purchase of physical infrastructure such as servers, whose value is depreciated over time. Moving to Azure shifts IT spending from CapEx toward OpEx and removes the need to buy capacity in advance.",
      "topic": "Describe cloud concepts",
      "subtopic": "Describe cloud computing",
      "difficulty": "easy",
      "source": "AZ-900 skills outline > Describe cloud computing > Describe the consumption-based model"
    },
    {
      "stem": "A web application runs on two virtual machines. To handle a seasonal increase in demand, the operations team adds three more virtual machines of the same size and distributes traffic across all five. Which type of scaling is this?",
      "options": [
        "Scaling up (vertical scaling)",
        "Scaling down (vertical scaling)",
        "Scaling in (horizontal scaling)",
        "Scaling out (horizontal scaling)"
      ],
      "answer": "D",
      "explanation": "Horizontal scaling changes the number of resources: adding more virtual machines or instances is scaling out, and removing them is scaling in. Vertical scaling changes the capability of an existing resource, such as giving a virtual machine more CPUs or memory (scaling up) or fewer (scaling down). Because the team added more machines of the same size instead of making the existing ones larger, this is scaling out.",
      "topic": "Describe cloud concepts",
      "subtopic": "Describe the benefits of using cloud services",
      "difficulty": "medium",
      "source": "AZ-900 skills outline > Describe the benefits of using cloud services > Describe the benefits of high availability and scalability in the cloud"
    },
    {
      "stem": "Microsoft describes cloud manageability as including both management of the cloud and management in the cloud. Which TWO are examples of management of the cloud? Choose TWO.",
      "options": [
        "Configuring a resource by using the Azure portal",
        "Automatically scaling resource deployment based on demand",
        "Deploying resources based on a preconfigured template",
        "Managing resources by calling a REST API"
      ],
      "answer": "BC",
      "explanation": "Management of the cloud means managing the cloud resources themselves: automatically scaling deployments based on need, deploying resources from preconfigured templates instead of configuring them by hand, monitoring resource health and replacing failing resources automatically, and receiving automatic alerts based on configured metrics. Management in the cloud describes how you carry out that management: through a web portal, a command-line interface, APIs or PowerShell. Using the Azure portal and calling a REST API are therefore examples of management in the cloud.",
      "topic": "Describe cloud concepts",
      "subtopic": "Describe the benefits of using cloud services",
      "difficulty": "hard",
      "source": "AZ-900 skills outline > Describe the benefits of using cloud services > Describe the benefits of manageability in the cloud"
    },
    {
      "stem": "A development team wants to deploy its own web application code to Azure without having to manage virtual machines, operating system updates or the web server runtime. Which cloud service type best fits this requirement?",
      "options": [
        "Infrastructure as a service (IaaS)",
        "Platform as a service (PaaS)",
        "Software as a service (SaaS)",
        "Self-managed on-premises hosting"
      ],
      "answer": "B",
      "explanation": "PaaS provides a managed environment for building, deploying and running applications: the cloud provider manages the physical infrastructure, operating systems and middleware such as the web server runtime, while the customer manages the application and its data. IaaS would leave the team managing the virtual machines and their operating systems, and SaaS delivers a finished application from the provider, so the team could not deploy its own code. Azure App Service is a common example of PaaS.",
      "topic": "Describe cloud concepts",
      "subtopic": "Describe cloud service types",
      "difficulty": "easy",
      "source": "AZ-900 skills outline > Describe cloud service types > Describe platform as a service (PaaS); Identify appropriate use cases for each cloud service type"
    },
    {
      "stem": "Which list shows the Azure resource organization hierarchy in order from the broadest scope to the narrowest?",
      "options": [
        "Subscriptions, management groups, resource groups, resources",
        "Management groups, resource groups, subscriptions, resources",
        "Resource groups, management groups, subscriptions, resources",
        "Management groups, subscriptions, resource groups, resources"
      ],
      "answer": "D",
      "explanation": "Azure organizes resources in four levels. Resources such as virtual machines or databases are placed in resource groups, resource groups belong to a subscription, and subscriptions can be grouped into management groups, which can themselves be nested. Settings such as policies and role assignments applied at a higher level are inherited by everything beneath it, which is why this order matters for governance.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe the core architectural components of Azure",
      "difficulty": "easy",
      "source": "AZ-900 skills outline > Describe the core architectural components of Azure > Describe the hierarchy of resource groups, subscriptions, and management groups"
    },
    {
      "stem": "Which TWO statements about Azure region pairs are correct? Choose TWO.",
      "options": [
        "Planned Azure updates are rolled out to the regions in a pair one region at a time.",
        "Every Azure region is paired with a region in a different geography.",
        "During a broad outage, recovery of one region in each pair is prioritized.",
        "Both regions in a pair are located in the same datacenter to keep latency low."
      ],
      "answer": "AC",
      "explanation": "Most Azure regions are paired with another region in the same geography, typically at least 300 miles away, so that a single large-scale disaster is unlikely to affect both. Microsoft rolls out planned updates to paired regions one region at a time to reduce the risk of an outage hitting both, and if an extensive outage occurs, one region from every pair is prioritized for recovery. Paired regions are deliberately far apart rather than co-located, and pairing normally stays within one geography (Brazil South is a notable exception) so that data residency is preserved.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe the core architectural components of Azure",
      "difficulty": "hard",
      "source": "AZ-900 skills outline > Describe the core architectural components of Azure > Describe Azure regions, region pairs, and sovereign regions"
    },
    {
      "stem": "A company wants to connect its on-premises datacenter to Azure through a private connection, facilitated by a connectivity provider, so that the traffic does not travel over the public internet. Which Azure service should it use?",
      "options": [
        "Azure VPN Gateway with a site-to-site VPN",
        "Azure virtual network peering",
        "Azure ExpressRoute",
        "Azure DNS"
      ],
      "answer": "C",
      "explanation": "Azure ExpressRoute extends an on-premises network into the Microsoft cloud over a private connection supplied by a connectivity provider, so the traffic never crosses the public internet; this can give more reliability, faster speeds and more consistent latency than internet-based connections. A site-to-site VPN through Azure VPN Gateway also connects on-premises networks to Azure, but it sends encrypted traffic over the public internet. Virtual network peering connects Azure virtual networks to each other, not to on-premises sites.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure compute and networking services",
      "difficulty": "medium",
      "source": "AZ-900 skills outline > Describe Azure compute and networking services > Describe virtual networking, including Azure VPN Gateway and ExpressRoute"
    },
    {
      "stem": "A developer needs to run a short piece of code each time a message arrives in a queue. The company wants to pay only for the time the code runs and does not want to manage any servers. Which Azure service best meets these requirements?",
      "options": [
        "Azure Functions",
        "Azure Virtual Machines",
        "Azure Virtual Machine Scale Sets",
        "Azure Virtual Desktop"
      ],
      "answer": "A",
      "explanation": "Azure Functions is an event-driven, serverless compute option: code runs in response to a trigger such as a queue message, an HTTP request or a timer, and Azure scales the underlying infrastructure automatically. On the consumption plan you are charged only for the compute time used while the function runs. Virtual machines and scale sets are IaaS options that you configure and pay for while they are running, and Azure Virtual Desktop delivers desktops and apps to users rather than running event-triggered code.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure compute and networking services",
      "difficulty": "easy",
      "source": "AZ-900 skills outline > Describe Azure compute and networking services > Compare compute types, including containers, virtual machines, and functions"
    },
    {
      "stem": "A company must keep scanned legal documents in Azure Blob Storage for seven years. The documents will almost never be read, the company wants the lowest possible storage cost, and it can wait several hours for a document to be retrieved when one is needed. Which access tier should it use?",
      "options": [
        "Hot",
        "Cool",
        "Cold",
        "Archive"
      ],
      "answer": "D",
      "explanation": "The Archive tier has the lowest storage cost and is designed for rarely accessed data that can tolerate retrieval latency of several hours, with data expected to stay for at least 180 days. Archived blobs are offline and must be rehydrated to an online tier before they can be read. Hot, Cool and Cold are online tiers with progressively lower storage costs and higher access costs, but because they keep data immediately available, they cost more to store than Archive for long-term records like these.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure storage services",
      "difficulty": "medium",
      "source": "AZ-900 skills outline > Describe Azure storage services > Describe storage tiers"
    },
    {
      "stem": "A company needs the data in an Azure storage account to be copied synchronously across three availability zones in the primary region and also copied to a secondary region hundreds of miles away for protection against a regional disaster. Which redundancy option meets both requirements?",
      "options": [
        "Geo-redundant storage (GRS)",
        "Geo-zone-redundant storage (GZRS)",
        "Locally redundant storage (LRS)",
        "Zone-redundant storage (ZRS)"
      ],
      "answer": "B",
      "explanation": "GZRS combines zone-redundant storage in the primary region, where data is copied synchronously across three availability zones, with asynchronous replication to a secondary region. GRS also replicates to a secondary region, but in the primary region it uses LRS, copying the data three times within a single physical location rather than across zones. ZRS spreads data across zones but has no secondary region, and LRS keeps all three copies in a single datacenter.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure storage services",
      "difficulty": "hard",
      "source": "AZ-900 skills outline > Describe Azure storage services > Describe redundancy options"
    },
    {
      "stem": "A company wants users to complete multifactor authentication when they sign in from an unfamiliar location, but not when they sign in from the corporate network. Which feature should it use?",
      "options": [
        "Microsoft Entra Conditional Access",
        "Azure role-based access control (RBAC)",
        "Microsoft Entra Domain Services",
        "Azure Policy"
      ],
      "answer": "A",
      "explanation": "Conditional Access is a Microsoft Entra ID tool that uses identity signals, such as who the user is, where they are signing in from and which device they use, to decide whether to allow access, require extra verification such as multifactor authentication, or block access. This lets an organization challenge risky sign-ins, such as those from an unexpected location, without adding friction to trusted ones. Azure RBAC controls which actions an identity can perform on Azure resources, and Azure Policy evaluates resource configurations; neither decides how a user must authenticate.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure identity, access, and security",
      "difficulty": "medium",
      "source": "AZ-900 skills outline > Describe Azure identity, access, and security > Describe Microsoft Entra Conditional Access"
    },
    {
      "stem": "Which THREE are guiding principles of the Zero Trust security model? Choose THREE.",
      "options": [
        "Verify explicitly",
        "Use least privilege access",
        "Trust the corporate network",
        "Assume breach"
      ],
      "answer": "ABD",
      "explanation": "Zero Trust assumes that no request should be trusted just because of where it comes from. Its guiding principles are verify explicitly (always authenticate and authorize using all available data points), use least privilege access (limit access with just-in-time and just-enough access), and assume breach (minimize the blast radius, segment access and use analytics to detect threats). Automatically trusting traffic from inside the corporate network is the traditional perimeter-based approach that Zero Trust replaces.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure identity, access, and security",
      "difficulty": "medium",
      "source": "AZ-900 skills outline > Describe Azure identity, access, and security > Describe the concept of Zero Trust"
    },
    {
      "stem": "A company plans to deploy two virtual machines and a storage account in Azure and wants to estimate the expected monthly cost of these resources before creating anything. Which tool should it use?",
      "options": [
        "Microsoft Cost Management",
        "Azure Advisor",
        "Azure pricing calculator",
        "Total Cost of Ownership (TCO) calculator"
      ],
      "answer": "C",
      "explanation": "The Azure pricing calculator lets you pick the Azure services you plan to use, configure options such as region, size and tier, and see an estimated cost before anything is deployed. The TCO calculator is for comparing the cost of on-premises infrastructure with the cost of running equivalent workloads in Azure. Microsoft Cost Management analyzes, budgets and alerts on spending for resources that already exist, and Azure Advisor makes recommendations about deployed resources.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe cost management in Azure",
      "difficulty": "easy",
      "source": "AZ-900 skills outline > Describe cost management in Azure > Compare the pricing calculator and the Total Cost of Ownership (TCO) calculator"
    },
    {
      "stem": "Which TWO factors can affect the cost of running a resource in Azure? Choose TWO.",
      "options": [
        "The Azure region where the resource is deployed",
        "The number of resource groups in the subscription",
        "The number of tags applied to the resource",
        "The type and size of the resource that is deployed"
      ],
      "answer": "AD",
      "explanation": "Azure costs depend on factors such as the resource type and its settings (for example, a virtual machine's size), how much is consumed, the region or geography where it runs, network traffic such as outbound data transfer, the subscription type and any Azure Marketplace purchases. The same service can cost different amounts in different regions because of local differences in power, labor and taxes. Resource groups and tags are free organizational tools; tags help you report on and allocate costs, but adding them does not change what a resource costs.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe cost management in Azure",
      "difficulty": "medium",
      "source": "AZ-900 skills outline > Describe cost management in Azure > Describe factors that can affect costs in Azure"
    },
    {
      "stem": "An administrator wants to make sure a production storage account cannot be accidentally deleted, while still allowing authorized users to change its configuration. What should the administrator apply to the storage account?",
      "options": [
        "A Read-only resource lock",
        "A Delete resource lock",
        "A Reader role assignment for all users",
        "An Environment tag set to Production"
      ],
      "answer": "B",
      "explanation": "Resource locks protect resources from accidental changes regardless of the role-based permissions a user holds. A Delete lock lets authorized users read and modify a resource but blocks deletion until the lock is removed, which matches the requirement. A Read-only lock would also block configuration changes, a Reader role assignment does not stop people who hold other roles from deleting the account, and a tag is only metadata that enforces nothing.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe features and tools in Azure for governance and compliance",
      "difficulty": "medium",
      "source": "AZ-900 skills outline > Describe features and tools in Azure for governance and compliance > Describe the purpose of resource locks"
    },
    {
      "stem": "Which TWO statements about Azure Policy are correct? Choose TWO.",
      "options": [
        "Azure Policy determines which users can perform actions on a resource.",
        "Azure Policy can identify existing resources that do not comply with a policy.",
        "Azure Policy evaluates only resources created after a policy is assigned.",
        "Azure Policy definitions can be grouped together into initiatives."
      ],
      "answer": "BD",
      "explanation": "Azure Policy creates, assigns and manages rules that resource configurations must follow, and it evaluates both new and existing resources, so it can report which ones are noncompliant and, for some policies, remediate them. Related policy definitions can be grouped into an initiative, which is assigned as a single unit to track compliance toward a larger goal. Deciding which users can perform which actions is the job of Azure role-based access control (RBAC); Azure Policy focuses on the properties of resources regardless of who creates them.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe features and tools in Azure for governance and compliance",
      "difficulty": "hard",
      "source": "AZ-900 skills outline > Describe features and tools in Azure for governance and compliance > Describe the purpose of Azure Policy"
    },
    {
      "stem": "A company runs Windows and Linux servers in its own datacenter and with another public cloud provider. It wants to manage these servers from the Azure portal and apply Azure management features such as tags and Azure Policy to them, without migrating them to Azure. Which service should it use?",
      "options": [
        "Azure Migrate",
        "Azure Cloud Shell",
        "Azure Virtual Desktop",
        "Azure Arc"
      ],
      "answer": "D",
      "explanation": "Azure Arc extends Azure Resource Manager to resources outside Azure, including servers, Kubernetes clusters and some data services running on-premises or in other clouds. Once connected, those resources appear in Azure and can be organized and governed with the same tools used for native Azure resources, such as tags, Azure Policy and role-based access control. Azure Migrate is for assessing and moving workloads into Azure, which the company does not want to do.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe features and tools for managing and deploying Azure resources",
      "difficulty": "medium",
      "source": "AZ-900 skills outline > Describe features and tools for managing and deploying Azure resources > Describe the purpose of Azure Arc"
    },
    {
      "stem": "An operations team needs to deploy the same set of virtual networks, virtual machines and storage accounts to development, test and production environments with identical configuration every time. They want to describe the desired end state of the resources in a declarative file rather than run a sequence of commands. Which should they use?",
      "options": [
        "Azure Cloud Shell",
        "Azure Monitor alerts",
        "Azure Resource Manager (ARM) templates",
        "Azure Advisor recommendations"
      ],
      "answer": "C",
      "explanation": "ARM templates are a form of infrastructure as code: a JSON file declares which resources should exist and how they are configured, and Azure Resource Manager works out how to deploy them, creating dependent resources in the correct order and deploying in parallel where possible. Because the same template can be deployed again and again, every environment is built consistently, and the file can be kept in source control alongside application code. Cloud Shell is a browser-based shell for running Azure CLI or Azure PowerShell commands, which is an imperative approach unless it is used to deploy a template.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe features and tools for managing and deploying Azure resources",
      "difficulty": "medium",
      "source": "AZ-900 skills outline > Describe features and tools for managing and deploying Azure resources > Describe infrastructure as code (IaC); Describe ARM and ARM templates"
    },
    {
      "stem": "A company wants to receive personalized alerts when an Azure service outage or planned maintenance event affects the specific Azure services and regions it uses. Which Azure tool provides this?",
      "options": [
        "Azure Service Health",
        "Azure Advisor",
        "Azure Monitor Application Insights",
        "Microsoft Defender for Cloud"
      ],
      "answer": "A",
      "explanation": "Azure Service Health gives a personalized view of the health of the Azure services and regions you use, combining Azure status, Service Health and Resource Health. It reports service issues, planned maintenance and health advisories, and you can configure alerts so you are notified when an event affects your resources. Azure Advisor gives best-practice recommendations, Application Insights monitors the performance of your own applications, and Defender for Cloud focuses on security posture and threat protection.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe monitoring tools in Azure",
      "difficulty": "medium",
      "source": "AZ-900 skills outline > Describe monitoring tools in Azure > Describe Azure Service Health"
    }
  ]
}
```
