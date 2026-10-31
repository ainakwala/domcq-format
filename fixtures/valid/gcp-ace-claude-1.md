```json
{
  "format": "domcq/1",
  "exam": "gcp-ace",
  "set": "Associate Cloud Engineer practice – Core skills mix",
  "questions": [
    {
      "stem": "Your company's compliance team requires that no Google Cloud resources be created outside the EU in any current or future project in the organization. What should you do?",
      "options": [
        "Create a firewall rule in each VPC network that blocks traffic to regions outside the EU",
        "Grant project creators a custom IAM role that excludes permissions for non-EU regions",
        "Set an organization policy with the resource locations constraint at the organization node",
        "Configure a billing budget that alerts the compliance team when non-EU spend appears"
      ],
      "answer": "C",
      "explanation": "The Organization Policy Service controls what configurations are allowed on resources, while IAM controls who can act. The resource locations constraint (gcp.resourceLocations) limits the locations where location-based resources can be created. Setting it on the organization node means every folder and project, including ones created later, inherits the restriction.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Setting up cloud projects and accounts",
      "difficulty": "easy",
      "source": "ACE exam guide 1.1: Applying organizational policies to the resource hierarchy; Organization Policy Service, resource locations constraint"
    },
    {
      "stem": "You manage a project used for experiments. Finance wants email alerts when actual spend reaches 50%, 90% and 100% of a monthly amount, and your team also wants an automated workflow to react when the 100% threshold is reached. What should you configure?",
      "options": [
        "A Cloud Billing budget with those threshold rules and a connected Pub/Sub topic for programmatic notifications",
        "A billing quota on the project that blocks all new resource creation once the monthly amount is reached",
        "A Cloud Monitoring uptime check against the billing console with an alerting policy for each threshold",
        "A Cloud Billing file export to Cloud Storage with an object notification that fires for each new file"
      ],
      "answer": "A",
      "explanation": "Cloud Billing budgets compare actual or forecasted spend with a target amount and send alert emails when threshold rules are crossed. Budgets do not cap spending by themselves, so to automate a response you connect a Pub/Sub topic to the budget. A subscriber, such as a Cloud Run function, can then react to the notifications programmatically.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "medium",
      "source": "ACE exam guide 1.2: Setting up billing budgets and alerts; Cloud Billing docs, programmatic budget notifications"
    },
    {
      "stem": "Your finance team wants to use SQL to analyze Google Cloud costs by the labels attached to resources, across all projects linked to one Cloud Billing account. What should you do?",
      "options": [
        "Download each monthly invoice PDF and import its totals into Cloud SQL",
        "Enable Data Access audit logs in each project and query them in Logs Explorer",
        "Create a separate budget for each label value and review the budget dashboard",
        "Enable Cloud Billing export to a BigQuery dataset and query the exported data"
      ],
      "answer": "D",
      "explanation": "Cloud Billing export to BigQuery is configured on the billing account, so it covers every project linked to it. It regularly writes detailed usage and cost records, including project, service, SKU and resource labels, to a dataset that you can query with SQL. Invoices only hold summaries, and audit logs record who did what, not what it cost.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "easy",
      "source": "ACE exam guide 1.2: Setting up billing exports; Cloud Billing docs, export Cloud Billing data to BigQuery"
    },
    {
      "stem": "A developer is the Owner of several new projects that they created. They need to link these projects to your organization's existing Cloud Billing account themselves, but they must not be able to manage the billing account itself, for example by changing payment settings or granting others access to it. Which role should you grant the developer, and where?",
      "options": [
        "Billing Account Administrator on the billing account",
        "Billing Account User on the billing account",
        "Project Billing Manager on the organization",
        "Billing Account Viewer on the billing account"
      ],
      "answer": "B",
      "explanation": "Linking a project to a billing account needs permissions on both sides: on the project (included in Owner and Project Billing Manager) and on the billing account (billing.resourceAssociations.create, included in Billing Account User). The developer already has the project side as Owner, so only Billing Account User on the billing account is missing. Billing Account Administrator would let them manage the account, and Billing Account Viewer does not allow linking.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "hard",
      "source": "ACE exam guide 1.2: Linking projects to a billing account; Cloud Billing docs, access control and permissions"
    },
    {
      "stem": "You need to deploy a stateless containerized HTTP API with unpredictable traffic. It must scale automatically, scale to zero when idle, and require no cluster or server management. Which service should you use?",
      "options": [
        "Cloud Run",
        "Google Kubernetes Engine Standard",
        "Compute Engine managed instance group",
        "App Engine flexible environment"
      ],
      "answer": "A",
      "explanation": "Cloud Run is a fully managed serverless platform for containers: you deploy an image and it scales instances with incoming requests, down to zero when there is no traffic. GKE Standard requires managing nodes, and managed instance groups require managing VMs. The App Engine flexible environment keeps at least one instance running, so it does not scale to zero.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing compute resources",
      "difficulty": "easy",
      "source": "ACE exam guide 2.1: Selecting appropriate compute choices for a given workload; Cloud Run overview"
    },
    {
      "stem": "You must keep backup files in Cloud Storage for at least seven years for regulatory reasons. The files are expected to be read less than once a year, only during audits. Which storage class minimizes storage cost?",
      "options": [
        "Standard",
        "Nearline",
        "Archive",
        "Coldline"
      ],
      "answer": "C",
      "explanation": "Archive storage has the lowest at-rest price and is meant for data accessed less than once a year, with a 365-day minimum storage duration and higher retrieval costs. Coldline suits data read about once a quarter, and Nearline about once a month. For a seven-year retention with almost no reads, the trade-off favors Archive, and data is still available with millisecond latency when needed.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing storage and data solutions",
      "difficulty": "easy",
      "source": "ACE exam guide 2.2: Choosing Cloud Storage storage classes; Cloud Storage docs, storage classes"
    },
    {
      "stem": "You are designing a network for VMs in us-central1 and europe-west1. The VMs must communicate with each other using internal IP addresses, and you want the fewest networking resources to manage. What should you do?",
      "options": [
        "Create two VPC networks, one per region, and connect them with Cloud VPN",
        "Create one custom-mode VPC network with a subnet in each of the regions",
        "Create one VPC network per region and connect them with VPC Network Peering",
        "Create one subnet that spans both regions and assign VMs from its range"
      ],
      "answer": "B",
      "explanation": "A VPC network is a global resource, while each subnet belongs to a single region. Subnets in the same VPC can reach each other over internal IP addresses through automatically created subnet routes, so one network with a subnet per region is enough, plus firewall rules that allow the traffic. A subnet cannot span regions, and VPN or peering adds resources you do not need here.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing networking resources",
      "difficulty": "medium",
      "source": "ACE exam guide 2.3: Creating a VPC with subnets; VPC docs, VPC networks overview"
    },
    {
      "stem": "An application needs a relational database with SQL support and strongly consistent transactions. It must scale horizontally and serve users across multiple continents with very high availability. Which service best fits these requirements?",
      "options": [
        "Cloud SQL for PostgreSQL with read replicas",
        "Bigtable with multi-cluster replication",
        "Firestore in Datastore mode",
        "Spanner with a multi-region configuration"
      ],
      "answer": "D",
      "explanation": "Spanner is a relational database that combines SQL and strongly consistent ACID transactions with horizontal scaling, and multi-region configurations replicate data across continents for high availability. Cloud SQL scales mainly vertically, and its read replicas do not accept writes. Bigtable is a NoSQL wide-column store, and Firestore is a NoSQL document database, so neither is a relational SQL database.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide 2.2: Choosing data storage options (Cloud SQL, Spanner, Bigtable, Firestore); Spanner overview"
    },
    {
      "stem": "You regularly use the gcloud CLI to work with two projects, each with a different user account and default compute region. You want to switch all of these settings at once with a single command. What should you do?",
      "options": [
        "Edit the gcloud properties file by hand before each working session",
        "Run gcloud init each time you need to switch to the other project",
        "Create a named gcloud configuration per project and activate the one you need",
        "Set the CLOUDSDK_CORE_PROJECT environment variable in your shell profile"
      ],
      "answer": "C",
      "explanation": "A gcloud configuration is a named set of properties such as account, project and compute/region. You create one per context with gcloud config configurations create and switch everything at once with gcloud config configurations activate NAME. Running gcloud init is interactive, and an environment variable changes only one property.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing resources using tooling",
      "difficulty": "medium",
      "source": "ACE exam guide 2.4 and 1.1: Installing and configuring the gcloud CLI; gcloud docs, managing gcloud CLI configurations"
    },
    {
      "stem": "You plan to run a fault-tolerant batch workload on Compute Engine Spot VMs to reduce cost. Which statements about Spot VMs are true? Choose TWO.",
      "options": [
        "Compute Engine can preempt them at any time if it needs the capacity back.",
        "They are always stopped automatically after running for 24 hours.",
        "They are live migrated to another host during host maintenance events.",
        "When preempted, they get a short notice of about 30 seconds to run a shutdown script."
      ],
      "answer": "AD",
      "explanation": "Spot VMs use spare Compute Engine capacity at a large discount, and in exchange Compute Engine can preempt them at any time. When that happens, the VM gets a best-effort notice of about 30 seconds, which a shutdown script can use to save state. Unlike legacy preemptible VMs, Spot VMs have no 24-hour maximum runtime. They are also not live migrated: during host maintenance they are stopped or deleted.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing compute resources",
      "difficulty": "hard",
      "source": "ACE exam guide 2.1: Using Spot VM instances and custom machine types as appropriate; Compute Engine docs, Spot VMs"
    },
    {
      "stem": "A regional managed instance group runs a web application. You have created a new instance template that uses an updated image. You want to replace the instances gradually while keeping the application available during the change. What should you do?",
      "options": [
        "Delete the managed instance group and recreate it from the new instance template",
        "Start a rolling update on the group that targets the new instance template",
        "Edit each instance in the group and change its boot disk to the new image",
        "Set the autoscaler's minimum size to zero and then back to the original size"
      ],
      "answer": "B",
      "explanation": "A managed instance group creates its instances from an instance template, so you change the template rather than individual VMs. A rolling update (for example, gcloud compute instance-groups managed rolling-action start-update with the new template) replaces instances in stages. Settings such as max surge and max unavailable control how many instances change at a time, so capacity stays available.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing compute resources",
      "difficulty": "medium",
      "source": "ACE exam guide 3.1: Working with managed instance groups and instance templates; Compute Engine docs, rolling out updates to MIGs"
    },
    {
      "stem": "A node pool in a GKE Standard cluster often runs out of capacity when Pods scale up, leaving new Pods in the Pending state. You want GKE to add nodes automatically when Pods cannot be scheduled and remove nodes when they are underused. What should you do?",
      "options": [
        "Enable horizontal Pod autoscaling on every Deployment in the cluster",
        "Increase the node pool size by hand to the expected peak node count",
        "Enable vertical Pod autoscaling to lower the Pods' resource requests",
        "Enable cluster autoscaler on the node pool with minimum and maximum nodes"
      ],
      "answer": "D",
      "explanation": "The cluster autoscaler resizes a node pool based on Pod resource requests: it adds nodes when Pods cannot be scheduled and removes nodes that are underused, within the minimum and maximum you set. You can turn it on with gcloud container clusters update and the --enable-autoscaling, --min-nodes and --max-nodes flags for the node pool. Horizontal and vertical Pod autoscaling change Pods, not the number of nodes.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing compute resources",
      "difficulty": "medium",
      "source": "ACE exam guide 3.1: Managing GKE node pools and autoscaling; GKE docs, cluster autoscaler"
    },
    {
      "stem": "Objects in a Cloud Storage bucket must move to the Coldline storage class 90 days after creation and be deleted 365 days after creation, with no manual work or custom code. What should you configure?",
      "options": [
        "Object Lifecycle Management rules on the bucket that use age conditions",
        "A retention policy on the bucket with a retention period of 365 days",
        "A scheduled Cloud Run job that rewrites and then deletes the objects",
        "Object Versioning on the bucket with a limit on noncurrent versions"
      ],
      "answer": "A",
      "explanation": "Object Lifecycle Management applies rules to a bucket automatically: a SetStorageClass action with an age condition of 90 days moves objects to Coldline, and a Delete action with an age of 365 days removes them. A retention policy works the other way round, preventing deletion until the period ends rather than deleting anything. Versioning only keeps older copies of objects.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing storage and data solutions",
      "difficulty": "easy",
      "source": "ACE exam guide 3.2: Setting object lifecycle management policies for Cloud Storage buckets; Cloud Storage docs, Object Lifecycle Management"
    },
    {
      "stem": "Before running a large BigQuery query billed with on-demand pricing, you want to know how many bytes it will process so that you can estimate its cost, without actually running it. What should you do?",
      "options": [
        "Run the query with a LIMIT 10 clause and check the bytes billed",
        "Check the table's row count on the dataset details page",
        "Run the query as a dry run, for example with bq query --dry_run",
        "Export the table to Cloud Storage and check the file sizes"
      ],
      "answer": "C",
      "explanation": "A dry run validates the query and returns an estimate of the bytes it would process without running it and without charge. You can then turn bytes into cost, for example with the Pricing Calculator. Adding LIMIT does not reduce the bytes scanned on a regular table, because BigQuery still reads the full referenced columns.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide 3.2: Estimating costs of data storage resources and queries; BigQuery docs, estimate query costs (dry run)"
    },
    {
      "stem": "Your Compute Engine VMs have no external IP addresses. Administrators must connect to them over SSH using Identity-Aware Proxy (IAP) TCP forwarding. The VPC network has only the implied firewall rules. Which firewall rule should you create?",
      "options": [
        "Allow egress on TCP port 22 to 35.235.240.0/20",
        "Allow ingress on TCP port 22 from 35.235.240.0/20",
        "Allow ingress on TCP port 443 from 0.0.0.0/0",
        "Allow ingress on TCP port 22 from 130.211.0.0/22"
      ],
      "answer": "B",
      "explanation": "With IAP TCP forwarding, connections reach the VM from Google's IAP range 35.235.240.0/20, so the VM needs an ingress rule allowing TCP 22 from that range. The implied rules deny all ingress and allow all egress, so an egress rule changes nothing. 130.211.0.0/22 is a load balancer and health check range. Users also need the IAP-secured Tunnel User role.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing networking resources",
      "difficulty": "hard",
      "source": "ACE exam guide 3.3: Adding custom firewall rules; IAP docs, using IAP for TCP forwarding"
    },
    {
      "stem": "Cloud Monitoring shows CPU utilization for your Compute Engine VMs but not memory utilization. You need memory utilization metrics for these VMs. What should you do?",
      "options": [
        "Enable the Cloud Monitoring API in the project a second time",
        "Change the VMs to a larger machine type so memory is reported",
        "Create a log-based metric that counts entries in the VM syslog",
        "Install the Ops Agent on the VMs to collect in-guest metrics"
      ],
      "answer": "D",
      "explanation": "Compute Engine reports metrics visible from the hypervisor, such as CPU, disk and network, without any agent. Memory usage is measured inside the guest operating system, so it needs the Ops Agent, which collects both metrics and logs from inside the VM. A log-based metric only counts or extracts values from log entries and would not provide memory data.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Monitoring and logging",
      "difficulty": "easy",
      "source": "ACE exam guide 3.4: Installing and configuring the Ops Agent; Cloud Monitoring docs, Ops Agent overview"
    },
    {
      "stem": "A team of data analysts needs to run queries in a project and read the data in that project's BigQuery datasets. They must not be able to modify or delete tables. Following the principle of least privilege, which predefined roles should you grant to the analysts' Google group? Choose TWO.",
      "options": [
        "BigQuery Admin",
        "BigQuery Data Viewer",
        "BigQuery Job User",
        "BigQuery Data Owner"
      ],
      "answer": "BC",
      "explanation": "Running a query creates a BigQuery job, which needs bigquery.jobs.create, provided by BigQuery Job User on the project. Reading tables needs the read permissions in BigQuery Data Viewer. BigQuery Admin and Data Owner both allow changing or deleting tables, so they break least privilege. Granting the roles to a group keeps access easy to manage as the team changes.",
      "topic": "Configuring access and security",
      "subtopic": "Managing IAM",
      "difficulty": "medium",
      "source": "ACE exam guide 4.1: Managing IAM role assignments using predefined roles; BigQuery docs, access control with IAM"
    },
    {
      "stem": "An application on a Compute Engine VM must upload files to a Cloud Storage bucket. You want to follow Google-recommended practices for how the application authenticates. What should you do?",
      "options": [
        "Attach a user-managed service account with the needed Storage role to the VM, and let the application use Application Default Credentials",
        "Create a key for a service account with the needed Storage role, copy the JSON file to the VM, and point the application to that file",
        "Attach the Compute Engine default service account with the Editor role, and keep the default access scopes on the VM",
        "Run gcloud auth login on the VM as a developer who can access the bucket, and let the application use those credentials"
      ],
      "answer": "A",
      "explanation": "When a service account is attached to a VM, the application gets short-lived credentials from the metadata server through Application Default Credentials, so there are no keys to store or rotate. Using a dedicated user-managed service account with only the needed role follows least privilege. Downloaded keys are a security risk, Editor is far broader than needed, and a person's user credentials should not run workloads.",
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "medium",
      "source": "ACE exam guide 4.2: Assigning service accounts to resources; IAM docs, best practices for using service accounts"
    },
    {
      "stem": "A developer needs to test gcloud commands from their workstation that run with the permissions of a service account named deployer. Your security policy forbids creating service account keys. What should you do?",
      "options": [
        "Grant the developer Service Account User on deployer and run gcloud auth activate-service-account",
        "Grant the developer Service Account Admin on the project so that they can act as deployer directly",
        "Grant the developer Viewer on deployer and run gcloud config set account with deployer's email",
        "Grant the developer Service Account Token Creator on deployer and use --impersonate-service-account"
      ],
      "answer": "D",
      "explanation": "Service account impersonation lets a principal get short-lived credentials for a service account without a key. It needs the iam.serviceAccounts.getAccessToken permission, which is in the Service Account Token Creator role, and gcloud uses it through the --impersonate-service-account flag or the auth/impersonate_service_account property. Service Account User lets you attach a service account to resources but not mint tokens, and activate-service-account needs a key file.",
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "hard",
      "source": "ACE exam guide 4.2: Managing service account impersonation; IAM docs, service account impersonation"
    },
    {
      "stem": "Several projects under different folders in your organization need the same narrowly scoped set of permissions, and no predefined role matches it. You want to define the role once and reuse it in all of these projects. What should you do?",
      "options": [
        "Create a custom role in one of the projects and grant it in the other projects",
        "Create a custom role at the organization level and grant it where it is needed",
        "Create a custom role on each folder and grant it on the projects beneath it",
        "Grant the Editor basic role and remove the unneeded permissions from it"
      ],
      "answer": "B",
      "explanation": "Custom roles can be created only at the organization or project level, not on folders. A custom role created in a project can be granted only within that project, while an organization-level custom role can be granted on any resource in the organization. Basic and predefined roles cannot be edited, so a custom role is how you get an exact set of permissions.",
      "topic": "Configuring access and security",
      "subtopic": "Managing IAM",
      "difficulty": "medium",
      "source": "ACE exam guide 4.1: Creating custom IAM roles; IAM docs, understanding IAM custom roles"
    }
  ]
}
```
