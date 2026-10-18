```json
{
  "format": "domcq/1",
  "exam": "frm-p2",
  "set": "FRM Exam Part II practice – Full syllabus mixed set A",
  "questions": [
    {
      "stem": "A bank backtests its 99% one-day VaR model against actual trading outcomes over the most recent 250 trading days and records 7 exceptions. Under the traffic light approach in the Basel Committee's original framework for backtesting internal market risk models, which sets a minimum capital multiplier of 3, which of the following is most appropriate?",
      "options": [
        "The model is in the green zone, and the capital multiplier remains at 3.",
        "The model is in the yellow zone, and the capital multiplier increases from 3 to 3.65.",
        "The model is in the yellow zone, and the capital multiplier increases from 3 to 4.",
        "The model is in the red zone, and the capital multiplier increases from 3 to 4."
      ],
      "answer": "B",
      "explanation": "With 250 observations at 99% confidence, about 2.5 exceptions are expected by chance. The traffic light approach places 0–4 exceptions in the green zone, 5–9 in the yellow zone and 10 or more in the red zone. In the yellow zone the plus factor rises with the number of exceptions (0.40, 0.50, 0.65, 0.75 and 0.85 for 5 to 9 exceptions), so 7 exceptions raise the multiplier from 3 to 3.65; only the red zone applies the full plus factor of 1, for a multiplier of 4.",
      "topic": "Market Risk Measurement and Management",
      "subtopic": "VaR and other risk measures",
      "difficulty": "medium",
      "source": "Market Risk Measurement and Management – Backtesting VaR: Basel traffic light zones and plus factors"
    },
    {
      "stem": "Under the Vasicek model, the short rate follows dr = k(θ − r)dt + σdw. A risk manager estimates the speed of mean reversion k at 0.35 per year. The half-life of the short rate, defined as the expected time for the short rate to move halfway from its current level toward its long-run level θ, is closest to:",
      "options": [
        "0.24 years",
        "0.99 years",
        "1.43 years",
        "1.98 years"
      ],
      "answer": "D",
      "explanation": "In the Vasicek model the expected gap between the short rate and θ decays exponentially at rate k: E[r(t)] − θ = (r(0) − θ)e^(−kt). Setting e^(−kτ) = 0.5 gives a half-life τ = ln(2)/k = 0.6931/0.35 ≈ 1.98 years. A higher k means faster mean reversion and a shorter half-life, while the volatility σ has no effect on the half-life.",
      "topic": "Market Risk Measurement and Management",
      "subtopic": "Term structure models of interest rates",
      "difficulty": "medium",
      "source": "Market Risk Measurement and Management – Term structure models: drift and mean reversion in the Vasicek model (half-life)"
    },
    {
      "stem": "A risk manager plots Black-Scholes-Merton implied volatilities against strike prices for European options on a broad equity index, all with the same maturity. Which of the following patterns is she most likely to observe?",
      "options": [
        "Implied volatility declines as the strike price rises, consistent with a heavier left tail than the lognormal distribution.",
        "Implied volatility rises as the strike price rises, consistent with a heavier right tail than the lognormal distribution.",
        "Implied volatility is lowest for deep in- and out-of-the-money options, consistent with thinner tails than the lognormal.",
        "Implied volatility is the same for all strikes, consistent with the lognormal distribution assumed by the pricing model."
      ],
      "answer": "A",
      "explanation": "Equity index options typically show a volatility skew: low-strike options, such as out-of-the-money puts, trade at higher implied volatilities than high-strike options. This means the market-implied distribution has a fatter left tail and a thinner right tail than the lognormal, which is linked to leverage effects (falling equity prices raise leverage and volatility) and to fear of market crashes. A more symmetric smile with heavy tails on both sides is typical of foreign currency options.",
      "topic": "Market Risk Measurement and Management",
      "subtopic": "Volatility: smiles and term structures",
      "difficulty": "easy",
      "source": "Market Risk Measurement and Management – Volatility smiles: equity volatility skew and implied distributions"
    },
    {
      "stem": "Which of the following statements about the internal models approach under the Basel Committee's Fundamental Review of the Trading Book (FRTB) is correct?",
      "options": [
        "Capital is based on a 99% VaR and a stressed VaR, both calculated over a single 10-day horizon for all risk factors.",
        "Model approval is granted only for the bank as a whole, so individual trading desks are not tested separately.",
        "Capital is based on a 97.5% expected shortfall, with liquidity horizons of 10 to 120 days that vary by risk factor.",
        "Risk factors without enough real price observations are excluded from the capital calculation for that desk."
      ],
      "answer": "C",
      "explanation": "FRTB replaces the 99% VaR and stressed VaR of Basel 2.5 with expected shortfall at 97.5% confidence, calibrated to a period of significant stress, which captures the size of losses in the tail. Risk factors are assigned liquidity horizons of 10, 20, 40, 60 or 120 days to reflect how long positions take to exit or hedge in stressed markets, rather than a uniform 10-day horizon. Model approval is granted desk by desk, subject to backtesting and profit-and-loss attribution tests, and non-modellable risk factors are capitalized separately through a stressed scenario charge rather than ignored.",
      "topic": "Market Risk Measurement and Management",
      "subtopic": "Fundamental Review of the Trading Book (FRTB)",
      "difficulty": "medium",
      "source": "Market Risk Measurement and Management – Fundamental Review of the Trading Book: expected shortfall, liquidity horizons, desk-level approval"
    },
    {
      "stem": "In the Merton model of credit risk, a firm has a single zero-coupon debt issue with face value D maturing at time T, and the value of the firm's assets follows a lognormal process. The firm's equity is most appropriately valued as:",
      "options": [
        "A European put option on the firm's assets with a strike price equal to D",
        "A risk-free zero-coupon bond with face value D minus a European put on the firm's assets",
        "A European call option on the firm's debt with a strike price equal to the firm's asset value",
        "A European call option on the firm's assets with a strike price equal to D"
      ],
      "answer": "D",
      "explanation": "At maturity shareholders receive max(V_T − D, 0): if asset value exceeds the face value of debt they repay the debt and keep the residual, and otherwise limited liability lets them walk away with nothing. That payoff is exactly a European call on the firm's assets with strike D, so equity can be valued with the Black-Scholes-Merton formula. The risky debt, by contrast, is worth a risk-free bond with face value D minus a put on the assets, and that put measures the value of the default option held by shareholders.",
      "topic": "Credit Risk Measurement and Management",
      "subtopic": "Default risk: quantitative methodologies",
      "difficulty": "easy",
      "source": "Credit Risk Measurement and Management – Default risk: quantitative methodologies, Merton structural model"
    },
    {
      "stem": "A bank holds a single loan with exposure at default of USD 10 million, a one-year probability of default of 2% and a loss given default of 40%. Treating exposure at default and loss given default as constants, the unexpected loss of the loan, measured as the standard deviation of the one-year credit loss, is closest to:",
      "options": [
        "USD 80,000",
        "USD 196,000",
        "USD 560,000",
        "USD 840,000"
      ],
      "answer": "C",
      "explanation": "With constant EAD and LGD, the loss equals EAD × LGD with probability PD and zero otherwise, so its standard deviation is EAD × LGD × √(PD × (1 − PD)). Here √(0.02 × 0.98) = √0.0196 = 0.14, giving UL = 10,000,000 × 0.40 × 0.14 = USD 560,000. Expected loss is only EAD × PD × LGD = USD 80,000; it is the much larger unexpected loss that drives the economic capital the bank must hold.",
      "topic": "Credit Risk Measurement and Management",
      "subtopic": "Expected and unexpected loss",
      "difficulty": "medium",
      "source": "Credit Risk Measurement and Management – Expected and unexpected loss of a single credit exposure"
    },
    {
      "stem": "Which of the following positions most clearly exposes a bank to wrong-way risk?",
      "options": [
        "The bank pays fixed and receives the floating oil price in a swap with an oil producer that is hedging its future output.",
        "The bank sells a call option on an equity index to a highly rated insurer and receives the full option premium upfront.",
        "The bank enters an interest rate swap with a corporate under a CSA requiring daily cash variation margin with zero threshold.",
        "The bank buys CDS protection on a domestic bank from a second domestic bank whose credit quality moves closely with the first."
      ],
      "answer": "D",
      "explanation": "Wrong-way risk arises when exposure to a counterparty tends to rise as that counterparty's credit quality worsens. When protection is bought from a seller whose credit is closely linked to the reference entity, the CDS gains value just as the seller becomes most likely to default, so the protection may fail exactly when it is needed. In the oil swap the bank's exposure grows when oil prices rise, which is when the producer is doing well (right-way risk), and a sold option creates no exposure to the buyer once the premium has been received.",
      "topic": "Credit Risk Measurement and Management",
      "subtopic": "Counterparty risk",
      "difficulty": "medium",
      "source": "Credit Risk Measurement and Management – Counterparty risk: wrong-way and right-way risk"
    },
    {
      "stem": "A synthetic CDO references a USD 100 million portfolio and has three tranches: equity (0%–5%), mezzanine (5%–15%) and senior (15%–100%). Over the life of the deal, reference entities representing 12% of the portfolio notional default, with an average recovery rate of 40%, and there are no other losses. Losses are allocated strictly from the bottom of the capital structure upward. The loss suffered by the mezzanine tranche, as a percentage of the mezzanine tranche's notional, is closest to:",
      "options": [
        "22%",
        "44%",
        "70%",
        "72%"
      ],
      "answer": "A",
      "explanation": "Portfolio credit loss is defaulted notional times loss given default: 12% × (1 − 0.40) = 7.2% of the portfolio, or USD 7.2 million. The equity tranche absorbs the first USD 5 million, leaving USD 2.2 million for the mezzanine tranche, whose notional is USD 10 million (5%–15% of the portfolio), a 22% loss. A tranche's loss depends on how far portfolio losses, not gross defaults, exceed its attachment point, measured relative to the tranche's thickness.",
      "topic": "Credit Risk Measurement and Management",
      "subtopic": "Structured finance and securitization",
      "difficulty": "hard",
      "source": "Credit Risk Measurement and Management – Structured finance and securitization: tranche attachment/detachment and loss allocation"
    },
    {
      "stem": "A bank pays a regulatory fine and compensation to clients after its advisers sold complex structured products to retail clients for whom the products were unsuitable. There was no intent by any employee to defraud the clients or the bank. Under the Basel Committee's Level 1 operational risk event types, this loss is most appropriately classified as:",
      "options": [
        "Internal fraud",
        "Execution, delivery and process management",
        "Clients, products and business practices",
        "Employment practices and workplace safety"
      ],
      "answer": "C",
      "explanation": "The clients, products and business practices category covers losses from an unintentional or negligent failure to meet a professional obligation to clients, including suitability, fiduciary and disclosure requirements, or from the nature or design of a product. Mis-selling unsuitable products falls squarely within it. Internal fraud requires intent by an insider to defraud, misappropriate property or circumvent rules, while execution, delivery and process management covers failed transaction processing and process management, such as data entry or settlement errors.",
      "topic": "Operational Risk and Resilience",
      "subtopic": "Identification, classification, and reporting of operational risks",
      "difficulty": "easy",
      "source": "Operational Risk and Resilience – Basel operational risk event type classification (Level 1 categories)"
    },
    {
      "stem": "A business unit expects annual revenue of USD 5.0 million from a loan portfolio, with operating costs of USD 1.5 million and expected credit losses of USD 1.0 million. The economic capital allocated to the portfolio is USD 8.0 million, and it earns the risk-free rate of 4%. Ignoring taxes and transfer pricing adjustments, the portfolio's risk-adjusted return on capital (RAROC) is closest to:",
      "options": [
        "31.3%",
        "35.3%",
        "47.8%",
        "54.0%"
      ],
      "answer": "B",
      "explanation": "RAROC divides risk-adjusted net income by economic capital: (revenue − costs − expected loss + return on economic capital) / economic capital. The return on capital is 4% × 8.0 = USD 0.32 million, so risk-adjusted income is 5.0 − 1.5 − 1.0 + 0.32 = USD 2.82 million and RAROC = 2.82 / 8.0 ≈ 35.3%. Expected loss is deducted in the numerator as a cost of doing business, while unexpected loss enters through the economic capital in the denominator.",
      "topic": "Operational Risk and Resilience",
      "subtopic": "Risk-adjusted return on capital (RAROC)",
      "difficulty": "medium",
      "source": "Operational Risk and Resilience – Risk-adjusted return on capital (RAROC): definition and components"
    },
    {
      "stem": "Which of the following statements about the Basel III standardized approach for operational risk capital is correct?",
      "options": [
        "The loss component equals 15 times the bank's average annual operational risk losses over the previous 10 years.",
        "Banks may continue to use the advanced measurement approach instead of the standardized approach if supervisors approve.",
        "The business indicator component applies one 15% coefficient to the business indicator of every bank, whatever its size.",
        "The internal loss multiplier is capped at 1, so a bank's loss history can reduce its capital but can never increase it."
      ],
      "answer": "A",
      "explanation": "Under the Basel III standardized approach, capital equals the business indicator component (BIC) times the internal loss multiplier (ILM). The BIC applies marginal coefficients of 12%, 15% and 18% to successive business indicator buckets, and ILM = ln(exp(1) − 1 + (LC/BIC)^0.8), where the loss component LC is 15 times average annual operational risk losses over the past 10 years. When LC exceeds the BIC the ILM is above 1, so banks with heavy loss histories hold more capital, and the AMA and the other earlier approaches are withdrawn.",
      "topic": "Operational Risk and Resilience",
      "subtopic": "Regulation and the Basel Accords",
      "difficulty": "medium",
      "source": "Basel III: Finalising post-crisis reforms (BCBS, 2017) – standardized approach for operational risk (BIC, loss component, ILM)"
    },
    {
      "stem": "Which of the following statements is most consistent with the Basel Committee's Principles for Operational Resilience (2021)?",
      "options": [
        "Banks should seek to make critical operations resilient mainly by preventing every disruption before it can occur.",
        "Banks should identify their critical operations and set a tolerance for disruption for each, assuming disruptions will occur.",
        "Operational resilience is mainly a technology matter, so the board can delegate its oversight entirely to the IT function.",
        "Mapping of interconnections should cover internal people, processes and systems but exclude services provided by third parties."
      ],
      "answer": "B",
      "explanation": "The BCBS principles define operational resilience as a bank's ability to deliver critical operations through disruption, and they start from the assumption that disruptions will happen rather than that all of them can be prevented. Banks are expected to identify their critical operations, set a tolerance for disruption for each, and test that they can stay within it under severe but plausible scenarios. The board is responsible for oversight of the approach, and the mapping of interconnections and interdependencies explicitly includes third-party and intragroup arrangements.",
      "topic": "Operational Risk and Resilience",
      "subtopic": "Cyber-resilience and operational resilience",
      "difficulty": "easy",
      "source": "BCBS Principles for Operational Resilience (March 2021) – critical operations and tolerance for disruption"
    },
    {
      "stem": "A bank reports the following under the Basel III liquidity coverage ratio (LCR) framework: Level 1 assets of USD 80 million, Level 2A assets with a market value of USD 50 million, no Level 2B assets, total stressed cash outflows over the next 30 days of USD 200 million and total stressed cash inflows over the same period of USD 170 million. None of its HQLA is affected by secured funding transactions. Applying the standard Basel III haircut on Level 2A assets and the Basel III caps, the bank's LCR is closest to:",
      "options": [
        "245%",
        "260%",
        "408%",
        "433%"
      ],
      "answer": "A",
      "explanation": "Level 2A assets carry a 15% haircut, so HQLA = 80 + 0.85 × 50 = USD 122.5 million, and Level 2 assets make up about 35% of HQLA, within the 40% cap. Inflows can offset at most 75% of outflows, so recognized inflows are 0.75 × 200 = USD 150 million rather than 170 million, and net cash outflows are 200 − 150 = USD 50 million. The LCR is therefore 122.5 / 50 = 245%; the inflow cap ensures a bank always holds HQLA against at least 25% of its stressed outflows.",
      "topic": "Liquidity and Treasury Risk Measurement and Management",
      "subtopic": "Liquidity risk principles and metrics",
      "difficulty": "hard",
      "source": "Basel III: The Liquidity Coverage Ratio and liquidity risk monitoring tools (BCBS, 2013) – HQLA haircuts and caps, 75% inflow cap"
    },
    {
      "stem": "A bank funds itself mainly with short-term deposits and currently uses a single pool rate, equal to its average cost of funds, to charge all assets and credit all liabilities. The yield curve is upward sloping. If the bank replaces this with a matched-maturity funds transfer pricing (FTP) system, which of the following outcomes is most likely?",
      "options": [
        "The reported margin on long-term fixed-rate loans rises, because the pool rate overstated their true funding cost.",
        "Lending units become responsible for hedging the interest rate mismatch between their assets and the bank's funding.",
        "Short-term retail deposits receive a higher FTP credit than long-term fixed-rate deposits of the same amount.",
        "The reported margin on long-term fixed-rate loans falls, and the maturity mismatch risk is transferred to central treasury."
      ],
      "answer": "D",
      "explanation": "Under matched-maturity FTP each asset and liability is priced off the point on the funding curve that matches its repricing or liquidity term. With an upward-sloping curve and mainly short-term funding, the old pool rate was below long-term funding rates, so long-term fixed-rate loans were implicitly subsidized and looked more profitable than they were; matched-maturity pricing raises their charge and lowers their reported margin. Because business units are charged and credited at term-matched rates, the interest rate and liquidity mismatch is isolated in treasury, which manages it centrally, and longer-term deposits, being more valuable funding, earn the higher credit.",
      "topic": "Liquidity and Treasury Risk Measurement and Management",
      "subtopic": "Funds transfer pricing",
      "difficulty": "hard",
      "source": "Liquidity and Treasury Risk Measurement and Management – Funds transfer pricing: pool-rate versus matched-maturity methods"
    },
    {
      "stem": "A euro-area bank needs US dollar funding and can obtain it either by borrowing dollars directly in the money market or by borrowing euros and swapping them into dollars through an FX swap. The EUR/USD cross-currency basis is significantly negative. Which of the following statements is most accurate?",
      "options": [
        "Swapping euros into dollars costs less than covered interest parity implies, reflecting an abundant supply of dollar funding.",
        "Swapping euros into dollars costs more than covered interest parity implies, reflecting strong demand for dollar funding.",
        "The negative basis arises mainly because euro money-market interest rates are higher than dollar money-market rates.",
        "The negative basis removes the bank's dollar rollover risk, because FX swaps lock in funding until its dollar assets mature."
      ],
      "answer": "B",
      "explanation": "The cross-currency basis measures the deviation from covered interest parity. A negative EUR/USD basis means the dollar rate implied by swapping euros (the euro rate adjusted by the forward premium) exceeds the direct dollar rate, so hedged dollar funding carries a premium that non-US banks pay when demand for dollars is high and arbitrage is limited by balance sheet constraints. Interest rate differentials are already reflected in the forward points, so they do not by themselves create a basis, and short-dated FX swaps add rather than remove rollover risk.",
      "topic": "Liquidity and Treasury Risk Measurement and Management",
      "subtopic": "Cross-currency funding",
      "difficulty": "medium",
      "source": "Liquidity and Treasury Risk Measurement and Management – Cross-currency funding: FX swaps and the cross-currency basis"
    },
    {
      "stem": "An active equity manager has an information coefficient of 0.04 and wants to achieve an information ratio of 0.6. According to the fundamental law of active management, and assuming the manager's bets are independent, the number of independent bets per year (breadth) required is closest to:",
      "options": [
        "15",
        "56",
        "225",
        "900"
      ],
      "answer": "C",
      "explanation": "The fundamental law states that IR ≈ IC × √BR, where breadth BR is the number of independent active bets per year. Solving for breadth gives BR = (IR / IC)² = (0.6 / 0.04)² = 15² = 225. Because breadth enters through a square root, a manager with modest skill needs many independent bets to reach a high information ratio, and correlated bets add less breadth than their raw count suggests.",
      "topic": "Risk Management and Investment Management",
      "subtopic": "Portfolio construction",
      "difficulty": "medium",
      "source": "Risk Management and Investment Management – Fundamental law of active management (IR = IC × √BR)"
    },
    {
      "stem": "A hedge fund database adds a fund that has just begun reporting to it and also loads the fund's returns for the three years before it joined. Which of the following best describes the most likely effect of this practice on the average returns reported by the database?",
      "options": [
        "Average reported returns are biased downward, because funds tend to start reporting after a period of weak results.",
        "Average reported returns are unaffected, because backfilled returns are audited before they enter the database.",
        "Average reported returns are biased downward, because only funds that have since liquidated report backfilled histories.",
        "Average reported returns are biased upward, because funds tend to start reporting after a period of strong results."
      ],
      "answer": "D",
      "explanation": "This is backfill, or instant history, bias. Hedge funds report to databases voluntarily, and managers tend to start reporting once they have built a good track record, so the history added at entry is disproportionately favorable. Including it inflates average database returns, adding to the upward bias from survivorship, which arises when funds that perform badly stop reporting and drop out of the database.",
      "topic": "Risk Management and Investment Management",
      "subtopic": "Hedge funds and private markets",
      "difficulty": "easy",
      "source": "Risk Management and Investment Management – Hedge funds: database biases (backfill and survivorship)"
    },
    {
      "stem": "A portfolio holds USD 60 million in asset X and USD 40 million in asset Y. Annual return volatilities are 20% for X and 30% for Y, the correlation between their returns is 0.25, and returns are normally distributed with zero mean. Using a 95% confidence level (z = 1.645) and a one-year horizon, the diversification benefit, defined as undiversified VaR minus diversified portfolio VaR, is closest to:",
      "options": [
        "USD 8.3 million",
        "USD 11.6 million",
        "USD 31.2 million",
        "USD 39.5 million"
      ],
      "answer": "A",
      "explanation": "Dollar volatilities are 0.20 × 60 = USD 12 million for X and 0.30 × 40 = USD 12 million for Y. Portfolio variance is 12² + 12² + 2 × 0.25 × 12 × 12 = 360, so portfolio volatility is about USD 18.97 million and diversified VaR = 1.645 × 18.97 ≈ USD 31.2 million. Undiversified VaR, the sum of the individual VaRs and equivalent to assuming perfect correlation, is 1.645 × 24 ≈ USD 39.5 million, so the diversification benefit is about USD 8.3 million; it would be larger, about USD 11.6 million, if the correlation were zero.",
      "topic": "Risk Management and Investment Management",
      "subtopic": "Portfolio risk measures",
      "difficulty": "hard",
      "source": "Risk Management and Investment Management – Portfolio risk: analytical methods, diversified versus undiversified VaR"
    },
    {
      "stem": "Which of the following statements about the private credit market is most accurate?",
      "options": [
        "Private credit funds rely mainly on short-term retail deposits, which makes them highly exposed to sudden bank-style runs.",
        "Most private credit loans pay a floating rate, so higher policy rates raise borrowers' debt service and weaken interest coverage.",
        "Private credit loans are valued daily using observable market prices, so reported returns tend to overstate their volatility.",
        "Private credit borrowers are mostly large investment-grade firms that could easily issue bonds in public markets instead."
      ],
      "answer": "B",
      "explanation": "Private credit consists mainly of direct loans by non-bank lenders, often to middle-market, private-equity-sponsored firms that are smaller and more leveraged than typical public bond issuers. Because these loans are predominantly floating rate, higher policy rates pass straight through to borrowers' interest costs, squeezing interest coverage and raising default risk. The funds are financed largely by long-term committed capital from institutional investors rather than deposits, and loans are valued infrequently using models, which tends to smooth reported returns and understate volatility.",
      "topic": "Current Issues in Financial Markets",
      "subtopic": "Private credit",
      "difficulty": "medium",
      "source": "Current Issues in Financial Markets – Private credit: market structure, borrower profile and vulnerabilities"
    },
    {
      "stem": "Which of the following is most likely to be identified by financial authorities as a financial stability vulnerability arising from the growing use of artificial intelligence (AI) in finance?",
      "options": [
        "AI models trained on very large data sets remove model risk, so firms can scale back independent model validation.",
        "AI systems eliminate cyber risk, because automated defenses can detect and block every type of malicious attack.",
        "Reliance on a few providers of AI models and cloud services, and use of similar models, could raise concentration and herding risk.",
        "AI adoption reduces dependence on third parties, because most firms build and host their AI models entirely in-house."
      ],
      "answer": "C",
      "explanation": "Authorities such as the Financial Stability Board highlight third-party dependencies and concentration among a small number of providers of AI models, cloud computing and specialized hardware, together with market correlations that can arise when many firms use similar models and data and react to shocks in the same way. These channels can transmit and amplify stress across the financial system. AI also adds to, rather than removes, model risk, data quality and governance challenges, and cyber risk, since attackers can use the same tools.",
      "topic": "Current Issues in Financial Markets",
      "subtopic": "Artificial intelligence (AI)",
      "difficulty": "easy",
      "source": "Current Issues in Financial Markets – Artificial intelligence: financial stability implications of AI (FSB, 2024)"
    }
  ]
}
```
