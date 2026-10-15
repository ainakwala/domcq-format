```json
{
  "format": "domcq/1",
  "exam": "aws-saa",
  "set": "AWS Certified Solutions Architect - Associate practice – Four-domain mix 1",
  "questions": [
    {
      "stem": "A company runs an application on Amazon EC2 instances that must read and write objects in an Amazon S3 bucket in the same AWS account. The security team prohibits storing long-term access keys on the instances or in the application code. Which solution meets these requirements?",
      "options": [
        "Create an IAM user for the application and pass its access keys to the instances in the user data",
        "Create an IAM role with the required S3 permissions and attach it to the instances through an instance profile",
        "Create an IAM group with the required S3 permissions and add the EC2 instances to the group as members",
        "Store an IAM user's access keys in an encrypted file on each instance's Amazon EBS volume"
      ],
      "answer": "B",
      "explanation": "An IAM role attached to an EC2 instance through an instance profile gives the application temporary credentials that are delivered by the instance metadata service and rotated automatically, so no long-term keys are stored anywhere. Access keys for an IAM user are long-term credentials no matter how they are delivered or encrypted, and IAM groups can contain only IAM users, not EC2 instances or other resources.",
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure access to AWS resources",
      "difficulty": "easy",
      "source": "SAA-C03 exam guide, Task 1.1; IAM User Guide, IAM roles for applications on Amazon EC2"
    },
    {
      "stem": "A company uses AWS Organizations to manage 40 member accounts. The security team must ensure that no user or role in any member account, including the administrators of those accounts, can stop logging or delete AWS CloudTrail trails. Which solution meets these requirements with the LEAST operational overhead?",
      "options": [
        "Attach an IAM policy that denies the CloudTrail actions to every IAM user and role in each member account",
        "Deploy an AWS Config rule in each member account that detects stopped trails and sends an alert",
        "Set IAM permissions boundaries that exclude the CloudTrail actions on all administrator roles",
        "Attach a service control policy that denies the CloudTrail actions to the organization's root"
      ],
      "answer": "D",
      "explanation": "Service control policies (SCPs) set the maximum permissions available to IAM users and roles in member accounts, and an explicit deny in an SCP applies even to the account's administrators and root user. Attaching the SCP to the organization root applies it to every member account from one place, including accounts added later. IAM policies and permissions boundaries can be removed by the administrators of each account, and an AWS Config rule only detects the change after it has happened.",
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure access to AWS resources",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Task 1.1; AWS Organizations User Guide, Service control policies (SCPs)"
    },
    {
      "stem": "A company stores confidential reports in an Amazon S3 bucket. A compliance policy requires that the objects be encrypted at rest with a key that is rotated automatically, that every use of the key be recorded in AWS CloudTrail, and that a partner's AWS account be granted permission to decrypt and read the objects. Which solution meets these requirements?",
      "options": [
        "Use SSE-S3 with Amazon S3 managed keys, and grant the partner account read access to the objects through the bucket policy",
        "Use SSE-KMS with the AWS managed key aws/s3, and grant the partner account read access to the objects through the bucket policy",
        "Use SSE-KMS with a customer managed key that has automatic rotation on, and grant the partner account access in the key policy and bucket policy",
        "Use SSE-C with encryption keys that the company generates and rotates, and send each key to the partner over an encrypted channel"
      ],
      "answer": "C",
      "explanation": "Only a customer managed KMS key lets the company edit the key policy, which is required before principals in another AWS account can use the key to decrypt; AWS managed keys such as aws/s3 cannot be used across accounts because their key policies cannot be changed. Customer managed keys support automatic rotation, and every KMS API call that uses the key is logged in CloudTrail. With SSE-S3 the keys are managed entirely by Amazon S3 with no key policy or per-key usage logging, and SSE-C leaves rotation and key distribution to the customer.",
      "topic": "Design Secure Architectures",
      "subtopic": "Determine appropriate data security controls",
      "difficulty": "hard",
      "source": "SAA-C03 exam guide, Task 1.3; AWS KMS Developer Guide, Rotating AWS KMS keys and Allowing users in other accounts to use a KMS key"
    },
    {
      "stem": "An application running on Amazon EC2 connects to an Amazon RDS for MySQL database. The company requires that the database password be rotated automatically every 30 days without the company writing or maintaining rotation code, and the application must always retrieve the current password at runtime. Which solution meets these requirements?",
      "options": [
        "Store the password in AWS Secrets Manager, turn on automatic rotation, and have the application retrieve the secret at runtime",
        "Store the password as a SecureString parameter in AWS Systems Manager Parameter Store, and have the application read it at runtime",
        "Store the password in the application's configuration file, and rebuild and redeploy the AMI with a new password every 30 days",
        "Store the password in an environment variable on each instance, and write a scheduled AWS Lambda function that changes it"
      ],
      "answer": "A",
      "explanation": "AWS Secrets Manager stores database credentials and can rotate them automatically on a schedule, using managed rotation or AWS-provided rotation functions for Amazon RDS, so the company does not have to write rotation logic. The application calls Secrets Manager at runtime and always receives the current value. Parameter Store SecureString parameters are encrypted but have no built-in rotation, and the other options depend on manual work or custom code.",
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure workloads and applications",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Task 1.2; AWS Secrets Manager User Guide, Rotate AWS Secrets Manager secrets"
    },
    {
      "stem": "A company hosts a public web application on Amazon EC2 instances behind an Application Load Balancer. The company must block requests that contain SQL injection attempts and must limit how many requests any single IP address can send in a 5-minute period. Which solution meets these requirements?",
      "options": [
        "Add inbound rules to the instances' security groups that deny traffic matching SQL injection patterns",
        "Add network ACL rules to the public subnets that deny requests from IP addresses that send too many requests",
        "Enable AWS Shield Standard on the load balancer so that it inspects and filters the content of HTTP requests",
        "Enable Amazon GuardDuty in the account and configure it to block the IP addresses that it reports as malicious",
        "Associate an AWS WAF web ACL that has a SQL injection rule group and a rate-based rule with the load balancer"
      ],
      "answer": "E",
      "explanation": "AWS WAF inspects HTTP and HTTPS requests at the application layer and can be associated with an Application Load Balancer. An AWS managed rule group for SQL databases detects SQL injection patterns, and a rate-based rule blocks source IP addresses that exceed a request limit within the evaluation window. Security groups support only allow rules, network ACLs filter by address and port without counting requests or inspecting content, Shield Standard protects against network and transport layer DDoS attacks, and GuardDuty detects threats rather than blocking them.",
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure workloads and applications",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Task 1.2; AWS WAF Developer Guide, Rate-based rule statement and AWS Managed Rules rule groups"
    },
    {
      "stem": "A company has Amazon EC2 instances in private subnets that process data stored in an Amazon S3 bucket in the same AWS Region. Traffic between the instances and Amazon S3 must not traverse the internet, and the bucket must reject any request that does not arrive through the company's VPC. Which combination of steps will meet these requirements? (Choose TWO.)",
      "options": [
        "Deploy a NAT gateway in a public subnet and route the private subnets' S3 traffic through it",
        "Create a gateway VPC endpoint for Amazon S3 and associate it with the private subnets' route tables",
        "Add a bucket policy that denies requests unless aws:SourceIp matches the VPC's private CIDR range",
        "Add a bucket policy that denies requests unless aws:SourceVpce matches the ID of the VPC endpoint",
        "Enable S3 Transfer Acceleration on the bucket and point the application at the accelerated endpoint"
      ],
      "answer": "BD",
      "explanation": "A gateway VPC endpoint adds a route for Amazon S3 to the selected route tables, so traffic from the private subnets reaches S3 over the AWS network without an internet gateway or NAT device. A bucket policy that denies requests when aws:SourceVpce does not match the endpoint ID then rejects all access that does not come through that endpoint. The aws:SourceIp condition key cannot match the private IP addresses of requests that arrive through a VPC endpoint, and a NAT gateway or Transfer Acceleration sends traffic to the public S3 endpoints.",
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure workloads and applications",
      "difficulty": "hard",
      "source": "SAA-C03 exam guide, Task 1.2; Amazon S3 User Guide, Controlling access from VPC endpoints with bucket policies"
    },
    {
      "stem": "A web application runs on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. The application stores user session data in memory on each instance. When the group scales in, users whose sessions were on the terminated instances are logged out. What should a solutions architect do to prevent this while keeping the web tier able to scale?",
      "options": [
        "Enable sticky sessions on the load balancer so that each user always returns to the same instance",
        "Set the Auto Scaling group's minimum capacity equal to its maximum capacity to prevent scale-in",
        "Store the session data in Amazon ElastiCache so that every instance can read any user's session",
        "Store the session data on an Amazon EBS volume that is attached to each instance in the group"
      ],
      "answer": "C",
      "explanation": "Moving session state out of the instances into a shared, low-latency store such as Amazon ElastiCache makes the web tier stateless, so any instance can serve any request and instances can be added or removed without losing sessions. Sticky sessions still tie a session to one instance, so the session is lost when that instance is terminated, and an EBS volume attached to each instance has the same problem. Preventing scale-in removes elasticity instead of fixing the design.",
      "topic": "Design Resilient Architectures",
      "subtopic": "Design scalable and loosely coupled architectures",
      "difficulty": "easy",
      "source": "SAA-C03 exam guide, Task 2.1; AWS Well-Architected Framework, Reliability Pillar (stateless services)"
    },
    {
      "stem": "A company runs a production Amazon RDS for PostgreSQL DB instance in a single Availability Zone. The company needs the database to fail over automatically to a standby in another Availability Zone if the primary fails, without any change to the application's database endpoint. Which solution meets these requirements?",
      "options": [
        "Convert the DB instance to a Multi-AZ deployment",
        "Create a read replica in another Availability Zone",
        "Enable automated backups with a 35-day retention",
        "Modify the DB instance to a larger instance class"
      ],
      "answer": "A",
      "explanation": "An RDS Multi-AZ deployment keeps a synchronously replicated standby in a different Availability Zone, and if the primary fails RDS fails over automatically by pointing the same DNS endpoint at the standby. A read replica uses asynchronous replication, has its own endpoint and must be promoted manually, while backups and a larger instance class do not provide failover at all.",
      "topic": "Design Resilient Architectures",
      "subtopic": "Design highly available and/or fault-tolerant architectures",
      "difficulty": "easy",
      "source": "SAA-C03 exam guide, Task 2.2; Amazon RDS User Guide, Multi-AZ deployments"
    },
    {
      "stem": "A company runs an Amazon Aurora MySQL DB cluster in one AWS Region. For disaster recovery, the company needs a copy of the database in a second Region with a recovery point objective (RPO) of seconds and a recovery time objective (RTO) of minutes. Users near the second Region must also be able to run low-latency read queries against that copy. Which solution meets these requirements?",
      "options": [
        "Copy automated cluster snapshots to the second Region every hour, and restore the latest snapshot during a disaster",
        "Add Aurora Replicas in other Availability Zones of the primary Region, and point the remote users at the reader endpoint",
        "Use AWS Backup to create daily backups that are copied to the second Region, and restore the latest backup during a disaster",
        "Convert the cluster to an Aurora global database with a secondary cluster in the second Region, and promote it during a disaster"
      ],
      "answer": "D",
      "explanation": "Aurora Global Database replicates data from the primary Region to secondary Regions using storage-based replication with lag that is typically under a second, which supports an RPO of seconds. The secondary cluster serves read traffic locally and can be promoted to accept writes in minutes or less. Snapshot and backup copies give an RPO of hours and need a full restore, and Aurora Replicas in the same Region do not protect against a Regional outage.",
      "topic": "Design Resilient Architectures",
      "subtopic": "Design highly available and/or fault-tolerant architectures",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Task 2.2; Amazon Aurora User Guide, Using Amazon Aurora Global Database"
    },
    {
      "stem": "A web application runs on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. Sometimes the application process on an instance hangs. The load balancer then marks the instance unhealthy and stops sending it traffic, but the Auto Scaling group does not replace the instance. What should a solutions architect do so that these instances are replaced automatically?",
      "options": [
        "Increase the health check grace period of the Auto Scaling group",
        "Turn on Elastic Load Balancing health checks for the Auto Scaling group",
        "Enable detailed monitoring for the instances in the Auto Scaling group",
        "Enable cross-zone load balancing on the Application Load Balancer",
        "Add a target tracking scaling policy based on average CPU utilization"
      ],
      "answer": "B",
      "explanation": "By default, an Auto Scaling group uses only Amazon EC2 status checks, which detect hardware and operating system problems but not a hung application. When Elastic Load Balancing health checks are turned on for the group, an instance that fails the target group's health check is also marked unhealthy by Auto Scaling, which terminates and replaces it. The other options change monitoring, traffic distribution or scaling behavior without making the group act on application health.",
      "topic": "Design Resilient Architectures",
      "subtopic": "Design highly available and/or fault-tolerant architectures",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Task 2.2; Amazon EC2 Auto Scaling User Guide, Health checks for instances in an Auto Scaling group"
    },
    {
      "stem": "When a customer places an order, an ordering application must notify three independent services: billing, shipping and analytics. Each service must receive every order event, process events at its own pace, and must not lose events that arrive while it is temporarily unavailable. The company also wants to add new services later without changing the ordering application. Which architecture meets these requirements?",
      "options": [
        "Publish each order event to an Amazon SNS topic that has a separate Amazon SQS queue subscribed for each service",
        "Send each order event to a single Amazon SQS standard queue that all three services poll for new messages",
        "Have the ordering application call each service's API synchronously and retry until every call succeeds",
        "Write each order event to a table in Amazon RDS, and have each service read and then delete the rows"
      ],
      "answer": "A",
      "explanation": "In the fan-out pattern, Amazon SNS delivers a copy of every published message to each subscribed SQS queue, so each service gets its own durable queue that it consumes at its own rate and that holds messages while the service is down. The ordering application publishes only to the topic, so services are added or removed by managing subscriptions rather than changing the publisher. With a single SQS queue each message is processed by only one consumer, and synchronous calls tightly couple the ordering application to the availability of every service.",
      "topic": "Design Resilient Architectures",
      "subtopic": "Design scalable and loosely coupled architectures",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Task 2.1; Amazon SNS Developer Guide, Fanout to Amazon SQS queues"
    },
    {
      "stem": "A company serves product images and videos from an Amazon S3 bucket in a single AWS Region. Users around the world report slow load times, and the company also wants to reduce the number of requests that reach the bucket. Which solution meets these requirements?",
      "options": [
        "Configure S3 Cross-Region Replication to a bucket in every Region where users are located",
        "Place AWS Global Accelerator in front of the bucket to route users over the AWS network",
        "Enable S3 Transfer Acceleration on the bucket and give users the accelerated endpoint URL",
        "Create an Amazon CloudFront distribution with the bucket as its origin to cache the content"
      ],
      "answer": "D",
      "explanation": "Amazon CloudFront caches content at edge locations close to users, so repeated requests are served from the edge with lower latency and never reach the S3 origin. Cross-Region Replication and Transfer Acceleration can lower latency for some users, but every request still goes to an S3 bucket. Global Accelerator improves the network path to endpoints such as load balancers and EC2 instances but does not cache content and does not use S3 buckets as endpoints.",
      "topic": "Design High-Performing Architectures",
      "subtopic": "Determine high-performing and/or scalable network architectures",
      "difficulty": "easy",
      "source": "SAA-C03 exam guide, Task 3.4; Amazon CloudFront Developer Guide, Using an Amazon S3 bucket as an origin"
    },
    {
      "stem": "A gaming company stores player profiles in an Amazon DynamoDB table. A small number of very popular items receive most of the read traffic, and the application now needs microsecond read latency for these reads. The company wants to avoid writing its own caching logic. Which solution meets these requirements?",
      "options": [
        "Switch the table to on-demand capacity mode so that it can absorb the read traffic",
        "Add a DynamoDB Accelerator (DAX) cluster and send the reads through the DAX client",
        "Add an Amazon ElastiCache cluster and add cache-aside logic to the application code",
        "Convert the table to a global table with replicas in two additional AWS Regions",
        "Increase the table's provisioned read capacity and use strongly consistent reads"
      ],
      "answer": "B",
      "explanation": "DynamoDB Accelerator (DAX) is a fully managed in-memory cache that is API-compatible with DynamoDB, so the application gets microsecond response times for cached eventually consistent reads just by using the DAX client, without writing cache population or invalidation code. DynamoDB itself delivers single-digit millisecond latency regardless of capacity mode or provisioned throughput. ElastiCache can provide fast reads only if the application implements the caching logic itself.",
      "topic": "Design High-Performing Architectures",
      "subtopic": "Determine high-performing database solutions",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Task 3.3; Amazon DynamoDB Developer Guide, In-memory acceleration with DynamoDB Accelerator (DAX)"
    },
    {
      "stem": "A company runs a content management application on Amazon EC2 Linux instances in an Auto Scaling group that spans three Availability Zones. All instances must read and write the same set of files concurrently through a POSIX-compliant shared file system that grows and shrinks automatically as files are added and removed. Which storage solution meets these requirements?",
      "options": [
        "An Amazon EBS Provisioned IOPS SSD volume with Multi-Attach enabled",
        "Instance store volumes that are kept synchronized between the instances",
        "An Amazon EFS file system that is mounted on every instance in the group",
        "An Amazon FSx for Windows File Server file system shared over SMB",
        "An Amazon S3 bucket that each instance accesses through the S3 API"
      ],
      "answer": "C",
      "explanation": "Amazon EFS provides a fully managed, elastic NFS file system with POSIX semantics that many Linux instances in multiple Availability Zones can mount and use concurrently, and its storage grows and shrinks automatically. EBS Multi-Attach works only within a single Availability Zone and needs a cluster-aware file system, instance store is ephemeral and local to one instance, FSx for Windows File Server is an SMB file system for Windows workloads with provisioned capacity, and S3 is object storage rather than a POSIX file system.",
      "topic": "Design High-Performing Architectures",
      "subtopic": "Determine high-performing and/or scalable storage solutions",
      "difficulty": "easy",
      "source": "SAA-C03 exam guide, Task 3.1; Amazon EFS User Guide, What is Amazon Elastic File System?"
    },
    {
      "stem": "A company collects clickstream events from its website and needs to store them in an Amazon S3 data lake in Apache Parquet format within a few minutes of arrival, for querying with Amazon Athena. The company wants a fully managed solution with no servers to manage and no custom code to convert the records. Which solution meets these requirements?",
      "options": [
        "Send the events to Amazon Kinesis Data Streams and run a consumer application on Amazon EC2 that writes Parquet files to Amazon S3",
        "Send the events to an Amazon SQS queue and use an AWS Lambda function that converts batches of messages to Parquet in Amazon S3",
        "Write the events to Amazon S3 as JSON files and run an AWS Glue ETL job once a night that converts the new files to Parquet",
        "Send the events to Amazon MSK and run Kafka Connect workers on Amazon EC2 instances that write the events to Amazon S3",
        "Send the events to Amazon Data Firehose with record format conversion to Parquet enabled, delivering to Amazon S3"
      ],
      "answer": "E",
      "explanation": "Amazon Data Firehose (formerly Amazon Kinesis Data Firehose) is a fully managed delivery service that buffers incoming records and writes them to Amazon S3 within seconds to minutes. Its built-in record format conversion turns JSON records into Apache Parquet or ORC using a schema from an AWS Glue Data Catalog table, so no conversion code or servers are needed. The other options require EC2-based consumers or custom Lambda code, or run only as a nightly batch.",
      "topic": "Design High-Performing Architectures",
      "subtopic": "Determine high-performing data ingestion and transformation solutions",
      "difficulty": "hard",
      "source": "SAA-C03 exam guide, Task 3.5; Amazon Data Firehose Developer Guide, Convert input data format"
    },
    {
      "stem": "An application runs on Amazon EC2 instances in an Auto Scaling group with a target tracking scaling policy. Every weekday at 9:00 AM, traffic increases sharply and stays high until 5:00 PM. New instances take about 10 minutes to start and initialize, so users experience slow responses at the start of each weekday. Which solution will resolve this issue?",
      "options": [
        "Create scheduled actions that raise the minimum capacity before 9:00 AM and lower it after 5:00 PM on weekdays",
        "Add a step scaling policy that launches several instances at once when CPU utilization exceeds 80 percent",
        "Increase the health check grace period so that new instances are placed in service more quickly",
        "Replace the target tracking policy with a simple scaling policy that adds one instance per alarm breach"
      ],
      "answer": "A",
      "explanation": "Scheduled scaling changes the group's capacity at specific times, so for a load pattern that is known in advance the instances are launched and initialized before the surge starts instead of after it is detected. Step, simple and target tracking policies all react to a metric breach, so with a 10-minute startup time users still wait for the new capacity. Lowering the minimum again after the peak keeps costs down, and the health check grace period only delays health checks; it does not make instances ready sooner.",
      "topic": "Design High-Performing Architectures",
      "subtopic": "Design high-performing and elastic compute solutions",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Task 3.2; Amazon EC2 Auto Scaling User Guide, Scheduled scaling"
    },
    {
      "stem": "A company stores millions of objects in Amazon S3. Some objects are read often, others are not read for months, and the access pattern of each object changes unpredictably over time. The company wants to reduce storage costs automatically without paying retrieval fees and without analyzing access patterns itself. Which storage class should a solutions architect choose?",
      "options": [
        "S3 Standard-Infrequent Access",
        "S3 One Zone-Infrequent Access",
        "S3 Glacier Instant Retrieval",
        "S3 Intelligent-Tiering",
        "S3 Glacier Flexible Retrieval"
      ],
      "answer": "D",
      "explanation": "S3 Intelligent-Tiering monitors access to each object and automatically moves objects that have not been accessed for 30 consecutive days to a lower-cost tier, and moves them back to the frequent access tier when they are read again. It charges a small monthly monitoring and automation fee per object but no retrieval fees, which suits data with unknown or changing access patterns. Standard-IA, One Zone-IA and Glacier Instant Retrieval charge per-GB retrieval fees, and Glacier Flexible Retrieval requires objects to be restored before they can be read, so these classes suit only data whose access pattern is known in advance.",
      "topic": "Design Cost-Optimized Architectures",
      "subtopic": "Design cost-optimized storage solutions",
      "difficulty": "easy",
      "source": "SAA-C03 exam guide, Task 4.1; Amazon S3 User Guide, Storage classes (S3 Intelligent-Tiering)"
    },
    {
      "stem": "A company runs a steady compute workload on Amazon EC2 24 hours a day and expects the usage to continue for at least 3 years. The workload cannot tolerate interruptions. During that time, the company plans to change instance families, move some workloads to another AWS Region, and move some components to AWS Fargate and AWS Lambda. Which purchasing option will provide the largest discount while allowing these changes?",
      "options": [
        "EC2 Instance Savings Plans",
        "Standard Reserved Instances",
        "Compute Savings Plans",
        "Spot Instances",
        "On-Demand Capacity Reservations"
      ],
      "answer": "C",
      "explanation": "Compute Savings Plans apply automatically to EC2 usage in any instance family, size, operating system, tenancy or Region, and also to AWS Fargate and AWS Lambda usage, in exchange for a 1-year or 3-year commitment to a consistent hourly spend. EC2 Instance Savings Plans and Standard Reserved Instances can offer deeper discounts but are tied to an instance family in one Region and do not cover Fargate or Lambda. Spot Instances can be interrupted, and On-Demand Capacity Reservations reserve capacity without providing a discount on their own.",
      "topic": "Design Cost-Optimized Architectures",
      "subtopic": "Design cost-optimized compute solutions",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Task 4.2; Savings Plans User Guide, Savings Plans types"
    },
    {
      "stem": "A company runs a nightly image-processing batch job on Amazon EC2 On-Demand Instances. The job takes about 2 hours, must finish within 8 hours, saves checkpoints to Amazon S3, and can resume from the last checkpoint if an instance is stopped at any time. The company wants to minimize the compute cost of the job. Which combination of actions will meet these requirements? (Choose TWO.)",
      "options": [
        "Run the job on Spot Instances instead of On-Demand Instances",
        "Purchase 3-year Standard Reserved Instances for the job's instances",
        "Run the job on Dedicated Hosts for more predictable performance",
        "Let the job use several instance types across multiple Availability Zones",
        "Run the job on one larger On-Demand Instance so it finishes sooner"
      ],
      "answer": "AD",
      "explanation": "Spot Instances use spare EC2 capacity at a large discount compared with On-Demand prices, and they suit this job because it is fault tolerant, checkpoints its progress and has a long completion window. Being flexible across several instance types and Availability Zones lets EC2 draw from many Spot capacity pools, which lowers the chance of interruption and makes it easier to get capacity at a low price. Reserved Instances bill for every hour of the term even though the job runs about 2 hours a night, and Dedicated Hosts or a larger On-Demand Instance do not lower the price.",
      "topic": "Design Cost-Optimized Architectures",
      "subtopic": "Design cost-optimized compute solutions",
      "difficulty": "hard",
      "source": "SAA-C03 exam guide, Task 4.2; Amazon EC2 User Guide, Best practices for Amazon EC2 Spot"
    },
    {
      "stem": "A development team uses an Amazon Aurora MySQL database for testing. The database is idle most of the day but receives occasional bursts of heavy activity at unpredictable times. The company wants to minimize database cost without anyone having to start, stop or resize the database manually. Which solution meets these requirements?",
      "options": [
        "Run the database on a provisioned Aurora DB instance sized for the bursts and buy a Reserved Instance for it",
        "Run the database on Aurora Serverless v2 with minimum and maximum capacity set to suit the workload",
        "Use an AWS Lambda function on a schedule to stop the DB cluster each evening and start it each morning",
        "Migrate the database to MySQL on an Amazon EC2 instance that uses a burstable performance instance type"
      ],
      "answer": "B",
      "explanation": "Aurora Serverless v2 adjusts database capacity automatically in fine-grained Aurora capacity unit (ACU) increments as load changes, and billing is per second for the capacity used, so an idle database runs at its minimum capacity and bursts are absorbed without manual resizing. A provisioned instance sized for peaks, even with a Reserved Instance, is paid for around the clock, and a fixed stop and start schedule cannot match bursts that happen at unpredictable times. Running MySQL on EC2 adds management work and still bills for the instance while it is idle.",
      "topic": "Design Cost-Optimized Architectures",
      "subtopic": "Design cost-optimized database solutions",
      "difficulty": "medium",
      "source": "SAA-C03 exam guide, Task 4.3; Amazon Aurora User Guide, Using Aurora Serverless v2"
    }
  ]
}
```
