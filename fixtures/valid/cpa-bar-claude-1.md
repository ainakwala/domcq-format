```json
{
  "format": "domcq/1",
  "exam": "cpa-bar",
  "set": "Uniform CPA Examination: Business Analysis and Reporting (BAR) practice – Mixed Set 1",
  "questions": [
    {
      "stem": "A company reports cash of $50,000, short-term marketable securities of $30,000, net accounts receivable of $70,000, inventory of $120,000, prepaid expenses of $10,000, and current liabilities of $150,000. What is the company's quick (acid-test) ratio?",
      "options": [
        "0.80",
        "1.00",
        "1.80",
        "1.87"
      ],
      "answer": "B",
      "explanation": "The quick ratio counts only assets that can be converted to cash quickly: cash, marketable securities and net receivables ($50,000 + $30,000 + $70,000 = $150,000). Inventory and prepaid expenses are excluded because they are not readily convertible to cash. Dividing $150,000 by current liabilities of $150,000 gives 1.00.",
      "topic": "Business Analysis",
      "subtopic": "Current period/historical analysis, including the use of data",
      "difficulty": "easy",
      "source": "BAR syllabus: Business Analysis, current period/historical analysis (liquidity ratios, quick ratio)"
    },
    {
      "stem": "A company reported cost of goods sold of $900,000 and net sales of $1,300,000 for the year. Inventory was $140,000 at the beginning of the year and $160,000 at the end of the year. What is the company's inventory turnover, based on average inventory?",
      "options": [
        "5.6",
        "6.4",
        "8.7",
        "6.0"
      ],
      "answer": "D",
      "explanation": "Inventory turnover is cost of goods sold divided by average inventory, so the numerator is a cost-basis figure rather than sales. Average inventory is ($140,000 + $160,000) / 2 = $150,000, and $900,000 / $150,000 = 6.0 times. Using sales, or only the beginning or ending balance, produces a different and incorrect figure.",
      "topic": "Business Analysis",
      "subtopic": "Current period/historical analysis, including the use of data",
      "difficulty": "easy",
      "source": "BAR syllabus: Business Analysis, current period/historical analysis (activity ratios, inventory turnover)"
    },
    {
      "stem": "A company has a net profit margin of 5%, a total asset turnover of 2.0, and a return on equity of 25%. Using the DuPont decomposition of return on equity, what is the company's equity multiplier?",
      "options": [
        "2.5",
        "0.4",
        "5.0",
        "2.0"
      ],
      "answer": "A",
      "explanation": "The DuPont identity states ROE = net profit margin x total asset turnover x equity multiplier. Return on assets is 5% x 2.0 = 10%, so the equity multiplier is ROE / ROA = 25% / 10% = 2.5. This means assets are about 2.5 times the equity base, which shows a moderate level of financial leverage.",
      "topic": "Business Analysis",
      "subtopic": "Current period/historical analysis, including the use of data",
      "difficulty": "medium",
      "source": "BAR syllabus: Business Analysis, current period/historical analysis (profitability, DuPont analysis of ROE)"
    },
    {
      "stem": "A company reported income before income taxes of $360,000 after deducting interest expense of $40,000. Income tax expense was $100,000. What is the company's times-interest-earned ratio?",
      "options": [
        "6.5",
        "7.5",
        "10.0",
        "9.0"
      ],
      "answer": "C",
      "explanation": "Times interest earned divides earnings before interest and taxes by interest expense. Pretax income is already stated after interest, so EBIT is $360,000 + $40,000 = $400,000, and $400,000 / $40,000 = 10.0. Dividing pretax income by interest gives 9.0, which understates the ratio, and using net income ignores that interest is covered by pretax earnings.",
      "topic": "Business Analysis",
      "subtopic": "Current period/historical analysis, including the use of data",
      "difficulty": "medium",
      "source": "BAR syllabus: Business Analysis, current period/historical analysis (solvency ratios, times interest earned)"
    },
    {
      "stem": "A financial analyst regresses a retailer's monthly sales on its monthly advertising spending and obtains a coefficient of determination (R-squared) of 0.81. Which interpretation of this result is correct?",
      "options": [
        "Sales increase by 0.81% for every 1% increase in advertising spending",
        "About 81% of the variation in sales is explained by advertising spending",
        "The model's monthly sales forecasts will be correct 81% of the time",
        "The correlation coefficient between sales and advertising spending is 0.81"
      ],
      "answer": "B",
      "explanation": "R-squared is the proportion of the variation in the dependent variable that the regression explains through the independent variable, so 0.81 means about 81% of the variation in sales is explained by advertising spending. It is neither a slope nor an accuracy rate for forecasts. The correlation coefficient would be the square root of 0.81, which is 0.90 in absolute value.",
      "topic": "Business Analysis",
      "subtopic": "Prospective analysis, including the use of data",
      "difficulty": "medium",
      "source": "BAR syllabus: Business Analysis, prospective analysis (regression analysis and coefficient of determination)"
    },
    {
      "stem": "A project requires an initial investment of $100,000 and is expected to generate net cash inflows of $50,000 at the end of each of the next three years. The company's discount rate is 10%. The present value of an ordinary annuity of $1 for three periods at 10% is 2.4869. What is the project's net present value?",
      "options": [
        "$24,345",
        "$50,000",
        "$124,345",
        "$(24,345)"
      ],
      "answer": "A",
      "explanation": "Net present value is the present value of the future cash inflows minus the initial investment. The inflows are worth $50,000 x 2.4869 = $124,345, and subtracting the $100,000 outlay gives an NPV of $24,345. A positive NPV means the project earns more than the 10% required return, so it adds value.",
      "topic": "Business Analysis",
      "subtopic": "Prospective analysis, including the use of data",
      "difficulty": "medium",
      "source": "BAR syllabus: Business Analysis, prospective analysis (capital budgeting, net present value)"
    },
    {
      "stem": "A company uses exponential smoothing with a smoothing constant (alpha) of 0.30 to forecast monthly demand. The forecast for March was 200 units, and actual March demand was 240 units. What is the forecast for April?",
      "options": [
        "220 units",
        "228 units",
        "240 units",
        "212 units"
      ],
      "answer": "D",
      "explanation": "The new forecast equals the prior forecast plus alpha times the forecast error: 200 + 0.30 x (240 - 200) = 212 units. Equivalently, 0.30 x 240 + 0.70 x 200 = 212. A small alpha places most of the weight on the prior forecast and less on the most recent actual result.",
      "topic": "Business Analysis",
      "subtopic": "Prospective analysis, including the use of data",
      "difficulty": "easy",
      "source": "BAR syllabus: Business Analysis, prospective analysis (forecasting techniques, exponential smoothing)"
    },
    {
      "stem": "A company's contribution margin is $600,000 and its operating income is $150,000. Variable costs are a constant percentage of sales and fixed costs will not change. If sales revenue increases by 5%, what will operating income be?",
      "options": [
        "$157,500",
        "$165,000",
        "$180,000",
        "$187,500"
      ],
      "answer": "C",
      "explanation": "Because fixed costs are constant, a percentage change in sales changes operating income by a larger percentage. The degree of operating leverage is contribution margin / operating income = $600,000 / $150,000 = 4. A 5% sales increase raises contribution margin by $30,000 (5% of $600,000), so operating income rises by 20% to $180,000.",
      "topic": "Business Analysis",
      "subtopic": "Prospective analysis, including the use of data",
      "difficulty": "medium",
      "source": "BAR syllabus: Business Analysis, prospective analysis (operating leverage and cost-volume-profit relationships)"
    },
    {
      "stem": "A division has operating income of $900,000 on average operating assets of $5,000,000, a return on investment (ROI) of 18%. The company's required rate of return is 12%. The division manager is evaluating a project that requires $1,000,000 of additional operating assets and is expected to generate annual operating income of $150,000. Which statement about accepting the project is correct?",
      "options": [
        "Residual income increases by $30,000, but division ROI falls to 17.5%",
        "Residual income decreases by $30,000, and division ROI falls to 17.5%",
        "Residual income increases by $150,000, and division ROI falls to 17.5%",
        "Residual income increases by $30,000, and division ROI rises to 18.5%"
      ],
      "answer": "A",
      "explanation": "Residual income is operating income less a capital charge at the required rate, so the project adds $150,000 - (12% x $1,000,000) = $30,000. Its 15% return exceeds the 12% required rate, which raises residual income, but 15% is below the division's current 18% ROI, so division ROI falls to ($900,000 + $150,000) / ($5,000,000 + $1,000,000) = 17.5%. This conflict is why ROI can lead managers to reject projects that create value.",
      "topic": "Business Analysis",
      "subtopic": "Current period/historical analysis, including the use of data",
      "difficulty": "hard",
      "source": "BAR syllabus: Business Analysis, performance measurement (return on investment and residual income)"
    },
    {
      "stem": "Under US GAAP, a public company tests goodwill for impairment at the reporting unit level using the quantitative test. A reporting unit has a carrying amount of $1,000,000, including goodwill of $150,000. The fair value of the reporting unit is $800,000. What goodwill impairment loss should the company recognize?",
      "options": [
        "$0",
        "$200,000",
        "$150,000",
        "$50,000"
      ],
      "answer": "C",
      "explanation": "Under ASU 2017-04, the goodwill impairment loss equals the amount by which the reporting unit's carrying amount exceeds its fair value, limited to the carrying amount of goodwill. The excess here is $1,000,000 - $800,000 = $200,000, but the loss cannot exceed the $150,000 of goodwill in the unit. Any remaining shortfall is not recorded as goodwill impairment.",
      "topic": "Technical Accounting and Reporting",
      "subtopic": "Indefinite-lived intangible assets, including goodwill",
      "difficulty": "medium",
      "source": "ASC 350-20, Goodwill (quantitative impairment test, as amended by ASU 2017-04); BAR syllabus: goodwill"
    },
    {
      "stem": "A company is developing software for its own internal use to manage its supply chain. Which of the following costs should the company capitalize?",
      "options": [
        "Costs of evaluating alternative software products during the preliminary project stage",
        "Salaries of programmers who write the code during the application development stage",
        "Training costs for employees who will use the software after implementation",
        "Maintenance costs incurred after the software has been placed in service"
      ],
      "answer": "B",
      "explanation": "Under ASC 350-40, costs of internal-use software are capitalized only during the application development stage, for activities such as coding, testing and installing hardware. Preliminary project stage costs, training, and post-implementation maintenance are expensed as incurred. Programmer salaries during development are therefore the only capitalizable cost listed.",
      "topic": "Technical Accounting and Reporting",
      "subtopic": "Internally developed software",
      "difficulty": "easy",
      "source": "ASC 350-40, Internal-Use Software (costs capitalized versus expensed); BAR syllabus: internally developed software"
    },
    {
      "stem": "A company sells a machine and a one-year maintenance contract to a customer for a total price of $10,800. The stand-alone selling price is $9,000 for the machine and $3,000 for the maintenance contract. Each is a distinct performance obligation, and the company has no evidence that the discount relates to only one of them. How much of the transaction price should be allocated to the machine?",
      "options": [
        "$7,800",
        "$9,000",
        "$10,800",
        "$8,100"
      ],
      "answer": "D",
      "explanation": "When a contract has more than one distinct performance obligation, the transaction price is allocated in proportion to relative stand-alone selling prices, and a discount is spread across all obligations unless there is evidence it relates to only some. Total stand-alone selling price is $12,000, so the machine receives $9,000 / $12,000 x $10,800 = $8,100 and the maintenance contract receives $2,700. The residual approach is allowed only in limited circumstances, so it does not apply here.",
      "topic": "Technical Accounting and Reporting",
      "subtopic": "Revenue recognition",
      "difficulty": "medium",
      "source": "ASC 606-10, Step 4: allocate the transaction price to performance obligations (relative stand-alone selling price)"
    },
    {
      "stem": "On January 1, Year 1, a company grants 10,000 stock options to employees. The options cliff-vest after four years of service, and the grant-date fair value is $12 per option. The company has elected to estimate forfeitures and expects 10% of the options to be forfeited before vesting. Ignoring income taxes, what compensation expense should the company recognize for Year 1?",
      "options": [
        "$27,000",
        "$30,000",
        "$108,000",
        "$120,000"
      ],
      "answer": "A",
      "explanation": "Equity-classified stock options are measured at grant-date fair value and recognized as compensation cost over the requisite service period. With an estimated 10% forfeiture rate, total expected cost is 10,000 x 90% x $12 = $108,000, recognized straight-line over four years, or $27,000 per year. Without a forfeiture estimate, the annual expense would be $30,000.",
      "topic": "Technical Accounting and Reporting",
      "subtopic": "Stock compensation (share-based payments)",
      "difficulty": "medium",
      "source": "ASC 718, Compensation: Stock Compensation (grant-date fair value, service period, forfeiture accounting policy election)"
    },
    {
      "stem": "On July 1, Year 1, Acquirer Co. purchases 100% of Target Co. for $5,000,000 in cash plus a contingent consideration arrangement with an acquisition-date fair value of $300,000. Acquirer also pays $150,000 in legal and advisory fees related to the acquisition. Target's identifiable net assets have a book value of $4,000,000 and a fair value of $4,200,000. What amount of goodwill should Acquirer recognize?",
      "options": [
        "$800,000",
        "$1,250,000",
        "$1,100,000",
        "$1,300,000"
      ],
      "answer": "C",
      "explanation": "Goodwill is the consideration transferred, plus any noncontrolling interest and previously held interest, minus the acquisition-date fair value of the identifiable net assets. Consideration includes the $5,000,000 cash and the $300,000 fair value of the contingent consideration, for $5,300,000. Net assets are measured at fair value ($4,200,000), not book value, and acquisition-related fees are expensed rather than included, so goodwill is $5,300,000 - $4,200,000 = $1,100,000.",
      "topic": "Technical Accounting and Reporting",
      "subtopic": "Business combinations",
      "difficulty": "hard",
      "source": "ASC 805, Business Combinations (consideration transferred, contingent consideration, acquisition-related costs, goodwill)"
    },
    {
      "stem": "Parent Co. owns 70% of Subsidiary Co. and consolidates it. The 30% noncontrolling interest has no redemption features. How should the noncontrolling interest be presented in the consolidated balance sheet under US GAAP?",
      "options": [
        "As a liability, because it is a claim of outside shareholders on the subsidiary's net assets",
        "As a reduction of goodwill recognized when the parent obtained control of the subsidiary",
        "As a separate item between liabilities and equity, outside of stockholders' equity",
        "As a separate component of equity, presented apart from the parent's stockholders' equity"
      ],
      "answer": "D",
      "explanation": "Under ASC 810, a noncontrolling interest is a component of consolidated equity, shown separately from the parent's equity, because the consolidated group is treated as a single economic entity. It is not a liability when it has no redemption features, and it does not reduce goodwill. Consolidated net income is likewise split between the amounts attributable to the parent and to the noncontrolling interest.",
      "topic": "Technical Accounting and Reporting",
      "subtopic": "Consolidated financial statements",
      "difficulty": "easy",
      "source": "ASC 810-10, Consolidation (presentation of noncontrolling interests in the consolidated financial statements)"
    },
    {
      "stem": "A company issues fixed-rate debt and enters into a receive-fixed, pay-variable interest rate swap that is designated and qualifies as a fair value hedge of the benchmark interest rate risk on the debt. During the period, market rates fall: the fair value of the swap increases by $38,000, and the fair value of the debt attributable to the hedged risk increases by $40,000. How should the company report these changes?",
      "options": [
        "Swap gain of $38,000 in other comprehensive income; debt carrying amount is not adjusted",
        "Swap gain of $38,000 and debt loss of $40,000 in earnings; debt carrying amount is adjusted",
        "Swap gain of $38,000 in earnings; debt loss of $40,000 in other comprehensive income",
        "Swap gain of $38,000 in other comprehensive income; debt loss of $40,000 in earnings"
      ],
      "answer": "B",
      "explanation": "In a fair value hedge, the change in fair value of the derivative and the change in fair value of the hedged item attributable to the hedged risk are both recognized in current earnings, and the debt's carrying amount is adjusted for the hedged-risk change. Here the $38,000 swap gain and the $40,000 debt loss largely offset, leaving a net $2,000 loss in earnings. Deferring the derivative's gain or loss in other comprehensive income is the treatment for cash flow hedges, not fair value hedges.",
      "topic": "Technical Accounting and Reporting",
      "subtopic": "Derivatives and hedge accounting",
      "difficulty": "hard",
      "source": "ASC 815-25, Derivatives and Hedging: fair value hedging relationships (as amended by ASU 2017-12)"
    },
    {
      "stem": "On January 1, Year 1, a lessee signs a five-year equipment lease classified as an operating lease. The lease liability at commencement is $500,000, which measures only payments not yet made. The lessee paid the lessor $20,000 in advance at lease signing, incurred $10,000 of initial direct costs, and received a $15,000 lease incentive from the lessor at commencement. What is the initial measurement of the lessee's right-of-use asset?",
      "options": [
        "$515,000",
        "$500,000",
        "$530,000",
        "$545,000"
      ],
      "answer": "A",
      "explanation": "A lessee initially measures the right-of-use asset at the lease liability, plus lease payments made at or before commencement and initial direct costs, minus lease incentives received. Here that is $500,000 + $20,000 + $10,000 - $15,000 = $515,000. This initial measurement applies whether the lease is later classified as an operating lease or a finance lease.",
      "topic": "Technical Accounting and Reporting",
      "subtopic": "Leases",
      "difficulty": "medium",
      "source": "ASC 842-20-30, Leases: initial measurement of the lessee's right-of-use asset"
    },
    {
      "stem": "In the annual comprehensive financial report (ACFR) of a general-purpose state or local government, how is management's discussion and analysis (MD&A) classified?",
      "options": [
        "Part of the basic financial statements",
        "Other supplementary information",
        "Part of the statistical section",
        "Required supplementary information"
      ],
      "answer": "D",
      "explanation": "GASB Statement No. 34 requires MD&A as required supplementary information (RSI), presented before the basic financial statements. The basic financial statements consist of the government-wide statements, the fund financial statements and the notes to the financial statements. Because MD&A is RSI, auditors apply limited procedures to it rather than auditing it as part of the basic statements.",
      "topic": "State and Local Governments",
      "subtopic": "Format and content of the financial section of the annual comprehensive financial report",
      "difficulty": "easy",
      "source": "GASB Statement No. 34; GASB Codification Sec. 2200 (ACFR financial section and MD&A as required supplementary information)"
    },
    {
      "stem": "A city's governmental funds report a net increase in fund balances of $1,000,000 for the year. That result includes capital outlays of $3,000,000 reported as expenditures, proceeds from bonds issued of $2,000,000 reported as other financing sources, and principal payments on bonds of $500,000 reported as expenditures. The government-wide statements also include depreciation expense of $800,000 and an increase in the liability for compensated absences of $60,000, neither of which was reported in the funds. What is the change in net position in the government-wide statement of activities?",
      "options": [
        "$640,000",
        "$1,760,000",
        "$1,640,000",
        "$2,440,000"
      ],
      "answer": "C",
      "explanation": "Start with the net change in fund balances and adjust to the full accrual basis. Add capital outlays ($3,000,000) and deduct depreciation ($800,000); deduct bond proceeds ($2,000,000), which create a liability rather than revenue; add principal repayments ($500,000), which reduce a liability rather than being an expense; and deduct the increase in compensated absences ($60,000). The result is $1,000,000 + $3,000,000 - $800,000 - $2,000,000 + $500,000 - $60,000 = $1,640,000.",
      "topic": "State and Local Governments",
      "subtopic": "Deriving government-wide financial statements and reconciliation requirements",
      "difficulty": "hard",
      "source": "GASB Statement No. 34; GASB Codification Sec. 2200 (reconciliation of governmental funds to government-wide statements)"
    },
    {
      "stem": "A county levies $2,000,000 in property taxes for the year ending December 31, Year 1, and its legally enforceable claim attaches on January 1, Year 1. The county collected $1,800,000 during Year 1 and $120,000 within 45 days after year-end, and expects to collect the remaining $80,000 about four months after year-end. The county defines available as collected within 60 days after year-end, and it expects to collect all taxes, so no allowance is needed. What property tax revenue should the general fund report for Year 1?",
      "options": [
        "$1,800,000",
        "$1,920,000",
        "$2,000,000",
        "$120,000"
      ],
      "answer": "B",
      "explanation": "Governmental funds use the modified accrual basis, under which property tax revenue is recognized in the period for which the taxes are levied, but only to the extent the amounts are measurable and available to finance that period's spending. The $1,800,000 collected plus the $120,000 collected within the 60-day availability period gives $1,920,000. The remaining $80,000 is reported as a deferred inflow of resources in the fund, although the government-wide statements would recognize the full $2,000,000.",
      "topic": "State and Local Governments",
      "subtopic": "Typical items and specific types of transactions and events",
      "difficulty": "medium",
      "source": "GASB Codification Sec. 1600 (modified accrual basis) and Sec. P70 (property taxes); BAR syllabus: state and local governments"
    }
  ]
}
```
