```json
{
  "format": "domcq/1",
  "exam": "aws-clf",
  "set": "AWS Certified Cloud Practitioner practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A company buys enough on-premises servers to handle its forecasted peak demand. Most of the time, much of this capacity sits idle, and when demand exceeds the forecast, the servers cannot keep up. Which advantage of cloud computing addresses this problem?",
      "options": [
        "Go global in minutes",
        "Stop guessing capacity",
        "Benefit from massive economies of scale",
        "Increase speed and agility"
      ],
      "answer": "B",
      "explanation": "AWS lists stop guessing capacity as one of the six advantages of cloud computing: when capacity is decided before deployment, companies end up either paying for idle resources or running short of capacity. In the cloud, the company can use as much or as little capacity as it needs and scale up or down within minutes, often automatically. Economies of scale refers to the lower prices that come from AWS combining the usage of many customers, and speed and agility refers to how quickly new resources can be made available for experimentation.",
      "topic": "Cloud Concepts",
      "subtopic": "Define the benefits of the AWS Cloud",
      "difficulty": "easy",
      "source": "CLF-C02 Task 1.1; Overview of Amazon Web Services whitepaper – Six advantages of cloud computing"
    },
    {
      "stem": "A company wants its cloud operations team to make frequent, small, reversible changes, refine operations procedures frequently, and anticipate failure. Which pillar of the AWS Well-Architected Framework includes these design principles?",
      "options": [
        "Reliability",
        "Performance efficiency",
        "Security",
        "Operational excellence"
      ],
      "answer": "D",
      "explanation": "Making frequent, small, reversible changes, refining operations procedures frequently, and anticipating failure are design principles of the operational excellence pillar, which covers how an organization runs and monitors workloads and keeps improving its processes. Small, reversible changes limit the impact of any single change and make it easy to roll back. The reliability pillar focuses instead on a workload performing its intended function correctly and recovering from failure, with principles such as automatically recovering from failure and testing recovery procedures.",
      "topic": "Cloud Concepts",
      "subtopic": "Identify design principles of the AWS Cloud",
      "difficulty": "medium",
      "source": "AWS Well-Architected Framework – Operational excellence pillar, design principles; CLF-C02 Task 1.2"
    },
    {
      "stem": "A company plans to migrate an application from its data center to AWS. The company wants to move its self-managed MySQL database to Amazon RDS to reduce database administration effort, but it does not want to change the application's core architecture. Which migration strategy does this describe?",
      "options": [
        "Replatform",
        "Rehost",
        "Refactor",
        "Repurchase"
      ],
      "answer": "A",
      "explanation": "Replatforming, sometimes called lift, tinker, and shift, moves an application to the cloud while making a few targeted optimizations, such as moving a self-managed database to a managed service like Amazon RDS, without changing the core architecture. Rehosting would move the database as it is, for example onto Amazon EC2, so the company would still administer the database software itself. Refactoring re-architects the application to use cloud-native features, and repurchasing replaces it with a different product, usually software as a service (SaaS).",
      "topic": "Cloud Concepts",
      "subtopic": "Understand the benefits of and strategies for migration to the AWS Cloud",
      "difficulty": "medium",
      "source": "AWS Prescriptive Guidance – Migration strategies (the 7 Rs); CLF-C02 Task 1.3"
    },
    {
      "stem": "A company is moving all of its workloads from its own data center to AWS. Which costs will the company no longer need to pay for directly after the migration? (Choose TWO.)",
      "options": [
        "Developing and testing the company's own application code",
        "Purchasing and replacing physical server hardware",
        "Configuring user permissions for the company's data",
        "Classifying and encrypting the company's sensitive data",
        "Power, cooling, and physical security for the data center"
      ],
      "answer": "BE",
      "explanation": "One advantage of cloud computing is that a company stops spending money on running and maintaining data centers. AWS buys, maintains, and replaces the physical hardware and pays for the facilities, power, cooling, and physical security, and these costs are built into its pay-as-you-go prices. The company still owns its application code, its access configurations, and the protection of its data, so those costs remain after the migration.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand concepts of cloud economics",
      "difficulty": "easy",
      "source": "CLF-C02 Task 1.4; Six advantages of cloud computing – Stop spending money running and maintaining data centers"
    },
    {
      "stem": "A company is planning a large migration to AWS. Its leadership is concerned about workforce transformation, culture evolution, and helping employees build cloud skills. Which perspective of the AWS Cloud Adoption Framework (AWS CAF) focuses on these capabilities?",
      "options": [
        "Governance",
        "Operations",
        "People",
        "Platform"
      ],
      "answer": "C",
      "explanation": "The People perspective of AWS CAF acts as a bridge between technology and business and focuses on culture, organizational structure, leadership, and the workforce. Its capabilities include culture evolution, transformational leadership, cloud fluency, and workforce transformation. Governance focuses on orchestrating cloud initiatives while managing risk, Platform on building an enterprise-grade cloud platform, and Operations on delivering cloud services at the levels the business needs.",
      "topic": "Cloud Concepts",
      "subtopic": "Understand the benefits of and strategies for migration to the AWS Cloud",
      "difficulty": "medium",
      "source": "An Overview of the AWS Cloud Adoption Framework whitepaper – People perspective; CLF-C02 Task 1.3"
    },
    {
      "stem": "A company runs a production database on Amazon RDS for PostgreSQL. According to the AWS shared responsibility model, which task is the responsibility of AWS?",
      "options": [
        "Patching the database engine and the underlying operating system",
        "Creating database users and granting them permissions",
        "Configuring security group rules that allow database access",
        "Choosing whether to encrypt the database storage at rest"
      ],
      "answer": "A",
      "explanation": "Amazon RDS is a managed service, so AWS is responsible for patching the host operating system and the database software, which it applies during a maintenance window that the customer can choose. The customer remains responsible for security in the cloud: managing database users and permissions, network access rules such as security groups, and decisions about protecting data, such as enabling encryption. The more managed a service is, the more of the stack AWS takes responsibility for.",
      "topic": "Security and Compliance",
      "subtopic": "Understand the AWS shared responsibility model",
      "difficulty": "medium",
      "source": "AWS shared responsibility model; Amazon RDS User Guide – Security in Amazon RDS; CLF-C02 Task 2.1"
    },
    {
      "stem": "A company has just created a new AWS account. Which action follows AWS best practices for protecting the AWS account root user?",
      "options": [
        "Create access keys for the root user to use in automation scripts",
        "Share the root user credentials with administrators for emergencies",
        "Enable MFA on the root user and use it only for tasks that require it",
        "Use the root user for daily administration so all activity is in one place"
      ],
      "answer": "C",
      "explanation": "The root user has unrestricted access to every resource and to billing in the account, so AWS recommends protecting it with multi-factor authentication, not creating access keys for it, and using it only for the few tasks that require root credentials. Day-to-day work should be done by individual IAM identities or IAM Identity Center users with least-privilege permissions, so that each person's access can be controlled and audited separately.",
      "topic": "Security and Compliance",
      "subtopic": "Identify AWS access management capabilities",
      "difficulty": "easy",
      "source": "IAM User Guide – Root user best practices for your AWS account; CLF-C02 Task 2.3"
    },
    {
      "stem": "An auditor asks a company for copies of AWS compliance reports, such as AWS SOC reports and ISO certifications, that describe the security controls that AWS operates. Which AWS service provides on-demand access to these documents?",
      "options": [
        "AWS Audit Manager",
        "AWS Security Hub",
        "AWS Trusted Advisor",
        "AWS Artifact"
      ],
      "answer": "D",
      "explanation": "AWS Artifact is a self-service portal that gives on-demand access to AWS security and compliance reports, such as SOC, PCI, and ISO reports, and to certain online agreements. These third-party reports document the controls that AWS operates for its side of the shared responsibility model, so customers can pass them to their auditors. AWS Audit Manager helps a company collect evidence about its own use of AWS, but it does not provide the third-party audit reports about AWS itself.",
      "topic": "Security and Compliance",
      "subtopic": "Understand AWS Cloud security, governance, and compliance concepts",
      "difficulty": "easy",
      "source": "AWS Artifact User Guide – What is AWS Artifact?; CLF-C02 Task 2.2"
    },
    {
      "stem": "A company runs a public web application behind an Application Load Balancer. The company wants to block common web exploits such as SQL injection and cross-site scripting, and it wants protection against distributed denial of service (DDoS) attacks. Which AWS services will meet these requirements? (Choose TWO.)",
      "options": [
        "AWS WAF",
        "Amazon Inspector",
        "Amazon Macie",
        "AWS Shield",
        "Amazon GuardDuty"
      ],
      "answer": "AD",
      "explanation": "AWS WAF is a web application firewall that inspects HTTP and HTTPS requests to resources such as Application Load Balancers, Amazon CloudFront, and Amazon API Gateway, and its rules, including managed rule groups, can block patterns such as SQL injection and cross-site scripting. AWS Shield protects against DDoS attacks: Shield Standard is applied automatically at no extra cost, and Shield Advanced adds enhanced detection and mitigation. Amazon GuardDuty and Amazon Inspector detect threats and vulnerabilities but do not filter incoming web traffic, and Amazon Macie finds sensitive data in Amazon S3.",
      "topic": "Security and Compliance",
      "subtopic": "Identify components and resources for security",
      "difficulty": "medium",
      "source": "AWS WAF, AWS Firewall Manager, and AWS Shield Advanced Developer Guide; CLF-C02 Task 2.4"
    },
    {
      "stem": "A company must keep a history of how the configurations of its AWS resources change over time. The company also wants to automatically evaluate whether resources comply with internal rules, such as a rule that every Amazon EBS volume must be encrypted. Which AWS service will meet these requirements?",
      "options": [
        "AWS CloudTrail",
        "AWS Config",
        "Amazon CloudWatch",
        "AWS Trusted Advisor"
      ],
      "answer": "B",
      "explanation": "AWS Config records the configuration of supported resources, keeps a history of every change and of the relationships between resources, and uses Config rules to evaluate continuously whether configurations match the desired settings, such as requiring encrypted EBS volumes. AWS CloudTrail records API calls, showing who did what and when, rather than evaluating resource configurations against rules, and Amazon CloudWatch monitors metrics and logs. The two are often used together: CloudTrail shows who made a change, and Config shows what the resource looked like and whether it is compliant.",
      "topic": "Security and Compliance",
      "subtopic": "Understand AWS Cloud security, governance, and compliance concepts",
      "difficulty": "medium",
      "source": "AWS Config Developer Guide – How AWS Config works; CLF-C02 Task 2.2"
    },
    {
      "stem": "A company uses AWS Organizations to manage many AWS accounts. The security team must ensure that no user or role in any member account, including users with full administrator permissions in that account, can stop or delete AWS CloudTrail trails. Which AWS feature will meet this requirement?",
      "options": [
        "A service control policy (SCP) that denies the CloudTrail actions",
        "An IAM permissions boundary applied to each administrator",
        "An AWS Config rule that checks whether CloudTrail is enabled",
        "An IAM identity-based policy attached to each IAM group"
      ],
      "answer": "A",
      "explanation": "SCPs set the maximum permissions available to IAM users and roles in member accounts, including each member account's root user, so a deny on the CloudTrail stop and delete actions applies even to account administrators, who cannot remove the SCP from inside their account. Permissions boundaries and identity-based policies are managed within each account, so a full administrator there could change or remove them. An AWS Config rule only detects noncompliance after it happens; it does not prevent the action. SCPs do not grant permissions on their own, and they do not affect the management account.",
      "topic": "Security and Compliance",
      "subtopic": "Identify AWS access management capabilities",
      "difficulty": "hard",
      "source": "AWS Organizations User Guide – Service control policies (SCPs); CLF-C02 Task 2.3"
    },
    {
      "stem": "Which statement describes an Availability Zone in the AWS global infrastructure?",
      "options": [
        "A separate geographic area of the world that contains multiple isolated locations",
        "A site in a major city that caches content close to end users for lower latency",
        "One or more discrete data centers with redundant power, networking, and connectivity in a Region",
        "AWS-managed infrastructure that is installed in a customer's own on-premises facility"
      ],
      "answer": "C",
      "explanation": "AWS defines an Availability Zone as one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region. The Availability Zones in a Region are physically separated from each other but linked by low-latency, redundant networking, so deploying across multiple Availability Zones keeps an application available if one of them fails. A Region is the geographic area that contains the Availability Zones, an edge location caches content for Amazon CloudFront, and AWS Outposts brings AWS infrastructure into a customer's facility.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Define the AWS global infrastructure",
      "difficulty": "easy",
      "source": "AWS Global Infrastructure – Regions and Availability Zones; CLF-C02 Task 3.2"
    },
    {
      "stem": "A company wants to run a small piece of code each time a new image is uploaded to an Amazon S3 bucket. The company does not want to provision or manage servers and wants to pay only for the compute time that the code uses. Which AWS service will meet these requirements?",
      "options": [
        "Amazon EC2",
        "AWS Elastic Beanstalk",
        "Amazon Lightsail",
        "AWS Lambda"
      ],
      "answer": "D",
      "explanation": "AWS Lambda is a serverless compute service that runs code in response to events, such as an S3 object-created notification, and scales automatically without any servers for the customer to manage. Lambda charges for the number of requests and the duration of each execution, so there is no cost while the code is not running. With Amazon EC2 and Amazon Lightsail the company provisions and pays for instances while they run, and Elastic Beanstalk still launches EC2 instances on the company's behalf.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS compute services",
      "difficulty": "easy",
      "source": "AWS Lambda Developer Guide – Using Lambda with Amazon S3; CLF-C02 Task 3.3"
    },
    {
      "stem": "A company wants to move its on-premises MySQL database to a fully managed AWS database that is compatible with MySQL. The database storage must grow automatically as needed and must keep six copies of the data across three Availability Zones. Which AWS service will meet these requirements?",
      "options": [
        "Amazon RDS for MySQL",
        "Amazon Aurora",
        "Amazon DynamoDB",
        "Amazon Redshift"
      ],
      "answer": "B",
      "explanation": "Amazon Aurora is a fully managed relational database engine that is compatible with MySQL and PostgreSQL. Its storage is a shared cluster volume that grows automatically and keeps six copies of the data across three Availability Zones, which gives Aurora high durability and fast failover. Amazon RDS for MySQL is also managed and MySQL-compatible, but each DB instance keeps its data on its own attached storage rather than on a six-way replicated cluster volume. Amazon DynamoDB is a NoSQL key-value database, and Amazon Redshift is a data warehouse.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS database services",
      "difficulty": "hard",
      "source": "Amazon Aurora User Guide – Amazon Aurora storage and reliability; CLF-C02 Task 3.4"
    },
    {
      "stem": "A company wants to control network traffic in its VPC. The company needs one control that filters traffic for individual Amazon EC2 instances and another control that filters traffic entering and leaving entire subnets. Which AWS features will meet these requirements? (Choose TWO.)",
      "options": [
        "Amazon Route 53",
        "AWS Direct Connect",
        "Security groups",
        "Internet gateways",
        "Network ACLs"
      ],
      "answer": "CE",
      "explanation": "Security groups act as virtual firewalls for resources such as EC2 instances; they are stateful, so return traffic is allowed automatically, and they support allow rules only. Network ACLs apply at the subnet level; they are stateless, so return traffic must be allowed explicitly, and they support both allow and deny rules that are evaluated in number order. Route 53 is a DNS service, Direct Connect provides a dedicated private connection to AWS, and an internet gateway gives a VPC a path to the internet without filtering traffic.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS network services",
      "difficulty": "medium",
      "source": "Amazon VPC User Guide – Security groups; Control subnet traffic with network ACLs; CLF-C02 Task 3.5"
    },
    {
      "stem": "A company must store medical images for many years. The images are accessed about once per quarter, but when a doctor requests an image, it must be retrieved within milliseconds. The company wants the lowest storage cost that meets these requirements. Which Amazon S3 storage class will meet these requirements?",
      "options": [
        "S3 Standard",
        "S3 Glacier Deep Archive",
        "S3 Glacier Instant Retrieval",
        "S3 Glacier Flexible Retrieval"
      ],
      "answer": "C",
      "explanation": "S3 Glacier Instant Retrieval is designed for long-lived data that is accessed about once per quarter and still needs millisecond retrieval, and AWS positions it as the lowest-cost storage for that access pattern, in exchange for higher per-GB retrieval charges. S3 Glacier Flexible Retrieval and S3 Glacier Deep Archive cost less to store, but objects must first be restored, which takes minutes to hours or hours respectively, so they miss the millisecond requirement. S3 Standard meets the latency requirement but costs more to store data that is rarely accessed.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS storage services",
      "difficulty": "hard",
      "source": "Amazon S3 User Guide – Understanding and managing Amazon S3 storage classes; CLF-C02 Task 3.6"
    },
    {
      "stem": "A company records customer support phone calls. The company wants to convert the recorded speech into text and then analyze the text to determine whether each customer's sentiment is positive or negative. Which combination of AWS services will meet these requirements? (Choose TWO.)",
      "options": [
        "Amazon Polly",
        "Amazon Transcribe",
        "Amazon Rekognition",
        "Amazon Comprehend",
        "Amazon Translate"
      ],
      "answer": "BD",
      "explanation": "Amazon Transcribe uses automatic speech recognition to convert audio into text. Amazon Comprehend uses natural language processing to find insights in text, including sentiment, entities, and key phrases, so it can classify each transcript as positive, negative, neutral, or mixed. Amazon Polly does the opposite of Transcribe by turning text into speech, Amazon Rekognition analyzes images and video, and Amazon Translate converts text from one language to another.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Identify AWS artificial intelligence and machine learning (AI/ML) services and analytics services",
      "difficulty": "medium",
      "source": "Amazon Transcribe Developer Guide; Amazon Comprehend Developer Guide – Sentiment; CLF-C02 Task 3.7"
    },
    {
      "stem": "A company wants to define its AWS infrastructure, including VPCs, Amazon EC2 instances, and databases, in text files so that it can provision identical environments repeatedly and keep the definitions in version control. Which AWS service will meet these requirements?",
      "options": [
        "AWS CloudFormation",
        "AWS Elastic Beanstalk",
        "AWS CodeDeploy",
        "AWS Systems Manager"
      ],
      "answer": "A",
      "explanation": "AWS CloudFormation is an infrastructure as code service: resources are described in JSON or YAML templates, and CloudFormation provisions and updates them together as a stack in a predictable, repeatable way. Because templates are text files, they can be stored in version control, reviewed like code, and reused to build identical environments across accounts and Regions. Elastic Beanstalk deploys and manages web applications on preconfigured platforms, and CodeDeploy automates the deployment of application code, but neither is a general way to define arbitrary infrastructure.",
      "topic": "Cloud Technology and Services",
      "subtopic": "Define methods of deploying and operating in the AWS Cloud",
      "difficulty": "medium",
      "source": "AWS CloudFormation User Guide – What is AWS CloudFormation?; CLF-C02 Task 3.1"
    },
    {
      "stem": "A company runs workloads on Amazon EC2, AWS Fargate, and AWS Lambda. The company expects its overall compute usage to stay steady for the next 3 years, but it plans to change instance families and AWS Regions as its needs evolve. The company wants to reduce costs by making a usage commitment. Which pricing option will meet these requirements?",
      "options": [
        "EC2 Instance Savings Plans",
        "Standard Reserved Instances",
        "Spot Instances",
        "Compute Savings Plans"
      ],
      "answer": "D",
      "explanation": "With Compute Savings Plans, a company commits to a consistent amount of compute usage, measured in dollars per hour, for 1 or 3 years, and the discount applies automatically to EC2 usage regardless of instance family, size, Availability Zone, Region, operating system, or tenancy, as well as to Fargate and Lambda. EC2 Instance Savings Plans give a larger discount but are tied to one instance family in one Region, and Reserved Instances do not cover Fargate or Lambda. Spot Instances use spare capacity that can be interrupted and involve no commitment.",
      "topic": "Billing, Pricing, and Support",
      "subtopic": "Compare AWS pricing models",
      "difficulty": "hard",
      "source": "Savings Plans User Guide – Savings Plans types; CLF-C02 Task 4.1"
    },
    {
      "stem": "A company wants to receive an email alert when its forecasted AWS costs for the month are expected to exceed a set amount. The company also wants to automatically apply a restrictive IAM policy when actual costs reach that amount. Which AWS service or feature will meet these requirements?",
      "options": [
        "AWS Cost Explorer",
        "AWS Budgets",
        "AWS Pricing Calculator",
        "AWS Cost Anomaly Detection"
      ],
      "answer": "B",
      "explanation": "AWS Budgets lets a company set custom cost or usage budgets and sends alerts by email or Amazon SNS when actual or forecasted amounts cross a threshold. Budget actions can respond automatically when a threshold is reached, for example by applying an IAM policy or an SCP, or by stopping specific EC2 or RDS instances. Cost Explorer is for analyzing past and forecasted spend, Cost Anomaly Detection uses machine learning to flag unusual spending rather than a fixed amount, and Pricing Calculator estimates costs before anything is built.",
      "topic": "Billing, Pricing, and Support",
      "subtopic": "Understand resources for billing, budget, and cost management",
      "difficulty": "medium",
      "source": "AWS Cost Management User Guide – Managing your costs with AWS Budgets; Configuring budget actions; CLF-C02 Task 4.2"
    }
  ]
}
```
