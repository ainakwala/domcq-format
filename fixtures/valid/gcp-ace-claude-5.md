```json
{
  "format": "domcq/1",
  "exam": "gcp-ace",
  "set": "Associate Cloud Engineer practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "Your team has just created a new Google Cloud project and needs to create Compute Engine VM instances in it by using the gcloud CLI. The Compute Engine API has never been used in this project. What should you do first?",
      "options": [
        "Run gcloud components install compute to add the Compute Engine API to the project.",
        "Run gcloud config set project with the project ID to activate the Compute Engine API.",
        "Run gcloud services enable compute.googleapis.com with the new project selected.",
        "Run gcloud projects update with an --enable-api flag set to the value compute."
      ],
      "answer": "C",
      "explanation": "Most Google Cloud APIs must be enabled per project before you can use them, and gcloud services enable is the command that enables a service such as compute.googleapis.com. Installing gcloud components only changes your local CLI tooling, and setting the active project only changes which project later commands target; neither enables an API.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Setting up cloud projects and accounts",
      "difficulty": "easy",
      "source": "ACE exam guide, Section 1.1: Enabling APIs within projects"
    },
    {
      "stem": "The finance team wants to receive an email when actual spending on your Cloud Billing account reaches 80% of a planned monthly amount of $5,000. Workloads must not be stopped or limited automatically. What should you do?",
      "options": [
        "Create a budget on the Cloud Billing account for $5,000 with an alert threshold rule at 80%.",
        "Set Compute Engine quota limits in each project so usage stops at 80% of $5,000.",
        "Create a Cloud Monitoring uptime check that emails the finance team when costs reach $4,000.",
        "Apply an organization policy constraint that caps monthly project spending at $4,000."
      ],
      "answer": "A",
      "explanation": "Cloud Billing budgets let you set a target amount and threshold rules (such as 80% of actual spend) that trigger email notifications, and they can also notify Cloud Monitoring channels or Pub/Sub. Budgets only alert; they do not cap or stop spending, which matches the requirement. Quotas limit resource usage rather than cost, and there is no organization policy constraint that caps spending.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "medium",
      "source": "ACE exam guide, Section 1.2: Setting up billing budgets and alerts"
    },
    {
      "stem": "Your organization has dozens of projects that belong to the research department. Compliance requires that resources in all current and future research projects be created only in European Union locations, while projects of other departments must remain unrestricted. You want to minimize ongoing administrative effort. What should you do?",
      "options": [
        "Set the gcp.resourceLocations organization policy constraint on each research project.",
        "Set the gcp.resourceLocations organization policy constraint at the organization node.",
        "Create a custom IAM role without location permissions and grant it to the research team.",
        "Place the research projects in a folder and set the gcp.resourceLocations constraint on it."
      ],
      "answer": "D",
      "explanation": "Organization policies are inherited down the resource hierarchy, so setting the resource locations constraint on a folder applies it to every project in that folder, including projects added later. Setting it at the organization node would also restrict other departments, and setting it per project requires repeated work for each new project. IAM roles control who can act, not where resources may be located.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Setting up cloud projects and accounts",
      "difficulty": "medium",
      "source": "ACE exam guide, Section 1.1: Resource hierarchy and applying organizational policies"
    },
    {
      "stem": "A finance analyst must be able to link existing projects to your organization's Cloud Billing account. You want to follow the principle of least privilege. Which two roles should you grant to the analyst? Choose TWO.",
      "options": [
        "Billing Account Viewer (roles/billing.viewer) on the Cloud Billing account",
        "Billing Account User (roles/billing.user) on the Cloud Billing account",
        "Billing Account Costs Manager (roles/billing.costsManager) on the Cloud Billing account",
        "Project Billing Manager (roles/billing.projectManager) on the projects to be linked"
      ],
      "answer": "BD",
      "explanation": "Linking a project to a billing account needs permissions on both sides: billing.resourceAssociations.create on the billing account, which Billing Account User grants, and resourcemanager.projects.createBillingAssignment on the project, which Project Billing Manager grants. Billing Account Viewer only views billing information, and Billing Account Costs Manager manages budgets and cost data but cannot associate projects with the account.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "hard",
      "source": "ACE exam guide, Section 1.2: Linking projects to a billing account; Cloud Billing IAM roles"
    },
    {
      "stem": "You need to deploy a stateless containerized HTTP service. Traffic is unpredictable, with long periods when there are no requests at all. You want the service to scale to zero when idle, and you do not want to manage clusters or servers. Which Google Cloud product should you use?",
      "options": [
        "Google Kubernetes Engine Standard cluster",
        "Cloud Run",
        "App Engine flexible environment",
        "Compute Engine managed instance group"
      ],
      "answer": "B",
      "explanation": "Cloud Run is a fully managed serverless platform for containers that scales automatically with request load, including down to zero instances, so you pay nothing for compute while idle. GKE Standard requires managing node pools, App Engine flexible keeps at least one instance running, and a managed instance group requires managing VMs.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing compute resources",
      "difficulty": "easy",
      "source": "ACE exam guide, Section 2.1: Selecting appropriate compute choices (Cloud Run)"
    },
    {
      "stem": "You run a nightly batch job on Compute Engine that processes images for about three hours. The job saves checkpoints frequently and can be restarted at any time without losing completed work. You want to minimize compute cost. What should you do?",
      "options": [
        "Run the job on Spot VMs in a managed instance group.",
        "Purchase a three-year committed use discount for the VMs.",
        "Run the job on sole-tenant nodes reserved for your project.",
        "Create a zonal reservation so the VMs are always available."
      ],
      "answer": "A",
      "explanation": "Spot VMs are offered at a large discount compared with standard VMs in exchange for the possibility of preemption, which suits fault-tolerant, restartable batch work; a managed instance group can recreate preempted instances. A committed use discount charges for the committed resources around the clock, which is wasteful for a short nightly job, while sole-tenant nodes and reservations add cost rather than reduce it.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing compute resources",
      "difficulty": "medium",
      "source": "ACE exam guide, Section 2.1: Using Spot VM instances"
    },
    {
      "stem": "Your company keeps backup files in Cloud Storage. The files are read about once every three months during restore tests and are otherwise left untouched. You want to use the Google-recommended storage class for this access pattern. Which storage class should you use?",
      "options": [
        "Standard storage",
        "Nearline storage",
        "Coldline storage",
        "Archive storage"
      ],
      "answer": "C",
      "explanation": "Coldline storage is designed for data accessed at most about once a quarter, and it has a 90-day minimum storage duration. Nearline targets data read about once a month (30-day minimum), and Archive targets data read less than once a year (365-day minimum) with higher retrieval costs. Standard is for frequently accessed data and has the highest storage price of the four.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide, Section 2.2: Choosing Cloud Storage classes"
    },
    {
      "stem": "You are designing the database for a global financial application. It needs a relational schema with SQL queries, strongly consistent transactions, and horizontal scaling across multiple regions with high availability. Which Google Cloud product should you use?",
      "options": [
        "Cloud SQL for PostgreSQL",
        "Bigtable",
        "Firestore",
        "Spanner"
      ],
      "answer": "D",
      "explanation": "Spanner is a fully managed relational database that provides SQL, strongly consistent ACID transactions and horizontal scaling, with multi-region configurations for high availability. Cloud SQL is relational but scales mainly vertically within a region, Bigtable is a wide-column NoSQL database, and Firestore is a NoSQL document database.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing storage and data solutions",
      "difficulty": "easy",
      "source": "ACE exam guide, Section 2.2: Data solutions (Spanner, Cloud SQL, Bigtable, Firestore)"
    },
    {
      "stem": "Your Compute Engine VMs in the us-central1 region have only internal IP addresses. They must download operating system updates from public internet repositories, but they must not accept connections initiated from the internet. What should you do?",
      "options": [
        "Enable Private Google Access on the subnet used by the VMs.",
        "Configure Cloud NAT on a Cloud Router in the us-central1 region.",
        "Assign an ephemeral external IP address to each of the VMs.",
        "Create a VPC Network Peering connection to a public VPC network."
      ],
      "answer": "B",
      "explanation": "Cloud NAT gives VMs without external IP addresses outbound access to the internet while not allowing unsolicited inbound connections; it is configured on a Cloud Router in the same region as the subnets it serves. Private Google Access only reaches Google APIs and services, not arbitrary internet repositories, and external IP addresses would expose the VMs. VPC Network Peering connects VPC networks privately and provides no internet egress.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing networking resources",
      "difficulty": "medium",
      "source": "ACE exam guide, Section 2.3: Cloud NAT and Cloud Router"
    },
    {
      "stem": "Your platform team manages applications on a GKE cluster by applying Kubernetes manifests through a GitOps workflow. They want to create and manage Google Cloud resources, such as Cloud Storage buckets and Pub/Sub topics, declaratively with the same Kubernetes YAML tooling. What should you use?",
      "options": [
        "gcloud commands run from shell scripts in Cloud Shell",
        "Kubernetes ConfigMaps that store resource definitions",
        "Config Connector installed on the GKE cluster",
        "Cloud Scheduler jobs that call the Google Cloud APIs"
      ],
      "answer": "C",
      "explanation": "Config Connector is a Kubernetes add-on that represents Google Cloud resources as Kubernetes custom resources, so you can create and reconcile them by applying YAML manifests just like application workloads. ConfigMaps only store configuration data for pods and do not create cloud resources, while scripts and scheduled API calls are imperative rather than declarative.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing resources using tooling",
      "difficulty": "medium",
      "source": "ACE exam guide, Section 2.4: Infrastructure as code tooling (Config Connector, Terraform)"
    },
    {
      "stem": "Your GKE Standard cluster named prod-cluster has a node pool named default-pool with 3 nodes. Autoscaling is not enabled. You need to change the node pool to exactly 5 nodes now. Which command should you run?",
      "options": [
        "gcloud container clusters resize prod-cluster --node-pool=default-pool --num-nodes=5",
        "kubectl scale deployment prod-cluster --replicas=5",
        "gcloud container clusters create prod-cluster --node-pool=default-pool --num-nodes=5",
        "kubectl autoscale deployment default-pool --min=5 --max=5"
      ],
      "answer": "A",
      "explanation": "Nodes are Google Cloud infrastructure managed through GKE, so the node count of a node pool is changed with gcloud container clusters resize and the --num-nodes flag. kubectl scale and kubectl autoscale change the number of pod replicas of a workload, not the number of nodes, and clusters create would try to create a new cluster.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing compute resources",
      "difficulty": "easy",
      "source": "ACE exam guide, Section 3.1: Managing GKE node pools"
    },
    {
      "stem": "A Cloud Storage bucket uses the Standard storage class. Objects are read frequently during their first 30 days and rarely afterward. You want each object to move automatically to Nearline storage 30 days after it was created, without writing or running any code. What should you do?",
      "options": [
        "Write a Cloud Run job that rewrites older objects to Nearline every day.",
        "Change the default storage class of the bucket to Nearline now.",
        "Enable Object Versioning and set a 30-day retention policy on the bucket.",
        "Add a lifecycle rule with a SetStorageClass action to Nearline and an Age of 30."
      ],
      "answer": "D",
      "explanation": "Object Lifecycle Management applies rules automatically: a SetStorageClass action with an Age condition of 30 days moves each object to Nearline once it is 30 days old. Changing the default storage class only affects objects written afterward, and a retention policy prevents deletion rather than changing storage class. A scheduled job would work but requires code.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide, Section 3.2: Setting object lifecycle management policies for Cloud Storage buckets"
    },
    {
      "stem": "You manage a regional managed instance group (MIG) spread across three zones that serves production web traffic. You created a new instance template that uses an updated image. You must apply the new template to all existing instances without the number of serving instances ever dropping below the current target size. What should you do?",
      "options": [
        "Set the new instance template on the group, and then recreate all instances at the same time.",
        "Run a rolling update with the new template, setting max surge to 3 and max unavailable to 0.",
        "Run a rolling update with the new template, setting max surge to 0 and max unavailable to 3.",
        "Delete the managed instance group, and then create a new group from the new template."
      ],
      "answer": "B",
      "explanation": "A rolling update with max unavailable set to 0 never takes an instance out of service before its replacement is ready, while max surge lets the MIG create extra instances above the target size during the update. For a regional MIG, a fixed max surge must be either 0 or at least the number of zones, so 3 is valid here. The other choices all remove serving instances during the rollout.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing compute resources",
      "difficulty": "hard",
      "source": "ACE exam guide, Section 3.1: Managing instance groups; Compute Engine docs: Rolling updates of MIGs"
    },
    {
      "stem": "Your Compute Engine VMs have no external IP addresses. Administrators connect to them over SSH by using Identity-Aware Proxy (IAP) TCP forwarding. You need to create an ingress VPC firewall rule that permits only this SSH traffic. Which rule should you create?",
      "options": [
        "Allow TCP port 22 from source range 0.0.0.0/0",
        "Allow TCP port 22 from source range 130.211.0.0/22",
        "Allow TCP port 22 from source range 35.235.240.0/20",
        "Allow TCP port 3389 from source range 35.235.240.0/20"
      ],
      "answer": "C",
      "explanation": "IAP TCP forwarding connects to your VMs from the IP range 35.235.240.0/20, so allowing TCP port 22 from that range permits SSH through IAP and nothing else from outside. 0.0.0.0/0 would allow SSH from any source, 130.211.0.0/22 is a range used by Google Cloud load balancer health checks, and port 3389 is used for RDP rather than SSH.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing networking resources",
      "difficulty": "medium",
      "source": "ACE exam guide, Section 3.3: Managing VPC firewall rules; IAP TCP forwarding"
    },
    {
      "stem": "You want to be notified by email when the CPU utilization of any Compute Engine VM in a production project stays above 80% for 10 minutes. You want to use a managed Google Cloud service with minimal setup. What should you do?",
      "options": [
        "Create a Cloud Monitoring alerting policy on CPU utilization with an email notification channel.",
        "Create a Cloud Logging sink that routes VM system logs to a Pub/Sub topic for email delivery.",
        "Install a cron job on each VM that checks CPU usage and sends email through an SMTP relay.",
        "Create a Cloud Monitoring uptime check that tests the CPU of each VM every 10 minutes."
      ],
      "answer": "A",
      "explanation": "Cloud Monitoring collects CPU utilization metrics for Compute Engine VMs, and an alerting policy can evaluate a metric threshold over a duration and send notifications through channels such as email. Uptime checks test whether an endpoint responds, not resource metrics, and log sinks or custom scripts add work without providing metric-based alerting.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Monitoring and logging",
      "difficulty": "easy",
      "source": "ACE exam guide, Section 3.4: Creating Cloud Monitoring alerts based on resource metrics"
    },
    {
      "stem": "Your security team needs all Cloud Audit Logs from every project in your organization, including projects created in the future, to be routed to a single BigQuery dataset in a central security project. You want to minimize administrative effort. What should you do?",
      "options": [
        "Create a log sink in each existing project that routes audit logs to the BigQuery dataset.",
        "Grant the security team the Logs Viewer role at the organization and query each project.",
        "Create an organization-level sink without the include-children option to the dataset.",
        "Create an organization-level sink with include-children to the dataset and authorize its writer identity."
      ],
      "answer": "D",
      "explanation": "An aggregated sink created at the organization level with the include-children option routes matching logs from all folders and projects below it, including ones created later. Because the destination dataset is in another project, the sink's writer identity must be granted permission to write to it, such as BigQuery Data Editor on the dataset. Without include-children the sink only captures logs of the organization resource itself, and per-project sinks miss new projects.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Monitoring and logging",
      "difficulty": "hard",
      "source": "ACE exam guide, Section 3.4: Configuring log routers and sinks; Cloud Logging docs: Aggregated sinks"
    },
    {
      "stem": "A data analyst needs to read objects in a single Cloud Storage bucket named sales-reports. The analyst must not be able to modify or delete objects, or access any other bucket in the project. You want to follow the principle of least privilege. What should you do?",
      "options": [
        "Grant the analyst the Viewer basic role on the project.",
        "Grant the analyst the Storage Object Viewer role on the sales-reports bucket.",
        "Grant the analyst the Storage Object Viewer role on the project.",
        "Grant the analyst the Storage Admin role on the sales-reports bucket."
      ],
      "answer": "B",
      "explanation": "Least privilege means granting the narrowest role at the lowest resource level that meets the need. Storage Object Viewer allows listing and reading objects, and granting it on the bucket limits it to that bucket only. Granting it on the project would expose every bucket, the Viewer basic role is broad across many services, and Storage Admin allows modification and deletion.",
      "topic": "Configuring access and security",
      "subtopic": "Managing IAM",
      "difficulty": "easy",
      "source": "ACE exam guide, Section 4.1: Assigning IAM roles; Cloud Storage IAM roles"
    },
    {
      "stem": "An application running on a Compute Engine VM must write files to a Cloud Storage bucket. You want to follow Google-recommended practices for authenticating the application to Google Cloud. What should you do?",
      "options": [
        "Create a service account key, store the JSON file on the VM, and point the application to it.",
        "Attach the Compute Engine default service account to the VM and grant it the Editor role.",
        "Create a dedicated service account with only the needed Storage role and attach it to the VM.",
        "Sign in on the VM with gcloud auth login by using a project owner's user account credentials."
      ],
      "answer": "C",
      "explanation": "Attaching a user-managed service account to the VM lets the application obtain short-lived credentials automatically from the metadata server through Application Default Credentials, with no key file to leak or rotate. Giving that account only the required Storage role follows least privilege. The default service account with Editor is overly broad, and downloaded keys or personal user credentials are discouraged.",
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "medium",
      "source": "ACE exam guide, Section 4.2: Creating service accounts and attaching them to resources"
    },
    {
      "stem": "A developer occasionally needs to run gcloud commands as the deploy-sa service account to test deployments. Security policy prohibits creating service account keys. You want to follow the principle of least privilege. Which two actions should you take? Choose TWO.",
      "options": [
        "Grant the developer the Service Account Token Creator role on the deploy-sa service account.",
        "Grant the developer the Service Account Key Admin role on the deploy-sa service account.",
        "Have the developer run the gcloud commands with the --impersonate-service-account flag.",
        "Have the developer run gcloud auth activate-service-account with a downloaded key file."
      ],
      "answer": "AC",
      "explanation": "Service account impersonation lets a user obtain short-lived credentials for a service account without any key. The Service Account Token Creator role on that specific service account grants the permission to generate those access tokens, and gcloud uses it when you pass --impersonate-service-account. Key Admin and activate-service-account both depend on creating and using keys, which the policy forbids.",
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "hard",
      "source": "ACE exam guide, Section 4.2: Using service account impersonation; short-lived service account credentials"
    },
    {
      "stem": "Your security team has identified the exact five IAM permissions a support team needs in a project. Every predefined role that contains all five also contains permissions the support team must not have. You want to follow the principle of least privilege. What should you do?",
      "options": [
        "Grant the Viewer basic role on the project and ask the team to avoid other actions.",
        "Grant the broader predefined role and review its use regularly with Cloud Audit Logs.",
        "Grant the Editor basic role with an IAM condition that limits how long it is valid.",
        "Create a custom role with only the five permissions and grant it to the team's group."
      ],
      "answer": "D",
      "explanation": "When no predefined role matches the required permissions closely enough, a custom role lets you bundle exactly the permissions needed and nothing more. Granting it to a Google group rather than to individuals makes access easier to manage as team membership changes. Basic roles are very broad, and auditing or time limits do not remove unnecessary permissions.",
      "topic": "Configuring access and security",
      "subtopic": "Managing IAM",
      "difficulty": "medium",
      "source": "ACE exam guide, Section 4.1: Creating custom IAM roles"
    }
  ]
}
```
