```json
{
  "format": "domcq/1",
  "exam": "aws-clf",
  "set": "AWS Certified Cloud Practitioner practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "An online retailer experiences large, unpredictable spikes in website traffic during flash sales. The company wants compute capacity to increase automatically during each spike and decrease when traffic returns to normal, so that it does not pay for idle resources. Which benefit of the AWS Cloud does this describe?",
      "options": [
        "High availability",
        "Fault tolerance",
        "Elasticity",
        "Economies of scale",
        "Global reach"
      ],
      "answer": "C",
      "explanation": "Elasticity is the ability to acquire resources when you need them and release them when you no longer need them, so capacity tracks demand instead of being sized for the peak. On AWS this is commonly achieved with services such as Amazon EC2 Auto Scaling. High availability and fault tolerance are about keeping a workload running through failures, not about matching capacity to changing demand.",
      "topic": "Cloud Concepts",
      "subtopic": "Define the benefits of the AWS Cloud",
      "difficulty": "easy",
      "source": "CLF-C02 Exam Guide, Domain 1, Task 1.1: Define the benefits of the AWS Cloud (elasticity)"
    },
    {
      "stem": "A company reviews its Amazon EC2 usage and finds that many instances run at less than 10% average CPU utilization. The company plans to move these workloads to smaller, less expensive instance types that still meet their performance requirements. Which cloud economics concept does this describe?",
      "options": [
        "Rightsizing",
        "Economies of scale",
        "Bring your own license (BYOL)",
        "Capacity reservation"
      ],
      "answer": "A",
      "explanation": "Rightsizing is the practice of matching instance types and sizes to a workload's actual performance and capacity requirements at the lowest possible cost. Consistently low utilization is the classic signal that resources are overprovisioned. Because AWS lets you change instance types at any time, rightsizing is an ongoing activity rather than a one-time sizing decision made before buying hardware, as it is on premises.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand concepts of cloud economics",
      "difficulty": "easy",
      "source": "CLF-C02 Exam Guide, Task 1.4: Understand concepts of cloud economics (rightsizing)"
    },
    {
      "stem": "A company is reviewing a workload against the AWS Well-Architected Framework. The review checks whether the workload automatically recovers from failure, whether the team regularly tests its recovery procedures, and whether the workload scales horizontally to increase aggregate availability. Which pillar of the framework is the company reviewing?",
      "options": [
        "Operational excellence",
        "Performance efficiency",
        "Cost optimization",
        "Reliability",
        "Security"
      ],
      "answer": "D",
      "explanation": "The Reliability pillar covers a workload's ability to perform its intended function correctly and consistently, and to recover quickly from failures. Its design principles include automatically recovering from failure, testing recovery procedures, and scaling horizontally to increase aggregate workload availability. Performance efficiency, by contrast, is about using computing resources efficiently to meet requirements as demand and technologies change.",
      "topic": "Cloud Concepts",
      "subtopic": "Identify design principles of the AWS Cloud",
      "difficulty": "medium",
      "source": "AWS Well-Architected Framework, Reliability pillar: design principles; CLF-C02 Task 1.2"
    },
    {
      "stem": "Which perspectives of the AWS Cloud Adoption Framework (AWS CAF) focus on technical capabilities? (Choose TWO.)",
      "options": [
        "Business",
        "People",
        "Platform",
        "Governance",
        "Operations"
      ],
      "answer": "CE",
      "explanation": "The AWS CAF organizes its guidance into six perspectives: Business, People and Governance focus on business capabilities, while Platform, Security and Operations focus on technical capabilities. The Platform perspective helps build an enterprise-grade, scalable cloud platform, and the Operations perspective helps ensure that cloud services are delivered at the level the business needs. Knowing which perspectives are business and which are technical helps an organization involve the right stakeholders in its cloud adoption.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand the benefits of and strategies for migration to the AWS Cloud",
      "difficulty": "medium",
      "source": "AWS Cloud Adoption Framework (AWS CAF) overview: the six perspectives; CLF-C02 Task 1.3"
    },
    {
      "stem": "A company plans to migrate a self-managed MySQL database from an on-premises server to Amazon RDS for MySQL. The company will not change the application's code or core architecture, but it wants to reduce the time its staff spends on routine database administration. Which migration strategy is the company following?",
      "options": [
        "Rehost",
        "Replatform",
        "Refactor",
        "Repurchase",
        "Relocate"
      ],
      "answer": "B",
      "explanation": "Replatforming, often described as lift, tinker, and shift, moves an application to the cloud with a few targeted optimizations, such as moving a self-managed database to a managed service like Amazon RDS, without changing the core architecture. Rehosting would move the database as-is onto Amazon EC2, keeping the same administration work. Refactoring would re-architect the application to use cloud-native features, which this plan explicitly avoids.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand the benefits of and strategies for migration to the AWS Cloud",
      "difficulty": "hard",
      "source": "AWS Prescriptive Guidance: migration strategies (the 7 Rs); CLF-C02 Task 1.3"
    },
    {
      "stem": "A company has just created a new AWS account. Which action follows AWS best practices for protecting the account's root user?",
      "options": [
        "Create access keys for the root user to use in automation scripts",
        "Share the root user password with each member of the operations team",
        "Enable MFA on the root user and use it only for tasks that require it",
        "Use the root user for daily administration instead of IAM identities"
      ],
      "answer": "C",
      "explanation": "The root user has complete access to all AWS services and resources in the account, so AWS recommends protecting it with multi-factor authentication and using it only for the few tasks that specifically require root credentials. Everyday work should be done with IAM roles, IAM users or IAM Identity Center users that have only the permissions they need. Root user access keys should not be created, because they would give programmatic access with full control of the account.",
      "topic": "Security and Compliance",
      "subtopic": "Identify AWS access management capabilities",
      "difficulty": "easy",
      "source": "IAM User Guide: root user best practices; CLF-C02 Task 2.3: Identify AWS access management capabilities"
    },
    {
      "stem": "A company runs a web application on Amazon EC2 instances. According to the AWS shared responsibility model, which tasks are the responsibility of the company? (Choose TWO.)",
      "options": [
        "Patching the guest operating system on the instances",
        "Maintaining the hypervisor that runs the instances",
        "Replacing failed disks in the underlying physical hosts",
        "Configuring security group rules for the instances",
        "Securing the facilities where the servers are located"
      ],
      "answer": "AD",
      "explanation": "Amazon EC2 is an infrastructure as a service (IaaS) offering, so the customer is responsible for security in the cloud from the guest operating system upward: OS patches, installed software, data, and firewall configuration such as security groups. AWS is responsible for security of the cloud, which includes the physical facilities, the host hardware and the virtualization layer. For more managed services, AWS takes on more of these tasks, so the split depends on the service being used.",
      "topic": "Security and Compliance",
      "subtopic": "Understand the AWS shared responsibility model",
      "difficulty": "medium",
      "source": "AWS shared responsibility model; CLF-C02 Task 2.1: Understand the AWS shared responsibility model"
    },
    {
      "stem": "An external auditor asks a company for AWS's own SOC reports and ISO certifications as evidence during a compliance review. Which AWS service will meet this requirement?",
      "options": [
        "AWS Config",
        "Amazon Inspector",
        "AWS Trusted Advisor",
        "AWS CloudTrail",
        "AWS Artifact"
      ],
      "answer": "E",
      "explanation": "AWS Artifact is a self-service portal that provides on-demand access to AWS's security and compliance documents, such as SOC reports, ISO certifications and PCI reports, and to certain agreements with AWS. These documents show auditors how AWS meets its side of the shared responsibility model. Services such as AWS Config and AWS CloudTrail record information about the customer's own resources and activity, not AWS's third-party audit reports.",
      "topic": "Security and Compliance",
      "subtopic": "Understand AWS Cloud security, governance, and compliance concepts",
      "difficulty": "easy",
      "source": "AWS Artifact User Guide: what is AWS Artifact; CLF-C02 Task 2.2: security, governance, and compliance concepts"
    },
    {
      "stem": "A company wants a managed service that continuously monitors its AWS accounts for malicious activity, such as unusual API calls or communication with known malicious IP addresses, by analyzing AWS CloudTrail events, VPC Flow Logs, and DNS logs. Which AWS service will meet these requirements?",
      "options": [
        "Amazon Inspector",
        "Amazon GuardDuty",
        "Amazon Macie",
        "AWS Shield",
        "AWS WAF"
      ],
      "answer": "B",
      "explanation": "Amazon GuardDuty is a threat detection service that applies threat intelligence, machine learning and anomaly detection to data sources such as CloudTrail events, VPC Flow Logs and DNS logs to identify suspicious activity, without the customer deploying agents or managing infrastructure. Amazon Inspector scans workloads for software vulnerabilities and unintended network exposure, and Amazon Macie discovers sensitive data in Amazon S3. AWS Shield and AWS WAF protect applications from DDoS attacks and malicious web requests rather than analyzing account activity.",
      "topic": "Security and Compliance",
      "subtopic": "Identify components and resources for security",
      "difficulty": "medium",
      "source": "Amazon GuardDuty User Guide: what is GuardDuty; CLF-C02 Task 2.4: Identify components and resources for security"
    },
    {
      "stem": "A company uses AWS Organizations to manage 40 member accounts. The security team must prevent every user and role in the member accounts, including each account's root user, from stopping or deleting AWS CloudTrail trails, regardless of the IAM permissions granted inside those accounts. Which AWS service or feature will meet this requirement?",
      "options": [
        "IAM permissions boundaries",
        "AWS IAM Identity Center permission sets",
        "Security groups applied in each VPC",
        "Service control policies (SCPs)",
        "AWS Config managed rules"
      ],
      "answer": "D",
      "explanation": "Service control policies (SCPs) are a feature of AWS Organizations that set the maximum permissions available to principals in member accounts of an organization or organizational unit. An SCP that denies actions such as cloudtrail:StopLogging and cloudtrail:DeleteTrail applies to every user and role in the affected member accounts, including the root user, and no IAM policy inside those accounts can override it. Permissions boundaries apply only to the individual IAM users or roles they are attached to, and AWS Config rules detect noncompliant configurations rather than preventing the action.",
      "topic": "Security and Compliance",
      "subtopic": "Identify AWS access management capabilities",
      "difficulty": "hard",
      "source": "AWS Organizations User Guide: service control policies (SCPs); CLF-C02 Task 2.3: Identify AWS access management capabilities"
    },
    {
      "stem": "A company's applications connect to an Amazon RDS database by using a user name and password. The company wants to stop storing these credentials in application configuration files and wants the password to be rotated automatically on a schedule. Which AWS service will meet these requirements?",
      "options": [
        "AWS Secrets Manager",
        "AWS Key Management Service (AWS KMS)",
        "AWS Certificate Manager (ACM)",
        "Amazon Cognito",
        "AWS IAM Access Analyzer"
      ],
      "answer": "A",
      "explanation": "AWS Secrets Manager stores secrets such as database credentials and API keys, lets applications retrieve them at runtime through an API call instead of hardcoding them, and can rotate them automatically on a schedule, with built-in rotation support for Amazon RDS. AWS KMS creates and controls the encryption keys that protect data, and Secrets Manager uses it to encrypt secrets, but KMS does not store or rotate database passwords. ACM manages SSL/TLS certificates, and Amazon Cognito handles sign-up and sign-in for application end users.",
      "topic": "Security and Compliance",
      "subtopic": "Identify components and resources for security",
      "difficulty": "medium",
      "source": "AWS Secrets Manager User Guide: rotating secrets; CLF-C02 Task 2.4: Identify components and resources for security"
    },
    {
      "stem": "Which component of the AWS global infrastructure consists of one or more discrete data centers with redundant power, networking, and connectivity, located within an AWS Region?",
      "options": [
        "Edge location",
        "Availability Zone",
        "AWS Local Zone",
        "AWS Wavelength Zone"
      ],
      "answer": "B",
      "explanation": "An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking and connectivity in an AWS Region, physically separated from the other AZs in that Region. Because AZs are isolated from each other's failures but connected by low-latency links, deploying an application across multiple AZs is the standard way to make it highly available. Edge locations, by contrast, are sites used by services such as Amazon CloudFront to deliver content closer to users.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Define the AWS global infrastructure",
      "difficulty": "easy",
      "source": "AWS global infrastructure: Regions and Availability Zones; CLF-C02 Task 3.2: Define the AWS global infrastructure"
    },
    {
      "stem": "A company wants to run a short piece of code each time a file is uploaded to an Amazon S3 bucket. The company does not want to provision or manage any servers and wants to pay only for the compute time the code uses. Which AWS service will meet these requirements?",
      "options": [
        "Amazon EC2 instances",
        "AWS Elastic Beanstalk",
        "Amazon Lightsail",
        "AWS Lambda",
        "Amazon ECS on EC2"
      ],
      "answer": "D",
      "explanation": "AWS Lambda is a serverless, event-driven compute service: it runs code in response to events such as an object being uploaded to Amazon S3, scales automatically, and charges only for the number of requests and the compute time used. The other options all rely on servers that the customer provisions or that keep running between events, either directly (Amazon EC2, Amazon Lightsail, Amazon ECS on EC2) or behind the scenes (AWS Elastic Beanstalk launches EC2 instances for the application).",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS compute services",
      "difficulty": "easy",
      "source": "AWS Lambda Developer Guide: what is AWS Lambda; CLF-C02 Task 3.3: Identify AWS compute services"
    },
    {
      "stem": "A mobile gaming company needs a fully managed, serverless NoSQL key-value database that can handle millions of requests per second with consistent single-digit millisecond latency. Which AWS service will meet these requirements?",
      "options": [
        "Amazon RDS for PostgreSQL",
        "Amazon Redshift",
        "Amazon DynamoDB",
        "Amazon Neptune",
        "Amazon Aurora"
      ],
      "answer": "C",
      "explanation": "Amazon DynamoDB is a serverless NoSQL database that stores data as key-value and document items, scales automatically with no servers to manage, and delivers single-digit millisecond performance at any scale. Amazon RDS and Amazon Aurora are relational databases, Amazon Redshift is a data warehouse built for analytical queries, and Amazon Neptune is a graph database. Matching the data model and access pattern to the right purpose-built database is the core skill being tested here.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS database services",
      "difficulty": "medium",
      "source": "Amazon DynamoDB Developer Guide: what is Amazon DynamoDB; CLF-C02 Task 3.4: Identify AWS database services"
    },
    {
      "stem": "A company stores monthly financial reports in Amazon S3. The reports are accessed infrequently, roughly once a month, but must be retrievable within milliseconds when requested. The data must remain available if an entire Availability Zone is lost. Which S3 storage class is the MOST cost-effective choice for these requirements?",
      "options": [
        "S3 Standard",
        "S3 One Zone-Infrequent Access",
        "S3 Glacier Flexible Retrieval",
        "S3 Glacier Deep Archive",
        "S3 Standard-Infrequent Access"
      ],
      "answer": "E",
      "explanation": "S3 Standard-Infrequent Access is designed for data that is accessed less frequently but needs rapid, millisecond access when requested; it has a lower storage price than S3 Standard in exchange for a per-GB retrieval charge, and it stores data across multiple Availability Zones. S3 One Zone-Infrequent Access is cheaper but keeps data in a single AZ, so it does not meet the resilience requirement. The S3 Glacier Flexible Retrieval and S3 Glacier Deep Archive classes cost less to store but take minutes to hours to retrieve data.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS storage services",
      "difficulty": "medium",
      "source": "Amazon S3 User Guide: storage classes; CLF-C02 Task 3.6: Identify AWS storage services"
    },
    {
      "stem": "A company wants to connect its on-premises data center to its VPCs on AWS. The connection must be a dedicated private network connection that does not travel over the public internet and that provides consistent network performance. Which AWS service will meet these requirements?",
      "options": [
        "AWS Direct Connect",
        "AWS Site-to-Site VPN",
        "Amazon CloudFront",
        "Amazon Route 53",
        "AWS Global Accelerator"
      ],
      "answer": "A",
      "explanation": "AWS Direct Connect establishes a dedicated private network connection between an on-premises network and AWS through a Direct Connect location, so traffic bypasses the public internet and network performance is more consistent. AWS Site-to-Site VPN also connects on-premises networks to VPCs, but it sends encrypted traffic over the public internet, so its performance depends on internet conditions. Many companies use a Site-to-Site VPN as a quick-to-set-up or backup option alongside Direct Connect.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS network services",
      "difficulty": "medium",
      "source": "AWS Direct Connect User Guide: what is AWS Direct Connect; CLF-C02 Task 3.5: Identify AWS network services"
    },
    {
      "stem": "A company records customer support phone calls. It wants to convert each recording into text and then analyze that text to determine whether the customer's sentiment was positive, negative, neutral, or mixed. Which combination of AWS services will meet these requirements? (Choose TWO.)",
      "options": [
        "Amazon Polly",
        "Amazon Transcribe",
        "Amazon Rekognition",
        "Amazon Comprehend",
        "Amazon Translate"
      ],
      "answer": "BD",
      "explanation": "Amazon Transcribe uses automatic speech recognition to convert audio, such as recorded calls, into text. Amazon Comprehend is a natural language processing service that can then analyze that text, including detecting whether its sentiment is positive, negative, neutral or mixed. Amazon Polly does the opposite of Transcribe by turning text into lifelike speech, Amazon Rekognition analyzes images and video, and Amazon Translate converts text from one language to another.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS artificial intelligence and machine learning (AI/ML) services and analytics services",
      "difficulty": "hard",
      "source": "AWS AI services: Amazon Transcribe and Amazon Comprehend overviews; CLF-C02 Task 3.7: AI/ML and analytics services"
    },
    {
      "stem": "A development team wants to define the company's AWS infrastructure by writing code in TypeScript and Python, the same programming languages it uses for its applications, and then deploy that infrastructure repeatedly and consistently. Which AWS service or tool will meet these requirements?",
      "options": [
        "AWS CodeDeploy",
        "AWS CloudFormation",
        "AWS Cloud Development Kit (AWS CDK)",
        "AWS Elastic Beanstalk",
        "AWS Systems Manager"
      ],
      "answer": "C",
      "explanation": "The AWS CDK is an open-source framework for defining cloud infrastructure as code in familiar programming languages such as TypeScript, Python, Java and C#; it synthesizes that code into AWS CloudFormation templates and deploys them as stacks. AWS CloudFormation on its own also provides repeatable infrastructure as code, but its templates are written in JSON or YAML rather than a general-purpose programming language. AWS CodeDeploy automates application deployments to existing compute, and AWS Elastic Beanstalk deploys and manages applications rather than letting you model infrastructure in code.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Define methods of deploying and operating in the AWS Cloud",
      "difficulty": "hard",
      "source": "AWS CDK Developer Guide: what is the AWS CDK; CLF-C02 Task 3.1: Define methods of deploying and operating in the AWS Cloud"
    },
    {
      "stem": "A company has a compute workload that will run continuously for the next 3 years. The workload uses Amazon EC2 instances today, but the company expects to change instance families and AWS Regions and to move part of the workload to AWS Fargate and AWS Lambda. Which pricing model will provide a discount while keeping this flexibility?",
      "options": [
        "EC2 Instance Savings Plans",
        "Standard Reserved Instances",
        "Spot Instances",
        "Compute Savings Plans",
        "On-Demand Capacity Reservations"
      ],
      "answer": "D",
      "explanation": "Compute Savings Plans give a discount in exchange for a commitment to a consistent amount of compute usage, measured in dollars per hour, for a 1-year or 3-year term, and they apply automatically to Amazon EC2 usage regardless of instance family, size, operating system or Region, as well as to AWS Fargate and AWS Lambda. EC2 Instance Savings Plans and Standard Reserved Instances can offer larger discounts but are tied to specific instance families and Regions and do not cover Fargate or Lambda. Spot Instances are discounted but can be interrupted, which does not suit a workload that must run continuously.",
      "topic": "Billing, Pricing, and Support",
      "subtopic": "Compare AWS pricing models",
      "difficulty": "medium",
      "source": "Savings Plans User Guide: Compute Savings Plans; CLF-C02 Task 4.1: Compare AWS pricing models"
    },
    {
      "stem": "A company wants to set a custom monthly cost threshold for its AWS account and receive an email notification when its actual costs exceed the threshold or its forecasted costs are expected to exceed it. Which AWS service or feature will meet these requirements?",
      "options": [
        "AWS Cost Explorer",
        "AWS Budgets",
        "AWS Pricing Calculator",
        "AWS Cost and Usage Report",
        "AWS Trusted Advisor"
      ],
      "answer": "B",
      "explanation": "AWS Budgets lets you set custom cost or usage budgets and sends alerts, by email or Amazon SNS, when actual spending exceeds a threshold or when forecasted spending is expected to exceed it. AWS Cost Explorer is used to visualize and analyze costs and view forecasts, but it is not where you configure threshold alerts. The AWS Pricing Calculator estimates the cost of planned architectures before deployment, and the AWS Cost and Usage Report provides detailed billing data for analysis.",
      "topic": "Billing, Pricing, and Support",
      "subtopic": "Understand resources for billing, budget, and cost management",
      "difficulty": "medium",
      "source": "AWS Cost Management User Guide: AWS Budgets; CLF-C02 Task 4.2: resources for billing, budget, and cost management"
    }
  ]
}
```
