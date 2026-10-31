```json
{
  "format": "domcq/1",
  "exam": "gcp-ace",
  "set": "Associate Cloud Engineer practice – Core domains mixed set",
  "questions": [
    {
      "stem": "Your company has three departments: Finance, Engineering and Marketing. Each department will own several Google Cloud projects. You want to define IAM policies and organization policies once per department so that they are inherited by all of that department's projects. You want to follow Google-recommended practices. What should you do?",
      "options": [
        "Create a separate organization resource for each department and move its projects there.",
        "Add a label with the department name to each project and grant IAM roles based on the label.",
        "Create a folder for each department under the organization and place the department's projects in it.",
        "Create one project per department and make it the parent of the department's other projects."
      ],
      "answer": "C",
      "explanation": "The Google Cloud resource hierarchy is organization, folders, projects, then resources, and IAM and organization policies set on a node are inherited by everything beneath it. Folders exist precisely to group projects by department or team so that policy can be applied once at the folder level. Projects cannot be parents of other projects, labels are for organizing and billing breakdowns rather than IAM grants, and a company normally has a single organization tied to its domain.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Setting up cloud projects and accounts",
      "difficulty": "easy",
      "source": "ACE exam guide 1.1: Setting up cloud projects and accounts; Resource Manager documentation: resource hierarchy and folders"
    },
    {
      "stem": "You have created a Cloud Billing budget for a project. When actual spend reaches 100% of the budget amount, you want an automated process to run that disables billing on the project. What should you do?",
      "options": [
        "Connect the budget to a Pub/Sub topic for programmatic notifications, and have a Cloud Run function subscribed to the topic disable billing on the project.",
        "Set a threshold rule at 100% of actual spend on the budget, so that the budget blocks all further billable usage once the threshold is reached.",
        "Create a quota override on the project that limits total monthly spending to the budget amount, so that requests fail when spending exceeds it.",
        "Create a log-based alert in Cloud Logging that matches the budget alert email, and forward the alert to the team's ticketing system."
      ],
      "answer": "A",
      "explanation": "Budgets and their threshold rules only send notifications; they never stop usage or cap spending by themselves. To act automatically, you enable programmatic notifications so the budget publishes messages to a Pub/Sub topic, and code subscribed to that topic (such as a Cloud Run function) can call the Cloud Billing API to disable billing. Quotas limit resource usage, not money spent, and disabling billing can stop or delete resources, so it should be used with care.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "medium",
      "source": "ACE exam guide 1.2: Managing billing configuration; Cloud Billing documentation: budgets, programmatic notifications, disabling billing"
    },
    {
      "stem": "Your finance team wants to analyze detailed Google Cloud cost data using SQL queries and build reports on it in Looker Studio. The data should be updated automatically throughout the day without manual steps. What should you do?",
      "options": [
        "Download the monthly invoice PDF and upload it to a Cloud Storage bucket.",
        "Create a budget on the billing account with email alerts sent to the finance team.",
        "Grant the finance team the Billing Account Viewer role and use the Reports page.",
        "Enable Cloud Billing export to BigQuery for the billing account."
      ],
      "answer": "D",
      "explanation": "Cloud Billing export to BigQuery automatically writes detailed usage and cost data to a BigQuery dataset throughout the day. Because the data lands in BigQuery tables, the team can query it with SQL and connect Looker Studio directly to the dataset. The console Reports page is useful for viewing costs but does not offer SQL access, and budgets only send alerts.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "easy",
      "source": "ACE exam guide 1.2: Managing billing configuration (billing exports); Cloud Billing documentation: export Cloud Billing data to BigQuery"
    },
    {
      "stem": "A developer must link an existing project to an existing Cloud Billing account. The developer currently has no roles on either the project or the billing account. You want to grant only the access needed to perform the link and follow the principle of least privilege. Which roles should you grant? Choose TWO.",
      "options": [
        "Billing Account Administrator on the billing account",
        "Billing Account User on the billing account",
        "Editor on the project",
        "Project Billing Manager on the project"
      ],
      "answer": "BD",
      "explanation": "Linking a project to a billing account needs permissions on both sides: on the billing account, permission to associate resources with it (granted by Billing Account User), and on the project, permission to change its billing assignment (granted by Project Billing Manager or Owner). Billing Account Administrator also allows linking but adds full management of the billing account, which exceeds least privilege. The Editor role does not include the permission to change a project's billing assignment.",
      "topic": "Setting up a cloud solution environment",
      "subtopic": "Managing billing configuration",
      "difficulty": "hard",
      "source": "ACE exam guide 1.2: Managing billing configuration (linking projects to a billing account); Cloud Billing documentation: access control and roles"
    },
    {
      "stem": "You need to deploy a stateless web application that is packaged as a container image. Traffic is unpredictable and often drops to zero for several hours. You want the platform to scale automatically, including down to zero instances, without managing servers or clusters. Which Google Cloud product should you use?",
      "options": [
        "Cloud Run",
        "Compute Engine with a managed instance group",
        "Google Kubernetes Engine Standard cluster",
        "Bare Metal Solution"
      ],
      "answer": "A",
      "explanation": "Cloud Run is a fully managed serverless platform that runs container images, scales automatically with incoming requests, and can scale to zero when there is no traffic, so you pay nothing for idle time. Managed instance groups and GKE Standard clusters require you to manage VMs or nodes, which keep running and incurring cost even when idle. Bare Metal Solution provides dedicated physical servers for specialized workloads.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing compute resources",
      "difficulty": "easy",
      "source": "ACE exam guide 2.1: Planning and implementing compute resources (selecting compute choices); Cloud Run documentation: overview"
    },
    {
      "stem": "You need to store backup files in Cloud Storage. When a restore is needed, the files must be available within milliseconds. The files are typically read about once per quarter and are kept for at least a year. You want to minimize total cost, including retrieval charges. Which storage class should you use?",
      "options": [
        "Standard",
        "Nearline",
        "Coldline",
        "Archive"
      ],
      "answer": "C",
      "explanation": "All Cloud Storage classes provide millisecond access latency; they differ in storage price, retrieval charges and minimum storage duration. Coldline is designed for data accessed at most about once per quarter, with a 90-day minimum storage duration and lower storage cost than Nearline or Standard. Archive has the lowest storage price but the highest retrieval charges and is intended for data accessed less than once a year, so quarterly reads make Coldline the cheaper overall choice.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide 2.2: Planning and implementing storage and data solutions (storage classes); Cloud Storage documentation: storage classes"
    },
    {
      "stem": "You are choosing the database for a global inventory application. It needs a relational schema queried with SQL, strongly consistent transactions across multiple regions, and horizontal scaling beyond the capacity of a single database instance. Which Google Cloud product should you use?",
      "options": [
        "Cloud SQL for PostgreSQL",
        "Spanner",
        "Bigtable",
        "Firestore"
      ],
      "answer": "B",
      "explanation": "Spanner is a fully managed relational database that scales horizontally and provides strongly consistent, externally consistent transactions across regions with SQL support. Cloud SQL is relational but scales vertically within a primary instance and is regional. Bigtable is a wide-column NoSQL database without relational schemas, and Firestore is a NoSQL document database.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide 2.2: Planning and implementing storage and data solutions (choosing data products); Spanner documentation: overview"
    },
    {
      "stem": "Your Compute Engine VMs in a custom-mode VPC subnet have only internal IP addresses, and security policy forbids assigning external IP addresses to them. The VMs must download operating system updates from public repositories on the internet, and no unsolicited inbound connections from the internet may reach them. What should you do?",
      "options": [
        "Enable Private Google Access on the subnet that contains the VMs.",
        "Create a VPC firewall rule that allows ingress from 0.0.0.0/0 on TCP port 443.",
        "Reserve static internal IP addresses for each of the VMs in the subnet.",
        "Create a Cloud Router and a Cloud NAT gateway in the subnet's region."
      ],
      "answer": "D",
      "explanation": "Cloud NAT lets VMs without external IP addresses make outbound connections to the internet, and it does not allow unsolicited inbound connections to those VMs. Cloud NAT is configured on a Cloud Router in the same region as the subnet. Private Google Access only lets such VMs reach Google APIs and services, not arbitrary internet repositories, and an ingress firewall rule does nothing for outbound access.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing networking resources",
      "difficulty": "medium",
      "source": "ACE exam guide 2.3: Planning and implementing networking resources; Cloud NAT documentation: overview"
    },
    {
      "stem": "Your team wants to define its Google Cloud infrastructure as code, store the definitions in a Git repository, review a preview of every change before it is applied, and follow Google-recommended practices. What should you do?",
      "options": [
        "Write Terraform configurations that use the Google Cloud provider, and run terraform plan before terraform apply.",
        "Write shell scripts of gcloud create commands, and run them from Cloud Shell whenever the design changes.",
        "Create the resources in the Google Cloud console, and export Cloud Asset Inventory snapshots to the repository.",
        "Write startup scripts that create the resources, and attach them to a dedicated Compute Engine VM instance."
      ],
      "answer": "A",
      "explanation": "Terraform is the infrastructure-as-code tool Google recommends for Google Cloud: configurations are declarative text files that can be versioned in Git and reviewed like code. The terraform plan command shows exactly what would be created, changed or destroyed before terraform apply makes the change. Imperative gcloud scripts and console changes do not give a reliable declarative preview or keep the repository as the source of truth.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing resources using tooling",
      "difficulty": "medium",
      "source": "ACE exam guide 2.4: Planning and implementing resources using tooling (Terraform); Google Cloud documentation: Terraform on Google Cloud"
    },
    {
      "stem": "You are deploying a public web application with backends in us-central1 and europe-west1. Users worldwide must reach it through a single anycast IP address, HTTPS must be terminated at the load balancer, requests whose path begins with /api/ must go to a different backend service than all other requests, and you want to enable Cloud CDN. Which load balancer should you use?",
      "options": [
        "Regional external passthrough Network Load Balancer",
        "Global external proxy Network Load Balancer",
        "Global external Application Load Balancer",
        "Regional internal Application Load Balancer"
      ],
      "answer": "C",
      "explanation": "The global external Application Load Balancer is a layer 7 proxy with a single global anycast IP address that can serve backends in multiple regions. Its URL map routes requests to different backend services by host and path, it terminates HTTPS, and it integrates with Cloud CDN. The proxy Network Load Balancer works at layer 4 (TCP or SSL) and cannot route by URL path, while passthrough and internal load balancers do not meet the global public requirement.",
      "topic": "Planning and implementing a cloud solution",
      "subtopic": "Planning and implementing networking resources",
      "difficulty": "hard",
      "source": "ACE exam guide 2.3: Planning and implementing networking resources (load balancing); Cloud Load Balancing documentation: choose a load balancer"
    },
    {
      "stem": "You run a web application on a regional managed instance group. You have created a new instance template that uses an updated boot image. You want to replace the existing VMs with VMs based on the new template gradually, while keeping the application available throughout the change. What should you do?",
      "options": [
        "Delete the managed instance group, and create a new group from the new instance template.",
        "Start a rolling update of the group to the new instance template, setting max surge and max unavailable values.",
        "Edit the existing instance template so that it references the updated boot image.",
        "Stop each VM in the group in turn, change its boot disk to the updated image, and start it again."
      ],
      "answer": "B",
      "explanation": "Managed instance groups support rolling updates that move instances to a new instance template a few at a time. The max surge setting controls how many extra instances may be created during the update and max unavailable controls how many may be offline at once, which keeps capacity serving traffic. Instance templates are immutable, so an existing template cannot be edited, and deleting the group would cause an outage.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing compute resources",
      "difficulty": "medium",
      "source": "ACE exam guide 3.1: Managing compute resources (managed instance groups); Compute Engine documentation: automatically apply VM configuration updates in a MIG"
    },
    {
      "stem": "A Cloud Storage bucket receives new log files every day. Company policy requires that each file be deleted automatically 365 days after it was created. You want the solution that requires the least operational effort. What should you do?",
      "options": [
        "Create a Cloud Scheduler job that runs a script every night to delete old objects.",
        "Set a retention policy with a retention period of 365 days on the bucket.",
        "Enable Object Versioning on the bucket and keep one noncurrent version.",
        "Add an Object Lifecycle Management rule with a Delete action and an age of 365 days."
      ],
      "answer": "D",
      "explanation": "Object Lifecycle Management lets Cloud Storage act on objects automatically when conditions are met, and a Delete action with an age condition of 365 days removes each object a year after its creation with no code to maintain. A retention policy does the opposite: it prevents objects from being deleted or replaced until the retention period has passed. A scheduled script would work but adds code and infrastructure to operate.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing storage and data solutions",
      "difficulty": "easy",
      "source": "ACE exam guide 3.2: Managing storage and data solutions (object lifecycle management); Cloud Storage documentation: Object Lifecycle Management"
    },
    {
      "stem": "Your project uses BigQuery on-demand pricing. Before running a large query, you want to find out how many bytes it will process so you can estimate its cost, without being charged for running it. What should you do?",
      "options": [
        "Run the query with the bq command-line tool using the --dry_run flag.",
        "Add a LIMIT 10 clause to the query and run it to see the bytes processed.",
        "Run the full query and check the bytes billed in the job details afterward.",
        "Export the table to Cloud Storage and check the total size of the exported files."
      ],
      "answer": "A",
      "explanation": "A dry run validates a query and returns the number of bytes it would process without executing it, and dry runs are not charged. With on-demand pricing, cost is based on bytes processed, so this figure lets you estimate the price, for example with the Google Cloud Pricing Calculator. Adding LIMIT does not reduce the bytes scanned for most queries, because BigQuery still reads the referenced columns in full.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing storage and data solutions",
      "difficulty": "medium",
      "source": "ACE exam guide 3.2: Managing storage and data solutions (estimating BigQuery query costs); BigQuery documentation: estimate and control costs, dry runs"
    },
    {
      "stem": "Your Compute Engine VMs have no external IP addresses. Administrators must connect to them over SSH using Identity-Aware Proxy (IAP) TCP forwarding. The VPC network has no firewall rules other than the implied rules. You want to allow only the traffic that IAP needs, following the principle of least privilege. Which firewall rule should you create?",
      "options": [
        "An egress rule that allows TCP port 22 from the VMs to 0.0.0.0/0",
        "An ingress rule that allows TCP port 22 from 0.0.0.0/0 to the VMs",
        "An ingress rule that allows TCP port 22 from 35.235.240.0/20 to the VMs",
        "An ingress rule that allows TCP port 22 from 130.211.0.0/22 to the VMs"
      ],
      "answer": "C",
      "explanation": "IAP TCP forwarding connects to VMs from the IP range 35.235.240.0/20, so an ingress rule allowing TCP port 22 from that range is the minimum needed. The implied rules deny all ingress, so without such a rule the IAP connection is blocked, and egress is already allowed by the implied egress rule. Allowing 0.0.0.0/0 would also work but opens SSH far more widely than required, and 130.211.0.0/22 is a range used by Google Cloud health checks, not IAP.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Managing networking resources",
      "difficulty": "hard",
      "source": "ACE exam guide 3.3: Managing networking resources (firewall rules); IAP documentation: using IAP for TCP forwarding"
    },
    {
      "stem": "Your compliance team requires that Data Access audit logs from a project be retained for 7 years at the lowest possible cost. Logs older than 30 days are almost never read. What should you do?",
      "options": [
        "Change the retention period of the project's _Default log bucket to 7 years.",
        "Create a log sink that routes the audit logs to a Cloud Storage bucket that uses the Archive storage class.",
        "Create a log-based metric for the audit logs and keep the metric data for 7 years.",
        "Export the logs manually from Logs Explorer to a CSV file at the end of every month."
      ],
      "answer": "B",
      "explanation": "Log sinks in the Log Router continuously route matching log entries to a destination such as a Cloud Storage bucket, and the Archive storage class is the cheapest option for data that is rarely read and kept for years. Extending Cloud Logging bucket retention is possible but is billed at a higher rate than Archive storage. Log-based metrics store counts or distributions rather than the log entries themselves, and manual exports are error-prone and limited.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Monitoring and logging",
      "difficulty": "medium",
      "source": "ACE exam guide 3.4: Monitoring and logging (configuring log routers and sinks); Cloud Logging documentation: routing and storage overview"
    },
    {
      "stem": "In Cloud Monitoring, you can see CPU utilization for your Compute Engine VMs, but memory utilization metrics are not shown. You want to collect memory metrics from the guest operating systems of the VMs. What should you do?",
      "options": [
        "Enable Data Access audit logs for the Compute Engine API.",
        "Change each VM to a machine type with more memory.",
        "Create an uptime check for each VM in Cloud Monitoring.",
        "Install the Ops Agent on each of the VMs."
      ],
      "answer": "D",
      "explanation": "Compute Engine collects some metrics, such as CPU utilization, from the hypervisor without any agent, but it cannot see inside the guest operating system. Metrics such as memory and disk utilization come from the Ops Agent, which runs in the guest and sends metrics and logs to Cloud Monitoring and Cloud Logging. Uptime checks only test whether an endpoint responds, and audit logs record API activity, not resource usage.",
      "topic": "Ensuring the successful operation of a cloud solution",
      "subtopic": "Monitoring and logging",
      "difficulty": "easy",
      "source": "ACE exam guide 3.4: Monitoring and logging (installing the Ops Agent); Cloud Monitoring documentation: Ops Agent overview"
    },
    {
      "stem": "Twelve data analysts need the same set of IAM roles on a project, and analysts join and leave the team frequently. You want to minimize administrative effort and follow Google-recommended practices. What should you do?",
      "options": [
        "Add the analysts to a Google group, and grant the roles to the group.",
        "Grant the roles to each analyst's own user account individually.",
        "Create one shared user account for the team, and grant it the roles.",
        "Grant the roles to a service account, and share its key with the team."
      ],
      "answer": "A",
      "explanation": "Google recommends granting roles to groups rather than to individual users. When someone joins or leaves, you only change group membership, and the IAM policy stays the same, which reduces effort and the risk of leftover access. Shared accounts and shared service account keys remove individual accountability and create security risks.",
      "topic": "Configuring access and security",
      "subtopic": "Managing IAM",
      "difficulty": "easy",
      "source": "ACE exam guide 4.1: Managing IAM (granting roles to principals); IAM documentation: best practices for using groups"
    },
    {
      "stem": "An application running on a Compute Engine VM must read objects from a single Cloud Storage bucket. The VM currently uses the Compute Engine default service account, which has the Editor role on the project. You want to apply the principle of least privilege and follow Google-recommended practices. What should you do? Choose TWO.",
      "options": [
        "Grant the Storage Admin role on the project to the Compute Engine default service account.",
        "Create a dedicated service account, and grant it the Storage Object Viewer role on the bucket.",
        "Attach the dedicated service account to the VM in place of the default service account.",
        "Create a JSON key for the dedicated service account, and copy the key file to the VM's disk."
      ],
      "answer": "BC",
      "explanation": "Least privilege means giving a workload its own identity with only the permissions it needs on only the resources it needs. A dedicated service account with Storage Object Viewer granted on the one bucket allows reading objects there and nothing else, and attaching it to the VM lets the application get credentials from the metadata server. Service account keys on disk are a security risk and unnecessary for code running on Google Cloud, and Storage Admin on the project is far broader than reading one bucket.",
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "medium",
      "source": "ACE exam guide 4.2: Managing service accounts (assigning service accounts to resources); IAM documentation: best practices for using service accounts"
    },
    {
      "stem": "A developer needs to run gcloud commands on their workstation as a specific service account in order to test that service account's permissions. You do not want to create or distribute any service account keys. What should you do?",
      "options": [
        "Grant the developer the Owner role on the project, and have them run the commands with their own credentials.",
        "Grant the developer the Service Account Key Admin role on the service account, and have them create a key.",
        "Grant the developer the Workload Identity User role on the service account, and have them run gcloud auth login.",
        "Grant the developer the Service Account Token Creator role on the service account, and have them use impersonation."
      ],
      "answer": "D",
      "explanation": "Service account impersonation lets a user obtain short-lived credentials for a service account without any key. The Service Account Token Creator role on that service account grants the permission to create those tokens, and gcloud uses it through the --impersonate-service-account flag or the auth/impersonate_service_account setting. Running as Owner would test the developer's permissions rather than the service account's, and creating keys is what you want to avoid.",
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "medium",
      "source": "ACE exam guide 4.2: Managing service accounts (service account impersonation); IAM documentation: service account impersonation"
    },
    {
      "stem": "An application running on Amazon EC2 instances in AWS needs to write data to a BigQuery dataset. An organization policy in your Google Cloud organization prohibits creating service account keys. You want the application to authenticate to Google Cloud following Google-recommended practices. What should you do?",
      "options": [
        "Create an OAuth 2.0 client ID, and embed its client secret in the configuration of the application on each EC2 instance.",
        "Configure Workload Identity Federation with an AWS provider, and let the federated identity impersonate a service account with dataset access.",
        "Create an API key restricted to the BigQuery API, and store the key in AWS Secrets Manager for the application to read.",
        "Enable Workload Identity on a GKE cluster, and grant the cluster's Kubernetes service account access to the BigQuery dataset."
      ],
      "answer": "B",
      "explanation": "Workload Identity Federation lets workloads outside Google Cloud exchange their own credentials, here AWS credentials, for short-lived Google Cloud access tokens, so no service account key is needed. You create a workload identity pool with an AWS provider and allow the federated identity to impersonate a service account that has the required BigQuery permissions. API keys cannot authorize writes to BigQuery data, and Workload Identity for GKE only applies to workloads running in GKE clusters.",
      "topic": "Configuring access and security",
      "subtopic": "Managing service accounts",
      "difficulty": "hard",
      "source": "ACE exam guide 4.2: Managing service accounts (short-lived credentials, keyless authentication); IAM documentation: Workload Identity Federation with AWS"
    }
  ]
}
```
