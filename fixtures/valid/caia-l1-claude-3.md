```json
{
  "format": "domcq/1",
  "exam": "caia-l1",
  "set": "CAIA Level I Exam practice – Full syllabus mixed set",
  "questions": [
    {
      "stem": "Which fiduciary duty BEST describes an investment manager's obligation to act solely in the interest of clients and to place clients' interests ahead of the manager's own?",
      "options": [
        "Duty of care",
        "Duty of loyalty",
        "Duty of confidentiality",
        "Duty of disclosure"
      ],
      "answer": "B",
      "explanation": "The duty of loyalty requires a fiduciary to act for the exclusive benefit of the client, avoid or manage conflicts of interest, and never put personal interests ahead of the client's. The duty of care is a separate obligation to act with the skill, diligence and prudence of a knowledgeable professional. Together, loyalty and care are the two core fiduciary duties.",
      "topic": "CAIA Ethical Principles",
      "subtopic": "Ethics, Professionalism and Fiduciary Responsibilities",
      "difficulty": "easy",
      "source": "CAIA Level I, Ethics, Professionalism and Fiduciary Responsibilities: fiduciary duties of loyalty and care"
    },
    {
      "stem": "A trustee manages a diversified portfolio for the beneficiaries of a trust. One small holding, an allocation to a volatile private equity fund, has lost value since purchase. Under the prudent investor standard, the prudence of that investment is BEST judged by:",
      "options": [
        "its individual return performance since it was purchased",
        "whether it would have been suitable as the trust's only holding",
        "its role in the overall portfolio and strategy, given what was known when the decision was made",
        "whether it outperformed a public equity index over the same holding period"
      ],
      "answer": "C",
      "explanation": "The prudent investor standard evaluates investments in the context of the portfolio as a whole and as part of an overall strategy with risk and return objectives suited to the trust. Prudence is a test of process and conduct at the time of the decision, not of outcomes judged with hindsight. A single volatile asset can be prudent if it improves the risk-return profile of the total portfolio.",
      "topic": "CAIA Ethical Principles",
      "subtopic": "Ethics, Professionalism and Fiduciary Responsibilities",
      "difficulty": "medium",
      "source": "CAIA Level I, Ethics, Professionalism and Fiduciary Responsibilities: prudent investor standard and portfolio context"
    },
    {
      "stem": "Which of the following is MOST characteristic of alternative investments relative to traditional stocks and bonds?",
      "options": [
        "Return distributions that often show skewness and excess kurtosis",
        "Market prices that are continuously observable on public exchanges",
        "Fee structures that are typically lower than those of index funds",
        "Liquidity terms that typically allow daily redemption at net asset value"
      ],
      "answer": "A",
      "explanation": "Alternative investments frequently have return distributions that depart from normality, with skewness and fat tails driven by illiquidity, optionality, leverage and event risk. They also tend to be less liquid, less transparent, more expensive and less frequently priced than traditional assets. For this reason, mean and standard deviation alone can understate their risks.",
      "topic": "Introduction to Alternative Investments",
      "subtopic": "What is An Alternative Investment?",
      "difficulty": "medium",
      "source": "CAIA Level I, What is an Alternative Investment?: characteristics of alternative investments and return distributions"
    },
    {
      "stem": "A fund has an annual return of 10%. The investor's target (minimum acceptable) return is 3%, and the fund's annualized downside deviation relative to that target is 14%. The fund's annualized standard deviation is 18%. What is the fund's Sortino ratio?",
      "options": [
        "0.39",
        "0.56",
        "0.71",
        "0.50"
      ],
      "answer": "D",
      "explanation": "The Sortino ratio divides the return in excess of the target return by downside deviation: (10% - 3%) / 14% = 0.50. Unlike the Sharpe ratio, it penalizes only volatility below the target, so total standard deviation is not used. This makes it more informative for strategies whose return distributions are asymmetric.",
      "topic": "Introduction to Alternative Investments",
      "subtopic": "Measures of Risk and Performance",
      "difficulty": "medium",
      "source": "CAIA Level I, Measures of Risk and Performance: Sortino ratio and downside deviation"
    },
    {
      "stem": "An appraisal-based real estate index is modeled as R_reported(t) = (1 - ρ) × R_true(t) + ρ × R_reported(t-1), with ρ = 0.5. The reported return this quarter is 4.0%, and last quarter's reported return was 2.0%. What is the estimated true (unsmoothed) return for this quarter?",
      "options": [
        "3.0%",
        "6.0%",
        "5.0%",
        "8.0%"
      ],
      "answer": "B",
      "explanation": "Rearranging the smoothing model gives R_true(t) = [R_reported(t) - ρ × R_reported(t-1)] / (1 - ρ) = (4.0% - 0.5 × 2.0%) / 0.5 = 6.0%. Smoothing makes reported returns lag and dampen true returns, so unsmoothing restores the larger true movement. Unsmoothed series typically show higher volatility and correlations than the reported series.",
      "topic": "Introduction to Alternative Investments",
      "subtopic": "Quantitative Foundations",
      "difficulty": "hard",
      "source": "CAIA Level I: return smoothing, autocorrelation and unsmoothing of appraisal-based returns"
    },
    {
      "stem": "A European call and a European put on a non-dividend-paying stock both have a strike price of $100 and one year to expiration. The stock trades at $100, the continuously compounded risk-free rate is 5% per year, and the call is priced at $10.45. Using put-call parity, the price of the put is closest to:",
      "options": [
        "$5.57",
        "$10.45",
        "$15.33",
        "$4.88"
      ],
      "answer": "A",
      "explanation": "Put-call parity states that c + K × e^(-rT) = p + S, so p = c - S + K × e^(-rT) = 10.45 - 100 + 100 × e^(-0.05) = 10.45 - 100 + 95.12 = $5.57. The put is cheaper than the at-the-money call because the present value of the strike is below the current stock price. Parity holds by no-arbitrage, independent of any model for the stock's volatility.",
      "topic": "Introduction to Alternative Investments",
      "subtopic": "Derivatives and Risk-Neutral Valuation",
      "difficulty": "medium",
      "source": "CAIA Level I, Derivatives and Risk-Neutral Valuation: put-call parity for European options"
    },
    {
      "stem": "Two hedge fund strategies have identical mean returns and identical standard deviations. Strategy X has large negative skewness, while Strategy Y has zero skewness. Relative to Strategy Y, Strategy X is BEST described as having:",
      "options": [
        "a longer right tail, with more frequent large gains",
        "lower kurtosis and therefore thinner tails",
        "a longer left tail, with a greater likelihood of large losses",
        "the same tail risk, because volatility is identical"
      ],
      "answer": "C",
      "explanation": "Negative skewness means the distribution has a longer or fatter left tail, so large losses are more likely than large gains of the same size. Standard deviation treats upside and downside deviations symmetrically, so two strategies with equal volatility can have very different tail risk. Strategies resembling short option positions often show this negative skew.",
      "topic": "Introduction to Alternative Investments",
      "subtopic": "Statistical Foundations",
      "difficulty": "medium",
      "source": "CAIA Level I, Statistical Foundations: skewness, kurtosis and non-normal return distributions"
    },
    {
      "stem": "Which real estate investment style is BEST characterized by significant development, redevelopment or repositioning risk, high leverage, and an expected return that comes mostly from appreciation rather than income?",
      "options": [
        "Core",
        "Value-added",
        "Net lease",
        "Opportunistic"
      ],
      "answer": "D",
      "explanation": "Opportunistic real estate takes on the most risk, often through development, distressed assets or major repositioning, and typically uses high leverage. Its expected return relies mainly on appreciation rather than current income. Core real estate is the opposite end of the spectrum, with stabilized, income-producing properties and low leverage, while value-added sits in between.",
      "topic": "Real Assets",
      "subtopic": "Overview of Real Estate",
      "difficulty": "easy",
      "source": "CAIA Level I, Real Estate: core, value-added and opportunistic style classifications"
    },
    {
      "stem": "The spot price of a commodity is $50. The continuously compounded risk-free rate is 4% per year, storage costs are 2% per year of the commodity's value (continuously compounded), and the convenience yield is 1% per year. Under the cost-of-carry model, the one-year futures price is closest to:",
      "options": [
        "$51.01",
        "$52.56",
        "$53.09",
        "$51.52"
      ],
      "answer": "B",
      "explanation": "Under the cost-of-carry model, F = S × e^((r + c - y)T), where storage costs add to the cost of carrying the commodity and the convenience yield reduces it. Here F = 50 × e^(0.04 + 0.02 - 0.01) = 50 × e^(0.05) = $52.56. A convenience yield large enough to outweigh financing and storage costs would put the futures price below spot (backwardation).",
      "topic": "Real Assets",
      "subtopic": "Commodities",
      "difficulty": "medium",
      "source": "CAIA Level I, Commodities: cost-of-carry model, storage costs and convenience yield"
    },
    {
      "stem": "A real estate property is expected to earn an unlevered total return of 8% per year. The investor finances the purchase with a loan at a 60% loan-to-value ratio and an interest cost of 5% per year. Ignoring taxes and transaction costs, the expected return on the investor's equity is closest to:",
      "options": [
        "9.8%",
        "10.0%",
        "12.5%",
        "14.0%"
      ],
      "answer": "C",
      "explanation": "The levered return on equity equals the unlevered return plus the spread between the asset return and the cost of debt, multiplied by the debt-to-equity ratio: 8% + (8% - 5%) × (0.6 / 0.4) = 8% + 4.5% = 12.5%. Equivalently, (8% - 0.6 × 5%) / 0.4 = 12.5%. Leverage magnifies returns when the asset return exceeds the borrowing cost, but it also magnifies losses and raises equity volatility.",
      "topic": "Real Assets",
      "subtopic": "Real Estate Methods",
      "difficulty": "hard",
      "source": "CAIA Level I, Real Estate: effects of leverage on equity returns and risk"
    },
    {
      "stem": "In infrastructure investing, a brownfield investment BEST refers to:",
      "options": [
        "an existing, operational asset with an established cash flow history",
        "a new asset that must be designed and built before generating revenue",
        "a site on contaminated land that requires environmental remediation",
        "a publicly traded infrastructure company held through listed equity"
      ],
      "answer": "A",
      "explanation": "In infrastructure, brownfield investments are existing assets that are already operating, such as an established toll road or airport, with an observable history of usage and cash flows. Greenfield investments are new projects that still carry construction and ramp-up risk. Brownfield assets therefore tend to offer lower risk and more income-oriented returns.",
      "topic": "Real Assets",
      "subtopic": "Infrastructure",
      "difficulty": "easy",
      "source": "CAIA Level I, Infrastructure: greenfield versus brownfield investments"
    },
    {
      "stem": "A venture capital fund invests $4 million in a start-up's Series A round and receives a 20% ownership stake on a post-money basis. What is the start-up's pre-money valuation?",
      "options": [
        "$12 million",
        "$20 million",
        "$24 million",
        "$16 million"
      ],
      "answer": "D",
      "explanation": "The post-money valuation equals the investment divided by the ownership share it buys: $4 million / 0.20 = $20 million. The pre-money valuation is the post-money valuation minus the new money invested: $20 million - $4 million = $16 million. Confusing pre-money and post-money values leads directly to errors in ownership and dilution calculations.",
      "topic": "Private Equity",
      "subtopic": "Venture Capital & Growth Equity",
      "difficulty": "medium",
      "source": "CAIA Level I, Venture Capital: pre-money and post-money valuation"
    },
    {
      "stem": "A private equity fund has a 20% carried interest, an 8% preferred return (hurdle) and a 100% general partner catch-up, with a whole-fund (European) distribution waterfall. The limited partners contributed all $100 million of capital, and exactly one year later the fund is fully liquidated for total proceeds of $150 million. Ignoring management fees, how much carried interest does the general partner receive?",
      "options": [
        "$8.0 million",
        "$8.4 million",
        "$10.0 million",
        "$12.0 million"
      ],
      "answer": "C",
      "explanation": "The LPs first receive their $100 million of capital back plus the $8 million preferred return. The 100% catch-up then pays the GP until it holds 20% of profits distributed so far, which takes $2 million (2 / 10 = 20%). The remaining $40 million is split 80/20, giving the GP another $8 million, so the GP receives $10 million in total, exactly 20% of the $50 million profit; without a catch-up the GP would get only 20% of the $42 million above the hurdle, or $8.4 million.",
      "topic": "Private Equity",
      "subtopic": "Private Equity Investing",
      "difficulty": "hard",
      "source": "CAIA Level I, Private Equity: distribution waterfalls, hurdle rates and GP catch-up"
    },
    {
      "stem": "An investor buys protection on a reference entity through a single-name credit default swap. Economically, the investor's position is BEST described as:",
      "options": [
        "long the credit risk of the reference entity, similar to owning its bonds",
        "short the credit risk of the reference entity, similar to shorting its bonds",
        "long the reference entity's equity, similar to owning a call option on it",
        "short interest rate risk, similar to paying fixed in an interest rate swap"
      ],
      "answer": "B",
      "explanation": "The protection buyer pays a periodic premium and is compensated if a credit event occurs, so the position gains when the reference entity's credit quality deteriorates and its spreads widen. That is economically similar to shorting the entity's bonds. The protection seller takes the opposite side and is long credit risk, much like a bondholder.",
      "topic": "Private Debt",
      "subtopic": "Credit Risk and Credit Derivatives",
      "difficulty": "medium",
      "source": "CAIA Level I, Credit Risk and Credit Derivatives: credit default swaps, protection buyer and seller"
    },
    {
      "stem": "A catastrophe bond sponsor wants to minimize basis risk, meaning the risk that the bond's payout differs from the sponsor's own actual losses. Which type of trigger BEST meets this objective?",
      "options": [
        "Indemnity trigger",
        "Parametric trigger",
        "Industry loss index trigger",
        "Modeled loss trigger"
      ],
      "answer": "A",
      "explanation": "An indemnity trigger pays according to the sponsor's actual losses, so the protection matches the sponsor's exposure and basis risk is minimal. The trade-off is that investors face more moral hazard and less transparency, and claims can take longer to settle. Parametric and industry-index triggers are more transparent and faster for investors but leave the sponsor with basis risk.",
      "topic": "Private Debt",
      "subtopic": "Insurance Linked Strategies",
      "difficulty": "medium",
      "source": "CAIA Level I, Insurance-Linked Strategies: catastrophe bond trigger types and basis risk"
    },
    {
      "stem": "In a securitization whose collateral pool supports senior, mezzanine and equity tranches, which tranche absorbs the first losses on the collateral?",
      "options": [
        "Senior tranche",
        "Super-senior tranche",
        "Mezzanine tranche",
        "Equity tranche"
      ],
      "answer": "D",
      "explanation": "In a sequential structure, losses on the collateral are allocated from the bottom of the capital structure upward, so the equity (first-loss) tranche absorbs them first. Its subordination provides credit enhancement for the mezzanine and senior tranches. In return, the equity tranche receives the residual cash flows and has the highest expected return and risk.",
      "topic": "Private Debt",
      "subtopic": "Introduction to Structuring",
      "difficulty": "easy",
      "source": "CAIA Level I, Introduction to Structuring: tranching, subordination and loss allocation"
    },
    {
      "stem": "Company A has agreed to acquire Company T in a stock-for-stock deal in which each T share will be exchanged for 0.8 shares of A. A trades at $60 and T trades at $45. Ignoring dividends, financing and transaction costs, which trade and gross spread per T share BEST describe a standard merger arbitrage position if the deal closes?",
      "options": [
        "Buy 1 share of T and short 0.8 shares of A, locking in a spread of $15.00",
        "Buy 1 share of T and short 0.8 shares of A, locking in a spread of $3.00",
        "Short 1 share of T and buy 0.8 shares of A, locking in a spread of $3.00",
        "Buy 1 share of T and short 1.25 shares of A, locking in a spread of $30.00"
      ],
      "answer": "B",
      "explanation": "In a stock-for-stock deal the arbitrageur buys the target and shorts the acquirer in the exchange ratio, so the shares received at closing exactly cover the short. The short of 0.8 A shares brings in 0.8 × $60 = $48 against a $45 cost for T, locking in a $3.00 spread regardless of where A trades at closing. The main remaining risk is that the deal fails, in which case T typically falls back toward its stand-alone value.",
      "topic": "Hedge Funds",
      "subtopic": "Event-Driven Hedge Funds",
      "difficulty": "hard",
      "source": "CAIA Level I, Event-Driven Hedge Funds: merger arbitrage in stock-for-stock transactions"
    },
    {
      "stem": "A hedge fund charges a 20% incentive fee subject to a high-water mark. Which statement BEST describes the effect of the high-water mark?",
      "options": [
        "Incentive fees are charged only on returns above the risk-free rate",
        "Management fees are reduced in years when the fund underperforms",
        "Incentive fees are charged only once NAV exceeds its previous peak",
        "The manager must return past incentive fees when the fund loses money"
      ],
      "answer": "C",
      "explanation": "A high-water mark means the manager earns incentive fees only on gains that take the fund's NAV above the highest level on which an incentive fee was previously paid. After a loss, the manager must first recover that loss before earning incentive fees again, so investors do not pay twice for the same gains. A hurdle rate (a minimum return) and a clawback (returning fees already paid) are separate provisions.",
      "topic": "Hedge Funds",
      "subtopic": "The Hedge Fund Industry",
      "difficulty": "easy",
      "source": "CAIA Level I, The Hedge Fund Industry: incentive fees, high-water marks and hurdle rates"
    },
    {
      "stem": "The return pattern of trend-following managed futures strategies has often been compared to which option position?",
      "options": [
        "A long straddle, or long lookback straddle",
        "A short straddle, or short strangle",
        "A covered call on an equity index",
        "A short put on an equity index"
      ],
      "answer": "A",
      "explanation": "Trend followers tend to profit from large sustained moves in either direction while losing modestly in trendless markets, a convex payoff similar to a long straddle. Research by Fung and Hsieh modeled trend-following returns using lookback straddles. This positive convexity is why managed futures have often performed well during extended market crises.",
      "topic": "Hedge Funds",
      "subtopic": "Macro and Managed Futures Funds",
      "difficulty": "medium",
      "source": "CAIA Level I, Macro and Managed Futures Funds: trend following and option-like payoffs"
    },
    {
      "stem": "In a proof-of-stake blockchain, the right to validate new blocks is BEST determined by:",
      "options": [
        "computational work performed to solve a cryptographic puzzle",
        "a central authority that approves each validator in advance",
        "the number of transactions a node has previously submitted",
        "the amount of native cryptocurrency a validator locks up as collateral"
      ],
      "answer": "D",
      "explanation": "Proof of stake selects validators according to the cryptocurrency they have staked, typically with a probability weighted by stake size. The stake can be cut (slashed) if the validator acts dishonestly, which aligns incentives without the energy-intensive mining used in proof of work. Solving cryptographic puzzles through computational work is the defining feature of proof of work, not proof of stake.",
      "topic": "Digital Assets",
      "subtopic": "Distributed Ledger Technology",
      "difficulty": "easy",
      "source": "CAIA Level I, Distributed Ledger Technology: consensus mechanisms, proof of work and proof of stake"
    }
  ]
}
```
