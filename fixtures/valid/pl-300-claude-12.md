```json
{
  "format": "domcq/1",
  "exam": "pl-300",
  "set": "PL-300: Microsoft Power BI Data Analyst practice – Core skills mixed set",
  "questions": [
    {
      "stem": "You are building a Power BI Desktop report on a SQL Server database that holds several billion rows and is updated every few minutes. Report visuals must show the latest data without waiting for a scheduled refresh, and the data must not be copied into the Power BI semantic model. Which storage mode should you use for the tables?",
      "options": [
        "Import",
        "Dual",
        "DirectQuery",
        "Live connection"
      ],
      "answer": "C",
      "explanation": "DirectQuery leaves the data in the source and sends queries to it each time a visual is rendered, so users see current data and nothing is copied into the model. Import loads a compressed copy of the data that is only as current as the last refresh. Choosing between Import and DirectQuery is a trade-off between query speed and data freshness or size.",
      "rationales": {
        "A": "Import copies the data into the model and shows it only as of the last refresh, which breaks both requirements.",
        "B": "Dual tables can behave as Import or DirectQuery, but they still hold an imported copy of the data.",
        "C": "Correct: DirectQuery queries SQL Server at report time and stores no copy of the data in the model.",
        "D": "A live connection is used for Analysis Services models or published Power BI semantic models, not a SQL Server database."
      },
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "easy",
      "source": "PL-300 study guide, Prepare the data: Get or connect to data – Use DirectQuery in Power BI Desktop"
    },
    {
      "stem": "Your Power BI Desktop file connects to a development SQL Server named SQLDEV01. After you publish it, the semantic model must connect to the production server SQLPROD01. You want to be able to switch the server in the Power BI service without editing and republishing the .pbix file. What should you do?",
      "options": [
        "Create a Power Query parameter for the server name and use it in the Source step",
        "Create a what-if parameter for the server name and reference it in a measure",
        "Change the server in Data source settings before every publish to production",
        "Add a query for each server and append the two queries into one table"
      ],
      "answer": "A",
      "explanation": "A Power Query parameter can replace a hard-coded value such as a server or database name in a query's Source step. After the model is published, its owner can change the parameter value in the semantic model settings in the Power BI service, so the model points to a different server without a new publish. What-if parameters are a separate DAX feature for scenario analysis and cannot drive a connection.",
      "rationales": {
        "A": "Correct: a parameter used in the Source step can be changed in the semantic model settings after publishing.",
        "B": "What-if parameters create a DAX table and measure for scenario analysis; they cannot change a data source connection.",
        "C": "Editing data source settings in Desktop works but requires editing and republishing the file each time.",
        "D": "Appending both servers would combine development and production rows instead of switching between servers."
      },
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "medium",
      "source": "PL-300 study guide, Prepare the data: Get or connect to data"
    },
    {
      "stem": "In Power Query Editor, you enable Column quality and Column distribution for a Customers query that returns about 2 million rows. The statistics show 0% empty values for the Email column, but you know that some customers have no email address. What should you do so that the statistics reflect all rows?",
      "options": [
        "Enable Column profile on the View ribbon",
        "Select Refresh Preview on the Home ribbon",
        "Change the data type of the Email column to Text",
        "Switch column profiling to be based on the entire data set"
      ],
      "answer": "D",
      "explanation": "By default, Power Query calculates data profiling statistics from only the first 1,000 rows of the preview. When the problem values sit further down the table, the statistics can look clean even though they are not. Changing the status bar setting to profile the entire data set makes Column quality, Column distribution and Column profile use every row.",
      "rationales": {
        "A": "Column profile adds more detail for a selected column but still uses the same row sample unless the profiling scope is changed.",
        "B": "Refreshing the preview reloads data but keeps profiling based on the top 1,000 rows.",
        "C": "The data type does not change how many rows are sampled, and Email is most likely already text.",
        "D": "Correct: profiling based on the entire data set calculates the statistics from all rows instead of the first 1,000."
      },
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "medium",
      "source": "PL-300 study guide, Prepare the data: Profile and clean the data – Data profiling tools"
    },
    {
      "stem": "A query imported from Excel has the columns Region, Jan, Feb, Mar and so on through Dec. There is one row per region, and each month column holds that month's sales. You need a table with the columns Region, Month and Sales so that you can analyze sales by month. Which Power Query transformation should you use?",
      "options": [
        "Select the month columns and use Pivot Column",
        "Select the Region column and use Unpivot Other Columns",
        "Use Transpose on the whole table",
        "Use Group By on Region with a Sum of each month"
      ],
      "answer": "B",
      "explanation": "Unpivoting turns column headers into values of an Attribute column and the cell contents into a Value column, which you then rename to Month and Sales. Using Unpivot Other Columns with Region selected also keeps working if new month columns appear later, because any column other than Region is unpivoted. A tall, narrow table like this is the shape that a Power BI model filters and aggregates well.",
      "rationales": {
        "A": "Pivot does the opposite: it turns row values into new columns, making the table wider.",
        "B": "Correct: unpivoting every column except Region produces one row per region and month with the sales value.",
        "C": "Transpose swaps all rows and columns, which would put regions into headers instead of creating Month and Sales columns.",
        "D": "Group By aggregates rows but keeps the months as separate columns."
      },
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "easy",
      "source": "PL-300 study guide, Prepare the data: Transform and load the data – Unpivot columns"
    },
    {
      "stem": "You have two Power Query queries: Customers, with one row per customer, and Orders, with one row per order and a CustomerID column. You need a query that returns only the customers who have never placed an order. You start a Merge Queries operation with Customers as the first (left) table and Orders as the second (right) table, matched on CustomerID. Which join kind should you select?",
      "options": [
        "Left outer",
        "Inner",
        "Left anti",
        "Full outer"
      ],
      "answer": "C",
      "explanation": "A left anti join keeps only the rows from the left table that have no matching row in the right table. With Customers on the left and Orders on the right, those are exactly the customers without orders. The join kinds differ in which matched and unmatched rows they keep, so choosing the right one avoids extra filtering steps.",
      "rationales": {
        "A": "A left outer join keeps every customer, both with and without orders, so further filtering would be needed.",
        "B": "An inner join keeps only customers that do have matching orders, the opposite of what is needed.",
        "C": "Correct: a left anti join returns only the left-table rows with no match in the right table.",
        "D": "A full outer join keeps all rows from both tables, including matched customers and unmatched orders."
      },
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "medium",
      "source": "PL-300 study guide, Prepare the data: Transform and load the data – Left anti join"
    },
    {
      "stem": "A Power Query query named Sales reads a CSV file and contains ProductID, ProductName, Category, Quantity and Amount. You create a Product query by using Reference on Sales, keep ProductID, ProductName and Category, and remove duplicates. You then remove ProductName and Category from Sales to make it a narrow fact table, and the Product query starts failing because those columns are missing. You need a star schema in which the steps that read the CSV file are defined only once and the shared source query is not loaded into the model. What should you do?",
      "options": [
        "Create a staging query with the source steps, clear its Enable load option, and reference it from both Sales and Product",
        "Re-create Product by using Duplicate on Sales, and clear the Include in report refresh option on Product",
        "Keep Product as a reference of Sales, load all columns into Sales, and hide ProductName and Category in the model",
        "Merge Product into Sales by using a left outer join, and then remove the duplicated columns from the Sales query"
      ],
      "answer": "A",
      "explanation": "A referenced query starts from the final output of the query it references, so later changes to Sales flow into Product and broke it. Putting the shared source steps into a staging query lets Sales and Product each reference it and shape it independently, while the source logic exists in one place. Clearing Enable load keeps the staging query out of the model, but it still runs during refresh because other queries depend on it.",
      "rationales": {
        "A": "Correct: both queries build on one shared staging query, and disabling its load keeps it out of the model.",
        "B": "Duplicate copies every source step, so they exist twice, and excluding Product from refresh would leave it stale.",
        "C": "Hiding columns does not remove them, so Sales stays wide and the model keeps the extra data.",
        "D": "Merging the dimension back into the fact table undoes the star schema instead of building it."
      },
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "hard",
      "source": "PL-300 study guide, Prepare the data: Transform and load the data"
    },
    {
      "stem": "In your model, the Product table has exactly one row for each ProductKey, and the Sales table has many rows for each ProductKey. You create a relationship between the two tables on ProductKey. Which cardinality should the relationship have?",
      "options": [
        "One-to-one (1:1)",
        "One-to-many (1:*), with Product on the one side",
        "Many-to-many (*:*)",
        "One-to-many (1:*), with Sales on the one side"
      ],
      "answer": "B",
      "explanation": "The table whose key column holds unique values goes on the one side of a relationship, and the table where that key repeats goes on the many side. A dimension such as Product is therefore on the one side and a fact table such as Sales on the many side. With the default single cross-filter direction, filters then flow from Product to Sales, which is the standard star schema pattern.",
      "rationales": {
        "A": "One-to-one requires unique values in both columns, but ProductKey repeats in Sales.",
        "B": "Correct: Product has unique keys (one side) and Sales repeats them (many side).",
        "C": "Many-to-many is for cases where neither column is unique, which is not true here.",
        "D": "Sales cannot be on the one side because its ProductKey values are not unique."
      },
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "easy",
      "source": "PL-300 study guide, Model the data: Design and implement a data model"
    },
    {
      "stem": "The Sales table has OrderDate and ShipDate columns, and both are related to the Date table. The relationship on OrderDate is active, and the relationship on ShipDate is inactive. You need a measure that returns the sum of Sales[Amount] by ship date when it is used with Date table columns, without changing the model. Which DAX expression should the measure use?",
      "options": [
        "CALCULATE(SUM(Sales[Amount]), CROSSFILTER(Sales[ShipDate], 'Date'[Date], BOTH))",
        "SUMX(Sales, Sales[Amount] * RELATED('Date'[Date]))",
        "CALCULATE(SUM(Sales[Amount]), ALL('Date'))",
        "CALCULATE(SUM(Sales[Amount]), USERELATIONSHIP(Sales[ShipDate], 'Date'[Date]))"
      ],
      "answer": "D",
      "explanation": "Only one relationship between two tables can be active, which is how a Date table plays several roles. USERELATIONSHIP, used as a filter argument of CALCULATE, activates the named inactive relationship for that calculation only, so Date filters reach Sales through ShipDate. This lets one Date table serve as both order date and ship date without duplicating it.",
      "rationales": {
        "A": "CROSSFILTER changes the filter direction of a relationship; it is USERELATIONSHIP that makes an inactive one active.",
        "B": "Multiplying an amount by a date is meaningless, and RELATED follows the active OrderDate relationship anyway.",
        "C": "ALL('Date') removes date filters entirely, returning the grand total instead of sales by ship date.",
        "D": "Correct: USERELATIONSHIP activates the ShipDate relationship for this measure only."
      },
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 study guide, Model the data: Create model calculations by using DAX – USERELATIONSHIP function (DAX)"
    },
    {
      "stem": "A matrix shows Product[Category] on rows and the measure [Total Sales] as values. You need a new measure that shows each category's sales as a percentage of the sales for all categories, while still respecting filters from other tables such as Date. The measure uses DIVIDE([Total Sales], <denominator>). Which expression should you use as the denominator?",
      "options": [
        "CALCULATE([Total Sales], REMOVEFILTERS('Product'))",
        "CALCULATE([Total Sales], VALUES('Product'[Category]))",
        "CALCULATE([Total Sales], REMOVEFILTERS('Date'))",
        "SUMX(VALUES('Product'[Category]), [Total Sales])"
      ],
      "answer": "A",
      "explanation": "CALCULATE evaluates an expression in a modified filter context. REMOVEFILTERS('Product') clears the filters that come from the Product table, including the category on the current matrix row, so the denominator returns sales for all products. Filters on other tables, such as a Date slicer, are left in place, so the percentage stays correct for the selected period.",
      "rationales": {
        "A": "Correct: removing Product filters gives sales for all categories while keeping Date and other filters.",
        "B": "VALUES keeps the current category filter, so the denominator equals the numerator and every row shows 100%.",
        "C": "This removes the date filters but keeps the category filter, which is the wrong table.",
        "D": "Within a category row this iterates only that category, so it returns the same value as [Total Sales]."
      },
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 study guide, Model the data: Create model calculations by using DAX – REMOVEFILTERS function (DAX)"
    },
    {
      "stem": "An Inventory table stores one row per product per day, holding the quantity on hand at the end of that day. Summing the quantity across the days of a month gives a meaningless result. You need a measure that, for any selected month, quarter or year, returns the quantity on hand on the last date of that period. The model has a Date table related to Inventory. Which measure should you create?",
      "options": [
        "SUM(Inventory[Quantity])",
        "AVERAGE(Inventory[Quantity])",
        "CALCULATE(SUM(Inventory[Quantity]), LASTDATE('Date'[Date]))",
        "CALCULATE(SUM(Inventory[Quantity]), DATESYTD('Date'[Date]))"
      ],
      "answer": "C",
      "explanation": "A stock balance is semi-additive: it can be summed across products but not across time. LASTDATE returns the last date in the current filter context, so CALCULATE restricts the sum to that one day while still adding up all products. If the last date of a period might have no data, LASTNONBLANK is the usual alternative.",
      "rationales": {
        "A": "A plain SUM adds every daily balance in the period, which overstates the stock.",
        "B": "An average balance is a different metric and does not return the quantity on the period's last date.",
        "C": "Correct: the sum is evaluated only for the last date in the period, giving a closing balance.",
        "D": "DATESYTD returns all dates from the start of the year, so it still sums many daily balances."
      },
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 study guide, Model the data: Create model calculations by using DAX – LASTDATE function (DAX)"
    },
    {
      "stem": "Your model has a Date table with a DateKey column (a whole number in yyyymmdd format) and a Date column of the date data type. The relationship between Date and Sales uses DateKey. Time intelligence measures that use functions such as TOTALYTD return incorrect results. Which two actions should you take so that time intelligence functions work correctly? Each correct answer presents part of the solution. Choose TWO.",
      "options": [
        "Make sure the Date column has one row for every day, with no gaps, covering whole years",
        "Remove the rows from the Date table for dates that do not appear in the Sales table",
        "Mark the table as a date table and select the Date column as its date column",
        "Set the cross-filter direction of the Date to Sales relationship to Both"
      ],
      "answer": "AC",
      "explanation": "DAX time intelligence functions expect a date column with unique values and a contiguous range of dates that spans whole years. When the relationship uses a non-date column such as an integer DateKey, the table must also be marked as a date table, so that DAX treats the Date column as the calendar and correctly removes filters on the rest of the Date table. Gaps or a missing date table setting are common causes of wrong year-to-date results.",
      "rationales": {
        "A": "Correct: time intelligence needs unique, contiguous dates spanning full years.",
        "B": "Removing dates creates gaps, which is exactly what breaks time intelligence calculations.",
        "C": "Correct: when the relationship uses an integer key, marking the date table lets time intelligence work.",
        "D": "Filter direction does not affect how time intelligence functions build their date ranges."
      },
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "hard",
      "source": "PL-300 study guide, Model the data: Design and implement a data model – Set and use date tables in Power BI Desktop"
    },
    {
      "stem": "An Import model has grown large and refreshes slowly. The Sales table includes a TransactionTimestamp column with values to the second, and several text columns that no report, measure or relationship uses. Reports analyze sales only by day. Which two actions will reduce the size of the model? Each correct answer presents a complete solution. Choose TWO.",
      "options": [
        "Set the relationships from Sales to its dimension tables to filter in both directions",
        "Remove the unused text columns from the Sales query in Power Query",
        "Replace the measures on the Sales table with equivalent calculated columns",
        "Replace TransactionTimestamp with a Date column that has no time portion"
      ],
      "answer": "BD",
      "explanation": "Import models store each column in compressed form, and how much space a column takes depends mainly on how many distinct values it has. Removing columns that nothing uses removes their storage entirely. Reducing a timestamp to a date lowers its cardinality from millions of values to a few thousand, which compresses far better and still meets the daily analysis requirement.",
      "rationales": {
        "A": "Cross-filter direction affects filtering behavior and can hurt performance, but it does not reduce stored data.",
        "B": "Correct: columns removed in Power Query are never loaded, so they take no space in the model.",
        "C": "Calculated columns are stored in the model, so this increases size; measures are calculated at query time.",
        "D": "Correct: dropping the time portion reduces the column's cardinality, which improves compression."
      },
      "topic": "Model the data",
      "subtopic": "Optimize model performance",
      "difficulty": "medium",
      "source": "PL-300 study guide, Model the data: Optimize model performance"
    },
    {
      "stem": "You need a visual that shows how a year's opening cash balance is increased and decreased by each month's net cash flow to reach the closing balance, with increases and decreases shown in different colors. Which visual should you use?",
      "options": [
        "Stacked area chart",
        "Ribbon chart",
        "Funnel chart",
        "Waterfall chart"
      ],
      "answer": "D",
      "explanation": "A waterfall chart shows a running total as values are added or subtracted, drawing each change as a floating column from the previous total. It colors increases and decreases differently by default and can show a final total column. This makes it the standard choice for explaining how a starting value becomes an ending value.",
      "rationales": {
        "A": "A stacked area chart shows how parts add up to a total over time, not step-by-step increases and decreases.",
        "B": "A ribbon chart shows how the ranking of categories changes over time.",
        "C": "A funnel chart shows values falling through the stages of a sequential process.",
        "D": "Correct: a waterfall chart shows a running total built from positive and negative changes."
      },
      "topic": "Visualize and analyze the data",
      "subtopic": "Create reports",
      "difficulty": "easy",
      "source": "PL-300 study guide, Visualize and analyze the data: Create reports"
    },
    {
      "stem": "Your finance team needs monthly invoices that print exactly on A4 pages, with a header and footer on every page and a table that lists every invoice line, even when the table runs over many pages. Which Power BI item should you create?",
      "options": [
        "An interactive report page with a table visual",
        "A paginated report",
        "A dashboard with pinned table tiles",
        "A scorecard with a metric for each invoice"
      ],
      "answer": "B",
      "explanation": "Paginated reports are designed to be printed or exported with a fixed page layout. A table in a paginated report grows to show all its rows across as many pages as needed, and page headers and footers repeat on every page. Interactive Power BI reports are optimized for on-screen exploration, so long tables scroll inside a visual instead of flowing across pages.",
      "rationales": {
        "A": "Table visuals in interactive reports scroll on screen and do not flow across printed pages.",
        "B": "Correct: paginated reports give pixel-precise page layouts and expand tables across many pages.",
        "C": "Dashboards are single-page canvases of tiles for monitoring, not printable documents.",
        "D": "Scorecards track metrics against goals and are not a page-formatted document."
      },
      "topic": "Visualize and analyze the data",
      "subtopic": "Create reports",
      "difficulty": "easy",
      "source": "PL-300 study guide, Visualize and analyze the data: Create reports – What are paginated reports in Power BI?"
    },
    {
      "stem": "A report page named Product Details shows detailed information about a single product. Users must be able to right-click a product in visuals on other pages, go to Product Details filtered to the product they clicked, and then return to the page they came from. What should you do on the Product Details page?",
      "options": [
        "Add Product[ProductName] to the page's Drill through field well",
        "Create a bookmark for each product and add a bookmark button for each one",
        "Set the page type to Tooltip and add Product[ProductName] to the page",
        "Add a slicer on Product[ProductName] and sync it across all pages"
      ],
      "answer": "A",
      "explanation": "Drillthrough lets a target page receive the filter of the data point a user right-clicks on another page. You set it up on the target page by adding the field to the Drill through well, and Power BI adds a back button automatically so users can return. This avoids building separate pages or bookmarks for each product.",
      "rationales": {
        "A": "Correct: a drillthrough field makes the page available on right-click, filtered to the clicked item, with a back button.",
        "B": "One bookmark per product does not scale and does not filter from the item a user right-clicks.",
        "C": "A tooltip page appears on hover over a data point; it is not a page users navigate to and back from.",
        "D": "Synced slicers share a selection across pages but give no right-click navigation from a data point."
      },
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 study guide, Visualize and analyze the data: Enhance reports for usability and storytelling – Set up drillthrough in Power BI reports"
    },
    {
      "stem": "A report page has a column chart that shows sales by region and a card that shows total company sales. When a user selects a region in the column chart, the card changes to show only that region's sales. The card must always show the total for all regions, and the other visuals on the page must still be filtered when a region is selected in the chart. What should you do?",
      "options": [
        "Apply a page-level filter that includes every region",
        "Change the report's default interaction from cross-highlighting to cross-filtering",
        "Select the column chart, use Edit interactions, and set the card's interaction to None",
        "Lock the card in place by using the Selection pane"
      ],
      "answer": "C",
      "explanation": "Edit interactions controls, for each source visual, how every other visual on the page responds when a user selects data in it: filter, highlight or none. Setting the card to None for the column chart stops selections in the chart from affecting the card only. All other visuals keep their existing interaction, so they are still filtered.",
      "rationales": {
        "A": "A page-level filter that includes every region changes nothing; selections in the chart still filter the card.",
        "B": "This changes how all visuals respond across the report and would still filter the card.",
        "C": "Correct: setting the interaction to None stops only the card from responding to the chart.",
        "D": "The Selection pane controls visibility, order and grouping of visuals, not their interactions."
      },
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 study guide, Visualize and analyze the data: Enhance reports for usability and storytelling – Change how visuals interact in a Power BI report"
    },
    {
      "stem": "A line chart shows Total Sales on the Y-axis and a text column named MonthYear, with values such as 'Jan 2025', on the X-axis. You need to add a six-month forecast from the Analytics pane, but the Forecast option is not available. What should you do?",
      "options": [
        "Add a second measure to the Y-axis of the line chart",
        "Change the visual to a clustered column chart",
        "Sort the axis by MonthYear in ascending order",
        "Use a date column on the X-axis and set the axis type to Continuous"
      ],
      "answer": "D",
      "explanation": "Forecasting in the Analytics pane is available for line charts that have a continuous time axis, because the algorithm needs evenly spaced points in time to project forward. A text column is always treated as categorical, so the forecast option is hidden. Replacing it with a date column and making sure the X-axis type is Continuous makes forecasting available.",
      "rationales": {
        "A": "Forecasting works with a single measure; adding a second series does not make the option appear.",
        "B": "Forecasting in the Analytics pane is offered for line charts, not column charts.",
        "C": "Sorting text labels does not turn a categorical axis into a continuous time axis.",
        "D": "Correct: a continuous date axis on a line chart is what the forecast feature needs."
      },
      "topic": "Visualize and analyze the data",
      "subtopic": "Identify patterns and trends",
      "difficulty": "hard",
      "source": "PL-300 study guide, Visualize and analyze the data: Identify patterns and trends"
    },
    {
      "stem": "You publish a semantic model that has a row-level security (RLS) role named SalesRep, whose filter on the Salesperson table is [Email] = USERPRINCIPALNAME(). In the Power BI service you add the SalesReps security group to the SalesRep role. The sales reps also have the Contributor role in the workspace, and when they open the report they see data for all salespeople. You need each rep to see only their own data. What should you do?",
      "options": [
        "Change the role's filter to use USERNAME() instead of USERPRINCIPALNAME()",
        "Assign the sales reps the Viewer role in the workspace instead of Contributor",
        "Set the relationship between Salesperson and Sales to filter in both directions",
        "Add each sales rep's individual account to the role in addition to the group"
      ],
      "answer": "B",
      "explanation": "RLS restricts only users who have read-only access to the semantic model. Workspace Admins, Members and Contributors have edit permission on the model, so RLS filters are not applied to them and they see all data. Giving the reps the Viewer role, or sharing the content through an app or direct sharing without an edit role, makes the RLS role membership take effect.",
      "rationales": {
        "A": "Both functions return the user's identity in the service; the filter is not the cause of the problem.",
        "B": "Correct: RLS applies to Viewers but not to Admin, Member or Contributor roles, which can edit the model.",
        "C": "A single direction from Salesperson to Sales already filters sales; the filter is skipped for Contributors.",
        "D": "Group membership in the role is already enough; the edit permission from Contributor is what bypasses RLS."
      },
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "hard",
      "source": "PL-300 study guide, Manage and secure Power BI: Secure and govern Power BI items – Row-level security (RLS) with Power BI"
    },
    {
      "stem": "You publish an Import mode semantic model whose data comes from a SQL Server database hosted in your company's on-premises data center. You need to configure scheduled refresh for the semantic model in the Power BI service. What must be in place?",
      "options": [
        "An on-premises data gateway that can reach the SQL Server",
        "A Premium capacity assigned to the workspace",
        "A change of the semantic model to DirectQuery mode",
        "A sensitivity label applied to the semantic model"
      ],
      "answer": "A",
      "explanation": "The Power BI service runs in the cloud and cannot reach data sources inside a private network directly. An on-premises data gateway installed on a machine that can reach the SQL Server securely relays queries and refresh traffic between the service and the source. A gateway is needed for both Import refresh and DirectQuery against on-premises sources, but not for cloud sources reachable from the internet.",
      "rationales": {
        "A": "Correct: the gateway connects the cloud service to the on-premises SQL Server for refresh.",
        "B": "Scheduled refresh is available without Premium; capacity type does not provide network access to the source.",
        "C": "DirectQuery to an on-premises source still needs a gateway, so changing the mode does not help.",
        "D": "Sensitivity labels classify content for protection and have no effect on data refresh."
      },
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "easy",
      "source": "PL-300 study guide, Manage and secure Power BI: Create and manage workspaces and assets – What is an on-premises data gateway?"
    },
    {
      "stem": "A report author must be able to publish, edit and delete reports and semantic models in a Power BI workspace. The author must not be able to add or remove workspace users or change their permissions. Following the principle of least privilege, which workspace role should you assign to the author?",
      "options": [
        "Viewer",
        "Member",
        "Contributor",
        "Admin"
      ],
      "answer": "C",
      "explanation": "Contributors can create, edit and delete content in a workspace, including publishing reports and semantic models, but they cannot manage workspace access. Members can additionally add users with the same or lower permissions, and Admins can manage everything, including the workspace itself. Choosing the lowest role that meets the need limits what a user can change by mistake.",
      "rationales": {
        "A": "Viewers can only view and interact with content; they cannot publish or edit it.",
        "B": "Members can add other users to the workspace, which this author must not be able to do.",
        "C": "Correct: Contributors can publish, edit and delete content but cannot manage workspace users.",
        "D": "Admins have full control, including permissions, which exceeds what the author needs."
      },
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "medium",
      "source": "PL-300 study guide, Manage and secure Power BI: Create and manage workspaces and assets – Roles in workspaces in Power BI"
    }
  ]
}
```
