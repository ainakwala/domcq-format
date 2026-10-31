```json
{
  "format": "domcq/1",
  "exam": "cima-f2",
  "set": "F2: Advanced Financial Reporting practice – Mixed syllabus set",
  "questions": [
    {
      "stem": "A listed company has 10 million equity shares in issue with a cum-rights market price of $4.00 per share. It announces a 1 for 4 rights issue at a subscription price of $3.00 per new share. What is the theoretical ex-rights price per share?",
      "options": [
        "$3.50",
        "$3.80",
        "$0.80",
        "$3.20"
      ],
      "answer": "B",
      "explanation": "The theoretical ex-rights price (TERP) is the weighted average value of the shares after the issue. Four existing shares worth $4.00 each ($16.00) plus one new share bought for $3.00 gives $19.00 for five shares, so TERP is $19.00 / 5 = $3.80. The weighting must reflect the number of old and new shares, not a simple average of the two prices.",
      "rationales": {
        "A": "Incorrect: $3.50 is a simple average of $4.00 and $3.00 and ignores that there are four old shares for every new one.",
        "B": "Correct: (4 x $4.00 + 1 x $3.00) / 5 = $19.00 / 5 = $3.80.",
        "C": "Incorrect: $0.80 is the theoretical value of a right per new share (TERP $3.80 less $3.00), not the ex-rights price.",
        "D": "Incorrect: $3.20 reverses the weights, treating four shares as issued at $3.00 and one at $4.00."
      },
      "topic": "Financing Capital Projects",
      "subtopic": "Types and sources of long-term funds",
      "difficulty": "easy",
      "source": "CIMA F2 syllabus: Financing capital projects – rights issues and the theoretical ex-rights price"
    },
    {
      "stem": "A company has in issue redeemable bonds with a 6% coupon paid annually. The bonds are redeemable at par in exactly five years and the current ex-interest market price is $95 per $100 nominal. Corporation tax is 25% and tax relief on interest is received immediately. Using 5% and 7% discount rates (5-year annuity factors 4.329 and 4.100; 5-year discount factors 0.784 and 0.713), what is the approximate after-tax cost of debt?",
      "options": [
        "4.7%",
        "7.2%",
        "5.7%",
        "4.5%"
      ],
      "answer": "C",
      "explanation": "The after-tax cost of redeemable debt is the IRR of the investor-equivalent cash flows using after-tax interest: pay $95 now, receive $4.50 (6 x 0.75) a year for five years and $100 at redemption. At 5% the PV is 4.5 x 4.329 + 100 x 0.784 = $97.88, and at 7% it is 4.5 x 4.100 + 100 x 0.713 = $89.75. Interpolating, 5% + (97.88 - 95) / (97.88 - 89.75) x 2% gives approximately 5.7%.",
      "rationales": {
        "A": "Incorrect: 4.7% is after-tax interest of $4.50 divided by $95, which ignores the $5 gain on redemption at par.",
        "B": "Incorrect: about 7.2% is the pre-tax IRR using the full $6 coupon, so it ignores the tax relief on interest.",
        "C": "Correct: the IRR of -$95, $4.50 a year for five years and $100 at year 5 is approximately 5.7%.",
        "D": "Incorrect: 4.5% is simply the after-tax coupon rate on nominal value, ignoring the market price and redemption."
      },
      "topic": "Financing Capital Projects",
      "subtopic": "Cost of long-term funds",
      "difficulty": "medium",
      "source": "CIMA F2 syllabus: Cost of long-term funds – cost of redeemable debt using IRR"
    },
    {
      "stem": "A company has 20 million equity shares trading at $2.50 each ex-div. A dividend of $0.20 per share has just been paid and dividends are expected to grow at 5% a year indefinitely. It also has $30 million nominal of 8% irredeemable bonds trading at $80 per $100 nominal. Corporation tax is 25%. What is the company's weighted average cost of capital using market values?",
      "options": [
        "11.0%",
        "12.3%",
        "11.2%",
        "11.5%"
      ],
      "answer": "D",
      "explanation": "Cost of equity from the dividend growth model is 0.20 x 1.05 / 2.50 + 0.05 = 13.4%, applied to equity of $50m. The after-tax cost of irredeemable debt is 8 x 0.75 / 80 = 7.5%, applied to the market value of debt of $24m. WACC = (50 x 13.4% + 24 x 7.5%) / 74 = $8.5m / $74m, approximately 11.5%. Market values, the next expected dividend and the market price of debt must all be used consistently.",
      "rationales": {
        "A": "Incorrect: 11.0% uses an after-tax cost of debt of 6% based on nominal value instead of the $80 market price.",
        "B": "Incorrect: 12.3% uses the pre-tax cost of debt of 10%, ignoring the tax relief on interest.",
        "C": "Incorrect: 11.2% weights debt at its $30m nominal value instead of its $24m market value.",
        "D": "Correct: Ke 13.4% on $50m and Kd 7.5% on $24m give WACC of $8.5m / $74m, about 11.5%."
      },
      "topic": "Financing Capital Projects",
      "subtopic": "Cost of long-term funds",
      "difficulty": "hard",
      "source": "CIMA F2 syllabus: Cost of long-term funds – dividend growth model, cost of irredeemable debt and WACC"
    },
    {
      "stem": "On 1 January 20X5 an entity sells a machine together with two years of maintenance services for a single price of $100,000. The stand-alone selling prices are $90,000 for the machine and $30,000 for the maintenance. The machine is delivered on 1 January 20X5 and the maintenance is provided evenly over the two years from that date. Under IFRS 15, how much revenue should be recognised for the year ended 31 December 20X5?",
      "options": [
        "$87,500",
        "$75,000",
        "$100,000",
        "$105,000"
      ],
      "answer": "A",
      "explanation": "IFRS 15 requires the transaction price to be allocated to the performance obligations in proportion to their stand-alone selling prices. The machine receives $100,000 x 90/120 = $75,000, recognised on delivery, and the maintenance receives $25,000, recognised over time as the service is provided. One year of maintenance gives $12,500, so total revenue for 20X5 is $87,500. The discount on the bundle is spread across both obligations, not deducted from one.",
      "rationales": {
        "A": "Correct: $75,000 for the machine on delivery plus half of the $25,000 allocated to maintenance gives $87,500.",
        "B": "Incorrect: $75,000 is only the machine revenue and omits the maintenance revenue earned during 20X5.",
        "C": "Incorrect: $100,000 recognises the whole price upfront, although half the maintenance obligation is unsatisfied.",
        "D": "Incorrect: $105,000 uses unallocated stand-alone prices ($90,000 + $15,000) that exceed the transaction price."
      },
      "topic": "Financial Reporting Standards",
      "subtopic": "Relevant financial reporting standards for revenue, leases, financial instruments, intangible assets and provisions",
      "difficulty": "medium",
      "source": "IFRS 15 Revenue from Contracts with Customers – allocating the transaction price on a relative stand-alone selling price basis"
    },
    {
      "stem": "An entity prepares its financial statements to 31 December 20X5. Which TWO of the following situations require a provision to be recognised at that date under IAS 37? Choose TWO.",
      "options": [
        "In December the board decided to close a division, but no detailed plan has been announced or started by year end.",
        "The entity sells goods with a one-year warranty and past experience shows that some claims are probable.",
        "A new law requires smoke filters to be fitted by 30 June 20X6, and none had been fitted by year end.",
        "A customer is suing the entity, and lawyers advise that a reliably estimable payout is probable."
      ],
      "answer": "BD",
      "explanation": "IAS 37 requires a provision when there is a present obligation from a past event, an outflow of resources is probable and a reliable estimate can be made. Warranty sales create an obligation from the past sale, and the probable loss on a lawsuit arising from past events meets all three criteria. A board decision alone creates no constructive obligation until a detailed plan is announced or started, and a future legal requirement creates no obligation until the entity's past actions trigger it, because it could avoid the cost by its future actions.",
      "rationales": {
        "A": "Incorrect: a board decision without announcement or implementation creates no constructive obligation for restructuring.",
        "B": "Correct: the past sale creates a present obligation, and probable warranty claims can be reliably estimated.",
        "C": "Incorrect: there is no obligating past event at year end, since the entity can avoid the cost through future actions.",
        "D": "Correct: a probable and reliably estimable outflow arising from a past event meets all IAS 37 recognition criteria."
      },
      "topic": "Financial Reporting Standards",
      "subtopic": "Relevant financial reporting standards for revenue, leases, financial instruments, intangible assets and provisions",
      "difficulty": "medium",
      "source": "IAS 37 Provisions, Contingent Liabilities and Contingent Assets – recognition criteria (paragraph 14) and restructuring provisions"
    },
    {
      "stem": "On 1 January 20X5 a lessee enters into a five-year lease, paying $50,000 annually in arrears on 31 December. The interest rate implicit in the lease is 8% and the present value of the lease payments is $199,650. The lessee also incurs initial direct costs of $5,000. Under IFRS 16, what is the carrying amount of the lease liability at 31 December 20X5?",
      "options": [
        "$149,650",
        "$171,022",
        "$215,622",
        "$165,622"
      ],
      "answer": "D",
      "explanation": "The lease liability is initially measured at the present value of the lease payments, $199,650; initial direct costs are added to the right-of-use asset, not to the liability. Interest is charged at 8% on the opening balance ($15,972), giving $215,622, and the $50,000 payment in arrears is then deducted, leaving $165,622. The liability is measured at amortised cost using the effective interest method.",
      "rationales": {
        "A": "Incorrect: $149,650 deducts the payment but omits the $15,972 interest accrued during the year.",
        "B": "Incorrect: $171,022 wrongly includes the $5,000 initial direct costs in the liability rather than the right-of-use asset.",
        "C": "Incorrect: $215,622 includes interest but fails to deduct the $50,000 payment made on 31 December.",
        "D": "Correct: $199,650 plus 8% interest of $15,972 less the $50,000 payment gives $165,622."
      },
      "topic": "Financial Reporting Standards",
      "subtopic": "Relevant financial reporting standards for revenue, leases, financial instruments, intangible assets and provisions",
      "difficulty": "medium",
      "source": "IFRS 16 Leases – lessee initial measurement of the right-of-use asset and lease liability, and subsequent measurement"
    },
    {
      "stem": "On 1 January 20X5 an entity issues $10 million of 5% convertible bonds at par. Interest is paid annually in arrears and the bonds are redeemable at par on 31 December 20X7 or convertible into equity shares. The market interest rate for similar debt without conversion rights is 8%. Discount factors at 8% are 0.926 (year 1), 0.857 (year 2) and 0.794 (year 3). Using these factors, what is the carrying amount of the liability component at 31 December 20X5?",
      "options": [
        "$9,228,500",
        "$9,466,780",
        "$9,966,780",
        "$9,189,925"
      ],
      "answer": "B",
      "explanation": "IAS 32 requires a compound instrument to be split: the liability is the present value of the cash flows at the rate for similar non-convertible debt, and the residual is equity. The liability is $500,000 x (0.926 + 0.857 + 0.794) + $10,000,000 x 0.794 = $9,228,500. In 20X5 the finance cost is 8% of this, $738,280, and the $500,000 coupon paid is deducted, leaving $9,466,780.",
      "rationales": {
        "A": "Incorrect: $9,228,500 is the liability on initial recognition, before the 20X5 finance cost and coupon payment.",
        "B": "Correct: $9,228,500 plus 8% finance cost of $738,280 less the $500,000 coupon gives $9,466,780.",
        "C": "Incorrect: $9,966,780 adds the finance cost but fails to deduct the $500,000 coupon paid in the year.",
        "D": "Incorrect: $9,189,925 charges interest at the 5% coupon rate instead of the 8% effective rate."
      },
      "topic": "Financial Reporting Standards",
      "subtopic": "Relevant financial reporting standards for revenue, leases, financial instruments, intangible assets and provisions",
      "difficulty": "hard",
      "source": "IAS 32 Financial Instruments: Presentation – compound financial instruments; IFRS 9 amortised cost measurement"
    },
    {
      "stem": "Which of the following should be recognised as an intangible asset in an entity's statement of financial position under IAS 38?",
      "options": [
        "An internally generated brand name built up through years of advertising",
        "Expenditure on original research into new materials for future products",
        "Development costs on a new product that meet all the IAS 38 recognition criteria",
        "Costs of training staff to use a newly purchased accounting system"
      ],
      "answer": "C",
      "explanation": "IAS 38 requires development expenditure to be capitalised once the entity can demonstrate all the recognition criteria, including technical feasibility, intention and ability to complete and use or sell the asset, probable future economic benefits, adequate resources and reliable measurement. Research expenditure is always expensed because future benefits cannot be demonstrated at that stage. Internally generated brands and training costs are expensed because they cannot be distinguished from developing the business as a whole or are not controlled by the entity.",
      "rationales": {
        "A": "Incorrect: IAS 38 prohibits recognising internally generated brands, as their cost cannot be separated from the business.",
        "B": "Incorrect: research expenditure must be expensed as incurred because probable future benefits cannot be shown.",
        "C": "Correct: development costs meeting all IAS 38 criteria must be capitalised as an intangible asset.",
        "D": "Incorrect: training costs are expensed because the entity does not control the benefits of trained staff."
      },
      "topic": "Financial Reporting Standards",
      "subtopic": "Relevant financial reporting standards for revenue, leases, financial instruments, intangible assets and provisions",
      "difficulty": "easy",
      "source": "IAS 38 Intangible Assets – research and development phases and internally generated intangible assets"
    },
    {
      "stem": "On 1 January 20X5 P acquired 80% of the equity shares of S. The consideration was $3 million cash paid immediately, 1 million P shares of $1 nominal value with a market value of $2.50 each, and $1 million cash payable on 1 January 20X7. P's cost of capital is 10% and the two-year discount factor is 0.826. Non-controlling interest is measured at its fair value of $1.5 million. S's identifiable net assets had a fair value of $6 million. What is the goodwill arising on acquisition?",
      "options": [
        "$1,826,000",
        "$1,526,000",
        "$2,000,000",
        "$326,000"
      ],
      "answer": "A",
      "explanation": "Under IFRS 3, consideration is measured at fair value: cash $3,000,000, shares at market value $2,500,000 and deferred cash at present value $826,000, totalling $6,326,000. Goodwill is consideration plus NCI less identifiable net assets: $6,326,000 + $1,500,000 - $6,000,000 = $1,826,000. Measuring NCI at fair value means goodwill includes the NCI's share as well as the parent's.",
      "rationales": {
        "A": "Correct: $6,326,000 consideration plus $1,500,000 NCI less $6,000,000 net assets gives $1,826,000.",
        "B": "Incorrect: $1,526,000 measures NCI at its proportionate share of net assets ($1.2m), not fair value as stated.",
        "C": "Incorrect: $2,000,000 includes the deferred consideration at $1m without discounting it to present value.",
        "D": "Incorrect: $326,000 values the share consideration at nominal value instead of its $2.50 market value."
      },
      "topic": "Group Accounts",
      "subtopic": "Group accounts based on IFRS",
      "difficulty": "medium",
      "source": "IFRS 3 Business Combinations – measurement of consideration and goodwill; CIMA F2 group accounts"
    },
    {
      "stem": "P holds 30% of the equity shares of A and has significant influence over A, but neither control nor joint control. How should P account for its investment in A in its consolidated financial statements?",
      "options": [
        "Consolidated line by line, with a non-controlling interest of 70%",
        "Proportionately consolidated, including 30% of each asset and liability",
        "Measured at fair value through profit or loss as a financial asset",
        "Accounted for using the equity method as an investment in an associate"
      ],
      "answer": "D",
      "explanation": "An entity over which the investor has significant influence, but not control or joint control, is an associate under IAS 28. Associates are accounted for using the equity method: the investment is carried at cost plus the group's share of post-acquisition profits less dividends and impairment. A holding of 20% or more is presumed to give significant influence unless shown otherwise.",
      "rationales": {
        "A": "Incorrect: line-by-line consolidation is used only for subsidiaries, which require control.",
        "B": "Incorrect: proportionate consolidation is not permitted for associates under current IFRS.",
        "C": "Incorrect: fair value through profit or loss under IFRS 9 applies to simple investments without significant influence.",
        "D": "Correct: significant influence makes A an associate, which IAS 28 requires to be equity accounted."
      },
      "topic": "Group Accounts",
      "subtopic": "Group accounts based on IFRS",
      "difficulty": "easy",
      "source": "IAS 28 Investments in Associates and Joint Ventures – significant influence and the equity method"
    },
    {
      "stem": "P owns 80% of S. During the year P sold goods to S for $60,000 at a mark-up of 25% on cost. At the year end, half of these goods were still held in S's inventory. By how much should inventory be reduced in the consolidated statement of financial position?",
      "options": [
        "$7,500",
        "$6,000",
        "$12,000",
        "$4,800"
      ],
      "answer": "B",
      "explanation": "A 25% mark-up on cost means profit is 25/125 of the selling price, so the total profit on the sale is $60,000 x 25/125 = $12,000. Only the profit on goods still held by the group is unrealised, so half of this, $6,000, is eliminated from consolidated inventory. The full unrealised profit is removed regardless of the percentage holding; because the parent is the seller, the adjustment is charged entirely against group retained earnings.",
      "rationales": {
        "A": "Incorrect: $7,500 treats 25% as a margin on the $30,000 selling price instead of a mark-up on cost.",
        "B": "Correct: profit is 25/125 x $60,000 = $12,000, of which half ($6,000) remains unrealised in inventory.",
        "C": "Incorrect: $12,000 is profit on all the goods, but half have been sold outside the group and are realised.",
        "D": "Incorrect: $4,800 applies the 80% holding, but the whole unrealised profit is eliminated from inventory."
      },
      "topic": "Group Accounts",
      "subtopic": "Group accounts based on IFRS",
      "difficulty": "medium",
      "source": "IFRS 10 Consolidated Financial Statements – elimination of intra-group transactions and unrealised profit"
    },
    {
      "stem": "Under IAS 24 Related Party Disclosures, which TWO of the following are related parties of entity Z? Choose TWO.",
      "options": [
        "A bank that has provided Z with a large long-term loan in the normal course of business",
        "The spouse of Z's finance director, who is a member of key management personnel",
        "An entity in which Z holds 25% of the shares and over which Z has significant influence",
        "Z's largest customer, which accounts for 40% of Z's revenue under normal trading terms"
      ],
      "answer": "BC",
      "explanation": "IAS 24 defines related parties to include key management personnel and their close family members, and associates and joint ventures of the reporting entity. A spouse of a director is a close family member of key management personnel, and an entity over which Z has significant influence is Z's associate. IAS 24 specifically states that providers of finance and a single customer with which the entity transacts a significant volume of business are not related parties simply because of that economic dependence.",
      "rationales": {
        "A": "Incorrect: IAS 24 excludes providers of finance in the normal course of business from being related parties on that basis alone.",
        "B": "Correct: a spouse is a close family member of key management personnel and is therefore a related party.",
        "C": "Correct: an entity over which Z has significant influence is Z's associate, which IAS 24 treats as a related party.",
        "D": "Incorrect: economic dependence on a major customer does not by itself make that customer a related party."
      },
      "topic": "Group Accounts",
      "subtopic": "Additional disclosure issues related to the group accounts",
      "difficulty": "medium",
      "source": "IAS 24 Related Party Disclosures – definition of a related party and parties excluded from the definition"
    },
    {
      "stem": "P acquired 75% of S on 1 January 20X4 and measured the non-controlling interest at its fair value of $800,000. At that date, plant in S had a fair value $200,000 above its carrying amount, with a remaining useful life of four years; S has not recorded this adjustment. Between 1 January 20X4 and 31 December 20X5, S's retained earnings in its own accounts increased by $400,000. Cumulative impairment of goodwill to 31 December 20X5 is $80,000. What is the non-controlling interest in the consolidated statement of financial position at 31 December 20X5?",
      "options": [
        "$880,000",
        "$875,000",
        "$855,000",
        "$795,000"
      ],
      "answer": "C",
      "explanation": "NCI at fair value starts at $800,000 and is increased by the NCI's share of S's adjusted post-acquisition profits. The extra depreciation on the fair value uplift for two years is $200,000 / 4 x 2 = $100,000, so adjusted post-acquisition profits are $300,000 and the NCI's 25% share is $75,000. Because NCI is at fair value, goodwill impairment is shared, so 25% x $80,000 = $20,000 is deducted, giving $855,000.",
      "rationales": {
        "A": "Incorrect: $880,000 ignores the $100,000 additional depreciation on the fair value adjustment.",
        "B": "Incorrect: $875,000 ignores the NCI's share of goodwill impairment, which applies when NCI is at fair value.",
        "C": "Correct: $800,000 + 25% x ($400,000 - $100,000) - 25% x $80,000 = $855,000.",
        "D": "Incorrect: $795,000 charges the whole $80,000 impairment to NCI rather than only its 25% share."
      },
      "topic": "Group Accounts",
      "subtopic": "Group accounts based on IFRS",
      "difficulty": "hard",
      "source": "IFRS 3 and IFRS 10 – non-controlling interest at fair value, fair value adjustments and goodwill impairment (IAS 36)"
    },
    {
      "stem": "The International Integrated Reporting Framework identifies six capitals that an organisation uses and affects. Which of the following is NOT one of the six capitals?",
      "options": [
        "Reputational capital",
        "Manufactured capital",
        "Intellectual capital",
        "Natural capital"
      ],
      "answer": "A",
      "explanation": "The six capitals in the Integrated Reporting Framework are financial, manufactured, intellectual, human, social and relationship, and natural capital. Reputation is not a separate capital; it is captured mainly within social and relationship capital, which covers shared norms, stakeholder relationships and an organisation's social licence to operate. The capitals framework encourages organisations to report on value created beyond financial capital alone.",
      "rationales": {
        "A": "Correct: reputation is not a separate capital; it falls within social and relationship capital.",
        "B": "Incorrect: manufactured capital, such as buildings, equipment and infrastructure, is one of the six capitals.",
        "C": "Incorrect: intellectual capital, such as patents, systems and organisational knowledge, is one of the six capitals.",
        "D": "Incorrect: natural capital, covering environmental resources and processes, is one of the six capitals."
      },
      "topic": "Integrated Reporting and Sustainability Reporting",
      "subtopic": "The six capitals of integrated reporting",
      "difficulty": "easy",
      "source": "International Integrated Reporting Framework – the capitals; CIMA F2 integrated reporting"
    },
    {
      "stem": "Which TWO of the following are guiding principles set out in the International Integrated Reporting Framework for preparing an integrated report? Choose TWO.",
      "options": [
        "Connectivity of information",
        "Historical cost",
        "Conciseness",
        "Prudence"
      ],
      "answer": "AC",
      "explanation": "The Framework sets seven guiding principles: strategic focus and future orientation, connectivity of information, stakeholder relationships, materiality, conciseness, reliability and completeness, and consistency and comparability. Connectivity requires the report to show how the factors affecting value creation link together, and conciseness requires it to include enough context without being burdened by less relevant information. Historical cost and prudence are measurement and financial reporting concepts, not integrated reporting principles.",
      "rationales": {
        "A": "Correct: connectivity of information is a guiding principle, showing how factors affecting value creation interrelate.",
        "B": "Incorrect: historical cost is a measurement basis in financial reporting, not an integrated reporting principle.",
        "C": "Correct: conciseness is a guiding principle, requiring sufficient context without less relevant detail.",
        "D": "Incorrect: prudence is a concept in the IASB Conceptual Framework, not a guiding principle of integrated reporting."
      },
      "topic": "Integrated Reporting and Sustainability Reporting",
      "subtopic": "The Integrated Reporting Framework and accounting for sustainability",
      "difficulty": "medium",
      "source": "International Integrated Reporting Framework – guiding principles"
    },
    {
      "stem": "A company reports profit before interest and tax of $15 million, finance costs of $3 million and tax of $3 million. Its statement of financial position shows equity of $60 million and non-current loans of $40 million. Using profit before interest and tax divided by equity plus non-current liabilities, what is the return on capital employed?",
      "options": [
        "25%",
        "12%",
        "9%",
        "15%"
      ],
      "answer": "D",
      "explanation": "ROCE measures the return generated on all long-term finance, so the profit used must be before the returns paid to lenders and before tax. Profit before interest and tax of $15 million divided by capital employed of $100 million ($60 million equity plus $40 million loans) gives 15%. Matching the profit measure to the capital measure is essential: a profit after interest would be compared with equity only.",
      "rationales": {
        "A": "Incorrect: 25% divides PBIT by equity only, mismatching a pre-interest profit with capital excluding debt.",
        "B": "Incorrect: 12% uses profit before tax ($12m), which has already deducted the return to lenders.",
        "C": "Incorrect: 9% uses profit after tax, which has deducted both interest and tax.",
        "D": "Correct: PBIT of $15m divided by capital employed of $100m gives a ROCE of 15%."
      },
      "topic": "Working with Financial Statements",
      "subtopic": "Financial statements",
      "difficulty": "easy",
      "source": "CIMA F2 syllabus: Working with financial statements – profitability ratios, return on capital employed"
    },
    {
      "stem": "On the last day of its financial year, a company with long-term borrowings revalues its property upwards and records the gain in a revaluation surplus. Depreciation for the current year is unaffected. ROCE is calculated as profit before interest and tax divided by closing equity plus non-current liabilities, and gearing as debt divided by equity. What is the effect of the revaluation on the current year's ratios?",
      "options": [
        "ROCE increases and gearing increases",
        "ROCE decreases and gearing decreases",
        "ROCE decreases and gearing increases",
        "ROCE increases and gearing decreases"
      ],
      "answer": "B",
      "explanation": "The revaluation increases both assets and equity through the revaluation surplus, without changing profit for the current year. A larger capital employed with the same profit lowers ROCE, and a larger equity base with the same debt lowers gearing. This shows why analysts must check accounting policies, such as cost versus revaluation models, before comparing ratios between companies or over time.",
      "rationales": {
        "A": "Incorrect: higher capital employed with unchanged profit cannot raise ROCE, and higher equity reduces debt/equity.",
        "B": "Correct: higher equity raises capital employed (lower ROCE) and the gearing denominator (lower gearing).",
        "C": "Incorrect: ROCE does fall, but gearing falls rather than rises because equity increases while debt is unchanged.",
        "D": "Incorrect: gearing does fall, but ROCE falls rather than rises because capital employed increases."
      },
      "topic": "Working with Financial Statements",
      "subtopic": "The limitations of the tools used for interpreting financial statements",
      "difficulty": "medium",
      "source": "CIMA F2 syllabus: Working with financial statements – effect of accounting policies on ratios; IAS 16 revaluation model"
    },
    {
      "stem": "An analyst is comparing the ratios of two companies in the same industry using their published financial statements. Which TWO of the following are limitations of this ratio analysis? Choose TWO.",
      "options": [
        "The companies may use different accounting policies, such as the cost model or revaluation model for property.",
        "Ratios remove the effect of differences in company size, so performance can be compared directly.",
        "Audited financial statements contain no estimates or judgements, so the ratios are fully objective.",
        "Year-end statement of financial position figures may not represent the position during the year."
      ],
      "answer": "AD",
      "explanation": "Ratios are only as comparable as the figures behind them. Different accounting policies change asset values, profits and therefore ratios, and year-end balances may be affected by seasonality or window dressing, so they may not reflect typical conditions. Removing size effects is a benefit of ratios, not a limitation, and financial statements always involve estimates and judgements even when audited.",
      "rationales": {
        "A": "Correct: differing accounting policies distort comparisons, as the same economic position can give different ratios.",
        "B": "Incorrect: scaling for size is an advantage of ratio analysis, not a limitation.",
        "C": "Incorrect: the statement is false, because audited statements still contain many estimates and judgements.",
        "D": "Correct: year-end figures may be affected by seasonality or window dressing and may not be representative."
      },
      "topic": "Working with Financial Statements",
      "subtopic": "The limitations of the tools used for interpreting financial statements",
      "difficulty": "medium",
      "source": "CIMA F2 syllabus: Working with financial statements – limitations of ratio analysis"
    },
    {
      "stem": "An entity had 6 million equity shares in issue on 1 January 20X5. On 1 July 20X5 it made a 1 for 3 rights issue at $2.00 per share. The cum-rights market price immediately before the issue was $3.20. Profit attributable to ordinary equity holders for the year ended 31 December 20X5 was $5,000,000. What is basic earnings per share for 20X5?",
      "options": [
        "68.4c",
        "71.4c",
        "62.5c",
        "74.4c"
      ],
      "answer": "A",
      "explanation": "A rights issue below market price contains a bonus element, so IAS 33 adjusts shares before the issue by the fraction cum-rights price / theoretical ex-rights price. TERP is (3 x $3.20 + $2.00) / 4 = $2.90, giving a bonus fraction of 3.20 / 2.90. Weighted shares are 6m x 6/12 x 3.20/2.90 (3.31m) plus 8m x 6/12 (4m), totalling 7.31m, so EPS is $5,000,000 / 7.31m, about 68.4c.",
      "rationales": {
        "A": "Correct: time-weighted shares adjusted by the bonus fraction 3.20/2.90 total 7.31m, giving EPS of about 68.4c.",
        "B": "Incorrect: 71.4c time-weights the shares (7m) but ignores the bonus element of the rights issue.",
        "C": "Incorrect: 62.5c uses the 8m year-end shares, ignoring that the new shares were only in issue for six months.",
        "D": "Incorrect: 74.4c applies the bonus fraction upside down (2.90/3.20), reducing rather than increasing earlier shares."
      },
      "topic": "Working with Financial Statements",
      "subtopic": "Financial statements",
      "difficulty": "hard",
      "source": "IAS 33 Earnings per Share – rights issues, bonus element and theoretical ex-rights price"
    },
    {
      "stem": "A manufacturing company offers customers 30-day credit terms. Interpretation of its financial statements shows that its receivables collection period has risen from 40 days to 65 days over the past year, putting pressure on its overdraft. Which action most directly addresses the cause of this deterioration?",
      "options": [
        "Negotiate longer credit terms with the company's main suppliers",
        "Increase inventory levels so that customer orders are never delayed",
        "Introduce stricter credit checks and actively chase overdue customer balances",
        "Refinance the overdraft with a five-year bank loan at a fixed rate"
      ],
      "answer": "C",
      "explanation": "The problem identified is that customers are taking far longer to pay than the agreed 30 days, so the action should target credit control. Credit checks reduce the risk of selling to slow payers and chasing overdue balances shortens the collection period, releasing cash tied up in receivables. Actions on payables or financing may ease cash pressure but leave the underlying collection problem unresolved.",
      "rationales": {
        "A": "Incorrect: longer supplier credit eases cash flow but does nothing to speed up collections from customers.",
        "B": "Incorrect: higher inventory ties up more cash and does not address slow customer payments.",
        "C": "Correct: tighter credit control directly targets the rise in receivables days and releases cash.",
        "D": "Incorrect: refinancing changes how the shortfall is funded but does not tackle the slow collection of receivables."
      },
      "topic": "Working with Financial Statements",
      "subtopic": "Actions based on insights from the interpretation of financial statements",
      "difficulty": "easy",
      "source": "CIMA F2 syllabus: Working with financial statements – working capital ratios and actions based on interpretation"
    }
  ]
}
```
