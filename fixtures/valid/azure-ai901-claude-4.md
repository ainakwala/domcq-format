```json
{
  "format": "domcq/1",
  "exam": "azure-ai901",
  "set": "AI-901: Microsoft Azure AI Fundamentals practice – Concepts and Foundry mixed set",
  "questions": [
    {
      "stem": "A bank's loan-approval model rejects applicants from one postcode area far more often than applicants from other areas who have similar incomes and credit histories. Which Microsoft responsible AI principle is most directly at risk?",
      "options": [
        "Inclusiveness",
        "Transparency",
        "Fairness",
        "Reliability and safety"
      ],
      "answer": "C",
      "explanation": "The fairness principle says AI systems should treat all people fairly and not allocate opportunities, such as loans, differently to similarly situated groups. Postcode can act as a proxy for protected characteristics, so a model that disadvantages one area despite similar financial profiles shows an allocation harm. Detecting and mitigating this kind of bias is the core concern of fairness.",
      "rationales": {
        "A": "Wrong: inclusiveness is about designing systems that empower and are usable by everyone, including people with disabilities.",
        "B": "Wrong: transparency concerns explaining how a system works, not whether its outcomes are unequal across groups.",
        "C": "Correct: unequal approval rates for similarly qualified groups is a fairness (allocation) harm.",
        "D": "Wrong: reliability and safety is about consistent, safe operation under expected and unexpected conditions."
      },
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Describe principles of responsible AI",
      "difficulty": "easy",
      "source": "AI-901 skills outline: Describe principles of responsible AI (fairness)"
    },
    {
      "stem": "A hospital deploys an AI system that suggests possible diagnoses. Clinicians must be told what data the system was trained on, how it arrives at its suggestions and what its known limitations are. Which responsible AI principle does this requirement address?",
      "options": [
        "Transparency",
        "Accountability",
        "Inclusiveness",
        "Privacy and security"
      ],
      "answer": "A",
      "explanation": "Transparency means people who use or are affected by an AI system should understand how it works, what it was built from and where it can fail. Disclosing training data, reasoning and limitations lets clinicians judge when to trust a suggestion and when to override it. This is distinct from accountability, which assigns human responsibility for the system.",
      "rationales": {
        "A": "Correct: explaining data sources, behavior and limitations is the essence of transparency.",
        "B": "Wrong: accountability is about people being answerable for the system through governance, not explaining how it works.",
        "C": "Wrong: inclusiveness focuses on making AI usable and beneficial for people of all abilities and backgrounds.",
        "D": "Wrong: privacy and security concerns protecting personal data and the system, not explaining its decisions."
      },
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Describe principles of responsible AI",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Describe principles of responsible AI (transparency)"
    },
    {
      "stem": "A company is preparing to release a customer-facing chatbot and wants to address the reliability and safety principle of responsible AI. Which TWO actions directly support this principle? Choose TWO.",
      "options": [
        "Encrypt the conversation logs that the chatbot stores",
        "Test the chatbot against edge cases and adversarial prompts before release",
        "Translate the chatbot interface into several additional languages",
        "Monitor the chatbot in production and define a process to disable it if it misbehaves"
      ],
      "answer": "BD",
      "explanation": "Reliability and safety means an AI system should perform consistently as designed and respond safely to unexpected conditions or misuse. Rigorous pre-release testing, including edge cases and adversarial inputs, and ongoing monitoring with a way to roll back or switch off the system are standard practices for this principle. Encryption and localization are valuable but serve other principles.",
      "rationales": {
        "A": "Wrong: encrypting stored data supports privacy and security rather than reliability and safety.",
        "B": "Correct: testing for edge cases and adversarial prompts checks that the system behaves safely under unexpected input.",
        "C": "Wrong: adding languages broadens access, which supports inclusiveness rather than reliability and safety.",
        "D": "Correct: production monitoring with a shutdown or rollback plan keeps the system operating safely over time."
      },
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Describe principles of responsible AI",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Describe principles of responsible AI (reliability and safety)"
    },
    {
      "stem": "In the context of large language models, what is a token?",
      "options": [
        "A secret key that authenticates requests to a model endpoint",
        "A single complete sentence of input or output text",
        "A numeric setting that controls the randomness of output",
        "A unit of text, such as a word or part of a word, that the model processes"
      ],
      "answer": "D",
      "explanation": "Language models break text into tokens, which are whole words, parts of words or punctuation, and they read and generate text one token at a time. Context window limits, maximum response length and usage-based pricing are all measured in tokens. Knowing this helps you estimate how much text a prompt and response can contain.",
      "rationales": {
        "A": "Wrong: an API key authenticates requests; it is not what the model processes as text.",
        "B": "Wrong: tokens are usually much smaller than a sentence, often a word or a fragment of one.",
        "C": "Wrong: that describes the temperature parameter, not a token.",
        "D": "Correct: tokens are the words or word fragments a language model reads and generates."
      },
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Identify AI model components and configurations",
      "difficulty": "easy",
      "source": "AI-901 skills outline: Identify AI model components and configurations (tokens)"
    },
    {
      "stem": "A developer is building a chat app that answers questions about company HR policies and wants responses to be consistent and focused rather than varied and creative. Which model configuration change should the developer make?",
      "options": [
        "Increase the temperature value",
        "Decrease the temperature value",
        "Increase the maximum response length",
        "Increase the frequency penalty"
      ],
      "answer": "B",
      "explanation": "Temperature controls how much randomness the model uses when choosing the next token. A lower temperature makes the model favor the most likely tokens, giving more predictable and focused answers, which suits factual question answering. Higher values produce more diverse, creative output.",
      "rationales": {
        "A": "Wrong: a higher temperature increases randomness and makes answers more varied.",
        "B": "Correct: a lower temperature makes output more deterministic and focused.",
        "C": "Wrong: maximum length limits how long a response can be, not how consistent it is.",
        "D": "Wrong: frequency penalty discourages repeated tokens; it does not make answers more consistent."
      },
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Identify AI model components and configurations",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Identify AI model components and configurations (model parameters)"
    },
    {
      "stem": "A retailer wants a generative AI assistant to answer questions about its product catalog. Prices and stock levels change several times a day, and answers must reflect the latest data without retraining the model. Which approach is most appropriate?",
      "options": [
        "Fine-tune the model nightly on an export of the catalog",
        "Increase the model's context window size",
        "Use retrieval-augmented generation to add current catalog data to each prompt",
        "Raise the temperature so the model generates more varied answers"
      ],
      "answer": "C",
      "explanation": "Retrieval-augmented generation (RAG) retrieves relevant, up-to-date information from a data source at query time and includes it in the prompt, grounding the model's answer in that data. Because the model's weights are not changed, the data can change as often as needed. Fine-tuning bakes knowledge into the model and is better for teaching style or format than for fast-changing facts.",
      "rationales": {
        "A": "Wrong: a nightly fine-tune would be out of date within hours and is costly; fine-tuning suits style, not changing facts.",
        "B": "Wrong: a larger context window does not by itself supply the model with current catalog data.",
        "C": "Correct: RAG grounds each answer in freshly retrieved data without changing the model.",
        "D": "Wrong: temperature affects randomness, not whether the model knows current prices."
      },
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Identify AI model components and configurations",
      "difficulty": "hard",
      "source": "AI-901 skills outline: Identify AI model components and configurations (grounding, RAG vs fine-tuning)"
    },
    {
      "stem": "An online store wants to automatically determine whether each customer review expresses a positive, negative or neutral opinion. Which type of AI workload is this?",
      "options": [
        "Natural language processing",
        "Computer vision",
        "Image generation",
        "Speech synthesis"
      ],
      "answer": "A",
      "explanation": "Determining the opinion expressed in text is sentiment analysis, a natural language processing (text analysis) workload. NLP covers understanding and analyzing written language, including sentiment, key phrases, entities and language detection. The input here is text, so vision and speech workloads do not apply.",
      "rationales": {
        "A": "Correct: sentiment analysis of written reviews is a natural language processing workload.",
        "B": "Wrong: computer vision analyzes images and video, not the meaning of written reviews.",
        "C": "Wrong: image generation creates new images; it does not classify text opinions.",
        "D": "Wrong: speech synthesis turns text into spoken audio rather than analyzing its sentiment."
      },
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Identify AI workloads",
      "difficulty": "easy",
      "source": "AI-901 skills outline: Identify AI workloads (natural language processing)"
    },
    {
      "stem": "A travel company wants an AI solution that, given a request such as \"rebook my cancelled flight\", decides which steps to take, calls the company's booking and payment systems, and completes the task over several steps. Which AI workload best describes this?",
      "options": [
        "Optical character recognition",
        "Sentiment analysis",
        "Speech recognition",
        "An AI agent"
      ],
      "answer": "D",
      "explanation": "An AI agent uses a generative model to reason about a goal, plan steps and call tools or systems to take actions on the user's behalf. Planning a multi-step task and invoking booking and payment systems goes beyond generating a text reply. The other options are single-purpose perception or analysis workloads.",
      "rationales": {
        "A": "Wrong: OCR extracts text from images and cannot plan or carry out a rebooking.",
        "B": "Wrong: sentiment analysis classifies opinion in text and takes no actions.",
        "C": "Wrong: speech recognition converts speech to text but does not plan or call systems.",
        "D": "Correct: agents reason over a goal, choose tools and perform multi-step actions."
      },
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Identify AI workloads",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Identify AI workloads (generative AI and agents)"
    },
    {
      "stem": "Which TWO of the following scenarios are computer vision workloads? Choose TWO.",
      "options": [
        "Locating and counting products in photographs of store shelves",
        "Reading a news article aloud with a synthetic voice",
        "Extracting printed text from photographs of street signs",
        "Identifying which language an email is written in"
      ],
      "answer": "AC",
      "explanation": "Computer vision workloads take images or video as input and interpret their contents. Locating and counting items in a photo is object detection, and reading text from a photo is optical character recognition (OCR), both of which are vision tasks. Reading text aloud is a speech workload and language identification is a text analysis workload.",
      "rationales": {
        "A": "Correct: finding and counting objects in images is object detection, a computer vision task.",
        "B": "Wrong: generating spoken audio from text is speech synthesis, a speech workload.",
        "C": "Correct: extracting text from photographs is OCR, a computer vision capability.",
        "D": "Wrong: detecting the language of an email is a natural language processing task."
      },
      "topic": "Identify AI concepts and capabilities",
      "subtopic": "Identify AI workloads",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Identify AI workloads (computer vision)"
    },
    {
      "stem": "In Microsoft Foundry, which feature should you use to browse, compare and choose from models provided by Microsoft, OpenAI, Meta and other providers before deploying one?",
      "options": [
        "The Content Understanding analyzer list",
        "The model catalog",
        "The content safety settings",
        "The tracing view"
      ],
      "answer": "B",
      "explanation": "The Foundry model catalog lists models from Microsoft and many other providers, with model cards, benchmarks and deployment options. You use it to explore and compare models, try them, and then deploy the one that fits your scenario. The other features are used after a model or app is already in place.",
      "rationales": {
        "A": "Wrong: Content Understanding analyzers extract fields from content; they are not a model browsing tool.",
        "B": "Correct: the model catalog is where you discover, compare and deploy models in Foundry.",
        "C": "Wrong: content safety settings configure filtering of harmful content, not model selection.",
        "D": "Wrong: tracing records how an app or agent runs; it is not used to choose models."
      },
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement generative AI apps and agents by using Foundry",
      "difficulty": "easy",
      "source": "AI-901 skills outline: Implement generative AI apps and agents by using Foundry (model catalog)"
    },
    {
      "stem": "A developer has selected a chat model, such as GPT-4o, in the Microsoft Foundry model catalog and wants a web app to send prompts to it. What must the developer do first?",
      "options": [
        "Fine-tune the model on the app's data",
        "Create a vector index of the app's content",
        "Deploy the model to obtain an endpoint the app can call",
        "Upload a labeled training dataset to the project"
      ],
      "answer": "C",
      "explanation": "In Foundry, a model in the catalog must be deployed before applications can use it. The deployment provides an endpoint and a deployment name that client code references when sending prompts. Fine-tuning and indexing are optional extras, not prerequisites for calling a pretrained model.",
      "rationales": {
        "A": "Wrong: pretrained chat models can be used without fine-tuning; fine-tuning is optional.",
        "B": "Wrong: a vector index is only needed for retrieval scenarios, not to call the model.",
        "C": "Correct: deploying the model creates the endpoint that the app sends prompts to.",
        "D": "Wrong: labeled training data is for training or fine-tuning, not for calling a deployed model."
      },
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement generative AI apps and agents by using Foundry",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Implement generative AI apps and agents by using Foundry (deploying models)"
    },
    {
      "stem": "You are building an agent with Foundry Agent Service. The agent must answer questions using product manuals that you upload as PDF files, and it must calculate statistics and draw charts from an uploaded CSV file by running Python code. You do not want to write and host your own functions. Which TWO built-in tools should you add to the agent? Choose TWO.",
      "options": [
        "File search",
        "Grounding with Bing Search",
        "Function calling",
        "Code interpreter"
      ],
      "answer": "AD",
      "explanation": "The file search tool indexes uploaded files so the agent can retrieve relevant passages and ground its answers in them. The code interpreter tool lets the agent write and run Python in a sandbox to analyze data files and generate charts. Bing grounding retrieves public web content, and function calling requires you to supply and host the code that the agent invokes.",
      "rationales": {
        "A": "Correct: file search lets the agent retrieve and answer from uploaded documents such as PDF manuals.",
        "B": "Wrong: Bing grounding brings in public web results, not your uploaded manuals.",
        "C": "Wrong: function calling requires you to write and run your own functions, which the scenario rules out.",
        "D": "Correct: code interpreter runs Python in a sandbox to compute statistics and create charts from the CSV."
      },
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement generative AI apps and agents by using Foundry",
      "difficulty": "hard",
      "source": "AI-901 skills outline: Implement generative AI apps and agents by using Foundry (agent tools)"
    },
    {
      "stem": "A team has built a retrieval-augmented chat app in Microsoft Foundry. Before release, they run evaluations to check whether each response is supported by the retrieved source documents rather than containing invented information. Which evaluation metric measures this?",
      "options": [
        "Fluency",
        "Coherence",
        "Relevance",
        "Groundedness"
      ],
      "answer": "D",
      "explanation": "Groundedness measures how well a response's claims are supported by the context the model was given, such as retrieved documents. Low groundedness signals fabricated or unsupported content, a key risk in RAG apps. Fluency, coherence and relevance judge language quality, logical flow and whether the answer addresses the question, not whether it is backed by sources.",
      "rationales": {
        "A": "Wrong: fluency judges grammar and readability, not whether claims come from the sources.",
        "B": "Wrong: coherence judges logical flow and consistency of the response.",
        "C": "Wrong: relevance judges whether the response addresses the user's question.",
        "D": "Correct: groundedness checks that the response is supported by the provided source content."
      },
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement generative AI apps and agents by using Foundry",
      "difficulty": "hard",
      "source": "AI-901 skills outline: Implement generative AI apps and agents by using Foundry (evaluation)"
    },
    {
      "stem": "A company wants to use Microsoft Foundry to identify the main talking points, such as product names and recurring topics, in thousands of written customer support emails. Which capability should it use?",
      "options": [
        "Azure Speech speaker recognition",
        "Azure Language key phrase extraction",
        "Azure Vision image tagging",
        "Azure Document Intelligence invoice model"
      ],
      "answer": "B",
      "explanation": "Key phrase extraction in Azure Language identifies the main concepts and talking points in unstructured text. It works at scale on written content such as emails, reviews and support tickets. The other services target audio, images or specific document types.",
      "rationales": {
        "A": "Wrong: speaker recognition identifies who is speaking in audio, not topics in written emails.",
        "B": "Correct: key phrase extraction returns the main talking points from text.",
        "C": "Wrong: image tagging describes the contents of images, not text.",
        "D": "Wrong: the invoice model extracts invoice fields, not general topics from emails."
      },
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement AI solutions for text and speech by using Foundry",
      "difficulty": "easy",
      "source": "AI-901 skills outline: Implement AI solutions for text and speech by using Foundry (text analysis)"
    },
    {
      "stem": "A developer uses Azure Speech text to speech to produce audio announcements and needs to control the speaking rate, insert pauses and specify how certain words are pronounced. What should the developer use?",
      "options": [
        "Speech Synthesis Markup Language (SSML)",
        "A custom keyword recognition model",
        "Spoken language identification",
        "A batch transcription job"
      ],
      "answer": "A",
      "explanation": "SSML is an XML-based markup language that lets you fine-tune synthesized speech, including rate, pitch, pauses, emphasis and pronunciation. You send SSML instead of plain text to the text to speech service. The other options are speech recognition features that work on incoming audio rather than shaping generated audio.",
      "rationales": {
        "A": "Correct: SSML controls rate, pauses and pronunciation in synthesized speech.",
        "B": "Wrong: keyword recognition listens for a wake word in audio input; it does not shape output speech.",
        "C": "Wrong: language identification detects which language is spoken in incoming audio.",
        "D": "Wrong: batch transcription converts recorded audio to text, the opposite direction."
      },
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement AI solutions for text and speech by using Foundry",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Implement AI solutions for text and speech by using Foundry (text to speech)"
    },
    {
      "stem": "A company records its weekly team meetings and wants a written transcript that labels which participant said each part of the conversation. Which Azure Speech capability should it use?",
      "options": [
        "Text to speech with a neural voice",
        "Speech translation",
        "Speech to text with speaker diarization",
        "Keyword recognition"
      ],
      "answer": "C",
      "explanation": "Speech to text converts spoken audio into a written transcript, and diarization separates the audio by speaker so each segment is attributed to a different person. Together they answer both who spoke and what was said. Translation, synthesis and keyword spotting do not produce speaker-labeled transcripts.",
      "rationales": {
        "A": "Wrong: text to speech generates audio from text, not transcripts from audio.",
        "B": "Wrong: speech translation converts speech into another language but does not by itself label speakers.",
        "C": "Correct: diarization in speech to text attributes each transcript segment to a speaker.",
        "D": "Wrong: keyword recognition detects a specific word or phrase, not a full labeled transcript."
      },
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement AI solutions for text and speech by using Foundry",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Implement AI solutions for text and speech by using Foundry (speech to text)"
    },
    {
      "stem": "A marketing team wants to create original illustrations for a campaign by describing each picture in a sentence of text. What should they use in Microsoft Foundry?",
      "options": [
        "Azure Vision optical character recognition",
        "Azure Vision image captioning",
        "An Azure Document Intelligence layout model",
        "A deployed image generation model, such as gpt-image-1"
      ],
      "answer": "D",
      "explanation": "Image generation models create new images from a natural language prompt. In Foundry you deploy such a model and send it a text description to receive generated images. OCR, captioning and layout analysis all analyze existing images or documents rather than creating new ones.",
      "rationales": {
        "A": "Wrong: OCR reads text that already appears in an image; it does not create images.",
        "B": "Wrong: captioning describes an existing image in words, the reverse of what is needed.",
        "C": "Wrong: a layout model extracts structure from documents and cannot generate pictures.",
        "D": "Correct: an image generation model turns a text prompt into a new image."
      },
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
      "difficulty": "easy",
      "source": "AI-901 skills outline: Implement AI solutions with computer vision and image-generation capabilities (image generation)"
    },
    {
      "stem": "An inventory app lets staff upload a photo of a store shelf and ask free-form questions about it, such as \"Which products appear to be out of stock?\". Which approach in Microsoft Foundry best supports this?",
      "options": [
        "Send the image and question to a text embedding model",
        "Send the image and question to a multimodal chat model",
        "Send the image to Azure Speech text to speech",
        "Send the image to Azure Translator document translation"
      ],
      "answer": "B",
      "explanation": "Multimodal chat models such as GPT-4o accept images alongside text in a prompt and can reason about what the image shows. That makes them suitable for open-ended visual questions that fixed-output features cannot anticipate. Embedding, speech and translation services are not designed to answer questions about image content.",
      "rationales": {
        "A": "Wrong: a text embedding model produces vectors for similarity search and cannot answer questions about images.",
        "B": "Correct: a multimodal chat model takes image plus text input and answers free-form questions.",
        "C": "Wrong: text to speech converts text into audio and does not interpret images.",
        "D": "Wrong: document translation translates text in documents; it does not answer visual questions."
      },
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Implement AI solutions with computer vision and image-generation capabilities (multimodal models)"
    },
    {
      "stem": "An accounts team receives thousands of supplier invoices in many different layouts and needs to extract fields such as vendor name, invoice date and total amount with minimal development effort. What should they use?",
      "options": [
        "The Azure Document Intelligence prebuilt invoice model",
        "The Azure Vision image tagging feature",
        "A custom-trained image classification model",
        "The Azure Language sentiment analysis feature"
      ],
      "answer": "A",
      "explanation": "Azure Document Intelligence provides prebuilt models trained on common document types, including invoices. The invoice model returns labeled fields such as vendor, dates, totals and line items without any training on your part. This makes it the lowest-effort way to turn varied invoices into structured data.",
      "rationales": {
        "A": "Correct: the prebuilt invoice model extracts standard invoice fields with no training needed.",
        "B": "Wrong: image tagging labels visual content and does not return invoice field values.",
        "C": "Wrong: classification assigns a category to an image; it does not extract field values, and training adds effort.",
        "D": "Wrong: sentiment analysis judges opinion in text and does not extract invoice data."
      },
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement AI solutions for information extraction by using Foundry",
      "difficulty": "medium",
      "source": "AI-901 skills outline: Implement AI solutions for information extraction by using Foundry (Document Intelligence)"
    },
    {
      "stem": "An insurer wants one service in Microsoft Foundry that extracts the same set of structured fields, defined in a schema, from claim forms, photos of damage, recorded phone calls and video statements. Which should it use?",
      "options": [
        "The Azure Document Intelligence read model",
        "Azure Speech batch transcription",
        "An Azure Content Understanding analyzer",
        "Azure Language custom named entity recognition"
      ],
      "answer": "C",
      "explanation": "Azure Content Understanding processes multiple modalities, including documents, images, audio and video, and uses analyzers with a field schema you define to return structured output. That lets one service apply the same extraction schema across all the claim content types. The other options each handle only one kind of input and do not produce schema-defined fields across modalities.",
      "rationales": {
        "A": "Wrong: the read model extracts text from documents and images but not from audio or video.",
        "B": "Wrong: batch transcription converts audio to text only and does not extract schema-defined fields.",
        "C": "Correct: Content Understanding analyzers extract schema-defined fields from documents, images, audio and video.",
        "D": "Wrong: custom NER works only on text and cannot process photos, calls or video directly."
      },
      "topic": "Implement AI solutions by using Microsoft Foundry",
      "subtopic": "Implement AI solutions for information extraction by using Foundry",
      "difficulty": "hard",
      "source": "AI-901 skills outline: Implement AI solutions for information extraction by using Foundry (Content Understanding)"
    }
  ]
}
```
