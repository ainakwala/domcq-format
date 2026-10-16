```json
{
  "format": "domcq/1",
  "exam": "frm-p1",
  "set": "FRM Exam Part I practice – Mixed core set 1",
  "questions": [
    {
      "stem": "The risk-free rate is 3%, the expected return on the market portfolio is 8%, and a stock has a beta of 1.2. According to the Capital Asset Pricing Model (CAPM), the stock's expected return is closest to:",
      "options": [
        "8.0%",
        "9.0%",
        "9.6%",
        "11.0%"
      ],
      "answer": "B",
      "explanation": "CAPM states that expected return equals the risk-free rate plus beta times the market risk premium. Here the premium is 8% - 3% = 5%, so the expected return is 3% + 1.2 x 5% = 9.0%. Multiplying beta by the full market return (9.6%) ignores that only the premium over the risk-free rate is rewarded.",
      "topic": "Foundations of Risk Management",
      "subtopic": "The Capital Asset Pricing Model (CAPM)",
      "difficulty": "easy",
      "source": "FRM Part I syllabus, Foundations of Risk Management: The Capital Asset Pricing Model (CAPM)"
    },
    {
      "stem": "A portfolio returned 12% over the year. The risk-free rate was 2%, the portfolio's beta was 0.8 and the standard deviation of its returns was 15%. The portfolio's Treynor measure is closest to:",
      "options": [
        "8.0%",
        "10.0%",
        "12.5%",
        "15.0%"
      ],
      "answer": "C",
      "explanation": "The Treynor measure divides excess return by beta, so it measures reward per unit of systematic risk. Here it is (12% - 2%) / 0.8 = 12.5%. The standard deviation is not used; it would enter the Sharpe ratio, which measures reward per unit of total risk.",
      "topic": "Foundations of Risk Management",
      "subtopic": "Risk-adjusted performance measurement",
      "difficulty": "medium",
      "source": "FRM Part I syllabus, Foundations of Risk Management: Risk-adjusted performance measurement (Sharpe, Treynor, Jensen's alpha)"
    },
    {
      "stem": "The 1995 collapse of Barings Bank is most closely associated with which of the following failures?",
      "options": [
        "A trader could hide losses because front-office and back-office duties were not separated.",
        "A concentrated portfolio of subprime mortgage securities lost value when house prices fell.",
        "A hedge fund's leveraged convergence trades lost value when credit spreads widened sharply.",
        "An unhedged foreign currency loan book lost value when an exchange rate peg was abandoned."
      ],
      "answer": "A",
      "explanation": "At Barings, one trader in the Singapore office also controlled settlement and record-keeping, so he could conceal large unauthorised losses in an error account. The case is the standard example of weak segregation of duties and inadequate oversight of a trading desk. The other options describe different episodes: the subprime crisis, LTCM, and currency-peg collapses.",
      "topic": "Foundations of Risk Management",
      "subtopic": "Financial disasters and risk management failures",
      "difficulty": "easy",
      "source": "FRM Part I syllabus, Foundations of Risk Management: Financial disasters and risk management failures (Barings case)"
    },
    {
      "stem": "A two-factor model has a risk-free rate of 2%, a risk premium of 5% on factor 1 and a risk premium of 3% on factor 2. A portfolio has a factor 1 beta of 0.8 and a factor 2 beta of 1.5, and it returned 15.5% over the year. The portfolio's alpha relative to the model is closest to:",
      "options": [
        "7.0%",
        "9.5%",
        "5.5%",
        "5.0%"
      ],
      "answer": "D",
      "explanation": "In a multifactor model the expected return is the risk-free rate plus the sum of each beta times its factor risk premium: 2% + 0.8 x 5% + 1.5 x 3% = 10.5%. Alpha is the realised return minus this expected return, so 15.5% - 10.5% = 5.0%. Omitting the risk-free rate would give 7.0%, and using only factor 1 would give 9.5%.",
      "topic": "Foundations of Risk Management",
      "subtopic": "Multifactor models",
      "difficulty": "hard",
      "source": "FRM Part I syllabus, Foundations of Risk Management: Multifactor models"
    },
    {
      "stem": "A sample of 25 independent monthly returns has a sample standard deviation of 10%. The standard error of the sample mean return is closest to:",
      "options": [
        "0.4%",
        "2.0%",
        "5.0%",
        "10.0%"
      ],
      "answer": "B",
      "explanation": "The standard error of the sample mean equals the sample standard deviation divided by the square root of the number of observations. Here it is 10% / sqrt(25) = 10% / 5 = 2.0%. Dividing by n instead of its square root (0.4%) is a common error.",
      "topic": "Quantitative Analysis",
      "subtopic": "Population and sample statistics",
      "difficulty": "easy",
      "source": "FRM Part I syllabus, Quantitative Analysis: Population and sample statistics (standard error of the sample mean)"
    },
    {
      "stem": "5% of a bank's loans will default. A scoring model flags 90% of the loans that will default and also flags 10% of the loans that will not default. A loan chosen at random is flagged by the model. The probability that this loan will default is closest to:",
      "options": [
        "32%",
        "45%",
        "64%",
        "90%"
      ],
      "answer": "A",
      "explanation": "By Bayes' theorem, P(default | flagged) = (0.90 x 0.05) / (0.90 x 0.05 + 0.10 x 0.95) = 0.045 / 0.140, which is about 32%. Because defaults are rare, most flagged loans are false positives even though the model catches 90% of defaults. The 90% figure is the reverse conditional probability, P(flagged | default).",
      "topic": "Quantitative Analysis",
      "subtopic": "Bayesian analysis",
      "difficulty": "medium",
      "source": "FRM Part I syllabus, Quantitative Analysis: Bayesian analysis (Bayes' theorem)"
    },
    {
      "stem": "A stationary AR(1) process is given by Y(t) = 2.0 + 0.6 Y(t-1) + e(t), where e(t) is white noise with zero mean. The latest observed value is Y(T) = 6.0. The two-step-ahead forecast of Y(T+2) is closest to:",
      "options": [
        "5.00",
        "5.20",
        "5.36",
        "5.60"
      ],
      "answer": "C",
      "explanation": "Forecasts are built iteratively with future shocks set to zero. The one-step forecast is 2.0 + 0.6 x 6.0 = 5.6, and the two-step forecast is 2.0 + 0.6 x 5.6 = 5.36. The forecasts converge towards the long-run mean of 2.0 / (1 - 0.6) = 5.0 as the horizon grows, but they have not reached it after two steps.",
      "topic": "Quantitative Analysis",
      "subtopic": "Time series analysis and forecasting",
      "difficulty": "hard",
      "source": "FRM Part I syllabus, Quantitative Analysis: Time series analysis and forecasting (autoregressive models and forecasting)"
    },
    {
      "stem": "A risk analyst uses Monte Carlo simulation with independent trials to estimate an expected loss. To reduce the standard error of the estimate to one-tenth of its current value, the number of trials must be multiplied by approximately:",
      "options": [
        "3.2",
        "10",
        "20",
        "100"
      ],
      "answer": "D",
      "explanation": "The standard error of a Monte Carlo estimate falls in proportion to 1 / sqrt(N), where N is the number of independent trials. Cutting the error by a factor of 10 therefore requires 10 squared, or 100 times, as many trials. This slow convergence is why variance reduction techniques are valuable.",
      "topic": "Quantitative Analysis",
      "subtopic": "Simulation methods",
      "difficulty": "easy",
      "source": "FRM Part I syllabus, Quantitative Analysis: Simulation methods (Monte Carlo standard error)"
    },
    {
      "stem": "A non-dividend-paying stock trades at $100. The continuously compounded risk-free rate is 4% per year. The no-arbitrage price of a forward contract on the stock with six months to maturity is closest to:",
      "options": [
        "$98.02",
        "$102.02",
        "$104.08",
        "$106.00"
      ],
      "answer": "B",
      "explanation": "For an asset with no income or storage costs, the forward price equals the spot price compounded at the risk-free rate: F = S x e^(rT) = 100 x e^(0.04 x 0.5) = 100 x e^0.02, which is about $102.02. Any other price lets an arbitrageur lock in a risk-free profit by trading the stock against the forward.",
      "topic": "Financial Markets and Products",
      "subtopic": "Structure, mechanics, and valuation of forwards, futures, swaps, and options",
      "difficulty": "easy",
      "source": "FRM Part I syllabus, Financial Markets and Products: Pricing of forwards and futures (cost-of-carry)"
    },
    {
      "stem": "A bond has a modified duration of 7.0 and a convexity of 60. If its yield rises by 100 basis points, the bond's percentage price change, estimated using both duration and convexity, is closest to:",
      "options": [
        "-7.3%",
        "-7.0%",
        "-6.7%",
        "-6.4%"
      ],
      "answer": "C",
      "explanation": "The approximation is dP/P = -D x dy + 0.5 x C x dy^2. With dy = 0.01 this gives -7.0% + 0.5 x 60 x 0.0001 = -7.0% + 0.3% = -6.7%. Convexity adds to the price in both directions, so it reduces the loss when yields rise; duration alone overstates the fall.",
      "topic": "Financial Markets and Products",
      "subtopic": "Interest rates and measures of interest rate sensitivity",
      "difficulty": "medium",
      "source": "FRM Part I syllabus, Financial Markets and Products: Duration and convexity"
    },
    {
      "stem": "A European call option on a non-dividend-paying stock has a value of $6.00. The stock price is $40, the strike price is $40, the continuously compounded risk-free rate is 5% and the time to expiry is one year. According to put-call parity, the value of a European put option with the same strike and expiry is closest to:",
      "options": [
        "$7.95",
        "$1.95",
        "$6.00",
        "$4.05"
      ],
      "answer": "D",
      "explanation": "Put-call parity states that C + K x e^(-rT) = P + S. Rearranged, P = C - S + K x e^(-rT) = 6.00 - 40 + 40 x e^(-0.05) = 6.00 - 40 + 38.05, which is about $4.05. The strike must be discounted at the risk-free rate; ignoring discounting would give $6.00.",
      "topic": "Financial Markets and Products",
      "subtopic": "Structure, mechanics, and valuation of forwards, futures, swaps, and options",
      "difficulty": "medium",
      "source": "FRM Part I syllabus, Financial Markets and Products: Put-call parity for European options"
    },
    {
      "stem": "A firm holds an asset worth $20 million and plans to hedge it by shorting futures. Each futures contract has a notional value of $400,000. The correlation between changes in the asset price and the futures price is 0.9, the standard deviation of the asset's price changes is 4% per month and that of the futures price changes is 5% per month. The minimum-variance hedge requires shorting a number of contracts closest to:",
      "options": [
        "36",
        "45",
        "50",
        "56"
      ],
      "answer": "A",
      "explanation": "The minimum-variance hedge ratio is h = correlation x (sigma spot / sigma futures) = 0.9 x (4% / 5%) = 0.72. The number of contracts is h x (exposure / contract notional) = 0.72 x 20,000,000 / 400,000 = 36. A one-for-one hedge would need 50 contracts, but that over-hedges because the futures price is more volatile than the asset and the two are imperfectly correlated.",
      "topic": "Financial Markets and Products",
      "subtopic": "Hedging with derivatives",
      "difficulty": "medium",
      "source": "FRM Part I syllabus, Financial Markets and Products: Hedging with derivatives (minimum-variance hedge ratio)"
    },
    {
      "stem": "The spot exchange rate is 1.2000 US dollars per euro. The one-year interest rate is 3% in US dollars and 1% in euros, both with annual compounding. The no-arbitrage one-year forward exchange rate in US dollars per euro is closest to:",
      "options": [
        "1.1767",
        "1.2120",
        "1.2238",
        "1.2360"
      ],
      "answer": "C",
      "explanation": "Covered interest rate parity gives F = S x (1 + r domestic) / (1 + r foreign) = 1.2000 x 1.03 / 1.01, which is about 1.2238. The euro has the lower interest rate, so it trades at a forward premium against the dollar. Inverting the ratio of interest rates would give 1.1767, which reverses the direction of the adjustment.",
      "topic": "Financial Markets and Products",
      "subtopic": "Foreign exchange risk",
      "difficulty": "medium",
      "source": "FRM Part I syllabus, Financial Markets and Products: Foreign exchange risk (covered interest rate parity)"
    },
    {
      "stem": "Which of the following statements best explains why a mortgage pass-through security typically exhibits negative convexity?",
      "options": [
        "Falling rates lead to slower prepayments, which lengthens the security's expected cash flows.",
        "Rising rates lead to faster prepayments, which shortens the security's expected cash flows.",
        "Servicers keep part of the interest, so the coupon investors receive is below the mortgage rate.",
        "Falling rates lead to faster prepayments, which limits price gains as principal is returned at par."
      ],
      "answer": "D",
      "explanation": "Homeowners hold a prepayment option, so when rates fall they refinance and investors receive principal early at par, which caps price appreciation. When rates rise, prepayments slow and the security's life extends, so the price falls by more than a non-callable bond with similar cash flows would. This asymmetric response is negative convexity.",
      "topic": "Financial Markets and Products",
      "subtopic": "Mortgage-backed securities (MBS)",
      "difficulty": "easy",
      "source": "FRM Part I syllabus, Financial Markets and Products: Mortgage-backed securities (prepayment risk and convexity)"
    },
    {
      "stem": "A portfolio is worth $10 million. Its daily returns are normally distributed with a mean of zero, a standard deviation of 1.2% and no autocorrelation. The 10-day 99% value-at-risk (VaR) is closest to (use z = 2.326 for 99% and z = 1.645 for 95%):",
      "options": [
        "$0.88 million",
        "$0.28 million",
        "$0.62 million",
        "$2.79 million"
      ],
      "answer": "A",
      "explanation": "The daily standard deviation is $120,000, so the 10-day standard deviation is $120,000 x sqrt(10), or about $379,500. Multiplying by 2.326 gives a 10-day 99% VaR of about $0.88 million. The $0.28 million figure is the one-day VaR, the $0.62 million figure uses the 95% quantile, and $2.79 million wrongly scales by 10 instead of the square root of 10.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Value-at-risk (VaR)",
      "difficulty": "medium",
      "source": "FRM Part I syllabus, Valuation and Risk Models: Value-at-risk (parametric VaR and square-root-of-time scaling)"
    },
    {
      "stem": "Which of the following statements about expected shortfall (ES) is correct?",
      "options": [
        "At a given confidence level, ES is always lower than VaR.",
        "ES satisfies subadditivity, so a combined portfolio's ES never exceeds the sum of the ES of its parts.",
        "ES depends only on the loss quantile at the confidence level, not on the tail beyond it.",
        "ES cannot be estimated by historical simulation because it needs a parametric distribution."
      ],
      "answer": "B",
      "explanation": "Expected shortfall is the average loss beyond the VaR threshold, so it is at least as large as VaR at the same confidence level and reflects tail severity. It is a coherent risk measure, which includes subadditivity, whereas VaR can violate it and so can penalise diversification. ES can be estimated from historical data by averaging the losses in the tail.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Expected shortfall (ES)",
      "difficulty": "medium",
      "source": "FRM Part I syllabus, Valuation and Risk Models: Expected shortfall (ES) and coherent risk measures"
    },
    {
      "stem": "An analyst uses an exponentially weighted moving average (EWMA) model with a decay factor of 0.94. The previous day's volatility estimate was 1.00% per day and the previous day's return was 2.00%. The updated daily volatility estimate is closest to:",
      "options": [
        "1.50%",
        "1.00%",
        "1.95%",
        "1.09%"
      ],
      "answer": "D",
      "explanation": "The EWMA update is variance(new) = 0.94 x variance(old) + 0.06 x return^2 = 0.94 x 0.0001 + 0.06 x 0.0004 = 0.000118. Taking the square root gives a daily volatility of about 1.09%. The large return raises the estimate only modestly because the model gives 94% of the weight to the prior variance.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Estimating volatility and correlation",
      "difficulty": "medium",
      "source": "FRM Part I syllabus, Valuation and Risk Models: Estimating volatility and correlation (EWMA)"
    },
    {
      "stem": "A bank has a $5 million loan with a probability of default of 2% over one year. The loss given default is a fixed 40%, so the only uncertainty is whether the borrower defaults. The standard deviation of the loan's one-year credit loss (its unexpected loss) is closest to:",
      "options": [
        "$280,000",
        "$39,200",
        "$40,000",
        "$100,000"
      ],
      "answer": "A",
      "explanation": "With a fixed loss given default, the loss is EAD x LGD x a Bernoulli variable, so its standard deviation is EAD x LGD x sqrt(PD x (1 - PD)). That is $5,000,000 x 0.40 x sqrt(0.02 x 0.98) = $2,000,000 x 0.14 = $280,000. The expected loss is only $40,000, so unexpected loss is far larger than expected loss for a single low-PD exposure.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Expected and unexpected losses",
      "difficulty": "hard",
      "source": "FRM Part I syllabus, Valuation and Risk Models: Expected and unexpected losses"
    },
    {
      "stem": "A stock trades at $50. Over one year it will either rise to $60 or fall to $40. The continuously compounded risk-free rate is 5%. Using a one-step binomial tree and risk-neutral valuation, the value of a one-year European call option with a strike price of $50 is closest to:",
      "options": [
        "$4.76",
        "$5.00",
        "$5.98",
        "$6.28"
      ],
      "answer": "C",
      "explanation": "The risk-neutral probability of an up move is p = (e^0.05 - 0.8) / (1.2 - 0.8), which is about 0.628. The call pays $10 in the up state and zero in the down state, so its value is e^(-0.05) x 0.628 x 10, or about $5.98. Using p = 0.5 gives $4.76, and omitting the discounting gives $6.28.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Option valuation",
      "difficulty": "hard",
      "source": "FRM Part I syllabus, Valuation and Risk Models: Option valuation (binomial trees and risk-neutral valuation)"
    },
    {
      "stem": "Which of the following statements about reverse stress testing is correct?",
      "options": [
        "It reapplies the largest historical market move to the current portfolio to measure the resulting loss.",
        "It starts from a defined failure outcome and works backward to the scenarios that could produce it.",
        "It replaces scenario analysis with a statistical loss estimate at a fixed confidence level.",
        "It is limited to the trading book because banking book positions cannot be shocked in a scenario."
      ],
      "answer": "B",
      "explanation": "Reverse stress testing begins with an outcome the firm wants to avoid, such as breaching a capital requirement or becoming insolvent, and then identifies the combinations of events that could cause it. This helps management find vulnerabilities that forward-looking scenarios based on past events may miss. It applies to the whole firm, not just the trading book.",
      "topic": "Valuation and Risk Models",
      "subtopic": "Stress testing and scenario analysis",
      "difficulty": "medium",
      "source": "FRM Part I syllabus, Valuation and Risk Models: Stress testing and scenario analysis (reverse stress testing)"
    }
  ]
}
```