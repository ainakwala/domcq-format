```json
{
  "format": "domcq/1",
  "exam": "aws-clf",
  "set": "AWS Certified Cloud Practitioner practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A company is evaluating a move to AWS. Its finance team learns that AWS can offer lower pay-as-you-go prices than the company could achieve on its own, because AWS aggregates the usage of hundreds of thousands of customers. Which advantage of cloud computing does this describe?",
      "options": [
        "Increase speed and agility",
        "Stop guessing capacity",
        "Benefit from massive economies of scale",
        "Go global in minutes"
      ],
      "answer": "C",
      "explanation": "Because AWS combines the demand of a very large number of customers, it buys hardware, power and network capacity at a scale no single company can match, and it passes the savings on as lower variable prices. This is the 'benefit from massive economies of scale' advantage. The other advantages are real but describe different outcomes: faster provisioning, matching capacity to actual demand, and fast global deployment.",
      "rationales": {
        "A": "Wrong: speed and agility is about provisioning resources in minutes so teams can experiment faster, not about lower unit prices from aggregated demand.",
        "B": "Wrong: stop guessing capacity means scaling up or down with actual demand instead of forecasting and overprovisioning.",
        "C": "Correct: aggregating usage across many customers lets AWS achieve economies of scale and offer lower pay-as-you-go prices.",
        "D": "Wrong: go global in minutes refers to deploying in multiple Regions quickly to reduce latency for users, not to lower prices."
      },
      "topic": "Cloud Concepts",
      "subtopic": "Define the benefits of the AWS Cloud",
      "difficulty": "easy",
      "source": "Overview of Amazon Web Services whitepaper – Six advantages of cloud computing; exam guide Task Statement 1.1"
    },
    {
      "stem": "A company is reviewing one of its workloads against the AWS Well-Architected Framework. Which of the following are pillars of the AWS Well-Architected Framework? (Choose THREE.)",
      "options": [
        "Elasticity",
        "Operational excellence",
        "Reliability",
        "Agility",
        "Scalability",
        "Sustainability"
      ],
      "answer": "BCF",
      "explanation": "The AWS Well-Architected Framework has six pillars: operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability. Each pillar comes with design principles and best practices that are used to review a workload. Elasticity and scalability are characteristics that well-architected workloads often have, and agility is a benefit of the cloud, but none of them is a pillar.",
      "rationales": {
        "A": "Wrong: elasticity is a cloud characteristic that supports pillars such as performance efficiency and cost optimization, but it is not a pillar.",
        "B": "Correct: operational excellence is a pillar covering how systems are run and monitored and how processes are continually improved.",
        "C": "Correct: reliability is a pillar covering a workload's ability to perform its intended function correctly and consistently, and to recover from failure.",
        "D": "Wrong: agility is a benefit of cloud computing, not one of the six Well-Architected pillars.",
        "E": "Wrong: scalability is a desirable property of a workload, but it is not one of the six pillars.",
        "F": "Correct: sustainability, the sixth pillar, focuses on minimizing the environmental impact of running cloud workloads."
      },
      "topic": "Cloud Concepts",
      "subtopic": "Identify design principles of the AWS Cloud",
      "difficulty": "medium",
      "source": "AWS Well-Architected Framework – The pillars of the framework; exam guide Task Statement 1.2"
    },
    {
      "stem": "A company is beginning its move to AWS. Leadership wants to assess employees' cloud skills, plan training to build cloud fluency, and prepare the organization's culture for new ways of working. Which perspective of the AWS Cloud Adoption Framework (AWS CAF) focuses on these capabilities?",
      "options": [
        "People",
        "Governance",
        "Platform",
        "Operations"
      ],
      "answer": "A",
      "explanation": "The AWS CAF groups capabilities into six perspectives: Business, People, Governance, Platform, Security, and Operations. The People perspective bridges technology and business and covers capabilities such as cloud fluency, workforce transformation, culture evolution, and change acceleration. Planning skills, training, and cultural change is therefore People work, while the other perspectives deal with program oversight, technical platforms, and day-to-day service delivery.",
      "rationales": {
        "A": "Correct: the People perspective covers cloud fluency, workforce transformation, culture evolution, and organizational change.",
        "B": "Wrong: Governance focuses on orchestrating cloud initiatives, managing risk, and cloud financial management, not on skills and culture.",
        "C": "Wrong: Platform focuses on building a scalable hybrid cloud platform, including architecture and provisioning, not on people.",
        "D": "Wrong: Operations focuses on delivering cloud services at agreed levels, with capabilities such as observability and incident management."
      },
      "topic": "Cloud Concepts",
      "subtopic": "Understand the benefits of and strategies for migration to the AWS Cloud",
      "difficulty": "medium",
      "source": "AWS Cloud Adoption Framework (AWS CAF) whitepaper – People perspective; exam guide Task Statement 1.3"
    },
    {
      "stem": "A company runs a self-managed MySQL database on an on-premises server. As part of its migration to AWS, the company will move the database to Amazon RDS for MySQL so that AWS handles tasks such as patching and backups. The database engine and the application code will not change. Which migration strategy does this describe?",
      "options": [
        "Rehost",
        "Replatform",
        "Refactor",
        "Repurchase"
      ],
      "answer": "B",
      "explanation": "Replatforming, often called 'lift, tinker, and shift', moves a workload to the cloud with a few targeted optimizations that bring a real benefit, without changing its core architecture. Moving a self-managed database to a managed service such as Amazon RDS, with the same engine and unchanged application code, is a typical example: the company gains managed patching and backups for very little change. Rehosting would have moved the server as it is, for example onto Amazon EC2.",
      "rationales": {
        "A": "Wrong: rehosting (lift and shift) moves the database as it is, for example onto an EC2 instance, so the company would still manage patching and backups.",
        "B": "Correct: moving to a managed engine without changing code or core architecture is a replatform (lift, tinker, and shift).",
        "C": "Wrong: refactoring re-architects the application, for example to cloud-native or serverless services, which this plan does not do.",
        "D": "Wrong: repurchasing replaces the workload with a different product, typically a SaaS offering, rather than keeping the same engine."
      },
      "topic": "Cloud Concepts",
      "subtopic": "Understand the benefits of and strategies for migration to the AWS Cloud",
      "difficulty": "hard",
      "source": "AWS Prescriptive Guidance – Migration strategies (the 7 Rs); exam guide Task Statement 1.3"
    },
    {
      "stem": "A company wants to bring its existing server-bound software licenses to AWS. The licenses are counted per physical socket and per physical core, so the company needs visibility into, and control over, the physical server that its instances run on. Which Amazon EC2 option will meet these requirements?",
      "options": [
        "Amazon EC2 Dedicated Instances",
        "Amazon EC2 Spot Instances",
        "Amazon EC2 On-Demand Instances with default tenancy",
        "Amazon EC2 Dedicated Hosts"
      ],
      "answer": "D",
      "explanation": "An Amazon EC2 Dedicated Host is a physical server fully dedicated to one customer, and it shows the sockets, cores and host ID so that the company can track license use and keep instances on the same host. This makes it the option for bring-your-own-license (BYOL) terms that are counted per socket, per core or per VM. Dedicated Instances also run on hardware that is not shared with other customers, but they give no visibility into or control over the specific physical server.",
      "rationales": {
        "A": "Wrong: Dedicated Instances run on single-tenant hardware but give no visibility into the sockets, cores, or specific physical server used.",
        "B": "Wrong: Spot Instances use spare EC2 capacity and can be interrupted, and they give no visibility into or control over the physical server.",
        "C": "Wrong: default tenancy places instances on shared hardware, so per-socket and per-core licenses cannot be tracked to a server.",
        "D": "Correct: Dedicated Hosts expose sockets, cores, and host IDs and support host affinity, which allows BYOL for server-bound licenses."
      },
      "topic": "Cloud Concepts",
      "subtopic": "Understand concepts of cloud economics",
      "difficulty": "hard",
      "source": "Amazon EC2 User Guide – Dedicated Hosts; exam guide Task Statement 1.4 (licensing strategies, BYOL)"
    },
    {
      "stem": "A company runs its application on Amazon EC2 instances. According to the AWS shared responsibility model, which task is the responsibility of AWS?",
      "options": [
        "Applying security patches to the guest operating system",
        "Configuring the security group rules for the instances",
        "Maintaining the physical hosts and the virtualization layer",
        "Encrypting the data stored on attached Amazon EBS volumes"
      ],
      "answer": "C",
      "explanation": "Under the shared responsibility model, AWS is responsible for security of the cloud: the facilities, hardware, global network, and the virtualization layer that runs EC2 instances. Because EC2 is infrastructure as a service, the customer is responsible for security in the cloud, which includes the guest operating system, applications, security group configuration, and the protection of its data.",
      "rationales": {
        "A": "Wrong: for EC2, the customer manages the guest operating system, including updates and security patches.",
        "B": "Wrong: security groups are virtual firewalls that the customer configures for its own instances.",
        "C": "Correct: AWS maintains the physical infrastructure and the virtualization layer as part of security of the cloud.",
        "D": "Wrong: AWS provides encryption features, but choosing to encrypt the data and managing that protection is the customer's responsibility."
      },
      "topic": "Security and Compliance",
      "subtopic": "Understand the AWS shared responsibility model",
      "difficulty": "easy",
      "source": "AWS Shared Responsibility Model (AWS Compliance page); exam guide Task Statement 2.1"
    },
    {
      "stem": "A company runs its application code as AWS Lambda functions. According to the AWS shared responsibility model, which tasks are the responsibility of the company? (Choose TWO.)",
      "options": [
        "Patching the operating system of the servers that run the functions",
        "Managing the IAM permissions that are granted to the functions",
        "Scaling the fleet of servers that runs the functions",
        "Securing the function code and its third-party libraries",
        "Running the service across multiple Availability Zones"
      ],
      "answer": "BD",
      "explanation": "How responsibility is divided depends on the service. For a serverless service such as Lambda, AWS operates the servers, operating systems, runtime platform, scaling, and multi-AZ availability. The customer still owns everything it puts into the service: its code and dependencies, its data, and the IAM configuration that controls what the functions can access and who can invoke them.",
      "rationales": {
        "A": "Wrong: with Lambda, AWS manages and patches the operating system of the underlying compute; the customer never accesses those servers.",
        "B": "Correct: the customer defines the execution role and resource policies, so it decides what each function may access and who may invoke it.",
        "C": "Wrong: Lambda scales automatically; AWS provisions and manages the servers that handle incoming requests.",
        "D": "Correct: the customer is responsible for the security of its own code, including vulnerabilities in the libraries it packages.",
        "E": "Wrong: AWS runs Lambda across multiple Availability Zones in each Region as part of operating the service."
      },
      "topic": "Security and Compliance",
      "subtopic": "Understand the AWS shared responsibility model",
      "difficulty": "hard",
      "source": "AWS Shared Responsibility Model; AWS Lambda Developer Guide – Security in AWS Lambda; exam guide Task Statement 2.1"
    },
    {
      "stem": "An application that runs on Amazon EC2 instances needs to read objects from a private Amazon S3 bucket. The company does not want to store long-term credentials on the instances. Which solution will meet these requirements MOST securely?",
      "options": [
        "Attach an IAM role to the instances through an instance profile",
        "Store an IAM user's access keys in a configuration file on the instances",
        "Embed the root user's access keys in the application code",
        "Add a bucket policy that makes the bucket's objects publicly readable"
      ],
      "answer": "A",
      "explanation": "An IAM role attached to an EC2 instance gives the application temporary security credentials, which AWS delivers through the instance metadata and rotates automatically, so no long-term keys are stored on the instance. The role's policy can grant only the S3 read permissions that the application needs, which follows the principle of least privilege. This is the AWS-recommended way to give applications on EC2 access to other AWS services.",
      "rationales": {
        "A": "Correct: a role supplies automatically rotated temporary credentials and can be limited to only the S3 permissions the application needs.",
        "B": "Wrong: IAM user access keys are long-term credentials, which the company wants to avoid storing on the instances.",
        "C": "Wrong: root user access keys have unrestricted access to the account and should never be created for or embedded in applications.",
        "D": "Wrong: public read access would expose the private data to anyone on the internet, which is not secure."
      },
      "topic": "Security and Compliance",
      "subtopic": "Identify AWS access management capabilities",
      "difficulty": "medium",
      "source": "IAM User Guide – Use an IAM role to grant permissions to applications running on Amazon EC2 instances; exam guide Task Statement 2.3"
    },
    {
      "stem": "A company wants a managed service that continuously monitors its AWS accounts and workloads for malicious activity and unauthorized behavior. The service must analyze data sources such as VPC Flow Logs, DNS query logs, and account API activity. Which AWS service will meet these requirements?",
      "options": [
        "Amazon Inspector",
        "Amazon Macie",
        "AWS Config",
        "Amazon GuardDuty"
      ],
      "answer": "D",
      "explanation": "Amazon GuardDuty is a threat detection service that uses machine learning, anomaly detection, and threat intelligence to analyze sources such as account API activity, VPC Flow Logs, and DNS logs. It produces security findings about issues such as compromised instances, unusual API calls, or communication with known malicious IP addresses. The other services address software vulnerabilities, sensitive data, and configuration compliance rather than active threats.",
      "rationales": {
        "A": "Wrong: Amazon Inspector scans workloads such as EC2 instances and container images for software vulnerabilities and unintended network exposure.",
        "B": "Wrong: Amazon Macie uses machine learning to discover and protect sensitive data, such as personal data, stored in Amazon S3.",
        "C": "Wrong: AWS Config records resource configurations and evaluates them against rules; it does not detect malicious activity.",
        "D": "Correct: GuardDuty continuously analyzes logs and account activity to detect threats and generates findings for the company to act on."
      },
      "topic": "Security and Compliance",
      "subtopic": "Identify components and resources for security",
      "difficulty": "medium",
      "source": "Amazon GuardDuty User Guide – What is Amazon GuardDuty?; exam guide Task Statement 2.4"
    },
    {
      "stem": "An external auditor asks a company for AWS compliance reports, such as AWS SOC reports and ISO certifications, as part of the company's annual audit. Which AWS service or resource provides on-demand access to these reports?",
      "options": [
        "AWS Trusted Advisor",
        "AWS Artifact",
        "AWS Config",
        "Amazon Inspector"
      ],
      "answer": "B",
      "explanation": "AWS Artifact is a self-service portal that gives on-demand access to AWS security and compliance reports from third-party auditors, such as SOC, PCI, and ISO reports, and to select online agreements. Customers can share these reports with their auditors to show that the AWS infrastructure meets those standards. The reports cover the AWS side of the shared responsibility model; the company must still show compliance for what it builds on AWS.",
      "rationales": {
        "A": "Wrong: Trusted Advisor inspects an account and recommends best practices for cost, security, performance, and more; it holds no audit reports.",
        "B": "Correct: AWS Artifact provides on-demand downloads of AWS compliance reports, such as SOC and ISO, and of select agreements.",
        "C": "Wrong: AWS Config tracks the company's own resource configurations and rule compliance, not the third-party audit reports about AWS.",
        "D": "Wrong: Amazon Inspector scans the company's workloads for vulnerabilities; it does not provide AWS compliance reports."
      },
      "topic": "Security and Compliance",
      "subtopic": "Understand AWS Cloud security, governance, and compliance concepts",
      "difficulty": "easy",
      "source": "AWS Artifact User Guide – What is AWS Artifact?; exam guide Task Statement 2.2"
    },
    {
      "stem": "A security team finds that an Amazon EC2 instance was terminated yesterday. The team needs to identify which IAM identity made the request, when it was made, and from which IP address. Which AWS service will provide this information?",
      "options": [
        "Amazon CloudWatch",
        "AWS Config",
        "AWS CloudTrail",
        "AWS Trusted Advisor"
      ],
      "answer": "C",
      "explanation": "AWS CloudTrail records actions taken by users, roles, and AWS services as events, including API calls made from the console, the AWS CLI, and the SDKs. Each event shows who made the request, when, from which source IP address, and with which parameters, and the Event history keeps the last 90 days of management events by default. This makes CloudTrail the service for auditing who did what in an account.",
      "rationales": {
        "A": "Wrong: CloudWatch collects metrics, logs, and alarms about resource performance; it does not record which identity made an API call.",
        "B": "Wrong: AWS Config records how resource configurations change over time, but the identity behind an API call comes from CloudTrail.",
        "C": "Correct: CloudTrail logs each API call with the caller's identity, the time, the source IP address, and the request details.",
        "D": "Wrong: Trusted Advisor gives best-practice recommendations and does not keep a record of API activity."
      },
      "topic": "Security and Compliance",
      "subtopic": "Understand AWS Cloud security, governance, and compliance concepts",
      "difficulty": "medium",
      "source": "AWS CloudTrail User Guide – What is AWS CloudTrail?; exam guide Task Statement 2.2"
    },
    {
      "stem": "Which statement describes an Availability Zone in the AWS global infrastructure?",
      "options": [
        "One or more discrete data centers with redundant power, networking, and connectivity in a Region",
        "A geographic location in the world that contains multiple, isolated groups of data centers",
        "A site close to end users that caches content to reduce latency for Amazon CloudFront",
        "A rack of AWS-managed servers that is installed in a customer's own data center"
      ],
      "answer": "A",
      "explanation": "An AWS Region is a physical location in the world that contains multiple Availability Zones. Each Availability Zone is one or more discrete data centers with redundant power, networking, and connectivity, physically separated from the other Availability Zones in the Region and connected to them by low-latency links. Deploying across multiple Availability Zones lets an application keep running if one Availability Zone fails.",
      "rationales": {
        "A": "Correct: an Availability Zone is one or more isolated data centers within a Region, with redundant power, networking, and connectivity.",
        "B": "Wrong: this describes an AWS Region, which contains multiple Availability Zones.",
        "C": "Wrong: this describes an edge location, which Amazon CloudFront uses to cache content close to users.",
        "D": "Wrong: this describes AWS Outposts, which brings AWS infrastructure into a customer's on-premises facility."
      },
      "topic": "Cloud Technology and Services",
      "subtopic": "Define the AWS global infrastructure",
      "difficulty": "easy",
      "source": "AWS Global Infrastructure – Regions and Availability Zones; exam guide Task Statement 3.2"
    },
    {
      "stem": "A company wants to run containerized applications on Amazon Elastic Container Service (Amazon ECS). The company does not want to provision, patch, or scale the servers that the containers run on. Which AWS service or feature will meet these requirements?",
      "options": [
        "Amazon EC2 Auto Scaling",
        "Amazon EC2 Dedicated Hosts",
        "AWS Outposts",
        "AWS Fargate"
      ],
      "answer": "D",
      "explanation": "AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS. The company specifies the CPU and memory for each task, and AWS provisions, patches, and scales the underlying infrastructure, so there are no EC2 instances for the company to manage. With the EC2 launch type, the company would run and maintain the container instances itself.",
      "rationales": {
        "A": "Wrong: EC2 Auto Scaling adjusts the number of instances, but the company still manages those instances, including patching.",
        "B": "Wrong: Dedicated Hosts are physical servers dedicated to the company, which still provisions and manages the instances on them.",
        "C": "Wrong: Outposts extends AWS infrastructure to the company's own facility for hybrid needs; it is not a serverless container engine.",
        "D": "Correct: Fargate runs ECS tasks without any servers for the company to provision, patch, or scale."
      },
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS compute services",
      "difficulty": "medium",
      "source": "Amazon ECS Developer Guide – AWS Fargate for Amazon ECS; exam guide Task Statement 3.3"
    },
    {
      "stem": "A company is building a mobile gaming application. It needs a fully managed, serverless NoSQL database that stores key-value data and delivers single-digit millisecond performance at any scale. Which AWS service will meet these requirements?",
      "options": [
        "Amazon RDS",
        "Amazon DynamoDB",
        "Amazon Redshift",
        "Amazon Aurora"
      ],
      "answer": "B",
      "explanation": "Amazon DynamoDB is a fully managed, serverless NoSQL database that supports key-value and document data models. It scales automatically with no servers to manage and is designed for consistent single-digit millisecond performance, which suits high-traffic applications such as games. Amazon RDS and Amazon Aurora are relational databases, and Amazon Redshift is a data warehouse for analytics.",
      "rationales": {
        "A": "Wrong: Amazon RDS is a managed relational database service that uses SQL engines, not a serverless NoSQL key-value store.",
        "B": "Correct: DynamoDB is a serverless NoSQL key-value and document database built for single-digit millisecond performance at scale.",
        "C": "Wrong: Amazon Redshift is a data warehouse for running analytics queries across large datasets, not an operational key-value store.",
        "D": "Wrong: Amazon Aurora is a MySQL- and PostgreSQL-compatible relational database, not a NoSQL key-value database."
      },
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS database services",
      "difficulty": "easy",
      "source": "Amazon DynamoDB Developer Guide – What is Amazon DynamoDB?; exam guide Task Statement 3.4"
    },
    {
      "stem": "A company wants to connect its on-premises data center to its Amazon VPC so that on-premises servers can communicate with Amazon EC2 instances by using private IP addresses. Which AWS services or features can the company use to create this connection? (Choose TWO.)",
      "options": [
        "AWS Direct Connect",
        "Amazon CloudFront",
        "VPC peering",
        "AWS Site-to-Site VPN",
        "Amazon Route 53"
      ],
      "answer": "AD",
      "explanation": "AWS Site-to-Site VPN creates encrypted IPsec tunnels over the internet between the company's network and a virtual private gateway or transit gateway in AWS. AWS Direct Connect provides a dedicated private network connection from the company's premises to AWS that does not travel over the public internet and gives more consistent performance. Both let on-premises servers reach VPC resources by private IP address, and companies often use a VPN as a backup for Direct Connect.",
      "rationales": {
        "A": "Correct: Direct Connect links the data center to AWS over a dedicated private connection that bypasses the public internet.",
        "B": "Wrong: CloudFront is a content delivery network that caches content at edge locations; it does not connect networks.",
        "C": "Wrong: VPC peering connects two VPCs to each other; it cannot connect an on-premises network to a VPC.",
        "D": "Correct: Site-to-Site VPN connects the on-premises network to the VPC through encrypted IPsec tunnels over the internet.",
        "E": "Wrong: Route 53 is a DNS and domain registration service; it resolves names but does not provide network connectivity."
      },
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS network services",
      "difficulty": "medium",
      "source": "Amazon VPC User Guide – Connect your VPC to remote networks; exam guide Task Statement 3.5"
    },
    {
      "stem": "A company must retain financial records for 7 years to meet regulatory requirements. The records will rarely be accessed, and retrieval within 12 hours is acceptable when an audit requires them. Which Amazon S3 storage class will meet these requirements at the LOWEST storage cost?",
      "options": [
        "S3 Standard",
        "S3 Glacier Instant Retrieval",
        "S3 Glacier Deep Archive",
        "S3 Standard-IA"
      ],
      "answer": "C",
      "explanation": "S3 Glacier Deep Archive is the lowest-cost Amazon S3 storage class and is designed for data that is kept for many years and accessed once or twice a year, such as records retained for regulatory compliance. Its standard retrievals complete within 12 hours, which meets the stated requirement. The other classes offer millisecond access, but they charge more for storage, so the company would pay for retrieval speed it does not need.",
      "rationales": {
        "A": "Wrong: S3 Standard is designed for frequently accessed data and has the highest storage price of these options.",
        "B": "Wrong: Glacier Instant Retrieval gives millisecond access to rarely accessed data, but its storage price is higher than Deep Archive.",
        "C": "Correct: Deep Archive has the lowest storage price, and its standard retrievals finish within 12 hours, which meets the requirement.",
        "D": "Wrong: S3 Standard-IA suits infrequently accessed data that needs rapid access, and it costs more to store than Deep Archive."
      },
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS storage services",
      "difficulty": "medium",
      "source": "Amazon S3 User Guide – Understanding and managing Amazon S3 storage classes; exam guide Task Statement 3.6"
    },
    {
      "stem": "A retail company collects thousands of written product reviews each day. The company wants to automatically determine whether each review expresses a positive, negative, neutral, or mixed opinion, without building its own machine learning models. Which AWS service will meet these requirements?",
      "options": [
        "Amazon Comprehend",
        "Amazon Polly",
        "Amazon Rekognition",
        "Amazon Transcribe"
      ],
      "answer": "A",
      "explanation": "Amazon Comprehend is a natural language processing (NLP) service that uses pre-trained machine learning to find insights in text. Its sentiment analysis classifies text as positive, negative, neutral, or mixed, so the company can analyze reviews without building or training models. Comprehend can also detect entities, key phrases, and the language of a text.",
      "rationales": {
        "A": "Correct: Comprehend analyzes text with NLP, and its sentiment analysis returns positive, negative, neutral, or mixed.",
        "B": "Wrong: Amazon Polly converts text into lifelike speech; it does not analyze the opinion that the text expresses.",
        "C": "Wrong: Amazon Rekognition analyzes images and videos, for example to detect objects or faces, not the sentiment of written text.",
        "D": "Wrong: Amazon Transcribe converts speech in audio into text; these reviews are already written text."
      },
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS artificial intelligence and machine learning (AI/ML) services and analytics services",
      "difficulty": "medium",
      "source": "Amazon Comprehend Developer Guide – Sentiment; exam guide Task Statement 3.7"
    },
    {
      "stem": "A company wants to define its AWS infrastructure in template files so that it can provision the same resources repeatedly and consistently in multiple AWS accounts and Regions. Which AWS service will meet these requirements?",
      "options": [
        "Amazon CloudWatch",
        "AWS Trusted Advisor",
        "AWS Config",
        "AWS CloudFormation"
      ],
      "answer": "D",
      "explanation": "AWS CloudFormation is an infrastructure as code (IaC) service: the company describes its resources in JSON or YAML templates, and CloudFormation creates and configures them together as a stack in the right order. Because the same template produces the same resources every time, deployments are repeatable and consistent, and CloudFormation StackSets can deploy a template across multiple accounts and Regions.",
      "rationales": {
        "A": "Wrong: CloudWatch monitors resources and applications with metrics, logs, and alarms; it does not provision infrastructure.",
        "B": "Wrong: Trusted Advisor checks an account against best practices and makes recommendations; it does not create resources.",
        "C": "Wrong: AWS Config records and evaluates resource configurations, but it does not provision resources from templates.",
        "D": "Correct: CloudFormation provisions resources from templates as stacks, and StackSets extend this across accounts and Regions."
      },
      "topic": "Cloud Technology and Services",
      "subtopic": "Define methods of deploying and operating in the AWS Cloud",
      "difficulty": "easy",
      "source": "AWS CloudFormation User Guide – What is AWS CloudFormation?; exam guide Task Statement 3.1"
    },
    {
      "stem": "A company has a workload that will run continuously for the next 3 years at a steady level of usage. The company wants a large discount compared with On-Demand pricing. During those 3 years, the company expects to change Amazon EC2 instance families, move part of the workload to another AWS Region, and run some of the workload on AWS Lambda. Which pricing model will meet these requirements?",
      "options": [
        "EC2 Instance Savings Plans",
        "Compute Savings Plans",
        "Standard Reserved Instances",
        "Spot Instances"
      ],
      "answer": "B",
      "explanation": "With a Compute Savings Plan, the company commits to a consistent amount of compute usage, measured in dollars per hour, for a 1-year or 3-year term. The discount applies automatically to EC2 usage regardless of instance family, size, Availability Zone, Region, operating system, or tenancy, and it also applies to AWS Lambda usage. That flexibility makes it the only option here that fits every planned change while still giving a large discount.",
      "rationales": {
        "A": "Wrong: EC2 Instance Savings Plans apply to one instance family in one Region and do not cover Lambda, so they block the planned changes.",
        "B": "Correct: Compute Savings Plans discount steady usage across instance families, sizes, and Regions, and also cover Lambda usage.",
        "C": "Wrong: Standard Reserved Instances cannot be changed to another instance family or Region, and they do not apply to Lambda.",
        "D": "Wrong: Spot Instances can be interrupted at short notice, so they do not suit a steady workload that must run continuously."
      },
      "topic": "Billing, Pricing, and Support",
      "subtopic": "Compare AWS pricing models",
      "difficulty": "hard",
      "source": "Savings Plans User Guide – Compute Savings Plans and EC2 Instance Savings Plans; exam guide Task Statement 4.1"
    },
    {
      "stem": "A company wants to receive an email notification when its forecasted AWS costs for the current month are expected to exceed a specific amount. Which AWS service or feature will meet this requirement?",
      "options": [
        "AWS Cost Explorer",
        "AWS Pricing Calculator",
        "AWS Budgets",
        "AWS Cost and Usage Report"
      ],
      "answer": "C",
      "explanation": "AWS Budgets lets a company set a custom budget for cost or usage and receive alerts by email or Amazon SNS when actual or forecasted amounts exceed a threshold. Alerting on the forecast warns the company before the overspend happens, while there is still time to act. Budgets can also run budget actions, such as applying a restrictive IAM policy, when a threshold is reached.",
      "rationales": {
        "A": "Wrong: Cost Explorer visualizes and forecasts costs for analysis, but threshold alerts on a budget are set up in AWS Budgets.",
        "B": "Wrong: the Pricing Calculator estimates the cost of planned architectures before deployment; it does not monitor actual spending.",
        "C": "Correct: AWS Budgets sends alerts when actual or forecasted costs exceed a threshold that the company sets.",
        "D": "Wrong: the Cost and Usage Report delivers detailed billing data files for analysis; it does not send threshold alerts."
      },
      "topic": "Billing, Pricing, and Support",
      "subtopic": "Understand resources for billing, budget, and cost management",
      "difficulty": "medium",
      "source": "AWS Cost Management User Guide – Managing your costs with AWS Budgets; exam guide Task Statement 4.2"
    }
  ]
}
```
