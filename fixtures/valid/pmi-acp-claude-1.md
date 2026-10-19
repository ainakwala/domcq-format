```json
{
  "format": "domcq/1",
  "exam": "pmi-acp",
  "set": "PMI Agile Certified Practitioner (PMI-ACP) practice – Four-domain mixed set",
  "questions": [
    {
      "stem": "A team is about to start building a feature that depends on a third-party mapping service. Nobody on the team has used the service before, and the developers cannot estimate the related user stories with any confidence. What should the team do first?",
      "options": [
        "Add a contingency buffer to the release plan to absorb the estimating uncertainty",
        "Ask the product owner to estimate the stories, since they own the business need",
        "Run a short, time-boxed spike to learn the service and reduce the uncertainty",
        "Commit to the stories now and correct the estimates at the end of the iteration"
      ],
      "answer": "C",
      "explanation": "A spike is a time-boxed experiment used to gain just enough knowledge to reduce technical or design uncertainty, after which the team can estimate and plan with more confidence. Experimenting early surfaces unknowns cheaply instead of discovering them midway through delivery. Padding the plan hides the uncertainty rather than resolving it, and estimates should come from the people who will do the work.",
      "topic": "Mindset",
      "subtopic": "Experiment Early",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain I Mindset – Experiment Early; Agile Practice Guide – spikes"
    },
    {
      "stem": "The Agile Manifesto states four value pairs, each in the form \"X over Y\". Which of the following is one of those value pairs, correctly stated?",
      "options": [
        "Following a plan over responding to change",
        "Comprehensive documentation over working software",
        "Processes and tools over individuals and interactions",
        "Customer collaboration over contract negotiation"
      ],
      "answer": "D",
      "explanation": "The Manifesto values individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan. The items on the right still have value, but the items on the left are valued more. The other options reverse the order of a real value pair, which turns an agile value into its opposite.",
      "topic": "Mindset",
      "subtopic": "Embrace Agile Mindset",
      "difficulty": "easy",
      "source": "Manifesto for Agile Software Development – the four values"
    },
    {
      "stem": "Halfway through a release, the team's release burnup chart shows that the remaining scope will not be finished by the agreed date. A functional manager asks the team to keep reporting the release as on track until they have had a chance to recover. What should the agile practitioner do?",
      "options": [
        "Keep reporting on track for now, and escalate only if the gap is still there next iteration",
        "Share the burnup data openly and work with the product owner on scope or date options",
        "Ask the team to work overtime in the remaining iterations so the full scope still fits",
        "Recalculate the forecast using only the team's best iterations so it matches the date"
      ],
      "answer": "B",
      "explanation": "Transparency means making the real state of the work visible, especially when the news is unwelcome, so that stakeholders can make informed decisions early. A burnup chart that shows a gap is a signal to start a conversation with the product owner about adjusting scope, date or priorities. Hiding the gap, inflating the forecast or relying on overtime removes the chance to adapt and erodes trust.",
      "topic": "Mindset",
      "subtopic": "Build Transparency",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain I Mindset – Build Transparency; burnup charts and information radiators"
    },
    {
      "stem": "During an iteration review, it emerges that a developer noticed a serious defect a week earlier but did not mention it because, on a previous team, people who raised problems were blamed for them. What should the team's agile leader do to address the underlying issue?",
      "options": [
        "Hold a blameless discussion of what happened and openly thank people who surface problems early",
        "Remind the developer privately that withholding defects breaches the team's working agreement",
        "Add a rule that every defect must be logged in the tracking tool within an hour of being found",
        "Ask the developer's functional manager to raise the issue at the next performance review"
      ],
      "answer": "A",
      "explanation": "Psychological safety is the shared belief that it is safe to take interpersonal risks such as admitting mistakes or raising problems. The developer stayed silent out of fear, so the leader needs to show through actions that raising issues is welcomed and that the focus is on the system, not on blame. Rules, reprimands or performance consequences would reinforce the very fear that caused the silence.",
      "topic": "Mindset",
      "subtopic": "Foster Psychological Safety",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain I Mindset – Foster Psychological Safety"
    },
    {
      "stem": "A team currently integrates its code once a week and shows completed work to users only at the end of each quarterly release. The team wants to learn sooner whether its work is technically sound and valuable to users. Which changes would most directly shorten its feedback loops? Choose TWO.",
      "options": [
        "Add a formal sign-off gate before each quarterly release",
        "Integrate and test code on every commit to the main branch",
        "Extend the iteration length so more work is shown at each review",
        "Write a detailed specification before any development begins",
        "Demonstrate working increments to users at the end of each iteration"
      ],
      "answer": "BE",
      "explanation": "Feedback loops are shortened by reducing the time between doing work and learning whether it works. Continuous integration with automated tests gives technical feedback within minutes of each change, and demonstrating increments every iteration lets users react to the product weeks or months earlier. Longer iterations, extra gates and big upfront specifications all delay feedback rather than speeding it up.",
      "topic": "Mindset",
      "subtopic": "Shorten Feedback Loops",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain I Mindset – Shorten Feedback Loops; continuous integration"
    },
    {
      "stem": "Late in a project, the customer learns that a competitor has launched a similar product and asks the team to change a feature it has not started yet. According to the principles behind the Agile Manifesto, how should the team view this request?",
      "options": [
        "As a change to welcome, because harnessing change can give the customer an advantage",
        "As scope creep that should be refused once the release plan has been baselined",
        "As a risk that should be deferred until after the current release has shipped",
        "As a contract breach that requires a formal amendment before any work proceeds"
      ],
      "answer": "A",
      "explanation": "The second principle behind the Agile Manifesto says to welcome changing requirements, even late in development, because agile processes harness change for the customer's competitive advantage. The change concerns work not yet started, so it can be handled through the product backlog, with the product owner prioritizing it against existing items. Treating every late change as scope creep would deny the customer the benefit of what they have just learned.",
      "topic": "Mindset",
      "subtopic": "Embrace Change",
      "difficulty": "easy",
      "source": "Principles behind the Agile Manifesto – principle 2 (welcome changing requirements)"
    },
    {
      "stem": "At iteration planning, a functional manager who attends as an observer starts assigning each task to the developer he believes is best suited for it. The team has agreed to self-organize. What should the team's agile leader do?",
      "options": [
        "Let the manager continue, because he knows the developers' skills best of all",
        "Accept the assignments and revisit them later in the iteration if progress slows",
        "Remind the group that the team selects its own tasks, then coach the manager afterwards",
        "Stop the planning session and escalate the manager's behavior to senior leaders"
      ],
      "answer": "C",
      "explanation": "Self-organizing teams decide among themselves who does which work, which builds ownership and lets the people closest to the work make the best use of their skills. A servant leader protects that autonomy in the moment and then coaches the manager privately on why it matters, rather than confronting or escalating. Silently accepting the assignments would undermine the team's empowerment.",
      "topic": "Leadership",
      "subtopic": "Empower Teams",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain II Leadership – Empower Teams; servant leadership"
    },
    {
      "stem": "For the third iteration in a row, the team's nightly build has broken several times, and each time someone fixes the immediate failure and moves on. The team asks its agile leader for help. What is the most appropriate way to facilitate a lasting resolution?",
      "options": [
        "Assign the most senior developer to own the build and fix every failure as it occurs",
        "Switch off the nightly build until the team has spare capacity to look into the failures",
        "Investigate the failures personally and hand the team a list of changes to implement",
        "Facilitate a root cause analysis, such as the five whys, so the team can tackle the cause"
      ],
      "answer": "D",
      "explanation": "Recurring problems that are patched symptom by symptom keep coming back, so the leader helps the team dig down to the underlying cause with techniques such as the five whys or a fishbone diagram. Facilitating rather than solving the problem for the team builds the team's own problem-solving capability and its ownership of the fix. Switching off the build hides the feedback, and making one person the fixer creates a bottleneck.",
      "topic": "Leadership",
      "subtopic": "Facilitate Problem Resolution",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain II Leadership – Facilitate Problem Resolution; root cause analysis"
    },
    {
      "stem": "Only one developer on the team understands the billing module, and work on billing stalls whenever she is away. Which practice would most effectively spread that knowledge across the team?",
      "options": [
        "Have her pair with different teammates on billing stories",
        "Route every billing story to her so the work is done right",
        "Ask her to write a detailed manual before her next leave",
        "Hire a contractor to act as her backup for billing work"
      ],
      "answer": "A",
      "explanation": "Pair programming, especially with rotating pairs, transfers tacit knowledge as people work side by side on real stories, which removes the single point of failure. Routing all billing work to one person deepens the dependency, and documentation alone captures only part of what an expert knows. Building shared knowledge inside the team lets work keep flowing when any one member is absent.",
      "topic": "Leadership",
      "subtopic": "Promote Knowledge Sharing",
      "difficulty": "easy",
      "source": "PMI-ACP Examination Content Outline (2024), Domain II Leadership – Promote Knowledge Sharing; pair programming"
    },
    {
      "stem": "Team members keep debating which features matter most, and it becomes clear that they each have a different idea of who the product is for and what problem it solves. What should the agile leader facilitate first?",
      "options": [
        "A requirements workshop to document every planned feature in full detail",
        "A session with the product owner to co-create a shared product vision",
        "A team vote to settle once and for all which features get built first",
        "A budget review so the team can see which features it can afford"
      ],
      "answer": "B",
      "explanation": "When people disagree about priorities because they picture different users and problems, the root issue is a missing shared vision, not the features themselves. Co-creating a vision with the product owner, for example as an elevator statement or a product vision box, gives everyone a common purpose against which to test feature decisions. Detailed requirements or a team vote would not resolve the underlying misalignment, and priority decisions belong with the product owner.",
      "topic": "Leadership",
      "subtopic": "Promote shared vision and purpose",
      "difficulty": "easy",
      "source": "PMI-ACP Examination Content Outline (2024), Domain II Leadership – Promote shared vision and purpose; product vision"
    },
    {
      "stem": "A team leader observes that a disagreement over the team's branching strategy has changed character. The two developers involved are no longer trying to solve the problem; each now wants to win, other team members are starting to take sides, and some comments have become personal. Using Speed Leas's five levels of conflict, which level best describes this situation?",
      "options": [
        "Level 1: Problem to solve",
        "Level 2: Disagreement",
        "Level 3: Contest",
        "Level 4: Crusade",
        "Level 5: World war"
      ],
      "answer": "C",
      "explanation": "In the Speed Leas model, level 3 (Contest) is marked by a shift from solving the problem to winning it, with sides forming, blame, personal remarks and overgeneralized language. At level 2 people are guarded and self-protective but still focused on the issue, while at level 4 (Crusade) the aim becomes protecting one's own faction and getting rid of the other side. Recognizing the level helps the leader choose a fitting intervention, which at level 3 usually means actively facilitating the parties back toward shared interests.",
      "topic": "Leadership",
      "subtopic": "Facilitate conflict management",
      "difficulty": "hard",
      "source": "Lyssa Adkins, Coaching Agile Teams – Speed Leas's levels of conflict; PMI-ACP ECO (2024), Leadership – Facilitate conflict management"
    },
    {
      "stem": "During backlog refinement, a large user story for online returns is split into three stories: \"create the returns database tables\", \"build the returns API\" and \"build the returns screens\". Why is this split a problem?",
      "options": [
        "The stories are too small to be estimated reliably with relative story points",
        "Story splitting should be left to the developers once the iteration has started",
        "Each story ought to have been assigned to a specialist before it was split",
        "No single story delivers working value that users could see or give feedback on"
      ],
      "answer": "D",
      "explanation": "Splitting by technical layer produces horizontal slices that all depend on each other before anything works end to end, so none of them is valuable or testable on its own. Agile teams prefer vertical slices, such as returning a single item for a refund, that cut through every layer and deliver a thin piece of usable functionality. Vertical slices fit the INVEST criteria, especially independent and valuable, and make early feedback possible.",
      "topic": "Product",
      "subtopic": "Refine product backlog",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain III Product – Refine product backlog; INVEST and vertical story slicing"
    },
    {
      "stem": "On the last day of an iteration, a story is functionally complete but has not passed the performance testing that the team's Definition of Done requires. The product owner would like to show it at the iteration review anyway. How should the team treat the story?",
      "options": [
        "Count it as done, and add a separate story for the performance testing work",
        "Treat it as not done: leave it out of the increment and return it to the backlog",
        "Count half of its story points toward velocity, since most of the work is finished",
        "Release it to production and finish the performance testing in the next iteration"
      ],
      "answer": "B",
      "explanation": "The Definition of Done is the shared quality standard an item must meet before it becomes part of the increment, so a story that fails any Done criterion is simply not done. In Scrum, such an item is neither released nor presented at the review as complete; it returns to the product backlog for the product owner to reprioritize. Partial credit or splitting off the testing hides undone work and builds up technical debt.",
      "topic": "Product",
      "subtopic": "Manage increments",
      "difficulty": "medium",
      "source": "Scrum Guide (2020) – Increment and Definition of Done; PMI-ACP ECO (2024), Domain III Product – Manage increments"
    },
    {
      "stem": "A product owner wants a visual that arranges user stories beneath the main activities a user performs, laid out from left to right in the order the activities happen, with horizontal lines separating the stories planned for each release. Which tool best meets this need?",
      "options": [
        "Cumulative flow diagram",
        "Work breakdown structure",
        "Burndown chart",
        "Gantt chart",
        "User story map"
      ],
      "answer": "E",
      "explanation": "A user story map lays out the user's activities as a backbone from left to right in the order they are performed, with more detailed stories underneath in priority order. Horizontal slices across the map show which stories make up each release, which helps the team see the whole user journey and plan a minimal first release. Burndown charts and cumulative flow diagrams track progress rather than structure the backlog, and a work breakdown structure decomposes deliverables rather than user activities.",
      "topic": "Product",
      "subtopic": "Visualize work",
      "difficulty": "easy",
      "source": "Jeff Patton, User Story Mapping; PMI-ACP ECO (2024), Domain III Product – Visualize work"
    },
    {
      "stem": "A product owner sequences four features using weighted shortest job first (WSJF), calculated here as cost of delay divided by duration. Feature W has a cost of delay of 40 and a duration of 10. Feature X has a cost of delay of 15 and a duration of 5. Feature Y has a cost of delay of 3 and a duration of 1. Feature Z has a cost of delay of 21 and a duration of 3. Which feature should the team deliver first?",
      "options": [
        "Feature W",
        "Feature X",
        "Feature Y",
        "Feature Z"
      ],
      "answer": "D",
      "explanation": "WSJF favors the work that delivers the most cost of delay per unit of time, so each feature's score is its cost of delay divided by its duration: W = 4, X = 3, Y = 3 and Z = 7. Feature Z therefore comes first, even though W has the highest cost of delay and Y is the quickest to finish. Sequencing by this ratio minimizes the total economic cost of waiting across the whole set of features.",
      "topic": "Product",
      "subtopic": "Manage value delivery",
      "difficulty": "hard",
      "source": "Weighted Shortest Job First (cost of delay / duration); PMI-ACP ECO (2024), Domain III Product – Manage value delivery"
    },
    {
      "stem": "A team is unsure whether users will understand a proposed new checkout flow. Before writing any production code, what is the cheapest way to get early feedback on the design from real users?",
      "options": [
        "Test a low-fidelity prototype, such as clickable wireframes, with a few users",
        "Build the full flow and run an A/B test against the existing checkout page",
        "Ask the developers to vote on the checkout design they find easiest to use",
        "Write a detailed specification of the flow and send it to users for sign-off"
      ],
      "answer": "A",
      "explanation": "Low-fidelity prototypes such as paper sketches or clickable wireframes let users try the flow and react to it at a fraction of the cost of building it. Getting this feedback before coding means design problems are found when they are cheapest to fix. An A/B test gives valuable data but only after the flow is built, and developers' opinions or document sign-offs are no substitute for observing real users.",
      "topic": "Delivery",
      "subtopic": "Seek early feedback",
      "difficulty": "easy",
      "source": "PMI-ACP Examination Content Outline (2024), Domain IV Delivery – Seek early feedback; prototypes and wireframes"
    },
    {
      "stem": "A Kanban team's workflow is stable. On average it has 30 work items in progress and finishes 6 work items per week. The team wants to bring its average cycle time down to 3 weeks without changing its throughput. Using Little's Law, what average work in progress should the team aim for?",
      "options": [
        "10 items",
        "12 items",
        "18 items",
        "24 items",
        "30 items"
      ],
      "answer": "C",
      "explanation": "Little's Law states that average cycle time equals average work in progress divided by average throughput, so the team's current cycle time is 30 divided by 6, or 5 weeks. To reach a 3-week cycle time at 6 items per week, WIP must fall to 3 times 6, or 18 items. This is why limiting WIP is one of the most direct levers a team has for shortening cycle time, provided throughput holds steady.",
      "topic": "Delivery",
      "subtopic": "Manage agile metrics",
      "difficulty": "hard",
      "source": "Little's Law (cycle time = WIP / throughput); PMI-ACP ECO (2024), Domain IV Delivery – Manage agile metrics"
    },
    {
      "stem": "Mary and Tom Poppendieck adapted the seven wastes of lean manufacturing into seven wastes of software development. Which of the following are among those software development wastes? Choose THREE.",
      "options": [
        "Partially done work",
        "Refactoring",
        "Task switching",
        "Pair programming",
        "Extra features",
        "Backlog refinement"
      ],
      "answer": "ACE",
      "explanation": "In lean software development, the Poppendiecks identify partially done work, extra features, relearning, handoffs, task switching, delays and defects as the main forms of waste. Each consumes time or effort without adding value the customer would pay for, such as unfinished code that cannot be released or features that are rarely used. Refactoring, pair programming and backlog refinement are value-adding practices that improve code quality, shared knowledge and readiness for upcoming work.",
      "topic": "Delivery",
      "subtopic": "Recognize and eliminate waste",
      "difficulty": "hard",
      "source": "Poppendieck, Implementing Lean Software Development – the seven wastes; PMI-ACP ECO (2024), Delivery – Recognize and eliminate waste"
    },
    {
      "stem": "For the last three retrospectives, a team has produced a long list of improvement ideas, but none of them has been acted on and the same problems keep coming up. What should the facilitator do to make the retrospectives more effective?",
      "options": [
        "Skip retrospectives until the team has time to work through the existing list",
        "Have the team pick one or two improvements and plan them as work in the next iteration",
        "Send the list of ideas to management so that they can decide which ones to fund",
        "Lengthen each retrospective so the team can discuss every idea in more depth"
      ],
      "answer": "B",
      "explanation": "Retrospectives only lead to continuous improvement when insights become small, concrete actions that the team actually carries out. Selecting one or two high-impact improvements, giving them owners and adding them to the next iteration's plan makes them visible and gets them done, and the next retrospective can check whether they worked. Longer meetings, skipping the event or handing decisions to management do not close the improvement loop.",
      "topic": "Delivery",
      "subtopic": "Perform continuous improvements",
      "difficulty": "medium",
      "source": "Scrum Guide (2020) – Sprint Retrospective; PMI-ACP ECO (2024), Domain IV Delivery – Perform continuous improvements"
    },
    {
      "stem": "On a team's Kanban board, the Testing column has reached its WIP limit of three items, and two finished items are waiting in the Development Done column. A developer has just finished her current item. What should she do next?",
      "options": [
        "Pull the next item from the backlog into Development so that she stays busy",
        "Raise the Testing column's WIP limit so the waiting items can be moved in",
        "Move her finished item into Testing anyway, since it is ready to be tested",
        "Start on a technical improvement task that is not tracked on the board",
        "Help the testers get items through Testing so that work can flow again"
      ],
      "answer": "E",
      "explanation": "WIP limits expose bottlenecks: when a downstream column is full, starting more work upstream only lengthens the queue and the cycle time. The team swarms on the constraint, here by helping to finish testing, so that items reach done and capacity opens up again. This stop-starting, start-finishing approach optimizes the flow of the whole system rather than keeping each individual busy.",
      "topic": "Delivery",
      "subtopic": "Optimize flow",
      "difficulty": "medium",
      "source": "Kanban method – WIP limits and pull systems; PMI-ACP ECO (2024), Domain IV Delivery – Optimize flow"
    }
  ]
}
```
