```json
{
  "format": "domcq/1",
  "exam": "caia-l1",
  "set": "CAIA Level I Exam practice – Mixed syllabus set 1",
  "questions": [
    {
      "stem": "Under the standard of fiduciary duty, which of the following BEST describes the duty of loyalty that an investment manager owes to a client?",
      "options": [
        "Acting with the care, skill and diligence that a prudent professional would use",
        "Treating every client identically regardless of their investment objectives",
        "Placing the client's interests ahead of the manager's own and those of the firm",
        "Disclosing the full holdings of all firm portfolios to any client upon request"
      ],
      "answer": "C",
      "explanation": "The duty of loyalty requires a fiduciary to act for the benefit of the client and to put the client's interests before personal or firm interests, avoiding or managing conflicts accordingly. Acting with prudent care, skill and diligence is the separate duty of care (prudence). Fair dealing requires treating clients fairly, not identically, and loyalty does not require disclosing other clients' holdings.",
      "topic": "CAIA Ethical Principles",
      "subtopic": "Ethics, Professionalism and Fiduciary Responsibilities",
      "difficulty": "easy",
      "source": "CAIA Level I: Ethics, Professionalism and Fiduciary Responsibilities – fiduciary duties of loyalty, prudence and care"
    },
    {
      "stem": "An analyst at a hedge fund combines public industry reports, her own channel checks with suppliers, and non-material nonpublic comments from a company's customer service staff. From these pieces she concludes that the company will miss consensus earnings forecasts and recommends selling the stock. The analyst's recommendation is BEST described as:",
      "options": [
        "a violation, because part of her analysis relied on nonpublic information",
        "permissible, because she applied the mosaic approach to non-material inputs",
        "a violation unless the company first confirms her conclusion in public",
        "permissible only if she shares her conclusion with the company before trading"
      ],
      "answer": "B",
      "explanation": "Under the mosaic theory, an analyst may reach a conclusion that would be material by combining public information with nonpublic information that is not itself material. Because no single input was material nonpublic information, acting on the resulting conclusion does not violate the prohibition on trading on material nonpublic information. There is no requirement for the company to confirm the conclusion or for the analyst to share it with the company.",
      "topic": "CAIA Ethical Principles",
      "subtopic": "Ethics, Professionalism and Fiduciary Responsibilities",
      "difficulty": "medium",
      "source": "CAIA Level I: Ethics, Professionalism and Fiduciary Responsibilities – material nonpublic information and the mosaic theory"
    },
    {
      "stem": "Which performance measure divides a portfolio's return in excess of a target or minimum acceptable return by the downside deviation of returns below that target?",
      "options": [
        "Sharpe ratio",
        "Treynor ratio",
        "Information ratio",
        "Sortino ratio"
      ],
      "answer": "D",
      "explanation": "The Sortino ratio replaces total standard deviation with downside deviation, so only returns below the target count as risk. This suits strategies with asymmetric return distributions, where upside volatility should not be penalised. The Sharpe ratio uses total standard deviation, the Treynor ratio uses beta, and the information ratio uses tracking error relative to a benchmark.",
      "topic": "Introduction to Alternative Investments",
      "subtopic": "Measures of Risk and Performance",
      "difficulty": "easy",
      "source": "CAIA Level I: Measures of Risk and Performance – ratio-based performance measures (Sharpe, Treynor, Sortino, information ratio)"
    },
    {
      "stem": "A fund's monthly returns are independent and identically distributed with a standard deviation of 2.0%. What is the fund's annualized standard deviation, closest to?",
      "options": [
        "3.46%",
        "6.93%",
        "8.49%",
        "24.00%"
      ],
      "answer": "B",
      "explanation": "When returns are independent across periods, variance scales linearly with time, so standard deviation scales with the square root of the number of periods. The annualized standard deviation is 2.0% multiplied by the square root of 12, which is about 3.464, giving roughly 6.93%. Multiplying by 12 (24%) wrongly scales standard deviation as if it were a mean or variance.",
      "topic": "Introduction to Alternative Investments",
      "subtopic": "Statistical Foundations",
      "difficulty": "easy",
      "source": "CAIA Level I: Statistical Foundations – annualizing variance and standard deviation (square-root-of-time rule)"
    },
    {
      "stem": "A portfolio worth $50 million has normally distributed annual returns with an expected return of 0% and a standard deviation of 12%. Using a one-tailed z-value of 1.645, the portfolio's one-year 95% value at risk is closest to:",
      "options": [
        "$6.00 million",
        "$7.69 million",
        "$9.87 million",
        "$11.76 million"
      ],
      "answer": "C",
      "explanation": "With a zero expected return, parametric VaR equals the z-value times the standard deviation times portfolio value: 1.645 x 12% x $50 million = $9.87 million. This is the loss that should be exceeded only 5% of the time over one year if returns are normal. Using 1.282 gives the 90% VaR, and using 1.96 gives a two-tailed 95% figure, which overstates the one-tailed measure.",
      "topic": "Introduction to Alternative Investments",
      "subtopic": "Measures of Risk and Performance",
      "difficulty": "medium",
      "source": "CAIA Level I: Measures of Risk and Performance – value at risk under the normal distribution"
    },
    {
      "stem": "A stock trades at $100. Over one period it will either rise to $120 or fall to $90. The riskless rate for the period is 5% (simple, not annualized). Using a one-period binomial model with risk-neutral valuation, the value of a European call option with a strike price of $100 expiring at the end of the period is closest to:",
      "options": [
        "$9.52",
        "$10.00",
        "$12.70",
        "$19.05"
      ],
      "answer": "A",
      "explanation": "The risk-neutral probability of the up move is (1.05 - 0.90) / (1.20 - 0.90) = 0.50. The call pays $20 in the up state and $0 in the down state, so its risk-neutral expected payoff is $10, which discounted at the riskless rate gives $10 / 1.05 = $9.52. Risk-neutral valuation works because the option can be replicated with the stock and riskless borrowing, so investors' actual probabilities and risk preferences do not enter the price.",
      "topic": "Introduction to Alternative Investments",
      "subtopic": "Derivatives and Risk-Neutral Valuation",
      "difficulty": "hard",
      "source": "CAIA Level I: Derivatives and Risk-Neutral Valuation – binomial option pricing and risk-neutral probabilities"
    },
    {
      "stem": "Returns calculated from appraisal-based valuations, such as those used in private real estate indices, typically exhibit which of the following properties relative to the true underlying returns?",
      "options": [
        "Negative first-order autocorrelation and overstated volatility",
        "Zero autocorrelation and accurately measured volatility",
        "Positive first-order autocorrelation and understated volatility",
        "Positive first-order autocorrelation and overstated volatility"
      ],
      "answer": "C",
      "explanation": "Appraisers anchor on prior valuations and update them only partially and with a lag, which smooths reported returns. Smoothing spreads true price changes across several periods, producing positive autocorrelation and making measured volatility (and correlation with other assets) lower than the true values. Unsmoothing techniques attempt to remove this autocorrelation to estimate the underlying risk.",
      "topic": "Introduction to Alternative Investments",
      "subtopic": "Statistical Foundations",
      "difficulty": "medium",
      "source": "CAIA Level I: Statistical Foundations – return smoothing, autocorrelation and unsmoothing of appraisal-based returns"
    },
    {
      "stem": "The spot price of a storable commodity is $80. The continuously compounded riskless rate is 4% per year, storage costs are 2% per year (continuously compounded, proportional to price), and the convenience yield is 1% per year. Using the cost-of-carry model, the one-year futures price is closest to:",
      "options": [
        "$83.26",
        "$85.80",
        "$82.44",
        "$84.10"
      ],
      "answer": "D",
      "explanation": "Under the cost-of-carry model, F = S x e^((r + c - y)T), where storage costs add to the cost of carry and convenience yield reduces it. Here F = 80 x e^(0.04 + 0.02 - 0.01) = 80 x e^0.05, which is about $84.10. Adding the convenience yield instead of subtracting it gives $85.80, and ignoring storage and convenience yield gives $83.26.",
      "topic": "Real Assets",
      "subtopic": "Commodities",
      "difficulty": "hard",
      "source": "CAIA Level I: Commodities – cost-of-carry model, storage costs and convenience yield"
    },
    {
      "stem": "A stabilized office property is expected to produce net operating income of $2.4 million next year. Comparable properties trade at a capitalization rate of 6%. Using direct capitalization, the property's estimated value is closest to:",
      "options": [
        "$14.4 million",
        "$40.0 million",
        "$42.4 million",
        "$24.0 million"
      ],
      "answer": "B",
      "explanation": "Direct capitalization values a property by dividing expected net operating income by the market capitalization rate: $2.4 million / 0.06 = $40.0 million. The cap rate acts like an income yield and implicitly reflects the required return less expected growth in NOI. Multiplying NOI by the cap rate, or adding a growth adjustment not stated in the question, produces the incorrect figures.",
      "topic": "Real Assets",
      "subtopic": "Real Estate Methods",
      "difficulty": "easy",
      "source": "CAIA Level I: Real Estate Methods – valuation using capitalization rates and net operating income"
    },
    {
      "stem": "Which of the following real estate investments is MOST likely to be classified in the opportunistic style?",
      "options": [
        "A fully leased multi-tenant office building in a major city financed with 30% leverage",
        "A stabilized apartment complex with long-term leases and minimal near-term capital needs",
        "Ground-up development of a mixed-use project in an emerging market using high leverage",
        "A neighborhood shopping center needing modest renovation to reduce its vacancy rate"
      ],
      "answer": "C",
      "explanation": "Real estate styles are usually classified as core, value-added and opportunistic, in order of rising risk and expected return. Opportunistic investments derive most of their return from appreciation and typically involve development, emerging markets, distressed situations and high leverage. Fully leased or stabilized properties with low leverage are core, and modest repositioning to reduce vacancy is typical of value-added.",
      "topic": "Real Assets",
      "subtopic": "Real Estate Assets",
      "difficulty": "medium",
      "source": "CAIA Level I: Real Estate – core, value-added and opportunistic real estate styles"
    },
    {
      "stem": "Compared with a brownfield infrastructure investment, a greenfield infrastructure investment is MOST likely to involve:",
      "options": [
        "construction and ramp-up risk, because the asset must be built before it earns revenue",
        "an established operating history that allows its cash flows to be estimated precisely",
        "lower expected returns, because demand for the asset's services is already proven",
        "immediate and stable distributions from an existing regulated revenue stream"
      ],
      "answer": "A",
      "explanation": "Greenfield infrastructure refers to new assets that must be designed and built, so investors bear construction, cost-overrun and demand ramp-up risk before cash flows begin. Brownfield assets are existing, operating assets with observable cash flow histories and are generally lower risk. To compensate for the extra uncertainty, greenfield projects typically offer higher expected returns.",
      "topic": "Real Assets",
      "subtopic": "Infrastructure",
      "difficulty": "medium",
      "source": "CAIA Level I: Infrastructure – greenfield versus brownfield investments"
    },
    {
      "stem": "The private equity 'J-curve' describes a fund's cumulative returns over its life. Which of the following BEST describes that pattern?",
      "options": [
        "Highest in the early years, then declining steadily as investments are exited",
        "Roughly constant over the fund's life because of conservative valuation practices",
        "Positive in the early years from rapid deployment, then negative as fees accumulate",
        "Negative in the early years from fees and costs, then rising as investments mature"
      ],
      "answer": "D",
      "explanation": "In the early years, management fees, organizational costs and conservative valuations of new investments produce negative cumulative returns and net cash outflows to limited partners. As portfolio companies mature and are revalued or exited, distributions grow and cumulative returns rise, tracing a J shape. The depth and length of the J-curve matter for investors' liquidity planning and commitment pacing.",
      "topic": "Private Equity",
      "subtopic": "Private Equity Investing",
      "difficulty": "easy",
      "source": "CAIA Level I: Private Equity Investing – fund life cycle, cash flow patterns and the J-curve"
    },
    {
      "stem": "A private equity fund has $100 million of commitments, of which $80 million has been called. The fund has distributed $60 million to limited partners and reports a residual net asset value of $70 million. The fund's total value to paid-in (TVPI) multiple is closest to:",
      "options": [
        "0.75x",
        "1.63x",
        "1.30x",
        "0.88x"
      ],
      "answer": "B",
      "explanation": "TVPI equals cumulative distributions plus residual NAV divided by paid-in capital: ($60 million + $70 million) / $80 million = 1.63x. TVPI is the sum of DPI (realized, $60m / $80m = 0.75x) and RVPI (unrealized, $70m / $80m = 0.88x). The denominator is called capital, not total commitments, which is why dividing by $100 million gives an incorrect 1.30x.",
      "topic": "Private Equity",
      "subtopic": "Private Equity Investing",
      "difficulty": "medium",
      "source": "CAIA Level I: Private Equity – performance measures DPI, RVPI and TVPI"
    },
    {
      "stem": "A lender has a $25 million exposure to a borrower with a one-year probability of default of 3%. The expected recovery rate in default is 40%. The lender's one-year expected credit loss is closest to:",
      "options": [
        "$300,000",
        "$750,000",
        "$450,000",
        "$270,000"
      ],
      "answer": "C",
      "explanation": "Expected loss equals exposure at default times probability of default times loss given default, where loss given default is one minus the recovery rate. Here $25 million x 3% x (1 - 0.40) = $450,000. Using the recovery rate in place of loss given default gives $300,000, and ignoring recovery altogether gives $750,000.",
      "topic": "Private Debt",
      "subtopic": "Credit Risk and Credit Derivatives",
      "difficulty": "easy",
      "source": "CAIA Level I: Credit Risk and Credit Derivatives – expected loss, probability of default and recovery rates"
    },
    {
      "stem": "A collateralized debt obligation holds a $200 million collateral pool financed by three tranches: equity (0%-4% of the pool), mezzanine (4%-12%) and senior (12%-100%). Losses are allocated sequentially from the most junior tranche upward. If the collateral pool suffers losses of $14 million, the percentage loss on the mezzanine tranche's principal is closest to:",
      "options": [
        "37.5%",
        "75.0%",
        "87.5%",
        "58.3%"
      ],
      "answer": "A",
      "explanation": "The equity tranche is $8 million (4% of $200 million) and absorbs the first $8 million of losses, leaving $6 million to pass to the mezzanine tranche. The mezzanine tranche is $16 million (8% of the pool), so its loss is $6 million / $16 million = 37.5%. This shows how subordination concentrates losses: a 7% pool loss produces a much larger percentage loss on a thin junior tranche, while the senior tranche is untouched.",
      "topic": "Private Debt",
      "subtopic": "Introduction to Structuring",
      "difficulty": "hard",
      "source": "CAIA Level I: Introduction to Structuring – tranching, subordination and loss allocation in CDOs"
    },
    {
      "stem": "Compared with a catastrophe bond that uses an indemnity trigger, a catastrophe bond that uses a parametric trigger MOST likely:",
      "options": [
        "eliminates the sponsor's basis risk because payouts equal its actual losses",
        "increases moral hazard because the sponsor controls how its losses are adjusted",
        "lengthens the time needed to settle claims after a catastrophic event occurs",
        "exposes the sponsor to basis risk between the payout and its actual losses"
      ],
      "answer": "D",
      "explanation": "A parametric trigger pays based on an objective physical measure of the event, such as earthquake magnitude or wind speed at specified locations, rather than on the sponsor's own claims. This reduces moral hazard and speeds settlement, which appeals to investors. The trade-off is basis risk for the sponsor, because the bond's payout may differ from the losses the sponsor actually incurs.",
      "topic": "Private Debt",
      "subtopic": "Insurance Linked Strategies",
      "difficulty": "medium",
      "source": "CAIA Level I: Insurance Linked Strategies – catastrophe bond triggers (indemnity, parametric, industry index)"
    },
    {
      "stem": "A convertible arbitrage manager buys a convertible bond and shorts the issuer's common stock in a delta-neutral ratio. Holding all else constant, which of the following developments is MOST likely to benefit the position?",
      "options": [
        "A decline in the implied volatility priced into the bond's embedded option",
        "A widening of the issuer's credit spread relative to government bonds",
        "A sharp increase in the realized volatility of the underlying stock",
        "A recall of borrowed shares that forces the short stock position to close"
      ],
      "answer": "C",
      "explanation": "A delta-neutral long convertible, short stock position is long gamma, because the embedded call option's delta changes as the stock moves. Higher realized volatility lets the manager rebalance by selling stock after rises and buying after falls, capturing gains from the option's convexity. Falling implied volatility, wider credit spreads and short squeezes or share recalls are key risks to the strategy.",
      "topic": "Hedge Funds",
      "subtopic": "Relative Value Hedge Funds",
      "difficulty": "medium",
      "source": "CAIA Level I: Relative Value Hedge Funds – convertible bond arbitrage, delta hedging and gamma"
    },
    {
      "stem": "Research by Fung and Hsieh found that the returns of trend-following managed futures funds are BEST replicated by which option-based strategy?",
      "options": [
        "Long positions in lookback straddles",
        "Short positions in out-of-the-money index puts",
        "Covered call writing on commodity futures",
        "Short positions in at-the-money straddles"
      ],
      "answer": "A",
      "explanation": "Fung and Hsieh showed that a trend follower's payoff resembles a lookback straddle, which pays the difference between the highest and lowest prices over a period. This captures the strategy's positive convexity: trend followers tend to profit from large sustained moves in either direction and lose modestly in trendless markets. Short put or short straddle strategies instead have negatively skewed, short-volatility payoffs.",
      "topic": "Hedge Funds",
      "subtopic": "Macro and Managed Futures Funds",
      "difficulty": "hard",
      "source": "CAIA Level I: Macro and Managed Futures Funds – trend following, convexity and lookback straddle replication"
    },
    {
      "stem": "Company A has announced a stock-for-stock acquisition of Company T, offering 0.5 shares of A for each share of T. Company A trades at $60 and Company T trades at $27. Which position would a merger arbitrage manager MOST likely establish, and what is the gross spread per share of T?",
      "options": [
        "Buy T and buy 0.5 shares of A per share of T; spread of $3.00",
        "Buy T and short 0.5 shares of A per share of T; spread of $3.00",
        "Short T and buy 0.5 shares of A per share of T; spread of $3.00",
        "Buy T and short 0.5 shares of A per share of T; spread of $1.50"
      ],
      "answer": "B",
      "explanation": "In a stock-for-stock deal, the arbitrageur buys the target and shorts the acquirer in the exchange ratio, locking in the spread while hedging movements in the acquirer's share price. Each T share converts into 0.5 x $60 = $30 of A stock, so the gross spread is $30 - $27 = $3.00 per T share. The main risk is that the deal fails, in which case the target's price typically falls sharply.",
      "topic": "Hedge Funds",
      "subtopic": "Event-Driven Hedge Funds",
      "difficulty": "medium",
      "source": "CAIA Level I: Event-Driven Hedge Funds – merger arbitrage in cash and stock-for-stock deals"
    },
    {
      "stem": "In the Bitcoin network, which mechanism is used to reach consensus on the order of transactions and to make rewriting past blocks economically costly?",
      "options": [
        "Proof of stake, in which validators lock up native tokens as collateral",
        "Delegated proof of stake, in which holders elect a small set of block producers",
        "Proof of authority, in which pre-approved identified nodes validate the blocks",
        "Proof of work, in which miners expend computing effort to find a valid block hash"
      ],
      "answer": "D",
      "explanation": "Bitcoin uses proof of work: miners compete to find a block hash below a difficulty target, and the chain with the most cumulative work is accepted as valid. Because each block references the previous block's hash, altering history would require redoing the work for that block and every later block faster than the honest network, which is prohibitively expensive. Proof of stake, used by Ethereum since 2022, secures the chain with staked collateral instead of computation.",
      "topic": "Digital Assets",
      "subtopic": "Distributed Ledger Technology",
      "difficulty": "medium",
      "source": "CAIA Level I: Distributed Ledger Technology – consensus mechanisms, proof of work and proof of stake"
    }
  ]
}
```
