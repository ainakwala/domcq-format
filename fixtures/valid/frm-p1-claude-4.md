```json
{
  "format": "domcq/1",
  "exam": "frm-p1",
  "set": "FRM Exam Part I practice – Mixed Core Review",
  "questions": [
    {
      "stem": "According to the Capital Asset Pricing Model, a stock has a beta of 1.2. The risk-free rate is 3% and the expected return on the market portfolio is 8%. The expected return on the stock is closest to:",
      "options": [
        "8.0%",
        "9.0%",
        "9.6%",
        "12.6%"
      ],
      "answer": "B",
      "explanation": "CAPM gives E(R) = Rf + beta x (E(Rm) - Rf) = 3% + 1.2 x (8% - 3%) = 9.0%. The market risk premium of 5% is scaled by the stock's systematic risk, and the risk-free rate is added back as compensation for the time value of money.",
      "rationales": {
        "A": "8.0% is the market's expected return, which would apply to a stock with a beta of 1.0, not 1.2.",
        "B": "Correct: 3% + 1.2 x (8% - 3%) = 9.0%.",
        "C": "9.6% multiplies beta by the full market return (1.2 x 8%) instead of by the market risk premium, and it omits the risk-free rate.",
        "D": "12.6% adds the risk-free rate to beta times the full market return instead of beta times the market risk premium."
      },
      "topic": "Foundations of Risk Management",
      "subtopic": "The Capital Asset Pricing Model (CAPM)",
      "difficulty": "easy",
      "source": "Foundations of Risk Management: The Capital Asset Pricing Model (CAPM), security market line"
    },
    {
      "stem": "A portfolio manager returned 10.5% over the past year against a benchmark return of 8.0%. The risk-free rate was 3.0%, the standard deviation of the portfolio's returns was 12.5%, and the tracking error relative to the benchmark was 2.5%. The portfolio's information ratio is closest to:",
      "options": [
        "0.20",
        "0.60",
        "1.00",
        "3.00"
      ],
      "answer": "C",
      "explanation": "The information ratio is the active return divided by the tracking error: (10.5% - 8.0%) / 2.5% = 1.00. It measures the active return earned per unit of active risk taken relative to the benchmark. The Sharpe ratio, by contrast, divides the excess return over the risk-free rate by total volatility.",
      "rationales": {
        "A": "0.20 divides the active return by the portfolio's total standard deviation (2.5% / 12.5%), which mixes the wrong risk measure.",
        "B": "0.60 is the Sharpe ratio, (10.5% - 3.0%) / 12.5%, not the information ratio.",
        "C": "Correct: active return of 2.5% divided by tracking error of 2.5% gives 1.00.",
        "D": "3.00 divides the return over the risk-free rate by tracking error, mixing a Sharpe-style numerator with an active-risk denominator."
      },
      "topic": "Foundations of Risk Management",
      "subtopic": "Risk-adjusted performance measurement",
      "difficulty": "medium",
      "source": "Foundations of Risk Management: Risk-adjusted performance measurement, information ratio and tracking error"
    },
    {
      "stem": "The 1995 collapse of Barings Bank is widely cited in the risk management literature on financial disasters. Which of the following was a principal control failure at Barings?",
      "options": [
        "One trader controlled both trading and back-office settlement, so losses could be hidden",
        "Large mortgage-backed securities positions lost value when interest rates rose sharply",
        "A value-at-risk model calibrated on too short a data history understated the risk",
        "A single borrower's default breached the bank's concentration limit on its loan book"
      ],
      "answer": "A",
      "explanation": "At Barings, Nick Leeson headed both the trading desk and the settlement operation in Singapore, which let him conceal losses from unauthorised Nikkei futures and options positions. The case illustrates the importance of segregation of duties and of independent middle- and back-office oversight.",
      "rationales": {
        "A": "Correct: Leeson headed both trading and settlement in Singapore, so no independent check existed on his positions.",
        "B": "The losses came from unauthorised Nikkei futures and options positions, not from mortgage-backed securities.",
        "C": "Barings failed through weak controls and concealed unauthorised trading, not through a mis-calibrated VaR model.",
        "D": "The collapse stemmed from trading losses, not from a borrower default or a breached loan concentration limit."
      },
      "topic": "Foundations of Risk Management",
      "subtopic": "Financial disasters and risk management failures",
      "difficulty": "easy",
      "source": "Foundations of Risk Management: Financial disasters and risk management failures, Barings Bank case"
    },
    {
      "stem": "A bank's credit risk function reports to the Chief Risk Officer and is independent of the business lines. It sets credit limits, monitors exposures against those limits and challenges the business lines' risk assessments. Under the three lines of defense model, which of the following best describes this function?",
      "options": [
        "First line, because it takes and owns the credit risk on behalf of the bank's business",
        "Third line, because it gives the board independent assurance on the bank's internal controls",
        "Outside the model, because only the board and the external auditors oversee risk",
        "Second line, because it independently oversees and challenges the business's risk-taking"
      ],
      "answer": "D",
      "explanation": "In the three lines of defense model, the business units that take and own risk are the first line, independent risk management and compliance functions that set policy, monitor limits and challenge the business are the second line, and internal audit is the third line. The function described oversees risk-taking without owning it, so it sits in the second line.",
      "rationales": {
        "A": "The first line is the business units that originate and own risk; this function is independent of them, so it cannot be the first line.",
        "B": "The third line is internal audit, which gives independent assurance; it does not set limits or monitor exposures day to day.",
        "C": "The model places independent risk management inside the firm as the second line, so the board and external auditors are not the only overseers.",
        "D": "Correct: independent risk management that sets limits, monitors exposures and challenges the business is the second line."
      },
      "topic": "Foundations of Risk Management",
      "subtopic": "Risk governance and corporate governance",
      "difficulty": "medium",
      "source": "Foundations of Risk Management: Risk governance and corporate governance, three lines of defense"
    },
    {
      "stem": "A portfolio contains 10 independent loans, each with a one-year probability of default of 10%. The probability that at least one loan defaults within the year is closest to:",
      "options": [
        "10.0%",
        "34.9%",
        "65.1%",
        "100.0%"
      ],
      "answer": "C",
      "explanation": "Defaults are independent, so the number of defaults follows a binomial distribution and the probability of no default is 0.9^10 = 34.9%. The probability of at least one default is the complement, 1 - 0.349 = 65.1%. Adding the individual probabilities (10 x 10% = 100%) overstates the result because it double counts outcomes with several defaults.",
      "rationales": {
        "A": "10.0% is a single loan's default probability; with ten loans the chance of at least one default is much higher.",
        "B": "34.9% is the probability that no loan defaults (0.9^10), the complement of the event asked about.",
        "C": "Correct: 1 - 0.9^10 = 1 - 0.349 = 65.1%.",
        "D": "100.0% adds the ten 10% probabilities, which double counts multiple-default outcomes; a default is not certain."
      },
      "topic": "Quantitative Analysis",
      "subtopic": "Discrete and continuous probability distributions",
      "difficulty": "medium",
      "source": "Quantitative Analysis: Discrete and continuous probability distributions, binomial distribution"
    },
    {
      "stem": "Two percent of a bank's corporate borrowers default within a year. An early-warning model flags 90% of the borrowers that go on to default, and it also flags 10% of the borrowers that do not default. A borrower is flagged. The probability that this borrower will default is closest to:",
      "options": [
        "1.8%",
        "15.5%",
        "50.0%",
        "90.0%"
      ],
      "answer": "B",
      "explanation": "Bayes' theorem gives P(default | flag) = P(flag | default) x P(default) / P(flag). Here P(flag) = 0.90 x 0.02 + 0.10 x 0.98 = 0.116, so the posterior is 0.018 / 0.116, or about 15.5%. The low base rate of default means most flagged borrowers are false positives.",
      "rationales": {
        "A": "1.8% is the joint probability of default and a flag (0.90 x 0.02), not the probability of default given a flag.",
        "B": "Correct: 0.018 / 0.116 is about 15.5%.",
        "C": "50.0% has no basis in the numbers and ignores the 2% base rate of default.",
        "D": "90.0% is the probability of a flag given default, the reverse of the conditional probability asked for."
      },
      "topic": "Quantitative Analysis",
      "subtopic": "Bayesian analysis",
      "difficulty": "medium",
      "source": "Quantitative Analysis: Bayesian analysis, Bayes' theorem and conditional probability"
    },
    {
      "stem": "In a two-sided test of the null hypothesis that a fund's mean excess return is zero, the p-value is 0.03. Which of the following statements is correct?",
      "options": [
        "There is a 3% probability that the null hypothesis is true given the sample evidence",
        "There is a 3% probability of failing to reject the null hypothesis when it is false",
        "The null hypothesis is rejected at the 1% significance level but not at the 5% level",
        "If the null hypothesis were true, a result at least this extreme would occur 3% of the time"
      ],
      "answer": "D",
      "explanation": "The p-value is the probability of obtaining a test statistic at least as extreme as the one observed, assuming the null hypothesis is true. It is not the probability that the null is true, and it is not the Type II error probability. A p-value of 0.03 is below 5% but above 1%, so the null is rejected at the 5% level but not at the 1% level.",
      "rationales": {
        "A": "A p-value is computed assuming the null is true; it is not the probability that the null is true.",
        "B": "The Type II error probability concerns failing to reject a false null, which is not what the p-value measures.",
        "C": "With p = 0.03 the null is rejected at the 5% level but not at the 1% level, so this statement has it backwards.",
        "D": "Correct: the p-value is the probability, under the null, of a result at least as extreme as the one observed."
      },
      "topic": "Quantitative Analysis",
      "subtopic": "Statistical inference and hypothesis testing",
      "difficulty": "medium",
      "source": "Quantitative Analysis: Statistical inference and hypothesis testing, p-values and significance levels"
    },
    {
      "stem": "A risk analyst models a series with the AR(1) process Y_t = 2 + 0.6 Y_(t-1) + e_t, where e_t is white noise with a mean of zero. The most recent observation is Y_T = 8. The two-step-ahead forecast E[Y_(T+2)] is closest to:",
      "options": [
        "5.00",
        "6.08",
        "6.80",
        "8.00"
      ],
      "answer": "B",
      "explanation": "The one-step forecast is 2 + 0.6 x 8 = 6.80, and the two-step forecast iterates the same equation: 2 + 0.6 x 6.80 = 6.08, because future shocks have an expected value of zero. The forecasts converge toward the unconditional mean, 2 / (1 - 0.6) = 5.00, as the horizon lengthens, so the two-step value lies between the current value and that mean.",
      "rationales": {
        "A": "5.00 is the long-run mean, which the forecast only approaches as the horizon grows.",
        "B": "Correct: 2 + 0.6 x (2 + 0.6 x 8) = 2 + 0.6 x 6.80 = 6.08.",
        "C": "6.80 is the one-step-ahead forecast; the second step requires iterating the equation once more.",
        "D": "8.00 treats the latest value as the forecast and ignores the mean reversion implied by a coefficient of 0.6."
      },
      "topic": "Quantitative Analysis",
      "subtopic": "Time series analysis and forecasting",
      "difficulty": "hard",
      "source": "Quantitative Analysis: Time series analysis and forecasting, autoregressive (AR) models and multi-step forecasts"
    },
    {
      "stem": "A non-dividend-paying stock trades at 80 and the continuously compounded risk-free rate is 3% per year. A one-year forward contract on the stock is quoted at 84. Which of the following strategies locks in an arbitrage profit, and approximately how large is that profit at the forward's maturity?",
      "options": [
        "Sell the stock short, lend the proceeds and buy the forward, earning about 1.56 at maturity",
        "Sell the stock short, lend the proceeds and buy the forward, earning about 4.00 at maturity",
        "Buy the stock with borrowed funds and sell the forward, earning about 4.00 at maturity",
        "Buy the stock with borrowed funds and sell the forward, earning about 1.56 at maturity"
      ],
      "answer": "D",
      "explanation": "The no-arbitrage forward price is 80 x e^(0.03 x 1) = 82.44, which is below the quoted 84, so the forward is overpriced. The arbitrageur sells the forward, buys the stock with money borrowed at 3% and delivers the stock at maturity for 84 while repaying 82.44, keeping about 1.56. The profit is not 4.00 because the financing cost of holding the stock must be deducted.",
      "rationales": {
        "A": "Short stock plus a long forward suits an underpriced forward; here 84 exceeds the fair value of about 82.44, so this strategy loses money.",
        "B": "This is the wrong direction for an overpriced forward, and 4.00 also ignores financing costs.",
        "C": "The direction is right, but 4.00 ignores the roughly 2.44 cost of financing the 80 stock purchase to maturity.",
        "D": "Correct: borrow to buy at 80, deliver at 84 and repay 80 x e^0.03 = 82.44, locking in about 1.56."
      },
      "topic": "Financial Markets and Products",
      "subtopic": "Structure, mechanics, and valuation of forwards, futures, swaps, and options",
      "difficulty": "medium",
      "source": "Financial Markets and Products: Forward pricing and arbitrage, cost-of-carry relationship"
    },
    {
      "stem": "A bank clears a standardised over-the-counter interest rate swap through a central counterparty (CCP). Which of the following statements best describes the effect of central clearing on this trade?",
      "options": [
        "The CCP becomes the counterparty to each side, and both sides post initial and variation margin",
        "The original parties keep their bilateral exposure, and the CCP only reports the trade to regulators",
        "Counterparty credit risk is eliminated because the CCP guarantees performance without needing margin",
        "The trade is settled only at maturity, so no collateral moves until the final swap payment is made"
      ],
      "answer": "A",
      "explanation": "Through novation, the CCP steps between the original parties and becomes the buyer to the seller and the seller to the buyer. It manages the resulting counterparty risk by collecting initial margin, daily variation margin and default fund contributions from its members. Counterparty risk is mutualised and reduced rather than eliminated.",
      "rationales": {
        "A": "Correct: novation makes the CCP the counterparty to both sides, and it collects initial and variation margin.",
        "B": "This describes bilateral clearing; under central clearing the CCP replaces the bilateral exposure rather than just reporting.",
        "C": "A CCP reduces but does not eliminate counterparty risk, and it relies on margin and default fund resources to do so.",
        "D": "CCPs require variation margin to be exchanged at least daily as positions are marked to market."
      },
      "topic": "Financial Markets and Products",
      "subtopic": "Structure and mechanics of over-the-counter (OTC) and exchange markets",
      "difficulty": "easy",
      "source": "Financial Markets and Products: Structure and mechanics of OTC and exchange markets, central clearing and margin"
    },
    {
      "stem": "A bond has a modified duration of 6.0 and a convexity of 80. Using a duration-plus-convexity approximation, the percentage change in the bond's price if its yield falls by 100 basis points is closest to:",
      "options": [
        "+5.2%",
        "+5.6%",
        "+6.0%",
        "+6.4%"
      ],
      "answer": "D",
      "explanation": "The approximation is dP/P = -D x dy + 0.5 x C x dy^2. With dy = -0.01, the duration term contributes +6.0% and the convexity term adds 0.5 x 80 x 0.0001 = +0.4%, for a total of +6.4%. Convexity increases the price gain when yields fall and cushions the loss when yields rise.",
      "rationales": {
        "A": "+5.2% subtracts a convexity term (without the one-half factor); convexity adds to the gain when yields fall.",
        "B": "+5.6% subtracts the convexity adjustment, but convexity adds to the price gain when yields fall.",
        "C": "+6.0% is the duration-only estimate and ignores the convexity adjustment.",
        "D": "Correct: 6.0% from duration plus 0.5 x 80 x 0.01^2 = 0.4% from convexity gives +6.4%."
      },
      "topic": "Financial Markets and Products",
      "subtopic": "Interest rates and measures of interest rate sensitivity",
      "difficulty": "medium",
      "source": "Financial Markets and Products: Interest rates and measures of interest rate sensitivity, duration and convexity"
    },
    {
      "stem": "The one-year interest rate in the United States is higher than the one-year interest rate in the euro area. Assuming covered interest rate parity holds, which of the following statements about the one-year forward exchange rate, quoted as US dollars per euro, is correct?",
      "options": [
        "It is higher than the spot rate, so the euro trades at a forward premium against the dollar",
        "It is lower than the spot rate, so the euro trades at a forward discount against the dollar",
        "It equals the spot rate, because interest rate differences are offset by expected inflation",
        "It equals the expected future spot rate, because forward rates are unbiased predictors"
      ],
      "answer": "A",
      "explanation": "Covered interest rate parity requires F = S x (1 + r_USD) / (1 + r_EUR) when the rate is quoted as dollars per euro. Because the dollar rate exceeds the euro rate, F exceeds S, so the euro, the lower-interest-rate currency, trades at a forward premium. The premium offsets the extra interest earned in the higher-yielding currency, so no riskless profit exists.",
      "rationales": {
        "A": "Correct: F = S x (1 + r_USD) / (1 + r_EUR) exceeds S when the dollar rate is higher, so the euro is at a forward premium.",
        "B": "A forward discount for the euro would imply the euro has the higher interest rate, the opposite of the facts given.",
        "C": "If the forward equalled spot, a hedged investment in the higher-yielding dollar would earn a riskless excess return that arbitrage would remove.",
        "D": "Covered parity is an arbitrage condition tied to interest rates; it does not make forwards equal expected future spot rates."
      },
      "topic": "Financial Markets and Products",
      "subtopic": "Foreign exchange risk",
      "difficulty": "easy",
      "source": "Financial Markets and Products: Foreign exchange risk, covered interest rate parity and forward premiums"
    },
    {
      "stem": "A mortgage pool prepays at 150 PSA. The 100 PSA benchmark assumes a conditional prepayment rate (CPR) that starts at 0.2% in month 1 and rises by 0.2 percentage points per month until it reaches 6.0% in month 30, then stays at 6.0%. The CPR assumed for the pool in month 20 is closest to:",
      "options": [
        "3.0%",
        "4.0%",
        "6.0%",
        "9.0%"
      ],
      "answer": "C",
      "explanation": "At 100 PSA the CPR in month 20 is 20 x 0.2% = 4.0%. A speed of 150 PSA multiplies the benchmark CPR by 1.5, so the assumed CPR is 1.5 x 4.0% = 6.0%. The 150 PSA ramp only levels off at 9.0% (1.5 x 6.0%) from month 30 onward.",
      "rationales": {
        "A": "3.0% is the 100 PSA rate in month 15; it ignores both the month given and the 150% scaling.",
        "B": "4.0% is the 100 PSA benchmark in month 20; a 150 PSA pool prepays 1.5 times as fast.",
        "C": "Correct: 1.5 x (20 x 0.2%) = 1.5 x 4.0% = 6.0%.",
        "D": "9.0% is the 150 PSA ceiling (1.5 x 6.0%) that applies only from month 30 onward."
      },
      "topic": "Financial Markets and Products",
      "subtopic": "Mortgage-backed securities (MBS)",
      "difficulty": "medium",
      "source": "Financial Markets and Products: Mortgage-backed securities (MBS), prepayment conventions (CPR and PSA)"
    },
    {
      "stem": "A portfolio manager holds an equity portfolio worth 20 million and wants to hedge it with equity index futures. The correlation between the portfolio's returns and the futures returns is 0.80. The portfolio's returns have a standard deviation of 20% per year and the futures returns have a standard deviation of 25% per year. One futures contract has a value of 250,000. The number of futures contracts to sell to minimise the variance of the hedged position is closest to:",
      "options": [
        "Short 51 contracts",
        "Short 64 contracts",
        "Short 80 contracts",
        "Short 100 contracts"
      ],
      "answer": "A",
      "explanation": "The minimum-variance hedge ratio is h* = rho x (sigma_S / sigma_F) = 0.80 x (20% / 25%) = 0.64. The number of contracts is h* x (portfolio value / value of one contract) = 0.64 x 20,000,000 / 250,000 = 51.2, so about 51 contracts should be sold. A position of 80 contracts would hedge the full notional and ignore both the imperfect correlation and the difference in volatilities.",
      "rationales": {
        "A": "Correct: 0.80 x (20% / 25%) = 0.64, and 0.64 x 20,000,000 / 250,000 = 51.2, or about 51 contracts.",
        "B": "64 applies only the correlation to the 80 contracts of full notional, ignoring the volatility ratio.",
        "C": "80 contracts hedge the full notional; it also results from inverting the volatility ratio, which gives a hedge ratio of 1.0.",
        "D": "100 inverts the volatility ratio (25% / 20%) and omits the correlation."
      },
      "topic": "Financial Markets and Products",
      "subtopic": "Hedging with derivatives",
      "difficulty": "hard",
      "source": "Financial Markets and Products: Hedging with derivatives, minimum-variance hedge ratio"
    },
    {
      "stem": "A portfolio is worth 5 million. Its daily returns are normally distributed with a mean of zero and a standard deviation of 2%, and returns are independent from day to day. Using the square-root-of-time rule and a one-tailed 99% standard normal quantile of 2.326, the 10-day 99% value-at-risk is closest to:",
      "options": [
        "232,600",
        "520,200",
        "735,500",
        "2,326,000"
      ],
      "answer": "C",
      "explanation": "The 1-day 99% VaR is 5,000,000 x 2% x 2.326 = 232,600. With independent, identically distributed returns and a zero mean, VaR scales with the square root of the horizon, so the 10-day VaR is 232,600 x sqrt(10), which is about 735,500. Scaling linearly by 10 would ignore that volatility grows with the square root of time.",
      "rationales": {
        "A": "232,600 is the 1-day 99% VaR (5,000,000 x 2% x 2.326); it has not been scaled to a 10-day horizon.",
        "B": "520,200 scales to 10 days correctly but uses the 95% quantile of 1.645 instead of the 99% quantile.",
        "C": "Correct: 232,600 x sqrt(10) is about 735,500.",
        "D": "2,326,000 scales linearly by 10 days; under independent returns volatility grows with the square root of time."
      },
      "topic": "Valuation and Risk Models",
      "subtopic": "Value-at-risk (VaR)",
      "difficulty": "easy",
      "source": "Valuation and Risk Models: Value-at-risk (VaR), parametric VaR and the square-root-of-time rule"
    },
    {
      "stem": "The one-day loss on a portfolio has the following discrete distribution: no loss with probability 91%, a loss of 3 million with probability 4%, a loss of 6 million with probability 3%, and a loss of 12 million with probability 2%. The one-day 95% expected shortfall is closest to:",
      "options": [
        "6.0 million",
        "8.4 million",
        "9.0 million",
        "12.0 million"
      ],
      "answer": "B",
      "explanation": "Expected shortfall is the average loss in the worst 5% of outcomes. That tail consists of the 2% chance of a 12 million loss and 3% of the 6 million loss, so ES = (2% x 12 + 3% x 6) / 5% = 8.4 million. Unlike VaR, ES reflects the size of losses beyond the cutoff, and the average must be probability-weighted.",
      "rationales": {
        "A": "6.0 million averages all loss outcomes (9% of the probability), not just the worst 5%.",
        "B": "Correct: (0.02 x 12 + 0.03 x 6) / 0.05 = 8.4 million.",
        "C": "9.0 million is the simple average of 12 and 6, ignoring that the 6 million loss is more likely than the 12 million loss.",
        "D": "12.0 million is the worst possible loss, not the average loss over the worst 5% of outcomes."
      },
      "topic": "Valuation and Risk Models",
      "subtopic": "Expected shortfall (ES)",
      "difficulty": "hard",
      "source": "Valuation and Risk Models: Expected shortfall (ES), definition and calculation from a loss distribution"
    },
    {
      "stem": "A risk manager uses an EWMA model with a decay factor of 0.94 to update daily volatility. The volatility estimate made at the end of yesterday was 2.0% per day, and today's return was 1.0%. The updated daily volatility estimate, made at the end of today, is closest to:",
      "options": [
        "1.00%",
        "1.09%",
        "1.50%",
        "1.95%"
      ],
      "answer": "D",
      "explanation": "EWMA updates the variance as new variance = lambda x old variance + (1 - lambda) x return^2. Here that is 0.94 x (0.02)^2 + 0.06 x (0.01)^2 = 0.000376 + 0.000006 = 0.000382, whose square root is about 1.95%. Because lambda is high, most of the weight stays on the prior estimate, so one small return lowers the volatility estimate only slightly.",
      "rationales": {
        "A": "1.00% is today's absolute return; it ignores the 94% weight placed on the prior variance estimate.",
        "B": "1.09% results from swapping the weights, putting 0.06 on the prior variance and 0.94 on the squared return.",
        "C": "1.50% is the simple average of 2.0% and 1.0%, not the lambda-weighted combination of variances.",
        "D": "Correct: 0.94 x 0.0004 + 0.06 x 0.0001 = 0.000382, and its square root is about 1.95%."
      },
      "topic": "Valuation and Risk Models",
      "subtopic": "Estimating volatility and correlation",
      "difficulty": "medium",
      "source": "Valuation and Risk Models: Estimating volatility and correlation, EWMA model"
    },
    {
      "stem": "A bank has a single loan with an exposure at default of 50 million, a one-year probability of default of 2% and a loss given default fixed at 40%. Treat default as a Bernoulli event and assume that exposure and loss given default are not random. The unexpected loss, measured as the standard deviation of the loan's loss, is closest to:",
      "options": [
        "0.40 million",
        "2.80 million",
        "7.00 million",
        "20.00 million"
      ],
      "answer": "B",
      "explanation": "The loss equals EAD x LGD = 20 million if default occurs and zero otherwise, so its standard deviation is 20 million x sqrt(PD x (1 - PD)) = 20 x sqrt(0.0196) = 20 x 0.14 = 2.8 million. The expected loss, by contrast, is PD x LGD x EAD = 0.4 million. Expected loss is a cost to be priced and provisioned, while unexpected loss is the volatility around it against which capital is held.",
      "rationales": {
        "A": "0.40 million is the expected loss (2% x 40% x 50 million), not the standard deviation of the loss.",
        "B": "Correct: 20 million x sqrt(0.02 x 0.98) = 20 x 0.14 = 2.8 million.",
        "C": "7.00 million applies the default standard deviation (0.14) to the full 50 million exposure and omits the 40% loss given default.",
        "D": "20.00 million is EAD x LGD, the loss if default occurs, not its standard deviation."
      },
      "topic": "Valuation and Risk Models",
      "subtopic": "Expected and unexpected losses",
      "difficulty": "hard",
      "source": "Valuation and Risk Models: Expected and unexpected losses, credit loss components (PD, LGD, EAD)"
    },
    {
      "stem": "A stock trades at 100. Over one year it will either rise to 110 or fall to 90. The annual risk-free rate is 5% with annual compounding. Using a one-period binomial model, the value of a one-year European call option on the stock with a strike price of 100 is closest to:",
      "options": [
        "2.38",
        "4.76",
        "7.14",
        "7.50"
      ],
      "answer": "C",
      "explanation": "The risk-neutral probability of an up move is (1 + r - d) / (u - d) = (1.05 - 0.90) / (1.10 - 0.90) = 0.75. The call pays 10 if the stock rises and 0 otherwise, so its value is the discounted risk-neutral expectation: 0.75 x 10 / 1.05, or about 7.14. The stock's real-world probabilities do not enter the valuation.",
      "rationales": {
        "A": "2.38 uses 0.25 as the up probability (the down probability), 0.25 x 10 / 1.05.",
        "B": "4.76 uses an equal 50% chance of an up move, which is not the risk-neutral probability.",
        "C": "Correct: 0.75 x 10 / 1.05 is about 7.14.",
        "D": "7.50 is the risk-neutral expected payoff (0.75 x 10) without discounting at the risk-free rate."
      },
      "topic": "Valuation and Risk Models",
      "subtopic": "Option valuation",
      "difficulty": "medium",
      "source": "Valuation and Risk Models: Option valuation, one-period binomial model and risk-neutral valuation"
    },
    {
      "stem": "A trader at a bank deliberately mismarks positions in the internal valuation system to hide losses and inflate his bonus. Under the Basel operational risk loss event type classification, this event is most appropriately categorised as:",
      "options": [
        "Internal fraud, since an employee intentionally acted against the firm's interests",
        "External fraud, since the false valuations were passed on to outside counterparties",
        "Clients, products and business practices, since customers were sold unsuitable products",
        "Execution, delivery and process management, since a trade processing error occurred"
      ],
      "answer": "A",
      "explanation": "Basel classifies as internal fraud losses from intentional acts to defraud, misappropriate property or circumvent regulations or company policy that involve at least one internal party. Deliberate mismarking by an employee to conceal losses fits this category. Execution, delivery and process management covers unintentional processing errors, and external fraud requires an outside party to commit the act.",
      "rationales": {
        "A": "Correct: deliberate mismarking by an employee to conceal losses is an intentional act involving an internal party, which is internal fraud.",
        "B": "External fraud requires a third party outside the firm to commit the act; here the actor is an employee.",
        "C": "This category covers failures to meet obligations to clients or flawed product design, not an employee's concealment of losses.",
        "D": "This category covers unintentional processing or settlement errors; the mismarking here was deliberate."
      },
      "topic": "Valuation and Risk Models",
      "subtopic": "Operational risk",
      "difficulty": "easy",
      "source": "Valuation and Risk Models: Operational risk, Basel loss event type categories"
    }
  ]
}
```
