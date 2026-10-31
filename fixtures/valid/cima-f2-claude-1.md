```json
{
  "format": "domcq/1",
  "exam": "cima-f2",
  "set": "F2: Advanced Financial Reporting practice – Mixed syllabus set 1",
  "questions": [
    {
      "stem": "Which TWO of the following are advantages to a company of raising long-term finance by issuing debt rather than issuing new equity shares? Choose TWO.",
      "options": [
        "Debt lowers the company's financial risk because interest is a fixed cost.",
        "Interest on debt is deductible for tax, which lowers its effective cost.",
        "Interest payments can be withheld in a poor year without breaching the debt terms.",
        "Issuing debt does not dilute the existing shareholders' voting control."
      ],
      "answer": "BD",
      "explanation": "Interest is an allowable deduction for corporate tax, so the after-tax cost of debt is lower than its coupon, and debt holders do not receive votes, so control is not diluted. Debt increases rather than reduces financial risk, because fixed interest and capital repayments must be met whatever the level of profit. Unlike dividends, interest is a contractual obligation, so missing a payment is a default.",
      "topic": "Financing Capital Projects",
      "subtopic": "Types and sources of long-term funds",
      "difficulty": "easy",
      "source": "CIMA F2 syllabus A1: Types and sources of long-term funds – characteristics of debt and equity finance"
    },
    {
      "stem": "A company has in issue 6% bonds with a nominal value of $100 each, redeemable at par in exactly four years. Interest is paid annually and the current market price is $97 ex interest. The corporate tax rate is 30% and tax relief on interest is received in the same year as the payment. Discount factors at 5%: four-year annuity 3.546, year 4 0.823. Discount factors at 6%: four-year annuity 3.465, year 4 0.792. What is the after-tax cost of the debt, to one decimal place?",
      "options": [
        "4.3%",
        "6.2%",
        "5.1%",
        "6.9%"
      ],
      "answer": "C",
      "explanation": "The cost of redeemable debt is the IRR of the investor-style cash flows using after-tax interest: -97 now, $4.20 (6 x 0.7) a year for four years and $100 at year 4. At 5% the PV is 4.2 x 3.546 + 100 x 0.823 = 97.19 (NPV +0.19); at 6% it is 93.75 (NPV -3.25). Interpolating gives 5% + 0.19/3.44 = about 5.1%. Using 4.20/97 ignores the gain on redemption, and the higher figures ignore tax relief.",
      "topic": "Financing Capital Projects",
      "subtopic": "Cost of long-term funds",
      "difficulty": "medium",
      "source": "CIMA F2 syllabus A2: Cost of long-term funds – cost of redeemable debt using IRR"
    },
    {
      "stem": "A company's shares trade at $4.00 ex dividend. A dividend of $0.25 per share has just been paid and dividends are expected to grow at 5% a year indefinitely. The company has 10 million shares in issue. It also has debt with a market value of $20 million and an after-tax cost of 5%. Using market values as weights, what is the company's weighted average cost of capital (WACC), to one decimal place?",
      "options": [
        "9.4%",
        "9.2%",
        "8.3%",
        "7.2%"
      ],
      "answer": "A",
      "explanation": "The dividend growth model gives Ke = D0(1 + g)/P0 + g = 0.25 x 1.05/4.00 + 0.05 = 11.56%. Equity is worth 10m x $4.00 = $40m and debt $20m, so WACC = (40 x 11.56% + 20 x 5%)/60 = 9.4%. Forgetting to grow the dividend gives 9.2%, a simple average gives 8.3%, and swapping the weights gives 7.2%.",
      "topic": "Financing Capital Projects",
      "subtopic": "Cost of long-term funds",
      "difficulty": "hard",
      "source": "CIMA F2 syllabus A2: Cost of long-term funds – dividend growth model and weighted average cost of capital"
    },
    {
      "stem": "On 1 January 20X1 Seller Co signed a contract to supply a machine and two years of maintenance services for a total price of $100,000. The machine was delivered to and accepted by the customer on 1 January 20X1, and the maintenance services are provided evenly over the two years from that date. When sold separately, the machine is priced at $90,000 and two years of maintenance at $30,000. Under IFRS 15 Revenue from Contracts with Customers, how much revenue should Seller Co recognise for the year ended 31 December 20X1?",
      "options": [
        "$100,000",
        "$75,000",
        "$85,000",
        "$87,500"
      ],
      "answer": "D",
      "explanation": "IFRS 15 allocates the transaction price to each performance obligation in proportion to its stand-alone selling price: machine 100,000 x 90/120 = $75,000 and maintenance 100,000 x 30/120 = $25,000. The machine obligation is satisfied at a point in time on delivery, while maintenance is satisfied over time, so half of $25,000 is earned in 20X1. Revenue is 75,000 + 12,500 = $87,500.",
      "topic": "Financial Reporting Standards",
      "subtopic": "Relevant financial reporting standards for revenue, leases, financial instruments, intangible assets and provisions",
      "difficulty": "medium",
      "source": "IFRS 15 Revenue from Contracts with Customers – allocating the transaction price on relative stand-alone selling prices (paras 73–80)"
    },
    {
      "stem": "On 1 January 20X1 Lessee Co entered into a five-year lease of equipment, paying $10,000 annually in arrears on 31 December each year. The interest rate implicit in the lease is 8%, and the present value of the five payments discounted at 8% is $39,930. There are no initial direct costs. Under IFRS 16 Leases, what is the total lease liability at 31 December 20X1?",
      "options": [
        "$29,930",
        "$33,124",
        "$35,770",
        "$40,000"
      ],
      "answer": "B",
      "explanation": "The lease liability is first measured at the present value of the lease payments, $39,930, and then carried at amortised cost. Interest of 8% x 39,930 = $3,194 is added and the payment of $10,000 made on 31 December is deducted, leaving $33,124. Deducting the payment without adding interest gives $29,930, and $40,000 is the undiscounted remaining payments.",
      "topic": "Financial Reporting Standards",
      "subtopic": "Relevant financial reporting standards for revenue, leases, financial instruments, intangible assets and provisions",
      "difficulty": "medium",
      "source": "IFRS 16 Leases – initial and subsequent measurement of the lessee's lease liability (paras 26 and 36)"
    },
    {
      "stem": "On 1 January 20X1 an entity issued $10 million of 5% convertible bonds at par. Interest is payable annually in arrears, and on 31 December 20X3 the bonds are either redeemable at par or convertible into equity shares. The market interest rate for similar debt without a conversion option is 8%. Discount factors at 8% are: year 1 0.926, year 2 0.857, year 3 0.794. Under IAS 32 Financial Instruments: Presentation, what amount should the entity recognise in equity on initial recognition of the bonds?",
      "options": [
        "$0",
        "$900,000",
        "$771,500",
        "$9,228,500"
      ],
      "answer": "C",
      "explanation": "A convertible bond is a compound instrument, so IAS 32 requires it to be split into a liability component and an equity component. The liability is the present value of the contractual cash flows at the rate for similar debt without conversion rights: 500,000 x (0.926 + 0.857 + 0.794) + 10,000,000 x 0.794 = $9,228,500. The equity component is the residual, 10,000,000 - 9,228,500 = $771,500.",
      "topic": "Financial Reporting Standards",
      "subtopic": "Relevant financial reporting standards for revenue, leases, financial instruments, intangible assets and provisions",
      "difficulty": "hard",
      "source": "IAS 32 Financial Instruments: Presentation – compound financial instruments, split accounting (paras 28–32)"
    },
    {
      "stem": "Under IAS 37 Provisions, Contingent Liabilities and Contingent Assets, which TWO of the following situations require a provision to be recognised at the reporting date of 31 December 20X1? Choose TWO.",
      "options": [
        "Before 31 December the entity announced a detailed formal plan to close a factory and told the affected employees.",
        "On 15 December the board decided to close a division, but did not tell anyone outside the board until February 20X2.",
        "A new law requires smoke filters to be fitted by June 20X2; the entity has not fitted them or incurred any costs yet.",
        "The entity contaminated land where no clean-up law exists, but its published policy, always honoured, is to clean up."
      ],
      "answer": "AD",
      "explanation": "A provision requires a present obligation, legal or constructive, arising from a past event. Announcing a detailed restructuring plan to those affected creates a valid expectation and so a constructive obligation, as does a published and consistently honoured clean-up policy once the contamination has occurred. A board decision not communicated before the year end creates no obligation, and the smoke filter cost can still be avoided by future action, so there is no obligating event at the reporting date.",
      "topic": "Financial Reporting Standards",
      "subtopic": "Relevant financial reporting standards for revenue, leases, financial instruments, intangible assets and provisions",
      "difficulty": "medium",
      "source": "IAS 37 Provisions, Contingent Liabilities and Contingent Assets – recognition criteria, constructive obligations and restructuring (paras 14–22, 72)"
    },
    {
      "stem": "Buyer Co acquired 100% of the equity shares of Target Co. Under IFRS 3 Business Combinations, which of the following should Buyer Co recognise as an intangible asset separately from goodwill in its consolidated statement of financial position at the acquisition date?",
      "options": [
        "The value of Target Co's skilled and assembled workforce",
        "A customer list of Target Co that could be sold or licensed separately",
        "Cost savings expected from combining the two companies' operations",
        "Contracts that Target Co is still negotiating with prospective customers"
      ],
      "answer": "B",
      "explanation": "IFRS 3 requires the acquirer to recognise identifiable intangible assets of the acquiree at fair value, and an intangible is identifiable if it is separable or arises from contractual or legal rights. A customer list that could be sold or licensed is separable, so it is recognised even if Target Co never recorded it. An assembled workforce and contracts still under negotiation are specifically not recognised, and expected synergies are part of what goodwill represents.",
      "topic": "Financial Reporting Standards",
      "subtopic": "Relevant financial reporting standards for group accounts",
      "difficulty": "easy",
      "source": "IFRS 3 Business Combinations – recognising identifiable intangible assets separately from goodwill; IAS 38 identifiability criteria"
    },
    {
      "stem": "On 1 January 20X1 Parent Co acquired 80% of the equity shares of Sub Co. The consideration was $5.0 million in cash paid on acquisition plus $1.21 million payable on 1 January 20X3. Parent Co's cost of capital is 10% a year. At acquisition, Sub Co's share capital was $2.0 million and its retained earnings were $2.5 million, and the fair value of its land exceeded the carrying amount by $0.5 million. Parent Co measures non-controlling interest (NCI) at fair value, which was $1.2 million at acquisition. What is the goodwill arising on the acquisition?",
      "options": [
        "$2.00 million",
        "$2.41 million",
        "$2.70 million",
        "$2.20 million"
      ],
      "answer": "D",
      "explanation": "Deferred consideration is included at its present value at the acquisition date: 1.21/1.10^2 = $1.0 million, so the consideration is $6.0 million. Under the fair value method, goodwill = consideration + fair value of NCI - fair value of net assets = 6.0 + 1.2 - (2.0 + 2.5 + 0.5) = $2.2 million. Leaving out the land uplift, failing to discount, or using the proportionate method gives the other figures.",
      "topic": "Group Accounts",
      "subtopic": "Group accounts based on IFRS",
      "difficulty": "medium",
      "source": "IFRS 3 Business Combinations – measurement of goodwill, consideration transferred and non-controlling interest (paras 19 and 32)"
    },
    {
      "stem": "During the year Parent Co sold goods to its 80%-owned subsidiary for $60,000, pricing them at cost plus a mark-up of 25%. At the year end half of these goods were still in the subsidiary's inventory. By how much should inventory be reduced in the consolidated statement of financial position?",
      "options": [
        "$6,000",
        "$7,500",
        "$4,800",
        "$12,000"
      ],
      "answer": "A",
      "explanation": "Goods still held within the group carry profit that has not been realised by a sale outside the group, so it must be eliminated. The goods still held cost the subsidiary $30,000, and with a 25% mark-up on cost the profit element is 30,000 x 25/125 = $6,000. Inventory is reduced by the full $6,000 whatever the group's percentage holding; because the parent was the seller, the adjustment is charged entirely against the group's retained earnings.",
      "topic": "Group Accounts",
      "subtopic": "Group accounts based on IFRS",
      "difficulty": "easy",
      "source": "IFRS 10 Consolidated Financial Statements – elimination of intragroup transactions and unrealised profit (para B86)"
    },
    {
      "stem": "On 1 January 20X1 Investor Co acquired 30% of the equity shares of Assoc Co for $900,000, giving it significant influence. For the year ended 31 December 20X1 Assoc Co reported profit after tax of $400,000 and paid dividends of $100,000. During the year Investor Co sold goods to Assoc Co, and at the year end Assoc Co's inventory included $20,000 of unrealised profit on these goods. There has been no impairment. What is the carrying amount of the investment in Assoc Co in Investor Co's consolidated statement of financial position at 31 December 20X1?",
      "options": [
        "$990,000",
        "$1,014,000",
        "$984,000",
        "$970,000"
      ],
      "answer": "C",
      "explanation": "Under the equity method the investment starts at cost, increases by the investor's share of post-acquisition profit and falls by dividends received: 900,000 + 30% x 400,000 - 30% x 100,000 = $990,000. Unrealised profit on transactions with an associate is eliminated only to the extent of the investor's interest, so 30% x 20,000 = $6,000 is deducted, giving $984,000. Removing the full $20,000 is wrong because the other 70% relates to the associate's other owners.",
      "topic": "Group Accounts",
      "subtopic": "Group accounts based on IFRS",
      "difficulty": "hard",
      "source": "IAS 28 Investments in Associates and Joint Ventures – equity method and elimination of unrealised profits (paras 10 and 28)"
    },
    {
      "stem": "Parent Co has owned 80% of the equity shares of Sub Co for several years. On 31 December 20X1 Parent Co bought a further 10% of Sub Co's shares for $500,000 in cash. Immediately before this purchase, the carrying amount of the non-controlling interest (NCI) in Sub Co in the consolidated statement of financial position was $1,200,000. How should the difference between the cash paid and the reduction in NCI be accounted for in the consolidated financial statements?",
      "options": [
        "A gain of $100,000 recognised in consolidated profit or loss",
        "$100,000 credited to equity attributable to owners of the parent",
        "$100,000 debited to equity attributable to owners of the parent",
        "$100,000 deducted from the goodwill previously recognised on Sub Co"
      ],
      "answer": "B",
      "explanation": "Parent Co already controls Sub Co, so buying more shares is a transaction between owners and is accounted for within equity, with no gain or loss and no change to goodwill. NCI falls by 10/20 x 1,200,000 = $600,000 while cash of $500,000 is paid. The $100,000 difference is credited to equity attributable to owners of the parent.",
      "topic": "Group Accounts",
      "subtopic": "Group accounts based on IFRS",
      "difficulty": "hard",
      "source": "IFRS 10 Consolidated Financial Statements – changes in ownership interest without loss of control (paras 23 and B96)"
    },
    {
      "stem": "Under IAS 24 Related Party Disclosures, which TWO of the following are related parties of Entity X? Entity X's finance director is a member of its key management personnel. Choose TWO.",
      "options": [
        "A company controlled by the spouse of Entity X's finance director",
        "A bank that has lent money to Entity X in the normal course of business",
        "An associate of Entity X",
        "A customer that buys 40% of Entity X's output on normal commercial terms"
      ],
      "answer": "AC",
      "explanation": "IAS 24 treats key management personnel and their close family members, including a spouse, as related parties, and so an entity they control is also related. An associate is a related party because the reporting entity has significant influence over it. Providers of finance in the normal course of business, and a single customer with whom a significant volume of business is done, are specifically stated not to be related parties merely because of that economic dependence.",
      "topic": "Group Accounts",
      "subtopic": "Additional disclosure issues related to the group accounts",
      "difficulty": "medium",
      "source": "IAS 24 Related Party Disclosures – definition of a related party and parties that are not necessarily related (paras 9 and 11)"
    },
    {
      "stem": "Under the International Integrated Reporting Framework, an organisation's patents, copyrights, software, and its organisational systems, procedures and protocols are examples of which of the six capitals?",
      "options": [
        "Manufactured capital",
        "Human capital",
        "Social and relationship capital",
        "Intellectual capital"
      ],
      "answer": "D",
      "explanation": "Intellectual capital covers knowledge-based intangibles: intellectual property such as patents, copyrights, software, rights and licences, and organisational capital such as tacit knowledge, systems, procedures and protocols. Manufactured capital is physical objects such as buildings and equipment, human capital is people's competences and motivation, and social and relationship capital concerns relationships with communities and stakeholders.",
      "topic": "Integrated Reporting and Sustainability Reporting",
      "subtopic": "The six capitals of integrated reporting",
      "difficulty": "easy",
      "source": "International Integrated Reporting Framework – the capitals; CIMA F2 syllabus D: The six capitals of integrated reporting"
    },
    {
      "stem": "Which TWO of the following are guiding principles, rather than content elements, of the International Integrated Reporting Framework? Choose TWO.",
      "options": [
        "Business model",
        "Connectivity of information",
        "Materiality",
        "Outlook"
      ],
      "answer": "BC",
      "explanation": "The Framework separates guiding principles, which govern how an integrated report is prepared and presented, from content elements, which state what it should cover. Connectivity of information and materiality are guiding principles, alongside strategic focus and future orientation, stakeholder relationships, conciseness, reliability and completeness, and consistency and comparability. Business model and outlook are content elements, describing what the organisation does and what challenges and uncertainties it expects.",
      "topic": "Integrated Reporting and Sustainability Reporting",
      "subtopic": "The Integrated Reporting Framework and accounting for sustainability",
      "difficulty": "medium",
      "source": "International Integrated Reporting Framework – guiding principles and content elements"
    },
    {
      "stem": "An entity's statement of profit or loss shows profit from operations (before finance costs) of $3.6 million and finance costs of $0.4 million. Its statement of financial position shows equity of $15 million, a long-term loan of $5 million and current liabilities of $4 million. Defining capital employed as equity plus non-current liabilities, what is the entity's return on capital employed (ROCE)?",
      "options": [
        "18%",
        "24%",
        "15%",
        "16%"
      ],
      "answer": "A",
      "explanation": "ROCE compares the profit available to all long-term capital providers with the capital they supply, so it uses profit before finance costs. Capital employed is 15 + 5 = $20 million, so ROCE = 3.6/20 = 18%. Deducting finance costs would understate the return earned for lenders, and including current liabilities, or using equity alone, mismatches the profit and capital measures.",
      "topic": "Working with Financial Statements",
      "subtopic": "Financial statements",
      "difficulty": "easy",
      "source": "CIMA F2 syllabus E: Working with financial statements – profitability ratios, return on capital employed"
    },
    {
      "stem": "An analyst is comparing the ratios of two listed companies in the same industry. Which TWO of the following are genuine limitations of this comparison? Choose TWO.",
      "options": [
        "The ratios cannot be compared because one company is much larger than the other.",
        "One company carries its properties at revalued amounts and the other at cost.",
        "A comparison is only meaningful if both companies have the same level of gearing.",
        "The year ends differ and seasonal trading makes year-end balances unrepresentative."
      ],
      "answer": "BD",
      "explanation": "Different accounting policies, such as the revaluation model versus the cost model for property, change asset values and depreciation, so ratios like ROCE and asset turnover are not measured on the same basis. Ratios are also snapshots at the reporting date, so different year ends combined with seasonal trading can make working capital and other balances unrepresentative. Ratios are designed to remove the effect of size, and differences in gearing are something the analysis reveals, not a barrier to comparison.",
      "topic": "Working with Financial Statements",
      "subtopic": "The limitations of the tools used for interpreting financial statements",
      "difficulty": "medium",
      "source": "CIMA F2 syllabus E: The limitations of the tools used for interpreting financial statements – accounting policies and timing differences"
    },
    {
      "stem": "At the start of the year an entity with long-term borrowings revalued its depreciable property upwards and credited the surplus to a revaluation reserve in equity. The property's remaining useful life is unchanged. Ignore deferred tax. Compared with continuing to carry the property at cost, what is the effect of the revaluation on the entity's return on capital employed (ROCE) and its gearing (debt divided by equity) for the year?",
      "options": [
        "ROCE higher and gearing lower",
        "ROCE lower and gearing higher",
        "ROCE lower and gearing lower",
        "ROCE higher and gearing higher"
      ],
      "answer": "C",
      "explanation": "The revaluation increases equity and therefore capital employed, and the higher carrying amount increases the depreciation charge, which reduces profit from operations. A smaller profit over a larger capital base lowers ROCE. Debt is unchanged while equity rises, so gearing falls; this is why analysts must check for revaluations before comparing ratios.",
      "topic": "Working with Financial Statements",
      "subtopic": "Financial statements",
      "difficulty": "medium",
      "source": "CIMA F2 syllabus E: Working with financial statements – effect of accounting policies (IAS 16 revaluation model) on ratios"
    },
    {
      "stem": "An entity has equity of $30 million, and its gearing, measured as debt divided by (debt plus equity), is 40%. It issues new equity shares for $10 million in cash and uses $5 million of the proceeds to repay debt, keeping the remainder as cash. Measured on the same basis, what is the entity's gearing immediately after these transactions, to one decimal place?",
      "options": [
        "30.0%",
        "27.3%",
        "37.5%",
        "33.3%"
      ],
      "answer": "B",
      "explanation": "Gearing of 40% means debt is 40% of the total, so D/(D + 30) = 0.4 and debt is $20 million. After the transactions, debt is 20 - 5 = $15 million and equity is 30 + 10 = $40 million; repaying debt does not reduce equity. Gearing becomes 15/(15 + 40) = 27.3%, showing how an equity issue used partly to repay debt reduces financial risk.",
      "topic": "Working with Financial Statements",
      "subtopic": "Actions based on insights from the interpretation of financial statements",
      "difficulty": "medium",
      "source": "CIMA F2 syllabus E: Actions based on insights from interpretation – gearing and changes in capital structure"
    },
    {
      "stem": "An entity's inventory holding period is 50 days, its trade receivables collection period is 40 days and its trade payables payment period is 35 days. What is the length of its working capital (cash operating) cycle?",
      "options": [
        "125 days",
        "45 days",
        "25 days",
        "55 days"
      ],
      "answer": "D",
      "explanation": "The working capital cycle measures how long cash is tied up between paying suppliers and receiving cash from customers. It equals inventory days plus receivables days less payables days: 50 + 40 - 35 = 55 days. Credit from suppliers shortens the cycle because the entity pays for inventory later.",
      "topic": "Working with Financial Statements",
      "subtopic": "Financial statements",
      "difficulty": "easy",
      "source": "CIMA F2 syllabus E: Working with financial statements – working capital ratios and the cash operating cycle"
    }
  ]
}
```
