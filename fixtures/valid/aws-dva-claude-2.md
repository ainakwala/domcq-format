```json
{
  "format": "domcq/1",
  "exam": "aws-dva",
  "set": "AWS Certified Developer - Associate practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "A developer is building an order-tracking application that stores data in an Amazon DynamoDB table. The table uses CustomerId as the partition key and OrderDate as the sort key, and it is already in production. The application now needs to retrieve all orders that have a specific Status value, across all customers, with low latency and without reading every item in the table. Which solution will meet these requirements?",
      "options": [
        "Create a local secondary index that uses CustomerId as the partition key and Status as the sort key.",
        "Run a Scan operation that uses a filter expression on the Status attribute.",
        "Create a global secondary index that uses Status as the partition key and OrderDate as the sort key.",
        "Add a DynamoDB Accelerator (DAX) cluster and run Query operations on the Status attribute through DAX."
      ],
      "answer": "C",
      "explanation": "A global secondary index can use a completely different partition key from the base table and can be added to an existing table, so a Query on Status becomes possible across all customers. A local secondary index must share the table's partition key and can only be created when the table is created, so it would still be scoped to one customer. A Scan reads every item and applies the filter only after the read, consuming capacity for the whole table, and DAX caches results but does not change which keys can be queried.",
      "topic": "Development with AWS Services",
      "subtopic": "Use data stores during application development",
      "difficulty": "medium",
      "source": "DVA-C02 exam guide, Domain 1 Task 3; Amazon DynamoDB Developer Guide: Global secondary indexes vs local secondary indexes"
    },
    {
      "stem": "A developer has written an AWS Lambda function that reads items from an Amazon DynamoDB table. The function creates a new DynamoDB client and loads its configuration inside the handler on every invocation. The developer wants to reduce the duration of invocations that run in an execution environment that has already been initialized. Which change will meet this requirement?",
      "options": [
        "Move the client creation and configuration loading outside the handler so they run during initialization.",
        "Increase the function timeout so the client has more time to connect on each invocation.",
        "Store the DynamoDB client object in an environment variable so that each invocation can read it.",
        "Configure the function to use the arm64 architecture instead of the x86_64 architecture."
      ],
      "answer": "A",
      "explanation": "Code outside the handler runs once, during the init phase of a new execution environment, and the objects it creates are reused by every later (warm) invocation in that environment. Creating SDK clients and loading configuration there avoids repeating that work on every request. A longer timeout does not make code faster, and environment variables hold only string values, not live objects.",
      "topic": "Development with AWS Services",
      "subtopic": "Develop code for AWS Lambda",
      "difficulty": "easy",
      "source": "AWS Lambda Developer Guide: Best practices for working with Lambda functions (function code, execution environment reuse)"
    },
    {
      "stem": "A developer uses an AWS Lambda function with an Amazon SQS event source mapping that has a batch size of 10. When a single message in a batch fails processing, the function throws an error and the entire batch returns to the queue, so messages that were already processed successfully are processed again. The developer wants only the failed messages to be retried. Which solution will meet this requirement?",
      "options": [
        "Configure a dead-letter queue on the source queue with a maxReceiveCount value of 1.",
        "Enable long polling on the queue by setting the receive message wait time to 20 seconds.",
        "Replace the standard queue with a FIFO queue so that messages in a batch are retried individually.",
        "Enable ReportBatchItemFailures on the event source mapping and return the failed message IDs in batchItemFailures."
      ],
      "answer": "D",
      "explanation": "With ReportBatchItemFailures enabled, the function can return a batchItemFailures list that contains the message IDs that failed. Lambda then deletes the successfully processed messages and makes only the listed ones visible again for retry. Without it, any error from the function causes the whole batch to be treated as failed. A dead-letter queue with maxReceiveCount of 1 would stop retries entirely, and long polling or FIFO ordering does not change how batch failures are reported.",
      "topic": "Development with AWS Services",
      "subtopic": "Develop code for AWS Lambda",
      "difficulty": "hard",
      "source": "AWS Lambda Developer Guide: Using Lambda with Amazon SQS, reporting batch item failures"
    },
    {
      "stem": "A mobile application must let users upload photos directly to an Amazon S3 bucket. The bucket must remain private, the application must not contain long-term AWS credentials, and each permission to upload must expire after a few minutes. Which solution will meet these requirements?",
      "options": [
        "Enable public write access on the bucket and turn on S3 Versioning to protect existing objects.",
        "Have a backend service generate a presigned URL for a PUT request with a short expiration and return it to the app.",
        "Embed an IAM user's access keys in the app and attach a policy that allows only the s3:PutObject action.",
        "Enable S3 Transfer Acceleration on the bucket and give the accelerated endpoint to the application."
      ],
      "answer": "B",
      "explanation": "A presigned URL is signed with the credentials of a principal that has permission to upload, and it grants that single operation on a specific object key until it expires. The client can upload directly to S3 over HTTPS without holding any AWS credentials, and the bucket stays private. Public write access and embedded access keys both violate the requirements, and Transfer Acceleration only speeds up transfers without granting any permission.",
      "topic": "Development with AWS Services",
      "subtopic": "Develop code for applications that are hosted on AWS",
      "difficulty": "easy",
      "source": "Amazon S3 User Guide: Uploading objects with presigned URLs"
    },
    {
      "stem": "Several instances of an application update the same items in an Amazon DynamoDB table. A developer discovers that updates are sometimes lost because one instance overwrites changes that another instance made after the first instance read the item. Each item has a numeric Version attribute. Which solution will prevent these lost updates?",
      "options": [
        "Use strongly consistent reads for every GetItem call that the application makes before it updates an item.",
        "Enable DynamoDB Streams and use a Lambda function to reapply any changes that were overwritten.",
        "Use a condition expression on each write that requires Version to equal the value read, and increment Version in the same write.",
        "Increase the table's write capacity so that concurrent updates complete before conflicting reads can occur."
      ],
      "answer": "C",
      "explanation": "This is optimistic locking: each write succeeds only if the item's Version is still the value the writer read, and the write increments the Version atomically. If another writer changed the item in the meantime, DynamoDB rejects the write with a ConditionalCheckFailedException, and the application re-reads the item and retries. Strongly consistent reads return the latest data at read time but still leave a window before the write, and extra capacity does not remove the race.",
      "topic": "Development with AWS Services",
      "subtopic": "Use data stores during application development",
      "difficulty": "medium",
      "source": "Amazon DynamoDB Developer Guide: Condition expressions; optimistic locking with a version number"
    },
    {
      "stem": "A developer is configuring provisioned capacity for an Amazon DynamoDB table. The application will read 30 items per second by using GetItem with eventually consistent reads. Each item is 7 KB in size. What is the minimum number of read capacity units (RCUs) that the table must have to support this workload?",
      "options": [
        "15 RCUs",
        "30 RCUs",
        "53 RCUs",
        "60 RCUs"
      ],
      "answer": "B",
      "explanation": "One RCU provides one strongly consistent read per second, or two eventually consistent reads per second, for an item of up to 4 KB. Item size is rounded up to the next 4 KB, so a 7 KB item needs 2 units per strongly consistent read, which would be 60 RCUs for 30 reads per second. Eventually consistent reads cost half as much, so the requirement is 30 RCUs. The value 53 comes from forgetting to round the item size up to a whole 4 KB unit.",
      "topic": "Development with AWS Services",
      "subtopic": "Use data stores during application development",
      "difficulty": "hard",
      "source": "Amazon DynamoDB Developer Guide: Read/write capacity mode, provisioned capacity units"
    },
    {
      "stem": "A developer is building a web application in which users sign in with their Google accounts. After sign-in, the application's browser code must upload files directly to a per-user prefix in an Amazon S3 bucket by using temporary AWS credentials that are scoped to each user. Which solution will meet these requirements?",
      "options": [
        "Create an IAM user for each person who signs in and return that IAM user's access keys to the browser.",
        "Configure an Amazon Cognito user pool app client and use its ID token as the credentials for S3 requests.",
        "Issue an Amazon API Gateway API key to each user and include the key in the S3 upload requests.",
        "Configure an Amazon Cognito identity pool with Google as an identity provider and an authenticated IAM role."
      ],
      "answer": "D",
      "explanation": "A Cognito identity pool exchanges a token from a trusted identity provider, such as Google, for temporary AWS credentials issued through AWS STS for an IAM role. The role's policy can use the cognito-identity.amazonaws.com:sub policy variable to limit each user to their own S3 prefix. User pool tokens are JSON Web Tokens that prove identity but cannot sign AWS API requests, and API keys are for API Gateway usage plans, not authorization to S3.",
      "topic": "Security",
      "subtopic": "Implement authentication and authorization mechanisms for applications and AWS services",
      "difficulty": "medium",
      "source": "Amazon Cognito Developer Guide: Identity pools (federated identities); user pools vs identity pools"
    },
    {
      "stem": "An application running on AWS Lambda connects to an Amazon RDS for MySQL database. The database password is currently hardcoded in the function code. A security review requires that the password be stored encrypted outside the code and be rotated automatically every 30 days. Which solution will meet these requirements with the LEAST operational effort?",
      "options": [
        "Store the password in AWS Secrets Manager, enable automatic rotation, and retrieve the secret at runtime.",
        "Store the password in an encrypted Lambda environment variable and update its value manually each month.",
        "Store the password as a Parameter Store SecureString and write custom rotation code run by an EventBridge rule.",
        "Store the password in an encrypted Amazon S3 object and replace the object with a new password every 30 days."
      ],
      "answer": "A",
      "explanation": "AWS Secrets Manager stores secrets encrypted with AWS KMS and has built-in automatic rotation for Amazon RDS credentials on a schedule, using a managed rotation function. The application retrieves the current value at runtime, so no code changes are needed when the password rotates. Parameter Store SecureString parameters are encrypted but have no native rotation, so custom code and scheduling would add operational effort.",
      "topic": "Security",
      "subtopic": "Implement encryption and manage sensitive data by using AWS services",
      "difficulty": "easy",
      "source": "AWS Secrets Manager User Guide: Rotate secrets; managed rotation for Amazon RDS"
    },
    {
      "stem": "A developer needs to encrypt files of up to 50 MB within an application before storing them in a database. The developer must use an AWS KMS customer managed key and must not send the file contents to AWS KMS. Which solution will meet these requirements?",
      "options": [
        "Call the KMS Encrypt operation with the file contents and store the ciphertext that KMS returns.",
        "Split each file into 4 KB chunks and call the KMS Encrypt operation once for each of the chunks.",
        "Call GenerateDataKey, encrypt the file locally with the plaintext data key, and store the encrypted data key with it.",
        "Call CreateKey for each file and store the new KMS key ID alongside the encrypted file in the database."
      ],
      "answer": "C",
      "explanation": "This is envelope encryption: GenerateDataKey returns a plaintext data key and the same key encrypted under the KMS key. The application encrypts the file locally with the plaintext key, discards that key from memory, and stores the encrypted data key with the ciphertext; to decrypt, it calls KMS Decrypt on the data key only. The KMS Encrypt operation accepts at most 4 KB of plaintext and would send the data to KMS, and creating a KMS key per file never exposes key material for local use.",
      "topic": "Security",
      "subtopic": "Implement encryption and manage sensitive data by using AWS services",
      "difficulty": "medium",
      "source": "AWS KMS Developer Guide: Envelope encryption; GenerateDataKey API"
    },
    {
      "stem": "A developer is adding a chat feature to an application by using Amazon Bedrock. User input is sent to a foundation model together with internal instructions. The security team is concerned that users might craft prompts that override the instructions or cause the model to return sensitive information such as personal data. Which actions should the developer take to mitigate these risks? (Choose TWO.)",
      "options": [
        "Configure Amazon Bedrock Guardrails with prompt attack and sensitive information filters, and apply it to invocations.",
        "Increase the model's temperature setting so that its responses are less predictable to attackers.",
        "Place AWS credentials in the system prompt so that the model can verify the identity of each user.",
        "Give the application's IAM role only bedrock:InvokeModel on specific model ARNs, and pass only data the user may see.",
        "Disable model invocation logging so that prompts that contain personal data are never recorded."
      ],
      "answer": "AD",
      "explanation": "Amazon Bedrock Guardrails can detect and block prompt attacks such as jailbreaks and prompt injection, and its sensitive information filters can block or mask personally identifiable information in inputs and outputs. Least privilege limits the damage if a prompt does manipulate the model: the application can invoke only approved models, and the model cannot reveal data that was never placed in its context. Temperature affects randomness, not security, and secrets must never be put into prompts.",
      "topic": "Security",
      "subtopic": "Identify and mitigate security risks associated with using and integrating AI services into application development",
      "difficulty": "medium",
      "source": "Amazon Bedrock User Guide: Guardrails (prompt attack and sensitive information filters); Identity and access management for Amazon Bedrock"
    },
    {
      "stem": "A developer is writing an AWS Lambda function that must write items to an Amazon DynamoDB table. What is the MOST secure way to give the function permission to access the table?",
      "options": [
        "Store an IAM user's access key ID and secret access key in the function's environment variables.",
        "Attach a policy that allows the required DynamoDB actions on the table to the function's execution role.",
        "Add a resource-based policy to the function that allows the dynamodb.amazonaws.com service principal.",
        "Store an IAM user's credentials in AWS Secrets Manager and load them in the function at startup."
      ],
      "answer": "B",
      "explanation": "Lambda assumes the function's execution role and provides temporary credentials to the function, which the AWS SDK picks up automatically. Granting only the needed DynamoDB actions on that table follows least privilege and avoids long-term access keys entirely. A function's resource-based policy controls who can invoke the function, not what the function can access.",
      "topic": "Security",
      "subtopic": "Implement authentication and authorization mechanisms for applications and AWS services",
      "difficulty": "easy",
      "source": "AWS Lambda Developer Guide: Lambda execution role; IAM best practices (use temporary credentials, least privilege)"
    },
    {
      "stem": "A developer uses AWS CodeDeploy to deploy new versions of an AWS Lambda function through an alias. The developer wants 10% of traffic to be shifted to the new version first. If no Amazon CloudWatch alarms go into the ALARM state within 10 minutes, all remaining traffic must be shifted at once. Which deployment configuration meets these requirements?",
      "options": [
        "CodeDeployDefault.LambdaLinear10PercentEvery10Minutes",
        "CodeDeployDefault.LambdaAllAtOnce",
        "CodeDeployDefault.LambdaLinear10PercentEvery1Minute",
        "CodeDeployDefault.LambdaCanary10Percent10Minutes"
      ],
      "answer": "D",
      "explanation": "A canary configuration shifts traffic in exactly two increments: the stated percentage first, then all remaining traffic after the stated interval. LambdaCanary10Percent10Minutes therefore sends 10% to the new version, waits 10 minutes, and then shifts the remaining 90%; if a configured alarm fires, CodeDeploy rolls back. Linear configurations shift equal increments repeatedly, so LambdaLinear10PercentEvery10Minutes would take about 90 minutes to finish.",
      "topic": "Testing and Deployment",
      "subtopic": "Deploy code by using AWS continuous integration and continuous delivery (CI/CD) services",
      "difficulty": "medium",
      "source": "AWS CodeDeploy User Guide: Deployment configurations on an AWS Lambda compute platform"
    },
    {
      "stem": "A developer is building a serverless application with the AWS Serverless Application Model (AWS SAM). Before deploying, the developer wants to run one of the application's Lambda functions on a local machine with a sample Amazon S3 event to test its behavior. Which command should the developer use?",
      "options": [
        "sam deploy --guided",
        "sam validate --lint",
        "sam local invoke MyFunction --event event.json",
        "sam sync --watch"
      ],
      "answer": "C",
      "explanation": "sam local invoke runs a single function locally inside a container that emulates the Lambda runtime, and the --event option passes a JSON event file as the input. A sample S3 event file can be created with sam local generate-event s3 put. The other commands deploy to AWS, check the template, or sync changes to the cloud rather than testing locally.",
      "topic": "Testing and Deployment",
      "subtopic": "Implement and automate application testing in AWS environments",
      "difficulty": "easy",
      "source": "AWS SAM Developer Guide: Testing with sam local invoke; sam local generate-event"
    },
    {
      "stem": "A company deploys a web application to an AWS Elastic Beanstalk environment that runs behind a load balancer. For each new application version, the environment must keep full capacity during the deployment. If the deployment fails, it must be handled by terminating the instances that received the new version instead of redeploying the old version to the existing instances. Which deployment policy meets these requirements?",
      "options": [
        "Immutable",
        "Rolling",
        "Rolling with additional batch",
        "All at once"
      ],
      "answer": "A",
      "explanation": "An immutable deployment launches a full set of new instances with the new version in a temporary Auto Scaling group, alongside the original instances. Only after the new instances pass health checks are they moved into the environment and the old ones terminated; if they fail, only the new instances are terminated and the original instances are untouched. Rolling with additional batch also keeps capacity, but it updates existing instances, so rolling back requires another deployment of the old version.",
      "topic": "Testing and Deployment",
      "subtopic": "Deploy code by using AWS continuous integration and continuous delivery (CI/CD) services",
      "difficulty": "medium",
      "source": "AWS Elastic Beanstalk Developer Guide: Deployment policies and settings (immutable updates)"
    },
    {
      "stem": "A developer has a REST API in Amazon API Gateway with dev and prod stages. Both stages currently integrate with the same AWS Lambda function. The developer wants the dev stage to invoke the latest code and the prod stage to invoke a tested, unchanging version of the code, without creating separate functions or separate APIs. Which combination of steps will meet these requirements? (Choose TWO.)",
      "options": [
        "Create a copy of the function for each stage and give each copy an environment variable that names its stage.",
        "Publish a version of the tested code, and create a prod alias that points to it and a dev alias that points to $LATEST.",
        "Attach a usage plan to the prod stage that throttles requests that are sent to the newer function code.",
        "Enable API caching on the prod stage so that it keeps returning responses produced by the older code.",
        "Define a stage variable with the alias name in each stage, and reference it in the integration ARN as ${stageVariables.alias}."
      ],
      "answer": "BE",
      "explanation": "Published Lambda versions are immutable, and aliases are named pointers that can reference a version or $LATEST. A stage variable referenced in the Lambda integration ARN lets each stage call a different alias of the same function, so one API definition serves both environments. The developer must also grant API Gateway permission to invoke each alias, because the resource-based policy applies per qualified function ARN.",
      "topic": "Testing and Deployment",
      "subtopic": "Prepare application artifacts to be deployed to AWS",
      "difficulty": "hard",
      "source": "API Gateway Developer Guide: Using stage variables with Lambda; AWS Lambda Developer Guide: Function versions and aliases"
    },
    {
      "stem": "A developer uses AWS CodeDeploy to perform in-place deployments of an application to Amazon EC2 instances. The developer wants a script to run automated tests against the application after the application has been started on each instance, so that the deployment fails if the tests fail. In which AppSpec file lifecycle event hook should the developer run the script?",
      "options": [
        "AfterInstall",
        "ValidateService",
        "ApplicationStart",
        "BeforeInstall"
      ],
      "answer": "B",
      "explanation": "For EC2 in-place deployments the hooks run in the order ApplicationStop, BeforeInstall, AfterInstall, ApplicationStart, and then ValidateService. ValidateService is the last hook and exists to verify that the deployment completed successfully, so a failing test script there marks the deployment on that instance as failed. ApplicationStart is where the application is started, so tests placed there could run before the service is ready.",
      "topic": "Testing and Deployment",
      "subtopic": "Implement and automate application testing in AWS environments",
      "difficulty": "medium",
      "source": "AWS CodeDeploy User Guide: AppSpec hooks section, lifecycle event hooks for EC2/On-Premises deployments"
    },
    {
      "stem": "A developer instruments an application with AWS X-Ray. The developer needs to find the traces for a specific customer by using a filter expression in the X-Ray console. Every request includes a customer ID. How should the developer record the customer ID so that this search is possible?",
      "options": [
        "Add the customer ID to the segment as an annotation.",
        "Add the customer ID to the segment as metadata.",
        "Write the customer ID to Amazon CloudWatch Logs from the application.",
        "Add the customer ID as a tag on the X-Ray group the application uses."
      ],
      "answer": "A",
      "explanation": "Annotations are key-value pairs that X-Ray indexes, so they can be used in filter expressions such as annotation.customer_id = \"12345\". Metadata can hold any value, including objects, but it is not indexed and cannot be used to search for traces. Writing to CloudWatch Logs or tagging a group does not attach the value to individual traces.",
      "topic": "Troubleshooting and Optimization",
      "subtopic": "Apply logging, monitoring, and observability best practices",
      "difficulty": "medium",
      "source": "AWS X-Ray Developer Guide: Annotations and metadata; filter expressions"
    },
    {
      "stem": "Worker processes on Amazon EC2 instances poll an Amazon SQS standard queue. Each worker deletes a message after it finishes processing it. Processing time varies from 10 seconds to 15 minutes. The queue's visibility timeout is 30 seconds, and the developer finds that long-running messages are often processed by more than one worker even though processing succeeds. The developer also wants a message to become visible again quickly if a worker crashes. Which solution will meet these requirements?",
      "options": [
        "Enable long polling by setting the queue's receive message wait time to 20 seconds.",
        "Replace the standard queue with a FIFO queue and enable content-based deduplication.",
        "Have each worker call ChangeMessageVisibility periodically to extend the timeout while processing continues.",
        "Set the queue's delivery delay to 15 minutes so that messages stay hidden until processing finishes."
      ],
      "answer": "C",
      "explanation": "Duplicate processing happens because the 30-second visibility timeout expires before the worker deletes the message, so SQS makes the message visible to other consumers. Extending visibility with ChangeMessageVisibility as a heartbeat keeps the message hidden only while a live worker is still working, and if the worker crashes the short timeout lets the message reappear quickly. A delivery delay hides messages before they are first received, and FIFO deduplication applies to messages being sent, so neither stops a message from reappearing after its visibility timeout.",
      "topic": "Troubleshooting and Optimization",
      "subtopic": "Assist in a root cause analysis",
      "difficulty": "hard",
      "source": "Amazon SQS Developer Guide: Visibility timeout; ChangeMessageVisibility API"
    },
    {
      "stem": "A developer needs to search the Amazon CloudWatch Logs log group of an AWS Lambda function to find the 20 most recent log entries that contain the word ERROR. The logs must not be exported to another service. Which solution will meet these requirements?",
      "options": [
        "Create a CloudWatch Logs metric filter for ERROR and view the resulting metric graph.",
        "Enable AWS X-Ray active tracing on the function and review the trace map.",
        "Search the AWS CloudTrail event history for errors recorded for the function.",
        "Run a CloudWatch Logs Insights query that filters on ERROR, sorts by time, and limits results to 20."
      ],
      "answer": "D",
      "explanation": "CloudWatch Logs Insights runs interactive queries directly against log groups, for example: fields @timestamp, @message | filter @message like /ERROR/ | sort @timestamp desc | limit 20. It returns the matching log events themselves. A metric filter only counts matches as a metric, and CloudTrail records API calls made to AWS services, not the function's own log output.",
      "topic": "Troubleshooting and Optimization",
      "subtopic": "Assist in a root cause analysis",
      "difficulty": "easy",
      "source": "Amazon CloudWatch Logs User Guide: Analyzing log data with CloudWatch Logs Insights; query syntax"
    },
    {
      "stem": "An application uses Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. Most requests are identical GET requests for product data that changes only a few times each day. Users report high latency, and the table's provisioned read capacity is often fully consumed. Which actions will reduce latency and the read load on the table? (Choose TWO.)",
      "options": [
        "Increase the Lambda function's timeout to the maximum value of 15 minutes.",
        "Change the function's GetItem calls to use strongly consistent reads.",
        "Enable caching on the API Gateway stage with a suitable time-to-live (TTL).",
        "Enable DynamoDB Streams on the table to capture changes to product items.",
        "Add a DynamoDB Accelerator (DAX) cluster and use the DAX client in the function.",
        "Change the API from a REST API to a WebSocket API in API Gateway."
      ],
      "answer": "CE",
      "explanation": "API Gateway stage caching returns cached responses for repeated identical requests without invoking Lambda or reading DynamoDB, which suits data that changes rarely. DAX is an in-memory cache for DynamoDB that serves eventually consistent reads with microsecond latency and absorbs repeated reads that would otherwise consume table capacity; the function must run in the same VPC as the DAX cluster. Strongly consistent reads cost twice the capacity and cannot be served from the DAX cache, so they would make the problem worse.",
      "topic": "Troubleshooting and Optimization",
      "subtopic": "Optimize applications by using AWS services and features",
      "difficulty": "medium",
      "source": "API Gateway Developer Guide: Enabling API caching; Amazon DynamoDB Developer Guide: In-memory acceleration with DAX"
    }
  ]
}
```
