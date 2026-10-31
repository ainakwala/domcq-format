```json
{
  "format": "domcq/1",
  "exam": "azure-az104",
  "set": "AZ-104: Microsoft Azure Administrator practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "You need to grant User1 the ability to create, modify and delete any type of resource in a resource group named RG1. User1 must not be able to assign Azure roles to other users. You must follow the principle of least privilege. Which built-in Azure role should you assign to User1 at the RG1 scope?",
      "options": [
        "Owner",
        "Contributor",
        "User Access Administrator",
        "Reader"
      ],
      "answer": "B",
      "explanation": "Contributor grants full management of all resources in its scope but excludes the Microsoft.Authorization write and delete actions, so it cannot create or remove role assignments. Owner has the same resource rights plus the ability to delegate access, which goes beyond what is needed. Choosing the narrowest role that still meets the requirement is the least-privilege principle that Azure RBAC is built around.",
      "rationales": {
        "A": "Owner can manage resources but can also assign roles, which the requirement forbids.",
        "B": "Contributor can fully manage resources but cannot assign roles, so it meets both requirements with least privilege.",
        "C": "User Access Administrator manages role assignments only and cannot create or modify resources.",
        "D": "Reader can only view resources and cannot create, modify or delete them."
      },
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage access to Azure resources",
      "difficulty": "easy",
      "source": "AZ-104 study guide: Manage access to Azure resources – Azure built-in roles (Owner, Contributor, Reader, User Access Administrator)"
    },
    {
      "stem": "Your company uses Microsoft Entra ID. You need to create a security group named Sales that automatically adds and removes users based on the value of their department attribute. All users are cloud-only accounts. Which requirement must be met before you can use this type of group?",
      "options": [
        "The group must be a Microsoft 365 group, because security groups cannot use dynamic membership.",
        "Microsoft Entra Connect must be deployed to synchronize the department attribute to the tenant.",
        "Each user who will be a member must be assigned the Groups Administrator role in the tenant.",
        "The users who will be members of the group must be licensed for Microsoft Entra ID P1 or P2."
      ],
      "answer": "D",
      "explanation": "Dynamic membership groups are a premium feature that requires a Microsoft Entra ID P1 (or P2) license for each user who is a member of one or more dynamic groups. Both security groups and Microsoft 365 groups support dynamic user membership rules. Cloud-only users already have attributes such as department in Microsoft Entra ID, so no directory synchronization is needed.",
      "rationales": {
        "A": "Security groups support dynamic user membership just as Microsoft 365 groups do.",
        "B": "Cloud-only users store the department attribute directly in Microsoft Entra ID, so no sync is required.",
        "C": "Group members do not need any administrative role for dynamic membership to work.",
        "D": "Dynamic membership requires Microsoft Entra ID P1 or P2 licensing for the users who are members."
      },
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage Microsoft Entra users and groups",
      "difficulty": "medium",
      "source": "AZ-104 study guide: Manage Microsoft Entra users and groups – Dynamic membership groups and licensing"
    },
    {
      "stem": "You need to ensure that every resource in a subscription named Sub1 has a CostCenter tag. If a resource is created or updated without the tag, the tag must be added automatically by using the value of the CostCenter tag on the resource's resource group. Existing noncompliant resources must also be corrected by using a remediation task. Which Azure Policy effect should the policy definition use?",
      "options": [
        "Audit",
        "Deny",
        "Modify",
        "AuditIfNotExists"
      ],
      "answer": "C",
      "explanation": "The Modify effect adds, updates or removes tags and certain properties during resource creation or update, and it supports remediation tasks that fix existing resources by using a managed identity. The built-in policy that inherits a tag from the resource group if it is missing uses this effect. Effects that only report or block cannot change resources, so they cannot satisfy an automatic tagging requirement.",
      "rationales": {
        "A": "Audit only records noncompliance in the activity log and compliance data; it never adds the tag.",
        "B": "Deny blocks noncompliant requests instead of adding the missing tag automatically.",
        "C": "Modify adds the tag on create or update and supports remediation tasks for existing resources.",
        "D": "AuditIfNotExists only reports when a related resource is missing and cannot change tags."
      },
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage Azure subscriptions and governance",
      "difficulty": "medium",
      "source": "AZ-104 study guide: Manage Azure subscriptions and governance – Configure and manage Azure Policy; Azure Policy effects"
    },
    {
      "stem": "Administrators must be able to change the configuration of a storage account named storage1, such as its networking rules and default access tier. Nobody must be able to delete storage1 accidentally, including users who hold the Owner role. What should you apply to storage1?",
      "options": [
        "A Delete (CanNotDelete) resource lock",
        "A ReadOnly resource lock",
        "A Reader role assignment for administrators",
        "An Azure Policy assignment with the Audit effect"
      ],
      "answer": "A",
      "explanation": "Resource locks apply to every user and role, including Owner, and override RBAC permissions. A Delete (CanNotDelete) lock allows the resource to be read and modified but blocks deletion until someone with lock permissions removes the lock. A ReadOnly lock would also block configuration changes, so it is too restrictive here.",
      "rationales": {
        "A": "A Delete lock blocks deletion for all users, including Owners, while still allowing configuration changes.",
        "B": "A ReadOnly lock blocks configuration changes as well as deletion, so administrators could not modify storage1.",
        "C": "Reader prevents administrators from changing configuration and does not stop Owners from deleting the account.",
        "D": "An Audit policy only reports compliance and cannot prevent a deletion."
      },
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage Azure subscriptions and governance",
      "difficulty": "easy",
      "source": "AZ-104 study guide: Manage Azure subscriptions and governance – Configure resource locks"
    },
    {
      "stem": "You move a storage account named storage1 from resource group RG1 to resource group RG2. Both resource groups are in the same subscription. RG1 was created in East US and RG2 was created in West Europe. Which two statements are true? Choose TWO.",
      "options": [
        "storage1 is relocated to the West Europe region of RG2.",
        "The resource ID of storage1 changes to include RG2.",
        "Role assignments made directly on storage1 move with it.",
        "RG1 and RG2 block write and delete operations during the move."
      ],
      "answer": "BD",
      "explanation": "Moving a resource changes only its resource group or subscription, so its resource ID changes and any scripts or references using the old ID must be updated. During the move, both the source and target resource groups are locked, and write and delete operations on them are blocked until the move completes. The resource stays in its original region, because a resource group's location only stores metadata, and role assignments made directly on the moved resource are not carried over.",
      "rationales": {
        "A": "A move never changes a resource's region; storage1 stays in its original region.",
        "B": "The resource ID contains the resource group name, so it changes when the resource moves to RG2.",
        "C": "Role assignments made directly on a moved resource are not moved and must be recreated.",
        "D": "Both source and target resource groups are locked against write and delete operations until the move completes."
      },
      "topic": "Manage Azure identities and governance",
      "subtopic": "Manage Azure subscriptions and governance",
      "difficulty": "hard",
      "source": "AZ-104 study guide: Manage Azure subscriptions and governance – Move resources to a new resource group or subscription"
    },
    {
      "stem": "Users in your on-premises office try to map an Azure file share from Windows 11 computers by using SMB. The connection fails, and you discover that the corporate firewall blocks most outbound ports. Which outbound port must be allowed so the users can mount the share over SMB?",
      "options": [
        "TCP 443",
        "TCP 3389",
        "TCP 445",
        "TCP 2049"
      ],
      "answer": "C",
      "explanation": "SMB uses TCP port 445, so clients must be able to reach the storage account's file endpoint on that port to mount an Azure file share. Many ISPs and corporate firewalls block outbound 445, which is the most common cause of mount failures. If the port cannot be opened, alternatives include a VPN or ExpressRoute connection, or Azure File Sync to a local server.",
      "rationales": {
        "A": "TCP 443 is used for HTTPS REST access to storage, not for mounting a share over SMB.",
        "B": "TCP 3389 is used by Remote Desktop Protocol, not by SMB.",
        "C": "SMB file shares are mounted over TCP 445, so it must be allowed outbound.",
        "D": "TCP 2049 is used by NFS shares, not by SMB shares."
      },
      "topic": "Implement and manage storage",
      "subtopic": "Configure Azure Files and Azure Blob Storage",
      "difficulty": "easy",
      "source": "AZ-104 study guide: Configure Azure Files and Azure Blob Storage – Mount an SMB Azure file share on Windows; port 445 requirements"
    },
    {
      "stem": "You are creating a storage account for application data. The data must remain available if an availability zone in the primary region fails. The application must also be able to read the data from a secondary region at any time, without waiting for a failover to occur. Which redundancy option should you choose?",
      "options": [
        "Zone-redundant storage (ZRS)",
        "Geo-redundant storage (GRS)",
        "Geo-zone-redundant storage (GZRS)",
        "Read-access geo-zone-redundant storage (RA-GZRS)"
      ],
      "answer": "D",
      "explanation": "RA-GZRS replicates data synchronously across three availability zones in the primary region and asynchronously to a secondary region, and it provides a read-only secondary endpoint that is always available. GZRS gives the same replication but the secondary can only be read after a failover. The 'RA' prefix is what adds continuous read access to the secondary region.",
      "rationales": {
        "A": "ZRS protects against a zone failure but keeps no copy in a secondary region.",
        "B": "GRS stores data in only one zone locally and its secondary is readable only after failover.",
        "C": "GZRS protects against zone failure, but the secondary region is readable only after a failover.",
        "D": "RA-GZRS combines zone redundancy in the primary with an always-readable secondary region."
      },
      "topic": "Implement and manage storage",
      "subtopic": "Configure and manage storage accounts",
      "difficulty": "medium",
      "source": "AZ-104 study guide: Configure and manage storage accounts – Configure Azure Storage redundancy"
    },
    {
      "stem": "A storage account contains blobs that are read frequently during the first month after upload and rarely afterward. Blobs must move automatically to the Cool tier 30 days after they were last modified and must be deleted 365 days after they were last modified. You must not write any custom code. What should you configure?",
      "options": [
        "A lifecycle management policy",
        "An object replication policy",
        "Blob soft delete with a 365-day retention",
        "A time-based immutability policy"
      ],
      "answer": "A",
      "explanation": "Lifecycle management policies are rule-based JSON definitions that tier blobs to Cool, Cold or Archive and delete blobs based on conditions such as days since last modification. The storage service runs these rules automatically, so no code or scheduled jobs are needed. Combining a tierToCool action and a delete action in one rule meets both requirements.",
      "rationales": {
        "A": "Lifecycle management can tier blobs to Cool and delete them based on days since last modification.",
        "B": "Object replication copies blobs to another storage account; it does not tier or delete them.",
        "C": "Soft delete retains blobs after deletion for recovery; it does not move or remove blobs on a schedule.",
        "D": "Immutability policies prevent changes and deletion, which is the opposite of what is required."
      },
      "topic": "Implement and manage storage",
      "subtopic": "Configure Azure Files and Azure Blob Storage",
      "difficulty": "medium",
      "source": "AZ-104 study guide: Configure Azure Files and Azure Blob Storage – Configure blob lifecycle management"
    },
    {
      "stem": "You generated a service shared access signature (SAS) for a blob container in a storage account named storage1. The SAS was signed with key1 and is not associated with a stored access policy. The SAS has been leaked and must be revoked immediately. Applications that connect by using key2 must not be affected. What should you do?",
      "options": [
        "Delete the stored access policies on the container.",
        "Regenerate key1 of storage1.",
        "Regenerate key2 of storage1.",
        "Revoke all user delegation keys for storage1."
      ],
      "answer": "B",
      "explanation": "An ad hoc service SAS is signed with an account key, and it stays valid until it expires or the key used to sign it is regenerated. Regenerating key1 invalidates every SAS signed with key1 while leaving connections that use key2 working. Deleting or changing a stored access policy only revokes SAS tokens that reference that policy, and revoking user delegation keys only affects user delegation SAS tokens.",
      "rationales": {
        "A": "The SAS is not linked to a stored access policy, so deleting policies does not revoke it.",
        "B": "Regenerating the signing key invalidates the SAS and leaves key2 connections unaffected.",
        "C": "Regenerating key2 breaks the applications that must keep working and does not revoke a key1 SAS.",
        "D": "User delegation keys sign only user delegation SAS tokens, not a SAS signed with an account key."
      },
      "topic": "Implement and manage storage",
      "subtopic": "Configure access to storage",
      "difficulty": "hard",
      "source": "AZ-104 study guide: Configure access to storage – Create and use shared access signature (SAS) tokens; stored access policies; manage access keys"
    },
    {
      "stem": "A resource group named RG1 contains several resources that were created manually in the Azure portal. You need to deploy an ARM template to RG1 so that, after deployment, RG1 contains only the resources defined in the template and every other resource in RG1 is removed. What should you do?",
      "options": [
        "Deploy the template by using Incremental mode.",
        "Run a what-if operation and then deploy the template.",
        "Deploy the template by using Complete mode.",
        "Deploy the template at the subscription scope."
      ],
      "answer": "C",
      "explanation": "In Complete mode, Resource Manager deletes resources in the target resource group that are not defined in the template, so the group ends up matching the template. Incremental mode, the default, leaves unlisted resources in place. A what-if operation only previews changes, and it is a good safety check before a Complete mode deployment because deletions are permanent.",
      "rationales": {
        "A": "Incremental mode is the default and leaves resources that are not in the template untouched.",
        "B": "What-if only previews the changes a deployment would make; it does not remove anything by itself.",
        "C": "Complete mode deletes resources in the resource group that are not defined in the template.",
        "D": "Changing to subscription scope does not make the deployment remove extra resources in RG1."
      },
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Automate deployment of resources by using Azure Resource Manager (ARM) templates or Bicep files",
      "difficulty": "medium",
      "source": "AZ-104 study guide: Automate deployment by using ARM templates or Bicep – Azure Resource Manager deployment modes"
    },
    {
      "stem": "You plan to deploy a web application on Azure virtual machines in a single region. The deployment must qualify for the 99.99 percent virtual machine connectivity SLA, which is the highest that Microsoft offers for VMs within one region. What should you do?",
      "options": [
        "Deploy two or more VMs across two or more availability zones.",
        "Deploy two or more VMs in a single availability set.",
        "Deploy one VM that uses Premium SSD disks for all disks.",
        "Deploy two or more VMs in one proximity placement group."
      ],
      "answer": "A",
      "explanation": "Spreading two or more VMs across availability zones places them in physically separate datacenters with independent power, cooling and networking, and this design carries a 99.99 percent SLA. An availability set protects against rack and update failures within one datacenter and carries 99.95 percent. A single VM with Premium SSD disks qualifies for 99.9 percent.",
      "rationales": {
        "A": "Two or more VMs across availability zones qualify for the 99.99 percent SLA.",
        "B": "An availability set protects within one datacenter and qualifies for 99.95 percent, not 99.99 percent.",
        "C": "A single VM with Premium SSD disks qualifies for only 99.9 percent.",
        "D": "A proximity placement group reduces latency between VMs and adds no availability SLA."
      },
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Create and configure virtual machines",
      "difficulty": "easy",
      "source": "AZ-104 study guide: Create and configure virtual machines – Deploy VMs to availability zones and availability sets"
    },
    {
      "stem": "A virtual machine named VM1 was deployed without an availability set. You need VM1 to become a member of an existing availability set named AS1, and you must keep VM1's existing OS disk and data disks. What should you do?",
      "options": [
        "Stop and deallocate VM1, and then change its availability set setting.",
        "Use the Redeploy option for VM1 and select AS1 as the target.",
        "Resize VM1 to a size that is available in the AS1 hardware cluster.",
        "Delete VM1 but keep its disks, and then recreate VM1 in AS1 from them."
      ],
      "answer": "D",
      "explanation": "A VM can be assigned to an availability set only when it is created; the setting cannot be changed afterward, even when the VM is deallocated. To place an existing VM in an availability set, you delete the VM while retaining its managed disks and create a new VM in the availability set that attaches those disks. Redeploy only moves the VM to a new host in the same configuration.",
      "rationales": {
        "A": "The availability set of an existing VM cannot be changed, even when it is stopped and deallocated.",
        "B": "Redeploy moves the VM to a new host node but cannot add it to an availability set.",
        "C": "Resizing changes the VM size only and does not change availability set membership.",
        "D": "Availability set membership is set at creation, so the VM must be recreated in AS1 from its disks."
      },
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Create and configure virtual machines",
      "difficulty": "medium",
      "source": "AZ-104 study guide: Create and configure virtual machines – Availability sets; change the availability set for a VM"
    },
    {
      "stem": "You deploy a container group to Azure Container Instances to run a nightly data-processing job. If the container exits with an error it must be restarted automatically, but after it completes successfully it must not be started again. Which restart policy should you set for the container group?",
      "options": [
        "Always",
        "OnFailure",
        "Never",
        "UnlessStopped"
      ],
      "answer": "B",
      "explanation": "Azure Container Instances supports three restart policies: Always, OnFailure and Never. OnFailure restarts containers only when they exit with a nonzero (error) exit code, so a successful run ends the job. This makes it the usual choice for run-once batch tasks that should retry on failure.",
      "rationales": {
        "A": "Always restarts the container even after a successful exit, so the job would run repeatedly.",
        "B": "OnFailure restarts only after an error exit and stops after a successful run.",
        "C": "Never would not restart the container after it fails, so failed runs would not retry.",
        "D": "UnlessStopped is a Docker restart policy and is not a restart policy option in Azure Container Instances."
      },
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Provision and manage containers in the Azure portal",
      "difficulty": "medium",
      "source": "AZ-104 study guide: Provision and manage containers in the Azure portal – Azure Container Instances restart policies"
    },
    {
      "stem": "You have an Azure App Service web app with a production slot and a staging deployment slot. None of the app settings or connection strings in either slot are marked as deployment slot settings. When you swap the staging slot into production, which two items are swapped along with the app content? Choose TWO.",
      "options": [
        "App settings",
        "Custom domain names",
        "Language stack version, such as the .NET version",
        "Scale-out settings"
      ],
      "answer": "AC",
      "explanation": "During a swap, settings that describe how the app runs travel with the code, including general settings such as the framework or language stack version, and app settings and connection strings that are not marked as deployment slot settings. Settings tied to the slot's endpoint or hosting, such as custom domain names, TLS bindings, scale settings and IP restrictions, stay with the slot. Marking an app setting as a deployment slot setting makes it stick to its slot instead.",
      "rationales": {
        "A": "App settings that are not marked as deployment slot settings are swapped with the content.",
        "B": "Custom domain names stay with their slot and are not swapped.",
        "C": "General settings such as the language stack version are swapped with the content.",
        "D": "Scale settings stay with the slot and are not swapped."
      },
      "topic": "Deploy and manage Azure compute resources",
      "subtopic": "Create and configure Azure App Service",
      "difficulty": "hard",
      "source": "AZ-104 study guide: Create and configure Azure App Service – Configure deployment slots; which settings are swapped"
    },
    {
      "stem": "VNet1 is peered with VNet2, and VNet2 is peered with VNet3. No VPN gateways or network virtual appliances are deployed. Virtual machines in VNet1 cannot communicate with virtual machines in VNet3. You need to enable this communication with the least administrative effort. What should you do?",
      "options": [
        "Enable gateway transit on the peerings that connect to VNet2.",
        "Add a user-defined route in VNet1 for the VNet3 address space.",
        "Enable forwarded traffic on all of the existing peerings.",
        "Create a virtual network peering between VNet1 and VNet3."
      ],
      "answer": "D",
      "explanation": "Virtual network peering is not transitive, so VNet1 and VNet3 cannot reach each other just because both are peered with VNet2. Without a gateway or a network virtual appliance in VNet2 to route traffic, the simplest fix is a direct peering between VNet1 and VNet3. Hub-and-spoke designs that route through a hub need a gateway or NVA plus user-defined routes.",
      "rationales": {
        "A": "Gateway transit requires a VPN or ExpressRoute gateway in VNet2, and none exists.",
        "B": "A route needs a next hop such as an NVA to forward traffic, and no NVA exists in VNet2.",
        "C": "Allowing forwarded traffic does nothing without a device in VNet2 that forwards the packets.",
        "D": "Peering is not transitive, so a direct VNet1 to VNet3 peering is the simplest fix."
      },
      "topic": "Implement and manage virtual networking",
      "subtopic": "Configure and manage virtual networks in Azure",
      "difficulty": "easy",
      "source": "AZ-104 study guide: Configure and manage virtual networks in Azure – Configure and manage virtual network peering"
    },
    {
      "stem": "A virtual machine named VM1 has a public IP address and a network interface in Subnet1. A network security group named NSG-Subnet is associated with Subnet1 and has an inbound rule that allows TCP 443 from the Internet service tag. A second network security group named NSG-NIC is associated with VM1's network interface and contains only the default security rules. What happens to HTTPS traffic sent from the internet to VM1?",
      "options": [
        "It is allowed, because the subnet NSG rule overrides the NIC NSG.",
        "It is allowed, because the default AllowVnetInBound rule permits it.",
        "It is denied, because both NSGs must allow the inbound traffic.",
        "It is denied, because public IPs accept traffic only via a load balancer."
      ],
      "answer": "C",
      "explanation": "For inbound traffic, Azure evaluates the NSG on the subnet first and then the NSG on the network interface, and the traffic must be allowed by both. NSG-NIC has only default rules, and internet traffic matches DenyAllInBound because AllowVnetInBound covers only the VirtualNetwork service tag. To permit the traffic you must add an allow rule for TCP 443 to NSG-NIC or remove that NSG.",
      "rationales": {
        "A": "Neither NSG overrides the other; inbound traffic must be allowed by both the subnet and NIC NSGs.",
        "B": "AllowVnetInBound applies only to the VirtualNetwork service tag, which does not include internet sources.",
        "C": "The subnet NSG allows the traffic, but the NIC NSG's DenyAllInBound default rule blocks it.",
        "D": "A public IP associated directly with a NIC can receive traffic without a load balancer."
      },
      "topic": "Implement and manage virtual networking",
      "subtopic": "Configure secure access to virtual networks",
      "difficulty": "hard",
      "source": "AZ-104 study guide: Configure secure access to virtual networks – Network security groups; how NSG rules are evaluated for subnets and NICs"
    },
    {
      "stem": "You create an Azure private DNS zone named contoso.internal. Virtual machines deployed in a virtual network named VNet1 must have their host names registered in the zone automatically, and their records must be removed automatically when the VMs are deleted. What should you configure?",
      "options": [
        "A virtual network link from the zone to VNet1 with auto registration enabled",
        "A custom DNS server setting of 168.63.129.16 on the VNet1 virtual network",
        "A conditional forwarder for contoso.internal on each VM's operating system",
        "An Azure DNS Private Resolver inbound endpoint deployed in the VNet1 network"
      ],
      "answer": "A",
      "explanation": "A private DNS zone becomes usable from a virtual network through a virtual network link, and enabling auto registration on that link makes Azure create and remove A records for the VMs in the network automatically. A virtual network can have auto registration enabled on only one private DNS zone at a time. Forwarders and resolvers help with name resolution but do not register VM records.",
      "rationales": {
        "A": "A virtual network link with auto registration creates and removes VM records in the zone automatically.",
        "B": "168.63.129.16 is the Azure-provided DNS address and setting it does not register records in the zone.",
        "C": "Conditional forwarders affect lookups from the VM and do not create records in the zone.",
        "D": "A Private Resolver inbound endpoint lets external clients query Azure DNS; it does not register records."
      },
      "topic": "Implement and manage virtual networking",
      "subtopic": "Configure name resolution and load balancing",
      "difficulty": "medium",
      "source": "AZ-104 study guide: Configure name resolution and load balancing – Azure Private DNS zones; virtual network links and auto registration"
    },
    {
      "stem": "Applications in a virtual network named VNet1, and on-premises servers connected to VNet1 through ExpressRoute private peering, must access a storage account named storage1 by using a private IP address. Public network access to storage1 must be disabled. What should you configure?",
      "options": [
        "A Microsoft.Storage service endpoint on the VNet1 subnet",
        "A private endpoint for storage1 deployed in VNet1",
        "A storage firewall rule for the on-premises public IP range",
        "A NAT gateway associated with the VNet1 subnet"
      ],
      "answer": "B",
      "explanation": "A private endpoint gives storage1 a network interface with a private IP address from VNet1, so traffic stays on the Microsoft network and public access can be disabled. Because it is an IP address in the virtual network, on-premises clients connected through ExpressRoute or VPN can reach it too, provided their DNS resolves the storage name to the private IP. Service endpoints keep the service's public IP address and do not extend to on-premises networks.",
      "rationales": {
        "A": "Service endpoints keep using the public endpoint and do not provide access from on-premises networks.",
        "B": "A private endpoint gives storage1 a private IP in VNet1 that both VNet and on-premises clients can reach.",
        "C": "A firewall rule for public IPs requires public network access, which must be disabled.",
        "D": "A NAT gateway provides outbound internet access and gives storage1 no private IP address."
      },
      "topic": "Implement and manage virtual networking",
      "subtopic": "Configure secure access to virtual networks",
      "difficulty": "medium",
      "source": "AZ-104 study guide: Configure secure access to virtual networks – Configure service endpoints and private endpoints for Azure PaaS"
    },
    {
      "stem": "You create an Azure Monitor metric alert rule that fires when a virtual machine's average CPU percentage exceeds 90 percent. When the alert fires, members of the on-call team must receive both an email and an SMS message. What should you associate with the alert rule?",
      "options": [
        "A diagnostic setting",
        "A Log Analytics workspace",
        "A data collection rule",
        "An action group"
      ],
      "answer": "D",
      "explanation": "An action group is a reusable collection of notification and action settings that alert rules call when they fire. It can send email, SMS, push and voice notifications, and run actions such as webhooks, Logic Apps or Azure Functions. Separating the action group from the alert rule lets many alerts share the same notification list.",
      "rationales": {
        "A": "A diagnostic setting routes platform logs and metrics to destinations; it sends no notifications.",
        "B": "A Log Analytics workspace stores log data for queries and does not send alert notifications.",
        "C": "A data collection rule defines what the Azure Monitor agent collects, not who is notified.",
        "D": "An action group defines the email and SMS notifications that run when the alert fires."
      },
      "topic": "Monitor and maintain Azure resources",
      "subtopic": "Monitor resources in Azure",
      "difficulty": "easy",
      "source": "AZ-104 study guide: Monitor resources in Azure – Configure Azure Monitor alerts and action groups"
    },
    {
      "stem": "You need to back up four Azure virtual machines by using Azure Backup. VM1 and VM2 are in the East US region, and VM3 and VM4 are in the West Europe region. All four VMs are in the same subscription. What is the minimum number of Recovery Services vaults you must create?",
      "options": [
        "One",
        "Two",
        "Three",
        "Four"
      ],
      "answer": "B",
      "explanation": "A Recovery Services vault can back up Azure VMs only in the same region as the vault. One vault can protect many VMs in its region, even across resource groups, so the East US VMs can share one vault and the West Europe VMs another. Two regions therefore require a minimum of two vaults.",
      "rationales": {
        "A": "One vault cannot protect VMs in two regions, because the vault must be in the same region as the VMs.",
        "B": "One vault per region is needed, and one vault can protect all VMs in its region.",
        "C": "Three vaults is more than needed, because each vault can protect multiple VMs in its region.",
        "D": "A separate vault per VM is not required; a vault protects many VMs in the same region."
      },
      "topic": "Monitor and maintain Azure resources",
      "subtopic": "Implement backup and recovery",
      "difficulty": "medium",
      "source": "AZ-104 study guide: Implement backup and recovery – Create a Recovery Services vault; back up Azure virtual machines"
    }
  ]
}
```
