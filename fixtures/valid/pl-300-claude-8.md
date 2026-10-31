```json
{
  "format": "domcq/1",
  "exam": "pl-300",
  "set": "PL-300: Microsoft Power BI Data Analyst practice – Mixed core skills set",
  "questions": [
    {
      "stem": "You are building a Power BI Desktop report that connects to a SQL Server database. Developers use a test server, and the published report must use the production server. You want to switch the server name in one place without editing the Source step of every query by hand. What should you create in Power Query Editor?",
      "options": [
        "A what-if parameter that stores the server name",
        "A field parameter that lists both server names",
        "A query parameter referenced in each query's Source step",
        "A DAX measure that returns the server name"
      ],
      "answer": "C",
      "explanation": "Query parameters are defined in Power Query and can replace hard-coded values such as server or database names in a query's Source step. Changing the parameter value once updates every query that references it, and the value can also be changed in the Power BI service semantic model settings. What-if parameters, field parameters and measures are model-level features evaluated after data is loaded, so they cannot control the connection.",
      "rationales": {
        "A": "A what-if parameter creates a DAX table and slicer for scenario analysis; it cannot change a Power Query data source.",
        "B": "A field parameter lets report users switch the fields shown in a visual; it does not affect connections.",
        "C": "Correct: a query parameter can replace the hard-coded server name in Source steps and be changed in one place.",
        "D": "DAX measures are evaluated in the model after load and cannot be used to define a Power Query connection."
      },
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "easy",
      "source": "PL-300 skills measured: Get or connect to data – create and modify parameters"
    },
    {
      "stem": "In Power Query Editor, you enable Column quality and Column distribution for a table containing 2 million rows. You notice the statistics appear to be calculated from only part of the data. You need the profiling statistics to reflect every row in the table. What should you do?",
      "options": [
        "Change the status bar setting to column profiling based on the entire data set",
        "Enable the Column profile option on the View ribbon",
        "Apply a Keep Top Rows step set to 2 million rows",
        "Close and apply the query, then reopen Power Query Editor"
      ],
      "answer": "A",
      "explanation": "By default, Power Query data profiling is calculated over the top 1,000 rows of the preview. The status bar at the bottom of Power Query Editor lets you switch to column profiling based on the entire data set, which evaluates all rows. Enabling more profiling panes or reloading the data does not change the number of rows the profile is computed from.",
      "rationales": {
        "A": "Correct: the status bar toggle switches profiling from the top 1,000 rows to the entire data set.",
        "B": "Column profile adds another profiling pane but still uses the same row scope as the other profiling tools.",
        "C": "Keep Top Rows filters the data itself and does not change the profiling scope of the preview.",
        "D": "Applying and reopening the query leaves the default top 1,000 rows profiling scope unchanged."
      },
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "easy",
      "source": "PL-300 skills measured: Profile and clean the data – evaluate data, including data statistics and column properties"
    },
    {
      "stem": "You have a Power Query query that imports a large table from a SQL Server database. The query currently folds all its steps back to the source. You plan to add one more step and want to keep query folding for that step and any later steps. Which step is most likely to stop query folding?",
      "options": [
        "Filtering rows to keep only orders from the last three years",
        "Removing columns that are not needed in the model",
        "Renaming several columns to business-friendly names",
        "Adding an index column that starts at 1"
      ],
      "answer": "D",
      "explanation": "Query folding works only when Power Query can translate a step into the source's query language, here SQL. Filters, column removal and renames map directly to WHERE and SELECT clauses, so they fold. Adding an index column has no direct equivalent that the connector generates, so folding usually stops at that step and every later step is processed by the Power Query engine instead.",
      "rationales": {
        "A": "Row filters translate to a SQL WHERE clause and normally fold to SQL Server.",
        "B": "Removing columns translates to a narrower SQL SELECT list and normally folds.",
        "C": "Renaming columns translates to column aliases in SQL and normally folds.",
        "D": "Correct: an index column typically cannot be translated to the source query, so folding stops there."
      },
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "hard",
      "source": "PL-300 skills measured: Transform and load the data; Microsoft Learn: Power Query query folding overview"
    },
    {
      "stem": "In Power Query, a table has a Product column and one column per month (Jan-2025, Feb-2025, and so on) containing sales amounts. A new month column is added to the source every month. You need one row per product per month, and new month columns must be handled automatically without editing the query. What should you do?",
      "options": [
        "Transpose the table, and then use the first row as headers",
        "Select the Product column, and then select Unpivot Other Columns",
        "Select the current month columns, and then select Unpivot Only Selected Columns",
        "Select the month columns, and then pivot them using Product as the values"
      ],
      "answer": "B",
      "explanation": "Unpivoting turns column headers into values in an Attribute column and the cell contents into a Value column, giving one row per product per month. Unpivot Other Columns records only the columns to keep (Product) in the M code, so any new month columns are unpivoted automatically at refresh. Unpivot Only Selected Columns hard-codes the month column names, so new months would be left out.",
      "rationales": {
        "A": "Transposing swaps rows and columns, producing one column per product instead of one row per product per month.",
        "B": "Correct: Unpivot Other Columns references only Product, so new month columns are unpivoted automatically.",
        "C": "Unpivot Only Selected Columns lists the month names explicitly, so future month columns are not included.",
        "D": "Pivoting makes the table wider, which is the opposite of the required long format."
      },
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Transform and load the data – pivot, unpivot, and transpose data"
    },
    {
      "stem": "In Power Query, you have an Orders query and a Customers query that share a CustomerID column. You need a new query that contains only the orders whose CustomerID does not exist in Customers. You start a Merge Queries as New operation with Orders as the first table and Customers as the second table. Which join kind should you select?",
      "options": [
        "Left outer",
        "Right anti",
        "Left anti",
        "Inner"
      ],
      "answer": "C",
      "explanation": "Anti joins return rows that have no match in the other table. A left anti join keeps only rows from the first (left) table that have no matching key in the second (right) table, which is exactly the set of orders with an unknown customer. This pattern is commonly used to find orphaned fact rows before building relationships.",
      "rationales": {
        "A": "Left outer returns all orders, both matched and unmatched, not only the unmatched ones.",
        "B": "Right anti returns customers with no matching orders, which is the opposite of what is needed.",
        "C": "Correct: left anti returns only rows from Orders that have no matching CustomerID in Customers.",
        "D": "Inner returns only orders that do match a customer, excluding the rows you need."
      },
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Transform and load the data – merge and append queries; Power Query join kinds"
    },
    {
      "stem": "A company wants a Power BI semantic model that queries the source at report time instead of importing data, so the source data is never copied into the model. Which TWO data sources can be used with DirectQuery for this purpose? Choose TWO.",
      "options": [
        "Azure SQL Database",
        "An Excel workbook stored in OneDrive for Business",
        "Azure Synapse Analytics dedicated SQL pool",
        "CSV files stored in a SharePoint Online folder"
      ],
      "answer": "AC",
      "explanation": "DirectQuery sends queries to the source each time a visual is rendered, so the source must be a system that can answer queries, typically a relational database or analytical engine. Azure SQL Database and Azure Synapse Analytics both support DirectQuery. File-based sources such as Excel workbooks and CSV files have no query engine and can only be imported.",
      "rationales": {
        "A": "Correct: Azure SQL Database supports DirectQuery connections.",
        "B": "Excel workbooks are file sources and support Import only, not DirectQuery.",
        "C": "Correct: Azure Synapse Analytics dedicated SQL pools support DirectQuery connections.",
        "D": "CSV files are flat files with no query engine, so they can only be imported."
      },
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Get or connect to data – choose between DirectQuery and Import; Microsoft Learn: DirectQuery in Power BI"
    },
    {
      "stem": "You import a Date table into a Power BI model and want to use Mark as date table so that DAX time intelligence functions work reliably. Power BI validates the column you select as the date column. Which TWO conditions must that column meet? Choose TWO.",
      "options": [
        "It must use the Text data type in yyyy-mm-dd format",
        "It must contain unique values",
        "It must contain no blank values",
        "It must contain only dates that appear in the fact table"
      ],
      "answer": "BC",
      "explanation": "When you mark a table as a date table, Power BI validates that the chosen column is of a date or date/time type, contains unique values, and has no blanks; it should also be contiguous with no missing dates. Uniqueness and completeness let time intelligence functions such as TOTALYTD and SAMEPERIODLASTYEAR shift and accumulate periods correctly. Restricting the table to dates that occur in the fact table would create gaps and break this.",
      "rationales": {
        "A": "The date column must be a Date or Date/Time data type, not Text.",
        "B": "Correct: each date must appear only once in the date column.",
        "C": "Correct: the date column cannot contain blank values.",
        "D": "A date table should cover a complete, contiguous range, not only dates with transactions."
      },
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Design and implement a data model – create a common date table; Microsoft Learn: Set and use date tables"
    },
    {
      "stem": "A Sales table has OrderDate and ShipDate columns. Both are related to Date[Date]. The relationship on OrderDate is active and the relationship on ShipDate is inactive. You need a measure that totals Sales[Amount] by ship date while keeping the existing relationships unchanged. Which DAX function should you use as a filter argument of CALCULATE?",
      "options": [
        "CROSSFILTER",
        "RELATED",
        "LOOKUPVALUE",
        "USERELATIONSHIP"
      ],
      "answer": "D",
      "explanation": "Only one relationship between two tables can be active, which is common with role-playing dimensions like a Date table used for order and ship dates. USERELATIONSHIP, used as a CALCULATE modifier, activates the specified inactive relationship for that calculation only, so the Date filter flows through ShipDate instead of OrderDate. The model's relationships remain unchanged for all other measures.",
      "rationales": {
        "A": "CROSSFILTER changes the filter direction of a relationship; it does not activate an inactive one.",
        "B": "RELATED fetches a value from the one side of an active relationship in row context.",
        "C": "LOOKUPVALUE returns a single value matching criteria; it does not change which relationship filters.",
        "D": "Correct: USERELATIONSHIP activates the inactive ShipDate relationship within CALCULATE."
      },
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Design and implement a data model – implement role-playing dimensions; DAX USERELATIONSHIP"
    },
    {
      "stem": "A Customer table has a one-to-many relationship to a Sales table on CustomerKey. You add a calculated column to the Customer table with the expression Total Sales = SUM(Sales[Amount]). Every row shows the same value, which is the total of all sales. You need each row to show the total sales for that customer only. What should you change?",
      "options": [
        "Wrap the expression in CALCULATE: CALCULATE(SUM(Sales[Amount]))",
        "Replace the expression with SUMX(Sales, Sales[Amount])",
        "Replace the expression with RELATED(Sales[Amount])",
        "Set the relationship's cross-filter direction to Both"
      ],
      "answer": "A",
      "explanation": "A calculated column is evaluated in a row context, but a row context does not filter other tables, so SUM sees the whole Sales table. CALCULATE performs context transition: it converts the current row of Customer into an equivalent filter context, which then propagates through the relationship to Sales. As a result each row sums only that customer's sales.",
      "rationales": {
        "A": "Correct: CALCULATE triggers context transition, turning the current Customer row into a filter on Sales.",
        "B": "SUMX over Sales without a filter context still iterates every Sales row, returning the grand total.",
        "C": "RELATED works from the many side to the one side; Customer is the one side, so this fails.",
        "D": "Cross-filter direction controls filter propagation, but row context creates no filter to propagate."
      },
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "hard",
      "source": "PL-300 skills measured: Create model calculations by using DAX – use CALCULATE to manipulate filters; DAX row context and context transition"
    },
    {
      "stem": "Your organization's fiscal year runs from July 1 to June 30. The model contains a measure named [Total Sales] and a Date table marked as a date table. You need a measure that returns fiscal year-to-date sales. Which DAX expression should you use?",
      "options": [
        "CALCULATE([Total Sales], DATESYTD('Date'[Date]))",
        "TOTALYTD([Total Sales], 'Date'[Date], \"6/30\")",
        "CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))",
        "TOTALYTD([Total Sales], 'Date'[Date], \"7/1\")"
      ],
      "answer": "B",
      "explanation": "TOTALYTD accumulates a measure from the start of the year to the last date in the current filter context. Its optional year_end_date argument specifies the last day of the year, so \"6/30\" makes each year run July 1 to June 30. Without that argument, year-to-date functions assume a calendar year ending December 31.",
      "rationales": {
        "A": "DATESYTD without a year-end argument assumes the year ends December 31, giving calendar YTD.",
        "B": "Correct: the year_end_date \"6/30\" makes the year-to-date total restart every July 1.",
        "C": "SAMEPERIODLASTYEAR shifts the current period back one year; it does not accumulate year-to-date.",
        "D": "The argument is the year's end date, so \"7/1\" would make the fiscal year end on July 1."
      },
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Create model calculations by using DAX – implement time intelligence measures; DAX TOTALYTD"
    },
    {
      "stem": "You are writing a DAX measure for profit margin as [Profit] divided by [Revenue]. For some products, [Revenue] is zero, and you want the measure to return BLANK instead of an error or infinity in those cases, with the least code. Which DAX function should you use?",
      "options": [
        "IFERROR",
        "ISBLANK",
        "DIVIDE",
        "COALESCE"
      ],
      "answer": "C",
      "explanation": "DIVIDE(numerator, denominator, [alternateresult]) performs safe division: when the denominator is zero or blank it returns BLANK, or the alternate result if one is supplied. This avoids writing IF tests around the / operator and is the recommended pattern for ratio measures. It is also generally more efficient than catching errors after they occur.",
      "rationales": {
        "A": "IFERROR catches errors after they occur and is less efficient; dividing by zero with / may return infinity, not an error.",
        "B": "ISBLANK only tests whether a value is blank; it does not perform division.",
        "C": "Correct: DIVIDE returns BLANK (or an alternate result) when the denominator is zero.",
        "D": "COALESCE returns the first non-blank argument; it does not guard against division by zero."
      },
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "easy",
      "source": "PL-300 skills measured: Create model calculations by using DAX – create single aggregation measures; DAX DIVIDE"
    },
    {
      "stem": "An Import mode Power BI model has grown too large. It includes a Sales table with a TransactionDateTime column stored to the second, although reports only analyze sales by day. The model already has a dedicated Date table, and the Auto date/time option is turned on. Which TWO actions will reduce the model size? Choose TWO.",
      "options": [
        "Convert existing measures into calculated columns",
        "Turn off the Auto date/time option for the file",
        "Set all relationships to a Both cross-filter direction",
        "Remove the time portion so the column stores only the date"
      ],
      "answer": "BD",
      "explanation": "VertiPaq compresses columns by their distinct values, so cardinality is a major driver of model size. Removing the time from a datetime column cuts its distinct values from potentially millions to a few thousand. Auto date/time creates a hidden date table for every date column, which is unnecessary when a dedicated Date table exists, so turning it off removes those tables.",
      "rationales": {
        "A": "Calculated columns are stored in the model, while measures are not, so this increases size.",
        "B": "Correct: turning off Auto date/time removes the hidden date tables created for each date column.",
        "C": "Cross-filter direction affects filter behavior and performance, not the amount of stored data.",
        "D": "Correct: storing only the date sharply reduces the column's cardinality and improves compression."
      },
      "topic": "Model the data",
      "subtopic": "Optimize model performance",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Optimize model performance – reduce granularity and remove unnecessary data; Microsoft Learn: Data reduction techniques for Import modeling"
    },
    {
      "stem": "A finance manager wants a visual that starts with last year's net income, shows how each category of revenue and expense increased or decreased it, and ends with this year's net income. Which Power BI visual is designed for this?",
      "options": [
        "Funnel chart",
        "Ribbon chart",
        "Scatter chart",
        "Waterfall chart"
      ],
      "answer": "D",
      "explanation": "A waterfall chart shows a running total as values are added or subtracted, with increases and decreases shown as floating columns between a starting value and an ending total. This makes it ideal for explaining how individual components bridge one figure to another, such as a net income walk. The other visuals show stages, rank changes or correlations instead.",
      "rationales": {
        "A": "A funnel chart shows values through sequential stages, such as a sales pipeline.",
        "B": "A ribbon chart shows how category rankings change over time.",
        "C": "A scatter chart shows the relationship between two numeric measures.",
        "D": "Correct: a waterfall chart shows how positive and negative changes build from a start to an end value."
      },
      "topic": "Visualize and analyze the data",
      "subtopic": "Create reports",
      "difficulty": "easy",
      "source": "PL-300 skills measured: Create reports – select an appropriate visual; Microsoft Learn: Waterfall charts in Power BI"
    },
    {
      "stem": "A Power BI report has a summary page showing sales by product. Users want to right-click a product in any visual on the summary page and open a separate page that shows detailed information filtered to only that product. What should you configure?",
      "options": [
        "A drillthrough page that uses the Product field as a drillthrough field",
        "A bookmark on the detail page that a button on the summary page opens",
        "A report page tooltip that uses the Product field as a tooltip field",
        "Synchronized slicers for Product on the summary and detail pages"
      ],
      "answer": "A",
      "explanation": "Drillthrough lets you build a target page and add a field to its drillthrough well. Any visual on other pages that uses that field then offers a Drill through option on right-click, opening the target page filtered to the selected value. This gives focused detail without cluttering the summary page.",
      "rationales": {
        "A": "Correct: a drillthrough page opens from a right-click and is filtered to the selected product.",
        "B": "A bookmark captures a fixed state; it does not filter the target page to the product that was clicked.",
        "C": "A tooltip page appears on hover over a data point; it does not navigate to a separate page.",
        "D": "Synced slicers share selections across pages but require users to pick values in a slicer, not right-click."
      },
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Enhance reports for usability and storytelling – configure navigation and drillthrough; Microsoft Learn: Drillthrough in Power BI"
    },
    {
      "stem": "A report page contains a bar chart of sales by region and a card that shows total company sales. When a user selects a bar, the card is filtered to that region. You need the card to keep showing total company sales when a bar is selected, while other visuals on the page are still filtered. What should you do?",
      "options": [
        "Add a page-level filter that includes all regions",
        "Hide the card in the Selection pane while the bar is selected",
        "Use Edit interactions on the bar chart and set the card to None",
        "Set the bar chart's cross-filter direction to Both in the model"
      ],
      "answer": "C",
      "explanation": "By default, selecting a data point in one visual cross-filters or cross-highlights the other visuals on the page. Edit interactions, on the Format ribbon, lets you choose for each target visual whether a source visual filters it, highlights it, or has no effect. Setting the card to None stops the bar chart from filtering only that card, leaving other interactions intact.",
      "rationales": {
        "A": "A page-level filter applies to the whole page and does not stop selections in the bar chart from filtering the card.",
        "B": "Hiding the card removes it from view instead of keeping the total visible.",
        "C": "Correct: Edit interactions with None stops the bar chart from filtering the card only.",
        "D": "Cross-filter direction is a relationship setting in the model, not a visual interaction setting."
      },
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Enhance reports for usability and storytelling – configure interactions between visuals"
    },
    {
      "stem": "A subscription company has a customer table with a Churned column (Yes or No) and attributes such as contract type, tenure, region and support tickets raised. Analysts want a visual that automatically ranks which attributes most increase the likelihood that Churned is Yes. Which Power BI visual should they use?",
      "options": [
        "Ribbon chart",
        "Key influencers",
        "Smart narrative",
        "Q&A"
      ],
      "answer": "B",
      "explanation": "The Key influencers visual uses machine learning built into Power BI to analyze which factors drive a chosen outcome, whether a categorical value such as Churned = Yes or a numeric metric. It ranks the factors and shows how much each one changes the likelihood of the outcome, and it can also identify top segments. This makes it the standard choice for answering why a result occurs.",
      "rationales": {
        "A": "A ribbon chart shows category ranking changes over time and does not analyze drivers.",
        "B": "Correct: Key influencers ranks the factors that most affect the likelihood of an outcome such as churn.",
        "C": "Smart narrative writes a text summary of visuals but does not rank drivers of an outcome.",
        "D": "The Q&A visual answers natural-language questions but does not run driver analysis."
      },
      "topic": "Visualize and analyze the data",
      "subtopic": "Identify patterns and trends",
      "difficulty": "easy",
      "source": "PL-300 skills measured: Identify patterns and trends – use AI visuals; Microsoft Learn: Key influencers visualizations"
    },
    {
      "stem": "A report page has slicers for Year and Region and two charts placed on top of each other. You create two bookmarks, each showing one chart and hiding the other, and add buttons to switch between them. When users click a button, their current Year and Region slicer selections are reset to the values that existed when the bookmark was created. You need the buttons to switch charts without changing the slicer selections. What should you do?",
      "options": [
        "Clear the Data option on both bookmarks",
        "Clear the Display option on both bookmarks",
        "Clear the Current page option on both bookmarks",
        "Group both charts in the Selection pane"
      ],
      "answer": "A",
      "explanation": "A bookmark can capture three kinds of state: Data (filters, slicers and sort order), Display (visibility, spotlight and focus mode) and Current page. When Data is selected, applying the bookmark restores the saved filter and slicer state, which overwrites users' selections. Clearing Data while keeping Display lets the bookmark toggle chart visibility and leaves the current slicer selections untouched.",
      "rationales": {
        "A": "Correct: clearing Data stops the bookmark from restoring saved filter and slicer states.",
        "B": "Display captures visual visibility, which the bookmarks need in order to show or hide the charts.",
        "C": "Current page controls page navigation; clearing it does not stop slicers from being reset.",
        "D": "Grouping visuals helps manage visibility but does not change what state the bookmarks capture."
      },
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "hard",
      "source": "PL-300 skills measured: Enhance reports for usability and storytelling – configure bookmarks; Microsoft Learn: Create report bookmarks in Power BI"
    },
    {
      "stem": "A report developer must be able to publish new reports to a Power BI workspace and edit or delete existing content in it. The developer must not be able to add other people to the workspace. Which workspace role should you assign, following the principle of least privilege?",
      "options": [
        "Viewer",
        "Admin",
        "Member",
        "Contributor"
      ],
      "answer": "D",
      "explanation": "Power BI workspace roles are cumulative: Viewer, Contributor, Member and Admin. Contributor can create, edit, publish and delete content in the workspace but cannot add users or change permissions. Member adds the ability to add other users and share content, and Admin can also manage all roles and delete the workspace.",
      "rationales": {
        "A": "Viewer can only view and interact with content, not publish or edit it.",
        "B": "Admin has full control, including managing all users, which exceeds the requirement.",
        "C": "Member can add users to the workspace, which the developer must not be able to do.",
        "D": "Correct: Contributor can publish, edit and delete content but cannot add users to the workspace."
      },
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Secure and govern Power BI items – assign workspace roles; Microsoft Learn: Roles in workspaces in Power BI"
    },
    {
      "stem": "You publish a semantic model that has a row-level security role named SalesRegion, and in the Power BI service you add a user to that role. The user has the Member role in the workspace that contains the model. When the user opens the report, they see data for all regions. You need the RLS role to restrict what the user sees. What should you do?",
      "options": [
        "Republish the model after testing the role with View as in Power BI Desktop",
        "Change the user's workspace role to Viewer",
        "Add the user to the SalesRegion role through a Microsoft Entra security group",
        "Apply a Highly Confidential sensitivity label to the report"
      ],
      "answer": "B",
      "explanation": "Row-level security filters data only for users with read-only access to the semantic model, such as workspace Viewers or users the content is shared with. Workspace Admins, Members and Contributors have edit permissions on the model, so RLS is not applied to them and they see all data. Changing the user to Viewer, or sharing the content through an app instead, makes the RLS role take effect.",
      "rationales": {
        "A": "Testing with View as only checks the role in Desktop; RLS still won't apply to a workspace Member.",
        "B": "Correct: RLS applies to Viewers but not to Admins, Members or Contributors, who can edit the model.",
        "C": "Mapping through a group gives the same result, because the user's Member role still bypasses RLS.",
        "D": "Sensitivity labels classify and protect content but do not filter rows within a model."
      },
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "hard",
      "source": "PL-300 skills measured: Secure and govern Power BI items – implement row-level security roles; Microsoft Learn: Row-level security with Power BI"
    },
    {
      "stem": "You publish a Power BI report whose semantic model uses Import mode to load data from a SQL Server database hosted in your company's on-premises data center. You need to configure scheduled refresh for the semantic model in the Power BI service. What must be in place for the refresh to succeed?",
      "options": [
        "A Power BI app that includes the report",
        "A deployment pipeline for the workspace",
        "An on-premises data gateway configured for the data source",
        "An incremental refresh policy on the largest table"
      ],
      "answer": "C",
      "explanation": "The Power BI service runs in the cloud and cannot reach a server inside a private network by itself. An on-premises data gateway, installed on a machine that can reach the SQL Server, securely relays refresh queries between the service and the source. Once the data source is added to the gateway and mapped to the semantic model, scheduled refresh can run.",
      "rationales": {
        "A": "Apps distribute content to users; they do not give the service network access to on-premises data.",
        "B": "Deployment pipelines move content between development, test and production stages; they do not enable refresh.",
        "C": "Correct: a gateway lets the cloud service reach the on-premises SQL Server during refresh.",
        "D": "Incremental refresh reduces how much data is refreshed but still requires a connection to the source."
      },
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "easy",
      "source": "PL-300 skills measured: Create and manage workspaces and assets – identify when a gateway is required; configure scheduled refresh"
    }
  ]
}
```
