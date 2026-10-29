```json
{
  "format": "domcq/1",
  "exam": "azure-ai901",
  "set": "AI-901: Microsoft Azure AI Fundamentals practice – Concepts and Foundry mixed set",
  "questions": [
    {
      "stem": "A bank uses an AI model to help approve personal loans. An audit finds that applicants with equivalent financial profiles are approved at significantly lower rates when they live in postal codes associated with a particular ethnic group. Which Microsoft responsible AI principle is most directly at risk?",
      "options": [
        "Transparency",
        "Reliability and safety",
        "Fairness",
        "Inclusiveness"
      ],
      "answer": "C",
      "explanation": "Fairness means AI systems should treat all people equitably and not allocate opportunities, such as loans, differently to similar people based on group membership. Postal code can act as a proxy for a protected characteristic, so the model reproduces bias even if ethnicity is never an input. Inclusiveness is about designing systems that empower and are usable by everyone, which is a different concern.",
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Describe principles of responsible AI",
      "difficulty": "easy",
      "source": "AI-901 skills outline: Describe principles of responsible AI (fairness)"
    },
    {
      "stem": "A company adds an AI chatbot to its website. Users are clearly told they are interacting with an AI system, and the company publishes documentation describing what the system can and cannot do reliably. Which responsible AI principle do these measures primarily support?",
      "options": [
        "Transparency",
        "Accountability",
        "Privacy and security",
        "Fairness"
      ],
      "answer": "A",
      "explanation": "Transparency is about people understanding when they are dealing with AI, how it behaves and what its limitations are. Disclosing that users are talking to an AI and documenting intended uses and limitations lets people calibrate how much to trust the output. Accountability, by contrast, concerns who is answerable for the system and how it is governed.",
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Describe principles of responsible AI",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Describe principles of responsible AI (transparency)"
    },
    {
      "stem": "An organization sets up a review board that must approve AI deployments, assigns named owners who are answerable when an AI system causes harm, and ensures humans can override automated decisions. Which responsible AI principle does this governance structure primarily address?",
      "options": [
        "Inclusiveness",
        "Transparency",
        "Reliability and safety",
        "Accountability"
      ],
      "answer": "D",
      "explanation": "Accountability means the people who design and deploy AI systems remain responsible for how those systems operate. Governance bodies, clear ownership and human oversight with the ability to intervene are the typical mechanisms for this. The principle ensures that an AI system is never the final authority on decisions that affect people.",
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Describe principles of responsible AI",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Describe principles of responsible AI (accountability)"
    },
    {
      "stem": "A finance team wants to process thousands of scanned supplier invoices and automatically pull out the vendor name, invoice date, line items and total amount into a database. Which type of AI workload is this?",
      "options": [
        "Speech recognition",
        "Information extraction",
        "Image generation",
        "Conversational AI"
      ],
      "answer": "B",
      "explanation": "Information extraction takes unstructured or semi-structured content, such as scanned forms and invoices, and turns it into structured fields that applications can store and use. It combines reading the text (OCR) with understanding which value corresponds to which field. Speech recognition works on audio, and image generation creates new images rather than reading existing ones.",
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Identify AI workloads",
      "difficulty": "easy",
      "source": "AI-901 skills outline: Identify AI workloads (information extraction)"
    },
    {
      "stem": "A travel company wants an AI solution that, given a request such as \"move my flight to Friday\", can decide which steps to take, call the airline booking API, check the result and then confirm the change with the customer. Which type of AI workload best describes this solution?",
      "options": [
        "Text summarization",
        "Entity recognition",
        "AI agent",
        "Knowledge mining"
      ],
      "answer": "C",
      "explanation": "An AI agent uses a generative model to reason about a goal, plan steps and call tools such as APIs to take actions on the user's behalf, then evaluate the outcome. The key distinction from a plain chat or text-analysis workload is that the agent acts, not just responds. Summarization and entity recognition only analyze text, and knowledge mining indexes content for search.",
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Identify AI workloads",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Identify AI workloads (generative AI and agents)"
    },
    {
      "stem": "A developer uses a chat model deployed in Microsoft Foundry to answer questions about company policies. The responses vary noticeably each time the same question is asked, and the developer wants them to be more consistent and focused. Which change is most appropriate?",
      "options": [
        "Decrease the temperature value",
        "Increase the temperature value",
        "Increase the maximum response tokens",
        "Add more earlier messages to the prompt"
      ],
      "answer": "A",
      "explanation": "Temperature controls how random the model's choice of the next token is. A lower temperature makes the model favor the most probable tokens, producing more deterministic and focused output, while a higher value increases variety and creativity. Maximum response tokens only limits output length and does not affect consistency.",
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Identify AI model components and configurations",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Identify AI model components and configurations (model parameters such as temperature)"
    },
    {
      "stem": "When you configure a generative AI chat application in the Microsoft Foundry playground, what is the primary purpose of the system message?",
      "options": [
        "To store the user's previous questions for later sessions",
        "To set the maximum number of tokens the model can return",
        "To select which model deployment handles each request",
        "To define the model's role, tone and behavioral boundaries"
      ],
      "answer": "D",
      "explanation": "The system message (system prompt) gives the model standing instructions that apply to the whole conversation, such as its persona, style, scope and rules about what it should not do. It is sent with every request and shapes how the model interprets user messages. Token limits and deployment selection are separate configuration settings, not part of the prompt.",
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Identify AI model components and configurations",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Identify AI model components and configurations (system message and prompts)"
    },
    {
      "stem": "You need to find support articles whose meaning is similar to a customer's question, even when the article and the question do not share the same keywords. Which type of model output is designed for this purpose?",
      "options": [
        "Chat completions",
        "Embeddings",
        "Synthesized speech",
        "Image captions"
      ],
      "answer": "B",
      "explanation": "An embeddings model converts text into numeric vectors that capture semantic meaning, so texts with similar meaning end up close together in vector space. Comparing vectors, for example with cosine similarity, finds related content even when the wording differs. This is the basis of vector search and of retrieval in retrieval-augmented generation.",
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Identify AI model components and configurations",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Identify AI model components and configurations (embeddings and vector search)"
    },
    {
      "stem": "A company's internal assistant, built on a generative AI model in Microsoft Foundry, sometimes gives confident answers about HR policies that do not appear in the company handbook. You want its answers to be based on the current handbook content. Which TWO actions should you take? Choose TWO.",
      "options": [
        "Retrieve relevant handbook passages and add them to the prompt as context",
        "Increase the temperature so the model considers more possible answers",
        "Instruct the model in the system message to answer only from supplied context",
        "Increase the maximum response length so the model can add more detail"
      ],
      "answer": "AC",
      "explanation": "Grounding reduces fabricated answers by giving the model the facts it should use. Retrieval-augmented generation fetches relevant handbook passages and includes them in the prompt, and a system message that tells the model to answer only from that context, and to say when it does not know, keeps it from filling gaps with invented content. Raising temperature makes output more random, and a longer response limit does nothing to improve accuracy.",
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Identify AI model components and configurations",
      "difficulty": "hard",
      "source": "AI-901 skills outline: Identify AI model components and configurations (grounding and retrieval-augmented generation)"
    },
    {
      "stem": "You have chosen a model from the model catalog in the Microsoft Foundry portal. What must you do before an application can send prompts to that model through an endpoint?",
      "options": [
        "Train the model on your own labeled dataset",
        "Export the model weights to a local computer",
        "Create an Azure AI Search index for the model",
        "Deploy the model to create a model deployment"
      ],
      "answer": "D",
      "explanation": "Selecting a model in the catalog does not make it callable; you must deploy it, which creates a named deployment with an endpoint that applications use. Client code then sends requests that reference the deployment. Pretrained foundation models can be used without any training, and a search index is only needed if you add retrieval.",
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement generative AI apps and agents by using Foundry",
      "difficulty": "easy",
      "source": "AI-901 skills outline: Implement generative AI apps and agents by using Foundry (deploy models from the model catalog)"
    },
    {
      "stem": "You are building an agent in Foundry Agent Service that must answer employee questions using the content of several PDF product manuals that you upload. Which built-in tool should you add to the agent?",
      "options": [
        "Code interpreter",
        "File search",
        "Grounding with Bing Search",
        "Function calling"
      ],
      "answer": "B",
      "explanation": "The file search tool ingests uploaded files into a vector store and retrieves the most relevant passages so the agent can ground its answers in them. Grounding with Bing Search uses public web content instead of your private documents. Code interpreter runs Python code for calculations and file processing, and function calling invokes functions that you write.",
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement generative AI apps and agents by using Foundry",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Implement generative AI apps and agents by using Foundry (agent tools such as file search)"
    },
    {
      "stem": "When you create an agent in Foundry Agent Service, which THREE elements do you define as part of the agent? Choose THREE.",
      "options": [
        "A model deployment that the agent uses to reason and respond",
        "Instructions that describe the agent's goals and behavior",
        "A labeled training dataset used to retrain the underlying model",
        "Tools the agent can call to retrieve data or take actions"
      ],
      "answer": "ABD",
      "explanation": "An agent combines a generative model that does the reasoning, instructions that set its purpose and rules, and tools that let it retrieve knowledge or act, such as file search, code interpreter or custom functions. Agents use pretrained models as they are, so creating one does not involve retraining the model on a labeled dataset.",
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement generative AI apps and agents by using Foundry",
      "difficulty": "hard",
      "source": "AI-901 skills outline: Implement generative AI apps and agents by using Foundry (create agents in Foundry Agent Service)"
    },
    {
      "stem": "A company deploys a chat model in Microsoft Foundry for a public website. It wants harmful content, such as hate speech or violent material, to be detected and blocked in both user prompts and model responses without writing its own moderation code. What should it configure?",
      "options": [
        "A lower temperature on the model deployment",
        "A longer system message for the application",
        "Content filters (guardrails) for the deployment",
        "Fine-tuning of the model with safe examples"
      ],
      "answer": "C",
      "explanation": "Foundry applies content filtering, powered by Azure AI Content Safety, to both prompts and completions. It classifies content into harm categories such as hate, sexual, violence and self-harm at different severity levels, and you can adjust the thresholds at which content is blocked. Temperature and system messages influence model behavior but do not provide reliable detection and blocking.",
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement generative AI apps and agents by using Foundry",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Implement generative AI apps and agents by using Foundry; Microsoft Learn: content filtering and Azure AI Content Safety"
    },
    {
      "stem": "A retailer wants to automatically determine whether each of thousands of customer reviews is positive, negative, neutral or mixed. Which Azure AI Language capability, available through Microsoft Foundry, should it use?",
      "options": [
        "Sentiment analysis",
        "Key phrase extraction",
        "Language detection",
        "Entity linking"
      ],
      "answer": "A",
      "explanation": "Sentiment analysis evaluates text and returns a sentiment label of positive, negative, neutral or mixed, along with confidence scores, at document and sentence level. Key phrase extraction identifies the main talking points but not opinion, language detection identifies which language the text is written in, and entity linking connects mentions to known entities.",
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement AI solutions for text and speech by using Foundry",
      "difficulty": "easy",
      "source": "AI-901 skills outline: Implement AI solutions for text and speech by using Foundry (Azure AI Language sentiment analysis)"
    },
    {
      "stem": "Before storing support chat transcripts for analysis, a company must find and mask phone numbers, email addresses and national ID numbers in the text. Which Azure AI Language feature should it use?",
      "options": [
        "Key phrase extraction",
        "Text summarization",
        "Language detection",
        "PII detection"
      ],
      "answer": "D",
      "explanation": "Personally identifiable information (PII) detection identifies categories of sensitive data, such as phone numbers, email addresses and government ID numbers, and can return a redacted version of the text with those values masked. This supports privacy requirements before data is stored or analyzed further. The other features analyze the content of text but do not locate and redact personal data.",
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement AI solutions for text and speech by using Foundry",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Implement AI solutions for text and speech by using Foundry (Azure AI Language PII detection)"
    },
    {
      "stem": "A call center wants to convert recorded customer phone calls into written transcripts so the conversations can be searched later. Which capability should it use?",
      "options": [
        "Text to speech in Azure AI Speech",
        "Speech to text in Azure AI Speech",
        "Text translation in Azure AI Translator",
        "Sentiment analysis in Azure AI Language"
      ],
      "answer": "B",
      "explanation": "Speech to text (speech recognition) converts spoken audio into written text, and it supports both real-time and batch transcription of recorded files. Text to speech does the opposite, producing audio from text. Translation and sentiment analysis work on text that already exists, so they could only be applied after transcription.",
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement AI solutions for text and speech by using Foundry",
      "difficulty": "easy",
      "source": "AI-901 skills outline: Implement AI solutions for text and speech by using Foundry (speech to text)"
    },
    {
      "stem": "A developer uses Azure AI Speech text to speech to read out order confirmations. Customers complain that order numbers are read as one large number and that there are no pauses between sentences. The developer wants to control pronunciation, pauses and speaking rate for specific parts of the text. What should the developer use?",
      "options": [
        "A custom speech-to-text model trained on order audio",
        "A higher sample rate for the audio output format",
        "Speech Synthesis Markup Language (SSML) in the request",
        "Language detection before sending the text to synthesis"
      ],
      "answer": "C",
      "explanation": "SSML is an XML-based markup that gives fine-grained control over synthesized speech. Elements such as say-as can make digits be read individually, break inserts pauses, and prosody adjusts rate, pitch and volume for specific parts of the text. A speech-to-text model handles recognition, not synthesis, and audio sample rate affects quality rather than how the words are spoken.",
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement AI solutions for text and speech by using Foundry",
      "difficulty": "hard",
      "source": "AI-901 skills outline: Implement AI solutions for text and speech by using Foundry (text to speech and SSML)"
    },
    {
      "stem": "A marketing team wants to create original illustrations from text descriptions such as \"a watercolor lighthouse at sunset\" by using a model deployed in Microsoft Foundry. Which type of model should it deploy?",
      "options": [
        "An image generation model",
        "A text embeddings model",
        "A speech synthesis model",
        "An optical character recognition model"
      ],
      "answer": "A",
      "explanation": "Image generation models, such as those available in the Foundry model catalog, create new images from a natural language prompt. They are generative: the output is new content rather than an analysis of existing content. Embeddings models produce vectors, speech synthesis produces audio, and OCR reads text from existing images.",
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
      "difficulty": "easy",
      "source": "AI-901 skills outline: Implement AI solutions with computer vision and image-generation capabilities by using Foundry (image generation)"
    },
    {
      "stem": "A logistics company photographs delivery labels with mobile phones and needs to read the printed and handwritten text on each label as machine-readable text. Which capability should it use?",
      "options": [
        "Image tagging in Azure AI Vision",
        "Object detection in Azure AI Vision",
        "Face detection in Azure AI Vision",
        "OCR (Read) in Azure AI Vision"
      ],
      "answer": "D",
      "explanation": "Optical character recognition, provided by the Read feature of Azure AI Vision, extracts printed and handwritten text from images and returns it with its position as lines and words. Image tagging and object detection describe or locate visual content rather than reading characters, and face detection only finds human faces.",
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Implement AI solutions with computer vision and image-generation capabilities by using Foundry (OCR)"
    },
    {
      "stem": "An insurance company receives claim evidence as PDF forms, photos, recorded phone calls and short videos. It wants a single Foundry service in which it defines the fields to extract, such as claim number, damage description and incident date, and receives structured output from all of these content types. Which service best fits this requirement?",
      "options": [
        "Azure AI Document Intelligence",
        "Azure Content Understanding",
        "Azure AI Speech",
        "Azure AI Translator"
      ],
      "answer": "B",
      "explanation": "Azure Content Understanding uses analyzers with a field schema you define to extract structured data from documents, images, audio and video, so one service can handle every type of claim evidence. Document Intelligence is designed for documents and forms and cannot process audio or video. Speech only transcribes or synthesizes audio, and Translator only translates text.",
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement AI solutions for information extraction by using Foundry",
      "difficulty": "hard",
      "source": "AI-901 skills outline: Implement AI solutions for information extraction by using Foundry (Azure Content Understanding)"
    }
  ]
}
```
