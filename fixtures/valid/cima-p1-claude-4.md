```json
{
  "format": "domcq/1",
  "exam": "cima-p1",
  "set": "P1: Management Accounting practice – Mixed syllabus set 1",
  "questions": [
    {
      "stem": "Which of the following is a reason for calculating a full (absorption) production cost per unit of a product?",
      "options": [
        "To value inventory for external financial reporting in line with IAS 2 Inventories",
        "To identify the relevant cost of accepting a one-off special order",
        "To calculate the contribution earned per unit of a scarce resource",
        "To measure the incremental cash flows of a make-or-buy decision"
      ],
      "answer": "A",
      "explanation": "IAS 2 requires the cost of inventory to include costs of conversion, which include a systematic allocation of fixed production overheads based on normal capacity. A full absorption cost per unit is therefore needed for inventory valuation in published financial statements. Short-term decisions, by contrast, rely on relevant, incremental or marginal costs rather than full costs.",
      "rationales": {
        "A": "Correct: IAS 2 requires inventory to include an allocation of fixed production overheads, so a full production cost is needed.",
        "B": "Incorrect: a special order decision uses relevant (incremental) costs, not absorbed fixed overheads.",
        "C": "Incorrect: contribution per limiting factor is based on marginal costs, so no fixed overhead absorption is needed.",
        "D": "Incorrect: make-or-buy decisions compare incremental cash flows, and absorbed fixed costs that do not change are irrelevant."
      },
      "topic": "Cost Accounting for Decision and Control",
      "subtopic": "Rationales for costing",
      "difficulty": "easy",
      "source": "CIMA P1 Section A: Rationales for costing – product costing for inventory valuation; IAS 2 Inventories (costs of conversion)"
    },
    {
      "stem": "A company's total production costs were $46,000 at an output of 4,000 units and $76,000 at an output of 9,000 units. Unit variable cost and total fixed cost do not change across this range. Using the high-low method, what is the estimated total production cost at an output of 7,000 units?",
      "options": [
        "$42,000",
        "$59,111",
        "$64,000",
        "$80,500"
      ],
      "answer": "C",
      "explanation": "The high-low method attributes the change in total cost between the highest and lowest activity levels to variable cost: ($76,000 - $46,000) / (9,000 - 4,000) = $6 per unit. Fixed cost is then $46,000 - (4,000 x $6) = $22,000. At 7,000 units, total cost is $22,000 + (7,000 x $6) = $64,000.",
      "rationales": {
        "A": "Incorrect: $42,000 is only the variable cost of 7,000 units at $6 and omits fixed costs of $22,000.",
        "B": "Incorrect: this scales the 9,000-unit total cost pro rata, wrongly treating fixed costs as variable.",
        "C": "Correct: variable cost is $6 per unit and fixed cost $22,000, giving $22,000 + $42,000 = $64,000.",
        "D": "Incorrect: this scales the 4,000-unit total cost pro rata, wrongly treating all costs as variable."
      },
      "topic": "Cost Accounting for Decision and Control",
      "subtopic": "Costing concepts",
      "difficulty": "easy",
      "source": "CIMA P1 Section A: Costing concepts – cost behaviour and the high-low method"
    },
    {
      "stem": "A company absorbs fixed production overheads at $8 per unit, and the same rate applied in both the previous and the current period. In the current period, opening inventory was 2,000 units and closing inventory was 3,500 units. Profit under marginal costing was $120,000. What was the profit under absorption costing?",
      "options": [
        "$108,000",
        "$132,000",
        "$136,000",
        "$148,000"
      ],
      "answer": "B",
      "explanation": "The difference between the two profits equals the change in inventory multiplied by the fixed overhead absorption rate per unit. Inventory rose by 1,500 units, so absorption costing carries forward 1,500 x $8 = $12,000 of fixed overhead in closing inventory that marginal costing charges in full as a period cost. Absorption costing profit is therefore $120,000 + $12,000 = $132,000.",
      "rationales": {
        "A": "Incorrect: this deducts the $12,000 adjustment, but rising inventory makes absorption profit higher, not lower.",
        "B": "Correct: inventory rose 1,500 units, so absorption profit is $120,000 + (1,500 x $8) = $132,000.",
        "C": "Incorrect: this adjusts for opening inventory only (2,000 x $8) instead of the change in inventory.",
        "D": "Incorrect: this adjusts for closing inventory only (3,500 x $8) and ignores fixed overhead in opening inventory."
      },
      "topic": "Cost Accounting for Decision and Control",
      "subtopic": "Costing methods",
      "difficulty": "medium",
      "source": "CIMA P1 Section A: Costing methods – reconciling marginal costing and absorption costing profits"
    },
    {
      "stem": "A company absorbs production overheads on a machine-hour basis. Budgeted production overheads were $360,000 and budgeted machine hours were 24,000. Actual production overheads were $372,000 and actual machine hours were 25,500. What was the under- or over-absorption of production overheads for the period?",
      "options": [
        "$12,000 under-absorbed",
        "$10,500 under-absorbed",
        "$22,500 over-absorbed",
        "$10,500 over-absorbed"
      ],
      "answer": "D",
      "explanation": "The predetermined absorption rate is $360,000 / 24,000 = $15 per machine hour. Overheads absorbed are 25,500 x $15 = $382,500, which exceeds actual overheads of $372,000 by $10,500. When absorbed overheads exceed actual overheads, the difference is over-absorbed and is credited to the income statement.",
      "rationales": {
        "A": "Incorrect: this compares actual with budgeted overheads, which is an expenditure difference, not under- or over-absorption.",
        "B": "Incorrect: the amount is right but the direction is wrong, because absorbed overheads exceed actual overheads.",
        "C": "Incorrect: this compares absorbed overheads with budgeted overheads instead of with actual overheads.",
        "D": "Correct: absorbed $382,500 (25,500 x $15) exceeds actual $372,000, so $10,500 is over-absorbed."
      },
      "topic": "Cost Accounting for Decision and Control",
      "subtopic": "Costing methods",
      "difficulty": "medium",
      "source": "CIMA P1 Section A: Costing methods – absorption costing, under- and over-absorption of overheads"
    },
    {
      "stem": "A company makes two products, X and Y. Each year it produces 20,000 units of X in batches of 500 units and 5,000 units of Y in batches of 100 units. Each batch requires one set-up. Annual overheads are set-up costs of $90,000, driven by the number of set-ups, and materials handling costs of $60,000, driven by the number of material movements. X requires 100 material movements a year and Y requires 200. Using activity-based costing, what is the overhead cost per unit of Y?",
      "options": [
        "$3.00",
        "$6.00",
        "$18.00",
        "$10.00"
      ],
      "answer": "C",
      "explanation": "X needs 40 set-ups (20,000 / 500) and Y needs 50 (5,000 / 100), so the cost per set-up is $90,000 / 90 = $1,000 and Y is charged $50,000. The cost per movement is $60,000 / 300 = $200, so Y is charged 200 x $200 = $40,000. Y's total overhead of $90,000 spread over 5,000 units is $18.00 per unit, showing how ABC loads costs onto small-batch, complex products.",
      "rationales": {
        "A": "Incorrect: $3.00 is the ABC overhead per unit of X ($60,000 / 20,000), not of Y.",
        "B": "Incorrect: this spreads total overheads evenly over all 25,000 units, ignoring the activity drivers.",
        "C": "Correct: Y bears $50,000 of set-up cost and $40,000 of handling cost, so $90,000 / 5,000 = $18.00.",
        "D": "Incorrect: $10.00 is Y's set-up cost per unit only and omits its materials handling cost of $8.00."
      },
      "topic": "Cost Accounting for Decision and Control",
      "subtopic": "Costing methods",
      "difficulty": "hard",
      "source": "CIMA P1 Section A: Costing methods – activity-based costing, cost pools and cost drivers"
    },
    {
      "stem": "A company manufactures dining tables. Which of the following are direct costs of a dining table? Choose TWO.",
      "options": [
        "Timber used to make the table top",
        "Salary of the factory production supervisor",
        "Wages of assemblers paid a fixed amount per table assembled",
        "Depreciation of the factory's cutting machines"
      ],
      "answer": "AC",
      "explanation": "A direct cost is one that can be traced specifically and economically to a single cost unit. The timber in the table top and the assembly wages paid per table can both be identified with each individual table. Supervision and machine depreciation are incurred for production as a whole, so they are indirect costs (production overheads) that must be absorbed into units.",
      "rationales": {
        "A": "Correct: the timber can be measured and traced to each table, so it is direct material.",
        "B": "Incorrect: supervision covers the whole factory and cannot be traced to one table, so it is an indirect cost.",
        "C": "Correct: wages paid per table assembled are traceable to each table, so they are direct labour.",
        "D": "Incorrect: machine depreciation relates to all output and is a production overhead, not a direct cost."
      },
      "topic": "Cost Accounting for Decision and Control",
      "subtopic": "Costing concepts",
      "difficulty": "easy",
      "source": "CIMA P1 Section A: Costing concepts – classification of costs as direct or indirect"
    },
    {
      "stem": "Which of the following are recognised purposes of budgeting? Choose THREE.",
      "options": [
        "Guaranteeing that the organisation achieves its planned profit",
        "Coordinating the activities of different departments",
        "Communicating plans and targets to managers",
        "Providing a basis for evaluating managers' performance"
      ],
      "answer": "BCD",
      "explanation": "Budgets serve several purposes, including planning, coordination, communication, motivation, control, authorisation and performance evaluation. Coordinating departments, communicating targets and providing a yardstick for evaluating managers are all standard purposes. A budget is a plan expressed in financial terms, so it cannot guarantee any outcome; actual results depend on events and management action.",
      "rationales": {
        "A": "Incorrect: a budget is a plan and a control benchmark; it cannot guarantee that the planned profit is achieved.",
        "B": "Correct: budgeting brings departmental plans together so that activities such as sales and production are consistent.",
        "C": "Correct: the budget communicates the organisation's plans and each manager's targets and responsibilities.",
        "D": "Correct: comparing actual results with the budget provides a basis for evaluating managers' performance."
      },
      "topic": "Budgeting and Budgetary Control",
      "subtopic": "Rationale for budgets",
      "difficulty": "easy",
      "source": "CIMA P1 Section B: Rationale for budgets – purposes of budgeting"
    },
    {
      "stem": "A company budgets to sell 12,000 units next quarter. Opening inventory of finished goods will be 1,500 units and closing inventory is planned at 2,000 units. Each unit requires 3 kg of raw material. Opening raw material inventory will be 4,000 kg and closing raw material inventory is planned at 3,000 kg. How many kg of raw material should be purchased in the quarter?",
      "options": [
        "36,500 kg",
        "35,000 kg",
        "37,500 kg",
        "38,500 kg"
      ],
      "answer": "A",
      "explanation": "The production budget comes first: sales of 12,000 units plus closing inventory of 2,000 less opening inventory of 1,500 gives production of 12,500 units. Material usage is 12,500 x 3 kg = 37,500 kg. Purchases equal usage plus closing material inventory less opening material inventory: 37,500 + 3,000 - 4,000 = 36,500 kg.",
      "rationales": {
        "A": "Correct: production of 12,500 units needs 37,500 kg, and the 1,000 kg fall in material inventory reduces purchases to 36,500 kg.",
        "B": "Incorrect: this bases usage on sales of 12,000 units and ignores the planned increase in finished goods inventory.",
        "C": "Incorrect: 37,500 kg is material usage; it ignores the planned 1,000 kg reduction in raw material inventory.",
        "D": "Incorrect: this adds the 1,000 kg change in material inventory instead of deducting it."
      },
      "topic": "Budgeting and Budgetary Control",
      "subtopic": "Budgeting concepts",
      "difficulty": "medium",
      "source": "CIMA P1 Section B: Budgeting concepts – functional budgets (production and material purchases budgets)"
    },
    {
      "stem": "A company's budgeted sales are: January $60,000, February $80,000 and March $70,000. Of each month's sales, 20% are for cash and the rest are on credit. Of credit sales, 60% are received in the month after sale and 40% two months after sale. There are no bad debts. What are the budgeted cash receipts in March?",
      "options": [
        "$57,600",
        "$68,400",
        "$71,600",
        "$86,000"
      ],
      "answer": "C",
      "explanation": "March receipts come from three sources: March cash sales of 20% x $70,000 = $14,000; February credit sales collected one month later, 80% x $80,000 x 60% = $38,400; and January credit sales collected two months later, 80% x $60,000 x 40% = $19,200. The total is $71,600. A cash budget records cash when it is received, not when the sale is made.",
      "rationales": {
        "A": "Incorrect: this includes only the credit collections and omits March cash sales of $14,000.",
        "B": "Incorrect: this applies 40% to February and 60% to January, reversing the collection pattern.",
        "C": "Correct: $14,000 March cash sales + $38,400 from February + $19,200 from January = $71,600.",
        "D": "Incorrect: this applies the credit collection percentages to total sales rather than to the 80% sold on credit."
      },
      "topic": "Budgeting and Budgetary Control",
      "subtopic": "Budgeting concepts",
      "difficulty": "medium",
      "source": "CIMA P1 Section B: Budgeting concepts – cash budgets and receivables collection patterns"
    },
    {
      "stem": "A company's original budget for 10,000 units showed revenue of $500,000, variable costs of $300,000 and fixed costs of $120,000. Actual sales and production were 11,000 units. What is the budgeted profit in the flexed budget for the actual activity level?",
      "options": [
        "$80,000",
        "$100,000",
        "$88,000",
        "$130,000"
      ],
      "answer": "B",
      "explanation": "A flexed budget restates the budget for the actual activity level, flexing revenue and variable costs in proportion to volume while leaving fixed costs unchanged. At 11,000 units, revenue is $550,000 and variable costs are $330,000, giving contribution of $220,000; deducting fixed costs of $120,000 leaves $100,000. Comparing actual results with this figure gives meaningful like-for-like variances.",
      "rationales": {
        "A": "Incorrect: $80,000 is the original budget profit at 10,000 units and has not been flexed to 11,000 units.",
        "B": "Correct: revenue $550,000 less variable costs $330,000 less unchanged fixed costs $120,000 gives $100,000.",
        "C": "Incorrect: this also flexes fixed costs by 10% to $132,000, but fixed costs do not change with volume.",
        "D": "Incorrect: this flexes revenue but leaves variable costs at the original $300,000."
      },
      "topic": "Budgeting and Budgetary Control",
      "subtopic": "Budgetary control",
      "difficulty": "medium",
      "source": "CIMA P1 Section B: Budgetary control – flexed budgets"
    },
    {
      "stem": "A product's standard cost includes 4 kg of material at $5.00 per kg per unit. In March, 2,000 units were produced, using 8,400 kg of material that had been purchased in March for $43,680. There was no opening or closing inventory of material. Which of the following variances are correct? Choose TWO.",
      "options": [
        "Material usage variance $2,080 adverse",
        "Material price variance $1,680 adverse",
        "Material price variance $1,600 adverse",
        "Material usage variance $2,000 adverse"
      ],
      "answer": "BD",
      "explanation": "The actual price was $43,680 / 8,400 = $5.20 per kg, so the price variance is (standard price - actual price) x actual quantity = ($5.00 - $5.20) x 8,400 = $1,680 adverse. The standard quantity for actual output is 2,000 x 4 = 8,000 kg, so the usage variance is (8,000 - 8,400) x $5.00 standard price = $2,000 adverse. Together they explain the total material cost variance of $40,000 - $43,680 = $3,680 adverse.",
      "rationales": {
        "A": "Incorrect: the usage variance must be valued at the standard price of $5.00, not the actual price of $5.20.",
        "B": "Correct: ($5.00 - $5.20) x 8,400 kg actually purchased and used = $1,680 adverse.",
        "C": "Incorrect: the price variance must be based on the actual quantity of 8,400 kg, not the standard quantity of 8,000 kg.",
        "D": "Correct: (8,000 kg standard - 8,400 kg actual) x $5.00 standard price = $2,000 adverse."
      },
      "topic": "Budgeting and Budgetary Control",
      "subtopic": "Budgetary control",
      "difficulty": "hard",
      "source": "CIMA P1 Section B: Budgetary control – standard costing; material price and usage variances"
    },
    {
      "stem": "Which of the following is a relevant cost when a company decides whether to accept a one-off special order?",
      "options": [
        "Depreciation on existing machinery that will be used for the order",
        "Market research costs already incurred to identify the customer",
        "A share of head office costs allocated to the order",
        "Overtime premium paid to workers solely to complete the order"
      ],
      "answer": "D",
      "explanation": "A relevant cost is a future, incremental cash flow that arises as a direct result of the decision. The overtime premium will be paid only if the order is accepted, so it is relevant. Depreciation is a non-cash allocation of a past cost, market research already spent is sunk, and allocated head office costs will be incurred whatever the decision.",
      "rationales": {
        "A": "Incorrect: depreciation is a non-cash allocation of a past outlay, so it is not an incremental cash flow.",
        "B": "Incorrect: the research cost has already been incurred, so it is sunk and cannot be affected by the decision.",
        "C": "Incorrect: allocated head office costs will be incurred anyway, so they are not incremental to the order.",
        "D": "Correct: the overtime premium is a future cash cost incurred only because the order is accepted."
      },
      "topic": "Short-Term Commercial Decision Making",
      "subtopic": "Concepts used for short-term decision-making",
      "difficulty": "easy",
      "source": "CIMA P1 Section C: Concepts used for short-term decision-making – relevant costs, sunk costs and non-cash items"
    },
    {
      "stem": "A company is pricing a one-off contract that requires 800 kg of material M. It holds 500 kg of M in inventory, bought some time ago for $6.00 per kg. The current purchase price of M is $7.50 per kg. M is not used in the company's regular production. If not used on the contract, the 500 kg in inventory would either be sold as scrap for $2.00 per kg or used as a substitute in another job, which would avoid buying other material costing $2,250. What is the relevant cost of material M for the contract?",
      "options": [
        "$3,250",
        "$4,500",
        "$5,250",
        "$6,000"
      ],
      "answer": "B",
      "explanation": "Material already held that is not regularly used is valued at its opportunity cost, which is the higher of its scrap value ($1,000) and the benefit from its best alternative use ($2,250). So the 500 kg in inventory cost $2,250. The remaining 300 kg must be bought at the current price of $7.50, costing $2,250, giving a total relevant cost of $4,500. The original purchase price is sunk and is ignored.",
      "rationales": {
        "A": "Incorrect: this values the held material at scrap value, but using it as a substitute is the better alternative forgone.",
        "B": "Correct: 500 kg at the $2,250 substitute benefit forgone plus 300 kg bought at $7.50 ($2,250) = $4,500.",
        "C": "Incorrect: this values the held material at its historical cost of $6.00 per kg, which is a sunk cost.",
        "D": "Incorrect: replacement cost applies to material in regular use; M is not, so the held 500 kg would not be replaced."
      },
      "topic": "Short-Term Commercial Decision Making",
      "subtopic": "Concepts used for short-term decision-making",
      "difficulty": "hard",
      "source": "CIMA P1 Section C: Concepts used for short-term decision-making – relevant cost of materials and opportunity cost"
    },
    {
      "stem": "A product sells for $40 per unit and has a variable cost of $24 per unit. Fixed costs are $192,000 per year and budgeted sales are 15,000 units per year. What is the margin of safety as a percentage of budgeted sales?",
      "options": [
        "20%",
        "25%",
        "40%",
        "80%"
      ],
      "answer": "A",
      "explanation": "Contribution per unit is $40 - $24 = $16, so the breakeven point is $192,000 / $16 = 12,000 units. The margin of safety is budgeted sales less breakeven sales, 15,000 - 12,000 = 3,000 units. Expressed as a percentage of budgeted sales this is 3,000 / 15,000 = 20%, meaning sales could fall by 20% before a loss arises.",
      "rationales": {
        "A": "Correct: breakeven is 12,000 units, so the margin of safety is 3,000 / 15,000 budgeted units = 20%.",
        "B": "Incorrect: this divides the 3,000-unit margin by breakeven sales instead of by budgeted sales.",
        "C": "Incorrect: 40% is the contribution to sales ratio ($16 / $40), not the margin of safety.",
        "D": "Incorrect: 80% is breakeven sales as a percentage of budgeted sales, the complement of the margin of safety."
      },
      "topic": "Short-Term Commercial Decision Making",
      "subtopic": "Techniques to support short term decision-making",
      "difficulty": "medium",
      "source": "CIMA P1 Section C: Techniques – cost-volume-profit analysis, breakeven point and margin of safety"
    },
    {
      "stem": "A company makes three products. Labour is limited to 7,000 hours next period and there are no other constraints; fixed costs are unaffected by the product mix. Product P earns a contribution of $30 per unit, needs 3 labour hours per unit and has maximum demand of 1,000 units. Product Q earns $24 per unit, needs 2 hours per unit and has maximum demand of 1,500 units. Product R earns $40 per unit, needs 5 hours per unit and has maximum demand of 800 units. Which production plan maximises total contribution?",
      "options": [
        "P 1,000 units; Q 0 units; R 800 units",
        "P 0 units; Q 1,500 units; R 800 units",
        "P 1,000 units; Q 1,500 units; R 200 units",
        "P 1,000 units; Q 1,000 units; R 400 units"
      ],
      "answer": "C",
      "explanation": "With one scarce resource, products are ranked by contribution per unit of that resource: Q earns $12 per hour, P $10 and R $8. Making Q's full demand uses 3,000 hours and P's full demand another 3,000 hours, leaving 1,000 hours for 200 units of R. Total contribution is $36,000 + $30,000 + $8,000 = $74,000, higher than any other feasible mix.",
      "rationales": {
        "A": "Incorrect: this ranks by contribution per unit, favouring R, which earns the least per labour hour; contribution is $62,000.",
        "B": "Incorrect: this gives R priority over P although P earns more per hour; contribution is only $68,000.",
        "C": "Correct: ranking by contribution per labour hour (Q, P, then R) gives the maximum contribution of $74,000.",
        "D": "Incorrect: this leaves Q's demand unmet although Q earns the most per hour; contribution is only $70,000."
      },
      "topic": "Short-Term Commercial Decision Making",
      "subtopic": "Techniques to support short term decision-making",
      "difficulty": "medium",
      "source": "CIMA P1 Section C: Techniques – limiting factor analysis with a single scarce resource"
    },
    {
      "stem": "A company needs 10,000 units of a component each year. Its own cost per unit is a variable production cost of $14 plus absorbed fixed overhead of $6. The fixed overheads will be incurred whether the component is made or bought. An outside supplier offers the component at $17 per unit. If the component were bought in, the released capacity would be used to make another product earning a contribution of $20,000 a year. What should the company do, and what is the annual financial benefit compared with the alternative?",
      "options": [
        "Buy, saving $30,000 a year",
        "Make, saving $30,000 a year",
        "Buy, saving $10,000 a year",
        "Make, saving $10,000 a year"
      ],
      "answer": "D",
      "explanation": "Only incremental costs and opportunity costs are relevant. Making costs 10,000 x $14 = $140,000 in variable cost plus the $20,000 contribution forgone from the other product, a total of $160,000. Buying costs 10,000 x $17 = $170,000. Making is therefore $10,000 a year cheaper; the absorbed fixed overhead is irrelevant because it is incurred either way.",
      "rationales": {
        "A": "Incorrect: this compares the full cost of $20 per unit with the buy price, but the $6 fixed overhead is not avoidable.",
        "B": "Incorrect: this compares variable cost with the buy price but ignores the $20,000 contribution forgone by making.",
        "C": "Incorrect: the amount is right but the decision is reversed; making at $160,000 is cheaper than buying at $170,000.",
        "D": "Correct: making costs $140,000 plus $20,000 opportunity cost, which is $10,000 less than buying for $170,000."
      },
      "topic": "Short-Term Commercial Decision Making",
      "subtopic": "Short-term decisions made by organisations",
      "difficulty": "medium",
      "source": "CIMA P1 Section C: Short-term decisions – make or buy decisions, including opportunity costs"
    },
    {
      "stem": "A joint process costing $60,000 produces 4,000 kg of product X, which can be sold at the split-off point for $12 per kg. Joint costs of $30,000 are apportioned to X. Alternatively, X can be processed further at a variable cost of $5 per kg plus specific fixed costs of $8,000, and then sold for $18 per kg, with no loss of quantity. What is the effect on total profit of processing X further rather than selling it at the split-off point?",
      "options": [
        "Profit increases by $4,000",
        "Profit decreases by $4,000",
        "Profit decreases by $34,000",
        "Profit increases by $24,000"
      ],
      "answer": "B",
      "explanation": "A further processing decision compares only the incremental revenue with the incremental costs of processing beyond the split-off point. Incremental revenue is 4,000 x ($18 - $12) = $24,000, while incremental costs are 4,000 x $5 + $8,000 = $28,000, so profit falls by $4,000. Joint costs are incurred whether or not X is processed further, so their apportionment is irrelevant to the decision.",
      "rationales": {
        "A": "Incorrect: this ignores the $8,000 specific fixed costs, which arise only if X is processed further.",
        "B": "Correct: incremental revenue of $24,000 less incremental costs of $28,000 gives a $4,000 fall in profit.",
        "C": "Incorrect: this deducts the $30,000 apportioned joint cost, which is incurred whatever is decided and so is irrelevant.",
        "D": "Incorrect: $24,000 is the incremental revenue only; the further processing costs must be deducted."
      },
      "topic": "Short-Term Commercial Decision Making",
      "subtopic": "Short-term decisions made by organisations",
      "difficulty": "medium",
      "source": "CIMA P1 Section C: Short-term decisions – further processing decisions for joint products"
    },
    {
      "stem": "Daily demand for a perishable product is 100 units with a probability of 0.3, 150 units with a probability of 0.5 and 200 units with a probability of 0.2. What is the expected daily demand?",
      "options": [
        "145 units",
        "150 units",
        "155 units",
        "200 units"
      ],
      "answer": "A",
      "explanation": "An expected value is the probability-weighted average of all possible outcomes: (100 x 0.3) + (150 x 0.5) + (200 x 0.2) = 30 + 75 + 40 = 145 units. It represents the long-run average if the situation is repeated many times. It need not be an outcome that can actually occur on any one day.",
      "rationales": {
        "A": "Correct: 100 x 0.3 + 150 x 0.5 + 200 x 0.2 = 145 units.",
        "B": "Incorrect: 150 units is the most likely outcome (and the simple average), not the probability-weighted average.",
        "C": "Incorrect: this swaps the probabilities of 0.3 and 0.2 between the 100 and 200 unit outcomes.",
        "D": "Incorrect: 200 units is the highest possible demand, which a maximax view would focus on, not the expected value."
      },
      "topic": "Dealing with Uncertainty in the Short-Term",
      "subtopic": "Basic risk management in the short-term",
      "difficulty": "easy",
      "source": "CIMA P1 Section D: Basic risk management – expected values"
    },
    {
      "stem": "A company must choose one of three projects. Profits depend on demand. Project X earns $50,000 if demand is low, $70,000 if medium and $90,000 if high. Project Y earns $30,000 if low, $80,000 if medium and $110,000 if high. Project Z earns $60,000 if low, $65,000 if medium and $75,000 if high. No probabilities are available. Which of the following statements are correct? Choose TWO.",
      "options": [
        "A decision maker using the maximin criterion would choose Project X",
        "A decision maker using the maximax criterion would choose Project Y",
        "A decision maker using the minimax regret criterion would choose Project X",
        "A decision maker using the minimax regret criterion would choose Project Z"
      ],
      "answer": "BC",
      "explanation": "Maximax, the optimistic approach, picks the highest best outcome, which is Y's $110,000; maximin, the pessimistic approach, picks the highest worst outcome, which is Z's $60,000. For minimax regret, each payoff is compared with the best payoff for that demand level ($60,000, $80,000 and $110,000). The maximum regrets are X $20,000, Y $30,000 and Z $35,000, so X minimises the maximum regret.",
      "rationales": {
        "A": "Incorrect: the worst outcomes are X $50,000, Y $30,000 and Z $60,000, so maximin selects Z.",
        "B": "Correct: Y's best outcome of $110,000 is the highest best outcome, so maximax selects Y.",
        "C": "Correct: X's maximum regret is $20,000, lower than Y's $30,000 and Z's $35,000.",
        "D": "Incorrect: Z has the highest maximum regret ($35,000 if demand is high), so minimax regret rejects it."
      },
      "topic": "Dealing with Uncertainty in the Short-Term",
      "subtopic": "Basic risk management in the short-term",
      "difficulty": "hard",
      "source": "CIMA P1 Section D: Basic risk management – decision criteria under uncertainty (maximax, maximin, minimax regret)"
    },
    {
      "stem": "A company budgets to sell 10,000 units of a product at $50 per unit. Variable cost is $30 per unit and fixed costs are $150,000. Assuming all other estimates are unchanged, by what percentage could the selling price fall before the company would make neither a profit nor a loss?",
      "options": [
        "25.0%",
        "16.7%",
        "33.3%",
        "10.0%"
      ],
      "answer": "D",
      "explanation": "Sensitivity analysis measures how far one estimate can change, holding the others constant, before the decision or outcome changes. Budgeted profit is 10,000 x ($50 - $30) - $150,000 = $50,000, so revenue can fall by $50,000, or $5 per unit. Relative to the $50 selling price this is a 10.0% fall, the sensitivity of profit to the selling price.",
      "rationales": {
        "A": "Incorrect: this divides profit by total contribution of $200,000; the sensitivity is measured against revenue.",
        "B": "Incorrect: this divides the $5 per unit price fall by the variable cost of $30 instead of the $50 selling price.",
        "C": "Incorrect: this divides profit by fixed costs, which measures how far fixed costs could rise, not price.",
        "D": "Correct: the $50,000 profit allows revenue to fall by $5 per unit, which is 10.0% of the $50 price."
      },
      "topic": "Dealing with Uncertainty in the Short-Term",
      "subtopic": "Basic risk management in the short-term",
      "difficulty": "medium",
      "source": "CIMA P1 Section D: Basic risk management – sensitivity analysis"
    }
  ]
}
```
