```json
{
  "format": "domcq/1",
  "exam": "aws-dva",
  "set": "AWS Certified Developer - Associate practice – Core services mixed set",
  "questions": [
    {
      "stem": "A developer is writing an AWS Lambda function that queries an Amazon RDS for MySQL database. Monitoring shows that each invocation spends significant time opening a new database connection. The developer wants to reuse the connection across invocations that run in the same execution environment. Which solution will meet these requirements?",
      "options": [
        "Open the database connection at the start of the handler and close it at the end",
        "Initialize the database connection in code outside the handler function",
        "Serialize the connection object to the /tmp directory after each invocation",
        "Increase the function's memory so that the connection stays open for longer"
      ],
      "answer": "B",
      "explanation": "Code outside the handler runs once during the init phase of an execution environment, and Lambda reuses that environment for later invocations. Objects created there, such as SDK clients and database connections, persist across warm invocations, so the connection cost is paid only on a cold start. Opening the connection inside the handler repeats the cost on every invocation.",
      "rationales": {
        "A": "Wrong: creating and closing the connection inside the handler repeats the setup cost on every invocation.",
        "B": "Right: objects initialized outside the handler persist across warm invocations in the same execution environment.",
        "C": "Wrong: a live network connection cannot be serialized to a file and restored as an open connection.",
        "D": "Wrong: memory size does not control connection lifetime; the connection is still recreated on each invocation."
      },
      "topic": "Development with AWS Services",
      "subtopic": "Develop code for AWS Lambda",
      "difficulty": "easy",
      "source": "AWS Lambda Developer Guide: Lambda execution environment lifecycle; best practices for working with Lambda functions"
    },
    {
      "stem": "A company stores orders in an existing Amazon DynamoDB table that uses OrderId as the partition key. A developer must add a feature that retrieves all orders for a given CustomerId without reading the entire table. Which solution will meet these requirements with the LEAST development effort?",
      "options": [
        "Run a Scan operation with a FilterExpression on the CustomerId attribute",
        "Add a local secondary index that uses CustomerId as the sort key",
        "Enable DynamoDB Streams and copy each order into a second table keyed by CustomerId",
        "Add a global secondary index that uses CustomerId as the partition key"
      ],
      "answer": "D",
      "explanation": "A global secondary index can use a different partition key from the base table and can be added to an existing table, so the application can Query by CustomerId directly. Local secondary indexes must share the table's partition key and can only be created when the table is created. A Scan with a filter still reads every item, and the filter is applied only after the read.",
      "rationales": {
        "A": "Wrong: a Scan reads the whole table and consumes capacity for every item; the filter is applied after reading.",
        "B": "Wrong: an LSI keeps OrderId as the partition key and can only be defined when the table is created.",
        "C": "Wrong: this works but requires extra code and a second table, which is far more effort than an index.",
        "D": "Right: a GSI with CustomerId as partition key can be added to an existing table and supports efficient Query calls."
      },
      "topic": "Development with AWS Services",
      "subtopic": "Use data stores during application development",
      "difficulty": "medium",
      "source": "Amazon DynamoDB Developer Guide: Improving data access with secondary indexes (global vs local secondary indexes)"
    },
    {
      "stem": "Two instances of an application read the same item from an Amazon DynamoDB table, modify it, and write it back with PutItem. Occasionally one instance overwrites changes made by the other. The developer must ensure that a write fails if the item has changed since it was read. Which solution will meet these requirements?",
      "options": [
        "Keep a version number attribute and use a ConditionExpression that requires the version that was read",
        "Switch every GetItem request to use strongly consistent reads before the item is written",
        "Enable DynamoDB Streams and replay any changes that were overwritten by later writes",
        "Increase the table's provisioned write capacity so that each write completes faster"
      ],
      "answer": "A",
      "explanation": "This is optimistic locking: each write includes a condition that the stored version equals the version the client read, and it increments the version. If another writer changed the item in between, the condition fails with ConditionalCheckFailedException and the client can reread and retry. Consistent reads or extra capacity do not stop a write from overwriting a newer value.",
      "rationales": {
        "A": "Right: a conditional write on a version attribute (optimistic locking) rejects writes based on stale reads.",
        "B": "Wrong: strongly consistent reads return the latest data at read time but cannot stop a later overwrite.",
        "C": "Wrong: Streams record changes after they happen; replaying them does not prevent lost updates.",
        "D": "Wrong: write capacity affects throughput, not whether concurrent writes overwrite each other."
      },
      "topic": "Development with AWS Services",
      "subtopic": "Use data stores during application development",
      "difficulty": "medium",
      "source": "Amazon DynamoDB Developer Guide: Condition expressions; optimistic locking with version number"
    },
    {
      "stem": "An application polls an Amazon SQS standard queue in a loop. The queue is often empty, and the application makes many ReceiveMessage calls that return no messages, which increases cost. Which solution will reduce the number of empty responses?",
      "options": [
        "Set the queue's visibility timeout to 0 seconds",
        "Convert the queue to an SQS FIFO queue",
        "Set the queue's ReceiveMessageWaitTimeSeconds to 20 seconds",
        "Set the queue's DelaySeconds to 900 seconds"
      ],
      "answer": "C",
      "explanation": "Setting a receive wait time greater than zero enables long polling, where SQS holds the request open for up to 20 seconds until a message arrives. Long polling also queries all SQS servers, which removes false empty responses. Fewer empty responses means fewer billed requests.",
      "rationales": {
        "A": "Wrong: visibility timeout controls when received messages reappear, not how polling handles empty queues.",
        "B": "Wrong: FIFO queues change ordering and deduplication, not the number of empty receives.",
        "C": "Right: a wait time above zero enables long polling, which waits for messages instead of returning empty.",
        "D": "Wrong: a delay queue postpones message delivery and would not reduce empty ReceiveMessage responses."
      },
      "topic": "Development with AWS Services",
      "subtopic": "Develop code for applications that are hosted on AWS",
      "difficulty": "easy",
      "source": "Amazon SQS Developer Guide: Amazon SQS short and long polling"
    },
    {
      "stem": "An AWS Lambda function processes messages from an Amazon SQS queue through an event source mapping with a batch size of 10. When one message in a batch fails, all 10 messages become visible again and the successful messages are processed a second time. The developer wants only the failed messages to be retried. Which combination of steps will meet these requirements? (Choose TWO.)",
      "options": [
        "Set the function's reserved concurrency to 1",
        "Enable ReportBatchItemFailures on the event source mapping",
        "Configure an on-failure destination for asynchronous invocations",
        "Return a batchItemFailures list with the IDs of the failed messages",
        "Throw an exception whenever any message in the batch fails"
      ],
      "answer": "BD",
      "explanation": "With partial batch responses, the event source mapping must have ReportBatchItemFailures enabled and the function must return a batchItemFailures list containing the itemIdentifier (message ID) of each failed message. Lambda then deletes the successful messages and leaves only the failed ones on the queue for retry. Without this, any error makes the whole batch return to the queue.",
      "rationales": {
        "A": "Wrong: limiting concurrency changes parallelism, not how a failed batch is retried.",
        "B": "Right: this setting tells Lambda to read a partial batch response from the function.",
        "C": "Wrong: SQS event source mappings invoke synchronously, so asynchronous destinations do not apply.",
        "D": "Right: the returned message IDs tell Lambda which messages to keep; the rest are deleted.",
        "E": "Wrong: an unhandled exception fails the entire batch, which is exactly the current behavior."
      },
      "topic": "Development with AWS Services",
      "subtopic": "Develop code for AWS Lambda",
      "difficulty": "hard",
      "source": "AWS Lambda Developer Guide: Using Lambda with Amazon SQS; handling errors and reporting batch item failures"
    },
    {
      "stem": "An AWS Lambda function is attached to private subnets in a VPC so that it can reach an Amazon RDS database. The function must also call a third-party REST API on the public internet, but those calls currently time out. Which solution will resolve this issue?",
      "options": [
        "Create a NAT gateway in a public subnet and route the private subnets' internet traffic to it",
        "Add a route from the private subnets directly to the VPC's internet gateway",
        "Turn on the setting that assigns a public IP address to the Lambda function",
        "Create a gateway VPC endpoint for the third-party API's domain name"
      ],
      "answer": "A",
      "explanation": "Lambda network interfaces in a VPC have only private IP addresses, so they cannot use an internet gateway directly. Outbound internet access requires a NAT gateway in a public subnet, with the private subnets' default route (0.0.0.0/0) pointing to it. The function keeps its private access to RDS.",
      "rationales": {
        "A": "Right: a NAT gateway gives resources with private IPs outbound internet access.",
        "B": "Wrong: Lambda ENIs have no public IP, so traffic routed to an internet gateway cannot reach the internet.",
        "C": "Wrong: Lambda has no option to assign a public IP address to a VPC-attached function.",
        "D": "Wrong: gateway endpoints exist only for Amazon S3 and DynamoDB, not for third-party domains."
      },
      "topic": "Development with AWS Services",
      "subtopic": "Develop code for AWS Lambda",
      "difficulty": "medium",
      "source": "AWS Lambda Developer Guide: Giving Lambda functions access to resources in a VPC; internet access for VPC functions"
    },
    {
      "stem": "An application running on Amazon EC2 instances must read objects from an Amazon S3 bucket. The security team prohibits storing long-term credentials on the instances. Which solution will meet these requirements?",
      "options": [
        "Create an IAM user and store its access keys in the application's configuration file",
        "Store an IAM user's access keys as environment variables on each instance",
        "Attach an IAM role with S3 read permissions to the instances through an instance profile",
        "Add an S3 bucket ACL that grants read access to the instances' security group"
      ],
      "answer": "C",
      "explanation": "An IAM role attached through an instance profile provides temporary credentials through the instance metadata service, and AWS rotates them automatically. The AWS SDKs find these credentials through the default credential provider chain, so no keys are stored on the instance. Access keys belong to IAM users and are long-term credentials.",
      "rationales": {
        "A": "Wrong: IAM user access keys in a file are long-term credentials stored on the instance.",
        "B": "Wrong: environment variables still hold long-term access keys on the instance.",
        "C": "Right: an instance profile role supplies short-lived, automatically rotated credentials.",
        "D": "Wrong: S3 ACLs grant access to AWS accounts or groups, not to EC2 security groups."
      },
      "topic": "Security",
      "subtopic": "Implement authentication and authorization mechanisms for applications and AWS services",
      "difficulty": "easy",
      "source": "IAM User Guide: Using an IAM role to grant permissions to applications running on Amazon EC2 instances"
    },
    {
      "stem": "A mobile app lets users sign in with a username and password. After signing in, each user must upload photos directly to an Amazon S3 bucket by using temporary AWS credentials that allow access only to that user's own prefix. Which solution will meet these requirements?",
      "options": [
        "Use an Amazon Cognito user pool and sign the S3 requests with the user pool ID token",
        "Use a Cognito user pool for sign-in and a Cognito identity pool to obtain temporary AWS credentials",
        "Create an IAM user for each app user and return that user's access keys at sign-in",
        "Embed one IAM user's access keys in the app and give each user a separate S3 prefix"
      ],
      "answer": "B",
      "explanation": "A Cognito user pool authenticates users and issues JWTs, but JWTs cannot sign AWS API requests. A Cognito identity pool exchanges the user pool token for temporary AWS credentials for an IAM role. The role policy can use the ${cognito-identity.amazonaws.com:sub} variable to limit each user to their own prefix.",
      "rationales": {
        "A": "Wrong: user pool tokens are JWTs for authentication; S3 requests need AWS credentials with a SigV4 signature.",
        "B": "Right: the identity pool turns the authenticated identity into temporary, scoped AWS credentials.",
        "C": "Wrong: IAM users per app user do not scale and hand out long-term credentials.",
        "D": "Wrong: shared embedded keys are long-term, can be extracted, and do not restrict users to their own prefix."
      },
      "topic": "Security",
      "subtopic": "Implement authentication and authorization mechanisms for applications and AWS services",
      "difficulty": "medium",
      "source": "Amazon Cognito Developer Guide: User pools and identity pools; IAM policy variables for Cognito identities"
    },
    {
      "stem": "A developer must encrypt files of up to 50 MB by using a customer managed AWS KMS key before storing them. Calls to the KMS Encrypt API fail for these files because of their size. Which solution will meet these requirements MOST efficiently?",
      "options": [
        "Request a service quota increase for the maximum KMS Encrypt payload size",
        "Split each file into 4 KB chunks and call the Encrypt API once for each chunk",
        "Create a new KMS key for each file and call the Encrypt API with that key",
        "Call GenerateDataKey, encrypt the file locally with the plaintext key, and store the encrypted key with the file"
      ],
      "answer": "D",
      "explanation": "The KMS Encrypt API accepts at most 4 KB of plaintext, so larger data uses envelope encryption. GenerateDataKey returns a plaintext data key and the same key encrypted under the KMS key; the application encrypts the data locally, discards the plaintext key, and stores the encrypted data key with the ciphertext. To decrypt, the application calls KMS Decrypt on the data key only.",
      "rationales": {
        "A": "Wrong: the 4 KB plaintext limit for Encrypt is fixed and cannot be raised.",
        "B": "Wrong: chunking would need thousands of KMS calls per file, which is slow and costly.",
        "C": "Wrong: a new key per file does not change the 4 KB payload limit of Encrypt.",
        "D": "Right: envelope encryption with a data key handles data of any size with one KMS call."
      },
      "topic": "Security",
      "subtopic": "Implement encryption and manage sensitive data by using AWS services",
      "difficulty": "medium",
      "source": "AWS KMS Developer Guide: Envelope encryption; GenerateDataKey and Encrypt API reference"
    },
    {
      "stem": "An AWS Lambda function connects to an Amazon RDS database. Company policy states that the database password must never be stored in code or in plain-text configuration, and it must be rotated automatically every 30 days. Which combination of steps will meet these requirements? (Choose TWO.)",
      "options": [
        "Store the credentials in AWS Secrets Manager and enable automatic rotation",
        "Store the password in a Lambda environment variable and update it every 30 days",
        "Retrieve the secret at runtime by calling the Secrets Manager GetSecretValue API",
        "Store the password as a String parameter in AWS Systems Manager Parameter Store",
        "Include the password in the deployment package and redeploy it every 30 days"
      ],
      "answer": "AC",
      "explanation": "Secrets Manager stores secrets encrypted with KMS and has built-in scheduled rotation for Amazon RDS credentials. The function then fetches the current value at runtime with GetSecretValue (ideally with caching), so it always uses the rotated password without redeployment. Manual updates and plain-text storage break the policy.",
      "rationales": {
        "A": "Right: Secrets Manager encrypts the secret and can rotate RDS credentials automatically on a schedule.",
        "B": "Wrong: updating an environment variable is manual and the value is visible as plain text configuration.",
        "C": "Right: fetching the secret at runtime means the function always uses the latest rotated password.",
        "D": "Wrong: a String parameter is not encrypted, and Parameter Store has no built-in automatic rotation.",
        "E": "Wrong: it stores the password in code and relies on manual redeployment for rotation."
      },
      "topic": "Security",
      "subtopic": "Implement encryption and manage sensitive data by using AWS services",
      "difficulty": "medium",
      "source": "AWS Secrets Manager User Guide: Rotate AWS Secrets Manager secrets; retrieving secrets in Lambda"
    },
    {
      "stem": "A developer is building a customer support chatbot that invokes a foundation model through Amazon Bedrock. The model must not return personally identifiable information (PII) such as email addresses and phone numbers, and user inputs that try to override the system instructions through prompt injection must be blocked. Which solution will meet these requirements with the LEAST development effort?",
      "options": [
        "Scan every model response with Amazon Macie before returning it to the user",
        "Place AWS WAF in front of the chatbot API and add a rate-based rule",
        "Create an Amazon Bedrock guardrail with sensitive information filters and a prompt attack filter",
        "Lower the model's temperature parameter so that its responses are more predictable"
      ],
      "answer": "C",
      "explanation": "Amazon Bedrock Guardrails apply configurable safeguards to both prompts and model responses. Sensitive information filters can block or mask PII types such as email addresses and phone numbers, and the prompt attack content filter detects jailbreak and prompt injection attempts. Attaching the guardrail to model invocations needs configuration rather than custom code.",
      "rationales": {
        "A": "Wrong: Macie discovers sensitive data in Amazon S3, not in real-time model responses.",
        "B": "Wrong: a rate-based rule limits request volume; it does not detect PII or prompt injection.",
        "C": "Right: guardrails filter PII in outputs and detect prompt attacks in inputs with configuration only.",
        "D": "Wrong: temperature changes randomness, not whether PII is returned or instructions are overridden."
      },
      "topic": "Security",
      "subtopic": "Identify and mitigate security risks associated with using and integrating AI services into application development",
      "difficulty": "hard",
      "source": "Amazon Bedrock User Guide: Guardrails for Amazon Bedrock (content filters, prompt attacks, sensitive information filters)"
    },
    {
      "stem": "Several AWS Lambda functions use the same set of third-party libraries. A developer wants to manage these libraries in one place and reduce the size of each function's deployment package. Which solution will meet these requirements?",
      "options": [
        "Package the libraries as a Lambda layer and add the layer to each function",
        "Store the libraries in Amazon S3 and download them during each invocation",
        "Copy the libraries into each function's /tmp directory at deployment time",
        "Increase each function's ephemeral storage and bundle the libraries again"
      ],
      "answer": "A",
      "explanation": "A Lambda layer is a .zip archive of libraries or other dependencies that is published once and attached to many functions. Lambda extracts the layer into the /opt directory of the execution environment. Functions then ship only their own code, and the shared libraries are versioned and updated in one place.",
      "rationales": {
        "A": "Right: layers package shared dependencies once and attach them to many functions.",
        "B": "Wrong: downloading libraries on every invocation adds latency and repeated S3 requests.",
        "C": "Wrong: /tmp is runtime scratch space; it cannot be populated at deployment time.",
        "D": "Wrong: ephemeral storage size does not remove the libraries from each deployment package."
      },
      "topic": "Testing and Deployment",
      "subtopic": "Prepare application artifacts to be deployed to AWS",
      "difficulty": "easy",
      "source": "AWS Lambda Developer Guide: Managing Lambda dependencies with layers"
    },
    {
      "stem": "A developer deploys an AWS Lambda function with AWS SAM. Each new version must receive 10% of traffic for 5 minutes before all traffic shifts to it, and the deployment must roll back automatically if a specified Amazon CloudWatch alarm enters the ALARM state. Which solution will meet these requirements?",
      "options": [
        "Set the function's reserved concurrency to 10% of the account limit during deployments",
        "Use weighted Amazon Route 53 records that point to two separate function URLs",
        "Deploy with AWS CloudFormation change sets and review each change set manually",
        "Use AutoPublishAlias with a Canary10Percent5Minutes DeploymentPreference that lists the alarm"
      ],
      "answer": "D",
      "explanation": "In AWS SAM, AutoPublishAlias publishes a new version on each deployment, and DeploymentPreference uses AWS CodeDeploy to shift traffic on the alias. The Canary10Percent5Minutes type sends 10% of traffic to the new version for 5 minutes, then the rest. CodeDeploy rolls back automatically if any alarm in the Alarms list goes into ALARM.",
      "rationales": {
        "A": "Wrong: reserved concurrency limits scaling; it does not split traffic between versions.",
        "B": "Wrong: Route 53 weighting needs extra setup and gives no automatic alarm-based rollback.",
        "C": "Wrong: change sets preview stack changes; they do not shift traffic gradually or roll back on alarms.",
        "D": "Right: SAM uses CodeDeploy for canary traffic shifting with alarm-triggered automatic rollback."
      },
      "topic": "Testing and Deployment",
      "subtopic": "Deploy code by using AWS continuous integration and continuous delivery (CI/CD) services",
      "difficulty": "medium",
      "source": "AWS SAM Developer Guide: Deploying serverless applications gradually (DeploymentPreference, AutoPublishAlias)"
    },
    {
      "stem": "An application is defined in an AWS SAM template and consists of an Amazon API Gateway REST API backed by AWS Lambda functions. A developer wants to send HTTP requests to the API on a local workstation to test it before deploying anything to AWS. Which command will meet these requirements?",
      "options": [
        "sam deploy --guided",
        "sam local start-api",
        "sam package",
        "sam sync --watch"
      ],
      "answer": "B",
      "explanation": "sam local start-api runs a local HTTP server that emulates API Gateway and invokes the Lambda functions in local containers. The developer can call the endpoints with a browser or curl and see changes without deploying. The other commands package or deploy resources to AWS.",
      "rationales": {
        "A": "Wrong: sam deploy creates or updates a CloudFormation stack in AWS.",
        "B": "Right: it hosts the API locally and invokes the functions in local containers.",
        "C": "Wrong: sam package uploads artifacts to Amazon S3 and prepares a template for deployment.",
        "D": "Wrong: sam sync pushes changes to a stack in the AWS Cloud, not to a local emulator."
      },
      "topic": "Testing and Deployment",
      "subtopic": "Implement and automate application testing in AWS environments",
      "difficulty": "easy",
      "source": "AWS SAM Developer Guide: Testing with sam local start-api; AWS SAM CLI command reference"
    },
    {
      "stem": "A company runs an application on AWS Elastic Beanstalk. A developer must deploy a new application version so that the environment keeps its full capacity throughout the deployment and the instances currently serving traffic are not modified if the deployment fails. Which deployment approaches will meet these requirements? (Choose TWO.)",
      "options": [
        "All at once",
        "Rolling",
        "Immutable",
        "Rolling with additional batch",
        "Blue/green with a cloned environment and URL swap"
      ],
      "answer": "CE",
      "explanation": "An immutable deployment launches a full set of new instances in a temporary Auto Scaling group and only moves them into service after they pass health checks, so the original instances are untouched if it fails. A blue/green deployment builds the new version in a separate environment and swaps CNAMEs, leaving the old environment intact. Rolling methods replace the application on existing instances.",
      "rationales": {
        "A": "Wrong: all instances are updated at once, causing downtime and modifying every existing instance.",
        "B": "Wrong: rolling takes batches out of service, reducing capacity, and updates existing instances.",
        "C": "Right: new instances are created separately, so capacity is kept and old instances are not changed.",
        "D": "Wrong: it keeps capacity but still deploys to existing instances, which may be left on the new version.",
        "E": "Right: the old environment keeps serving traffic until the URL swap, and is unchanged if the new one fails."
      },
      "topic": "Testing and Deployment",
      "subtopic": "Deploy code by using AWS continuous integration and continuous delivery (CI/CD) services",
      "difficulty": "hard",
      "source": "AWS Elastic Beanstalk Developer Guide: Deployment policies and settings; Blue/Green deployments with Elastic Beanstalk"
    },
    {
      "stem": "A frontend team needs to start testing against an Amazon API Gateway REST API before the backend AWS Lambda functions are written. Each API method must return a fixed sample response. Which solution will meet these requirements with the LEAST effort?",
      "options": [
        "Configure mock integrations that return the sample responses through integration responses",
        "Write and deploy placeholder Lambda functions that return hardcoded JSON payloads",
        "Add an Application Load Balancer with fixed-response actions behind the API",
        "Enable API caching on the stage and preload the cache with the sample responses"
      ],
      "answer": "A",
      "explanation": "A mock integration lets API Gateway generate a response itself, without calling any backend. The developer defines the status code and body in the integration response mapping. This lets clients test the API contract before the real backend exists, and it is replaced by a Lambda integration later.",
      "rationales": {
        "A": "Right: mock integrations return configured responses directly from API Gateway with no backend.",
        "B": "Wrong: this works but requires writing and deploying extra code that will be thrown away.",
        "C": "Wrong: it adds infrastructure and integration setup, which is more effort than a mock integration.",
        "D": "Wrong: the API Gateway cache cannot be preloaded; it stores responses only from real backend calls."
      },
      "topic": "Testing and Deployment",
      "subtopic": "Implement and automate application testing in AWS environments",
      "difficulty": "medium",
      "source": "Amazon API Gateway Developer Guide: Set up mock integrations in API Gateway"
    },
    {
      "stem": "A worker application reads messages from an Amazon SQS standard queue. Each message takes about 2 minutes to process. The queue uses the default visibility timeout, and many messages are processed more than once by different workers. Which solution will resolve this issue?",
      "options": [
        "Enable long polling by setting ReceiveMessageWaitTimeSeconds to 20 seconds",
        "Configure a dead-letter queue with a maxReceiveCount value of 1",
        "Set the queue's DelaySeconds value to 120 seconds",
        "Increase the queue's visibility timeout to longer than the processing time"
      ],
      "answer": "D",
      "explanation": "The default visibility timeout is 30 seconds, so a message being processed for 2 minutes becomes visible again and another worker receives it. Setting the visibility timeout longer than the processing time keeps the message hidden until the worker deletes it. Because standard queues are at-least-once, consumers should still be idempotent.",
      "rationales": {
        "A": "Wrong: long polling reduces empty responses but does not keep in-flight messages hidden longer.",
        "B": "Wrong: messages would move to the DLQ after one receive instead of being processed reliably.",
        "C": "Wrong: delay applies before first delivery; messages still reappear 30 seconds after being received.",
        "D": "Right: a timeout longer than processing time prevents other workers from receiving in-flight messages."
      },
      "topic": "Troubleshooting and Optimization",
      "subtopic": "Assist in a root cause analysis",
      "difficulty": "medium",
      "source": "Amazon SQS Developer Guide: Amazon SQS visibility timeout"
    },
    {
      "stem": "A serverless application uses Amazon API Gateway, AWS Lambda and Amazon DynamoDB. Users report slow responses, and the developer needs to see how much time each request spends in each service. Which solution will meet these requirements?",
      "options": [
        "Enable AWS CloudTrail data events for the Lambda functions",
        "Enable VPC Flow Logs for the subnets used by the functions",
        "Enable AWS X-Ray tracing on the Lambda functions and the API stage",
        "Create Amazon CloudWatch metric filters on the function logs"
      ],
      "answer": "C",
      "explanation": "AWS X-Ray records traces of requests as they pass through services and shows segments and subsegments with timing for each one. With tracing enabled on API Gateway and Lambda, and the SDK instrumented for DynamoDB calls, the trace map shows where latency occurs. Logs and audit trails do not connect timing across services for a single request.",
      "rationales": {
        "A": "Wrong: CloudTrail records API activity for auditing, not per-request latency across services.",
        "B": "Wrong: Flow Logs capture IP traffic metadata, not application request timings.",
        "C": "Right: X-Ray traces show the time each request spends in every service it calls.",
        "D": "Wrong: metric filters count log patterns but cannot break down one request's latency by service."
      },
      "topic": "Troubleshooting and Optimization",
      "subtopic": "Apply logging, monitoring, and observability best practices",
      "difficulty": "easy",
      "source": "AWS X-Ray Developer Guide: Integrating AWS X-Ray with AWS services (API Gateway, Lambda)"
    },
    {
      "stem": "An AWS Lambda function must publish a custom business metric to Amazon CloudWatch for every order it processes. The developer wants to avoid making CloudWatch API calls from the function code so that the calls do not add latency. Which solution will meet these requirements?",
      "options": [
        "Call PutMetricData from a background thread before the handler returns",
        "Write log entries in CloudWatch embedded metric format to standard output",
        "Record the metric as an AWS X-Ray annotation on the function's trace segment",
        "Enable Lambda Insights and read the metric from its performance dashboard"
      ],
      "answer": "B",
      "explanation": "The CloudWatch embedded metric format (EMF) is a JSON log structure that CloudWatch Logs reads to extract metrics automatically. The function only writes a log line, which Lambda sends to CloudWatch Logs asynchronously, so no PutMetricData call is needed. The metric then appears in CloudWatch and can be graphed and alarmed on.",
      "rationales": {
        "A": "Wrong: it still calls the CloudWatch API from the function code, which the developer wants to avoid.",
        "B": "Right: EMF log entries become CloudWatch metrics without any API calls from the code.",
        "C": "Wrong: X-Ray annotations index traces for filtering; they do not create CloudWatch metrics.",
        "D": "Wrong: Lambda Insights collects system-level metrics such as memory and CPU, not custom business metrics."
      },
      "topic": "Troubleshooting and Optimization",
      "subtopic": "Apply logging, monitoring, and observability best practices",
      "difficulty": "medium",
      "source": "Amazon CloudWatch User Guide: Embedding metrics within logs (CloudWatch embedded metric format)"
    },
    {
      "stem": "A Java AWS Lambda function that serves an API has unacceptable latency on cold starts because its initialization phase takes several seconds. Which actions will each reduce the cold-start latency that users experience? (Choose TWO.)",
      "options": [
        "Enable Lambda SnapStart and invoke the function through a published version",
        "Configure reserved concurrency for the function",
        "Increase the function's timeout to the maximum value",
        "Configure provisioned concurrency on an alias of the function",
        "Increase the function's ephemeral storage (/tmp) size"
      ],
      "answer": "AD",
      "explanation": "SnapStart snapshots the initialized execution environment when a version is published and resumes new environments from that snapshot, which greatly shortens Java initialization. Provisioned concurrency keeps a set number of environments initialized before requests arrive, so those requests avoid cold starts. Reserved concurrency only caps or guarantees capacity and does not pre-initialize anything.",
      "rationales": {
        "A": "Right: SnapStart resumes from a pre-initialized snapshot, cutting initialization time on published versions.",
        "B": "Wrong: reserved concurrency sets a concurrency limit; it does not keep environments warm.",
        "C": "Wrong: a longer timeout lets slow invocations finish but does not make initialization faster.",
        "D": "Right: provisioned concurrency keeps environments initialized, so requests skip the cold start.",
        "E": "Wrong: more /tmp storage does not shorten the initialization phase."
      },
      "topic": "Troubleshooting and Optimization",
      "subtopic": "Optimize applications by using AWS services and features",
      "difficulty": "hard",
      "source": "AWS Lambda Developer Guide: Improving startup performance with Lambda SnapStart; configuring provisioned concurrency"
    }
  ]
}
```
