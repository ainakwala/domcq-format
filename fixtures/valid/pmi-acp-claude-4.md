```json
{
  "format": "domcq/1",
  "exam": "pmi-acp",
  "set": "PMI Agile Certified Practitioner (PMI-ACP) practice – Four Domains Mixed Set",
  "questions": [
    {
      "stem": "A team is unsure whether customers will use a proposed in-app recommendation feature that would take about three iterations to build in full. The product owner wants evidence before committing that much capacity. What should the team do first?",
      "options": [
        "Build the full feature to production quality so feedback reflects the final experience",
        "Write a complete requirements specification and get stakeholder sign-off before coding",
        "Release a lightweight version to a small group of users and measure actual usage",
        "Estimate the full feature in story points and schedule it into the next release"
      ],
      "answer": "C",
      "explanation": "Agile teams reduce uncertainty by running small, cheap experiments, such as a minimum viable product, prototype or limited release, before making large investments. Measuring what real users actually do produces empirical evidence about whether the idea is worth pursuing. If the hypothesis is wrong, the team has lost a small amount of effort instead of three iterations.",
      "rationales": {
        "A": "Wrong: building everything first spends three iterations before learning whether customers want the feature at all.",
        "B": "Wrong: a detailed specification relies on assumptions and delays learning instead of testing the idea with real users.",
        "C": "Correct: a small release tests the core assumption quickly and cheaply with real usage data.",
        "D": "Wrong: estimating and scheduling commits capacity without first validating that the feature delivers value."
      },
      "topic": "Mindset",
      "subtopic": "Experiment Early",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain I Mindset, Task: Experiment early; minimum viable product and experimentation"
    },
    {
      "stem": "During a retrospective, a junior developer admits that a defect reached production because they skipped a test step they did not fully understand. How should the team facilitator respond to best foster psychological safety?",
      "options": [
        "Record the developer's name against the defect so that accountability is clear",
        "Thank the developer and lead the team in examining which process gaps allowed it",
        "Remind the developer privately that skipping tests must never happen again",
        "Move on quickly to spare the developer embarrassment in front of the team"
      ],
      "answer": "B",
      "explanation": "Psychological safety means people can admit mistakes and raise problems without fear of blame or embarrassment. Appreciating the admission and steering the discussion toward the system, such as unclear test steps or missing automation, keeps people willing to speak up and produces real fixes. Blame, private reprimands or avoiding the topic all teach the team to hide problems.",
      "rationales": {
        "A": "Wrong: naming individuals creates a blame culture that discourages people from reporting problems.",
        "B": "Correct: it rewards openness and focuses the team on blameless, systemic improvement.",
        "C": "Wrong: a reprimand punishes candor, making it less likely that future mistakes are disclosed.",
        "D": "Wrong: avoiding the topic wastes a learning opportunity and signals that mistakes are taboo."
      },
      "topic": "Mindset",
      "subtopic": "Foster Psychological Safety",
      "difficulty": "easy",
      "source": "PMI-ACP Examination Content Outline (2024), Domain I Mindset, Task: Foster psychological safety; blameless retrospectives"
    },
    {
      "stem": "Halfway through an iteration, a team realizes it will not finish two of the backlog items it planned. A senior stakeholder is expecting to see all planned items demonstrated at the iteration review. What should the team do?",
      "options": [
        "Ask the stakeholder to postpone the review until all planned items are done",
        "Wait until the iteration review to explain which items were not completed",
        "Work overtime to meet the plan, relaxing testing on the two items if needed",
        "Make the status visible now and agree on reprioritization with the product owner"
      ],
      "answer": "D",
      "explanation": "Transparency means making the true state of work visible, including bad news, as early as possible. Raising the issue mid-iteration gives the product owner time to adjust scope, reset expectations with the stakeholder and decide which item matters most. Delaying the information erodes trust, stretching the timebox breaks the team's cadence, and cutting quality to hit a plan creates hidden technical debt.",
      "rationales": {
        "A": "Wrong: stretching the timebox hides the problem and breaks the regular cadence that makes progress predictable.",
        "B": "Wrong: delaying the news removes the product owner's chance to adjust scope while it still helps.",
        "C": "Wrong: unsustainable overtime and reduced testing trade quality and team health for appearances.",
        "D": "Correct: early visibility lets the product owner and stakeholder make informed decisions."
      },
      "topic": "Mindset",
      "subtopic": "Build Transparency",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain I Mindset, Task: Build transparency; information radiators and early disclosure"
    },
    {
      "stem": "A team works in four-week iterations and merges code from all developers only in the final week. Integration defects often cause major rework, and the customer sees working software only once a month. Which actions would most directly shorten the team's feedback loops? Choose TWO.",
      "options": [
        "Integrate code frequently and run automated tests on every commit",
        "Add a hardening iteration before each release to catch integration defects",
        "Shorten iterations and review working software with the customer after each",
        "Have a dedicated tester verify all stories together in the iteration's final week",
        "Send the customer a detailed written progress report at the end of every week"
      ],
      "answer": "AC",
      "explanation": "A feedback loop is the time between doing something and learning whether it was right. Continuous integration with automated tests tells developers within minutes whether their change broke anything, and shorter iterations with reviews of working software let the customer react to the product more often. Hardening iterations and end-of-iteration testing batch the work and delay feedback, while written reports describe progress without giving feedback on the product itself.",
      "rationales": {
        "A": "Correct: continuous integration gives developers technical feedback within minutes instead of weeks.",
        "B": "Wrong: a hardening iteration batches integration and testing, which delays feedback further.",
        "C": "Correct: shorter iterations with reviews of working software bring customer feedback sooner.",
        "D": "Wrong: testing everything at the end of the iteration keeps feedback batched and late.",
        "E": "Wrong: written reports describe status but do not let the customer react to working software."
      },
      "topic": "Mindset",
      "subtopic": "Shorten Feedback Loops",
      "difficulty": "hard",
      "source": "PMI-ACP Examination Content Outline (2024), Domain I Mindset, Task: Shorten feedback loops; continuous integration and iteration reviews"
    },
    {
      "stem": "Midway through development, a customer asks for a significant change to a planned feature because a competitor has just released a similar product. Based on the principles behind the Agile Manifesto, how should the team view this request?",
      "options": [
        "As an opportunity to give the customer a competitive advantage, even late in development",
        "As scope creep that should be declined until the current release has shipped",
        "As a risk that must pass a formal change control board before any discussion",
        "As evidence that the original requirements were poorly gathered and need rework"
      ],
      "answer": "A",
      "explanation": "One of the twelve principles behind the Agile Manifesto is to welcome changing requirements, even late in development, because agile processes harness change for the customer's competitive advantage. The product owner adds the change to the backlog and orders it against other work based on value. Iterative delivery is designed so that late changes cost far less than in a fixed, plan-driven approach.",
      "rationales": {
        "A": "Correct: agile principles welcome late change when it increases the value delivered to the customer.",
        "B": "Wrong: refusing valuable change to protect the original plan goes against the agile value of responding to change.",
        "C": "Wrong: heavyweight change control slows response; the product owner reprioritizes the backlog instead.",
        "D": "Wrong: changes driven by the market are normal and expected, not a sign of a requirements failure."
      },
      "topic": "Mindset",
      "subtopic": "Embrace Change",
      "difficulty": "easy",
      "source": "Agile Manifesto principles (welcoming changing requirements); PMI-ACP Examination Content Outline (2024), Domain I Mindset, Task: Embrace change"
    },
    {
      "stem": "A newly formed agile team is split across two floors of a building, and members communicate mostly through email and ticket comments. Hand-offs are slow and misunderstandings are common. Which actions would best promote a collaborative team environment? Choose TWO.",
      "options": [
        "Route all questions through the ticketing system so they remain traceable",
        "Seat the team together, or use an always-on video link if that is not possible",
        "Have a lead developer approve all communication between team members",
        "Write detailed role descriptions so members know which tasks are not theirs",
        "Hold a short daily meeting where the whole team coordinates the day's work"
      ],
      "answer": "BE",
      "explanation": "Collaboration depends on rich, frequent communication. Co-location, or a virtual equivalent such as a persistent video room, enables face-to-face conversation and osmotic communication, and a short daily coordination meeting keeps the whole team aligned on shared goals. Formal channels, gatekeepers and rigid role boundaries add hand-offs and create silos.",
      "rationales": {
        "A": "Wrong: forcing all communication through tickets keeps it slow and low-bandwidth.",
        "B": "Correct: physical or virtual co-location enables fast, face-to-face conversation.",
        "C": "Wrong: a communication gatekeeper adds delay and undermines direct team collaboration.",
        "D": "Wrong: stressing what is not someone's job reinforces silos instead of shared ownership.",
        "E": "Correct: a daily coordination meeting builds shared awareness and quick collaboration."
      },
      "topic": "Mindset",
      "subtopic": "Promote Collaborative Team Environment",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain I Mindset, Task: Promote collaborative team environment; co-location and daily stand-ups"
    },
    {
      "stem": "After the team and product owner agree on an iteration goal, a functional manager joins iteration planning and starts assigning specific tasks and deadlines to each developer. What should the team facilitator do?",
      "options": [
        "Allow it, since the manager is accountable for allocating staff to work",
        "Assign the tasks personally, since the facilitator owns the iteration plan",
        "Ask the product owner to decide which developer handles each task",
        "Coach the manager on self-organization and let the team divide the work"
      ],
      "answer": "D",
      "explanation": "Agile teams are empowered to decide how to accomplish the work they commit to; this self-organization increases ownership, motivation and use of the team's own knowledge. A servant leader protects that autonomy by explaining its value to the manager rather than replacing one directive authority with another. The product owner decides what is most valuable to build, not who performs each task.",
      "rationales": {
        "A": "Wrong: manager task assignment undermines the team's ownership of how the work gets done.",
        "B": "Wrong: the facilitator serves the team and does not direct individual task assignments.",
        "C": "Wrong: the product owner owns priorities and value, not how the team distributes tasks.",
        "D": "Correct: protecting self-organization empowers the team and coaches the manager on why it matters."
      },
      "topic": "Leadership",
      "subtopic": "Empower Teams",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain II Leadership, Task: Empower teams; servant leadership and self-organizing teams"
    },
    {
      "stem": "Two developers have debated a design approach for several days. The discussion has moved from technical merits to who was right in past decisions; each is lining up teammates on their side and is focused on winning. Using Speed Leas's levels of conflict, which level is this and what is the most appropriate response?",
      "options": [
        "Level 1, problem to solve; let them reach consensus without any intervention",
        "Level 3, contest; help them refocus on facts and negotiate on shared interests",
        "Level 4, crusade; use shuttle diplomacy because they can no longer meet directly",
        "Level 2, disagreement; ask each to write a position paper for management to decide"
      ],
      "answer": "B",
      "explanation": "In Speed Leas's model, a contest (level 3) is marked by a shift from solving the problem to winning, with people taking sides and past grievances resurfacing. At this level the facilitator should actively help the parties depersonalize the issue, re-establish the facts and negotiate or accommodate. Lower-level responses are too light for this situation, while crusade-level tactics are needed only once factions are protecting their own group and can no longer engage directly.",
      "rationales": {
        "A": "Wrong: level 1 is open, fact-based problem solving, which this conflict has clearly moved beyond.",
        "B": "Correct: win-lose framing, side-taking and raking up the past indicate a contest that needs active facilitation.",
        "C": "Wrong: the developers still engage each other directly, so this has not escalated to a crusade.",
        "D": "Wrong: the conflict has moved past disagreement, and handing the decision to management disempowers the team."
      },
      "topic": "Leadership",
      "subtopic": "Facilitate conflict management",
      "difficulty": "hard",
      "source": "PMI-ACP Examination Content Outline (2024), Domain II Leadership, Task: Facilitate conflict management; Speed Leas levels of conflict"
    },
    {
      "stem": "Only one developer on a team understands the payment module, and work in that area stalls whenever that developer is away. Which practice would best spread this knowledge across the team?",
      "options": [
        "Ask the developer to write a detailed manual before their next vacation",
        "Assign all payment work to that developer to keep delivery efficient",
        "Have the developer pair program with teammates on payment stories",
        "Hire a contractor with payment experience to act as a standby backup"
      ],
      "answer": "C",
      "explanation": "Pair programming transfers tacit knowledge, such as design reasoning and edge cases, through hands-on collaboration on real work. Rotating partners on payment stories removes the single point of failure and builds T-shaped skills across the team. Documentation captures only part of the knowledge and goes stale quickly, while concentrating work on one person makes the bottleneck worse.",
      "rationales": {
        "A": "Wrong: a manual captures only explicit knowledge and does not build hands-on skill in others.",
        "B": "Wrong: concentrating the work deepens the dependency on one person.",
        "C": "Correct: pairing transfers tacit knowledge directly while delivering real work.",
        "D": "Wrong: an outside backup does not grow knowledge within the team and adds a new dependency."
      },
      "topic": "Leadership",
      "subtopic": "Promote Knowledge Sharing",
      "difficulty": "easy",
      "source": "PMI-ACP Examination Content Outline (2024), Domain II Leadership, Task: Promote knowledge sharing; pair programming and T-shaped skills"
    },
    {
      "stem": "A team is building a new customer portal, but team members describe its purpose differently and often argue about which features matter most. What should the agile leader do first to create alignment?",
      "options": [
        "Run a workshop where the team and stakeholders co-create the product vision",
        "Circulate the detailed scope document and ask each member to confirm reading it",
        "Ask the sponsor to email the team a summary of the project's business goals",
        "Have the product owner rank every feature so the team stops debating priorities"
      ],
      "answer": "A",
      "explanation": "A shared vision is strongest when the people who will act on it help create it, using techniques such as a vision statement, elevator pitch or product box. Co-creating the vision builds a common understanding of why the product exists and who it serves, which lets the team make consistent decisions on its own. One-way communication or a ranked list addresses symptoms without building shared purpose.",
      "rationales": {
        "A": "Correct: co-creation builds genuine shared understanding of and commitment to the product's purpose.",
        "B": "Wrong: reading a scope document conveys detail but does not create a shared understanding of why.",
        "C": "Wrong: a one-way email informs people but rarely produces real alignment or buy-in.",
        "D": "Wrong: ranking features ends a debate without addressing the missing shared purpose behind it."
      },
      "topic": "Leadership",
      "subtopic": "Promote shared vision and purpose",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain II Leadership, Task: Promote shared vision and purpose; product vision techniques"
    },
    {
      "stem": "A team's builds have failed intermittently for three iterations. Several quick fixes have been applied, but the failures keep returning. As the team facilitator, what is the best way to help the team resolve the problem?",
      "options": [
        "Escalate the issue to the infrastructure manager and wait for a fix",
        "Assign the most senior developer to fix the build without involving others",
        "Ask the team to ignore failing builds until the current release is complete",
        "Add a manual approval step before every build to prevent further failures",
        "Lead the team in a root cause analysis, such as five whys, then trial a fix"
      ],
      "answer": "E",
      "explanation": "Problems that keep returning after quick fixes signal that symptoms, not causes, are being treated. A facilitator helps the team use root cause analysis techniques such as five whys or a fishbone diagram to find the underlying cause, then test a countermeasure and check the result. This resolves the issue and builds the team's own problem-solving capability.",
      "rationales": {
        "A": "Wrong: escalating and waiting removes ownership from the team and may still treat only symptoms.",
        "B": "Wrong: one person fixing it alone repeats the quick-fix pattern and limits team learning.",
        "C": "Wrong: ignoring failing builds lets defects pile up and erodes trust in the build.",
        "D": "Wrong: a manual gate adds delay without addressing why builds fail.",
        "E": "Correct: root cause analysis targets the underlying cause and builds team capability."
      },
      "topic": "Leadership",
      "subtopic": "Facilitate Problem Resolution",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain II Leadership, Task: Facilitate problem resolution; root cause analysis (five whys)"
    },
    {
      "stem": "A new stakeholder reviewing the product backlog complains that items near the top are small and detailed while items near the bottom are large, vague epics. What should the product owner explain?",
      "options": [
        "All items will be detailed at the next planning session to remove the imbalance",
        "The team prefers to work without detailed requirements, so detail is optional",
        "Vague items will be deleted unless the stakeholder writes full specifications",
        "Items are refined just in time as they rise in priority, so lower ones stay coarse"
      ],
      "answer": "D",
      "explanation": "A healthy backlog is detailed appropriately, one part of the DEEP guideline (detailed appropriately, estimated, emergent, prioritized). High-priority items are small and well understood because they will be built soon, while low-priority items stay coarse because they may change or be dropped. Ongoing backlog refinement breaks items down as they approach implementation, avoiding wasted effort on detail that may never be used.",
      "rationales": {
        "A": "Wrong: detailing every item up front wastes effort on work that may change or never be built.",
        "B": "Wrong: near-term items do need enough detail to be ready; detail is timed, not optional.",
        "C": "Wrong: coarse items are normal placeholders and are refined later, not deleted.",
        "D": "Correct: progressive, just-in-time refinement is how a healthy backlog is meant to work."
      },
      "topic": "Product",
      "subtopic": "Refine product backlog",
      "difficulty": "easy",
      "source": "PMI-ACP Examination Content Outline (2024), Domain III Product, Task: Refine product backlog; DEEP backlog characteristics"
    },
    {
      "stem": "At the end of an iteration, a team has finished coding a story but has not run the regression tests that its definition of done requires. The product owner wants to present the story as complete at the iteration review. What should happen to the story?",
      "options": [
        "Present it as complete, since coding is finished and testing is a formality",
        "Treat it as not done and return it to the backlog rather than the increment",
        "Count half of its story points toward velocity to reflect partial progress",
        "Release it to production now and run the regression tests afterward"
      ],
      "answer": "B",
      "explanation": "An increment contains only work that meets the definition of done, which gives everyone a shared, reliable meaning of complete. Work that falls short is not presented as done, is not counted in velocity and goes back to the backlog to be reprioritized. This keeps the state of the product transparent and prevents hidden undone work from building up.",
      "rationales": {
        "A": "Wrong: presenting unfinished work as done misleads stakeholders about the product's real state.",
        "B": "Correct: only items that meet the definition of done belong in the increment.",
        "C": "Wrong: partial credit distorts velocity and hides undone work; points count only when done.",
        "D": "Wrong: releasing untested work exposes users to regressions and violates the definition of done."
      },
      "topic": "Product",
      "subtopic": "Manage increments",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain III Product, Task: Manage increments; definition of done"
    },
    {
      "stem": "A team is setting up a Kanban board to make its work more visible. Which elements should the board include to best support transparency and flow? Choose THREE.",
      "options": [
        "Columns that reflect the actual stages of the team's workflow",
        "A ranking of each team member's individual output for the week",
        "Work-in-progress limits on the columns where work accumulates",
        "Explicit policies, such as criteria for moving an item to the next column",
        "A separate lane, visible only to managers, for executive requests"
      ],
      "answer": "ACD",
      "explanation": "Core Kanban practices include visualizing the workflow, limiting work in progress and making process policies explicit. Columns that mirror the real workflow show where every item is, WIP limits expose bottlenecks and encourage finishing over starting, and explicit policies give everyone a shared understanding of how work moves. Individual rankings undermine team collaboration, and hiding any work defeats the purpose of visualization.",
      "rationales": {
        "A": "Correct: mapping the real workflow is the foundation of visualizing work.",
        "B": "Wrong: individual rankings encourage local optimization and damage team collaboration.",
        "C": "Correct: WIP limits expose bottlenecks and help the team finish work before starting more.",
        "D": "Correct: explicit policies make the rules of the process visible and shared.",
        "E": "Wrong: work visible only to some people undermines transparency and makes the board an unreliable picture of reality."
      },
      "topic": "Product",
      "subtopic": "Visualize work",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain III Product, Task: Visualize work; Kanban practices (visualize, limit WIP, explicit policies)"
    },
    {
      "stem": "A product owner must sequence three features that one team will build one at a time. Feature P has a cost of delay of $30,000 per week and takes 2 weeks. Feature Q has a cost of delay of $10,000 per week and takes 1 week. Feature R has a cost of delay of $60,000 per week and takes 5 weeks. Prioritizing by cost of delay divided by duration (CD3), which sequence minimizes the total cost of delay?",
      "options": [
        "R, then P, then Q",
        "Q, then P, then R",
        "P, then R, then Q",
        "P, then Q, then R",
        "R, then Q, then P"
      ],
      "answer": "C",
      "explanation": "CD3 divides each feature's cost of delay by its duration to show how much value is lost per week of team capacity it consumes. P scores 15 ($30,000 / 2), R scores 12 ($60,000 / 5) and Q scores 10 ($10,000 / 1), so the order is P, R, Q. Counting each feature's weekly cost until its delivery gives a total delay cost of $560,000, lower than ordering by highest cost of delay ($590,000) or shortest job first ($580,000). This is the logic behind weighted shortest job first.",
      "rationales": {
        "A": "Wrong: this orders by highest cost of delay alone, giving a total delay cost of $590,000.",
        "B": "Wrong: this is shortest job first, ignoring cost of delay, for a total delay cost of $580,000.",
        "C": "Correct: it follows CD3 scores of 15, 12 and 10, giving the lowest total delay cost of $560,000.",
        "D": "Wrong: delaying R behind Q costs $480,000 for R alone, for a total delay cost of $570,000.",
        "E": "Wrong: starting with R and leaving P last gives a total delay cost of $600,000."
      },
      "topic": "Product",
      "subtopic": "Manage value delivery",
      "difficulty": "hard",
      "source": "PMI-ACP Examination Content Outline (2024), Domain III Product, Task: Manage value delivery; cost of delay and weighted shortest job first"
    },
    {
      "stem": "A team's velocity has averaged 30 story points over its last five iterations. A manager notices that another team averages 45 points and asks why the first team is less productive. What is the best response?",
      "options": [
        "Explain that story points are team-relative, so velocity cannot be compared across teams",
        "Agree, and set the first team a target of matching the second team's velocity",
        "Convert both teams' points into hours so their productivity can be ranked",
        "Ask the first team to re-estimate its backlog using larger point values"
      ],
      "answer": "A",
      "explanation": "Story points are relative estimates calibrated within a single team, so 30 points on one team and 45 on another say nothing about which team delivers more value. Velocity is a planning tool that helps a team forecast its own future capacity. Using it to compare or pressure teams typically leads to point inflation and destroys its usefulness for forecasting.",
      "rationales": {
        "A": "Correct: each team calibrates its own point scale, so cross-team velocity comparisons are meaningless.",
        "B": "Wrong: a velocity target invites point inflation rather than real improvement.",
        "C": "Wrong: converting points to hours misuses relative estimates and still would not measure value delivered.",
        "D": "Wrong: inflating estimates raises velocity on paper without any change in actual output."
      },
      "topic": "Delivery",
      "subtopic": "Manage agile metrics",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain IV Delivery, Task: Manage agile metrics; velocity and relative estimation"
    },
    {
      "stem": "Developers on a team regularly sit idle for two to three days while a database administrator in another department approves each schema change. In lean terms, which type of waste does this primarily represent?",
      "options": [
        "Overproduction",
        "Motion",
        "Waiting",
        "Defects"
      ],
      "answer": "C",
      "explanation": "Waiting, also called delay, is waste that occurs when people or work sit idle until an approval, resource or hand-off becomes available. It lengthens lead time without adding any value for the customer. Typical remedies include bringing the needed skill into the team or agreeing faster, lighter approval policies.",
      "rationales": {
        "A": "Wrong: overproduction means building more than is needed or before it is needed.",
        "B": "Wrong: motion is unnecessary movement of people or information, not idle time spent waiting.",
        "C": "Correct: idle time while waiting for an approval is the classic waiting (delay) waste.",
        "D": "Wrong: defects are errors that require rework, which this scenario does not describe."
      },
      "topic": "Delivery",
      "subtopic": "Recognize and eliminate waste",
      "difficulty": "easy",
      "source": "PMI-ACP Examination Content Outline (2024), Domain IV Delivery, Task: Recognize and eliminate waste; lean wastes"
    },
    {
      "stem": "A Kanban team has an average of 30 work items in progress and completes an average of 2 items per working day. The team wants to bring its average cycle time down to 10 working days without changing throughput. According to Little's Law, what average work in progress should the team target?",
      "options": [
        "5 items",
        "10 items",
        "15 items",
        "20 items",
        "30 items"
      ],
      "answer": "D",
      "explanation": "Little's Law states that average cycle time equals average work in progress divided by average throughput. The team's current cycle time is 30 / 2 = 15 working days. To reach 10 working days at 2 items per day, WIP must be 2 items per day multiplied by 10 days, or 20 items. This is why limiting WIP is the main lever for shortening cycle time when throughput stays the same.",
      "rationales": {
        "A": "Wrong: this divides cycle time by throughput; at 5 items cycle time would be 2.5 days.",
        "B": "Wrong: at 10 items and 2 per day, the cycle time would be 5 days, not 10.",
        "C": "Wrong: 15 is the current cycle time in days; at 15 items cycle time would be 7.5 days.",
        "D": "Correct: 20 items divided by 2 items per day gives the target cycle time of 10 days.",
        "E": "Wrong: 30 items is the current WIP, which gives the current cycle time of 15 days."
      },
      "topic": "Delivery",
      "subtopic": "Optimize flow",
      "difficulty": "hard",
      "source": "PMI-ACP Examination Content Outline (2024), Domain IV Delivery, Task: Optimize flow; Little's Law, WIP limits and cycle time"
    },
    {
      "stem": "At the daily stand-up, a developer mentions for the third day in a row that their story is blocked because a shared test environment is unavailable. Nobody has acted on it yet. What should the team facilitator do?",
      "options": [
        "Ask the developer to keep raising it daily until the environment team responds",
        "Log it as an impediment and actively drive its removal right after the stand-up",
        "Pause the stand-up so the whole team can troubleshoot the environment in detail",
        "Move the story to another developer who does not need the test environment"
      ],
      "answer": "B",
      "explanation": "Removing impediments that the team cannot quickly clear itself is a core responsibility of a servant leader. Making the blocker visible, for example on an impediment board, and working with whoever controls the environment restores flow and shows the team that raising problems leads to action. Detailed problem-solving belongs outside the stand-up, and reassigning the story leaves the blocker in place for everyone else.",
      "rationales": {
        "A": "Wrong: repeating the report without action lets the blocker persist and wastes more days.",
        "B": "Correct: visible tracking and prompt follow-up are how a facilitator removes impediments.",
        "C": "Wrong: the stand-up is for coordination; detailed troubleshooting should happen afterward.",
        "D": "Wrong: reassigning the story works around the blocker without removing it."
      },
      "topic": "Delivery",
      "subtopic": "Manage impediments and risk",
      "difficulty": "medium",
      "source": "PMI-ACP Examination Content Outline (2024), Domain IV Delivery, Task: Manage impediments and risk; servant leadership and impediment boards"
    },
    {
      "stem": "A team holds a retrospective every iteration, but the same problems keep coming up and nothing seems to change. What is the most effective way to make the retrospectives lead to real improvement?",
      "options": [
        "Hold retrospectives less often so there is more time to fix the issues raised",
        "Let the facilitator choose the improvements and assign them to team members",
        "Record every issue raised and send the complete list to management to resolve",
        "Limit retrospectives to discussing what went well in order to boost morale",
        "Agree on one or two specific actions with owners and review them next time"
      ],
      "answer": "E",
      "explanation": "Retrospectives produce continuous improvement only when they end in a small number of concrete, owned actions that the team carries out and then checks at the next retrospective. Limiting the number of actions keeps them achievable alongside delivery work, and adding them to the iteration backlog makes them visible. Trying to fix everything, or handing problems to others, dilutes effort and ownership.",
      "rationales": {
        "A": "Wrong: meeting less often slows the improvement cycle and leaves problems unaddressed longer.",
        "B": "Wrong: imposed actions lack team ownership, so they are less likely to be carried out.",
        "C": "Wrong: passing issues to management removes ownership from the team that experiences them.",
        "D": "Wrong: ignoring problems prevents learning and lets the same issues keep recurring.",
        "E": "Correct: a few owned, followed-up actions turn discussion into actual change."
      },
      "topic": "Delivery",
      "subtopic": "Perform continuous improvements",
      "difficulty": "easy",
      "source": "PMI-ACP Examination Content Outline (2024), Domain IV Delivery, Task: Perform continuous improvements; retrospectives"
    }
  ]
}
```
