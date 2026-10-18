```json
{
  "format": "domcq/1",
  "exam": "azure-az900",
  "set": "AZ-900: Microsoft Azure Fundamentals practice – Core skills mixed set",
  "questions": [
    {
      "stem": "A company currently buys servers and networking equipment up front every few years. It plans to move its workloads to Azure and pay monthly only for the resources it uses. Which type of expenditure does the Azure approach represent?",
      "options": [
        "Capital expenditure (CapEx)",
        "Fixed infrastructure expenditure",
        "Operational expenditure (OpEx)",
        "Deferred capital expenditure"
      ],
      "answer": "C",
      "explanation": "Cloud computing follows a consumption-based model: you pay for the resources you use, typically monthly, with no large upfront investment. This is operational expenditure (OpEx), which is spending on services or products as they are consumed and billed. Buying servers up front is capital expenditure (CapEx), a one-time investment in physical infrastructure that is depreciated over time.",
      "topic": "Describe cloud concepts",
      "subtopic": "Describe cloud computing",
      "difficulty": "easy",
      "source": "AZ-900 skills outline: Describe cloud computing – Describe the consumption-based model (CapEx vs OpEx)"
    },
    {
      "stem": "According to the shared responsibility model, which responsibilities always remain with the customer, regardless of whether a workload is deployed as IaaS, PaaS, or SaaS? Choose TWO.",
      "options": [
        "Operating system configuration and updates",
        "Information and data stored in the cloud",
        "Accounts and identities of people and services",
        "Network controls such as firewall rules"
      ],
      "answer": "BC",
      "explanation": "Under the shared responsibility model, the split of duties shifts as you move from IaaS to PaaS to SaaS, but some duties never move to the provider. The customer always owns the information and data stored in the cloud, the devices allowed to connect, and the accounts and identities of its people, services and devices. The operating system and network controls are the customer's responsibility in IaaS but are managed fully or partly by Microsoft in PaaS and SaaS, so they do not always remain with the customer.",
      "topic": "Describe cloud concepts",
      "subtopic": "Describe cloud computing",
      "difficulty": "hard",
      "source": "AZ-900 skills outline: Describe cloud computing – Describe the shared responsibility model"
    },
    {
      "stem": "A web application runs on two virtual machines. To handle a seasonal increase in traffic, an administrator adds three more virtual machines of the same size behind the existing load balancer. Which type of scaling is this?",
      "options": [
        "Scaling up (vertical scaling)",
        "Scaling down (vertical scaling)",
        "Scaling in (horizontal scaling)",
        "Scaling out (horizontal scaling)"
      ],
      "answer": "D",
      "explanation": "Horizontal scaling changes the number of resources: adding instances is scaling out, and removing them is scaling in. Vertical scaling changes the capability of an existing resource, such as giving a virtual machine more CPUs or memory (scaling up) or fewer (scaling down). Adding three VMs of the same size increases the instance count, so it is scaling out.",
      "topic": "Describe cloud concepts",
      "subtopic": "Describe the benefits of using cloud services",
      "difficulty": "easy",
      "source": "AZ-900 skills outline: Describe the benefits of using cloud services – Describe the benefits of high availability and scalability"
    },
    {
      "stem": "A healthcare organization must keep its patient records database in its own datacenter to meet regulatory requirements. It wants to run its public-facing web application in Azure and connect that application securely to the on-premises database. Which cloud model does this describe?",
      "options": [
        "Hybrid cloud",
        "Private cloud",
        "Public cloud",
        "Multi-cloud"
      ],
      "answer": "A",
      "explanation": "A hybrid cloud combines a public cloud with a private, on-premises environment and lets the two work together as an interconnected whole. This allows an organization to keep regulated or sensitive workloads in its own datacenter while using the public cloud for other workloads. Multi-cloud means using more than one public cloud provider, and a purely private or purely public cloud would not combine both environments.",
      "topic": "Describe cloud concepts",
      "subtopic": "Describe cloud computing",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe cloud computing – Define cloud models (public, private, hybrid) and identify use cases for each"
    },
    {
      "stem": "Which of the following scenarios is an example of platform as a service (PaaS)?",
      "options": [
        "Renting virtual machines and installing and patching their operating systems yourself",
        "Deploying custom application code to a managed environment that handles the OS and runtime",
        "Using a subscription-based email and office suite that the provider fully manages",
        "Buying servers and running them in the company's own datacenter"
      ],
      "answer": "B",
      "explanation": "In PaaS, the cloud provider manages the physical infrastructure, operating systems and the runtime or development platform, while the customer deploys and manages its own applications and data. This lets developers focus on building applications rather than maintaining servers. Renting VMs and patching their operating systems is IaaS, a fully managed email and office suite is SaaS, and running your own servers is on-premises hosting.",
      "topic": "Describe cloud concepts",
      "subtopic": "Describe cloud service types",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe cloud service types – Describe PaaS and identify appropriate use cases"
    },
    {
      "stem": "An organization wants its development and production environments to be billed on separate invoices and to have separate access control boundaries. Which Azure construct should it use to separate the two environments?",
      "options": [
        "Resource groups",
        "Management groups",
        "Availability sets",
        "Subscriptions"
      ],
      "answer": "D",
      "explanation": "An Azure subscription is both a billing boundary and an access control boundary. Azure generates separate billing reports and invoices for each subscription, and access-management policies can be applied at the subscription level, so separate subscriptions are a common way to isolate environments such as development and production. Resource groups and management groups help organize resources and apply governance, but they do not produce separate invoices.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe the core architectural components of Azure",
      "difficulty": "easy",
      "source": "AZ-900 skills outline: Describe the core architectural components of Azure – Describe Azure subscriptions"
    },
    {
      "stem": "Which statements about Azure region pairs are correct? Choose TWO.",
      "options": [
        "Every Azure service automatically replicates all customer data to the paired region.",
        "Planned Azure updates are rolled out to paired regions one region at a time.",
        "Paired regions are always located in different geographies from each other.",
        "In an extensive outage, one region from each pair is prioritized for recovery."
      ],
      "answer": "BD",
      "explanation": "Most Azure regions are paired with another region in the same geography, usually at least 300 miles apart, to support disaster recovery. Azure rolls out planned updates to paired regions one at a time to reduce the risk of both being affected, and during a widespread outage it prioritizes restoring one region in every pair. Replication to the paired region is not automatic for every service, so customers must configure it where needed, and pairs are normally within the same geography to help meet data residency requirements.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe the core architectural components of Azure",
      "difficulty": "hard",
      "source": "AZ-900 skills outline: Describe the core architectural components of Azure – Describe Azure regions, region pairs, and sovereign regions"
    },
    {
      "stem": "Which statement about Azure resource groups is correct?",
      "options": [
        "A resource group can be nested inside another resource group.",
        "All resources in a resource group must be in the same Azure region.",
        "A resource can belong to only one resource group at a time.",
        "Deleting a resource group leaves its resources running in the subscription."
      ],
      "answer": "C",
      "explanation": "A resource group is a logical container for Azure resources, and each resource can be in only one resource group at a time, although many resources can be moved between groups. Resource groups cannot be nested, and deleting a resource group deletes every resource inside it. Resources in the same group can be located in different regions, so grouping is typically based on lifecycle or management needs rather than location.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe the core architectural components of Azure",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe the core architectural components of Azure – Describe Azure resources and resource groups"
    },
    {
      "stem": "A company needs to run a group of identical, load-balanced virtual machines. The number of virtual machines must increase or decrease automatically in response to demand or a defined schedule. Which Azure compute option should the company use?",
      "options": [
        "Azure Virtual Machine Scale Sets",
        "Azure virtual machine availability sets",
        "Azure Virtual Desktop",
        "Azure Container Instances"
      ],
      "answer": "A",
      "explanation": "Virtual Machine Scale Sets let you create and manage a group of identical, load-balanced VMs and automatically increase or decrease the number of instances in response to demand or a schedule. Availability sets improve resilience by spreading VMs across fault and update domains, but they do not add or remove VMs automatically. Azure Virtual Desktop delivers desktops and apps to users, and Container Instances run containers rather than managing groups of VMs.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure compute and networking services",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe Azure compute and networking services – Describe virtual machine options, including VM Scale Sets and availability sets"
    },
    {
      "stem": "A company needs to connect its on-premises network to Azure by using a private connection, provided through a connectivity provider, that does not travel over the public internet. Which Azure service meets this requirement?",
      "options": [
        "Azure VPN Gateway with a site-to-site VPN",
        "Azure ExpressRoute",
        "Azure Virtual Network peering",
        "Azure DNS private zones"
      ],
      "answer": "B",
      "explanation": "ExpressRoute extends an on-premises network into the Microsoft cloud over a private connection facilitated by a connectivity provider, so traffic does not traverse the public internet. A site-to-site VPN through VPN Gateway is encrypted but still sends traffic over the public internet. Virtual network peering connects Azure virtual networks to each other, and Azure DNS resolves names rather than providing connectivity.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure compute and networking services",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe Azure compute and networking services – Describe ExpressRoute and VPN Gateway"
    },
    {
      "stem": "A company stores critical blob data in Azure Storage. The data must remain available for reads and writes if one availability zone in the primary region becomes unavailable, and a copy must also be kept in a secondary region in case the entire primary region is lost. Which redundancy option meets both requirements?",
      "options": [
        "Locally redundant storage (LRS)",
        "Zone-redundant storage (ZRS)",
        "Geo-redundant storage (GRS)",
        "Geo-zone-redundant storage (GZRS)"
      ],
      "answer": "D",
      "explanation": "GZRS combines zone redundancy in the primary region with geo-replication: data is copied synchronously across three availability zones in the primary region and then asynchronously to a single location in the secondary region. ZRS protects against a zone outage but keeps no copy in another region. GRS replicates to a secondary region but uses LRS in the primary region, keeping all three primary copies in one physical location, so losing that location can make the primary unavailable until a failover.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure storage services",
      "difficulty": "hard",
      "source": "AZ-900 skills outline: Describe Azure storage services – Describe storage redundancy options"
    },
    {
      "stem": "An organization wants Microsoft Entra ID to require multifactor authentication when users sign in from an unfamiliar location and to block sign-ins from devices that are not compliant, while allowing normal sign-ins from trusted locations. Which feature should it use?",
      "options": [
        "Azure role-based access control (Azure RBAC)",
        "Microsoft Entra Domain Services",
        "Microsoft Entra Conditional Access",
        "Azure Policy"
      ],
      "answer": "C",
      "explanation": "Conditional Access uses signals such as the user's identity, location and device to decide whether to allow access, require additional verification such as MFA, or block the sign-in. This lets organizations apply stronger controls only when risk is higher, such as from unfamiliar locations, without burdening users in normal situations. Azure RBAC controls what an authenticated identity can do with Azure resources, and Azure Policy governs resource configurations, so neither evaluates sign-in conditions.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure identity, access, and security",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe Azure identity, access, and security – Describe Microsoft Entra Conditional Access"
    },
    {
      "stem": "Which of the following are guiding principles of the Zero Trust security model? Choose TWO.",
      "options": [
        "Verify explicitly by using all available data points",
        "Trust devices because they are on the corporate network",
        "Assume breach and minimize the potential blast radius",
        "Give administrators permanent standing access rights"
      ],
      "answer": "AC",
      "explanation": "Zero Trust assumes that no request is trustworthy simply because of where it comes from. Its three guiding principles are verify explicitly (authenticate and authorize based on all available data points), use least privilege access (limit access with just-in-time and just-enough access), and assume breach (segment access and minimize the blast radius). Trusting the corporate network by default reflects the older perimeter-based model, and permanent standing administrator access contradicts least privilege.",
      "topic": "Describe Azure architecture and services",
      "subtopic": "Describe Azure identity, access, and security",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe Azure identity, access, and security – Describe the concept of Zero Trust"
    },
    {
      "stem": "A company wants to compare the cost of running its existing on-premises servers, storage, and networking with the estimated cost of running the same infrastructure in Azure. Which tool is designed for this comparison?",
      "options": [
        "Azure pricing calculator",
        "Total Cost of Ownership (TCO) calculator",
        "Azure Advisor",
        "Microsoft Cost Management"
      ],
      "answer": "B",
      "explanation": "The TCO calculator compares the cost of on-premises infrastructure with the cost of running equivalent infrastructure in Azure. You enter details of current servers, databases, storage and networking, plus assumptions such as power and IT labor costs, and it produces a side-by-side comparison. The pricing calculator, by contrast, estimates the cost of Azure services you plan to deploy without comparing them to an on-premises environment.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe cost management in Azure",
      "difficulty": "easy",
      "source": "AZ-900 skills outline: Describe cost management in Azure – Compare the pricing calculator and the Total Cost of Ownership (TCO) calculator"
    },
    {
      "stem": "A company wants to label each Azure resource with the department that owns it, such as Department = Finance, so that it can group and report costs by department. Which Azure feature should it use?",
      "options": [
        "Resource tags",
        "Resource locks",
        "Management groups",
        "Azure Monitor alerts"
      ],
      "answer": "A",
      "explanation": "Tags are name-value pairs that you apply to resources, resource groups or subscriptions to add metadata such as owner, department, environment or cost center. Cost data in Microsoft Cost Management can then be filtered and grouped by tag, which supports chargeback and showback reporting. Resource locks prevent changes or deletion, and management groups organize subscriptions rather than labeling individual resources.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe cost management in Azure",
      "difficulty": "easy",
      "source": "AZ-900 skills outline: Describe cost management in Azure – Describe the purpose of tags"
    },
    {
      "stem": "A company wants to ensure that new Azure resources can be created only in two approved regions. Any attempt to deploy a resource to another region must be denied, and existing resources must be evaluated for compliance. Which Azure service should the company use?",
      "options": [
        "Azure role-based access control (Azure RBAC)",
        "Resource locks",
        "Microsoft Purview",
        "Azure Policy"
      ],
      "answer": "D",
      "explanation": "Azure Policy lets you create, assign and manage rules that enforce standards on resource configurations, such as a policy that restricts allowed locations. Policies evaluate existing resources and flag noncompliant ones, and an assignment with the Deny effect blocks noncompliant resources from being created. Azure RBAC controls who can perform actions rather than which configurations are allowed, and resource locks protect specific resources from deletion or modification.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe features and tools in Azure for governance and compliance",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe features and tools in Azure for governance and compliance – Describe Azure Policy"
    },
    {
      "stem": "An administrator applies a ReadOnly lock to a resource group. A user who holds the Owner role on the subscription then tries to delete a virtual machine in that resource group. What happens?",
      "options": [
        "The deletion succeeds, because the Owner role overrides resource locks.",
        "The deletion fails until a user with sufficient permissions removes the lock.",
        "The deletion succeeds, because locks are not inherited by resources in a group.",
        "The deletion fails at first, but succeeds if the user confirms it a second time."
      ],
      "answer": "B",
      "explanation": "Resource locks apply to all users and roles, including Owners, so broad permissions do not let a user delete or change a locked resource. Locks are inherited by child resources, so a lock on a resource group protects every resource inside it. To delete the virtual machine, a user with permission to manage locks must first remove the lock, which adds a deliberate extra step that prevents accidental changes.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe features and tools in Azure for governance and compliance",
      "difficulty": "hard",
      "source": "AZ-900 skills outline: Describe features and tools in Azure for governance and compliance – Describe the purpose of resource locks"
    },
    {
      "stem": "A company runs servers in its own datacenter and in another cloud provider. It wants to manage and govern those servers from Azure, applying Azure Policy to them and viewing them alongside its Azure resources. Which Azure service enables this?",
      "options": [
        "Azure Resource Manager templates",
        "Azure Cloud Shell",
        "Azure portal dashboards",
        "Azure Arc"
      ],
      "answer": "D",
      "explanation": "Azure Arc extends Azure Resource Manager management to resources outside Azure, including on-premises servers, servers in other clouds, Kubernetes clusters and some data services. Once connected, these resources appear in Azure and can be governed with tools such as Azure Policy, tags and role-based access control, alongside native Azure resources. ARM templates deploy Azure resources as code, and Cloud Shell is a browser-based command-line environment, so neither brings external servers under Azure management.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe features and tools for managing and deploying Azure resources",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe features and tools for managing and deploying Azure resources – Describe Azure Arc"
    },
    {
      "stem": "A company wants to receive alerts when an Azure service incident or planned maintenance event affects the specific services and regions that its subscriptions use. Which Azure tool provides this personalized view?",
      "options": [
        "Azure status page",
        "Microsoft Defender for Cloud",
        "Azure Service Health",
        "Azure Monitor Log Analytics"
      ],
      "answer": "C",
      "explanation": "Azure Service Health provides a personalized view of the health of the Azure services and regions you use, including active incidents, planned maintenance and health advisories, and it can send alerts when your resources may be affected. The Azure status page shows a broad, global view of Azure service health rather than one tailored to your subscriptions. Log Analytics is for querying collected log data, and Defender for Cloud focuses on security posture rather than Azure service incidents.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe monitoring tools in Azure",
      "difficulty": "medium",
      "source": "AZ-900 skills outline: Describe monitoring tools in Azure – Describe Azure Service Health"
    },
    {
      "stem": "Which Azure service evaluates your deployed resources and provides personalized recommendations to improve their reliability, security, performance, operational excellence, and cost?",
      "options": [
        "Azure Advisor",
        "Azure Monitor",
        "Microsoft Defender for Cloud",
        "Azure Policy"
      ],
      "answer": "A",
      "explanation": "Azure Advisor analyzes your resource configuration and usage telemetry and recommends actions in five categories: reliability, security, performance, operational excellence and cost. For example, it can identify underused virtual machines that could be resized or shut down to save money. Azure Monitor collects and analyzes metrics and logs, and Defender for Cloud focuses specifically on security posture and threat protection.",
      "topic": "Describe Azure management and governance",
      "subtopic": "Describe monitoring tools in Azure",
      "difficulty": "easy",
      "source": "AZ-900 skills outline: Describe monitoring tools in Azure – Describe the purpose of Azure Advisor"
    }
  ]
}
```
