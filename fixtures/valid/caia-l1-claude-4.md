```json
{
  "format": "domcq/1",
  "exam": "caia-l1",
  "set": "CAIA Level I Exam practice – Mixed Syllabus Set 1",
  "questions": [
    {
      "stem": "Under the fiduciary duty of loyalty, an investment adviser managing a client's alternative investment portfolio is BEST described as being required to:",
      "options": [
        "Maximize the portfolio's return without regard to the client's stated risk tolerance",
        "Follow every client instruction, including instructions that would breach the law",
        "Act solely in the client's best interest and place it ahead of the adviser's own",
        "Avoid charging any performance-based fee so that the adviser's incentives stay neutral"
      ],
      "answer": "C",
      "explanation": "The duty of loyalty requires a fiduciary to act in the client's best interest and to put the client's interests ahead of the fiduciary's own and those of the firm. It works alongside the duty of care, which governs the prudence and diligence of decisions. Loyalty does not mean chasing returns, obeying unlawful instructions, or giving up legitimate, disclosed compensation such as performance fees.",
      "rationales": {
        "A": "Ignoring the client's risk tolerance breaches the duty of care and suitability; loyalty is about whose interests come first, not maximizing return.",
        "B": "A fiduciary must not break the law or regulations on a client's instruction; loyalty never requires illegal conduct.",
        "C": "Correct: loyalty means acting solely in the client's best interest and placing it ahead of the adviser's own interests.",
        "D": "Performance fees are permitted when disclosed and agreed; the duty requires managing conflicts, not banning such fees."
      },
      "topic": "CAIA Ethical Principles",
      "subtopic": "Ethics, Professionalism and Fiduciary Responsibilities",
      "difficulty": "easy",
      "source": "CAIA Level I, Ethical Principles: fiduciary duties of loyalty and care"
    },
    {
      "stem": "A portfolio manager intends to buy a large block of a thinly traded stock for several client accounts and would also like to buy the same stock for her personal account. Which action is MOST consistent with professional ethical standards?",
      "options": [
        "Execute all client orders first and place her personal order only after they are filled",
        "Place her personal order first because it is small and will not move the market price",
        "Combine her personal order with the client orders and allocate the first fills to herself",
        "Place her personal order at the same time as the client orders through a separate broker"
      ],
      "answer": "A",
      "explanation": "Client transactions must take priority over personal transactions, so the manager should complete the client orders before trading for herself. Trading ahead of, or alongside, a large client order in an illiquid stock lets her benefit from the price impact the client trades will create, which is front-running. The size of her own order does not remove the conflict.",
      "rationales": {
        "A": "Correct: giving client orders priority over personal trades removes the conflict of interest and avoids front-running.",
        "B": "Trading ahead of known client orders is front-running regardless of the personal order's size.",
        "C": "Aggregating is allowed only with fair allocation; taking the first fills herself favours her over clients.",
        "D": "Simultaneous trading through another broker still competes with clients for scarce liquidity and is a conflict."
      },
      "topic": "CAIA Ethical Principles",
      "subtopic": "Ethics, Professionalism and Fiduciary Responsibilities",
      "difficulty": "medium",
      "source": "CAIA Level I, Ethical Principles: conflicts of interest and priority of client transactions"
    },
    {
      "stem": "An alternative investment fund earned an annual return of 10% with an annual standard deviation of returns of 16%. The risk-free rate was 2%. The fund's Sharpe ratio is closest to:",
      "options": [
        "0.13",
        "0.50",
        "0.63",
        "0.80"
      ],
      "answer": "B",
      "explanation": "The Sharpe ratio is the excess return over the risk-free rate divided by the standard deviation of returns. Here it is (10% − 2%) / 16% = 0.50. It measures excess return per unit of total risk, so it ignores whether that risk is diversifiable.",
      "rationales": {
        "A": "0.13 divides the risk-free rate by volatility (2%/16%), which is not a performance measure.",
        "B": "Correct: (10% − 2%) / 16% = 0.50, excess return per unit of total risk.",
        "C": "0.63 divides the total return by volatility (10%/16%) and forgets to subtract the risk-free rate.",
        "D": "0.80 divides the excess return by the fund's return (8%/10%) rather than by its standard deviation."
      },
      "topic": "Introduction to Alternative Investments",
      "subtopic": "Measures of Risk and Performance",
      "difficulty": "easy",
      "source": "CAIA Level I, Measures of Risk and Performance: Sharpe ratio"
    },
    {
      "stem": "A hedge fund strategy systematically sells out-of-the-money put options on an equity index and collects the premiums. The strategy's return distribution is MOST likely to exhibit:",
      "options": [
        "Positive skewness and negative excess kurtosis",
        "Positive skewness and positive excess kurtosis",
        "Zero skewness and zero excess kurtosis",
        "Negative skewness and positive excess kurtosis"
      ],
      "answer": "D",
      "explanation": "Selling out-of-the-money puts produces many small gains from premium income and occasional very large losses when the market falls sharply. A long left tail gives negative skewness, and the concentration of outcomes near the mean combined with extreme tail events gives positive excess kurtosis (fat tails). This return pattern is typical of strategies that are effectively short volatility.",
      "rationales": {
        "A": "Positive skew means a long right tail of large gains; short puts produce large losses, and their tails are fat, not thin.",
        "B": "Fat tails are right, but large rare losses create a long left tail, so skewness is negative, not positive.",
        "C": "Zero skewness and zero excess kurtosis describe a normal distribution, which short option payoffs do not follow.",
        "D": "Correct: frequent small gains and rare large losses give negative skewness and fat tails (positive excess kurtosis)."
      },
      "topic": "Introduction to Alternative Investments",
      "subtopic": "Statistical Foundations",
      "difficulty": "medium",
      "source": "CAIA Level I, Statistical Foundations: skewness and kurtosis of return distributions"
    },
    {
      "stem": "A private real estate fund reports quarterly returns based on smoothed appraisal values. Compared with the true underlying returns, which TWO effects are MOST likely to appear in the reported return series? Choose TWO.",
      "options": [
        "Higher reported volatility",
        "Lower reported correlation with public equity markets",
        "Lower first-order autocorrelation",
        "Higher reported Sharpe ratio"
      ],
      "answer": "BD",
      "explanation": "Appraisal-based values adjust slowly, so reported returns are a lagged average of true returns. This smoothing dampens volatility, which inflates risk-adjusted measures such as the Sharpe ratio, and it weakens measured correlation with contemporaneous public market returns. Smoothing also creates positive serial correlation, so unsmoothing techniques are used to recover the true risk.",
      "rationales": {
        "A": "Smoothing averages returns over time, so reported volatility is lower, not higher, than true volatility.",
        "B": "Correct: lagged appraisal values move out of step with public markets, understating correlation with equities.",
        "C": "Smoothing raises first-order autocorrelation, because each reported return carries over part of earlier returns.",
        "D": "Correct: understated volatility in the denominator inflates the reported Sharpe ratio."
      },
      "topic": "Introduction to Alternative Investments",
      "subtopic": "Measures of Risk and Performance",
      "difficulty": "medium",
      "source": "CAIA Level I, return smoothing and appraisal-based returns; unsmoothing of illiquid asset returns"
    },
    {
      "stem": "The spot price of a commodity is $100. The continuously compounded risk-free rate is 5% per year, storage costs are 2% of value per year (continuously compounded) and the convenience yield is 1% per year (continuously compounded). Using the cost-of-carry model, the arbitrage-free one-year futures price is closest to:",
      "options": [
        "$106.18",
        "$107.25",
        "$104.08",
        "$105.13"
      ],
      "answer": "A",
      "explanation": "With continuous compounding, the cost-of-carry model gives F = S × e^((r + c − y)T), where c is the storage cost and y is the convenience yield. Here F = 100 × e^(0.05 + 0.02 − 0.01) = 100 × e^0.06 ≈ $106.18. Storage costs add to the cost of carrying the physical commodity, while the convenience yield is a benefit of holding it and so lowers the futures price.",
      "rationales": {
        "A": "Correct: F = 100 × e^(0.05 + 0.02 − 0.01) = 100 × e^0.06 ≈ $106.18.",
        "B": "$107.25 adds the convenience yield instead of subtracting it (e^0.07).",
        "C": "$104.08 subtracts the storage cost instead of adding it (e^0.04).",
        "D": "$105.13 uses only the risk-free rate (e^0.05) and ignores storage costs and convenience yield."
      },
      "topic": "Introduction to Alternative Investments",
      "subtopic": "Derivatives and Risk-Neutral Valuation",
      "difficulty": "hard",
      "source": "CAIA Level I, Derivatives and Risk-Neutral Valuation: cost-of-carry forward pricing"
    },
    {
      "stem": "An investment gains 50% in the first year and loses 50% in the second year. Its annualized geometric mean return over the two years is closest to:",
      "options": [
        "0.0%",
        "-12.5%",
        "-13.4%",
        "-25.0%"
      ],
      "answer": "C",
      "explanation": "The geometric mean return is the constant annual rate that compounds to the same ending wealth: [(1.50)(0.50)]^(1/2) − 1 = 0.75^0.5 − 1 ≈ −13.4%. The arithmetic mean of +50% and −50% is 0%, but that overstates compounded performance. The geometric mean is always at or below the arithmetic mean, and the gap widens as volatility increases.",
      "rationales": {
        "A": "0.0% is the arithmetic mean, which ignores compounding and overstates the realized growth of wealth.",
        "B": "-12.5% halves the total two-year loss of 25%, which is a simple average, not a compounded rate.",
        "C": "Correct: (1.5 × 0.5)^0.5 − 1 ≈ −13.4% per year, which compounds to the actual 25% total loss.",
        "D": "-25.0% is the cumulative two-year return, not the annualized rate."
      },
      "topic": "Introduction to Alternative Investments",
      "subtopic": "Quantitative Foundations",
      "difficulty": "medium",
      "source": "CAIA Level I, Quantitative Foundations: arithmetic versus geometric mean returns"
    },
    {
      "stem": "A commodity futures curve is in contango, and the spot price stays unchanged over the holding period. A long-only investor who repeatedly rolls expiring contracts into longer-dated contracts will MOST likely earn a roll yield that is:",
      "options": [
        "Positive",
        "Negative",
        "Zero"
      ],
      "answer": "B",
      "explanation": "In contango, longer-dated futures trade above nearer-dated futures and spot. With an unchanged spot price, each contract's price converges down toward spot as it approaches expiry, and the investor must keep buying the more expensive deferred contract. Both effects produce a negative roll yield for a long position.",
      "rationales": {
        "A": "Positive roll yield for a long position comes from backwardation, where futures prices rise toward spot as expiry approaches.",
        "B": "Correct: in contango, futures prices fall toward an unchanged spot price, so rolling long positions produces negative roll yield.",
        "C": "Roll yield is zero only when the curve is flat; an upward-sloping contango curve creates a nonzero roll yield."
      },
      "topic": "Real Assets",
      "subtopic": "Commodities",
      "difficulty": "easy",
      "source": "CAIA Level I, Real Assets: commodity futures term structure, contango, backwardation and roll yield"
    },
    {
      "stem": "Which of the following BEST describes a core real estate investment?",
      "options": [
        "Raw land acquisition and ground-up development financed with high leverage",
        "Repositioning a partly vacant office building through a major renovation",
        "Buying a distressed hotel with returns expected mainly from price appreciation",
        "A fully leased, stabilized property with low leverage and mostly income returns"
      ],
      "answer": "D",
      "explanation": "Real estate styles are commonly classified as core, value-added and opportunistic in order of increasing risk. Core investments are well-located, fully operating, high-occupancy properties held with little leverage, and most of their return comes from stable rental income. Development, repositioning and distressed purchases rely more on appreciation and higher leverage, placing them in the value-added or opportunistic categories.",
      "rationales": {
        "A": "Development of raw land with high leverage carries construction and leasing risk and is typically opportunistic.",
        "B": "Repositioning an underused property through renovation is the classic value-added strategy, not core.",
        "C": "Distressed purchases that rely on appreciation are opportunistic, the highest-risk style.",
        "D": "Correct: core real estate is stabilized, well-leased, low-leverage property whose return comes mainly from income."
      },
      "topic": "Real Assets",
      "subtopic": "Real Estate Assets",
      "difficulty": "medium",
      "source": "CAIA Level I, Real Estate: core, value-added and opportunistic real estate styles"
    },
    {
      "stem": "A stabilized apartment property is expected to generate net operating income (NOI) of $1.2 million next year, with NOI growing at a constant 2% per year thereafter. The investor's required rate of return is 8%. Using a constant-growth (Gordon) model, the property's value is closest to:",
      "options": [
        "$20.0 million",
        "$15.0 million",
        "$12.0 million",
        "$60.0 million"
      ],
      "answer": "A",
      "explanation": "The constant-growth model values the property as next year's NOI divided by the required return minus the growth rate: $1.2 million / (0.08 − 0.02) = $20.0 million. The denominator, 6%, is the implied capitalization rate. The model shows that a cap rate equals the required return less expected NOI growth.",
      "rationales": {
        "A": "Correct: $1.2 million / (8% − 2%) = $20.0 million, with an implied cap rate of 6%.",
        "B": "$15.0 million divides NOI by the 8% required return and ignores growth, which undervalues the property.",
        "C": "$12.0 million adds the growth rate to the required return (10%) instead of subtracting it.",
        "D": "$60.0 million divides NOI by the 2% growth rate alone, which is not a valid discount rate."
      },
      "topic": "Real Assets",
      "subtopic": "Real Estate Methods",
      "difficulty": "medium",
      "source": "CAIA Level I, Real Estate: income approach, capitalization rates and constant-growth valuation"
    },
    {
      "stem": "Under an availability-payment public-private partnership (PPP) for a toll-free road, the private operator receives payments from the government as long as the road meets agreed availability and performance standards. Which risk is MOST likely retained by the public sector?",
      "options": [
        "Construction cost overrun risk",
        "Operating and maintenance cost risk",
        "Traffic volume (demand) risk",
        "Risk of failing performance standards"
      ],
      "answer": "C",
      "explanation": "In an availability-payment structure, the government pays for the asset being available and performing to standard, regardless of how many vehicles use it. Demand risk therefore stays with the public sector, while the private partner typically bears construction, operating and performance risk. In a user-pay (demand-based) concession, such as a toll road, the private operator bears traffic risk instead.",
      "rationales": {
        "A": "Construction risk is normally transferred to the private partner, who bears cost overruns under the PPP contract.",
        "B": "Operating and maintenance costs are usually borne by the private operator, whose payments are fixed.",
        "C": "Correct: payments do not depend on usage, so traffic (demand) risk stays with the government.",
        "D": "Payments are reduced when standards are missed, so the private operator bears performance risk."
      },
      "topic": "Real Assets",
      "subtopic": "Infrastructure",
      "difficulty": "medium",
      "source": "CAIA Level I, Infrastructure: PPP structures, availability-based versus demand-based revenue"
    },
    {
      "stem": "In a venture capital fund's early years, cumulative net returns to limited partners are typically negative before turning positive as investments mature, a pattern known as the J-curve. Which explanation is MOST accurate?",
      "options": [
        "Portfolio companies distribute most of their cash flow in the fund's first few years",
        "Fees and write-downs come early, while gains are realized mainly through later exits",
        "Carried interest is paid to the general partner in full before any capital is invested",
        "Limited partners must sell their fund interests at a discount during the investment period"
      ],
      "answer": "B",
      "explanation": "Management fees are charged from the start, often on committed capital, while new investments are typically held at cost and early failures are written down quickly. Gains on successful companies are recognized mainly when they are revalued in later financing rounds or exited, often years later. Early net returns are therefore negative, and they turn positive as value is realized.",
      "rationales": {
        "A": "Young venture-backed companies rarely pay distributions; they consume cash, so early returns do not come from payouts.",
        "B": "Correct: early fees and write-downs depress returns, while gains on successful companies are realized later.",
        "C": "Carried interest is paid out of realized profits, normally after capital is returned, not before investing.",
        "D": "Secondary sales are optional for limited partners and do not cause the typical J-curve pattern."
      },
      "topic": "Private Equity",
      "subtopic": "Venture Capital & Growth Equity",
      "difficulty": "medium",
      "source": "CAIA Level I, Private Equity: J-curve and fund cash flow patterns"
    },
    {
      "stem": "A private equity fund uses a whole-fund (European) distribution waterfall: limited partners (LPs) first receive all contributed capital, then an 8% preferred return on contributed capital, followed by a 100% general partner (GP) catch-up, with remaining profits split 80/20 between LPs and the GP. LPs contributed $100 million and the fund distributes a total of $150 million. Treating the preferred return as a simple 8% of contributed capital, the GP's carried interest is closest to:",
      "options": [
        "$8.0 million",
        "$8.4 million",
        "$18.0 million",
        "$10.0 million"
      ],
      "answer": "D",
      "explanation": "After $100 million of capital is returned, $50 million of profit remains. LPs receive the $8 million preferred return, then the 100% catch-up gives the GP $2 million so that it holds 20% of the $10 million distributed as profit so far. The remaining $40 million is split 80/20, giving the GP $8 million more, for $10 million in total, exactly 20% of the $50 million profit. A full catch-up means the hurdle affects only timing once profits are large enough.",
      "rationales": {
        "A": "$8.0 million counts only the 20% share of the final $40 million and leaves out the $2 million catch-up.",
        "B": "$8.4 million takes 20% of profit above the hurdle ($42 million), which applies only when there is no catch-up.",
        "C": "$18.0 million gives the GP all of the first $10 million of profit, skipping the LPs' $8 million preferred return.",
        "D": "Correct: $2 million catch-up plus 20% of the remaining $40 million gives $10 million, 20% of total profit."
      },
      "topic": "Private Equity",
      "subtopic": "Private Equity Investing",
      "difficulty": "hard",
      "source": "CAIA Level I, Private Equity: fund terms, distribution waterfall, hurdle rate and GP catch-up"
    },
    {
      "stem": "In a single-name credit default swap (CDS), the protection buyer:",
      "options": [
        "Pays a periodic premium and receives compensation if a credit event occurs",
        "Receives a periodic premium and pays compensation if a credit event occurs",
        "Exchanges the reference bond's coupons for a floating rate with no default payment"
      ],
      "answer": "A",
      "explanation": "A CDS transfers the credit risk of a reference entity from the protection buyer to the protection seller. The buyer pays a periodic premium (the CDS spread) and, if a defined credit event occurs, receives a payment equal to the loss on the reference obligation, settled physically or in cash. Economically, the buyer is short the credit risk and the seller is long it.",
      "rationales": {
        "A": "Correct: the protection buyer pays the CDS spread and is compensated for losses after a credit event.",
        "B": "This describes the protection seller, who earns the premium and bears the default loss.",
        "C": "Swapping coupons for a floating rate describes an asset swap or interest rate swap, not a CDS."
      },
      "topic": "Private Debt",
      "subtopic": "Credit Risk and Credit Derivatives",
      "difficulty": "easy",
      "source": "CAIA Level I, Credit Risk and Credit Derivatives: mechanics of credit default swaps"
    },
    {
      "stem": "An insurer sponsors a catastrophe bond and wants payouts to match its own actual claims as closely as possible. Which trigger type BEST minimizes the sponsor's basis risk?",
      "options": [
        "Parametric trigger based on measured event intensity",
        "Industry loss index trigger based on market-wide losses",
        "Indemnity trigger based on the sponsor's actual losses",
        "Modeled loss trigger using a catastrophe model output"
      ],
      "answer": "C",
      "explanation": "Basis risk is the mismatch between the cat bond's payout and the sponsor's actual losses. An indemnity trigger pays according to the sponsor's own incurred losses, so it nearly eliminates basis risk. The trade-off is greater moral hazard and less transparency for investors, plus slower claims settlement. Parametric, industry-index and modeled-loss triggers reduce moral hazard but leave the sponsor exposed to basis risk.",
      "rationales": {
        "A": "Parametric triggers pay on physical measures such as wind speed, which may not match the sponsor's losses.",
        "B": "Industry index triggers track market-wide losses, which can differ from the sponsor's own portfolio losses.",
        "C": "Correct: indemnity triggers pay on the sponsor's actual losses, which minimizes basis risk but raises moral hazard.",
        "D": "Modeled loss triggers rely on a model's estimate, so payouts can diverge from the sponsor's actual claims."
      },
      "topic": "Private Debt",
      "subtopic": "Insurance Linked Strategies",
      "difficulty": "medium",
      "source": "CAIA Level I, Insurance-Linked Strategies: catastrophe bond triggers, basis risk and moral hazard"
    },
    {
      "stem": "A synthetic collateralized debt obligation (CDO) references a pool of corporate credits. Holding the expected default probability of each credit constant, how will an increase in default correlation across the pool MOST likely affect investors who hold (are long the credit risk of) its tranches?",
      "options": [
        "It decreases the value of both the equity tranche and the senior tranche",
        "It increases the equity tranche's value and decreases the senior tranche's value",
        "It decreases the equity tranche's value and increases the senior tranche's value",
        "It leaves both tranche values unchanged because the expected pool loss is unchanged"
      ],
      "answer": "B",
      "explanation": "Higher default correlation leaves expected pool losses unchanged but widens the loss distribution: scenarios with very few defaults and scenarios with many simultaneous defaults both become more likely. The equity tranche gains from the higher chance of few defaults, because its first-loss exposure is already capped. The senior tranche loses because extreme loss scenarios that reach it become more likely, so equity investors are effectively long correlation and senior investors short correlation.",
      "rationales": {
        "A": "Correlation redistributes losses across tranches rather than lowering all values, because expected pool loss is unchanged.",
        "B": "Correct: higher correlation raises the chance of few defaults (helping equity) and of extreme losses (hurting senior).",
        "C": "This reverses the effects; the equity tranche is long correlation and the senior tranche is short correlation.",
        "D": "Tranche values depend on the shape of the loss distribution, not only on its mean, so they do change."
      },
      "topic": "Private Debt",
      "subtopic": "Introduction to Structuring",
      "difficulty": "hard",
      "source": "CAIA Level I, Introduction to Structuring: CDO tranching and the effect of default correlation"
    },
    {
      "stem": "In a stock-for-stock merger in which each target share will be exchanged for 0.5 acquirer shares, a merger arbitrage manager would typically:",
      "options": [
        "Short the target and buy 0.5 acquirer shares for each target share shorted",
        "Buy the target and buy 0.5 acquirer shares for each target share bought",
        "Short the target and short 0.5 acquirer shares for each target share shorted",
        "Buy the target and short 0.5 acquirer shares for each target share bought"
      ],
      "answer": "D",
      "explanation": "In a stock-for-stock deal, the target usually trades at a discount to the value of the acquirer shares it will receive, because the deal may fail. The arbitrageur buys the target and shorts acquirer shares in the exchange ratio, which locks in the spread and hedges the acquirer's share price. The main remaining exposure is deal risk: if the merger fails, the target typically falls and the position loses.",
      "rationales": {
        "A": "Shorting the target and buying the acquirer bets that the deal fails, the reverse of the standard trade.",
        "B": "Buying both stocks leaves unhedged exposure to the acquirer's share price rather than isolating the deal spread.",
        "C": "Shorting both stocks creates a net short equity position and does not capture the deal spread.",
        "D": "Correct: long the target, short acquirer shares at the exchange ratio, capturing the spread with the price risk hedged."
      },
      "topic": "Hedge Funds",
      "subtopic": "Event-Driven Hedge Funds",
      "difficulty": "easy",
      "source": "CAIA Level I, Event-Driven Hedge Funds: merger arbitrage in cash and stock-for-stock deals"
    },
    {
      "stem": "Empirical research on hedge fund risk factors, notably by Fung and Hsieh, found that the returns of trend-following managed futures funds BEST resemble the payoff of:",
      "options": [
        "A long position in lookback straddles",
        "A short position in out-of-the-money puts",
        "A covered call position on an equity index",
        "A short position in at-the-money straddles"
      ],
      "answer": "A",
      "explanation": "Trend followers profit from large, sustained price moves in either direction and tend to lose small amounts in trendless markets. That payoff resembles a long lookback straddle, which pays off from the extreme high or low reached during the period. This option-like profile explains why managed futures often show positive skewness and have tended to perform well in prolonged market crises.",
      "rationales": {
        "A": "Correct: trend following gains from large moves in either direction, much like a long lookback straddle.",
        "B": "Short puts earn steady premiums with crash risk, a negatively skewed profile unlike trend following.",
        "C": "Covered calls cap upside and keep downside exposure, which does not match the profile of trend following.",
        "D": "Short straddles profit from calm markets and lose on big moves, the opposite of trend following."
      },
      "topic": "Hedge Funds",
      "subtopic": "Macro and Managed Futures Funds",
      "difficulty": "medium",
      "source": "CAIA Level I, Macro and Managed Futures Funds: trend following and option-like return profiles"
    },
    {
      "stem": "A convertible arbitrage manager holds long positions in convertible bonds and delta-hedges the equity exposure by shorting the issuers' shares. Which market environment would MOST likely cause the largest losses for this position?",
      "options": [
        "Rising implied volatility combined with narrowing issuer credit spreads",
        "Large daily swings in the issuers' share prices with stable credit spreads",
        "Falling implied volatility combined with widening issuer credit spreads",
        "Stable share prices with tightening credit spreads and steady volatility"
      ],
      "answer": "C",
      "explanation": "A delta-hedged long convertible is long the embedded call option, which makes it long volatility (vega and gamma), and long the issuer's credit risk. Falling implied volatility reduces the value of the embedded option, and widening credit spreads reduce the value of the bond component, so the two effects compound. Such episodes, often accompanied by forced deleveraging and illiquidity, have produced the strategy's worst losses.",
      "rationales": {
        "A": "Rising implied volatility lifts the embedded option's value and narrowing spreads lift the bond value, both helping.",
        "B": "Large share price swings benefit a delta-hedged long convertible through positive gamma on rebalancing.",
        "C": "Correct: the position is long volatility and long credit, so falling volatility and wider spreads both cause losses.",
        "D": "Tightening credit spreads raise the bond's value; stable prices cost little apart from minor time decay."
      },
      "topic": "Hedge Funds",
      "subtopic": "Relative Value Hedge Funds",
      "difficulty": "hard",
      "source": "CAIA Level I, Relative Value Hedge Funds: convertible arbitrage, delta hedging, volatility and credit exposure"
    },
    {
      "stem": "In a proof-of-stake blockchain, the right to propose and validate new blocks is primarily determined by:",
      "options": [
        "The computing power a participant devotes to solving cryptographic puzzles",
        "The amount of the network's native cryptocurrency a participant has locked up",
        "The number of transactions a participant has previously submitted to the network"
      ],
      "answer": "B",
      "explanation": "In proof of stake, validators lock up (stake) the network's native tokens, and their chance of being selected to propose or attest to blocks is tied to that stake. Dishonest behaviour can be punished by slashing part of the stake, which aligns validators' incentives with the security of the network. This replaces the energy-intensive mining of proof of work, as Ethereum did when it moved to proof of stake in 2022.",
      "rationales": {
        "A": "Devoting computing power to solving puzzles is how proof-of-work mining works, not proof of stake.",
        "B": "Correct: validators are selected according to the native tokens they stake, and that stake can be slashed for misconduct.",
        "C": "Past transaction activity does not grant validation rights in a proof-of-stake consensus mechanism."
      },
      "topic": "Digital Assets",
      "subtopic": "Distributed Ledger Technology",
      "difficulty": "easy",
      "source": "CAIA Level I, Digital Assets: consensus mechanisms, proof of work versus proof of stake"
    }
  ]
}
```
