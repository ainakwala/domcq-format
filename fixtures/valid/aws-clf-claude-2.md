```json
{
  "format": "domcq/1",
  "exam": "aws-clf",
  "set": "AWS Certified Cloud Practitioner practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A company's finance team wants to stop making large upfront investments in data centers and servers. Instead, the team wants the company to pay for computing resources only when it consumes them, and only for the amount it consumes. Which benefit of the AWS Cloud does this describe?",
      "options": [
        "Benefit from massive economies of scale",
        "Increase speed and agility",
        "Trade fixed expense for variable expense",
        "Go global in minutes"
      ],
      "answer": "C",
      "explanation": "AWS describes this advantage as trading fixed expense for variable expense: instead of investing heavily in data centers and servers before knowing how they will be used, customers pay only when they consume computing resources and only for how much they consume. Economies of scale refers to the lower pay-as-you-go prices that result from AWS aggregating usage across many customers, while speed and agility and going global describe how quickly resources become available, not how they are paid for.",
      "topic": "Cloud Concepts",
      "subtopic": "Define the benefits of the AWS Cloud",
      "difficulty": "easy",
      "source": "Overview of Amazon Web Services whitepaper – Six advantages of cloud computing; CLF-C02 Task 1.1"
    },
    {
      "stem": "A company wants its workload to recover automatically when a component fails, to test its recovery procedures regularly, and to scale horizontally so that the failure of a single resource has less impact on the whole workload. Which pillar of the AWS Well-Architected Framework focuses on these design principles?",
      "options": [
        "Reliability",
        "Performance efficiency",
        "Operational excellence",
        "Sustainability",
        "Cost optimization"
      ],
      "answer": "A",
      "explanation": "The Reliability pillar covers a workload's ability to perform its intended function correctly and consistently, and its design principles include automatically recovering from failure, testing recovery procedures, and scaling horizontally to increase aggregate workload availability. Performance efficiency is about using computing resources efficiently as demand changes, and operational excellence is about running and monitoring systems and continually improving processes.",
      "topic": "Cloud Concepts",
      "subtopic": "Identify design principles of the AWS Cloud",
      "difficulty": "medium",
      "source": "AWS Well-Architected Framework – Reliability pillar, design principles; CLF-C02 Task 1.2"
    },
    {
      "stem": "A company is preparing to migrate to AWS. Leadership wants to evolve the company's culture, build cloud fluency through training, and help employees adapt to new roles during the transformation. Which perspective of the AWS Cloud Adoption Framework (AWS CAF) addresses these capabilities?",
      "options": [
        "Governance",
        "Platform",
        "Operations",
        "People",
        "Business"
      ],
      "answer": "D",
      "explanation": "The AWS CAF groups capabilities into six perspectives: Business, People, and Governance (business capabilities) and Platform, Security, and Operations (technical capabilities). The People perspective bridges technology and business and includes capabilities such as culture evolution, transformational leadership, cloud fluency, workforce transformation, and change acceleration. Governance focuses on orchestrating cloud initiatives while managing risk and cost, not on staff skills and culture.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand the benefits of and strategies for migration to the AWS Cloud",
      "difficulty": "medium",
      "source": "AWS Cloud Adoption Framework (AWS CAF) whitepaper – People perspective; CLF-C02 Task 1.3"
    },
    {
      "stem": "A company is migrating an application from its data center to AWS. As part of the migration, the company will move the application's self-managed MySQL database to Amazon RDS for MySQL to reduce the time it spends managing database servers. The application code and core architecture will not change. Which migration strategy describes this move?",
      "options": [
        "Rehost",
        "Replatform",
        "Refactor",
        "Repurchase",
        "Relocate"
      ],
      "answer": "B",
      "explanation": "Replatforming, sometimes called 'lift, tinker, and shift', moves a workload to the cloud with a few targeted optimizations, such as switching to a managed database service, without changing the core architecture of the application. Rehosting would move the database server as it is (for example, onto an EC2 instance), refactoring would re-architect the application to use cloud-native features, and repurchasing would replace it with a different product such as a SaaS offering.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand the benefits of and strategies for migration to the AWS Cloud",
      "difficulty": "hard",
      "source": "AWS Prescriptive Guidance – Migration strategies (the 7 Rs): replatform; CLF-C02 Task 1.3"
    },
    {
      "stem": "A company is comparing the total cost of ownership (TCO) of its on-premises data center with the cost of running the same workloads on Amazon EC2 instances. Which costs will the company no longer pay directly after it moves all of its workloads to AWS and closes its data center? (Choose TWO.)",
      "options": [
        "Salaries for developers who write the application code",
        "Staff time spent tuning the database queries",
        "Electricity and cooling for the server rooms",
        "Training employees to use the business applications",
        "Rent and property taxes for the data center building"
      ],
      "answer": "CE",
      "explanation": "When workloads run on AWS, the costs of owning and operating physical infrastructure, such as power, cooling, facility space, and hardware, are built into AWS pay-as-you-go prices instead of being paid directly by the customer. Costs tied to the company's own applications and people, such as developer salaries, database query tuning, and user training, remain in a TCO comparison because the company still does that work in the cloud.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand concepts of cloud economics",
      "difficulty": "medium",
      "source": "CLF-C02 Task 1.4: Understand concepts of cloud economics (fixed and variable costs, costs of on-premises environments)"
    },
    {
      "stem": "A company runs its application on Amazon EC2 instances. According to the AWS shared responsibility model, which tasks are the company's responsibility? (Choose TWO.)",
      "options": [
        "Patching the hypervisor on the physical hosts",
        "Applying security patches to the guest operating system",
        "Maintaining the physical network devices in AWS data centers",
        "Configuring the security group rules for the instances",
        "Decommissioning storage devices at the end of their life"
      ],
      "answer": "BD",
      "explanation": "With Amazon EC2, an infrastructure as a service offering, AWS is responsible for security of the cloud: the physical facilities, host hardware, network infrastructure, and virtualization layer. The customer is responsible for security in the cloud, which includes patching and configuring the guest operating system and the software on it, and configuring firewalls such as security groups. The more managed a service is, the more of these tasks shift to AWS.",
      "topic": "Security and Compliance",
      "subtopic": "Understand the AWS shared responsibility model",
      "difficulty": "medium",
      "source": "AWS Shared Responsibility Model (AWS Compliance pages); CLF-C02 Task 2.1"
    },
    {
      "stem": "An external auditor asks a company to provide AWS compliance reports, such as AWS SOC reports, as evidence that the AWS infrastructure meets security standards. Which AWS service provides on-demand access to these reports?",
      "options": [
        "AWS Config",
        "AWS Audit Manager",
        "Amazon Inspector",
        "AWS Security Hub",
        "AWS Artifact"
      ],
      "answer": "E",
      "explanation": "AWS Artifact is a self-service portal for on-demand access to AWS security and compliance documents, such as SOC reports, PCI reports, and ISO certifications, and for reviewing and accepting certain agreements with AWS. AWS Audit Manager, by contrast, collects evidence about the customer's own use of AWS to help prepare for audits, and AWS Config records the configuration of the customer's resources.",
      "topic": "Security and Compliance",
      "subtopic": "Understand AWS Cloud security, governance, and compliance concepts",
      "difficulty": "easy",
      "source": "AWS Artifact User Guide – What is AWS Artifact?; CLF-C02 Task 2.2"
    },
    {
      "stem": "An Amazon EC2 instance was terminated unexpectedly yesterday. A security engineer needs to find out which IAM identity made the TerminateInstances request, when the request was made, and from which source IP address. Which AWS service will meet these requirements?",
      "options": [
        "Amazon CloudWatch",
        "AWS CloudTrail",
        "AWS Config",
        "AWS Trusted Advisor",
        "AWS X-Ray"
      ],
      "answer": "B",
      "explanation": "AWS CloudTrail records actions taken by users, roles, and AWS services as events, including API calls made through the console, the AWS CLI, and the SDKs. Each event shows who made the request, when it was made, the source IP address, and the request parameters, which makes CloudTrail the service for auditing account activity. AWS Config records how resource configurations change over time, and Amazon CloudWatch collects metrics and logs for monitoring.",
      "topic": "Security and Compliance",
      "subtopic": "Understand AWS Cloud security, governance, and compliance concepts",
      "difficulty": "easy",
      "source": "AWS CloudTrail User Guide – What is AWS CloudTrail?; CLF-C02 Task 2.2"
    },
    {
      "stem": "An application that runs on an Amazon EC2 instance needs to read objects from an Amazon S3 bucket. The company wants to follow AWS security best practices when it grants this access. How should the company give the application access to the bucket?",
      "options": [
        "Create an IAM user and store its access keys in the application code",
        "Create access keys for the root user and save them on the instance",
        "Update the bucket policy to allow public read access to all objects",
        "Associate the instance with an IAM role that can read from the bucket"
      ],
      "answer": "D",
      "explanation": "An IAM role attached to an EC2 instance through an instance profile gives applications on the instance temporary credentials that AWS rotates automatically, so no long-term access keys need to be stored in code or on disk. Granting the role read access to only that bucket also follows the principle of least privilege. Embedded access keys can leak, root user access keys should never be created for applications, and a public bucket exposes the data to everyone.",
      "topic": "Security and Compliance",
      "subtopic": "Identify AWS access management capabilities",
      "difficulty": "medium",
      "source": "IAM User Guide – Security best practices in IAM; IAM roles for applications on Amazon EC2; CLF-C02 Task 2.3"
    },
    {
      "stem": "A company wants a managed service that continuously analyzes account activity, network flow logs, and DNS query logs to detect threats, such as Amazon EC2 instances that communicate with known malicious IP addresses or that mine cryptocurrency. Which AWS service will meet these requirements?",
      "options": [
        "Amazon GuardDuty",
        "Amazon Inspector",
        "Amazon Macie",
        "Amazon Detective"
      ],
      "answer": "A",
      "explanation": "Amazon GuardDuty is a threat detection service that continuously analyzes data sources such as AWS CloudTrail management events, VPC Flow Logs, and DNS logs, using threat intelligence and machine learning to produce findings about malicious or unauthorized activity. Amazon Inspector scans workloads for software vulnerabilities, Amazon Macie discovers sensitive data in Amazon S3, and Amazon Detective helps investigate the root cause of findings after they have been detected.",
      "topic": "Security and Compliance",
      "subtopic": "Identify components and resources for security",
      "difficulty": "medium",
      "source": "Amazon GuardDuty User Guide – What is Amazon GuardDuty?; CLF-C02 Task 2.4"
    },
    {
      "stem": "A company runs a public web application behind an Application Load Balancer. The company needs to block SQL injection and cross-site scripting requests. The company also wants protection against large DDoS attacks that includes 24/7 access to the AWS Shield Response Team (SRT). Which combination of AWS services will meet these requirements? (Choose TWO.)",
      "options": [
        "AWS WAF",
        "AWS Shield Standard",
        "Amazon Inspector",
        "AWS Shield Advanced",
        "Amazon Macie"
      ],
      "answer": "AD",
      "explanation": "AWS WAF is a web application firewall that filters HTTP and HTTPS requests to resources such as Application Load Balancers and Amazon CloudFront distributions, and its rules can block common exploits such as SQL injection and cross-site scripting. AWS Shield Standard protects all customers automatically at no extra cost against common network and transport layer DDoS attacks, but only the paid Shield Advanced tier adds enhanced detection, DDoS cost protection, and 24/7 access to the Shield Response Team. Amazon Inspector and Amazon Macie address vulnerability scanning and sensitive data discovery, not request filtering or DDoS protection.",
      "topic": "Security and Compliance",
      "subtopic": "Identify components and resources for security",
      "difficulty": "hard",
      "source": "AWS WAF, AWS Firewall Manager, and AWS Shield Advanced Developer Guide; CLF-C02 Task 2.4"
    },
    {
      "stem": "Which statement correctly describes an AWS Availability Zone?",
      "options": [
        "A separate geographic area that contains multiple isolated locations",
        "A site that Amazon CloudFront uses to cache content close to users",
        "One or more discrete data centers with redundant power in a Region",
        "An extension of a Region that places services close to a large city",
        "AWS-managed hardware that is installed in a customer's own data center"
      ],
      "answer": "C",
      "explanation": "An Availability Zone is one or more discrete data centers with redundant power, networking, and connectivity within an AWS Region. The Availability Zones in a Region are physically separated but connected by low-latency links, so deploying across multiple Availability Zones protects an application from the failure of a single location. A Region is the geographic area that contains the Availability Zones, and edge locations are used by services such as CloudFront to cache content.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Define the AWS global infrastructure",
      "difficulty": "easy",
      "source": "AWS Global Infrastructure – Regions and Availability Zones; CLF-C02 Task 3.2"
    },
    {
      "stem": "A company wants to run containerized applications on Amazon Elastic Container Service (Amazon ECS). The company does not want to provision, scale, or patch the servers that run the containers. Which AWS service or feature will meet these requirements?",
      "options": [
        "Amazon EC2 Auto Scaling",
        "AWS Systems Manager Patch Manager",
        "Amazon EC2 Dedicated Hosts",
        "Amazon EC2 Spot Instances",
        "AWS Fargate"
      ],
      "answer": "E",
      "explanation": "AWS Fargate is a serverless compute engine for containers that works with Amazon ECS and Amazon EKS. With Fargate, AWS provisions, scales, and maintains the underlying infrastructure, so the company specifies only the CPU and memory that each task needs. EC2 Auto Scaling and Systems Manager Patch Manager help scale or patch EC2 instances, but the company would still be managing those servers.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS compute services",
      "difficulty": "medium",
      "source": "Amazon ECS Developer Guide – AWS Fargate for Amazon ECS; CLF-C02 Task 3.3"
    },
    {
      "stem": "A gaming company needs a fully managed, serverless NoSQL database to store player session data as key-value items. The database must deliver single-digit millisecond performance at any scale. Which AWS service will meet these requirements?",
      "options": [
        "Amazon RDS",
        "Amazon DynamoDB",
        "Amazon Redshift",
        "Amazon Neptune"
      ],
      "answer": "B",
      "explanation": "Amazon DynamoDB is a serverless, fully managed NoSQL database that supports key-value and document data models and delivers single-digit millisecond performance at any scale, with no servers to provision or patch. Amazon RDS is a managed relational database service, Amazon Redshift is a data warehouse for analytics, and Amazon Neptune is a graph database.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS database services",
      "difficulty": "easy",
      "source": "Amazon DynamoDB Developer Guide – What is Amazon DynamoDB?; CLF-C02 Task 3.4"
    },
    {
      "stem": "A company is designing network security for workloads in an Amazon VPC and is comparing security groups with network access control lists (network ACLs). Which statements are correct? (Choose TWO.)",
      "options": [
        "Security groups support both allow rules and explicit deny rules.",
        "Security groups are stateful, so return traffic is allowed automatically.",
        "Network ACLs are stateful and automatically allow return traffic.",
        "Security groups process rules in number order, starting with the lowest.",
        "Network ACLs apply at the subnet level and support explicit deny rules."
      ],
      "answer": "BE",
      "explanation": "Security groups act as virtual firewalls for resources such as EC2 instances, support only allow rules, evaluate all of their rules together, and are stateful: if a request is allowed, the response is allowed automatically. Network ACLs act as a firewall at the subnet level, support both allow and deny rules that are processed in number order, and are stateless, so return traffic must be explicitly allowed. Using both provides layered network defense in a VPC.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS network services",
      "difficulty": "hard",
      "source": "Amazon VPC User Guide – Compare security groups and network ACLs; CLF-C02 Task 3.5"
    },
    {
      "stem": "A company stores large amounts of data in Amazon S3. The access patterns for the data are unknown and change over time. The company wants to reduce storage costs automatically, without performance impact, operational overhead, or retrieval fees. Which S3 storage class will meet these requirements?",
      "options": [
        "S3 Standard-Infrequent Access (S3 Standard-IA)",
        "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
        "S3 Glacier Deep Archive",
        "S3 Intelligent-Tiering",
        "S3 Glacier Flexible Retrieval"
      ],
      "answer": "D",
      "explanation": "S3 Intelligent-Tiering automatically moves each object between access tiers based on how often it is accessed, so costs fall for data that becomes infrequently accessed without any lifecycle rules to manage. It has no retrieval charges and no performance impact in its automatic frequent, infrequent, and archive instant access tiers; instead it charges a small monthly monitoring and automation fee per object. Standard-IA and One Zone-IA charge retrieval fees and suit data that is known to be accessed infrequently, and the Glacier classes are designed for archives.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS storage services",
      "difficulty": "medium",
      "source": "Amazon S3 User Guide – Understanding and managing Amazon S3 storage classes (S3 Intelligent-Tiering); CLF-C02 Task 3.6"
    },
    {
      "stem": "A company receives thousands of scanned paper forms and invoices each day. The company wants to automatically extract printed text, handwriting, and the data in tables and form fields from the scanned documents. Which AWS service will meet these requirements?",
      "options": [
        "Amazon Textract",
        "Amazon Comprehend",
        "Amazon Transcribe",
        "Amazon Rekognition"
      ],
      "answer": "A",
      "explanation": "Amazon Textract is a machine learning service that automatically extracts printed text, handwriting, layout elements, and structured data such as tables and form key-value pairs from scanned documents. Amazon Comprehend analyzes text that has already been extracted to find entities, key phrases, and sentiment, Amazon Transcribe converts speech to text, and Amazon Rekognition analyzes images and videos for objects, faces, and scenes.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS artificial intelligence and machine learning (AI/ML) services and analytics services",
      "difficulty": "medium",
      "source": "Amazon Textract Developer Guide – What is Amazon Textract?; CLF-C02 Task 3.7"
    },
    {
      "stem": "A company wants to create identical copies of its AWS infrastructure in its development, test, and production accounts. The company wants to define the resources in template files that it can store in version control and deploy repeatedly. Which AWS service will meet these requirements?",
      "options": [
        "AWS Config",
        "AWS Trusted Advisor",
        "AWS CloudFormation",
        "Amazon CloudWatch"
      ],
      "answer": "C",
      "explanation": "AWS CloudFormation is an infrastructure as code service: resources are described in JSON or YAML templates, and CloudFormation provisions and updates them together as a stack in a predictable, repeatable way. Because templates are text files, they can be versioned and reviewed like application code and deployed to many accounts and Regions. AWS Config and Amazon CloudWatch monitor resources rather than create them, and AWS Trusted Advisor provides best-practice recommendations.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Define methods of deploying and operating in the AWS Cloud",
      "difficulty": "easy",
      "source": "AWS CloudFormation User Guide – What is AWS CloudFormation?; CLF-C02 Task 3.1"
    },
    {
      "stem": "A company runs a steady compute workload 24 hours a day and expects to keep it running for the next 3 years. During that time, the company plans to change Amazon EC2 instance families, move some instances to a different AWS Region, and move part of the workload to AWS Lambda. Which pricing option will provide a significant discount while allowing these changes?",
      "options": [
        "On-Demand Instances",
        "Spot Instances",
        "Standard Reserved Instances",
        "EC2 Instance Savings Plans",
        "Convertible Reserved Instances",
        "Compute Savings Plans"
      ],
      "answer": "F",
      "explanation": "Compute Savings Plans give a discount in exchange for a commitment to a consistent amount of compute usage, measured in dollars per hour, for a 1-year or 3-year term. The discount applies automatically to EC2 usage regardless of instance family, size, operating system, tenancy, or Region, and also to AWS Fargate and AWS Lambda usage. Reserved Instances and EC2 Instance Savings Plans apply only to Amazon EC2 and stay within one Region, and Spot Instances can be interrupted, which does not suit a steady workload.",
      "topic": "Billing, Pricing, and Support",
      "subtopic": "Compare AWS pricing models",
      "difficulty": "hard",
      "source": "Savings Plans User Guide – Savings Plans types (Compute Savings Plans and EC2 Instance Savings Plans); CLF-C02 Task 4.1"
    },
    {
      "stem": "A company wants to receive an email notification when its forecasted AWS costs for the current month are expected to exceed a specific amount. Which AWS service or feature will meet this requirement?",
      "options": [
        "AWS Cost Explorer",
        "AWS Budgets",
        "AWS Pricing Calculator",
        "AWS Cost and Usage Report",
        "AWS Trusted Advisor"
      ],
      "answer": "B",
      "explanation": "AWS Budgets lets a company set a custom cost or usage budget and sends alerts, by email or through Amazon SNS, when actual or forecasted amounts exceed a threshold that the company defines. AWS Cost Explorer visualizes past spending and forecasts future spending but does not send threshold alerts, and AWS Pricing Calculator estimates the cost of planned workloads before they are deployed.",
      "topic": "Billing, Pricing, and Support",
      "subtopic": "Understand resources for billing, budget, and cost management",
      "difficulty": "medium",
      "source": "AWS Cost Management User Guide – Managing your costs with AWS Budgets; CLF-C02 Task 4.2"
    }
  ]
}
```
