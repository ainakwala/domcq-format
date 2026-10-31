```json
{
  "format": "domcq/1",
  "exam": "pl-300",
  "set": "PL-300: Microsoft Power BI Data Analyst practice – Mixed skills review",
  "questions": [
    {
      "stem": "A company stores 2 TB of sales transactions in an Azure SQL Database. Report users must see changes made in the source within minutes, and the data is too large to import into the model. Which storage mode should you use for the Sales table?",
      "options": [
        "Import",
        "DirectQuery",
        "Dual",
        "Live connection"
      ],
      "answer": "B",
      "explanation": "DirectQuery leaves the data in the source and sends queries to it each time a visual renders, so results reflect the current source data and no data is copied into the model. Import would copy the data and only update it on refresh, and its size would be a problem here. Dual behaves as Import or DirectQuery depending on the query and still stores an imported copy, while a live connection is used for Power BI semantic models and Analysis Services, not for an Azure SQL Database.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Get or connect to data – choose between DirectQuery and Import; Microsoft Learn: Semantic model modes in the Power BI service"
    },
    {
      "stem": "You build a report in Power BI Desktop whose queries connect to a SQL Server database on a development server. After testing, the report must connect to the same database on the production server. You want to be able to switch servers in future by changing one value, without rewriting the queries. What should you do?",
      "options": [
        "Create a what-if parameter and reference it in a DAX measure",
        "Create a field parameter that lists both server names",
        "Duplicate each query and change the server name in the copies",
        "Create a query parameter for the server name and use it in the Source steps"
      ],
      "answer": "D",
      "explanation": "Power Query parameters are values that queries can reference, such as a server or database name in the Source step. Once the queries use the parameter, changing its current value (in Power Query or in the semantic model settings in the service) redirects every query that uses it. What-if parameters and field parameters are model features for DAX and report interactivity and cannot change a data source connection.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Get or connect to data – create and modify parameters; Microsoft Learn: Using parameters in Power Query"
    },
    {
      "stem": "In Power Query Editor you turn on Column quality and Column distribution. The CustomerID column shows 0% empty, but you know that the table contains rows with blank CustomerID values much further down. What should you do so that the column profile reflects every row in the table?",
      "options": [
        "Change the status bar setting to column profiling based on the entire data set",
        "Turn on Column profile in the Data Preview group of the View ribbon",
        "Remove the top 1,000 rows from the query and refresh the preview",
        "Change the data type of the CustomerID column from Whole Number to Text"
      ],
      "answer": "A",
      "explanation": "By default, Power Query calculates column profiling statistics from the top 1,000 rows of the preview, so problems that appear only later in the data can be missed. Selecting the option in the status bar to base column profiling on the entire data set makes Column quality, Column distribution and Column profile scan all rows. Turning on Column profile alone still uses the same 1,000-row sample.",
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Profile and clean the data – evaluate data, including statistics and column properties; Microsoft Learn: Data profiling tools in Power Query"
    },
    {
      "stem": "In Power Query, you change the data type of a Quantity column to Whole Number. A few rows now show Error because the source contains text values such as n/a in that column. You must keep every row and show null in place of each error. What should you do?",
      "options": [
        "Select the Quantity column and use Remove Errors",
        "Select the Quantity column and use Fill Down",
        "Select the Quantity column and use Replace Errors with null",
        "Select the whole table and use Remove Blank Rows"
      ],
      "answer": "C",
      "explanation": "Replace Errors substitutes a value of your choice, such as null, for every error in the selected column while keeping the row and its other values. Remove Errors deletes the whole row that contains an error, which would lose data. Fill Down and Remove Blank Rows act on nulls and empty rows, not on error values.",
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Profile and clean the data – resolve inconsistencies, unexpected or null values, and data quality issues; Microsoft Learn: Dealing with errors in Power Query"
    },
    {
      "stem": "A Power Query table has the columns Product, Region, Jan, Feb and Mar. Each month a new month column is added to the source file. You need the output to have the columns Product, Region, Attribute and Value, and the query must keep working when new month columns appear, without being edited. What should you do?",
      "options": [
        "Transpose the table and then use the first row as headers",
        "Select Product and Region and choose Unpivot Other Columns",
        "Select Jan, Feb and Mar and choose Unpivot Only Selected Columns",
        "Select the Region column and choose Pivot Column"
      ],
      "answer": "B",
      "explanation": "Unpivot Other Columns records only the columns to keep (Product and Region) in the step, so every other column, including month columns added later, is turned into Attribute and Value rows. Unpivot Only Selected Columns records the specific month names, so a new column such as Apr would be left out until the query is edited. Pivot and Transpose reshape the table in other ways and do not produce the attribute-value layout.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Transform and load the data – pivot, unpivot, and transpose data; Microsoft Learn: Unpivot columns (Power Query)"
    },
    {
      "stem": "In Power Query you have a Customers query and an Orders query that share a CustomerID column. You need a query that returns only the customers who have never placed an order. You start a Merge Queries operation with Customers as the first table and Orders as the second table, matched on CustomerID. Which join kind should you select?",
      "options": [
        "Inner",
        "Left outer",
        "Right anti",
        "Left anti"
      ],
      "answer": "D",
      "explanation": "A left anti join returns only the rows from the first (left) table that have no matching row in the second (right) table, which here means customers without any orders. An inner join returns only matched customers, and a left outer join returns all customers whether or not they have orders. A right anti join would return orders whose CustomerID has no matching customer, which answers a different question.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Transform and load the data – merge and append queries; Microsoft Learn: Left anti join (Power Query)"
    },
    {
      "stem": "A Sales table has OrderDate and ShipDate columns, and both are related to the Date table. The relationship that uses OrderDate is active and the relationship that uses ShipDate is inactive. You need a measure that returns total sales by ship date when it is used with Date table columns in a visual. Which DAX expression should you use?",
      "options": [
        "CALCULATE(SUM(Sales[Amount]), USERELATIONSHIP(Sales[ShipDate], 'Date'[Date]))",
        "CALCULATE(SUM(Sales[Amount]), CROSSFILTER(Sales[ShipDate], 'Date'[Date], Both))",
        "CALCULATE(SUM(Sales[Amount]), Sales[ShipDate] = Sales[OrderDate])",
        "CALCULATE(SUM(Sales[Amount]), ALL(Sales[OrderDate]))"
      ],
      "answer": "A",
      "explanation": "Only one relationship between two tables can be active, so filters from the Date table flow through OrderDate by default. USERELATIONSHIP, used as a CALCULATE modifier, activates the inactive relationship for that calculation only, so Date filters apply to ShipDate instead. CROSSFILTER changes the filter direction of a relationship but does not activate an inactive one, and the other expressions never make Date filter ShipDate.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Design and implement a data model – implement role-playing dimensions; DAX reference: USERELATIONSHIP function"
    },
    {
      "stem": "You plan to mark a table as a date table in Power BI Desktop and select its Date column as the date column. Which TWO requirements must that column meet? Choose TWO.",
      "options": [
        "It must contain unique values",
        "It must use the Whole Number data type",
        "It must not contain blank values",
        "It must contain only dates from the current year"
      ],
      "answer": "AC",
      "explanation": "When you mark a date table, Power BI validates the chosen column: it must be of the Date or Date/Time data type, contain unique values, contain no blanks and have no missing dates in its range. A Whole Number key column is not accepted as the date column, and the table can span as many years as the data needs. Marking the table lets DAX time intelligence functions work correctly against it.",
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Design and implement a data model – create a common date table; Microsoft Learn: Set and use date tables in Power BI Desktop"
    },
    {
      "stem": "A model has a Sales table related to a Product table, and an existing measure named [Sales]. You need a measure that returns each product's sales as a percentage of the sales for all products. The denominator must ignore every filter on the Product table, including slicer selections on the report page. Which DAX expression should you use?",
      "options": [
        "DIVIDE([Sales], CALCULATE([Sales], ALLSELECTED(Product)))",
        "DIVIDE([Sales], CALCULATE([Sales], FILTER(Product, NOT ISBLANK(Product[ProductID]))))",
        "DIVIDE([Sales], CALCULATE([Sales], ALL(Product)))",
        "DIVIDE([Sales], SUMX(Product, [Sales]))"
      ],
      "answer": "C",
      "explanation": "ALL(Product), used as a CALCULATE filter argument, removes every filter on the Product table, so the denominator is the sales for all products whatever the visual or slicers select. ALLSELECTED keeps filters coming from outside the visual, such as slicers, so it would return a percentage of the selected products only. FILTER over Product and SUMX over Product both respect the current filter context, so for a single product they return that product's own sales and the result would be 100%.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Create model calculations by using DAX – use CALCULATE to manipulate filters; DAX reference: ALL and ALLSELECTED functions"
    },
    {
      "stem": "A Product dimension table has one row for each ProductID, and a Sales fact table has many rows for each ProductID. Following star schema guidance, how should you configure the relationship between the two tables?",
      "options": [
        "Many-to-many cardinality with a cross-filter direction of Both",
        "One-to-one cardinality with a cross-filter direction of Both",
        "One-to-many cardinality with a single direction in which Sales filters Product",
        "One-to-many cardinality with a single direction in which Product filters Sales"
      ],
      "answer": "D",
      "explanation": "In a star schema, a dimension table with a unique key relates to a fact table on the many side, so the relationship is one-to-many from Product to Sales. The recommended single cross-filter direction lets filters on the dimension (such as a product category slicer) flow to the fact table. Bidirectional or many-to-many relationships are only needed for special cases and can cause ambiguity and slower queries.",
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Design and implement a data model – configure table and column properties, define relationship cardinality and cross-filter direction; Microsoft Learn: Star schema guidance"
    },
    {
      "stem": "An Import model is approaching its size limit. The Sales table includes an OrderDateTime column that stores the date and time to the second, and several columns that no report visual or measure uses. Which TWO actions will reduce the size of the model? Choose TWO.",
      "options": [
        "Set every relationship to a cross-filter direction of Both",
        "Remove the columns that no visual or measure uses",
        "Replace the existing measures with equivalent calculated columns",
        "Split OrderDateTime into separate date and time columns"
      ],
      "answer": "BD",
      "explanation": "The VertiPaq engine compresses each column, and the storage needed grows with the number of columns and with each column's cardinality (number of distinct values). Removing unused columns removes their storage entirely, and splitting a date-time column into a date column and a time column replaces one very high-cardinality column with two low-cardinality ones that compress far better. Calculated columns are stored in the model and add size, while measures take no storage, and changing filter direction does not affect size.",
      "topic": "Model the data",
      "subtopic": "Optimize model performance",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Optimize model performance – improve performance by reducing granularity and removing unnecessary rows and columns; Microsoft Learn: Data reduction techniques for Import modeling"
    },
    {
      "stem": "In the Sales table, you create a calculated column by using the DAX expression Total = SUM(Sales[Amount]). What value does the Total column contain on each row after the model is refreshed?",
      "options": [
        "The Amount value of the current row",
        "The total of Amount for the whole Sales table, repeated on every row",
        "An error, because SUM cannot be used in a calculated column",
        "A running total of Amount up to and including the current row"
      ],
      "answer": "B",
      "explanation": "A calculated column is evaluated in a row context, but a row context does not filter tables, and an aggregation such as SUM works over the filter context, which here is empty. SUM(Sales[Amount]) therefore adds up the whole column on every row. To restrict the calculation to the current row you would refer to Sales[Amount] directly, or wrap the expression in CALCULATE, which turns the row context into a filter context (context transition).",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Create model calculations by using DAX – create calculated columns; Microsoft Learn: Row context and filter context in DAX"
    },
    {
      "stem": "A report has a Sales Summary page and a Product Details page. Users must be able to right-click a product in a visual on the Sales Summary page and go to the Product Details page, filtered to the product they selected. What should you configure?",
      "options": [
        "Add the Product Name field to the Drillthrough filters on the Product Details page",
        "Add a bookmark on the Product Details page that captures the current product filter",
        "Set the Product Details page as a report page tooltip for the Product Name field",
        "Sync a Product Name slicer between the Sales Summary and Product Details pages"
      ],
      "answer": "A",
      "explanation": "Drillthrough is configured on the target page by adding one or more fields to its Drillthrough filters well. Any visual on other pages that uses that field then offers a Drill through option on right-click, and the target page opens filtered to the selected value. Bookmarks capture a fixed state, tooltips appear on hover rather than opening a page, and synced slicers share a selection but do not navigate.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Enhance reports for usability and storytelling – configure drillthrough navigation; Microsoft Learn: Set up drillthrough in Power BI reports"
    },
    {
      "stem": "A report page has a clustered bar chart that shows sales by region and a card that shows total company sales. When users select a region in the bar chart, the card must continue to show the total for all regions, while the other visuals on the page continue to be filtered by the selection. What should you do?",
      "options": [
        "Add the Region field to the visual-level filters of the card",
        "Lock the card in the Selection pane so that it cannot change",
        "Select the bar chart, turn on Edit interactions, and set the card to None",
        "Turn off cross-highlighting in the General format settings of the card"
      ],
      "answer": "C",
      "explanation": "Edit interactions controls how a selection in one visual affects each other visual on the page. With the bar chart selected as the source, setting the interaction on the card to None stops the card from being filtered by that chart, while the other visuals keep their filter or highlight interaction. Visual-level filters and Selection pane locking do not change cross-filtering between visuals.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Enhance reports for usability and storytelling – configure interactions between visuals; Microsoft Learn: Change how visuals interact in a Power BI report"
    },
    {
      "stem": "On one report page, a chart and a table occupy the same area. Users must be able to click a button to switch between the chart and the table, so that only one of them is visible at a time. What should you use?",
      "options": [
        "Two report page tooltips, one created for each of the visuals",
        "A drillthrough button that targets a separate page holding the table",
        "Visual-level filters that return no data for the hidden visual",
        "Bookmarks that capture visual visibility, triggered by buttons"
      ],
      "answer": "D",
      "explanation": "A bookmark can save which visuals are shown or hidden in the Selection pane, so you create one bookmark with the chart visible and the table hidden, and another the other way round. Buttons whose action is set to Bookmark then let users switch between the two states on the same page. Tooltips, drillthrough and filters do not toggle the visibility of visuals in place.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Enhance reports for usability and storytelling – configure bookmarks, the Selection pane and navigation buttons; Microsoft Learn: Create report bookmarks in Power BI"
    },
    {
      "stem": "A customer satisfaction dataset contains a Rating column and attributes such as region, contract type and support tier. A manager wants to know which attributes most increase the likelihood of a low rating, ranked by the size of their effect. Which Power BI visual should you use?",
      "options": [
        "Key influencers",
        "Decomposition tree",
        "Smart narrative",
        "Q&A"
      ],
      "answer": "A",
      "explanation": "The Key influencers visual analyzes a chosen outcome, such as Rating being low, against the fields you provide and ranks the factors by how much they change the likelihood of that outcome. The Decomposition tree breaks a measure down across dimensions for exploration, Smart narrative writes a text summary of visuals, and Q&A answers natural-language questions. None of those ranks drivers of an outcome in the same way.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Identify patterns and trends",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Identify patterns and trends – use AI visuals; Microsoft Learn: Create key influencers visualizations"
    },
    {
      "stem": "You want to add a forecast with a confidence interval to a visual of monthly sales by using the Analytics pane in Power BI Desktop. Which visual configuration supports the Forecast option?",
      "options": [
        "A clustered column chart with the month on the X-axis",
        "A line chart with month names stored as text on the X-axis",
        "A line chart with a continuous X-axis based on a date field",
        "A line and stacked column chart with a categorical date axis"
      ],
      "answer": "C",
      "explanation": "Forecasting in the Analytics pane is available for line charts that have a continuous X-axis, typically a date field, so the algorithm can project values at regular intervals beyond the last data point. A text axis is categorical and gives no time sequence to extend, and column or combo charts do not offer the Forecast option. Forecasting also requires a single measure on the chart without a legend field.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Identify patterns and trends",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Identify patterns and trends – use the Analytics pane, including forecasting; Microsoft Learn: Use the Analytics pane in Power BI Desktop"
    },
    {
      "stem": "A report developer must be able to publish, update and delete reports and semantic models in a Power BI workspace. The developer must not be able to add or remove workspace members. Following the principle of least privilege, which workspace role should you assign?",
      "options": [
        "Viewer",
        "Contributor",
        "Member",
        "Admin"
      ],
      "answer": "B",
      "explanation": "The Contributor role can create, edit, publish and delete content in a workspace but cannot manage workspace access. Member adds the ability to add other users with Member or lower roles and to publish and update the workspace app, which goes beyond the requirement, and Admin has full control including deleting the workspace. Viewer can only view content and cannot publish.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Secure and govern Power BI items – assign workspace roles; Microsoft Learn: Roles in workspaces in Power BI"
    },
    {
      "stem": "You publish a semantic model that has a row-level security (RLS) role named Region, which filters the Sales table. On the semantic model's Security page in the Power BI service, you add a sales manager to the Region role. The sales manager also has the Contributor role in the workspace that contains the model and still sees data for every region. What is the most likely cause?",
      "options": [
        "RLS role members must be assigned in Power BI Desktop before publishing",
        "RLS filters apply only when users open the reports through a workspace app",
        "The role must first be tested by using View as before its filters take effect",
        "RLS does not restrict users who have the Admin, Member or Contributor role"
      ],
      "answer": "D",
      "explanation": "Row-level security restricts data only for users with Viewer permissions on the workspace, or users who receive access through sharing or an app. Workspace Admins, Members and Contributors have edit permissions on the semantic model, so RLS filters are not applied to them even if they are added to a role. To enforce RLS for the manager, give them the Viewer role or share the content without edit rights.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Secure and govern Power BI items – implement row-level security roles; Microsoft Learn: Row-level security (RLS) with Power BI"
    },
    {
      "stem": "A semantic model in the Power BI service imports data from a SQL Server database that is hosted in the company's on-premises data center. You need to configure scheduled refresh for the semantic model. What must be in place?",
      "options": [
        "An on-premises data gateway with a connection to the SQL Server",
        "A Premium Per User license assigned to every report viewer",
        "A DirectQuery connection to the SQL Server from Power BI Desktop",
        "A deployment pipeline that includes the semantic model's workspace"
      ],
      "answer": "A",
      "explanation": "The Power BI service runs in the cloud and cannot reach data sources inside a private network on its own. An on-premises data gateway installed in that network, with a data source connection to the server, securely relays the refresh queries so imported data can be updated on a schedule. Licensing, storage mode in Desktop and deployment pipelines do not provide that network path.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Create and manage workspaces and assets – identify when a gateway is required, configure scheduled refresh; Microsoft Learn: What is an on-premises data gateway?"
    }
  ]
}
```
