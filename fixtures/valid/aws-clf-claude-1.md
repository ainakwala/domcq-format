```json
{
  "format": "domcq/1",
  "exam": "aws-clf",
  "set": "AWS Certified Cloud Practitioner practice – CLF-C02 mixed domains set 1",
  "questions": [
    {
      "stem": "An online retailer's website traffic rises sharply during a two-week holiday sale and then returns to normal levels. The company wants compute capacity to be added automatically as demand increases and removed automatically as demand decreases, so that it pays only for the capacity it needs. Which benefit of the AWS Cloud does this describe?",
      "options": [
        "High availability",
        "Elasticity",
        "Fault tolerance",
        "Durability",
        "Global reach"
      ],
      "answer": "B",
      "explanation": "Elasticity is the ability to acquire resources when you need them and release them when you no longer need them, usually automatically (for example, with Amazon EC2 Auto Scaling). Because capacity follows demand, the company does not pay for idle peak capacity for the rest of the year. High availability and fault tolerance are about keeping a workload running when components fail, and durability is about not losing stored data.",
      "topic": "Cloud Concepts",
      "subtopic": "Define the benefits of the AWS Cloud",
      "difficulty": "easy",
      "source": "CLF-C02 Exam Guide, Task 1.1: advantages of high availability, elasticity, and agility"
    },
    {
      "stem": "A company wants to reduce the energy consumption and environmental impact of its cloud workloads by maximizing resource utilization and adopting more efficient hardware and software offerings. Which pillar of the AWS Well-Architected Framework provides guidance for this goal?",
      "options": [
        "Operational excellence",
        "Performance efficiency",
        "Cost optimization",
        "Sustainability",
        "Reliability"
      ],
      "answer": "D",
      "explanation": "The sustainability pillar focuses on minimizing the environmental impacts of running cloud workloads. Its design principles include understanding your impact, maximizing utilization, anticipating and adopting new, more efficient hardware and software offerings, and using managed services. Cost optimization can also reduce waste, but its goal is delivering business value at the lowest price point, not reducing environmental impact.",
      "topic": "Cloud Concepts",
      "subtopic": "Identify design principles of the AWS Cloud",
      "difficulty": "easy",
      "source": "CLF-C02 Exam Guide, Task 1.2; AWS Well-Architected Framework – Sustainability Pillar, design principles"
    },
    {
      "stem": "A company is preparing for a large migration to AWS. Its leadership wants to assess how employees' roles and skills will need to change and how to evolve the company's culture to support cloud adoption. Which perspective of the AWS Cloud Adoption Framework (AWS CAF) addresses these concerns?",
      "options": [
        "People",
        "Governance",
        "Platform",
        "Operations",
        "Business"
      ],
      "answer": "A",
      "explanation": "The People perspective of AWS CAF links technology and business and covers capabilities such as culture evolution, transformational leadership, cloud fluency, workforce transformation, and organization design. The Business perspective focuses on business outcomes and investments, Governance on orchestrating cloud initiatives while managing risk, Platform on building the cloud platform, and Operations on delivering cloud services at the service levels the business needs.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand the benefits of and strategies for migration to the AWS Cloud",
      "difficulty": "medium",
      "source": "CLF-C02 Exam Guide, Task 1.3; AWS Cloud Adoption Framework (AWS CAF) – People perspective"
    },
    {
      "stem": "A company runs a self-managed MySQL database on an on-premises server. It plans to move the database to Amazon RDS for MySQL so that AWS takes over tasks such as patching and backups. The company will not change the application's core architecture. Which migration strategy is the company using?",
      "options": [
        "Rehost",
        "Refactor",
        "Replatform",
        "Repurchase",
        "Retain"
      ],
      "answer": "C",
      "explanation": "Replatforming (sometimes called lift, tinker, and shift) moves an application to the cloud with a few optimizations, such as switching to a managed service, without changing its core architecture. Moving a self-managed database to Amazon RDS is a standard example because it removes operational work while keeping the same database engine. Rehosting would move the server as-is, for example onto Amazon EC2, and refactoring would re-architect the application to use cloud-native features.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand the benefits of and strategies for migration to the AWS Cloud",
      "difficulty": "medium",
      "source": "CLF-C02 Exam Guide, Task 1.3: migration strategies; AWS Prescriptive Guidance – migration strategies (the 7 Rs)"
    },
    {
      "stem": "A company is comparing the total cost of ownership (TCO) of its on-premises data center with the cost of running the same workloads on Amazon EC2. Which cost will the company no longer pay directly after it migrates the workloads?",
      "options": [
        "Salaries of developers who maintain the application code",
        "Effort to patch the guest operating systems on the servers",
        "Time spent managing application user accounts and permissions",
        "Work to configure firewall rules for the application servers",
        "Electricity and cooling for the physical server hardware"
      ],
      "answer": "E",
      "explanation": "On Amazon EC2, AWS owns and operates the physical data centers, so facility costs such as power, cooling, space, and hardware maintenance are built into the price of the service rather than paid directly by the company. The company still pays for the staff time spent on tasks it remains responsible for, such as application development, guest operating system patching, access management, and security group configuration. Recognizing which costs shift to AWS and which remain is central to a fair TCO comparison.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand concepts of cloud economics",
      "difficulty": "medium",
      "source": "CLF-C02 Exam Guide, Task 1.4: costs associated with on-premises environments; fixed vs. variable costs"
    },
    {
      "stem": "A company uses Amazon RDS for MySQL. According to the AWS shared responsibility model, which task is the company's responsibility?",
      "options": [
        "Patching the operating system of the database host",
        "Replacing failed storage hardware in the data center",
        "Configuring the security group rules for the DB instance",
        "Installing the MySQL database engine software",
        "Maintaining the physical security of the facilities"
      ],
      "answer": "C",
      "explanation": "Amazon RDS is a managed service, so AWS is responsible for the physical facilities and hardware, the host operating system, and installing and patching the database engine software. The customer remains responsible for security in the cloud, which includes controlling network access to the DB instance with security groups, managing database users and IAM permissions, and choosing options such as encryption. The more managed a service is, the more of the stack AWS takes on, but network access control stays with the customer.",
      "topic": "Security and Compliance",
      "subtopic": "Understand the AWS shared responsibility model",
      "difficulty": "medium",
      "source": "CLF-C02 Exam Guide, Task 2.1; Amazon RDS User Guide – Security in Amazon RDS"
    },
    {
      "stem": "Which actions are AWS recommended best practices for protecting the AWS account root user? (Choose TWO.)",
      "options": [
        "Enable multi-factor authentication (MFA) for the root user",
        "Use the root user for daily administrative tasks",
        "Share the root user password with all administrators",
        "Avoid creating access keys for the root user",
        "Attach an IAM policy that limits the root user's permissions"
      ],
      "answer": "AD",
      "explanation": "The root user has unrestricted access to everything in the account, so AWS recommends protecting it with MFA and not creating access keys for it (deleting any that exist), because leaked long-term root credentials would give an attacker full control. Everyday work should be done with less-privileged identities, and root credentials should not be shared. Identity-based IAM policies cannot be attached to the root user to limit its permissions.",
      "topic": "Security and Compliance",
      "subtopic": "Identify AWS access management capabilities",
      "difficulty": "easy",
      "source": "CLF-C02 Exam Guide, Task 2.3: protecting the root user; IAM User Guide – root user best practices"
    },
    {
      "stem": "An application that runs on an Amazon EC2 instance needs to read objects from an Amazon S3 bucket in the same AWS account. What is the MOST secure way to give the application access to the bucket?",
      "options": [
        "Store an IAM user's access keys in a configuration file on the instance",
        "Attach an IAM role that has the required S3 permissions to the instance",
        "Use the AWS account root user's access keys in the application code",
        "Make the S3 bucket public so that the application can read the objects",
        "Embed an IAM user's credentials in the Amazon Machine Image (AMI)"
      ],
      "answer": "B",
      "explanation": "An IAM role attached to an EC2 instance (through an instance profile) provides the application with temporary credentials that AWS rotates automatically, so no long-term secrets are stored on the instance or in code. Giving the role only the S3 permissions it needs also follows the principle of least privilege. Stored or embedded access keys can leak and must be rotated manually, root user keys grant unrestricted access, and a public bucket exposes the data to everyone.",
      "topic": "Security and Compliance",
      "subtopic": "Identify AWS access management capabilities",
      "difficulty": "medium",
      "source": "CLF-C02 Exam Guide, Task 2.3; IAM User Guide – IAM roles for applications running on Amazon EC2 instances"
    },
    {
      "stem": "A company's external auditors need copies of AWS compliance reports, such as System and Organization Controls (SOC) reports and ISO certifications, to review the controls that AWS operates. Which AWS service provides on-demand access to these reports?",
      "options": [
        "AWS Audit Manager",
        "AWS Trusted Advisor",
        "AWS Config",
        "AWS Artifact",
        "AWS Security Hub"
      ],
      "answer": "D",
      "explanation": "AWS Artifact is a self-service portal that provides on-demand access to AWS security and compliance reports, such as SOC and PCI reports and ISO certifications, as well as select online agreements. These reports show auditors how AWS meets its side of the shared responsibility model. AWS Audit Manager, by contrast, helps a customer collect evidence about its own use of AWS for its own audits.",
      "topic": "Security and Compliance",
      "subtopic": "Understand AWS Cloud security, governance, and compliance concepts",
      "difficulty": "easy",
      "source": "CLF-C02 Exam Guide, Task 2.2: where to find AWS compliance information; AWS Artifact User Guide"
    },
    {
      "stem": "A company uses AWS Organizations. It must prevent all IAM users and roles in the member accounts of one organizational unit (OU), including the administrators of those accounts, from using any AWS Region other than two approved Regions. Which AWS service or feature will meet this requirement?",
      "options": [
        "Service control policies (SCPs)",
        "IAM permissions boundaries",
        "AWS Config rules",
        "Resource-based policies",
        "IAM identity-based policies"
      ],
      "answer": "A",
      "explanation": "SCPs are a feature of AWS Organizations that set the maximum permissions available to principals in member accounts, and an SCP attached to an OU applies to every IAM user and role in its accounts, including account administrators and the root user of those accounts. An SCP that denies actions outside the approved Regions is therefore a central guardrail that account administrators cannot override. Identity-based policies and permissions boundaries are managed inside each account, so its administrators could change them, and AWS Config rules detect noncompliant resources rather than preventing actions.",
      "topic": "Security and Compliance",
      "subtopic": "Understand AWS Cloud security, governance, and compliance concepts",
      "difficulty": "hard",
      "source": "CLF-C02 Exam Guide, Domain 2: governance with AWS Organizations; AWS Organizations User Guide – Service control policies (SCPs)"
    },
    {
      "stem": "A company wants a managed threat detection service that continuously analyzes AWS CloudTrail events, VPC Flow Logs, and DNS logs to identify malicious or unauthorized activity, such as API calls from known malicious IP addresses. Which AWS service will meet these requirements?",
      "options": [
        "Amazon Inspector",
        "Amazon Macie",
        "AWS Shield",
        "AWS WAF",
        "Amazon GuardDuty"
      ],
      "answer": "E",
      "explanation": "Amazon GuardDuty is a threat detection service that applies threat intelligence, anomaly detection, and machine learning to data sources such as CloudTrail events, VPC Flow Logs, and DNS logs, and it reports suspicious activity as security findings. It needs no agents or extra infrastructure to analyze these foundational sources. Amazon Inspector scans workloads for software vulnerabilities, Amazon Macie discovers sensitive data in Amazon S3, and AWS Shield and AWS WAF protect applications against DDoS attacks and web exploits.",
      "topic": "Security and Compliance",
      "subtopic": "Identify components and resources for security",
      "difficulty": "medium",
      "source": "CLF-C02 Exam Guide, Task 2.4: AWS security services; Amazon GuardDuty User Guide"
    },
    {
      "stem": "A company wants its application to keep running if a single data center in an AWS Region fails. All of the company's resources must stay in that Region. How can the company achieve this objective by using the AWS global infrastructure?",
      "options": [
        "Deploy the application to several edge locations in the Region",
        "Deploy the application on a larger instance in one Availability Zone",
        "Deploy the application across multiple Availability Zones in the Region",
        "Deploy the application in one Availability Zone with nightly backups"
      ],
      "answer": "C",
      "explanation": "Each AWS Region contains multiple, physically separate Availability Zones, and each Availability Zone consists of one or more discrete data centers with redundant power, networking, and connectivity. Running the application in at least two Availability Zones means that the failure of one data center or zone does not take the whole application down. Edge locations are used by services such as Amazon CloudFront to deliver content close to users, and a single Availability Zone remains a single point of failure however large the instance or frequent the backups.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Define the AWS global infrastructure",
      "difficulty": "easy",
      "source": "CLF-C02 Exam Guide, Task 3.2: Regions, Availability Zones, and high availability"
    },
    {
      "stem": "A company wants to run its containerized applications on Amazon Elastic Container Service (Amazon ECS) without having to provision, configure, or scale clusters of virtual machines. Which AWS service or feature will meet these requirements?",
      "options": [
        "AWS Fargate",
        "Amazon Elastic Container Registry (Amazon ECR)",
        "Amazon EC2 Auto Scaling",
        "AWS Outposts",
        "Amazon Lightsail"
      ],
      "answer": "A",
      "explanation": "AWS Fargate is a serverless compute engine for containers that works with Amazon ECS and Amazon EKS. The company specifies the CPU and memory each task needs and AWS runs it, so there are no EC2 instances to choose, patch, or scale. Amazon ECR only stores container images, EC2 Auto Scaling still leaves the company managing instances, AWS Outposts runs AWS infrastructure on premises, and Amazon Lightsail provides simple virtual private servers.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS compute services",
      "difficulty": "medium",
      "source": "CLF-C02 Exam Guide, Task 3.3: container and serverless compute; Amazon ECS Developer Guide – AWS Fargate"
    },
    {
      "stem": "A company wants to migrate an on-premises Oracle database to Amazon Aurora PostgreSQL-Compatible Edition. The company must convert the database schema to the new database engine and then move the data with minimal downtime. Which AWS services or tools should the company use? (Choose TWO.)",
      "options": [
        "AWS DataSync",
        "AWS Database Migration Service",
        "AWS Application Discovery Service",
        "AWS Storage Gateway",
        "AWS Schema Conversion Tool"
      ],
      "answer": "BE",
      "explanation": "Moving from Oracle to PostgreSQL is a heterogeneous migration, so the schema and code objects such as stored procedures must be converted first, which is what the AWS Schema Conversion Tool (AWS SCT) does. AWS Database Migration Service (AWS DMS) then migrates the data and can keep the target in sync through ongoing replication, so the source stays available until cutover. DataSync and Storage Gateway handle file and object data rather than database migration, and Application Discovery Service gathers information about on-premises servers for migration planning.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS database services",
      "difficulty": "hard",
      "source": "CLF-C02 Exam Guide, Task 3.4: database migration tools (AWS DMS, AWS SCT)"
    },
    {
      "stem": "Which statements about security groups in an Amazon VPC are correct? (Choose TWO.)",
      "options": [
        "They are applied at the subnet level to every instance in the subnet",
        "They evaluate rules in numbered order and stop at the first match",
        "They are stateful, so return traffic for allowed requests is allowed",
        "They support allow rules only; traffic not explicitly allowed is denied",
        "They support deny rules that block traffic from specific IP addresses"
      ],
      "answer": "CD",
      "explanation": "A security group acts as a virtual firewall for resources such as EC2 instances and is associated with their network interfaces. It is stateful, so when traffic is allowed in one direction the response is automatically allowed, and it contains only allow rules, with all rules evaluated before traffic is permitted. Network ACLs are the VPC feature that works at the subnet level, is stateless, supports deny rules, and evaluates numbered rules in order.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS network services",
      "difficulty": "hard",
      "source": "CLF-C02 Exam Guide, Task 3.5: security in a VPC (security groups, network ACLs); Amazon VPC User Guide"
    },
    {
      "stem": "A company must retain compliance records for 7 years. The records will rarely, if ever, be read, and when a record is needed, a retrieval time of up to 12 hours is acceptable. Which Amazon S3 storage class will meet these requirements MOST cost-effectively?",
      "options": [
        "S3 Glacier Instant Retrieval",
        "S3 Glacier Deep Archive",
        "S3 Standard-Infrequent Access (S3 Standard-IA)",
        "S3 Glacier Flexible Retrieval",
        "S3 One Zone-Infrequent Access (S3 One Zone-IA)"
      ],
      "answer": "B",
      "explanation": "S3 Glacier Deep Archive is the lowest-cost S3 storage class and is designed for long-term retention of data that is accessed once or twice a year or less, such as compliance archives. Its standard retrieval completes within 12 hours, which meets the stated requirement. S3 Glacier Instant Retrieval, S3 Glacier Flexible Retrieval, and the Infrequent Access classes offer faster access but cost more per GB stored, so they are not the most cost-effective choice here.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS storage services",
      "difficulty": "medium",
      "source": "CLF-C02 Exam Guide, Task 3.6: Amazon S3 storage classes; Amazon S3 User Guide – Storage classes"
    },
    {
      "stem": "A company receives thousands of written customer reviews each day. It wants to automatically determine whether each review expresses positive, negative, neutral, or mixed sentiment, without building its own machine learning models. Which AWS service will meet these requirements?",
      "options": [
        "Amazon Rekognition",
        "Amazon Polly",
        "Amazon Transcribe",
        "Amazon Comprehend",
        "Amazon Textract"
      ],
      "answer": "D",
      "explanation": "Amazon Comprehend is a natural language processing (NLP) service that uses pre-trained machine learning to find insights in text, such as sentiment, key phrases, entities, and language. Its sentiment analysis classifies text as positive, negative, neutral, or mixed, so no custom model is needed. Rekognition analyzes images and video, Polly converts text to speech, Transcribe converts speech to text, and Textract extracts text and data from scanned documents.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS artificial intelligence and machine learning (AI/ML) services and analytics services",
      "difficulty": "medium",
      "source": "CLF-C02 Exam Guide, Task 3.7: AI/ML services; Amazon Comprehend Developer Guide – sentiment analysis"
    },
    {
      "stem": "A company wants to define its AWS infrastructure in template files so that it can provision identical environments in several AWS accounts and keep track of infrastructure changes in version control. Which AWS service will meet these requirements?",
      "options": [
        "AWS Config",
        "AWS CloudTrail",
        "AWS Systems Manager",
        "Amazon CloudWatch",
        "AWS CloudFormation"
      ],
      "answer": "E",
      "explanation": "AWS CloudFormation is an infrastructure as code (IaC) service: resources are described in JSON or YAML templates, and CloudFormation creates and updates them together as a stack. Because templates are text files, they can be kept in version control and reused, for example with StackSets across accounts and Regions, to build consistent, repeatable environments. AWS Config records resource configurations, CloudTrail logs API activity, CloudWatch monitors metrics and logs, and Systems Manager helps operate resources that already exist.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Define methods of deploying and operating in the AWS Cloud",
      "difficulty": "medium",
      "source": "CLF-C02 Exam Guide, Task 3.1: infrastructure as code; AWS CloudFormation User Guide"
    },
    {
      "stem": "A company wants to lower its compute costs by committing to a consistent amount of compute usage, measured in dollars per hour, for a 1-year or 3-year term. The discount must apply automatically to Amazon EC2 usage in any instance family and any AWS Region, and also to the company's AWS Lambda usage. Which pricing model will meet these requirements?",
      "options": [
        "EC2 Instance Savings Plans",
        "Convertible Reserved Instances",
        "Compute Savings Plans",
        "Standard Reserved Instances",
        "Spot Instances"
      ],
      "answer": "C",
      "explanation": "Compute Savings Plans give a discount in exchange for a 1-year or 3-year commitment to a consistent hourly spend, and they apply automatically to EC2 usage regardless of instance family, size, Availability Zone, Region, operating system, or tenancy, as well as to AWS Fargate and AWS Lambda usage. EC2 Instance Savings Plans offer a deeper discount but are tied to one instance family in one Region, and EC2 Reserved Instances apply only to EC2 instances that match their attributes. Spot Instances use spare capacity at a discount without any commitment, but they can be interrupted.",
      "topic": "Billing, Pricing, and Support",
      "subtopic": "Compare AWS pricing models",
      "difficulty": "hard",
      "source": "CLF-C02 Exam Guide, Task 4.1: Savings Plans and Reserved Instances; Savings Plans User Guide"
    },
    {
      "stem": "A company wants to receive an email notification when its forecasted AWS costs for the current month are expected to exceed $5,000. Which AWS service or feature will meet this requirement?",
      "options": [
        "AWS Pricing Calculator",
        "AWS Budgets",
        "AWS Cost Explorer",
        "AWS Trusted Advisor"
      ],
      "answer": "B",
      "explanation": "AWS Budgets lets you set custom cost or usage budgets and sends alerts, by email or through Amazon SNS, when actual or forecasted amounts exceed a threshold you define. AWS Cost Explorer is for visualizing and analyzing costs and viewing forecasts, but it does not send budget threshold alerts, and AWS Pricing Calculator estimates the cost of planned architectures before they are deployed.",
      "topic": "Billing, Pricing, and Support",
      "subtopic": "Understand resources for billing, budget, and cost management",
      "difficulty": "easy",
      "source": "CLF-C02 Exam Guide, Task 4.2: billing, budget, and cost management; AWS Cost Management User Guide – AWS Budgets"
    }
  ]
}
```
