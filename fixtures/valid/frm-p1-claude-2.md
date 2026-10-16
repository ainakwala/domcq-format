```json
{
  "format": "domcq/1",
  "exam": "frm-p1",
  "set": "FRM Exam Part I practice – Core Concepts Mix",
  "questions": [
    {
      "stem": "The risk-free rate is 3.0% and the expected return on the market portfolio is 9.0%. According to the Capital Asset Pricing Model (CAPM), what is the expected return on a stock with a beta of 0.8?",
      "options": [
        "4.8%",
        "6.0%",
        "7.2%",
        "7.8%"
      ],
      "answer": "D",
      "explanation": "CAPM states that expected return = risk-free rate + beta × (market return − risk-free rate). The market risk premium is 9.0% − 3.0% = 6.0%, so the expected return is 3.0% + 0.8 × 6.0% = 7.8%. Beta scales only the risk premium, not the risk-free rate, which is why 4.8% (the scaled premium alone) and 7.2% (beta × the total market return) are incorrect.",
      "topic": "Foundations of Risk Management",
      "subtopic": "The Capital Asset Pricing Model (CAPM)",
      "difficulty": "easy",
      "source": "GARP FRM Part I syllabus: Foundations of Risk Management – The Capital Asset Pricing Model (CAPM), expected return and the security market line"
    },
    {
      "stem": "Barings Bank collapsed in 1995 after a trader in its Singapore office built up large unauthorised derivatives positions and hid the resulting losses. Which of the following was a principal internal-control failure that allowed the losses to go undetected?",
      "options": [
        "The same individual ran both the trading desk and the settlement function, so his trades were not independently checked",
        "Positions were financed with short-term repo borrowing that could not be rolled over once market confidence collapsed",
        "Highly leveraged convergence trades lost value when credit spreads widened after a sovereign default",
        "Leveraged reverse repurchase agreements were used to speculate on interest rates and lost value as rates rose"
      ],
      "answer": "A",
      "explanation": "The central lesson of Barings is segregation of duties. The trader headed both front-office trading and back-office settlement, so he could conceal losses in an error account without independent reconciliation or challenge. The other options describe different failures: a funding-liquidity collapse (as at Bear Stearns and Lehman), leveraged convergence trades after the Russian default (LTCM) and speculative reverse repo positions (Orange County).",
      "topic": "Foundations of Risk Management",
      "subtopic": "Financial disasters and risk management failures",
      "difficulty": "easy",
      "source": "GARP FRM Part I syllabus: Foundations of Risk Management – Financial disasters and risk management failures (Barings case, segregation of duties)"
    },
    {
      "stem": "The risk-free rate is 3%. Portfolio A returned 12% with a beta of 1.5 and a standard deviation of 20%. Portfolio B returned 8% with a beta of 0.6 and a standard deviation of 12%. Which of the following statements is correct?",
      "options": [
        "Portfolio B has the higher Sharpe ratio, but Portfolio A has the higher Treynor ratio",
        "Portfolio A has both the higher Sharpe ratio and the higher Treynor ratio",
        "Portfolio A has the higher Sharpe ratio, but Portfolio B has the higher Treynor ratio",
        "Portfolio B has both the higher Sharpe ratio and the higher Treynor ratio"
      ],
      "answer": "C",
      "explanation": "The Sharpe ratio is (return − risk-free rate) / standard deviation, giving 9/20 = 0.45 for A and 5/12 ≈ 0.42 for B. The Treynor ratio is (return − risk-free rate) / beta, giving 9/1.5 = 6.0% for A and 5/0.6 ≈ 8.3% for B. The rankings differ because the Sharpe ratio penalises total risk while the Treynor ratio penalises only systematic risk, and B's low beta flatters it on the Treynor measure.",
      "topic": "Foundations of Risk Management",
      "subtopic": "Risk-adjusted performance measurement",
      "difficulty": "medium",
      "source": "GARP FRM Part I syllabus: Foundations of Risk Management – Risk-adjusted performance measurement (Sharpe ratio and Treynor measure)"
    },
    {
      "stem": "A bank holds a fixed-rate corporate bond and wants to hedge it, either by buying protection through a credit default swap (CDS) on the issuer or by paying away the bond's total return in a total return swap (TRS). Which of the following statements correctly distinguishes the two contracts?",
      "options": [
        "A CDS passes on declines in the bond's value from any cause, including rising rates, whereas a TRS pays only after a credit event",
        "A TRS passes on declines in the bond's value from any cause, including rising rates, whereas a CDS pays only after a credit event",
        "Both pay only after a credit event, so the bank keeps all of the bond's interest rate risk under either contract",
        "Both pass on declines in the bond's value from any cause, so the bank keeps no interest rate risk under either contract"
      ],
      "answer": "B",
      "explanation": "Under a TRS the bank pays the bond's coupons and price changes to its counterparty and receives a floating rate plus any depreciation, so it transfers both credit risk and market (interest rate and spread) risk. A CDS pays only when a defined credit event such as failure to pay, bankruptcy or restructuring occurs. The bank therefore keeps the price risk from interest rate moves and ordinary spread changes when it uses a CDS.",
      "topic": "Foundations of Risk Management",
      "subtopic": "Credit risk transfer mechanisms",
      "difficulty": "medium",
      "source": "GARP FRM Part I syllabus: Foundations of Risk Management – Credit risk transfer mechanisms (credit default swaps and total return swaps)"
    },
    {
      "stem": "Annual returns on an equity fund are normally distributed with a mean of 8% and a standard deviation of 10%. The probability that the fund's return in a given year is below -12% is closest to:",
      "options": [
        "2.3%",
        "4.6%",
        "5.0%",
        "15.9%"
      ],
      "answer": "A",
      "explanation": "Standardise the threshold: z = (-12% − 8%) / 10% = −2.0. For a standard normal distribution P(Z < −2) ≈ 2.3%, because about 95.4% of outcomes lie within two standard deviations of the mean and half of the remaining 4.6% lies in each tail. The 4.6% option is the two-tailed probability, and 15.9% is P(Z < −1).",
      "topic": "Quantitative Analysis",
      "subtopic": "Discrete and continuous probability distributions",
      "difficulty": "easy",
      "source": "GARP FRM Part I syllabus: Quantitative Analysis – Discrete and continuous probability distributions (normal distribution, standardisation)"
    },
    {
      "stem": "An analyst tests whether a strategy's mean monthly return differs from zero. Over 36 months, the sample mean is 0.90% and the sample standard deviation is 3.00%. Returns are assumed to be independent and normally distributed. For a two-tailed test at the 5% significance level, the critical t-value with 35 degrees of freedom is about 2.03. Which of the following conclusions is correct?",
      "options": [
        "The test statistic is about 1.8, so the null hypothesis of a zero mean return is rejected",
        "The test statistic is about 0.3, so the null hypothesis of a zero mean return is not rejected",
        "The test statistic is about 10.8, so the null hypothesis of a zero mean return is rejected",
        "The test statistic is about 1.8, so the null hypothesis of a zero mean return is not rejected"
      ],
      "answer": "D",
      "explanation": "The t-statistic is (sample mean − hypothesised mean) / (s/√n) = 0.90 / (3.00/√36) = 0.90 / 0.50 = 1.8. Because 1.8 lies inside the range ±2.03, the null hypothesis that the true mean return is zero cannot be rejected at the 5% level. The standard error uses √n; using n instead of √n gives 10.8, and dividing by s alone gives 0.3.",
      "topic": "Quantitative Analysis",
      "subtopic": "Statistical inference and hypothesis testing",
      "difficulty": "medium",
      "source": "GARP FRM Part I syllabus: Quantitative Analysis – Statistical inference and hypothesis testing (t-test for a population mean)"
    },
    {
      "stem": "In a multiple linear regression, two of the explanatory variables are highly (but not perfectly) correlated with each other. Which of the following is the most likely consequence?",
      "options": [
        "Coefficient estimates stay unbiased but their standard errors rise, so t-statistics can be insignificant despite a high R²",
        "Coefficient estimates become biased and their standard errors fall, so the t-statistics are overstated in size",
        "Residuals become serially correlated, so the Durbin–Watson statistic falls well below 2 and standard errors are understated",
        "Residual variance becomes dependent on the regressors, so the coefficient estimates are biased and the F-test is invalid"
      ],
      "answer": "A",
      "explanation": "When two regressors are highly correlated, ordinary least squares cannot separate their individual effects, so the coefficient estimates remain unbiased but their standard errors are inflated. The typical symptom is a high R² and a significant F-statistic alongside individually insignificant t-statistics. Serial correlation and changing residual variance are different violations of the regression assumptions and are not caused by correlated regressors.",
      "topic": "Quantitative Analysis",
      "subtopic": "Linear regression with single and multiple regressors",
      "difficulty": "medium",
      "source": "GARP FRM Part I syllabus: Quantitative Analysis – Linear regression with single and multiple regressors (multicollinearity)"
    },
    {
      "stem": "Four percent of a bank's corporate borrowers will default within a year. A screening model flags 80% of the borrowers that will default and also flags 10% of the borrowers that will not default. The model is run twice on the same borrower, and the borrower is flagged both times. Given the borrower's actual outcome, the two runs are independent. The probability that the borrower will default is closest to:",
      "options": [
        "25.0%",
        "72.7%",
        "80.0%",
        "88.9%"
      ],
      "answer": "B",
      "explanation": "Apply Bayes' theorem to both flags together. P(both flags | default) = 0.80² = 0.64 and P(both flags | no default) = 0.10² = 0.01, so P(default | both flags) = (0.04 × 0.64) / (0.04 × 0.64 + 0.96 × 0.01) = 0.0256 / 0.0352 ≈ 72.7%. The 25.0% answer is the posterior after only one flag, and 88.9% (0.80 / (0.80 + 0.10)) ignores the 4% prior default rate.",
      "topic": "Quantitative Analysis",
      "subtopic": "Bayesian analysis",
      "difficulty": "hard",
      "source": "GARP FRM Part I syllabus: Quantitative Analysis – Bayesian analysis (Bayes' theorem, prior and posterior probabilities)"
    },
    {
      "stem": "A stock index is at 100 and pays a continuous dividend yield of 2% per year. The continuously compounded risk-free rate is 5% per year. The theoretical price of a one-year forward contract on the index is closest to:",
      "options": [
        "97.0",
        "100.0",
        "103.0",
        "105.1"
      ],
      "answer": "C",
      "explanation": "The forward price of an asset that pays a continuous yield q is F = S0 × e^((r − q)T). Here F = 100 × e^(0.05 − 0.02) = 100 × e^0.03 ≈ 103.05. Ignoring the dividend yield would give 100 × e^0.05 ≈ 105.1, which overstates the forward because the holder of a forward does not receive the index dividends and so the cost of carry is lower.",
      "topic": "Financial Markets and Products",
      "subtopic": "Structure, mechanics, and valuation of forwards, futures, swaps, and options",
      "difficulty": "easy",
      "source": "GARP FRM Part I syllabus: Financial Markets and Products – Structure, mechanics, and valuation of forwards, futures, swaps, and options (forward pricing with a known yield)"
    },
    {
      "stem": "A European call option on a non-dividend-paying stock has a strike price of 40 and six months to expiry, and is priced at 3.20. The stock price is 40 and the continuously compounded risk-free rate is 5% per year. Using put-call parity, the price of a European put option with the same strike and expiry is closest to:",
      "options": [
        "1.25",
        "2.21",
        "3.20",
        "4.19"
      ],
      "answer": "B",
      "explanation": "Put-call parity for a non-dividend-paying stock is c + K·e^(−rT) = p + S0, so p = c − S0 + K·e^(−rT). With K·e^(−0.05 × 0.5) = 40 × 0.9753 ≈ 39.01, p = 3.20 − 40 + 39.01 ≈ 2.21. Failing to discount the strike gives 3.20, and using the wrong signs on the stock and call terms gives 4.19.",
      "topic": "Financial Markets and Products",
      "subtopic": "Structure, mechanics, and valuation of forwards, futures, swaps, and options",
      "difficulty": "easy",
      "source": "GARP FRM Part I syllabus: Financial Markets and Products – Structure, mechanics, and valuation of forwards, futures, swaps, and options (put-call parity)"
    },
    {
      "stem": "An airline will buy 2,000,000 gallons of jet fuel in three months and plans to hedge with heating oil futures, because no jet fuel futures contract is available. Each futures contract covers 42,000 gallons. Over the hedge horizon, the standard deviation of changes in the jet fuel price is 0.20 per gallon, the standard deviation of changes in the heating oil futures price is 0.25 per gallon, and the correlation between the two changes is 0.85. Using the minimum-variance hedge ratio, which of the following is the most appropriate hedge?",
      "options": [
        "Short 48 contracts",
        "Short 32 contracts",
        "Long 48 contracts",
        "Long 32 contracts"
      ],
      "answer": "D",
      "explanation": "The airline is exposed to a rising fuel price, so it hedges by buying (going long) futures. The minimum-variance hedge ratio is h* = ρ × σS / σF = 0.85 × 0.20 / 0.25 = 0.68, so the number of contracts is h* × QA / QF = 0.68 × 2,000,000 / 42,000 ≈ 32.4, or about 32. A hedge ratio of one would require about 48 contracts and would over-hedge, because the futures price is imperfectly correlated with, and more volatile than, the jet fuel price.",
      "topic": "Financial Markets and Products",
      "subtopic": "Hedging with derivatives",
      "difficulty": "medium",
      "source": "GARP FRM Part I syllabus: Financial Markets and Products – Hedging with derivatives (minimum-variance hedge ratio, cross-hedging with futures)"
    },
    {
      "stem": "A bond has a modified duration of 6.5 and a convexity of 60. Using the duration-plus-convexity approximation, the percentage change in the bond's price if its yield rises by 100 basis points is closest to:",
      "options": [
        "-6.80%",
        "-6.50%",
        "-6.20%",
        "-5.90%"
      ],
      "answer": "C",
      "explanation": "The second-order approximation is ΔP/P ≈ −D_mod × Δy + ½ × Convexity × (Δy)². With Δy = 0.01 this gives −6.5 × 0.01 + 0.5 × 60 × 0.0001 = −6.50% + 0.30% = −6.20%. The duration-only estimate of −6.50% overstates the fall because convexity adds value back when yields rise; −6.80% subtracts the convexity term, and −5.90% omits the one-half factor.",
      "topic": "Financial Markets and Products",
      "subtopic": "Interest rates and measures of interest rate sensitivity",
      "difficulty": "medium",
      "source": "GARP FRM Part I syllabus: Financial Markets and Products – Interest rates and measures of interest rate sensitivity (modified duration and convexity)"
    },
    {
      "stem": "The spot exchange rate is USD 1.2500 per GBP. The one-year interest rate is 3% in USD and 5% in GBP, both annually compounded. Assuming covered interest rate parity holds, the one-year forward exchange rate is closest to:",
      "options": [
        "USD 1.2262 per GBP",
        "USD 1.2500 per GBP",
        "USD 1.2743 per GBP",
        "USD 1.3125 per GBP"
      ],
      "answer": "A",
      "explanation": "With the rate quoted as USD per GBP, covered interest parity gives F = S × (1 + r_USD) / (1 + r_GBP) = 1.2500 × 1.03 / 1.05 ≈ 1.2262. GBP carries the higher interest rate, so it must trade at a forward discount (forward below spot), which rules out the options at or above 1.2500. The value 1.2743 results from inverting the ratio of the two interest factors.",
      "topic": "Financial Markets and Products",
      "subtopic": "Foreign exchange risk",
      "difficulty": "medium",
      "source": "GARP FRM Part I syllabus: Financial Markets and Products – Foreign exchange risk (covered interest rate parity and forward exchange rates)"
    },
    {
      "stem": "Under the Public Securities Association (PSA) prepayment benchmark, 100 PSA assumes a conditional prepayment rate (CPR) of 0.2% in month 1 that rises by 0.2% each month until month 30, after which it stays at 6% CPR. For a mortgage pool assumed to prepay at 150 PSA, the CPR in month 20 is closest to:",
      "options": [
        "4.0%",
        "6.0%",
        "9.0%",
        "12.0%"
      ],
      "answer": "B",
      "explanation": "At 100 PSA the CPR in month t is 0.2% × t up to month 30, so it is 4.0% in month 20. A speed of 150 PSA scales the whole schedule by 1.5, giving 6.0% in month 20. The 9.0% figure is the 150 PSA rate after month 30 (1.5 × 6%), which the pool has not yet reached in month 20.",
      "topic": "Financial Markets and Products",
      "subtopic": "Mortgage-backed securities (MBS)",
      "difficulty": "medium",
      "source": "GARP FRM Part I syllabus: Financial Markets and Products – Mortgage-backed securities (MBS), prepayment conventions and the PSA benchmark"
    },
    {
      "stem": "A portfolio is worth USD 10 million and its daily returns are normally distributed with a mean of zero and a standard deviation of 1.5%. The one-day 99% value-at-risk (VaR) is closest to:",
      "options": [
        "USD 150,000",
        "USD 247,000",
        "USD 349,000",
        "USD 1,103,000"
      ],
      "answer": "C",
      "explanation": "Parametric VaR for a zero-mean normal distribution is z × σ × portfolio value. At 99% the one-tailed z-value is 2.326, so VaR = 2.326 × 1.5% × USD 10,000,000 ≈ USD 349,000. USD 150,000 is only one standard deviation, USD 247,000 uses the 95% z-value of 1.645, and USD 1,103,000 is the ten-day figure, which scales the one-day VaR by the square root of ten.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Value-at-risk (VaR)",
      "difficulty": "easy",
      "source": "GARP FRM Part I syllabus: Valuation and Risk Models – Value-at-risk (VaR), parametric (delta-normal) approach"
    },
    {
      "stem": "Which of the following statements about expected shortfall (ES) and value-at-risk (VaR) at the same confidence level is correct?",
      "options": [
        "ES is the smallest loss in the tail beyond the VaR level, so it can never exceed the VaR at that confidence level",
        "ES ignores the size of losses beyond the VaR threshold, which makes it the less informative of the two tail measures",
        "VaR is subadditive for every loss distribution, whereas the ES of a combined portfolio can exceed the sum of the stand-alone ES figures",
        "ES is subadditive, so the ES of a combined portfolio never exceeds the sum of its stand-alone ES figures, which VaR does not always achieve"
      ],
      "answer": "D",
      "explanation": "ES is the expected loss conditional on the loss exceeding VaR, so it is always at least as large as VaR at the same confidence level and it reflects the size of tail losses. Unlike VaR, ES satisfies subadditivity, which together with monotonicity, positive homogeneity and translation invariance makes it a coherent risk measure. VaR can violate subadditivity for some distributions, so diversification can appear to increase VaR.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Expected shortfall (ES)",
      "difficulty": "medium",
      "source": "GARP FRM Part I syllabus: Valuation and Risk Models – Expected shortfall (ES) and coherent risk measures"
    },
    {
      "stem": "A risk manager uses the exponentially weighted moving average (EWMA) model with λ = 0.94 to update daily volatility. The previous day's volatility estimate was 1.00% and yesterday's return was 3.00%. The updated daily volatility estimate is closest to:",
      "options": [
        "1.12%",
        "1.22%",
        "1.48%",
        "3.00%"
      ],
      "answer": "B",
      "explanation": "The EWMA update is σn² = λ × σn−1² + (1 − λ) × r²n−1. Substituting (in percent) gives 0.94 × 1.00 + 0.06 × 9.00 = 0.94 + 0.54 = 1.48, which is the variance, so the volatility is √1.48 ≈ 1.22%. Applying the weights to the volatility and the return directly gives 1.12%, and 1.48% forgets to take the square root.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Estimating volatility and correlation",
      "difficulty": "medium",
      "source": "GARP FRM Part I syllabus: Valuation and Risk Models – Estimating volatility and correlation (EWMA model)"
    },
    {
      "stem": "A bank holds two identical loans. Each has an exposure of USD 25 million, a one-year probability of default of 10% and a loss given default fixed at 40%. Unexpected loss is measured as the standard deviation of the loss, and the correlation between the losses on the two loans is 0.5. Assuming exposures and loss given default are not random, the unexpected loss of the two-loan portfolio is closest to:",
      "options": [
        "USD 3.0 million",
        "USD 4.2 million",
        "USD 5.2 million",
        "USD 6.0 million"
      ],
      "answer": "C",
      "explanation": "For a loan with fixed exposure and loss given default, the standard deviation of loss is EAD × LGD × √(PD × (1 − PD)) = 25 × 0.40 × √0.09 = USD 3.0 million. For two loans, σp = √(σ1² + σ2² + 2ρσ1σ2) = √(9 + 9 + 9) = √27 ≈ USD 5.2 million. Simply adding the two figures (USD 6.0 million) assumes perfect correlation, and USD 4.2 million assumes zero correlation.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Expected and unexpected losses",
      "difficulty": "hard",
      "source": "GARP FRM Part I syllabus: Valuation and Risk Models – Expected and unexpected losses (unexpected loss as the standard deviation of credit losses, portfolio effects)"
    },
    {
      "stem": "The one-year spot rate is 3.00%. A two-year bond paying an annual coupon of 4.00% is priced at par (100). All rates are annually compounded. The implied one-year forward rate starting one year from now is closest to:",
      "options": [
        "3.00%",
        "4.00%",
        "4.02%",
        "5.05%"
      ],
      "answer": "D",
      "explanation": "Because the bond is priced at par, 100 = 4/1.03 + 104/(1 + s2)², so (1 + s2)² = 104 / 96.1165 ≈ 1.0820 and the two-year spot rate is about 4.02%. The forward rate satisfies (1 + s2)² = (1 + s1)(1 + f), so f = 1.0820 / 1.03 − 1 ≈ 5.05%. The forward rate lies above both spot rates because the spot curve slopes upward.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Fixed-income valuation",
      "difficulty": "hard",
      "source": "GARP FRM Part I syllabus: Valuation and Risk Models – Fixed-income valuation (bootstrapping spot rates and implied forward rates)"
    },
    {
      "stem": "A trader is short 10,000 European call options on a stock, each covering one share. Each of these options has a delta of 0.60 and a gamma of 0.04. A second traded call option on the same stock has a delta of 0.50 and a gamma of 0.10. To make the position both delta-neutral and gamma-neutral, which of the following actions is most appropriate?",
      "options": [
        "Buy 4,000 of the second option and buy 4,000 shares of the stock",
        "Buy 4,000 of the second option and buy 6,000 shares of the stock",
        "Sell 4,000 of the second option and buy 8,000 shares of the stock",
        "Buy 4,000 of the second option and sell 4,000 shares of the stock"
      ],
      "answer": "A",
      "explanation": "The short call position has a delta of −6,000 and a gamma of −400 (10,000 × 0.04). Gamma can only be neutralised with another option, and buying 400 / 0.10 = 4,000 of the second option adds a gamma of +400 and a delta of +2,000, leaving a net delta of −4,000. The stock has zero gamma and a delta of one, so buying 4,000 shares restores delta neutrality.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Hedging",
      "difficulty": "hard",
      "source": "GARP FRM Part I syllabus: Valuation and Risk Models – Hedging (delta and gamma hedging of option positions)"
    }
  ]
}
```