```json
{
  "format": "domcq/1",
  "exam": "azure-az104",
  "set": "AZ-104: Microsoft Azure Administrator practice – Core admin skills mixed set",
  "questions": [
    {
      "stem": "An administrator must be able to assign Azure roles to other users for all resources in a subscription. The administrator must not be able to create, modify or delete any resources. You need to follow the principle of least privilege. Which built-in role should you assign to the administrator at the subscription scope?",
      "options": [
        "Owner",
        "Contributor",
        "User Access Administrator",
        "Reader"
      ],
      "answer": "C",
      "explanation": "User Access Administrator lets a user manage role assignments without granting rights to manage the resources themselves. Owner can also assign roles, but it gives full control over resources too, so it is more than needed. Contributor can manage resources but cannot assign roles, and Reader can only view.",
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage access to Azure resources",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Manage access to Azure resources – Azure built-in roles (Azure RBAC)"
    },
    {
      "stem": "Your organisation requires that new resources be created only in the West Europe and North Europe regions. Any attempt to create a resource in another region must fail. You plan to use Azure Policy. Which policy effect should the policy definition use?",
      "options": [
        "Deny",
        "Audit",
        "Append",
        "AuditIfNotExists"
      ],
      "answer": "A",
      "explanation": "The Deny effect is evaluated before a create or update request is processed and rejects the request if the resource does not comply. Audit and AuditIfNotExists only log noncompliance and let the deployment go ahead, and Append adds fields to a request rather than blocking it. The built-in Allowed locations policy uses Deny for this reason.",
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage Azure subscriptions and governance",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Manage Azure subscriptions and governance – Azure Policy definition effects"
    },
    {
      "stem": "You apply a ReadOnly lock to a storage account named storage1. A user who has the Contributor role on storage1 tries several operations. Which operation fails because of the lock?",
      "options": [
        "Reading the configuration properties of storage1",
        "Uploading a blob to storage1 by using an existing SAS token",
        "Viewing the role assignments on storage1",
        "Listing the access keys of storage1"
      ],
      "answer": "D",
      "explanation": "Resource locks apply to control plane (Azure Resource Manager) operations, and a ReadOnly lock blocks every operation that is not a read. Listing storage account keys is carried out as a POST request, so the lock blocks it even though it seems like a read. Data plane operations, such as uploading a blob with a SAS token, are not affected by locks.",
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage Azure subscriptions and governance",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Manage Azure subscriptions and governance – Lock resources to protect your infrastructure"
    },
    {
      "stem": "You plan to use dynamic membership groups in Microsoft Entra ID. Which two statements about dynamic membership groups are true? Choose TWO.",
      "options": [
        "Members can be added manually in addition to the members that the rule adds.",
        "Microsoft Entra ID P1 or higher licenses are required for the users who are members.",
        "A single dynamic group can contain both user members and device members.",
        "A Microsoft 365 group can use a dynamic user membership rule."
      ],
      "answer": "BD",
      "explanation": "Dynamic membership requires Microsoft Entra ID P1 (or higher) licensing for each user who is a member of one or more dynamic groups. Both security groups and Microsoft 365 groups can use dynamic user rules. Membership is controlled only by the rule, so you cannot add members manually, and a dynamic group contains either users or devices, never both.",
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage Microsoft Entra users and groups",
      "difficulty": "hard",
      "source": "AZ-104 skills outline: Manage Microsoft Entra users and groups – Dynamic membership groups in Microsoft Entra ID"
    },
    {
      "stem": "You add a tag named CostCenter with the value 1234 to a resource group named RG1. New resources created in RG1 must automatically get the same CostCenter tag and value, and you must be able to remediate existing resources in RG1. What should you do?",
      "options": [
        "Do nothing, because resources inherit tags from their resource group by default.",
        "Assign an Azure Policy definition that uses the Modify effect to inherit the tag from the resource group.",
        "Apply a CanNotDelete lock to RG1 so that its tags are applied to the child resources.",
        "Create a custom Azure role that includes the Microsoft.Resources/tags/write permission."
      ],
      "answer": "B",
      "explanation": "Resources do not inherit tags from their resource group or subscription by default. The built-in policy that inherits a tag from the resource group uses the Modify effect, which adds the tag when a resource is created or updated. Because it uses Modify, you can also run a remediation task to add the tag to resources that already exist.",
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage Azure subscriptions and governance",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Manage Azure subscriptions and governance – Apply and manage tags on resources; Azure Policy Modify effect"
    },
    {
      "stem": "You are creating a storage account. Data must be replicated to a secondary Azure region, and applications must be able to read data from the secondary region at any time without waiting for a failover. Zone redundancy in the primary region is not required. You need to keep costs to a minimum. Which redundancy option should you choose?",
      "options": [
        "Locally redundant storage (LRS)",
        "Zone-redundant storage (ZRS)",
        "Geo-redundant storage (GRS)",
        "Read-access geo-redundant storage (RA-GRS)"
      ],
      "answer": "D",
      "explanation": "RA-GRS copies data to the paired secondary region and gives read access to it through a secondary endpoint at all times. With plain GRS, the secondary copy cannot be read until the account fails over. LRS and ZRS keep data in the primary region only, and RA-GZRS would add zone redundancy that was not required, at a higher cost.",
      "topic": "Implement and manage storage",
      "subtopic": "Configure and manage storage accounts",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Configure and manage storage accounts – Azure Storage redundancy"
    },
    {
      "stem": "You generate several service SAS tokens that grant read access to a blob container named reports. Later you must be able to revoke these tokens without regenerating the storage account access keys and without affecting any other SAS tokens for the account. What should you do when you create the tokens?",
      "options": [
        "Associate the tokens with a stored access policy on the reports container.",
        "Create the tokens as account SAS tokens instead of service SAS tokens.",
        "Restrict the tokens to an allowed range of client IP addresses.",
        "Configure the tokens to allow requests over HTTPS only."
      ],
      "answer": "A",
      "explanation": "A service SAS can be tied to a stored access policy defined on the container, and the token then takes its constraints from that policy. Deleting the policy or changing its expiry revokes every SAS linked to it, without rotating keys or affecting other tokens. An ad hoc SAS that is not linked to a policy can only be revoked by regenerating the key that signed it.",
      "topic": "Implement and manage storage",
      "subtopic": "Configure access to storage",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Configure access to storage – Shared access signatures and stored access policies"
    },
    {
      "stem": "A company has an on-premises Windows Server file server that holds 10 TB of data. You need to keep the full data set in Azure, keep frequently accessed files cached on the on-premises server, and automatically free up local disk space by moving rarely used file content to the cloud. What should you implement?",
      "options": [
        "Azure Data Box to copy the data to a blob container",
        "AzCopy scheduled to copy the files to Azure Files every night",
        "Azure File Sync with cloud tiering enabled on the server endpoint",
        "A blob lifecycle management rule that moves data to the cool tier"
      ],
      "answer": "C",
      "explanation": "Azure File Sync syncs an on-premises Windows Server with an Azure file share, which holds the complete data set. With cloud tiering, frequently accessed files stay cached locally, and rarely used files are replaced by pointers that are recalled on demand, which frees disk space. The other options copy or tier data but do not keep a local cache that stays in sync.",
      "topic": "Implement and manage storage",
      "subtopic": "Configure Azure Files and Azure Blob Storage",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Configure Azure Files and Azure Blob Storage – Azure File Sync and cloud tiering"
    },
    {
      "stem": "You plan to configure object replication of block blobs from a container in a general-purpose v2 storage account named storage1 to a container in a general-purpose v2 storage account named storage2. Which three requirements must be met? Choose THREE.",
      "options": [
        "Blob versioning is enabled on storage1.",
        "storage1 and storage2 are in the same Azure region.",
        "Blob versioning is enabled on storage2.",
        "Blob change feed is enabled on storage1."
      ],
      "answer": "ACD",
      "explanation": "Object replication copies block blobs asynchronously and relies on blob versioning, which must be enabled on both the source and destination accounts. The source account also needs change feed, which records the changes that replication processes. The two accounts can be in the same region or in different regions.",
      "topic": "Implement and manage storage",
      "subtopic": "Configure Azure Files and Azure Blob Storage",
      "difficulty": "hard",
      "source": "AZ-104 skills outline: Configure Azure Files and Azure Blob Storage – Object replication for block blobs (prerequisites)"
    },
    {
      "stem": "You plan to deploy two virtual machines that run a web application in a region that supports availability zones. The application must stay available if an entire datacenter in the region fails. Which deployment option should you use?",
      "options": [
        "Place the VMs in an availability set that has two fault domains.",
        "Place the VMs in different availability zones.",
        "Place the VMs in the same proximity placement group.",
        "Place the VMs on the same dedicated host."
      ],
      "answer": "B",
      "explanation": "Availability zones are physically separate locations within a region, each with its own power, cooling and networking, so VMs spread across zones survive the loss of a datacenter. An availability set spreads VMs across fault and update domains inside a single datacenter, so it protects against rack and hardware failures only. Proximity placement groups and dedicated hosts put VMs physically close together, which reduces resilience.",
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Create and configure virtual machines",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Create and configure virtual machines – Availability options: availability zones and availability sets"
    },
    {
      "stem": "You have a Bicep file named main.bicep that sets targetScope to 'subscription' and creates two resource groups. You need to deploy the file by using the Azure CLI. Which command should you use?",
      "options": [
        "az deployment group create",
        "az group create",
        "az deployment sub create",
        "az bicep build"
      ],
      "answer": "C",
      "explanation": "The deployment command must match the scope that the file targets. A file with targetScope set to 'subscription' is deployed with az deployment sub create, which also needs a location for the deployment metadata. az deployment group create deploys into an existing resource group, az group create makes a single resource group without using the file, and az bicep build only turns the file into an ARM JSON template.",
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Automate deployment of resources by using Azure Resource Manager (ARM) templates or Bicep files",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Automate deployment by using ARM templates or Bicep files – Deployment scopes and Azure CLI deployment commands"
    },
    {
      "stem": "You plan to host a web app in Azure App Service. You will use deployment slots to stage new releases and swap them into production. You need to choose the lowest-cost App Service plan pricing tier that supports deployment slots. Which tier should you choose?",
      "options": [
        "Free",
        "Shared",
        "Basic",
        "Standard"
      ],
      "answer": "D",
      "explanation": "Deployment slots are available from the Standard tier upwards; Premium and Isolated tiers allow more slots. The Free, Shared and Basic tiers do not support deployment slots. Slots let you warm up a release in a staging slot and then swap it into production with no downtime.",
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Create and configure Azure App Service",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Create and configure Azure App Service – Set up staging environments (deployment slots); App Service plan tiers"
    },
    {
      "stem": "You deploy a container to Azure Container Instances that runs a data processing task. If the task completes successfully, the container must stop and not restart. If the process exits with an error, the container must restart automatically. Which restart policy should you configure?",
      "options": [
        "Always",
        "OnFailure",
        "Never",
        "UnlessStopped"
      ],
      "answer": "B",
      "explanation": "Azure Container Instances supports three restart policies: Always, OnFailure and Never. OnFailure restarts a container only when its process exits with a nonzero exit code, so a successful run ends the task while a failed run is retried. Always would restart the container even after it succeeds, and UnlessStopped is a Docker option that ACI does not offer.",
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Provision and manage containers in the Azure portal",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Provision and manage containers – Azure Container Instances restart policies"
    },
    {
      "stem": "Two virtual machines named VM1 and VM2 are in an availability set named AS1. You need to resize VM1 to a VM size that is not available on the hardware cluster that currently hosts AS1. What should you do first?",
      "options": [
        "Stop and deallocate all the virtual machines in AS1.",
        "Stop and deallocate only VM1, leaving VM2 running.",
        "Redeploy VM1 to a new host in the same hardware cluster.",
        "Remove VM1 from AS1 and then change its size."
      ],
      "answer": "A",
      "explanation": "All VMs in an availability set must run on the same hardware cluster. If the new size is not available on that cluster, every VM in the set must be stopped and deallocated so the set can be moved to a cluster that supports the size. You cannot remove a VM from an availability set after it is created, and redeploying within the same cluster does not make new sizes available.",
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Create and configure virtual machines",
      "difficulty": "hard",
      "source": "AZ-104 skills outline: Create and configure virtual machines – Resize a virtual machine; availability sets"
    },
    {
      "stem": "VNet1 is peered with VNet2, and VNet2 is peered with VNet3. There are no virtual network gateways or network virtual appliances in any of the networks. Virtual machines in VNet1 cannot communicate with virtual machines in VNet3. You need to enable this communication with the least administrative effort. What should you do?",
      "options": [
        "Enable gateway transit on the peerings of VNet2.",
        "Enable forwarded traffic on the peerings of VNet1 and VNet3.",
        "Add service endpoints to the subnets in VNet1 and VNet3.",
        "Create a peering between VNet1 and VNet3."
      ],
      "answer": "D",
      "explanation": "Virtual network peering is not transitive, so traffic from VNet1 cannot pass through VNet2 to reach VNet3 by default. Peering VNet1 directly with VNet3 is the simplest fix. Gateway transit needs a VPN or ExpressRoute gateway, and allowing forwarded traffic only helps when a network virtual appliance with routes forwards the packets.",
      "topic": "Implement and manage virtual networking",
      "subtopic": "Configure and manage virtual networks in Azure",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Configure and manage virtual networks in Azure – Virtual network peering"
    },
    {
      "stem": "A network security group (NSG) associated with the subnet of VM1 has two custom inbound rules. The rule with priority 200 allows TCP port 3389 from any source. The rule with priority 150 denies TCP port 3389 from the Internet service tag. No other NSG applies to VM1. A user on the internet tries to connect to the public IP address of VM1 by using RDP. What is the result?",
      "options": [
        "The connection is allowed because Allow rules take precedence over Deny rules.",
        "The connection is allowed because the rule with priority 200 is processed first.",
        "The connection is denied because the rule with priority 150 is processed first.",
        "The connection is denied because the default DenyAllInBound rule is processed first."
      ],
      "answer": "C",
      "explanation": "NSG rules are processed in priority order, lowest number first, and processing stops at the first rule that matches the traffic. The deny rule with priority 150 matches RDP traffic from the internet, so the connection is blocked before the allow rule with priority 200 is reached. Default rules have priorities of 65000 and above, so they are processed after any custom rule.",
      "topic": "Implement and manage virtual networking",
      "subtopic": "Configure secure access to virtual networks",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Configure secure access to virtual networks – Network security groups: security rules and priority"
    },
    {
      "stem": "You have a virtual network named VNet1 that uses the default Azure-provided DNS. The virtual machines in VNet1 must have DNS A records created and updated automatically in a zone named contoso.internal, and the records must be resolvable only from within your virtual networks. What should you do?",
      "options": [
        "Create a private DNS zone named contoso.internal and link VNet1 with auto registration enabled.",
        "Create a public DNS zone named contoso.internal and delegate it at your domain registrar.",
        "Configure VNet1 to use custom DNS servers and set contoso.internal as the DNS suffix.",
        "Create a private endpoint in VNet1 and enable private DNS zone integration for it."
      ],
      "answer": "A",
      "explanation": "Azure Private DNS zones are resolvable only from virtual networks that are linked to them. When you create a virtual network link with auto registration enabled, Azure creates and maintains A records for the virtual machines in that network automatically. A public zone is resolvable from the internet, and custom DNS servers or private endpoints do not register VM records for you.",
      "topic": "Implement and manage virtual networking",
      "subtopic": "Configure name resolution and load balancing",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Configure name resolution and load balancing – Azure Private DNS zones and auto registration"
    },
    {
      "stem": "You plan to deploy a public Azure Load Balancer that uses the Standard SKU in front of a set of virtual machines. Which two statements about this load balancer are true? Choose TWO.",
      "options": [
        "Inbound traffic to the backend VMs is blocked unless a network security group allows it.",
        "It can route requests to different backend pools based on the URL path.",
        "It supports zone-redundant frontend IP configurations.",
        "It can terminate TLS connections and offload certificate processing."
      ],
      "answer": "AC",
      "explanation": "The Standard Load Balancer is secure by default: inbound flows are closed unless a network security group explicitly allows them. It also supports availability zones, including zone-redundant frontends that survive the loss of a zone. Azure Load Balancer works at layer 4, so URL path routing and TLS termination need a layer 7 service such as Application Gateway.",
      "topic": "Implement and manage virtual networking",
      "subtopic": "Configure name resolution and load balancing",
      "difficulty": "hard",
      "source": "AZ-104 skills outline: Configure name resolution and load balancing – Azure Load Balancer Standard SKU; Application Gateway comparison"
    },
    {
      "stem": "You need to back up an Azure virtual machine named VM1, which is in the East US region, by using Azure Backup. You plan to create a Recovery Services vault for the backups. Where must you create the vault?",
      "options": [
        "In the Azure paired region of East US",
        "In the East US region",
        "In the same resource group as VM1",
        "In any region, provided the vault uses geo-redundant storage"
      ],
      "answer": "B",
      "explanation": "To back up an Azure VM, the Recovery Services vault must be in the same region as the VM. The vault can be in a different resource group from the VM. Geo-redundant storage on the vault copies backup data to the paired region, but it does not let you protect VMs from a different region.",
      "topic": "Monitor and maintain Azure resources",
      "subtopic": "Implement backup and recovery",
      "difficulty": "easy",
      "source": "AZ-104 skills outline: Implement backup and recovery – Create a Recovery Services vault; back up Azure VMs"
    },
    {
      "stem": "You create an Azure Monitor metric alert rule that fires when the average CPU percentage of a virtual machine named VM1 is above 80 percent for 15 minutes. When the alert fires, the operations team must receive an email and an SMS message. Which Azure Monitor component should you create to define these notifications and attach to the alert rule?",
      "options": [
        "A diagnostic setting",
        "A data collection rule",
        "An alert processing rule",
        "An action group"
      ],
      "answer": "D",
      "explanation": "An action group is a reusable set of notification and action settings, such as email, SMS, voice, webhooks or runbooks, that alert rules call when they fire. Alert processing rules can suppress alerts or add action groups to fired alerts, but the email and SMS recipients are still defined in an action group. Diagnostic settings and data collection rules control where telemetry is sent and collected, not notifications.",
      "topic": "Monitor and maintain Azure resources",
      "subtopic": "Monitor resources in Azure",
      "difficulty": "medium",
      "source": "AZ-104 skills outline: Monitor resources in Azure – Azure Monitor alerts and action groups"
    }
  ]
}
```
