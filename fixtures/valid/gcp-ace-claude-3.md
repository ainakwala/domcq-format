```json
{
  "format": "domcq/1",
  "exam": "gcp-ace",
  "set": "Associate Cloud Engineer practice – Core services mix",
  "questions": [
    {
      "stem": "Your finance team wants to receive an email notification when actual spending on a project reaches 50%, 90%, and 100% of a planned monthly amount of $2,000. What should you do?",
      "options": [
        "Set a $2,000 cost quota for the project on the IAM & Admin Quotas page",
        "Create a log-based alerting policy on billing entries in Cloud Logging",
        "Create a Cloud Billing budget for the project with threshold rules at 50%, 90%, and 100%",
        "Enable billing export to BigQuery and schedule a daily query that emails results"
      ],
      "answer": "C",
      "explanation": "Cloud Billing budgets let you set a target amount scoped to specific projects or services and define threshold rules that send email alerts to billing administrators and users (and optionally to Monitoring notification channels or a Pub/Sub topic). Quotas limit resource usage, not money. Note that a budget only alerts; it does not cap spending unless you build an automated response, for example through Pub/Sub.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "easy",
      "source": "ACE exam guide: Managing billing configuration; Cloud Billing docs: Create, edit, or delete budgets and budget alerts"
    },
    {
      "stem": "Your company wants to analyze detailed Google Cloud costs by project, service, and label using SQL, and to build dashboards on the results. The cost data should be refreshed automatically throughout the day without manual downloads. What should you do?",
      "options": [
        "Enable Cloud Billing export of detailed usage cost data to a BigQuery dataset",
        "Download the monthly invoice each month and load it into a Cloud SQL database",
        "Create a budget for every project and collect the budget alert emails in a mailbox",
        "Open the Cost table report in the console each week and copy it into a spreadsheet"
      ],
      "answer": "A",
      "explanation": "Cloud Billing export to BigQuery automatically writes standard or detailed usage cost data to a dataset you choose, with updates throughout the day. Because it lands in BigQuery, you can query it with SQL by project, service, SKU, and label and connect tools such as Looker Studio for dashboards. Export only includes data from when it is enabled onward, so it should be turned on early.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "medium",
      "source": "ACE exam guide: Managing billing configuration (billing exports); Cloud Billing docs: Export Cloud Billing data to BigQuery"
    },
    {
      "stem": "Your organization's compliance policy requires that new resources in every project under the organization be created only in EU locations. You want to enforce this centrally, including for projects that will be created in the future. What should you do?",
      "options": [
        "Grant the Compute Admin role only to employees who are based in the EU",
        "Create a VPC network with subnets only in EU regions in every project",
        "Create a Cloud Billing budget that alerts when spending occurs outside the EU",
        "Set the resource locations organization policy constraint at the organization node to allow only EU locations"
      ],
      "answer": "D",
      "explanation": "The Organization Policy Service controls what configurations are allowed, while IAM controls who can act. The resource locations constraint (gcp.resourceLocations) set at the organization node is inherited by all folders and projects, including new ones, and blocks creation of supported resources outside the allowed locations. Restricting subnets would not stop services such as Cloud Storage from being created elsewhere, and budgets only alert.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Setting up cloud projects and accounts",
      "difficulty": "medium",
      "source": "ACE exam guide: Setting up cloud projects and accounts (organization policies); Resource Manager docs: Restricting resource locations"
    },
    {
      "stem": "A developer needs to link an existing project to your company's Cloud Billing account. Following the principle of least privilege, which TWO roles together give the developer the permissions required to do this? Choose TWO.",
      "options": [
        "Billing Account User on the Cloud Billing account",
        "Billing Account Viewer on the Cloud Billing account",
        "Billing Account Costs Manager on the Cloud Billing account",
        "Project Billing Manager on the project"
      ],
      "answer": "AD",
      "explanation": "Linking a project to a billing account needs permission on both resources: billing.resourceAssociations.create on the billing account, which Billing Account User grants, and resourcemanager.projects.createBillingAssignment on the project, which Project Billing Manager (or Owner) grants. Billing Account Viewer can only view cost information, and Billing Account Costs Manager manages budgets and cost exports but cannot associate projects with the account.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "hard",
      "source": "ACE exam guide: Managing billing configuration (linking projects to billing accounts); Cloud Billing docs: Access control and permissions"
    },
    {
      "stem": "You need to deploy a stateless containerized web API that receives unpredictable HTTP traffic, including long periods with no requests at all. You want to avoid managing servers or clusters, and you want to pay nothing for compute when there is no traffic. Which service should you use?",
      "options": [
        "A Compute Engine managed instance group with autoscaling",
        "Cloud Run",
        "A Google Kubernetes Engine Standard cluster",
        "App Engine flexible environment"
      ],
      "answer": "B",
      "explanation": "Cloud Run runs stateless containers on fully managed infrastructure and scales automatically with request volume, including down to zero instances when there is no traffic, so with request-based billing you pay nothing while idle. A GKE Standard cluster and a managed instance group both require you to manage nodes or VMs, and App Engine flexible keeps at least one instance running.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing compute resources",
      "difficulty": "easy",
      "source": "ACE exam guide: Planning and implementing compute resources (selecting compute options); Cloud Run docs: What is Cloud Run"
    },
    {
      "stem": "Your company must keep backup files in Cloud Storage for seven years to meet regulations. The files will very likely never be read, and if they ever are, retrieval costs are acceptable. You want the lowest possible storage cost. Which storage class should you use?",
      "options": [
        "Standard",
        "Nearline",
        "Coldline",
        "Archive"
      ],
      "answer": "D",
      "explanation": "Archive is the lowest-cost Cloud Storage class for data accessed less than once a year, with a 365-day minimum storage duration and higher retrieval charges. It suits long-term regulatory retention. Unlike some archival tape-style services, Archive data is still available with millisecond latency, so choosing it does not mean waiting hours for retrieval.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing storage and data solutions",
      "difficulty": "easy",
      "source": "ACE exam guide: Planning and implementing storage and data solutions (storage classes); Cloud Storage docs: Storage classes"
    },
    {
      "stem": "Your Compute Engine VMs in a private subnet have no external IP addresses for security reasons. They need to download operating system package updates from public repositories on the internet, but they must not be reachable by inbound connections initiated from the internet. What should you do?",
      "options": [
        "Configure Cloud NAT on a Cloud Router in the VMs' region",
        "Assign ephemeral external IP addresses and add a deny-all ingress firewall rule",
        "Enable Private Google Access on the subnet that contains the VMs",
        "Create a VPC Network Peering connection to the project's default network"
      ],
      "answer": "A",
      "explanation": "Cloud NAT lets VMs without external IP addresses make outbound connections to the internet and receive the responses, but it does not allow unsolicited inbound connections. It is a regional, software-defined service configured on a Cloud Router. Private Google Access only reaches Google APIs and services, not arbitrary internet repositories, and assigning external IPs breaks the stated requirement.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing networking resources",
      "difficulty": "medium",
      "source": "ACE exam guide: Planning and implementing networking resources (Cloud NAT); Cloud NAT docs: Cloud NAT overview"
    },
    {
      "stem": "You are choosing a database for a financial application used by customers on several continents. It needs a relational schema queried with SQL, strongly consistent transactions across regions, and the ability to scale horizontally far beyond a single machine. Which service should you choose?",
      "options": [
        "Cloud SQL for PostgreSQL",
        "Bigtable",
        "Spanner",
        "Firestore"
      ],
      "answer": "C",
      "explanation": "Spanner is a fully managed relational database that provides SQL, strongly consistent ACID transactions, and horizontal scaling across regions and continents in multi-region configurations. Cloud SQL is relational but scales mainly vertically within a region with read replicas. Bigtable is a wide-column NoSQL store without relational transactions, and Firestore is a document database.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide: Planning and implementing storage and data solutions (choosing database products); Spanner docs: Spanner overview"
    },
    {
      "stem": "Your platform team manages all workloads by applying Kubernetes manifests to GKE clusters. They want to create and manage Google Cloud resources, such as Cloud Storage buckets and Pub/Sub topics, by declaring them as Kubernetes resources in the same cluster and letting the cluster reconcile them. Which tool should they use?",
      "options": [
        "Terraform with configuration files stored in a Git repository",
        "Config Connector",
        "Cloud Build with gcloud commands in each build step",
        "Helm charts that run gcloud commands inside a Kubernetes Job"
      ],
      "answer": "B",
      "explanation": "Config Connector is a Kubernetes add-on that adds custom resource definitions for Google Cloud services, so resources such as buckets and topics can be declared as Kubernetes objects. Its controllers continuously reconcile the actual Google Cloud resources with the declared state. Terraform is also infrastructure as code, but it does not manage resources through the Kubernetes API.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing resources using tooling",
      "difficulty": "medium",
      "source": "ACE exam guide: Planning and implementing resources using tooling (Config Connector); Config Connector docs: Overview"
    },
    {
      "stem": "A subnet in your custom-mode VPC network uses the primary IPv4 range 10.0.0.0/24 and has run out of internal addresses. The larger range 10.0.0.0/22, which contains the current range, is not used by any other subnet or peered network. You want more addresses in this subnet without recreating it or stopping the VMs already in it. What should you do?",
      "options": [
        "Run gcloud compute networks subnets expand-ip-range with --prefix-length=22",
        "Run gcloud compute networks subnets update with a new --range of 10.0.4.0/22",
        "Delete the subnet and recreate it with the 10.0.0.0/22 primary range",
        "Convert the VPC network to auto mode so that it allocates additional ranges"
      ],
      "answer": "A",
      "explanation": "A subnet's primary IPv4 range can be expanded in place, without downtime, by reducing its prefix length with gcloud compute networks subnets expand-ip-range. The new range must contain the old one and must not overlap other subnets or peered ranges. Expansion cannot be undone or shrunk later, and a custom-mode network cannot be converted to auto mode.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing networking resources",
      "difficulty": "hard",
      "source": "ACE exam guide: Planning and implementing networking resources (subnets); VPC docs: Expand a primary IPv4 range of a subnet"
    },
    {
      "stem": "You manage a regional managed instance group (MIG) of web servers. You created a new instance template that uses an updated image, and you want to replace the existing instances gradually while keeping serving capacity available, without writing custom scripts. What should you do?",
      "options": [
        "Delete the MIG and create a new MIG from the new instance template",
        "Stop each VM and replace its boot disk with one created from the new image",
        "Set the autoscaler's minimum to zero, then raise it again after changing the template",
        "Start a rolling update on the MIG that targets the new instance template"
      ],
      "answer": "D",
      "explanation": "The MIG updater performs rolling updates, for example with gcloud compute instance-groups managed rolling-action start-update --version=template=NEW_TEMPLATE. Settings such as max surge and max unavailable control how many instances are replaced at once, so capacity is preserved during the change. You can also roll out a canary version to a subset of instances first.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing compute resources",
      "difficulty": "medium",
      "source": "ACE exam guide: Managing compute resources (managed instance groups); Compute Engine docs: Automatically apply VM configuration updates in a MIG"
    },
    {
      "stem": "Your single-zone GKE Standard cluster has a node pool named default-pool with three nodes. You need to increase this node pool to five nodes manually. Which command should you run?",
      "options": [
        "kubectl scale deployment default-pool --replicas=5",
        "gcloud container node-pools create default-pool --num-nodes=5",
        "gcloud container clusters resize CLUSTER_NAME --node-pool=default-pool --num-nodes=5",
        "gcloud compute instance-groups managed resize default-pool --size=5"
      ],
      "answer": "C",
      "explanation": "gcloud container clusters resize with --node-pool and --num-nodes changes the number of nodes in a GKE node pool. kubectl scale changes the number of Pod replicas in a workload, not nodes, and you should not resize the node pool's underlying instance group directly because GKE manages it. In multi-zonal or regional clusters, --num-nodes is the count per zone.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing compute resources",
      "difficulty": "easy",
      "source": "ACE exam guide: Managing compute resources (GKE node pools); GKE docs: Resize a cluster by adding or removing nodes"
    },
    {
      "stem": "Application logs are written as objects to a Cloud Storage bucket. They are rarely read after 30 days and are no longer needed after one year. You want to reduce storage costs automatically with minimal ongoing effort. What should you do?",
      "options": [
        "Write a scheduled Cloud Run job that moves objects older than 30 days to a second bucket",
        "Add lifecycle rules that change objects to Nearline at 30 days old and delete them at 365 days old",
        "Enable Object Versioning on the bucket so that older versions are removed automatically",
        "Set a 365-day retention policy on the bucket so that objects are deleted after one year"
      ],
      "answer": "B",
      "explanation": "Object Lifecycle Management applies rules to objects based on conditions such as age, with actions such as SetStorageClass and Delete, and Cloud Storage runs them for you. Moving rarely read data to Nearline lowers storage cost, and a Delete rule removes data once it is no longer needed. A retention policy does the opposite: it prevents deletion until the period ends rather than deleting objects.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing storage and data solutions",
      "difficulty": "easy",
      "source": "ACE exam guide: Managing storage and data solutions (Object Lifecycle Management); Cloud Storage docs: Object Lifecycle Management"
    },
    {
      "stem": "Your Compute Engine VMs have no external IP addresses. Administrators must connect to them over SSH using Identity-Aware Proxy (IAP) TCP forwarding. Which firewall rule must exist in the VPC network to allow these connections?",
      "options": [
        "Allow ingress on TCP port 22 from source range 35.235.240.0/20 to the VMs",
        "Allow ingress on TCP port 22 from source range 0.0.0.0/0 to the VMs",
        "Allow egress on TCP port 22 from the VMs to destination range 35.235.240.0/20",
        "Allow ingress on TCP port 443 from source range 130.211.0.0/22 to the VMs"
      ],
      "answer": "A",
      "explanation": "IAP TCP forwarding connects to your VMs from the IP range 35.235.240.0/20, so an ingress rule allowing TCP 22 from that range is needed for SSH. Allowing 0.0.0.0/0 would be unnecessarily broad, and 130.211.0.0/22 is a load balancer health-check range. Users also need IAM permission to use the tunnel, such as the IAP-secured Tunnel User role.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing networking resources",
      "difficulty": "medium",
      "source": "ACE exam guide: Managing networking resources (firewall rules); IAP docs: Using IAP for TCP forwarding"
    },
    {
      "stem": "You want to create Cloud Monitoring alerting policies based on the memory utilization of your Compute Engine VMs. In Cloud Monitoring you can see CPU utilization metrics for these VMs, but no memory utilization metrics. What should you do?",
      "options": [
        "Enable Data Access audit logs for the Compute Engine API",
        "Increase the metric data retention period in Cloud Monitoring",
        "Create a log-based metric from the VMs' serial port output",
        "Install the Ops Agent on the VMs"
      ],
      "answer": "D",
      "explanation": "Compute Engine reports hypervisor-level metrics such as CPU, disk, and network without any agent, but in-guest metrics such as memory utilization require an agent running inside the VM. The Ops Agent collects both system metrics and logs and sends them to Cloud Monitoring and Cloud Logging, after which you can build alerting policies on memory usage.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Monitoring and logging",
      "difficulty": "medium",
      "source": "ACE exam guide: Monitoring and logging (installing the Ops Agent); Cloud Monitoring docs: Ops Agent overview"
    },
    {
      "stem": "Your security team wants a record of which users read objects in a Cloud Storage bucket, and also of who changed the bucket's IAM policy. You plan to use Cloud Audit Logs. Which TWO statements are correct? Choose TWO.",
      "options": [
        "Object reads are recorded in Admin Activity audit logs, which are always enabled",
        "Changes to the bucket's IAM policy are recorded in Admin Activity audit logs, which are always enabled",
        "Object reads are recorded in Data Access audit logs, which you must explicitly enable for Cloud Storage",
        "Data Access audit logs are enabled by default for every service and cannot be disabled"
      ],
      "answer": "BC",
      "explanation": "Admin Activity audit logs record calls that change configuration or metadata, such as setting an IAM policy; they are always written and cannot be turned off. Data Access audit logs record calls that read data or metadata, such as reading objects, and for most services, including Cloud Storage, they are disabled by default (BigQuery is the main exception). You enable them through the audit logging configuration at the project, folder, or organization level, and they can generate a large, billable volume of logs.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Monitoring and logging",
      "difficulty": "hard",
      "source": "ACE exam guide: Monitoring and logging (Cloud Audit Logs); Cloud Logging docs: Cloud Audit Logs overview"
    },
    {
      "stem": "A data analyst needs to view and download objects in one Cloud Storage bucket named reports-bucket. The analyst must not be able to modify or delete objects, and must not be able to access other buckets in the project. What should you do?",
      "options": [
        "Grant the analyst the Viewer basic role on the project",
        "Grant the analyst the Storage Object Viewer role on the project",
        "Grant the analyst the Storage Object Viewer role on reports-bucket",
        "Grant the analyst the Storage Object Admin role on reports-bucket"
      ],
      "answer": "C",
      "explanation": "Least privilege means choosing the narrowest predefined role at the lowest resource level that meets the need. Storage Object Viewer allows listing and reading objects, and granting it on the bucket limits access to that bucket only. Granting it on the project would apply to every bucket, the Viewer basic role is broad across all services, and Storage Object Admin allows changes and deletion.",
      "topic": "Configuring access and security",
      "subtopic": "Managing IAM",
      "difficulty": "easy",
      "source": "ACE exam guide: Managing IAM (applying least privilege, predefined roles); Cloud Storage docs: IAM roles for Cloud Storage"
    },
    {
      "stem": "An application running on a Compute Engine VM must write files to a Cloud Storage bucket. Your security policy prohibits storing long-lived credentials on VMs. What should you do?",
      "options": [
        "Attach a user-managed service account to the VM and grant it a role that allows writing objects to the bucket",
        "Create a service account key, copy the JSON file to the VM, and set GOOGLE_APPLICATION_CREDENTIALS",
        "Allow allUsers to write to the bucket and restrict which networks can reach it with firewall rules",
        "Grant the Editor role on the project to the Compute Engine default service account"
      ],
      "answer": "A",
      "explanation": "When a service account is attached to a VM, Application Default Credentials obtain short-lived access tokens from the metadata server, so no key file is stored on the machine. Using a dedicated user-managed service account with a narrowly scoped role on the bucket follows least privilege. Downloaded keys are long-lived secrets, and Editor on the default service account is far broader than needed.",
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "medium",
      "source": "ACE exam guide: Managing service accounts (assigning service accounts to resources); IAM docs: Best practices for using service accounts"
    },
    {
      "stem": "A user was granted the Editor role on a folder. A project administrator for a project inside that folder wants to stop the user from modifying resources in that project, so the administrator removes all of the user's role bindings from the project's IAM allow policy. What is the result?",
      "options": [
        "The user loses Editor permissions in this project only",
        "The user loses Editor permissions in every project in the folder",
        "The user keeps read-only access but loses write access in the project",
        "The user can still modify resources in the project because the folder grant is inherited"
      ],
      "answer": "D",
      "explanation": "IAM allow policies are inherited down the resource hierarchy, and a resource's effective access is the union of its own policy and those of its ancestors. A role granted on a folder therefore applies to every project inside it and cannot be revoked by editing a project's allow policy. To remove it, change the binding at the folder level, or use an IAM deny policy to block specific permissions.",
      "topic": "Configuring access and security",
      "subtopic": "Managing IAM",
      "difficulty": "medium",
      "source": "ACE exam guide: Managing IAM (resource hierarchy and policy inheritance); IAM docs: Policy inheritance and the resource hierarchy"
    },
    {
      "stem": "A developer needs to run gcloud commands as the service account deployer@my-project.iam.gserviceaccount.com to test deployments, without ever downloading a service account key. Following the principle of least privilege, what should you do?",
      "options": [
        "Grant Service Account User on the project, then run gcloud auth activate-service-account",
        "Grant Service Account Token Creator on the deployer service account, then use --impersonate-service-account",
        "Grant Service Account Admin on the deployer service account, then create and use a key",
        "Grant Service Account Key Admin on the project, then download a key for the developer"
      ],
      "answer": "B",
      "explanation": "Service account impersonation lets a principal obtain short-lived credentials for a service account instead of using a key, and gcloud supports it with --impersonate-service-account. Generating those tokens requires the Service Account Token Creator role, and granting it on the single service account rather than the project limits its scope. Service Account User allows attaching a service account to resources, and gcloud auth activate-service-account requires a key file.",
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "hard",
      "source": "ACE exam guide: Managing service accounts (service account impersonation); IAM docs: Service account impersonation"
    }
  ]
}
```
