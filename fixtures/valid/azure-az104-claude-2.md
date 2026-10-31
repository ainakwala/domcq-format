```json
{
  "format": "domcq/1",
  "exam": "azure-az104",
  "set": "AZ-104: Microsoft Azure Administrator practice – Core administration mixed set",
  "questions": [
    {
      "stem": "A developer must be able to create, modify and delete all resources in a resource group, but must not be able to grant other users access to that resource group. Which Azure built-in role should you assign to the developer at the resource group scope?",
      "options": [
        "Owner",
        "Contributor",
        "Reader",
        "User Access Administrator"
      ],
      "answer": "B",
      "explanation": "Contributor grants full management of resources but excludes the Microsoft.Authorization actions needed to assign roles, so the holder cannot grant access to others. Owner adds the right to manage access, User Access Administrator manages access without managing resources, and Reader can only view. Choosing the role with the least privilege that meets the need is a core Azure RBAC principle.",
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage access to Azure resources",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Manage access to Azure resources – Azure RBAC built-in roles"
    },
    {
      "stem": "Your organization wants Microsoft Entra security groups whose membership is updated automatically based on user attributes such as department. What is the minimum Microsoft Entra ID license required for users who are members of these dynamic membership groups?",
      "options": [
        "Microsoft Entra ID Free",
        "Microsoft Entra ID P2",
        "Microsoft Entra ID P1",
        "Microsoft Entra Workload ID Premium"
      ],
      "answer": "C",
      "explanation": "Dynamic membership rules for groups are a premium feature that requires Microsoft Entra ID P1 (P2 also includes it, but P1 is the minimum). The Free tier supports only assigned membership. Workload ID Premium licenses workload identities such as service principals, not user group features.",
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage Microsoft Entra users and groups",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Manage Microsoft Entra users and groups – dynamic membership groups and licensing"
    },
    {
      "stem": "A team must be able to change configuration settings on a production storage account. You must ensure that nobody, including subscription owners, can accidentally delete the storage account, while still allowing those configuration changes. What should you do?",
      "options": [
        "Assign the Reader role to the team on the storage account",
        "Assign the Storage Account Contributor role to the team at the subscription scope",
        "Apply a ReadOnly lock to the storage account",
        "Apply a CanNotDelete lock to the storage account"
      ],
      "answer": "D",
      "explanation": "A CanNotDelete (Delete) lock lets authorized users read and modify a resource but blocks deletion for everyone, regardless of their RBAC role, until the lock is removed. A ReadOnly lock would also block configuration changes. Role assignments alone cannot stop an owner or contributor from deleting the resource.",
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage Azure subscriptions and governance",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Manage Azure subscriptions and governance – configure resource locks"
    },
    {
      "stem": "You are designing a management group hierarchy for a company with many Azure subscriptions. Which two statements about management groups are true? Choose TWO.",
      "options": [
        "A management group tree supports up to six levels of depth, not counting the root level or the subscription level.",
        "A single subscription can belong to several management groups at the same time.",
        "Azure RBAC role assignments made at a management group are inherited by the subscriptions beneath it.",
        "Azure Policy assignments cannot be made at the management group scope."
      ],
      "answer": "AC",
      "explanation": "Management groups can be nested up to six levels below the root, and each management group or subscription has exactly one parent, so a subscription cannot sit in two groups at once. Both Azure RBAC role assignments and Azure Policy assignments can be made at a management group and flow down by inheritance to all child management groups, subscriptions and resources. This is what makes management groups useful for applying governance at scale.",
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage Azure subscriptions and governance",
      "difficulty": "hard",
      "source": "AZ-104 skills outline: Manage Azure subscriptions and governance – configure management groups"
    },
    {
      "stem": "A consultant from a partner company needs access to an application in your Microsoft Entra tenant. The consultant must sign in with the credentials from their own organization, and you must not manage a password for them. What should you do?",
      "options": [
        "Invite the consultant as a guest user by using B2B collaboration",
        "Create a new member user account for the consultant in your tenant",
        "Create a service principal for the consultant in your tenant",
        "Install Microsoft Entra Connect to synchronize the partner directory"
      ],
      "answer": "A",
      "explanation": "Microsoft Entra B2B collaboration lets you invite external users as guests who authenticate with their home organization's identity, so your organization never stores or resets their password. A member account would require you to manage credentials, and a service principal represents an application rather than a person. Microsoft Entra Connect synchronizes your own on-premises directory, not a partner's.",
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage Microsoft Entra users and groups",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Manage Microsoft Entra users and groups – manage external users"
    },
    {
      "stem": "An external application must be able to read a single blob for the next 24 hours. You must not reveal the storage account keys, and access must expire automatically. What should you provide to the application?",
      "options": [
        "One of the storage account access keys",
        "The storage account connection string",
        "Anonymous public read access on the container",
        "A shared access signature (SAS) for the blob"
      ],
      "answer": "D",
      "explanation": "A shared access signature is a signed URI token that grants specific permissions on specific resources for a defined time window, after which it stops working. Access keys and connection strings give full, non-expiring control of the whole account. Anonymous public access would expose the blob to anyone, with no expiry.",
      "topic": "Implement and manage storage",
      "subtopic": "Configure access to storage",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Configure access to storage – create and use shared access signature (SAS) tokens"
    },
    {
      "stem": "A storage account holds reporting data. The data must remain available if the entire primary region becomes unavailable, and a reporting application must be able to read the data from the secondary region at any time, even while the primary region is healthy. Which redundancy option should you configure?",
      "options": [
        "Zone-redundant storage (ZRS)",
        "Read-access geo-redundant storage (RA-GRS)",
        "Geo-redundant storage (GRS)",
        "Locally redundant storage (LRS)"
      ],
      "answer": "B",
      "explanation": "RA-GRS replicates data asynchronously to a paired secondary region and also exposes a read-only secondary endpoint that can be used at any time. Plain GRS replicates to the secondary region but the data there is readable only after a failover. LRS and ZRS keep all copies within one region, so they do not survive a regional outage.",
      "topic": "Implement and manage storage",
      "subtopic": "Configure and manage storage accounts",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Configure and manage storage accounts – configure Azure Storage redundancy"
    },
    {
      "stem": "You must automatically move block blobs that have not been modified for 90 days to the Cool tier and delete blobs that have not been modified for 365 days. The solution must require the least administrative effort. What should you configure?",
      "options": [
        "A lifecycle management policy on the storage account",
        "An Azure Automation runbook that runs on a daily schedule",
        "An Azure Policy assignment that uses the Modify effect",
        "The default access tier of the storage account set to Cool"
      ],
      "answer": "A",
      "explanation": "Blob lifecycle management lets you define rules based on conditions such as days since last modification, with actions such as tierToCool and delete, and Azure runs them for you. A runbook could do the same but needs custom code and upkeep. Azure Policy governs resource configuration, not individual blobs, and changing the default tier affects only blobs with no explicitly set tier and does not delete anything.",
      "topic": "Implement and manage storage",
      "subtopic": "Configure Azure Files and Azure Blob Storage",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Configure Azure Files and Azure Blob Storage – configure blob lifecycle management"
    },
    {
      "stem": "Users in your on-premises Active Directory Domain Services (AD DS) domain, whose accounts are synchronized to Microsoft Entra ID, must access an Azure file share over SMB by using their existing domain credentials. Which two actions should you perform? Choose TWO.",
      "options": [
        "Generate a shared access signature (SAS) token for each user",
        "Enable AD DS authentication for Azure Files on the storage account",
        "Enable anonymous public access on the storage account",
        "Configure share-level permissions by using Azure RBAC roles such as Storage File Data SMB Share Contributor"
      ],
      "answer": "BD",
      "explanation": "Identity-based access to Azure Files with on-premises AD DS requires enabling AD DS authentication, which registers the storage account as an identity in the domain. Users then need share-level permissions, granted through Azure RBAC roles such as Storage File Data SMB Share Contributor, before NTFS permissions are evaluated. SAS tokens are not used for SMB access, and anonymous access does not apply to file shares.",
      "topic": "Implement and manage storage",
      "subtopic": "Configure access to storage",
      "difficulty": "hard",
      "source": "AZ-104 skills outline: Configure access to storage – configure identity-based access for Azure Files"
    },
    {
      "stem": "You are deploying three virtual machines that run a web application. The application must remain available if an entire datacenter in the Azure region fails, and all virtual machines must stay in the same region. What should you use?",
      "options": [
        "An availability set",
        "A proximity placement group",
        "Availability zones",
        "A dedicated host group"
      ],
      "answer": "C",
      "explanation": "Availability zones are physically separate locations within a region, each with independent power, cooling and networking, so spreading VMs across zones protects against the loss of one datacenter. An availability set spreads VMs across fault and update domains, which protects against rack and maintenance failures but not a whole-datacenter outage. Proximity placement groups and dedicated hosts control placement for latency or isolation, not resilience.",
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Create and configure virtual machines",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Create and configure virtual machines – deploy VMs to availability zones and availability sets"
    },
    {
      "stem": "You have a Bicep file named main.bicep and an existing resource group named RG1. Which Azure CLI command should you run to deploy the resources defined in main.bicep to RG1?",
      "options": [
        "az deployment group create --resource-group RG1 --template-file main.bicep",
        "az group create --name RG1 --template-file main.bicep",
        "az deployment sub create --location eastus --template-file main.bicep",
        "az bicep build --file main.bicep --resource-group RG1"
      ],
      "answer": "A",
      "explanation": "The az deployment group create command deploys a template or Bicep file at resource group scope, and the CLI compiles Bicep automatically. az group create only creates a resource group, az deployment sub create targets subscription scope, and az bicep build simply converts Bicep to ARM JSON without deploying anything. The deployment scope must match the scope the file targets.",
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Automate deployment of resources by using Azure Resource Manager (ARM) templates or Bicep files",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Automate deployment by using ARM templates or Bicep files – deploy resources by using a Bicep file"
    },
    {
      "stem": "You redeploy an ARM template to a resource group. After the deployment, any resources in the resource group that are not defined in the template must be removed automatically. Which deployment mode should you use?",
      "options": [
        "Incremental",
        "Complete",
        "Validate only",
        "What-if"
      ],
      "answer": "B",
      "explanation": "In Complete mode, Resource Manager deletes resources that exist in the resource group but are not specified in the template. Incremental mode, the default, leaves such resources unchanged and only adds or updates what the template defines. Validation and what-if operations preview or check a deployment but make no changes.",
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Automate deployment of resources by using Azure Resource Manager (ARM) templates or Bicep files",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Automate deployment by using ARM templates or Bicep files – ARM deployment modes"
    },
    {
      "stem": "You plan to host a web app in Azure App Service and use deployment slots to stage new releases before swapping them into production. What is the lowest App Service plan pricing tier that supports deployment slots?",
      "options": [
        "Free",
        "Shared",
        "Basic",
        "Standard"
      ],
      "answer": "D",
      "explanation": "Deployment slots are available in the Standard, Premium and Isolated tiers of App Service plans, so Standard is the lowest tier that supports them. Free, Shared and Basic plans do not offer slots, so you would need to scale up the plan before adding a staging slot. Slots let you warm up a release and swap it into production with minimal downtime.",
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Create and configure Azure App Service",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Create and configure Azure App Service – configure deployment slots"
    },
    {
      "stem": "You plan to run a web container and a logging sidecar container together in a single Azure Container Instances container group. Which two statements about container groups are true? Choose TWO.",
      "options": [
        "Containers in the same group share an IP address and a port namespace.",
        "A single container group can span multiple Azure regions for resilience.",
        "Each container in the group must be assigned its own public IP address.",
        "Multi-container groups are supported only for Linux containers."
      ],
      "answer": "AD",
      "explanation": "A container group is a collection of containers scheduled on the same host that share a lifecycle, local network, IP address and port namespace, so the containers reach each other on localhost and must use different ports. Because a group runs on one host, it cannot span regions. Azure Container Instances supports multi-container groups only for Linux containers; Windows container groups hold a single container.",
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Provision and manage containers in the Azure portal",
      "difficulty": "hard",
      "source": "AZ-104 skills outline: Provision and manage containers in the Azure portal – Azure Container Instances container groups"
    },
    {
      "stem": "A network security group (NSG) associated with a subnet has two custom inbound rules. Rule priority 100 denies TCP port 3389 from any source. Rule priority 200 allows TCP port 3389 from source IP address 10.0.0.5. What happens to an RDP connection attempt from 10.0.0.5 to a virtual machine in the subnet?",
      "options": [
        "It is allowed, because the rule with the more specific source wins",
        "It is allowed, because allow rules always override deny rules",
        "It is denied, because the rule with priority 100 is processed first",
        "It is denied, because the default rules block all inbound traffic first"
      ],
      "answer": "C",
      "explanation": "NSG rules are evaluated in priority order, lowest number first, and processing stops at the first rule that matches the traffic. The priority 100 deny rule matches all RDP traffic, so the priority 200 allow rule is never reached. Default rules have priorities of 65000 and above, so they are evaluated only after all custom rules.",
      "topic": "Implement and manage virtual networking",
      "subtopic": "Configure secure access to virtual networks",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Configure secure access to virtual networks – create and configure NSGs, evaluate effective security rules"
    },
    {
      "stem": "VNet1 is peered with VNet2, and VNet2 is peered with VNet3. Virtual machines in VNet1 cannot communicate with virtual machines in VNet3. You must enable this communication without deploying any network virtual appliance or gateway. What should you do?",
      "options": [
        "Enable the Allow forwarded traffic setting on the VNet1 to VNet2 peering",
        "Add a service endpoint for Microsoft.Network to VNet3",
        "Link a private DNS zone to all three virtual networks",
        "Create a virtual network peering between VNet1 and VNet3"
      ],
      "answer": "D",
      "explanation": "Virtual network peering is not transitive, so traffic does not flow from VNet1 to VNet3 through VNet2 automatically. Without an appliance or gateway in VNet2 to route traffic, the solution is a direct peering between VNet1 and VNet3. Allow forwarded traffic only matters when something in the middle actually forwards packets, and DNS or service endpoints do not create network connectivity.",
      "topic": "Implement and manage virtual networking",
      "subtopic": "Configure and manage virtual networks in Azure",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Configure and manage virtual networks in Azure – create and configure virtual network peering"
    },
    {
      "stem": "You link a virtual network named VNet1 to Azure private DNS zones so that virtual machines can resolve private names. Which two statements are true? Choose TWO.",
      "options": [
        "A private DNS zone must be created in the same Azure region as every virtual network linked to it.",
        "VNet1 can be linked to many private DNS zones, but autoregistration can be enabled on only one of those links.",
        "With autoregistration enabled, DNS records are created automatically for virtual machines deployed in VNet1.",
        "Records in a private DNS zone can be resolved by clients on the public internet."
      ],
      "answer": "BC",
      "explanation": "A virtual network can have links to many private DNS zones for resolution, but only one of those links can have autoregistration enabled. With autoregistration on, Azure creates and removes A records for the virtual machines in the linked virtual network as they are deployed and deleted. Private DNS zones are global resources that can be linked to virtual networks in any region, and they are resolvable only from linked virtual networks, not from the internet.",
      "topic": "Implement and manage virtual networking",
      "subtopic": "Configure name resolution and load balancing",
      "difficulty": "hard",
      "source": "AZ-104 skills outline: Configure name resolution and load balancing – configure Azure private DNS zones"
    },
    {
      "stem": "You need to distribute incoming TCP traffic on port 1433 across several virtual machines in a single Azure region. Routing decisions are needed only at the transport layer (layer 4). Which Azure service should you use?",
      "options": [
        "Azure Load Balancer",
        "Azure Application Gateway",
        "Azure Front Door",
        "Azure Traffic Manager"
      ],
      "answer": "A",
      "explanation": "Azure Load Balancer operates at layer 4 and distributes TCP and UDP flows across backend instances in a region using health probes and load-balancing rules. Application Gateway is a regional layer 7 HTTP and HTTPS load balancer, and Front Door is a global layer 7 service for web traffic. Traffic Manager works through DNS rather than handling the traffic itself.",
      "topic": "Implement and manage virtual networking",
      "subtopic": "Configure name resolution and load balancing",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Configure name resolution and load balancing – configure an internal or public load balancer"
    },
    {
      "stem": "You create an Azure Monitor metric alert rule that fires when a virtual machine's average CPU exceeds 80 percent. When the alert fires, the operations team must receive an email and an SMS message. What should you create and attach to the alert rule to define these notifications?",
      "options": [
        "A Log Analytics workspace",
        "A diagnostic setting",
        "An action group",
        "A data collection rule"
      ],
      "answer": "C",
      "explanation": "An action group is a reusable collection of notification and action settings, such as email, SMS, voice, webhooks or runbooks, that alert rules call when they fire. A Log Analytics workspace stores log data, diagnostic settings route platform logs and metrics to destinations, and data collection rules define what the Azure Monitor Agent collects. None of those send notifications on their own.",
      "topic": "Monitor and maintain Azure resources",
      "subtopic": "Monitor resources in Azure",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Monitor resources in Azure – set up alert rules, action groups and alert processing rules"
    },
    {
      "stem": "You have one Azure subscription with five virtual machines in two resource groups. Three virtual machines run in the East US region and two run in the West Europe region. You must protect all five virtual machines by using Azure Backup with Recovery Services vaults. What is the minimum number of Recovery Services vaults you need?",
      "options": [
        "1",
        "2",
        "3",
        "5"
      ],
      "answer": "B",
      "explanation": "For Azure VM backup, the Recovery Services vault must be in the same region as the virtual machines it protects. Resource group membership does not matter, so one vault in East US can protect all three VMs there and one vault in West Europe can protect the other two. That makes two vaults the minimum.",
      "topic": "Monitor and maintain Azure resources",
      "subtopic": "Implement backup and recovery",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Implement backup and recovery – create a Recovery Services vault and back up a virtual machine"
    }
  ]
}
```
