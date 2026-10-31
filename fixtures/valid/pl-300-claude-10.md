```json
{
  "format": "domcq/1",
  "exam": "pl-300",
  "set": "PL-300: Microsoft Power BI Data Analyst practice – Mixed skills set",
  "questions": [
    {
      "stem": "You are building a Power BI report on a SQL Server table that contains about 2 billion rows and is updated every few minutes. Report users must see the latest data each time they interact with the report, and the data must not be copied into the Power BI semantic model. Which storage mode should you use for the table?",
      "options": [
        "Import mode",
        "DirectQuery mode",
        "Dual mode",
        "Import mode with hourly scheduled refresh"
      ],
      "answer": "B",
      "explanation": "DirectQuery leaves the data in the source and sends a query to SQL Server whenever a visual needs data, so results reflect the source at query time and no copy of the rows is stored in the model. Import copies the data into the model and is only as current as the last refresh. Dual mode also caches an imported copy of the table, so it does not meet the requirement that data is not copied.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "easy",
      "source": "PL-300 study guide, Prepare the data: Get or connect to data; Use DirectQuery in Power BI Desktop"
    },
    {
      "stem": "In Power Query Editor, you enable Column quality and Column distribution for a Customers query that returns about 250,000 rows. The Email column shows 0% errors and 0% empty, but after loading the data you find many blank email addresses in the model. What should you do so that the profiling statistics reflect every row in the query?",
      "options": [
        "Enable Column profile on the View tab",
        "Turn on Show whitespace on the View tab",
        "Add a Keep Top Rows step that keeps 250,000 rows",
        "Set the status bar to profile based on the entire data set"
      ],
      "answer": "D",
      "explanation": "By default, Power Query computes column profiling statistics from only the top 1,000 rows, so problems further down the data can be missed. Selecting \"Column profiling based on entire data set\" in the status bar makes Column quality, distribution and profile evaluate all rows. Column profile adds more detailed statistics but still uses the same sampling scope unless you change that setting.",
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "medium",
      "source": "PL-300 study guide, Prepare the data: Profile and clean the data; Using the data profiling tools"
    },
    {
      "stem": "A Power Query query named Budget has a Product column followed by one column per month, such as 2025-01, 2025-02 and 2025-03, with one row per product. You need a table with the columns Product, Attribute and Value, containing one row per product per month. Columns for new months will be added to the source over time, and the query must include them without any change to its steps. What should you do?",
      "options": [
        "Select the Product column, and then select Unpivot Other Columns",
        "Select the Product column, and then select Unpivot Only Selected Columns",
        "Select all the month columns, and then select Pivot Column",
        "Transpose the table, and then select Use First Row as Headers"
      ],
      "answer": "A",
      "explanation": "Unpivot Other Columns generates a Table.UnpivotOtherColumns step that names only the columns to keep (Product), so every other column, including month columns added later, is turned into Attribute and Value rows automatically. Unpivot Only Selected Columns hardcodes the column names it unpivots, so it would not adapt. Pivot Column does the opposite operation, turning row values into columns.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "medium",
      "source": "PL-300 study guide, Prepare the data: Transform and load the data; Unpivot columns"
    },
    {
      "stem": "You have a Power Query query named CountryLookup that is used only as the second table in a merge with the Customers query. CountryLookup must not appear as a table in the Power BI data model, but the merge in Customers must keep working. What should you do?",
      "options": [
        "Delete the CountryLookup query after completing the merge",
        "Hide the CountryLookup table in Model view",
        "Clear Enable load for the CountryLookup query",
        "Clear Include in report refresh for the CountryLookup query"
      ],
      "answer": "C",
      "explanation": "Clearing Enable load keeps the query in Power Query, where other queries can still reference or merge with it, but stops its output from being loaded as a table in the model. Hiding a table only removes it from the report field list; it is still loaded and stored. Deleting the query would break the merge, and Include in report refresh controls refresh, not whether the table exists in the model.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "easy",
      "source": "PL-300 study guide, Prepare the data: Transform and load the data"
    },
    {
      "stem": "In Power Query Editor, you right-click a query named SalesBase and select Reference to create a new query named SalesByRegion. Which TWO statements are true? Choose TWO.",
      "options": [
        "SalesByRegion starts from the output of SalesBase, so later changes to SalesBase steps flow into it",
        "SalesByRegion gets its own copy of every SalesBase step, which you can edit independently",
        "The Query dependencies view shows SalesByRegion as depending on SalesBase",
        "Removing a step from SalesByRegion also removes the matching step from SalesBase"
      ],
      "answer": "AC",
      "explanation": "A referenced query has a single Source step that points to the other query (Source = SalesBase), so it always builds on that query's current output and any change to SalesBase affects SalesByRegion. Because of this link, Query dependencies shows SalesByRegion depending on SalesBase. Copying all the steps into an independent query is what Duplicate does, and the new query's own steps are separate from SalesBase's steps.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "hard",
      "source": "PL-300 study guide, Prepare the data: Transform and load the data"
    },
    {
      "stem": "Your Power BI Desktop file contains 12 queries that connect to the same SQL Server instance. In the future, you must be able to switch all the queries from the development server to the production server by changing a single value. What should you do?",
      "options": [
        "Create a what-if parameter for the server name in Report view",
        "Create a Power Query text parameter for the server name and use it in each Source step",
        "Duplicate each query and change the server name in each duplicate",
        "Set the privacy level of the production data source to Organizational"
      ],
      "answer": "B",
      "explanation": "Power Query parameters are named values that queries can use in place of hardcoded text, such as the server argument of Sql.Database in each Source step. After that, changing the parameter value (in Power BI Desktop, or in the semantic model settings in the service) repoints every query at once. A what-if parameter is a DAX table for report scenarios and cannot change a data source, and privacy levels control how sources may be combined.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "medium",
      "source": "PL-300 study guide, Prepare the data: Get or connect to data; Using parameters"
    },
    {
      "stem": "You import a table named Calendar and plan to use Mark as date table on its Date column, which has the Date data type. Which TWO conditions must the Date column meet? Choose TWO.",
      "options": [
        "Its values must begin on January 1 of a year",
        "It must contain unique values",
        "It must be the first column in the table",
        "It must not contain any blank values"
      ],
      "answer": "BD",
      "explanation": "To mark a table as a date table, the chosen column must be of a date type, contain unique values, contain no blanks and have no missing dates in its range. Power BI validates these rules when you mark the table, and marking it lets DAX time intelligence functions work correctly. There is no requirement on the column's position or on which day the range starts, although covering full years is recommended.",
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "medium",
      "source": "PL-300 study guide, Model the data: Design and implement a data model; Set and use date tables in Power BI Desktop"
    },
    {
      "stem": "Users report that one page of a Power BI report is slow to display. In Power BI Desktop, you need to record how long each visual on the page spends on its DAX query and on rendering, so that you can find the slowest visual. Which feature should you use?",
      "options": [
        "Query diagnostics in Power Query Editor",
        "The Properties pane in Model view",
        "Performance analyzer",
        "View native query in Power Query Editor"
      ],
      "answer": "C",
      "explanation": "Performance analyzer records each visual's activity while you interact with the page and breaks the duration into DAX query, visual display and other time. You can copy a visual's query to investigate a slow measure further. Query diagnostics and View native query relate to Power Query data refresh and query folding, not to how visuals render.",
      "topic": "Model the data",
      "subtopic": "Optimize model performance",
      "difficulty": "easy",
      "source": "PL-300 study guide, Model the data: Optimize model performance; Use Performance Analyzer to examine report element performance"
    },
    {
      "stem": "The Sales table has OrderDate and ShipDate columns. Both are related to 'Date'[Date]: the OrderDate relationship is active and the ShipDate relationship is inactive. You have a measure named [Total Sales]. You need a measure that returns total sales by ship date when columns from the 'Date' table are used in visuals. Which DAX expression should you use?",
      "options": [
        "CALCULATE([Total Sales], USERELATIONSHIP(Sales[ShipDate], 'Date'[Date]))",
        "CALCULATE([Total Sales], CROSSFILTER(Sales[ShipDate], 'Date'[Date], BOTH))",
        "CALCULATE([Total Sales], REMOVEFILTERS(Sales[OrderDate]))",
        "CALCULATE([Total Sales], ALL('Date'), VALUES(Sales[ShipDate]))"
      ],
      "answer": "A",
      "explanation": "USERELATIONSHIP, used as a CALCULATE modifier, activates an existing inactive relationship for that calculation, and the active relationship between the same tables is ignored meanwhile. Filters on 'Date' then reach Sales through ShipDate instead of OrderDate. CROSSFILTER only changes the filter direction of a relationship, and the other two expressions remove or rearrange filters without changing which relationship is used.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 study guide, Model the data: Create model calculations by using DAX; USERELATIONSHIP function (DAX)"
    },
    {
      "stem": "Your organization's fiscal year runs from July 1 to June 30. You have a measure named [Total Sales] and a table named 'Date' that is marked as a date table. You need a measure that returns fiscal year-to-date sales. Which DAX expression should you use?",
      "options": [
        "CALCULATE([Total Sales], DATESYTD('Date'[Date]))",
        "CALCULATE([Total Sales], DATESYTD('Date'[Date], \"7-1\"))",
        "CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))",
        "CALCULATE([Total Sales], DATESYTD('Date'[Date], \"6-30\"))"
      ],
      "answer": "D",
      "explanation": "The optional second argument of DATESYTD is the year-end date, so a fiscal year ending June 30 is specified as \"6-30\". DATESYTD then returns the dates from July 1 up to the last date in the current filter context. Without the argument the year ends on December 31, and \"7-1\" would set the year end to July 1 rather than the start date.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 study guide, Model the data: Create model calculations by using DAX; DATESYTD function (DAX)"
    },
    {
      "stem": "A table visual shows Product[Category] and the measure [Sales]. A slicer on the same page filters Product[Category] to four of the ten categories. You need a measure that shows each category's share of the total for the categories currently shown, so that the visible percentages add up to 100%. Which DAX expression should you use?",
      "options": [
        "DIVIDE([Sales], CALCULATE([Sales], ALL(Product[Category])))",
        "DIVIDE([Sales], CALCULATE([Sales], ALLSELECTED(Product[Category])))",
        "DIVIDE([Sales], CALCULATE([Sales], VALUES(Product[Category])))",
        "DIVIDE([Sales], CALCULATE([Sales], REMOVEFILTERS(Product)))"
      ],
      "answer": "B",
      "explanation": "ALLSELECTED removes the filter that each row of the visual places on Category but keeps filters coming from outside the visual, such as the slicer. The denominator is therefore the total of the four selected categories, and the row percentages sum to 100%. ALL and REMOVEFILTERS also ignore the slicer, giving the total of all ten categories, while VALUES keeps the current row's category and returns 100% on every row.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "hard",
      "source": "PL-300 study guide, Model the data: Create model calculations by using DAX; ALLSELECTED function (DAX)"
    },
    {
      "stem": "The Customer table has a one-to-many relationship to the Sales table on CustomerKey. You add this calculated column to the Customer table: Customer Sales = SUM(Sales[Amount]). Every row shows the same value, the total of all sales. You need each row to show only that customer's sales. Which definition should you use?",
      "options": [
        "Customer Sales = SUMX(Sales, Sales[Amount])",
        "Customer Sales = CALCULATE(SUM(Sales[Amount]), ALL(Customer))",
        "Customer Sales = CALCULATE(SUM(Sales[Amount]))",
        "Customer Sales = RELATED(Sales[Amount])"
      ],
      "answer": "C",
      "explanation": "A calculated column is evaluated with a row context but no filter context, and a row context does not filter other tables through relationships, so SUM sees all of Sales. Wrapping the expression in CALCULATE performs context transition: the current Customer row becomes a filter, which propagates through the relationship to Sales. SUMX over Sales still iterates every sale, adding ALL(Customer) removes the customer filter again, and RELATED only works from the many side towards the one side.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "hard",
      "source": "PL-300 study guide, Model the data: Create model calculations by using DAX; CALCULATE function (DAX)"
    },
    {
      "stem": "You need a visual that shows how total profit moves from last year's value to this year's value, with each intermediate bar showing the increase or decrease contributed by a different region. Which visual should you use?",
      "options": [
        "Waterfall chart",
        "Ribbon chart",
        "Funnel chart",
        "Treemap"
      ],
      "answer": "A",
      "explanation": "A waterfall chart shows a running total as values are added or subtracted, with separate colors for increases and decreases. Using its Breakdown field, it can show how each category, such as each region, contributed to the change between two periods. Ribbon charts show rank changes over time, funnels show stages of a process, and treemaps show part-to-whole proportions.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Create reports",
      "difficulty": "easy",
      "source": "PL-300 study guide, Visualize and analyze the data: Create reports; Waterfall charts in Power BI"
    },
    {
      "stem": "You have a report page named Customer Details. Users must be able to right-click a customer in a visual on any other page of the report and go to Customer Details filtered to that customer. What should you do on the Customer Details page?",
      "options": [
        "Turn on Allow use as tooltip in the page information settings",
        "Add Customer[CustomerName] to the Filters on all pages section",
        "Create a bookmark that captures the current customer selection",
        "Add Customer[CustomerName] to the Drill through field well"
      ],
      "answer": "D",
      "explanation": "Adding a field to the drillthrough well of a target page makes that page a drillthrough destination. Visuals on other pages that use the field then offer Drill through in their right-click menu, and the target page opens filtered to the selected value, with a back button added automatically. Tooltip pages appear on hover, and bookmarks capture a fixed state rather than passing the clicked value.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 study guide, Visualize and analyze the data: Enhance reports for usability and storytelling; Set up drillthrough in Power BI reports"
    },
    {
      "stem": "A report has a Region slicer on its Overview page. You need the slicer to also appear on the Sales and Returns pages, and a selection made in it on any of these pages must apply to all three pages. Which feature should you use?",
      "options": [
        "Edit interactions",
        "Sync slicers",
        "Selection pane",
        "Bookmarks pane"
      ],
      "answer": "B",
      "explanation": "The Sync slicers pane lets you choose, for each page, whether a slicer is visible there and whether its selection is synchronized with the other pages. This keeps one consistent filter across pages without users reselecting it. Edit interactions only controls how visuals affect each other on the same page.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "easy",
      "source": "PL-300 study guide, Visualize and analyze the data: Enhance reports for usability and storytelling; Sync and use slicers"
    },
    {
      "stem": "A line chart shows daily website sessions over the past year, with a date field on the X-axis. You want Power BI to automatically flag data points that fall outside the expected range and to offer possible explanations for them. What should you do?",
      "options": [
        "Add a trend line from the Analytics pane",
        "Add a forecast from the Analytics pane",
        "Turn on Find anomalies from the Analytics pane",
        "Add a constant line from the Analytics pane"
      ],
      "answer": "C",
      "explanation": "Anomaly detection, turned on with Find anomalies in the Analytics pane of a time-series line chart, builds an expected range around the series and marks points outside it. Selecting an anomaly opens a pane that lists fields that may explain it. Trend lines, forecasts and constant lines add reference information but do not identify or explain unusual points.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Identify patterns and trends",
      "difficulty": "medium",
      "source": "PL-300 study guide, Visualize and analyze the data: Identify patterns and trends; Anomaly detection"
    },
    {
      "stem": "A report page contains two column charts: Sales by Category and Sales by Month. When a user selects a category in Sales by Category, Sales by Month highlights that category's portion of each column but still shows the full column totals. You need Sales by Month to show only the selected category's values. What should you do?",
      "options": [
        "Select Sales by Category, turn on Edit interactions, and set Sales by Month to Filter",
        "Select Sales by Month, turn on Edit interactions, and set Sales by Category to Highlight",
        "Add Product[Category] to the Filters on this page section of the Filters pane",
        "Select Sales by Category, turn on Edit interactions, and set Sales by Month to None"
      ],
      "answer": "A",
      "explanation": "Interactions are configured from the visual that makes the selection: you select it, turn on Edit interactions, and choose an icon above each other visual. Filter makes the target show only data for the selection, Highlight (the default for many charts) keeps totals and emphasizes the selected portion, and None makes the target ignore the selection. A page-level filter would apply a fixed filter rather than respond to the user's selection.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 study guide, Visualize and analyze the data: Enhance reports for usability and storytelling; Change how visuals interact"
    },
    {
      "stem": "A data analyst must be able to publish, edit and delete reports and semantic models in a Power BI workspace, but must not be able to add or remove workspace users. You must follow the principle of least privilege. Which workspace role should you assign to the analyst?",
      "options": [
        "Admin",
        "Member",
        "Viewer",
        "Contributor"
      ],
      "answer": "D",
      "explanation": "The Contributor role can create, edit, publish and delete content in a workspace but cannot manage workspace access. Member can also add users with Member or lower roles, and Admin has full control including deleting the workspace, so both grant more than needed. Viewer can only view content and cannot publish or edit.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "easy",
      "source": "PL-300 study guide, Manage and secure Power BI: Create and manage workspaces and assets; Roles in workspaces in Power BI"
    },
    {
      "stem": "The Sales table includes a SalespersonEmail column that contains each salesperson's Microsoft Entra user principal name. You want to create a single row-level security role so that each salesperson sees only their own rows when viewing the report in the Power BI service. Which DAX filter expression should you define on the Sales table for the role?",
      "options": [
        "[SalespersonEmail] = USEROBJECTID()",
        "[SalespersonEmail] = USERPRINCIPALNAME()",
        "[SalespersonEmail] = SELECTEDVALUE(Sales[SalespersonEmail])",
        "[SalespersonEmail] = CUSTOMDATA()"
      ],
      "answer": "B",
      "explanation": "This is dynamic row-level security: one role whose filter compares a column with the identity of the signed-in user. USERPRINCIPALNAME returns the user's principal name, which matches the values stored in SalespersonEmail, so each user sees only their own rows. USEROBJECTID returns the user's object ID rather than their sign-in name, and CUSTOMDATA reads a value passed in a connection string.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "medium",
      "source": "PL-300 study guide, Manage and secure Power BI: Secure and govern Power BI items; Row-level security (RLS) with Power BI"
    },
    {
      "stem": "You publish a semantic model that uses row-level security (RLS) to a workspace and assign users to its roles in the Power BI service. A user who has the Contributor role in the workspace, and who is also a member of a restrictive RLS role, reports seeing all rows in the report. What explains this behavior?",
      "options": [
        "RLS role membership takes effect only after the next semantic model refresh",
        "RLS is enforced only when the report is opened through a Power BI app",
        "RLS does not restrict users who have the Admin, Member or Contributor workspace role",
        "RLS applies only to users added to roles through a Microsoft Entra security group"
      ],
      "answer": "C",
      "explanation": "RLS filters data only for users who have read access without edit rights on the semantic model, such as workspace Viewers and people who get access through sharing or an app. Workspace Admins, Members and Contributors have edit permissions on the model, so RLS does not apply to them. To have the user's data restricted, give them the Viewer role or access through an app, and use Test as role to check the result.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "hard",
      "source": "PL-300 study guide, Manage and secure Power BI: Secure and govern Power BI items; Row-level security (RLS) with Power BI"
    }
  ]
}
```
