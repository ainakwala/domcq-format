```json
{
  "format": "domcq/1",
  "exam": "aws-clf",
  "set": "AWS Certified Cloud Practitioner practice – Four-domain mixed set",
  "questions": [
    {
      "stem": "A retail company's website traffic rises sharply for a few weeks each year. In its data center, the company buys enough servers for the expected peak, and most of them sit idle for the rest of the year. On AWS, the company can add and remove capacity as demand changes. Which advantage of cloud computing does this describe?",
      "options": [
        "Benefit from massive economies of scale",
        "Go global in minutes",
        "Stop guessing capacity",
        "Increase speed and agility"
      ],
      "answer": "C",
      "explanation": "Stop guessing capacity means you no longer have to predict infrastructure needs before you deploy. When capacity is bought up front, companies either pay for idle resources or run short at peak times; in the AWS Cloud they can scale up and down as needed within minutes. Economies of scale refer to lower prices that result from AWS's aggregate usage, and going global refers to deploying in multiple Regions quickly.",
      "topic": "Cloud Concepts",
      "subtopic": "Define the benefits of the AWS Cloud",
      "difficulty": "easy",
      "source": "CLF-C02 Task 1.1: Define the benefits of the AWS Cloud; Overview of Amazon Web Services whitepaper – Six advantages of cloud computing"
    },
    {
      "stem": "A company wants to reduce the environmental impact of its workloads on AWS. It plans to maximize resource utilization, use managed services, and adopt more efficient hardware and software offerings as they become available. Which pillar of the AWS Well-Architected Framework focuses on these goals?",
      "options": [
        "Performance efficiency",
        "Cost optimization",
        "Operational excellence",
        "Sustainability"
      ],
      "answer": "D",
      "explanation": "The sustainability pillar focuses on minimizing the environmental impacts of running cloud workloads. Its design principles include maximizing utilization, anticipating and adopting new, more efficient hardware and software offerings, and using managed services to reduce the infrastructure needed. Cost optimization and performance efficiency can benefit from similar practices, but their focus is on spending and on meeting performance requirements, not on environmental impact.",
      "topic": "Cloud Concepts",
      "subtopic": "Identify design principles of the AWS Cloud",
      "difficulty": "medium",
      "source": "CLF-C02 Task 1.2; AWS Well-Architected Framework – Sustainability pillar design principles"
    },
    {
      "stem": "A company is using the AWS Cloud Adoption Framework (AWS CAF) to plan its migration to AWS. Which AWS CAF perspectives focus on technical capabilities? (Choose TWO.)",
      "options": [
        "Business",
        "Platform",
        "People",
        "Governance",
        "Operations"
      ],
      "answer": "BE",
      "explanation": "AWS CAF organizes its capabilities into six perspectives. The Business, People and Governance perspectives focus on business capabilities, while the Platform, Security and Operations perspectives focus on technical capabilities. The Platform perspective covers building an enterprise-grade, scalable hybrid cloud platform, and the Operations perspective covers delivering cloud services at a level that meets the needs of the business.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand the benefits of and strategies for migration to the AWS Cloud",
      "difficulty": "hard",
      "source": "CLF-C02 Task 1.3; An Overview of the AWS Cloud Adoption Framework – the six perspectives"
    },
    {
      "stem": "A company is migrating an application to AWS. It will move the application servers to Amazon EC2 without changes. It will also move its self-managed MySQL database to Amazon RDS for MySQL so that AWS handles backups and patching, without changing the application's core architecture. Which migration strategy is the company using for the database?",
      "options": [
        "Rehost",
        "Replatform",
        "Repurchase",
        "Refactor"
      ],
      "answer": "B",
      "explanation": "Replatforming, sometimes called lift, tinker, and shift, moves a workload to the cloud with a few optimizations, such as moving to a managed database service, while keeping the core architecture. Rehosting would move the database as it is, for example onto an EC2 instance. Refactoring would re-architect the application to use cloud-native features, and repurchasing would replace it with a different product, such as a SaaS offering.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand the benefits of and strategies for migration to the AWS Cloud",
      "difficulty": "medium",
      "source": "CLF-C02 Task 1.3; AWS Prescriptive Guidance – migration strategies (the 7 Rs)"
    },
    {
      "stem": "A company reviews its Amazon EC2 usage and finds that many instances run at less than 10% CPU utilization. To lower costs, the company plans to move these workloads to smaller instance types that still meet their performance requirements. Which cloud economics concept does this describe?",
      "options": [
        "Rightsizing",
        "Bring your own license (BYOL)",
        "Consolidated billing",
        "Horizontal scaling"
      ],
      "answer": "A",
      "explanation": "Rightsizing is the process of matching instance types and sizes to a workload's performance and capacity requirements at the lowest possible cost. Because cloud resources can be changed at any time, companies can review utilization data and move over-provisioned workloads to smaller resources. Horizontal scaling changes the number of instances rather than their size.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand concepts of cloud economics",
      "difficulty": "easy",
      "source": "CLF-C02 Task 1.4: Understand concepts of cloud economics – the concept of rightsizing"
    },
    {
      "stem": "A company runs its application on Amazon EC2 instances. According to the AWS shared responsibility model, which tasks are the company's responsibility? (Choose TWO.)",
      "options": [
        "Maintaining the physical security of the data centers",
        "Applying patches to the guest operating system",
        "Maintaining the virtualization layer of the hosts",
        "Configuring security group rules for the instances",
        "Replacing failed storage hardware in the hosts"
      ],
      "answer": "BD",
      "explanation": "Amazon EC2 is an infrastructure as a service (IaaS) offering, so the customer manages the guest operating system, including updates and security patches, any application software, and the configuration of the AWS-provided security group firewall. AWS is responsible for security of the cloud, which includes the physical facilities, the host hardware and the virtualization infrastructure.",
      "topic": "Security and Compliance",
      "subtopic": "Understand the AWS shared responsibility model",
      "difficulty": "medium",
      "source": "CLF-C02 Task 2.1; AWS shared responsibility model – customer responsibilities for Amazon EC2"
    },
    {
      "stem": "A company's compliance team must give an external auditor copies of AWS's own security and compliance reports, such as AWS SOC reports and ISO certifications. Which AWS service or feature will meet this requirement?",
      "options": [
        "AWS Config",
        "Amazon Inspector",
        "AWS Artifact",
        "AWS Trusted Advisor"
      ],
      "answer": "C",
      "explanation": "AWS Artifact is a self-service portal that provides on-demand access to AWS security and compliance reports, such as SOC and PCI reports and ISO certifications, and to select online agreements. AWS Config records and evaluates the configuration of your own resources, Amazon Inspector scans your workloads for vulnerabilities, and Trusted Advisor gives best-practice recommendations; none of them supply AWS's audit reports.",
      "topic": "Security and Compliance",
      "subtopic": "Understand AWS Cloud security, governance, and compliance concepts",
      "difficulty": "easy",
      "source": "CLF-C02 Task 2.2; AWS Artifact – accessing AWS compliance reports"
    },
    {
      "stem": "A company has just created a new AWS account. Which actions follow AWS best practices for protecting the AWS account root user? (Choose TWO.)",
      "options": [
        "Enable multi-factor authentication (MFA) for the root user",
        "Create access keys for the root user to use with the AWS CLI",
        "Use the root user only for the tasks that require it",
        "Share the root user password with every administrator",
        "Attach an IAM policy to the root user to limit its permissions"
      ],
      "answer": "AC",
      "explanation": "The root user has complete, unrestricted access to all resources and billing in the account, so AWS recommends protecting it with MFA and using it only for the few tasks that require root user credentials. Daily work should be done with other identities, such as users in IAM Identity Center. Root user access keys should not be created, the credentials should not be shared, and IAM policies cannot be used to restrict the root user's permissions.",
      "topic": "Security and Compliance",
      "subtopic": "Identify AWS access management capabilities",
      "difficulty": "medium",
      "source": "CLF-C02 Task 2.3; IAM User Guide – root user best practices"
    },
    {
      "stem": "An application running on an Amazon EC2 instance needs to read objects from an Amazon S3 bucket. The company wants to avoid storing long-term credentials on the instance. How can the company grant this access in the most secure way?",
      "options": [
        "Create an IAM user for the application and save its access keys in a configuration file",
        "Attach an IAM role that has the required S3 permissions to the EC2 instance",
        "Make the S3 bucket public so that the application can read the objects",
        "Add the instance's security group to the S3 bucket's access control list"
      ],
      "answer": "B",
      "explanation": "An IAM role attached to an EC2 instance through an instance profile provides temporary security credentials that are rotated automatically, so no long-term access keys need to be stored on the instance. The role's policy can be limited to only the S3 actions the application needs, which follows the principle of least privilege. Making the bucket public exposes the data to everyone, and security groups control network traffic, not S3 permissions.",
      "topic": "Security and Compliance",
      "subtopic": "Identify AWS access management capabilities",
      "difficulty": "medium",
      "source": "CLF-C02 Task 2.3; IAM User Guide – using an IAM role to grant permissions to applications on Amazon EC2 instances"
    },
    {
      "stem": "A company wants to protect its public web application from common web exploits, such as SQL injection and cross-site scripting, by filtering HTTP and HTTPS requests. Which AWS service will meet these requirements?",
      "options": [
        "AWS WAF",
        "AWS Shield Standard",
        "Amazon GuardDuty",
        "Amazon Inspector"
      ],
      "answer": "A",
      "explanation": "AWS WAF is a web application firewall that lets you create rules to allow, block or count web requests based on conditions such as IP addresses, headers, and patterns that indicate SQL injection or cross-site scripting. Shield Standard protects against common network and transport layer DDoS attacks, GuardDuty detects threats by analyzing logs and events, and Inspector scans workloads for software vulnerabilities; none of them filter application-layer requests in this way.",
      "topic": "Security and Compliance",
      "subtopic": "Identify components and resources for security",
      "difficulty": "easy",
      "source": "CLF-C02 Task 2.4; AWS WAF Developer Guide – what AWS WAF is"
    },
    {
      "stem": "A company's security policy requires that its encryption keys be generated and stored in dedicated, single-tenant hardware security modules (HSMs) in the AWS Cloud that only the company controls. Which AWS service will meet these requirements?",
      "options": [
        "AWS KMS with AWS managed keys",
        "AWS Secrets Manager",
        "AWS Certificate Manager",
        "AWS CloudHSM"
      ],
      "answer": "D",
      "explanation": "AWS CloudHSM provides dedicated, single-tenant HSMs that you access from your own VPC, and you control the keys and the HSM users. AWS KMS is a managed, multi-tenant service in which AWS operates the HSMs, and AWS managed keys are created and managed by AWS on your behalf for use with AWS services. Secrets Manager stores and rotates secrets such as database credentials, and Certificate Manager provisions and manages TLS certificates.",
      "topic": "Security and Compliance",
      "subtopic": "Identify components and resources for security",
      "difficulty": "hard",
      "source": "CLF-C02 Task 2.4; AWS CloudHSM User Guide – what AWS CloudHSM is"
    },
    {
      "stem": "A company is deploying a web application in one AWS Region. The application must keep running if a single data center fails, and its components need low-latency network connections to each other. Which deployment approach will meet these requirements?",
      "options": [
        "Deploy the application across multiple Availability Zones in the Region",
        "Deploy the application on larger instances in a single Availability Zone",
        "Deploy the application at edge locations by using Amazon CloudFront",
        "Deploy the application in one Availability Zone with daily snapshots"
      ],
      "answer": "A",
      "explanation": "Each Region contains multiple Availability Zones, and each AZ consists of one or more discrete data centers with redundant power, networking and connectivity. AZs are physically separated so that a failure in one is unlikely to affect the others, yet they are connected by high-bandwidth, low-latency networking, so spreading the application across AZs gives both fault tolerance and fast communication between components. A single AZ remains a single point of failure, however large the instances or frequent the snapshots.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Define the AWS global infrastructure",
      "difficulty": "medium",
      "source": "CLF-C02 Task 3.2: Define the AWS global infrastructure – Regions and Availability Zones"
    },
    {
      "stem": "A company wants to run code in response to events, such as a file being uploaded to Amazon S3, without provisioning or managing servers. The company wants to pay only for the compute time that the code uses. Which AWS service will meet these requirements?",
      "options": [
        "Amazon EC2",
        "Amazon Lightsail",
        "AWS Lambda",
        "AWS Elastic Beanstalk"
      ],
      "answer": "C",
      "explanation": "AWS Lambda is a serverless compute service that runs code in response to events from many AWS services, including S3 object uploads, and scales automatically. You do not provision or manage servers, and you are charged based on the number of requests and the duration your code runs. EC2 and Lightsail require you to run and pay for instances, and Elastic Beanstalk deploys applications onto instances that you pay for while they run.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS compute services",
      "difficulty": "easy",
      "source": "CLF-C02 Task 3.3: Identify AWS compute services – serverless compute with AWS Lambda"
    },
    {
      "stem": "A company is building a mobile game that must store player session data. The company needs a fully managed, serverless NoSQL key-value database that delivers single-digit millisecond performance at any scale. Which AWS service will meet these requirements?",
      "options": [
        "Amazon RDS",
        "Amazon DynamoDB",
        "Amazon Redshift",
        "Amazon Aurora"
      ],
      "answer": "B",
      "explanation": "Amazon DynamoDB is a fully managed, serverless NoSQL database that supports key-value and document data models and provides single-digit millisecond performance at any scale. Amazon RDS and Amazon Aurora are managed relational databases, and Amazon Redshift is a data warehouse designed for analytics, not for low-latency key-value lookups.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS database services",
      "difficulty": "easy",
      "source": "CLF-C02 Task 3.4: Identify AWS database services – Amazon DynamoDB"
    },
    {
      "stem": "A company wants to add a layer of network security in its VPC that allows or denies traffic at the subnet level. Return traffic must be explicitly allowed by rules because the filtering is stateless. Which VPC feature will meet these requirements?",
      "options": [
        "Security group",
        "Internet gateway",
        "Route table",
        "Network ACL"
      ],
      "answer": "D",
      "explanation": "A network ACL is associated with a subnet and evaluates inbound and outbound traffic separately, so it is stateless: return traffic must be allowed by its own rule. Network ACLs support both allow and deny rules. A security group, by contrast, acts at the instance (network interface) level, is stateful, and supports only allow rules.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS network services",
      "difficulty": "medium",
      "source": "CLF-C02 Task 3.5: Identify AWS network services – security groups and network ACLs"
    },
    {
      "stem": "A company stores medical images that must be kept for years. The images are accessed about once a quarter, but when a doctor requests one it must be retrieved within milliseconds. The company wants the lowest storage cost that meets these requirements. Which Amazon S3 storage class should the company use?",
      "options": [
        "S3 Standard",
        "S3 Standard-Infrequent Access (S3 Standard-IA)",
        "S3 Glacier Instant Retrieval",
        "S3 Glacier Deep Archive"
      ],
      "answer": "C",
      "explanation": "S3 Glacier Instant Retrieval is designed for long-lived data that is rarely accessed, about once a quarter, but needs millisecond retrieval, and it offers the lowest storage cost for that access pattern. S3 Standard-IA also provides millisecond access but has a higher storage price, so it suits data that is accessed somewhat more often. S3 Glacier Deep Archive has the lowest storage cost of all the classes, but its retrievals take hours.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS storage services",
      "difficulty": "hard",
      "source": "CLF-C02 Task 3.6: Identify AWS storage services – Amazon S3 storage classes"
    },
    {
      "stem": "A company records its customer support calls. It wants to convert the recordings to text and then analyze the text to determine whether each customer's sentiment is positive, negative, neutral, or mixed. Which combination of AWS services will meet these requirements? (Choose TWO.)",
      "options": [
        "Amazon Transcribe",
        "Amazon Polly",
        "Amazon Rekognition",
        "Amazon Comprehend",
        "Amazon Lex"
      ],
      "answer": "AD",
      "explanation": "Amazon Transcribe uses automatic speech recognition to convert speech in audio files into text. Amazon Comprehend uses natural language processing to find insights in text, including sentiment, key phrases and entities. Amazon Polly does the opposite of Transcribe by turning text into lifelike speech, Rekognition analyzes images and video, and Lex builds conversational chatbot interfaces.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS artificial intelligence and machine learning (AI/ML) services and analytics services",
      "difficulty": "medium",
      "source": "CLF-C02 Task 3.7: Identify AWS AI/ML services and analytics services – Amazon Transcribe and Amazon Comprehend"
    },
    {
      "stem": "A company wants to define its AWS infrastructure in template files so that it can provision identical environments repeatedly and consistently in several AWS Regions. Which AWS service will meet these requirements?",
      "options": [
        "AWS Config",
        "AWS CloudFormation",
        "Amazon CloudWatch",
        "AWS Trusted Advisor"
      ],
      "answer": "B",
      "explanation": "AWS CloudFormation is an infrastructure as code service: you describe resources in a JSON or YAML template, and CloudFormation provisions and configures them together as a stack. Because the same template can be deployed many times, including across accounts and Regions, environments are created consistently and without manual steps. AWS Config records and evaluates resource configurations, and CloudWatch monitors resources, but neither provisions infrastructure from templates.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Define methods of deploying and operating in the AWS Cloud",
      "difficulty": "medium",
      "source": "CLF-C02 Task 3.1: Define methods of deploying and operating in the AWS Cloud – infrastructure as code with AWS CloudFormation"
    },
    {
      "stem": "A company runs a compute workload 24 hours a day that cannot tolerate interruptions, and it will keep running the workload for 3 years. During that time, the company expects to change Amazon EC2 instance families and AWS Regions and to move part of the workload to AWS Fargate. Which pricing model will meet these requirements at the lowest cost?",
      "options": [
        "On-Demand Instances",
        "Spot Instances",
        "Compute Savings Plans",
        "EC2 Instance Savings Plans"
      ],
      "answer": "C",
      "explanation": "Compute Savings Plans provide lower prices in exchange for a commitment to a consistent amount of compute usage, measured in dollars per hour, for a 1-year or 3-year term. The discount applies automatically regardless of instance family, size, Availability Zone, Region, operating system or tenancy, and it also covers AWS Fargate and AWS Lambda usage. EC2 Instance Savings Plans are tied to one instance family in one Region, Spot Instances can be interrupted, and On-Demand Instances offer no long-term discount.",
      "topic": "Billing, Pricing, and Support",
      "subtopic": "Compare AWS pricing models",
      "difficulty": "hard",
      "source": "CLF-C02 Task 4.1: Compare AWS pricing models – Savings Plans (Compute Savings Plans and EC2 Instance Savings Plans)"
    },
    {
      "stem": "A company's finance team wants to receive an email alert when the company's forecasted AWS costs for the month are expected to exceed a set amount. Which AWS service or feature will meet this requirement?",
      "options": [
        "AWS Budgets",
        "AWS Pricing Calculator",
        "AWS Cost and Usage Report",
        "AWS Cost Explorer"
      ],
      "answer": "A",
      "explanation": "AWS Budgets lets you set custom cost and usage budgets and sends alerts, for example by email or Amazon SNS, when actual or forecasted costs exceed your thresholds. Cost Explorer is used to visualize and analyze costs and usage over time, including forecasts, but it does not send alerts when a budget threshold is crossed. AWS Pricing Calculator estimates the cost of planned workloads, and the Cost and Usage Report delivers detailed billing data for analysis.",
      "topic": "Billing, Pricing, and Support",
      "subtopic": "Understand resources for billing, budget, and cost management",
      "difficulty": "medium",
      "source": "CLF-C02 Task 4.2: Understand resources for billing, budget, and cost management – AWS Budgets"
    }
  ]
}
```
