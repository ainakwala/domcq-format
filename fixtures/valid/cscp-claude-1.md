```json
{
  "format": "domcq/1",
  "exam": "cscp",
  "set": "APICS Certified Supply Chain Professional (CSCP) practice – Mixed topics set 1",
  "questions": [
    {
      "stem": "A demand planner wants a measure that shows whether a forecast is consistently too high or too low over time, rather than only how large the errors are. Which measure should the planner monitor?",
      "options": [
        "Mean absolute deviation",
        "Tracking signal",
        "Standard deviation of demand",
        "Coefficient of determination"
      ],
      "answer": "B",
      "explanation": "The tracking signal is the running sum of forecast errors divided by the mean absolute deviation. Because positive and negative errors cancel in the running sum, a value that drifts steadily away from zero (beyond chosen control limits) shows bias. MAD on its own uses absolute values, so it measures the size of errors but cannot show their direction.",
      "topic": "Forecast and Manage Demand",
      "subtopic": "Forecast error and bias",
      "difficulty": "easy",
      "source": "CSCP syllabus, Forecast and Manage Demand: measuring forecast accuracy (MAD, bias, tracking signal)"
    },
    {
      "stem": "A company uses simple exponential smoothing with a smoothing constant (alpha) of 0.2. Last period's forecast was 500 units and actual demand was 540 units. What is the forecast for the next period?",
      "options": [
        "500 units",
        "532 units",
        "540 units",
        "508 units"
      ],
      "answer": "D",
      "explanation": "New forecast = old forecast + alpha x (actual - old forecast) = 500 + 0.2 x (540 - 500) = 500 + 8 = 508 units. A small alpha moves the forecast only a small way toward the latest actual, which smooths out random variation but makes the forecast slower to respond to real changes in demand.",
      "topic": "Forecast and Manage Demand",
      "subtopic": "Quantitative forecasting methods",
      "difficulty": "medium",
      "source": "CSCP syllabus, Forecast and Manage Demand: time-series forecasting, exponential smoothing"
    },
    {
      "stem": "A manufacturer is considering consolidating its network from five regional distribution centers to two larger ones while serving the same customers. Which cost is most likely to increase as a result?",
      "options": [
        "Outbound transportation cost to customers",
        "Total safety stock held across the network",
        "Fixed facility operating costs",
        "Inbound transportation cost from suppliers"
      ],
      "answer": "A",
      "explanation": "With fewer facilities, the average distance from a distribution center to customers grows, so outbound delivery cost usually rises. Safety stock falls because demand variability is pooled across fewer locations, fixed facility costs fall because fewer sites are run, and inbound cost often falls because suppliers ship larger loads to fewer points. Network design is about balancing these opposing cost curves.",
      "topic": "Manage the Global Supply Chain Network and Information",
      "subtopic": "Network design trade-offs",
      "difficulty": "medium",
      "source": "CSCP syllabus, Manage the Global Supply Chain Network: facility location and network design trade-offs"
    },
    {
      "stem": "Which technology lets trading partners exchange standardized business documents, such as purchase orders, advance ship notices and invoices, directly between their computer systems without manual re-entry?",
      "options": [
        "Radio frequency identification (RFID)",
        "Warehouse management system (WMS)",
        "Electronic data interchange (EDI)",
        "Advanced planning and scheduling (APS)"
      ],
      "answer": "C",
      "explanation": "EDI is the computer-to-computer exchange of business documents in agreed standard formats, such as ANSI X12 or UN/EDIFACT. It cuts transcription errors and processing time between companies. RFID identifies and tracks physical items, while a WMS and APS are internal systems for warehouse execution and planning.",
      "topic": "Manage the Global Supply Chain Network and Information",
      "subtopic": "Supply chain information technology",
      "difficulty": "easy",
      "source": "CSCP syllabus, Manage the Global Supply Chain Network and Information: information systems and data exchange (EDI)"
    },
    {
      "stem": "A buyer is comparing suppliers using a method that adds the purchase price to the costs of ordering, transportation, inspection, quality failures, maintenance and end-of-life disposal over the item's life. What is this method called?",
      "options": [
        "Total cost of ownership",
        "Landed cost",
        "Target costing",
        "Standard costing"
      ],
      "answer": "A",
      "explanation": "Total cost of ownership counts every cost of acquiring, using and disposing of an item, not only the price on the invoice. A supplier with a low price can lose under TCO if poor quality or high maintenance adds cost later. Landed cost is narrower: it covers price plus freight, duties and handling up to the point of receipt.",
      "topic": "Source Products and Services",
      "subtopic": "Supplier evaluation and selection",
      "difficulty": "easy",
      "source": "CSCP syllabus, Source Products and Services: total cost of ownership in supplier selection"
    },
    {
      "stem": "In the Kraljic purchasing portfolio matrix, how is a purchased item with low profit impact but high supply risk classified?",
      "options": [
        "Leverage item",
        "Strategic item",
        "Bottleneck item",
        "Noncritical item"
      ],
      "answer": "C",
      "explanation": "The Kraljic matrix classifies items by profit impact and supply risk. Bottleneck items cost little but are hard to obtain, often because there are few suppliers. The usual strategy is to secure supply, for example by holding buffer stock, signing longer-term agreements or developing alternatives, rather than pushing hard on price.",
      "topic": "Source Products and Services",
      "subtopic": "Category and portfolio analysis",
      "difficulty": "medium",
      "source": "CSCP syllabus, Source Products and Services: sourcing strategy and the Kraljic portfolio matrix"
    },
    {
      "stem": "A buyer is negotiating the price of a new assembly. The supplier's first unit took 100 labor hours. Each time cumulative output doubles, the time for the doubled unit falls to 80% of the time for the earlier unit. How many labor hours should the fourth unit take?",
      "options": [
        "80 hours",
        "64 hours",
        "51.2 hours",
        "60 hours"
      ],
      "answer": "B",
      "explanation": "On an 80% learning curve, each doubling of cumulative output multiplies unit time by 0.8: unit 1 takes 100 hours, unit 2 takes 80 hours and unit 4 takes 64 hours (51.2 hours is unit 8). Buyers use learning curves in cost analysis so that negotiated prices reflect the efficiency gains a supplier makes as volume builds.",
      "topic": "Source Products and Services",
      "subtopic": "Cost and price analysis",
      "difficulty": "hard",
      "source": "CSCP syllabus, Source Products and Services: cost analysis and negotiation, learning curve"
    },
    {
      "stem": "An item has annual demand of 2,000 units, an ordering cost of $50 per order and a holding cost of $5 per unit per year. What is the economic order quantity (EOQ)?",
      "options": [
        "100 units",
        "400 units",
        "141 units",
        "200 units"
      ],
      "answer": "D",
      "explanation": "EOQ = square root of (2 x annual demand x ordering cost / holding cost per unit per year) = square root of (2 x 2,000 x 50 / 5) = square root of 40,000 = 200 units. At the EOQ, annual ordering cost equals annual holding cost, which minimizes the total of the two.",
      "topic": "Manage Internal Operations and Inventory",
      "subtopic": "Lot sizing",
      "difficulty": "medium",
      "source": "CSCP syllabus, Manage Internal Operations and Inventory: order quantities and economic order quantity"
    },
    {
      "stem": "In ABC inventory classification, which description best fits A items?",
      "options": [
        "The largest number of items with the lowest annual dollar usage",
        "Items with the highest unit cost regardless of how much is used",
        "A small percentage of items that account for a large share of annual dollar usage",
        "Items with the most stable and predictable demand patterns"
      ],
      "answer": "C",
      "explanation": "ABC classification follows the Pareto principle and ranks items by annual dollar usage (unit cost x annual usage). A items are typically about 10-20% of items but make up roughly 70-80% of dollar usage, so they get the tightest control, the most frequent counts and the closest review. Unit cost alone does not decide the class.",
      "topic": "Manage Internal Operations and Inventory",
      "subtopic": "Inventory classification",
      "difficulty": "easy",
      "source": "CSCP syllabus, Manage Internal Operations and Inventory: ABC classification and inventory control"
    },
    {
      "stem": "In an MRP record, a component has a gross requirement of 500 units in a period. Projected on-hand inventory at the start of that period is 120 units, a scheduled receipt of 80 units is due in the period, and the safety stock policy is 50 units. What is the net requirement for the period?",
      "options": [
        "350 units",
        "300 units",
        "250 units",
        "380 units"
      ],
      "answer": "A",
      "explanation": "Net requirement = gross requirement - (projected on hand + scheduled receipts) + safety stock = 500 - (120 + 80) + 50 = 350 units. Safety stock is added because MRP treats it as inventory that must stay on hand, not as stock available to meet the gross requirement.",
      "topic": "Manage Internal Operations and Inventory",
      "subtopic": "Material requirements planning",
      "difficulty": "medium",
      "source": "CSCP syllabus, Manage Internal Operations and Inventory: MRP logic, gross-to-net calculation"
    },
    {
      "stem": "Daily demand for an item has a standard deviation of 20 units. The replenishment lead time is a constant 9 days, and the company targets a service level with a safety factor (z) of 1.65. Assuming demand is normally distributed and independent from day to day, how much safety stock is needed?",
      "options": [
        "297 units",
        "33 units",
        "180 units",
        "99 units"
      ],
      "answer": "D",
      "explanation": "With a constant lead time, safety stock = z x standard deviation of daily demand x square root of lead time in days = 1.65 x 20 x 3 = 99 units. Demand variability over the lead time grows with the square root of time, not linearly, because independent day-to-day variations partly offset each other. Multiplying by the full 9 days overstates the buffer.",
      "topic": "Manage Internal Operations and Inventory",
      "subtopic": "Safety stock",
      "difficulty": "hard",
      "source": "CSCP syllabus, Manage Internal Operations and Inventory: safety stock and service levels"
    },
    {
      "stem": "An exporter sells goods to a buyer in the Netherlands under the Incoterms 2020 rule CIF Rotterdam, with the goods shipped by sea. At what point does the risk of loss or damage pass from the seller to the buyer?",
      "options": [
        "When the goods are delivered to the buyer's premises",
        "When the goods are placed on board the vessel at the port of shipment",
        "When the vessel arrives at the port of Rotterdam",
        "When the goods are unloaded at the port of Rotterdam"
      ],
      "answer": "B",
      "explanation": "CIF is a 'two critical points' rule. Risk passes to the buyer once the goods are on board the vessel at the port of shipment, but the seller still pays freight and minimum cargo insurance to the named destination port. Separating where risk passes from where the seller's costs end is the key feature of the C rules.",
      "topic": "Manage Supply Chain Logistics",
      "subtopic": "Incoterms",
      "difficulty": "medium",
      "source": "CSCP syllabus, Manage Supply Chain Logistics: Incoterms 2020 rules (CIF)"
    },
    {
      "stem": "Which warehousing practice moves inbound goods directly from receiving to outbound shipping docks with little or no time in storage?",
      "options": [
        "Cross-docking",
        "Postponement",
        "Slotting",
        "Wave picking"
      ],
      "answer": "A",
      "explanation": "Cross-docking transfers incoming shipments, often after sorting or mixing, straight to outbound vehicles, so goods skip putaway and storage. This cuts handling and inventory holding costs, but it depends on tightly coordinated inbound and outbound schedules and accurate advance shipment information.",
      "topic": "Manage Supply Chain Logistics",
      "subtopic": "Warehouse operations",
      "difficulty": "easy",
      "source": "CSCP syllabus, Manage Supply Chain Logistics: warehousing and distribution, cross-docking"
    },
    {
      "stem": "Which type of system is designed mainly to manage a company's interactions with its customers, including sales activity, marketing campaigns and service history?",
      "options": [
        "Supplier relationship management (SRM)",
        "Manufacturing execution system (MES)",
        "Transportation management system (TMS)",
        "Customer relationship management (CRM)"
      ],
      "answer": "D",
      "explanation": "CRM systems bring together customer data from sales, marketing and service so the company can segment customers, understand their needs and value, and manage relationships consistently. SRM does the same for suppliers, while MES and TMS support shop-floor execution and freight management.",
      "topic": "Manage Customer and Supplier Relationships",
      "subtopic": "Customer relationship management",
      "difficulty": "easy",
      "source": "CSCP syllabus, Manage Customer and Supplier Relationships: customer relationship management"
    },
    {
      "stem": "A retailer and its main supplier agree to share point-of-sale data, build one joint sales forecast, agree on order plans and work together to resolve exceptions when actual results differ from the plan. Which practice does this describe?",
      "options": [
        "Vendor-managed inventory",
        "Consignment inventory",
        "Collaborative planning, forecasting and replenishment",
        "Quick response"
      ],
      "answer": "C",
      "explanation": "CPFR is a structured process in which trading partners jointly plan, build a shared forecast and handle exceptions together. The joint forecast and exception management set it apart from vendor-managed inventory, where the supplier takes over replenishment decisions, and from consignment, which only changes who owns the stock until it is used.",
      "topic": "Manage Customer and Supplier Relationships",
      "subtopic": "Collaboration",
      "difficulty": "medium",
      "source": "CSCP syllabus, Manage Customer and Supplier Relationships: collaborative relationships and CPFR"
    },
    {
      "stem": "In the Kano model of customer requirements, what is a product feature called when customers simply expect it, so its presence does not raise satisfaction but its absence causes strong dissatisfaction?",
      "options": [
        "Delighter (attractive) attribute",
        "Basic (must-be) attribute",
        "Performance (one-dimensional) attribute",
        "Indifferent attribute"
      ],
      "answer": "B",
      "explanation": "Basic or must-be attributes are taken for granted: meeting them only avoids dissatisfaction. Performance attributes raise satisfaction roughly in proportion to how well they are delivered, and delighters create satisfaction customers did not expect. Knowing which category a requirement falls into helps a supply chain decide where to invest in service.",
      "topic": "Manage Customer and Supplier Relationships",
      "subtopic": "Understanding customer requirements",
      "difficulty": "medium",
      "source": "CSCP syllabus, Manage Customer and Supplier Relationships: voice of the customer and the Kano model"
    },
    {
      "stem": "A shipper of high-value electronics buys cargo insurance and negotiates a contract clause that makes the carrier financially liable for losses in transit. Which risk response strategy does this represent?",
      "options": [
        "Risk avoidance",
        "Risk acceptance",
        "Risk mitigation",
        "Risk transfer"
      ],
      "answer": "D",
      "explanation": "Risk transfer shifts the financial consequences of a risk to another party, such as an insurer or a carrier under contract, without changing the chance that the event happens. Mitigation would lower the probability or impact, for example through better packaging or security. Avoidance would remove the exposure altogether, and acceptance would mean simply bearing the risk.",
      "topic": "Manage Supply Chain Risk",
      "subtopic": "Risk response strategies",
      "difficulty": "medium",
      "source": "CSCP syllabus, Manage Supply Chain Risk: risk response planning (avoid, mitigate, transfer, accept)"
    },
    {
      "stem": "A company estimates a 5% annual probability that a supplier disruption will cause a $2,000,000 loss. A mitigation program costing $60,000 per year would cut that probability to 1%, with the same loss if the disruption occurs. What is the net expected annual benefit of the program?",
      "options": [
        "$20,000",
        "$40,000",
        "$80,000",
        "$100,000"
      ],
      "answer": "A",
      "explanation": "Expected loss without the program is 0.05 x $2,000,000 = $100,000, and with it 0.01 x $2,000,000 = $20,000. The $80,000 drop in expected loss minus the $60,000 program cost gives a net expected benefit of $20,000. Expected-value analysis compares what a mitigation costs with how much it reduces probability-weighted loss.",
      "topic": "Manage Supply Chain Risk",
      "subtopic": "Risk assessment and quantification",
      "difficulty": "hard",
      "source": "CSCP syllabus, Manage Supply Chain Risk: risk assessment, probability and impact, expected value"
    },
    {
      "stem": "A company has inventory turnover of 8 times per year (use a 360-day year), days sales outstanding of 40 days and days payables outstanding of 55 days. What is its cash-to-cash cycle time?",
      "options": [
        "140 days",
        "60 days",
        "30 days",
        "-7 days"
      ],
      "answer": "C",
      "explanation": "Days of inventory = 360 / 8 = 45 days. Cash-to-cash cycle time = days of inventory + days sales outstanding - days payables outstanding = 45 + 40 - 55 = 30 days. The metric shows how long cash is tied up between paying suppliers and collecting from customers, so lowering it frees working capital.",
      "topic": "Evaluate and Optimize the Supply Chain",
      "subtopic": "Financial performance metrics",
      "difficulty": "hard",
      "source": "CSCP syllabus, Evaluate and Optimize the Supply Chain: supply chain financial metrics, cash-to-cash cycle time"
    },
    {
      "stem": "In the SCOR model, perfect order fulfillment is a top-level metric for which performance attribute?",
      "options": [
        "Responsiveness",
        "Reliability",
        "Agility",
        "Asset management efficiency"
      ],
      "answer": "B",
      "explanation": "Reliability is the ability to perform tasks as expected: the right product, in the right quantity and condition, with the right documentation, at the right time. Perfect order fulfillment measures the share of orders that meet every one of those conditions. Responsiveness is about speed (such as order fulfillment cycle time), and agility is about adapting to change.",
      "topic": "Evaluate and Optimize the Supply Chain",
      "subtopic": "SCOR performance attributes",
      "difficulty": "medium",
      "source": "CSCP syllabus, Evaluate and Optimize the Supply Chain: SCOR model performance attributes and metrics"
    }
  ]
}
```
