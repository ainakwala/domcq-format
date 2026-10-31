```json
{
  "format": "domcq/1",
  "exam": "pl-300",
  "set": "PL-300: Microsoft Power BI Data Analyst practice – Core Skills Mix",
  "questions": [
    {
      "stem": "A report must show data from an Azure SQL Database table that is updated continuously. The data must not be imported or cached in the Power BI semantic model, and every report interaction must send a query to the database. Which storage mode should you configure for the table in Power BI Desktop?",
      "options": [
        "Import",
        "DirectQuery",
        "Dual",
        "Direct Lake"
      ],
      "answer": "B",
      "explanation": "DirectQuery stores only metadata in the model; each visual sends queries to the source at run time, so results reflect the current data without a refresh. Import and Dual both hold a cached copy of the data in the model. Choosing a storage mode is a trade-off between the speed of cached data and the freshness of querying the source.",
      "rationales": {
        "A": "Import loads a copy of the data into the model, which is exactly what the requirement forbids.",
        "B": "DirectQuery keeps no data in the model and queries the database for every interaction.",
        "C": "Dual caches the data in the model and can answer queries from that cache, so it is not cache-free.",
        "D": "Direct Lake reads Delta tables in Microsoft Fabric OneLake, not an Azure SQL Database table."
      },
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Get or connect to data – choose between DirectQuery and Import; Microsoft Learn: Storage mode in Power BI Desktop"
    },
    {
      "stem": "In Power Query Editor, you enable Column quality, Column distribution and Column profile from the View ribbon. You need the statistics shown to be calculated from every row of the query rather than from a sample. What should you do?",
      "options": [
        "Enable the Show whitespace option on the View ribbon",
        "Turn on the Monospaced option on the View ribbon",
        "Change the status bar setting to Column profiling based on entire data set",
        "Clear the Enable parallel loading of tables option in Options"
      ],
      "answer": "C",
      "explanation": "By default, Power Query profiles only the first 1,000 rows of a query, so quality and distribution figures can miss problems further down. Selecting Column profiling based on entire data set in the status bar makes the profiling tools evaluate all rows. This matters when you use profiling to find errors, empty values or outliers before loading.",
      "rationales": {
        "A": "Show whitespace only displays spaces and line breaks in cell values; it does not change the profiling scope.",
        "B": "Monospaced changes the font used to display data previews and has no effect on profiling.",
        "C": "This switches profiling from the first 1,000 rows to the entire data set.",
        "D": "Parallel loading controls how tables load into the model, not how column profiles are calculated."
      },
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Profile and clean the data – evaluate data, including statistics and column properties; Microsoft Learn: Data profiling tools"
    },
    {
      "stem": "A Power Query query returns the columns Product, Jan, Feb, Mar and so on to Dec, with one column of sales values per month. You must reshape it into the columns Product, Attribute and Value. Month columns that are added to the source later must be reshaped automatically without editing the query. What should you do?",
      "options": [
        "Select the Product column and choose Unpivot Other Columns",
        "Select the month columns and choose Unpivot Only Selected Columns",
        "Select the month columns and choose Pivot Column",
        "Select the Product column and choose Transpose"
      ],
      "answer": "A",
      "explanation": "Unpivot Other Columns turns every column except the selected ones into attribute–value pairs, and the generated step names only the columns to keep. Any new month column added later is therefore unpivoted automatically. Unpivot Only Selected Columns hard-codes the list of columns, so new ones would be left out.",
      "rationales": {
        "A": "This step lists only Product, so all other columns, including future month columns, are unpivoted.",
        "B": "This step names each month column explicitly, so months added later would not be unpivoted.",
        "C": "Pivot Column does the opposite, turning row values into new columns.",
        "D": "Transpose swaps all rows and columns, which does not produce the Product, Attribute, Value layout."
      },
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Transform and load the data – pivot, unpivot, and transpose data; Microsoft Learn: Unpivot columns (Power Query)"
    },
    {
      "stem": "You have two Power Query queries: Orders, with the columns OrderID, CustomerID and Amount, and Customers, with the columns CustomerID and Name. You start Merge Queries as New with Orders as the first table and Customers as the second table, matched on CustomerID. The result must contain only the Orders rows whose CustomerID has no matching row in Customers. Which join kind should you select?",
      "options": [
        "Left outer",
        "Right anti",
        "Inner",
        "Left anti"
      ],
      "answer": "D",
      "explanation": "An anti join returns rows from one table that have no match in the other. Left anti keeps only rows from the first (left) table, here Orders, that have no matching key in the second table. Knowing which table is left and which is right is essential, because Right anti would return unmatched Customers instead.",
      "rationales": {
        "A": "Left outer returns all Orders rows, both matched and unmatched, not only the unmatched ones.",
        "B": "Right anti returns Customers rows that have no matching order, which is the wrong table.",
        "C": "Inner returns only the rows that do match in both tables, the opposite of what is needed.",
        "D": "Left anti returns only Orders rows with no matching CustomerID in Customers."
      },
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Transform and load the data – merge and append queries; Microsoft Learn: Merge queries overview (join kinds)"
    },
    {
      "stem": "A Power Query query connects to a SQL Server database and has several applied steps. You want to confirm that a specific step is folded back to the source by viewing the SQL statement that Power Query generates up to that step. What should you do in Power Query Editor?",
      "options": [
        "Open Query Dependencies from the View ribbon",
        "Right-click the step and select View Native Query",
        "Open the Advanced Editor for the query",
        "Enable Column profile from the View ribbon"
      ],
      "answer": "B",
      "explanation": "When steps fold, Power Query translates them into a single query in the source's language. View Native Query on a step shows that generated statement; if the option is unavailable, the step is usually not folding. Keeping steps foldable pushes work to the source and makes refresh faster.",
      "rationales": {
        "A": "Query Dependencies shows how queries reference each other, not the SQL sent to the source.",
        "B": "View Native Query displays the statement generated for a step that folds to the source.",
        "C": "The Advanced Editor shows the M code of the query, not the native SQL it translates to.",
        "D": "Column profile shows statistics about a column's values and says nothing about folding."
      },
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Prepare the data; Microsoft Learn: Query folding in Power Query – View Native Query"
    },
    {
      "stem": "You create a Power Query query named StagingSales that cleans raw sales data. Two other queries reference StagingSales. StagingSales must not appear as a table in the data model, and the two referencing queries must keep working without duplicating its steps. What should you do?",
      "options": [
        "Clear the Enable load option for the StagingSales query",
        "Clear the Include in report refresh option for the StagingSales query",
        "Hide the StagingSales table in Model view after it loads",
        "Convert the StagingSales query into a custom function"
      ],
      "answer": "A",
      "explanation": "Clearing Enable load keeps a query in Power Query as an intermediate step without loading its result into the model. Queries that reference it still evaluate it during refresh. This is the standard pattern for staging queries, and it keeps the model smaller and cleaner.",
      "rationales": {
        "A": "Disabling load keeps the query available to other queries while keeping it out of the model.",
        "B": "This stops the query being refreshed, but it is still loaded as a table in the model.",
        "C": "Hiding only removes the table from report view; it still loads and uses memory in the model.",
        "D": "A function would need to be invoked and would break the existing references to the query."
      },
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Transform and load the data – configure data loading for queries; Microsoft Learn: Power Query Enable load"
    },
    {
      "stem": "A Sales table has the columns OrderDate, ShipDate and Amount. Both date columns are related to 'Date'[Date]. The relationship on OrderDate is active and the relationship on ShipDate is inactive. Without changing the model, you need a measure that returns the total of Sales[Amount] by ship date. Which DAX expression should you use?",
      "options": [
        "CALCULATE(SUM(Sales[Amount]), CROSSFILTER(Sales[ShipDate], 'Date'[Date], Both))",
        "CALCULATE(SUM(Sales[Amount]), RELATED('Date'[Date]))",
        "CALCULATE(SUM(Sales[Amount]), USERELATIONSHIP(Sales[ShipDate], 'Date'[Date]))",
        "CALCULATE(SUM(Sales[Amount]), FILTER(Sales, NOT ISBLANK(Sales[ShipDate])))"
      ],
      "answer": "C",
      "explanation": "Only one relationship between two tables can be active at a time; additional ones are inactive and do not propagate filters. USERELATIONSHIP, used as a CALCULATE modifier, activates the specified inactive relationship for that calculation only. This is the usual way to handle a role-playing date dimension.",
      "rationales": {
        "A": "CROSSFILTER changes the filter direction of a relationship; it does not make an inactive relationship active.",
        "B": "RELATED retrieves a value in row context and cannot be used as a filter argument here.",
        "C": "USERELATIONSHIP activates the ShipDate relationship for the duration of this calculation.",
        "D": "This still filters through the active OrderDate relationship, so totals stay by order date."
      },
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Design and implement a data model – implement role-playing dimensions; DAX reference: USERELATIONSHIP"
    },
    {
      "stem": "A model has a measure named [Total Sales] and a Product table. In a matrix by product, you need a measure that returns total sales for all products on every row, ignoring every filter on the Product table, including filters from slicers, so that you can calculate each product's percentage of the total. Which expression returns the required value?",
      "options": [
        "CALCULATE([Total Sales], ALLSELECTED('Product'))",
        "CALCULATE([Total Sales], VALUES('Product'))",
        "CALCULATE([Total Sales], FILTER('Product', TRUE()))",
        "CALCULATE([Total Sales], ALL('Product'))"
      ],
      "answer": "D",
      "explanation": "ALL used as a CALCULATE filter argument removes all filters from the Product table, whether they come from the matrix rows, slicers or filters. The measure therefore returns the grand total for every product row and can be used as a denominator. ALLSELECTED is different because it keeps filters from outside the visual, such as slicers.",
      "rationales": {
        "A": "ALLSELECTED removes the row filters of the visual but keeps slicer filters, which the stem forbids.",
        "B": "VALUES returns the currently visible products, so the existing product filter still applies.",
        "C": "FILTER iterates only the visible Product rows, so the current filter is kept.",
        "D": "ALL removes every filter on Product, giving the total for all products on each row."
      },
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Create model calculations by using DAX – use CALCULATE to manipulate filters; DAX reference: ALL, ALLSELECTED"
    },
    {
      "stem": "A matrix shows [Total Sales] by year and month. The model has a table named 'Date' that is marked as a date table. You need a measure that shows, on each month row, the sales for the same month in the previous year. Which expression should you use?",
      "options": [
        "CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))",
        "CALCULATE([Total Sales], PREVIOUSYEAR('Date'[Date]))",
        "CALCULATE([Total Sales], DATESYTD('Date'[Date]))",
        "CALCULATE([Total Sales], PREVIOUSMONTH('Date'[Date]))"
      ],
      "answer": "A",
      "explanation": "SAMEPERIODLASTYEAR returns the dates in the current filter context shifted back one year. On a March 2025 row it returns March 2024, so the measure gives that month's prior-year sales. Time intelligence functions like this depend on a proper date table with contiguous dates.",
      "rationales": {
        "A": "SAMEPERIODLASTYEAR shifts the current month's dates back exactly one year.",
        "B": "PREVIOUSYEAR returns all dates of the previous year, giving the full prior-year total on each row.",
        "C": "DATESYTD returns year-to-date dates in the current year, not the prior year's month.",
        "D": "PREVIOUSMONTH returns the month before the current one, not the same month last year."
      },
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Create model calculations by using DAX – implement time intelligence measures; DAX reference: SAMEPERIODLASTYEAR"
    },
    {
      "stem": "A Customer table has a one-to-many relationship to a Sales table, with Customer on the one side. You add a calculated column to Customer with the formula Customer Sales = SUM(Sales[Amount]). Every row shows the same value, which is the total of all sales. You need each row to show only that customer's sales. Which formula should you use for the column?",
      "options": [
        "Customer Sales = SUMX(Sales, Sales[Amount])",
        "Customer Sales = CALCULATE(SUM(Sales[Amount]))",
        "Customer Sales = SUM(RELATED(Sales[Amount]))",
        "Customer Sales = SUMX(ALL(Sales), Sales[Amount])"
      ],
      "answer": "B",
      "explanation": "A calculated column is evaluated in a row context, and a row context does not filter other tables on its own. Wrapping the aggregation in CALCULATE performs context transition: the current Customer row becomes a filter that flows through the relationship to Sales. The SUM then covers only that customer's rows.",
      "rationales": {
        "A": "SUMX over Sales iterates the whole table because the row context is not turned into a filter.",
        "B": "CALCULATE turns the current customer row into a filter context, so only that customer's sales are summed.",
        "C": "RELATED works from the many side to the one side and cannot fetch many Sales rows from Customer.",
        "D": "ALL(Sales) explicitly ignores all filters, so every row still shows the grand total."
      },
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Create model calculations by using DAX – create calculated columns; Microsoft Learn: DAX row context and context transition"
    },
    {
      "stem": "An imported Power BI semantic model is larger than expected and refreshes slowly. You need to reduce the size of the model without removing any information that reports use. Which two actions should you take? Choose TWO.",
      "options": [
        "Change every one-to-many relationship to a cross-filter direction of Both",
        "Disable the Auto date/time option for the file",
        "Replace measures with equivalent calculated columns",
        "Split a DateTime column into separate Date and Time columns"
      ],
      "answer": "BD",
      "explanation": "Auto date/time creates a hidden date table for every date column, which adds memory you rarely need when you have a proper date table. The VertiPaq engine compresses columns better when they have fewer distinct values, so splitting a DateTime into a Date and a Time column greatly reduces cardinality. Measures take no storage, while calculated columns are stored in the model.",
      "rationales": {
        "A": "Filter direction does not reduce storage and bidirectional filtering can hurt performance.",
        "B": "Disabling Auto date/time removes the hidden date tables created for each date column.",
        "C": "Calculated columns are stored and add size, whereas measures are calculated at query time.",
        "D": "Two low-cardinality columns compress far better than one high-cardinality DateTime column."
      },
      "topic": "Model the data",
      "subtopic": "Optimize model performance",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Optimize model performance – reduce granularity and remove unnecessary data; Microsoft Learn: Data reduction techniques for Import modeling"
    },
    {
      "stem": "You plan to use Mark as date table on a table named Calendar in Power BI Desktop and must select a column for the date. Which requirement must the selected column meet?",
      "options": [
        "It must be the only column of the Date data type in the table",
        "It must be created by using the CALENDARAUTO function",
        "It must contain unique values and no blank values",
        "It must be related to every fact table in the model"
      ],
      "answer": "C",
      "explanation": "Power BI validates the chosen column before it allows a table to be marked as a date table. The column must be of the Date or Date/Time type, contain unique values with no blanks, and have contiguous dates. Marking the table lets time intelligence functions rely on it.",
      "rationales": {
        "A": "A date table can contain other date columns; only the marked column is validated.",
        "B": "The table can come from any source, such as Power Query, a database or any DAX function.",
        "C": "Unique, non-blank values are a validation requirement for the marked date column.",
        "D": "Relationships are not required to mark a table as a date table."
      },
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Design and implement a data model – create a common date table; Microsoft Learn: Set and use date tables in Power BI Desktop"
    },
    {
      "stem": "You need a visual that shows how a starting account balance is increased and decreased by individual categories of income and expense to reach an ending balance. Which visual should you use?",
      "options": [
        "Ribbon chart",
        "Funnel chart",
        "Scatter chart",
        "Waterfall chart"
      ],
      "answer": "D",
      "explanation": "A waterfall chart shows a running total as values are added or subtracted, with each category as a floating column. Increases and decreases are colored differently, and the final column shows the resulting total. This makes it the standard choice for explaining how a start value becomes an end value.",
      "rationales": {
        "A": "A ribbon chart shows rank changes between categories over time, not a running balance.",
        "B": "A funnel chart shows stages of a sequential process, such as a sales pipeline.",
        "C": "A scatter chart shows the relationship between two numeric measures.",
        "D": "A waterfall chart shows how positive and negative changes build from a start value to an end value."
      },
      "topic": "Visualize and analyze the data",
      "subtopic": "Create reports",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Create reports – select an appropriate visual; Microsoft Learn: Waterfall charts in Power BI"
    },
    {
      "stem": "A report has a page named Customer Details. Users must be able to right-click a customer in a visual on any other page and go to Customer Details filtered to that customer. What should you do?",
      "options": [
        "Add the Customer field to the Drill through section of the Customer Details page",
        "Create a bookmark of the Customer Details page for each customer",
        "Turn on Sync slicers for the Customer field across all pages",
        "Turn on Allow use as tooltip for the Customer Details page"
      ],
      "answer": "A",
      "explanation": "Adding a field to the Drill through section of a target page makes it a drillthrough page. Any visual that uses that field then offers a Drill through option on right-click, passing the selected value as a filter. A Back button is added automatically so users can return to the source page.",
      "rationales": {
        "A": "A drillthrough field makes the page a target that opens filtered to the right-clicked customer.",
        "B": "Bookmarks capture fixed states and cannot respond to whichever customer a user selects.",
        "C": "Sync slicers keeps slicer selections aligned across pages but adds no right-click navigation.",
        "D": "That setting makes the page a report page tooltip shown on hover, not a navigation target."
      },
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Enhance reports for usability and storytelling – configure drillthrough navigation; Microsoft Learn: Set up drillthrough in Power BI reports"
    },
    {
      "stem": "On a report page, selecting a bar in a column chart filters every other visual, including a card that shows total revenue. The card must keep showing the unfiltered total when a bar is selected, while the other visuals continue to respond. What should you do?",
      "options": [
        "Add a visual-level filter to the card that includes all values",
        "Hide the card in the Selection pane and show it again with a button",
        "Select the column chart, turn on Edit interactions and set the card to None",
        "Turn on Lock objects from the View ribbon"
      ],
      "answer": "C",
      "explanation": "Edit interactions controls how a selection in one visual affects each of the other visuals on the page. With the source visual selected, each target shows Filter, Highlight or None icons. Setting the card to None stops selections in the column chart from affecting it without changing the other visuals.",
      "rationales": {
        "A": "A visual-level filter does not stop cross-filtering from a selection in another visual.",
        "B": "Hiding the card changes its visibility, not how it reacts to selections.",
        "C": "Setting the card's interaction to None stops the column chart from filtering it.",
        "D": "Lock objects prevents moving or resizing visuals and does not change interactions."
      },
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Enhance reports for usability and storytelling – configure interactions between visuals; Microsoft Learn: Change how visuals interact"
    },
    {
      "stem": "You need a visual that analyzes which factors, such as region, product category and delivery time, most affect whether a customer satisfaction rating is Low, and that ranks those factors by their impact. Which visual should you use?",
      "options": [
        "Decomposition tree",
        "Key influencers",
        "Q&A",
        "Smart narrative"
      ],
      "answer": "B",
      "explanation": "The key influencers visual uses machine learning to evaluate the fields you provide and ranks those that most change the likelihood of an outcome, such as a rating being Low. It also shows top segments, which are combinations of factors with a high chance of that outcome. It is designed for driver analysis rather than for slicing totals by hand.",
      "rationales": {
        "A": "A decomposition tree breaks a measure down across dimensions but does not rank factors by impact on an outcome.",
        "B": "Key influencers ranks the factors that most affect a chosen outcome or metric.",
        "C": "The Q&A visual answers natural-language questions and does not perform driver analysis.",
        "D": "Smart narrative writes a text summary of visuals and does not identify influencing factors."
      },
      "topic": "Visualize and analyze the data",
      "subtopic": "Identify patterns and trends",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Identify patterns and trends – use AI visuals; Microsoft Learn: Create key influencers visualizations"
    },
    {
      "stem": "A line chart must let users choose, from a slicer, whether the chart shows Total Sales, Total Profit or Total Units. You want Power BI to generate the slicer and the supporting table for you, without writing a switching measure. What should you create?",
      "options": [
        "A what-if parameter with values from 1 to 3",
        "A bookmark group with one bookmark for each measure",
        "A drillthrough page for each of the three measures",
        "A fields parameter that contains the three measures"
      ],
      "answer": "D",
      "explanation": "A fields parameter, created from Modeling > New parameter > Fields, builds a table that lists chosen measures or columns and can add a slicer to the page. When the parameter is used in a visual, the user's slicer selection decides which field the visual displays. This lets users change measures or dimensions dynamically without custom DAX switching logic.",
      "rationales": {
        "A": "A what-if parameter supplies a numeric value and would still need a measure that switches between measures.",
        "B": "Bookmarks are activated by buttons or the bookmarks pane, not by a slicer selection.",
        "C": "Drillthrough pages navigate to filtered detail pages and do not change a chart's measure.",
        "D": "A fields parameter lets a slicer choose which measure the line chart displays."
      },
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Visualize and analyze the data – use fields parameters; Microsoft Learn: Let report readers use field parameters to change visuals"
    },
    {
      "stem": "In a Power BI workspace, which three workspace roles allow a user to publish, edit and delete content such as reports and semantic models in that workspace? Choose THREE.",
      "options": [
        "Admin",
        "Member",
        "Viewer",
        "Contributor"
      ],
      "answer": "ABD",
      "explanation": "Power BI workspaces have four roles: Admin, Member, Contributor and Viewer. Admin, Member and Contributor can all create, edit and delete content in the workspace; they differ in rights such as managing access and publishing the app. Viewer can only view and interact with content.",
      "rationales": {
        "A": "Admin has full control, including creating, editing and deleting content.",
        "B": "Member can create, edit and delete content and can also add users with lower roles.",
        "C": "Viewer can only view and interact with content and cannot publish or edit it.",
        "D": "Contributor can create, edit and delete content but cannot manage workspace access."
      },
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Secure and govern Power BI items – assign workspace roles; Microsoft Learn: Roles in workspaces in Power BI"
    },
    {
      "stem": "You publish a semantic model that has a row-level security role filtering Sales by region with USERPRINCIPALNAME(). Users added to the role see only their own region, except Maria, who sees all regions. Maria is a member of the role and has the Member role in the workspace that contains the semantic model. You need Maria to see only her region. What should you do?",
      "options": [
        "Add a second role that filters the region by using USERNAME()",
        "Remove Maria from the role and then add her to it again",
        "Change Maria's workspace role to Viewer",
        "Grant Maria the Build permission on the semantic model"
      ],
      "answer": "C",
      "explanation": "Row-level security is enforced only for users who have read access without edit rights, such as workspace Viewers or users who get content through an app or sharing. Workspace Admins, Members and Contributors can edit the semantic model, so RLS does not restrict what they see. Changing Maria to Viewer makes her role's filter apply.",
      "rationales": {
        "A": "The filter function is not the problem; RLS is ignored for her because she has edit rights.",
        "B": "Her role membership already exists, and re-adding her does not change her workspace permissions.",
        "C": "As a Viewer she lacks edit rights, so the RLS role filter is enforced for her.",
        "D": "Build permission adds rights; her Member role still bypasses RLS."
      },
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Secure and govern Power BI items – implement row-level security roles; Microsoft Learn: Row-level security (RLS) with Power BI"
    },
    {
      "stem": "A semantic model imports data from a SQL Server database on your company's on-premises network. After you publish the model to the Power BI service, you must configure scheduled refresh. What must be in place for the refresh to succeed?",
      "options": [
        "An on-premises data gateway with the SQL Server data source configured",
        "A Premium capacity assigned to the workspace that contains the model",
        "A DirectQuery connection set on every table in the model",
        "A Power BI app published from the workspace that contains the model"
      ],
      "answer": "A",
      "explanation": "The Power BI service runs in the cloud and cannot reach a server on a private network directly. An on-premises data gateway installed inside the network relays refresh requests to the data source and returns the data. The data source and its credentials must be configured on the gateway and mapped to the semantic model.",
      "rationales": {
        "A": "A gateway lets the cloud service reach on-premises sources for scheduled refresh.",
        "B": "Scheduled refresh is available on shared capacity; Premium does not give network access.",
        "C": "DirectQuery to an on-premises source also needs a gateway, and it removes the need for refresh.",
        "D": "Publishing an app distributes content to users and has no effect on data refresh."
      },
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Create and manage workspaces and assets – identify when a gateway is required; Microsoft Learn: What is an on-premises data gateway?"
    }
  ]
}
```
