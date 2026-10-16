```json
{
  "format": "domcq/1",
  "exam": "frm-p1",
  "set": "FRM Exam Part I practice – Mixed review set 1",
  "questions": [
    {
      "stem": "The risk-free rate is 3.0%, the expected return on the market portfolio is 8.0%, and a stock has a beta of 1.2. According to the Capital Asset Pricing Model (CAPM), which of the following is closest to the stock's expected return?",
      "options": [
        "6.0%",
        "9.0%",
        "9.6%",
        "12.6%"
      ],
      "answer": "B",
      "explanation": "CAPM gives E(R) = Rf + beta x (E(Rm) - Rf) = 3.0% + 1.2 x (8.0% - 3.0%) = 9.0%. Beta scales the market risk premium, not the market return itself, and the risk-free rate must still be added back as compensation for the time value of money.",
      "topic": "Foundations of Risk Management",
      "subtopic": "The Capital Asset Pricing Model (CAPM)",
      "difficulty": "easy",
      "source": "Foundations of Risk Management – CAPM and the security market line"
    },
    {
      "stem": "Over the past year a portfolio returned 11.0% with a beta of 1.25. The risk-free rate was 3.0% and the market portfolio returned 9.0%. Which of the following is closest to the portfolio's Jensen's alpha?",
      "options": [
        "8.00%",
        "2.00%",
        "0.50%",
        "-3.25%"
      ],
      "answer": "C",
      "explanation": "Jensen's alpha is the portfolio's actual return minus the return required by CAPM. The required return is 3.0% + 1.25 x (9.0% - 3.0%) = 10.5%, so alpha = 11.0% - 10.5% = 0.5%. Comparing with the market return alone (2.0%) or with the excess return over the risk-free rate (8.0%) ignores the portfolio's beta.",
      "topic": "Foundations of Risk Management",
      "subtopic": "Risk-adjusted performance measurement",
      "difficulty": "medium",
      "source": "Foundations of Risk Management – Risk-adjusted performance measurement: Jensen's alpha"
    },
    {
      "stem": "The 1995 collapse of Barings Bank was triggered by unauthorised trading losses in its Singapore subsidiary. Which of the following control failures most directly allowed the losses to be hidden from head office for an extended period?",
      "options": [
        "Overreliance on a VaR model that understated the firm's tail losses",
        "Dependence on short-term wholesale funding that could not be rolled over",
        "Heavy concentration in subprime mortgage-backed securities held for trading",
        "Failure to separate the trading function from back-office settlement"
      ],
      "answer": "D",
      "explanation": "The Singapore derivatives trader also controlled the back-office settlement function, so he could book losses in a hidden error account and report fictitious profits. Weak segregation of duties, together with inadequate oversight by senior management, is the classic lesson of Barings. Funding runs and subprime concentrations were features of other episodes, not of Barings.",
      "topic": "Foundations of Risk Management",
      "subtopic": "Financial disasters and risk management failures",
      "difficulty": "easy",
      "source": "Foundations of Risk Management – Financial disasters and risk management failures: Barings Bank (1995)"
    },
    {
      "stem": "A firm's tax liability is a convex function of its pre-tax income, so tax paid rises more than proportionally as income increases. Assuming the firm's expected pre-tax income is unchanged, which of the following is the most likely effect of a hedging program that reduces the volatility of its pre-tax income?",
      "options": [
        "Expected tax payments decrease because income becomes more stable",
        "Expected tax payments increase because income becomes more stable",
        "Expected tax payments do not change because expected income is unchanged",
        "Expected tax payments decrease only if the firm also reduces its debt"
      ],
      "answer": "A",
      "explanation": "When taxes are a convex function of income, the expected tax on a volatile income stream is higher than the tax on the expected income (Jensen's inequality). Hedging reduces the volatility of income and therefore lowers expected tax payments, even though expected pre-tax income is unchanged. This is one recognised way in which risk management can add value for shareholders.",
      "topic": "Foundations of Risk Management",
      "subtopic": "Creating value with risk management",
      "difficulty": "medium",
      "source": "Foundations of Risk Management – Creating value with risk management: reasons for hedging (taxes)"
    },
    {
      "stem": "A portfolio's annual return is normally distributed with a mean of 8% and a standard deviation of 12%. Which of the following is closest to the probability that the portfolio's return will be greater than -4%?",
      "options": [
        "2.3%",
        "15.9%",
        "31.7%",
        "84.1%"
      ],
      "answer": "D",
      "explanation": "A return of -4% is (-4% - 8%) / 12% = -1.0 standard deviations from the mean. The probability of exceeding that level is 1 - N(-1) = N(1) = 84.1%. The 15.9% option is the probability of a return below -4%, and 31.7% is the probability of being more than one standard deviation from the mean in either direction.",
      "topic": "Quantitative Analysis",
      "subtopic": "Discrete and continuous probability distributions",
      "difficulty": "easy",
      "source": "Quantitative Analysis – Normal distribution and standardisation (z-scores)"
    },
    {
      "stem": "An analyst tests whether a fund's mean monthly excess return differs from zero using 36 monthly observations. The sample mean is 0.80% and the sample standard deviation is 3.00%. The two-tailed 5% critical value of the t-distribution with 35 degrees of freedom is approximately 2.03. Which of the following correctly gives the test statistic and the conclusion at the 5% significance level?",
      "options": [
        "t = 1.60; fail to reject the null hypothesis that the mean is zero",
        "t = 1.60; reject the null hypothesis that the mean is zero",
        "t = 9.60; reject the null hypothesis that the mean is zero",
        "t = 0.27; fail to reject the null hypothesis that the mean is zero"
      ],
      "answer": "A",
      "explanation": "The standard error is s / sqrt(n) = 3.00% / 6 = 0.50%, so t = 0.80% / 0.50% = 1.60. Because 1.60 is smaller in absolute value than the critical value of about 2.03, the null hypothesis of a zero mean cannot be rejected at the 5% level. Dividing by the standard deviation or by n instead of its square root gives the incorrect statistics 0.27 and 9.60.",
      "topic": "Quantitative Analysis",
      "subtopic": "Statistical inference and hypothesis testing",
      "difficulty": "medium",
      "source": "Quantitative Analysis – Statistical inference and hypothesis testing: t-test of a sample mean"
    },
    {
      "stem": "A bank's early-warning model flags 80% of the loans that later default and 10% of the loans that do not. Historically, 4% of the bank's loans default. A randomly selected loan is flagged by the model. Which of the following is closest to the probability that this loan will default?",
      "options": [
        "4%",
        "10%",
        "25%",
        "80%"
      ],
      "answer": "C",
      "explanation": "By Bayes' theorem, P(default | flag) = P(flag | default) x P(default) / P(flag). The unconditional probability of a flag is 0.80 x 0.04 + 0.10 x 0.96 = 0.128, so P(default | flag) = 0.032 / 0.128 = 25%. Because defaults are rare, most flagged loans are false alarms even though the model detects 80% of the defaults.",
      "topic": "Quantitative Analysis",
      "subtopic": "Bayesian analysis",
      "difficulty": "medium",
      "source": "Quantitative Analysis – Bayesian analysis: Bayes' theorem"
    },
    {
      "stem": "A stationary AR(1) process is given by y_t = 2 + 0.6 y_(t-1) + e_t, where e_t is white noise with a variance of 4. The latest observation is y_t = 8. Which of the following pairs is closest to the two-step-ahead forecast of y_(t+2) and the variance of the two-step-ahead forecast error?",
      "options": [
        "Forecast 6.08; error variance 4.00",
        "Forecast 6.80; error variance 4.00",
        "Forecast 6.80; error variance 5.44",
        "Forecast 6.08; error variance 5.44"
      ],
      "answer": "D",
      "explanation": "Iterating the model forward gives E[y_(t+1)] = 2 + 0.6 x 8 = 6.8 and E[y_(t+2)] = 2 + 0.6 x 6.8 = 6.08. The two-step forecast error is e_(t+2) + 0.6 e_(t+1), whose variance is 4 x (1 + 0.6^2) = 5.44. The one-step forecast (6.80) and the one-step error variance (4.00) are the common wrong answers.",
      "topic": "Quantitative Analysis",
      "subtopic": "Time series analysis and forecasting",
      "difficulty": "hard",
      "source": "Quantitative Analysis – Time series analysis and forecasting: multi-step forecasts from an AR(1) model"
    },
    {
      "stem": "Market interest rates fall sharply. Which of the following best explains why the price of a fixed-rate agency pass-through mortgage-backed security (MBS) is likely to rise by less than the price of a comparable non-callable Treasury bond?",
      "options": [
        "Borrowers prepay their mortgages faster, which shortens the MBS cash flows",
        "The guarantor's credit risk increases, which widens the MBS credit spread",
        "The coupon on the pass-through is reset downward, which lowers the cash flows",
        "Scheduled principal payments are deferred, which lengthens the MBS duration"
      ],
      "answer": "A",
      "explanation": "A mortgage borrower holds a prepayment option that becomes more valuable when rates fall and refinancing becomes attractive. Faster prepayments return principal to investors, who must reinvest at lower rates, which shortens the MBS's effective duration and caps its price appreciation. This is negative convexity; the opposite effect, extension of cash flows, occurs when rates rise.",
      "topic": "Financial Markets and Products",
      "subtopic": "Mortgage-backed securities (MBS)",
      "difficulty": "easy",
      "source": "Financial Markets and Products – Mortgage-backed securities: prepayment risk and negative convexity"
    },
    {
      "stem": "A bond has a modified duration of 7.2 and a yield of 4.00%. If the bond's yield rises by 25 basis points, which of the following is closest to the approximate percentage change in the bond's price?",
      "options": [
        "-7.20%",
        "-1.80%",
        "-0.18%",
        "+1.80%"
      ],
      "answer": "B",
      "explanation": "Modified duration gives the approximate percentage price change for a change in yield: %change in price is approximately -D_mod x change in yield = -7.2 x 0.25% = -1.80%. The sign is negative because bond prices fall when yields rise. Using a 1% yield change instead of 25 basis points gives -7.20%, and a positive sign would wrongly imply that prices rise when yields rise.",
      "topic": "Financial Markets and Products",
      "subtopic": "Interest rates and measures of interest rate sensitivity",
      "difficulty": "easy",
      "source": "Financial Markets and Products – Interest rates and measures of interest rate sensitivity: modified duration"
    },
    {
      "stem": "Which of the following statements about the central clearing of standardised over-the-counter (OTC) derivatives is correct?",
      "options": [
        "Initial margin is collected only from the party with the larger mark-to-market loss",
        "Variation margin is posted once at inception to cover potential future exposure",
        "After novation, each original counterparty stays exposed to the other's default",
        "The default fund is a mutualised resource used after a defaulter's margin is exhausted"
      ],
      "answer": "D",
      "explanation": "A central counterparty (CCP) interposes itself through novation, so the original counterparties face the CCP rather than each other. It protects itself with initial margin from both sides, daily variation margin that settles mark-to-market changes, and a default fund to which clearing members contribute; the default fund is drawn on only after the defaulting member's own margin is used up. The other statements misdescribe who posts initial margin, when variation margin is paid, and who bears counterparty risk after novation.",
      "topic": "Financial Markets and Products",
      "subtopic": "Structure and mechanics of over-the-counter (OTC) and exchange markets",
      "difficulty": "medium",
      "source": "Financial Markets and Products – OTC and exchange markets: central counterparties, novation and margining"
    },
    {
      "stem": "A non-dividend-paying stock trades at $100. A one-year European call option on the stock with a strike price of $100 is priced at $10.00. The continuously compounded risk-free rate is 6.0% per year (e^(-0.06) = 0.9418). Assuming no arbitrage, which of the following is closest to the price of a one-year European put option on the same stock with a strike price of $100?",
      "options": [
        "$4.18",
        "$5.82",
        "$10.00",
        "$15.82"
      ],
      "answer": "A",
      "explanation": "Put-call parity for European options on a non-dividend-paying stock states c + K e^(-rT) = p + S0. Therefore p = c - S0 + K e^(-rT) = 10.00 - 100 + 94.18 = 4.18. Ignoring the discounting of the strike gives 10.00, and 5.82 is the no-arbitrage lower bound for the call (S0 - K e^(-rT)), not the put price.",
      "topic": "Financial Markets and Products",
      "subtopic": "Structure, mechanics, and valuation of forwards, futures, swaps, and options",
      "difficulty": "medium",
      "source": "Financial Markets and Products – Options: put-call parity for European options"
    },
    {
      "stem": "The spot exchange rate is 1.1000 US dollars per euro. The one-year interest rate is 5.0% per year in US dollars and 3.0% per year in euros, both with annual compounding. Assuming covered interest rate parity holds, which of the following is closest to the one-year forward exchange rate in US dollars per euro?",
      "options": [
        "1.1550",
        "1.1214",
        "1.1000",
        "1.0790"
      ],
      "answer": "B",
      "explanation": "With the rate quoted as dollars per euro, covered interest parity requires F = S x (1 + r_USD) / (1 + r_EUR) = 1.1000 x 1.05 / 1.03 = 1.1214. The currency with the higher interest rate (the dollar) trades at a forward discount, so more dollars are needed to buy one euro forward. Inverting the ratio gives 1.0790, and applying only the dollar rate gives 1.1550.",
      "topic": "Financial Markets and Products",
      "subtopic": "Foreign exchange risk",
      "difficulty": "medium",
      "source": "Financial Markets and Products – Foreign exchange risk: covered interest rate parity"
    },
    {
      "stem": "A company holds a two-year interest rate swap with a notional principal of $100 million, in which it pays a fixed rate of 4.0% and receives a floating rate, with annual settlement. The floating rate for the first annual period has just been set at 3.4%, and the remaining payment dates are one and two years from today. The one-year and two-year discount factors are 0.9700 and 0.9300, respectively. Which of the following is closest to the current value of the swap to the company?",
      "options": [
        "+$0.60 million",
        "+$0.30 million",
        "-$0.30 million",
        "-$0.60 million"
      ],
      "answer": "C",
      "explanation": "Value the swap as the difference between a floating-rate bond and a fixed-rate bond. Just after the reset, the floating leg is worth (100 + 3.4) x 0.9700 = 100.298, because the floater will be worth par on the next reset date. The fixed leg is worth 4 x 0.9700 + 104 x 0.9300 = 100.600, so the pay-fixed side is worth 100.298 - 100.600 = -$0.302 million. Treating the floating leg as worth par would give -$0.60 million, which ignores the known 3.4% payment.",
      "topic": "Financial Markets and Products",
      "subtopic": "Structure, mechanics, and valuation of forwards, futures, swaps, and options",
      "difficulty": "hard",
      "source": "Financial Markets and Products – Swaps: valuation as a position in fixed-rate and floating-rate bonds"
    },
    {
      "stem": "A portfolio is worth $10 million and its daily returns are normally distributed with a mean of zero and a standard deviation of 1.5%. The one-tailed standard normal critical values are 1.645 for 95% and 2.326 for 99%. Which of the following is closest to the one-day 99% value-at-risk (VaR) of the portfolio?",
      "options": [
        "$1,103,000",
        "$349,000",
        "$247,000",
        "$150,000"
      ],
      "answer": "B",
      "explanation": "With a zero mean, parametric VaR = z x sigma x portfolio value = 2.326 x 1.5% x $10 million, which is about $349,000. The $247,000 figure uses the 95% critical value, $150,000 is only one standard deviation of daily loss, and $1,103,000 scales the 99% VaR to ten days (multiplying by the square root of 10), which the question does not ask for.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Value-at-risk (VaR)",
      "difficulty": "easy",
      "source": "Valuation and Risk Models – Value-at-risk (VaR): parametric (delta-normal) VaR"
    },
    {
      "stem": "Which of the following statements about value-at-risk (VaR) and expected shortfall (ES), measured at the same confidence level, is correct?",
      "options": [
        "ES is never smaller than VaR because it averages the losses at or beyond the VaR level",
        "VaR is subadditive for all loss distributions, whereas ES can violate subadditivity",
        "ES ignores how large the losses beyond the VaR level are, so it is less informative than VaR",
        "VaR is a coherent risk measure, whereas ES is not because it depends on the tail"
      ],
      "answer": "A",
      "explanation": "ES is the expected loss conditional on the loss exceeding VaR, so it is at least as large as VaR at the same confidence level. Unlike VaR, ES reflects the size of the tail losses and is subadditive, which makes it a coherent risk measure. VaR can fail subadditivity, so diversification can appear to increase VaR.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Expected shortfall (ES)",
      "difficulty": "medium",
      "source": "Valuation and Risk Models – Expected shortfall (ES) and coherent risk measures"
    },
    {
      "stem": "A risk manager uses an exponentially weighted moving average (EWMA) model with lambda = 0.94 to estimate daily volatility. The previous day's volatility estimate was 1.00% and the latest daily return was -2.00%. Which of the following is closest to the updated daily volatility estimate?",
      "options": [
        "1.95%",
        "1.18%",
        "1.09%",
        "1.00%"
      ],
      "answer": "C",
      "explanation": "The EWMA update is variance_n = lambda x variance_(n-1) + (1 - lambda) x return_(n-1)^2 = 0.94 x 0.0001 + 0.06 x 0.0004 = 0.000118. Its square root gives a daily volatility of about 1.09%. Reporting the variance figure as 1.18%, or swapping the two weights to get 1.95%, are the typical mistakes.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Estimating volatility and correlation",
      "difficulty": "medium",
      "source": "Valuation and Risk Models – Estimating volatility and correlation: EWMA model"
    },
    {
      "stem": "A bank has a single $5 million loan to a borrower with a one-year probability of default of 2% and a loss given default of 40%, and the loss given default is known with certainty. Which of the following is closest to the unexpected loss, defined as the standard deviation of the loss on this loan?",
      "options": [
        "$40,000",
        "$280,000",
        "$700,000",
        "$1,960,000"
      ],
      "answer": "B",
      "explanation": "With exposure and loss given default fixed, the loss is EAD x LGD with probability PD and zero otherwise, so its standard deviation is EAD x LGD x sqrt(PD x (1 - PD)) = $5 million x 0.40 x 0.14 = $280,000. The expected loss is only PD x LGD x EAD = $40,000, which is the average loss rather than its variability. Omitting the LGD would give $700,000.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Expected and unexpected losses",
      "difficulty": "medium",
      "source": "Valuation and Risk Models – Expected and unexpected losses: loss distribution of a single exposure"
    },
    {
      "stem": "A trader has written 10,000 European call options on a stock. Each option has a delta of 0.6 and a gamma of 0.05. Another call option on the same stock is traded and has a delta of 0.4 and a gamma of 0.10. Which of the following trades would make the position both delta-neutral and gamma-neutral?",
      "options": [
        "Buy 15,000 traded options and take no position in the stock",
        "Buy 5,000 traded options and sell 4,000 shares of the stock",
        "Sell 5,000 traded options and buy 8,000 shares of the stock",
        "Buy 5,000 traded options and buy 4,000 shares of the stock"
      ],
      "answer": "D",
      "explanation": "Gamma can be changed only with options, so neutralise gamma first: the written calls have a gamma of -500 (-10,000 x 0.05), and buying 5,000 traded options adds +500 (5,000 x 0.10). The position delta is then -6,000 + 5,000 x 0.4 = -4,000, so buying 4,000 shares, which have a delta of 1 and no gamma, restores delta neutrality. Fixing delta with options alone (15,000 options) would leave a gamma of +1,000.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Hedging",
      "difficulty": "hard",
      "source": "Valuation and Risk Models – Hedging: delta-neutral and gamma-neutral hedging with the Greeks"
    },
    {
      "stem": "A corporate bond yields 150 basis points more than a risk-free bond of the same maturity, and the expected recovery rate on default is 40%. Using the approximation that the credit spread equals the constant annual hazard rate multiplied by the loss given default, which of the following is closest to the probability that the issuer defaults within two years?",
      "options": [
        "1.78%",
        "2.96%",
        "4.88%",
        "7.23%"
      ],
      "answer": "C",
      "explanation": "With spread approximately equal to hazard rate x (1 - recovery rate), the hazard rate is 1.50% / 0.60 = 2.50% per year. Under a constant hazard rate the two-year survival probability is e^(-0.025 x 2) = 0.9512, so the cumulative default probability is about 4.88%. Using the whole spread as the hazard rate gives 2.96%, multiplying rather than dividing by 0.60 gives 1.78%, and dividing by the recovery rate instead of the loss given default gives 7.23%.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Expected and unexpected losses",
      "difficulty": "hard",
      "source": "Valuation and Risk Models – Credit spreads, hazard rates and default probabilities"
    }
  ]
}
```