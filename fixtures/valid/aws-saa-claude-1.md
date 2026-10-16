```json
{
  "format": "domcq/1",
  "exam": "aws-saa",
  "set": "AWS Certified Solutions Architect - Associate practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "An application running on Amazon EC2 instances needs to read and write items in an Amazon DynamoDB table. The company's security policy prohibits storing long-term access keys on the instances or in application code. Which solution meets these requirements?",
      "options": [
        "Create an IAM user for the application and place its access keys in the instance user data.",
        "Store an IAM user's access keys in an encrypted file on the instance's Amazon EBS volume.",
        "Create an IAM role with the required DynamoDB permissions and attach it through an instance profile.",
        "Add a resource-based policy to the DynamoDB table that allows access from the instances' security group."
      ],
      "answer": "C",
      "explanation": "An IAM role attached to an EC2 instance through an instance profile gives the application temporary credentials that are delivered through the instance metadata service and rotated automatically. The AWS SDKs pick up these credentials without any keys in code or on disk. Storing IAM user access keys anywhere on the instance creates long-term credentials that can leak, and security groups control network traffic, not IAM authorization.",
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure access to AWS resources",
      "difficulty": "easy",
      "source": "SAA-C03 exam guide, Domain 1, Task Statement 1.1: IAM roles for Amazon EC2 (instance profiles)"
    },
    {
      "stem": "A company uses AWS Organizations to manage 40 member accounts. The security team must ensure that no IAM user or role in any member account, including the account administrators, can stop logging on or delete the AWS CloudTrail trails in that account. What should a solutions architect do to accomplish this?",
      "options": [
        "Attach a service control policy (SCP) to the organization root that denies cloudtrail:StopLogging and cloudtrail:DeleteTrail.",
        "Attach an IAM permissions boundary to every IAM user and role in each account that denies the CloudTrail actions.",
        "Create an IAM policy in the management account that denies the CloudTrail actions for all member accounts.",
        "Enable AWS Config in each account with a rule that detects when a trail has been stopped or deleted."
      ],
      "answer": "A",
      "explanation": "An SCP sets the maximum permissions available to IAM users and roles in member accounts, and an explicit deny in an SCP cannot be overridden by any IAM policy in the account, including administrator policies. Attaching the SCP at the organization root applies it to every member account, including accounts added later. Permissions boundaries can be removed by account administrators, an IAM policy in the management account cannot control permissions in other accounts, and AWS Config only detects the change after it has happened.",
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure access to AWS resources",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Domain 1, Task Statement 1.1: AWS Organizations service control policies (SCPs)"
    },
    {
      "stem": "A company runs a public web application behind an Application Load Balancer. The security team has seen repeated SQL injection and cross-site scripting (XSS) attempts in the application logs and wants to block these requests before they reach the application. Which solution meets these requirements?",
      "options": [
        "Enable Amazon GuardDuty in the account and review its findings for the load balancer.",
        "Add network ACL rules to the load balancer subnets that deny the malicious requests.",
        "Rely on AWS Shield Standard to filter the malicious requests at the load balancer.",
        "Associate an AWS WAF web ACL with SQL injection and XSS rules with the load balancer."
      ],
      "answer": "D",
      "explanation": "AWS WAF inspects HTTP and HTTPS requests at the application layer and can block requests that match SQL injection or cross-site scripting patterns, for example by using AWS managed rule groups. A web ACL can be associated directly with an Application Load Balancer. Network ACLs filter only by IP address, protocol and port, Shield Standard protects against network and transport layer DDoS attacks, and GuardDuty detects threats but does not block web requests.",
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure workloads and applications",
      "difficulty": "easy",
      "source": "SAA-C03 exam guide, Domain 1, Task Statement 1.2: AWS WAF web ACLs and managed rule groups"
    },
    {
      "stem": "An application connects to an Amazon RDS for PostgreSQL database by using a user name and password that are currently stored in a configuration file. The company requires that the database credentials be encrypted, retrieved by the application at runtime, and rotated automatically every 30 days with minimal custom code. Which solution meets these requirements?",
      "options": [
        "Store the credentials as a SecureString parameter in AWS Systems Manager Parameter Store.",
        "Store the credentials in AWS Secrets Manager and turn on automatic rotation for the secret.",
        "Store the credentials in an encrypted Amazon S3 object and rotate them with a cron job.",
        "Store the credentials in environment variables that are encrypted with AWS KMS."
      ],
      "answer": "B",
      "explanation": "AWS Secrets Manager encrypts secrets with AWS KMS, lets applications retrieve them at runtime through an API call, and provides built-in automatic rotation for Amazon RDS database credentials on a schedule you choose. Parameter Store SecureString parameters are encrypted but have no native rotation, so rotation would require custom code. The S3 and environment variable approaches also need custom rotation logic and redeployment.",
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure workloads and applications",
      "difficulty": "easy",
      "source": "SAA-C03 exam guide, Domain 1, Task Statement 1.2: AWS Secrets Manager secret rotation"
    },
    {
      "stem": "A company has an Amazon RDS for MySQL DB instance that was created without encryption. A new compliance requirement states that the database and all of its automated backups must be encrypted at rest with an AWS KMS key. What should a solutions architect do to accomplish this?",
      "options": [
        "Modify the DB instance to enable encryption with an AWS KMS key and apply the change immediately.",
        "Create an encrypted read replica of the DB instance and promote the read replica to a standalone instance.",
        "Enable Amazon EBS encryption by default for the account and reboot the DB instance to re-encrypt its storage.",
        "Take a snapshot of the DB instance, create an encrypted copy of the snapshot, and restore a new DB instance from it."
      ],
      "answer": "D",
      "explanation": "Encryption at rest for an RDS DB instance is chosen when the instance is created, so an existing unencrypted instance cannot be modified to become encrypted, and RDS does not allow an encrypted read replica of an unencrypted instance. The supported path is to snapshot the instance, copy the snapshot with encryption enabled using a KMS key, and restore a new instance from the encrypted copy. The restored instance, its storage, its automated backups and its snapshots are then all encrypted with that key.",
      "topic": "Design Secure Architectures",
      "subtopic": "Determine appropriate data security controls",
      "difficulty": "hard",
      "source": "Amazon RDS User Guide: Encrypting Amazon RDS resources (limitations of encrypted DB instances)"
    },
    {
      "stem": "A financial services company stores trade records in an Amazon S3 bucket. Regulations require that the records be encrypted with a key whose usage is recorded in AWS CloudTrail and whose key policy the company controls. The records must also be stored in a write-once-read-many (WORM) model so that no user, including the AWS account root user, can overwrite or delete them for 7 years. Which combination of steps will meet these requirements? (Choose TWO.)",
      "options": [
        "Configure default bucket encryption to use server-side encryption with Amazon S3 managed keys (SSE-S3).",
        "Configure default bucket encryption to use server-side encryption with an AWS KMS customer managed key.",
        "Enable S3 Object Lock on the bucket and set a default retention of 7 years in governance mode.",
        "Enable S3 Object Lock on the bucket and set a default retention of 7 years in compliance mode.",
        "Enable MFA Delete on the bucket and remove s3:DeleteObject permissions from all IAM policies."
      ],
      "answer": "BD",
      "explanation": "SSE-KMS with a customer managed key lets the company define and manage the key policy, and every use of the key is logged in CloudTrail; with SSE-S3 the keys are managed entirely by Amazon S3. S3 Object Lock in compliance mode prevents any user, including the root user, from overwriting or deleting a protected object version or shortening its retention until the retention period ends. Governance mode can be bypassed by users with the s3:BypassGovernanceRetention permission, and MFA Delete does not provide time-based WORM retention.",
      "topic": "Design Secure Architectures",
      "subtopic": "Determine appropriate data security controls",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Domain 1, Task Statement 1.3: S3 Object Lock retention modes and SSE-KMS"
    },
    {
      "stem": "A company's web tier on Amazon EC2 receives orders and sends them directly to a processing tier on other EC2 instances. During sales events, traffic spikes overwhelm the processing tier and some orders are lost. The company wants every order to be processed, even if processing is delayed during spikes. Which solution meets these requirements?",
      "options": [
        "Have the web tier send orders to an Amazon SQS queue and have the processing tier poll the queue.",
        "Place a Network Load Balancer between the web tier and the processing tier instances.",
        "Increase the instance size of the processing tier so that it can handle the peak load.",
        "Have the web tier write orders to an Amazon ElastiCache cluster for the processing tier to read."
      ],
      "answer": "A",
      "explanation": "An Amazon SQS queue decouples the tiers: the web tier can keep accepting orders at any rate, and the messages are stored durably until the processing tier retrieves and deletes them. The processing tier then works through the backlog at its own pace, and it can also scale out based on queue depth. A load balancer or a larger instance still drops requests when capacity is exceeded, and a cache is not designed to be a durable work queue.",
      "topic": "Design Resilient Architectures",
      "subtopic": "Design scalable and loosely coupled architectures",
      "difficulty": "easy",
      "source": "SAA-C03 exam guide, Domain 2, Task Statement 2.1: Amazon SQS for decoupling application tiers"
    },
    {
      "stem": "A company runs a web application on a single Amazon EC2 instance in one Availability Zone. The application stores its data in a Single-AZ Amazon RDS for MySQL DB instance in the same Availability Zone. The company wants the application to remain available if an Availability Zone fails. Which combination of steps will meet these requirements? (Choose TWO.)",
      "options": [
        "Move the application to a larger EC2 instance type in the same Availability Zone.",
        "Add an RDS read replica in the same Availability Zone to act as a standby database.",
        "Run EC2 instances in an Auto Scaling group across multiple AZs behind an ALB.",
        "Schedule hourly EBS snapshots of the instance and copy them to another Region.",
        "Modify the RDS DB instance to use a Multi-AZ deployment with automatic failover."
      ],
      "answer": "CE",
      "explanation": "High availability across Availability Zones requires redundancy in every tier. An Auto Scaling group that spans multiple AZs behind an Application Load Balancer keeps healthy instances serving traffic and replaces failed ones, and an RDS Multi-AZ deployment keeps a synchronous standby in another AZ and fails over to it automatically. A larger instance, a replica in the same AZ, or snapshots that must be restored manually do not keep the application available during an AZ outage.",
      "topic": "Design Resilient Architectures",
      "subtopic": "Design highly available and/or fault-tolerant architectures",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Domain 2, Task Statement 2.2: Multi-AZ Auto Scaling groups and Amazon RDS Multi-AZ"
    },
    {
      "stem": "A company runs a critical application in one AWS Region and needs a disaster recovery (DR) plan in a second Region. The business requires a recovery time objective (RTO) of minutes. A scaled-down but fully functional copy of the production environment must always be running in the DR Region so that it can serve traffic immediately after failover and then scale up. Which DR strategy meets these requirements?",
      "options": [
        "Backup and restore",
        "Warm standby",
        "Pilot light",
        "Multi-site active/active"
      ],
      "answer": "B",
      "explanation": "In a warm standby strategy, a scaled-down but fully functional copy of the workload runs continuously in the DR Region, so it can take traffic immediately and then scale out to full production capacity, giving an RTO of minutes. Pilot light keeps only core components such as replicated data running, and the rest of the infrastructure must be started or deployed before it can serve traffic. Backup and restore has the longest RTO, and multi-site active/active runs the full workload in both Regions at all times, at the highest cost.",
      "topic": "Design Resilient Architectures",
      "subtopic": "Design highly available and/or fault-tolerant architectures",
      "difficulty": "medium",
      "source": "AWS whitepaper: Disaster Recovery of Workloads on AWS (disaster recovery strategies)"
    },
    {
      "stem": "A company runs an Amazon Aurora MySQL database in us-east-1 for a global application. The company needs a cross-Region disaster recovery solution with a recovery point objective (RPO) of about 1 second and a recovery time objective (RTO) of under 1 minute. The solution must also let users in eu-west-1 read data with low latency. Which solution meets these requirements?",
      "options": [
        "Copy Aurora snapshots to eu-west-1 every hour and restore them after a failure.",
        "Add Aurora Replicas in other Availability Zones of us-east-1 and enable failover.",
        "Convert the cluster to an Aurora global database with a secondary cluster in eu-west-1.",
        "Use AWS DMS to replicate changes to a self-managed MySQL database in eu-west-1."
      ],
      "answer": "C",
      "explanation": "An Aurora global database uses dedicated storage-level replication to copy data to secondary Regions with typical lag of under 1 second, and a secondary cluster can be promoted to handle full read/write workloads in under a minute. The reader instances in the secondary cluster also serve low-latency local reads in eu-west-1. Hourly snapshots give an RPO of up to an hour, Aurora Replicas in the same Region do not protect against a Regional outage, and DMS replication to a self-managed database adds lag and a slower, manual failover.",
      "topic": "Design Resilient Architectures",
      "subtopic": "Design highly available and/or fault-tolerant architectures",
      "difficulty": "hard",
      "source": "SAA-C03 exam guide, Domain 2, Task Statement 2.2: Amazon Aurora global databases for cross-Region DR"
    },
    {
      "stem": "When a customer places an order, a company's order service must notify three independent downstream services: billing, shipping and analytics. Each service must receive its own copy of every order event and process it at its own pace, and a temporary failure in one service must not affect the others. Which solution meets these requirements?",
      "options": [
        "Publish each order event to an Amazon SNS topic that has one SQS queue subscribed per service.",
        "Send each order event to one Amazon SQS standard queue that all three services poll.",
        "Have the order service call each downstream service's API synchronously, one after another.",
        "Send each order event to one SQS FIFO queue and use a separate message group for each service."
      ],
      "answer": "A",
      "explanation": "The SNS-to-SQS fan-out pattern delivers a copy of every message published to the topic to each subscribed queue. Each service consumes from its own durable queue at its own rate, so if one service is down, its messages wait in its queue while the other services continue. With a single SQS queue, standard or FIFO, each message is processed by only one consumer, and synchronous calls couple the order service to the availability of every downstream service.",
      "topic": "Design Resilient Architectures",
      "subtopic": "Design scalable and loosely coupled architectures",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Domain 2, Task Statement 2.1: Amazon SNS fan-out to Amazon SQS queues"
    },
    {
      "stem": "A company hosts images, videos and JavaScript files for its website in an Amazon S3 bucket in the us-west-2 Region. Users in Europe and Asia report slow page loads. The company wants to reduce latency for these users without managing any servers. Which solution meets these requirements?",
      "options": [
        "Move the S3 bucket to a different Region that is closer to Europe and Asia.",
        "Launch Amazon EC2 instances in Europe and Asia to proxy requests to the bucket.",
        "Create an Amazon Route 53 latency-based routing record that points to the bucket.",
        "Create an Amazon CloudFront distribution that uses the S3 bucket as its origin."
      ],
      "answer": "D",
      "explanation": "Amazon CloudFront caches content at edge locations around the world, so users in Europe and Asia are served from a nearby edge location instead of from us-west-2. CloudFront is fully managed, with the S3 bucket acting as the origin. Moving the bucket to another single Region still leaves some users far away, proxy instances add servers without caching content close to users, and latency-based routing only helps when there are endpoints in several Regions.",
      "topic": "Design High-Performing Architectures",
      "subtopic": "Determine high-performing and/or scalable network architectures",
      "difficulty": "easy",
      "source": "SAA-C03 exam guide, Domain 3, Task Statement 3.4: Amazon CloudFront edge caching"
    },
    {
      "stem": "A gaming company stores player profiles in an Amazon DynamoDB table. The application is read-heavy, repeatedly reads the same items, and currently sees single-digit millisecond read latency. A new feature requires microsecond read latency for these items, with minimal changes to the application code. Which solution meets these requirements?",
      "options": [
        "Enable DynamoDB Streams and have the application read changes from the stream.",
        "Deploy a DynamoDB Accelerator (DAX) cluster in front of the existing table.",
        "Increase the table's provisioned read capacity units to handle more requests.",
        "Create a global secondary index on the table and query the index instead."
      ],
      "answer": "B",
      "explanation": "DynamoDB Accelerator (DAX) is a fully managed, in-memory cache for DynamoDB that reduces read latency from milliseconds to microseconds for eventually consistent reads of frequently accessed items. DAX is API-compatible with DynamoDB, so the application mainly needs to switch to the DAX client. Adding read capacity increases throughput but does not lower per-request latency, and indexes and streams do not provide an in-memory cache.",
      "topic": "Design High-Performing Architectures",
      "subtopic": "Determine high-performing database solutions",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Domain 3, Task Statement 3.3: DynamoDB Accelerator (DAX)"
    },
    {
      "stem": "A company runs a content management application on multiple Amazon EC2 Linux instances located in three Availability Zones. All instances must read and write the same set of files concurrently by using standard file system semantics, and storage must grow and shrink automatically as files are added and removed. Which storage solution meets these requirements?",
      "options": [
        "An Amazon EBS Provisioned IOPS volume shared by all instances through Multi-Attach.",
        "An Amazon S3 bucket that each instance reads from and writes to through the S3 API.",
        "An Amazon EFS file system mounted on all instances through a mount target in each AZ.",
        "An instance store volume on each instance, kept in sync by a scheduled copy script."
      ],
      "answer": "C",
      "explanation": "Amazon EFS provides a fully managed NFS file system that many Linux instances across multiple Availability Zones can mount and use concurrently, with standard file locking and permissions. EFS storage is elastic, growing and shrinking automatically as files are added and removed, so no capacity has to be provisioned. EBS Multi-Attach works only within a single Availability Zone and has a fixed provisioned size, and S3 is object storage accessed through an API rather than a mounted file system.",
      "topic": "Design High-Performing Architectures",
      "subtopic": "Determine high-performing and/or scalable storage solutions",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Domain 3, Task Statement 3.1: Amazon EFS shared file storage"
    },
    {
      "stem": "A company collects clickstream events from its website at a rate of several thousand records per second. The analytics team wants the events delivered to Amazon S3 within a few minutes and converted from JSON to Apache Parquet format so that they can be queried efficiently with Amazon Athena. The company wants a fully managed solution with the least operational overhead. Which solution meets these requirements?",
      "options": [
        "Send the events to Amazon SQS and use EC2 instances to convert them to Parquet and write them to S3.",
        "Write the events to S3 as JSON and run a nightly AWS Glue job to convert the new files to Parquet.",
        "Send the events to Kinesis Data Streams and run a custom consumer on EC2 that writes Parquet to S3.",
        "Write the events to Amazon RDS and schedule a daily export of the tables to S3 in Parquet format.",
        "Send the events to Amazon Data Firehose with record format conversion to Parquet and an S3 destination."
      ],
      "answer": "E",
      "explanation": "Amazon Data Firehose (formerly Kinesis Data Firehose) is a fully managed delivery service that buffers streaming records and writes them to Amazon S3 within seconds to minutes, scaling automatically with no servers to manage. Its record format conversion feature converts incoming JSON to Apache Parquet or ORC by using a schema from an AWS Glue Data Catalog table, which makes the data efficient to query with Athena. The nightly and daily batch options miss the delivery-time requirement, and the EC2-based consumers add servers and custom code to operate.",
      "topic": "Design High-Performing Architectures",
      "subtopic": "Determine high-performing data ingestion and transformation solutions",
      "difficulty": "hard",
      "source": "SAA-C03 exam guide, Domain 3, Task Statement 3.5: Amazon Data Firehose record format conversion"
    },
    {
      "stem": "A research team runs a tightly coupled high performance computing (HPC) simulation on Amazon EC2. The nodes exchange large amounts of data with each other, and the job's performance depends on the lowest possible network latency and the highest network throughput between instances. Which solution meets these requirements?",
      "options": [
        "Launch the instances in a cluster placement group in a single Availability Zone.",
        "Launch the instances in a spread placement group across multiple Availability Zones.",
        "Launch the instances in a partition placement group with one instance per partition.",
        "Launch the instances across several Availability Zones with enhanced networking enabled."
      ],
      "answer": "A",
      "explanation": "A cluster placement group packs instances close together inside a single Availability Zone, which gives the low-latency, high-throughput node-to-node networking that tightly coupled HPC workloads need. Spread and partition placement groups place instances on separate hardware to reduce correlated failures, which suits resilient distributed workloads rather than latency-sensitive ones. Spreading instances across Availability Zones adds network latency between nodes, whatever networking features are enabled.",
      "topic": "Design High-Performing Architectures",
      "subtopic": "Design high-performing and elastic compute solutions",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Domain 3, Task Statement 3.2: Amazon EC2 placement groups"
    },
    {
      "stem": "A company stores application log files in Amazon S3 Standard. The logs are analyzed frequently during the first 30 days and are almost never accessed after that, but they must be retained for 7 years for compliance. When an older log is needed, a retrieval time of up to 48 hours is acceptable. Which solution meets these requirements MOST cost-effectively?",
      "options": [
        "Use a Lifecycle rule to move objects to S3 Standard-IA after 30 days and expire them after 7 years.",
        "Use a Lifecycle rule to move objects to S3 Glacier Instant Retrieval after 30 days and expire them after 7 years.",
        "Use a Lifecycle rule to move objects to S3 Glacier Deep Archive after 30 days and expire them after 7 years.",
        "Use a Lifecycle rule to move objects to S3 One Zone-IA after 30 days and expire them after 7 years."
      ],
      "answer": "C",
      "explanation": "The access pattern is known in advance, so an S3 Lifecycle rule can move objects to a cheaper storage class on a fixed schedule and delete them when retention ends. S3 Glacier Deep Archive has the lowest storage price in Amazon S3 and is designed for long-term retention of rarely accessed data, with standard retrievals completing within 12 hours and bulk retrievals within 48 hours. Standard-IA, One Zone-IA and Glacier Instant Retrieval provide millisecond access, which this workload does not need, at a higher storage price.",
      "topic": "Design Cost-Optimized Architectures",
      "subtopic": "Design cost-optimized storage solutions",
      "difficulty": "easy",
      "source": "SAA-C03 exam guide, Domain 4, Task Statement 4.1: S3 storage classes and S3 Lifecycle transitions"
    },
    {
      "stem": "A company runs a web application on 10 Amazon EC2 m6i.xlarge instances in us-east-1. These instances must run 24 hours a day for the next 3 years and must not be interrupted. Every night, the company also runs a batch job for about 4 hours that needs 20 additional instances. The batch job is stateless, saves its progress regularly and can resume if instances are interrupted. Which combination of purchasing options will meet these requirements MOST cost-effectively? (Choose TWO.)",
      "options": [
        "Purchase a 3-year EC2 Instance Savings Plan sized for the 10 web application instances.",
        "Purchase 3-year Standard Reserved Instances for all 30 instances used at peak.",
        "Run the 10 web application instances as Spot Instances with a capacity-optimized strategy.",
        "Run the 20 batch instances as On-Demand Instances launched by scheduled scaling actions.",
        "Run the 20 batch instances as Spot Instances diversified across several instance types.",
        "Run all 30 instances on EC2 Dedicated Hosts purchased with a 3-year reservation."
      ],
      "answer": "AE",
      "explanation": "Steady, uninterruptible usage that is known for 3 years is cheapest with a commitment, and an EC2 Instance Savings Plan for a fixed instance family in one Region gives the largest Savings Plans discount for that baseline. The nightly batch capacity runs only about 4 hours a day and tolerates interruptions, which makes it a good fit for Spot Instances, and diversifying across instance types improves the chance of getting Spot capacity. Reserving all 30 instances pays for 20 instances that sit idle about 20 hours a day, and Spot is not appropriate for the web tier because it must not be interrupted.",
      "topic": "Design Cost-Optimized Architectures",
      "subtopic": "Design cost-optimized compute solutions",
      "difficulty": "hard",
      "source": "SAA-C03 exam guide, Domain 4, Task Statement 4.2: EC2 purchasing options (Savings Plans, Spot Instances)"
    },
    {
      "stem": "A company is launching a new application that stores data in an Amazon DynamoDB table. Traffic is unpredictable: the table is idle for long periods and then receives sudden, short bursts of heavy traffic that are hard to forecast. The company wants to avoid throttling and pay only for the reads and writes that the application actually performs. Which solution meets these requirements MOST cost-effectively?",
      "options": [
        "Use provisioned capacity mode set to the highest expected peak throughput.",
        "Use provisioned capacity mode with reserved capacity purchased for 1 year.",
        "Use provisioned capacity mode with auto scaling at a 70% utilization target.",
        "Use on-demand capacity mode for the table and pay for each request made."
      ],
      "answer": "D",
      "explanation": "DynamoDB on-demand capacity mode charges per read and write request, with no throughput to provision, and it instantly accommodates traffic up to double the table's previous peak. That makes it the most cost-effective choice for spiky, unpredictable workloads that are often idle. Provisioning for peak or buying reserved capacity pays for unused throughput during idle periods, and auto scaling adjusts over minutes, so short sudden bursts can still be throttled.",
      "topic": "Design Cost-Optimized Architectures",
      "subtopic": "Design cost-optimized database solutions",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Domain 4, Task Statement 4.3: DynamoDB on-demand and provisioned capacity modes"
    },
    {
      "stem": "A company's data processing application runs on Amazon EC2 instances in private subnets and reads several terabytes of data each day from Amazon S3 buckets in the same AWS Region. All of this traffic currently passes through a NAT gateway, and NAT gateway data processing charges have become a large part of the monthly bill. The instances must remain in private subnets. Which solution will reduce these costs the MOST?",
      "options": [
        "Deploy a NAT gateway in each Availability Zone and update each subnet's route table.",
        "Create a gateway VPC endpoint for Amazon S3 and add it to the private route tables.",
        "Enable S3 Transfer Acceleration on the buckets and use the accelerate endpoint.",
        "Create an interface VPC endpoint for Amazon S3 in each Availability Zone."
      ],
      "answer": "B",
      "explanation": "A gateway VPC endpoint for Amazon S3 adds a route that sends S3 traffic from the private subnets directly to S3 over the AWS network, bypassing the NAT gateway, and gateway endpoints have no hourly or data processing charges. Interface endpoints for S3 also bypass the NAT gateway but are billed per hour and per GB processed, so they cost more than a gateway endpoint for this traffic. Adding NAT gateways does not remove the per-GB processing charge, and Transfer Acceleration adds charges rather than removing them.",
      "topic": "Design Cost-Optimized Architectures",
      "subtopic": "Design cost-optimized network architectures",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Domain 4, Task Statement 4.4: VPC gateway endpoints for Amazon S3"
    }
  ]
}
```
