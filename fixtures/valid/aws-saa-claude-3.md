```json
{
  "format": "domcq/1",
  "exam": "aws-saa",
  "set": "AWS Certified Solutions Architect - Associate practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "An application running on Amazon EC2 instances needs to read objects from an Amazon S3 bucket in the same AWS account. The security team prohibits storing long-term credentials on the instances. Which solution meets these requirements?",
      "options": [
        "Create an IAM user with S3 read permissions and save its access keys in the application configuration file.",
        "Generate presigned URLs with the account root user credentials and pass them to the instances at launch.",
        "Create an IAM role with S3 read permissions and attach it to the instances by using an instance profile.",
        "Create an IAM user with S3 read permissions and pass its access keys to the instances in user data."
      ],
      "answer": "C",
      "explanation": "An IAM role attached through an instance profile lets software on the instance obtain temporary credentials from the instance metadata service, and the AWS SDKs retrieve and refresh them automatically. This removes long-term access keys from the instance entirely, which is the recommended way to grant AWS permissions to workloads on EC2. Access keys in configuration files or user data are long-term credentials that can leak, and the root user should never be used for application access.",
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure access to AWS resources",
      "difficulty": "easy",
      "source": "Exam guide Domain 1, Task Statement 1.1; Amazon EC2 User Guide: IAM roles for Amazon EC2"
    },
    {
      "stem": "A company uses AWS Organizations to manage 40 member accounts. The company must ensure that no user or role in any account in its production OU, including each account's root user, can create resources outside the us-east-1 and eu-west-1 Regions. The control must apply automatically to any new account that is added to the production OU. What should a solutions architect do to accomplish this?",
      "options": [
        "Attach a service control policy (SCP) to the production OU that denies requests outside the two Regions by using the aws:RequestedRegion condition key.",
        "Create an IAM permissions boundary in each account that limits all users and roles to the two approved Regions.",
        "Deploy AWS Config rules to every account to detect resources that are created outside the two approved Regions.",
        "Configure an organization trail in AWS CloudTrail and alert on API calls that are made in unapproved Regions."
      ],
      "answer": "A",
      "explanation": "SCPs set the maximum permissions available in member accounts and, unlike IAM policies, they also restrict the member accounts' root users. Because SCPs are inherited, attaching one to the OU applies it automatically to every account placed in that OU. Permissions boundaries do not affect the root user and must be attached to each principal, while AWS Config and CloudTrail only detect violations after they happen instead of preventing them.",
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure access to AWS resources",
      "difficulty": "medium",
      "source": "Exam guide Domain 1, Task Statement 1.1; AWS Organizations User Guide: service control policies (SCPs)"
    },
    {
      "stem": "A company runs a public web application behind an Application Load Balancer (ALB). The security team has found repeated SQL injection and cross-site scripting attempts in the application logs. The company wants to block these requests before they reach the application, with the least development effort. Which solution meets these requirements?",
      "options": [
        "Add rules to the ALB security group that deny inbound requests containing SQL keywords or script tags.",
        "Add rules to the public subnets' network ACLs that drop HTTP requests containing script tags.",
        "Rely on AWS Shield Standard protection for the Application Load Balancer to block the requests.",
        "Associate an AWS WAF web ACL that uses AWS Managed Rules rule groups with the Application Load Balancer."
      ],
      "answer": "D",
      "explanation": "AWS WAF inspects HTTP and HTTPS requests at layer 7 and can block requests that match SQL injection or cross-site scripting patterns. AWS Managed Rules provide maintained rule groups for these attacks, so no custom rules or code are needed, and a web ACL can be associated directly with an ALB. Security groups and network ACLs filter only on IP addresses, ports and protocols and cannot inspect request content, and Shield Standard protects against network-layer DDoS attacks rather than application exploits.",
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure workloads and applications",
      "difficulty": "easy",
      "source": "Exam guide Domain 1, Task Statement 1.2; AWS WAF Developer Guide: web ACLs and AWS Managed Rules"
    },
    {
      "stem": "An application on Amazon ECS connects to an Amazon RDS for PostgreSQL database by using a user name and password that are hardcoded in the container image. The company requires the credentials to be removed from the image, stored encrypted, and rotated automatically every 30 days without building custom rotation logic. Which solution meets these requirements?",
      "options": [
        "Store the credentials as a SecureString parameter in AWS Systems Manager Parameter Store and reference it in the task definition.",
        "Store the credentials in AWS Secrets Manager with automatic rotation enabled and reference the secret in the task definition.",
        "Store the credentials in an encrypted Amazon S3 object and have the container download the object at startup.",
        "Store the credentials as plaintext environment variables in the task definition and update them with a scheduled script."
      ],
      "answer": "B",
      "explanation": "AWS Secrets Manager encrypts secrets with AWS KMS and has built-in automatic rotation for Amazon RDS database credentials on a schedule you choose. An ECS task definition can reference the secret so its value is injected into the container at runtime and never stored in the image. Parameter Store SecureString parameters are encrypted but have no native automatic rotation, so they would need custom rotation code.",
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure workloads and applications",
      "difficulty": "medium",
      "source": "Exam guide Domain 1, Task Statement 1.2; AWS Secrets Manager User Guide: rotating secrets"
    },
    {
      "stem": "A company stores sensitive reports in an Amazon S3 bucket. A new policy requires that all access to the bucket is encrypted in transit, and that new objects are encrypted at rest by default with a key whose key policy and rotation the company controls and whose use is logged in AWS CloudTrail. Which combination of steps will meet these requirements? (Choose TWO.)",
      "options": [
        "Enable S3 Versioning and MFA Delete on the bucket.",
        "Add a bucket policy that denies any request where aws:SecureTransport is false.",
        "Set the bucket's default encryption to SSE-S3 with Amazon S3 managed keys.",
        "Enable S3 Transfer Acceleration and require clients to use its endpoint.",
        "Set the bucket's default encryption to SSE-KMS with a customer managed key."
      ],
      "answer": "BE",
      "explanation": "A bucket policy that denies requests when aws:SecureTransport is false rejects any request made over plain HTTP, so every access must use TLS. SSE-KMS with a customer managed key gives the company control over the key policy and rotation, and calls to AWS KMS for that key are recorded in CloudTrail. SSE-S3 keys are managed entirely by Amazon S3 and cannot be controlled by the customer, and Transfer Acceleration speeds up transfers rather than enforcing encryption.",
      "topic": "Design Secure Architectures",
      "subtopic": "Determine appropriate data security controls",
      "difficulty": "medium",
      "source": "Exam guide Domain 1, Task Statement 1.3; Amazon S3 User Guide: server-side encryption with AWS KMS keys (SSE-KMS) and enforcing encryption in transit"
    },
    {
      "stem": "A financial services company must keep trade records in Amazon S3 for 7 years to meet a regulatory requirement. During that period no user, including the AWS account root user, may overwrite or delete any version of a record, and the retention period must not be shortened. The records must stay in an S3 bucket and remain retrievable through the S3 API. Which solution meets these requirements?",
      "options": [
        "Enable S3 Object Lock on the bucket with a default retention of 7 years in governance mode.",
        "Enable S3 Versioning and MFA Delete, and allow only one administrator to delete objects.",
        "Add a bucket policy that denies s3:DeleteObject and s3:DeleteObjectVersion to all principals.",
        "Enable S3 Object Lock on the bucket with a default retention of 7 years in compliance mode.",
        "Place a legal hold on each object and remove the holds with a scheduled Lambda function after 7 years."
      ],
      "answer": "D",
      "explanation": "In compliance mode, a locked object version cannot be overwritten or deleted by any user, including the root user, and its retention mode cannot be changed nor its retention period shortened. Governance mode lets users with the s3:BypassGovernanceRetention permission override the lock, and a legal hold can be removed by anyone with the s3:PutObjectLegalHold permission. Bucket policies and MFA Delete can be changed or satisfied by privileged users, so they do not give true write-once-read-many (WORM) protection.",
      "topic": "Design Secure Architectures",
      "subtopic": "Determine appropriate data security controls",
      "difficulty": "hard",
      "source": "Exam guide Domain 1, Task Statement 1.3; Amazon S3 User Guide: S3 Object Lock retention modes"
    },
    {
      "stem": "A company runs a web application in the us-east-1 Region and has deployed a standby copy of the application in us-west-2. The company wants DNS to send users to us-west-2 automatically, but only when the application in us-east-1 becomes unhealthy. Which solution meets these requirements?",
      "options": [
        "Create Route 53 failover records for both Regions and attach a health check to the primary record.",
        "Create Route 53 weighted records for both Regions and give each record an equal weight of 50.",
        "Create Route 53 latency-based records for both Regions so users reach the lowest-latency Region.",
        "Create one Route 53 simple record that returns the endpoints of both Regions in random order."
      ],
      "answer": "A",
      "explanation": "Failover routing is built for active-passive setups: Route 53 answers with the primary record while its health check passes and switches to the secondary record when the health check fails. Weighted and latency-based routing send traffic to both Regions during normal operation, so the standby would not stay idle. A simple record with multiple values does not take endpoint health into account.",
      "topic": "Design Resilient Architectures",
      "subtopic": "Design highly available and/or fault-tolerant architectures",
      "difficulty": "easy",
      "source": "Exam guide Domain 2, Task Statement 2.2; Amazon Route 53 Developer Guide: failover routing and health checks"
    },
    {
      "stem": "A company runs its production database on a Single-AZ Amazon RDS for MySQL DB instance. The company needs the database to fail over automatically to another Availability Zone if the primary instance or its Availability Zone fails, without changing the connection string that the application uses. Which solution meets these requirements?",
      "options": [
        "Create a read replica in another Availability Zone and point the application to it.",
        "Take automated snapshots every hour and restore the latest one if a failure occurs.",
        "Convert the existing DB instance to a Multi-AZ DB instance deployment.",
        "Move to a larger DB instance class and enable storage autoscaling."
      ],
      "answer": "C",
      "explanation": "A Multi-AZ DB instance deployment keeps a synchronously replicated standby in a different Availability Zone. If the primary fails, Amazon RDS fails over to the standby automatically and repoints the existing DB endpoint's DNS record, so the application keeps the same connection string. Read replicas replicate asynchronously and must be promoted manually, and restoring from snapshots causes downtime and loses data written since the last snapshot.",
      "topic": "Design Resilient Architectures",
      "subtopic": "Design highly available and/or fault-tolerant architectures",
      "difficulty": "easy",
      "source": "Exam guide Domain 2, Task Statement 2.2; Amazon RDS User Guide: Multi-AZ DB instance deployments"
    },
    {
      "stem": "When a customer places an order, an ecommerce application must notify three independent backend services: billing, inventory, and shipping. Each service must receive every order event, process events at its own pace, and still receive all events if it is offline for several hours while the other services keep working. Which solution meets these requirements?",
      "options": [
        "Publish each order event to one Amazon SQS standard queue that all three services poll.",
        "Have the application call each service's API synchronously and retry until every call succeeds.",
        "Publish each order event to an Amazon SNS topic with each service's HTTPS endpoint subscribed.",
        "Publish each order event to an Amazon SNS topic with a separate Amazon SQS queue subscribed per service."
      ],
      "answer": "D",
      "explanation": "In the SNS-to-SQS fan-out pattern, the topic delivers a copy of every message to each subscribed queue, so each service has its own durable buffer and consumes it independently. SQS can retain messages for up to 14 days, so a service that is offline catches up when it returns without affecting the others. A single shared queue gives each message to only one consumer, SNS retries HTTPS deliveries only for a limited period, and synchronous calls tie the application to every service's availability.",
      "topic": "Design Resilient Architectures",
      "subtopic": "Design scalable and loosely coupled architectures",
      "difficulty": "medium",
      "source": "Exam guide Domain 2, Task Statement 2.1; Amazon SNS Developer Guide: fanout to Amazon SQS queues"
    },
    {
      "stem": "A company runs a web application on two Amazon EC2 instances in a single Availability Zone behind an Application Load Balancer. The application keeps user session data in memory on each instance. The company needs the application to keep running if an Availability Zone fails, and users must not lose their sessions when an instance is replaced. Which combination of actions will meet these requirements? (Choose TWO.)",
      "options": [
        "Store the session data in Amazon ElastiCache so that every instance can read it.",
        "Enable sticky sessions on the Application Load Balancer target group.",
        "Attach an Elastic IP address to each instance so that clients can reconnect to it.",
        "Run the instances in an Auto Scaling group that spans at least two Availability Zones.",
        "Replace the instances with a larger instance type that has more memory for sessions."
      ],
      "answer": "AD",
      "explanation": "An Auto Scaling group that spans multiple Availability Zones behind the load balancer keeps serving traffic and replaces lost capacity if one Availability Zone fails. Moving session data to a shared store such as Amazon ElastiCache makes the web tier stateless, so any instance can serve any user and sessions survive the loss of an instance. Sticky sessions still bind a user to one instance, so the session disappears when that instance fails.",
      "topic": "Design Resilient Architectures",
      "subtopic": "Design highly available and/or fault-tolerant architectures",
      "difficulty": "medium",
      "source": "Exam guide Domain 2, Task Statements 2.1 and 2.2; AWS whitepaper topic: stateless applications and session management"
    },
    {
      "stem": "A payment platform receives up to 200 transactions per second. Transactions for the same customer account must be processed in the exact order they were received and must not be processed twice. Transactions for different accounts should be processed in parallel by a fleet of consumers. Which solution meets these requirements with the least operational overhead?",
      "options": [
        "Use an Amazon SQS standard queue and have the consumers sort messages by timestamp before processing.",
        "Use an Amazon SQS FIFO queue and set the message group ID to the customer account ID.",
        "Use an Amazon SQS FIFO queue and set the message group ID to the same fixed value for all messages.",
        "Use an Amazon SNS standard topic with an AWS Lambda function subscribed to process each message.",
        "Use an Amazon SQS standard queue with a long visibility timeout and a dead-letter queue."
      ],
      "answer": "B",
      "explanation": "SQS FIFO queues preserve message order and provide exactly-once processing within each message group, and messages in different groups can be consumed in parallel. Using the account ID as the message group ID keeps each account's transactions in order while letting the consumer fleet work on many accounts at once. A single fixed group ID forces all messages into one ordered stream that only one consumer can work on at a time, and SQS standard queues and SNS standard topics give at-least-once delivery with best-effort ordering.",
      "topic": "Design Resilient Architectures",
      "subtopic": "Design scalable and loosely coupled architectures",
      "difficulty": "hard",
      "source": "Exam guide Domain 2, Task Statement 2.1; Amazon SQS Developer Guide: FIFO queues and message group IDs"
    },
    {
      "stem": "A company is migrating a content management application to AWS. The application runs on Linux Amazon EC2 instances in three Availability Zones. All instances must read and write the same files at the same time through a POSIX-compliant shared file system whose capacity grows and shrinks automatically. Which solution meets these requirements?",
      "options": [
        "Attach an Amazon EBS General Purpose SSD (gp3) volume to each instance.",
        "Store the files in an Amazon S3 bucket and access them through the S3 API.",
        "Mount a shared Amazon Elastic File System (Amazon EFS) file system on every instance.",
        "Use instance store volumes on each instance and synchronize them with a cron job."
      ],
      "answer": "C",
      "explanation": "Amazon EFS is a fully managed NFS file system with POSIX semantics that many Linux instances in multiple Availability Zones can mount concurrently. It grows and shrinks automatically as files are added and removed, so no capacity planning is needed. EBS volumes and instance store are attached to individual instances (EBS Multi-Attach is limited to Provisioned IOPS volumes in one Availability Zone), and the S3 API provides object storage rather than a POSIX file system.",
      "topic": "Design High-Performing Architectures",
      "subtopic": "Determine high-performing and/or scalable storage solutions",
      "difficulty": "easy",
      "source": "Exam guide Domain 3, Task Statement 3.1; Amazon EFS User Guide: what is Amazon EFS"
    },
    {
      "stem": "A research team runs a tightly coupled high performance computing (HPC) simulation on Amazon EC2. The nodes exchange large amounts of data with each other, and job run time is very sensitive to network latency between instances. Availability during an Availability Zone outage is not a requirement. What should a solutions architect do to provide the lowest network latency between the nodes?",
      "options": [
        "Launch all instances in a cluster placement group in a single Availability Zone.",
        "Launch the instances in a spread placement group across several Availability Zones.",
        "Launch the instances in a partition placement group with one instance per partition.",
        "Launch the instances in an Auto Scaling group spread across three Availability Zones."
      ],
      "answer": "A",
      "explanation": "A cluster placement group packs instances close together inside one Availability Zone, giving them low-latency, high-throughput networking suited to tightly coupled HPC workloads. Spread and partition placement groups deliberately place instances on separate hardware to reduce correlated failures, which increases the distance between them. Spreading instances across Availability Zones adds inter-AZ network latency.",
      "topic": "Design High-Performing Architectures",
      "subtopic": "Design high-performing and elastic compute solutions",
      "difficulty": "medium",
      "source": "Exam guide Domain 3, Task Statement 3.2; Amazon EC2 User Guide: placement groups"
    },
    {
      "stem": "A gaming company stores player profiles in an Amazon DynamoDB table. The workload is read-heavy, and the same items are read many times per second. The company needs to reduce read latency from single-digit milliseconds to microseconds with minimal changes to the application code. Which solution meets these requirements?",
      "options": [
        "Enable DynamoDB global tables and serve reads from a replica in a second Region.",
        "Change the table from provisioned capacity mode to on-demand capacity mode.",
        "Create a global secondary index on the attributes that the application queries.",
        "Deploy a DynamoDB Accelerator (DAX) cluster and use the DAX client in the application."
      ],
      "answer": "D",
      "explanation": "DAX is a fully managed in-memory cache built specifically for DynamoDB that returns cached eventually consistent reads in microseconds. The DAX client is API-compatible with DynamoDB, so the application only needs to point its existing calls at the DAX cluster. Global tables, capacity modes and secondary indexes change availability, throughput or query patterns, but none of them lowers read latency below DynamoDB's single-digit milliseconds.",
      "topic": "Design High-Performing Architectures",
      "subtopic": "Determine high-performing database solutions",
      "difficulty": "medium",
      "source": "Exam guide Domain 3, Task Statement 3.3; Amazon DynamoDB Developer Guide: in-memory acceleration with DAX"
    },
    {
      "stem": "A company runs a multiplayer game backend on Amazon EC2 instances behind Network Load Balancers in two AWS Regions. The game uses UDP, and players around the world report inconsistent latency. The company wants to route players over the AWS global network to the nearest healthy Region and to give players a fixed set of static IP addresses. Which solution meets these requirements?",
      "options": [
        "Create an Amazon CloudFront distribution that uses the Network Load Balancers as origins.",
        "Create an AWS Global Accelerator standard accelerator with an endpoint group in each Region.",
        "Create Amazon Route 53 latency-based records that point to the Network Load Balancers.",
        "Allocate Elastic IP addresses to the EC2 instances and publish them to the game clients."
      ],
      "answer": "B",
      "explanation": "AWS Global Accelerator provides static anycast IP addresses that bring TCP and UDP traffic onto the AWS global network at the nearest edge location and route it to the closest healthy endpoint. It health-checks the endpoints and shifts traffic between Regions without relying on clients' DNS caches. CloudFront does not proxy UDP traffic, and Route 53 latency routing provides neither static IP addresses nor routing over the AWS backbone.",
      "topic": "Design High-Performing Architectures",
      "subtopic": "Determine high-performing and/or scalable network architectures",
      "difficulty": "medium",
      "source": "Exam guide Domain 3, Task Statement 3.4; AWS Global Accelerator Developer Guide: how Global Accelerator works"
    },
    {
      "stem": "A company collects clickstream events from its website at up to 5,000 records per second. The analytics team needs the events delivered to Amazon S3 within a few minutes and stored in Apache Parquet format so that Amazon Athena queries scan less data. The company wants the solution with the least operational overhead. Which solution meets these requirements?",
      "options": [
        "Send the events to Amazon Data Firehose with record format conversion to Parquet enabled, using an AWS Glue Data Catalog table for the schema.",
        "Send the events to Amazon Kinesis Data Streams and run a consumer application on EC2 instances that converts records to Parquet and writes them to S3.",
        "Write each event to S3 as a JSON object and run a nightly AWS Glue ETL job that converts the objects to Parquet.",
        "Send the events to an Amazon SQS queue and have an AWS Lambda function write each message to S3 as a separate Parquet file."
      ],
      "answer": "A",
      "explanation": "Amazon Data Firehose (formerly Kinesis Data Firehose) is a fully managed delivery service that buffers streaming records and writes them to S3 within the buffer interval you configure. Its built-in record format conversion turns incoming JSON into Apache Parquet or ORC by using a schema from the AWS Glue Data Catalog, so no conversion code or servers are needed. A custom consumer on EC2 adds infrastructure to manage, a nightly job misses the few-minutes target, and writing one file per message creates many tiny files that hurt query performance.",
      "topic": "Design High-Performing Architectures",
      "subtopic": "Determine high-performing data ingestion and transformation solutions",
      "difficulty": "hard",
      "source": "Exam guide Domain 3, Task Statement 3.5; Amazon Data Firehose Developer Guide: converting input record format"
    },
    {
      "stem": "A media company stores millions of objects in Amazon S3. Some objects are accessed heavily for a few days and then rarely, while others are accessed unpredictably months after upload. Access patterns cannot be predicted and change over time. The company wants to reduce storage costs automatically without slowing down retrieval or paying retrieval fees. Which solution meets these requirements?",
      "options": [
        "Store the objects in the S3 Standard-Infrequent Access storage class.",
        "Store the objects in the S3 Intelligent-Tiering storage class.",
        "Store the objects in the S3 One Zone-Infrequent Access storage class.",
        "Store the objects in the S3 Glacier Flexible Retrieval storage class."
      ],
      "answer": "B",
      "explanation": "S3 Intelligent-Tiering monitors each object's access and automatically moves it between the Frequent Access, Infrequent Access and Archive Instant Access tiers, all of which return data in milliseconds. It charges a small monthly monitoring fee per object but no retrieval fees, which makes it the recommended class for data with unknown or changing access patterns. Standard-IA and One Zone-IA charge per-GB retrieval fees, and Glacier Flexible Retrieval requires a restore before objects can be read.",
      "topic": "Design Cost-Optimized Architectures",
      "subtopic": "Design cost-optimized storage solutions",
      "difficulty": "easy",
      "source": "Exam guide Domain 4, Task Statement 4.1; Amazon S3 User Guide: S3 Intelligent-Tiering"
    },
    {
      "stem": "A company runs a steady baseline of compute 24 hours a day that cannot tolerate interruption, and it is willing to commit to that baseline for 3 years. During that period the company expects to change Amazon EC2 instance families, move some workloads to another AWS Region, and migrate several services to AWS Fargate and AWS Lambda. The company wants a discount that keeps applying to all of this usage after these changes. Which purchasing option meets these requirements?",
      "options": [
        "Purchase EC2 Instance Savings Plans for the baseline compute spend.",
        "Purchase Standard Reserved Instances for the current instance types.",
        "Purchase Compute Savings Plans for the baseline compute spend.",
        "Purchase Convertible Reserved Instances for the current instance types."
      ],
      "answer": "C",
      "explanation": "Compute Savings Plans trade a commitment to a consistent dollar-per-hour compute spend for a discount that applies automatically to EC2 usage regardless of instance family, size, operating system or Region, and also to Fargate and Lambda usage. EC2 Instance Savings Plans offer a deeper discount but are tied to one instance family in one Region. Reserved Instances, including Convertible Reserved Instances, apply only to EC2 usage, so they would not cover the services moved to Fargate and Lambda.",
      "topic": "Design Cost-Optimized Architectures",
      "subtopic": "Design cost-optimized compute solutions",
      "difficulty": "hard",
      "source": "Exam guide Domain 4, Task Statement 4.2; Savings Plans User Guide: Savings Plans types"
    },
    {
      "stem": "A company runs an internal reporting application on an Amazon RDS for MySQL DB instance. The database is idle for most of each day but receives unpredictable bursts of heavy queries a few times a week. The DB instance is sized for the peak load and is underused the rest of the time. The company wants to reduce database costs while still handling the bursts without manual intervention. Which solution meets these requirements MOST cost-effectively?",
      "options": [
        "Purchase a 3-year Reserved Instance for the existing peak-sized DB instance.",
        "Migrate to Amazon Aurora Serverless v2 with a low minimum capacity setting.",
        "Add two read replicas so that the bursts are spread across more instances.",
        "Move to a larger DB instance class with Provisioned IOPS (io2) storage."
      ],
      "answer": "B",
      "explanation": "Aurora Serverless v2 adjusts database capacity in fine-grained Aurora capacity units (ACUs) as load changes, and you pay only for the capacity consumed. With a low minimum capacity, the database costs little while idle yet scales up quickly to absorb unpredictable bursts without anyone resizing it. A Reserved Instance lowers the hourly rate but still pays for peak capacity around the clock, and adding replicas or larger instances increases cost.",
      "topic": "Design Cost-Optimized Architectures",
      "subtopic": "Design cost-optimized database solutions",
      "difficulty": "medium",
      "source": "Exam guide Domain 4, Task Statement 4.3; Amazon Aurora User Guide: using Aurora Serverless v2"
    },
    {
      "stem": "Amazon EC2 instances in private subnets process data and upload several terabytes per day to an Amazon S3 bucket in the same Region. All of this traffic currently flows through a NAT gateway, and the monthly bill shows high NAT gateway data processing charges. Which solution will reduce these costs with the least effort?",
      "options": [
        "Replace the NAT gateway with a self-managed NAT instance on a larger EC2 instance.",
        "Enable S3 Transfer Acceleration on the bucket and upload through its endpoint.",
        "Add a second NAT gateway in another Availability Zone to split the traffic.",
        "Create a gateway VPC endpoint for S3 and add it to the private subnet route tables."
      ],
      "answer": "D",
      "explanation": "A gateway VPC endpoint for Amazon S3 adds a route that sends S3 traffic from the private subnets directly to S3 over the AWS network instead of through the NAT gateway. Gateway endpoints for S3 and DynamoDB have no hourly or data processing charges, so the NAT gateway processing fees for this traffic go away. A NAT instance adds management work, while Transfer Acceleration and extra NAT gateways add cost rather than removing it.",
      "topic": "Design Cost-Optimized Architectures",
      "subtopic": "Design cost-optimized network architectures",
      "difficulty": "medium",
      "source": "Exam guide Domain 4, Task Statement 4.4; AWS PrivateLink Guide: gateway endpoints for Amazon S3"
    }
  ]
}
```
