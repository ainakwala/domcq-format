```json
{
  "format": "domcq/1",
  "exam": "aws-saa",
  "set": "AWS Certified Solutions Architect - Associate practice – Four domains mixed set",
  "questions": [
    {
      "stem": "An application running on Amazon EC2 instances reads objects from an Amazon S3 bucket in the same AWS account. The application currently uses an IAM user's access key that is stored in a configuration file on each instance. A security review requires the company to stop storing long-term credentials on the instances. Which solution meets these requirements?",
      "options": [
        "Move the IAM user's access key into environment variables that are set when each instance launches.",
        "Store the IAM user's access key in the instance user data and read it when the application starts.",
        "Create an IAM role that grants read access to the bucket and attach it to the instances through an instance profile.",
        "Make the bucket public and add a bucket policy condition that allows only the instances' public IP addresses."
      ],
      "answer": "C",
      "explanation": "IAM roles for Amazon EC2 provide temporary security credentials through the instance profile, which the AWS SDKs retrieve from the instance metadata service and refresh automatically before they expire. This removes long-term access keys from the instances entirely. Granting only the S3 read actions the application needs on that specific bucket also applies least privilege.",
      "rationales": {
        "A": "Environment variables still hold a long-term access key on the instance, so the requirement is not met.",
        "B": "User data is readable through the instance metadata service and still stores a long-term key on the instance.",
        "C": "An instance profile delivers temporary, automatically rotated role credentials, so no long-term keys are stored.",
        "D": "A public bucket exposes the data, and IP-based conditions are fragile; this does not follow least privilege."
      },
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure access to AWS resources",
      "difficulty": "easy",
      "source": "SAA-C03 Domain 1.1: Design secure access to AWS resources – IAM roles for Amazon EC2"
    },
    {
      "stem": "A company hosts a static website in an Amazon S3 bucket and serves it to users through an Amazon CloudFront distribution. Users must be able to access the content only through CloudFront and must not be able to retrieve objects directly from the S3 bucket. What should a solutions architect do to accomplish this?",
      "options": [
        "Enable S3 static website hosting and allow public read access so that CloudFront can fetch the objects.",
        "Create a bucket policy that allows requests only from the published CloudFront edge location IP ranges.",
        "Attach an IAM role to the CloudFront distribution that grants s3:GetObject permission on the bucket.",
        "Configure an origin access control on the distribution and allow only that distribution in the bucket policy."
      ],
      "answer": "D",
      "explanation": "Origin access control (OAC) makes CloudFront sign its requests to the S3 origin with SigV4. The bucket policy grants s3:GetObject to the cloudfront.amazonaws.com service principal with a condition on the distribution's ARN, and S3 Block Public Access stays on, so only that distribution can read the objects. OAC is the recommended replacement for the legacy origin access identity (OAI).",
      "rationales": {
        "A": "Public read access lets anyone bypass CloudFront and read objects directly from S3.",
        "B": "Edge IP ranges change and are shared by all CloudFront customers, so this is fragile and not a secure restriction.",
        "C": "CloudFront distributions cannot assume IAM roles; access to an S3 origin is granted through OAC and the bucket policy.",
        "D": "OAC signs origin requests, and a bucket policy allowing only that distribution's service principal blocks direct access."
      },
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure workloads and applications",
      "difficulty": "medium",
      "source": "SAA-C03 Domain 1.2: Design secure workloads and applications – Restricting access to an Amazon S3 origin in CloudFront"
    },
    {
      "stem": "A company uses AWS Organizations to manage 40 member accounts. For data residency reasons, no user or role in any member account, including the account root user, may create resources outside the eu-west-1 and eu-central-1 Regions. Which solution meets these requirements?",
      "options": [
        "Attach an IAM policy that denies other Regions to every IAM user and role in each member account.",
        "Attach a service control policy that denies actions when aws:RequestedRegion is not one of the two Regions.",
        "Deploy an AWS Config rule in each account that reports resources created outside the two Regions.",
        "Set a permissions boundary on every IAM role in each account that allows only the two Regions."
      ],
      "answer": "B",
      "explanation": "Service control policies are a preventive guardrail in AWS Organizations that limit the maximum available permissions for every IAM user, role and the root user in the affected member accounts. A Deny statement with a condition on the aws:RequestedRegion global condition key, attached to the organization root or the relevant OUs, blocks actions in any other Region. Global services such as IAM are normally exempted with a NotAction element so that they keep working.",
      "rationales": {
        "A": "IAM policies cannot restrict the member account root user, and new users or roles could be created without the policy.",
        "B": "SCPs cap permissions for all principals in member accounts, including the root user, so the Region deny is enforced.",
        "C": "AWS Config is a detective control; it reports noncompliant resources but does not prevent their creation.",
        "D": "Permissions boundaries apply only to the IAM entities they are attached to and do not restrict the root user."
      },
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure access to AWS resources",
      "difficulty": "medium",
      "source": "SAA-C03 Domain 1.1: Design secure access to AWS resources – AWS Organizations service control policies"
    },
    {
      "stem": "A company runs a production database on an unencrypted Amazon RDS for MySQL DB instance. A new compliance policy requires the data to be encrypted at rest with an AWS KMS key. The company can accept a short maintenance window for the cutover. What should a solutions architect do to meet this requirement?",
      "options": [
        "Take a snapshot, copy the snapshot with encryption enabled, and restore a new DB instance from the copy.",
        "Modify the existing DB instance, turn on storage encryption, and apply the change immediately.",
        "Create an encrypted read replica of the DB instance, then promote the replica to a standalone instance.",
        "Require SSL/TLS for all client connections by setting the require_secure_transport parameter.",
        "Enable encryption on the underlying Amazon EBS volumes of the DB instance in the Amazon EC2 console."
      ],
      "answer": "A",
      "explanation": "Encryption at rest for an RDS DB instance is chosen when the instance is created, so an existing unencrypted instance cannot be switched to encrypted in place. The supported path is to snapshot the instance, copy the snapshot while specifying a KMS key (which produces an encrypted copy), and restore a new DB instance from that encrypted snapshot. Writes made after the snapshot must be handled during the maintenance window, for example by stopping writes before taking the snapshot.",
      "rationales": {
        "A": "Copying a snapshot with encryption enabled and restoring from it is the supported way to get an encrypted DB instance.",
        "B": "RDS does not allow encryption to be turned on for an existing unencrypted DB instance.",
        "C": "RDS cannot create an encrypted read replica from an unencrypted DB instance.",
        "D": "Enforcing TLS protects data in transit, not data at rest.",
        "E": "RDS storage volumes are managed by AWS and are not visible or modifiable in the Amazon EC2 console."
      },
      "topic": "Design Secure Architectures",
      "subtopic": "Determine appropriate data security controls",
      "difficulty": "hard",
      "source": "SAA-C03 Domain 1.3: Determine appropriate data security controls – Encrypting Amazon RDS resources"
    },
    {
      "stem": "A company's application connects to an Amazon RDS DB instance by using a database user name and password. The company wants to store the credentials securely and rotate the password automatically every 30 days with the least development effort. Which solution meets these requirements?",
      "options": [
        "Store the credentials as a SecureString parameter in Parameter Store and rotate them with a custom script.",
        "Store the credentials in AWS Secrets Manager and turn on automatic rotation with a 30-day schedule.",
        "Store the credentials in an encrypted S3 object and update the object manually every 30 days.",
        "Store the credentials in AWS KMS as a customer managed key and enable automatic key rotation."
      ],
      "answer": "B",
      "explanation": "AWS Secrets Manager is designed for application secrets such as database credentials. For Amazon RDS it offers managed rotation that changes the password in the database and updates the secret on a defined schedule, while applications retrieve the current value through the API instead of hard-coding it. This removes the need to write and operate custom rotation logic.",
      "rationales": {
        "A": "Parameter Store has no built-in password rotation, so custom code must be written and maintained.",
        "B": "Secrets Manager stores credentials encrypted with KMS and provides managed rotation for RDS on a configurable schedule.",
        "C": "Manual updates add operational effort and risk, and S3 is not a secrets store with rotation.",
        "D": "KMS stores and rotates encryption keys, not database passwords; key rotation does not change the DB password."
      },
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure workloads and applications",
      "difficulty": "easy",
      "source": "SAA-C03 Domain 1.2: Design secure workloads and applications – AWS Secrets Manager secret rotation"
    },
    {
      "stem": "A company runs a public web application behind an Application Load Balancer (ALB). The company must block SQL injection and cross-site scripting attempts at the application layer. The company also needs protection against large DDoS attacks, including 24/7 access to the AWS Shield Response Team and protection against scaling charges caused by attacks. Which combination of actions will meet these requirements? (Choose TWO.)",
      "options": [
        "Enable Amazon GuardDuty and forward its findings to the security team for review.",
        "Create an AWS WAF web ACL with managed rule groups and associate it with the ALB.",
        "Add security group rules to the ALB that drop requests containing SQL keywords.",
        "Run Amazon Inspector scans against the instances registered with the ALB.",
        "Subscribe to AWS Shield Advanced and add the ALB as a protected resource."
      ],
      "answer": "BE",
      "explanation": "AWS WAF operates at the application layer and can be associated with an Application Load Balancer; AWS managed rule groups such as the core rule set and the SQL database rule group block common injection and XSS patterns. AWS Shield Standard is automatic and free, but only Shield Advanced provides access to the Shield Response Team and DDoS cost protection for resources such as ALBs. Together they cover both the layer 7 filtering and the DDoS requirements.",
      "rationales": {
        "A": "GuardDuty detects threats from logs and reports findings; it does not block web requests.",
        "B": "AWS WAF inspects HTTP requests at layer 7, and managed rule groups block common SQL injection and XSS patterns.",
        "C": "Security groups filter by protocol, port and source only and cannot inspect request content.",
        "D": "Inspector finds software vulnerabilities and network exposure; it does not filter traffic.",
        "E": "Shield Advanced adds enhanced DDoS protection, 24/7 Shield Response Team access and cost protection for scaling charges."
      },
      "topic": "Design Secure Architectures",
      "subtopic": "Design secure workloads and applications",
      "difficulty": "medium",
      "source": "SAA-C03 Domain 1.2: Design secure workloads and applications – AWS WAF and AWS Shield Advanced"
    },
    {
      "stem": "A company's web tier accepts customer orders and sends each order directly to a fleet of Amazon EC2 instances for processing. During sales events, the processing fleet becomes overloaded and some orders are lost. The company wants to make sure that no orders are lost and that the processing tier can scale independently of the web tier. Which solution meets these requirements?",
      "options": [
        "Replace the processing instances with larger instance types so that they can handle peak load.",
        "Publish each order to an Amazon SNS topic that sends the order to the operations team by email.",
        "Use Amazon Route 53 weighted routing to spread orders across two separate processing instances.",
        "Send orders to an Amazon SQS queue and have an Auto Scaling group of processors poll the queue."
      ],
      "answer": "D",
      "explanation": "Amazon SQS decouples producers from consumers: the web tier writes each order to the queue, and messages are stored durably until a consumer processes and deletes them. Because work waits in the queue instead of being pushed to busy instances, spikes no longer cause lost orders. An Auto Scaling group can scale the processors on a metric such as the number of visible messages or the backlog per instance.",
      "rationales": {
        "A": "Larger instances raise capacity but keep the tiers tightly coupled, so a big enough spike still loses orders.",
        "B": "Emailing people is not a processing mechanism and does not let the processing tier consume work at its own pace.",
        "C": "DNS routing spreads load but does not buffer requests, so overloaded instances still drop orders.",
        "D": "The queue stores orders durably until processed, and the fleet scales on queue depth independently of the web tier."
      },
      "topic": "Design Resilient Architectures",
      "subtopic": "Design scalable and loosely coupled architectures",
      "difficulty": "easy",
      "source": "SAA-C03 Domain 2.1: Design scalable and loosely coupled architectures – Amazon SQS"
    },
    {
      "stem": "A company runs a critical application on an Amazon RDS for PostgreSQL DB instance in a single Availability Zone. The company needs the database to remain available if the Availability Zone fails, with automatic failover and without changing the database endpoint in the application. Which solution meets these requirements?",
      "options": [
        "Create a read replica in another Availability Zone and promote it if the primary instance fails.",
        "Increase the automated backup retention period and rely on point-in-time recovery after a failure.",
        "Convert the DB instance to a Multi-AZ deployment with a standby in another Availability Zone.",
        "Copy automated snapshots to another AWS Region every hour by using AWS Backup copy jobs."
      ],
      "answer": "C",
      "explanation": "In a Multi-AZ DB instance deployment, RDS synchronously replicates data to a standby in a different Availability Zone. If the primary or its AZ fails, RDS automatically fails over and updates the DNS record of the DB endpoint to point to the standby, so applications reconnect to the same endpoint. Read replicas are intended mainly for scaling reads and must be promoted manually, which also gives them a different endpoint.",
      "rationales": {
        "A": "Promoting a read replica is a manual step and the replica has a different endpoint, so the application must change.",
        "B": "Point-in-time recovery restores to a new instance with a new endpoint, which takes time and is not automatic failover.",
        "C": "Multi-AZ keeps a synchronous standby and fails over automatically by pointing the same DNS endpoint to the standby.",
        "D": "Snapshot copies support disaster recovery but need a manual restore to a new instance with a new endpoint."
      },
      "topic": "Design Resilient Architectures",
      "subtopic": "Design highly available and/or fault-tolerant architectures",
      "difficulty": "medium",
      "source": "SAA-C03 Domain 2.2: Design highly available and/or fault-tolerant architectures – Amazon RDS Multi-AZ deployments"
    },
    {
      "stem": "A company runs an Amazon Aurora MySQL DB cluster in the us-east-1 Region. The company needs a disaster recovery plan that can bring the database online in us-west-2 within minutes if us-east-1 becomes unavailable, with data loss measured in seconds. The solution must require the least operational overhead. Which solution meets these requirements?",
      "options": [
        "Convert the DB cluster to an Aurora global database with a secondary cluster in us-west-2.",
        "Add Aurora Replicas to the DB cluster in additional Availability Zones in us-east-1.",
        "Copy automated DB cluster snapshots to us-west-2 every day and restore them when needed.",
        "Run a nightly mysqldump job on Amazon EC2 and load the dump into a database in us-west-2."
      ],
      "answer": "A",
      "explanation": "An Aurora global database uses dedicated storage-level replication to copy data from the primary Region to one or more secondary Regions, typically with less than one second of lag. In a Regional outage, the secondary cluster can be promoted to accept writes, generally within minutes. Because replication is built in and managed by Aurora, it meets an RPO of seconds and an RTO of minutes with little operational overhead.",
      "rationales": {
        "A": "A global database replicates storage to the secondary Region with typical lag under a second and can be promoted within minutes.",
        "B": "Aurora Replicas protect against AZ failure only; they all stay in us-east-1 and cannot survive a Regional outage.",
        "C": "Daily snapshot copies give an RPO of up to 24 hours, and a restore takes longer than minutes.",
        "D": "A nightly dump gives an RPO of up to a day and adds custom scripts and servers to operate."
      },
      "topic": "Design Resilient Architectures",
      "subtopic": "Design highly available and/or fault-tolerant architectures",
      "difficulty": "medium",
      "source": "SAA-C03 Domain 2.2: Design highly available and/or fault-tolerant architectures – Amazon Aurora global databases"
    },
    {
      "stem": "A company runs a stateless web application on a single Amazon EC2 instance in one Availability Zone. The company wants the application to stay available if an instance or an Availability Zone fails and to adjust capacity automatically as traffic changes. Which combination of steps will meet these requirements? (Choose TWO.)",
      "options": [
        "Create an Auto Scaling group that launches instances across at least two Availability Zones.",
        "Create an Amazon Machine Image and schedule daily backups of the instance with AWS Backup.",
        "Assign an Elastic IP address and use a script to move it to a new instance after a failure.",
        "Place an Application Load Balancer with subnets in the same Availability Zones in front of the group.",
        "Change to a larger instance type and enable detailed monitoring in Amazon CloudWatch."
      ],
      "answer": "AD",
      "explanation": "High availability for a stateless tier comes from running multiple instances in more than one Availability Zone and routing traffic only to healthy ones. An Auto Scaling group spanning at least two AZs maintains the desired capacity, replaces unhealthy instances and scales with demand, while an Application Load Balancer distributes requests across the AZs and stops sending traffic to failed targets. Turning on ELB health checks for the Auto Scaling group lets it replace instances that the load balancer marks unhealthy.",
      "rationales": {
        "A": "A group spread across AZs replaces failed instances, keeps running if one AZ fails, and scales with demand.",
        "B": "Backups help recover after a failure but do not keep the application running or add capacity automatically.",
        "C": "Scripted Elastic IP remapping is slow and error-prone and still relies on one instance at a time.",
        "D": "The ALB health-checks targets and routes traffic only to healthy instances in every enabled AZ.",
        "E": "A larger single instance is still a single point of failure and does not scale automatically."
      },
      "topic": "Design Resilient Architectures",
      "subtopic": "Design highly available and/or fault-tolerant architectures",
      "difficulty": "medium",
      "source": "SAA-C03 Domain 2.2: Design highly available and/or fault-tolerant architectures – Elastic Load Balancing and Amazon EC2 Auto Scaling"
    },
    {
      "stem": "A company stores 400 TB of objects in an Amazon S3 bucket in eu-west-1, and new objects are added every day. For compliance, the company must keep a copy of all objects, both existing and future, in a bucket in eu-north-1, and the copy must be kept in sync automatically. Which solution meets these requirements with the LEAST operational overhead?",
      "options": [
        "Enable versioning on both buckets and add a Cross-Region Replication rule that covers the whole bucket.",
        "Enable S3 Transfer Acceleration on the source bucket and run a daily aws s3 sync job to the target bucket.",
        "Enable versioning on both buckets, add a Cross-Region Replication rule, and run an S3 Batch Replication job.",
        "Create an S3 Multi-Region Access Point that includes both buckets and send all application requests to it."
      ],
      "answer": "C",
      "explanation": "S3 Replication requires versioning on the source and destination buckets, and a live replication rule (Cross-Region Replication here) copies only objects created after the rule is in place. To copy objects that already existed, S3 Batch Replication is run as a Batch Operations job, which can also retry objects that previously failed to replicate. Combining the two keeps both existing and future objects in the second Region without custom copy tooling.",
      "rationales": {
        "A": "Replication rules apply only to objects uploaded after the rule is created, so the existing 400 TB would not be copied.",
        "B": "A scheduled sync job is custom tooling to run and monitor, and the copy can lag up to a day behind.",
        "C": "Live replication copies new objects automatically, and S3 Batch Replication copies the objects that existed before the rule.",
        "D": "A Multi-Region Access Point routes requests to buckets but does not copy objects between them without replication."
      },
      "topic": "Design Resilient Architectures",
      "subtopic": "Design highly available and/or fault-tolerant architectures",
      "difficulty": "hard",
      "source": "SAA-C03 Domain 2.2: Design highly available and/or fault-tolerant architectures – Amazon S3 Replication and S3 Batch Replication"
    },
    {
      "stem": "A gaming company stores player profiles in an Amazon DynamoDB table. The application performs a very high volume of repeated reads of the same items, and the company needs read latency in microseconds. The company wants to make as few changes to the application code as possible. Which solution meets these requirements?",
      "options": [
        "Increase the provisioned read capacity units on the table.",
        "Deploy a DynamoDB Accelerator (DAX) cluster in front of the table.",
        "Enable DynamoDB Streams and process the stream with AWS Lambda.",
        "Convert the table to a global table with a replica in another Region."
      ],
      "answer": "B",
      "explanation": "DynamoDB Accelerator (DAX) is a fully managed, in-memory, write-through cache built for DynamoDB. Because the DAX client uses the same API calls as DynamoDB, applications switch mainly by pointing the SDK client at the DAX cluster endpoint. Cached item reads return in microseconds, which suits read-heavy workloads that repeatedly request the same items.",
      "rationales": {
        "A": "More capacity reduces throttling, but DynamoDB reads still take single-digit milliseconds, not microseconds.",
        "B": "DAX is an in-memory, API-compatible cache for DynamoDB that serves repeated reads in microseconds with minimal code changes.",
        "C": "Streams capture item changes for downstream processing and do not speed up reads.",
        "D": "Global tables replicate data to other Regions for multi-Region access; they do not deliver microsecond reads."
      },
      "topic": "Design High-Performing Architectures",
      "subtopic": "Determine high-performing database solutions",
      "difficulty": "easy",
      "source": "SAA-C03 Domain 3.3: Determine high-performing database solutions – Amazon DynamoDB Accelerator (DAX)"
    },
    {
      "stem": "A company runs a content management application on Amazon EC2 Linux instances in an Auto Scaling group across three Availability Zones. All instances must read and write the same set of files at the same time through a standard POSIX file system interface, and the storage must grow automatically. Which storage solution meets these requirements?",
      "options": [
        "Amazon EBS Provisioned IOPS volumes with Multi-Attach",
        "Amazon EC2 instance store volumes on each instance",
        "Amazon FSx for Windows File Server file shares",
        "Amazon Elastic File System (Amazon EFS)"
      ],
      "answer": "D",
      "explanation": "Amazon EFS provides a fully managed NFS file system with POSIX semantics that many Linux clients can mount at the same time. A Regional EFS file system stores data redundantly across multiple Availability Zones and offers a mount target in each AZ, so instances in every AZ share the same files. Capacity grows and shrinks automatically as files are added and removed.",
      "rationales": {
        "A": "EBS Multi-Attach works only within one AZ and needs a cluster-aware file system; it is not a shared POSIX file system.",
        "B": "Instance store is temporary block storage local to one instance and cannot be shared between instances.",
        "C": "FSx for Windows File Server provides SMB shares for Windows workloads, not a native POSIX interface for Linux.",
        "D": "EFS is an elastic NFS file system that Linux instances in multiple AZs can mount and use concurrently."
      },
      "topic": "Design High-Performing Architectures",
      "subtopic": "Determine high-performing and/or scalable storage solutions",
      "difficulty": "easy",
      "source": "SAA-C03 Domain 3.1: Determine high-performing and/or scalable storage solutions – Amazon EFS"
    },
    {
      "stem": "A company collects clickstream events from its website and wants to store them in Amazon S3 within a few minutes of arrival in Apache Parquet format for analysis with Amazon Athena. The company does not want to manage any servers or write custom conversion code. Which solution meets these requirements with the LEAST operational overhead?",
      "options": [
        "Send events to Amazon Kinesis Data Streams and run consumers on Amazon EC2 that write Parquet files to S3.",
        "Send events through Amazon API Gateway to an AWS Lambda function that writes each event to S3 as Parquet.",
        "Send events to Amazon Data Firehose with record format conversion to Parquet and an S3 destination.",
        "Write events to S3 as JSON and use AWS DataSync to convert and copy them to another bucket as Parquet."
      ],
      "answer": "C",
      "explanation": "Amazon Data Firehose (formerly Kinesis Data Firehose) is a fully managed delivery service that buffers incoming streaming records and writes them to destinations such as Amazon S3 within a configurable buffer interval. Its record format conversion feature converts JSON input to Apache Parquet or ORC by using a table schema from the AWS Glue Data Catalog. Columnar Parquet files reduce the amount of data Athena scans, which improves query speed and cost.",
      "rationales": {
        "A": "EC2 consumers are servers to manage and require custom code to build Parquet files.",
        "B": "This needs custom conversion code and creates one tiny Parquet file per event, which hurts Athena performance.",
        "C": "Firehose buffers records, converts JSON to Parquet using an AWS Glue schema, and delivers files to S3 with no servers.",
        "D": "DataSync moves data between storage systems but does not convert file formats."
      },
      "topic": "Design High-Performing Architectures",
      "subtopic": "Determine high-performing data ingestion and transformation solutions",
      "difficulty": "medium",
      "source": "SAA-C03 Domain 3.5: Determine high-performing data ingestion and transformation solutions – Amazon Data Firehose record format conversion"
    },
    {
      "stem": "A company runs a multiplayer game backend that uses UDP behind Network Load Balancers in us-east-1 and eu-west-1. Players connect from around the world. The company wants to give players a fixed set of static IP addresses, route each player to the nearest healthy Region over the AWS global network, and fail over between Regions within seconds without relying on DNS caching. Which solution meets these requirements?",
      "options": [
        "Create an Amazon CloudFront distribution with both Network Load Balancers as origins in an origin group.",
        "Create Amazon Route 53 latency-based records with health checks that point to both Network Load Balancers.",
        "Assign Elastic IP addresses to both Network Load Balancers and hard-code all of the addresses in the clients.",
        "Connect both Regions with AWS Transit Gateway inter-Region peering and expose a single public NLB.",
        "Create an AWS Global Accelerator standard accelerator with an endpoint group in each Region for the NLBs."
      ],
      "answer": "E",
      "explanation": "AWS Global Accelerator provides static anycast IP addresses that are advertised from AWS edge locations, so player traffic enters the AWS global network close to the player. A standard accelerator supports TCP and UDP listeners and routes to endpoint groups, such as NLBs, in multiple Regions based on proximity, health checks and traffic dials. Because the IP addresses never change, Regional failover happens within seconds without waiting for DNS TTLs to expire.",
      "rationales": {
        "A": "CloudFront is built for HTTP(S) and WebSocket delivery and does not route arbitrary UDP game traffic to NLB origins.",
        "B": "Route 53 answers depend on DNS and client caching, so failover is not within seconds and the IPs are not fixed.",
        "C": "Clients would pick addresses themselves, with no proximity routing, health-based failover or global network path.",
        "D": "Transit Gateway connects VPCs and networks privately; it does not provide global entry points for players.",
        "E": "Global Accelerator gives static anycast IPs, routes UDP to the closest healthy endpoint, and fails over without DNS changes."
      },
      "topic": "Design High-Performing Architectures",
      "subtopic": "Determine high-performing and/or scalable network architectures",
      "difficulty": "hard",
      "source": "SAA-C03 Domain 3.4: Determine high-performing and/or scalable network architectures – AWS Global Accelerator"
    },
    {
      "stem": "A research team runs a tightly coupled computational fluid dynamics job on Amazon EC2 instances. The nodes exchange large volumes of MPI messages, and the job's performance is limited by network latency between nodes. Which combination of actions should a solutions architect recommend to reduce the inter-node latency? (Choose TWO.)",
      "options": [
        "Launch the instances in a spread placement group across several Availability Zones.",
        "Use burstable performance instances to absorb short spikes in compute demand.",
        "Launch the instances in a cluster placement group in a single Availability Zone.",
        "Distribute the nodes across multiple AWS Regions to obtain more total capacity.",
        "Use supported instance types with an Elastic Fabric Adapter (EFA) attached."
      ],
      "answer": "CE",
      "explanation": "Tightly coupled HPC jobs spend much of their time waiting on messages between nodes, so network latency limits performance. A cluster placement group places instances in a low-latency network segment within one Availability Zone, and an Elastic Fabric Adapter lets MPI libraries bypass the operating system kernel to communicate directly with the network interface. Using both together is the AWS-recommended setup for HPC workloads that need low inter-node latency.",
      "rationales": {
        "A": "A spread placement group puts instances on distinct hardware for fault isolation, which increases distance between nodes.",
        "B": "Burstable instances target variable CPU use and do not improve network latency between nodes.",
        "C": "A cluster placement group packs instances close together in one AZ for low latency and high throughput.",
        "D": "Cross-Region traffic adds substantial latency, which makes a tightly coupled job slower.",
        "E": "EFA provides OS-bypass networking for MPI, lowering latency and improving scaling for tightly coupled HPC jobs."
      },
      "topic": "Design High-Performing Architectures",
      "subtopic": "Design high-performing and elastic compute solutions",
      "difficulty": "medium",
      "source": "SAA-C03 Domain 3.2: Design high-performing and elastic compute solutions – EC2 placement groups and Elastic Fabric Adapter"
    },
    {
      "stem": "A company stores application log files in Amazon S3. The logs are queried often during the first 30 days and are almost never accessed after that, but they must be retained for 7 years for audit purposes. When an auditor requests old logs, a retrieval time of up to 48 hours is acceptable. Which solution is the MOST cost-effective?",
      "options": [
        "Keep all logs in S3 Standard and use a lifecycle rule to delete them after 7 years.",
        "Use a lifecycle rule to move logs to S3 Glacier Deep Archive after 30 days and expire them after 7 years.",
        "Use a lifecycle rule to move logs to S3 Standard-IA after 30 days and expire them after 7 years.",
        "Use a lifecycle rule to move logs to S3 Glacier Instant Retrieval after 30 days and expire them after 7 years."
      ],
      "answer": "B",
      "explanation": "S3 Lifecycle rules can transition objects to cheaper storage classes as they age and expire them when retention ends. S3 Glacier Deep Archive is the lowest-cost storage class and is designed for long-term retention of rarely accessed data, with standard retrievals typically completing within 12 hours and bulk retrievals within 48 hours. Because auditors accept up to 48 hours, there is no need to pay for a storage class with faster access.",
      "rationales": {
        "A": "S3 Standard has the highest storage price, which is wasteful for data that is almost never read.",
        "B": "Deep Archive has the lowest storage price, and its 12-hour standard or 48-hour bulk retrievals fit the requirement.",
        "C": "Standard-IA costs much more per GB than archive classes, and its millisecond access is not needed.",
        "D": "Glacier Instant Retrieval offers millisecond access at a higher storage price than Deep Archive, which is unnecessary here."
      },
      "topic": "Design Cost-Optimized Architectures",
      "subtopic": "Design cost-optimized storage solutions",
      "difficulty": "easy",
      "source": "SAA-C03 Domain 4.1: Design cost-optimized storage solutions – Amazon S3 storage classes and S3 Lifecycle"
    },
    {
      "stem": "A company runs a steady baseline of compute usage 24 hours a day and expects it to continue for the next 3 years. The workloads cannot tolerate interruptions. Over that period the company plans to change instance families, move some workloads to another AWS Region, and migrate part of the workload from Amazon EC2 to AWS Fargate. The company wants the largest discount that still allows these changes. Which purchasing option meets these requirements?",
      "options": [
        "EC2 Instance Savings Plans for the current instance family in the current Region",
        "Standard Reserved Instances for the current instance types with a 3-year term",
        "Spot Instances for all of the baseline usage with a capacity-optimized strategy",
        "Compute Savings Plans with a 3-year term that cover the baseline hourly spend",
        "On-Demand Capacity Reservations for the baseline instances in the current Region"
      ],
      "answer": "D",
      "explanation": "Compute Savings Plans give a discount in exchange for a commitment to a consistent amount of compute spend, measured in USD per hour, for 1 or 3 years. The discount applies automatically to EC2 usage regardless of instance family, size, Availability Zone, Region, operating system or tenancy, and also to AWS Fargate and AWS Lambda usage. EC2 Instance Savings Plans and Standard Reserved Instances can offer slightly larger discounts, but only by tying the commitment to an instance family and Region, which conflicts with the planned changes.",
      "rationales": {
        "A": "EC2 Instance Savings Plans are tied to one instance family in one Region and do not apply to Fargate.",
        "B": "Standard RIs are tied to a Region and to attributes such as instance family, and they do not cover Fargate.",
        "C": "Spot capacity can be reclaimed with a two-minute warning, which does not suit workloads that cannot be interrupted.",
        "D": "Compute Savings Plans apply across instance families and Regions and also cover Fargate and Lambda usage.",
        "E": "Capacity Reservations reserve capacity but give no discount unless combined with Savings Plans or RIs."
      },
      "topic": "Design Cost-Optimized Architectures",
      "subtopic": "Design cost-optimized compute solutions",
      "difficulty": "medium",
      "source": "SAA-C03 Domain 4.2: Design cost-optimized compute solutions – Savings Plans and Reserved Instances"
    },
    {
      "stem": "A company is launching a new application that stores data in an Amazon DynamoDB table. Traffic is unpredictable: the table may receive no requests for hours and then sudden spikes of thousands of requests per second. The company does not want to do capacity planning and wants to pay only for the reads and writes that the application actually performs. Which solution meets these requirements?",
      "options": [
        "Configure the table to use on-demand capacity mode with pay-per-request billing.",
        "Configure the table to use provisioned capacity sized for the highest expected peak.",
        "Configure the table to use provisioned capacity with DynamoDB auto scaling enabled.",
        "Purchase DynamoDB reserved capacity for the expected average provisioned throughput."
      ],
      "answer": "A",
      "explanation": "In on-demand capacity mode, DynamoDB charges for each read and write request rather than for provisioned throughput, so idle periods incur no throughput charges (storage is still billed). The table accommodates rapidly changing traffic without the owner setting or scaling capacity. Provisioned mode is usually cheaper only for steady, predictable traffic that can be forecast accurately.",
      "rationales": {
        "A": "On-demand mode bills per request and absorbs traffic spikes without capacity planning, so idle hours incur no throughput cost.",
        "B": "Capacity sized for the peak is billed every hour, including the long idle periods.",
        "C": "Auto scaling still bills for a provisioned minimum and reacts over minutes, so sudden spikes can be throttled.",
        "D": "Reserved capacity is an upfront commitment to provisioned throughput, which is billed whether or not it is used."
      },
      "topic": "Design Cost-Optimized Architectures",
      "subtopic": "Design cost-optimized database solutions",
      "difficulty": "medium",
      "source": "SAA-C03 Domain 4.3: Design cost-optimized database solutions – Amazon DynamoDB read/write capacity modes"
    },
    {
      "stem": "A company runs a data processing application on Amazon EC2 instances in private subnets. The instances read and write about 50 TB of data each month to Amazon S3 buckets in the same AWS Region. All S3 traffic currently goes through a NAT gateway, and the NAT gateway data processing charges have become the largest item on the bill. The instances must remain in private subnets and still need internet access for software updates. What should a solutions architect do to reduce costs the MOST?",
      "options": [
        "Create an interface VPC endpoint for Amazon S3 in each private subnet and use its endpoint DNS names.",
        "Create a gateway VPC endpoint for Amazon S3 and associate it with the private subnets' route tables.",
        "Replace the NAT gateway with a NAT instance that runs on a large Amazon EC2 instance type.",
        "Enable S3 Transfer Acceleration on the buckets and send all requests to the accelerate endpoint.",
        "Add a second NAT gateway in another Availability Zone and route half of the S3 traffic through it."
      ],
      "answer": "B",
      "explanation": "Gateway VPC endpoints for Amazon S3 are added as targets in route tables and carry traffic to S3 over the AWS network at no additional charge. With the endpoint's prefix-list route in the private subnets' route tables, S3 traffic no longer flows through the NAT gateway, so the NAT gateway data processing charges for that traffic disappear while the NAT gateway remains for internet-bound software updates. Data transfer between EC2 and S3 in the same Region is free, so no new transfer cost replaces the NAT charge.",
      "rationales": {
        "A": "Interface endpoints for S3 add hourly and per-GB processing charges, so they cost more than a gateway endpoint.",
        "B": "A gateway endpoint for S3 has no hourly or data processing charge and keeps same-Region S3 traffic off the NAT gateway.",
        "C": "A NAT instance avoids per-GB NAT gateway charges but adds instance cost and management, and still costs more than a free endpoint.",
        "D": "Transfer Acceleration adds per-GB charges and is meant for long-distance transfers, not same-Region traffic.",
        "E": "A second NAT gateway adds hourly cost, and the same per-GB processing charge still applies to all traffic."
      },
      "topic": "Design Cost-Optimized Architectures",
      "subtopic": "Design cost-optimized network architectures",
      "difficulty": "hard",
      "source": "SAA-C03 Domain 4.4: Design cost-optimized network architectures – Gateway VPC endpoints for Amazon S3"
    }
  ]
}
```
