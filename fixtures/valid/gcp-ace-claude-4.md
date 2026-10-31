```json
{
  "format": "domcq/1",
  "exam": "gcp-ace",
  "set": "Associate Cloud Engineer practice – Core domains mixed set",
  "questions": [
    {
      "stem": "You have installed the Google Cloud CLI and want every subsequent gcloud command in your current configuration to target the existing project with ID analytics-prod-123, without adding the --project flag each time. Which command should you run?",
      "options": [
        "gcloud projects create analytics-prod-123",
        "gcloud projects describe analytics-prod-123",
        "gcloud config set project analytics-prod-123",
        "gcloud projects list --filter=analytics-prod-123"
      ],
      "answer": "C",
      "explanation": "The gcloud CLI stores defaults such as the project, region and zone as properties in the active configuration. Running gcloud config set project writes the project property, so later commands use it unless overridden with --project. The other commands create, describe or list projects but do not change the default.",
      "rationales": {
        "A": "This tries to create a new project with that ID; it does not set a default, and the project already exists.",
        "B": "This only displays metadata about the project and leaves the active configuration unchanged.",
        "C": "This sets the project property in the active gcloud configuration, so later commands target that project by default.",
        "D": "This lists matching projects but does not change which project gcloud uses by default."
      },
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Setting up cloud projects and accounts",
      "difficulty": "easy",
      "source": "ACE exam guide 1.1 Setting up cloud projects and accounts; gcloud CLI documentation: managing configurations and properties"
    },
    {
      "stem": "A development project runs only non-critical test workloads. The finance team wants charges on this project to stop automatically once monthly spend reaches 500 USD, and accepts that resources may be shut down when that happens. What should you do?",
      "options": [
        "Create a 500 USD budget with a 100% threshold rule, which stops resource usage when the threshold is reached.",
        "Create a 500 USD budget with Pub/Sub notifications that trigger a Cloud Run function to disable billing on the project.",
        "Set a 500 USD quota limit on the project in the Quotas page so that further API requests are rejected.",
        "Set the billing account to a 500 USD credit line so that charges above that amount are declined."
      ],
      "answer": "B",
      "explanation": "Cloud Billing budgets only send notifications; they never cap or stop spending by themselves. To act automatically, you configure programmatic budget notifications to a Pub/Sub topic and have a function respond, for example by disabling billing on the project. Disabling billing stops paid services, which is why this is only appropriate for non-critical projects.",
      "rationales": {
        "A": "Budget threshold rules only send alerts; they do not stop usage or cap spend.",
        "B": "Programmatic budget notifications via Pub/Sub can trigger a function that disables billing, automatically stopping charges.",
        "C": "Quotas limit resource counts and request rates, not monetary spend, so they cannot enforce a 500 USD ceiling.",
        "D": "Cloud Billing accounts do not offer a credit line setting that declines charges above a set amount."
      },
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "medium",
      "source": "ACE exam guide 1.2 Managing billing configuration; Cloud Billing docs: set budgets and budget alerts, programmatic notifications"
    },
    {
      "stem": "Your company wants to analyze detailed Google Cloud costs broken down by project, service and resource label, using SQL queries, and then build dashboards on the results. Which billing feature should you configure?",
      "options": [
        "Budget alert emails sent to billing account administrators",
        "Committed use discount recommendations from the Recommender",
        "The cost table report downloaded manually as a CSV file",
        "Cloud Billing export of cost data to a BigQuery dataset"
      ],
      "answer": "D",
      "explanation": "Cloud Billing export to BigQuery continuously writes detailed usage and cost records, including project, service and labels, into BigQuery tables. You can query those tables with SQL and connect tools such as Looker Studio for dashboards. Alerts, recommendations and manual CSV downloads do not provide an ongoing, queryable dataset.",
      "rationales": {
        "A": "Budget alert emails notify people when thresholds are crossed but provide no queryable cost data.",
        "B": "Recommendations suggest commitments to save money; they are not a detailed cost dataset for SQL analysis.",
        "C": "A manual CSV download is a one-off snapshot, not a continuously updated dataset for SQL queries and dashboards.",
        "D": "Billing export writes detailed cost records with labels into BigQuery, where they can be queried with SQL and visualized."
      },
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "easy",
      "source": "ACE exam guide 1.2 Managing billing configuration; Cloud Billing docs: export Cloud Billing data to BigQuery"
    },
    {
      "stem": "Your security team requires two guardrails across every project in the organization: resources may only be created in EU locations, and nobody may create new service account keys. Which two organization policy constraints should you enforce at the organization node? Choose TWO.",
      "options": [
        "constraints/gcp.resourceLocations",
        "constraints/compute.vmExternalIpAccess",
        "constraints/iam.disableServiceAccountKeyCreation",
        "constraints/iam.allowedPolicyMemberDomains"
      ],
      "answer": "AC",
      "explanation": "Organization policies apply constraints to the resource hierarchy and are inherited by folders and projects below the node where they are set. The resource locations constraint restricts where location-based resources can be created, for example to an EU value group. The disable service account key creation constraint blocks creation of new user-managed keys. The other constraints control VM external IPs and allowed IAM member domains.",
      "rationales": {
        "A": "This list constraint restricts the locations where resources can be created, so it can limit projects to EU locations.",
        "B": "This constraint controls which VMs can have external IP addresses; it does not restrict resource locations or keys.",
        "C": "This boolean constraint prevents creation of new service account keys across the hierarchy where it is enforced.",
        "D": "This constraint limits which domains' identities can be granted IAM roles; it does not affect keys or locations."
      },
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Setting up cloud projects and accounts",
      "difficulty": "hard",
      "source": "ACE exam guide 1.1 Setting up cloud projects and accounts (organization policies); Resource Manager docs: organization policy constraints"
    },
    {
      "stem": "You need to deploy a stateless containerized HTTP API. Traffic is unpredictable, the service should scale down to zero instances when idle to save cost, and your team does not want to manage servers, node pools or clusters. Which service should you use?",
      "options": [
        "Cloud Run",
        "Google Kubernetes Engine Standard",
        "Compute Engine managed instance group",
        "App Engine flexible environment"
      ],
      "answer": "A",
      "explanation": "Cloud Run is a fully managed serverless platform for containers that scales automatically with request load, including down to zero when there is no traffic. You deploy a container image and Google manages the underlying infrastructure. GKE Standard and managed instance groups require you to manage nodes or VMs, and App Engine flexible keeps at least one instance running.",
      "rationales": {
        "A": "Cloud Run runs containers serverlessly, scales with requests and can scale to zero, with no cluster or server management.",
        "B": "GKE Standard requires you to manage the cluster and its node pools, which the team wants to avoid.",
        "C": "A managed instance group runs VMs that you configure and maintain, and it does not scale to zero on request load.",
        "D": "App Engine flexible always keeps at least one instance running, so it cannot scale to zero when idle."
      },
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing compute resources",
      "difficulty": "easy",
      "source": "ACE exam guide 2.1 Planning and implementing compute resources; Cloud Run documentation: overview and autoscaling"
    },
    {
      "stem": "An application writes backup files to Cloud Storage. The files are read about once per quarter for restore tests and are kept for at least a year. Based on Google's guidance for matching storage classes to access frequency, which storage class is the most cost-effective choice?",
      "options": [
        "Standard",
        "Nearline",
        "Coldline",
        "Archive"
      ],
      "answer": "C",
      "explanation": "Cloud Storage classes trade lower storage prices for higher retrieval costs and longer minimum storage durations. Google recommends Coldline for data accessed at most about once a quarter; it has a 90-day minimum storage duration. Nearline targets roughly monthly access and Archive targets data accessed less than once a year.",
      "rationales": {
        "A": "Standard suits frequently accessed data and has the highest storage price, so it is not cost-effective here.",
        "B": "Nearline is designed for data accessed about once a month, so it costs more to store than needed for quarterly access.",
        "C": "Coldline is designed for data read at most about once a quarter, matching quarterly restore tests at low storage cost.",
        "D": "Archive targets data accessed less than once a year; quarterly reads would incur higher retrieval costs than intended."
      },
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide 2.2 Planning and implementing storage and data solutions; Cloud Storage docs: storage classes"
    },
    {
      "stem": "You are choosing a database for a global inventory application. It needs a relational schema queried with SQL, strongly consistent transactions across multiple regions, and horizontal scaling beyond the capacity of a single database instance. Which service should you choose?",
      "options": [
        "Cloud SQL for PostgreSQL with cross-region read replicas",
        "Spanner with a multi-region instance configuration",
        "Bigtable with multi-cluster replication enabled",
        "Firestore in Datastore mode with composite indexes"
      ],
      "answer": "B",
      "explanation": "Spanner is a fully managed relational database that scales horizontally by adding compute capacity and offers externally consistent transactions, including across regions in multi-region configurations. Cloud SQL scales vertically and its read replicas cannot accept writes. Bigtable and Firestore are NoSQL databases without a relational schema.",
      "rationales": {
        "A": "Cloud SQL scales vertically on a single primary, and read replicas are read-only and asynchronously replicated.",
        "B": "Spanner provides relational SQL, horizontal scaling and strongly consistent transactions across regions.",
        "C": "Bigtable is a wide-column NoSQL database without relational schemas, and its replication is eventually consistent.",
        "D": "Firestore in Datastore mode is a NoSQL document database, not a relational SQL database."
      },
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide 2.2 Planning and implementing storage and data solutions; Google Cloud docs: choosing a database, Spanner overview"
    },
    {
      "stem": "Compute Engine VMs in a custom-mode VPC subnet have only internal IP addresses. They must download operating system package updates from public repositories on the internet, but they must not become reachable from the internet. What should you configure?",
      "options": [
        "Enable Private Google Access on the subnet",
        "Add an ingress firewall rule allowing 0.0.0.0/0 on TCP 443",
        "Assign an ephemeral external IP address to each VM",
        "Create a Cloud Router and a Cloud NAT gateway in the region"
      ],
      "answer": "D",
      "explanation": "Cloud NAT provides outbound internet connectivity for VMs that have no external IP addresses, and it does not allow unsolicited inbound connections. It is configured on a Cloud Router in the VPC region. Private Google Access only reaches Google APIs and services, not arbitrary public repositories.",
      "rationales": {
        "A": "Private Google Access lets internal-only VMs reach Google APIs and services, not general internet repositories.",
        "B": "An ingress rule allows inbound traffic; it gives no outbound internet path and would expose VMs if they had external IPs.",
        "C": "External IP addresses would give internet access but would also make the VMs reachable from the internet.",
        "D": "Cloud NAT on a Cloud Router gives internal-only VMs outbound internet access without allowing inbound connections."
      },
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing networking resources",
      "difficulty": "medium",
      "source": "ACE exam guide 2.3 Planning and implementing networking resources; Cloud NAT documentation: overview"
    },
    {
      "stem": "Your platform team manages applications on GKE with Kubernetes manifests applied by kubectl. They want to declare Google Cloud resources, such as Cloud Storage buckets and Pub/Sub topics, as Kubernetes resources in the same manifests and workflow. What should they use?",
      "options": [
        "Config Connector installed on the GKE cluster",
        "Cloud Deployment Manager configuration templates",
        "Cloud Build triggers that run on each commit",
        "gcloud CLI scripts executed from Cloud Shell"
      ],
      "answer": "A",
      "explanation": "Config Connector is a Kubernetes add-on that provides custom resource definitions for Google Cloud services. Teams describe resources such as buckets and topics in YAML manifests, and Config Connector creates and reconciles them in Google Cloud. This lets infrastructure be managed with the same kubectl and GitOps workflow as applications.",
      "rationales": {
        "A": "Config Connector exposes Google Cloud resources as Kubernetes custom resources that kubectl can create and reconcile.",
        "B": "Deployment Manager uses its own templates and API, not Kubernetes manifests, and it is a deprecated service.",
        "C": "Cloud Build triggers run build pipelines; they do not model Google Cloud resources as Kubernetes objects.",
        "D": "gcloud scripts are imperative commands, not declarative Kubernetes resources managed with kubectl."
      },
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing resources using tooling",
      "difficulty": "medium",
      "source": "ACE exam guide 2.4 Planning and implementing resources using tooling; Config Connector documentation: overview"
    },
    {
      "stem": "You are deploying a regional game server backend on Compute Engine that receives UDP traffic from players on the internet. The backend VMs must see each player's original source IP address, and you do not need TLS termination or URL-based routing. Which load balancer should you use?",
      "options": [
        "Global external Application Load Balancer",
        "External proxy Network Load Balancer",
        "External passthrough Network Load Balancer",
        "Internal passthrough Network Load Balancer"
      ],
      "answer": "C",
      "explanation": "Passthrough Network Load Balancers forward packets to backends without proxying, so backends receive the original client source IP. The external passthrough Network Load Balancer is regional and supports TCP, UDP and other protocols for internet-facing traffic. Proxy-based load balancers terminate connections and do not support UDP.",
      "rationales": {
        "A": "Application Load Balancers handle HTTP and HTTPS only and proxy connections, so they cannot serve UDP game traffic.",
        "B": "The proxy Network Load Balancer handles TCP only and terminates client connections at the proxy.",
        "C": "This regional passthrough load balancer supports UDP from the internet and preserves the client source IP.",
        "D": "The internal passthrough load balancer only accepts traffic from inside the VPC or connected networks, not the internet."
      },
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing networking resources",
      "difficulty": "hard",
      "source": "ACE exam guide 2.3 Planning and implementing networking resources; Cloud Load Balancing docs: choose a load balancer"
    },
    {
      "stem": "A GKE Standard cluster named web-cluster has a node pool named default-pool, and your default compute zone is already configured for the cluster's location. You need to manually set the node pool to exactly 5 nodes. Which command should you run?",
      "options": [
        "kubectl scale deployment web --replicas=5",
        "gcloud container node-pools create default-pool --cluster=web-cluster --num-nodes=5",
        "gcloud container clusters update web-cluster --enable-autoscaling --max-nodes=5",
        "gcloud container clusters resize web-cluster --node-pool=default-pool --num-nodes=5"
      ],
      "answer": "D",
      "explanation": "Node count in GKE is managed with the gcloud container commands, not kubectl. The clusters resize command with --node-pool and --num-nodes sets the number of nodes in that pool. kubectl scale changes the number of Pod replicas for a workload, which is a different layer.",
      "rationales": {
        "A": "This scales Pod replicas of a Deployment; it does not change the number of nodes in a node pool.",
        "B": "This tries to create a new node pool, which fails because a pool named default-pool already exists.",
        "C": "This enables the cluster autoscaler with an upper bound; it does not set a fixed count of 5 nodes.",
        "D": "This resizes the named node pool of the cluster to exactly 5 nodes."
      },
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing compute resources",
      "difficulty": "easy",
      "source": "ACE exam guide 3.1 Managing compute resources (GKE node pools); GKE docs: resizing a cluster"
    },
    {
      "stem": "A Cloud Storage bucket receives application log exports. Each object should move to the Coldline storage class 30 days after it is created and be deleted 365 days after it is created, with no ongoing manual work. What should you do?",
      "options": [
        "Schedule a nightly Cloud Scheduler job that runs a script to rewrite and delete old objects",
        "Configure Object Lifecycle Management rules: SetStorageClass to Coldline at age 30 and Delete at age 365",
        "Enable Object Versioning and set a bucket retention policy with a retention period of 365 days",
        "Enable Autoclass on the bucket so objects transition between storage classes based on access"
      ],
      "answer": "B",
      "explanation": "Object Lifecycle Management lets you attach rules to a bucket that Cloud Storage evaluates automatically. An age condition with a SetStorageClass action changes the class, and an age condition with a Delete action removes objects. This needs no custom code or scheduling.",
      "rationales": {
        "A": "A custom scheduled script could work but adds code and maintenance, while lifecycle rules do this natively.",
        "B": "Lifecycle rules with age conditions automatically change the storage class at 30 days and delete objects at 365 days.",
        "C": "A retention policy prevents deletion before the period ends; it never deletes objects or changes their class.",
        "D": "Autoclass moves objects based on access patterns, not fixed ages, and it does not delete objects."
      },
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide 3.2 Managing storage and data solutions; Cloud Storage docs: Object Lifecycle Management"
    },
    {
      "stem": "Auditors need records of which users read objects in a Cloud Storage bucket. In Logs Explorer you can see Admin Activity audit log entries for the bucket, such as IAM policy changes, but no entries at all for object reads. What is the most likely cause, and what should you do?",
      "options": [
        "Data Access audit logs are disabled by default for Cloud Storage; enable them in the IAM audit logging configuration.",
        "The _Default log bucket retention is too short; increase it so that object read entries are kept for auditors.",
        "Admin Activity logs exclude reads; create a log sink to BigQuery so that object read events start being captured.",
        "Object reads are only logged when uniform bucket-level access is on; enable it on the bucket to record them."
      ],
      "answer": "A",
      "explanation": "Admin Activity audit logs are always written and record configuration and metadata changes. Data Access audit logs, which record reads of user data such as object reads, are disabled by default for most services, including Cloud Storage (BigQuery is the main exception). You enable them per service through the audit logging settings in the IAM policy, after which reads appear in the logs.",
      "rationales": {
        "A": "Data Access logs, which capture object reads, are off by default for Cloud Storage and must be enabled in audit config.",
        "B": "Retention affects how long entries are kept; recent reads would still appear if they were being logged.",
        "C": "Sinks only route log entries that already exist; they cannot cause Cloud Storage to start writing read events.",
        "D": "Uniform bucket-level access controls permissions; it has no effect on whether Data Access audit logs are written."
      },
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Monitoring and logging",
      "difficulty": "hard",
      "source": "ACE exam guide 3.4 Monitoring and logging; Cloud Logging docs: Cloud Audit Logs overview, configure Data Access audit logs"
    },
    {
      "stem": "You want to receive an email whenever the average CPU utilization of a specific Compute Engine instance stays above 80% for 5 minutes. What should you create in Cloud Monitoring?",
      "options": [
        "A log-based metric that counts CPU messages in the serial port output",
        "An uptime check that probes the instance's external IP address",
        "A custom dashboard containing a CPU utilization chart for the instance",
        "An alerting policy with a metric threshold condition and an email notification channel"
      ],
      "answer": "D",
      "explanation": "Cloud Monitoring alerting policies evaluate conditions against metrics and notify configured channels when a condition is met. A metric threshold condition on CPU utilization above 0.8 with a 5-minute duration window, plus an email notification channel, implements this requirement. Dashboards only visualize data and uptime checks test availability.",
      "rationales": {
        "A": "Serial port output does not report CPU utilization; the built-in CPU metric already exists for alerting.",
        "B": "An uptime check tests whether an endpoint responds, not how busy the instance's CPU is.",
        "C": "A dashboard shows the metric but sends no notification when the threshold is crossed.",
        "D": "An alerting policy with a threshold and duration on the CPU metric sends email through the notification channel."
      },
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Monitoring and logging",
      "difficulty": "easy",
      "source": "ACE exam guide 3.4 Monitoring and logging; Cloud Monitoring docs: alerting overview, notification channels"
    },
    {
      "stem": "You updated a Kubernetes Deployment named checkout on GKE to a new container image, and the new Pods are returning errors. You need to return the Deployment to its previous revision as quickly as possible. Which command should you run?",
      "options": [
        "kubectl delete deployment checkout",
        "kubectl rollout pause deployment/checkout",
        "kubectl rollout undo deployment/checkout",
        "gcloud container node-pools rollback default-pool --cluster=prod"
      ],
      "answer": "C",
      "explanation": "Kubernetes keeps a revision history for each Deployment through its ReplicaSets. kubectl rollout undo reverts the Deployment to the previous revision, performing a rolling update back to the earlier Pod template. Pausing only stops further changes, and node pool rollback concerns node upgrades, not workloads.",
      "rationales": {
        "A": "Deleting the Deployment removes the application entirely instead of restoring the previous working version.",
        "B": "Pausing a rollout stops further updates from progressing but does not revert to the previous revision.",
        "C": "This reverts the Deployment to its previous revision using the stored rollout history.",
        "D": "This rolls back a failed node pool upgrade; it does not change the container image of a Deployment."
      },
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing compute resources",
      "difficulty": "medium",
      "source": "ACE exam guide 3.1 Managing compute resources (deploying and managing GKE workloads); Kubernetes docs: Deployments, rolling back"
    },
    {
      "stem": "Compute Engine VMs in your VPC have no external IP addresses. Administrators must connect to them over SSH using Identity-Aware Proxy (IAP) TCP forwarding. Which ingress firewall rule must you add to the VPC network to allow these connections?",
      "options": [
        "Allow TCP port 22 from source range 0.0.0.0/0 to all instances",
        "Allow TCP port 22 from source range 35.235.240.0/20 to the VMs",
        "Allow TCP port 22 from source range 130.211.0.0/22 to the VMs",
        "Allow TCP port 3389 from source range 35.235.240.0/20 to the VMs"
      ],
      "answer": "B",
      "explanation": "IAP TCP forwarding connects to VMs from a Google-owned address range, 35.235.240.0/20, so the VPC needs an ingress rule allowing the target port from that range. SSH uses TCP port 22. Users also need the IAP-secured Tunnel User role, but the firewall rule is what lets the traffic reach the VMs.",
      "rationales": {
        "A": "Opening SSH to the whole internet is unnecessary for IAP and violates least privilege.",
        "B": "IAP TCP forwarding originates from 35.235.240.0/20, and SSH uses TCP port 22.",
        "C": "130.211.0.0/22 is a Google health check and load balancer proxy range, not the IAP TCP forwarding range.",
        "D": "This uses the correct IAP range but port 3389, which is RDP, not SSH."
      },
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing networking resources",
      "difficulty": "medium",
      "source": "ACE exam guide 3.3 Managing networking resources (firewall rules); IAP docs: using IAP for TCP forwarding"
    },
    {
      "stem": "A data analyst needs to list, view and download objects in one specific Cloud Storage bucket. The analyst must not be able to upload or delete objects, or change bucket settings. Following the principle of least privilege, which role should you grant to the analyst on that bucket?",
      "options": [
        "Storage Object Viewer (roles/storage.objectViewer)",
        "Storage Object Admin (roles/storage.objectAdmin)",
        "Storage Admin (roles/storage.admin)",
        "Editor (roles/editor)"
      ],
      "answer": "A",
      "explanation": "Least privilege means granting the narrowest predefined role that covers the task, at the lowest resource level that works. Storage Object Viewer allows listing and reading objects, and granting it on the bucket limits access to that bucket. The admin roles allow writing or deleting, and Editor is a broad basic role.",
      "rationales": {
        "A": "Object Viewer allows listing and reading objects only, which matches the analyst's needs when granted on the bucket.",
        "B": "Object Admin also allows creating, overwriting and deleting objects, which exceeds the requirement.",
        "C": "Storage Admin grants full control of buckets and objects, including changing bucket settings.",
        "D": "Editor is a broad basic role with write access to many services, which violates least privilege."
      },
      "topic": "Configuring access and security",
      "subtopic": "Managing IAM",
      "difficulty": "easy",
      "source": "ACE exam guide 4.1 Managing IAM; Cloud Storage docs: IAM roles for Cloud Storage"
    },
    {
      "stem": "An application running on a Compute Engine VM must create files in a Cloud Storage bucket. Security policy forbids long-lived credentials stored on disk or in configuration files, and requires least privilege. What is the recommended approach?",
      "options": [
        "Create a service account key, copy it to the VM, and set GOOGLE_APPLICATION_CREDENTIALS to its path",
        "Attach the Compute Engine default service account with the Editor role and the cloud-platform scope",
        "Create a user-managed service account, grant it Storage Object Creator on the bucket, and attach it to the VM",
        "Store a developer's user OAuth refresh token in the application's configuration file on the VM"
      ],
      "answer": "C",
      "explanation": "Attaching a service account to a VM lets applications obtain short-lived access tokens from the metadata server through Application Default Credentials, so no key files are stored. Using a dedicated user-managed service account with only the needed role on the specific bucket follows least privilege. Keys and user tokens are long-lived secrets that the policy forbids.",
      "rationales": {
        "A": "A key file is a long-lived credential on disk, which the policy forbids and Google discourages.",
        "B": "The Editor role is far broader than needed, so this violates least privilege.",
        "C": "An attached, narrowly scoped service account provides short-lived tokens from the metadata server with no stored keys.",
        "D": "A user's refresh token is a long-lived personal credential and should never be embedded in applications."
      },
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "medium",
      "source": "ACE exam guide 4.2 Managing service accounts; IAM docs: best practices for using service accounts, attaching service accounts to resources"
    },
    {
      "stem": "A developer needs to run gcloud commands from a laptop as the service account deploy-sa@example-project.iam.gserviceaccount.com to test its permissions. Company policy forbids creating any service account keys. Which two actions together accomplish this? Choose TWO.",
      "options": [
        "Grant the developer Service Account Key Admin on deploy-sa so they can download a JSON key for it",
        "Grant the developer the Service Account Token Creator role on the deploy-sa service account",
        "Grant the developer Service Account User on the project and have them run gcloud auth activate-service-account",
        "Have the developer run gcloud commands with --impersonate-service-account set to the deploy-sa email"
      ],
      "answer": "BD",
      "explanation": "Service account impersonation lets an authenticated user obtain short-lived credentials for a service account without any key. The user needs the Service Account Token Creator role on that service account, which grants permission to generate access tokens. The developer then passes --impersonate-service-account (or sets the auth/impersonate_service_account property) so gcloud uses those short-lived tokens.",
      "rationales": {
        "A": "Downloading a JSON key creates a service account key, which the company policy forbids.",
        "B": "Token Creator on the service account allows the developer to generate short-lived tokens to impersonate it.",
        "C": "gcloud auth activate-service-account requires a key file, which would violate the policy.",
        "D": "The --impersonate-service-account flag makes gcloud call the API with short-lived tokens for deploy-sa."
      },
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "hard",
      "source": "ACE exam guide 4.2 Managing service accounts (impersonation); IAM docs: service account impersonation, Service Account Token Creator role"
    },
    {
      "stem": "Your team finds that the available predefined IAM roles grant more permissions than a group of operators needs, so you plan to create custom IAM roles. At which two levels of the Google Cloud resource hierarchy can custom roles be created? Choose TWO.",
      "options": [
        "Organization",
        "Folder",
        "Individual resource, such as a Cloud Storage bucket",
        "Project"
      ],
      "answer": "AD",
      "explanation": "Custom roles let you bundle exactly the permissions a job needs when predefined roles are too broad. They can be created at the organization level, where they can be granted on any resource in the organization, or at the project level, where they can be used only within that project. Custom roles cannot be created at the folder level or on individual resources.",
      "rationales": {
        "A": "Organization-level custom roles can be created and then granted anywhere in that organization.",
        "B": "Custom roles cannot be created at the folder level, although org-level custom roles can be granted on folders.",
        "C": "Custom roles are not defined on individual resources, though they can be granted on them.",
        "D": "Project-level custom roles can be created and granted only within that project."
      },
      "topic": "Configuring access and security",
      "subtopic": "Managing IAM",
      "difficulty": "medium",
      "source": "ACE exam guide 4.1 Managing IAM (custom roles); IAM docs: understanding IAM custom roles"
    }
  ]
}
```
