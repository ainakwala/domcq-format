```json
{
  "format": "domcq/1",
  "exam": "aws-dva",
  "set": "AWS Certified Developer - Associate practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A developer is building an application that stores orders in an Amazon DynamoDB table. The table's partition key is OrderId. The application must now retrieve all orders for a given CustomerId, sorted by OrderDate, with low latency. The table holds millions of items. Which solution will meet these requirements MOST efficiently?",
      "options": [
        "Use a Scan operation with a filter expression on CustomerId and sort the results in the application.",
        "Create a local secondary index with CustomerId as the sort key and query the index.",
        "Create a global secondary index with CustomerId as the partition key and OrderDate as the sort key, and query the index.",
        "Use a Query operation on the base table with a filter expression on CustomerId."
      ],
      "answer": "C",
      "explanation": "A Query must specify a partition key value, so to look up items by an attribute that is not the table's partition key you need an index keyed on that attribute. A global secondary index can use a completely different partition key (CustomerId) and sort key (OrderDate), and can be added to an existing table, so a Query on it returns one customer's orders already sorted. A Scan reads the whole table, and a local secondary index must share the table's partition key and can only be created with the table.",
      "topic": "Development with AWS Services",
      "subtopic": "Use data stores during application development",
      "difficulty": "medium",
      "source": "Amazon DynamoDB Developer Guide: Global secondary indexes; Query and Scan operations"
    },
    {
      "stem": "A developer has written an AWS Lambda function that connects to an Amazon RDS for MySQL database. Monitoring shows that every invocation opens a new database connection, which adds latency to each request. Which change will reduce this latency with the LEAST effort?",
      "options": [
        "Move the database client initialization outside the function handler so that it is reused across invocations in the same execution environment.",
        "Increase the memory allocated to the function so that new database connections are established faster.",
        "Configure the function to connect to a VPC so that it can reach the database over a private network path.",
        "Increase the function timeout so that each database connection has more time to be established."
      ],
      "answer": "A",
      "explanation": "Lambda reuses an execution environment for subsequent invocations when it can, and code outside the handler runs only once per environment during initialization. Creating the database client outside the handler lets warm invocations reuse the open connection instead of paying the connection cost every time. Memory, VPC placement and timeout settings do not stop the handler from opening a new connection on each call.",
      "topic": "Development with AWS Services",
      "subtopic": "Develop code for AWS Lambda",
      "difficulty": "easy",
      "source": "AWS Lambda Developer Guide: Best practices for working with Lambda functions (execution environment reuse)"
    },
    {
      "stem": "An application running on Amazon EC2 instances polls an Amazon SQS standard queue. Processing each message takes about 2 minutes. The queue uses the default visibility timeout of 30 seconds. The developer notices that many messages are processed more than once by different instances. Which solution will resolve this issue?",
      "options": [
        "Enable long polling by setting ReceiveMessageWaitTimeSeconds to 20 seconds.",
        "Increase the message retention period of the queue to 14 days.",
        "Configure a dead-letter queue with a maxReceiveCount of 1.",
        "Increase the visibility timeout of the queue to longer than the processing time."
      ],
      "answer": "D",
      "explanation": "When a consumer receives a message, SQS hides it from other consumers only for the visibility timeout. If processing takes longer than that and the message has not been deleted, it becomes visible again and another consumer receives it. Setting the visibility timeout longer than the expected processing time (or extending it with ChangeMessageVisibility) prevents this duplicate processing. Long polling and retention period do not affect how long a received message stays hidden.",
      "topic": "Development with AWS Services",
      "subtopic": "Develop code for applications that are hosted on AWS",
      "difficulty": "easy",
      "source": "Amazon SQS Developer Guide: Amazon SQS visibility timeout"
    },
    {
      "stem": "Several instances of an application read an item from an Amazon DynamoDB table, modify it in memory, and write it back with PutItem. Occasionally, one instance overwrites changes that another instance made a moment earlier. The developer must ensure that a write fails if the item has changed since it was read. Which solution will meet these requirements?",
      "options": [
        "Use strongly consistent reads when reading the item before modifying and writing it back.",
        "Add a version number attribute and use a conditional write that succeeds only if the version still matches the value that was read.",
        "Enable DynamoDB Streams on the table and reprocess any write that conflicts with an earlier write.",
        "Use BatchWriteItem so that all changes to the item are applied together in a single request."
      ],
      "answer": "B",
      "explanation": "This is optimistic locking. Each write includes a condition expression that checks the version attribute still equals the value the application read, and the write also increments the version. If another writer changed the item in between, the condition fails with ConditionalCheckFailedException and the application can re-read and retry. Strongly consistent reads only guarantee the latest value at read time; they do not stop another writer from changing the item before the write.",
      "topic": "Development with AWS Services",
      "subtopic": "Use data stores during application development",
      "difficulty": "medium",
      "source": "Amazon DynamoDB Developer Guide: Condition expressions; optimistic locking with version number"
    },
    {
      "stem": "An AWS Lambda function is invoked asynchronously by Amazon S3 event notifications. Some events still fail after Lambda has finished all of its retry attempts, and those events are lost. The developer needs to capture the failed events for later analysis. Which actions will meet this requirement? (Choose TWO.)",
      "options": [
        "Configure reserved concurrency for the function.",
        "Configure an on-failure destination that sends invocation records to an Amazon SQS queue.",
        "Enable provisioned concurrency for the function.",
        "Create an event source mapping between the S3 bucket and the function.",
        "Configure a dead-letter queue for the function that uses an Amazon SQS queue or Amazon SNS topic."
      ],
      "answer": "BE",
      "explanation": "For asynchronous invocations, Lambda retries failed events and then discards them unless you tell it where to send them. An on-failure destination (SQS, SNS, Lambda, EventBridge or S3) receives a record with the event and details about the failure, and a function dead-letter queue (SQS or SNS) receives the failed event itself. Concurrency settings do not preserve failed events, and S3 invokes Lambda directly through notifications rather than through an event source mapping.",
      "topic": "Development with AWS Services",
      "subtopic": "Develop code for AWS Lambda",
      "difficulty": "medium",
      "source": "AWS Lambda Developer Guide: Asynchronous invocation; destinations and dead-letter queues"
    },
    {
      "stem": "A banking application stores account balances in one Amazon DynamoDB table and a transfer ledger in a second DynamoDB table. For each transfer, the application must debit one account, credit another account, and write a ledger entry, and either all three writes must succeed or none of them. The client retries requests after network timeouts, and a retried request must not apply the same transfer twice. Which solution will meet these requirements?",
      "options": [
        "Use BatchWriteItem to write all three items, and resubmit any UnprocessedItems that the response returns.",
        "Use three separate UpdateItem calls with condition expressions, and undo completed calls in application code if a later call fails.",
        "Use TransactWriteItems for the three writes, and send the same ClientRequestToken when the client retries the request.",
        "Write the items from a Lambda function triggered by DynamoDB Streams so that failed writes are retried automatically."
      ],
      "answer": "C",
      "explanation": "TransactWriteItems groups writes across one or more tables into a single all-or-nothing operation, so the debit, credit and ledger entry either all commit or all fail. Supplying a ClientRequestToken makes the transaction idempotent: if the same token is sent again within the idempotency window, DynamoDB does not apply the writes a second time. BatchWriteItem is not atomic, and hand-written rollback logic can leave data inconsistent if the application fails mid-way.",
      "topic": "Development with AWS Services",
      "subtopic": "Use data stores during application development",
      "difficulty": "hard",
      "source": "Amazon DynamoDB Developer Guide: DynamoDB transactions; TransactWriteItems idempotency"
    },
    {
      "stem": "A mobile app uses an Amazon Cognito user pool to sign in users. The app must now let signed-in users upload photos directly from the device to a private Amazon S3 bucket, without routing uploads through a backend server and without embedding long-term AWS credentials in the app. Which solution will meet these requirements?",
      "options": [
        "Configure an Amazon Cognito identity pool that trusts the user pool, and grant its authenticated IAM role permission to upload to the bucket.",
        "Create an IAM user for each app user, and store each user's access keys in the user pool as custom attributes.",
        "Use the user pool ID token as the principal in the S3 bucket policy to grant upload access to signed-in users.",
        "Enable public write access on the bucket, and restrict uploads to a separate key prefix for each user."
      ],
      "answer": "A",
      "explanation": "A user pool authenticates users and issues tokens, but those tokens are not AWS credentials. A Cognito identity pool exchanges a user pool token for temporary AWS credentials for an IAM role, so the app can call S3 directly with short-lived, least-privilege permissions. Long-term IAM user keys in an app and public write access are both insecure, and an ID token cannot be used as a bucket policy principal.",
      "topic": "Security",
      "subtopic": "Implement authentication and authorization mechanisms for applications and AWS services",
      "difficulty": "medium",
      "source": "Amazon Cognito Developer Guide: Identity pools; accessing AWS services with a user pool and identity pool"
    },
    {
      "stem": "An application must encrypt files of up to 500 MB before storing them in Amazon S3. The encryption must happen inside the application, and the key used must be protected by a customer managed AWS KMS key. Which approach should the developer use?",
      "options": [
        "Call the KMS Encrypt API on the file contents in 4 KB chunks and concatenate the resulting ciphertext.",
        "Call the KMS GenerateDataKey API, encrypt the file locally with the plaintext data key, remove that key from memory, and store the encrypted data key with the file.",
        "Call the KMS GenerateRandom API to create a key, encrypt the file with it, and store the key in the object's metadata.",
        "Export the KMS key material into the application and use it directly to encrypt the file locally."
      ],
      "answer": "B",
      "explanation": "This is envelope encryption. The KMS Encrypt API accepts at most 4 KB of plaintext, so large data is encrypted locally with a data key; GenerateDataKey returns that key in plaintext and also encrypted under the KMS key. The application uses the plaintext copy, discards it, and stores the encrypted copy alongside the data, then calls Decrypt on the data key when it needs to read the file. KMS key material never leaves KMS, and storing an unencrypted key with the object would defeat the encryption.",
      "topic": "Security",
      "subtopic": "Implement encryption and manage sensitive data by using AWS services",
      "difficulty": "hard",
      "source": "AWS KMS Developer Guide: Envelope encryption; GenerateDataKey"
    },
    {
      "stem": "An application running on Amazon ECS connects to an Amazon RDS database. The database password is stored in plaintext as an environment variable in the task definition. The security team requires the password to be stored encrypted and rotated automatically every 30 days. Which solution will meet these requirements with the LEAST operational overhead?",
      "options": [
        "Store the password in an encrypted Amazon S3 object, and use a scheduled Lambda function to change it every 30 days.",
        "Store the password as a SecureString parameter in Systems Manager Parameter Store, and enable the parameter's automatic rotation.",
        "Encrypt the password with AWS KMS, and store the ciphertext in the task definition environment variable.",
        "Store the password in AWS Secrets Manager with automatic rotation enabled, and reference the secret in the task definition."
      ],
      "answer": "D",
      "explanation": "Secrets Manager encrypts secrets with AWS KMS and has built-in rotation on a schedule, including managed rotation support for Amazon RDS credentials. ECS task definitions can reference a Secrets Manager secret so the value is injected at container start without appearing in the task definition. Parameter Store SecureString parameters are encrypted but have no native automatic rotation, and the other options require custom code or still leave the secret handling to the application.",
      "topic": "Security",
      "subtopic": "Implement encryption and manage sensitive data by using AWS services",
      "difficulty": "easy",
      "source": "AWS Secrets Manager User Guide: Rotate secrets; Amazon ECS Developer Guide: Passing sensitive data to a container"
    },
    {
      "stem": "A developer uses the AWS CLI to configure an Amazon S3 bucket to send event notifications to an AWS Lambda function when objects are created. Saving the notification configuration fails because Amazon S3 is not permitted to invoke the function. Which change will resolve this issue?",
      "options": [
        "Add the lambda:InvokeFunction permission to the function's execution role.",
        "Attach the AmazonS3FullAccess managed policy to the function's execution role.",
        "Add a statement to the function's resource-based policy that allows the s3.amazonaws.com principal to invoke it, scoped to the bucket ARN.",
        "Add a bucket policy that grants the Lambda function permission to read objects in the bucket."
      ],
      "answer": "C",
      "explanation": "A function's execution role controls what the function can do, while its resource-based policy controls who can invoke it. For S3 to invoke the function, the function policy must grant lambda:InvokeFunction to the S3 service principal, ideally limited with a source ARN (and source account) condition for that bucket. Changing the execution role or the bucket policy does not grant S3 permission to call the function.",
      "topic": "Security",
      "subtopic": "Implement authentication and authorization mechanisms for applications and AWS services",
      "difficulty": "medium",
      "source": "AWS Lambda Developer Guide: Resource-based policies; using Lambda with Amazon S3"
    },
    {
      "stem": "A developer is building a customer support chatbot that uses a foundation model in Amazon Bedrock. The chatbot can call an AWS Lambda function that looks up order details. The developer is concerned that users might submit prompts that try to make the model ignore its instructions, reveal other customers' orders, or produce harmful content. Which actions will help mitigate these risks? (Choose TWO.)",
      "options": [
        "Apply an Amazon Bedrock guardrail with content filters, including the prompt attack filter, to the model invocations.",
        "Increase the model's temperature setting so that its responses are harder for an attacker to predict.",
        "Scope the Lambda execution role to the order data it needs, and use the signed-in user's identity in the lookup instead of IDs from the model.",
        "Grant the Lambda function read access to the entire orders table so that the model can answer any order question.",
        "Rely on the system prompt alone to instruct the model never to reveal other customers' data."
      ],
      "answer": "AC",
      "explanation": "Amazon Bedrock Guardrails can filter harmful content, block denied topics, redact sensitive information, and detect prompt attacks such as jailbreaks and injected instructions. Because model output can be manipulated, any tool the model can call should run with least privilege and should authorize requests using the authenticated user's identity rather than values the model supplies. Instructions in a system prompt can be overridden by injection, so they are not a security control on their own.",
      "topic": "Security",
      "subtopic": "Identify and mitigate security risks associated with using and integrating AI services into application development",
      "difficulty": "medium",
      "source": "Amazon Bedrock User Guide: Guardrails (content filters, prompt attacks); IAM least privilege for agent action groups"
    },
    {
      "stem": "A developer uses AWS CodeDeploy to deploy a new version of an AWS Lambda function behind an alias. The company wants 10% of traffic to shift to the new version first and, if no Amazon CloudWatch alarms are triggered within 15 minutes, all remaining traffic to shift at once. Which deployment configuration meets these requirements?",
      "options": [
        "CodeDeployDefault.LambdaLinear10PercentEvery1Minute",
        "CodeDeployDefault.LambdaCanary10Percent15Minutes",
        "CodeDeployDefault.LambdaAllAtOnce",
        "CodeDeployDefault.LambdaLinear10PercentEvery10Minutes"
      ],
      "answer": "B",
      "explanation": "A canary configuration shifts traffic in two steps: a set percentage first, then the remainder after a specified interval. Canary10Percent15Minutes sends 10% to the new version and the other 90% after 15 minutes, and CodeDeploy rolls back automatically if configured alarms fire. Linear configurations shift equal increments repeatedly, and AllAtOnce shifts everything immediately.",
      "topic": "Testing and Deployment",
      "subtopic": "Deploy code by using AWS continuous integration and continuous delivery (CI/CD) services",
      "difficulty": "medium",
      "source": "AWS CodeDeploy User Guide: Deployment configurations on an AWS Lambda compute platform"
    },
    {
      "stem": "A developer is building a serverless application with the AWS Serverless Application Model (AWS SAM). Before deploying anything to AWS, the developer wants to run one Lambda function on a local machine with a sample event stored in a JSON file. Which command should the developer use?",
      "options": [
        "sam deploy --guided",
        "sam package",
        "sam local invoke with the --event option",
        "sam sync --watch"
      ],
      "answer": "C",
      "explanation": "sam local invoke runs a function locally in a Docker container that emulates the Lambda runtime, and --event passes a JSON file as the invocation event. This lets developers test function logic quickly without deploying. sam deploy and sam sync both deploy to the AWS Cloud, and sam package only uploads artifacts and produces a packaged template.",
      "topic": "Testing and Deployment",
      "subtopic": "Implement and automate application testing in AWS environments",
      "difficulty": "easy",
      "source": "AWS SAM Developer Guide: Testing with sam local invoke"
    },
    {
      "stem": "A developer uses AWS CodeDeploy to deploy a web application to Amazon EC2 instances. After the application has started, the developer wants to run a script that checks the application responds correctly before the deployment is marked as successful. In which AppSpec lifecycle event hook should the developer run this script?",
      "options": [
        "ValidateService",
        "BeforeInstall",
        "AfterInstall",
        "ApplicationStop"
      ],
      "answer": "A",
      "explanation": "On EC2 and on-premises deployments, ValidateService is the last lifecycle hook and runs after ApplicationStart, making it the place to verify the deployment worked. If a script in this hook fails, the deployment fails on that instance. BeforeInstall and AfterInstall run before the new version is started, and ApplicationStop runs against the previous version.",
      "topic": "Testing and Deployment",
      "subtopic": "Deploy code by using AWS continuous integration and continuous delivery (CI/CD) services",
      "difficulty": "easy",
      "source": "AWS CodeDeploy User Guide: AppSpec hooks section for EC2/On-Premises deployments"
    },
    {
      "stem": "A company runs a web application in a load-balanced AWS Elastic Beanstalk environment. The company requires the environment to keep its full serving capacity throughout every deployment of a new application version. Which deployment policies meet this requirement? (Choose THREE.)",
      "options": [
        "Immutable",
        "All at once",
        "Traffic splitting",
        "Rolling",
        "Rolling with additional batch"
      ],
      "answer": "ACE",
      "explanation": "Rolling with additional batch launches an extra batch of instances before taking any existing instances out of service, so capacity never drops. Immutable and traffic splitting both deploy to a fresh set of instances in a temporary Auto Scaling group while the original instances keep serving traffic. All at once causes a brief outage, and Rolling takes each batch out of service while it is updated, reducing capacity.",
      "topic": "Testing and Deployment",
      "subtopic": "Deploy code by using AWS continuous integration and continuous delivery (CI/CD) services",
      "difficulty": "hard",
      "source": "AWS Elastic Beanstalk Developer Guide: Deployment policies and settings"
    },
    {
      "stem": "A developer is packaging a Python AWS Lambda function that depends on several large machine learning libraries. The unzipped size of the function code and its dependencies is 1.2 GB. Which solution will allow the developer to deploy the function?",
      "options": [
        "Split the dependencies across five Lambda layers that are attached to the function.",
        "Upload the .zip file to Amazon S3 and reference the S3 object when creating the function.",
        "Increase the function's ephemeral storage to 10 GB and include the libraries in the .zip file.",
        "Package the function as a container image, push it to Amazon ECR, and create the function from the image."
      ],
      "answer": "D",
      "explanation": "For .zip deployments, the unzipped function code plus all of its layers must fit within 250 MB, whether the package is uploaded directly or from Amazon S3. Lambda functions packaged as container images can be up to 10 GB, which accommodates large dependencies such as machine learning libraries. Ephemeral storage only sizes the /tmp directory and does not change the deployment package limit.",
      "topic": "Testing and Deployment",
      "subtopic": "Prepare application artifacts to be deployed to AWS",
      "difficulty": "medium",
      "source": "AWS Lambda Developer Guide: Lambda quotas (deployment package size); creating functions from container images"
    },
    {
      "stem": "A developer instruments a microservices application with AWS X-Ray. The support team needs to find traces in the X-Ray console for requests made by a specific customer by searching on the customer ID. How should the developer record the customer ID so that this search is possible?",
      "options": [
        "Add the customer ID to each segment as metadata.",
        "Add the customer ID to each segment as an annotation.",
        "Write the customer ID to Amazon CloudWatch Logs from each service.",
        "Include the customer ID in the name of each subsegment."
      ],
      "answer": "B",
      "explanation": "X-Ray annotations are key-value pairs that are indexed, so they can be used in filter expressions to search for traces, for example annotation.customer_id = \"12345\". Metadata can hold any data, including objects, but it is not indexed and cannot be used to filter traces. Writing IDs to logs or encoding them in subsegment names does not make traces searchable by that value.",
      "topic": "Troubleshooting and Optimization",
      "subtopic": "Apply logging, monitoring, and observability best practices",
      "difficulty": "medium",
      "source": "AWS X-Ray Developer Guide: Annotations and metadata; filter expressions"
    },
    {
      "stem": "An API built with Amazon API Gateway and AWS Lambda returns errors to clients during traffic spikes. Amazon CloudWatch metrics show that the function's Throttles metric rises at the same time, while its Errors and Duration metrics stay normal. What is the MOST likely cause of the errors?",
      "options": [
        "The function's execution role lacks permission to write logs to Amazon CloudWatch Logs.",
        "The function's timeout is set too low for the requests it receives during spikes.",
        "The function's memory setting is too low, causing out-of-memory failures under load.",
        "The function has reached its concurrency limit, either its reserved concurrency or the account's Regional quota."
      ],
      "answer": "D",
      "explanation": "Lambda throttles an invocation when no concurrency is available, either because the function's reserved concurrency is used up or because the account has reached its concurrency quota in the Region. Throttled requests never run, so they show up in the Throttles metric rather than in Errors or Duration. Timeouts and out-of-memory failures would increase the Errors metric instead.",
      "topic": "Troubleshooting and Optimization",
      "subtopic": "Assist in a root cause analysis",
      "difficulty": "easy",
      "source": "AWS Lambda Developer Guide: Lambda function scaling and concurrency; monitoring function metrics"
    },
    {
      "stem": "An AWS Lambda function processes thousands of orders per minute. The developer needs to publish a custom Amazon CloudWatch metric for order value, with a dimension for product category. Calling the PutMetricData API from the function adds latency and causes API throttling. Which solution will meet these requirements with the LEAST latency impact on the function?",
      "options": [
        "Write structured log entries in CloudWatch embedded metric format so that CloudWatch extracts the metrics from the function's logs.",
        "Buffer the metric values in the function's /tmp directory and call PutMetricData once at the end of each invocation.",
        "Enable CloudWatch Lambda Insights on the function so that the order value metric is published automatically.",
        "Send each metric value to an Amazon SQS queue and use a second function that calls PutMetricData."
      ],
      "answer": "A",
      "explanation": "With CloudWatch embedded metric format, the function writes a JSON log line that contains both the data and metric definitions, and CloudWatch Logs extracts the metrics asynchronously. The function makes no extra API calls, so it adds almost no latency and avoids PutMetricData throttling, and dimensions such as product category are supported. Lambda Insights collects system-level metrics like CPU and memory, not business values.",
      "topic": "Troubleshooting and Optimization",
      "subtopic": "Apply logging, monitoring, and observability best practices",
      "difficulty": "hard",
      "source": "Amazon CloudWatch User Guide: Embedding metrics within logs (embedded metric format)"
    },
    {
      "stem": "An application writes sensor readings to an Amazon DynamoDB table that uses provisioned capacity. The partition key is the date of the reading, so all writes on a given day use the same key value. The application receives ProvisionedThroughputExceededException errors even though the table's total consumed write capacity is well below its provisioned capacity. Which actions should the developer take to resolve this issue? (Choose TWO.)",
      "options": [
        "Redesign the table to use a high-cardinality partition key, such as the sensor ID, or add a random suffix to the date value.",
        "Add a local secondary index on the reading timestamp attribute.",
        "Use eventually consistent reads for all queries against the table.",
        "Enable DynamoDB Streams on the table to spread writes across shards.",
        "Retry throttled writes in the application with exponential backoff and jitter."
      ],
      "answer": "AE",
      "explanation": "Throttling while total consumption is below the table's capacity points to a hot partition: one partition key value receives more writes than a single partition can absorb. Choosing a high-cardinality key, or sharding the date key with a suffix, spreads writes across many partitions. Retrying with exponential backoff and jitter lets the application recover from the remaining short bursts of throttling. Indexes, read consistency and Streams do not spread writes across partitions.",
      "topic": "Troubleshooting and Optimization",
      "subtopic": "Optimize applications by using AWS services and features",
      "difficulty": "medium",
      "source": "Amazon DynamoDB Developer Guide: Best practices for designing partition keys; error retries and exponential backoff"
    }
  ]
}
```
