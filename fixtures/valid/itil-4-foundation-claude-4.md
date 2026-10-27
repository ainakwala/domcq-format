```json
{
  "format": "domcq/1",
  "exam": "itil-4-foundation",
  "set": "ITIL 4 Foundation practice – Concepts, principles and practices",
  "questions": [
    {
      "stem": "Which describes 'warranty'?",
      "options": [
        "The functionality offered by a product or service to meet a particular need",
        "Assurance that a product or service will meet agreed requirements",
        "The perceived benefits, usefulness and importance of something",
        "A result for a stakeholder enabled by one or more outputs"
      ],
      "answer": "B",
      "explanation": "In ITIL 4, warranty is the assurance that a product or service will meet agreed requirements. It is about how the service performs, covering areas such as availability, capacity, security and continuity. Warranty and utility together determine whether a service can deliver value: utility makes it fit for purpose, warranty makes it fit for use.",
      "rationales": {
        "A": "This is the definition of utility, which describes what the service does rather than how well it performs.",
        "B": "Correct. Warranty is the assurance that a product or service will meet agreed requirements.",
        "C": "This is the definition of value, which is perceived by stakeholders and is not the same as warranty.",
        "D": "This is the definition of an outcome, the result a stakeholder gets from one or more outputs."
      },
      "topic": "Key concepts of service management",
      "subtopic": "Utility and warranty",
      "difficulty": "easy",
      "source": "ITIL Foundation, ITIL 4 Edition, chapter 2 Key concepts of service management: utility and warranty"
    },
    {
      "stem": "Identify the missing word(s) in the following sentence.\n\nA [?] is a formal description of one or more services, designed to address the needs of a target consumer group.",
      "options": [
        "product",
        "service relationship",
        "service level agreement",
        "service offering"
      ],
      "answer": "D",
      "explanation": "A service offering is a formal description of one or more services designed for a target consumer group. Offerings are built from products and may include goods to be supplied, access to resources and service actions. The same product can be packaged into different offerings for different consumer groups.",
      "rationales": {
        "A": "A product is a configuration of an organization's resources designed to offer value; offerings are built on products.",
        "B": "A service relationship is a cooperation between provider and consumer, not a formal description of services.",
        "C": "An SLA is a documented agreement on service levels between provider and customer, not a description for a consumer group.",
        "D": "Correct. A service offering formally describes one or more services for a target consumer group."
      },
      "topic": "Key concepts of service management",
      "subtopic": "Products, services and service offerings",
      "difficulty": "medium",
      "source": "ITIL Foundation, ITIL 4 Edition, chapter 2 Key concepts of service management: products and services"
    },
    {
      "stem": "Which statements about service consumer roles are CORRECT?\n1. The customer is the role that defines the requirements for a service and takes responsibility for the outcomes of service consumption.\n2. The sponsor is the role that authorizes budget for service consumption.\n3. The user is the role that authorizes budget for service consumption.\n4. The sponsor is the role that uses the service day to day.",
      "options": [
        "1 and 2",
        "2 and 3",
        "3 and 4",
        "1 and 4"
      ],
      "answer": "A",
      "explanation": "ITIL 4 identifies three roles on the consumer side: the customer defines requirements and takes responsibility for outcomes, the user uses the services, and the sponsor authorizes budget for service consumption. These roles can be held by different people or by the same person. Statements 3 and 4 mix up the user and sponsor roles.",
      "rationales": {
        "A": "Correct. Statement 1 describes the customer and statement 2 describes the sponsor accurately.",
        "B": "Statement 3 is wrong: the user uses services; it is the sponsor who authorizes budget.",
        "C": "Both statements are wrong: budget authorization belongs to the sponsor and using services belongs to the user.",
        "D": "Statement 4 is wrong: the sponsor authorizes budget, while the user is the role that uses the service."
      },
      "topic": "Key concepts of service management",
      "subtopic": "Service consumer roles",
      "difficulty": "medium",
      "source": "ITIL Foundation, ITIL 4 Edition, chapter 2 Key concepts of service management: service consumers (customer, user, sponsor)"
    },
    {
      "stem": "Which guiding principle recommends assessing what is already available and could be leveraged before deciding to build something new?",
      "options": [
        "Focus on value",
        "Think and work holistically",
        "Start where you are",
        "Optimize and automate"
      ],
      "answer": "C",
      "explanation": "'Start where you are' advises against discarding what already exists and starting from scratch. Existing services, processes, people and tools should be observed and measured directly so that useful elements can be reused. Decisions on how to proceed should be based on accurate information about the current state.",
      "rationales": {
        "A": "Focus on value is about relating everything the organization does to value for stakeholders, not reusing what exists.",
        "B": "Think and work holistically is about seeing how all parts of the organization work together, not assessing existing assets.",
        "C": "Correct. Start where you are asks the organization to assess and reuse what already exists where it can.",
        "D": "Optimize and automate is about maximizing the value of work and using technology, not reusing current capabilities."
      },
      "topic": "ITIL guiding principles",
      "subtopic": "Start where you are",
      "difficulty": "easy",
      "source": "ITIL Foundation, ITIL 4 Edition, chapter 4 The ITIL service value system: guiding principles (start where you are)"
    },
    {
      "stem": "An organization plans to automate a manual approval workflow that contains several redundant steps. According to the 'optimize and automate' guiding principle, what should be done first?",
      "options": [
        "Simplify and optimize the workflow as far as is practical",
        "Automate the whole workflow and then review its results",
        "Automate the most time-consuming steps of the workflow",
        "Replace the workflow with a newly purchased automation tool"
      ],
      "answer": "A",
      "explanation": "The principle says work should be simplified and optimized before it is automated. Automating a workflow that still contains waste or redundant steps simply makes the waste happen faster and can lock it in. Once the workflow is as lean as is practical, automation can be applied where it adds value.",
      "rationales": {
        "A": "Correct. Optimization comes before automation, so redundant steps should be removed first.",
        "B": "Automating first would automate the redundant steps, which the principle specifically warns against.",
        "C": "Automating individual steps before optimizing the workflow still risks automating waste.",
        "D": "Buying a tool does not address the redundant steps and skips the optimization the principle calls for first."
      },
      "topic": "ITIL guiding principles",
      "subtopic": "Optimize and automate",
      "difficulty": "medium",
      "source": "ITIL Foundation, ITIL 4 Edition, chapter 4 The ITIL service value system: guiding principles (optimize and automate)"
    },
    {
      "stem": "Which statements about the 'keep it simple and practical' guiding principle are CORRECT?\n1. If a process, service, action or metric fails to provide value or produce a useful outcome, it should be eliminated.\n2. A solution should be designed to handle every possible exception.\n3. An existing activity should be retained if its value is unclear, rather than being removed.\n4. Work should be done using the minimum number of steps necessary to accomplish the objective.",
      "options": [
        "1 and 2",
        "2 and 3",
        "3 and 4",
        "1 and 4"
      ],
      "answer": "D",
      "explanation": "'Keep it simple and practical' asks for outcome-based thinking and the minimum number of steps needed to achieve an objective. Anything that does not provide value or a useful outcome should be eliminated. ITIL warns that trying to design a solution for every exception leads to over-complication, and that activities should be kept only when they contribute to value.",
      "rationales": {
        "A": "Statement 2 is wrong: designing for every exception causes over-complication; rules should cover the common cases.",
        "B": "Both are wrong: exceptions should not drive design, and activities without clear value should be questioned, not kept.",
        "C": "Statement 3 is wrong: activities that do not contribute to value or outcomes should be removed.",
        "D": "Correct. Eliminating what adds no value and using the minimum number of steps are both part of this principle."
      },
      "topic": "ITIL guiding principles",
      "subtopic": "Keep it simple and practical",
      "difficulty": "hard",
      "source": "ITIL Foundation, ITIL 4 Edition, chapter 4 The ITIL service value system: guiding principles (keep it simple and practical)"
    },
    {
      "stem": "Which dimension of service management is concerned with how the various parts of the organization work in an integrated and coordinated way to enable value creation, through activities, workflows, controls and procedures?",
      "options": [
        "Organizations and people",
        "Value streams and processes",
        "Information and technology",
        "Partners and suppliers"
      ],
      "answer": "B",
      "explanation": "The value streams and processes dimension defines the activities, workflows, controls and procedures needed to achieve agreed objectives. It looks at how the parts of the organization work together to turn demand into value. The other dimensions cover people and structures, information and technology, and relationships with other organizations.",
      "rationales": {
        "A": "This dimension covers roles, responsibilities, culture, structures and competencies, not workflows and controls.",
        "B": "Correct. Value streams and processes covers activities, workflows, controls and procedures that create value.",
        "C": "This dimension covers the information, knowledge and technologies needed to manage services.",
        "D": "This dimension covers the organization's relationships with other organizations involved in services."
      },
      "topic": "Four dimensions of service management",
      "subtopic": "Value streams and processes",
      "difficulty": "medium",
      "source": "ITIL Foundation, ITIL 4 Edition, chapter 3 The four dimensions of service management: value streams and processes"
    },
    {
      "stem": "Which is a component of the ITIL service value system?",
      "options": [
        "The PESTLE factors",
        "Service level agreements",
        "Governance",
        "Opportunity and demand"
      ],
      "answer": "C",
      "explanation": "The ITIL service value system has five components: guiding principles, governance, the service value chain, practices and continual improvement. Governance is the means by which the organization is directed and controlled. Opportunity and demand are inputs to the system and value is its output, but these are not components.",
      "rationales": {
        "A": "PESTLE factors are external factors that influence the four dimensions; they are not an SVS component.",
        "B": "SLAs are tools used within the service level management practice, not a component of the SVS.",
        "C": "Correct. Governance is one of the five components of the service value system.",
        "D": "Opportunity and demand are inputs to the service value system, not one of its components."
      },
      "topic": "Purpose and components of the ITIL service value system",
      "subtopic": "SVS components",
      "difficulty": "easy",
      "source": "ITIL Foundation, ITIL 4 Edition, chapter 4 The ITIL service value system: SVS overview"
    },
    {
      "stem": "Which service value chain activity ensures that service components are available when and where they are needed, and meet agreed specifications?",
      "options": [
        "Design and transition",
        "Deliver and support",
        "Plan",
        "Obtain/build"
      ],
      "answer": "D",
      "explanation": "The purpose of obtain/build is to ensure that service components are available when and where they are needed and meet agreed specifications. Components may be obtained from suppliers or built in-house. Other value chain activities then use these components, for example design and transition to deliver new or changed services.",
      "rationales": {
        "A": "Design and transition ensures products and services meet expectations for quality, costs and time to market.",
        "B": "Deliver and support ensures services are delivered and supported according to agreed specifications and expectations.",
        "C": "Plan ensures a shared understanding of the vision, current status and improvement direction.",
        "D": "Correct. Obtain/build ensures service components are available when and where needed and meet specifications."
      },
      "topic": "Activities of the service value chain, and how they interconnect",
      "subtopic": "Obtain/build",
      "difficulty": "medium",
      "source": "ITIL Foundation, ITIL 4 Edition, chapter 4 The ITIL service value system: service value chain activities"
    },
    {
      "stem": "What is the purpose of the monitoring and event management practice?",
      "options": [
        "To systematically observe services and service components, and record and report selected changes of state",
        "To ensure accurate and reliable information about the configuration of services is available when needed",
        "To move new or changed hardware, software and other components to live environments",
        "To plan and manage the full lifecycle of all IT assets to help the organization maximize value"
      ],
      "answer": "A",
      "explanation": "Monitoring and event management systematically observes services and service components, and records and reports selected changes of state identified as events. Not every change of state is significant, so the practice decides which ones matter and how to respond. Its output often triggers other practices, such as incident management.",
      "rationales": {
        "A": "Correct. This is the purpose of monitoring and event management.",
        "B": "This is the purpose of service configuration management.",
        "C": "This is the purpose of deployment management.",
        "D": "This is the purpose of IT asset management."
      },
      "topic": "Purpose and key terms of 15 ITIL practices",
      "subtopic": "Monitoring and event management",
      "difficulty": "easy",
      "source": "ITIL 4 Foundation syllabus: purpose of the monitoring and event management practice"
    },
    {
      "stem": "Identify the missing word(s) in the following sentence.\n\nA [?] is any component that needs to be managed in order to deliver an IT service.",
      "options": [
        "IT asset",
        "event",
        "configuration item",
        "release"
      ],
      "answer": "C",
      "explanation": "A configuration item (CI) is any component that needs to be managed in order to deliver an IT service. CIs can include hardware, software, documentation, people and services. Service configuration management keeps accurate information about CIs and their relationships available when and where it is needed.",
      "rationales": {
        "A": "An IT asset is any financially valuable component that can contribute to delivering an IT product or service.",
        "B": "An event is any change of state that has significance for the management of a service or other CI.",
        "C": "Correct. This is the ITIL definition of a configuration item.",
        "D": "A release is a version of a service or other CI, or a collection of CIs, made available for use."
      },
      "topic": "Purpose and key terms of 15 ITIL practices",
      "subtopic": "Configuration item",
      "difficulty": "medium",
      "source": "ITIL 4 Foundation syllabus: key terms, configuration item (service configuration management practice)"
    },
    {
      "stem": "An organization installs new software in its production environment, but switches its new features on for users only when a business campaign starts two weeks later. Which practice is responsible for making the new features available for use?",
      "options": [
        "Deployment management",
        "Release management",
        "Change enablement",
        "Service configuration management"
      ],
      "answer": "B",
      "explanation": "The purpose of release management is to make new and changed services and features available for use. Deployment management moves components to live environments, and in ITIL 4 deployment and release can happen at different times. Here the software was deployed first and released later, when the features were made available to users.",
      "rationales": {
        "A": "Deployment management moved the software into production; it does not decide when features become available.",
        "B": "Correct. Release management makes new and changed services and features available for use.",
        "C": "Change enablement assesses risk and authorizes changes; it does not make features available to users.",
        "D": "Service configuration management maintains information about CIs; it does not make features available."
      },
      "topic": "Purpose and key terms of 15 ITIL practices",
      "subtopic": "Release management",
      "difficulty": "hard",
      "source": "ITIL 4 Foundation syllabus: purpose of the release management and deployment management practices"
    },
    {
      "stem": "Which type of change is low-risk, pre-authorized, well understood and fully documented, and can be implemented without needing additional authorization?",
      "options": [
        "Standard change",
        "Normal change",
        "Emergency change",
        "Planned change"
      ],
      "answer": "A",
      "explanation": "Standard changes are low-risk, pre-authorized changes that are well understood and fully documented. Because the risk was assessed when the procedure was created, they can be implemented without further authorization and are often initiated as service requests. Normal and emergency changes both need to be assessed and authorized.",
      "rationales": {
        "A": "Correct. A standard change is pre-authorized and needs no additional authorization each time.",
        "B": "A normal change must be scheduled, assessed and authorized following a process.",
        "C": "An emergency change must be implemented as soon as possible but still needs assessment and authorization.",
        "D": "Planned change is not one of the three ITIL change types: standard, normal and emergency."
      },
      "topic": "7 ITIL practices",
      "subtopic": "Change enablement",
      "difficulty": "easy",
      "source": "ITIL 4 Foundation syllabus: change enablement practice, types of change"
    },
    {
      "stem": "How should incidents be prioritized in the incident management practice?",
      "options": [
        "In the order in which they were reported to the service desk",
        "According to the seniority of the user who reported them",
        "According to how quickly the support team can resolve them",
        "According to an agreed classification based on business impact"
      ],
      "answer": "D",
      "explanation": "ITIL says incidents should be prioritized based on an agreed classification, so that incidents with the highest business impact are resolved first. Agreed criteria make prioritization consistent and aligned with what matters to the business. Order of arrival, who reported the incident or how easy it is to fix do not reflect business impact.",
      "rationales": {
        "A": "First come, first served ignores impact, so a critical incident could wait behind trivial ones.",
        "B": "Seniority is not an agreed measure of business impact and would give inconsistent priorities.",
        "C": "Ease of resolution does not reflect impact; a hard-to-fix incident may be the most important.",
        "D": "Correct. Incidents are prioritized by agreed classification so the highest-impact ones are resolved first."
      },
      "topic": "7 ITIL practices",
      "subtopic": "Incident management",
      "difficulty": "easy",
      "source": "ITIL 4 Foundation syllabus: incident management practice"
    },
    {
      "stem": "Which statements about the problem management practice are CORRECT?\n1. Problem identification is performed only after a major incident has been closed.\n2. Problem control must always result in a permanent resolution of the problem.\n3. A known error is a problem that has been analysed but has not been resolved.\n4. Error control includes identifying potential permanent solutions, which may result in a change request.",
      "options": [
        "1 and 2",
        "2 and 3",
        "3 and 4",
        "1 and 4"
      ],
      "answer": "C",
      "explanation": "A known error is a problem that has been analysed but not resolved, and error control manages known errors, including identifying permanent solutions that may lead to a change request. Problem identification draws on many sources, such as trend analysis of incident records, not only major incidents. Problem control analyses problems and documents workarounds and known errors, and not every problem gets a permanent resolution.",
      "rationales": {
        "A": "Both are wrong: problems are identified from many sources, and problem control does not always produce a permanent fix.",
        "B": "Statement 2 is wrong: problem control may end with a documented workaround and known error rather than a fix.",
        "C": "Correct. Statement 3 defines a known error and statement 4 describes part of error control.",
        "D": "Statement 1 is wrong: identification also uses trend analysis, supplier information and other sources."
      },
      "topic": "7 ITIL practices",
      "subtopic": "Problem management",
      "difficulty": "hard",
      "source": "ITIL 4 Foundation syllabus: problem management practice, phases and key terms (problem, known error, workaround)"
    },
    {
      "stem": "Which statement about the service request management practice is correct?",
      "options": [
        "Each service request should be fulfilled using a workflow designed individually for it",
        "Service requests and their fulfilment should be standardized and automated as much as possible",
        "Service requests are a type of incident and are prioritized against other incidents",
        "Every service request needs approval from a change authority before it is fulfilled"
      ],
      "answer": "B",
      "explanation": "Service requests are a normal, pre-defined part of service delivery, so ITIL recommends standardizing and automating them as much as possible. Repeatable workflows make fulfilment faster, cheaper and more consistent. Policies should also set which requests can be fulfilled with limited or no additional approvals.",
      "rationales": {
        "A": "ITIL recommends reusing standard workflows for requests, not designing one for each request.",
        "B": "Correct. Service requests and their fulfilment should be standardized and automated as much as possible.",
        "C": "Service requests are part of normal service delivery, not a failure or degradation like an incident.",
        "D": "Policies should let many requests be fulfilled with limited or no additional approvals."
      },
      "topic": "7 ITIL practices",
      "subtopic": "Service request management",
      "difficulty": "medium",
      "source": "ITIL 4 Foundation syllabus: service request management practice"
    },
    {
      "stem": "Which statement best describes the focus of the service desk practice?",
      "options": [
        "Diagnosing and removing the root causes of recurring incidents",
        "Providing deep technical expertise on every supported system",
        "Assessing and authorizing the changes that users request",
        "Supporting people and the business, not only technical issues"
      ],
      "answer": "D",
      "explanation": "As automation increases, ITIL says the service desk's focus is to support people and the business rather than simply technical issues. The service desk is the single point of contact between the service provider and its users, and captures demand for incident resolution and service requests. Its staff need customer service skills such as empathy and good communication more than deep technical knowledge.",
      "rationales": {
        "A": "Finding and removing the causes of incidents is the focus of problem management.",
        "B": "Service desks do not need to be highly technical; they rely on support teams for deep expertise.",
        "C": "Assessing and authorizing changes belongs to change enablement, not the service desk.",
        "D": "Correct. The service desk focuses on supporting people and the business, not only technical issues."
      },
      "topic": "7 ITIL practices",
      "subtopic": "Service desk",
      "difficulty": "medium",
      "source": "ITIL 4 Foundation syllabus: service desk practice"
    },
    {
      "stem": "A service provider's monthly reports show that every availability target in the service level agreement has been met, yet the customer remains dissatisfied with the service. What does this most likely indicate?",
      "options": [
        "The agreed targets reflect operational metrics rather than customer outcomes",
        "The customer has misunderstood how availability is being calculated",
        "The availability targets were set too high to be achieved in practice",
        "The provider should stop reporting availability figures to the customer"
      ],
      "answer": "A",
      "explanation": "ITIL calls this the 'watermelon SLA' effect: green on the outside, red on the inside. It happens when SLAs are based on operational metrics instead of outcomes that matter to the customer. Service level management should relate agreements to simply defined outcomes and use customer feedback and business metrics, not only operational measures.",
      "rationales": {
        "A": "Correct. Met targets with an unhappy customer shows the SLA measures operations rather than customer outcomes.",
        "B": "Blaming the customer's understanding ignores the gap between the measured targets and the outcomes they need.",
        "C": "The targets were met, so they were clearly achievable; the issue is what they measure.",
        "D": "Stopping reporting hides the problem; the agreement should instead be aligned with customer outcomes."
      },
      "topic": "7 ITIL practices",
      "subtopic": "Service level management",
      "difficulty": "hard",
      "source": "ITIL 4 Foundation syllabus: service level management practice, service level agreements"
    },
    {
      "stem": "Identify the missing word(s) in the following sentence.\n\nIn the continual improvement model, the step that asks '[?]' is where a baseline assessment of the current state of services, practices and capabilities is made.",
      "options": [
        "What is the vision?",
        "Where do we want to be?",
        "Where are we now?",
        "How do we get there?"
      ],
      "answer": "C",
      "explanation": "The 'Where are we now?' step assesses the current state as a baseline before any improvement is planned. Without a reliable baseline, the organization cannot judge how far it needs to go or later measure whether it got there. This step follows the vision step and comes before defining targets in 'Where do we want to be?'.",
      "rationales": {
        "A": "This step sets the vision and high-level direction, not an assessment of the current state.",
        "B": "This step defines the target state, based on the vision and the baseline already assessed.",
        "C": "Correct. 'Where are we now?' is where the baseline assessment of the current state is made.",
        "D": "This step defines the plan for moving from the current state to the target state."
      },
      "topic": "7 ITIL practices",
      "subtopic": "Continual improvement",
      "difficulty": "medium",
      "source": "ITIL 4 Foundation syllabus: continual improvement practice, the continual improvement model"
    },
    {
      "stem": "In the change enablement practice, what is the change schedule used for?",
      "options": [
        "To document the business case for each requested change",
        "To help plan changes, assist communication, avoid conflicts and assign resources",
        "To record the root causes of the incidents that led to each change",
        "To list the improvement ideas that are awaiting prioritization"
      ],
      "answer": "B",
      "explanation": "The change schedule is used to help plan changes, assist in communication, avoid conflicts and assign resources. It can also be used after changes are deployed, to provide information needed for incident management, problem management and improvement planning. It is a coordination tool, not a store of business cases, root causes or improvement ideas.",
      "rationales": {
        "A": "Business cases are not the purpose of the change schedule, which coordinates when changes happen.",
        "B": "Correct. The change schedule helps plan changes, communicate, avoid conflicts and assign resources.",
        "C": "Root causes of incidents are analysed and recorded by problem management, not the change schedule.",
        "D": "Improvement ideas awaiting prioritization are held in the continual improvement register."
      },
      "topic": "7 ITIL practices",
      "subtopic": "Change enablement",
      "difficulty": "medium",
      "source": "ITIL 4 Foundation syllabus: change enablement practice, change schedule"
    }
  ]
}
```
