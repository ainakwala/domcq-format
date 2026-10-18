```json
{
  "format": "domcq/1",
  "exam": "frm-p2",
  "set": "FRM Exam Part II practice – Mixed topics set 1",
  "questions": [
    {
      "stem": "A bank is preparing to implement the internal models approach (IMA) under the Basel Committee's Fundamental Review of the Trading Book (FRTB). Which of the following statements about the FRTB IMA is correct?",
      "options": [
        "Model approval is granted for the trading book as a whole, so an individual desk cannot lose IMA approval while other desks keep it.",
        "Capital is based on a 99% VaR and a 99% stressed VaR, both calculated over a uniform 10-day horizon for all risk factors.",
        "Capital is based on a 97.5% expected shortfall calibrated to a period of stress, with risk factors assigned liquidity horizons from 10 to 120 days.",
        "Instruments may be moved freely between the trading book and the banking book whenever the bank's trading intent for them changes."
      ],
      "answer": "C",
      "explanation": "The FRTB replaced the Basel 2.5 combination of 99% VaR and stressed VaR with expected shortfall at 97.5%, calibrated to a period of significant stress, because ES captures the size of losses beyond the cutoff that VaR ignores. It also replaced the uniform 10-day horizon with liquidity horizons of 10, 20, 40, 60 or 120 days, depending on how long it would take to exit or hedge each risk factor in stressed markets. IMA approval is granted desk by desk, subject to backtesting and P&L attribution tests, and movement between the trading and banking books is tightly restricted to limit regulatory arbitrage.",
      "topic": "Market Risk Measurement and Management",
      "subtopic": "Fundamental Review of the Trading Book (FRTB)",
      "difficulty": "medium",
      "source": "FRM Part II Market Risk: Fundamental Review of the Trading Book; Basel Committee, Minimum capital requirements for market risk"
    },
    {
      "stem": "A bank backtests its one-day 99% VaR model against actual trading outcomes over the most recent 250 trading days and records 7 exceptions. Under the Basel traffic light framework for backtesting internal market risk models, which of the following outcomes is most likely?",
      "options": [
        "Green zone; the number of exceptions is consistent with an accurate model and no capital penalty applies.",
        "Yellow zone; the evidence is inconclusive and the supervisor may apply a plus factor that raises the capital multiplier.",
        "Red zone; the model is presumed inaccurate and the capital multiplier is raised to its maximum level.",
        "Yellow zone; the bank must immediately stop using its internal model and revert to the standardized approach."
      ],
      "answer": "B",
      "explanation": "A 99% VaR should be exceeded on about 1% of days, so 2.5 exceptions are expected over 250 days. The Basel traffic light framework places 0–4 exceptions in the green zone, 5–9 in the yellow zone and 10 or more in the red zone. Seven exceptions is therefore a yellow-zone result: the evidence against the model is not conclusive, so the supervisor may add a plus factor to the capital multiplier, taking into account the reasons for the exceptions.",
      "topic": "Market Risk Measurement and Management",
      "subtopic": "VaR and other risk measures",
      "difficulty": "easy",
      "source": "FRM Part II Market Risk: Backtesting VaR (Jorion); Basel traffic light approach to backtesting"
    },
    {
      "stem": "An analyst models the short rate using the Vasicek model, in which the short rate reverts toward a long-run level θ at a mean-reversion speed k. The current short rate is 3.0%, θ is 6.0%, and k is 0.25 per year. The expected value of the short rate in 4 years is closest to:",
      "options": [
        "4.50%",
        "6.00%",
        "3.75%",
        "4.90%"
      ],
      "answer": "D",
      "explanation": "In the Vasicek model the drift is k(θ − r), so the expected short rate converges to θ exponentially: E[r_T] = θ + (r_0 − θ)e^(−kT). Here E[r_4] = 6% − 3% × e^(−1) = 6% − 3% × 0.368 ≈ 4.90%. Equivalently, the half-life of the gap is ln(2)/k ≈ 2.77 years, so after 4 years somewhat more than half of the 3% gap has closed; applying the initial drift linearly, or assuming full convergence, misstates the speed of reversion.",
      "topic": "Market Risk Measurement and Management",
      "subtopic": "Term structure models of interest rates",
      "difficulty": "hard",
      "source": "FRM Part II Market Risk: Term structure models – mean reversion and the Vasicek model (Tuckman)"
    },
    {
      "stem": "Which of the following statements about the implied volatility patterns typically observed in options markets is correct?",
      "options": [
        "For equity options, implied volatility tends to fall as the strike price rises, consistent with a risk-neutral distribution whose left tail is heavier than the lognormal.",
        "For foreign currency options, implied volatility tends to be lowest for deep out-of-the-money options, consistent with tails that are thinner than the lognormal.",
        "For equity options, implied volatility tends to rise as the strike price rises, consistent with a risk-neutral distribution whose right tail is heavier than the lognormal.",
        "A flat implied volatility curve across strikes indicates that the market assigns heavier tails to the risk-neutral distribution than the lognormal."
      ],
      "answer": "A",
      "explanation": "Equity options typically show a volatility skew: implied volatility is highest for low-strike options and declines as the strike rises. This means the market prices a heavier left tail and a thinner right tail than the lognormal distribution assumed by Black-Scholes-Merton, consistent with the leverage effect and fear of crashes. Currency options instead show a smile, with higher implied volatility for both deep out-of-the-money calls and puts, implying both tails are heavier than lognormal, while a flat curve would be consistent with a lognormal distribution.",
      "topic": "Market Risk Measurement and Management",
      "subtopic": "Volatility: smiles and term structures",
      "difficulty": "medium",
      "source": "FRM Part II Market Risk: Volatility smiles (Hull, Options, Futures, and Other Derivatives)"
    },
    {
      "stem": "A bank has extended a $20 million credit facility to a corporate borrower, of which $12 million is currently drawn. The bank estimates that 50% of the undrawn amount would be drawn down before a default. The borrower's one-year probability of default is 1.5% and the loss given default is 45%. The one-year expected loss on the facility is closest to:",
      "options": [
        "$81,000",
        "$108,000",
        "$132,000",
        "$135,000"
      ],
      "answer": "B",
      "explanation": "Expected loss equals PD × LGD × EAD. For a credit line, EAD includes the drawn balance plus the portion of the undrawn commitment expected to be drawn before default, because borrowers in distress tend to draw on their lines: EAD = $12m + 50% × $8m = $16m. EL = 1.5% × 45% × $16m = $108,000; using only the drawn balance understates EL, using the full limit overstates it, and using the recovery rate instead of LGD gives $132,000.",
      "topic": "Credit Risk Measurement and Management",
      "subtopic": "Expected and unexpected loss",
      "difficulty": "medium",
      "source": "FRM Part II Credit Risk: Expected loss – PD, LGD and exposure at default for credit lines"
    },
    {
      "stem": "Which of the following transactions most likely exposes a bank to wrong-way risk?",
      "options": [
        "A swap in which the bank pays the floating jet fuel price and receives a fixed price from an airline that is hedging its fuel costs.",
        "A sale of an equity index put option to a hedge fund that paid the full option premium to the bank upfront.",
        "An interest rate swap with a highly rated corporate under a CSA requiring daily cash variation margin with a zero threshold.",
        "A purchase of credit protection on a large bank from another bank whose credit quality is highly correlated with that of the reference entity."
      ],
      "answer": "D",
      "explanation": "Wrong-way risk arises when exposure to a counterparty tends to increase as the counterparty's credit quality worsens. If the reference bank deteriorates, the value of the protection rises, increasing the exposure to the protection seller exactly when a highly correlated seller is more likely to default, so the protection may fail when it is most needed. The fuel swap is right-way risk, because the bank's exposure is largest when fuel prices fall, which is when the airline is financially stronger; a sold option with the premium paid upfront creates no exposure to the buyer, and a fully cash-margined swap has little residual exposure.",
      "topic": "Credit Risk Measurement and Management",
      "subtopic": "Counterparty risk",
      "difficulty": "medium",
      "source": "FRM Part II Credit Risk: Counterparty risk – wrong-way risk and right-way risk"
    },
    {
      "stem": "A bank uses the Vasicek one-factor model, as in the Basel IRB approach, to estimate the 99.9% worst-case default rate (WCDR) for a large, granular loan portfolio with total exposure of $100 million. Each loan has a one-year PD of 1% and an LGD of 40%, and the asset correlation is 0.20. Use N^(-1)(0.01) = -2.326, N^(-1)(0.999) = 3.090 and N(-1.056) = 0.1455, where N is the standard normal cumulative distribution function. Ignoring any maturity adjustment, the one-year 99.9% credit VaR, measured as unexpected loss, is closest to:",
      "options": [
        "$5.42 million",
        "$5.82 million",
        "$13.55 million",
        "$14.55 million"
      ],
      "answer": "A",
      "explanation": "In the Vasicek model, WCDR = N[(N^(-1)(PD) + √ρ × N^(-1)(0.999)) / √(1 − ρ)] = N[(−2.326 + 0.447 × 3.090) / 0.894] = N(−1.056) = 14.55%. The 99.9% loss is EAD × LGD × WCDR = $100m × 40% × 14.55% = $5.82m, and credit VaR as unexpected loss subtracts the expected loss of $100m × 40% × 1% = $0.40m, giving about $5.42m. This mirrors the Basel IRB capital formula, EAD × LGD × (WCDR − PD), which holds capital against unexpected loss because expected loss is meant to be covered by provisions and pricing.",
      "topic": "Credit Risk Measurement and Management",
      "subtopic": "Credit VaR",
      "difficulty": "hard",
      "source": "FRM Part II Credit Risk: Credit VaR – Vasicek one-factor model and worst-case default rate (Hull)"
    },
    {
      "stem": "A securitization backed by a $100 million pool of loans has three tranches: an equity tranche absorbing the first 5% of pool losses, a mezzanine tranche covering losses from 5% to 20%, and a senior tranche covering losses above 20%. If cumulative pool losses reach $12 million, the loss suffered by the mezzanine tranche, as a percentage of its principal, is closest to:",
      "options": [
        "12.0%",
        "35.0%",
        "46.7%",
        "80.0%"
      ],
      "answer": "C",
      "explanation": "Losses in a securitization are allocated from the bottom of the capital structure up. The equity tranche absorbs the first $5 million and is wiped out, leaving $7 million of losses for the mezzanine tranche, whose principal is $15 million (pool losses from $5m to $20m), so its loss is 7/15 ≈ 46.7%. The senior tranche is untouched until pool losses exceed $20 million, and the example shows how a thin tranche turns a 12% pool loss into a much larger percentage loss for its investors.",
      "topic": "Credit Risk Measurement and Management",
      "subtopic": "Structured finance and securitization",
      "difficulty": "easy",
      "source": "FRM Part II Credit Risk: Structured finance and securitization – tranching and the loss waterfall"
    },
    {
      "stem": "A trader at a bank deliberately mismarks positions in the trading book to conceal mounting losses from risk managers. Under the Basel Committee's Level 1 operational risk event-type classification, this loss event is most appropriately classified as:",
      "options": [
        "Internal fraud",
        "Execution, delivery and process management",
        "Clients, products and business practices",
        "Business disruption and system failures"
      ],
      "answer": "A",
      "explanation": "The Basel Committee defines internal fraud as losses from acts intended to defraud, misappropriate property or circumvent regulations, the law or company policy, involving at least one internal party, and it lists intentional mismarking of positions under this event type's unauthorized activity category. Execution, delivery and process management covers unintentional failures in transaction processing, while clients, products and business practices covers unintentional or negligent failures to meet obligations to clients. The intent and the involvement of an employee are what make this internal fraud.",
      "topic": "Operational Risk and Resilience",
      "subtopic": "Identification, classification, and reporting of operational risks",
      "difficulty": "easy",
      "source": "FRM Part II Operational Risk: Basel Committee operational risk loss event type classification (Level 1 event types)"
    },
    {
      "stem": "Under the Basel III standardized approach for operational risk, the business indicator component (BIC) is calculated by applying marginal coefficients of 12% to the business indicator (BI) up to EUR 1 billion, 15% to the portion from EUR 1 billion to EUR 30 billion, and 18% to the portion above EUR 30 billion. For a bank with a BI of EUR 40 billion, the BIC is closest to:",
      "options": [
        "EUR 4.80 billion",
        "EUR 6.00 billion",
        "EUR 6.27 billion",
        "EUR 7.20 billion"
      ],
      "answer": "C",
      "explanation": "The BI coefficients are marginal: each applies only to the slice of the BI that falls in its bucket, much like income tax brackets. BIC = 12% × 1 + 15% × (30 − 1) + 18% × (40 − 30) = 0.12 + 4.35 + 1.80 = EUR 6.27 billion. Applying the highest coefficient to the whole BI (EUR 7.20 billion) confuses the marginal rate with the average rate; the BIC is then multiplied by the internal loss multiplier, which reflects the bank's own loss history, to give the operational risk capital requirement.",
      "topic": "Operational Risk and Resilience",
      "subtopic": "Regulation and the Basel Accords",
      "difficulty": "medium",
      "source": "FRM Part II Operational Risk: Basel III final reforms – standardized approach for operational risk (BIC and ILM)"
    },
    {
      "stem": "A lending business unit is expected to generate annual revenue of $30 million and operating costs of $8 million. Its expected credit losses are $6 million, and it is allocated economic capital of $80 million, which is assumed to be invested at a risk-free rate of 3%. Ignoring taxes and transfer pricing, the unit's risk-adjusted return on capital (RAROC) is closest to:",
      "options": [
        "20.0%",
        "27.5%",
        "30.5%",
        "23.0%"
      ],
      "answer": "D",
      "explanation": "RAROC = (revenue − operating costs − expected loss + return on economic capital) / economic capital = (30 − 8 − 6 + 3% × 80) / 80 = 18.4 / 80 = 23.0%. Expected loss is deducted in the numerator because it is a predictable cost of lending that should be priced in, while unexpected loss is captured through economic capital in the denominator. The return on the capital itself is added because that capital is assumed to be invested in risk-free assets, and the result is compared with the bank's hurdle rate to judge whether the business creates value.",
      "topic": "Operational Risk and Resilience",
      "subtopic": "Risk-adjusted return on capital (RAROC)",
      "difficulty": "medium",
      "source": "FRM Part II Operational Risk and Resilience: Risk-adjusted return on capital (RAROC)"
    },
    {
      "stem": "According to the US supervisory guidance on model risk management (SR 11-7), which of the following is a core element of effective model validation?",
      "options": [
        "Validation carried out primarily by the model developers, since they have the deepest understanding of the model's design and assumptions.",
        "Outcomes analysis, such as backtesting, that compares model outputs with actual outcomes to assess how well the model performs.",
        "A single validation before the model enters production, with no further review required unless the model visibly fails in use.",
        "An exemption from validation for vendor models, since the vendor is responsible for testing and documenting its own products."
      ],
      "answer": "B",
      "explanation": "SR 11-7 identifies three core elements of comprehensive validation: evaluation of conceptual soundness, including developmental evidence; ongoing monitoring, including process verification and benchmarking; and outcomes analysis, including backtesting. Outcomes analysis tests whether the model actually performs as intended by comparing its outputs with realized outcomes. The guidance also requires validation by staff with appropriate independence from development, applies to vendor models as well as internal ones, and calls for periodic review at least annually rather than a one-time exercise.",
      "topic": "Operational Risk and Resilience",
      "subtopic": "Model risk and model validation",
      "difficulty": "easy",
      "source": "FRM Part II Operational Risk: Model risk and model validation; Federal Reserve/OCC SR 11-7, Supervisory Guidance on Model Risk Management"
    },
    {
      "stem": "A bank holds $120 million of high-quality liquid assets (HQLA) after applying all haircuts and caps. Over the next 30 calendar days under the Basel III liquidity coverage ratio stress scenario, its total expected cash outflows are $200 million and its total expected cash inflows are $180 million. The bank's liquidity coverage ratio (LCR) is closest to:",
      "options": [
        "60%",
        "67%",
        "600%",
        "240%"
      ],
      "answer": "D",
      "explanation": "The LCR is the stock of HQLA divided by total net cash outflows over a 30-day stress period, and it must be at least 100%. Net outflows equal outflows minus inflows, but inflows are capped at 75% of outflows so that a bank always holds HQLA against at least 25% of its outflows rather than relying on expected inflows. Here inflows count only up to 75% × $200m = $150m, so net outflows are $50m and the LCR is $120m / $50m = 240%; ignoring the cap would give 600%.",
      "topic": "Liquidity and Treasury Risk Measurement and Management",
      "subtopic": "Liquidity risk principles and metrics",
      "difficulty": "medium",
      "source": "FRM Part II Liquidity: Basel III Liquidity Coverage Ratio – HQLA, net cash outflows and the 75% cap on inflows"
    },
    {
      "stem": "A bank is redesigning its funds transfer pricing (FTP) framework. Which of the following statements about FTP is most accurate?",
      "options": [
        "Under a matched-maturity approach, each asset and liability is priced off the bank's marginal funding curve for its tenor and repricing profile, moving interest rate and liquidity risk to treasury.",
        "Under a single pool-rate approach, all assets are charged the same average funding cost, which gives business lines the most accurate incentives when making long-term loans.",
        "FTP rates should exclude any term liquidity premium, since including one would unfairly penalize the business lines that make long-term loans to customers.",
        "Under FTP, each business line should keep the interest rate risk of its own book, so that treasury can concentrate solely on managing the bank's liquidity position."
      ],
      "answer": "A",
      "explanation": "A matched-maturity (marginal cost) FTP framework charges assets and credits liabilities at rates from the bank's own funding curve that match each product's tenor and repricing profile, including a term liquidity premium. This separates the commercial margin earned by business lines from the maturity-mismatch margin, and moves interest rate and liquidity risk to treasury, which can manage them centrally. Before 2007–2009, many banks used pooled average rates or ignored term liquidity premiums, which subsidized long-term, illiquid assets and encouraged excessive maturity transformation.",
      "topic": "Liquidity and Treasury Risk Measurement and Management",
      "subtopic": "Funds transfer pricing",
      "difficulty": "medium",
      "source": "FRM Part II Liquidity and Treasury: Funds transfer pricing – matched-maturity approach and term liquidity premium"
    },
    {
      "stem": "A Japanese bank funds its US dollar loans by borrowing in yen and converting the yen into US dollars through FX swaps. The USD/JPY cross-currency basis is significantly negative. Which of the following statements is most accurate?",
      "options": [
        "The bank's effective cost of dollars through the FX swap is lower than the dollar cash rate, so swapping yen is its cheapest source of dollar funding.",
        "The bank bears large unhedged exchange rate risk on the loan principal, because the FX swap does not fix the rate at which dollars are exchanged back into yen.",
        "The bank's effective cost of dollars through the FX swap is higher than the dollar cash rate, reflecting a persistent deviation from covered interest parity.",
        "The negative basis is a short-lived anomaly, because post-crisis regulation has made it costless for banks to arbitrage deviations from covered interest parity."
      ],
      "answer": "C",
      "explanation": "Covered interest parity implies that the dollar rate obtained by swapping yen into dollars should equal the direct dollar cash rate, and the cross-currency basis measures the deviation from it. A negative basis against the dollar means the dollar rate implied by the FX swap exceeds the cash rate, so non-US borrowers pay a premium to obtain dollars synthetically. Since 2008 such deviations have persisted, reflecting strong hedging demand for dollars and limits to arbitrage from bank balance sheet costs such as leverage ratio requirements; the FX swap locks in the exchange rate for repayment, so the bank's main residual risk is rollover risk if its swaps are shorter than its dollar loans.",
      "topic": "Liquidity and Treasury Risk Measurement and Management",
      "subtopic": "Cross-currency funding",
      "difficulty": "hard",
      "source": "FRM Part II Liquidity and Treasury: Cross-currency funding – covered interest parity deviations and the cross-currency basis"
    },
    {
      "stem": "Over the past year, a portfolio returned 9% and its benchmark returned 7%. The risk-free rate was 2%, the portfolio's return volatility was 16%, and its tracking error relative to the benchmark was 4%. The portfolio's information ratio is closest to:",
      "options": [
        "0.44",
        "0.50",
        "1.25",
        "1.75"
      ],
      "answer": "B",
      "explanation": "The information ratio measures active return per unit of active risk: (portfolio return − benchmark return) / tracking error = (9% − 7%) / 4% = 0.50. It differs from the Sharpe ratio, which divides total excess return over the risk-free rate by total volatility, (9% − 2%) / 16% ≈ 0.44. The information ratio is the more relevant measure for evaluating an active manager who is judged against a benchmark.",
      "topic": "Risk Management and Investment Management",
      "subtopic": "Portfolio performance measurement and analysis",
      "difficulty": "easy",
      "source": "FRM Part II Investment Management: Portfolio performance evaluation – information ratio versus Sharpe ratio"
    },
    {
      "stem": "A $100 million portfolio holds $60 million in asset A and $40 million in asset B. The annual return volatilities are 20% for A and 10% for B, and the correlation between their returns is 0.5. Using parametric (delta-normal) VaR, the percentage of total portfolio VaR contributed by asset A, measured as its component VaR divided by portfolio VaR, is closest to:",
      "options": [
        "80.8%",
        "60.0%",
        "75.0%",
        "90.0%"
      ],
      "answer": "A",
      "explanation": "Component VaR allocates total VaR to positions in proportion to each position's covariance with the portfolio, so the components add up exactly to total VaR. In dollar terms, A's volatility is $12m and B's is $4m, their covariance is 0.5 × 12 × 4 = 24, and portfolio variance is 144 + 16 + 2 × 24 = 208. A's share is (144 + 24) / 208 ≈ 80.8% (B's is 19.2%), whatever the confidence level or horizon; using standalone VaRs (75%) ignores diversification, and using variances alone (90%) ignores the covariance term.",
      "topic": "Risk Management and Investment Management",
      "subtopic": "Portfolio risk measures",
      "difficulty": "hard",
      "source": "FRM Part II Investment Management: Portfolio risk – marginal, incremental and component VaR (Jorion)"
    },
    {
      "stem": "A commercial hedge fund database allows a newly listed fund to add its full performance history from the periods before it began reporting to the database. Which bias does this practice most likely introduce, and what is its typical effect on the database's average historical returns?",
      "options": [
        "Survivorship bias, which typically causes average historical returns to be understated.",
        "Backfill bias, which typically causes average historical returns to be understated.",
        "Look-ahead bias, which typically causes average historical volatility to be overstated.",
        "Backfill bias, which typically causes average historical returns to be overstated."
      ],
      "answer": "D",
      "explanation": "Backfill, or instant history, bias arises because managers usually choose to start reporting to a database after a period of good performance, so the backfilled history is disproportionately strong. Adding those returns therefore overstates the average historical performance of funds in the database. Survivorship bias is a separate effect, caused by funds that stop reporting, often after poor results, dropping out of the sample, and it also tends to overstate rather than understate average returns.",
      "topic": "Risk Management and Investment Management",
      "subtopic": "Hedge funds and private markets",
      "difficulty": "medium",
      "source": "FRM Part II Investment Management: Hedge funds – biases in hedge fund databases (backfill and survivorship)"
    },
    {
      "stem": "Compared with broadly syndicated leveraged loans, which of the following characteristics is most typical of direct lending in private credit markets?",
      "options": [
        "Loans are usually fixed rate, actively traded in a liquid secondary market, and marked to market daily using dealer quotes.",
        "Loans are usually made by deposit-funded commercial banks, which hold them on balance sheet with deposit insurance support.",
        "Loans are usually floating rate, held to maturity by one or a few non-bank lenders, and valued infrequently using models.",
        "Borrowers are usually large investment-grade companies with public credit ratings that want to diversify away from bonds."
      ],
      "answer": "C",
      "explanation": "Direct lending loans are typically floating rate and are originated and held to maturity by non-bank lenders such as private credit funds, business development companies and insurers, usually for middle-market companies that are smaller and more leveraged than public bond issuers. Because there is little secondary trading, the loans are valued infrequently using models, which can delay the recognition of losses and limit transparency. Floating rates shift interest rate risk to borrowers, so rising rates increase their debt service burdens and credit risk.",
      "topic": "Current Issues in Financial Markets",
      "subtopic": "Private credit",
      "difficulty": "easy",
      "source": "FRM Part II Current Issues: Private credit; IMF Global Financial Stability Report (April 2024), Chapter 2, The Rise and Risks of Private Credit"
    },
    {
      "stem": "Supervisors and international bodies have highlighted several financial stability risks arising from the growing use of artificial intelligence (AI) in the financial sector. Which of the following is most likely to be one of these risks?",
      "options": [
        "Because AI models are trained on very large datasets, they are inherently more explainable than traditional statistical models, which reduces model risk.",
        "Widespread reliance on similar models, data and a few third-party providers could increase herding and correlated behavior, amplifying market stress.",
        "Because AI lowers the cost of building bespoke models, financial firms are expected to become less dependent on a small number of technology providers.",
        "Because AI models can learn continuously from new data, they remove the need for ongoing performance monitoring and periodic revalidation."
      ],
      "answer": "B",
      "explanation": "Official sector work on AI, including the Financial Stability Board's 2024 report, highlights third-party dependencies and service-provider concentration, market correlations, cyber risks, and model risk, data quality and governance as key vulnerabilities. If many institutions use similar models trained on similar data, often supplied by the same few providers, their decisions may become correlated, which can amplify herding and procyclicality in stress. Many AI models are less explainable than traditional models and can drift as data change, which increases rather than removes the need for ongoing monitoring and validation.",
      "topic": "Current Issues in Financial Markets",
      "subtopic": "Artificial intelligence (AI)",
      "difficulty": "medium",
      "source": "FRM Part II Current Issues: Artificial intelligence; FSB, The Financial Stability Implications of Artificial Intelligence (2024)"
    }
  ]
}
```
