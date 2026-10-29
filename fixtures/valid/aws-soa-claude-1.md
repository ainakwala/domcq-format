```json
{
  "format": "domcq/1",
  "exam": "aws-soa",
  "set": "AWS Certified CloudOps Engineer - Associate practice – Core operations set 1",
  "questions": [
    {
      "stem": "A CloudOps engineer must create an Amazon CloudWatch alarm that triggers when memory utilization on a fleet of Amazon EC2 Linux instances exceeds 80%. The engineer finds no memory metric in the AWS/EC2 namespace. Which solution will meet this requirement with the LEAST operational effort?",
      "options": [
        "Enable detailed monitoring on the instances so that memory metrics are published every minute",
        "Install and configure the unified CloudWatch agent on the instances to collect the mem_used_percent metric",
        "Write a cron script on each instance that reads memory usage and calls the PutMetricData API every minute",
        "Enable VPC Flow Logs for the subnets and create a metric filter that derives memory usage from the logs"
      ],
      "answer": "B",
      "explanation": "The default EC2 metrics come from the hypervisor, which can see CPU, network, disk and status checks but not memory usage inside the guest operating system. The unified CloudWatch agent runs inside the OS and publishes OS-level metrics such as mem_used_percent, and its configuration can be stored centrally and pushed to the fleet with Systems Manager. Detailed monitoring only changes the frequency of the existing hypervisor metrics, and a custom script works but is more code to write and maintain.",
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Implement metrics, alarms, and filters by using AWS monitoring and logging services",
      "difficulty": "easy",
      "source": "SOA-C03 Task 1.1; Amazon CloudWatch User Guide – Collect metrics and logs with the CloudWatch agent"
    },
    {
      "stem": "An application on Amazon EC2 sends its logs to an Amazon CloudWatch Logs log group. The operations team wants an email notification whenever the log group receives more than 10 log events that contain the term \"PaymentFailed\" within a 5-minute period. Which solution will meet these requirements with the LEAST operational overhead?",
      "options": [
        "Create a subscription filter that sends matching events to an AWS Lambda function that counts them and emails the team through Amazon SES",
        "Export the log group to Amazon S3 every 5 minutes and run an Amazon Athena query that publishes the count to an Amazon SNS topic",
        "Configure the CloudWatch agent on each instance to send an email to the team every time it writes a matching log line",
        "Create a metric filter for the term on the log group and a CloudWatch alarm on that metric that notifies an Amazon SNS email topic"
      ],
      "answer": "D",
      "explanation": "A metric filter turns log events that match a pattern into data points of a CloudWatch metric, with no code to run. A CloudWatch alarm using the Sum statistic over a 5-minute period with a threshold of greater than 10 can then publish to an SNS topic that has email subscriptions. The other options need custom code, scheduled jobs or capabilities the CloudWatch agent does not have.",
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Implement metrics, alarms, and filters by using AWS monitoring and logging services",
      "difficulty": "medium",
      "source": "SOA-C03 Task 1.1; Amazon CloudWatch Logs User Guide – Creating metrics from log events using filters"
    },
    {
      "stem": "A database server on Amazon EC2 uses a 500 GiB General Purpose SSD (gp2) Amazon EBS volume. During nightly batch jobs, latency increases sharply and the volume's BurstBalance metric drops to 0. The workload needs a sustained 6,000 IOPS. Which solution will meet these requirements MOST cost-effectively?",
      "options": [
        "Modify the volume to gp3 by using Elastic Volumes and provision 6,000 IOPS",
        "Increase the size of the gp2 volume to 2,000 GiB to raise its baseline IOPS",
        "Modify the volume to Provisioned IOPS SSD (io2) and provision 6,000 IOPS",
        "Modify the volume to Throughput Optimized HDD (st1) to remove burst limits"
      ],
      "answer": "A",
      "explanation": "A gp2 volume gets a baseline of 3 IOPS per GiB, so 500 GiB gives 1,500 IOPS with bursts to 3,000 while credits last; a BurstBalance of 0 means the volume has fallen back to its baseline. gp3 decouples performance from size: it includes 3,000 IOPS and lets you provision more IOPS at a low price, and Elastic Volumes changes the type in place without detaching the volume. Growing gp2 to 2,000 GiB or moving to io2 would also deliver 6,000 IOPS but costs more, and st1 is unsuited to random database I/O.",
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Implement performance optimization strategies for compute, storage, and database resources",
      "difficulty": "medium",
      "source": "SOA-C03 Task 1.3; Amazon EBS User Guide – Amazon EBS volume types (General Purpose SSD gp2 and gp3)"
    },
    {
      "stem": "An application publishes a custom Amazon CloudWatch metric named FailedJobs only when a job fails; when no jobs fail, no data points are published. A CloudWatch alarm on this metric uses the Sum statistic with a threshold of FailedJobs >= 1 over one 5-minute period. The alarm is often in the INSUFFICIENT_DATA state, which the operations team's dashboards treat as a problem. The team wants the alarm to be in the OK state whenever no failures are reported. What should a CloudOps engineer do?",
      "options": [
        "Change the alarm statistic from Sum to SampleCount so that periods without data are counted as zero",
        "Increase the alarm period to 1 hour so that the alarm always receives at least one data point",
        "Configure the alarm to treat missing data as notBreaching",
        "Configure the alarm to treat missing data as missing and set the datapoints to alarm to 1 out of 1"
      ],
      "answer": "C",
      "explanation": "By default a CloudWatch alarm treats missing data as missing, so when every period in the evaluation range has no data points the alarm moves to INSUFFICIENT_DATA. Setting the missing data treatment to notBreaching tells CloudWatch to treat those empty periods as within the threshold, so the alarm stays in OK until a failure is actually published. Changing the statistic or the period does not create data points for periods in which nothing was published.",
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Implement metrics, alarms, and filters by using AWS monitoring and logging services",
      "difficulty": "hard",
      "source": "SOA-C03 Task 1.1; Amazon CloudWatch User Guide – Configuring how CloudWatch alarms treat missing data"
    },
    {
      "stem": "A company runs a critical application on a single Amazon EC2 instance that uses only Amazon EBS volumes. If the underlying host has a hardware failure, the company wants the instance moved automatically to healthy hardware while keeping its instance ID, private IP addresses, and EBS volumes. Which solution will meet these requirements?",
      "options": [
        "Place the instance in an Auto Scaling group with a minimum and maximum size of 1",
        "Create a CloudWatch alarm on the StatusCheckFailed_Instance metric with a reboot action",
        "Create an Amazon EventBridge rule that terminates the instance when a scheduled event is issued",
        "Create a CloudWatch alarm on the StatusCheckFailed_System metric with a recover action"
      ],
      "answer": "D",
      "explanation": "System status checks detect problems with the AWS infrastructure that hosts the instance, such as host hardware, power or network failures. The EC2 recover action moves the instance to new hardware and keeps its instance ID, private IP addresses, Elastic IP addresses, instance metadata and attached EBS volumes. An Auto Scaling group would launch a replacement instance with a new ID, and instance status check failures point to problems inside the guest OS, not the host.",
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Identify and remediate issues by using monitoring and availability metrics",
      "difficulty": "easy",
      "source": "SOA-C03 Task 1.2; Amazon EC2 User Guide – Status checks for instances and Recover your instance"
    },
    {
      "stem": "A web application runs on Amazon EC2 instances in an Auto Scaling group. Traffic varies throughout the day, and the company wants to keep the group's average CPU utilization near 50% by adding and removing instances automatically. Which scaling approach will meet this requirement with the LEAST operational effort?",
      "options": [
        "A target tracking scaling policy on the ASGAverageCPUUtilization metric with a target value of 50",
        "A set of scheduled scaling actions that change the desired capacity at fixed times every hour",
        "A step scaling policy with separate CloudWatch alarms for scaling out and for scaling in",
        "A simple scaling policy that adds one instance at a time with a cooldown period of 300 seconds"
      ],
      "answer": "A",
      "explanation": "Target tracking works like a thermostat: you choose a metric and a target value, and Amazon EC2 Auto Scaling creates and manages the CloudWatch alarms and calculates how much to scale to keep the metric near the target. Step and simple scaling can work but require you to define and tune alarms and adjustments yourself. Scheduled actions suit predictable patterns, not keeping a metric at a set value.",
      "topic": "Reliability and Business Continuity",
      "subtopic": "Implement scalability and elasticity",
      "difficulty": "easy",
      "source": "SOA-C03 Task 2.1; Amazon EC2 Auto Scaling User Guide – Target tracking scaling policies"
    },
    {
      "stem": "A company runs a stateless web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are in an Auto Scaling group that launches instances into a single subnet in one Availability Zone. The company must keep the application available if an entire Availability Zone fails. Which actions should a CloudOps engineer take to meet this requirement? (Choose TWO.)",
      "options": [
        "Launch the instances into a cluster placement group to improve their resilience",
        "Configure the Auto Scaling group to use subnets in at least two Availability Zones",
        "Change the instances to a larger instance type so that each can absorb more load",
        "Allocate an Elastic IP address to each instance so that traffic can be moved quickly",
        "Ensure the ALB has an enabled subnet in each Availability Zone that the group uses"
      ],
      "answer": "BE",
      "explanation": "To survive the loss of an Availability Zone, compute capacity must exist in more than one zone, so the Auto Scaling group needs subnets in at least two zones and will rebalance and replace capacity there. The load balancer can route only to targets in zones where it has an enabled subnet, so its zones must match the group's. A cluster placement group packs instances close together in one zone, which reduces resilience, and larger instances or Elastic IPs do nothing for zone failure.",
      "topic": "Reliability and Business Continuity",
      "subtopic": "Implement highly available and resilient environments",
      "difficulty": "medium",
      "source": "SOA-C03 Task 2.2; Amazon EC2 Auto Scaling User Guide – Add Availability Zones; Elastic Load Balancing – Availability Zones for your ALB"
    },
    {
      "stem": "A company must back up its Amazon EBS volumes, Amazon RDS databases, and Amazon EFS file systems daily, keep the backups for 35 days, and keep a copy of every backup in a second AWS Region for disaster recovery. Which solution will meet these requirements with the LEAST operational overhead?",
      "options": [
        "Create Amazon Data Lifecycle Manager policies for all three resource types and enable cross-Region copy in each policy",
        "Write an AWS Lambda function that creates backups of each resource daily and copies them to the second Region",
        "Create an AWS Backup plan with a daily rule, 35-day retention, and a copy action to a vault in the second Region",
        "Enable the native backup feature of each service and use AWS DataSync to copy the backups to the second Region"
      ],
      "answer": "C",
      "explanation": "AWS Backup centrally manages backups for many services, including EBS, RDS and EFS, from a single backup plan that defines frequency, retention and copy actions to a vault in another Region. Resources can be assigned to the plan by tag, so new resources are protected without extra work. Data Lifecycle Manager handles only EBS snapshots and EBS-backed AMIs, and custom Lambda code or DataSync adds effort and is not designed for this.",
      "topic": "Reliability and Business Continuity",
      "subtopic": "Implement backup and restore strategies",
      "difficulty": "medium",
      "source": "SOA-C03 Task 2.3; AWS Backup Developer Guide – Backup plans and Creating backup copies across AWS Regions"
    },
    {
      "stem": "A company runs an Amazon Aurora MySQL-Compatible Edition DB cluster with Backtrack enabled and a target backtrack window of 24 hours. A developer accidentally deleted rows from a critical table 30 minutes ago. The company must return the database to its state just before the deletion as quickly as possible and must keep the same cluster endpoints. Which solution will meet these requirements?",
      "options": [
        "Perform a point-in-time restore of the cluster to a time just before the deletion",
        "Restore the most recent automated snapshot and replay binary logs up to the deletion",
        "Promote an Aurora Replica in the cluster and point the application to that replica",
        "Backtrack the DB cluster to a timestamp just before the deletion occurred"
      ],
      "answer": "D",
      "explanation": "Aurora Backtrack rewinds the existing Aurora MySQL cluster in place to an earlier time within the backtrack window, usually within minutes, so the cluster and its endpoints stay the same. Point-in-time restore and snapshot restore both create a new cluster with new endpoints and take longer. Aurora Replicas share the same cluster storage volume, so the deleted rows are already gone from them too.",
      "topic": "Reliability and Business Continuity",
      "subtopic": "Implement backup and restore strategies",
      "difficulty": "hard",
      "source": "SOA-C03 Task 2.3; Amazon Aurora User Guide – Backtracking an Aurora DB cluster"
    },
    {
      "stem": "A CloudOps engineer needs to update an AWS CloudFormation stack that manages production resources. Before applying the update, the engineer must see which resources will be added, modified, or replaced. What should the engineer do?",
      "options": [
        "Enable termination protection on the stack and then submit the update",
        "Create a change set with the updated template and review it before executing",
        "Run drift detection on the stack before submitting the updated template",
        "Apply a stack policy that denies updates to all resources and then update"
      ],
      "answer": "B",
      "explanation": "A change set compares the updated template and parameters with the current stack and lists each resource that will be added, modified or removed, including whether a modification requires replacement. Nothing changes until the change set is executed, so it is a safe preview. Drift detection compares live resources with the current template, not with a proposed update, and termination protection and stack policies do not show what will change.",
      "topic": "Deployment, Provisioning, and Automation",
      "subtopic": "Provision and maintain cloud resources",
      "difficulty": "easy",
      "source": "SOA-C03 Task 3.1; AWS CloudFormation User Guide – Update CloudFormation stacks using change sets"
    },
    {
      "stem": "A company has 300 Amazon EC2 instances running Amazon Linux 2023 and Windows Server. All instances are managed nodes in AWS Systems Manager. The company must install approved security patches automatically every Sunday at 02:00 and report patch compliance. Which solution will meet these requirements with the LEAST operational overhead?",
      "options": [
        "Use Systems Manager Patch Manager with patch baselines and a maintenance window that runs AWS-RunPatchBaseline every Sunday",
        "Create a scheduled task or cron job on each instance that runs the operating system's update command every Sunday",
        "Use AWS Config to detect missing patches and invoke an AWS Lambda function that connects to each instance to patch it",
        "Build a new AMI every week with EC2 Image Builder and manually replace all of the running instances on Sunday"
      ],
      "answer": "A",
      "explanation": "Patch Manager uses patch baselines to define which patches are approved for each operating system, and a maintenance window can run the AWS-RunPatchBaseline document on a schedule across Linux and Windows nodes. The results feed Patch Manager compliance reporting, so the team gets both automated patching and a compliance view. Per-instance cron jobs, custom Lambda code or manual instance replacement all require far more effort and give no central compliance data.",
      "topic": "Deployment, Provisioning, and Automation",
      "subtopic": "Automate the management of existing resources",
      "difficulty": "medium",
      "source": "SOA-C03 Task 3.2; AWS Systems Manager User Guide – Patch Manager and Maintenance Windows"
    },
    {
      "stem": "A company uses AWS Organizations. A CloudOps engineer must deploy the same AWS CloudFormation template, which creates an IAM role and an Amazon CloudWatch alarm, to every account in a specific organizational unit (OU). Accounts added to the OU later must receive the resources automatically, and accounts that leave the OU must have the resources removed. Which combination of steps will meet these requirements with the LEAST operational effort? (Choose TWO.)",
      "options": [
        "Create a StackSet with self-managed permissions and create the execution role in each account manually",
        "Create a CloudFormation StackSet that uses service-managed permissions and targets the OU",
        "Create an IAM user in each member account and deploy the template from a script that loops over accounts",
        "Enable automatic deployment on the StackSet and choose to delete stacks when accounts leave the OU",
        "Subscribe an Amazon SNS topic to AWS Organizations events and create stacks manually when notified"
      ],
      "answer": "BD",
      "explanation": "StackSets with service-managed permissions use AWS Organizations trusted access, so CloudFormation creates the required roles in member accounts and can target whole OUs. Automatic deployment, which is available only with service-managed permissions, deploys stack instances to accounts that join the target OU and, when stack retention is turned off, deletes them from accounts that leave it. Self-managed permissions, scripts and manual steps cannot react to OU membership changes automatically.",
      "topic": "Deployment, Provisioning, and Automation",
      "subtopic": "Provision and maintain cloud resources",
      "difficulty": "medium",
      "source": "SOA-C03 Task 3.1; AWS CloudFormation User Guide – StackSets with service-managed permissions and automatic deployments"
    },
    {
      "stem": "An AWS CloudFormation stack update failed, and the automatic rollback also failed. The stack is now in the UPDATE_ROLLBACK_FAILED state. Investigation shows that an AWS Lambda function managed by the stack was deleted manually outside of CloudFormation, so CloudFormation cannot roll it back. The CloudOps engineer must return the stack to a state that allows future updates, without deleting the stack. What should the engineer do?",
      "options": [
        "Delete the stack and redeploy it from the last known working template",
        "Run CancelUpdateStack on the stack and then retry the original update",
        "Run ContinueUpdateRollback and list the deleted function in ResourcesToSkip",
        "Run drift detection on the stack and then import the deleted function"
      ],
      "answer": "C",
      "explanation": "A stack in UPDATE_ROLLBACK_FAILED cannot be updated until the rollback completes. ContinueUpdateRollback retries the rollback, and listing resources that cannot be rolled back in ResourcesToSkip lets CloudFormation mark them as complete so the stack reaches UPDATE_ROLLBACK_COMPLETE. CancelUpdateStack works only while an update is in progress, and deleting the stack violates the requirement; afterwards the engineer should make the template and the real resources consistent again.",
      "topic": "Deployment, Provisioning, and Automation",
      "subtopic": "Provision and maintain cloud resources",
      "difficulty": "hard",
      "source": "SOA-C03 Task 3.1; AWS CloudFormation User Guide – Continue rolling back an update (UPDATE_ROLLBACK_FAILED troubleshooting)"
    },
    {
      "stem": "An application on Amazon EC2 connects to an Amazon RDS for MySQL database by using credentials that are hardcoded in a configuration file. The security team requires the credentials to be stored encrypted and rotated automatically every 30 days. Which solution will meet these requirements with the LEAST effort?",
      "options": [
        "Store the credentials as a SecureString parameter in AWS Systems Manager Parameter Store",
        "Encrypt the configuration file with an AWS KMS customer managed key that has key rotation turned on",
        "Import the credentials into AWS Certificate Manager (ACM) and enable managed renewal",
        "Store the credentials in AWS Secrets Manager and turn on automatic rotation every 30 days"
      ],
      "answer": "D",
      "explanation": "Secrets Manager encrypts secrets with AWS KMS and has built-in rotation for Amazon RDS credentials on a schedule you choose, updating both the secret and the database password. Parameter Store SecureString parameters are encrypted but have no built-in rotation. KMS key rotation changes the key material used for encryption, not the database password, and ACM manages TLS certificates, not database credentials.",
      "topic": "Security and Compliance",
      "subtopic": "Implement strategies to protect data and infrastructure",
      "difficulty": "easy",
      "source": "SOA-C03 Task 4.2; AWS Secrets Manager User Guide – Rotate AWS Secrets Manager secrets"
    },
    {
      "stem": "A company's security policy requires that every new Amazon EBS volume and snapshot created in an AWS Region is encrypted, including volumes launched by Auto Scaling groups and by teams that might forget to select encryption. Which solution will meet this requirement with the LEAST operational effort?",
      "options": [
        "Create an AWS Config rule that detects unencrypted volumes and notifies their owners",
        "Turn on Amazon EBS encryption by default for the account in that Region",
        "Update every launch template to set the Encrypted parameter on each block device",
        "Use Amazon Macie to scan new volumes and encrypt any volume that is unencrypted"
      ],
      "answer": "B",
      "explanation": "EBS encryption by default is a per-account, per-Region setting that forces every new volume to be encrypted, regardless of how it is created, using the default or a chosen KMS key. Snapshots taken from encrypted volumes are also encrypted. A Config rule only detects the problem after the fact, editing every launch template misses other creation paths, and Macie inspects data in Amazon S3, not EBS volumes.",
      "topic": "Security and Compliance",
      "subtopic": "Implement strategies to protect data and infrastructure",
      "difficulty": "medium",
      "source": "SOA-C03 Task 4.2; Amazon EBS User Guide – Enable Amazon EBS encryption by default"
    },
    {
      "stem": "Account A owns an Amazon S3 bucket whose objects are encrypted with SSE-KMS by using a customer managed AWS KMS key in Account A. The bucket policy grants an IAM role in Account B permission to call s3:GetObject, and the role's IAM policy allows s3:GetObject on the bucket. When applications that use the role try to download objects, the requests fail with an AccessDenied error. Which combination of actions will resolve the issue? (Choose TWO.)",
      "options": [
        "Add a statement to the KMS key policy in Account A that allows Account B to use kms:Decrypt",
        "Change the bucket's default encryption setting from SSE-KMS to SSE-C for all objects",
        "Attach an IAM policy to the role in Account B that allows kms:Decrypt on the key's ARN",
        "Create a grant on the AWS managed key aws/s3 that allows the role in Account B to decrypt",
        "Enable S3 Object Lock on the bucket in Account A to allow cross-account object reads"
      ],
      "answer": "AC",
      "explanation": "To download an SSE-KMS object, the caller needs permission to use the KMS key as well as to read the object. For cross-account use, the key policy in the owning account must allow the external account, and an IAM policy in the external account must delegate kms:Decrypt on that key to the role; both are required. The AWS managed aws/s3 key cannot be used across accounts, and Object Lock or SSE-C do not grant any access.",
      "topic": "Security and Compliance",
      "subtopic": "Implement and manage security and compliance tools and policies",
      "difficulty": "hard",
      "source": "SOA-C03 Task 4.1; AWS KMS Developer Guide – Allowing users in other accounts to use a KMS key"
    },
    {
      "stem": "A company serves static files from an Amazon S3 bucket through an Amazon CloudFront distribution. Users can currently bypass CloudFront by downloading objects directly from the S3 bucket URL. The company must ensure that the objects are accessible only through CloudFront. Which solution will meet this requirement?",
      "options": [
        "Enable S3 Transfer Acceleration on the bucket and block its standard endpoints",
        "Enable static website hosting on the bucket and set CloudFront as the index document",
        "Use origin access control (OAC) and a bucket policy that allows only that distribution",
        "Configure CloudFront field-level encryption so that only CloudFront can read objects"
      ],
      "answer": "C",
      "explanation": "With origin access control, CloudFront signs its requests to the S3 origin, and the bucket policy allows s3:GetObject only for the CloudFront service principal with a condition on the distribution's ARN. With S3 Block Public Access kept on, direct requests to the bucket URL are denied while requests through CloudFront succeed. Transfer Acceleration, website hosting and field-level encryption do not restrict who can read the bucket.",
      "topic": "Networking and Content Delivery",
      "subtopic": "Configure domains, DNS services, and content delivery",
      "difficulty": "easy",
      "source": "SOA-C03 Task 5.2; Amazon CloudFront Developer Guide – Restrict access to an Amazon S3 origin (origin access control)"
    },
    {
      "stem": "Amazon EC2 instances in private subnets upload several terabytes of data each day to Amazon S3 buckets in the same AWS Region. The traffic currently flows through a NAT gateway, and the NAT gateway data processing charges are high. Which solution will reduce these costs the MOST while keeping the instances in private subnets and the traffic off the public internet?",
      "options": [
        "Create an S3 gateway VPC endpoint and associate it with the private subnets' route tables",
        "Create an S3 interface VPC endpoint in each private subnet and use its endpoint DNS names",
        "Move the instances to public subnets and send S3 traffic through an internet gateway",
        "Enable S3 Transfer Acceleration on the buckets and use the accelerate endpoint names"
      ],
      "answer": "A",
      "explanation": "A gateway VPC endpoint for S3 adds a route that uses the S3 prefix list as the destination, so traffic to S3 in the same Region goes directly over the AWS network instead of through the NAT gateway. Gateway endpoints for S3 have no hourly or data processing charges. An interface endpoint also keeps traffic private but is billed per hour and per GB, and moving instances to public subnets breaks the stated requirement.",
      "topic": "Networking and Content Delivery",
      "subtopic": "Implement and optimize networking features and connectivity",
      "difficulty": "medium",
      "source": "SOA-C03 Task 5.1; Amazon VPC – AWS PrivateLink guide, Gateway endpoints for Amazon S3"
    },
    {
      "stem": "A company hosts its website behind an Application Load Balancer (ALB) in us-east-1 and keeps a static maintenance site in an Amazon S3 bucket configured for website hosting in us-west-2. The company uses Amazon Route 53 for DNS. Users must be sent to the maintenance site automatically, and only when the primary website is unhealthy. Which Route 53 configuration will meet these requirements?",
      "options": [
        "A simple routing record that lists both the ALB and the S3 website endpoint as values",
        "Latency routing records for both endpoints with a health check on the S3 record only",
        "Geolocation records that send North America to the ALB and other locations to S3",
        "Failover records with the ALB alias as primary, evaluating target health, and S3 as secondary"
      ],
      "answer": "D",
      "explanation": "Failover routing is designed for active-passive setups: Route 53 answers with the primary record while it is healthy and switches to the secondary record when it is not. Enabling Evaluate Target Health on the ALB alias record lets Route 53 use the load balancer's health without a separate health check. Simple routing has no health checking, and latency or geolocation routing would send some users to the maintenance site even when the main site is healthy.",
      "topic": "Networking and Content Delivery",
      "subtopic": "Configure domains, DNS services, and content delivery",
      "difficulty": "medium",
      "source": "SOA-C03 Task 5.2; Amazon Route 53 Developer Guide – Failover routing and Configuring DNS failover"
    },
    {
      "stem": "A public web server on Amazon EC2 is in a subnet that uses a custom network ACL. The instance's security group allows inbound TCP 443 from 0.0.0.0/0. The network ACL has one inbound rule that allows TCP 443 from 0.0.0.0/0 and one outbound rule that allows TCP 443 to 0.0.0.0/0, followed by the default deny rules. Clients on the internet cannot complete HTTPS connections to the server. What is a reason for this issue?",
      "options": [
        "The security group needs an outbound rule that allows TCP 443 to 0.0.0.0/0",
        "The network ACL does not allow outbound traffic to client ephemeral ports 1024-65535",
        "The network ACL evaluates its rules from the highest rule number to the lowest",
        "The network ACL must also allow inbound ICMP traffic for the TLS handshake to work"
      ],
      "answer": "B",
      "explanation": "Network ACLs are stateless, so return traffic must be allowed explicitly. The server's responses go to the client's source port, which is an ephemeral port, typically in the range 1024-65535, not port 443, so the outbound rule must allow those ports. Security groups are stateful and automatically allow responses to allowed inbound traffic, and network ACL rules are evaluated from the lowest rule number upward.",
      "topic": "Networking and Content Delivery",
      "subtopic": "Troubleshoot network connectivity issues",
      "difficulty": "medium",
      "source": "SOA-C03 Task 5.3; Amazon VPC User Guide – Network ACLs and Ephemeral ports"
    }
  ]
}
```
