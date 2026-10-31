```json
{
  "format": "domcq/1",
  "exam": "azure-az104",
  "set": "AZ-104: Microsoft Azure Administrator practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A developer needs to create, modify and delete any resource in the resource group RG1. The developer must not be able to grant other users access to RG1. You want to follow the principle of least privilege by using a single built-in Azure role. Which role should you assign at the RG1 scope?",
      "options": [
        "Owner",
        "Reader",
        "User Access Administrator",
        "Contributor"
      ],
      "answer": "D",
      "explanation": "Contributor grants full management of all resources but excludes the Microsoft.Authorization write and delete actions, so its holder cannot create or remove role assignments. Owner adds the right to manage access, which the requirement forbids. User Access Administrator can manage access but cannot manage the resources, and Reader can only view them.",
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage access to Azure resources",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Manage access to Azure resources – Azure built-in roles (Owner, Contributor, Reader, User Access Administrator)"
    },
    {
      "stem": "You plan to create a Microsoft Entra security group whose membership is updated automatically based on the department attribute of each user. Your tenant currently has no paid Microsoft Entra licenses. Which license must you obtain for the users who will be members of the group?",
      "options": [
        "Microsoft Entra ID P1",
        "Microsoft Entra ID Free",
        "Microsoft 365 Apps for business",
        "Office 365 E1"
      ],
      "answer": "A",
      "explanation": "Groups with dynamic membership rules are a premium feature of Microsoft Entra ID and require a Microsoft Entra ID P1 license (or a plan that includes it, such as P2) for each user who is a member of a dynamic group. The Free tier supports only assigned membership. Microsoft 365 Apps for business and Office 365 E1 do not include Entra ID P1.",
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage Microsoft Entra users and groups",
      "difficulty": "medium",
      "source": "Microsoft Learn: Dynamic membership rules for groups in Microsoft Entra ID – license requirements"
    },
    {
      "stem": "Your company requires that no new storage account can be created in a subscription if it allows anonymous public blob access. Requests that would create such an account must be rejected at deployment time. You plan to use Azure Policy. Which policy effect should the policy definition use?",
      "options": [
        "Audit",
        "Append",
        "Deny",
        "AuditIfNotExists"
      ],
      "answer": "C",
      "explanation": "The Deny effect evaluates a create or update request before it is processed by the resource provider and fails the request if the resource would be noncompliant. Audit and AuditIfNotExists only record noncompliance in the compliance results and let the deployment succeed. Append adds fields to a request rather than blocking it.",
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage Azure subscriptions and governance",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Implement and manage Azure Policy – Azure Policy definition structure, effects"
    },
    {
      "stem": "You apply a ReadOnly resource lock to a storage account named storage1. Users have the Contributor role on storage1. Which operation will the lock prevent?",
      "options": [
        "Uploading blobs to storage1 by using an existing SAS token",
        "Listing the access keys of storage1",
        "Viewing the properties of storage1 in the Azure portal",
        "Downloading blobs from storage1 by using Microsoft Entra ID authentication"
      ],
      "answer": "B",
      "explanation": "Resource locks apply only to control plane (Azure Resource Manager) operations. Listing storage account keys is performed by a POST request, which a ReadOnly lock blocks, so users cannot retrieve the keys. Data plane operations such as uploading or downloading blobs are not affected by the lock, and reading resource properties is a GET request that remains allowed.",
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage Azure subscriptions and governance",
      "difficulty": "hard",
      "source": "Microsoft Learn: Lock your resources to protect your infrastructure – considerations before applying locks"
    },
    {
      "stem": "Each resource group in your subscription has a CostCenter tag. Finance requires that every new resource created in a resource group automatically receives the same CostCenter tag value as its resource group. What should you do?",
      "options": [
        "Assign an Azure Policy that inherits the tag from the resource group",
        "Assign the Tag Contributor role to users at the resource group scope",
        "Apply a CanNotDelete lock to each resource group that holds the tag",
        "Add the tag to the subscription so that it flows down to all resources"
      ],
      "answer": "A",
      "explanation": "Tags are not inherited by default: a tag on a subscription or resource group is not applied to the resources inside it. The built-in policy that inherits a tag from the resource group uses the Modify effect to add or replace the tag on resources as they are created or updated. Role assignments and locks control who can change things, not which tags resources receive.",
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage Azure subscriptions and governance",
      "difficulty": "medium",
      "source": "Microsoft Learn: Use tags to organize your Azure resources – inherit tags; Assign policy definitions for tag compliance"
    },
    {
      "stem": "You are creating a storage account for an application. The data must be replicated to a secondary Azure region, and the application must be able to read data from the secondary region at any time without waiting for a failover. Which redundancy option meets the requirement?",
      "options": [
        "Locally redundant storage (LRS)",
        "Read-access geo-redundant storage (RA-GRS)",
        "Zone-redundant storage (ZRS)",
        "Geo-redundant storage (GRS)"
      ],
      "answer": "B",
      "explanation": "GRS copies data asynchronously to a paired secondary region, but the secondary copy can be read only after a failover. RA-GRS adds a read-only secondary endpoint so applications can read the replicated data at all times. LRS and ZRS keep all copies in the primary region only.",
      "topic": "Implement and manage storage",
      "subtopic": "Configure and manage storage accounts",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Configure storage redundancy – Microsoft Learn: Azure Storage redundancy"
    },
    {
      "stem": "An external partner needs read access to a single blob container for 30 days. You must be able to revoke the partner's access before it expires without regenerating the storage account keys and without affecting any other shared access signatures. What should you give the partner?",
      "options": [
        "An account SAS signed with the storage account key",
        "An ad hoc service SAS scoped to the container",
        "A service SAS that references a stored access policy",
        "A connection string that contains the account key"
      ],
      "answer": "C",
      "explanation": "A service SAS that references a stored access policy takes its expiry and permissions from the policy defined on the container. Deleting or changing that policy immediately invalidates every SAS linked to it, without touching the account keys. An ad hoc SAS or account SAS can be revoked only by regenerating the key that signed it, which breaks every other SAS signed with that key.",
      "topic": "Implement and manage storage",
      "subtopic": "Configure access to storage",
      "difficulty": "medium",
      "source": "Microsoft Learn: Create a stored access policy; Grant limited access to Azure Storage resources using shared access signatures"
    },
    {
      "stem": "You are configuring lifecycle management for a general-purpose v2 storage account. Which TWO actions can a lifecycle management rule perform on block blobs? Choose TWO.",
      "options": [
        "Move blobs to the Archive access tier",
        "Copy blobs to a storage account in another region",
        "Delete blobs a set number of days after they were modified",
        "Change the account replication setting from LRS to GRS"
      ],
      "answer": "AC",
      "explanation": "Lifecycle management rules act on blobs, base versions, previous versions and snapshots, and their actions are tiering (to Cool, Cold or Archive) and deletion, triggered by conditions such as days since modification or creation. Copying blobs to another account is done by object replication or tools such as AzCopy, and changing account redundancy is an account setting, not a lifecycle action.",
      "topic": "Implement and manage storage",
      "subtopic": "Configure Azure Files and Azure Blob Storage",
      "difficulty": "medium",
      "source": "Microsoft Learn: Optimize costs by automatically managing the data lifecycle (Azure Blob Storage lifecycle management)"
    },
    {
      "stem": "You plan to configure object replication so that block blobs in a container in storage account A are copied asynchronously to a container in storage account B. Both are general-purpose v2 accounts without a hierarchical namespace. Which TWO settings must be enabled before you can create the replication policy? Choose TWO.",
      "options": [
        "Blob versioning on both storage accounts",
        "Change feed on the source storage account",
        "Hierarchical namespace on the destination storage account",
        "Static website hosting on the source storage account"
      ],
      "answer": "AB",
      "explanation": "Object replication relies on blob versioning, which must be enabled on both the source and destination accounts, and on the change feed, which must be enabled on the source account so the service can detect changes to replicate. Object replication is not supported for accounts with a hierarchical namespace enabled, and static website hosting plays no part in it.",
      "topic": "Implement and manage storage",
      "subtopic": "Configure Azure Files and Azure Blob Storage",
      "difficulty": "hard",
      "source": "Microsoft Learn: Object replication for block blobs – prerequisites and caveats"
    },
    {
      "stem": "You are deploying two virtual machines that run a business-critical web application in a region that supports zones. The deployment must keep the application running if an entire datacenter in the region fails. Which deployment option should you use?",
      "options": [
        "An availability set",
        "A proximity placement group",
        "Azure Dedicated Host",
        "Availability zones"
      ],
      "answer": "D",
      "explanation": "Availability zones are physically separate locations within a region, each with independent power, cooling and networking, so VMs spread across zones survive the loss of one datacenter. An availability set only spreads VMs across fault and update domains within a single datacenter. A proximity placement group places VMs close together to reduce latency, which is the opposite of spreading them out.",
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Create and configure virtual machines",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Deploy VMs to availability zones and availability sets – Microsoft Learn: Availability options for Azure VMs"
    },
    {
      "stem": "You deploy an ARM template to the resource group RG1. After the deployment, RG1 must contain only the resources defined in the template; any existing resources in RG1 that are not in the template must be removed. No resources in RG1 are locked. Which deployment setting should you use?",
      "options": [
        "Incremental deployment mode",
        "Complete deployment mode",
        "The what-if operation",
        "The validate operation"
      ],
      "answer": "B",
      "explanation": "In Complete mode, Resource Manager deletes resources that exist in the resource group but are not specified in the template. Incremental mode, the default, leaves such resources untouched and only adds or updates what the template defines. The what-if and validate operations preview or check a deployment without making changes.",
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Automate deployment of resources by using Azure Resource Manager (ARM) templates or Bicep files",
      "difficulty": "medium",
      "source": "Microsoft Learn: Azure Resource Manager deployment modes (incremental and complete)"
    },
    {
      "stem": "You need to deploy a web app to Azure App Service and use a staging deployment slot so you can swap new releases into production. You want to use the lowest-cost App Service plan pricing tier that supports deployment slots. Which tier should you choose?",
      "options": [
        "Free",
        "Shared",
        "Basic",
        "Standard"
      ],
      "answer": "D",
      "explanation": "Deployment slots are available from the Standard tier upward; Standard, Premium and Isolated plans support them, with more slots at higher tiers. The Free, Shared and Basic tiers do not support additional deployment slots. Slots let you warm up a release in staging and then swap it into production with no downtime.",
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Create and configure Azure App Service",
      "difficulty": "medium",
      "source": "Microsoft Learn: Set up staging environments in Azure App Service – prerequisites; App Service plan tiers"
    },
    {
      "stem": "Your team builds container images in a pipeline. You need a private Azure service that stores and manages the images so that Azure Container Instances and Azure Kubernetes Service can pull them. Which service should you deploy?",
      "options": [
        "Azure Container Registry",
        "Azure Container Instances",
        "Azure Container Apps",
        "Azure Kubernetes Service"
      ],
      "answer": "A",
      "explanation": "Azure Container Registry is a managed, private registry for container images and related artifacts, and Azure compute services authenticate to it to pull images. Container Instances, Container Apps and Kubernetes Service run containers but do not provide image storage themselves.",
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Provision and manage containers in the Azure portal",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Create and manage an Azure container registry – Microsoft Learn: Introduction to Azure Container Registry"
    },
    {
      "stem": "You have an existing Azure virtual machine named VM1 that was deployed without an availability set. You need VM1 to become a member of an existing availability set named AS1 in the same region. What should you do?",
      "options": [
        "Change the availability set of VM1 in the portal while VM1 is running",
        "Stop and deallocate VM1, then assign VM1 to AS1 in its settings",
        "Delete VM1, keep its disks, and re-create VM1 from them in AS1",
        "Resize VM1, then move VM1 into AS1 by using Azure Resource Mover"
      ],
      "answer": "C",
      "explanation": "A VM can be added to an availability set only when it is created; its availability set cannot be changed afterwards, even when the VM is deallocated. To move an existing VM into an availability set, you delete the VM while retaining its managed disks and network interface, then create a new VM attached to those disks inside the availability set.",
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Create and configure virtual machines",
      "difficulty": "hard",
      "source": "Microsoft Learn: Change the availability set for a VM; Availability sets overview"
    },
    {
      "stem": "A network security group is associated with the network interface of VM1 and with no other resources. It contains two custom inbound rules: priority 100 denies TCP port 3389 from any source, and priority 200 allows TCP port 3389 from source 203.0.113.10. A user at 203.0.113.10 tries to connect to VM1 on TCP port 3389. What happens?",
      "options": [
        "The connection is allowed, because the Allow rule names a more specific source",
        "The connection is denied, because the rule with priority 100 is processed first",
        "The connection is allowed, because Allow rules always take precedence over Deny rules",
        "The connection is denied, because the default DenyAllInbound rule is evaluated first"
      ],
      "answer": "B",
      "explanation": "NSG rules are evaluated in priority order, from the lowest number to the highest, and processing stops at the first rule that matches the traffic. The priority 100 Deny rule matches the connection, so the priority 200 Allow rule is never reached. Specificity and rule type do not change this order, and default rules have priorities above 65000, so they are evaluated last.",
      "topic": "Implement and manage virtual networking",
      "subtopic": "Configure secure access to virtual networks",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Create and configure network security groups – Microsoft Learn: Network security groups, security rules"
    },
    {
      "stem": "VNet1 is peered with VNet2, and VNet2 is peered with VNet3. There are no VPN gateways, network virtual appliances or user-defined routes in any of the virtual networks. Virtual machines in VNet1 cannot communicate with virtual machines in VNet3. You need to enable this communication with the least administrative effort. What should you do?",
      "options": [
        "Enable Allow forwarded traffic on the VNet1 to VNet2 peering",
        "Enable gateway transit on both peerings that connect to VNet2",
        "Link a private DNS zone to both VNet1 and VNet3",
        "Create a virtual network peering between VNet1 and VNet3"
      ],
      "answer": "D",
      "explanation": "Virtual network peering is not transitive: traffic does not pass from VNet1 through VNet2 to VNet3 just because both are peered with VNet2. Without a gateway or a network virtual appliance in VNet2 to route the traffic, the direct solution is to peer VNet1 and VNet3. Allowing forwarded traffic or gateway transit only helps when there is a device or gateway that forwards packets, and DNS does not provide connectivity.",
      "topic": "Implement and manage virtual networking",
      "subtopic": "Configure and manage virtual networks in Azure",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Create and configure virtual network peering – Microsoft Learn: Virtual network peering"
    },
    {
      "stem": "You need to choose an Azure load-balancing service for a web application. Which TWO capabilities does Azure Application Gateway provide? Choose TWO.",
      "options": [
        "Load balancing of UDP traffic",
        "URL path-based routing",
        "Global anycast routing across regions",
        "TLS termination at the gateway"
      ],
      "answer": "BD",
      "explanation": "Application Gateway is a regional layer 7 load balancer for HTTP and HTTPS, so it can route requests by URL path or host name and terminate TLS at the gateway to offload encryption work from the back-end servers. It does not balance UDP traffic, which is a job for Azure Load Balancer at layer 4. Global anycast distribution across regions is provided by Azure Front Door, not Application Gateway.",
      "topic": "Implement and manage virtual networking",
      "subtopic": "Configure name resolution and load balancing",
      "difficulty": "medium",
      "source": "Microsoft Learn: What is Azure Application Gateway?; Load-balancing options in Azure"
    },
    {
      "stem": "You create a private endpoint for the blob service of a storage account named storage1 in VNet1. Virtual machines in VNet1 use Azure-provided DNS and must resolve storage1.blob.core.windows.net to the private endpoint's IP address. Which private DNS zone should you create and link to VNet1?",
      "options": [
        "blob.core.windows.net",
        "privatelink.core.windows.net",
        "privatelink.blob.core.windows.net",
        "privatelink.storage.azure.net"
      ],
      "answer": "C",
      "explanation": "When a private endpoint is created, the public name storage1.blob.core.windows.net becomes a CNAME to storage1.privatelink.blob.core.windows.net. A private DNS zone named privatelink.blob.core.windows.net, linked to the virtual network, holds the A record that resolves that name to the private IP. Creating a zone for blob.core.windows.net itself would override public resolution for every storage account, which is why the privatelink subdomain is used.",
      "topic": "Implement and manage virtual networking",
      "subtopic": "Configure name resolution and load balancing",
      "difficulty": "hard",
      "source": "Microsoft Learn: Azure Private Endpoint DNS configuration – Azure services DNS zone values (Storage, blob)"
    },
    {
      "stem": "You create an Azure Monitor metric alert rule for high CPU on a virtual machine. When the alert fires, it must send an email to the on-call team and call a webhook. What should you create and attach to the alert rule?",
      "options": [
        "An action group",
        "A diagnostic setting",
        "A Log Analytics workspace",
        "An Azure Monitor workbook"
      ],
      "answer": "A",
      "explanation": "An action group is a reusable collection of notification preferences and actions, such as email, SMS, webhooks, Azure Functions or Logic Apps, that alert rules invoke when they fire. Diagnostic settings route platform logs and metrics to destinations, a Log Analytics workspace stores log data, and workbooks are interactive reports; none of them sends notifications.",
      "topic": "Monitor and maintain Azure resources",
      "subtopic": "Monitor resources in Azure",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Set up alert rules, action groups, and alert processing rules – Microsoft Learn: Action groups"
    },
    {
      "stem": "You need to back up 10 Azure virtual machines by using Azure Backup. Six virtual machines are in the East US region and four are in the West Europe region, all in the same subscription. What is the minimum number of Recovery Services vaults you must create?",
      "options": [
        "One",
        "Two",
        "Three",
        "Four"
      ],
      "answer": "B",
      "explanation": "To back up an Azure virtual machine, the Recovery Services vault must be in the same region as the VM. A single vault can protect many VMs in its region, so one vault in East US and one in West Europe cover all 10 machines. Vault redundancy settings such as GRS affect where backup data is stored, not which regions' VMs a vault can protect.",
      "topic": "Monitor and maintain Azure resources",
      "subtopic": "Implement backup and recovery",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Create a Recovery Services vault – Microsoft Learn: Back up an Azure VM from the VM settings / support matrix"
    }
  ]
}
```
