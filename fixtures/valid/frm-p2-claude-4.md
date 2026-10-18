```json
{
  "format": "domcq/1",
  "exam": "frm-p2",
  "set": "FRM Exam Part II practice – Cross-syllabus mixed set",
  "questions": [
    {
      "stem": "Under the Fundamental Review of the Trading Book (FRTB), which of the following statements best describes the risk measure used in the internal models approach for market risk capital?",
      "options": [
        "A 99% VaR over a 10-day horizon is retained, with an expected shortfall add-on applied only to non-modellable risk factors.",
        "Expected shortfall at a 99% confidence level is applied over a uniform 10-day liquidity horizon for all risk factors.",
        "Expected shortfall at a 97.5% confidence level, calibrated to a period of significant stress, replaces both VaR and stressed VaR.",
        "Expected shortfall at a 97.5% confidence level is calibrated to the most recent 12 months of data, with no stress calibration."
      ],
      "answer": "C",
      "explanation": "FRTB replaced the Basel 2.5 combination of 99% VaR and stressed VaR with a single expected shortfall (ES) measure at a 97.5% confidence level, calibrated to a period of significant financial stress. ES captures the average size of losses beyond the quantile, which VaR ignores, and under normality 97.5% ES is close to 99% VaR in magnitude. FRTB also assigns risk factors to liquidity horizons ranging from 10 to 120 days instead of using a uniform 10-day horizon.",
      "rationales": {
        "A": "Wrong: FRTB removes VaR from the IMA capital measure; non-modellable risk factors receive a separate stressed capital add-on.",
        "B": "Wrong: the confidence level is 97.5%, not 99%, and liquidity horizons vary by risk factor from 10 to 120 days.",
        "C": "Correct: a single 97.5% ES calibrated to a stressed period replaces the Basel 2.5 pairing of VaR and stressed VaR.",
        "D": "Wrong: FRTB requires ES to be calibrated to a period of significant stress, not simply the latest year of data."
      },
      "topic": "Market Risk Measurement and Management",
      "subtopic": "Fundamental Review of the Trading Book (FRTB)",
      "difficulty": "easy",
      "source": "Market Risk Measurement and Management: FRTB internal models approach – expected shortfall at 97.5%, stress calibration and liquidity horizons"
    },
    {
      "stem": "A bank backtests its 1-day 99% VaR model over the most recent 250 trading days and records 7 exceptions. Under the original Basel traffic-light approach to backtesting, with a base multiplier of 3, which of the following is the most likely outcome?",
      "options": [
        "The model is in the green zone and the multiplier stays at 3.00.",
        "The model is in the yellow zone and the multiplier rises to 3.65.",
        "The model is in the yellow zone and the multiplier rises to 4.00.",
        "The model is in the red zone and the multiplier rises to 4.00."
      ],
      "answer": "B",
      "explanation": "With a 99% VaR over 250 days, about 2.5 exceptions are expected. The Basel traffic-light approach places 0–4 exceptions in the green zone, 5–9 in the yellow zone and 10 or more in the red zone. In the yellow zone the plus factor rises with the count (0.40, 0.50, 0.65, 0.75 and 0.85 for 5 to 9 exceptions), so 7 exceptions give a multiplier of 3 + 0.65 = 3.65. Yellow-zone results are treated as ambiguous: they may reflect bad luck or model weakness, and supervisors may ask the bank to explain them.",
      "rationales": {
        "A": "Wrong: the green zone covers only 0 to 4 exceptions; 7 exceptions places the model in the yellow zone.",
        "B": "Correct: 7 exceptions falls in the yellow zone (5–9), where the plus factor is 0.65, giving a multiplier of 3.65.",
        "C": "Wrong: a plus factor of 1.00 (multiplier 4.00) applies only in the red zone, at 10 or more exceptions.",
        "D": "Wrong: the red zone starts at 10 exceptions, so 7 exceptions is in the yellow zone."
      },
      "topic": "Market Risk Measurement and Management",
      "subtopic": "VaR and other risk measures",
      "difficulty": "medium",
      "source": "Market Risk Measurement and Management: Backtesting VaR – Basel traffic-light zones and plus factors"
    },
    {
      "stem": "A short-rate model follows the Vasicek process dr = k(θ − r)dt + σdw, with mean-reversion speed k = 0.25 per year, long-run rate θ = 5% and volatility σ = 1.2%. The current short rate is 2%. The expected short rate in 3 years is closest to:",
      "options": [
        "4.25%",
        "2.66%",
        "2.00%",
        "3.58%"
      ],
      "answer": "D",
      "explanation": "In the Vasicek model the drift k(θ − r) pulls the rate toward θ, and the expected gap from θ decays exponentially: E[r_T] = θ + (r_0 − θ)e^(−kT). With k = 0.25 and T = 3, e^(−0.75) ≈ 0.472, so the initial 3% gap shrinks to about 1.42% and the expected rate is 5% − 1.42% ≈ 3.58%. Volatility σ affects the dispersion of rates around this path, not the expected path itself. As a check, the half-life of the gap is ln(2)/k ≈ 2.77 years, so slightly more than half the gap should have closed after 3 years.",
      "rationales": {
        "A": "Wrong: 4.25% extrapolates the initial drift k(θ − r_0) linearly for 3 years, ignoring that the drift shrinks as r approaches θ.",
        "B": "Wrong: 2.66% applies the decay factor for one year only, e^(−0.25), instead of for three years.",
        "C": "Wrong: 2.00% assumes the expected rate stays at today's level, ignoring the mean-reverting drift.",
        "D": "Correct: E[r_3] = 5% + (2% − 5%)e^(−0.75) = 5% − 3% × 0.472 ≈ 3.58%."
      },
      "topic": "Market Risk Measurement and Management",
      "subtopic": "Term structure models of interest rates",
      "difficulty": "hard",
      "source": "Term structure models of interest rates: The Art of Term Structure Models: Drift – Vasicek model, mean reversion and half-life"
    },
    {
      "stem": "For equity index options, implied volatility typically declines as the strike price increases. Compared with a lognormal distribution having the same mean and standard deviation, the implied risk-neutral distribution of the index's future level is most likely to have:",
      "options": [
        "A heavier left tail and a thinner right tail",
        "A thinner left tail and a heavier right tail",
        "Heavier tails on both sides, symmetrically",
        "Thinner tails on both sides, symmetrically"
      ],
      "answer": "A",
      "explanation": "High implied volatility at low strikes means out-of-the-money puts are priced above what a lognormal model implies, which happens when large downward moves are more likely than the lognormal assumes, so the left tail is heavier. Low implied volatility at high strikes means out-of-the-money calls are relatively cheap, so the right tail is thinner. Common explanations are leverage (as equity falls, leverage and volatility rise) and crashophobia. A symmetric smile with heavier tails on both sides is the pattern typical of foreign currency options.",
      "rationales": {
        "A": "Correct: high implied volatility at low strikes implies large down moves are likelier than lognormal, and low implied volatility at high strikes implies a thinner right tail.",
        "B": "Wrong: this distribution would make implied volatility rise with the strike, the opposite of the observed equity skew.",
        "C": "Wrong: heavier tails on both sides produce a symmetric smile, the pattern typical of foreign currency options.",
        "D": "Wrong: thinner tails on both sides would produce a frown, with implied volatility lowest at both extreme strikes."
      },
      "topic": "Market Risk Measurement and Management",
      "subtopic": "Volatility: smiles and term structures",
      "difficulty": "medium",
      "source": "Volatility: smiles and term structures – volatility smiles for equity options versus foreign currency options and implied distributions"
    },
    {
      "stem": "A bank has an exposure at default of $10 million to a borrower with a one-year probability of default of 2% and an expected recovery rate of 60%. The one-year expected loss on this exposure is closest to:",
      "options": [
        "$200,000",
        "$80,000",
        "$120,000",
        "$4,000,000"
      ],
      "answer": "B",
      "explanation": "Expected loss is the product of probability of default, loss given default and exposure at default: EL = PD × LGD × EAD. Loss given default is 1 minus the recovery rate, so LGD = 40%, and EL = 2% × 40% × $10 million = $80,000. Expected loss is the mean of the loss distribution and is treated as a cost of doing business covered by pricing and provisions, while capital is held against unexpected loss.",
      "rationales": {
        "A": "Wrong: $200,000 is PD × EAD, which ignores that 60% of the exposure is expected to be recovered.",
        "B": "Correct: EL = PD × LGD × EAD = 2% × 40% × $10 million = $80,000.",
        "C": "Wrong: $120,000 uses the 60% recovery rate in place of the 40% loss given default.",
        "D": "Wrong: $4,000,000 is LGD × EAD, the loss if default occurs, and ignores the 2% probability of default."
      },
      "topic": "Credit Risk Measurement and Management",
      "subtopic": "Expected and unexpected loss",
      "difficulty": "easy",
      "source": "Expected and unexpected loss – expected loss as PD × LGD × EAD"
    },
    {
      "stem": "Which of the following transactions most likely creates wrong-way risk for the bank?",
      "options": [
        "The bank enters an oil swap with an oil producer under which the producer receives a fixed price for its future output.",
        "The bank enters an interest rate swap with a highly rated firm whose credit quality is unrelated to interest rates.",
        "The bank's derivative exposure to a counterparty is fully covered by daily cash variation margin in a major currency.",
        "The bank buys protection on a large domestic bank from another domestic bank whose default risk is highly correlated with it."
      ],
      "answer": "D",
      "explanation": "Wrong-way risk arises when exposure to a counterparty is adversely correlated with that counterparty's credit quality, so exposure tends to be largest when default is most likely. Buying credit protection on a bank from a highly correlated bank is a classic case: if the reference entity deteriorates, the protection gains value and the exposure to the seller rises just as the seller is also likely to be in distress. By contrast, an oil swap in which the producer receives a fixed price is right-way risk, because the bank is owed money when high oil prices make the producer financially strong.",
      "rationales": {
        "A": "Wrong: the swap gains value for the bank when oil prices rise, which is when the producer is strongest, so this is right-way risk.",
        "B": "Wrong: with no link between the counterparty's credit quality and the exposure, there is no wrong-way risk.",
        "C": "Wrong: daily cash variation margin in a major currency keeps exposure small and introduces no adverse correlation.",
        "D": "Correct: the protection is most valuable when the reference bank weakens, which is also when the correlated seller is likeliest to default."
      },
      "topic": "Credit Risk Measurement and Management",
      "subtopic": "Counterparty risk",
      "difficulty": "medium",
      "source": "Counterparty risk – wrong-way risk and right-way risk in derivatives and credit protection"
    },
    {
      "stem": "A $500 million securitization has three tranches: the equity tranche absorbs the first 5% of collateral pool losses, the mezzanine tranche absorbs losses from 5% to 15%, and the senior tranche absorbs losses above 15%. If cumulative collateral losses reach 8% of the pool, the percentage loss of principal on the mezzanine tranche is closest to:",
      "options": [
        "8%",
        "53%",
        "30%",
        "80%"
      ],
      "answer": "C",
      "explanation": "Losses flow through the waterfall from the most junior tranche upward. A loss of 8% on $500 million is $40 million; the equity tranche ($25 million, 5% thick) is wiped out first, and the remaining $15 million falls on the mezzanine tranche, which is $50 million (10% thick), a 30% loss. In general, tranche loss = min(max(L − attachment, 0), thickness) / thickness, and the senior tranche is untouched here because losses stay below its 15% attachment point.",
      "rationales": {
        "A": "Wrong: 8% is the pool loss rate; tranches absorb losses in order of seniority, not pro rata.",
        "B": "Wrong: 53% divides the 8% pool loss by the 15% detachment point instead of measuring the loss within the 10% tranche.",
        "C": "Correct: after equity absorbs the first 5%, the remaining 3% of pool losses equals 30% of the 10%-thick mezzanine tranche.",
        "D": "Wrong: 80% divides the full 8% pool loss by the 10% tranche thickness, ignoring the 5% absorbed by equity first."
      },
      "topic": "Credit Risk Measurement and Management",
      "subtopic": "Structured finance and securitization",
      "difficulty": "medium",
      "source": "Structured finance and securitization – tranching, attachment and detachment points, and the loss waterfall"
    },
    {
      "stem": "A firm's 5-year CDS spread is 180 basis points per year and the expected recovery rate is 40%. Assume a constant hazard rate approximated from the spread. The unconditional probability that the firm defaults during the second year, that is, between the end of year 1 and the end of year 2, is closest to:",
      "options": [
        "2.87%",
        "2.96%",
        "1.80%",
        "5.82%"
      ],
      "answer": "A",
      "explanation": "The spread compensates for expected loss, so the hazard rate is approximately λ = s / (1 − R) = 1.80% / 0.60 = 3.0%. With a constant hazard rate, survival to time t is S(t) = e^(−λt), so S(1) = e^(−0.03) ≈ 0.9704 and S(2) = e^(−0.06) ≈ 0.9418. The unconditional probability of default in year 2 is S(1) − S(2) ≈ 2.87%. This is lower than the conditional probability of about 2.96% because it also requires the firm to survive the first year.",
      "rationales": {
        "A": "Correct: λ = 1.8%/0.6 = 3%, and S(1) − S(2) = e^(−0.03) − e^(−0.06) ≈ 0.9704 − 0.9418 ≈ 2.87%.",
        "B": "Wrong: 2.96% = 1 − e^(−0.03) is the probability of default in year 2 conditional on surviving year 1.",
        "C": "Wrong: 1.80% is the spread itself; it reflects expected loss, so it must be divided by (1 − R) to obtain the hazard rate.",
        "D": "Wrong: 5.82% = 1 − e^(−0.06) is the cumulative probability of default over two years, not the probability within year 2."
      },
      "topic": "Credit Risk Measurement and Management",
      "subtopic": "Default risk: quantitative methodologies",
      "difficulty": "hard",
      "source": "Default risk: quantitative methodologies – hazard rates implied by credit spreads; cumulative, conditional and unconditional default probabilities"
    },
    {
      "stem": "Under the Basel III standardized approach for operational risk, minimum capital equals the business indicator component (BIC) multiplied by the internal loss multiplier (ILM). Which of the following statements about this approach is correct?",
      "options": [
        "The loss component equals 10 times a bank's average annual operational risk losses over the previous five years.",
        "Banks with supervisory approval may continue to use the advanced measurement approach to set minimum capital.",
        "The ILM rises above 1 when a bank's loss component is smaller than its business indicator component.",
        "When a bank's loss component equals its business indicator component, the ILM equals 1."
      ],
      "answer": "D",
      "explanation": "The ILM is ln(e − 1 + (LC/BIC)^0.8), where the loss component (LC) is 15 times a bank's average annual operational risk losses over the previous 10 years. When LC equals BIC, the expression inside the logarithm equals e, so the ILM is 1 and capital equals the BIC. Banks whose loss history is high relative to their BIC face an ILM above 1, and those with lower losses face an ILM below 1, linking capital to each bank's own loss experience. The standardized approach replaced all earlier approaches, including the AMA.",
      "rationales": {
        "A": "Wrong: the loss component is 15 times average annual operational risk losses, measured over the previous 10 years.",
        "B": "Wrong: the standardized approach replaces all previous approaches, including the AMA, for minimum capital.",
        "C": "Wrong: when the loss component is below the BIC, the ILM is below 1, which reduces capital rather than raising it.",
        "D": "Correct: ILM = ln(e − 1 + (LC/BIC)^0.8); with LC = BIC this equals ln(e) = 1, so capital equals the BIC."
      },
      "topic": "Operational Risk and Resilience",
      "subtopic": "Regulation and the Basel Accords",
      "difficulty": "medium",
      "source": "Regulation and the Basel Accords – Basel III: Finalising post-crisis reforms (BCBS, 2017), standardized approach for operational risk, BIC and ILM"
    },
    {
      "stem": "A business unit generates annual revenue of $50 million, incurs operating costs of $15 million and has expected losses of $10 million. It is allocated $100 million of economic capital, which earns the risk-free rate of 3%. Ignoring taxes and transfer pricing, the unit's RAROC is closest to:",
      "options": [
        "25%",
        "28%",
        "38%",
        "43%"
      ],
      "answer": "B",
      "explanation": "RAROC = (revenue − operating costs − expected loss + return on economic capital) / economic capital = (50 − 15 − 10 + 3) / 100 = 28%. Expected loss is deducted because it is a predictable cost of the business, while economic capital is the buffer held against unexpected loss. The return earned on that capital, assumed invested at the risk-free rate, is added because it is part of the unit's income.",
      "rationales": {
        "A": "Wrong: 25% omits the 3% return earned on the $100 million of economic capital.",
        "B": "Correct: (50 − 15 − 10 + 3) / 100 = 28%.",
        "C": "Wrong: 38% fails to deduct expected losses, which are a normal cost of the business.",
        "D": "Wrong: 43% fails to deduct operating costs, overstating risk-adjusted earnings."
      },
      "topic": "Operational Risk and Resilience",
      "subtopic": "Risk-adjusted return on capital (RAROC)",
      "difficulty": "easy",
      "source": "Risk-adjusted return on capital (RAROC) – RAROC formula: revenues, costs, expected loss, return on economic capital"
    },
    {
      "stem": "According to US supervisory guidance on model risk management (SR 11-7), which of the following is a core element of an effective model validation framework?",
      "options": [
        "Outcomes analysis that compares model outputs with actual outcomes, such as backtesting",
        "Validation carried out mainly by the model developers, who understand the model best",
        "Validation performed once, at initial implementation, unless the model later fails",
        "Exemption of vendor models from validation where the vendor's methods are proprietary"
      ],
      "answer": "A",
      "explanation": "SR 11-7 identifies three core elements of validation: evaluation of conceptual soundness, ongoing monitoring (including process verification and benchmarking), and outcomes analysis (including backtesting). Validation should provide effective challenge by staff with appropriate independence and competence, and it is an ongoing process, with each model reviewed periodically, at least annually. Vendor models are not exempt; banks should obtain appropriate information from vendors and can rely more on techniques such as benchmarking and outcomes analysis.",
      "rationales": {
        "A": "Correct: outcomes analysis, including backtesting, is one of the three core validation elements, with conceptual soundness and ongoing monitoring.",
        "B": "Wrong: SR 11-7 requires effective challenge by parties independent of model development.",
        "C": "Wrong: validation is ongoing, and models should be reviewed periodically, at least annually, for continued fitness for purpose.",
        "D": "Wrong: vendor models remain subject to validation, using vendor information, benchmarking and outcomes analysis."
      },
      "topic": "Operational Risk and Resilience",
      "subtopic": "Model risk and model validation",
      "difficulty": "easy",
      "source": "Model risk and model validation – SR 11-7 Supervisory Guidance on Model Risk Management, core elements of validation"
    },
    {
      "stem": "Which of the following statements regarding the Basel Committee's Principles for Operational Resilience is most accurate?",
      "options": [
        "Operational resilience is achieved mainly by reducing the probability of disruptions to zero through stronger preventive controls.",
        "Responsibility for operational resilience rests with the IT function, with the board informed only of major incidents.",
        "Banks should identify their critical operations and set a tolerance for disruption, assuming that disruptions will occur.",
        "Critical operations delivered by third parties fall outside the scope if service-level agreements are in place."
      ],
      "answer": "C",
      "explanation": "The BCBS principles define operational resilience as a bank's ability to deliver critical operations through disruption, starting from the premise that disruptions will happen rather than trying to prevent every one. Banks should identify critical operations, map the people, processes, technology and third parties they depend on, and set a tolerance for disruption for each, then test whether they can stay within it under severe but plausible scenarios. The board is responsible for approving and overseeing this approach, and dependencies on third parties remain within the bank's responsibility.",
      "rationales": {
        "A": "Wrong: the principles assume disruptions will occur and focus on continuing critical operations, not eliminating every disruption.",
        "B": "Wrong: the board is responsible for approving and overseeing the approach to operational resilience, not only the IT function.",
        "C": "Correct: banks should identify critical operations and set a tolerance for disruption, recognising that disruptions will happen.",
        "D": "Wrong: banks remain responsible for critical operations delivered by third parties and must manage those dependencies."
      },
      "topic": "Operational Risk and Resilience",
      "subtopic": "Cyber-resilience and operational resilience",
      "difficulty": "medium",
      "source": "Cyber-resilience and operational resilience – BCBS Principles for Operational Resilience (2021)"
    },
    {
      "stem": "A bank holds the following unencumbered assets: Level 1 assets of $200 million, Level 2A assets with a market value of $100 million, and Level 2B corporate bonds with a market value of $40 million. Apply haircuts of 15% to the Level 2A assets and 50% to the Level 2B assets; the Level 2 composition caps are not binding. Total expected cash outflows over the 30-day stress period are $600 million and total expected cash inflows are $500 million. Under Basel III, the bank's liquidity coverage ratio is closest to:",
      "options": [
        "305%",
        "203%",
        "227%",
        "51%"
      ],
      "answer": "B",
      "explanation": "The LCR is the stock of high-quality liquid assets divided by total net cash outflows over a 30-day stress period, and it must be at least 100%. After haircuts, HQLA = 200 + 0.85 × 100 + 0.50 × 40 = $305 million. Net outflows equal outflows minus the lesser of inflows and 75% of outflows: 600 − min(500, 450) = $150 million, so the LCR = 305 / 150 ≈ 203%. The 75% inflow cap ensures a bank always holds HQLA covering at least 25% of its stressed outflows.",
      "rationales": {
        "A": "Wrong: 305% nets the full $500 million of inflows; Basel III caps inflows at 75% of outflows, so net outflows are $150 million.",
        "B": "Correct: HQLA = 200 + 85 + 20 = $305 million; net outflows = 600 − min(500, 450) = $150 million; LCR ≈ 203%.",
        "C": "Wrong: 227% uses $340 million of HQLA at market value, ignoring the 15% and 50% haircuts.",
        "D": "Wrong: 51% divides HQLA by gross outflows and ignores the inflows the rule allows the bank to count."
      },
      "topic": "Liquidity and Treasury Risk Measurement and Management",
      "subtopic": "Liquidity risk principles and metrics",
      "difficulty": "hard",
      "source": "Liquidity risk principles and metrics – Basel III liquidity coverage ratio: HQLA levels, haircuts and the 75% inflow cap"
    },
    {
      "stem": "A bank's treasury charges all lending units a single pooled average cost of funds, regardless of loan maturity, while the yield curve and the bank's term liquidity premium are both upward sloping. Compared with a matched-maturity funds transfer pricing approach, which outcome is most likely?",
      "options": [
        "Short-term loans appear more profitable, encouraging the bank to shorten its asset maturities.",
        "Interest rate risk is transferred precisely to treasury, so lending units bear no maturity risk.",
        "Units gathering stable long-term deposits receive excess credit for the funding they provide.",
        "Long-term loans appear more profitable, encouraging excessive maturity transformation."
      ],
      "answer": "D",
      "explanation": "Matched-maturity FTP charges each asset, and credits each liability, at the bank's marginal funding rate for its maturity and repricing profile, including a term liquidity premium, so business-unit margins are cleanly separated from interest rate and liquidity risk held in treasury. A single pooled rate charges long-term loans less than their true term funding cost and short-term loans more, so long-term lending looks artificially profitable and liquidity risk is underpriced. This weakness encourages excessive maturity transformation, as seen at several banks before the 2007–2009 crisis.",
      "rationales": {
        "A": "Wrong: a pooled rate overcharges short-term loans relative to their matched-maturity cost, making them look less profitable.",
        "B": "Wrong: a single pooled rate does not match each asset's repricing profile, so maturity risk is not transferred precisely.",
        "C": "Wrong: stable long-term deposits are credited only the average rate, below their matched-maturity value, so they are undercompensated.",
        "D": "Correct: long-term loans are charged less than their true term funding cost, overstating their margins and encouraging maturity mismatch."
      },
      "topic": "Liquidity and Treasury Risk Measurement and Management",
      "subtopic": "Funds transfer pricing",
      "difficulty": "medium",
      "source": "Funds transfer pricing – pooled versus matched-maturity FTP and the term liquidity premium"
    },
    {
      "stem": "Which of the following is the most appropriate feature of a bank's contingency funding plan (CFP)?",
      "options": [
        "Early-warning indicators, escalation procedures and clear responsibilities, tested regularly",
        "Activation only after the bank has breached its regulatory minimum liquidity requirement",
        "Reliance on central bank lending facilities as the first source of contingent funding",
        "Funding assumptions based on business-as-usual market conditions and normal access"
      ],
      "answer": "A",
      "explanation": "A CFP sets out how a bank will address liquidity shortfalls in stressed conditions. Sound practice, as set out in the BCBS principles for liquidity risk management, calls for policies covering a range of stress scenarios, clear lines of responsibility, clear invocation and escalation procedures, and regular testing and updating. Early-warning indicators allow the bank to act before stress becomes acute, while central bank facilities are considered as a backstop rather than the first line of defence.",
      "rationales": {
        "A": "Correct: sound CFPs include early-warning indicators, clear invocation and escalation procedures, defined roles, and regular testing.",
        "B": "Wrong: a CFP should be triggered by early-warning signals well before regulatory minimums are breached.",
        "C": "Wrong: central bank facilities should be considered, but they are a backstop rather than the first source of funding.",
        "D": "Wrong: a CFP must address stressed conditions, in which normal funding sources may be unavailable."
      },
      "topic": "Liquidity and Treasury Risk Measurement and Management",
      "subtopic": "Contingency funding plan",
      "difficulty": "easy",
      "source": "Contingency funding plan – BCBS Principles for Sound Liquidity Risk Management and Supervision (2008), Principle 11"
    },
    {
      "stem": "A portfolio has a 1-day 95% VaR of $10 million. Position X makes up 60% of the portfolio's value and has a beta of 1.2 with respect to the portfolio. Using the parametric (delta-normal) approach, the component VaR of position X is closest to:",
      "options": [
        "$6.0 million",
        "$12.0 million",
        "$7.2 million",
        "$5.0 million"
      ],
      "answer": "C",
      "explanation": "Component VaR for position i equals its portfolio weight times its beta with respect to the portfolio times portfolio VaR: 0.6 × 1.2 × $10 million = $7.2 million. Because the weighted betas sum to one, component VaRs add up to total portfolio VaR, which makes them useful for risk budgeting. Here X uses 60% of the capital but contributes 72% of the risk, because its beta above 1 means it adds more than proportional risk to the portfolio.",
      "rationales": {
        "A": "Wrong: $6.0 million allocates VaR by portfolio weight alone, ignoring X's beta to the portfolio.",
        "B": "Wrong: $12.0 million is beta × portfolio VaR and omits X's 60% weight in the portfolio.",
        "C": "Correct: component VaR = weight × beta × portfolio VaR = 0.6 × 1.2 × $10 million = $7.2 million.",
        "D": "Wrong: $5.0 million divides the weight by the beta instead of multiplying them."
      },
      "topic": "Risk Management and Investment Management",
      "subtopic": "Portfolio risk measures",
      "difficulty": "medium",
      "source": "Portfolio risk measures – Portfolio Risk: Analytical Methods – marginal, incremental and component VaR"
    },
    {
      "stem": "Reported returns on illiquid assets such as private equity and direct real estate are often based on infrequent appraisals. Which of the following effects is most likely?",
      "options": [
        "Reported volatility and correlations with public markets are understated.",
        "Survivorship bias causes reported average returns to be understated.",
        "Appraisal lags produce negative autocorrelation in reported returns.",
        "Estimated betas with respect to public equity markets are overstated."
      ],
      "answer": "A",
      "explanation": "Appraisal-based valuations smooth returns because prices are observed infrequently and appraisers anchor on past values. Smoothing lowers measured volatility, creates positive autocorrelation, and understates correlations and betas with public markets, so illiquid assets look more attractive on a risk-adjusted basis than they are. Unsmoothing techniques can give better risk estimates, while survivorship and selection biases push reported average returns upward.",
      "rationales": {
        "A": "Correct: smoothing from stale appraisals lowers measured volatility and understates co-movement with public markets.",
        "B": "Wrong: survivorship bias drops failed funds and assets, so it biases reported average returns upward, not downward.",
        "C": "Wrong: appraisal lags carry past values forward, producing positive, not negative, autocorrelation in returns.",
        "D": "Wrong: stale prices respond slowly to market moves, so estimated betas are biased downward, not upward."
      },
      "topic": "Risk Management and Investment Management",
      "subtopic": "Asset liquidity",
      "difficulty": "medium",
      "source": "Asset liquidity – Illiquid Assets: biases in reported returns of illiquid asset classes and the illiquidity premium"
    },
    {
      "stem": "Over the past year, a portfolio returned 11% with a standard deviation of 20% and a beta of 1.2. The market portfolio returned 9% with a standard deviation of 15%, and the risk-free rate was 3%. Which of the following statements is correct?",
      "options": [
        "The portfolio has a negative Jensen's alpha but a higher Sharpe ratio than the market.",
        "The portfolio has a positive Jensen's alpha but a lower Treynor ratio than the market.",
        "The portfolio's M-squared measure exceeds the market return by 0.8 percentage points.",
        "The portfolio has a positive Jensen's alpha, but its M-squared measure equals the market return."
      ],
      "answer": "D",
      "explanation": "Jensen's alpha is 11% − [3% + 1.2 × (9% − 3%)] = +0.8%, and the Treynor ratio is (11% − 3%) / 1.2 ≈ 6.67% versus 6% for the market, so the portfolio looks better per unit of systematic risk. The Sharpe ratio, however, is (11% − 3%) / 20% = 0.40, equal to the market's (9% − 3%) / 15% = 0.40, so M-squared = 3% + 0.40 × 15% = 9%, the same as the market return. The measures disagree because the portfolio carries unrewarded idiosyncratic risk, which matters for Sharpe and M-squared (total risk) but not for alpha or Treynor (systematic risk).",
      "rationales": {
        "A": "Wrong: Jensen's alpha is 11% − (3% + 1.2 × 6%) = +0.8%, and the Sharpe ratio of 0.40 equals the market's.",
        "B": "Wrong: the Treynor ratio is 8%/1.2 ≈ 6.67%, above the market's 6%; a positive alpha with positive beta implies a higher Treynor ratio.",
        "C": "Wrong: M-squared = 3% + 0.40 × 15% = 9%, equal to the market return; 0.8% is Jensen's alpha, not an M-squared difference.",
        "D": "Correct: alpha is +0.8%, but the Sharpe ratio equals the market's 0.40, so M-squared is 9%, matching the market return."
      },
      "topic": "Risk Management and Investment Management",
      "subtopic": "Portfolio performance measurement and analysis",
      "difficulty": "hard",
      "source": "Portfolio performance measurement and analysis – Sharpe ratio, Treynor ratio, Jensen's alpha and M-squared"
    },
    {
      "stem": "Which of the following best describes the typical characteristics of private credit lending as it has grown since the global financial crisis?",
      "options": [
        "Fixed-rate bonds issued by investment-grade firms and traded actively on public exchanges",
        "Loans funded mainly by insured retail deposits and subject to bank capital requirements",
        "Floating-rate loans by non-bank lenders to middle-market firms, usually held to maturity",
        "Short-term loans with daily market pricing and deep secondary market trading liquidity"
      ],
      "answer": "C",
      "explanation": "Private credit is direct, privately negotiated lending by non-bank lenders such as private credit funds and business development companies, mainly to middle-market and often private-equity-backed firms. The loans are typically floating rate, held to maturity with little secondary trading, and funded by long-term committed capital from institutional investors such as pension funds and insurers. This structure limits run risk, but it brings opacity, infrequent model-based valuations and borrower vulnerability to higher interest rates.",
      "rationales": {
        "A": "Wrong: private credit consists mainly of privately negotiated loans, not publicly traded investment-grade bonds.",
        "B": "Wrong: private credit is provided by non-bank funds using institutional capital, not insured deposits under bank capital rules.",
        "C": "Correct: private credit is mostly floating-rate direct lending by non-banks to middle-market firms, typically held to maturity.",
        "D": "Wrong: private credit loans are illiquid, rarely traded and valued infrequently, often using models rather than market prices."
      },
      "topic": "Current Issues in Financial Markets",
      "subtopic": "Private credit",
      "difficulty": "easy",
      "source": "Current Issues in Financial Markets: Private credit (see also IMF Global Financial Stability Report, April 2024, Chapter 2 on private credit)"
    },
    {
      "stem": "Which of the following best describes a financial stability concern that regulators have raised about the growing use of artificial intelligence in financial services?",
      "options": [
        "Continuous learning lets AI models offset herding in real time, so their wider use mainly reduces procyclicality.",
        "Dependence on a few providers of models, data and cloud services, and similar models across firms, can create concentration and herding.",
        "Adoption is spread across many small vendors, so third-party concentration risk is negligible relative to other AI risks.",
        "Generative AI mainly raises conduct risk and has little interaction with existing cyber, model or data governance risks."
      ],
      "answer": "B",
      "explanation": "Supervisors such as the Financial Stability Board note that AI tends to amplify existing vulnerabilities rather than create entirely new ones. Key concerns include dependence on a small number of providers of foundation models, specialised hardware, data and cloud services, and greater market correlation if many firms use similar models and data, which could amplify herding and procyclicality. Cyber risk, model risk, data quality and governance are also highlighted as areas where AI can increase vulnerabilities.",
      "rationales": {
        "A": "Wrong: regulators warn that widespread use of similar AI models may amplify herding and procyclicality rather than reduce it.",
        "B": "Correct: concentration in a few providers and common models or data across firms are key AI-related financial stability concerns.",
        "C": "Wrong: AI supply chains are concentrated in a small number of large model, hardware and cloud providers, raising third-party risk.",
        "D": "Wrong: AI can amplify existing cyber, model risk and data governance vulnerabilities, not just conduct risk."
      },
      "topic": "Current Issues in Financial Markets",
      "subtopic": "Artificial intelligence (AI)",
      "difficulty": "medium",
      "source": "Current Issues in Financial Markets: Artificial intelligence (AI) – FSB report on the financial stability implications of AI (2024)"
    }
  ]
}
```
