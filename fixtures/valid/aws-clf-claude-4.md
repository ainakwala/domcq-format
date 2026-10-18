```json
{
  "format": "domcq/1",
  "exam": "aws-clf",
  "set": "AWS Certified Cloud Practitioner practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A company buys on-premises servers based on forecasts of peak demand. Some servers sit idle for most of the year, and during unexpected traffic spikes the company still runs out of capacity. Which benefit of the AWS Cloud addresses this problem?",
      "options": [
        "Go global in minutes",
        "Benefit from massive economies of scale",
        "Stop guessing capacity",
        "Increase speed and agility"
      ],
      "answer": "C",
      "explanation": "When capacity is bought up front based on forecasts, a company either pays for idle resources or runs short when demand exceeds the forecast. In the AWS Cloud, the company can provision as much or as little capacity as it needs and scale up or down within minutes as demand changes. This removes the need to predict capacity in advance, which is the benefit AWS calls stop guessing capacity.",
      "rationales": {
        "A": "Wrong: going global in minutes is about deploying to multiple Regions quickly, not about matching capacity to demand.",
        "B": "Wrong: economies of scale lower pay-as-you-go prices for everyone; they do not solve idle or insufficient capacity.",
        "C": "Right: on-demand scaling lets the company match capacity to actual demand instead of forecasting peak load.",
        "D": "Wrong: speed and agility refers to getting new resources quickly to experiment and innovate, not to sizing for demand."
      },
      "topic": "Cloud Concepts",
      "subtopic": "Define the benefits of the AWS Cloud",
      "difficulty": "easy",
      "source": "AWS whitepaper Overview of Amazon Web Services – Six advantages of cloud computing; CLF-C02 Task 1.1"
    },
    {
      "stem": "A company is reviewing its workloads against the AWS Well-Architected Framework. Which of the following are pillars of the framework? (Choose TWO.)",
      "options": [
        "Elasticity",
        "Sustainability",
        "Availability",
        "Reliability",
        "Agility"
      ],
      "answer": "BD",
      "explanation": "The AWS Well-Architected Framework has six pillars: operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability. Sustainability, added in 2021, focuses on minimizing the environmental impact of workloads, and reliability focuses on a workload performing its intended function correctly and consistently, including recovering from failure. Terms such as elasticity, availability, and agility are concepts addressed within the pillars or benefits of the cloud, not pillars themselves.",
      "rationales": {
        "A": "Wrong: elasticity is a cloud characteristic addressed within pillars such as performance efficiency, not a pillar itself.",
        "B": "Right: sustainability is the sixth pillar and focuses on reducing the environmental impact of running workloads.",
        "C": "Wrong: availability is a goal addressed within the reliability pillar, not a separate pillar.",
        "D": "Right: reliability is a pillar covering a workload's ability to perform correctly and recover from failures.",
        "E": "Wrong: agility is a benefit of the cloud, not one of the six Well-Architected pillars."
      },
      "topic": "Cloud Concepts",
      "subtopic": "Identify design principles of the AWS Cloud",
      "difficulty": "medium",
      "source": "AWS Well-Architected Framework – The pillars of the framework; CLF-C02 Task 1.2"
    },
    {
      "stem": "A company is starting its cloud adoption. It wants to assess staff skills gaps, plan training to build cloud fluency, and manage the organizational and cultural change that the move will bring. Which perspective of the AWS Cloud Adoption Framework (AWS CAF) focuses on these capabilities?",
      "options": [
        "People",
        "Business",
        "Governance",
        "Platform",
        "Operations"
      ],
      "answer": "A",
      "explanation": "The AWS CAF groups its capabilities into six perspectives: Business, People, Governance, Platform, Security, and Operations. The People perspective acts as a bridge between technology and business and covers capabilities such as culture evolution, cloud fluency, workforce transformation, and change acceleration. Skills, training, and organizational change therefore belong to the People perspective.",
      "rationales": {
        "A": "Right: the People perspective covers culture, leadership, cloud fluency, workforce transformation, and change acceleration.",
        "B": "Wrong: the Business perspective focuses on ensuring cloud investments accelerate business outcomes and strategy.",
        "C": "Wrong: the Governance perspective focuses on orchestrating cloud initiatives, managing risk, and maximizing benefits.",
        "D": "Wrong: the Platform perspective focuses on building a scalable hybrid cloud platform and modernizing workloads.",
        "E": "Wrong: the Operations perspective focuses on delivering cloud services at the level the business agreed on."
      },
      "topic": "Cloud Concepts",
      "subtopic": "Understand the benefits of and strategies for migration to the AWS Cloud",
      "difficulty": "medium",
      "source": "An Overview of the AWS Cloud Adoption Framework – People perspective; CLF-C02 Task 1.3"
    },
    {
      "stem": "A company is migrating an on-premises application to AWS. It will keep the application's code and core architecture unchanged, but it will move the self-managed MySQL database to Amazon RDS for MySQL to take advantage of a managed database service. Which migration strategy is the company using?",
      "options": [
        "Rehost",
        "Relocate",
        "Refactor",
        "Replatform",
        "Repurchase"
      ],
      "answer": "D",
      "explanation": "Replatforming, sometimes called lift, tinker, and shift, moves an application to the cloud while making a few targeted optimizations to gain tangible benefits, without changing its core architecture. Moving a self-managed database to a managed service such as Amazon RDS is a classic example. Rehosting would move the database server as it is, and refactoring would re-architect the application, often by using cloud-native features.",
      "rationales": {
        "A": "Wrong: rehosting (lift and shift) moves the application without changes, so the database would stay self-managed.",
        "B": "Wrong: relocating moves servers to a cloud version of the same platform, such as VMware Cloud on AWS, with no changes.",
        "C": "Wrong: refactoring re-architects the application, usually with cloud-native features, which this company is avoiding.",
        "D": "Right: replatforming makes targeted optimizations, such as adopting a managed database, while keeping the core architecture.",
        "E": "Wrong: repurchasing replaces the application with a different product, typically a SaaS offering."
      },
      "topic": "Cloud Concepts",
      "subtopic": "Understand the benefits of and strategies for migration to the AWS Cloud",
      "difficulty": "hard",
      "source": "AWS Prescriptive Guidance – Migration strategies (the 7 Rs); CLF-C02 Task 1.3"
    },
    {
      "stem": "A company is building a business case for moving its workloads from an on-premises data center to AWS. Which costs will the company no longer pay for directly after the move? (Choose TWO.)",
      "options": [
        "Development and testing of application code",
        "Management of user accounts and permissions",
        "Power and cooling for the physical servers",
        "Classification and protection of company data",
        "Replacement of server hardware at end of life"
      ],
      "answer": "CE",
      "explanation": "In an on-premises data center, the company pays directly for facilities, power, cooling, and periodic hardware refreshes. On AWS these costs are part of the price of the services, because AWS owns and operates the physical infrastructure. Work that stays with the customer, such as building applications, managing identities, and protecting data, still has to be funded after the move.",
      "rationales": {
        "A": "Wrong: the company still writes and tests its own application code after moving to AWS.",
        "B": "Wrong: managing users and their permissions, for example with IAM, remains the customer's responsibility.",
        "C": "Right: AWS powers and cools its data centers, and these costs are built into the price of AWS services.",
        "D": "Wrong: classifying and protecting data remains the customer's responsibility under the shared responsibility model.",
        "E": "Right: AWS buys and replaces the physical hardware, so the company no longer funds server refresh cycles."
      },
      "topic": "Cloud Concepts",
      "subtopic": "Understand concepts of cloud economics",
      "difficulty": "medium",
      "source": "CLF-C02 exam guide Task 1.4 – costs associated with on-premises environments; fixed versus variable costs"
    },
    {
      "stem": "A company runs its application on Amazon EC2 instances. According to the AWS shared responsibility model, which tasks are the company's responsibility? (Choose TWO.)",
      "options": [
        "Patching the guest operating system on the instances",
        "Replacing faulty hardware in the host servers",
        "Patching the virtualization layer on the hosts",
        "Configuring security group rules for the instances",
        "Controlling physical access to the data centers"
      ],
      "answer": "AD",
      "explanation": "AWS is responsible for security of the cloud: the hardware, software, networking, and facilities that run AWS services, including the hypervisor. The customer is responsible for security in the cloud, and for an infrastructure service like Amazon EC2 that includes the guest operating system, the applications, and the configuration of AWS-provided firewalls such as security groups. The more managed a service is, the more of these tasks shift to AWS.",
      "rationales": {
        "A": "Right: for EC2, the customer manages the guest operating system, including updates and security patches.",
        "B": "Wrong: AWS owns and maintains the physical host hardware, including replacing failed components.",
        "C": "Wrong: the hypervisor is part of the infrastructure that AWS manages and patches.",
        "D": "Right: the customer configures security groups, which act as virtual firewalls for its instances.",
        "E": "Wrong: physical security of the data centers is AWS's responsibility as part of security of the cloud."
      },
      "topic": "Security and Compliance",
      "subtopic": "Understand the AWS shared responsibility model",
      "difficulty": "medium",
      "source": "AWS Shared Responsibility Model page; CLF-C02 Task 2.1"
    },
    {
      "stem": "Under the AWS shared responsibility model, some controls are shared: AWS and the customer each have responsibilities for the same control, at different layers of the environment. Which control is an example of a shared control?",
      "options": [
        "Physical and environmental controls",
        "Configuration management",
        "Service and communications protection",
        "Decommissioning of storage media"
      ],
      "answer": "B",
      "explanation": "AWS lists patch management, configuration management, and awareness and training as shared controls. For configuration management, AWS maintains the configuration of its infrastructure devices, while the customer configures its own guest operating systems, databases, and applications. Physical and environmental controls are inherited by the customer from AWS, and service and communications protection (zone security) is customer specific.",
      "rationales": {
        "A": "Wrong: physical and environmental controls are inherited controls that the customer fully inherits from AWS.",
        "B": "Right: AWS configures its infrastructure devices, and the customer configures its own OS, databases, and applications.",
        "C": "Wrong: service and communications protection, or zone security, is a customer-specific control.",
        "D": "Wrong: decommissioning storage media is handled by AWS as part of protecting its physical infrastructure."
      },
      "topic": "Security and Compliance",
      "subtopic": "Understand the AWS shared responsibility model",
      "difficulty": "hard",
      "source": "AWS Shared Responsibility Model page – inherited, shared, and customer-specific controls; CLF-C02 Task 2.1"
    },
    {
      "stem": "A company has just created a new AWS account. Which action follows AWS best practices for protecting the AWS account root user?",
      "options": [
        "Create access keys for the root user so that scripts can use them",
        "Share the root user password with every administrator in the company",
        "Enable MFA for the root user and use it only for tasks that require it",
        "Use the root user for daily work and create IAM users for developers"
      ],
      "answer": "C",
      "explanation": "The root user has complete, unrestricted access to every resource and billing setting in the account, so its credentials must be tightly protected. AWS recommends enabling multi-factor authentication (MFA) on the root user, not creating root access keys, and using the root user only for the few tasks that require it. Everyday administration should be done with identities that have only the permissions they need.",
      "rationales": {
        "A": "Wrong: AWS recommends against creating root user access keys because they give unrestricted programmatic access.",
        "B": "Wrong: root credentials should never be shared; administrators should use their own identities.",
        "C": "Right: MFA adds a second factor to the root user, and limiting its use reduces the chance of misuse.",
        "D": "Wrong: daily work should use identities with least privilege, not the all-powerful root user."
      },
      "topic": "Security and Compliance",
      "subtopic": "Identify AWS access management capabilities",
      "difficulty": "easy",
      "source": "IAM User Guide – Root user best practices for your AWS account; CLF-C02 Task 2.3"
    },
    {
      "stem": "An application that runs on an Amazon EC2 instance needs to read objects from an Amazon S3 bucket in the same AWS account. Which solution is the MOST secure way to give the application this access?",
      "options": [
        "Create an IAM user and store its access keys in the instance's user data",
        "Add the instance's security group to the S3 bucket's access control list",
        "Hard-code the access keys of an administrator IAM user in the application",
        "Attach an IAM role with read access to the bucket to the EC2 instance"
      ],
      "answer": "D",
      "explanation": "An IAM role attached to an EC2 instance through an instance profile provides temporary security credentials that AWS rotates automatically. The application retrieves these credentials from the instance metadata, so no long-term access keys need to be stored on the instance or in code. Granting the role only read access to the one bucket also follows the principle of least privilege.",
      "rationales": {
        "A": "Wrong: long-term access keys in user data can be read by anyone with access to the instance and are not rotated.",
        "B": "Wrong: S3 access control lists grant access to AWS accounts or predefined groups, not to EC2 security groups.",
        "C": "Wrong: hard-coded administrator keys are long-term, overly permissive, and easily exposed through the code.",
        "D": "Right: an instance role supplies automatically rotated temporary credentials and can be scoped to least privilege."
      },
      "topic": "Security and Compliance",
      "subtopic": "Identify AWS access management capabilities",
      "difficulty": "medium",
      "source": "Amazon EC2 User Guide – IAM roles for Amazon EC2; CLF-C02 Task 2.3"
    },
    {
      "stem": "A company stores large amounts of data in Amazon S3. The company needs to automatically discover which S3 objects contain sensitive data, such as personally identifiable information (PII), and receive findings about that data. Which AWS service will meet these requirements?",
      "options": [
        "Amazon GuardDuty",
        "Amazon Macie",
        "Amazon Inspector",
        "Amazon Detective",
        "AWS Shield"
      ],
      "answer": "B",
      "explanation": "Amazon Macie uses machine learning and pattern matching to discover sensitive data, such as PII and financial information, in Amazon S3. It also evaluates bucket security and access controls and generates findings that the company can review or send to other services. The other services detect threats, scan for vulnerabilities, investigate incidents, or protect against DDoS attacks, but they do not classify the contents of S3 objects.",
      "rationales": {
        "A": "Wrong: GuardDuty detects threats such as malicious activity by analyzing logs; it does not classify sensitive data.",
        "B": "Right: Macie discovers sensitive data such as PII in S3 and reports findings about it.",
        "C": "Wrong: Inspector scans workloads such as EC2 instances and container images for software vulnerabilities.",
        "D": "Wrong: Detective helps investigate the root cause of security findings by analyzing related activity.",
        "E": "Wrong: Shield protects applications against distributed denial of service (DDoS) attacks."
      },
      "topic": "Security and Compliance",
      "subtopic": "Identify components and resources for security",
      "difficulty": "medium",
      "source": "Amazon Macie User Guide – What is Amazon Macie?; CLF-C02 Task 2.4"
    },
    {
      "stem": "An external auditor asks a company for copies of AWS compliance reports, such as System and Organization Controls (SOC) reports, to confirm the security controls that AWS operates. Which AWS service or feature provides on-demand access to these reports?",
      "options": [
        "AWS Config",
        "AWS CloudTrail",
        "AWS Security Hub",
        "AWS Audit Manager",
        "AWS Artifact"
      ],
      "answer": "E",
      "explanation": "AWS Artifact is a self-service portal that gives on-demand access to AWS security and compliance documents, such as SOC reports, PCI reports, and ISO certifications, along with certain agreements. Customers can download these reports and share them with auditors as evidence of the controls that AWS operates. The other services help a company assess, record, or monitor its own resources, not obtain the third-party audit reports issued for AWS.",
      "rationales": {
        "A": "Wrong: Config records and evaluates the configuration of the company's own resources against rules.",
        "B": "Wrong: CloudTrail records API activity in the company's account; it does not hold AWS audit reports.",
        "C": "Wrong: Security Hub aggregates security findings and runs best-practice checks on the company's environment.",
        "D": "Wrong: Audit Manager collects evidence about the company's own AWS usage, not AWS's third-party reports.",
        "E": "Right: Artifact provides on-demand downloads of AWS compliance reports such as SOC reports and ISO certifications."
      },
      "topic": "Security and Compliance",
      "subtopic": "Understand AWS Cloud security, governance, and compliance concepts",
      "difficulty": "easy",
      "source": "AWS Artifact User Guide – What is AWS Artifact?; CLF-C02 Task 2.2"
    },
    {
      "stem": "A company is designing a highly available application on AWS and is learning about the AWS global infrastructure. Which statement describes an Availability Zone?",
      "options": [
        "One or more discrete data centers with redundant power and networking in a Region",
        "A separate geographic area that contains multiple isolated locations",
        "A site that caches copies of content close to end users to reduce latency",
        "An extension of a Region placed in a large city close to end users"
      ],
      "answer": "A",
      "explanation": "An Availability Zone is one or more discrete data centers with redundant power, networking, and connectivity within an AWS Region. The Availability Zones in a Region are physically separated from each other but connected by low-latency links, so deploying across multiple Availability Zones protects an application from the failure of a single location. A Region is the larger geographic area that contains multiple Availability Zones.",
      "rationales": {
        "A": "Right: this is the AWS definition of an Availability Zone, the building block for high availability within a Region.",
        "B": "Wrong: this describes an AWS Region, which contains multiple isolated Availability Zones.",
        "C": "Wrong: this describes an edge location, which Amazon CloudFront uses to cache content near users.",
        "D": "Wrong: this describes a Local Zone, which places selected services near large population centers."
      },
      "topic": "Cloud Technology and Services",
      "subtopic": "Define the AWS global infrastructure",
      "difficulty": "easy",
      "source": "AWS global infrastructure – Regions and Availability Zones; CLF-C02 Task 3.2"
    },
    {
      "stem": "A company wants to run code each time an image is uploaded to an Amazon S3 bucket. The company does not want to provision or manage servers, and it wants to pay only for the compute time that the code uses. Which AWS service will meet these requirements?",
      "options": [
        "Amazon EC2",
        "Amazon Lightsail",
        "AWS Lambda",
        "AWS Elastic Beanstalk"
      ],
      "answer": "C",
      "explanation": "AWS Lambda is a serverless, event-driven compute service that runs code in response to events, such as an object being uploaded to Amazon S3. AWS manages the underlying servers, scaling, and availability, and the company is charged based on the number of requests and the duration of each invocation. With the default on-demand configuration, there is no compute charge while no code is running.",
      "rationales": {
        "A": "Wrong: EC2 instances are servers that the company provisions and manages, and they are billed while running.",
        "B": "Wrong: Lightsail provides preconfigured virtual servers billed per bundle, not event-driven code execution.",
        "C": "Right: Lambda runs code in response to events like S3 uploads without servers and bills per request and duration.",
        "D": "Wrong: Elastic Beanstalk deploys applications onto EC2 instances that keep running, and are billed, continuously."
      },
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS compute services",
      "difficulty": "easy",
      "source": "AWS Lambda Developer Guide – What is AWS Lambda?; CLF-C02 Task 3.3"
    },
    {
      "stem": "A company is building a gaming application that stores player data as key-value pairs. The database must be fully managed and serverless, and it must deliver single-digit millisecond performance at any scale. Which AWS service will meet these requirements?",
      "options": [
        "Amazon RDS",
        "Amazon DynamoDB",
        "Amazon Redshift",
        "Amazon Neptune",
        "Amazon Aurora"
      ],
      "answer": "B",
      "explanation": "Amazon DynamoDB is a serverless, fully managed NoSQL database that supports key-value and document data models. It delivers consistent single-digit millisecond performance at virtually any scale, with no servers to provision, patch, or manage. Relational, data warehouse, and graph databases are designed for different data models and access patterns.",
      "rationales": {
        "A": "Wrong: RDS is a managed relational database service that runs on database instances the company sizes.",
        "B": "Right: DynamoDB is a serverless NoSQL key-value and document database with single-digit millisecond performance.",
        "C": "Wrong: Redshift is a data warehouse for analytical queries over large datasets, not low-latency key-value access.",
        "D": "Wrong: Neptune is a graph database for highly connected data, such as social networks and recommendations.",
        "E": "Wrong: Aurora is a relational database compatible with MySQL and PostgreSQL, not a key-value NoSQL store."
      },
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS database services",
      "difficulty": "medium",
      "source": "Amazon DynamoDB Developer Guide – What is Amazon DynamoDB?; CLF-C02 Task 3.4"
    },
    {
      "stem": "A company must retain financial records for 7 years to meet regulatory requirements. The records will rarely, if ever, be accessed, and a retrieval time of up to 12 hours is acceptable. Which Amazon S3 storage class will meet these requirements at the LOWEST cost?",
      "options": [
        "S3 Standard",
        "S3 Standard-Infrequent Access",
        "S3 Intelligent-Tiering",
        "S3 Glacier Deep Archive",
        "S3 One Zone-Infrequent Access"
      ],
      "answer": "D",
      "explanation": "S3 Glacier Deep Archive is the lowest-cost S3 storage class and is designed for long-term retention of data that is rarely accessed, such as records kept for regulatory compliance. Objects are restored within 12 hours with the standard retrieval option, or within 48 hours with bulk retrieval. The other listed classes are designed for data that needs millisecond access by default, which the company does not need and would pay more for.",
      "rationales": {
        "A": "Wrong: S3 Standard is for frequently accessed data and has the highest storage price of these options.",
        "B": "Wrong: Standard-IA is for infrequently accessed data that still needs millisecond retrieval, so it costs more.",
        "C": "Wrong: Intelligent-Tiering suits unknown or changing access patterns and adds a monitoring and automation charge.",
        "D": "Right: Glacier Deep Archive has the lowest storage cost and restores data within 12 hours with standard retrieval.",
        "E": "Wrong: One Zone-IA stores data in a single Availability Zone with millisecond access and costs more than Deep Archive."
      },
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS storage services",
      "difficulty": "medium",
      "source": "Amazon S3 User Guide – Understanding and managing Amazon S3 storage classes; CLF-C02 Task 3.6"
    },
    {
      "stem": "A company has Amazon EC2 instances in a private subnet of a VPC. The instances must download software updates from the internet over IPv4, but they must not accept connections that are initiated from the internet. Which AWS service or feature will meet these requirements?",
      "options": [
        "NAT gateway",
        "Internet gateway",
        "Virtual private gateway",
        "VPC peering connection",
        "Gateway VPC endpoint"
      ],
      "answer": "A",
      "explanation": "A NAT gateway is placed in a public subnet, and the private subnet's route table sends internet-bound traffic to it. The NAT gateway lets instances in the private subnet start outbound connections to the internet and receive the responses, but it does not allow connections initiated from the internet to reach those instances. Routing the private subnet directly to an internet gateway would instead make it a public subnet whose instances can be reached from the internet if they have public IP addresses.",
      "rationales": {
        "A": "Right: a NAT gateway allows outbound IPv4 connections from private subnets while blocking connections started from the internet.",
        "B": "Wrong: an internet gateway enables two-way internet access for instances with public IPs in public subnets.",
        "C": "Wrong: a virtual private gateway is the AWS side of a Site-to-Site VPN connection to an on-premises network.",
        "D": "Wrong: a VPC peering connection routes traffic privately between two VPCs, not to the internet.",
        "E": "Wrong: a gateway VPC endpoint provides private access only to Amazon S3 and DynamoDB, not to the internet."
      },
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS network services",
      "difficulty": "hard",
      "source": "Amazon VPC User Guide – NAT gateways; CLF-C02 Task 3.5"
    },
    {
      "stem": "A company collects thousands of written customer reviews each week. It wants to automatically determine whether each review expresses a positive, negative, neutral, or mixed opinion. Which AWS service will meet these requirements?",
      "options": [
        "Amazon Rekognition",
        "Amazon Polly",
        "Amazon Comprehend",
        "Amazon Textract",
        "Amazon Lex"
      ],
      "answer": "C",
      "explanation": "Amazon Comprehend is a natural language processing (NLP) service that uses machine learning to find insights in text. Its sentiment analysis feature classifies text as positive, negative, neutral, or mixed, and it can also extract key phrases, entities, and the dominant language. The company can use it without building or training its own machine learning models.",
      "rationales": {
        "A": "Wrong: Rekognition analyzes images and videos, for example to detect objects, faces, or inappropriate content.",
        "B": "Wrong: Polly converts text into lifelike speech; it does not analyze the meaning of text.",
        "C": "Right: Comprehend uses NLP to detect sentiment in text, labeling it positive, negative, neutral, or mixed.",
        "D": "Wrong: Textract extracts printed text, handwriting, and data from scanned documents; it does not judge sentiment.",
        "E": "Wrong: Lex builds conversational interfaces, such as chatbots, that use voice and text."
      },
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS artificial intelligence and machine learning (AI/ML) services and analytics services",
      "difficulty": "medium",
      "source": "Amazon Comprehend Developer Guide – Sentiment; CLF-C02 Task 3.7"
    },
    {
      "stem": "A company wants to provision the same set of AWS resources repeatedly and consistently in several AWS Regions. It wants to define the resources in template files that it can store in version control. Which AWS service will meet these requirements?",
      "options": [
        "AWS Config",
        "AWS CloudFormation",
        "AWS CloudTrail",
        "AWS Systems Manager",
        "AWS Trusted Advisor"
      ],
      "answer": "B",
      "explanation": "AWS CloudFormation is an infrastructure as code (IaC) service: the company describes its resources in JSON or YAML templates, and CloudFormation provisions them as a single unit called a stack. Because the same template can be deployed many times, in different accounts and Regions, environments are created consistently and changes can be reviewed and tracked in version control. This replaces error-prone manual setup in the AWS Management Console.",
      "rationales": {
        "A": "Wrong: Config records resource configurations and checks them against rules; it does not provision resources.",
        "B": "Right: CloudFormation provisions resources from JSON or YAML templates, so stacks can be repeated across Regions.",
        "C": "Wrong: CloudTrail records API activity for auditing; it does not create resources from templates.",
        "D": "Wrong: Systems Manager helps operate and manage existing resources, for example by patching and running commands.",
        "E": "Wrong: Trusted Advisor inspects an account and recommends improvements; it does not provision resources."
      },
      "topic": "Cloud Technology and Services",
      "subtopic": "Define methods of deploying and operating in the AWS Cloud",
      "difficulty": "medium",
      "source": "AWS CloudFormation User Guide – What is AWS CloudFormation?; CLF-C02 Task 3.1"
    },
    {
      "stem": "A company has steady compute usage across Amazon EC2, AWS Fargate, and AWS Lambda. Over the next 3 years, the company expects to change EC2 instance families and move some workloads to other AWS Regions. The company wants to lower costs by committing to a consistent amount of compute usage. Which pricing option will meet these requirements?",
      "options": [
        "EC2 Instance Savings Plans",
        "Standard Reserved Instances",
        "Spot Instances",
        "Compute Savings Plans",
        "Dedicated Hosts"
      ],
      "answer": "D",
      "explanation": "Compute Savings Plans offer lower prices in exchange for a commitment to a consistent amount of compute usage, measured in dollars per hour, for a 1-year or 3-year term. The discount applies automatically to EC2 usage regardless of instance family, size, operating system, tenancy, or Region, and it also applies to AWS Fargate and AWS Lambda. EC2 Instance Savings Plans and Standard Reserved Instances also give discounts, but they cover only EC2 and are tied to specific instance families or Regions.",
      "rationales": {
        "A": "Wrong: EC2 Instance Savings Plans apply to one instance family in one Region and do not cover Fargate or Lambda.",
        "B": "Wrong: Standard Reserved Instances do not cover Fargate or Lambda and cannot be exchanged for other instance families.",
        "C": "Wrong: Spot Instances use spare EC2 capacity without a commitment and can be interrupted, so they do not fit steady usage.",
        "D": "Right: Compute Savings Plans apply across instance families, Regions, Fargate, and Lambda in exchange for a usage commitment.",
        "E": "Wrong: Dedicated Hosts provide physical servers for a company's own use, mainly for licensing or compliance needs."
      },
      "topic": "Billing, Pricing, and Support",
      "subtopic": "Compare AWS pricing models",
      "difficulty": "hard",
      "source": "Savings Plans User Guide – What are Savings Plans?; CLF-C02 Task 4.1"
    },
    {
      "stem": "A company wants to receive an email alert when its forecasted AWS costs for the month are expected to exceed a set amount. Which AWS service or feature will meet this requirement?",
      "options": [
        "AWS Cost Explorer",
        "AWS Budgets",
        "AWS Pricing Calculator",
        "AWS Trusted Advisor"
      ],
      "answer": "B",
      "explanation": "AWS Budgets lets a company set a custom cost or usage budget and receive alerts by email or Amazon SNS when actual or forecasted amounts exceed a threshold that the company defines. Budget actions can also respond automatically, for example by applying a restrictive IAM policy. Cost Explorer is for visualizing and analyzing past and forecasted costs, but it does not send alerts when a budget threshold is crossed.",
      "rationales": {
        "A": "Wrong: Cost Explorer visualizes and forecasts costs and usage but does not send alerts when a set amount is exceeded.",
        "B": "Right: Budgets sends alerts when actual or forecasted costs exceed a threshold that the company sets.",
        "C": "Wrong: Pricing Calculator estimates the cost of planned architectures before they are deployed.",
        "D": "Wrong: Trusted Advisor recommends cost, security, and performance improvements, not budget threshold alerts."
      },
      "topic": "Billing, Pricing, and Support",
      "subtopic": "Understand resources for billing, budget, and cost management",
      "difficulty": "easy",
      "source": "AWS Cost Management User Guide – Managing your costs with AWS Budgets; CLF-C02 Task 4.2"
    }
  ]
}
```
