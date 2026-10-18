```json
{
  "format": "domcq/1",
  "exam": "aws-clf",
  "set": "AWS Certified Cloud Practitioner practice – Mixed Domains Set 1",
  "questions": [
    {
      "stem": "A company buys enough on-premises servers to handle its highest expected traffic of the year. For most of the year, much of that capacity sits idle. Which benefit of the AWS Cloud most directly addresses this problem?",
      "options": [
        "Go global in minutes",
        "Stop guessing capacity",
        "Increase speed and agility",
        "Benefit from massive economies of scale"
      ],
      "answer": "B",
      "explanation": "When capacity is bought up front, a company has to guess its peak demand. It then either pays for idle hardware most of the year or runs short when demand is higher than expected. In the AWS Cloud, the company provisions only what it needs now and scales up or down within minutes as demand changes, so it no longer has to forecast capacity in advance. This is one of the six advantages of cloud computing that AWS describes.",
      "topic": "Cloud Concepts",
      "subtopic": "Define the benefits of the AWS Cloud",
      "difficulty": "easy",
      "source": "CLF-C02 Task 1.1: Define the benefits of the AWS Cloud; AWS whitepaper Overview of Amazon Web Services, Six advantages of cloud computing"
    },
    {
      "stem": "A solutions team is reviewing a workload against the AWS Well-Architected Framework. Which of the following are pillars of the framework? (Choose TWO.)",
      "options": [
        "Sustainability",
        "Elasticity",
        "High availability",
        "Cost optimization",
        "Scalability"
      ],
      "answer": "AD",
      "explanation": "The AWS Well-Architected Framework has six pillars: operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability. Elasticity, scalability, and high availability are important cloud characteristics and design goals. They show up inside pillars such as reliability and performance efficiency, but they are not pillars themselves.",
      "topic": "Cloud Concepts",
      "subtopic": "Identify design principles of the AWS Cloud",
      "difficulty": "medium",
      "source": "CLF-C02 Task 1.2: Identify design principles of the AWS Cloud; AWS Well-Architected Framework, the six pillars"
    },
    {
      "stem": "A company plans to move an application from its data center to AWS. The company wants to keep the application's core architecture, but it will replace its self-managed database server with Amazon RDS to reduce administrative work. Which migration strategy does this describe?",
      "options": [
        "Rehost",
        "Repurchase",
        "Refactor",
        "Replatform"
      ],
      "answer": "D",
      "explanation": "Replatforming, sometimes called lift, tinker, and shift, moves an application to the cloud with a few targeted optimizations, such as switching to a managed database service, and leaves the core architecture unchanged. Rehosting moves the application as it is, with no changes. Refactoring re-architects it to use cloud-native features. Repurchasing replaces it with a different product, often a SaaS offering.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand the benefits of and strategies for migration to the AWS Cloud",
      "difficulty": "medium",
      "source": "CLF-C02 Task 1.3: Migration strategies; AWS Prescriptive Guidance, the 7 Rs migration strategies"
    },
    {
      "stem": "A company is starting a large migration to AWS. Its leadership wants to orchestrate the cloud initiatives by establishing program and project management, benefits management, risk management, and cloud financial management practices. Which perspective of the AWS Cloud Adoption Framework (AWS CAF) focuses on these capabilities?",
      "options": [
        "Governance",
        "Business",
        "Operations",
        "Platform"
      ],
      "answer": "A",
      "explanation": "The AWS CAF groups its capabilities into six perspectives: Business, People, Governance, Platform, Security, and Operations. The Governance perspective helps an organization orchestrate its cloud initiatives while maximizing organizational benefits and minimizing transformation risks. Its capabilities include program and project management, benefits management, risk management, and cloud financial management. The Business perspective focuses on making sure cloud investments speed up digital transformation and business outcomes, not on these management practices.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand the benefits of and strategies for migration to the AWS Cloud",
      "difficulty": "hard",
      "source": "CLF-C02 Task 1.3: AWS Cloud Adoption Framework (AWS CAF); AWS CAF whitepaper, Governance perspective"
    },
    {
      "stem": "A company is building a business case for moving its workloads from an on-premises data center to AWS. Which costs will the company stop paying for directly after the move? (Choose TWO.)",
      "options": [
        "Staff time spent writing and maintaining the company's application code",
        "Electricity and cooling for the physical servers",
        "Staff time spent managing IAM users and their permissions",
        "Charges for data transferred out of AWS to the internet",
        "Purchases of replacement physical server hardware"
      ],
      "answer": "BE",
      "explanation": "In the AWS Cloud, AWS owns and runs the physical infrastructure. Costs such as data center power and cooling and buying and replacing server hardware are built into AWS service prices, so the customer no longer pays them directly. The company still pays its own staff to build applications and manage access in IAM, because those remain customer responsibilities. Data transfer out of AWS to the internet is a usage charge on the AWS bill.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand concepts of cloud economics",
      "difficulty": "medium",
      "source": "CLF-C02 Task 1.4: Understand concepts of cloud economics; fixed versus variable costs and on-premises cost components"
    },
    {
      "stem": "A company runs its database on Amazon RDS. Under the AWS shared responsibility model, which tasks are the company's responsibility? (Choose TWO.)",
      "options": [
        "Applying operating system patches to the database host",
        "Replacing failed storage hardware in the underlying servers",
        "Managing database user accounts and their privileges",
        "Configuring security group rules that control access to the database",
        "Maintaining the physical security of the data center"
      ],
      "answer": "CD",
      "explanation": "Amazon RDS is a managed service. AWS handles the underlying infrastructure, which includes the physical data center, the server and storage hardware, and patching the operating system that the database runs on. The customer remains responsible for security in the cloud: which network sources can connect (security groups), which database users exist, and what those users can do. Managed services move more work to AWS, but controlling access to the customer's data always stays with the customer.",
      "topic": "Security and Compliance",
      "subtopic": "Understand the AWS shared responsibility model",
      "difficulty": "medium",
      "source": "CLF-C02 Task 2.1: Understand the AWS shared responsibility model; AWS Shared Responsibility Model for managed services"
    },
    {
      "stem": "An auditor asks a company for AWS's own compliance reports, such as AWS System and Organization Controls (SOC) reports and ISO certifications. Which AWS service or resource provides on-demand access to these reports?",
      "options": [
        "AWS Config",
        "AWS Security Hub",
        "AWS Artifact",
        "AWS Audit Manager"
      ],
      "answer": "C",
      "explanation": "AWS Artifact is a self-service portal for on-demand access to AWS security and compliance documents, such as SOC reports, ISO certifications, and PCI reports, and to certain agreements with AWS. AWS Audit Manager does something different: it collects evidence about how the customer's own AWS usage meets a compliance framework. AWS Config records the configuration of the customer's resources, and AWS Security Hub gathers security findings across the customer's accounts.",
      "topic": "Security and Compliance",
      "subtopic": "Understand AWS Cloud security, governance, and compliance concepts",
      "difficulty": "easy",
      "source": "CLF-C02 Task 2.2: AWS Cloud security, governance, and compliance concepts; AWS Artifact"
    },
    {
      "stem": "An application running on an Amazon EC2 instance must read objects from an Amazon S3 bucket. The company wants to avoid storing long-term credentials on the instance. How can the company grant this access in the most secure way?",
      "options": [
        "Save an IAM user's access keys in a configuration file on the instance",
        "Attach an IAM role with the required S3 permissions to the instance",
        "Use the AWS account root user's access keys in the application",
        "Make the S3 bucket public so that the instance can read the objects"
      ],
      "answer": "B",
      "explanation": "When an IAM role is attached to an EC2 instance through an instance profile, the application receives temporary credentials that AWS rotates automatically, so no long-term access keys are stored on the instance. Giving the role only the S3 permissions it needs also follows the principle of least privilege. Stored access keys can leak, the root user should never be used for everyday tasks, and a public bucket exposes the data to everyone.",
      "topic": "Security and Compliance",
      "subtopic": "Identify AWS access management capabilities",
      "difficulty": "medium",
      "source": "CLF-C02 Task 2.3: Identify AWS access management capabilities; IAM roles for Amazon EC2 and IAM security best practices"
    },
    {
      "stem": "A company stores large amounts of customer data in Amazon S3. The company needs to automatically discover and classify sensitive data, such as personally identifiable information (PII), across its S3 buckets. Which AWS service will meet these requirements?",
      "options": [
        "Amazon Inspector",
        "Amazon GuardDuty",
        "Amazon Detective",
        "Amazon Macie"
      ],
      "answer": "D",
      "explanation": "Amazon Macie uses machine learning and pattern matching to discover sensitive data, such as PII, in Amazon S3. It also reports on the security and access settings of S3 buckets. Amazon Inspector scans workloads for software vulnerabilities, Amazon GuardDuty detects threats from account and network activity, and Amazon Detective helps investigate the root cause of security findings.",
      "topic": "Security and Compliance",
      "subtopic": "Identify components and resources for security",
      "difficulty": "medium",
      "source": "CLF-C02 Task 2.4: Identify components and resources for security; Amazon Macie"
    },
    {
      "stem": "A company runs a public web application behind Amazon CloudFront and Amazon Route 53. The company needs enhanced protection against large distributed denial of service (DDoS) attacks, around-the-clock access to the AWS Shield Response Team (SRT), and protection against higher AWS charges caused by scaling during a DDoS attack. Which AWS service or feature will meet these requirements?",
      "options": [
        "AWS Shield Standard",
        "AWS Shield Advanced",
        "AWS WAF",
        "AWS Firewall Manager"
      ],
      "answer": "B",
      "explanation": "AWS Shield Standard is included automatically at no extra cost and protects against the most common network and transport layer DDoS attacks. AWS Shield Advanced is a paid service that adds enhanced detection and mitigation for larger and more sophisticated attacks, 24/7 access to the Shield Response Team, and cost protection against scaling charges caused by a DDoS attack. AWS WAF filters web requests by rules, and AWS Firewall Manager centrally manages protection policies, but neither provides the SRT access or cost protection.",
      "topic": "Security and Compliance",
      "subtopic": "Identify components and resources for security",
      "difficulty": "hard",
      "source": "CLF-C02 Task 2.4: Identify components and resources for security; AWS Shield Standard and AWS Shield Advanced"
    },
    {
      "stem": "A security group was deleted from a company's AWS account. The security team needs to find out which IAM identity made the deletion and when it happened. Which AWS service will meet this requirement?",
      "options": [
        "AWS CloudTrail",
        "Amazon CloudWatch",
        "AWS Trusted Advisor",
        "Amazon Inspector"
      ],
      "answer": "A",
      "explanation": "AWS CloudTrail records the API calls made in an AWS account, including who made each call, from where, and when. Deleting a security group is an API action, so its CloudTrail event shows the identity and the time. Amazon CloudWatch monitors metrics and logs for operational health, AWS Trusted Advisor gives best-practice recommendations, and Amazon Inspector scans for vulnerabilities.",
      "topic": "Security and Compliance",
      "subtopic": "Understand AWS Cloud security, governance, and compliance concepts",
      "difficulty": "easy",
      "source": "CLF-C02 Task 2.2: Governance and compliance concepts (auditing and logging); AWS CloudTrail"
    },
    {
      "stem": "Which statement describes an Availability Zone in the AWS global infrastructure?",
      "options": [
        "A geographic area that contains multiple isolated locations where AWS data centers are grouped",
        "A site that caches content close to end users for Amazon CloudFront",
        "One or more discrete data centers with redundant power, networking, and connectivity in a Region",
        "An extension of a Region that places select services close to a large city"
      ],
      "answer": "C",
      "explanation": "An Availability Zone is one or more discrete data centers with redundant power, networking, and connectivity inside an AWS Region. Each Region has multiple Availability Zones that are physically separated but connected by low-latency links, so running a workload across several of them protects it if one location fails. A Region is the larger geographic area, edge locations serve cached content, and Local Zones extend a Region closer to users in a metropolitan area.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Define the AWS global infrastructure",
      "difficulty": "easy",
      "source": "CLF-C02 Task 3.2: Define the AWS global infrastructure; Regions, Availability Zones, edge locations, and Local Zones"
    },
    {
      "stem": "A company wants to run code automatically each time a file is uploaded to an Amazon S3 bucket. The company does not want to provision or manage servers, and it wants to pay only for the compute time that the code uses. Which AWS service will meet these requirements?",
      "options": [
        "AWS Lambda",
        "Amazon EC2",
        "Amazon Lightsail",
        "AWS Elastic Beanstalk"
      ],
      "answer": "A",
      "explanation": "AWS Lambda is a serverless, event-driven compute service. It runs code in response to events, such as an object being uploaded to Amazon S3, and charges based on the number of requests and how long the code runs. With Amazon EC2 and Amazon Lightsail, the customer provisions servers and pays while they run. AWS Elastic Beanstalk deploys applications onto EC2 instances that it creates in the customer's account.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS compute services",
      "difficulty": "easy",
      "source": "CLF-C02 Task 3.3: Identify AWS compute services; AWS Lambda and serverless compute"
    },
    {
      "stem": "A gaming company needs a fully managed, serverless database to store player session data as key-value items. The database must deliver consistent single-digit millisecond performance as the number of players grows. Which AWS service will meet these requirements?",
      "options": [
        "Amazon RDS",
        "Amazon Redshift",
        "Amazon Neptune",
        "Amazon DynamoDB"
      ],
      "answer": "D",
      "explanation": "Amazon DynamoDB is a fully managed, serverless NoSQL database for key-value and document data. It provides single-digit millisecond performance at virtually any scale. Amazon RDS runs relational database engines, Amazon Redshift is a data warehouse for analytics, and Amazon Neptune is a graph database for highly connected data.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS database services",
      "difficulty": "medium",
      "source": "CLF-C02 Task 3.4: Identify AWS database services; Amazon DynamoDB"
    },
    {
      "stem": "A company needs a dedicated, private network connection between its on-premises data center and AWS. The traffic must not travel over the public internet, and the company wants consistent network performance. Which AWS service will meet these requirements?",
      "options": [
        "AWS Site-to-Site VPN",
        "Amazon CloudFront",
        "AWS Direct Connect",
        "AWS Global Accelerator"
      ],
      "answer": "C",
      "explanation": "AWS Direct Connect links an on-premises network to AWS through a dedicated private connection at a Direct Connect location. Traffic does not cross the public internet, so performance is more consistent. AWS Site-to-Site VPN creates an encrypted tunnel, but the tunnel runs over the public internet. Amazon CloudFront delivers content to end users, and AWS Global Accelerator routes users' traffic to applications over the AWS global network.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS network services",
      "difficulty": "medium",
      "source": "CLF-C02 Task 3.5: Identify AWS network services; connectivity options AWS Direct Connect and AWS Site-to-Site VPN"
    },
    {
      "stem": "A company must keep financial records for 10 years to meet regulations. The records will be read once or twice a year at most, and a retrieval time of up to 12 hours is acceptable. The company wants the lowest possible storage cost. Which Amazon S3 storage class will meet these requirements?",
      "options": [
        "S3 Standard-Infrequent Access (S3 Standard-IA)",
        "S3 Glacier Instant Retrieval",
        "S3 Glacier Flexible Retrieval",
        "S3 Glacier Deep Archive"
      ],
      "answer": "D",
      "explanation": "S3 Glacier Deep Archive is the lowest-cost S3 storage class. It is designed for long-term retention of rarely accessed data, and standard retrievals complete within 12 hours. S3 Glacier Flexible Retrieval also suits archives and retrieves data faster (minutes to hours), but it costs more to store, and this workload does not need the faster retrieval. S3 Standard-IA and S3 Glacier Instant Retrieval give millisecond access, which this workload also does not need, at a higher storage price.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS storage services",
      "difficulty": "hard",
      "source": "CLF-C02 Task 3.6: Identify AWS storage services; Amazon S3 storage classes"
    },
    {
      "stem": "A company wants to analyze recordings of its customer support calls. It needs to convert the speech in the recordings into text and then determine whether each conversation expresses positive or negative sentiment. Which combination of AWS services will meet these requirements? (Choose TWO.)",
      "options": [
        "Amazon Polly",
        "Amazon Transcribe",
        "Amazon Rekognition",
        "Amazon Comprehend",
        "Amazon Translate"
      ],
      "answer": "BD",
      "explanation": "Amazon Transcribe uses automatic speech recognition to convert audio into text. Amazon Comprehend uses natural language processing to find insights in text, including sentiment. Used together, they turn call audio into text and then score its sentiment. Amazon Polly does the opposite of Transcribe and turns text into speech, Amazon Rekognition analyzes images and video, and Amazon Translate translates text between languages.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS artificial intelligence and machine learning (AI/ML) services and analytics services",
      "difficulty": "medium",
      "source": "CLF-C02 Task 3.7: Identify AWS AI/ML services and analytics services; Amazon Transcribe and Amazon Comprehend"
    },
    {
      "stem": "A company wants to create the same set of AWS resources, including VPCs, EC2 instances, and databases, repeatedly and consistently in several AWS accounts. The company wants to define these resources in template files that it can keep in version control. Which AWS service will meet these requirements?",
      "options": [
        "AWS CloudFormation",
        "AWS Config",
        "AWS CodeDeploy",
        "AWS Trusted Advisor"
      ],
      "answer": "A",
      "explanation": "AWS CloudFormation is an infrastructure as code (IaC) service. Resources are described in JSON or YAML templates, and CloudFormation provisions and updates them as a stack in a repeatable way. The templates are text files, so they can be stored and reviewed in version control, and StackSets can deploy the same template across multiple accounts and Regions. AWS Config records and evaluates resource configurations, AWS CodeDeploy automates deploying application code, and AWS Trusted Advisor gives best-practice recommendations.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Define methods of deploying and operating in the AWS Cloud",
      "difficulty": "medium",
      "source": "CLF-C02 Task 3.1: Define methods of deploying and operating in the AWS Cloud; infrastructure as code with AWS CloudFormation"
    },
    {
      "stem": "A company has a steady amount of compute usage that it expects to continue for the next 3 years. It runs workloads on Amazon EC2 across several instance families and AWS Regions, and it is moving some workloads to AWS Fargate and AWS Lambda. The company wants a discount in exchange for a usage commitment that applies automatically across all of this usage. Which pricing model will meet these requirements?",
      "options": [
        "Standard Reserved Instances",
        "EC2 Instance Savings Plans",
        "Compute Savings Plans",
        "Spot Instances"
      ],
      "answer": "C",
      "explanation": "Compute Savings Plans give a discount in exchange for a commitment to a consistent amount of compute spend, measured in dollars per hour, for a 1-year or 3-year term. The discount applies automatically to EC2 usage regardless of instance family, size, Availability Zone, Region, operating system, or tenancy, and it also applies to AWS Fargate and AWS Lambda. Standard Reserved Instances and EC2 Instance Savings Plans are limited to particular EC2 instance families in a specific Region and do not cover Fargate or Lambda. Spot Instances use spare capacity that can be interrupted and involve no commitment.",
      "topic": "Billing, Pricing, and Support",
      "subtopic": "Compare AWS pricing models",
      "difficulty": "hard",
      "source": "CLF-C02 Task 4.1: Compare AWS pricing models; Savings Plans types and Reserved Instances"
    },
    {
      "stem": "A company wants to receive an email alert when its forecasted AWS costs for the month are expected to exceed a set amount. Which AWS service or feature will meet this requirement?",
      "options": [
        "AWS Pricing Calculator",
        "AWS Budgets",
        "AWS Cost Explorer",
        "AWS Cost and Usage Report"
      ],
      "answer": "B",
      "explanation": "AWS Budgets lets a company set a cost or usage amount and sends alerts, by email or through Amazon SNS, when actual or forecasted spending exceeds that threshold. AWS Cost Explorer visualizes and forecasts spending but does not send threshold alerts. AWS Pricing Calculator estimates costs before resources are deployed, and the AWS Cost and Usage Report delivers detailed billing data for analysis.",
      "topic": "Billing, Pricing, and Support",
      "subtopic": "Understand resources for billing, budget, and cost management",
      "difficulty": "easy",
      "source": "CLF-C02 Task 4.2: Understand resources for billing, budget, and cost management; AWS Budgets"
    }
  ]
}
```
