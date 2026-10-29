```json
{
  "format": "domcq/1",
  "exam": "aws-dva",
  "set": "AWS Certified Developer - Associate practice – Core services mix",
  "questions": [
    {
      "stem": "A developer is writing an AWS Lambda function that queries an Amazon RDS for MySQL database. The function currently opens a new database connection on every invocation, which adds latency under load. The developer wants the function to reuse database connections between invocations whenever possible. Which solution will meet these requirements?",
      "options": [
        "Open the database connection inside the handler and close it before the handler returns",
        "Create the database connection in the initialization code outside the handler function",
        "Save the open connection object in a Lambda environment variable after the first invocation",
        "Write the connection object to the /tmp directory and read it back at the start of each invocation"
      ],
      "answer": "B",
      "explanation": "Code outside the handler runs once when Lambda initializes an execution environment, and objects created there stay in memory for later warm invocations in that same environment. Creating the client during initialization therefore lets warm invocations reuse the existing connection. Environment variables hold only static strings set in configuration, and a live network connection cannot be serialized to a file and restored. At larger scale, Amazon RDS Proxy can also pool connections across execution environments.",
      "topic": "Development with AWS Services",
      "subtopic": "Develop code for AWS Lambda",
      "difficulty": "easy",
      "source": "AWS Lambda Developer Guide: Lambda execution environment lifecycle; best practices for working with Lambda functions"
    },
    {
      "stem": "An existing Amazon DynamoDB table named Orders uses CustomerId as the partition key and OrderDate as the sort key. A new feature must retrieve all orders that contain a given ProductId, across all customers, with low latency and without reading unrelated items. The table already contains production data. Which solution will meet these requirements MOST efficiently?",
      "options": [
        "Create a local secondary index on the table that uses ProductId as the sort key",
        "Run a Scan operation on the table with a FilterExpression on the ProductId attribute",
        "Run a Query operation on the base table with a FilterExpression on the ProductId attribute",
        "Create a global secondary index on the table that uses ProductId as the partition key"
      ],
      "answer": "D",
      "explanation": "A global secondary index can use a completely different partition key from the base table and can be added to an existing table at any time, so a Query against a GSI keyed on ProductId reads only the matching items. Local secondary indexes must be created along with the table and keep the base table's partition key, so they cannot search across customers. A Scan reads every item before filtering, and a Query on the base table needs a CustomerId value, so neither is efficient here.",
      "topic": "Development with AWS Services",
      "subtopic": "Use data stores during application development",
      "difficulty": "medium",
      "source": "Amazon DynamoDB Developer Guide: Improving data access with secondary indexes (global vs local secondary indexes)"
    },
    {
      "stem": "An application uses the AWS SDK to write items to an Amazon DynamoDB table that uses provisioned capacity. During short traffic bursts, some requests fail with a ProvisionedThroughputExceededException. The developer wants the application to handle these errors so that most requests eventually succeed without overwhelming the table. Which solution will meet these requirements?",
      "options": [
        "Retry the failed requests by using exponential backoff with jitter",
        "Retry the failed requests immediately in a loop until they succeed",
        "Change all read operations in the application to strongly consistent reads",
        "Increase the SDK HTTP connection timeout for the DynamoDB client to 60 seconds"
      ],
      "answer": "A",
      "explanation": "Throttling errors are retryable, and AWS recommends retrying them with progressively longer waits (exponential backoff) plus a random delay (jitter) so that many clients do not retry at the same instant. This spreads the retried load over time and gives the table capacity a chance to recover. Retrying immediately makes throttling worse, and changing read consistency or timeouts does not address write throttling.",
      "topic": "Development with AWS Services",
      "subtopic": "Develop code for applications that are hosted on AWS",
      "difficulty": "medium",
      "source": "AWS SDKs and Tools Reference Guide: Retry behavior; DynamoDB Developer Guide: Error retries and exponential backoff"
    },
    {
      "stem": "A developer is adding Amazon ElastiCache for Redis in front of an Amazon RDS database. The developer wants an item to be written to the cache only when the application requests it and does not find it in the cache, so that the cache does not fill with data that is never read. Which caching strategy should the developer implement?",
      "options": [
        "Write-through caching on every database update",
        "Setting a time to live (TTL) of zero on every key",
        "Lazy loading, also known as cache-aside",
        "Pre-loading the full dataset into the cache at startup"
      ],
      "answer": "C",
      "explanation": "With lazy loading, the application checks the cache first and, on a cache miss, reads from the database and then writes the result into the cache. Only data that is actually requested is cached, which keeps the cache small, at the cost of a slower first read and possibly stale data. Write-through caching writes every update to the cache whether or not it is ever read, so it does not meet the requirement.",
      "topic": "Development with AWS Services",
      "subtopic": "Use data stores during application development",
      "difficulty": "easy",
      "source": "Amazon ElastiCache User Guide: Caching strategies (lazy loading, write-through, adding TTL)"
    },
    {
      "stem": "An AWS Lambda function processes messages from an Amazon SQS standard queue through an event source mapping with a batch size of 10. When one message in a batch fails, the whole batch returns to the queue and the messages that already succeeded are processed again, which causes duplicate side effects. Which actions should the developer take to resolve this issue? (Choose TWO.)",
      "options": [
        "Enable ReportBatchItemFailures on the event source mapping and return the IDs of failed messages in the function response",
        "Increase the event source mapping batch size to the maximum value of 10,000 messages",
        "Set the queue's visibility timeout to a value shorter than the function timeout",
        "Make the message processing logic idempotent so that processing a message again has no additional side effects",
        "Convert the existing standard queue to a FIFO queue by updating its queue attributes"
      ],
      "answer": "AD",
      "explanation": "With ReportBatchItemFailures enabled, the function returns a batchItemFailures list, and Lambda deletes the successful messages and returns only the failed ones to the queue. Because SQS standard queues provide at-least-once delivery, a message can still occasionally be delivered more than once, so idempotent processing is the recommended safeguard. A larger batch increases the number of messages affected by a failure, a visibility timeout shorter than the function timeout causes more duplicates, and an existing standard queue cannot be converted to FIFO.",
      "topic": "Development with AWS Services",
      "subtopic": "Develop code for AWS Lambda",
      "difficulty": "hard",
      "source": "AWS Lambda Developer Guide: Using Lambda with Amazon SQS – handling errors and reporting batch item failures"
    },
    {
      "stem": "When an object is uploaded to an Amazon S3 bucket, three independent microservices must each receive a notification about the new object. Each microservice must be able to process the notifications at its own pace and retry failures without affecting the other microservices. Which solution will meet these requirements?",
      "options": [
        "Configure an S3 event notification that sends events to one SQS queue that all three microservices poll",
        "Configure an S3 event notification that publishes to an SNS topic, and subscribe a separate SQS queue for each microservice",
        "Configure each microservice to list the objects in the bucket every minute to detect new uploads",
        "Configure an S3 event notification that invokes a Lambda function, which calls each microservice synchronously"
      ],
      "answer": "B",
      "explanation": "This is the SNS-to-SQS fan-out pattern: SNS delivers a copy of every message to each subscribed queue, and each queue buffers messages for its own consumer. Each microservice can then consume and retry independently. A single shared queue delivers each message to only one consumer, and synchronous calls from one Lambda function tie the services' availability together.",
      "topic": "Development with AWS Services",
      "subtopic": "Develop code for applications that are hosted on AWS",
      "difficulty": "medium",
      "source": "Amazon SNS Developer Guide: Fanout to Amazon SQS queues; Amazon S3 User Guide: Event notifications"
    },
    {
      "stem": "A developer is building an application that connects to an Amazon RDS database. The database credentials must be stored securely outside the application code, and the password must be rotated automatically every 30 days. Which solution will meet these requirements with the LEAST development effort?",
      "options": [
        "Store the credentials as plaintext environment variables in the application configuration",
        "Store the credentials as a SecureString parameter in AWS Systems Manager Parameter Store",
        "Store the credentials in AWS Secrets Manager and turn on automatic rotation for the secret",
        "Store the credentials in an encrypted file in an S3 bucket and replace the file each month"
      ],
      "answer": "C",
      "explanation": "AWS Secrets Manager stores secrets encrypted with AWS KMS and has built-in managed rotation for Amazon RDS credentials on a schedule you choose. The application retrieves the current secret at runtime, so rotation does not require code changes. Parameter Store SecureString parameters are encrypted but have no built-in rotation, so rotating them would require custom work.",
      "topic": "Security",
      "subtopic": "Implement encryption and manage sensitive data by using AWS services",
      "difficulty": "easy",
      "source": "AWS Secrets Manager User Guide: Rotate AWS Secrets Manager secrets; managed rotation for Amazon RDS"
    },
    {
      "stem": "A mobile application signs users in with an Amazon Cognito user pool. After sign-in, the application must upload photos directly to an Amazon S3 bucket, and each user must be allowed to write only under a prefix that matches the user's own identity. Long-term AWS credentials must not be stored in the application. Which solution will meet these requirements?",
      "options": [
        "Use an Amazon Cognito identity pool that exchanges user pool tokens for temporary credentials from an IAM role",
        "Embed the access key ID and secret access key of a dedicated IAM user in the mobile application",
        "Use the Cognito user pool ID token directly as AWS credentials when signing requests to Amazon S3",
        "Create a separate IAM user for each application user when the user signs up in the application"
      ],
      "answer": "A",
      "explanation": "A Cognito identity pool accepts a user pool token and returns temporary AWS credentials for an IAM role. The role's policy can use the ${cognito-identity.amazonaws.com:sub} policy variable to restrict each user to their own S3 prefix. User pool tokens are JWTs for authentication and cannot sign AWS API requests, and embedded or per-user IAM credentials are long-term and do not scale.",
      "topic": "Security",
      "subtopic": "Implement authentication and authorization mechanisms for applications and AWS services",
      "difficulty": "medium",
      "source": "Amazon Cognito Developer Guide: Identity pools (federated identities); IAM role-based access control with policy variables"
    },
    {
      "stem": "An application must encrypt 50 MB files on the client side before storing them, by using a customer managed key in AWS Key Management Service (AWS KMS). Which solution follows AWS recommended practice for encrypting the files?",
      "options": [
        "Call the AWS KMS Encrypt API and pass the full contents of each file as the plaintext",
        "Split each file into 4 KB chunks and call the AWS KMS Encrypt API once for each chunk",
        "Export the key material of the KMS key and use it to encrypt each file in the application",
        "Call the AWS KMS GenerateDataKey API, encrypt the file locally with the plaintext data key, and store the encrypted data key with the file"
      ],
      "answer": "D",
      "explanation": "The KMS Encrypt API accepts at most 4 KB of plaintext, so larger data is protected with envelope encryption. GenerateDataKey returns a plaintext data key to encrypt the data locally and a copy of that key encrypted under the KMS key, which is stored with the data. To decrypt, the application calls KMS Decrypt on the encrypted data key, and the key material of the KMS key never leaves AWS KMS.",
      "topic": "Security",
      "subtopic": "Implement encryption and manage sensitive data by using AWS services",
      "difficulty": "medium",
      "source": "AWS KMS Developer Guide: Envelope encryption; GenerateDataKey API reference"
    },
    {
      "stem": "A developer is adding a customer-facing chatbot to a web application by using a foundation model in Amazon Bedrock. The security team is concerned that users might submit prompt injection attempts and that model responses might reveal personally identifiable information (PII). Which actions will mitigate these risks? (Choose TWO.)",
      "options": [
        "Increase the model's temperature inference parameter so that responses are less predictable",
        "Configure an Amazon Bedrock guardrail with a content filter for prompt attacks and apply it to model invocations",
        "Rely on an instruction such as \"never reveal personal data\" in the prompt as the only control",
        "Grant the application's IAM role bedrock:* permissions on all resources so that guardrail checks cannot fail",
        "Configure sensitive information filters in an Amazon Bedrock guardrail to block or mask PII in model responses"
      ],
      "answer": "BE",
      "explanation": "Amazon Bedrock Guardrails evaluate both user inputs and model outputs. The prompt attack content filter detects jailbreak and prompt injection attempts, and sensitive information filters can block or mask PII types in responses. Prompt instructions alone can be overridden by injected text, temperature only changes randomness, and broad IAM permissions violate least privilege.",
      "topic": "Security",
      "subtopic": "Identify and mitigate security risks associated with using and integrating AI services into application development",
      "difficulty": "hard",
      "source": "Amazon Bedrock User Guide: Guardrails – content filters (prompt attacks) and sensitive information filters"
    },
    {
      "stem": "A company has an Amazon API Gateway REST API and an existing Amazon Cognito user pool. Only users who have signed in through the user pool may call the API. Which solution will meet these requirements with the LEAST amount of custom code?",
      "options": [
        "Create a Lambda authorizer that downloads the signing keys and validates each JWT manually",
        "Configure an Amazon Cognito user pool authorizer on the API methods and require the token header",
        "Enable IAM authorization on the API methods and create an IAM user for every application user",
        "Require an API key on every API method and give each user an API key when they sign up"
      ],
      "answer": "B",
      "explanation": "API Gateway has a built-in Cognito user pool authorizer that validates the ID or access token sent in the request header without any custom code. A Lambda authorizer could do the same, but only with code you write and maintain. API keys identify clients for usage plans and throttling; they are not an authentication mechanism, and per-user IAM users do not scale.",
      "topic": "Security",
      "subtopic": "Implement authentication and authorization mechanisms for applications and AWS services",
      "difficulty": "medium",
      "source": "Amazon API Gateway Developer Guide: Control access to a REST API using Amazon Cognito user pools as authorizer"
    },
    {
      "stem": "A developer maintains eight AWS Lambda functions that all use the same internal utility library. The developer wants to manage the library in one place and keep each function's deployment package small. Which solution will meet these requirements?",
      "options": [
        "Package the library as a Lambda layer and add the layer to each function",
        "Copy the library into the deployment package of each of the functions",
        "Store the library in Amazon S3 and download it inside the handler on each invocation",
        "Store the library source code in an environment variable and evaluate it at runtime"
      ],
      "answer": "A",
      "explanation": "A Lambda layer is a .zip archive of libraries or other dependencies that can be attached to many functions and is extracted into the /opt directory of the execution environment. The shared code is versioned and updated in one place, and each function's own package contains only its own code. Downloading code on every invocation adds latency, and environment variables have a 4 KB total size limit and are not meant for code.",
      "topic": "Testing and Deployment",
      "subtopic": "Prepare application artifacts to be deployed to AWS",
      "difficulty": "easy",
      "source": "AWS Lambda Developer Guide: Managing Lambda dependencies with layers"
    },
    {
      "stem": "A developer defines an AWS Lambda function in an AWS Serverless Application Model (AWS SAM) template. Before deploying anything to AWS, the developer wants to run the function on a local workstation with a sample event to test its behavior. Which solution will meet these requirements?",
      "options": [
        "Run the sam deploy --guided command with the sample event file",
        "Run the sam package command with the sample event file",
        "Run the sam local invoke command with the sample event file",
        "Run the sam init command with the sample event file"
      ],
      "answer": "C",
      "explanation": "The sam local invoke command runs the function locally in a Docker container that emulates the Lambda runtime, and it accepts an event file with the --event option. This lets developers test function logic before deployment. The sam deploy and sam package commands upload artifacts or deploy to AWS, and sam init only creates a new project from a template.",
      "topic": "Testing and Deployment",
      "subtopic": "Implement and automate application testing in AWS environments",
      "difficulty": "easy",
      "source": "AWS SAM Developer Guide: Locally testing with the AWS SAM CLI (sam local invoke)"
    },
    {
      "stem": "A developer deploys an AWS Lambda function with an AWS Serverless Application Model (AWS SAM) template. For each new version, the developer wants 10% of traffic to go to the new version for 5 minutes and then all traffic to shift to it. If a specified Amazon CloudWatch alarm enters the ALARM state during the deployment, the traffic must automatically roll back. Which solution will meet these requirements?",
      "options": [
        "Set the function's reserved concurrency to 10% of the account concurrency limit during each deployment",
        "Use AutoPublishAlias with a DeploymentPreference of type Linear10PercentEvery1Minute and no alarms",
        "Deploy a second copy of the function and use Amazon Route 53 weighted records to split the traffic",
        "Use AutoPublishAlias with a DeploymentPreference of type Canary10Percent5Minutes and list the alarm under Alarms"
      ],
      "answer": "D",
      "explanation": "In AWS SAM, AutoPublishAlias publishes a new version on each deployment, and DeploymentPreference makes AWS CodeDeploy shift alias traffic gradually. The Canary10Percent5Minutes type sends 10% of traffic to the new version for 5 minutes and then shifts the rest. CodeDeploy monitors the listed CloudWatch alarms and rolls back the alias automatically if one is triggered.",
      "topic": "Testing and Deployment",
      "subtopic": "Deploy code by using AWS continuous integration and continuous delivery (CI/CD) services",
      "difficulty": "medium",
      "source": "AWS SAM Developer Guide: Deploying serverless applications gradually with AWS SAM (DeploymentPreference)"
    },
    {
      "stem": "A company has an Amazon API Gateway REST API with two stages named dev and prod. Both stages integrate with a single AWS Lambda function that has two aliases, also named dev and prod. The developer wants each API stage to invoke the Lambda alias with the matching name, using one API definition. Which actions must the developer take to meet these requirements? (Choose THREE.)",
      "options": [
        "Create a separate copy of the Lambda function for each stage and copy the code between them",
        "Define a stage variable named lambdaAlias in each stage, with the value dev or prod",
        "Set the Lambda function name in the integration to include ${stageVariables.lambdaAlias} as the qualifier",
        "Add a resource-based policy permission to each alias that allows API Gateway to invoke it",
        "Create a separate API Gateway REST API for each environment with its own integration",
        "Create a usage plan for each stage that selects which Lambda alias the stage invokes"
      ],
      "answer": "BCD",
      "explanation": "Stage variables are name-value pairs attached to a stage that can be referenced in the integration, so a function ARN ending in :${stageVariables.lambdaAlias} resolves to a different alias in each stage. Because API Gateway cannot add invoke permissions for a function name that is only resolved at runtime, the developer must grant API Gateway lambda:InvokeFunction permission on each alias. Usage plans control throttling and quotas for API keys and cannot route requests.",
      "topic": "Testing and Deployment",
      "subtopic": "Implement and automate application testing in AWS environments",
      "difficulty": "hard",
      "source": "Amazon API Gateway Developer Guide: Using stage variables for a REST API; using stage variables with Lambda function aliases"
    },
    {
      "stem": "A web application runs on AWS Elastic Beanstalk in a load-balanced environment. Deployments must keep the environment at full capacity. If a new version fails health checks, the deployment must roll back quickly by terminating only the new instances, without modifying the existing instances. Which deployment policy will meet these requirements?",
      "options": [
        "Immutable",
        "Rolling",
        "All at once",
        "Rolling with additional batch"
      ],
      "answer": "A",
      "explanation": "An immutable deployment launches a full set of new instances in a temporary Auto Scaling group and moves them into the environment only after they pass health checks. If the deployment fails, Elastic Beanstalk terminates the new instances and the original instances keep serving traffic unchanged. Rolling with additional batch also keeps full capacity, but it deploys onto existing instances, so a failure requires another deployment to roll back.",
      "topic": "Testing and Deployment",
      "subtopic": "Deploy code by using AWS continuous integration and continuous delivery (CI/CD) services",
      "difficulty": "medium",
      "source": "AWS Elastic Beanstalk Developer Guide: Deployment policies and settings (immutable updates)"
    },
    {
      "stem": "A serverless application uses Amazon API Gateway, several AWS Lambda functions and Amazon DynamoDB. Users report that some requests are slow, and the developer must identify which service call along the request path is causing the latency. Which solution will meet these requirements?",
      "options": [
        "Enable AWS CloudTrail data events for the Lambda functions and the table",
        "Enable AWS X-Ray active tracing and instrument the AWS SDK clients",
        "Increase the memory setting of all Lambda functions in the application",
        "Enable VPC Flow Logs for the subnets used by the Lambda functions"
      ],
      "answer": "B",
      "explanation": "AWS X-Ray records traces of requests as they pass through API Gateway, Lambda and instrumented downstream calls such as DynamoDB, and shows the time spent in each segment and subsegment. The service map and trace timelines make it clear which call adds the latency. CloudTrail records API activity for auditing, not timing breakdowns, and VPC Flow Logs capture only network-level metadata.",
      "topic": "Troubleshooting and Optimization",
      "subtopic": "Assist in a root cause analysis",
      "difficulty": "easy",
      "source": "AWS X-Ray Developer Guide: Using AWS X-Ray with AWS Lambda and API Gateway; instrumenting AWS SDK calls"
    },
    {
      "stem": "An AWS Lambda function must publish several custom business metrics to Amazon CloudWatch on every invocation. The developer wants to avoid the extra latency and API throttling risk of making synchronous CloudWatch API calls from the function. Which solution will meet these requirements?",
      "options": [
        "Call the CloudWatch PutMetricData API once for each metric at the end of every invocation",
        "Write the metric values to an Amazon DynamoDB table and read them from a scheduled job",
        "Enable AWS CloudTrail data events for the function and count the recorded invocations",
        "Write structured log entries in the CloudWatch embedded metric format from the function"
      ],
      "answer": "D",
      "explanation": "The CloudWatch embedded metric format (EMF) is a JSON log structure that CloudWatch Logs reads asynchronously to create metrics. The function only writes to its log output, so there are no extra API calls during the invocation. The same log entries also keep the detailed context that is useful for troubleshooting.",
      "topic": "Troubleshooting and Optimization",
      "subtopic": "Apply logging, monitoring, and observability best practices",
      "difficulty": "medium",
      "source": "Amazon CloudWatch User Guide: Embedding metrics within logs (embedded metric format)"
    },
    {
      "stem": "A developer attaches an AWS Lambda function to a VPC so that it can reach an Amazon RDS database in private subnets. After the change, the function's calls to a third-party API on the public internet time out, although the database queries succeed. Which solution will resolve this issue?",
      "options": [
        "Assign an Elastic IP address to the network interface that Lambda creates for the function",
        "Increase the function timeout to the maximum value of 15 minutes",
        "Use private subnets for the function whose route tables send 0.0.0.0/0 to a NAT gateway in a public subnet",
        "Move the function into public subnets whose route tables send 0.0.0.0/0 to an internet gateway"
      ],
      "answer": "C",
      "explanation": "A Lambda function connected to a VPC has no public IP address, so it can reach the internet only through a NAT gateway (or NAT instance). The function stays in private subnets whose default route points to a NAT gateway in a public subnet, and the NAT gateway forwards traffic through the internet gateway. Placing the function in a public subnet does not work because its network interfaces do not get public IP addresses, and a longer timeout does not fix the missing route.",
      "topic": "Troubleshooting and Optimization",
      "subtopic": "Assist in a root cause analysis",
      "difficulty": "medium",
      "source": "AWS Lambda Developer Guide: Giving Lambda functions access to resources in an Amazon VPC; internet access for VPC functions"
    },
    {
      "stem": "A read-heavy application uses an Amazon DynamoDB table with provisioned capacity. Many requests read the same small set of items repeatedly, and read requests are being throttled. The application currently uses strongly consistent reads, but the business has confirmed that data up to a few seconds old is acceptable. Which actions will reduce read throttling? (Choose TWO.)",
      "options": [
        "Add a DynamoDB Accelerator (DAX) cluster in front of the table and send reads through the DAX client",
        "Change the remaining GetItem calls that are not yet strongly consistent to strongly consistent reads",
        "Change the read requests that use strongly consistent reads to use eventually consistent reads",
        "Replace the application's Query operations with Scan operations that use a FilterExpression",
        "Decrease the table's provisioned read capacity units to lower the cost of each read request"
      ],
      "answer": "AC",
      "explanation": "DAX is an in-memory cache for DynamoDB, so repeated reads of the same items are served from the cache and do not consume table read capacity. An eventually consistent read of an item up to 4 KB uses half a read capacity unit, while a strongly consistent read uses a full unit, so switching halves the capacity used per read. Scans read far more data, and lowering provisioned capacity increases throttling.",
      "topic": "Troubleshooting and Optimization",
      "subtopic": "Optimize applications by using AWS services and features",
      "difficulty": "hard",
      "source": "Amazon DynamoDB Developer Guide: In-memory acceleration with DAX; read consistency and read capacity units"
    }
  ]
}
```
