```json
{
  "format": "domcq/1",
  "exam": "aws-soa",
  "set": "AWS Certified CloudOps Engineer - Associate practice – Core operations mix",
  "questions": [
    {
      "stem": "A CloudOps engineer must create Amazon CloudWatch alarms that trigger when memory utilization on a fleet of Amazon EC2 Linux instances exceeds 80%. The engineer finds that no memory metric for the instances exists in CloudWatch. What should the engineer do to make a memory metric available?",
      "options": [
        "Enable detailed monitoring on the instances to publish metrics at 1-minute intervals",
        "Create a CloudWatch alarm on the CPUUtilization metric in the AWS/EC2 namespace",
        "Install and configure the CloudWatch agent on the instances to collect memory metrics",
        "Enable AWS CloudTrail data events for the instances to capture memory usage"
      ],
      "answer": "C",
      "explanation": "The default EC2 metrics come from the hypervisor, which cannot see inside the guest operating system, so memory and disk-space usage are not published by default. The CloudWatch agent runs inside the OS, collects these guest-level metrics and publishes them as custom metrics (by default in the CWAgent namespace), where alarms can then be created on them.",
      "rationales": {
        "A": "Detailed monitoring only increases the frequency of the existing hypervisor metrics; it adds no memory metric.",
        "B": "CPUUtilization measures processor use, not memory, so it does not meet the requirement.",
        "C": "Correct: the CloudWatch agent collects guest OS metrics such as memory and publishes them to CloudWatch.",
        "D": "CloudTrail records API activity, not operating system performance data such as memory usage."
      },
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Implement metrics, alarms, and filters by using AWS monitoring and logging services",
      "difficulty": "easy",
      "source": "SOA-C03 Domain 1, Task 1.1; Amazon CloudWatch User Guide: Collect metrics and logs with the CloudWatch agent"
    },
    {
      "stem": "An application on Amazon EC2 writes its logs to an Amazon CloudWatch Logs log group. The operations team wants an email notification whenever the string \"ERROR\" appears more than 10 times within 5 minutes. Which solution will meet these requirements with the LEAST operational overhead?",
      "options": [
        "Export the log group to Amazon S3 every 5 minutes and query it with Amazon Athena on a schedule",
        "Create a metric filter on the log group and a CloudWatch alarm on that metric that notifies an SNS topic",
        "Run a cron job on each instance that counts ERROR lines and sends email through Amazon SES",
        "Create a subscription filter that streams every log event to an Amazon OpenSearch Service domain"
      ],
      "answer": "B",
      "explanation": "A CloudWatch Logs metric filter turns matching log events into a CloudWatch metric without any extra infrastructure. A CloudWatch alarm with a threshold of 10 over a 5-minute period can then publish to an Amazon SNS topic that has an email subscription. This is fully managed and needs no custom code or scheduled jobs.",
      "rationales": {
        "A": "Scheduled exports and Athena queries add delay, cost and custom scheduling work compared with a metric filter.",
        "B": "Correct: a metric filter plus a CloudWatch alarm and SNS email is the native, managed way to alert on log patterns.",
        "C": "Custom scripts on every instance must be built and maintained, which is far more overhead.",
        "D": "OpenSearch adds a cluster to run and still needs alerting configured; it is not the least-overhead option."
      },
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Implement metrics, alarms, and filters by using AWS monitoring and logging services",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 1, Task 1.1; Amazon CloudWatch Logs User Guide: Creating metrics from log events using filters"
    },
    {
      "stem": "A company runs a critical workload on a single Amazon EBS-backed Amazon EC2 instance. If the instance becomes impaired because of a problem with the underlying AWS hardware, it must be recovered automatically and must keep its instance ID, private IP addresses and Elastic IP address. Which solution will meet these requirements?",
      "options": [
        "Place the instance in an Auto Scaling group with minimum, maximum and desired capacity of 1",
        "Create a CloudWatch alarm on the StatusCheckFailed_Instance metric with the EC2 reboot action",
        "Create an Amazon EventBridge rule that launches a replacement instance from the latest AMI",
        "Create a CloudWatch alarm on the StatusCheckFailed_System metric with the EC2 recover action"
      ],
      "answer": "D",
      "explanation": "System status checks detect problems with the underlying host, such as hardware or power failures. The EC2 recover action moves the instance to healthy hardware while keeping its instance ID, private IP addresses, Elastic IP addresses and instance metadata. Replacing the instance, as Auto Scaling or a new launch would, creates a new instance ID.",
      "rationales": {
        "A": "Auto Scaling replaces an unhealthy instance with a new one, so the instance ID changes.",
        "B": "Instance status checks cover guest OS problems, and a reboot does not move the instance off failed hardware.",
        "C": "Launching a replacement creates a new instance with a new ID and private IP address.",
        "D": "Correct: the recover action on a system status check failure moves the same instance to new hardware."
      },
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Identify and remediate issues by using monitoring and availability metrics",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 1, Task 1.2; Amazon EC2 User Guide: Instance recovery and status checks"
    },
    {
      "stem": "A company's Amazon RDS for MySQL Single-AZ DB instance shows sustained high CPU utilization. Performance Insights shows that most of the load comes from the same read-only reporting queries being run repeatedly, and the reports can tolerate slightly stale data. Which combination of actions will reduce the load on the DB instance? Choose TWO.",
      "options": [
        "Convert the DB instance to a Multi-AZ DB instance deployment and send reporting queries to the standby",
        "Create a read replica and point the reporting queries at the read replica endpoint",
        "Increase the automated backup retention period to reduce I/O on the DB instance",
        "Add an Amazon ElastiCache cluster to cache the results of frequently repeated queries",
        "Enable Enhanced Monitoring with 1-second granularity on the DB instance"
      ],
      "answer": "BD",
      "explanation": "Read replicas use asynchronous replication, so they can serve read-only queries that tolerate slight lag and take that work off the primary. Caching repeated query results in ElastiCache means many requests never reach the database at all. In a Multi-AZ DB instance deployment the standby cannot accept connections, so it offers no read scaling; it exists for availability.",
      "rationales": {
        "A": "The standby in a Multi-AZ DB instance deployment cannot serve reads; it is for failover only.",
        "B": "Correct: a read replica offloads read-only reporting queries from the primary instance.",
        "C": "Backup retention controls how long backups are kept and does nothing to reduce query load.",
        "D": "Correct: caching repeated query results removes those reads from the database entirely.",
        "E": "Enhanced Monitoring adds visibility into OS metrics but does not reduce any load."
      },
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Implement performance optimization strategies for compute, storage, and database resources",
      "difficulty": "hard",
      "source": "SOA-C03 Domain 1, Task 1.3; Amazon RDS User Guide: Working with DB instance read replicas; Multi-AZ deployments"
    },
    {
      "stem": "An application on an Amazon EC2 instance uses a 500 GiB gp2 Amazon EBS volume. During peak hours, latency rises and the CloudWatch BurstBalance metric for the volume drops to zero. The application needs a sustained 10,000 IOPS. The solution must avoid downtime and keep cost as low as possible. What should the CloudOps engineer do?",
      "options": [
        "Use Amazon EBS Elastic Volumes to change the volume to gp3 and provision 10,000 IOPS",
        "Create a snapshot, restore it to a new st1 volume, and swap it for the existing volume",
        "Stop the instance, change it to a larger instance type, and then start it again",
        "Use Elastic Volumes to grow the gp2 volume to 3.4 TiB so its baseline reaches 10,000 IOPS"
      ],
      "answer": "A",
      "explanation": "A gp2 volume's baseline is 3 IOPS per GiB, so a 500 GiB volume has a 1,500 IOPS baseline and relies on burst credits to reach 3,000 IOPS; a BurstBalance of zero means the credits are exhausted. gp3 lets you provision IOPS independently of size, and Elastic Volumes can change the type and IOPS while the volume stays attached and in use. Growing a gp2 volume would also raise IOPS but means paying for storage the application does not need.",
      "rationales": {
        "A": "Correct: an online change to gp3 with 10,000 provisioned IOPS gives sustained performance at low cost.",
        "B": "st1 is a throughput-optimized HDD type with low IOPS, and swapping volumes causes downtime.",
        "C": "The bottleneck is the volume's IOPS, not the instance, and stopping the instance causes downtime.",
        "D": "This works but pays for about seven times the needed storage, so it costs more than gp3."
      },
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Implement performance optimization strategies for compute, storage, and database resources",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 1, Task 1.3; Amazon EBS User Guide: General Purpose SSD volumes; Modify a volume using Elastic Volumes"
    },
    {
      "stem": "A company runs a web application on Amazon EC2 instances in an Auto Scaling group. The company wants the group to add and remove instances automatically so that average CPU utilization stays near 50%. Which scaling approach will meet this requirement with the LEAST operational effort?",
      "options": [
        "A scheduled scaling action that adds instances during business hours",
        "A simple scaling policy with separate CloudWatch alarms for scaling out and in",
        "A target tracking scaling policy that uses the ASGAverageCPUUtilization metric",
        "Manually adjusting the desired capacity based on a CloudWatch dashboard"
      ],
      "answer": "C",
      "explanation": "A target tracking policy works like a thermostat: you set a target value for a metric, and Auto Scaling creates and manages the CloudWatch alarms and calculates how much to scale out or in to keep the metric near that value. This needs only one setting and adapts to load that does not follow a fixed schedule.",
      "rationales": {
        "A": "Scheduled scaling follows the clock, not actual CPU load, so it cannot hold CPU near a target.",
        "B": "Simple scaling can work but needs alarms and step sizes configured and tuned by hand.",
        "C": "Correct: target tracking keeps the metric at the target and manages the alarms automatically.",
        "D": "Manual changes are not automatic and need constant attention from operators."
      },
      "topic": "Reliability and Business Continuity",
      "subtopic": "Implement scalability and elasticity",
      "difficulty": "easy",
      "source": "SOA-C03 Domain 2, Task 2.1; Amazon EC2 Auto Scaling User Guide: Target tracking scaling policies"
    },
    {
      "stem": "A company runs an Amazon Aurora MySQL DB cluster in us-east-1. For disaster recovery, the company needs a copy of the database in another AWS Region with an RPO of about 1 second, and it must be able to promote the copy to full read/write use in about a minute. Which solution meets these requirements?",
      "options": [
        "Convert the cluster to an Aurora global database with a secondary cluster in the DR Region",
        "Use AWS Backup to copy daily manual cluster snapshots to the DR Region",
        "Add Aurora Replicas in additional Availability Zones within us-east-1",
        "Export the database to Amazon S3 daily and enable S3 Cross-Region Replication"
      ],
      "answer": "A",
      "explanation": "Aurora global databases replicate at the storage layer to secondary Regions with typical lag under a second, which gives a very low RPO. In a Regional outage, the secondary cluster can be promoted to read/write in about a minute, giving a low RTO. Snapshot- or export-based approaches lose all changes since the last copy and take much longer to restore.",
      "rationales": {
        "A": "Correct: Aurora global database provides sub-second replication lag and fast cross-Region promotion.",
        "B": "Daily snapshots give an RPO of up to a day and a restore takes far longer than a minute.",
        "C": "Aurora Replicas in the same Region do not protect against the loss of the whole Region.",
        "D": "Daily exports give an RPO of up to a day and require a slow import to recover."
      },
      "topic": "Reliability and Business Continuity",
      "subtopic": "Implement highly available and resilient environments",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 2, Task 2.2; Amazon Aurora User Guide: Using Amazon Aurora global databases"
    },
    {
      "stem": "A company stores important reports in an Amazon S3 bucket. The company must be able to recover objects that are accidentally overwritten or deleted, and it must keep a copy of every new object in a second AWS Region. Which combination of actions will meet these requirements? Choose TWO.",
      "options": [
        "Enable S3 Transfer Acceleration on the bucket",
        "Enable S3 server access logging on the bucket",
        "Enable S3 Versioning on the bucket",
        "Add a lifecycle rule that moves objects to S3 Intelligent-Tiering",
        "Configure S3 Cross-Region Replication to a bucket in the second Region"
      ],
      "answer": "CE",
      "explanation": "S3 Versioning keeps every version of an object, so an overwritten object can be restored to an earlier version and a delete only adds a delete marker that can be removed. Cross-Region Replication copies new objects to a bucket in another Region; it requires versioning to be enabled on both the source and destination buckets.",
      "rationales": {
        "A": "Transfer Acceleration speeds up long-distance uploads but neither protects nor copies data.",
        "B": "Access logging records requests made to the bucket but cannot recover any object.",
        "C": "Correct: versioning keeps earlier versions so overwritten or deleted objects can be recovered.",
        "D": "Intelligent-Tiering optimizes storage cost and provides no recovery or cross-Region copy.",
        "E": "Correct: Cross-Region Replication keeps a copy of new objects in a bucket in another Region."
      },
      "topic": "Reliability and Business Continuity",
      "subtopic": "Implement backup and restore strategies",
      "difficulty": "easy",
      "source": "SOA-C03 Domain 2, Task 2.3; Amazon S3 User Guide: Using versioning in S3 buckets; Replicating objects"
    },
    {
      "stem": "An application runs on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). When the application process on an instance hangs, the ALB marks the target unhealthy and stops sending it traffic, but the Auto Scaling group never replaces the instance. What is a reason for this issue?",
      "options": [
        "Cross-zone load balancing is turned off on the Application Load Balancer",
        "The Auto Scaling group uses only EC2 status checks as its health check type",
        "The target group deregistration delay is longer than the health check interval",
        "Sticky sessions are enabled on the target group that serves the application"
      ],
      "answer": "B",
      "explanation": "By default an Auto Scaling group judges health only from EC2 status checks, which pass as long as the instance and OS are running, even if the application has hung. Turning on Elastic Load Balancing health checks for the group makes it treat a target that fails the load balancer's health checks as unhealthy and replace it.",
      "rationales": {
        "A": "Cross-zone load balancing affects how traffic is spread across zones, not instance replacement.",
        "B": "Correct: without ELB health checks enabled, the group ignores the ALB's view of target health.",
        "C": "Deregistration delay controls connection draining time and does not stop replacement.",
        "D": "Stickiness affects request routing to targets, not how Auto Scaling determines health."
      },
      "topic": "Reliability and Business Continuity",
      "subtopic": "Implement highly available and resilient environments",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 2, Task 2.2; Amazon EC2 Auto Scaling User Guide: Health checks for instances in an Auto Scaling group"
    },
    {
      "stem": "A CloudOps engineer must install operating system security patches on a fleet of Amazon EC2 instances every Sunday at 02:00 by using an approved list of patches, and must be able to see which instances are noncompliant. The instances already run the SSM Agent with the required IAM permissions. Which solution will meet these requirements with the LEAST operational effort?",
      "options": [
        "Write a cron job on each instance that runs the package manager update every Sunday",
        "Rebuild every instance weekly from a new AMI by updating an AWS CloudFormation stack",
        "Use AWS Config managed rules to detect missing patches on each of the instances",
        "Use AWS Systems Manager Patch Manager with a patch baseline and a maintenance window"
      ],
      "answer": "D",
      "explanation": "Patch Manager applies patches defined by a patch baseline, which controls which patches are approved, and reports patch compliance for each managed node. A Systems Manager maintenance window runs the patching task on a schedule, such as Sundays at 02:00, across all targeted instances without per-instance scripts.",
      "rationales": {
        "A": "Per-instance cron jobs give no approved baseline control or central compliance reporting.",
        "B": "Weekly rebuilds through CloudFormation take much more effort and still need patched AMIs.",
        "C": "AWS Config can report compliance but does not install the patches.",
        "D": "Correct: Patch Manager with a baseline and maintenance window patches on schedule and reports compliance."
      },
      "topic": "Deployment, Provisioning, and Automation",
      "subtopic": "Automate the management of existing resources",
      "difficulty": "easy",
      "source": "SOA-C03 Domain 3, Task 3.2; AWS Systems Manager User Guide: Patch Manager; Maintenance Windows"
    },
    {
      "stem": "A company uses AWS Organizations. A CloudOps engineer must deploy the same AWS CloudFormation template, which creates an IAM role and an Amazon SNS topic, to every account in an organizational unit (OU) in three AWS Regions. Accounts that are added to the OU later must receive the resources automatically. Which solution will meet these requirements with the LEAST operational effort?",
      "options": [
        "Create one CloudFormation stack per account and Region by running a script in AWS CloudShell",
        "Create a CloudFormation StackSet with service-managed permissions and automatic deployment for the OU",
        "Share the CloudFormation template with the OU by using AWS Resource Access Manager",
        "Create a CloudFormation StackSet with self-managed permissions and add each account ID by hand"
      ],
      "answer": "B",
      "explanation": "StackSets deploy one template to many accounts and Regions in a single operation. With service-managed permissions, StackSets uses Organizations to create the required roles for you and can target an OU; with automatic deployment enabled, accounts added to the OU later get stack instances automatically, and accounts removed can have them deleted.",
      "rationales": {
        "A": "Per-account scripts must be rerun for every new account and are hard to keep consistent.",
        "B": "Correct: service-managed StackSets targeting the OU with automatic deployment cover new accounts too.",
        "C": "Resource Access Manager shares specific resource types, not CloudFormation templates for deployment.",
        "D": "Self-managed permissions need roles set up by hand and do not deploy to new accounts automatically."
      },
      "topic": "Deployment, Provisioning, and Automation",
      "subtopic": "Provision and maintain cloud resources",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 3, Task 3.1; AWS CloudFormation User Guide: Working with StackSets; service-managed permissions"
    },
    {
      "stem": "A CloudOps engineer manages an Amazon RDS DB instance that is defined in an AWS CloudFormation stack. A teammate will submit template changes next week. Before each update runs, the engineer must review which resources the update will modify or replace, and must prevent any stack update from replacing or deleting the DB instance. Which combination of actions will meet these requirements? Choose TWO.",
      "options": [
        "Create a change set for each update and review the Replacement value of each resource before executing it",
        "Enable termination protection on the stack that contains the DB instance",
        "Run drift detection on the stack before each update is applied",
        "Apply a stack policy that denies Update:Replace and Update:Delete on the DB instance's logical ID",
        "Set the DeletionPolicy attribute of the DB instance resource to Retain"
      ],
      "answer": "AD",
      "explanation": "A change set previews an update, listing each resource that will be added, modified or removed and whether a modification requires replacement, before anything changes. A stack policy defines which update actions are allowed on which resources during stack updates, so denying Update:Replace and Update:Delete on the DB instance makes any update that would replace or delete it fail. Termination protection and DeletionPolicy do not block replacement during an update.",
      "rationales": {
        "A": "Correct: a change set shows which resources an update will modify and whether each will be replaced.",
        "B": "Termination protection only blocks deleting the whole stack, not replacing a resource in an update.",
        "C": "Drift detection finds changes made outside CloudFormation; it does not preview updates.",
        "D": "Correct: a stack policy can deny replacement or deletion of a specific resource during stack updates.",
        "E": "DeletionPolicy applies when a resource is removed or the stack is deleted, not when an update replaces it."
      },
      "topic": "Deployment, Provisioning, and Automation",
      "subtopic": "Provision and maintain cloud resources",
      "difficulty": "hard",
      "source": "SOA-C03 Domain 3, Task 3.1; AWS CloudFormation User Guide: Update stacks using change sets; Prevent updates with a stack policy"
    },
    {
      "stem": "A company wants a hardened Amazon Linux AMI that is rebuilt every month with the latest patches and the company's standard agents installed. Each new AMI must pass automated tests and then be distributed to two other AWS Regions. Which solution will meet these requirements with the LEAST operational effort?",
      "options": [
        "Launch an instance each month, patch it by hand, create an AMI, and copy it to the other Regions",
        "Patch running instances with Systems Manager Run Command, then create AMIs in the console",
        "Create an EC2 Image Builder pipeline with a recipe, test components, distribution settings and a monthly schedule",
        "Schedule an AWS Lambda function that calls the CreateImage API on a production instance"
      ],
      "answer": "C",
      "explanation": "EC2 Image Builder automates the full image lifecycle: an image recipe defines the base image and build components, test components validate the image, a distribution configuration copies the AMI to other Regions or accounts, and the pipeline can run on a schedule. This replaces manual or scripted build, test and copy steps with a managed service.",
      "rationales": {
        "A": "Manual monthly builds are slow, error-prone and include no automated testing.",
        "B": "Console AMI creation is manual and this approach includes no testing or distribution.",
        "C": "Correct: an Image Builder pipeline builds, tests and distributes AMIs automatically on a schedule.",
        "D": "Imaging a production instance captures its drift and adds no tests or Region distribution."
      },
      "topic": "Deployment, Provisioning, and Automation",
      "subtopic": "Automate the management of existing resources",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 3, Task 3.1; EC2 Image Builder User Guide: Image pipelines, recipes and distribution settings"
    },
    {
      "stem": "An application on Amazon EC2 connects to an Amazon RDS for PostgreSQL database by using a password that is currently stored in plaintext in a configuration file. The security team requires the password to be stored encrypted and rotated automatically every 30 days. Which AWS service should the CloudOps engineer use to store the password?",
      "options": [
        "AWS Secrets Manager",
        "AWS Certificate Manager",
        "Amazon Macie",
        "AWS Artifact"
      ],
      "answer": "A",
      "explanation": "Secrets Manager stores secrets encrypted with AWS KMS and supports automatic rotation on a schedule, including managed rotation for Amazon RDS database credentials. The application retrieves the current secret at runtime through the API instead of reading it from a file, so rotation does not require redeploying the application.",
      "rationales": {
        "A": "Correct: Secrets Manager encrypts secrets and can rotate RDS credentials automatically on a schedule.",
        "B": "Certificate Manager provisions and renews TLS certificates, not database passwords.",
        "C": "Macie discovers sensitive data in Amazon S3; it does not store or rotate credentials.",
        "D": "Artifact provides AWS compliance reports and agreements, not secret storage."
      },
      "topic": "Security and Compliance",
      "subtopic": "Implement strategies to protect data and infrastructure",
      "difficulty": "easy",
      "source": "SOA-C03 Domain 4, Task 4.2; AWS Secrets Manager User Guide: Rotate AWS Secrets Manager secrets"
    },
    {
      "stem": "A company's security policy states that no security group may allow inbound SSH (TCP port 22) from 0.0.0.0/0. A CloudOps engineer must continuously detect any security group that violates this policy and automatically remove the offending rule. Which solution will meet these requirements with the LEAST operational effort?",
      "options": [
        "Enable Amazon GuardDuty and have an engineer review its findings for open SSH ports each week",
        "Enable VPC Flow Logs and create a CloudWatch metric filter for traffic on port 22",
        "Run Amazon Inspector network reachability scans and remove open rules in the console",
        "Use the AWS Config restricted-ssh managed rule with automatic remediation by an SSM Automation runbook"
      ],
      "answer": "D",
      "explanation": "AWS Config continuously evaluates resource configurations, and the restricted-ssh managed rule flags security groups that allow unrestricted inbound SSH. Config remediation can be set to run automatically, invoking a Systems Manager Automation runbook that revokes the offending rule, so detection and correction need no human action.",
      "rationales": {
        "A": "GuardDuty detects threats, not configuration violations, and a weekly manual review is not automatic.",
        "B": "Flow Logs show traffic, not security group configuration, and nothing removes the rule.",
        "C": "Inspector can report reachability, but removing rules by hand in the console is not automatic.",
        "D": "Correct: a Config rule with automatic SSM Automation remediation detects and fixes violations continuously."
      },
      "topic": "Security and Compliance",
      "subtopic": "Implement and manage security and compliance tools and policies",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 4, Task 4.1; AWS Config Developer Guide: restricted-ssh managed rule; Remediating noncompliant resources"
    },
    {
      "stem": "Account A owns an Amazon S3 bucket whose objects are encrypted with SSE-KMS by using a customer managed KMS key in Account A. The bucket policy grants s3:GetObject to an IAM role in Account B. The role's IAM policy in Account B allows s3:GetObject on the bucket's objects and kms:Decrypt on the key's ARN. Requests from the role still return AccessDenied. What is a reason for this issue?",
      "options": [
        "S3 Block Public Access on the bucket is blocking every cross-account request",
        "The key policy of the KMS key in Account A does not allow Account B to use the key",
        "Cross-account reads require the objects to be re-encrypted with SSE-S3 first",
        "The role in Account B also needs the s3:GetObjectAcl permission on each object"
      ],
      "answer": "B",
      "explanation": "For cross-account use of a KMS key, both sides must grant access: the key policy in the owning account must allow the external account or principal, and the IAM policy in the external account must allow the KMS actions. Here the IAM policy in Account B is correct, so the missing piece is the key policy in Account A. Without it, S3 cannot decrypt the object for the caller and the request is denied.",
      "rationales": {
        "A": "Block Public Access restricts public access, not access granted to a specific account or role.",
        "B": "Correct: a KMS key policy must explicitly allow the other account before its IAM policies take effect.",
        "C": "SSE-KMS objects can be shared across accounts when the key policy allows it; re-encryption is not required.",
        "D": "GetObjectAcl reads an object's ACL and is not needed to download the object."
      },
      "topic": "Security and Compliance",
      "subtopic": "Implement strategies to protect data and infrastructure",
      "difficulty": "hard",
      "source": "SOA-C03 Domain 4, Task 4.2; AWS KMS Developer Guide: Allowing users in other accounts to use a KMS key"
    },
    {
      "stem": "Amazon EC2 instances in a private subnet must download software updates from the internet. The instances must not be reachable from the internet. Which solution meets these requirements?",
      "options": [
        "Attach an internet gateway to the VPC and assign public IPv4 addresses to the instances",
        "Create a gateway VPC endpoint for Amazon S3 and add it to the subnet's route table",
        "Create a NAT gateway in a public subnet and route 0.0.0.0/0 from the private subnet to it",
        "Create a virtual private gateway and add a default route from the private subnet to it"
      ],
      "answer": "C",
      "explanation": "A NAT gateway in a public subnet translates outbound connections from private instances to its own public IP and sends them through the internet gateway. Return traffic for those connections is allowed back, but connections started from the internet cannot reach the private instances, so they stay unreachable.",
      "rationales": {
        "A": "Public IP addresses with an internet gateway route make the instances reachable from the internet.",
        "B": "A gateway endpoint reaches only Amazon S3 (or DynamoDB), not general internet hosts.",
        "C": "Correct: a NAT gateway allows outbound-initiated internet access while blocking inbound connections.",
        "D": "A virtual private gateway connects to VPN or Direct Connect networks, not to the internet."
      },
      "topic": "Networking and Content Delivery",
      "subtopic": "Implement and optimize networking features and connectivity",
      "difficulty": "easy",
      "source": "SOA-C03 Domain 5, Task 5.1; Amazon VPC User Guide: NAT gateways"
    },
    {
      "stem": "A web server in a public subnet has a security group that allows inbound HTTPS from 0.0.0.0/0 and the default outbound rule. The subnet's network ACL has an inbound rule that allows TCP 443 from 0.0.0.0/0 and an outbound rule that allows only TCP 443 to 0.0.0.0/0. Clients cannot complete HTTPS connections to the server. What is a reason for this issue?",
      "options": [
        "The network ACL does not allow outbound return traffic to ephemeral ports 1024-65535",
        "The security group needs an outbound rule for return traffic on ephemeral ports",
        "The network ACL needs an inbound rule that allows ICMP for the TLS handshake",
        "The security group must explicitly deny all other inbound traffic to the server"
      ],
      "answer": "A",
      "explanation": "Network ACLs are stateless, so return traffic must be allowed explicitly. Responses from the server go to the client's ephemeral source port, not to port 443, so the outbound ACL rule must allow TCP 1024-65535. Security groups are stateful and automatically allow responses to allowed inbound connections.",
      "rationales": {
        "A": "Correct: a stateless network ACL must allow outbound responses to the clients' ephemeral ports.",
        "B": "Security groups are stateful, so return traffic for an allowed inbound connection is permitted automatically.",
        "C": "The TLS handshake runs over TCP 443; ICMP is not required to establish it.",
        "D": "Security groups support only allow rules and deny anything not allowed by default."
      },
      "topic": "Networking and Content Delivery",
      "subtopic": "Troubleshoot network connectivity issues",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 5, Task 5.3; Amazon VPC User Guide: Control subnet traffic with network ACLs; Ephemeral ports"
    },
    {
      "stem": "A company serves static website content from an Amazon S3 bucket through an Amazon CloudFront distribution. Users must be able to reach the objects only through CloudFront and must not be able to access them directly by using S3 URLs. Which solution meets these requirements?",
      "options": [
        "Enable S3 static website hosting and make the objects in the bucket publicly readable",
        "Enable S3 Transfer Acceleration and restrict access to the bucket with a bucket ACL",
        "Add a CloudFront geographic restriction that allows only the company's target countries",
        "Configure origin access control (OAC) and a bucket policy that allows only the distribution"
      ],
      "answer": "D",
      "explanation": "With origin access control, CloudFront signs its requests to the S3 origin, and the bucket policy grants s3:GetObject only to the CloudFront service principal for that specific distribution. Because the bucket stays private, direct S3 requests are denied while requests through CloudFront succeed. OAC is the recommended replacement for the older origin access identity (OAI).",
      "rationales": {
        "A": "Public objects can be fetched directly from S3, which the requirement forbids.",
        "B": "Transfer Acceleration speeds uploads and does not limit access to CloudFront.",
        "C": "Geo restriction limits viewers by country but does not stop direct S3 access.",
        "D": "Correct: OAC with a restrictive bucket policy lets only the distribution read from the private bucket."
      },
      "topic": "Networking and Content Delivery",
      "subtopic": "Configure domains, DNS services, and content delivery",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 5, Task 5.2; Amazon CloudFront Developer Guide: Restrict access to an Amazon S3 origin"
    },
    {
      "stem": "A company connects its on-premises data center to a VPC through AWS Direct Connect. On-premises servers must resolve records in an Amazon Route 53 private hosted zone that is associated with the VPC. Amazon EC2 instances in the VPC must resolve names in the domain corp.example.internal, which is hosted on the on-premises DNS servers. Which combination of actions will meet these requirements? Choose TWO.",
      "options": [
        "Create a Route 53 public hosted zone with the same name as the private hosted zone",
        "Create a Route 53 Resolver inbound endpoint and forward on-premises queries to its IP addresses",
        "Create a VPC peering connection between the VPC and the on-premises network",
        "Turn on the enableDnsHostnames attribute for the VPC and restart the instances",
        "Create a Route 53 Resolver outbound endpoint and a forwarding rule for corp.example.internal"
      ],
      "answer": "BE",
      "explanation": "A Route 53 Resolver inbound endpoint places IP addresses in the VPC that on-premises DNS servers can forward queries to, letting them resolve private hosted zone records. An outbound endpoint plus a forwarding rule for corp.example.internal, associated with the VPC, sends matching queries from the VPC to the on-premises DNS servers. Together they provide resolution in both directions over the existing connection.",
      "rationales": {
        "A": "A public hosted zone would publish records on the internet and does not resolve the private zone.",
        "B": "Correct: an inbound endpoint lets on-premises DNS servers resolve records in the private hosted zone.",
        "C": "VPC peering connects two VPCs only; it cannot peer with an on-premises network.",
        "D": "DNS hostnames assign names to instances but do not enable cross-network DNS forwarding.",
        "E": "Correct: an outbound endpoint and forwarding rule send queries for the on-premises domain to its DNS servers."
      },
      "topic": "Networking and Content Delivery",
      "subtopic": "Configure domains, DNS services, and content delivery",
      "difficulty": "hard",
      "source": "SOA-C03 Domain 5, Task 5.2; Amazon Route 53 Developer Guide: Resolving DNS queries between VPCs and your network"
    }
  ]
}
```
