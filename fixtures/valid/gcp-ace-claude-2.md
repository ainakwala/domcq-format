```json
{
  "format": "domcq/1",
  "exam": "gcp-ace",
  "set": "Associate Cloud Engineer practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "You have just created a new Google Cloud project and need to allow Compute Engine resources to be created in it from the command line. Which command enables the Compute Engine API for the current project?",
      "options": [
        "gcloud apis enable compute.googleapis.com",
        "gcloud services enable compute.googleapis.com",
        "gcloud projects enable compute.googleapis.com",
        "gcloud config set api/compute enabled"
      ],
      "answer": "B",
      "explanation": "APIs are enabled per project through the Service Usage API, which gcloud exposes as the 'gcloud services' command group (enable, disable, list). Until an API is enabled in a project, you cannot create resources of that service there. The other command forms do not exist for enabling APIs, and gcloud config only changes local CLI settings.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Setting up cloud projects and accounts",
      "difficulty": "easy",
      "source": "ACE exam guide 1.1: Enabling APIs within projects"
    },
    {
      "stem": "Your team created a Cloud Billing budget on the billing account with alert threshold rules at 50%, 90% and 100% of the monthly budgeted amount, using the default notification settings. A manager asks what will happen when actual spend reaches 100% of the budget. What should you tell the manager?",
      "options": [
        "Billing is automatically disabled on every project linked to the billing account.",
        "Running Compute Engine instances are stopped, but stored data remains available.",
        "New resources are blocked from being created until the budget amount is increased.",
        "Billing account administrators and users get an email alert, and usage keeps being charged."
      ],
      "answer": "D",
      "explanation": "Budgets and budget alerts only notify; they do not cap or stop usage. By default, threshold emails go to Billing Account Administrators and Billing Account Users, and resources keep running and accruing charges. If you want an automatic response, you must set up programmatic notifications to Pub/Sub and act on them yourself, for example with a function that disables billing.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "medium",
      "source": "ACE exam guide 1.2: Setting up billing budgets and alerts; Cloud Billing docs: Create, edit, or delete budgets and budget alerts"
    },
    {
      "stem": "Your company's compliance team requires that all new resources in every project under the 'EU-Workloads' folder be created only in European Union locations. New projects are added to this folder regularly. What should you do?",
      "options": [
        "Set an organization policy using the resource locations constraint on the folder, allowing only EU locations.",
        "Add IAM conditions in each project that limit the project creators' roles to EU regions only.",
        "Set the default compute region to an EU region with gcloud config in each project.",
        "Create a Cloud Monitoring alert that notifies the team when a resource is created outside the EU."
      ],
      "answer": "A",
      "explanation": "The Organization Policy Service restricts how resources can be configured, and the resource locations constraint (gcp.resourceLocations) limits where location-based resources can be created. A policy set on a folder is inherited by every project in it, including projects added later, so it enforces the rule preventively. IAM controls who can act, gcloud defaults are only client-side conveniences, and an alert detects violations rather than preventing them.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Setting up cloud projects and accounts",
      "difficulty": "medium",
      "source": "ACE exam guide 1.1: Applying organizational policies to the resource hierarchy; Resource Manager docs: Restricting resource locations"
    },
    {
      "stem": "A developer must link a newly created project to your organization's existing Cloud Billing account. Following the principle of least privilege, which two roles should the developer have? Choose TWO.",
      "options": [
        "Billing Account User (roles/billing.user) on the Cloud Billing account",
        "Billing Account Viewer (roles/billing.viewer) on the Cloud Billing account",
        "Project Billing Manager (roles/billing.projectManager) on the project",
        "Billing Account Administrator (roles/billing.admin) on the organization"
      ],
      "answer": "AC",
      "explanation": "Linking a project to a billing account needs permission on both resources. Billing Account User on the billing account allows associating projects with it, and Project Billing Manager (or Owner) on the project allows changing the project's billing assignment. Billing Account Viewer can only read billing information, and Billing Account Administrator is far broader than the task requires.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "hard",
      "source": "ACE exam guide 1.2: Linking projects to a billing account; Cloud Billing docs: Overview of Cloud Billing access control"
    },
    {
      "stem": "You need to deploy a stateless, containerized HTTP API whose traffic is unpredictable and sometimes drops to zero for hours. The team wants no servers or clusters to manage and wants to pay nothing for compute while there are no requests. Which service should you choose?",
      "options": [
        "Compute Engine managed instance group",
        "Google Kubernetes Engine Standard cluster",
        "App Engine flexible environment",
        "Cloud Run service"
      ],
      "answer": "D",
      "explanation": "Cloud Run runs stateless containers on fully managed infrastructure and, with request-based billing, scales to zero instances when there is no traffic, so idle time costs nothing for compute. Managed instance groups and GKE Standard clusters require you to manage VMs or nodes that are billed while running. App Engine flexible environment always keeps at least one instance running, so it does not scale to zero.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing compute resources",
      "difficulty": "easy",
      "source": "ACE exam guide 2.1: Selecting appropriate compute choices for a given workload (e.g., Cloud Run, GKE, Compute Engine)"
    },
    {
      "stem": "You must store backup files in Cloud Storage. They are read roughly once every three months for restore tests and must be kept for at least a year. You want the lowest total cost that suits this access pattern. Which storage class should you use?",
      "options": [
        "Standard",
        "Nearline",
        "Coldline",
        "Archive"
      ],
      "answer": "C",
      "explanation": "Cloud Storage classes trade lower storage price for higher retrieval cost and longer minimum storage duration. Coldline is designed for data accessed at most about once a quarter and has a 90-day minimum storage duration. Nearline suits monthly access, while Archive suits data accessed less than once a year and would add higher retrieval charges for quarterly restores.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing storage and data solutions",
      "difficulty": "easy",
      "source": "ACE exam guide 2.2: Choosing Cloud Storage storage classes; Cloud Storage docs: Storage classes"
    },
    {
      "stem": "An online retailer needs a relational database for its order system that supports SQL and ACID transactions, provides strong consistency across regions, and can scale writes horizontally to serve customers on several continents. Which Google Cloud service best meets these requirements?",
      "options": [
        "Cloud SQL for PostgreSQL with cross-region read replicas",
        "Spanner with a multi-region instance configuration",
        "Bigtable with replication across several regions",
        "Firestore in Datastore mode in a multi-region location"
      ],
      "answer": "B",
      "explanation": "Spanner is a globally distributed relational database with SQL, ACID transactions and external consistency, and it scales horizontally by adding compute capacity. A multi-region configuration keeps strongly consistent data across regions. Cloud SQL scales writes only vertically on a single primary, Bigtable is a NoSQL wide-column store, and Firestore is a NoSQL document database.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide 2.2: Choosing data storage products (e.g., Cloud SQL, Spanner, Bigtable, Firestore)"
    },
    {
      "stem": "You created a custom mode VPC network with one subnet in us-central1 and another in europe-west1. VMs in each subnet have only internal IP addresses, and they cannot reach each other on TCP port 8080. What should you do to allow this traffic?",
      "options": [
        "Create a firewall rule in the VPC that allows ingress on TCP 8080 from the subnets' IP ranges.",
        "Create a Cloud VPN tunnel between the two regions so the subnets can exchange routes.",
        "Set up VPC Network Peering between the us-central1 subnet and the europe-west1 subnet.",
        "Configure Cloud NAT in both regions so the VMs can reach each other's internal addresses."
      ],
      "answer": "A",
      "explanation": "A VPC network is a global resource, and subnet routes are created automatically, so VMs in different regions of the same VPC can already route to each other over internal IPs. A custom mode network has no pre-populated allow rules, and the implied deny-ingress rule blocks the traffic until you add an ingress allow rule. VPN and peering connect separate networks, not subnets of one network, and Cloud NAT is for outbound internet access.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing networking resources",
      "difficulty": "medium",
      "source": "ACE exam guide 2.3: Creating a VPC with subnets; creating ingress and egress firewall rules"
    },
    {
      "stem": "Compute Engine VMs in a subnet have no external IP addresses, and security policy forbids giving them general internet access. An application on these VMs must upload files to Cloud Storage using the public Google API endpoints. What should you configure?",
      "options": [
        "Assign external IP addresses to the VMs and restrict egress with firewall rules.",
        "Create a Cloud NAT gateway for the region that contains the subnet.",
        "Create a VPC Network Peering connection to the Cloud Storage service network.",
        "Enable Private Google Access on the subnet that the VMs use."
      ],
      "answer": "D",
      "explanation": "Private Google Access is a per-subnet setting that lets VMs with only internal IP addresses reach Google APIs and services such as Cloud Storage. It does not give them access to the wider internet, so it satisfies the security policy. Cloud NAT and external IPs provide general internet egress, and Cloud Storage is not reached through VPC Network Peering.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing networking resources",
      "difficulty": "medium",
      "source": "ACE exam guide 2.3: Planning and implementing networking resources; VPC docs: Private Google Access"
    },
    {
      "stem": "Your platform team already manages applications on a GKE cluster with kubectl and YAML manifests. They want to create and manage Google Cloud resources such as Pub/Sub topics and Cloud Storage buckets the same way, declared as Kubernetes resources and continuously reconciled. Which tool should they use?",
      "options": [
        "Cloud Deployment Manager templates",
        "gcloud scripts run from Cloud Shell",
        "Config Connector add-on for GKE",
        "Cloud Build triggers on each commit"
      ],
      "answer": "C",
      "explanation": "Config Connector is a Kubernetes add-on that adds custom resource definitions for Google Cloud resources, so teams can declare buckets, topics and other resources in YAML and apply them with kubectl. Its controllers continuously reconcile the real resources with the declared state. Deployment Manager and gcloud scripts are not Kubernetes-native, and Cloud Build triggers only run build steps rather than reconciling resources.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing resources using tooling",
      "difficulty": "medium",
      "source": "ACE exam guide 2.4: Infrastructure as code tooling (e.g., Cloud Foundation Toolkit, Config Connector, Terraform, Helm)"
    },
    {
      "stem": "You run a Cloud Run service named 'checkout'. You want to deploy a new revision and initially send it only 10% of requests while the current revision keeps the remaining 90%. Which approach should you use?",
      "options": [
        "Deploy the new image normally, then lower the service's maximum instances to 10% of the old value.",
        "Deploy the new revision with --no-traffic, then use gcloud run services update-traffic to give it 10%.",
        "Deploy the new image as a separate service and point a DNS record with a 10% weight at it.",
        "Deploy the new revision with --min-instances=1 so that it automatically gets a 10% traffic share."
      ],
      "answer": "B",
      "explanation": "Cloud Run splits traffic between revisions of a service by percentage. Deploying with --no-traffic creates the new revision without moving any requests to it, and update-traffic then assigns the chosen percentages, which supports gradual rollouts and quick rollbacks. Instance limits and minimum instances control capacity, not traffic routing.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing compute resources",
      "difficulty": "medium",
      "source": "ACE exam guide 3.1: Managing Cloud Run resources (e.g., adjusting traffic splitting); Cloud Run docs: Rollbacks, gradual rollouts, and traffic migration"
    },
    {
      "stem": "A Cloud Storage bucket receives application log files every day. Files older than 365 days are no longer needed and must be removed automatically with the least operational overhead. What should you do?",
      "options": [
        "Add an Object Lifecycle Management rule with a Delete action and an age condition of 365 days.",
        "Enable Object Versioning on the bucket so that object versions are removed after 365 days.",
        "Set a 365-day retention policy on the bucket so that objects are deleted when it expires.",
        "Run a daily cron job on a Compute Engine VM that deletes files older than 365 days."
      ],
      "answer": "A",
      "explanation": "Object Lifecycle Management lets you attach rules to a bucket that Cloud Storage applies automatically, such as deleting objects or changing their storage class once they reach a given age. Nothing needs to be run or maintained. A retention policy does the opposite: it prevents deletion until the period ends but never deletes anything, and Object Versioning keeps older versions rather than removing them.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing storage and data solutions",
      "difficulty": "easy",
      "source": "ACE exam guide 3.2: Setting object lifecycle management policies for Cloud Storage buckets"
    },
    {
      "stem": "Before running a large BigQuery query billed with on-demand pricing, you want to estimate how much it will cost without actually executing it and without incurring query charges. What should you do?",
      "options": [
        "Run the query with a LIMIT 10 clause and check the bytes billed in the job details.",
        "Preview the table in the console and multiply the preview's size by the total row count.",
        "Export the table to Cloud Storage and check the total size of the exported files.",
        "Run the query with the bq command-line tool using the --dry_run flag to see bytes processed."
      ],
      "answer": "D",
      "explanation": "On-demand BigQuery queries are charged by bytes processed. A dry run (bq query --dry_run, or the query validator in the console) returns the bytes the query would process without running it and at no charge, and you can price that figure with the Pricing Calculator. Adding LIMIT does not reduce the data scanned, so it still costs as much as the full query.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide 3.2: Estimating costs of data storage resources and queries; BigQuery docs: Estimate and control costs"
    },
    {
      "stem": "A subnet with the primary IPv4 range 10.10.0.0/24 is running out of IP addresses for new VMs. You must add capacity without deleting or recreating any existing VMs. What should you do?",
      "options": [
        "Delete the subnet, recreate it with a /20 range, and restore the VMs from snapshots.",
        "Edit the subnet and change its primary range to a different /24 such as 10.20.0.0/24.",
        "Expand the primary range with gcloud compute networks subnets expand-ip-range to a /22.",
        "Create a VPC Network Peering connection that adds a second primary range to the subnet."
      ],
      "answer": "C",
      "explanation": "You can expand a subnet's primary IPv4 range in place by giving it a shorter prefix length, and existing VMs keep running with their current addresses. The expanded range must not overlap other ranges in the network. A range can only be expanded, not shrunk or moved to a different base address, and peering connects networks rather than adding ranges to a subnet.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing networking resources",
      "difficulty": "medium",
      "source": "ACE exam guide 3.3: Adding a subnet to an existing VPC; expanding a subnet to have more IP addresses"
    },
    {
      "stem": "Your security team wants all audit logs from every project in your organization, including projects created in the future, routed into a single BigQuery dataset in a central project. You want only one configuration to manage. Which two actions should you take? Choose TWO.",
      "options": [
        "Create a log sink in each existing project, and add a sink to every new project when it is created.",
        "Create an aggregated sink at the organization level with include-children, an audit log filter and the dataset as destination.",
        "Grant the security team the Logs Viewer role on the organization so the logs are written to BigQuery.",
        "Grant the sink's writer identity service account the BigQuery Data Editor role on the destination dataset."
      ],
      "answer": "BD",
      "explanation": "An aggregated sink created at the organization (or folder) level with the include-children option routes matching logs from all child projects, including ones created later. Each sink writes with its own writer identity, a service account that must be granted permission on the destination, which for BigQuery means BigQuery Data Editor on the dataset. Per-project sinks are many configurations to maintain, and Logs Viewer only lets people read logs.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Monitoring and logging",
      "difficulty": "hard",
      "source": "ACE exam guide 3.4: Configuring log routers and exporting logs to external systems; Cloud Logging docs: Aggregated sinks"
    },
    {
      "stem": "You need Cloud Monitoring charts of memory utilization and disk space usage from inside your Compute Engine Linux VMs. The default VM metrics show CPU and network data but no memory utilization. What should you do?",
      "options": [
        "Enable Data Access audit logs for Compute Engine.",
        "Install the Ops Agent on each of the VMs.",
        "Turn on VPC Flow Logs for the VMs' subnets.",
        "Grant the VMs the Monitoring Viewer role."
      ],
      "answer": "B",
      "explanation": "The metrics Compute Engine reports by default come from the hypervisor, which cannot see guest-level figures such as memory and disk usage. The Ops Agent runs inside the VM and collects guest OS metrics and logs for Cloud Monitoring and Cloud Logging. Audit logs and flow logs record API activity and network flows, and Monitoring Viewer only grants read access.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Monitoring and logging",
      "difficulty": "easy",
      "source": "ACE exam guide 3.4: Deploying and managing the Ops Agent to collect logs and metrics"
    },
    {
      "stem": "An analyst needs to read and download objects in one specific Cloud Storage bucket, but must not be able to upload, delete or change objects, or read objects in any other bucket in the project. Following the principle of least privilege, what should you grant?",
      "options": [
        "Storage Object Viewer (roles/storage.objectViewer) on that bucket",
        "Viewer (roles/viewer) basic role on the whole project",
        "Storage Object Admin (roles/storage.objectAdmin) on that bucket",
        "Storage Object Viewer (roles/storage.objectViewer) on the project"
      ],
      "answer": "A",
      "explanation": "Least privilege means choosing the narrowest predefined role at the lowest resource level that still does the job. Storage Object Viewer grants read and list access to objects, and granting it on the bucket keeps it from extending to other buckets. Granting it on the project would cover every bucket, Storage Object Admin allows changes and deletion, and basic roles are too broad for production use.",
      "topic": "Configuring access and security",
      "subtopic": "Managing IAM",
      "difficulty": "easy",
      "source": "ACE exam guide 4.1: Managing IAM role assignments; basic, predefined and custom roles; Cloud Storage docs: IAM roles for Cloud Storage"
    },
    {
      "stem": "A contractor has the Editor role granted on a folder that contains ten projects. Security now requires that the contractor must not be able to delete Compute Engine instances in one of those projects, while all other access stays the same. The folder-level grant must not be changed. What should you do?",
      "options": [
        "Remove the Editor role from the contractor in that project's IAM allow policy.",
        "Grant the contractor the Compute Viewer role on the project to override Editor.",
        "Attach an IAM deny policy to the project that denies the instance delete permission to the contractor.",
        "Apply an organization policy constraint to the project that blocks the contractor's account."
      ],
      "answer": "C",
      "explanation": "IAM allow policies are inherited down the resource hierarchy and are additive, so the effective access is the union of all grants. The project holds no Editor binding to remove, and adding a lesser role cannot take away inherited permissions. IAM deny policies are checked before allow policies and can block specific permissions for specific principals at the organization, folder or project level; organization policies constrain resource configuration, not what a principal may do.",
      "topic": "Configuring access and security",
      "subtopic": "Managing IAM",
      "difficulty": "hard",
      "source": "ACE exam guide 4.1: Managing IAM; IAM docs: Policy inheritance and Deny policies"
    },
    {
      "stem": "An application running on a Compute Engine VM needs to pull messages from a Pub/Sub subscription. You want to follow Google-recommended practices for authentication and avoid managing long-lived credentials. What should you do?",
      "options": [
        "Create a service account key, store the JSON file on the VM, and point GOOGLE_APPLICATION_CREDENTIALS to it.",
        "Run gcloud auth login on the VM with a developer's user account and let the application reuse those credentials.",
        "Use the Compute Engine default service account with the Editor role and the full cloud-platform access scope.",
        "Attach a dedicated service account with the Pub/Sub Subscriber role to the VM and use Application Default Credentials."
      ],
      "answer": "D",
      "explanation": "Workloads on Google Cloud should run as an attached service account; the metadata server then supplies short-lived tokens that Application Default Credentials picks up automatically, so no key file exists to leak or rotate. A dedicated service account with only the role it needs follows least privilege. Downloaded keys are long-lived secrets, user credentials tie the app to a person, and the default service account with Editor is far too broad.",
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "medium",
      "source": "ACE exam guide 4.2: Creating service accounts; assigning service accounts to resources; minimum permissions"
    },
    {
      "stem": "A developer needs to run gcloud commands temporarily as the service account deploy-sa@my-project.iam.gserviceaccount.com to test its permissions. Your organization forbids creating service account keys. Which two steps should you take? Choose TWO.",
      "options": [
        "Grant the developer the Service Account User role (roles/iam.serviceAccountUser) on deploy-sa.",
        "Grant the developer the Service Account Token Creator role (roles/iam.serviceAccountTokenCreator) on deploy-sa.",
        "Have the developer run gcloud commands with the --impersonate-service-account flag set to deploy-sa.",
        "Have the developer run gcloud auth activate-service-account with the deploy-sa email address."
      ],
      "answer": "BC",
      "explanation": "Service account impersonation lets a principal obtain short-lived credentials for a service account without any key. It requires the Service Account Token Creator role on that service account, and gcloud uses it through the --impersonate-service-account flag or the auth/impersonate_service_account property. Service Account User only allows attaching the service account to resources (actAs), not minting its tokens, and activate-service-account needs a key file.",
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "hard",
      "source": "ACE exam guide 4.2: Using service account impersonation; IAM docs: Service account impersonation"
    }
  ]
}
```
