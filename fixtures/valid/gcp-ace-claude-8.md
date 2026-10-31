```json
{
  "format": "domcq/1",
  "exam": "gcp-ace",
  "set": "Associate Cloud Engineer practice – Core skills mixed set",
  "questions": [
    {
      "stem": "You have created a new Google Cloud project and want to manage Compute Engine resources in it from the command line. The Compute Engine API is not yet enabled in the project. What should you do?",
      "options": [
        "Run gcloud config set compute/api enabled in Cloud Shell.",
        "Run gcloud projects add-api compute.googleapis.com for the project.",
        "Run gcloud services enable compute.googleapis.com for the project.",
        "Run gcloud components install compute in Cloud Shell."
      ],
      "answer": "C",
      "explanation": "Google Cloud APIs are enabled per project through the Service Usage API, which the gcloud services command group exposes. Running gcloud services enable with the service name (for example compute.googleapis.com) turns the API on for the active or specified project. The same result can be achieved in the console's API Library, but installing gcloud components only changes the local CLI.",
      "rationales": {
        "A": "compute/api is not a gcloud property; gcloud config only sets local CLI defaults and cannot enable APIs.",
        "B": "There is no gcloud projects add-api command; APIs are enabled through the gcloud services command group.",
        "C": "Correct: gcloud services enable turns on the named API for the project through the Service Usage API.",
        "D": "gcloud components install adds tools to the local SDK installation; it does not enable APIs in a project."
      },
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Setting up cloud projects and accounts",
      "difficulty": "easy",
      "source": "ACE exam guide 1.1 Setting up cloud projects and accounts: enabling APIs within projects"
    },
    {
      "stem": "Your company has a strict monthly spending limit for a development project. If actual spending reaches the budget amount, billing for the project must be stopped automatically without anyone having to act. What should you do?",
      "options": [
        "Create a budget with Pub/Sub notifications and a Cloud Run function that disables billing for the project.",
        "Create a budget with an alert threshold at 100% so that Google Cloud stops charging the project.",
        "Set a quota on the Cloud Billing API so that no further charges can be recorded for the project.",
        "Set the budget amount as a hard spending cap in the billing account's payment settings."
      ],
      "answer": "A",
      "explanation": "Cloud Billing budgets only send notifications; they never cap or stop spending on their own. To act automatically, you connect the budget to a Pub/Sub topic for programmatic notifications and have a function call the Cloud Billing API to detach the billing account from the project when the threshold is reached. Be aware that disabling billing stops services and can lead to resources being deleted.",
      "rationales": {
        "A": "Correct: programmatic budget notifications to Pub/Sub can trigger a function that removes the project's billing account.",
        "B": "Budget alert thresholds only send notifications; reaching 100% does not stop charges.",
        "C": "Quotas on the Cloud Billing API limit calls to that API, not the charges incurred by other services.",
        "D": "Payment settings offer no hard spending cap; budgets are notification tools, not limits."
      },
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "medium",
      "source": "ACE exam guide 1.2 Managing billing configuration: budgets and alerts; Cloud Billing docs: disable billing usage with notifications"
    },
    {
      "stem": "Your organization must ensure that new resources in all of its projects are created only in European Union locations. Different teams create new projects frequently. You want a centrally enforced control that requires minimal ongoing effort. What should you do?",
      "options": [
        "Add an IAM condition to each team's role bindings that limits them to EU regions.",
        "Set the compute/region property to an EU region in each team's gcloud configuration.",
        "Create a log-based alert that notifies administrators when a resource is created outside the EU.",
        "Set the resource locations organization policy constraint at the organization node to allow only EU locations."
      ],
      "answer": "D",
      "explanation": "The Organization Policy Service lets you set constraints centrally, and policies set on the organization node are inherited by every folder and project beneath it, including new ones. The resource locations constraint (gcp.resourceLocations) restricts where location-based resources can be created, for example with the in:eu-locations value group. This prevents non-compliant resources instead of only detecting them.",
      "rationales": {
        "A": "IAM conditions control who can do what, not where resources are created, and per-team bindings need constant upkeep.",
        "B": "A gcloud default region is a local convenience that users can override; it enforces nothing.",
        "C": "An alert only detects violations after the fact; it does not prevent resources being created outside the EU.",
        "D": "Correct: the resource locations constraint set at the organization is inherited by all current and future projects."
      },
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Setting up cloud projects and accounts",
      "difficulty": "medium",
      "source": "ACE exam guide 1.1 Setting up cloud projects and accounts: applying organizational policies to the resource hierarchy"
    },
    {
      "stem": "A project manager needs to link a newly created project to your company's existing Cloud Billing account. You want to apply the principle of least privilege. Which roles should you grant the project manager? Choose TWO.",
      "options": [
        "Billing Account Viewer on the Cloud Billing account",
        "Billing Account User on the Cloud Billing account",
        "Project Billing Manager on the new project",
        "Billing Account Administrator on the Cloud Billing account"
      ],
      "answer": "BC",
      "explanation": "Linking a project to a billing account requires permissions on both resources. Billing Account User grants billing.resourceAssociations.create on the billing account, and Project Billing Manager grants resourcemanager.projects.createBillingAssignment on the project. Together they allow the link without granting broader control of either the billing account or the project.",
      "rationales": {
        "A": "Billing Account Viewer only allows viewing costs and transactions; it cannot associate projects with the account.",
        "B": "Correct: Billing Account User allows linking projects to the billing account without administering it.",
        "C": "Correct: Project Billing Manager allows changing the project's billing assignment without other project control.",
        "D": "Billing Account Administrator can manage the whole billing account, which is more than needed, and grants nothing on the project."
      },
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "hard",
      "source": "ACE exam guide 1.2 Managing billing configuration: linking projects to a billing account; Cloud Billing access control roles"
    },
    {
      "stem": "You need to run a nightly batch job on Compute Engine. The job is fault tolerant, can be restarted if a VM is stopped partway through, and must cost as little as possible. What should you do?",
      "options": [
        "Run the job on standard VMs covered by a committed use discount.",
        "Run the job on Spot VMs.",
        "Run the job on sole-tenant nodes.",
        "Run the job on standard VMs with live migration enabled."
      ],
      "answer": "B",
      "explanation": "Spot VMs use spare Compute Engine capacity at a large discount compared with standard VMs, in exchange for the possibility that Compute Engine preempts them at any time. That trade-off suits fault-tolerant, restartable batch work. Committed use discounts need a one- or three-year commitment, and sole-tenant nodes cost more because you pay for dedicated hardware.",
      "rationales": {
        "A": "Committed use discounts require a one- or three-year commitment, which does not suit a short nightly job and is costlier than Spot.",
        "B": "Correct: Spot VMs are the cheapest option and their possible preemption is acceptable for restartable batch jobs.",
        "C": "Sole-tenant nodes provide dedicated physical servers at extra cost; they are for isolation or licensing needs.",
        "D": "Live migration keeps standard VMs running during host maintenance but does not reduce their price."
      },
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing compute resources",
      "difficulty": "easy",
      "source": "ACE exam guide 2.1 Planning and implementing compute resources: using Spot VM instances"
    },
    {
      "stem": "Your company is building a global inventory application. It needs a relational database with SQL support, strongly consistent transactions across regions, and horizontal scaling to a very high write throughput. Which Google Cloud product should you use?",
      "options": [
        "Cloud SQL for PostgreSQL with cross-region read replicas",
        "Bigtable with multi-cluster replication",
        "Firestore in Datastore mode",
        "Spanner with a multi-region instance configuration"
      ],
      "answer": "D",
      "explanation": "Spanner is a fully managed relational database that scales horizontally by adding compute capacity and provides externally consistent transactions across regions. A multi-region configuration replicates data across regions for global availability. Cloud SQL scales writes only vertically on a single primary, and Bigtable and Firestore are NoSQL databases.",
      "rationales": {
        "A": "Cloud SQL accepts writes on a single primary instance; cross-region replicas serve reads only and are asynchronous.",
        "B": "Bigtable is a wide-column NoSQL database without relational SQL transactions across rows and tables.",
        "C": "Firestore is a NoSQL document database, not a relational database with full SQL support.",
        "D": "Correct: Spanner combines relational SQL, strong global consistency and horizontal write scaling."
      },
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide 2.2 Planning and implementing storage and data solutions: choosing data products such as Spanner and Cloud SQL"
    },
    {
      "stem": "You are deploying game servers that use a custom UDP protocol on Compute Engine VMs in a single region. The servers must see the original client IP address on incoming packets, and you want Google Cloud to distribute incoming internet traffic across the VMs. Which load balancer should you use?",
      "options": [
        "External passthrough Network Load Balancer",
        "Global external Application Load Balancer",
        "Global external proxy Network Load Balancer",
        "Regional internal Application Load Balancer"
      ],
      "answer": "A",
      "explanation": "Passthrough Network Load Balancers do not proxy connections: packets reach the backend VMs with their original source and destination addresses, so the servers see the client IP. The external passthrough Network Load Balancer is regional and supports UDP as well as TCP. Proxy load balancers terminate client connections, and Application Load Balancers handle only HTTP and HTTPS traffic.",
      "rationales": {
        "A": "Correct: it is regional, supports UDP and passes packets through so backends see the client source IP.",
        "B": "Application Load Balancers handle HTTP and HTTPS only and proxy the connection, so a custom UDP protocol is not supported.",
        "C": "Proxy Network Load Balancers handle TCP traffic and terminate client connections; they do not balance UDP.",
        "D": "An internal Application Load Balancer serves clients inside the VPC over HTTP(S), not internet UDP traffic."
      },
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing networking resources",
      "difficulty": "hard",
      "source": "ACE exam guide 2.3 Planning and implementing networking resources: choosing the appropriate load balancing option"
    },
    {
      "stem": "Your team wants to define its Google Cloud infrastructure as code. The definitions must be declarative, stored in version control, reviewed before changes, and applied repeatably to development, test and production environments. You want to follow Google-recommended practices. What should you do?",
      "options": [
        "Write Bash scripts of gcloud commands and run them from Cloud Shell.",
        "Create the resources in the console and record each step in a shared runbook.",
        "Write Terraform configurations and apply them, for example through Infrastructure Manager.",
        "Capture each environment's resources in machine images and restore them in new projects."
      ],
      "answer": "C",
      "explanation": "Terraform describes the desired state of resources declaratively, so the same reviewed configuration can be planned and applied repeatedly to each environment, with only the differences that variables express. Google recommends Terraform for infrastructure as code, and Infrastructure Manager is the managed Google Cloud service that runs Terraform deployments. Imperative scripts and manual steps describe actions rather than desired state, so they drift and are hard to repeat safely.",
      "rationales": {
        "A": "gcloud scripts are imperative; re-running them does not reconcile resources to a desired state.",
        "B": "Manual console work is error-prone and not repeatable, even with a runbook.",
        "C": "Correct: Terraform is declarative and version-controllable, and Infrastructure Manager runs it as a managed service.",
        "D": "Machine images capture individual VMs, not whole environments such as networks, IAM and other services."
      },
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing resources using tooling",
      "difficulty": "medium",
      "source": "ACE exam guide 2.4 Planning and implementing resources using tooling: infrastructure as code with Terraform"
    },
    {
      "stem": "You have a stateless containerized HTTP service. Its traffic is unpredictable, with long periods when it receives no requests. You want to avoid managing servers or clusters, and you want to pay nothing for compute while the service is idle. Which Google Cloud product should you use?",
      "options": [
        "A GKE Standard cluster with the cluster autoscaler enabled",
        "Cloud Run",
        "A Compute Engine managed instance group with autoscaling",
        "App Engine flexible environment"
      ],
      "answer": "B",
      "explanation": "Cloud Run is a fully managed serverless platform for containers. It scales the number of instances with incoming requests and can scale to zero when there is no traffic, so idle periods incur no instance charges. GKE Standard and managed instance groups require managing nodes or VMs, and the App Engine flexible environment keeps at least one instance running.",
      "rationales": {
        "A": "GKE Standard requires managing a cluster and its nodes, and node VMs are billed while idle.",
        "B": "Correct: Cloud Run runs containers without infrastructure management and can scale to zero instances.",
        "C": "A managed instance group means managing VMs, and it keeps at least one VM running.",
        "D": "The App Engine flexible environment cannot scale to zero; at least one instance always runs."
      },
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing compute resources",
      "difficulty": "easy",
      "source": "ACE exam guide 2.1 Planning and implementing compute resources: choosing compute options such as Cloud Run"
    },
    {
      "stem": "Compute Engine VMs in a custom mode VPC network have only internal IP addresses. They need to download operating system updates from public repositories on the internet, but they must not be reachable from the internet. What should you do?",
      "options": [
        "Enable Private Google Access on the subnet where the VMs run.",
        "Create a VPC Network Peering connection to a network with internet access.",
        "Add a static route to the default internet gateway with a higher priority.",
        "Configure Cloud NAT on a Cloud Router in the VMs' region."
      ],
      "answer": "D",
      "explanation": "Cloud NAT provides outbound network address translation for VMs without external IP addresses, so they can start connections to the internet. It does not allow unsolicited inbound connections from the internet, which keeps the VMs unreachable. Cloud NAT is a software-defined service configured on a Cloud Router in the region of the subnets it serves.",
      "rationales": {
        "A": "Private Google Access reaches Google APIs and services only, not general internet repositories.",
        "B": "VPC Network Peering is not transitive and cannot route traffic through a peer's internet access.",
        "C": "A route alone is not enough; VMs without external IP addresses still need NAT to reach the internet.",
        "D": "Correct: Cloud NAT gives internal-only VMs outbound internet access while blocking unsolicited inbound traffic."
      },
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing networking resources",
      "difficulty": "medium",
      "source": "ACE exam guide 2.3 Planning and implementing networking resources: Cloud NAT and Cloud Router"
    },
    {
      "stem": "You have a zonal GKE Standard cluster named prod-cluster with a node pool named default-pool. You need to change the node pool so that it has 5 nodes immediately. Which command should you run?",
      "options": [
        "gcloud container clusters resize prod-cluster --node-pool default-pool --num-nodes 5",
        "gcloud container node-pools update default-pool --cluster prod-cluster --machine-count 5",
        "kubectl scale deployment default-pool --replicas 5",
        "gcloud compute instances resize default-pool --size 5"
      ],
      "answer": "A",
      "explanation": "In GKE Standard, the number of nodes in a node pool is changed with gcloud container clusters resize, naming the cluster, the node pool and the new node count. Nodes are Compute Engine VMs managed by GKE, so you resize them through GKE rather than through Compute Engine or kubectl. In a regional cluster the count applies per zone, which is why the stem specifies a zonal cluster.",
      "rationales": {
        "A": "Correct: gcloud container clusters resize sets the node count of the named node pool.",
        "B": "--machine-count is not a valid flag; node-pools update changes settings such as autoscaling, not a direct count this way.",
        "C": "kubectl scale changes the replicas of a Kubernetes workload, not the number of nodes in a node pool.",
        "D": "gcloud compute instances has no resize command for node pools; GKE manages node VMs."
      },
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing compute resources",
      "difficulty": "easy",
      "source": "ACE exam guide 3.1 Managing compute resources: managing GKE node pools; GKE docs: resizing a cluster"
    },
    {
      "stem": "A Cloud Storage bucket stores application log archives. Objects are read often during their first 30 days, rarely after that, and must be deleted one year after creation. You want to minimize storage cost and manual effort. What should you do?",
      "options": [
        "Run a weekly Cloud Scheduler job that copies objects older than 30 days to a Coldline bucket.",
        "Enable Object Versioning and set a one-year retention policy on the bucket.",
        "Add lifecycle rules that change objects to Coldline at 30 days and delete them at 365 days.",
        "Change the bucket's default storage class to Archive so that objects age automatically."
      ],
      "answer": "C",
      "explanation": "Object Lifecycle Management applies rules automatically based on conditions such as object age. A SetStorageClass action moves rarely read objects to a cheaper class such as Coldline, and a Delete action removes them when they reach the required age. This needs no custom code or scheduled jobs.",
      "rationales": {
        "A": "A scheduled copy job adds code and operations to maintain, and copying leaves the originals unless you also delete them.",
        "B": "A retention policy prevents deletion before a period ends; it neither deletes objects nor lowers their storage class.",
        "C": "Correct: lifecycle rules change the storage class and delete objects automatically based on age.",
        "D": "The default class applies to new objects at upload; Archive would make frequent reads in the first 30 days costly."
      },
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide 3.2 Managing storage and data solutions: Cloud Storage object lifecycle management policies"
    },
    {
      "stem": "Your Compute Engine VMs have no external IP addresses. Administrators must connect to them with SSH by using Identity-Aware Proxy (IAP) TCP forwarding. Which firewall rule must you create in the VPC network?",
      "options": [
        "Allow ingress on TCP port 22 from 0.0.0.0/0",
        "Allow ingress on TCP port 22 from 35.235.240.0/20",
        "Allow egress on TCP port 22 to 35.235.240.0/20",
        "Allow ingress on TCP port 22 from 130.211.0.0/22"
      ],
      "answer": "B",
      "explanation": "With IAP TCP forwarding, connections reach the VMs from IAP's own address range, 35.235.240.0/20, so an ingress rule must allow TCP port 22 from that range to the target VMs. This avoids exposing SSH to the whole internet. Users also need the IAP-secured Tunnel User role to create the tunnel.",
      "rationales": {
        "A": "Allowing SSH from 0.0.0.0/0 exposes port 22 to everyone, which is unnecessary for IAP.",
        "B": "Correct: IAP TCP forwarding connects from 35.235.240.0/20, so ingress on port 22 from that range is required.",
        "C": "The connection from IAP is inbound to the VMs, so an egress rule does not permit it.",
        "D": "130.211.0.0/22 is a Google Cloud health check range, not the source range used by IAP."
      },
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing networking resources",
      "difficulty": "medium",
      "source": "ACE exam guide 3.3 Managing networking resources: adding firewall rules; IAP docs: using IAP for TCP forwarding"
    },
    {
      "stem": "Compliance rules require you to keep all Cloud Audit Logs from a project for seven years. The logs will rarely be read after they are written. You want the lowest-cost solution. What should you do?",
      "options": [
        "Increase the retention period of the project's _Default log bucket to seven years.",
        "Create a log sink that routes the audit logs to a BigQuery dataset.",
        "Create a log sink that routes the audit logs to a Pub/Sub topic.",
        "Create a log sink that routes the audit logs to a Cloud Storage bucket that uses the Archive storage class."
      ],
      "answer": "D",
      "explanation": "Log sinks in Cloud Logging route copies of matching log entries to supported destinations. For long-term retention of rarely accessed logs, Cloud Storage in the Archive class is the cheapest destination, and a bucket retention policy can enforce the seven-year requirement. Extended retention in log buckets and storage in BigQuery both cost more per gigabyte for data that is seldom read.",
      "rationales": {
        "A": "Extended log bucket retention is billed at a higher rate than Archive storage, and the _Required bucket's retention cannot be changed.",
        "B": "BigQuery suits analysis with SQL, but its storage costs more than Archive storage for rarely read data.",
        "C": "Pub/Sub is for streaming to other systems; it is not a long-term storage destination.",
        "D": "Correct: routing logs to an Archive-class Cloud Storage bucket is the lowest-cost long-term option."
      },
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Monitoring and logging",
      "difficulty": "medium",
      "source": "ACE exam guide 3.4 Monitoring and logging: configuring log routers and exporting logs to external systems"
    },
    {
      "stem": "You want the operations team to be notified by email when the CPU utilization of a Compute Engine VM stays above 80% for 5 minutes. You want to use a managed Google Cloud service. What should you do?",
      "options": [
        "Create a Cloud Monitoring alerting policy with a metric threshold condition and an email notification channel.",
        "Create a log-based metric in Cloud Logging that counts log entries containing the word CPU.",
        "Create a Cloud Billing budget alert for the project that sends email to the operations team.",
        "Install a cron job on the VM that emails the team when the top command reports high CPU usage."
      ],
      "answer": "A",
      "explanation": "Cloud Monitoring collects the CPU utilization metric for Compute Engine VMs automatically. An alerting policy with a metric threshold condition can fire when the value stays above 80% for a chosen duration, such as 5 minutes. The policy then sends a notification through its configured channels, such as email.",
      "rationales": {
        "A": "Correct: a metric threshold alerting policy with a 5-minute duration and email channel meets the requirement.",
        "B": "Counting log entries that mention CPU does not measure CPU utilization.",
        "C": "Budget alerts track spending, not resource utilization.",
        "D": "A cron job on the VM is self-managed, fragile, and fails silently if the VM is unhealthy."
      },
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Monitoring and logging",
      "difficulty": "easy",
      "source": "ACE exam guide 3.4 Monitoring and logging: creating Cloud Monitoring alerts based on resource metrics"
    },
    {
      "stem": "A web application runs on a zonal managed instance group named web-mig with 4 VMs. You have created a new instance template named web-v2 with an updated image. You must roll out the new template to all VMs without the group ever having fewer than 4 running instances. What should you do?",
      "options": [
        "Run gcloud compute instance-groups managed rolling-action start-update web-mig --version=template=web-v2 --max-surge=0 --max-unavailable=1",
        "Run gcloud compute instance-groups managed set-instance-template web-mig --template=web-v2",
        "Run gcloud compute instance-groups managed rolling-action start-update web-mig --version=template=web-v2 --max-surge=1 --max-unavailable=0",
        "Run gcloud compute instance-groups managed rolling-action replace web-mig --max-surge=0 --max-unavailable=0"
      ],
      "answer": "C",
      "explanation": "A rolling update replaces instances gradually with a new template. The max-unavailable setting limits how many instances can be out of service during the update, and max-surge allows extra instances above the target size. Setting max-unavailable to 0 and max-surge to 1 creates a new instance before an old one is removed, so capacity never drops below 4.",
      "rationales": {
        "A": "max-unavailable=1 lets one instance go offline at a time, so the group would drop to 3 running instances.",
        "B": "set-instance-template only affects instances created later; existing VMs keep the old template.",
        "C": "Correct: surging one new instance while allowing none unavailable keeps 4 instances running throughout.",
        "D": "max-surge and max-unavailable cannot both be 0, and replace alone does not name the new template."
      },
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing compute resources",
      "difficulty": "hard",
      "source": "ACE exam guide 3.1 Managing compute resources: working with managed instance groups; Compute Engine docs: rolling out updates to MIGs"
    },
    {
      "stem": "A team of data analysts needs read access to BigQuery datasets in a project. Analysts join and leave the team frequently. You want to follow Google-recommended practices and minimize administrative effort. What should you do?",
      "options": [
        "Grant the BigQuery Data Viewer role to each analyst's user account individually.",
        "Add the analysts to a Google group and grant the BigQuery Data Viewer role to the group.",
        "Grant the Viewer basic role on the project to each analyst's user account individually.",
        "Create a service account with BigQuery Data Viewer and share its key with the analysts."
      ],
      "answer": "B",
      "explanation": "Google recommends granting roles to groups rather than to individual users. Access then follows group membership: adding or removing a person from the group changes their access without editing IAM policies. Choosing a specific predefined role such as BigQuery Data Viewer also follows least privilege better than a basic role.",
      "rationales": {
        "A": "Individual bindings must be edited every time someone joins or leaves, which adds effort and error risk.",
        "B": "Correct: granting a predefined role to a group means access is managed simply through group membership.",
        "C": "The Viewer basic role is broad, and individual bindings still require frequent IAM changes.",
        "D": "Sharing a service account key removes individual accountability and creates a long-lived credential risk."
      },
      "topic": "Configuring access and security",
      "subtopic": "Managing IAM",
      "difficulty": "easy",
      "source": "ACE exam guide 4.1 Managing IAM: assigning IAM roles to principals; IAM docs: best practices for using groups"
    },
    {
      "stem": "Operators need to start and stop Compute Engine instances in a project, and to list and view instances so they can find the right one. They must not be able to create, delete or reconfigure instances. You want to apply the principle of least privilege. What should you do?",
      "options": [
        "Create a custom role with the compute.instances list, get, start and stop permissions, and grant it to the operators' group.",
        "Grant the Compute Instance Admin (v1) role to the operators' group on the project.",
        "Grant the Compute Viewer role to the operators' group and have them request starts and stops by ticket.",
        "Grant the Editor basic role to the operators' group and review its usage in Cloud Audit Logs."
      ],
      "answer": "A",
      "explanation": "When no predefined role matches a job function exactly, a custom role lets you bundle only the permissions required. Here that is compute.instances.list, compute.instances.get, compute.instances.start and compute.instances.stop. Granting the custom role to a group keeps access least-privileged and easy to manage.",
      "rationales": {
        "A": "Correct: a custom role with only the needed permissions grants exactly what operators need.",
        "B": "Compute Instance Admin (v1) also allows creating, deleting and modifying instances, which exceeds the need.",
        "C": "Compute Viewer cannot start or stop instances, so the operators could not do their job.",
        "D": "Editor grants broad write access across most services; audit logs record misuse but do not prevent it."
      },
      "topic": "Configuring access and security",
      "subtopic": "Managing IAM",
      "difficulty": "medium",
      "source": "ACE exam guide 4.1 Managing IAM: creating custom IAM roles"
    },
    {
      "stem": "A developer must run gcloud commands as the service account deploy-sa@my-project.iam.gserviceaccount.com to test what the service account is allowed to do. You want to follow Google-recommended practices and give the developer only short-lived credentials. What should you do?",
      "options": [
        "Grant the developer the Service Account User role on the service account, and have them run gcloud auth activate-service-account.",
        "Grant the developer the Service Account Key Admin role so that they can create a key and delete it after testing.",
        "Grant the service account the Owner role on the project so that the developer inherits its permissions.",
        "Grant the developer the Service Account Token Creator role on the service account, and have them use the --impersonate-service-account flag."
      ],
      "answer": "D",
      "explanation": "Service account impersonation lets a principal obtain short-lived OAuth access tokens for a service account. The Service Account Token Creator role grants the iam.serviceAccounts.getAccessToken permission needed for this. gcloud then uses those tokens when you pass --impersonate-service-account or set the auth/impersonate_service_account property, so no key file is created.",
      "rationales": {
        "A": "activate-service-account needs a key file, and Service Account User lets you attach the account to resources, not mint tokens.",
        "B": "Service account keys are long-lived credentials; creating one contradicts the short-lived requirement.",
        "C": "Granting Owner to the service account does not let the developer act as it and violates least privilege.",
        "D": "Correct: Token Creator lets the developer impersonate the account with short-lived tokens through gcloud."
      },
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "hard",
      "source": "ACE exam guide 4.2 Managing service accounts: service account impersonation and short-lived credentials"
    },
    {
      "stem": "Your security team wants to reduce the risk of leaked service account keys across the organization while still letting workloads authenticate to Google Cloud. Some workloads run on Compute Engine and others run in an external AWS environment. Which actions should you take? Choose TWO.",
      "options": [
        "Enforce the organization policy constraint that disables service account key creation.",
        "Grant the Service Account Key Admin role to all developers so that they can rotate keys themselves.",
        "Store service account key files in a private Git repository that only the team can access.",
        "Use Workload Identity Federation for the AWS workloads and attached service accounts on Compute Engine."
      ],
      "answer": "AD",
      "explanation": "Service account keys are long-lived credentials, so Google recommends avoiding them where alternatives exist. Workloads on Compute Engine can use an attached service account and get short-lived tokens from the metadata server, and external workloads such as AWS can exchange their own credentials for Google Cloud tokens through Workload Identity Federation. Once keys are no longer needed, an organization policy that disables key creation prevents new keys being made.",
      "rationales": {
        "A": "Correct: disabling key creation by organization policy stops new long-lived keys being created anywhere in the org.",
        "B": "Letting every developer create and manage keys increases the number of keys and the risk of leaks.",
        "C": "Keys in source control, even private repositories, are a common cause of credential leaks.",
        "D": "Correct: federation and attached service accounts give workloads short-lived credentials without keys."
      },
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "medium",
      "source": "ACE exam guide 4.2 Managing service accounts: best practices for managing service account keys; Workload Identity Federation"
    }
  ]
}
```
