```json
{
  "format": "domcq/1",
  "exam": "pl-300",
  "set": "PL-300: Microsoft Power BI Data Analyst practice – Core skills mix",
  "questions": [
    {
      "stem": "You are building a Power BI report on an Azure SQL Database table that contains several billion rows. Report users must always see the data as it exists in the database at the moment they interact with the report, and the data must not be copied into the Power BI semantic model. Which storage mode should you use for the table?",
      "options": [
        "Import",
        "DirectQuery",
        "Dual",
        "Import with incremental refresh"
      ],
      "answer": "B",
      "explanation": "DirectQuery leaves the data in the source and sends a query to the database each time a visual is rendered or a user interacts with the report, so results reflect the current state of the source and no copy is stored in the model. Import and incremental refresh both load a cached copy that is only as current as the last refresh. Dual tables also hold an imported copy so they can act as Import when that is more efficient.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Get or connect to data – choose between DirectQuery and Import; Microsoft Learn: Storage mode in Power BI Desktop"
    },
    {
      "stem": "A Power BI Desktop file contains 12 queries that connect to a SQL Server instance named SQL-DEV. You will need to switch all 12 queries between SQL-DEV and SQL-PROD repeatedly. The switch must be made by changing one value in one place, and that value must also be changeable in the semantic model settings in the Power BI service after you publish. What should you do?",
      "options": [
        "Add a custom column that holds the server name to each query",
        "Use Data source settings to change the source each time you switch",
        "Create a query group named Server and move all queries into it",
        "Create a text parameter for the server name and use it in each Source step"
      ],
      "answer": "D",
      "explanation": "A Power Query parameter stores a single value that any number of queries can reference, so updating the parameter repoints every query that uses it in the Source step. Parameters are also exposed in the semantic model settings in the Power BI service, where they can be changed without reopening Power BI Desktop. Query groups only organise queries, and changing data source settings or adding columns does not give you one reusable value.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Get or connect to data – create and modify parameters; Microsoft Learn: Using parameters in Power Query"
    },
    {
      "stem": "In Power Query Editor, you turn on Column quality and Column distribution for a query that returns 2 million rows. The CustomerID column shows 0% errors and 0% empty values, but after loading the data you find rows with blank CustomerID values. You need the profiling statistics to be calculated across all rows of the query. What should you do?",
      "options": [
        "Change the status bar setting to Column profiling based on entire data set",
        "Turn on Column profile on the View ribbon",
        "Turn off Allow data preview to download in the background",
        "Add a Keep Top Rows step that keeps 2,000,000 rows"
      ],
      "answer": "A",
      "explanation": "By default, Power Query calculates column quality, distribution and profile statistics on only the first 1,000 rows of the preview, so problems further down the data can be missed. Switching the status bar option from Column profiling based on top 1000 rows to Column profiling based on entire data set makes the statistics reflect every row. Turning on Column profile adds another view but still uses the same sample.",
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Profile and clean the data – evaluate data, including data statistics and column properties; Microsoft Learn: Data profiling tools"
    },
    {
      "stem": "In Power Query Editor, you need to see how many distinct values and how many unique values the ProductCode column contains. Which TWO data profiling features display these counts? Choose TWO.",
      "options": [
        "Column quality",
        "Column distribution",
        "Column profile",
        "Query dependencies"
      ],
      "answer": "BC",
      "explanation": "Column distribution shows a small histogram under each column header together with the count of distinct values (different values) and unique values (values that appear exactly once). Column profile opens a pane for the selected column whose column statistics include the distinct and unique counts alongside measures such as min, max and empty count. Column quality reports only the percentages of valid, error and empty values, and Query dependencies shows how queries reference one another.",
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Profile and clean the data – evaluate data, including data statistics and column properties; Microsoft Learn: Data profiling tools"
    },
    {
      "stem": "A Power Query query has the columns Region, Jan, Feb, Mar and so on through Dec, where each month column holds a sales amount. You need to reshape the query into the columns Region, Attribute and Value, with one row per region and month. Any new month columns added to the source later must be reshaped automatically without editing the query. What should you do?",
      "options": [
        "Select the month columns and choose Pivot Column",
        "Transpose the table and then choose Use First Row as Headers",
        "Select the Region column and choose Unpivot Other Columns",
        "Select the month columns and choose Unpivot Only Selected Columns"
      ],
      "answer": "C",
      "explanation": "Unpivot Other Columns turns every column except the ones you selected into attribute-value pairs, so the step only lists Region and automatically includes any month columns that appear later. Unpivot Only Selected Columns hard-codes the names of the selected columns, so a new column would be left out. Pivoting does the opposite reshaping, and transposing swaps rows and columns rather than producing attribute-value pairs.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Transform and load the data – pivot, unpivot, and transpose data; Microsoft Learn: Unpivot columns (Power Query)"
    },
    {
      "stem": "In Power Query, you have a Customers query and an Orders query, and both contain a CustomerID column. You need a query that returns only the customers who have never placed an order. You start Merge Queries with Customers as the first (top) table and Orders as the second (bottom) table, matching on CustomerID. Which join kind should you select?",
      "options": [
        "Left anti",
        "Right anti",
        "Left outer",
        "Inner"
      ],
      "answer": "A",
      "explanation": "A left anti join returns only the rows from the first table that have no match in the second table, which here means customers with no orders. A right anti join would return orders with no matching customer instead. Left outer keeps all customers, including those with orders, and an inner join keeps only customers who do have orders.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Transform and load the data – merge and append queries; Microsoft Learn: Merge queries overview (join kinds)"
    },
    {
      "stem": "A Sales table has an OrderDate column and a ShipDate column, and both are related to the 'Date'[Date] column. The relationship on OrderDate is active and the relationship on ShipDate is inactive. The model contains a measure named [Total Sales]. You need a measure that shows sales by ship date when it is used with fields from the 'Date' table in a visual. Which DAX expression should you use?",
      "options": [
        "CALCULATE([Total Sales], CROSSFILTER(Sales[ShipDate], 'Date'[Date], BOTH))",
        "CALCULATE([Total Sales], ALL('Date'[Date]))",
        "SUMX(RELATEDTABLE('Date'), [Total Sales])",
        "CALCULATE([Total Sales], USERELATIONSHIP(Sales[ShipDate], 'Date'[Date]))"
      ],
      "answer": "D",
      "explanation": "Only one relationship between two tables can be active, and USERELATIONSHIP used as a CALCULATE modifier activates an existing inactive relationship for that calculation only. Filters from the 'Date' table then flow through ShipDate instead of OrderDate. CROSSFILTER changes the filter direction of a relationship but does not make an inactive relationship active, and ALL simply removes the date filter.",
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Design and implement a data model – implement role-playing dimensions; DAX reference: USERELATIONSHIP"
    },
    {
      "stem": "You import a table named Calendar to use with DAX time intelligence functions. You select Mark as date table and choose the Calendar[Date] column, which uses the Date data type. Which THREE conditions must the Calendar[Date] column meet for Power BI to accept it as the date column? Choose THREE.",
      "options": [
        "It contains unique values",
        "It contains no blank values",
        "The Calendar table has an active relationship to a fact table",
        "It contains contiguous dates with no missing days"
      ],
      "answer": "ABD",
      "explanation": "When you mark a table as a date table, Power BI validates that the chosen date column has unique values, has no blank values, and contains a contiguous range of dates from start to end. These rules let time intelligence functions shift and accumulate periods reliably. A relationship to a fact table is not checked when marking the table; you normally create one afterwards so the date table can filter your data.",
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Design and implement a data model – create a common date table; Microsoft Learn: Set and use date tables in Power BI Desktop"
    },
    {
      "stem": "A report page has a slicer on Product[Category] and a table visual that shows Product[Category] and the measure [Total Sales]. You need a measure that shows each category's share of the total for only the categories currently selected in the slicer, so that the percentages for the visible rows add up to 100%. Which DAX expression should you use?",
      "options": [
        "DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(Product[Category])))",
        "DIVIDE([Total Sales], CALCULATE([Total Sales], ALLSELECTED(Product[Category])))",
        "DIVIDE([Total Sales], CALCULATE([Total Sales], REMOVEFILTERS(Product[Category])))",
        "DIVIDE([Total Sales], CALCULATE([Total Sales], VALUES(Product[Category])))"
      ],
      "answer": "B",
      "explanation": "ALLSELECTED removes the filter that comes from the current row of the visual but keeps filters coming from outside the visual, such as the slicer, so the denominator is the total of the selected categories. ALL and REMOVEFILTERS remove every filter on Category, including the slicer, so the denominator would be the total of all categories. VALUES keeps the current row's category, so every row would show 100%.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Create model calculations by using DAX – use CALCULATE to manipulate filters; DAX reference: ALLSELECTED"
    },
    {
      "stem": "A model contains a 'Date' table that is marked as a date table and related to a Sales table, and a measure named [Total Sales]. You need a measure that returns sales for the equivalent period one year earlier for whatever period is shown in a visual, such as a day, month, quarter or year. Which DAX expression should you use?",
      "options": [
        "CALCULATE([Total Sales], DATESYTD('Date'[Date]))",
        "CALCULATE([Total Sales], PREVIOUSMONTH('Date'[Date]))",
        "CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))",
        "CALCULATE([Total Sales], NEXTYEAR('Date'[Date]))"
      ],
      "answer": "C",
      "explanation": "SAMEPERIODLASTYEAR takes the dates in the current filter context and returns the same set of dates shifted back one year, so it works at any granularity from day to year. DATESYTD returns the dates from the start of the year to the last date in context, which gives a year-to-date total for the current year. PREVIOUSMONTH and NEXTYEAR return fixed whole periods that do not match the period shown.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Create model calculations by using DAX – implement time intelligence measures; DAX reference: SAMEPERIODLASTYEAR"
    },
    {
      "stem": "A Sales table has one row per order line with a Quantity column and a UnitPrice column, but no column for the line amount. You need a measure named Revenue that returns the correct total of quantity multiplied by unit price at every level of a visual, including the grand total, without adding a calculated column. Which DAX expression should you use?",
      "options": [
        "SUMX(Sales, Sales[Quantity] * Sales[UnitPrice])",
        "SUM(Sales[Quantity]) * SUM(Sales[UnitPrice])",
        "SUM(Sales[Quantity]) * AVERAGE(Sales[UnitPrice])",
        "COUNTROWS(Sales) * AVERAGE(Sales[UnitPrice])"
      ],
      "answer": "A",
      "explanation": "SUMX is an iterator: it evaluates Quantity multiplied by UnitPrice row by row in the Sales table and then sums the results, which is the true revenue in any filter context. Multiplying two aggregates, such as a sum of quantities by a sum or average of prices, gives wrong results whenever more than one row is aggregated because prices and quantities vary between rows. The row-level calculation has to happen before aggregation.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Create model calculations by using DAX – create single aggregation measures; DAX reference: SUMX"
    },
    {
      "stem": "An Import-mode semantic model in Power BI Desktop is larger than it needs to be. Which TWO actions reduce the size of the model? Choose TWO.",
      "options": [
        "Remove columns that no report, measure or relationship uses",
        "Set the cross-filter direction of all relationships to Both",
        "Turn off the Auto date/time option for the file",
        "Replace existing measures with equivalent calculated columns"
      ],
      "answer": "AC",
      "explanation": "In Import mode every column is stored and compressed in the model, so removing unused columns directly reduces memory and file size. Auto date/time creates a hidden date table for each date column in the model, and turning it off removes those tables. Changing the filter direction does not reduce stored data, and calculated columns are materialised and stored, whereas measures are calculated at query time and take no storage.",
      "topic": "Model the data",
      "subtopic": "Optimize model performance",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Optimize model performance – improve performance by identifying and removing unnecessary rows and columns; Microsoft Learn: Data reduction techniques for Import modeling"
    },
    {
      "stem": "You need a visual that shows how a starting annual profit figure is increased and decreased by individual items, such as additional revenue, operating costs and tax, to arrive at the final net profit. Each item must appear as a floating column that starts where the previous one ended. Which visual should you use?",
      "options": [
        "Funnel chart",
        "Ribbon chart",
        "Scatter chart",
        "Waterfall chart"
      ],
      "answer": "D",
      "explanation": "A waterfall chart shows a running total as values are added or subtracted, drawing each increase or decrease as a floating column and usually showing the final total at the end. It is designed for explaining how an initial value changes into a final value. Funnel charts show stages of a sequential process, ribbon charts show rank changes over time, and scatter charts show the relationship between two numeric values.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Create reports",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Create reports – select an appropriate visual; Microsoft Learn: Waterfall charts in Power BI"
    },
    {
      "stem": "A Power BI report has a page named Customer Details. Users on other pages of the report must be able to right-click a customer name in any visual and go to the Customer Details page, filtered to that customer. What should you do on the Customer Details page?",
      "options": [
        "Add a bookmark that captures the current filters on the page",
        "Add Customer[CustomerName] to the Drill through field well",
        "Add a page navigator button that targets the Customer Details page",
        "Add Customer[CustomerName] to the page-level filters well"
      ],
      "answer": "B",
      "explanation": "Adding a field to the Drill through well makes the page a drillthrough target, so any visual on another page that uses that field offers a Drill through option on right-click. Power BI then opens the target page with a filter for the value the user selected. A page-level filter, bookmark or page navigator does not pass the selected customer from the source visual.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Enhance reports for usability and storytelling – configure drillthrough navigation; Microsoft Learn: Set up drillthrough in Power BI reports"
    },
    {
      "stem": "A report page has a bar chart and a table placed in the same position. You create two bookmarks, each of which shows one visual and hides the other by using the Selection pane, and two buttons that apply the bookmarks. During testing, you find that selecting a button also resets the slicer selections users have made on the page. You need users' slicer selections to be kept when they switch between the visuals. What should you do?",
      "options": [
        "Clear the Display option on each bookmark",
        "Clear the Current page option on each bookmark",
        "Clear the Data option on each bookmark",
        "Turn on persistent filters in the report settings"
      ],
      "answer": "C",
      "explanation": "A bookmark's Data option captures filters, slicer selections, sort order and drill state, and its Display option captures visual visibility and spotlight or focus mode. Clearing Data means applying the bookmark changes only which visual is visible and leaves the user's slicer selections alone. Clearing Display would stop the bookmarks from switching the visuals, and persistent filters only keep a user's filters between sessions.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Enhance reports for usability and storytelling – configure bookmarks; Microsoft Learn: Create report bookmarks in Power BI"
    },
    {
      "stem": "A Customer table has a Churned column with the values Yes and No, and columns for contract type, tenure in months, region and monthly charge. You need a visual that analyzes these columns and ranks the factors that most increase the likelihood that Churned is Yes. Which visual should you use?",
      "options": [
        "Key influencers",
        "Decomposition tree",
        "Q&A",
        "Smart narrative"
      ],
      "answer": "A",
      "explanation": "The key influencers visual uses machine learning to analyze the fields you provide as explanatory factors and ranks which ones drive a chosen outcome, such as Churned being Yes, showing how much each factor changes the likelihood. A decomposition tree lets users break a measure down across dimensions but does not rank drivers of a categorical outcome. Q&A answers natural-language questions, and smart narrative writes text summaries of visuals.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Identify patterns and trends",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Identify patterns and trends – use AI visuals; Microsoft Learn: Create key influencers visualizations"
    },
    {
      "stem": "A scatter chart shows one point per customer, with total sales on the x-axis and number of orders on the y-axis. You need Power BI to automatically group customers with similar values into segments and create a field for those segments that you can use in other visuals. What should you do?",
      "options": [
        "Add a trend line from the Analytics pane",
        "Add Customer[Region] to the Play axis",
        "Apply a Top N filter on the Customer field",
        "Select Automatically find clusters from the visual's More options"
      ],
      "answer": "D",
      "explanation": "Clustering on a scatter chart uses an algorithm to find groups of similar data points and adds a new cluster field to the model, which colours the points and can be reused in other visuals. A trend line shows the overall direction of the relationship but does not segment points. The Play axis animates the chart over a field, and a Top N filter only limits which customers appear.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Identify patterns and trends",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Identify patterns and trends – use grouping, binning, and clustering; Microsoft Learn: Automatic clustering in Power BI"
    },
    {
      "stem": "A data analyst must be able to publish, update and delete reports and semantic models in a Power BI workspace. With default settings, the analyst must not be able to add or remove workspace users or publish or update the workspace app. Which workspace role should you assign to follow the principle of least privilege?",
      "options": [
        "Admin",
        "Member",
        "Contributor",
        "Viewer"
      ],
      "answer": "C",
      "explanation": "The Contributor role can create, edit and delete content in a workspace but cannot manage workspace access, and by default it cannot publish or update the workspace app. Members can also add users with lower permissions and publish apps, and Admins have full control including deleting the workspace. Viewers can only view content, so they cannot publish reports.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Secure and govern Power BI items – assign workspace roles; Microsoft Learn: Roles in workspaces in Power BI"
    },
    {
      "stem": "You publish a report whose semantic model imports data from a SQL Server database hosted on a server in your company's on-premises data center. You need to configure scheduled refresh for the semantic model in the Power BI service. What must be in place?",
      "options": [
        "A Power BI Premium capacity assigned to the workspace",
        "An on-premises data gateway with a data source configured for the server",
        "The storage mode of the tables changed from Import to DirectQuery",
        "Power BI Desktop running on a computer that can reach the server"
      ],
      "answer": "B",
      "explanation": "The Power BI service runs in the cloud and cannot reach a database inside a private network on its own, so an on-premises data gateway is needed to broker the connection for refresh. The semantic model must then be mapped to a gateway connection for that SQL Server source. Scheduled refresh does not require Premium capacity, DirectQuery to an on-premises source still needs a gateway, and Power BI Desktop plays no part in service refresh.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Create and manage workspaces and assets – identify when a gateway is required; Microsoft Learn: What is an on-premises data gateway?"
    },
    {
      "stem": "You define a row-level security (RLS) role named Regional that filters a Region table, publish the semantic model, and add a security group of sales managers to the role in the Power BI service. The sales managers have the Member role in the workspace that contains the report. When they open the report in the workspace, they see data for all regions. The managers must continue to view the report, but RLS must be enforced for them. What should you do?",
      "options": [
        "Change the managers' workspace role to Viewer",
        "Change the managers' workspace role to Contributor",
        "Turn on Apply security filter in both directions for the Region relationship",
        "Add each manager to the role individually instead of by security group"
      ],
      "answer": "A",
      "explanation": "RLS filters data only for users who have read access to the semantic model, such as workspace Viewers or users given access through an app or sharing. Workspace Admins, Members and Contributors have edit permission on the semantic model, so RLS does not apply to them even if they are role members. Moving the managers to the Viewer role keeps their access to the report while making the Regional role filter their data.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Secure and govern Power BI items – implement row-level security roles; Microsoft Learn: Row-level security (RLS) with Power BI"
    }
  ]
}
```
