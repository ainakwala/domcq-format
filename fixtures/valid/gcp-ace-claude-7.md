```json
{
  "format": "domcq/1",
  "exam": "gcp-ace",
  "set": "Associate Cloud Engineer practice – Mixed domains set 7",
  "questions": [
    {
      "stem": "You have created a new Google Cloud project and set it as the default project in your gcloud configuration. You need to start creating Compute Engine VMs from the command line, but the Compute Engine API is not yet enabled in the project. What should you do?",
      "options": [
        "Run gcloud compute enable --api=compute in Cloud Shell.",
        "Run gcloud projects add-api compute.googleapis.com in Cloud Shell.",
        "Run gcloud services enable compute.googleapis.com in Cloud Shell.",
        "Run gcloud config set api/compute enabled in Cloud Shell."
      ],
      "answer": "C",
      "explanation": "APIs are enabled per project through the Service Usage API, and the gcloud command for this is gcloud services enable followed by the service name, such as compute.googleapis.com. Enabling an API is a project-level setting, not a local gcloud configuration property. The other commands do not exist in the gcloud CLI.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Setting up cloud projects and accounts",
      "difficulty": "easy",
      "source": "ACE exam guide 1.1: Enabling APIs within projects; Service Usage documentation: Enabling and disabling services"
    },
    {
      "stem": "Your finance team wants to analyze detailed Google Cloud cost data for all projects linked to your Cloud Billing account by using SQL queries. The data must be updated automatically throughout the day without manual uploads. What should you do?",
      "options": [
        "Enable Cloud Billing export to BigQuery for the billing account and query the exported dataset.",
        "Download the monthly invoice as a CSV file and load it into a Cloud SQL database each month.",
        "Create a budget for each project and send the budget alert emails to the finance team.",
        "Grant the finance team the Billing Account Viewer role so they can use the Reports page."
      ],
      "answer": "A",
      "explanation": "Cloud Billing export to BigQuery automatically and repeatedly writes detailed usage cost data (and optionally pricing data) for the billing account into a BigQuery dataset, where it can be analyzed with standard SQL. Budgets only send threshold notifications, and the Reports page offers visual exploration rather than SQL access. Monthly invoice downloads are manual and not updated during the day.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "medium",
      "source": "ACE exam guide 1.2: Setting up billing exports; Cloud Billing documentation: Export Cloud Billing data to BigQuery"
    },
    {
      "stem": "Developers in your organization create their own Google Cloud projects. They must be able to link those projects to the company's existing Cloud Billing account, but they must not be able to change the billing account's settings, payment methods, or user permissions. Which role should you grant the developers on the billing account?",
      "options": [
        "Billing Account Administrator",
        "Billing Account User",
        "Billing Account Viewer",
        "Billing Account Costs Manager"
      ],
      "answer": "B",
      "explanation": "The Billing Account User role allows a principal to link projects to the billing account, which together with project-level permission (such as being the project Owner or Project Billing Manager) is what is needed to enable billing on a project. It does not allow managing payment settings or billing account permissions. The Administrator role is far too broad, the Viewer role is read-only, and the Costs Manager role manages budgets and cost data but cannot link projects.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "easy",
      "source": "ACE exam guide 1.2: Linking projects to a billing account; Cloud Billing documentation: Overview of Cloud Billing access control"
    },
    {
      "stem": "Your company uses Microsoft Active Directory as the source of truth for employee accounts and groups. You want employees to access Google Cloud with their existing corporate credentials, have changes to users and group membership reflected in Google Cloud automatically, and avoid storing employee passwords in Google. What should you do? Choose TWO.",
      "options": [
        "Use Google Cloud Directory Sync to provision users and groups from Active Directory into Cloud Identity.",
        "Create a service account for each employee and distribute its key through Active Directory.",
        "Configure single sign-on in Cloud Identity with your existing SAML identity provider, such as AD FS.",
        "Export Active Directory users to CSV each week and bulk-upload them into Cloud Identity."
      ],
      "answer": "AC",
      "explanation": "Google Cloud Directory Sync performs a scheduled one-way synchronization of users and groups from Active Directory or LDAP into Cloud Identity, so account and membership changes flow automatically. Configuring SAML single sign-on delegates authentication to your existing identity provider, so passwords stay in Active Directory rather than in Google. Service account keys are meant for workloads, not people, and a weekly CSV upload is neither automatic nor timely.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Setting up cloud projects and accounts",
      "difficulty": "hard",
      "source": "ACE exam guide 1.1: Managing users and groups in Cloud Identity; Cloud Identity documentation: Google Cloud Directory Sync and SSO"
    },
    {
      "stem": "You are deploying a stateless, containerized web API that receives unpredictable traffic and sometimes receives no requests for hours. You want the service to scale automatically, including down to zero instances when idle, and you do not want to manage servers or clusters. Which Google Cloud product should you use?",
      "options": [
        "Compute Engine managed instance group",
        "Google Kubernetes Engine Standard",
        "App Engine flexible environment",
        "Cloud Run"
      ],
      "answer": "D",
      "explanation": "Cloud Run is a fully managed serverless platform for containers that scales instances with incoming requests and can scale to zero when there is no traffic, so you pay nothing for idle time. Managed instance groups and GKE Standard require you to manage VMs or node pools. App Engine flexible environment runs on VMs and always keeps at least one instance running, so it cannot scale to zero.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing compute resources",
      "difficulty": "easy",
      "source": "ACE exam guide 2.1: Selecting appropriate compute choices for a given workload; Cloud Run documentation: Instance autoscaling"
    },
    {
      "stem": "You need to run a nightly batch job on Compute Engine that processes images. The job is fault tolerant, checkpoints its progress regularly, and can resume if a VM is stopped unexpectedly. You want to minimize compute costs. What should you do?",
      "options": [
        "Purchase a 3-year committed use discount for the batch VMs.",
        "Create the batch VMs as Spot VMs.",
        "Run the batch VMs on sole-tenant nodes.",
        "Use a larger machine type so the job finishes sooner."
      ],
      "answer": "B",
      "explanation": "Spot VMs use spare Compute Engine capacity at a large discount compared with standard VMs, in exchange for the possibility that Compute Engine preempts them at any time. That trade-off suits fault-tolerant, restartable batch work. Committed use discounts pay off only for steady, continuous usage, and sole-tenant nodes add cost for isolation the job does not need.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing compute resources",
      "difficulty": "medium",
      "source": "ACE exam guide 2.1: Using Spot VM instances; Compute Engine documentation: Spot VMs"
    },
    {
      "stem": "You are designing storage for an IoT platform that ingests millions of sensor readings per second. The data is time series, will grow to several petabytes, and must support single-digit millisecond reads by device ID and timestamp. Complex joins and multi-table SQL transactions are not required. Which Google Cloud product should you use?",
      "options": [
        "Bigtable",
        "Cloud SQL",
        "Firestore",
        "Cloud Storage"
      ],
      "answer": "A",
      "explanation": "Bigtable is a wide-column NoSQL database built for very high read and write throughput at low latency over petabyte-scale data, and it is a standard choice for time-series and IoT workloads keyed by entity and time. Cloud SQL is a relational database that does not scale to this write rate or data size. Firestore is a document database for application data, and Cloud Storage is object storage without low-latency row lookups.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide 2.2: Choosing data storage solutions (e.g., Bigtable, Cloud SQL, Firestore); Bigtable documentation: Overview"
    },
    {
      "stem": "Your Compute Engine VMs in a custom-mode VPC subnet have only internal IP addresses. The VMs must call the Cloud Storage and BigQuery APIs, but your security policy states that they must not be able to reach the public internet. What should you do?",
      "options": [
        "Configure Cloud NAT on a Cloud Router for the subnet's region.",
        "Assign an ephemeral external IP address to each VM.",
        "Create a VPC Network Peering connection to a Google-managed network.",
        "Enable Private Google Access on the subnet."
      ],
      "answer": "D",
      "explanation": "Private Google Access is a per-subnet setting that lets VMs with only internal IP addresses reach Google APIs and services such as Cloud Storage and BigQuery, without giving them general internet access. Cloud NAT and external IP addresses would both allow outbound connections to the public internet, which the policy forbids. VPC Network Peering connects VPC networks and is not how VMs reach Google APIs.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing networking resources",
      "difficulty": "medium",
      "source": "ACE exam guide 2.3: Creating VPCs with subnets; VPC documentation: Private Google Access"
    },
    {
      "stem": "Your organization uses Shared VPC. The network team manages the host project, which contains two shared subnets named prod-subnet and dev-subnet. Developers in a service project must be able to create VMs that use dev-subnet, but they must not be able to use prod-subnet or change any network configuration. You want to follow the principle of least privilege. What should you do?",
      "options": [
        "Grant the developers the Compute Network User role on the host project.",
        "Grant the developers the Compute Network User role on dev-subnet only.",
        "Grant the developers the Compute Network Admin role on dev-subnet.",
        "Grant the developers the Shared VPC Admin role on the service project."
      ],
      "answer": "B",
      "explanation": "In Shared VPC, the Compute Network User role lets service project principals use host project subnets for their resources. Granting it on an individual subnet limits them to that subnet, whereas granting it on the host project gives access to every shared subnet. Compute Network Admin allows modifying network resources, and Shared VPC Admin is an organization- or folder-level role for configuring Shared VPC itself, so both exceed what the developers need.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing networking resources",
      "difficulty": "hard",
      "source": "ACE exam guide 2.3: Shared VPC; VPC documentation: Shared VPC, Service Project Admins and subnet-level permissions"
    },
    {
      "stem": "Several engineers on your team use Terraform to manage the same Google Cloud environment. Each engineer currently keeps the Terraform state file on their own laptop, which has led to conflicting changes. You want a single shared state that supports locking, following Google-recommended practices. What should you do?",
      "options": [
        "Commit the terraform.tfstate file to the team's Git repository after every apply.",
        "Keep the state file on a persistent disk attached to a shared Compute Engine VM.",
        "Configure a Terraform gcs backend that stores state in a versioned Cloud Storage bucket.",
        "Store the state file in Secret Manager and download it manually before each run."
      ],
      "answer": "C",
      "explanation": "Terraform's gcs backend stores state remotely in a Cloud Storage bucket and supports state locking, so only one engineer can modify the state at a time. Enabling object versioning on the bucket lets you recover earlier state versions if something goes wrong. Committing state to Git provides no locking and can expose sensitive values, and the other approaches rely on manual coordination.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing resources using tooling",
      "difficulty": "medium",
      "source": "ACE exam guide 2.4: Planning and implementing resources through Terraform; Google Cloud docs: Store Terraform state in a Cloud Storage bucket"
    },
    {
      "stem": "A subnet in your custom-mode VPC network has the primary range 10.0.0.0/24 and is running out of IP addresses for new VMs. You need more addresses in the same subnet without recreating it or disrupting the VMs already running in it. What should you do?",
      "options": [
        "Run gcloud compute networks subnets expand-ip-range with --prefix-length=23.",
        "Delete the subnet and recreate it with the larger range 10.0.0.0/22.",
        "Peer the VPC network with another VPC network that has free addresses.",
        "Convert the VPC network from custom mode to auto mode to get more ranges."
      ],
      "answer": "A",
      "explanation": "You can expand a subnet's primary IPv4 range in place with gcloud compute networks subnets expand-ip-range by giving it a shorter prefix length, and existing VMs keep running without interruption. Expansion is one-way: a range cannot be shrunk afterward. Deleting the subnet would require removing its VMs first, peering does not add addresses to a subnet, and a custom-mode network cannot be converted to auto mode.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing networking resources",
      "difficulty": "easy",
      "source": "ACE exam guide 3.3: Expanding subnets; VPC documentation: Expand a primary IPv4 range"
    },
    {
      "stem": "You manage a regional managed instance group (MIG) that serves production traffic. You have created a new instance template that uses an updated application image. You want to replace the existing VMs with VMs based on the new template gradually, keeping the service available during the update. What should you do?",
      "options": [
        "Delete the MIG and create a new MIG from the new instance template.",
        "Start a rolling update on the MIG with the new template and set maxSurge and maxUnavailable.",
        "Edit the existing instance template so that it points to the new image.",
        "Stop each VM in the group and replace its boot disk image manually."
      ],
      "answer": "B",
      "explanation": "A MIG rolling update (for example, gcloud compute instance-groups managed rolling-action start-update) replaces VMs with ones based on the new template in stages. The maxSurge and maxUnavailable settings control how many extra VMs may be created and how many may be offline at once, which keeps capacity available. Instance templates are immutable, so they cannot be edited, and deleting the MIG would cause an outage.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing compute resources",
      "difficulty": "medium",
      "source": "ACE exam guide 3.1: Working with managed instance groups and instance templates; Compute Engine docs: Automatically apply VM configuration updates in a MIG"
    },
    {
      "stem": "Your application writes archive files to a Cloud Storage bucket that uses the Standard storage class. Each file is read frequently during its first 30 days, rarely afterward, and must be deleted 365 days after it was created. You want to minimize storage cost with the least operational effort. What should you do?",
      "options": [
        "Create a Cloud Scheduler job that runs a daily script to rewrite older objects and delete expired ones.",
        "Enable Autoclass on the bucket and add a bucket retention policy with a retention period of 365 days.",
        "Change the bucket's default storage class to Archive so new objects are stored at the lowest price.",
        "Add lifecycle rules that change objects to Nearline at 30 days of age and delete them at 365 days."
      ],
      "answer": "D",
      "explanation": "Object Lifecycle Management applies rules automatically based on conditions such as object age, using actions like SetStorageClass and Delete. Moving objects to Nearline after 30 days lowers storage cost for rarely read data, and a Delete rule removes them at 365 days with no code to maintain. A retention policy only prevents deletion before the period ends; it does not delete anything. Storing new objects in Archive would make the frequent reads in the first 30 days expensive.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide 3.2: Setting object lifecycle management policies for Cloud Storage buckets; Cloud Storage docs: Object Lifecycle Management"
    },
    {
      "stem": "You run a production Cloud SQL for MySQL instance with automated backups and point-in-time recovery enabled. At 14:05 today, a developer accidentally dropped an important table. The most recent automated backup completed at 03:00. You need to recover the table with as little data loss as possible. What should you do?",
      "options": [
        "Restore the 03:00 automated backup onto the production instance.",
        "Promote the instance's read replica, which still contains the dropped table.",
        "Use point-in-time recovery to create a new instance as of just before 14:05, then recover the table from it.",
        "Trigger a failover to the high-availability standby instance of the primary."
      ],
      "answer": "C",
      "explanation": "Point-in-time recovery uses the instance's backups together with its binary logs to create a new instance in the state it was in at a specific timestamp, so you can choose a moment just before the DROP TABLE statement and copy the table back. Read replicas and the HA standby receive changes from the primary, so the table was dropped there too. Restoring the 03:00 backup would lose about 11 hours of changes to every table.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing storage and data solutions",
      "difficulty": "hard",
      "source": "ACE exam guide 3.2: Backing up and restoring database instances (e.g., Cloud SQL); Cloud SQL for MySQL docs: Use point-in-time recovery"
    },
    {
      "stem": "Your compliance team requires that the Admin Activity and Data Access audit logs for your project be retained for seven years at the lowest possible cost. The logs will rarely be read after they are written. What should you do?",
      "options": [
        "Create a log sink that routes the audit logs to a Cloud Storage bucket that uses the Archive storage class.",
        "Create a log sink that routes the audit logs to a BigQuery dataset with a seven-year table expiration.",
        "Export the audit logs from Logs Explorer each week as CSV files and upload them to a Standard bucket.",
        "Rely on the _Required log bucket, which retains all audit log types for seven years by default."
      ],
      "answer": "A",
      "explanation": "Log sinks in Cloud Logging continuously route matching log entries to a destination, and Cloud Storage in the Archive class is the cheapest option for data that must be kept for years but is rarely accessed. BigQuery is better suited to logs you intend to query regularly and costs more for long-term storage. The _Required bucket keeps Admin Activity and other required logs for 400 days and does not hold Data Access logs, and manual weekly exports are error-prone.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Monitoring and logging",
      "difficulty": "medium",
      "source": "ACE exam guide 3.4: Configuring log routers and exporting logs to external systems; Cloud Logging docs: Routing and storage overview"
    },
    {
      "stem": "You want to create Cloud Monitoring alerting policies based on memory utilization and disk space usage of your Compute Engine VMs, but these metrics do not appear in Cloud Monitoring. What should you do?",
      "options": [
        "Enable the Cloud Monitoring API for the project.",
        "Install the Ops Agent on the VMs.",
        "Turn on VPC Flow Logs for the VMs' subnet.",
        "Change the VMs to a larger machine type."
      ],
      "answer": "B",
      "explanation": "Compute Engine reports some metrics, such as CPU utilization and network traffic, from the hypervisor without any agent, but it cannot see inside the guest operating system. The Ops Agent runs in the guest and collects system metrics such as memory and disk usage, as well as logs, and sends them to Cloud Monitoring and Cloud Logging. VPC Flow Logs record network flows only.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Monitoring and logging",
      "difficulty": "easy",
      "source": "ACE exam guide 3.4: Deploying and managing Ops Agent; Cloud Monitoring docs: Ops Agent overview"
    },
    {
      "stem": "A data analyst needs to read and download objects from a single Cloud Storage bucket named reports-bucket. The analyst must not be able to upload, modify, or delete objects, and must not have access to any other bucket. You want to follow the principle of least privilege. What should you do?",
      "options": [
        "Grant the analyst the Storage Admin role on the project.",
        "Grant the analyst the Viewer basic role on the project.",
        "Grant the analyst the Storage Object Admin role on reports-bucket.",
        "Grant the analyst the Storage Object Viewer role on reports-bucket."
      ],
      "answer": "D",
      "explanation": "Least privilege means granting the narrowest role at the lowest level of the resource hierarchy that meets the need. Storage Object Viewer allows listing and reading objects but not creating, changing, or deleting them, and granting it on the bucket limits it to that bucket. Project-level grants extend to every bucket in the project, and the Admin roles allow changes the analyst must not make.",
      "topic": "Configuring access and security",
      "subtopic": "Managing IAM",
      "difficulty": "easy",
      "source": "ACE exam guide 4.1: Assigning IAM roles to principals; Cloud Storage docs: IAM roles for Cloud Storage"
    },
    {
      "stem": "Your security team wants a group of auditors to be able to list Compute Engine instances and view their configuration, and nothing else. The closest predefined role also grants permission to view disks, images, networks, and snapshots, which the auditors must not have. You want to follow the principle of least privilege. What should you do?",
      "options": [
        "Grant the auditors' group the predefined Compute Viewer role and document which resources they may view.",
        "Grant the auditors' group the Viewer basic role on the project so they can see all instance details.",
        "Create a custom role containing only compute.instances.list and compute.instances.get and grant it to the group.",
        "Create a service account with the Compute Viewer role and give the auditors a key for that account."
      ],
      "answer": "C",
      "explanation": "When no predefined role matches the required permissions closely enough, IAM custom roles let you bundle exactly the permissions needed and grant them like any other role. A custom role with only the instance list and get permissions gives the auditors what they need and nothing more. A documented agreement does not enforce anything, the basic Viewer role is much broader, and sharing service account keys with people goes against recommended practice.",
      "topic": "Configuring access and security",
      "subtopic": "Managing IAM",
      "difficulty": "medium",
      "source": "ACE exam guide 4.1: Creating custom IAM roles; IAM documentation: Understanding IAM custom roles"
    },
    {
      "stem": "An application running on a Compute Engine VM must upload new files to a Cloud Storage bucket named uploads-bucket. It must not be able to read or delete existing objects. You want to follow Google-recommended practices for authentication and least privilege. What should you do? Choose TWO.",
      "options": [
        "Create a dedicated service account and grant it the Storage Object Creator role on uploads-bucket.",
        "Grant the Compute Engine default service account the Editor role on the project.",
        "Attach the dedicated service account to the VM and have the application use Application Default Credentials.",
        "Create a JSON key for the service account and store the key file on the VM's boot disk."
      ],
      "answer": "AC",
      "explanation": "A dedicated, user-managed service account with only the Storage Object Creator role on the target bucket gives the application permission to create objects without reading or deleting them. Attaching that service account to the VM lets the application obtain short-lived credentials from the metadata server through Application Default Credentials, so no long-lived key needs to be stored or rotated. The Editor role on the default service account is far too broad, and key files on disk are a security risk.",
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "medium",
      "source": "ACE exam guide 4.2: Creating service accounts and assigning them to resources; IAM docs: Best practices for using service accounts"
    },
    {
      "stem": "A developer needs to test, from her workstation with the gcloud CLI, whether a deployment script works with the permissions of the service account deploy-sa. Your organization policy prohibits creating service account keys. You want to follow the principle of least privilege. What should you do?",
      "options": [
        "Grant her the Service Account User role on deploy-sa and have her run gcloud auth activate-service-account.",
        "Grant her the Service Account Token Creator role on deploy-sa and have her use --impersonate-service-account.",
        "Grant her the Service Account Admin role on the project and have her create a temporary key for deploy-sa.",
        "Grant her the same roles as deploy-sa on the project and have her run the script with her own account."
      ],
      "answer": "B",
      "explanation": "Service account impersonation lets a user obtain short-lived credentials for a service account without any key, and the Service Account Token Creator role on that specific service account grants the permission needed to generate those tokens. The gcloud --impersonate-service-account flag (or the auth/impersonate_service_account property) then runs commands as the service account. The gcloud auth activate-service-account command needs a key file, creating a key violates the policy, and granting her the roles directly gives her lasting extra access without testing the service account itself.",
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "hard",
      "source": "ACE exam guide 4.2: Configuring service account impersonation; IAM docs: Service account impersonation"
    }
  ]
}
```
