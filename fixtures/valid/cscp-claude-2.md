```json
{
  "format": "domcq/1",
  "exam": "cscp",
  "set": "APICS Certified Supply Chain Professional (CSCP) practice – Mixed syllabus set 1",
  "questions": [
    {
      "stem": "A planner tracks a monthly forecast, defining forecast error as actual demand minus forecast. Over the last six months the running sum of forecast errors is +48 units and the mean absolute deviation (MAD) is 10 units. What is the tracking signal, and what does it indicate?",
      "options": [
        "-4.8; the forecast has been consistently too high",
        "4.8; the forecast has been consistently too low",
        "0.21; the forecast shows no meaningful bias",
        "4.8; the forecast has been consistently too high"
      ],
      "answer": "B",
      "explanation": "The tracking signal is the running sum of forecast errors divided by MAD: 48 / 10 = 4.8. Because error is defined as actual minus forecast, a large positive sum means actual demand has repeatedly exceeded the forecast, so the forecast is biased low. A value this far from zero (beyond common control limits of about plus or minus 4) signals that the forecasting method should be reviewed.",
      "topic": "Forecast and Manage Demand",
      "subtopic": "Forecast error and bias",
      "difficulty": "medium",
      "source": "CSCP Learning System, Forecast and Manage Demand – measuring forecast error (MAD, bias, tracking signal)"
    },
    {
      "stem": "A bicycle manufacturer assembles bicycles in its own plant and sells them to retail dealers. Which of the following is an example of independent demand for this manufacturer?",
      "options": [
        "Tires consumed when assembling bicycles in the plant",
        "Steel tubing used to fabricate the bicycle frames",
        "Paint consumed on the frame finishing line",
        "Finished bicycles ordered by retail dealers"
      ],
      "answer": "D",
      "explanation": "Independent demand is demand for an item that is unrelated to the demand for other items, typically finished goods or service parts ordered by customers, and it must be forecast. Tires, tubing and paint used in the plant are dependent demand: their requirements are calculated from the production schedule for bicycles, for example through MRP, rather than forecast separately.",
      "topic": "Forecast and Manage Demand",
      "subtopic": "Independent and dependent demand",
      "difficulty": "easy",
      "source": "CSCP Learning System, Forecast and Manage Demand – demand management; ASCM Dictionary: independent demand, dependent demand"
    },
    {
      "stem": "A company stocks standard modules and subassemblies, then performs final assembly only after receiving a customer order (assemble-to-order). Where is the push-pull boundary, also called the customer order decoupling point, typically located in this environment?",
      "options": [
        "At the inventory of modules and subassemblies awaiting final assembly",
        "At the finished goods inventory held in regional distribution centers",
        "At the raw material purchasing stage before any production begins",
        "At the retailer's shelf after the finished product has been delivered"
      ],
      "answer": "A",
      "explanation": "The push-pull boundary is the point where production shifts from being driven by forecasts (push) to being driven by actual customer orders (pull). In assemble-to-order, modules and subassemblies are built to forecast and held in stock, and final assembly is pulled by the order, so the decoupling point sits at that component inventory. Finished goods stock would indicate make-to-stock, and starting at raw material purchasing would indicate make-to-order or engineer-to-order.",
      "topic": "Manage the Global Supply Chain Network and Information",
      "subtopic": "Push-pull boundary",
      "difficulty": "medium",
      "source": "CSCP Learning System, supply chain strategy and network design – push-pull and the customer order decoupling point"
    },
    {
      "stem": "A distributor holds a total of 3,000 units of safety stock across 4 distribution centers. It plans to serve the same total demand from 16 distribution centers. Using the square root law, approximately how much total safety stock will be required after the change?",
      "options": [
        "12,000 units",
        "1,500 units",
        "6,000 units",
        "4,500 units"
      ],
      "answer": "C",
      "explanation": "The square root law states that total safety stock changes in proportion to the square root of the ratio of the new number of stocking locations to the old number. Here the ratio is 16 / 4 = 4, whose square root is 2, so safety stock rises to about 3,000 x 2 = 6,000 units. This illustrates the network design trade-off: decentralizing improves proximity to customers but loses the risk-pooling benefit of centralized inventory.",
      "topic": "Manage the Global Supply Chain Network and Information",
      "subtopic": "Network design and inventory centralization",
      "difficulty": "hard",
      "source": "CSCP Learning System, network design – number of facilities and inventory (square root law, risk pooling)"
    },
    {
      "stem": "A buyer compares two suppliers for a part with an annual volume of 1,000 units. Supplier X: unit price $50, inbound freight $3 per unit, inspection and return costs $2 per unit. Supplier Y: unit price $47, inbound freight $5 per unit, inspection, rework and return costs $4 per unit. Considering only these costs, which conclusion is correct on a total cost of ownership basis?",
      "options": [
        "Supplier Y is cheaper by $3,000 per year",
        "Supplier Y is cheaper by $1,000 per year",
        "Both suppliers have the same total cost",
        "Supplier X is cheaper by $1,000 per year"
      ],
      "answer": "D",
      "explanation": "Total cost of ownership adds acquisition-related costs such as freight and quality costs to the purchase price. Supplier X totals $50 + $3 + $2 = $55 per unit and Supplier Y totals $47 + $5 + $4 = $56 per unit, so X is $1 per unit, or $1,000 per year, cheaper. Comparing price alone would wrongly favor Supplier Y.",
      "topic": "Source Products and Services",
      "subtopic": "Total cost of ownership",
      "difficulty": "medium",
      "source": "CSCP Learning System, Source Products and Services – total cost of ownership in supplier selection"
    },
    {
      "stem": "A company is deciding whether to keep an activity in-house or outsource it to a specialist provider. Which factor most strongly supports keeping the activity in-house?",
      "options": [
        "The activity is a core competency that gives the firm a competitive advantage",
        "Several suppliers can perform the activity at lower cost with equal quality",
        "Volume for the activity is small and too irregular to justify dedicated resources",
        "The firm would need major capital investment to keep performing the activity"
      ],
      "answer": "A",
      "explanation": "Make-or-buy and outsourcing decisions weigh cost against strategic importance. Activities that are core competencies, meaning they differentiate the firm and are hard for competitors to copy, are usually kept in-house to protect that advantage. Lower supplier cost, small irregular volumes and high capital requirements are all arguments for buying or outsourcing instead.",
      "topic": "Source Products and Services",
      "subtopic": "Make-or-buy and outsourcing",
      "difficulty": "easy",
      "source": "CSCP Learning System, Source Products and Services – make-or-buy analysis and outsourcing decisions"
    },
    {
      "stem": "A purchased component represents a very small share of a manufacturer's annual spend and has little effect on product profitability. However, only one supplier is qualified to make it, and qualifying another would take over a year. In the Kraljic portfolio matrix, how should this item be classified and managed?",
      "options": [
        "Leverage item; use competitive bidding to drive down the unit price",
        "Strategic item; build a long-term partnership with joint development",
        "Noncritical item; simplify ordering through catalogs and automation",
        "Bottleneck item; secure supply with buffer stock and seek alternatives"
      ],
      "answer": "D",
      "explanation": "The Kraljic matrix classifies purchases by profit impact and supply risk. Low profit impact combined with high supply risk defines a bottleneck item, where the priority is assuring continuity of supply through safety stock, longer contracts and work on alternative sources or designs. Leverage items have high profit impact and low risk, strategic items are high on both, and noncritical items are low on both.",
      "topic": "Source Products and Services",
      "subtopic": "Purchasing portfolio (Kraljic matrix)",
      "difficulty": "medium",
      "source": "CSCP Learning System, Source Products and Services – category and portfolio analysis (Kraljic matrix)"
    },
    {
      "stem": "An item has annual demand of 10,000 units, an ordering cost of $50 per order and a carrying cost of $4 per unit per year. What is the economic order quantity (EOQ)?",
      "options": [
        "250 units",
        "500 units",
        "707 units",
        "1,000 units"
      ],
      "answer": "B",
      "explanation": "EOQ is the square root of (2 x annual demand x ordering cost) divided by the annual carrying cost per unit: square root of (2 x 10,000 x 50 / 4) = square root of 250,000 = 500 units. At this quantity, annual ordering cost and annual carrying cost are equal ($1,000 each), which minimizes their combined total.",
      "topic": "Manage Internal Operations and Inventory",
      "subtopic": "Lot sizing (EOQ)",
      "difficulty": "easy",
      "source": "CSCP Learning System, Manage Internal Operations and Inventory – order quantities and economic order quantity"
    },
    {
      "stem": "An item has average demand of 40 units per day, a constant replenishment lead time of 5 days and a planned safety stock of 60 units. What is the reorder point?",
      "options": [
        "260 units",
        "200 units",
        "300 units",
        "240 units"
      ],
      "answer": "A",
      "explanation": "The reorder point equals expected demand during the lead time plus safety stock. Lead-time demand is 40 x 5 = 200 units, and adding 60 units of safety stock gives 260 units. Safety stock protects against demand during the lead time being higher than average.",
      "topic": "Manage Internal Operations and Inventory",
      "subtopic": "Reorder point",
      "difficulty": "easy",
      "source": "CSCP Learning System, Manage Internal Operations and Inventory – order point systems and safety stock"
    },
    {
      "stem": "A product passes through three sequential process steps with capacities of 120, 80 and 100 units per hour respectively. Market demand is 110 units per hour. Management proposes adding capacity at the first step. According to the theory of constraints, what is the effect on output?",
      "options": [
        "Output rises to 100 units per hour, the capacity of the third step",
        "Output rises to 110 units per hour, matching market demand",
        "Output stays at 80 units per hour because the second step limits flow",
        "Output rises to 120 units per hour, the new capacity of the first step"
      ],
      "answer": "C",
      "explanation": "In the theory of constraints, the system's throughput is set by its constraint, here the second step at 80 units per hour, which is below demand. Adding capacity at a non-constraint does not raise throughput; it only builds work-in-process in front of the bottleneck. The improvement effort should focus on exploiting and elevating the second step.",
      "topic": "Manage Internal Operations and Inventory",
      "subtopic": "Theory of constraints",
      "difficulty": "medium",
      "source": "CSCP Learning System, Manage Internal Operations and Inventory – theory of constraints (five focusing steps)"
    },
    {
      "stem": "Daily demand for an item is independent from day to day, with a standard deviation of 20 units. Lead time is constant at 4 days. The company targets a 95 percent cycle service level and uses a safety factor (z) of 1.65. How much safety stock is required?",
      "options": [
        "132 units",
        "66 units",
        "33 units",
        "80 units"
      ],
      "answer": "B",
      "explanation": "With a constant lead time, the standard deviation of demand over the lead time is the daily standard deviation times the square root of the lead time: 20 x 2 = 40 units. Safety stock is the safety factor times that figure: 1.65 x 40 = 66 units. Multiplying the daily deviation by the full 4 days overstates variability, because independent daily fluctuations partly offset each other.",
      "topic": "Manage Internal Operations and Inventory",
      "subtopic": "Safety stock and service level",
      "difficulty": "hard",
      "source": "CSCP Learning System, Manage Internal Operations and Inventory – safety stock calculation and service levels"
    },
    {
      "stem": "An exporter sells goods by sea under the Incoterms 2020 rule CIF (Cost, Insurance and Freight), naming the buyer's port as the destination. At what point does the risk of loss or damage pass from the seller to the buyer?",
      "options": [
        "When the vessel arrives at the named destination port",
        "When the goods are handed to the first carrier at the seller's premises",
        "When the buyer completes import customs clearance",
        "When the goods are placed on board the vessel at the port of shipment"
      ],
      "answer": "D",
      "explanation": "CIF is a two-point rule: the seller pays freight and minimum insurance to the named destination port, but risk transfers to the buyer once the goods are on board the vessel at the port of shipment. This split between cost responsibility and risk transfer is a common source of misunderstanding. Handing goods to the first carrier marks risk transfer under FCA or CIP, not CIF.",
      "topic": "Manage Supply Chain Logistics",
      "subtopic": "Incoterms 2020",
      "difficulty": "medium",
      "source": "CSCP Learning System, Manage Supply Chain Logistics – international trade terms; ICC Incoterms 2020 rule CIF"
    },
    {
      "stem": "A company wants one provider to coordinate several third-party logistics providers and carriers on its behalf, integrate the related information flows and manage the overall logistics network, without that provider necessarily owning trucks or warehouses. What type of provider is this?",
      "options": [
        "Freight forwarder",
        "Fourth-party logistics provider",
        "Customs broker",
        "Third-party logistics provider"
      ],
      "answer": "B",
      "explanation": "A fourth-party logistics (4PL) provider acts as an integrator, combining its own resources, capabilities and technology with those of other providers to manage a complete logistics solution. 4PLs are often non-asset-based and manage 3PLs rather than performing the physical work themselves. A 3PL performs specific logistics services such as warehousing or transportation, while forwarders and customs brokers handle narrower tasks.",
      "topic": "Manage Supply Chain Logistics",
      "subtopic": "Logistics service providers",
      "difficulty": "easy",
      "source": "CSCP Learning System, Manage Supply Chain Logistics – logistics service providers; ASCM Dictionary: fourth-party logistics"
    },
    {
      "stem": "A retailer and a supplier agree to a vendor-managed inventory (VMI) arrangement for products stocked at the retailer's distribution center. Under VMI, who is primarily responsible for monitoring stock levels and deciding when and how much to replenish?",
      "options": [
        "The supplier, using inventory and demand data shared by the retailer",
        "The retailer's buyers, using replenishment suggestions sent by the supplier",
        "An independent auditor, who reconciles stock and releases orders for both",
        "The retailer's planners, who approve each order the supplier proposes"
      ],
      "answer": "A",
      "explanation": "In VMI, the supplier takes responsibility for maintaining the customer's inventory within agreed limits, using data such as on-hand stock and sales or withdrawals shared by the customer. Shifting the replenishment decision to the supplier reduces ordering effort for the customer and gives the supplier better demand visibility, which can dampen the bullwhip effect. Arrangements where the customer still decides each order are not VMI.",
      "topic": "Manage Customer and Supplier Relationships",
      "subtopic": "Vendor-managed inventory",
      "difficulty": "easy",
      "source": "CSCP Learning System, Manage Customer and Supplier Relationships – collaborative arrangements; ASCM Dictionary: vendor-managed inventory"
    },
    {
      "stem": "A manufacturer and a large retailer want to move beyond simply exchanging data. Which practice is characteristic of collaborative planning, forecasting and replenishment (CPFR) rather than basic information sharing?",
      "options": [
        "The retailer emails point-of-sale data to the supplier at month end",
        "The retailer transmits its purchase orders to the supplier by EDI",
        "The partners agree on one shared forecast and resolve exceptions jointly",
        "The supplier keeps ownership of stock at the retailer until it is sold"
      ],
      "answer": "C",
      "explanation": "CPFR is a joint process in which trading partners agree on a collaboration arrangement, develop a single shared forecast and plan, and identify and resolve exceptions against agreed criteria. Sending POS data or electronic orders is information sharing that leaves each party planning separately. Supplier-owned stock until sale describes consignment inventory, a separate arrangement about ownership rather than joint planning.",
      "topic": "Manage Customer and Supplier Relationships",
      "subtopic": "Collaborative planning, forecasting and replenishment (CPFR)",
      "difficulty": "medium",
      "source": "CSCP Learning System, Manage Customer and Supplier Relationships – collaboration and CPFR"
    },
    {
      "stem": "A distributor has two customers with identical annual revenue and gross margin. Customer X orders weekly in full pallets and rarely changes orders. Customer Y orders daily in small mixed cartons, frequently requests expedited delivery and returns more goods. Which analysis best reveals the true difference in profitability, and what is it likely to show?",
      "options": [
        "Traditional cost allocation by revenue; the customers are equally profitable",
        "Activity-based cost-to-serve analysis; Customer X is more profitable",
        "ABC classification by sales value; Customer Y is the more valuable account",
        "Standard product costing; Customer Y is more profitable due to order volume"
      ],
      "answer": "B",
      "explanation": "Cost-to-serve analysis uses activity-based costing to assign the costs of order handling, picking, delivery, expediting and returns to the customers who cause them. Allocating these costs by revenue would hide the fact that Customer Y consumes far more service activity for the same margin. Once those costs are traced, Customer X is likely to be more profitable, which can guide segmentation, pricing and service policies.",
      "topic": "Manage Customer and Supplier Relationships",
      "subtopic": "Customer segmentation and cost-to-serve",
      "difficulty": "medium",
      "source": "CSCP Learning System, Manage Customer and Supplier Relationships – customer segmentation and profitability; activity-based costing"
    },
    {
      "stem": "A manufacturer is reviewing responses to supply chain risks. Which of the following actions is an example of risk mitigation, as opposed to risk transfer, avoidance or acceptance?",
      "options": [
        "Qualifying a second supplier in another region for a single-sourced part",
        "Buying an insurance policy that pays for losses from cargo damage at sea",
        "Discontinuing a product line that depends on a high-risk raw material",
        "Setting aside a contingency budget and taking no other preventive action"
      ],
      "answer": "A",
      "explanation": "Mitigation reduces the probability or impact of a risk event while the firm keeps the exposure; adding a second supplier in another region lowers the impact of losing the single source. Insurance shifts the financial consequence to another party (transfer), exiting the product line removes the exposure (avoidance), and a contingency reserve with no other action is active acceptance.",
      "topic": "Manage Supply Chain Risk",
      "subtopic": "Risk response strategies",
      "difficulty": "medium",
      "source": "CSCP Learning System, Manage Supply Chain Risk – risk response planning (accept, avoid, mitigate, transfer)"
    },
    {
      "stem": "A risk team can fund one mitigation this year and will choose the one with the largest expected loss reduction minus its cost. Port strike: probability 10%, impact $500,000; mitigation costs $30,000 and cuts probability to 2%. Supplier insolvency: probability 40%, impact $100,000; mitigation costs $20,000 and cuts impact to $20,000. Factory flood: probability 25%, impact $300,000; mitigation costs $50,000 and cuts impact to $100,000. Cyberattack on the order system: probability 5%, impact $2,000,000; mitigation costs $25,000 and cuts probability to 1%. Which mitigation should be funded?",
      "options": [
        "The port strike mitigation",
        "The supplier insolvency mitigation",
        "The factory flood mitigation",
        "The cyberattack mitigation"
      ],
      "answer": "D",
      "explanation": "Expected loss is probability times impact, so each mitigation's value is the reduction in expected loss minus its cost. Port strike: 0.08 x $500,000 = $40,000 - $30,000 = $10,000. Supplier insolvency: 0.40 x $80,000 = $32,000 - $20,000 = $12,000. Factory flood: 0.25 x $200,000 = $50,000 - $50,000 = $0. Cyberattack: 0.04 x $2,000,000 = $80,000 - $25,000 = $55,000, the clear best, showing that low-probability, high-impact risks can dominate once quantified.",
      "topic": "Manage Supply Chain Risk",
      "subtopic": "Risk quantification and prioritization",
      "difficulty": "hard",
      "source": "CSCP Learning System, Manage Supply Chain Risk – risk assessment (probability and impact, expected value) and response selection"
    },
    {
      "stem": "In the SCOR model, perfect order fulfillment is the top-level metric associated with which performance attribute?",
      "options": [
        "Responsiveness",
        "Agility",
        "Reliability",
        "Cost"
      ],
      "answer": "C",
      "explanation": "Reliability measures the ability to perform tasks as expected: the right product, in the right quantity and condition, with the right documentation, at the right time and place. Perfect order fulfillment captures exactly this by counting only orders that meet every one of those requirements. Responsiveness is measured by cycle times, agility by the ability to respond to change, and cost by the expense of operating the supply chain.",
      "topic": "Evaluate and Optimize the Supply Chain",
      "subtopic": "SCOR performance attributes",
      "difficulty": "medium",
      "source": "CSCP Learning System, Evaluate and Optimize the Supply Chain – SCOR model performance attributes and metrics (Reliability)"
    },
    {
      "stem": "A company currently has days inventory outstanding of 60 days, days sales outstanding of 40 days and days payables outstanding of 30 days. An improvement program will cut inventory by 15 days of supply and extend supplier payment terms by 10 days, but new customer credit terms will raise days sales outstanding by 5 days. What will the cash-to-cash cycle time be after the program?",
      "options": [
        "40 days",
        "50 days",
        "60 days",
        "45 days"
      ],
      "answer": "B",
      "explanation": "Cash-to-cash cycle time equals days inventory outstanding plus days sales outstanding minus days payables outstanding. After the program, that is 45 + 45 - 40 = 50 days, down from 60 + 40 - 30 = 70 days. Lower inventory and longer payables shorten the cycle, while slower customer payment lengthens it, so all three changes must be netted.",
      "topic": "Evaluate and Optimize the Supply Chain",
      "subtopic": "Cash-to-cash cycle time",
      "difficulty": "hard",
      "source": "CSCP Learning System, Evaluate and Optimize the Supply Chain – financial metrics (cash-to-cash cycle time)"
    }
  ]
}
```
