```json
{
  "format": "domcq/1",
  "exam": "cscp",
  "set": "APICS Certified Supply Chain Professional (CSCP) practice – Mixed syllabus set 1",
  "questions": [
    {
      "stem": "Which statement reflects a generally accepted principle of forecasting?",
      "options": [
        "Forecasts become more accurate the further into the future they extend.",
        "A well-built forecast model removes the need to measure forecast error.",
        "Forecasts for product families are usually more accurate than for individual items.",
        "Quantitative forecasts are always more accurate than qualitative forecasts."
      ],
      "answer": "C",
      "explanation": "When items are grouped into families, random over- and under-forecasts for individual items tend to offset one another, so the aggregate forecast is usually more accurate. This is one reason S&OP plans at the family level and disaggregates later. The other core principles are that forecasts are rarely exactly right, should include an estimate of error, and lose accuracy as the horizon lengthens.",
      "rationales": {
        "A": "Wrong: accuracy falls as the forecast horizon lengthens, because uncertainty grows over time.",
        "B": "Wrong: every forecast is expected to be wrong to some degree, so error should always be estimated and monitored.",
        "C": "Correct: errors for individual items partly cancel out when aggregated, making family forecasts more accurate.",
        "D": "Wrong: qualitative methods can be the better choice, for example for new products with no demand history."
      },
      "topic": "Forecast and Manage Demand",
      "subtopic": "Principles of forecasting",
      "difficulty": "easy",
      "source": "CSCP syllabus: Forecast and Manage Demand – principles of forecasting (aggregation, horizon, error)"
    },
    {
      "stem": "A planner reviews a forecast over six periods. Forecast error is defined as actual demand minus forecast. The running sum of forecast errors (RSFE) is +24 units and the mean absolute deviation (MAD) is 6 units. What is the tracking signal, and what does it suggest?",
      "options": [
        "0.25; the forecast is unbiased and within normal limits",
        "4.0; the forecast is consistently under-forecasting demand",
        "4.0; the forecast is consistently over-forecasting demand",
        "144; the forecast errors are random and need no action"
      ],
      "answer": "B",
      "explanation": "The tracking signal is the running sum of forecast errors divided by MAD: 24 / 6 = 4.0. Because error is actual minus forecast, a large positive sum means actual demand has repeatedly exceeded the forecast. A tracking signal that far from zero points to bias rather than random error, so the model should be reviewed.",
      "rationales": {
        "A": "Wrong: 0.25 comes from dividing MAD by RSFE, which inverts the formula.",
        "B": "Correct: 24 / 6 = 4.0, and a positive RSFE (actual minus forecast) means demand keeps exceeding the forecast.",
        "C": "Wrong: the value is right, but a positive actual-minus-forecast sum means under-forecasting, not over-forecasting.",
        "D": "Wrong: 144 is RSFE multiplied by MAD, which is not the tracking signal formula."
      },
      "topic": "Forecast and Manage Demand",
      "subtopic": "Forecast error and tracking signal",
      "difficulty": "medium",
      "source": "CSCP syllabus: Forecast and Manage Demand – measuring forecast error (MAD, bias, tracking signal)"
    },
    {
      "stem": "A retailer's sales to consumers are steady, yet its distributor's orders to the manufacturer swing widely, and the manufacturer's orders to its own suppliers swing even more. Which practice is a recognized cause of this pattern?",
      "options": [
        "Sharing point-of-sale data with all upstream partners",
        "Using everyday low pricing instead of frequent promotions",
        "Reducing replenishment lead times between supply chain tiers",
        "Batching orders into large, infrequent purchases"
      ],
      "answer": "D",
      "explanation": "The pattern described is the bullwhip effect: demand variability grows as orders move upstream. Order batching is one of its classic causes, because steady consumption becomes lumpy, infrequent orders that upstream partners mistake for demand swings. Other causes include demand-signal processing, price fluctuations from promotions, and rationing or shortage gaming.",
      "rationales": {
        "A": "Wrong: sharing point-of-sale data reduces the bullwhip effect by giving upstream tiers the true demand signal.",
        "B": "Wrong: everyday low pricing removes promotion-driven forward buying, so it reduces rather than causes the effect.",
        "C": "Wrong: shorter lead times reduce the amplification of demand signals, so they mitigate the bullwhip effect.",
        "D": "Correct: batching turns steady demand into large, irregular orders, which amplifies variability upstream."
      },
      "topic": "Manage the Global Supply Chain Network and Information",
      "subtopic": "Bullwhip effect",
      "difficulty": "medium",
      "source": "CSCP syllabus: Manage the Global Supply Chain Network and Information – bullwhip effect causes and countermeasures"
    },
    {
      "stem": "A manufacturer wants a single system with a shared database that integrates finance, procurement, production planning, inventory and human resources, so that a transaction recorded in one function is immediately visible to the others. Which type of system best fits this need?",
      "options": [
        "Enterprise resource planning (ERP)",
        "Warehouse management system (WMS)",
        "Transportation management system (TMS)",
        "Customer relationship management (CRM)"
      ],
      "answer": "A",
      "explanation": "ERP systems are built around one integrated database that links the main business functions, so data entered once is available across the organization. That integration is what lets a sales order, for example, update inventory, production plans and financial records together. WMS, TMS and CRM are specialized applications that often connect to ERP but do not provide enterprise-wide integration on their own.",
      "rationales": {
        "A": "Correct: ERP integrates functions such as finance, purchasing, production and HR around a common database.",
        "B": "Wrong: a WMS manages warehouse activities such as receiving, putaway and picking, not enterprise-wide functions.",
        "C": "Wrong: a TMS plans and executes freight movements; it does not integrate finance, HR and production.",
        "D": "Wrong: CRM manages customer interactions and sales data rather than integrating all internal functions."
      },
      "topic": "Manage the Global Supply Chain Network and Information",
      "subtopic": "Supply chain information systems",
      "difficulty": "easy",
      "source": "CSCP syllabus: Manage the Global Supply Chain Network and Information – enterprise resource planning and supply chain technology"
    },
    {
      "stem": "A buyer compares two suppliers for the same part. Supplier X charges $20.00 per unit, freight is $2.00 per unit, and the expected cost of quality failures is $1.50 per unit. Supplier Y charges $19.00 per unit, freight is $3.00 per unit, and the expected cost of quality failures is $2.00 per unit. On a total cost of ownership basis, which conclusion is correct?",
      "options": [
        "Supplier Y is cheaper, by $1.00 per unit",
        "Supplier X is cheaper, by $0.50 per unit",
        "Supplier Y is cheaper, by $0.50 per unit",
        "The two suppliers cost the same per unit"
      ],
      "answer": "B",
      "explanation": "Total cost of ownership adds the costs of acquiring and using a purchase to its price. Supplier X totals $20.00 + $2.00 + $1.50 = $23.50 per unit and Supplier Y totals $19.00 + $3.00 + $2.00 = $24.00 per unit. The supplier with the lower price is therefore the more expensive one once freight and quality costs are counted.",
      "rationales": {
        "A": "Wrong: the $1.00 gap compares purchase price only and ignores freight and quality costs.",
        "B": "Correct: X totals $23.50 per unit against $24.00 for Y, a $0.50 advantage for X.",
        "C": "Wrong: the gap is $0.50, but it favors Supplier X, not Supplier Y.",
        "D": "Wrong: the totals are $23.50 and $24.00, so the suppliers do not cost the same."
      },
      "topic": "Source Products and Services",
      "subtopic": "Total cost of ownership",
      "difficulty": "medium",
      "source": "CSCP syllabus: Source Products and Services – total cost of ownership in supplier selection"
    },
    {
      "stem": "Using the Kraljic purchasing portfolio matrix, a purchased item has low profit impact (a small share of spend) but high supply risk, because only one qualified supplier exists. How is the item classified, and what is the typical purchasing emphasis?",
      "options": [
        "Leverage item; use competitive bidding to drive down the price",
        "Strategic item; build a long-term partnership with the supplier",
        "Bottleneck item; secure continuity of supply and develop alternatives",
        "Noncritical item; simplify and automate the buying process"
      ],
      "answer": "C",
      "explanation": "The Kraljic matrix places items by profit impact and supply risk. Low profit impact combined with high supply risk defines a bottleneck item, where the main concern is keeping supply flowing, not price. Typical actions are holding buffer stock, securing volume agreements and qualifying alternative sources or substitute specifications.",
      "rationales": {
        "A": "Wrong: leverage items have high profit impact and low supply risk, which is why competitive bidding works for them.",
        "B": "Wrong: strategic items have both high profit impact and high supply risk, unlike this low-spend item.",
        "C": "Correct: low profit impact with high supply risk is a bottleneck item, managed to secure continuity of supply.",
        "D": "Wrong: noncritical items have low supply risk, but this item has a single qualified supplier."
      },
      "topic": "Source Products and Services",
      "subtopic": "Purchasing portfolio (Kraljic matrix)",
      "difficulty": "medium",
      "source": "CSCP syllabus: Source Products and Services – category and portfolio analysis (Kraljic matrix)"
    },
    {
      "stem": "A company can make a component in-house with fixed costs of $60,000 per year and a variable cost of $8 per unit, or buy it from a supplier for $12 per unit with no added fixed cost. Expected annual demand is 12,000 units. Considering cost alone, what should the company do?",
      "options": [
        "Buy, because demand is below the 15,000-unit break-even volume",
        "Make, because demand is above the 7,500-unit break-even volume",
        "Make, because its variable cost is $4 per unit lower than buying",
        "Make, because demand is above the 5,000-unit break-even volume"
      ],
      "answer": "A",
      "explanation": "The break-even volume is the fixed cost divided by the per-unit saving from making: $60,000 / ($12 - $8) = 15,000 units. Below that volume, the per-unit saving does not recover the fixed cost. At 12,000 units, making costs $60,000 + $96,000 = $156,000 against $144,000 to buy, so buying is cheaper by $12,000.",
      "rationales": {
        "A": "Correct: break-even is $60,000 / $4 = 15,000 units, and at 12,000 units buying costs $12,000 less.",
        "B": "Wrong: 7,500 comes from dividing fixed cost by the make variable cost, not by the $4 per-unit saving.",
        "C": "Wrong: a lower variable cost does not justify making unless volume is high enough to recover the fixed cost.",
        "D": "Wrong: 5,000 comes from dividing fixed cost by the purchase price, which is not the break-even calculation."
      },
      "topic": "Source Products and Services",
      "subtopic": "Make-versus-buy analysis",
      "difficulty": "hard",
      "source": "CSCP syllabus: Source Products and Services – make-versus-buy decisions and break-even analysis"
    },
    {
      "stem": "Annual demand for an item is 10,000 units, the cost to place one order is $40, and the annual carrying cost is $5 per unit. Using the basic economic order quantity (EOQ) model, what is the EOQ?",
      "options": [
        "200 units",
        "283 units",
        "400 units",
        "800 units"
      ],
      "answer": "C",
      "explanation": "The basic EOQ is the square root of (2 × annual demand × ordering cost) / annual carrying cost per unit. Here that is the square root of (2 × 10,000 × 40) / 5 = the square root of 160,000 = 400 units. At this quantity, annual ordering cost and annual carrying cost are equal, which minimizes their combined total.",
      "rationales": {
        "A": "Wrong: 200 units is half the EOQ and would make annual ordering costs exceed carrying costs.",
        "B": "Wrong: 283 units results from leaving the 2 out of the formula (the square root of 80,000).",
        "C": "Correct: the square root of (2 × 10,000 × 40 / 5) = the square root of 160,000 = 400 units.",
        "D": "Wrong: 800 units is double the EOQ and would make annual carrying costs exceed ordering costs."
      },
      "topic": "Manage Internal Operations and Inventory",
      "subtopic": "Economic order quantity",
      "difficulty": "medium",
      "source": "CSCP syllabus: Manage Internal Operations and Inventory – lot sizing and economic order quantity"
    },
    {
      "stem": "In ABC inventory classification based on annual dollar usage, which description fits Class A items?",
      "options": [
        "A large share of items that accounts for a small share of annual dollar usage",
        "The items that are ordered most frequently, regardless of their value",
        "The items with the longest supplier lead times, regardless of their value",
        "A small share of items that accounts for a large share of annual dollar usage"
      ],
      "answer": "D",
      "explanation": "ABC classification applies the Pareto principle to inventory. A relatively small number of items, often around 20 percent, typically makes up most of the annual dollar usage and is classed as A. These items get the tightest control, such as frequent review and accurate records, because that is where most of the inventory investment sits.",
      "rationales": {
        "A": "Wrong: many items with a small share of dollar usage describes Class C, not Class A.",
        "B": "Wrong: standard ABC classification ranks items by annual dollar usage, not by order frequency.",
        "C": "Wrong: lead time can affect how an item is managed, but it is not the basis of ABC classification.",
        "D": "Correct: Class A is the small group of items that accounts for most of the annual dollar usage."
      },
      "topic": "Manage Internal Operations and Inventory",
      "subtopic": "ABC classification",
      "difficulty": "easy",
      "source": "CSCP syllabus: Manage Internal Operations and Inventory – inventory classification (ABC analysis)"
    },
    {
      "stem": "An item has average daily demand of 40 units and a standard deviation of daily demand of 10 units. Supplier lead time is a constant 4 days, daily demands are independent, and the target service level corresponds to a safety factor (z) of 1.65. What is the reorder point?",
      "options": [
        "160 units",
        "193 units",
        "226 units",
        "177 units"
      ],
      "answer": "B",
      "explanation": "The standard deviation of demand over the lead time is the daily standard deviation times the square root of the lead time: 10 × √4 = 20 units. Safety stock is z × 20 = 1.65 × 20 = 33 units. The reorder point is expected lead-time demand plus safety stock: (40 × 4) + 33 = 193 units.",
      "rationales": {
        "A": "Wrong: 160 units is lead-time demand only and carries no safety stock against variability.",
        "B": "Correct: 160 units of lead-time demand plus safety stock of 1.65 × 10 × √4 = 33 gives 193 units.",
        "C": "Wrong: 226 units multiplies the daily standard deviation by 4 instead of by the square root of 4.",
        "D": "Wrong: 177 units uses one day's standard deviation and ignores the 4-day lead time in safety stock."
      },
      "topic": "Manage Internal Operations and Inventory",
      "subtopic": "Safety stock and reorder point",
      "difficulty": "medium",
      "source": "CSCP syllabus: Manage Internal Operations and Inventory – safety stock, service levels and reorder points"
    },
    {
      "stem": "A four-step production line has step 3 as its constraint: step 3 processes 50 units per hour, while each of the other steps can process at least 70 units per hour. Demand exceeds 50 units per hour. A project would cut setup time at step 1, adding 10 units per hour to step 1's capacity. According to the theory of constraints, what is the likely effect on the line's throughput?",
      "options": [
        "No increase, because throughput is still limited by step 3",
        "An increase of 10 units per hour, matching step 1's gain",
        "An increase of about 2.5 units per hour, averaged over four steps",
        "A lasting increase, because step 3 will receive work more quickly"
      ],
      "answer": "A",
      "explanation": "Under the theory of constraints, system throughput is set by the constraint, so an hour gained at a non-constraint does not raise output. Step 1 already has spare capacity, and extra capacity there only adds work-in-process in front of step 3. To increase throughput, the line must exploit or elevate step 3 itself.",
      "rationales": {
        "A": "Correct: output is capped at 50 units per hour by step 3, so extra capacity at step 1 does not raise throughput.",
        "B": "Wrong: step 1 is not the constraint, so its added capacity cannot pass through the 50-unit-per-hour step.",
        "C": "Wrong: throughput is not an average of step capacities; it is set by the slowest step.",
        "D": "Wrong: step 3 is already fully loaded, so feeding it faster only builds queues in front of it."
      },
      "topic": "Manage Internal Operations and Inventory",
      "subtopic": "Theory of constraints",
      "difficulty": "hard",
      "source": "CSCP syllabus: Manage Internal Operations and Inventory – theory of constraints and capacity management"
    },
    {
      "stem": "An exporter loads goods into a shipping container and hands the container over to the carrier at an inland container terminal, before it is placed on board any vessel. Under Incoterms 2020, which rule does the ICC guidance indicate is more appropriate than FOB for this situation?",
      "options": [
        "CIF (Cost, Insurance and Freight)",
        "FAS (Free Alongside Ship)",
        "CFR (Cost and Freight)",
        "FCA (Free Carrier)"
      ],
      "answer": "D",
      "explanation": "FOB is meant for sea and inland waterway transport, with delivery when goods are on board the vessel. With containers handed to a carrier at a terminal, the seller loses control before loading but would still carry the risk under FOB. The ICC therefore recommends FCA, which can be used for any mode and places delivery at the point of handover to the carrier.",
      "rationales": {
        "A": "Wrong: CIF is a sea and inland waterway rule like FOB; for containers the ICC points to CIP instead.",
        "B": "Wrong: FAS is a sea-only rule with delivery alongside the vessel, so it does not fit an inland terminal handover.",
        "C": "Wrong: CFR is also limited to sea and inland waterway transport; CPT is its any-mode counterpart.",
        "D": "Correct: FCA applies to any mode and delivers when goods are handed to the carrier, as at a container terminal."
      },
      "topic": "Manage Supply Chain Logistics",
      "subtopic": "Incoterms 2020",
      "difficulty": "medium",
      "source": "ICC Incoterms 2020 – guidance notes on FOB and FCA; CSCP syllabus: Manage Supply Chain Logistics – trade terms"
    },
    {
      "stem": "Which warehousing practice moves incoming shipments from the receiving dock directly to the outbound dock for delivery, with little or no time spent in storage?",
      "options": [
        "Pick-and-pack fulfillment",
        "Postponement",
        "Cross-docking",
        "Slotting optimization"
      ],
      "answer": "C",
      "explanation": "Cross-docking transfers goods from inbound to outbound vehicles, often sorting or consolidating them on the way, without putting them away into storage. It cuts handling, storage cost and order cycle time. It depends on tightly coordinated inbound and outbound schedules and accurate advance shipment information.",
      "rationales": {
        "A": "Wrong: pick-and-pack draws goods from storage to fill individual orders, so stock is held first.",
        "B": "Wrong: postponement delays final configuration until demand is known; it is not a dock-to-dock transfer.",
        "C": "Correct: cross-docking moves goods from receiving to shipping with little or no storage in between.",
        "D": "Wrong: slotting decides where stored items sit in the warehouse, which assumes the goods are stored."
      },
      "topic": "Manage Supply Chain Logistics",
      "subtopic": "Warehousing and cross-docking",
      "difficulty": "easy",
      "source": "CSCP syllabus: Manage Supply Chain Logistics – warehouse operations and cross-docking"
    },
    {
      "stem": "Which feature best distinguishes collaborative planning, forecasting and replenishment (CPFR) from a buyer simply sending a supplier periodic purchase orders?",
      "options": [
        "The supplier keeps legal ownership of stock held at the buyer's site",
        "Partners agree a joint business plan, share forecasts and resolve exceptions together",
        "The buyer awards all of its volume for the category to a single supplier",
        "The supplier ships only after receiving a firm electronic purchase order"
      ],
      "answer": "B",
      "explanation": "CPFR is a structured collaboration in which trading partners build a joint business plan, create and share sales and order forecasts, and work through the exceptions where their numbers differ. The aim is one agreed view of demand that drives replenishment for both sides. It changes how partners plan together, not who owns the inventory or how many suppliers are used.",
      "rationales": {
        "A": "Wrong: supplier ownership of stock at the buyer's site describes consignment inventory, not CPFR.",
        "B": "Correct: joint planning, shared forecasts and collaborative exception resolution are the core of CPFR.",
        "C": "Wrong: single sourcing is a sourcing decision and is not what defines CPFR.",
        "D": "Wrong: shipping only against firm orders is conventional transactional buying, which CPFR goes beyond."
      },
      "topic": "Manage Customer and Supplier Relationships",
      "subtopic": "Collaboration (CPFR)",
      "difficulty": "medium",
      "source": "CSCP syllabus: Manage Customer and Supplier Relationships – collaborative planning, forecasting and replenishment"
    },
    {
      "stem": "Under a vendor-managed inventory (VMI) arrangement, who is primarily responsible for deciding when, and how much, to replenish the customer's stock?",
      "options": [
        "The supplier, using the customer's inventory and demand data",
        "The customer's buyer, using the supplier's current price list",
        "A third-party carrier contracted by the customer for delivery",
        "The customer's warehouse manager, based on periodic shelf counts"
      ],
      "answer": "A",
      "explanation": "In VMI, the supplier monitors the customer's inventory levels and demand, usually through shared electronic data, and decides when and how much to replenish within agreed limits. Moving that decision upstream gives the supplier better visibility for its own planning. The customer gains fewer stockouts and less purchasing work.",
      "rationales": {
        "A": "Correct: under VMI the supplier makes the replenishment decisions, based on visibility into customer inventory.",
        "B": "Wrong: a customer buyer placing orders is traditional purchasing, the decision VMI moves to the supplier.",
        "C": "Wrong: a carrier moves goods but does not own the replenishment decision in a VMI arrangement.",
        "D": "Wrong: replenishment driven by the customer's own shelf counts is customer-managed, not vendor-managed."
      },
      "topic": "Manage Customer and Supplier Relationships",
      "subtopic": "Vendor-managed inventory",
      "difficulty": "easy",
      "source": "CSCP syllabus: Manage Customer and Supplier Relationships – supplier collaboration and vendor-managed inventory"
    },
    {
      "stem": "A buyer is renegotiating with an incumbent supplier that is asking $110 per unit. A qualified alternative supplier has offered $100 per unit, but switching would add costs equal to $8 per unit over the contract term for qualification, tooling transfer and transition. Quality, service and risk are otherwise equal. Using the concept of the best alternative to a negotiated agreement (BATNA), what is the highest price the buyer should rationally accept from the incumbent?",
      "options": [
        "$100 per unit, the alternative supplier's quoted price",
        "$110 per unit, the incumbent supplier's asking price",
        "$105 per unit, the midpoint between the two quotes",
        "$108 per unit, the full cost of the best alternative"
      ],
      "answer": "D",
      "explanation": "A BATNA sets the walk-away point: a negotiator should not accept a deal worse than its best alternative. The buyer's best alternative actually costs $100 + $8 = $108 per unit once switching costs are counted. Any incumbent price up to $108 is at least as good as walking away, so $108 is the reservation price.",
      "rationales": {
        "A": "Wrong: $100 ignores the $8 per-unit switching cost, so it understates the true cost of the alternative.",
        "B": "Wrong: $110 is worse than the $108 alternative, so accepting it would leave the buyer worse off.",
        "C": "Wrong: a midpoint is a possible compromise target, not the walk-away point the BATNA defines.",
        "D": "Correct: the alternative costs $100 plus $8 in switching costs, so $108 is the rational walk-away price."
      },
      "topic": "Manage Customer and Supplier Relationships",
      "subtopic": "Negotiation (BATNA)",
      "difficulty": "hard",
      "source": "CSCP syllabus: Manage Customer and Supplier Relationships – negotiation and supplier contracts (BATNA)"
    },
    {
      "stem": "A company buys an insurance policy to cover financial losses from a possible fire at its main distribution center. Which risk response does this represent?",
      "options": [
        "Risk avoidance",
        "Risk acceptance",
        "Risk transfer",
        "Risk mitigation"
      ],
      "answer": "C",
      "explanation": "Buying insurance shifts the financial consequences of a risk event to another party in exchange for a premium, which is risk transfer. The fire is still just as likely, and the physical disruption still falls on the company. Insurance changes who bears the financial loss, not whether the event happens.",
      "rationales": {
        "A": "Wrong: avoidance removes the risk entirely, for example by not using the facility, which is not the case here.",
        "B": "Wrong: acceptance means bearing the risk with no action taken, but the company is shifting the loss to an insurer.",
        "C": "Correct: insurance moves the financial impact of the event to the insurer, which is risk transfer.",
        "D": "Wrong: mitigation lowers likelihood or impact, for example with sprinklers, whereas insurance shifts the cost."
      },
      "topic": "Manage Supply Chain Risk",
      "subtopic": "Risk response strategies",
      "difficulty": "easy",
      "source": "CSCP syllabus: Manage Supply Chain Risk – risk response options (avoid, transfer, mitigate, accept)"
    },
    {
      "stem": "A supply chain risk register lists four risks. If the risks are ranked by expected monetary value (probability multiplied by financial impact), which one should receive the highest priority?",
      "options": [
        "Port strike: 5% probability, $1,500,000 impact",
        "Supplier quality failure: 30% probability, $200,000 impact",
        "IT system outage: 10% probability, $500,000 impact",
        "Carrier delays: 50% probability, $100,000 impact"
      ],
      "answer": "A",
      "explanation": "Expected monetary value multiplies the probability of each risk by its impact: the port strike is 0.05 × $1,500,000 = $75,000, the quality failure is $60,000, and the IT outage and carrier delays are $50,000 each. The port strike ranks highest even though it is the least likely event. This is why risks are assessed on probability and impact together rather than on likelihood alone.",
      "rationales": {
        "A": "Correct: 0.05 × $1,500,000 = $75,000, the highest expected monetary value of the four.",
        "B": "Wrong: 0.30 × $200,000 = $60,000, which is below the port strike's $75,000.",
        "C": "Wrong: 0.10 × $500,000 = $50,000, which ties for the lowest expected value.",
        "D": "Wrong: although most likely, 0.50 × $100,000 = $50,000, which ties for the lowest expected value."
      },
      "topic": "Manage Supply Chain Risk",
      "subtopic": "Risk assessment and prioritization",
      "difficulty": "medium",
      "source": "CSCP syllabus: Manage Supply Chain Risk – risk assessment, probability and impact, expected value"
    },
    {
      "stem": "A company has days of inventory on hand of 45 days, days sales outstanding of 30 days, and days payables outstanding of 40 days. What is its cash-to-cash cycle time?",
      "options": [
        "25 days",
        "35 days",
        "55 days",
        "115 days"
      ],
      "answer": "B",
      "explanation": "Cash-to-cash cycle time measures how long cash is tied up between paying suppliers and collecting from customers. It equals days of inventory plus days sales outstanding minus days payables outstanding: 45 + 30 - 40 = 35 days. Holding less inventory, collecting faster or paying later all shorten the cycle.",
      "rationales": {
        "A": "Wrong: 25 days does not follow from the standard formula of inventory days plus receivable days minus payable days.",
        "B": "Correct: 45 + 30 - 40 = 35 days.",
        "C": "Wrong: 55 days adds payables and subtracts receivables, which reverses their roles in the formula.",
        "D": "Wrong: 115 days adds all three terms, but payables reduce the time cash is tied up and must be subtracted."
      },
      "topic": "Evaluate and Optimize the Supply Chain",
      "subtopic": "Financial performance metrics",
      "difficulty": "medium",
      "source": "CSCP syllabus: Evaluate and Optimize the Supply Chain – performance metrics (cash-to-cash cycle time)"
    },
    {
      "stem": "A distributor measures four order attributes: 98% of orders arrive on time, 97% arrive complete, 99% arrive damage-free and 99% have correct documentation. Assuming failures on these attributes occur independently, what is the approximate perfect order fulfillment rate?",
      "options": [
        "98.3%",
        "97.0%",
        "95.1%",
        "93.2%"
      ],
      "answer": "D",
      "explanation": "Perfect order fulfillment counts only orders that meet every criterion at once, so with independent failures the attribute rates are multiplied: 0.98 × 0.97 × 0.99 × 0.99 ≈ 0.932, or about 93.2%. The result is lower than any single attribute, because each one gives an order another way to fail. Averaging the rates or reporting the weakest one overstates performance.",
      "rationales": {
        "A": "Wrong: 98.3% is the average of the four rates, which overstates how many orders meet every criterion.",
        "B": "Wrong: 97.0% is the weakest single attribute, but the other failures reduce the combined rate further.",
        "C": "Wrong: 95.1% multiplies only the on-time and complete rates and leaves out damage and documentation.",
        "D": "Correct: 0.98 × 0.97 × 0.99 × 0.99 ≈ 93.2% of orders meet all four criteria."
      },
      "topic": "Evaluate and Optimize the Supply Chain",
      "subtopic": "Reliability metrics (perfect order fulfillment)",
      "difficulty": "hard",
      "source": "CSCP syllabus: Evaluate and Optimize the Supply Chain – SCOR reliability metric: perfect order fulfillment"
    }
  ]
}
```
