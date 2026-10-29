```json
{
  "format": "domcq/1",
  "exam": "aws-soa",
  "set": "AWS Certified CloudOps Engineer - Associate practice – Core operations set 1",
  "questions": [
    {
      "stem": "A company runs a fleet of Amazon EC2 Linux instances. The operations team must create Amazon CloudWatch alarms based on each instance's memory utilization and disk space utilization, but these metrics do not appear in CloudWatch. Which solution will meet these requirements?",
      "options": [
        "Enable detailed monitoring on each EC2 instance",
        "Install and configure the CloudWatch agent on each instance",
        "Enable VPC Flow Logs for the subnets that contain the instances",
        "Turn on AWS CloudTrail data events for the EC2 instances"
      ],
      "answer": "B",
      "explanation": "The default EC2 metrics are collected at the hypervisor level (CPU, network, status checks and similar), so they cannot see memory or file system usage, which exist only inside the guest operating system. The CloudWatch agent runs inside the OS and publishes these values as custom metrics (by default in the CWAgent namespace), which can then be used in alarms. Detailed monitoring only increases the frequency of the same default metrics to 1 minute; it does not add new ones.",
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Implement metrics, alarms, and filters by using AWS monitoring and logging services",
      "difficulty": "easy",
      "source": "SOA-C03 exam guide, Domain 1 Task 1.1; Amazon CloudWatch User Guide: Collect metrics and logs with the CloudWatch agent"
    },
    {
      "stem": "An application on Amazon EC2 sends its logs to an Amazon CloudWatch Logs log group. The operations team wants to receive an email notification whenever the word ERROR appears in the logs more than 5 times within 5 minutes. Which solution will meet these requirements with the LEAST operational effort?",
      "options": [
        "Export the log group to Amazon S3 every 5 minutes and use S3 Event Notifications to email the team",
        "Create a subscription filter on the log group that publishes matching events directly to an Amazon SNS topic",
        "Enable CloudWatch anomaly detection on the IncomingLogEvents metric of the log group and email the team",
        "Create a metric filter for ERROR on the log group and a CloudWatch alarm on that metric that notifies an SNS topic"
      ],
      "answer": "D",
      "explanation": "A metric filter turns log events that match a pattern into a CloudWatch metric, so each ERROR line increments a count. A CloudWatch alarm on that metric with the Sum statistic, a 5-minute period and a threshold of greater than 5 can then notify an SNS topic that has an email subscription. Subscription filters can only deliver to Kinesis Data Streams, Amazon Data Firehose, Lambda or OpenSearch Service, not directly to SNS, and they do not count events. IncomingLogEvents counts all log events, not just errors.",
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Implement metrics, alarms, and filters by using AWS monitoring and logging services",
      "difficulty": "easy",
      "source": "SOA-C03 exam guide, Domain 1 Task 1.1; Amazon CloudWatch Logs User Guide: Creating metrics from log events using filters"
    },
    {
      "stem": "An application runs on a single Amazon EC2 instance that uses only Amazon EBS volumes. If there is a problem with the underlying AWS host hardware, the instance must automatically move to healthy hardware while keeping its instance ID, private IP addresses, Elastic IP address and attached EBS volumes. The operations team must also be notified by email. Which solution will meet these requirements?",
      "options": [
        "Create a CloudWatch alarm on StatusCheckFailed_System with an EC2 recover action and an Amazon SNS notification",
        "Create a CloudWatch alarm on StatusCheckFailed_Instance with an EC2 reboot action and an Amazon SNS notification",
        "Place the instance in an Auto Scaling group of one instance that uses EC2 health checks and SNS notifications",
        "Create an AWS Config rule that detects impaired instances and runs a Systems Manager Automation reboot runbook"
      ],
      "answer": "A",
      "explanation": "A failed system status check indicates a problem with the AWS infrastructure the instance runs on, such as host hardware, power or network. The EC2 recover alarm action migrates the instance to new hardware while preserving its instance ID, private IP addresses, Elastic IP addresses, metadata and attached EBS volumes, and the same alarm can notify an SNS topic. An instance status check failure points to the guest OS, and a reboot does not move the instance to new hardware. An Auto Scaling group replaces the instance with a new one that has a new instance ID and IP address.",
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Identify and remediate issues by using monitoring and availability metrics",
      "difficulty": "medium",
      "source": "SOA-C03 exam guide, Domain 1 Task 1.2; Amazon EC2 User Guide: Status checks and Recover your instance (CloudWatch alarm actions)"
    },
    {
      "stem": "An application runs on an Amazon EC2 instance with a 500 GiB General Purpose SSD (gp2) Amazon EBS volume. Monitoring shows that the volume is limited to about 1,500 IOPS, but the application needs a consistent 6,000 IOPS. The volume must not be made larger, and the change must not require downtime. Which solution is the MOST cost-effective?",
      "options": [
        "Increase the size of the gp2 volume to 2,000 GiB to raise its baseline IOPS",
        "Modify the volume to a Provisioned IOPS SSD (io2) volume with 64,000 IOPS",
        "Modify the volume to General Purpose SSD (gp3) and provision 6,000 IOPS",
        "Modify the volume to a Throughput Optimized HDD (st1) volume of the same size"
      ],
      "answer": "C",
      "explanation": "gp2 performance is tied to size at 3 IOPS per GiB, so a 500 GiB volume has a baseline of 1,500 IOPS. gp3 decouples IOPS and throughput from size: it includes a 3,000 IOPS baseline at any size, lets you provision more independently, and costs less per GiB than gp2. With Elastic Volumes, the volume type and IOPS can be changed while the volume is attached and in use. Growing the volume breaks the size constraint, io2 at 64,000 IOPS is far more than needed and much more expensive, and st1 is an HDD type designed for sequential throughput rather than high IOPS.",
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Implement performance optimization strategies for compute, storage, and database resources",
      "difficulty": "medium",
      "source": "SOA-C03 exam guide, Domain 1 Task 1.3; Amazon EBS User Guide: Amazon EBS volume types (gp2, gp3) and Modify a volume using Elastic Volumes"
    },
    {
      "stem": "A scheduled AWS Lambda function publishes a custom Amazon CloudWatch metric named FailedJobs with a value of 1 only when a job fails. When jobs succeed, no data point is published. An alarm on FailedJobs uses the Sum statistic, a 5-minute period and a threshold of greater than or equal to 1 for 1 evaluation period. The alarm is in the INSUFFICIENT_DATA state most of the time, which confuses the on-call team. The team wants the alarm to be in the OK state when no failures are reported and in the ALARM state when a failure occurs. Which change will meet these requirements?",
      "options": [
        "Set the alarm's treatment of missing data to missing",
        "Set the alarm's treatment of missing data to notBreaching",
        "Set the alarm's treatment of missing data to breaching",
        "Set the alarm's treatment of missing data to ignore"
      ],
      "answer": "B",
      "explanation": "CloudWatch alarms let you choose how missing data points are evaluated. With notBreaching, a period with no data is treated as within the threshold, so the alarm moves to OK when no failures are published, while a published value of 1 still breaches and moves it to ALARM. The default, missing, leaves the alarm in INSUFFICIENT_DATA when all points in the evaluation range are missing. breaching would raise the alarm whenever there are no failures, and ignore keeps the current state, so the alarm would stay in INSUFFICIENT_DATA or remain in ALARM after a single failure.",
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Implement metrics, alarms, and filters by using AWS monitoring and logging services",
      "difficulty": "hard",
      "source": "SOA-C03 exam guide, Domain 1 Task 1.1; Amazon CloudWatch User Guide: Configuring how CloudWatch alarms treat missing data"
    },
    {
      "stem": "An e-commerce application runs on Amazon EC2 instances in an Auto Scaling group that uses a target tracking scaling policy on average CPU utilization. Every weekday at 09:00, traffic rises sharply. New instances take about 10 minutes to become ready, so users experience slow responses early each morning. Traffic is low and steady outside business hours. Which solution will resolve this issue in the MOST cost-effective way?",
      "options": [
        "Lower the target value of the target tracking policy from 60% CPU to 30% CPU",
        "Increase the health check grace period of the Auto Scaling group to 15 minutes",
        "Replace the target tracking policy with a step scaling policy that adds more instances per step",
        "Add a scheduled action that raises the group's minimum capacity at 08:45 every weekday"
      ],
      "answer": "D",
      "explanation": "Dynamic scaling policies react only after load arrives, so when instances take minutes to warm up, a predictable surge causes a period of under-capacity. A scheduled action raises the minimum (and therefore desired) capacity shortly before the known peak, so instances are ready when traffic arrives, and a second scheduled action can lower it again in the evening while target tracking still handles unexpected changes. Lowering the CPU target keeps extra instances running all day and still reacts late, a longer grace period only delays health-check replacement, and step scaling is still reactive.",
      "topic": "Reliability and Business Continuity",
      "subtopic": "Implement scalability and elasticity",
      "difficulty": "medium",
      "source": "SOA-C03 exam guide, Domain 2 Task 2.1; Amazon EC2 Auto Scaling User Guide: Scheduled scaling"
    },
    {
      "stem": "A company runs a production Amazon RDS for PostgreSQL DB instance in a single Availability Zone. The database must remain available if that Availability Zone fails, with automatic failover and no change to the database endpoint that the application uses. Which solution will meet these requirements?",
      "options": [
        "Convert the DB instance to a Multi-AZ deployment",
        "Create a read replica of the DB instance in another Availability Zone",
        "Enable automated backups with a 35-day retention period",
        "Modify the DB instance to use a larger instance class"
      ],
      "answer": "A",
      "explanation": "A Multi-AZ deployment keeps a synchronously replicated standby in a different Availability Zone. If the primary or its Availability Zone fails, RDS fails over automatically and points the existing DNS endpoint at the new primary, so the application keeps the same connection string. A read replica uses asynchronous replication and must be promoted manually, after which it has its own endpoint. Backups require a restore to a new instance, and a larger instance class adds no redundancy.",
      "topic": "Reliability and Business Continuity",
      "subtopic": "Implement highly available and resilient environments",
      "difficulty": "easy",
      "source": "SOA-C03 exam guide, Domain 2 Task 2.2; Amazon RDS User Guide: Multi-AZ DB instance deployments"
    },
    {
      "stem": "A company must back up its Amazon EBS volumes and Amazon RDS DB instances every day, keep each backup for 35 days, and keep a copy of every backup in a second AWS Region for disaster recovery. The company wants a single, centrally managed solution. Which solution will meet these requirements with the LEAST operational overhead?",
      "options": [
        "Use Amazon Data Lifecycle Manager for the EBS volumes and RDS automated backup replication for the databases",
        "Schedule an AWS Lambda function with Amazon EventBridge that creates snapshots and copies them to the second Region",
        "Create an AWS Backup plan with a daily rule, 35-day retention and a copy action to a backup vault in the second Region",
        "Store the snapshots in an Amazon S3 bucket and enable S3 Cross-Region Replication to a bucket in the second Region"
      ],
      "answer": "C",
      "explanation": "AWS Backup provides policy-based, centrally managed backups across many services, including EBS and RDS. A backup plan rule defines the schedule and retention, and a copy action automatically copies each recovery point to a backup vault in another Region with its own retention; resources can be assigned by tag. Using Data Lifecycle Manager and RDS replication works but means two separately managed tools, and a Lambda function is custom code to maintain. EBS and RDS snapshots are stored by AWS and are not objects in a customer S3 bucket, so S3 replication cannot copy them.",
      "topic": "Reliability and Business Continuity",
      "subtopic": "Implement backup and restore strategies",
      "difficulty": "medium",
      "source": "SOA-C03 exam guide, Domain 2 Task 2.3; AWS Backup Developer Guide: Backup plans and Creating backup copies across AWS Regions"
    },
    {
      "stem": "A stateless web application runs on a single Amazon EC2 instance in one Availability Zone. Users connect to the instance through an Elastic IP address. The company needs the application to stay available if the instance fails or if an entire Availability Zone becomes unavailable. Which combination of steps will meet these requirements? (Choose TWO.)",
      "options": [
        "Allocate a second Elastic IP address and remap it with a script when the instance fails",
        "Create an Auto Scaling group that launches instances across at least two Availability Zones",
        "Launch the instances in a cluster placement group so that they stay close together",
        "Increase the instance size and enable detailed monitoring on the instance",
        "Place an Application Load Balancer with subnets in those Availability Zones in front of the group"
      ],
      "answer": "BE",
      "explanation": "An Auto Scaling group spread across multiple Availability Zones replaces unhealthy instances and keeps capacity running in the remaining zones if one fails. An Application Load Balancer with nodes in the same zones gives users a single stable DNS name and sends traffic only to healthy targets, replacing the single Elastic IP as the entry point. Remapping an Elastic IP still depends on one instance and custom scripting, a cluster placement group places instances in a single Availability Zone, and a larger instance is still a single point of failure.",
      "topic": "Reliability and Business Continuity",
      "subtopic": "Implement highly available and resilient environments",
      "difficulty": "medium",
      "source": "SOA-C03 exam guide, Domain 2 Task 2.2; Amazon EC2 Auto Scaling User Guide: Use Elastic Load Balancing to distribute traffic across instances"
    },
    {
      "stem": "An AWS CloudFormation template defines an Amazon EBS volume (AWS::EC2::Volume) that stores application data. Company policy requires that if the stack is ever deleted, a snapshot of the volume must be kept. Which change to the template will meet this requirement?",
      "options": [
        "Set the UpdateReplacePolicy attribute of the volume to Retain",
        "Set the DeletionPolicy attribute of the volume to Snapshot",
        "Enable termination protection on the stack after it is created",
        "Add a stack policy that denies Update:Delete actions on the volume"
      ],
      "answer": "B",
      "explanation": "The DeletionPolicy attribute controls what CloudFormation does with a resource when it is removed from the stack or the stack is deleted. For resources that support snapshots, such as EBS volumes, the Snapshot value makes CloudFormation take a snapshot before deleting the resource; the default for AWS::EC2::Volume is Delete. UpdateReplacePolicy applies only when an update replaces the resource, termination protection blocks deletion rather than preserving data during it, and stack policies apply only to stack updates.",
      "topic": "Deployment, Provisioning, and Automation",
      "subtopic": "Provision and maintain cloud resources",
      "difficulty": "medium",
      "source": "SOA-C03 exam guide, Domain 3 Task 3.1; AWS CloudFormation User Guide: DeletionPolicy attribute"
    },
    {
      "stem": "A company uses AWS Organizations. The operations team must deploy the same IAM role and Amazon CloudWatch alarms to every existing member account and to every account that is added to the organization in the future, with no manual steps for new accounts. Which solution will meet these requirements with the LEAST operational effort?",
      "options": [
        "Use CloudFormation StackSets with service-managed permissions and automatic deployment enabled",
        "Use CloudFormation StackSets with self-managed permissions and add each new account to the stack set",
        "Write an AWS Lambda function that assumes a role in each account and creates the resources by using the SDK",
        "Share an AWS Service Catalog portfolio with the organization and ask each account owner to launch the product"
      ],
      "answer": "A",
      "explanation": "StackSets with service-managed permissions use trusted access with AWS Organizations, so CloudFormation creates the roles it needs in member accounts automatically. With automatic deployment enabled for the target organization or OUs, stack instances are created in any account that joins later and can be removed when an account leaves. Self-managed permissions require creating execution roles and adding accounts yourself, a Lambda function is custom code to maintain, and Service Catalog relies on each account owner acting.",
      "topic": "Deployment, Provisioning, and Automation",
      "subtopic": "Provision and maintain cloud resources",
      "difficulty": "medium",
      "source": "SOA-C03 exam guide, Domain 3 Task 3.1; AWS CloudFormation User Guide: StackSets with service-managed permissions and automatic deployments"
    },
    {
      "stem": "A company has 300 Amazon EC2 instances that are managed nodes in AWS Systems Manager. The operations team must install operating system security patches on all of them every Sunday at 02:00 and report on patch compliance. Which solution will meet these requirements with the LEAST operational effort?",
      "options": [
        "Use Amazon Inspector to scan the instances and install missing patches every Sunday",
        "Add a cron job on each instance that runs the OS package update command every Sunday",
        "Use Session Manager to connect to each instance and install patches every Sunday",
        "Use Patch Manager with a patch baseline and a patch policy scheduled for Sunday at 02:00"
      ],
      "answer": "D",
      "explanation": "Systems Manager Patch Manager applies patches according to a patch baseline, which defines which updates are approved, and can run on a schedule through a patch policy (set up with Quick Setup) or a maintenance window running AWS-RunPatchBaseline. The results are recorded as patch compliance data that can be reviewed centrally. Amazon Inspector finds vulnerabilities but does not install patches, while cron jobs and manual sessions do not scale and give no central compliance reporting.",
      "topic": "Deployment, Provisioning, and Automation",
      "subtopic": "Automate the management of existing resources",
      "difficulty": "easy",
      "source": "SOA-C03 exam guide, Domain 3 Task 3.2; AWS Systems Manager User Guide: Patch Manager, patch baselines and patch policies"
    },
    {
      "stem": "An engineer updates an AWS CloudFormation stack. The update fails, and the automatic rollback also fails because an Amazon EC2 security group that the stack created was deleted manually outside CloudFormation. The stack is now in the UPDATE_ROLLBACK_FAILED state. The engineer must return the stack to a state from which it can be updated again, without deleting the stack. What should the engineer do?",
      "options": [
        "Cancel the stack update by using the CancelUpdateStack operation and then retry the update",
        "Create a change set that removes the security group from the template and execute it",
        "Continue the update rollback and specify the security group in the list of resources to skip",
        "Run drift detection on the stack and then import the security group back into the stack"
      ],
      "answer": "C",
      "explanation": "A stack in UPDATE_ROLLBACK_FAILED cannot be updated until the rollback completes. The ContinueUpdateRollback operation retries the rollback, and resources that cannot be rolled back, such as one deleted outside CloudFormation, can be listed as resources to skip so that the stack reaches UPDATE_ROLLBACK_COMPLETE. CancelUpdateStack works only while an update is in progress, change sets cannot be executed on a stack in this state, and drift detection only reports differences without fixing the failed rollback.",
      "topic": "Deployment, Provisioning, and Automation",
      "subtopic": "Provision and maintain cloud resources",
      "difficulty": "hard",
      "source": "SOA-C03 exam guide, Domain 3 Task 3.1; AWS CloudFormation User Guide: Continue rolling back an update (UPDATE_ROLLBACK_FAILED)"
    },
    {
      "stem": "An application on Amazon EC2 connects to an Amazon RDS for MySQL database by using a password stored in plain text in a configuration file. A security audit requires that the password be removed from the file, stored encrypted, and rotated automatically every 30 days. Which solution will meet these requirements with the LEAST operational effort?",
      "options": [
        "Store the password as a String parameter in Parameter Store and rotate it with a cron job",
        "Store the password in AWS Secrets Manager and configure automatic rotation every 30 days",
        "Encrypt the configuration file with AWS KMS and replace the file manually every 30 days",
        "Store the password in an encrypted Amazon S3 object and rotate it with S3 Lifecycle rules"
      ],
      "answer": "B",
      "explanation": "Secrets Manager encrypts secrets with AWS KMS and has built-in automatic rotation for Amazon RDS credentials, either managed rotation or a rotation Lambda function from an AWS template, on a schedule you set. The application retrieves the current password at runtime through the API by using its instance role, so nothing sensitive stays in the file. A Parameter Store String parameter is not encrypted and has no native rotation, manual file replacement is error-prone, and S3 Lifecycle rules change storage class or expire objects but cannot rotate credentials.",
      "topic": "Security and Compliance",
      "subtopic": "Implement strategies to protect data and infrastructure",
      "difficulty": "easy",
      "source": "SOA-C03 exam guide, Domain 4 Task 4.2; AWS Secrets Manager User Guide: Rotate AWS Secrets Manager secrets"
    },
    {
      "stem": "A company stores sensitive reports in an Amazon S3 bucket. A security policy requires that every request to the bucket uses HTTPS and that any request made over plain HTTP is rejected. Which solution will meet these requirements?",
      "options": [
        "Add a bucket policy statement that denies all S3 actions when the aws:SecureTransport condition key is false",
        "Enable default encryption on the bucket with SSE-KMS by using a customer managed key in AWS KMS",
        "Enable S3 Block Public Access settings at both the bucket level and the AWS account level",
        "Add a bucket policy statement that denies s3:PutObject unless the server-side encryption header is present"
      ],
      "answer": "A",
      "explanation": "The aws:SecureTransport condition key is false when a request is sent over HTTP instead of TLS. An explicit Deny in the bucket policy for that condition applies to every principal and overrides any Allow, so all plain HTTP requests are rejected. Default encryption and encryption-header conditions protect data at rest, not in transit, and Block Public Access controls public access rather than the protocol used.",
      "topic": "Security and Compliance",
      "subtopic": "Implement strategies to protect data and infrastructure",
      "difficulty": "medium",
      "source": "SOA-C03 exam guide, Domain 4 Task 4.2; Amazon S3 User Guide: Security best practices - enforce encryption of data in transit (aws:SecureTransport)"
    },
    {
      "stem": "A company has two AWS accounts. In Account A, an Amazon S3 bucket stores objects that were uploaded by Account A and encrypted with SSE-KMS by using a customer managed AWS KMS key that is also in Account A. An application in Account B runs with an IAM role and must read these objects. Which combination of steps must be taken to give the role this access? (Choose THREE.)",
      "options": [
        "Create a KMS alias in Account B that points to the key ARN in Account A",
        "Add a statement to the bucket policy in Account A that allows the Account B role s3:GetObject",
        "Create a multi-Region replica of the KMS key in Account B for the role to use",
        "Add a statement to the KMS key policy in Account A that allows the Account B role kms:Decrypt",
        "Attach an IAM policy to the role in Account B that allows s3:GetObject and kms:Decrypt on the key",
        "Enable S3 Bucket Keys on the bucket in Account A so that existing objects use a bucket-level key"
      ],
      "answer": "BDE",
      "explanation": "Cross-account access needs permission on both sides: the resource owner must allow the other account in its resource-based policies, and the caller's account must allow the action in an identity-based policy. Here that means the bucket policy must allow s3:GetObject, the key policy must allow kms:Decrypt because reading an SSE-KMS object requires decrypting its data key, and the role's IAM policy must allow both actions on the bucket and the key ARN. KMS aliases cannot point to keys in other accounts, multi-Region replica keys stay in the same account, and S3 Bucket Keys reduce KMS request costs without granting any permission.",
      "topic": "Security and Compliance",
      "subtopic": "Implement and manage security and compliance tools and policies",
      "difficulty": "hard",
      "source": "SOA-C03 exam guide, Domain 4 Tasks 4.1 and 4.2; AWS KMS Developer Guide: Allowing users in other accounts to use a KMS key"
    },
    {
      "stem": "Amazon EC2 instances in a private subnet of a VPC need to download software updates from the internet over IPv4. The instances must not be reachable from the internet. Which solution will meet these requirements?",
      "options": [
        "Attach an internet gateway to the VPC and add a route to it in the private subnet's route table",
        "Assign Elastic IP addresses to the instances and allow only outbound traffic in their security groups",
        "Create a NAT gateway in a public subnet and route the private subnet's internet traffic to it",
        "Create a gateway VPC endpoint and add it to the route table of the private subnet"
      ],
      "answer": "C",
      "explanation": "A NAT gateway in a public subnet, whose route table points to an internet gateway, lets instances in private subnets start outbound IPv4 connections while blocking connections initiated from the internet. The private subnet's route table sends 0.0.0.0/0 to the NAT gateway. Routing the private subnet directly to an internet gateway or giving instances public addresses would make them public, and gateway VPC endpoints only reach Amazon S3 and DynamoDB, not the internet.",
      "topic": "Networking and Content Delivery",
      "subtopic": "Implement and optimize networking features and connectivity",
      "difficulty": "easy",
      "source": "SOA-C03 exam guide, Domain 5 Task 5.1; Amazon VPC User Guide: NAT gateways"
    },
    {
      "stem": "A company serves static website content from an Amazon S3 bucket through an Amazon CloudFront distribution. Users can currently bypass CloudFront by requesting objects directly from S3. The company wants the objects to be accessible only through CloudFront. Which solution will meet this requirement?",
      "options": [
        "Enable S3 static website hosting and set the CloudFront origin to the bucket's website endpoint",
        "Enable S3 Transfer Acceleration on the bucket and use the accelerated endpoint as the origin",
        "Add a CloudFront function that blocks viewer requests that do not include a Referer header",
        "Configure origin access control on the distribution and allow only that distribution in the bucket policy"
      ],
      "answer": "D",
      "explanation": "Origin access control (OAC) makes CloudFront sign its requests to the S3 REST endpoint. The bucket policy then allows the cloudfront.amazonaws.com service principal only when AWS:SourceArn matches the distribution, so the bucket can stay private and direct S3 requests are denied. Website endpoints do not support OAC and must be publicly readable, Transfer Acceleration speeds uploads but does not restrict access, and a CloudFront function only inspects requests that already go through CloudFront.",
      "topic": "Networking and Content Delivery",
      "subtopic": "Configure domains, DNS services, and content delivery",
      "difficulty": "medium",
      "source": "SOA-C03 exam guide, Domain 5 Task 5.2; Amazon CloudFront Developer Guide: Restrict access to an Amazon S3 origin (origin access control)"
    },
    {
      "stem": "An Amazon EC2 instance in a private subnet must call a third-party API over HTTPS. The private subnet's route table sends 0.0.0.0/0 to a NAT gateway in a public subnet, and the public subnet's route table sends 0.0.0.0/0 to an internet gateway. The public subnet uses the default network ACL. The instance's security group allows all outbound traffic and has no inbound rules. The private subnet has a custom network ACL with one outbound rule that allows TCP 443 to 0.0.0.0/0 and one inbound rule that allows TCP 443 from 0.0.0.0/0; all other traffic is denied. Connections from the instance to the API time out. What is a reason for this issue?",
      "options": [
        "The private subnet's network ACL does not allow inbound TCP traffic on ports 1024-65535",
        "The instance's security group does not have an inbound rule that allows TCP 443 from 0.0.0.0/0",
        "The NAT gateway's security group does not have an outbound rule that allows TCP 443 traffic",
        "The private subnet's route table needs its 0.0.0.0/0 route to target the internet gateway instead"
      ],
      "answer": "A",
      "explanation": "Network ACLs are stateless, so return traffic must be allowed explicitly. The API's responses come back to the ephemeral source port of the connection, not to port 443, so the private subnet's inbound rules must allow TCP 1024-65535 (the range AWS recommends to cover NAT gateway and common operating system ephemeral ports). Security groups are stateful, so responses to outbound connections are allowed without an inbound rule. NAT gateways have no security groups, and a private instance without a public IP address cannot use an internet gateway route.",
      "topic": "Networking and Content Delivery",
      "subtopic": "Troubleshoot network connectivity issues",
      "difficulty": "hard",
      "source": "SOA-C03 exam guide, Domain 5 Task 5.3; Amazon VPC User Guide: Network ACLs - ephemeral ports"
    },
    {
      "stem": "A company runs its web application behind an Application Load Balancer (ALB) in us-east-1. A static maintenance version of the site is hosted on an Amazon S3 website endpoint in us-west-2. The domain is hosted in Amazon Route 53. Route 53 must send all users to the ALB while it is healthy and send users to the S3 site only when the ALB is unhealthy. Which combination of steps will meet these requirements? (Choose TWO.)",
      "options": [
        "Create failover alias records with the ALB as the primary record and the S3 endpoint as the secondary",
        "Create latency-based alias records for both endpoints so that users go to the lowest-latency Region",
        "Create a multivalue answer record that returns both endpoints in every DNS response to clients",
        "Set Evaluate Target Health to Yes on the primary alias record that points to the ALB",
        "Enable DNSSEC signing on the hosted zone so that resolvers can validate every response"
      ],
      "answer": "AD",
      "explanation": "Failover routing answers with the primary record while it is healthy and with the secondary record only when the primary is unhealthy, which is an active-passive design. Route 53 needs a way to judge the primary's health; for an alias record pointing to an ALB, Evaluate Target Health makes Route 53 use the health of the load balancer's targets. Latency-based and multivalue routing send traffic to both endpoints at the same time, and DNSSEC protects response integrity but has no effect on routing.",
      "topic": "Networking and Content Delivery",
      "subtopic": "Configure domains, DNS services, and content delivery",
      "difficulty": "medium",
      "source": "SOA-C03 exam guide, Domain 5 Task 5.2; Amazon Route 53 Developer Guide: Failover routing and Evaluate Target Health"
    }
  ]
}
```
