```json
{
  "format": "domcq/1",
  "exam": "cams",
  "set": "Certified Anti-Money Laundering Specialist (CAMS) practice – Core concepts mix",
  "questions": [
    {
      "stem": "In the three-stage model of money laundering, which stage involves moving illicit funds through a series of complex transactions to separate them from their criminal source?",
      "options": [
        "Placement",
        "Layering",
        "Integration",
        "Structuring"
      ],
      "answer": "B",
      "explanation": "Layering is the stage where launderers run many transactions, often complex ones, to break the audit trail between the funds and where they came from. Typical examples are wire transfers between accounts, across jurisdictions and into different asset types. Placement comes first, when illicit proceeds (often cash) first enter the financial system. Integration comes last, when the funds come back out looking like legitimate wealth, and structuring is a placement technique, not a stage.",
      "rationales": {
        "A": "Wrong: placement is when illicit proceeds first enter the financial system, not when they are moved to hide their origin.",
        "B": "Correct: layering uses many complex transactions to distance funds from their criminal source.",
        "C": "Wrong: integration is the final stage, when laundered funds re-enter the economy looking legitimate.",
        "D": "Wrong: structuring means splitting transactions to avoid reporting; it is a technique, not a stage of laundering."
      },
      "topic": "Understanding the Risks and Methods of Financial Crime",
      "subtopic": "Stages of money laundering",
      "difficulty": "easy",
      "source": "CAMS: Understanding the Risks and Methods of Financial Crime – stages of money laundering (placement, layering, integration)"
    },
    {
      "stem": "An importer in Country X receives a shipment of plain cotton T-shirts that matches the shipping documents. The single invoice prices the shirts at USD 40 each, although comparable shirts trade at about USD 3. The importer pays the invoice in full by wire to the exporter in Country Y. Which trade-based money laundering technique does this most likely indicate?",
      "options": [
        "Under-invoicing, moving excess value to the importer",
        "A phantom shipment, moving value to the importer",
        "Multiple invoicing, moving value to the importer",
        "Over-invoicing, moving excess value to the exporter"
      ],
      "answer": "D",
      "explanation": "When an importer pays far more than the goods are worth, the extra money moves value from the importer's country to the exporter, disguised as a normal trade payment. The goods match the documents and there is only one invoice, so the red flag is the price itself, more than ten times market value. Under-invoicing works the other way: the importer receives goods worth more than he paid, so value moves to him.",
      "rationales": {
        "A": "Wrong: under-invoicing prices goods below market value, which moves value to the importer, not the exporter.",
        "B": "Wrong: a phantom shipment has no goods, but here the shipment arrived and matched the documents.",
        "C": "Wrong: multiple invoicing bills the same goods more than once, but here there is a single invoice.",
        "D": "Correct: paying far above market price for genuine goods transfers the excess value to the exporter."
      },
      "topic": "Understanding the Risks and Methods of Financial Crime",
      "subtopic": "Trade-based money laundering",
      "difficulty": "medium",
      "source": "FATF/Egmont Group, Trade-Based Money Laundering: Trends and Developments (2020) – invoice manipulation techniques"
    },
    {
      "stem": "Which characteristic most clearly distinguishes terrorist financing from money laundering?",
      "options": [
        "Terrorist financing typically involves very large, high-value transfers",
        "Terrorist financing does not make use of the regulated financial system",
        "Terrorist financing can draw on legitimate funds, such as salaries or donations",
        "Terrorist financing is outside the scope of the FATF Recommendations"
      ],
      "answer": "C",
      "explanation": "Money laundering always starts with criminal proceeds and tries to hide their illegal origin. Terrorist financing is defined by what the money will be used for, so it can rely on clean money such as salaries, business income or charitable donations, as well as on crime. That is why TF is sometimes called \"reverse money laundering\", and why checking the source of funds alone may not catch it.",
      "rationales": {
        "A": "Wrong: terrorist financing often involves small amounts, which makes it harder to detect.",
        "B": "Wrong: terrorist financiers use banks, money services businesses and other regulated channels, as well as informal ones.",
        "C": "Correct: TF is defined by the purpose of the funds, so the money can come from legitimate sources.",
        "D": "Wrong: FATF standards cover terrorist financing, including Recommendations 5 and 6."
      },
      "topic": "Understanding the Risks and Methods of Financial Crime",
      "subtopic": "Terrorist financing",
      "difficulty": "medium",
      "source": "CAMS: Understanding the Risks and Methods of Financial Crime – terrorist financing; FATF Recommendations 5 and 6"
    },
    {
      "stem": "A university student in Australia is expecting AUD 30,000 from her parents overseas, who paid that amount to an informal remittance agent in their home country. Instead of an international transfer, her account receives several cash deposits of under AUD 10,000 each, made by unknown people at different branches, which together total AUD 30,000. The agent hands the parents' money to an associate of a criminal group abroad. Which money laundering typology does this describe?",
      "options": [
        "Cuckoo smurfing",
        "Mirror trading",
        "Loan-back scheme",
        "Black market peso exchange"
      ],
      "answer": "A",
      "explanation": "In cuckoo smurfing, a criminal network hijacks a legitimate international remittance. The sender's money goes to the criminals' associates abroad, and criminal cash is deposited into the unwitting recipient's account to make up the expected amount. The recipient gets the right total and may suspect nothing, yet criminal proceeds have effectively crossed a border without any cross-border transfer. Cash deposits kept under the AUD 10,000 threshold transaction reporting level are a typical feature.",
      "rationales": {
        "A": "Correct: criminal cash replaces a legitimate remittance, so the unwitting recipient's account is used to move proceeds.",
        "B": "Wrong: mirror trading uses matched securities trades in two currencies or markets to move value, not cash deposits.",
        "C": "Wrong: a loan-back scheme disguises a criminal's own funds as a loan repaid to himself, not a third party's remittance.",
        "D": "Wrong: the black market peso exchange uses trade goods and peso brokers, not cash deposits paid to an unwitting recipient."
      },
      "topic": "Understanding the Risks and Methods of Financial Crime",
      "subtopic": "Money laundering typologies",
      "difficulty": "hard",
      "source": "AUSTRAC and FATF money laundering typologies – cuckoo smurfing; CAMS: ML methods and typologies"
    },
    {
      "stem": "Which characteristics of virtual assets contribute to their money laundering risk? Choose TWO.",
      "options": [
        "Transactions on public blockchains can never be linked to real-world identities",
        "Pseudonymous addresses let value move without names attached to transactions",
        "Confirmed blockchain transactions can easily be reversed by an issuing bank",
        "Transfers between unhosted wallets may involve no regulated intermediary"
      ],
      "answer": "BD",
      "explanation": "Virtual asset addresses are pseudonymous. Transactions are recorded on the ledger, but no name is attached unless the address can be linked to a known person, for example through a VASP's KYC records. When value moves directly between unhosted (self-custodied) wallets, there may be no regulated intermediary to apply CDD, monitoring or the travel rule. Public blockchains can in fact be traced with analytics tools, and confirmed transactions are generally irreversible, so the other two options are false.",
      "rationales": {
        "A": "Wrong: public ledgers are transparent, and analytics tools can often link addresses to real-world entities.",
        "B": "Correct: pseudonymous addresses let value move without names attached unless they are linked through other data.",
        "C": "Wrong: confirmed blockchain transactions are generally irreversible, and there is no issuing bank to reverse them.",
        "D": "Correct: peer-to-peer transfers between unhosted wallets may bypass any obliged entity that applies CDD."
      },
      "topic": "Understanding the Risks and Methods of Financial Crime",
      "subtopic": "Virtual assets",
      "difficulty": "medium",
      "source": "FATF Updated Guidance for a Risk-Based Approach to Virtual Assets and VASPs (2021) – ML/TF risks of virtual assets"
    },
    {
      "stem": "An accounts payable clerk receives an email that appears to come from a long-standing supplier, asking that all future invoices be paid to a new account at a different bank in another country. The sender's email domain differs from the supplier's usual domain by one letter. Which financial crime does this most likely indicate?",
      "options": [
        "Pump-and-dump scheme",
        "Check kiting",
        "Business email compromise",
        "Ponzi scheme"
      ],
      "answer": "C",
      "explanation": "Business email compromise uses spoofed or compromised email accounts to pose as a trusted party, such as a supplier or an executive, and redirect genuine payments to accounts the fraudsters control. A sudden change in payment instructions, a new foreign beneficiary account and a look-alike email domain are classic red flags. Best practice is to confirm any change of payment details through a known, independent contact channel before paying.",
      "rationales": {
        "A": "Wrong: a pump-and-dump inflates a security's price with misleading promotion and then sells into the rise.",
        "B": "Wrong: check kiting exploits the float time between accounts at different banks to create artificial balances.",
        "C": "Correct: posing as a supplier by email to redirect payments is a classic business email compromise.",
        "D": "Wrong: a Ponzi scheme pays earlier investors with new investors' money rather than genuine returns."
      },
      "topic": "Understanding the Risks and Methods of Financial Crime",
      "subtopic": "Fraud and cyber-enabled crime",
      "difficulty": "easy",
      "source": "CAMS: fraud and cyber-enabled financial crime; FinCEN advisories on business email compromise fraud schemes"
    },
    {
      "stem": "What is the primary role of the Egmont Group in the global fight against money laundering and terrorist financing?",
      "options": [
        "Providing a platform for secure exchange of financial intelligence among FIUs",
        "Setting international AML/CFT standards and assessing countries against them",
        "Setting capital and liquidity standards for internationally active banks",
        "Designating individuals and entities for asset freezes and travel bans"
      ],
      "answer": "A",
      "explanation": "The Egmont Group is an international network of financial intelligence units (FIUs). It gives them a platform, including the Egmont Secure Web, to share expertise and financial intelligence securely in order to fight money laundering and terrorist financing. It does not set the global AML/CFT standards, which is the FATF's job, and it cannot impose sanctions. Only FIUs that meet the Egmont definition and requirements can become members.",
      "rationales": {
        "A": "Correct: the Egmont Group connects FIUs and supports the secure exchange of financial intelligence between them.",
        "B": "Wrong: setting AML/CFT standards and assessing countries against them is the role of the FATF.",
        "C": "Wrong: capital and liquidity standards for banks are set by the Basel Committee on Banking Supervision.",
        "D": "Wrong: sanctions designations are made by bodies such as the UN Security Council and national authorities."
      },
      "topic": "Global AFC Frameworks, Governance, and Regulations",
      "subtopic": "International bodies",
      "difficulty": "easy",
      "source": "Egmont Group Charter; Egmont Principles for Information Exchange Between FIUs"
    },
    {
      "stem": "In a FATF mutual evaluation, how is the effectiveness of a country's AML/CFT system assessed?",
      "options": [
        "By rating technical compliance with each of the 40 Recommendations",
        "By comparing its number of STRs filed with that of peer countries",
        "By applying the Basel Core Principles for Effective Banking Supervision",
        "By rating the results achieved against a set of Immediate Outcomes"
      ],
      "answer": "D",
      "explanation": "FATF mutual evaluations have two parts. Technical compliance checks whether a country's laws and institutions meet each of the 40 Recommendations. Effectiveness assesses how well the system works in practice against 11 Immediate Outcomes, each rated high, substantial, moderate or low. A country can therefore have strong laws on paper and still receive poor effectiveness ratings.",
      "rationales": {
        "A": "Wrong: rating each of the 40 Recommendations is the technical compliance assessment, not effectiveness.",
        "B": "Wrong: STR volumes may be used as evidence, but no simple numerical comparison determines effectiveness.",
        "C": "Wrong: the Basel Core Principles are banking supervision standards, not the FATF assessment methodology.",
        "D": "Correct: effectiveness is assessed against the Immediate Outcomes, each with its own rating."
      },
      "topic": "Global AFC Frameworks, Governance, and Regulations",
      "subtopic": "FATF mutual evaluations",
      "difficulty": "medium",
      "source": "FATF Methodology for Assessing Technical Compliance and Effectiveness – effectiveness assessment and Immediate Outcomes"
    },
    {
      "stem": "A United States bank is asked to process a payment for Company X. Company X is owned 30% by Person A and 25% by Person B, both of whom are on OFAC's SDN List; the remaining 45% is held by individuals who are not sanctioned. Company X itself does not appear on any OFAC list. Under OFAC's 50 Percent Rule, how should the bank treat Company X?",
      "options": [
        "As not blocked, because no single SDN owns 50% or more of it",
        "As blocked, because SDNs own 50% or more of it in the aggregate",
        "As not blocked until OFAC adds Company X to the SDN List by name",
        "As blocked only if the SDNs also exercise control over its management"
      ],
      "answer": "B",
      "explanation": "OFAC's 50 Percent Rule treats any entity owned 50% or more by one or more blocked persons as blocked, even if the entity is not listed itself. The ownership can be direct or indirect, and stakes held by different blocked persons are added together. Here two SDNs together own 55%, so Company X is blocked and the bank must treat its property and interests in property as blocked. Control without 50% ownership does not trigger the rule, although OFAC advises caution with such entities.",
      "rationales": {
        "A": "Wrong: stakes held by different blocked persons are added together, so 30% and 25% make 55%.",
        "B": "Correct: SDNs own 55% in the aggregate, so Company X is blocked under the 50 Percent Rule.",
        "C": "Wrong: an entity caught by the 50 Percent Rule is blocked whether or not it is named on the SDN List.",
        "D": "Wrong: the rule is based on ownership; control alone does not trigger it and is not needed once ownership reaches 50%."
      },
      "topic": "Global AFC Frameworks, Governance, and Regulations",
      "subtopic": "Sanctions regimes",
      "difficulty": "hard",
      "source": "OFAC Revised Guidance on Entities Owned by Persons Whose Property and Interests in Property Are Blocked (2014) – 50 Percent Rule"
    },
    {
      "stem": "Under the USA PATRIOT Act, which section permits financial institutions, after giving notice to FinCEN, to share information with one another about possible money laundering or terrorist activity under a safe harbor from liability?",
      "options": [
        "Section 311",
        "Section 314(a)",
        "Section 314(b)",
        "Section 326"
      ],
      "answer": "C",
      "explanation": "Section 314(b) lets financial institutions that have notified FinCEN share information with each other about people, entities and transactions that may involve money laundering or terrorist activity, with a safe harbor from liability. Section 314(a) is different: it lets law enforcement, through FinCEN, ask institutions to search their records for named subjects. Section 311 covers special measures against primary money laundering concerns, and Section 326 sets customer identification program requirements.",
      "rationales": {
        "A": "Wrong: Section 311 lets Treasury impose special measures on jurisdictions, institutions or transactions of primary money laundering concern.",
        "B": "Wrong: Section 314(a) is sharing from government to institutions, with FinCEN passing on law enforcement requests.",
        "C": "Correct: Section 314(b) allows voluntary sharing between institutions, with a safe harbor, after notice to FinCEN.",
        "D": "Wrong: Section 326 requires customer identification programs, not information sharing between institutions."
      },
      "topic": "Global AFC Frameworks, Governance, and Regulations",
      "subtopic": "USA PATRIOT Act",
      "difficulty": "medium",
      "source": "USA PATRIOT Act Section 314(b); 31 CFR 1010.540 (voluntary information sharing among financial institutions)"
    },
    {
      "stem": "In the three lines model of governance, which function provides independent assurance to the board on the effectiveness of an institution's AML program?",
      "options": [
        "The front-line business units that own customer relationships",
        "The compliance function that sets AML policy and monitors adherence",
        "The senior managers responsible for running daily operations",
        "The internal audit function that reviews the program periodically"
      ],
      "answer": "D",
      "explanation": "In the three lines model, the first line (the business units) owns and manages risk. The second line, such as compliance and risk management, sets policy and oversees and challenges the first line. The third line, internal audit, gives independent and objective assurance to the board. Because internal audit is independent of both the business and compliance, it can test the AML program objectively.",
      "rationales": {
        "A": "Wrong: business units are the first line; they own and manage risk but are not independent of it.",
        "B": "Wrong: compliance is a second-line function that oversees risk and is not independent of the program it runs.",
        "C": "Wrong: senior management is accountable for the program, so it cannot give independent assurance on its own work.",
        "D": "Correct: internal audit is the third line and gives the board independent, objective assurance."
      },
      "topic": "Building an Anti-Financial Crime Compliance Program",
      "subtopic": "Governance and three lines model",
      "difficulty": "easy",
      "source": "IIA Three Lines Model (2020); CAMS: Building an AFC Compliance Program – governance and independent testing"
    },
    {
      "stem": "In its enterprise-wide risk assessment, a bank rates the inherent money laundering risk of its correspondent banking business as high and the effectiveness of its controls over that business as strong. What does the resulting residual risk rating represent?",
      "options": [
        "The level of risk that remains once those controls are applied to the inherent risk",
        "The level of risk before the bank's controls are taken into account at all",
        "The level of risk the bank would face if it exited correspondent banking",
        "The risk rating the bank's supervisor assigned at its last examination"
      ],
      "answer": "A",
      "explanation": "Inherent risk is a business line's ML/TF risk before controls, driven by factors such as its customers, products, geographies and channels. Residual risk is what is left once the strength of the controls is taken into account. Strong controls might bring high inherent risk down to, say, moderate residual risk, but never to zero. Management then compares residual risk with the institution's risk appetite to decide whether more action is needed.",
      "rationales": {
        "A": "Correct: residual risk is the inherent risk that remains once the effect of mitigating controls is applied.",
        "B": "Wrong: risk before any controls are considered is inherent risk, which here is rated high.",
        "C": "Wrong: exiting the business would remove the exposure; that is not how residual risk is measured.",
        "D": "Wrong: a supervisory rating comes from outside; residual risk is the bank's own assessment after controls."
      },
      "topic": "Building an Anti-Financial Crime Compliance Program",
      "subtopic": "Enterprise-wide risk assessment",
      "difficulty": "medium",
      "source": "FATF Recommendation 1 (assessing risks and applying a risk-based approach); CAMS: enterprise-wide risk assessment"
    },
    {
      "stem": "A bank is onboarding a customer who is a foreign politically exposed person (PEP). Under FATF Recommendation 12, which measures must the bank apply in addition to normal customer due diligence? Choose THREE.",
      "options": [
        "Decline the relationship, because foreign PEPs are prohibited customers",
        "Obtain senior management approval to establish the business relationship",
        "Take reasonable measures to establish source of wealth and source of funds",
        "Conduct enhanced ongoing monitoring of the business relationship"
      ],
      "answer": "BCD",
      "explanation": "For foreign PEPs, FATF Recommendation 12 requires four things: risk-management systems to identify them, senior management approval to establish (or continue) the relationship, reasonable measures to establish source of wealth and source of funds, and enhanced ongoing monitoring. PEP status calls for closer scrutiny, not automatic refusal. Declining every PEP is de-risking, and the standard does not require it.",
      "rationales": {
        "A": "Wrong: FATF does not prohibit PEPs as customers; it requires enhanced measures rather than automatic refusal.",
        "B": "Correct: Recommendation 12 requires senior management approval to establish or continue a foreign PEP relationship.",
        "C": "Correct: the institution must take reasonable measures to establish source of wealth and source of funds.",
        "D": "Correct: relationships with foreign PEPs must be subject to enhanced ongoing monitoring."
      },
      "topic": "Building an Anti-Financial Crime Compliance Program",
      "subtopic": "Politically exposed persons",
      "difficulty": "medium",
      "source": "FATF Recommendation 12 (Politically exposed persons) and its Interpretive Note"
    },
    {
      "stem": "A bank's beneficial ownership policy requires it to identify and verify every natural person who owns 25% or more of a legal entity customer, directly or indirectly, and at least one individual who exercises significant control over it. Company Z is owned 60% by Mr. Diaz and 40% by Holding Co. Holding Co is owned 50% by Ms. Lee and 50% by Mr. Park. Under this policy, whom must the bank identify and verify?",
      "options": [
        "Ms. Lee, Mr. Park and Mr. Diaz as owners, plus one individual with significant control",
        "Mr. Diaz as an owner, plus one individual with significant control",
        "Holding Co and Mr. Diaz as owners, with no control person needed",
        "Every shareholder at every level, because ownership is held through layers"
      ],
      "answer": "B",
      "explanation": "To work out indirect ownership, multiply the stakes through each layer. Ms. Lee and Mr. Park each own 50% of Holding Co, which owns 40% of Company Z, so each owns 20% indirectly, below the 25% threshold. Only Mr. Diaz, with 60%, meets the ownership test. The policy also requires at least one individual with significant control, who may be Mr. Diaz or someone else, such as a senior executive.",
      "rationales": {
        "A": "Wrong: Ms. Lee and Mr. Park each own only 20% indirectly (50% of 40%), below the 25% threshold.",
        "B": "Correct: only Mr. Diaz reaches 25%, and the policy separately requires at least one control person.",
        "C": "Wrong: beneficial owners are natural persons, and the policy always requires a control person.",
        "D": "Wrong: a layered structure means looking through to natural persons, not identifying every shareholder regardless of stake."
      },
      "topic": "Building an Anti-Financial Crime Compliance Program",
      "subtopic": "Beneficial ownership",
      "difficulty": "hard",
      "source": "FATF Recommendations 10 and 24 – beneficial ownership of legal persons; CAMS: CDD and beneficial ownership"
    },
    {
      "stem": "Which action by a bank employee would constitute tipping off?",
      "options": [
        "Telling a customer that a suspicious transaction report has been filed about him",
        "Escalating unusual activity on a customer's account to the MLRO",
        "Asking a customer about the source of a large cash deposit during routine CDD",
        "Filing a suspicious transaction report with the financial intelligence unit"
      ],
      "answer": "A",
      "explanation": "Tipping off means telling a customer or third party that a suspicious transaction report has been or will be filed, or that an investigation is under way. This could let criminals move funds or destroy evidence, and FATF Recommendation 21 requires countries to prohibit it by law. Escalating internally, filing the report and asking normal due diligence questions are expected parts of the AML process, though staff should ask questions without revealing any suspicion.",
      "rationales": {
        "A": "Correct: telling a customer that an STR has been filed is the core example of tipping off.",
        "B": "Wrong: escalating unusual activity to the MLRO is the required internal reporting step.",
        "C": "Wrong: asking about source of funds is routine CDD, provided staff do not reveal any suspicion or report.",
        "D": "Wrong: filing an STR with the FIU is the legal obligation; tipping off is disclosing that it happened."
      },
      "topic": "Building an Anti-Financial Crime Compliance Program",
      "subtopic": "Suspicious transaction reporting",
      "difficulty": "easy",
      "source": "FATF Recommendation 21 (Tipping-off and confidentiality)"
    },
    {
      "stem": "A bank plans to launch a prepaid card that can be loaded with cash and used for withdrawals at ATMs abroad. According to the FATF standards, when should the bank assess the money laundering and terrorist financing risks of this product?",
      "options": [
        "At the next annual enterprise-wide risk assessment after the launch",
        "Once the first suspicious activity report involving the card is filed",
        "Before the launch, so that mitigating controls are in place from the start",
        "Only if its supervisor specifically requests a product risk assessment"
      ],
      "answer": "C",
      "explanation": "FATF Recommendation 15 expects institutions to assess the ML/TF risks of new products, business practices, delivery channels and technologies before they launch or use them. They must also take appropriate measures to manage and reduce those risks. A prepaid card with cash loading and ATM access abroad carries known risks, so controls such as load limits, CDD and monitoring should be built in from day one rather than added once problems appear.",
      "rationales": {
        "A": "Wrong: waiting for the next annual assessment leaves the product running with risks nobody has assessed.",
        "B": "Wrong: waiting for a SAR means the risk has already materialized before controls are considered.",
        "C": "Correct: new products should be risk-assessed before launch so that mitigating controls are in place.",
        "D": "Wrong: assessing new product risk is the institution's own duty and does not depend on a supervisor's request."
      },
      "topic": "Building an Anti-Financial Crime Compliance Program",
      "subtopic": "New products and technologies",
      "difficulty": "medium",
      "source": "FATF Recommendation 15 (New technologies) – risk assessment before launch of new products and practices"
    },
    {
      "stem": "Which transaction monitoring scenario is primarily designed to detect structuring?",
      "options": [
        "A single large wire transfer to a jurisdiction rated high risk",
        "A dormant account that suddenly receives a large incoming payment",
        "Incoming wires that are sent out again within one or two days",
        "Several cash deposits just below the reporting threshold in a few days"
      ],
      "answer": "D",
      "explanation": "Structuring means splitting cash transactions into smaller amounts to stay under a reporting or recordkeeping threshold, such as the USD 10,000 currency transaction report threshold in the US. A scenario that adds up cash deposits just under the threshold over a short look-back period targets exactly this behavior. The other scenarios target different risks: high-risk geographies, reactivated dormant accounts, and funds that pass straight through an account.",
      "rationales": {
        "A": "Wrong: a single large wire to a high-risk jurisdiction targets geographic risk, not split transactions.",
        "B": "Wrong: sudden activity in a dormant account targets account takeover or misuse, not structuring.",
        "C": "Wrong: wires that come in and go straight out target pass-through or layering activity, not threshold avoidance.",
        "D": "Correct: repeated cash deposits just below the reporting threshold are the hallmark of structuring."
      },
      "topic": "Tools and Technologies to Fight Financial Crime",
      "subtopic": "Transaction monitoring",
      "difficulty": "easy",
      "source": "CAMS: Tools and Technologies to Fight Financial Crime – transaction monitoring scenarios and structuring detection"
    },
    {
      "stem": "A bank lowers the similarity threshold in its sanctions name-screening tool from 95% to 80%. What is the most likely effect?",
      "options": [
        "Fewer alerts, with a higher chance of missing true matches",
        "More alerts, with a lower chance of missing true matches",
        "No change in alert volume, because exact matches are unaffected",
        "Fewer alerts, because only exact name matches will be returned"
      ],
      "answer": "B",
      "explanation": "Fuzzy matching scores how similar a customer or payment name is to a listed name and raises an alert when the score reaches the threshold. A lower threshold tolerates more spelling variations, transliterations and typos. It catches more true matches, but it also produces many more false positives for analysts to review. Thresholds should be risk-based, tested and documented, weighing missed matches against alert workload.",
      "rationales": {
        "A": "Wrong: lowering the threshold widens matching, so alerts go up, not down.",
        "B": "Correct: a lower similarity threshold returns more potential matches, so fewer true matches are missed but false positives rise.",
        "C": "Wrong: exact matches still alert, but many more partial matches will now alert too.",
        "D": "Wrong: a lower threshold returns more inexact matches, not only exact ones."
      },
      "topic": "Tools and Technologies to Fight Financial Crime",
      "subtopic": "Sanctions screening",
      "difficulty": "medium",
      "source": "Wolfsberg Group Guidance on Sanctions Screening (2019); CAMS: sanctions screening and fuzzy matching"
    },
    {
      "stem": "While tuning a transaction monitoring rule that alerts on monthly cash activity above USD 50,000, an analyst samples customers whose monthly cash activity fell between USD 40,000 and USD 49,999 and reviews them for suspicious behavior. What is this exercise, and what is it meant to show?",
      "options": [
        "Above-the-line testing, to show whether the threshold can be raised without losing productive alerts",
        "Watchlist back-testing, to show whether sanctioned names were missed in past screening runs",
        "Below-the-line testing, to show whether suspicious activity is being missed under the current threshold",
        "Penetration testing, to show whether the monitoring system can be accessed without authorization"
      ],
      "answer": "C",
      "explanation": "Below-the-line testing samples activity just under a rule's current threshold to check whether reportable suspicious activity is going undetected. If productive cases turn up, the threshold may need to be lowered. Above-the-line testing does the opposite: it samples alerts just over the threshold to see whether the threshold could be raised without losing productive alerts. Documenting tuning like this supports a defensible, risk-based monitoring program.",
      "rationales": {
        "A": "Wrong: above-the-line testing samples alerts over the threshold to judge whether it can be raised.",
        "B": "Wrong: watchlist back-testing checks screening against sanctions or PEP lists, not monitoring thresholds.",
        "C": "Correct: sampling activity just below the threshold tests whether suspicious behavior is being missed.",
        "D": "Wrong: penetration testing checks information security, not how monitoring rules are calibrated."
      },
      "topic": "Tools and Technologies to Fight Financial Crime",
      "subtopic": "Monitoring system tuning",
      "difficulty": "hard",
      "source": "CAMS: Tools and Technologies to Fight Financial Crime – transaction monitoring tuning, above- and below-the-line testing"
    },
    {
      "stem": "A bank introduces a machine-learning model that scores and prioritizes transaction monitoring alerts for review. Which practice best meets supervisory expectations for managing the risk of this model?",
      "options": [
        "Independent validation, documentation of logic and data, and ongoing performance monitoring",
        "Relying on the vendor's assurance that the model was already tested at other banks",
        "Automatically closing all low-scored alerts without sampling or any human review",
        "Keeping the model's inputs and logic hidden from compliance and internal audit"
      ],
      "answer": "A",
      "explanation": "Supervisors expect models used for AML compliance to follow model risk management principles: sound development and documentation, independent validation of the model's design and data, and ongoing monitoring of its performance and outcomes. The bank remains responsible for a vendor's model and must understand it well enough to explain how it works. Human oversight, such as quality-assurance sampling of low-scored alerts, helps confirm the model is not hiding genuine risk.",
      "rationales": {
        "A": "Correct: validation, documentation and ongoing monitoring are core model risk management expectations.",
        "B": "Wrong: the bank remains accountable for vendor models and must validate them against its own data and risks.",
        "C": "Wrong: closing alerts with no sampling or oversight risks missing suspicious activity the model scores low.",
        "D": "Wrong: compliance and audit must be able to understand and challenge a model; hiding how it works increases risk."
      },
      "topic": "Tools and Technologies to Fight Financial Crime",
      "subtopic": "Model risk management",
      "difficulty": "medium",
      "source": "Interagency Statement on Model Risk Management for Bank Systems Supporting BSA/AML Compliance (2021)"
    }
  ]
}
```
