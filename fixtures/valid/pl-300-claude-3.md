```json
{
  "format": "domcq/1",
  "exam": "pl-300",
  "set": "PL-300: Microsoft Power BI Data Analyst practice – Mixed skills set 1",
  "questions": [
    {
      "stem": "You are building a Power BI Desktop report on a SQL Server database that holds several billion rows of sales transactions. The data is too large to import, and report visuals must show the data as it currently exists in the database without waiting for a scheduled refresh. Which storage mode should you use for the sales table?",
      "options": [
        "Import",
        "DirectQuery",
        "Dual",
        "Direct Lake"
      ],
      "answer": "B",
      "explanation": "DirectQuery leaves the data in the source and sends queries to it each time a visual is rendered, so results reflect the current state of the database and nothing has to fit in the model. Import copies the data into the model and only changes on refresh, and Dual also keeps an imported copy, so both run into the size limit. Direct Lake works only with Delta tables in OneLake (Microsoft Fabric), not with a SQL Server database.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Prepare the data > Get or connect to data (choose between DirectQuery and Import); Microsoft Learn: DirectQuery in Power BI"
    },
    {
      "stem": "In Power Query Editor, you turn on Column distribution and Column profile for a Customer query that returns about 250,000 rows. The distinct and unique counts shown are much lower than you expect. You need the profiling statistics to reflect every row returned by the query. What should you do?",
      "options": [
        "Turn on Column quality on the View tab",
        "Raise the data preview row limit in the Options dialog",
        "Turn off downloading data previews in the background",
        "Switch the status bar setting to profile the entire data set"
      ],
      "answer": "D",
      "explanation": "By default, Power Query column profiling is based on the top 1,000 rows only, which can understate distinct and unique counts on large tables. Selecting the status bar text and choosing column profiling based on the entire data set makes the statistics use all rows, at the cost of slower profiling. Column quality only adds valid, error and empty percentages, and it uses the same row sample.",
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Prepare the data > Profile and clean the data; Microsoft Learn: Using the data profiling tools in Power Query"
    },
    {
      "stem": "In Power Query, a Budget query has the columns Region, Jan, Feb, Mar and so on through Dec, with one row per region. You need to reshape it into three columns (Region, Month and Amount) so it can be related to a date dimension. If the source later adds new month columns, they must also be reshaped without anyone editing the query. What should you do?",
      "options": [
        "Select the Region column and use Unpivot Other Columns",
        "Select the month columns and use Unpivot Only Selected Columns",
        "Select the Region column and use Pivot Column",
        "Use Transpose and then Use First Row as Headers"
      ],
      "answer": "A",
      "explanation": "Unpivot Other Columns records only the columns to keep (Region) and turns every other column into attribute-value pairs, so month columns added later are unpivoted automatically. Unpivot Only Selected Columns hard-codes the selected column names in the step, so new columns would be left out. Pivot does the opposite of what is needed, and Transpose swaps rows and columns without producing a Month and Amount pair.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Prepare the data > Transform and load the data (pivot, unpivot and transpose); Microsoft Learn: Unpivot columns in Power Query"
    },
    {
      "stem": "You have two Power Query queries, Sales2024 and Sales2025, that have identical column names and data types. You need a single query that contains all the rows from both queries. Which Power Query operation should you use?",
      "options": [
        "Merge Queries with an inner join",
        "Merge Queries with a full outer join",
        "Append Queries",
        "Group By"
      ],
      "answer": "C",
      "explanation": "Append stacks the rows of one table under another, matching columns by name, which is what you need when tables share a structure and hold different sets of rows. Merge is a join: it adds columns from a second table based on matching key values, so it widens the table instead of adding rows. Group By aggregates rows and would lose the detail.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Prepare the data > Transform and load the data (merge and append queries); Microsoft Learn: Append queries"
    },
    {
      "stem": "You have a Power Query query named Orders that connects to a source and applies several cleaning steps. You need a new query that starts from the final output of Orders, so that any later changes to the steps in Orders automatically flow into the new query. What should you do?",
      "options": [
        "Duplicate the Orders query",
        "Reference the Orders query",
        "Create a blank query and paste in the M code from Orders",
        "Use Enter Data to build a table from the Orders preview"
      ],
      "answer": "B",
      "explanation": "Reference creates a query whose source is simply the output of Orders, so it depends on Orders and picks up any later change to its steps. Duplicate, and pasting the M code into a blank query, both make an independent copy of the steps that will not track later edits. Enter Data stores a static table that never refreshes from the source.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Prepare the data > Transform and load the data (identify when to use reference or duplicate queries)"
    },
    {
      "stem": "You connect Power BI Desktop to an Azure SQL Database table in Import mode. In Power Query, you apply these steps in this order: Removed Columns, Filtered Rows (on OrderDate), Added Index Column, and Grouped Rows (by CustomerID). You check each step to see whether View Native Query is available. At which step does query folding stop first?",
      "options": [
        "Removed Columns",
        "Filtered Rows",
        "Added Index Column",
        "Grouped Rows"
      ],
      "answer": "C",
      "explanation": "Removing columns and filtering rows translate directly into the SELECT list and WHERE clause of the SQL query, so they fold. Adding an index column is a transformation the SQL connector does not translate, so it runs in the Power Query engine. Once a step stops folding, the steps after it run locally as well, so Grouped Rows also no longer folds even though grouping could have; placing foldable steps before non-foldable ones avoids this.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "hard",
      "source": "Microsoft Learn: Power Query query folding overview and query folding indicators; PL-300 skills outline: Prepare the data"
    },
    {
      "stem": "In a star schema, the Product table has one row per ProductKey and the Sales table has many rows for each ProductKey. You create a relationship between Product[ProductKey] and Sales[ProductKey]. Which cardinality should the relationship have?",
      "options": [
        "One-to-many, with Product on the one side",
        "Many-to-many",
        "One-to-one",
        "One-to-many, with Sales on the one side"
      ],
      "answer": "A",
      "explanation": "A dimension table has a unique key, so it sits on the one side, and the fact table repeats that key for each transaction, so it sits on the many side. With the default single cross-filter direction, filters flow from Product to Sales, which is the standard star schema pattern. Many-to-many and one-to-one would misdescribe the data and give weaker, less predictable filtering.",
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Model the data > Design and implement a data model (relationship cardinality and cross-filter direction); Microsoft Learn: Star schema guidance"
    },
    {
      "stem": "Your model has a Sales table with OrderDate and ShipDate columns, and both are related to 'Date'[Date]. The OrderDate relationship is active and the ShipDate relationship is inactive. A measure named [Total Sales] already exists. You need a measure that returns sales by ship date when it is used with fields from the Date table. Which DAX expression should you use?",
      "options": [
        "CALCULATE([Total Sales], CROSSFILTER(Sales[ShipDate], 'Date'[Date], BOTH))",
        "CALCULATE([Total Sales], ALL(Sales[OrderDate]))",
        "CALCULATE([Total Sales], RELATEDTABLE('Date'))",
        "CALCULATE([Total Sales], USERELATIONSHIP(Sales[ShipDate], 'Date'[Date]))"
      ],
      "answer": "D",
      "explanation": "Only one relationship between two tables can be active, so a role-playing date needs USERELATIONSHIP inside CALCULATE to switch on the inactive relationship for that calculation. While the measure is evaluated, filters on the Date table reach Sales through ShipDate instead of OrderDate. CROSSFILTER changes the filter direction of a relationship but does not activate an inactive one, and the other options do not change which relationship is used.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Model the data > Create model calculations by using DAX; Microsoft Learn: USERELATIONSHIP function (DAX), active vs inactive relationships"
    },
    {
      "stem": "A report page has a matrix that shows Product[Category] and a slicer on Product[Category], and the page is filtered to a single year. A measure named [Total Sales] exists. You need a measure that shows each category's sales as a percentage of the sales of all categories for the filtered year, even when the slicer limits which categories appear. Which DAX expression should you use?",
      "options": [
        "DIVIDE([Total Sales], CALCULATE([Total Sales], ALLSELECTED(Product[Category])))",
        "DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(Product[Category])))",
        "DIVIDE([Total Sales], CALCULATE([Total Sales], VALUES(Product[Category])))",
        "DIVIDE([Total Sales], SUMX(Product, [Total Sales]))"
      ],
      "answer": "B",
      "explanation": "ALL(Product[Category]) as a CALCULATE filter removes every filter on the Category column, whether it comes from the matrix row or the slicer, while filters on other columns such as the year stay in place. ALLSELECTED would keep the slicer selection, so the denominator would be only the selected categories. VALUES and SUMX over Product both work within the current category filter, so they return the row's own sales and give 100%.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Model the data > Create model calculations by using DAX (CALCULATE to manipulate filters); Microsoft Learn: ALL and ALLSELECTED functions"
    },
    {
      "stem": "Your organization's fiscal year runs from July 1 to June 30. The model has a Date table that is marked as a date table, and a measure named [Total Sales]. You need a measure that returns fiscal year-to-date sales, restarting each July 1. Which DAX expression should you use?",
      "options": [
        "CALCULATE([Total Sales], DATESYTD('Date'[Date], \"7-1\"))",
        "TOTALYTD([Total Sales], DATEADD('Date'[Date], 6, MONTH))",
        "TOTALYTD([Total Sales], 'Date'[Date], \"6-30\")",
        "CALCULATE([Total Sales], DATESYTD('Date'[Date]), 'Date'[MonthNumber] >= 7)"
      ],
      "answer": "C",
      "explanation": "TOTALYTD and DATESYTD take an optional year_end_date argument that names the last day of the year; \"6-30\" ends the year on June 30, so accumulation restarts on July 1. Passing \"7-1\" would make July 1 the last day of the year, which is off by one day. DATEADD shifts dates rather than defining a fiscal year, and combining a calendar year-to-date with MonthNumber >= 7 returns only part of a calendar year.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Model the data > Create model calculations by using DAX (time intelligence); Microsoft Learn: TOTALYTD function (DAX)"
    },
    {
      "stem": "Your Import-mode semantic model is larger than expected and refreshes slowly. You need to reduce the model's size without changing anything that report users see. Which TWO actions should you take? Choose TWO.",
      "options": [
        "Turn on Auto date/time for the current file",
        "Remove columns that no report, relationship or calculation uses",
        "Convert the existing measures into calculated columns",
        "Change a DateTime column whose time is never reported to the Date type"
      ],
      "answer": "BD",
      "explanation": "In Import mode, the size of the model depends mainly on how many columns it stores and how many distinct values each column has, because VertiPaq compresses each column on its own. Removing unused columns removes their storage entirely, and dropping an unused time portion cuts the column's distinct values from potentially millions to a few thousand dates. Auto date/time adds a hidden date table for every date column, and calculated columns are stored in the model while measures are not, so both of those would make the model bigger.",
      "topic": "Model the data",
      "subtopic": "Optimize model performance",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Model the data > Optimize model performance (reduce granularity, remove unnecessary rows and columns); Microsoft Learn: Data reduction techniques for Import modeling"
    },
    {
      "stem": "A report page in Power BI Desktop loads slowly. You need to find out which visual on the page takes the longest to load and how much of that time is spent running its DAX query. Which Power BI Desktop feature should you use?",
      "options": [
        "Performance analyzer",
        "Query diagnostics",
        "Column profile",
        "Manage relationships"
      ],
      "answer": "A",
      "explanation": "Performance analyzer records each visual's load time while you refresh visuals and breaks it into DAX query, visual display and other time, and you can copy the DAX query to analyze it further. Query diagnostics traces Power Query evaluation during refresh, not report rendering. Column profile and Manage relationships do not measure performance at all.",
      "topic": "Model the data",
      "subtopic": "Optimize model performance",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Model the data > Optimize model performance (use Performance analyzer to identify poorly performing visuals); Microsoft Learn: Performance Analyzer"
    },
    {
      "stem": "You need a visual that shows how a starting monthly profit figure is increased and decreased by individual revenue and cost items to arrive at the ending profit figure. Which visual should you use?",
      "options": [
        "Ribbon chart",
        "Funnel chart",
        "Stacked area chart",
        "Waterfall chart"
      ],
      "answer": "D",
      "explanation": "A waterfall chart shows a running total as values are added or subtracted, with increases and decreases in different colors, so it explains how a starting value becomes an ending value. A ribbon chart shows rank changes over time, a funnel shows stages of a sequential process, and a stacked area chart shows how parts of a total change over time rather than a bridge between two figures.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Create reports",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Visualize and analyze the data > Create reports (select an appropriate visual); Microsoft Learn: Waterfall charts in Power BI"
    },
    {
      "stem": "A Power BI report has a Summary page that shows sales by product and a Product Details page. Users must be able to right-click a product in any visual on the Summary page and go to the Product Details page, filtered to that product. What should you do?",
      "options": [
        "Create a bookmark of Product Details and add a button that opens it",
        "Use Edit interactions on the Summary page to filter the other visuals",
        "Add Product[ProductName] to the Drill through field well of Product Details",
        "Make Product Details a tooltip page with Product[ProductName] as a tooltip field"
      ],
      "answer": "C",
      "explanation": "Adding a field to the drillthrough well of a target page makes that page a drillthrough destination: any visual that uses the field offers a Drill through option on right-click, and the target page opens filtered to the selected value. A bookmark captures a fixed state and does not pass the clicked product. Edit interactions only controls cross-filtering on the same page, and a tooltip page appears on hover rather than navigating.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Visualize and analyze the data > Enhance reports for usability and storytelling (configure drillthrough navigation); Microsoft Learn: Drillthrough in Power BI reports"
    },
    {
      "stem": "Report users want a single slicer that changes a bar chart to show either Sales Amount, Gross Profit or Order Quantity on its value axis. You need to provide this without creating bookmarks or additional visuals. What should you create?",
      "options": [
        "A field parameter that includes the three measures",
        "A numeric range parameter that includes the three measures",
        "A Power Query parameter with three allowed values",
        "A hierarchy that includes the three measures"
      ],
      "answer": "A",
      "explanation": "A field parameter (Modeling > New parameter > Fields) creates a table whose slicer lets users choose which fields or measures a visual displays, so one visual can switch between the three measures interactively. A numeric range (what-if) parameter supplies a single number to calculations, not a choice of fields. A Power Query parameter changes only when the model is edited or refreshed, and hierarchies are built from columns, not measures.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Visualize and analyze the data > Enhance reports for usability and storytelling; Microsoft Learn: Use report readers to change visuals (field parameters)"
    },
    {
      "stem": "A customer table has a Churned column with the values Yes and No, plus attributes such as Region, ContractType and TenureMonths. You need a visual that analyzes which attributes most increase the likelihood that Churned equals Yes and ranks them by their impact. Which visual should you use?",
      "options": [
        "Decomposition tree",
        "Key influencers",
        "Q&A",
        "Smart narrative"
      ],
      "answer": "B",
      "explanation": "The Key influencers visual analyzes the fields you supply to find which factors drive a chosen outcome, such as Churned being Yes, and ranks them by how much they change the likelihood of that outcome. A decomposition tree lets you break a measure down across dimensions but does not rank drivers of a categorical outcome. Q&A answers natural-language questions, and Smart narrative writes a text summary of visuals.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Identify patterns and trends",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Visualize and analyze the data > Identify patterns and trends (use AI visuals); Microsoft Learn: Key influencers visual"
    },
    {
      "stem": "A line chart shows Sales Amount by 'Date'[Date], with Product[Category] in the Legend well, and its X-axis type is set to Categorical. You need to add a forecast from the Analytics pane, but the Forecast option is not available. Which TWO changes should you make? Choose TWO.",
      "options": [
        "Set the X-axis type to Continuous",
        "Add a trend line before adding the forecast",
        "Remove Product[Category] from the Legend well",
        "Sort the chart by Sales Amount in descending order"
      ],
      "answer": "AC",
      "explanation": "Forecasting in a Power BI line chart projects a single time series forward, so it needs a continuous date axis and only one series. A categorical axis treats dates as unrelated labels, and a field in the Legend well splits the line into several series, and either one hides the Forecast option. Trend lines and sort order have no effect on whether forecasting is available.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Identify patterns and trends",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Visualize and analyze the data > Identify patterns and trends (use the Analytics pane); Microsoft Learn: Analytics pane in Power BI"
    },
    {
      "stem": "You define a row-level security (RLS) role named Region in Power BI Desktop, publish the semantic model to a workspace, and add a security group of sales managers to the role in the Power BI service. The managers were also given the Member role in the workspace so they could open reports there. Testing shows the managers see data for all regions. You need the managers to see only their own region's data while still viewing the reports in that workspace. What should you do?",
      "options": [
        "Turn on Apply security filter in both directions for the Region relationship",
        "Test the role with View as in Desktop and then republish the semantic model",
        "Add each manager to the role individually instead of through the group",
        "Change the managers' workspace role from Member to Viewer"
      ],
      "answer": "D",
      "explanation": "RLS restricts only users who have read access to the semantic model, such as workspace Viewers or people given access through an app or sharing. Workspace Admins, Members and Contributors have edit permission on the semantic model, so RLS filters are not applied to them. Security groups are supported as role members, so the role assignment itself is fine, and the managers just need the Viewer role.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Manage and secure Power BI > Secure and govern Power BI items (row-level security, workspace roles); Microsoft Learn: Row-level security with Power BI"
    },
    {
      "stem": "A data analyst must be able to publish, edit and delete reports and semantic models in a Power BI workspace, but must not be able to add or remove workspace users. You need to give the analyst the least-privileged workspace role that meets these requirements. Which role should you assign?",
      "options": [
        "Viewer",
        "Contributor",
        "Member",
        "Admin"
      ],
      "answer": "B",
      "explanation": "Contributors can create, edit and delete content in a workspace but cannot manage who has access. Members can also add users with Member or lower roles, and Admins have full control, so both give more than the analyst needs. Viewers can only view and interact with content and cannot publish or edit it.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Manage and secure Power BI > Create and manage workspaces and assets (assign workspace roles); Microsoft Learn: Roles in workspaces"
    },
    {
      "stem": "Several analysts publish Import-mode semantic models that use the same on-premises SQL Server database. You need scheduled refresh to work for all of these semantic models through a single, centrally managed connection that the IT team administers. What should you do?",
      "options": [
        "Install an on-premises data gateway in standard mode and add a SQL Server connection",
        "Install an on-premises data gateway in personal mode on an IT-managed server",
        "Configure a virtual network data gateway and bind the semantic models to it",
        "Switch the semantic models to DirectQuery so that they no longer need a gateway"
      ],
      "answer": "A",
      "explanation": "The on-premises data gateway in standard mode is installed once, managed by administrators, and shared by many users and semantic models through data source connections, which is what lets the Power BI service reach an on-premises SQL Server for refresh. Personal mode serves only the person who installed it and cannot be shared. A virtual network data gateway reaches data in an Azure virtual network rather than on premises, and DirectQuery to an on-premises source still needs a gateway.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Manage and secure Power BI > Create and manage workspaces and assets (configure a data gateway, scheduled refresh); Microsoft Learn: On-premises data gateway"
    }
  ]
}
```
