```json
{
  "format": "domcq/1",
  "exam": "aws-soa",
  "set": "AWS Certified CloudOps Engineer - Associate practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "An operations team runs a fleet of Amazon EC2 instances that use an Amazon Linux AMI. The team needs to create Amazon CloudWatch alarms based on memory utilization for each instance. The team cannot find a memory utilization metric in the AWS/EC2 namespace. Which solution will meet these requirements?",
      "options": [
        "Enable detailed monitoring on each of the EC2 instances",
        "Install and configure the CloudWatch agent on the instances to collect memory metrics",
        "Enable VPC Flow Logs for the subnets that host the instances",
        "Create an AWS CloudTrail trail that records data events for the instances"
      ],
      "answer": "B",
      "explanation": "The hypervisor cannot see inside the guest operating system, so EC2 publishes metrics such as CPU, network and disk I/O by default but not memory usage. The CloudWatch agent runs inside the instance and publishes operating system metrics such as memory and disk space usage as custom metrics (in the CWAgent namespace by default), which can then be used in alarms. Detailed monitoring only increases the frequency of the default metrics to 1 minute; it does not add new metrics.",
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Implement metrics, alarms, and filters by using AWS monitoring and logging services",
      "difficulty": "easy",
      "source": "SOA-C03 Domain 1, Task 1.1; Amazon CloudWatch User Guide: Collect metrics and logs with the CloudWatch agent"
    },
    {
      "stem": "A company runs a production application that uses an Amazon RDS for MySQL Single-AZ DB instance. The company requires the database to remain available with automatic failover if the Availability Zone that hosts the DB instance becomes unavailable. Application connection strings must not need to change after a failover. Which solution will meet these requirements?",
      "options": [
        "Create a read replica of the DB instance in a different Availability Zone",
        "Enable automated backups with a retention period of 35 days",
        "Modify the DB instance to be a Multi-AZ deployment",
        "Modify the DB instance to use a larger DB instance class"
      ],
      "answer": "C",
      "explanation": "A Multi-AZ deployment keeps a synchronously replicated standby in another Availability Zone. If the primary or its Availability Zone fails, RDS automatically fails over and updates the DNS record of the DB endpoint to point to the standby, so applications reconnect without changing connection strings. A read replica uses asynchronous replication and must be promoted manually, and it has its own endpoint.",
      "topic": "Reliability and Business Continuity",
      "subtopic": "Implement highly available and resilient environments",
      "difficulty": "easy",
      "source": "SOA-C03 Domain 2, Task 2.2; Amazon RDS User Guide: Multi-AZ DB instance deployments"
    },
    {
      "stem": "A company manages its infrastructure with AWS CloudFormation. An operations engineer suspects that someone used the AWS Management Console to change the inbound rules of a security group that a production stack created. The engineer needs to identify which stack resources no longer match their expected configuration as defined in the stack template. Which solution will meet this requirement with the LEAST effort?",
      "options": [
        "Run drift detection on the stack and review the drift results",
        "Create a change set from the original template and review the changes",
        "Enable termination protection on the stack and review its status",
        "Review the stack's events for recent update operations"
      ],
      "answer": "A",
      "explanation": "CloudFormation drift detection compares the actual current configuration of stack resources with the configuration defined in the stack template and reports each resource as IN_SYNC, MODIFIED or DELETED, with property-level differences. Changes made outside CloudFormation do not appear in stack events or change sets, because those only reflect operations performed through CloudFormation.",
      "topic": "Deployment, Provisioning, and Automation",
      "subtopic": "Provision and maintain cloud resources",
      "difficulty": "easy",
      "source": "SOA-C03 Domain 3, Task 3.1; AWS CloudFormation User Guide: Detect unmanaged configuration changes (drift detection)"
    },
    {
      "stem": "A web server runs on an Amazon EC2 instance in a public subnet. The instance has a public IP address, and the subnet's route table has a default route to an internet gateway. The instance's security group allows inbound TCP 443 from 0.0.0.0/0. The subnet uses a custom network ACL with one inbound rule that allows TCP 443 from 0.0.0.0/0 and one outbound rule that allows TCP 443 to 0.0.0.0/0. Users on the internet cannot complete HTTPS connections to the server. What is a reason for this issue?",
      "options": [
        "The security group needs an outbound rule that allows return traffic on port 443",
        "The route table needs a route to a NAT gateway for the return traffic",
        "The security group must also allow inbound traffic on ephemeral ports",
        "The network ACL does not allow outbound traffic to the clients' ephemeral ports"
      ],
      "answer": "D",
      "explanation": "Network ACLs are stateless, so response traffic must be explicitly allowed. The server's responses go to the client's source port, which is an ephemeral port (typically 1024-65535), not port 443, so the outbound rule for port 443 does not match and the responses are dropped. Security groups are stateful and automatically allow the return traffic of allowed inbound connections.",
      "topic": "Networking and Content Delivery",
      "subtopic": "Troubleshoot network connectivity issues",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 5, Task 5.3; Amazon VPC User Guide: Control subnet traffic with network ACLs (ephemeral ports)"
    },
    {
      "stem": "An application that runs on Amazon EC2 instances sends its application logs to an Amazon CloudWatch Logs log group. The operations team must receive a notification through an existing Amazon SNS topic whenever the string ERROR appears in the logs more than 10 times within 5 minutes. Which solution will meet these requirements with the LEAST operational effort?",
      "options": [
        "Schedule a Lambda function every 5 minutes that runs a Logs Insights query and publishes to the SNS topic",
        "Export the log group to Amazon S3 every 5 minutes and count the ERROR entries with Amazon Athena",
        "Create a metric filter on the log group for ERROR and a CloudWatch alarm on that metric that notifies the SNS topic",
        "Stream the log group to Amazon OpenSearch Service with a subscription filter and configure an alert"
      ],
      "answer": "C",
      "explanation": "A metric filter turns matching log events into a CloudWatch metric as the logs are ingested, with no code to maintain. A CloudWatch alarm on the Sum of that metric over a 5-minute period with a threshold of 10 can then send the notification to the SNS topic. The other options all require building and operating extra infrastructure or code.",
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Implement metrics, alarms, and filters by using AWS monitoring and logging services",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 1, Task 1.1; Amazon CloudWatch Logs User Guide: Creating metrics from log events using filters"
    },
    {
      "stem": "A company requires every new Amazon EBS volume in an AWS Region to be encrypted. This includes volumes that are launched by Auto Scaling groups and volumes that are created from unencrypted snapshots. Which solution will meet this requirement with the LEAST operational effort?",
      "options": [
        "Enable EBS encryption by default for the account in that Region",
        "Create an AWS Config rule that deletes unencrypted volumes after creation",
        "Add an encryption setting to every launch template that the company uses",
        "Create an SCP that denies the ec2:CreateVolume action for all users"
      ],
      "answer": "A",
      "explanation": "EBS encryption by default is an account-level setting per Region. Once enabled, every new volume and snapshot copy in that Region is encrypted, including volumes created from unencrypted snapshots and volumes launched by Auto Scaling, using the default or a chosen KMS key. It works without changing templates or workflows, whereas the other options either require ongoing maintenance or break volume creation.",
      "topic": "Security and Compliance",
      "subtopic": "Implement strategies to protect data and infrastructure",
      "difficulty": "easy",
      "source": "SOA-C03 Domain 4, Task 4.2; Amazon EBS User Guide: Encryption by default"
    },
    {
      "stem": "An application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). Users report intermittent HTTP 5xx errors. An operations engineer needs to determine whether the errors are generated by the load balancer itself or are returned by the registered targets. Which TWO Amazon CloudWatch metrics should the engineer compare? (Choose TWO.)",
      "options": [
        "RequestCount",
        "HTTPCode_ELB_5XX_Count",
        "HealthyHostCount",
        "HTTPCode_Target_5XX_Count",
        "ActiveConnectionCount"
      ],
      "answer": "BD",
      "explanation": "ALB publishes separate metrics for 5xx responses generated by the load balancer (HTTPCode_ELB_5XX_Count, for example 502 or 503 when no healthy target can respond) and for 5xx responses returned by the targets (HTTPCode_Target_5XX_Count). Comparing the two shows whether the problem lies in the application on the instances or in the load balancer's ability to reach healthy targets. The other metrics describe traffic volume or target health but do not count error responses.",
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Identify and remediate issues by using monitoring and availability metrics",
      "difficulty": "easy",
      "source": "SOA-C03 Domain 1, Task 1.2; Elastic Load Balancing User Guide: CloudWatch metrics for your Application Load Balancer"
    },
    {
      "stem": "A company uses AWS Organizations. An operations team must deploy a standard set of IAM roles and an Amazon SNS topic, defined in a single AWS CloudFormation template, to every account in the organization in two AWS Regions. Accounts that join the organization later must receive the same resources automatically. Which solution will meet these requirements with the LEAST operational effort?",
      "options": [
        "Share the template with each account through AWS RAM and ask account owners to create stacks",
        "Create a StackSet with service-managed permissions that targets the organization, with automatic deployment enabled",
        "Create a Lambda function that assumes a role in each account and creates a stack when invoked",
        "Create a StackSet with self-managed permissions and add each new account ID when it joins"
      ],
      "answer": "B",
      "explanation": "CloudFormation StackSets deploy one template to many accounts and Regions in a single operation. With service-managed permissions, StackSets uses Organizations trust to create the required roles itself, and automatic deployment creates stack instances in accounts that are later added to the targeted organization or OUs. Self-managed permissions require manually creating roles and adding accounts.",
      "topic": "Deployment, Provisioning, and Automation",
      "subtopic": "Provision and maintain cloud resources",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 3, Task 3.1; AWS CloudFormation User Guide: StackSets with service-managed permissions and automatic deployments"
    },
    {
      "stem": "An application runs on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. Every weekday at 09:00, traffic increases sharply. New instances take about 10 minutes to finish bootstrapping. The group uses a target tracking scaling policy on average CPU utilization, but users experience high latency for the first 15 minutes of each weekday morning. Which action will resolve this issue with the LEAST operational effort?",
      "options": [
        "Increase the health check grace period of the Auto Scaling group",
        "Change the health check type of the Auto Scaling group from EC2 to ELB",
        "Lower the target value of the target tracking scaling policy",
        "Add a scheduled action that raises the minimum and desired capacity before 09:00 each weekday"
      ],
      "answer": "D",
      "explanation": "The traffic increase is predictable, and reactive scaling only starts adding capacity after CPU rises, so the 10-minute bootstrap time causes a gap. A recurring scheduled action adds capacity before the known spike, so instances are already in service when traffic arrives, while target tracking continues to handle unexpected changes. Changing health checks or the target value does not remove the delay between the spike and new capacity becoming ready.",
      "topic": "Reliability and Business Continuity",
      "subtopic": "Implement scalability and elasticity",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 2, Task 2.1; Amazon EC2 Auto Scaling User Guide: Scheduled scaling"
    },
    {
      "stem": "A company hosts the domain example.com in an Amazon Route 53 public hosted zone. The company's web application runs behind an Application Load Balancer (ALB). Users must be able to reach the application by entering example.com, the zone apex, in a browser. What should an operations engineer do to meet this requirement?",
      "options": [
        "Create a CNAME record for example.com that points to the ALB DNS name",
        "Create an A record for example.com that contains one of the ALB's IP addresses",
        "Create an alias A record for example.com that targets the ALB",
        "Create an MX record for example.com that points to the ALB DNS name"
      ],
      "answer": "C",
      "explanation": "DNS does not allow a CNAME record at the zone apex, because the apex must also hold SOA and NS records. Route 53 alias records solve this: an alias A record at the apex can target an ALB, and Route 53 automatically answers with the load balancer's current IP addresses. Hardcoding an ALB IP address fails because those addresses change over time.",
      "topic": "Networking and Content Delivery",
      "subtopic": "Configure domains, DNS services, and content delivery",
      "difficulty": "easy",
      "source": "SOA-C03 Domain 5, Task 5.2; Amazon Route 53 Developer Guide: Choosing between alias and non-alias records"
    },
    {
      "stem": "A self-managed database runs on an Amazon EC2 instance that uses a 200 GiB gp2 Amazon EBS volume. During nightly batch jobs, the volume's BurstBalance metric drops to 0 and disk latency increases significantly. The workload needs about 6,000 IOPS consistently during the batch jobs. Which solution will resolve the performance issue at the LOWEST cost and without downtime?",
      "options": [
        "Modify the volume to gp3 by using Elastic Volumes and provision 6,000 IOPS",
        "Modify the volume to io2 by using Elastic Volumes and provision 6,000 IOPS",
        "Increase the gp2 volume size to 2,000 GiB to raise its baseline IOPS",
        "Modify the volume to st1 by using Elastic Volumes to gain burst throughput"
      ],
      "answer": "A",
      "explanation": "A gp2 volume earns a baseline of 3 IOPS per GiB, so a 200 GiB volume has only 600 baseline IOPS and depends on burst credits, which the BurstBalance metric shows being exhausted. gp3 decouples IOPS from size and lets you provision the required IOPS for a small additional charge, and Elastic Volumes changes the type while the volume stays attached and in use. io2 also works but costs much more per provisioned IOPS, and st1 is a throughput-oriented HDD type unsuited to random database I/O.",
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Implement performance optimization strategies for compute, storage, and database resources",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 1, Task 1.3; Amazon EBS User Guide: General Purpose SSD volumes and Amazon EBS Elastic Volumes"
    },
    {
      "stem": "Company policy states that no security group may allow inbound SSH (TCP port 22) from 0.0.0.0/0. The operations team must continuously detect security groups that violate this policy and automatically remove the offending rules. Which solution will meet these requirements with the LEAST operational effort?",
      "options": [
        "Enable Amazon GuardDuty and use an EventBridge rule to invoke a custom Lambda function for each finding",
        "Run Amazon Inspector network reachability assessments weekly and remove the rules manually",
        "Review the AWS Trusted Advisor security checks every day and remove the rules manually",
        "Use the AWS Config restricted-ssh managed rule with an automatic remediation that runs a Systems Manager Automation runbook"
      ],
      "answer": "D",
      "explanation": "AWS Config continuously evaluates resource configurations, and the restricted-ssh managed rule flags security groups that allow unrestricted inbound SSH. Config remediation can be set to run automatically with an AWS-managed Systems Manager Automation runbook that removes the rule, so no custom code is required. GuardDuty detects threats from activity rather than evaluating configuration, and manual review does not meet the automation requirement.",
      "topic": "Security and Compliance",
      "subtopic": "Implement and manage security and compliance tools and policies",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 4, Task 4.1; AWS Config Developer Guide: Remediating noncompliant resources; managed rule restricted-ssh"
    },
    {
      "stem": "An operations engineer must use AWS Systems Manager Run Command to run a shell script on 200 Amazon EC2 instances. The instances run in private subnets with no route to the internet, use a hardened custom AMI that does not include SSM Agent, and have no IAM instance profile. Company policy requires that instances receive permissions through IAM instance profiles. Which combination of steps must the engineer take so that the instances can be managed by Systems Manager? (Choose THREE.)",
      "options": [
        "Install SSM Agent on the instances and make sure it is running",
        "Open inbound TCP port 22 in the instances' security groups",
        "Attach an instance profile with the AmazonSSMManagedInstanceCore policy",
        "Assign an Elastic IP address to each of the instances",
        "Create interface VPC endpoints for Systems Manager in the VPC",
        "Associate an EC2 key pair with each of the instances"
      ],
      "answer": "ACE",
      "explanation": "For an EC2 instance to become a managed node, SSM Agent must run on it, the agent needs IAM permissions (here through an instance profile with AmazonSSMManagedInstanceCore), and the agent must reach the Systems Manager endpoints over outbound HTTPS. Without internet access, interface VPC endpoints for Systems Manager provide that connectivity privately. Run Command does not use SSH, so inbound port 22, key pairs and public IP addresses are not needed.",
      "topic": "Deployment, Provisioning, and Automation",
      "subtopic": "Automate the management of existing resources",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 3, Task 3.2; AWS Systems Manager User Guide: Setting up managed nodes; using VPC endpoints for Systems Manager"
    },
    {
      "stem": "A company stores data in Amazon EBS volumes, Amazon RDS DB instances, and Amazon DynamoDB tables. The company wants to manage backups of all these resources centrally with a single schedule and retention policy, and it must keep a copy of every backup in a second AWS Region for disaster recovery. Which TWO actions will meet these requirements with the LEAST operational effort? (Choose TWO.)",
      "options": [
        "Create an AWS Backup plan with a backup rule and assign resources to it by using tags",
        "Enable S3 Cross-Region Replication on the AWS Backup vault",
        "Add a copy action to the backup rule that targets a backup vault in the second Region",
        "Write a Lambda function that creates snapshots of every resource each night",
        "Enable DynamoDB Streams on every table and replicate the records to the second Region"
      ],
      "answer": "AC",
      "explanation": "AWS Backup centralizes backups across services: a backup plan defines the schedule and lifecycle, and a tag-based resource assignment picks up current and future resources automatically. A copy action in the backup rule copies each recovery point to a vault in another Region, with its own retention. Backup vaults are not S3 buckets, so S3 replication does not apply, and custom scripts add operational overhead.",
      "topic": "Reliability and Business Continuity",
      "subtopic": "Implement backup and restore strategies",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 2, Task 2.3; AWS Backup Developer Guide: Backup plans, resource assignment and cross-Region copy"
    },
    {
      "stem": "Amazon EC2 instances in private subnets upload and download large amounts of data to and from Amazon S3 buckets in the same AWS Region. The traffic flows through a NAT gateway, and the NAT gateway data processing charges are high. The instances must stay in private subnets. Which solution will reduce these costs with the LEAST operational effort?",
      "options": [
        "Replace the NAT gateway with a NAT instance on a larger instance type",
        "Create a gateway VPC endpoint for Amazon S3 and associate it with the private route tables",
        "Enable S3 Transfer Acceleration on the buckets that the instances use",
        "Create a second NAT gateway in another Availability Zone to share the load"
      ],
      "answer": "B",
      "explanation": "A gateway VPC endpoint for S3 adds a route, using the S3 prefix list, to the selected route tables so that S3 traffic bypasses the NAT gateway and stays on the AWS network. Gateway endpoints for S3 have no hourly or data processing charge, which removes the NAT gateway charges for that traffic. A NAT instance must be patched and scaled by the team, and Transfer Acceleration adds cost rather than removing it.",
      "topic": "Networking and Content Delivery",
      "subtopic": "Implement and optimize networking features and connectivity",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 5, Task 5.1; Amazon VPC documentation (AWS PrivateLink guide): Gateway endpoints for Amazon S3"
    },
    {
      "stem": "A company uses AWS Organizations with 40 member accounts. The operations team wants to view Amazon CloudWatch metrics, CloudWatch Logs log groups, and AWS X-Ray traces from all member accounts in one central monitoring account, and to create alarms in that account on metrics from the member accounts, without copying the data. Accounts that are added to the organization later must be included automatically. Which solution will meet these requirements with the LEAST operational effort?",
      "options": [
        "Create log subscription filters in each account that stream to a Firehose stream in the central account",
        "Configure CloudWatch metric streams in each account that deliver to an S3 bucket in the central account",
        "Create an IAM role in every account and switch roles in the console to view each account's dashboards",
        "Set up CloudWatch cross-account observability with the central account as monitoring account for the organization"
      ],
      "answer": "D",
      "explanation": "CloudWatch cross-account observability links source accounts to a monitoring account so that metrics, logs and traces can be searched, graphed and alarmed on in the monitoring account without copying the data. Source accounts can be linked across an entire organization or OU, for example by deploying the provided CloudFormation template as a StackSet with automatic deployment, so new accounts join automatically. Streaming or exporting data copies it and does not give a unified console view, and switching roles does not centralize anything.",
      "topic": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization",
      "subtopic": "Implement metrics, alarms, and filters by using AWS monitoring and logging services",
      "difficulty": "hard",
      "source": "SOA-C03 Domain 1, Task 1.1; Amazon CloudWatch User Guide: CloudWatch cross-account observability"
    },
    {
      "stem": "An application that runs on Amazon EC2 instances in Account A must read and write objects in an Amazon S3 bucket that is owned by Account B. The bucket uses SSE-S3 encryption, and S3 Block Public Access is enabled on the bucket. The solution must not use long-term credentials. The instances already use an IAM role through an instance profile. Which TWO actions must an operations engineer take? (Choose TWO.)",
      "options": [
        "Add a bucket policy in Account B that grants the instance role from Account A access to the bucket",
        "Create an IAM user in Account B and store its access keys on the instances",
        "Enable S3 Transfer Acceleration on the bucket in Account B",
        "Attach a policy to the instance role in Account A that allows the required S3 actions on the bucket",
        "Disable S3 Block Public Access on the bucket in Account B"
      ],
      "answer": "AD",
      "explanation": "For cross-account access, both accounts must allow the request: the resource owner (Account B) grants access to the specific role in a bucket policy, and the identity owner (Account A) grants the role permission in an identity-based policy. Block Public Access does not affect grants to specific AWS principals, so it can stay enabled. SSE-S3 needs no additional KMS key policy changes, unlike SSE-KMS with a customer managed key.",
      "topic": "Security and Compliance",
      "subtopic": "Implement and manage security and compliance tools and policies",
      "difficulty": "medium",
      "source": "SOA-C03 Domain 4, Task 4.1; Amazon S3 User Guide: Bucket owner granting cross-account bucket permissions"
    },
    {
      "stem": "An Amazon DynamoDB table has point-in-time recovery (PITR) enabled, and AWS Backup also creates an on-demand backup of the table every night at 01:00. At 14:00, a faulty script deleted several thousand items from the table. The application continues to write new items to the table and must not be taken offline. An operations engineer must recover the deleted items with the least possible data loss. What should the engineer do?",
      "options": [
        "Use PITR to roll back the existing table in place to a time just before the deletion",
        "Use PITR to restore to a new table at a time just before the deletion, then copy the deleted items back to the original table",
        "Restore the most recent nightly backup over the existing table so that it replaces the current data",
        "Enable DynamoDB Streams on the table and replay the stream records to recreate the deleted items"
      ],
      "answer": "B",
      "explanation": "DynamoDB restores, whether from PITR or from a backup, always create a new table; there is no in-place rollback of an existing table. Restoring to a second just before 14:00 captures every item as it was at that moment, so the deleted items can be copied back while the original table keeps serving traffic and retains the new writes. The nightly backup would lose up to 13 hours of changes, and a stream enabled after the deletion has no record of earlier events.",
      "topic": "Reliability and Business Continuity",
      "subtopic": "Implement backup and restore strategies",
      "difficulty": "hard",
      "source": "SOA-C03 Domain 2, Task 2.3; Amazon DynamoDB Developer Guide: Point-in-time recovery and restoring a table"
    },
    {
      "stem": "An AWS CloudFormation stack manages a production Amazon RDS DB instance along with several other resources. The operations team must make sure that no stack update can replace or delete the DB instance, while still allowing stack updates to change the other resources. Which solution will meet this requirement?",
      "options": [
        "Set the DeletionPolicy attribute of the DB instance resource to Retain",
        "Enable termination protection on the stack",
        "Apply a stack policy that denies Update:Replace and Update:Delete on the DB instance resource",
        "Require all updates to the stack to be made through change sets"
      ],
      "answer": "C",
      "explanation": "A stack policy is evaluated during stack updates and can deny specific update actions, such as Update:Replace and Update:Delete, on named resources while allowing all other updates, so an update that would replace the DB instance fails. DeletionPolicy only controls what happens to a resource when it is removed from the stack or the stack is deleted, and termination protection only prevents deleting the whole stack. Change sets let people preview changes but do not enforce anything.",
      "topic": "Deployment, Provisioning, and Automation",
      "subtopic": "Provision and maintain cloud resources",
      "difficulty": "hard",
      "source": "SOA-C03 Domain 3, Task 3.1; AWS CloudFormation User Guide: Prevent updates to stack resources (stack policies)"
    },
    {
      "stem": "An Amazon CloudFront distribution serves a product catalog from an Application Load Balancer origin. The cache hit ratio is below 20%. The distribution's cache policy includes all query strings and the User-Agent and Referer headers in the cache key. Responses from the origin vary only by the category and page query strings. Marketing links add random tracking query strings to many URLs. Which TWO actions will MOST improve the cache hit ratio? (Choose TWO.)",
      "options": [
        "Set the default TTL in the cache policy to 0 seconds",
        "Change the cache policy to include only the category and page query strings in the cache key",
        "Create an invalidation for the /* path every hour",
        "Enable field-level encryption on the distribution",
        "Remove the User-Agent and Referer headers from the cache key, forwarding them with an origin request policy if needed"
      ],
      "answer": "BE",
      "explanation": "Every value included in the cache key splits the cache into more variations, so random tracking parameters and highly variable headers such as User-Agent make almost every request a cache miss. Including only the values that actually change the response lets more requests share one cached object. An origin request policy can still pass headers to the origin without adding them to the cache key. Lower TTLs and frequent invalidations reduce caching further.",
      "topic": "Networking and Content Delivery",
      "subtopic": "Configure domains, DNS services, and content delivery",
      "difficulty": "hard",
      "source": "SOA-C03 Domain 5, Task 5.2; Amazon CloudFront Developer Guide: Increasing the proportion of requests served from caches (cache hit ratio)"
    }
  ]
}
```
