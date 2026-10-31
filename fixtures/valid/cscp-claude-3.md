```json
{
  "format": "domcq/1",
  "exam": "cscp",
  "set": "APICS Certified Supply Chain Professional (CSCP) practice – Core Concepts Mixed Set",
  "questions": [
    {
      "stem": "Over the last six periods, the running sum of forecast errors (RSFE), calculated as actual demand minus forecast, is +60 units, and the mean absolute deviation (MAD) is 15 units. What is the tracking signal, and what does it suggest?",
      "options": [
        "0.25, indicating the forecast is essentially unbiased",
        "4, indicating the forecast has tended to be too low",
        "4, indicating the forecast has tended to be too high",
        "45, indicating random error that needs no action"
      ],
      "answer": "B",
      "explanation": "The tracking signal is RSFE divided by MAD, so 60 / 15 = 4. Because error is defined as actual minus forecast, a positive running sum means actual demand has repeatedly exceeded the forecast, so the forecast is biased low. Planners compare the tracking signal with control limits (often around plus or minus 4) to decide when a forecast model needs review.",
      "topic": "Forecast and Manage Demand",
      "subtopic": "Forecast error and bias",
      "difficulty": "medium",
      "source": "CSCP Learning System – Forecast and Manage Demand: measuring forecast error (MAD, RSFE, tracking signal)"
    },
    {
      "stem": "Which forecasting technique is qualitative, using a panel of experts who respond anonymously in successive rounds, with summarized feedback between rounds, until their views converge?",
      "options": [
        "Exponential smoothing",
        "Weighted moving average",
        "Linear regression",
        "Delphi method"
      ],
      "answer": "D",
      "explanation": "The Delphi method is a judgmental (qualitative) technique that gathers expert opinion anonymously over several rounds, sharing summarized results each time so experts can revise their views without group pressure. The other three are quantitative methods that work from historical data: two are time-series techniques and regression is an associative (causal) technique.",
      "topic": "Forecast and Manage Demand",
      "subtopic": "Qualitative forecasting methods",
      "difficulty": "easy",
      "source": "CSCP Learning System – Forecast and Manage Demand: qualitative versus quantitative forecasting techniques"
    },
    {
      "stem": "What is the main characteristic that distinguishes an enterprise resource planning (ERP) system from a collection of separate functional software applications?",
      "options": [
        "A shared database that integrates transactions across functions in real time",
        "A standalone tool that optimizes delivery routes for a company's own fleet",
        "A separate application for each department linked by nightly file transfers",
        "A web portal that lets customers track the status of their own shipments"
      ],
      "answer": "A",
      "explanation": "ERP is defined by integration: finance, sales, purchasing, production and inventory all record transactions in one common database, so a single event updates every affected function. This removes duplicate data entry and gives a single version of the truth for planning. Routing tools and customer portals are narrower applications that may connect to ERP but are not ERP themselves.",
      "topic": "Manage the Global Supply Chain Network and Information",
      "subtopic": "Enterprise resource planning",
      "difficulty": "easy",
      "source": "CSCP Learning System – Manage the Global Supply Chain Network and Information: ERP and supply chain information systems"
    },
    {
      "stem": "A distributor serving the same national customer base plans to expand its network from 2 distribution centers to 6, placing the new sites closer to major customer clusters. All else being equal, which outcome is most likely?",
      "options": [
        "Total inventory falls, while outbound transportation cost to customers rises",
        "Total inventory and outbound transportation cost to customers both fall",
        "Total inventory rises, while outbound transportation cost to customers falls",
        "Total inventory and outbound transportation cost to customers both rise"
      ],
      "answer": "C",
      "explanation": "Spreading stock across more locations loses the risk-pooling effect, so each site must hold its own safety stock and total inventory rises (roughly with the square root of the number of locations). At the same time, facilities sit closer to customers, so outbound delivery distances and costs fall and response time improves. Network design is about balancing these opposing cost curves, along with facility and inbound costs, which also tend to rise.",
      "topic": "Manage the Global Supply Chain Network and Information",
      "subtopic": "Network design trade-offs",
      "difficulty": "hard",
      "source": "CSCP Learning System – Manage the Global Supply Chain Network and Information: network design and facility location trade-offs"
    },
    {
      "stem": "A manufacturer is deciding whether to keep an activity in-house or outsource it. Which factor most strongly supports keeping the activity in-house?",
      "options": [
        "The activity is a core competency that sets the firm apart from competitors",
        "An outside supplier can perform the activity at a lower unit cost",
        "The activity requires capital investment the firm would rather avoid",
        "Several qualified suppliers already offer the item at stable prices"
      ],
      "answer": "A",
      "explanation": "In make-versus-buy analysis, activities that create competitive advantage are usually kept in-house so the firm protects its know-how and control. Lower supplier cost, avoided capital investment and a healthy supply market are all reasons that favor buying. Cost matters, but strategic importance is the main reason to retain an activity even when outsourcing looks cheaper.",
      "topic": "Source Products and Services",
      "subtopic": "Make-versus-buy",
      "difficulty": "easy",
      "source": "CSCP Learning System – Source Products and Services: make-versus-buy and outsourcing decisions"
    },
    {
      "stem": "Supplier A quotes $10.00 per unit, with freight of $1.00 per unit, and its parts need incoming inspection and rework costing $0.50 per unit. Supplier B quotes $10.50 per unit, with freight of $0.40 per unit, and its certified parts need no inspection. Based on total cost of ownership per unit, which supplier is cheaper and at what cost?",
      "options": [
        "Supplier A, at $10.00 per unit",
        "Supplier B, at $10.90 per unit",
        "Supplier A, at $11.50 per unit",
        "Supplier B, at $10.50 per unit"
      ],
      "answer": "B",
      "explanation": "Total cost of ownership adds every cost of acquiring and using the item, not just the price. Supplier A totals $10.00 + $1.00 + $0.50 = $11.50, while Supplier B totals $10.50 + $0.40 = $10.90. Supplier B has the higher quoted price but the lower total cost, which is exactly the kind of decision price-only comparisons get wrong.",
      "topic": "Source Products and Services",
      "subtopic": "Total cost of ownership",
      "difficulty": "medium",
      "source": "CSCP Learning System – Source Products and Services: total cost of ownership in supplier selection"
    },
    {
      "stem": "A purchasing team segments its spend by profit impact and supply risk. A custom-engineered component has a high financial impact on the business and only one or two capable suppliers worldwide. Which approach best fits this category?",
      "options": [
        "Use competitive bidding to leverage volume and drive down price",
        "Automate ordering to minimize transaction and administrative cost",
        "Hold extra buffer stock while searching for substitute materials",
        "Develop a long-term collaborative partnership with the supplier"
      ],
      "answer": "D",
      "explanation": "High profit impact combined with high supply risk places the item in the strategic quadrant of a Kraljic-style portfolio matrix. Strategic items call for close, long-term relationships, such as joint planning, shared development and performance agreements, because both parties depend on each other. Competitive bidding suits leverage items, automation suits noncritical items, and securing supply with buffers suits bottleneck items with low profit impact.",
      "topic": "Source Products and Services",
      "subtopic": "Supplier segmentation",
      "difficulty": "medium",
      "source": "CSCP Learning System – Source Products and Services: purchase portfolio segmentation (strategic, leverage, bottleneck, noncritical)"
    },
    {
      "stem": "An item has annual demand of 2,000 units, an ordering cost of $50 per order, and a carrying cost of $5 per unit per year. What is the economic order quantity (EOQ)?",
      "options": [
        "100 units",
        "141 units",
        "200 units",
        "400 units"
      ],
      "answer": "C",
      "explanation": "EOQ is the square root of (2 × annual demand × ordering cost) divided by the annual carrying cost per unit: √(2 × 2,000 × 50 / 5) = √40,000 = 200 units. At this quantity, annual ordering cost (10 orders × $50 = $500) equals annual carrying cost (100 average units × $5 = $500), which is where total cost is lowest.",
      "topic": "Manage Internal Operations and Inventory",
      "subtopic": "Lot sizing and EOQ",
      "difficulty": "medium",
      "source": "CSCP Learning System – Manage Internal Operations and Inventory: economic order quantity"
    },
    {
      "stem": "An item has average daily demand of 40 units and a replenishment lead time of 5 days. Safety stock is set at 60 units. Using a reorder point system, at what inventory level should a replenishment order be placed?",
      "options": [
        "200 units",
        "260 units",
        "140 units",
        "300 units"
      ],
      "answer": "B",
      "explanation": "The reorder point equals expected demand during the lead time plus safety stock: (40 × 5) + 60 = 260 units. Lead-time demand covers the average usage while waiting for the order, and safety stock protects against demand or lead time being worse than average. Ordering at 200 would leave no buffer against that variability.",
      "topic": "Manage Internal Operations and Inventory",
      "subtopic": "Reorder point and safety stock",
      "difficulty": "medium",
      "source": "CSCP Learning System – Manage Internal Operations and Inventory: order point systems and safety stock"
    },
    {
      "stem": "In an MRP record for one period, an item has a gross requirement of 500 units, projected on-hand inventory of 120 units at the start of the period, a scheduled receipt of 80 units due in that period, and a safety stock requirement of 50 units. What is the net requirement for the period?",
      "options": [
        "350 units",
        "300 units",
        "250 units",
        "450 units"
      ],
      "answer": "A",
      "explanation": "Net requirement equals gross requirement minus projected available (on hand plus scheduled receipts) plus the safety stock to be maintained: 500 − (120 + 80) + 50 = 350 units. Without safety stock the shortfall would be 300, but MRP plans enough to bring projected available back up to the safety stock level. Scheduled receipts count because they are open orders already due.",
      "topic": "Manage Internal Operations and Inventory",
      "subtopic": "Material requirements planning",
      "difficulty": "hard",
      "source": "CSCP Learning System – Manage Internal Operations and Inventory: MRP netting logic"
    },
    {
      "stem": "A company classifies its inventory items using ABC analysis based on annual dollar usage. Which statement correctly describes how the classes should be treated?",
      "options": [
        "C items drive most annual dollar usage and need the tightest control",
        "A items are the most numerous and should be reviewed least often",
        "B items have the highest unit cost and need the most cycle counts",
        "A items are few but drive most annual dollar usage and need tight control"
      ],
      "answer": "D",
      "explanation": "ABC analysis applies the Pareto principle: a small share of items (class A) typically accounts for the majority of annual dollar usage, so these items get the closest control, frequent review and accurate records. C items are the most numerous but represent little value and can be managed with simpler methods. Classification is based on annual usage multiplied by unit cost, not on unit cost alone.",
      "topic": "Manage Internal Operations and Inventory",
      "subtopic": "ABC classification",
      "difficulty": "medium",
      "source": "CSCP Learning System – Manage Internal Operations and Inventory: ABC inventory classification"
    },
    {
      "stem": "Under Incoterms 2020, which rule places the maximum obligation on the seller, including delivering to the named destination, clearing the goods for import and paying any import duties?",
      "options": [
        "EXW (Ex Works)",
        "FCA (Free Carrier)",
        "DDP (Delivered Duty Paid)",
        "FOB (Free On Board)"
      ],
      "answer": "C",
      "explanation": "DDP is the rule with the greatest seller responsibility: the seller bears cost and risk to the named place of destination and handles import clearance and duties. EXW is the opposite extreme, with minimum seller obligation, and FCA and FOB transfer risk to the buyer early in the journey in the origin country. Knowing where risk and cost transfer under each rule is essential for logistics costing and contracts.",
      "topic": "Manage Supply Chain Logistics",
      "subtopic": "Incoterms",
      "difficulty": "easy",
      "source": "ICC Incoterms 2020 – DDP rule; CSCP Learning System – Manage Supply Chain Logistics: international trade terms"
    },
    {
      "stem": "A retailer's distribution center receives inbound shipments from many suppliers, sorts the goods by store, and loads them onto outbound trucks within hours, with little or no time in storage. What is this practice called?",
      "options": [
        "Cross-docking",
        "Postponement",
        "Consignment inventory",
        "Vendor-managed inventory"
      ],
      "answer": "A",
      "explanation": "Cross-docking moves product directly from receiving to shipping docks, consolidating supplier shipments into store-bound loads without putting them away into storage. It reduces handling, storage cost and cycle time, but it depends on tight coordination of inbound and outbound schedules and accurate advance shipping information. Postponement delays final configuration, while consignment and VMI concern ownership and replenishment responsibility rather than material flow through the dock.",
      "topic": "Manage Supply Chain Logistics",
      "subtopic": "Warehousing and cross-docking",
      "difficulty": "medium",
      "source": "CSCP Learning System – Manage Supply Chain Logistics: warehouse operations and cross-docking"
    },
    {
      "stem": "Which practice has trading partners share information to jointly create a single sales forecast and coordinated replenishment plans, then work together to resolve exceptions?",
      "options": [
        "Vendor-managed inventory (VMI)",
        "Electronic data interchange (EDI)",
        "Collaborative planning, forecasting and replenishment (CPFR)",
        "Quick response (QR)"
      ],
      "answer": "C",
      "explanation": "CPFR is a structured collaboration in which buyer and seller agree on joint business plans, build a shared forecast, plan replenishment together and handle exceptions jointly. Its aim is to reduce forecast error and the bullwhip effect by aligning partners on one set of numbers. EDI is only a data-transmission method, and VMI shifts replenishment decisions to the supplier without requiring a jointly built forecast.",
      "topic": "Manage Customer and Supplier Relationships",
      "subtopic": "Collaboration practices",
      "difficulty": "easy",
      "source": "CSCP Learning System – Manage Customer and Supplier Relationships: collaborative planning, forecasting and replenishment"
    },
    {
      "stem": "A retailer sets up a vendor-managed inventory (VMI) program with a key supplier. Under VMI, who typically decides when and how much to replenish, and on what basis?",
      "options": [
        "The customer's buyer, using supplier-provided price lists",
        "The supplier, using the customer's inventory and demand data",
        "A third-party carrier, using its own transport schedules",
        "The customer's planner, using a supplier-approved order size"
      ],
      "answer": "B",
      "explanation": "In VMI the supplier takes responsibility for maintaining the customer's inventory within agreed limits, deciding replenishment timing and quantity from the customer's shared stock levels and sales or usage data. This gives the supplier better visibility of real demand, which can smooth its production and reduce stockouts. The customer usually still owns the stock unless VMI is combined with consignment.",
      "topic": "Manage Customer and Supplier Relationships",
      "subtopic": "Vendor-managed inventory",
      "difficulty": "medium",
      "source": "CSCP Learning System – Manage Customer and Supplier Relationships: vendor-managed inventory"
    },
    {
      "stem": "An activity-based cost-to-serve analysis shows that one of a company's highest-revenue customers is unprofitable because it places many small rush orders that require special packaging. Which response best reflects sound customer relationship management?",
      "options": [
        "End the relationship immediately to protect overall margin",
        "Raise the service level further to grow the customer's volume",
        "Keep current terms, since revenue is the best measure of value",
        "Redesign service terms so cost-to-serve fits the account's value"
      ],
      "answer": "D",
      "explanation": "Cost-to-serve analysis reveals that revenue alone can hide unprofitable accounts, because order size, frequency and special handling drive cost. The usual first step is to adjust the service package or pricing, for example through order minimums, scheduled deliveries or charges for special packaging, so the relationship becomes profitable. Dropping the customer is a last resort, and adding more service would only deepen the loss.",
      "topic": "Manage Customer and Supplier Relationships",
      "subtopic": "Customer profitability and segmentation",
      "difficulty": "hard",
      "source": "CSCP Learning System – Manage Customer and Supplier Relationships: customer segmentation and cost-to-serve"
    },
    {
      "stem": "A company buys contingent business interruption insurance to cover lost profits if a key supplier's plant is shut down. Which type of risk response is this?",
      "options": [
        "Risk avoidance",
        "Risk acceptance",
        "Risk transfer",
        "Risk mitigation"
      ],
      "answer": "C",
      "explanation": "Insurance shifts the financial consequence of a risk to another party in exchange for a premium, which is risk transfer. It does not lower the chance of the supplier shutdown (mitigation), remove the exposure entirely (avoidance) or simply absorb the loss (acceptance). Transfer is often combined with mitigation, such as qualifying a second supplier, because insurance does not restore the lost supply.",
      "topic": "Manage Supply Chain Risk",
      "subtopic": "Risk response strategies",
      "difficulty": "easy",
      "source": "CSCP Learning System – Manage Supply Chain Risk: risk response options (avoid, transfer, mitigate, accept)"
    },
    {
      "stem": "A risk team rates four risks: a supplier plant fire (5% probability, $2,000,000 impact), a port strike (10% probability, $500,000 impact), a quality recall (40% probability, $100,000 impact) and a currency swing (25% probability, $150,000 impact). Using expected value (probability × impact), which risk has the highest exposure?",
      "options": [
        "Supplier plant fire",
        "Port strike",
        "Quality recall",
        "Currency swing"
      ],
      "answer": "A",
      "explanation": "Expected value multiplies probability by impact: the fire is 0.05 × $2,000,000 = $100,000, the strike $50,000, the recall $40,000 and the currency swing $37,500. The plant fire is least likely yet carries the largest exposure, showing why risks must be ranked on both dimensions rather than on likelihood alone. This quantification helps prioritize where to spend on mitigation.",
      "topic": "Manage Supply Chain Risk",
      "subtopic": "Risk assessment and quantification",
      "difficulty": "medium",
      "source": "CSCP Learning System – Manage Supply Chain Risk: risk assessment, probability and impact"
    },
    {
      "stem": "A company has days of inventory outstanding of 45 days, days sales outstanding of 30 days, and days payables outstanding of 40 days. What is its cash-to-cash cycle time?",
      "options": [
        "115 days",
        "55 days",
        "25 days",
        "35 days"
      ],
      "answer": "D",
      "explanation": "Cash-to-cash cycle time equals days of inventory plus days sales outstanding minus days payables outstanding: 45 + 30 − 40 = 35 days. It measures how long cash is tied up between paying suppliers and collecting from customers. A firm can shorten it by cutting inventory, collecting receivables faster or negotiating longer payment terms.",
      "topic": "Evaluate and Optimize the Supply Chain",
      "subtopic": "Financial performance metrics",
      "difficulty": "medium",
      "source": "CSCP Learning System – Evaluate and Optimize the Supply Chain: cash-to-cash cycle time"
    },
    {
      "stem": "A distributor measures its orders against four criteria: 95% are delivered on time, 98% are complete, 99% arrive undamaged, and 97% have accurate documentation. Assuming the criteria are independent, what is its approximate perfect order fulfillment rate?",
      "options": [
        "97.3%",
        "89.4%",
        "95.0%",
        "92.2%"
      ],
      "answer": "B",
      "explanation": "A perfect order must meet every criterion at once, so the component rates are multiplied: 0.95 × 0.98 × 0.99 × 0.97 ≈ 0.894, or about 89.4%. Averaging the rates (97.3%) or taking the weakest one (95.0%) overstates performance. The calculation shows how several individually good measures combine into a noticeably lower end-to-end result for the customer.",
      "topic": "Evaluate and Optimize the Supply Chain",
      "subtopic": "Customer-facing performance metrics",
      "difficulty": "hard",
      "source": "CSCP Learning System – Evaluate and Optimize the Supply Chain: perfect order fulfillment metric"
    }
  ]
}
```
