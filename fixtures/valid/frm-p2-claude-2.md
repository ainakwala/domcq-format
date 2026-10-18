```json
{
  "format": "domcq/1",
  "exam": "frm-p2",
  "set": "FRM Exam Part II practice – Full-syllabus mixed set",
  "questions": [
    {
      "stem": "A risk manager is comparing value-at-risk (VaR) and expected shortfall (ES) as measures of tail risk for a trading portfolio. Which of the following statements is correct?",
      "options": [
        "VaR is coherent for all return distributions, whereas ES can violate subadditivity when returns are fat-tailed.",
        "At the same confidence level, ES is always lower than VaR because ES averages losses across the tail.",
        "ES is the loss level exceeded with a given probability, whereas VaR is the average loss beyond that level.",
        "ES satisfies all four coherence axioms, including subadditivity, whereas VaR can violate subadditivity for some portfolios."
      ],
      "answer": "D",
      "explanation": "A coherent risk measure satisfies monotonicity, translation invariance, positive homogeneity and subadditivity, and ES satisfies all four. VaR is only a quantile, so for fat-tailed or lumpy loss distributions (for example, portfolios of default-prone bonds) the VaR of a combined portfolio can exceed the sum of the stand-alone VaRs, penalizing diversification. Because ES averages the losses beyond the VaR quantile, it is never smaller than VaR at the same confidence level.",
      "topic": "Market Risk Measurement and Management",
      "subtopic": "VaR and other risk measures",
      "difficulty": "easy",
      "source": "Market risk: Estimating market risk measures – expected shortfall and coherent risk measures (Dowd)"
    },
    {
      "stem": "Under the Vasicek model, the short rate evolves as dr = k(θ − r)dt + σdw. The current short rate is 4.00%, the long-run mean θ is 6.00%, the speed of mean reversion k is 0.50 per year and σ is 1.20% per year. The expected short rate one month from now is closest to:",
      "options": [
        "3.92%",
        "4.08%",
        "4.25%",
        "5.00%"
      ],
      "answer": "B",
      "explanation": "In the Vasicek model the drift k(θ − r) pulls the short rate toward its long-run mean, so the expected change over one month is 0.50 × (6.00% − 4.00%) × 1/12 ≈ 0.083%. The expected rate is therefore about 4.08%; the exact expression θ + (r0 − θ)e^(−kt) gives the same answer to two decimals. Volatility affects the dispersion of future rates, not their expected value, and forgetting to scale by the one-month time step would give 5.00%.",
      "topic": "Market Risk Measurement and Management",
      "subtopic": "Term structure models of interest rates",
      "difficulty": "medium",
      "source": "Term structure models: mean reversion and the Vasicek model (Tuckman and Serrat)"
    },
    {
      "stem": "Which of the following statements about the market risk measure used in the internal models approach of the Basel Committee's Fundamental Review of the Trading Book (FRTB) is correct?",
      "options": [
        "It replaces 99% VaR with 97.5% expected shortfall and incorporates liquidity horizons of 10 to 120 days that vary by risk factor.",
        "It replaces 97.5% expected shortfall with 99% VaR and applies a uniform 10-day horizon to all risk factors.",
        "It uses 99.9% expected shortfall over a one-year horizon to align trading book and credit risk capital.",
        "It keeps 99% 10-day VaR and adds a stressed VaR calibrated to a 12-month period of significant stress."
      ],
      "answer": "A",
      "explanation": "FRTB replaces the Basel 2.5 combination of 99% VaR and stressed VaR with a single expected shortfall measure at 97.5% confidence, calibrated to a period of significant stress, because ES captures the size of tail losses rather than just their threshold. It also recognizes that positions cannot all be exited in 10 days by assigning each risk factor a liquidity horizon of 10, 20, 40, 60 or 120 days and scaling the 10-day ES accordingly. Keeping 99% VaR with a stressed VaR add-on describes Basel 2.5, not FRTB.",
      "topic": "Market Risk Measurement and Management",
      "subtopic": "Fundamental Review of the Trading Book (FRTB)",
      "difficulty": "medium",
      "source": "Fundamental Review of the Trading Book: expected shortfall at 97.5% and liquidity horizons (Hull)"
    },
    {
      "stem": "For options on a broad equity index, implied volatility observed in the market declines steadily as the strike price increases (a volatility skew). Compared with a lognormal distribution having the same mean and standard deviation, the implied risk-neutral distribution of the index is most likely to have:",
      "options": [
        "a less heavy left tail and a heavier right tail",
        "heavier left and right tails of roughly equal size",
        "less heavy left and right tails, with more mass near the mean",
        "a heavier left tail and a less heavy right tail"
      ],
      "answer": "D",
      "explanation": "A downward-sloping equity skew means low-strike options (out-of-the-money puts) are priced with higher volatility than a lognormal model implies, so the market assigns more probability to large declines. High-strike options carry lower implied volatility, implying a thinner right tail than the lognormal. Common explanations are the leverage effect (falling equity prices raise leverage and volatility) and crashophobia; a symmetric smile, typical of foreign currency options, would instead indicate that both tails are heavier.",
      "topic": "Market Risk Measurement and Management",
      "subtopic": "Volatility: smiles and term structures",
      "difficulty": "medium",
      "source": "Volatility smiles: equity skew and the implied risk-neutral distribution (Hull)"
    },
    {
      "stem": "A bank has a loan exposure with an exposure at default of USD 25 million, a one-year probability of default of 1.6% and a loss given default of 45%. The one-year expected loss on this exposure is closest to:",
      "options": [
        "USD 180,000",
        "USD 220,000",
        "USD 400,000",
        "USD 11,250,000"
      ],
      "answer": "A",
      "explanation": "Expected loss is the product of exposure at default, probability of default and loss given default: USD 25 million × 1.6% × 45% = USD 180,000. LGD, not the recovery rate, must be used, and USD 11.25 million is the loss conditional on default rather than the expected loss. Expected loss is treated as a cost of lending covered by pricing and provisions, while capital is held against unexpected loss.",
      "topic": "Credit Risk Measurement and Management",
      "subtopic": "Expected and unexpected loss",
      "difficulty": "easy",
      "source": "Expected and unexpected loss: expected loss = EAD × PD × LGD"
    },
    {
      "stem": "A firm's assets are currently worth USD 100 million and follow geometric Brownian motion with an expected return of 5% per year and volatility of 20% per year. The firm has zero-coupon debt with a face value of USD 80 million due in one year. Using the Merton model, distance to default is defined as the number of standard deviations by which the expected log asset value at the debt's maturity exceeds the log of the face value of debt. The distance to default is closest to:",
      "options": [
        "1.00",
        "1.12",
        "1.27",
        "1.47"
      ],
      "answer": "C",
      "explanation": "Under geometric Brownian motion, the log of asset value at maturity is normally distributed with mean ln V0 + (μ − σ²/2)T and standard deviation σ√T. Distance to default is therefore [ln(100/80) + (0.05 − 0.02) × 1] / (0.20 × 1) = (0.2231 + 0.03) / 0.20 ≈ 1.27. Omitting the drift gives 1.12 and the simple approximation (V − D)/(σV) gives 1.00; the implied real-world probability of default is N(−1.27), roughly 10%.",
      "topic": "Credit Risk Measurement and Management",
      "subtopic": "Default risk: quantitative methodologies",
      "difficulty": "hard",
      "source": "Default risk: Merton structural model and distance to default"
    },
    {
      "stem": "From the perspective of the bank, which of the following positions most clearly exhibits wrong-way counterparty risk?",
      "options": [
        "The bank sells CDS protection on a sovereign to a counterparty whose credit quality is uncorrelated with that sovereign.",
        "The bank buys CDS protection on a large domestic bank from a counterparty whose credit quality is highly correlated with that reference entity.",
        "The bank buys a put option on an equity index from a counterparty whose default probability falls when the index declines.",
        "The bank enters an interest rate swap that is fully cash-collateralized with daily margining and a zero threshold."
      ],
      "answer": "B",
      "explanation": "Wrong-way risk exists when exposure to a counterparty tends to rise as that counterparty's credit quality deteriorates. Protection bought on a reference entity is most valuable when that entity is in distress, and if the protection seller's credit quality is highly correlated with it, the seller is likely to be in distress at the same time, so exposure and default probability rise together. The put bought from a counterparty that becomes safer as the index falls is right-way risk, and full daily collateralization reduces exposure rather than linking it to default.",
      "topic": "Credit Risk Measurement and Management",
      "subtopic": "Counterparty risk",
      "difficulty": "medium",
      "source": "Counterparty risk: wrong-way risk and right-way risk (Gregory)"
    },
    {
      "stem": "A USD 500 million reference portfolio is securitized into three tranches: equity (0%–5%), mezzanine (5%–15%) and senior (15%–100%). Losses are allocated in order of seniority, starting with the equity tranche. If cumulative portfolio losses reach 8% of the portfolio notional, the loss on the mezzanine tranche as a percentage of its own notional is closest to:",
      "options": [
        "3.0%",
        "8.0%",
        "20.0%",
        "30.0%"
      ],
      "answer": "D",
      "explanation": "Losses are absorbed bottom-up: the equity tranche absorbs the first 5% of portfolio losses (USD 25 million) and the next losses go to the mezzanine tranche. With 8% losses (USD 40 million), the mezzanine tranche absorbs USD 15 million against its notional of 10% × USD 500 million = USD 50 million, a 30% loss. In general, tranche loss = min[max(L − attachment, 0), thickness] / thickness, so the senior tranche is untouched until losses exceed 15%.",
      "topic": "Credit Risk Measurement and Management",
      "subtopic": "Structured finance and securitization",
      "difficulty": "medium",
      "source": "Structured finance: tranching, attachment and detachment points, loss waterfall"
    },
    {
      "stem": "In the three-lines-of-defense model for operational risk governance, which of the following is most appropriately described as the second line of defense?",
      "options": [
        "An independent corporate operational risk function that develops the framework and challenges the business lines",
        "Business line management, which owns and manages the operational risks arising in its own activities",
        "Internal audit, which provides independent assurance to the board that the framework operates effectively",
        "External auditors, which review the financial statements and report their opinion to shareholders"
      ],
      "answer": "A",
      "explanation": "In the Basel Committee's sound operational risk principles, the first line is business unit management, which owns its risks; the second line is an independent corporate operational risk function that designs and maintains the framework, measures and reports risk, and challenges the first line; and the third line is independent assurance, usually internal audit. The defining feature of the second line is independent oversight and challenge without owning the risk-taking activities. External auditors sit outside the three-lines structure.",
      "topic": "Operational Risk and Resilience",
      "subtopic": "Governance of operational risk management frameworks",
      "difficulty": "easy",
      "source": "BCBS Revisions to the Principles for the Sound Management of Operational Risk (2021): three lines of defence"
    },
    {
      "stem": "A bank is building an operational resilience framework around its important business services and impact tolerances. Which of the following statements about an impact tolerance is most accurate?",
      "options": [
        "It sets the maximum acceptable probability that a disruption occurs, so it is met whenever incidents are rare.",
        "It is set for each internal IT system and is equivalent to that system's recovery time objective.",
        "It applies only to disruptions caused by cyberattacks and is set by the information security function.",
        "It sets the maximum tolerable disruption to an important business service, assuming disruption will occur."
      ],
      "answer": "D",
      "explanation": "Operational resilience assumes that disruptions will happen and focuses on keeping critical services within acceptable limits, not on preventing every incident. An impact tolerance (the Basel principles call it tolerance for disruption) is set for each important business service, approved by the board, and expressed as the maximum tolerable impact, often a time limit, which is tested against severe but plausible scenarios. It is defined in terms of impact on customers and markets rather than likelihood, covers all hazards, and differs from a system-level recovery time objective.",
      "topic": "Operational Risk and Resilience",
      "subtopic": "Cyber-resilience and operational resilience",
      "difficulty": "medium",
      "source": "BCBS Principles for Operational Resilience (2021); important business services and impact tolerances"
    },
    {
      "stem": "A business unit holds a USD 1 billion loan portfolio. Annual interest income is USD 60 million, funding cost is USD 35 million, operating costs are USD 8 million and expected loss is USD 5 million. The economic capital allocated to the unit is USD 80 million, and the bank earns a 3% risk-free return on this capital. Ignoring taxes, the unit's risk-adjusted return on capital (RAROC) is closest to:",
      "options": [
        "15.0%",
        "18.0%",
        "24.3%",
        "28.0%"
      ],
      "answer": "B",
      "explanation": "RAROC = (revenues − costs − expected losses + return on economic capital − taxes) / economic capital. Here the numerator is 60 − 35 − 8 − 5 + (3% × 80 = 2.4) = USD 14.4 million, so RAROC = 14.4 / 80 = 18.0%. Expected loss is deducted as a cost of doing business, whereas unexpected loss is reflected through the economic capital in the denominator.",
      "topic": "Operational Risk and Resilience",
      "subtopic": "Risk-adjusted return on capital (RAROC)",
      "difficulty": "medium",
      "source": "RAROC: definition and components of the RAROC numerator and denominator"
    },
    {
      "stem": "Under the Basel III standardized approach for operational risk, the Business Indicator Component (BIC) is computed by applying marginal coefficients of 12% to the portion of the Business Indicator (BI) up to EUR 1 billion, 15% to the portion between EUR 1 billion and EUR 30 billion, and 18% to the portion above EUR 30 billion. A bank has a BI of EUR 40 billion, and its national supervisor has set the internal loss multiplier (ILM) equal to 1. The bank's operational risk capital requirement is closest to:",
      "options": [
        "EUR 4.80 billion",
        "EUR 6.00 billion",
        "EUR 6.27 billion",
        "EUR 7.20 billion"
      ],
      "answer": "C",
      "explanation": "The BI coefficients are marginal, so each slice of the BI is charged at its own rate, like tax brackets: 1 × 12% + 29 × 15% + 10 × 18% = 0.12 + 4.35 + 1.80 = EUR 6.27 billion. Capital equals BIC × ILM, and with the ILM set to 1 the bank's own loss history does not adjust the requirement. Where the ILM is used, it equals ln(e − 1 + (LC/BIC)^0.8), with the loss component LC equal to 15 times average annual operational losses over the previous 10 years. Applying a single coefficient to the whole BI (for example 18%, giving EUR 7.20 billion) is the most common error.",
      "topic": "Operational Risk and Resilience",
      "subtopic": "Regulation and the Basel Accords",
      "difficulty": "hard",
      "source": "Basel III: Finalising post-crisis reforms (2017) – standardised approach for operational risk, BIC and ILM"
    },
    {
      "stem": "A bank holds the following unencumbered high-quality liquid assets at market value: Level 1 assets of USD 60 million, Level 2A assets of USD 30 million and Level 2B corporate debt securities of USD 20 million. Apply the Basel III haircuts of 15% to Level 2A assets and 50% to these Level 2B assets, and assume the composition caps on Level 2 assets are not binding. Total net cash outflows over the next 30 calendar days under the stress scenario are USD 80 million. The bank's liquidity coverage ratio is closest to:",
      "options": [
        "119.4%",
        "125.6%",
        "131.9%",
        "137.5%"
      ],
      "answer": "A",
      "explanation": "The LCR is the stock of HQLA divided by total net cash outflows over a 30-day stress period and must be at least 100%. Level 1 assets count at full value, while Level 2A assets take a 15% haircut (30 × 0.85 = 25.5) and these Level 2B assets a 50% haircut (20 × 0.50 = 10), giving HQLA of 95.5. The LCR is 95.5 / 80 ≈ 119.4%; with these values the 40% cap on Level 2 assets and the 15% cap on Level 2B assets are indeed not binding.",
      "topic": "Liquidity and Treasury Risk Measurement and Management",
      "subtopic": "Liquidity risk principles and metrics",
      "difficulty": "medium",
      "source": "Basel III LCR: HQLA levels, haircuts and composition caps; total net cash outflows"
    },
    {
      "stem": "A bank uses a single pool rate, equal to its average cost of funds, to transfer-price all loans and deposits regardless of maturity. The yield curve is steeply upward sloping. Which of the following outcomes is most likely?",
      "options": [
        "Long-term fixed-rate loans look less profitable than they are, because the pool rate is above the cost of matched-maturity funding.",
        "Short-term deposits are credited below their matched-maturity value, discouraging business units from gathering them.",
        "Long-term fixed-rate loans look more profitable than they are, because the pool rate is below the cost of matched-maturity funding.",
        "Maturity mismatch risk is fully transferred to treasury, because every product is charged a maturity-matched rate."
      ],
      "answer": "C",
      "explanation": "A single pool rate ignores maturity, so with an upward-sloping curve the pool rate lies below the cost of long-term matched-maturity funding and above short-term rates. Long-term fixed-rate loans are therefore undercharged and look more profitable than they are, while short-term deposits are overcredited, encouraging business units to build maturity mismatch whose interest rate and liquidity risk is not priced. Matched-maturity FTP corrects this by charging each product the funding rate for its own maturity, plus a liquidity premium, and moving mismatch risk to treasury.",
      "topic": "Liquidity and Treasury Risk Measurement and Management",
      "subtopic": "Funds transfer pricing",
      "difficulty": "medium",
      "source": "Funds transfer pricing: single pool rate versus matched-maturity FTP"
    },
    {
      "stem": "A Japanese bank funded in yen needs three-month US dollar funding. The three-month USD/JPY cross-currency basis is −50 basis points. Compared with borrowing US dollars directly in the cash money market, obtaining dollars by swapping its yen into dollars through an FX swap would most likely:",
      "options": [
        "cost about 50 basis points less, because a negative basis lowers the implied US dollar rate",
        "cost about the same, because arbitrage keeps synthetic and direct dollar funding costs equal",
        "cost about 100 basis points more, because the basis is paid on both legs of the swap",
        "cost about 50 basis points more, because the implied US dollar rate exceeds the cash dollar rate"
      ],
      "answer": "D",
      "explanation": "By market convention the cross-currency basis is the spread added to the non-dollar leg, so a negative USD/JPY basis means a bank swapping yen into dollars effectively earns 50 basis points less than the yen rate on the yen it delivers. Its all-in synthetic dollar cost is therefore about the cash dollar rate plus 50 basis points: the dollar rate implied by the FX swap exceeds the cash dollar rate, a deviation from covered interest parity. Persistent negative bases since 2008 reflect strong demand from non-US banks and investors for dollar funding and hedging, combined with balance-sheet constraints that limit arbitrage.",
      "topic": "Liquidity and Treasury Risk Measurement and Management",
      "subtopic": "Cross-currency funding",
      "difficulty": "hard",
      "source": "Cross-currency funding: FX swaps, the cross-currency basis and deviations from covered interest parity"
    },
    {
      "stem": "An active equity manager has an information coefficient of 0.06 and makes 225 independent active bets per year. According to the fundamental law of active management, the manager's expected information ratio is closest to:",
      "options": [
        "0.004",
        "0.90",
        "3.67",
        "13.50"
      ],
      "answer": "B",
      "explanation": "The fundamental law of active management states that IR ≈ IC × √BR, so IR ≈ 0.06 × √225 = 0.06 × 15 = 0.90. Breadth enters as a square root because expected active return grows in proportion to the number of independent bets while active risk grows only with its square root. The result assumes truly independent bets and full implementation; correlated bets reduce effective breadth, and portfolio constraints reduce IR through a transfer coefficient below 1.",
      "topic": "Risk Management and Investment Management",
      "subtopic": "Portfolio construction",
      "difficulty": "easy",
      "source": "Portfolio construction: fundamental law of active management, IR = IC × √BR (Grinold and Kahn)"
    },
    {
      "stem": "A USD 10 million portfolio holds USD 6 million in asset A (annual return volatility 20%) and USD 4 million in asset B (annual return volatility 10%). The correlation between the returns of A and B is 0.5. Using parametric VaR with jointly normal returns, the percentage contribution of asset A to total portfolio VaR (its component VaR divided by portfolio VaR) is closest to:",
      "options": [
        "60.0%",
        "75.0%",
        "80.8%",
        "90.0%"
      ],
      "answer": "C",
      "explanation": "With jointly normal returns, VaR is proportional to the portfolio's standard deviation, so a position's percentage contribution equals its covariance with the portfolio divided by the portfolio variance, whatever the confidence level. In USD millions, portfolio variance is 1.2² + 0.4² + 2 × 0.5 × 1.2 × 0.4 = 2.08, and A's covariance with the portfolio is 1.2² + 0.5 × 1.2 × 0.4 = 1.68, so A contributes 1.68 / 2.08 ≈ 80.8%. Component VaRs add up to total VaR, and A's share exceeds both its 60% weight and its 75% share of stand-alone VaR because it is the more volatile asset and is positively correlated with the rest of the portfolio.",
      "topic": "Risk Management and Investment Management",
      "subtopic": "Portfolio risk measures",
      "difficulty": "hard",
      "source": "Portfolio risk: marginal, incremental and component VaR (Jorion)"
    },
    {
      "stem": "The reported returns of a private equity fund are based on infrequent, appraisal-based valuations, which smooth them relative to the true underlying returns. Compared with true economic returns, the smoothed reported returns most likely:",
      "options": [
        "understate volatility and correlation with public equities, and overstate the Sharpe ratio",
        "overstate volatility and correlation with public equities, and understate the Sharpe ratio",
        "understate the average return but leave volatility and correlations unchanged",
        "overstate volatility but leave the Sharpe ratio and correlations unchanged"
      ],
      "answer": "A",
      "explanation": "Appraisal-based valuations adjust slowly toward true values, so reported returns are serially correlated and less volatile than the underlying economic returns. The lagged response also lowers measured betas and correlations with public markets, making the asset look like a better diversifier, and the lower measured volatility inflates the Sharpe ratio. Unsmoothing techniques that remove the serial correlation produce higher, more realistic estimates of volatility and market exposure.",
      "topic": "Risk Management and Investment Management",
      "subtopic": "Hedge funds and private markets",
      "difficulty": "easy",
      "source": "Illiquid assets: biases in reported returns, appraisal smoothing (Ang, Asset Management)"
    },
    {
      "stem": "Which of the following is most consistent with the financial stability vulnerabilities of artificial intelligence (AI) adoption highlighted by international bodies such as the Financial Stability Board?",
      "options": [
        "Greater diversity in trading behavior, since each institution's AI models are trained on unique data",
        "Heavy reliance by many institutions on a small number of providers of cloud, hardware and pre-trained models",
        "Elimination of model risk, because AI models learn directly from data rather than from assumptions",
        "Reduced exposure to cyber risk, because AI tools remove the need for human access to systems"
      ],
      "answer": "B",
      "explanation": "The Financial Stability Board's 2024 report on AI highlights third-party dependencies and service-provider concentration, market correlations, cyber risks, and model risk, data quality and governance as the key vulnerabilities. Because many institutions rely on the same few providers of cloud computing, specialized hardware and pre-trained models, an outage or failure at one provider could affect many firms at once. Widespread use of similar models and data is expected to increase, not reduce, correlated behavior, and the opacity of complex models heightens rather than removes model risk.",
      "topic": "Current Issues in Financial Markets",
      "subtopic": "Artificial intelligence (AI)",
      "difficulty": "easy",
      "source": "FSB, The Financial Stability Implications of Artificial Intelligence (November 2024)"
    },
    {
      "stem": "Which of the following statements about the private credit market is most accurate?",
      "options": [
        "Most private credit is held in open-ended funds offering daily redemptions, creating large liquidity mismatches.",
        "Private credit loans are mainly extended to large investment-grade firms with public bond ratings.",
        "Most private credit loans pay floating rates, so borrowers' debt-service burdens rise quickly when policy rates rise.",
        "Private credit growth has come mainly from bank loan books rather than from nonbank investment vehicles."
      ],
      "answer": "C",
      "explanation": "Private credit consists mainly of floating-rate, often sponsor-backed loans to middle-market firms that are typically unrated and more leveraged than investment-grade issuers, so higher policy rates feed quickly into higher interest costs and weaker interest coverage. The asset class is held largely by closed-end funds with long-term committed capital, which limits run and redemption risk, and its growth has come from nonbank vehicles rather than bank loan books. Valuations are infrequent and model-based, which reduces transparency and may delay the recognition of losses.",
      "topic": "Current Issues in Financial Markets",
      "subtopic": "Private credit",
      "difficulty": "medium",
      "source": "IMF Global Financial Stability Report, April 2024, Chapter 2: The Rise and Risks of Private Credit"
    }
  ]
}
```
