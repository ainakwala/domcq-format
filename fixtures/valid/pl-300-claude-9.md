```json
{
  "format": "domcq/1",
  "exam": "pl-300",
  "set": "PL-300: Microsoft Power BI Data Analyst practice – Core skills mix",
  "questions": [
    {
      "stem": "You are building a Power BI report on an Azure SQL Database table that receives new rows every few minutes and is too large to import into the model. Report users must see the latest data each time they interact with the report, without waiting for a scheduled refresh. Which storage mode should you use for the table?",
      "options": [
        "Import",
        "DirectQuery",
        "Dual",
        "Live connection"
      ],
      "answer": "B",
      "explanation": "DirectQuery leaves the data in the source and sends a query to the source each time a visual is rendered or interacted with, so users see current data and the table never has to fit in the model. Import stores a copy in the model that only changes when it is refreshed, and Dual also keeps an imported copy. Live connection is used to connect to an existing Power BI semantic model or Analysis Services model, not directly to an Azure SQL Database.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "easy",
      "source": "PL-300 study guide, Prepare the data: Get or connect to data; Use DirectQuery in Power BI Desktop"
    },
    {
      "stem": "Your Power BI Desktop file contains 12 queries that connect to a SQL Server named SQL-DEV. Before publishing, you must be able to point every query at SQL-PROD by changing a single value, and you want to be able to change that value later in the semantic model settings in the Power BI service. What should you create?",
      "options": [
        "A what-if parameter in Report view",
        "A field parameter in the model",
        "A calculated table that stores the server name",
        "A Power Query parameter referenced in each Source step"
      ],
      "answer": "D",
      "explanation": "A Power Query parameter holds a value that queries can reference, so using it for the server name in each Source step means one change repoints every query. Power Query parameters are also exposed in the semantic model settings in the Power BI service, where they can be changed after publishing. What-if and field parameters are report and model features for analysis and visual switching, and a calculated table is evaluated after the data loads, so it cannot control a connection.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "easy",
      "source": "PL-300 study guide, Prepare the data: Get or connect to data; Using parameters"
    },
    {
      "stem": "In Power Query Editor, you enable Column quality and Column distribution. A colleague points out that a column shows 0% errors even though errors exist in rows near the end of a 500,000-row table. You need the profiling statistics to reflect every row in the table. What should you do?",
      "options": [
        "Change the status bar setting from column profiling based on top 1,000 rows to based on entire data set",
        "Enable Column profile on the View tab in addition to the other two profiling options",
        "Clear the option that allows data previews to download in the background",
        "Add a Keep Rows step that keeps only the bottom 1,000 rows of the table"
      ],
      "answer": "A",
      "explanation": "By default, the data profiling tools in Power Query Editor calculate their statistics on the first 1,000 rows of the preview only. Switching the setting in the status bar to profile the entire data set makes Column quality, Column distribution and Column profile scan all rows, so errors anywhere in the table are counted. Enabling more profiling panes does not change the sample size, and keeping only some rows changes the data instead of profiling it.",
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "medium",
      "source": "PL-300 study guide, Prepare the data: Profile and clean the data; Data profiling tools"
    },
    {
      "stem": "A query returns a table with a Product column and one column per month (Jan through Dec), each holding sales amounts. You need a table with three columns, Product, Month and Sales, and the solution must keep working if new month columns are added to the source later. What should you do in Power Query Editor?",
      "options": [
        "Select the month columns and select Pivot Column",
        "Select all the columns and select Transpose",
        "Select the Product column and select Unpivot Other Columns",
        "Select the month columns and select Unpivot Only Selected Columns"
      ],
      "answer": "C",
      "explanation": "Unpivoting turns column headers into values in an attribute column (Month) and their contents into a value column (Sales). Unpivot Other Columns records only the column to keep (Product) and unpivots everything else, so month columns added to the source later are unpivoted automatically. Unpivot Only Selected Columns hard-codes the listed month columns, so new ones would be left out, while Pivot and Transpose reshape the table in the wrong direction.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "medium",
      "source": "PL-300 study guide, Prepare the data: Transform and load the data; Unpivot columns"
    },
    {
      "stem": "You have two queries in Power Query Editor, Customers and Orders, and both contain a CustomerID column. You need a query that returns only the customers who have never placed an order. You will start from Customers and merge it with Orders on CustomerID. Which join kind should you select?",
      "options": [
        "Left outer",
        "Inner",
        "Right anti",
        "Left anti"
      ],
      "answer": "D",
      "explanation": "An anti join returns rows from one table that have no match in the other. With Customers as the first (left) table, a left anti join returns only the customers whose CustomerID does not appear in Orders. A right anti join would instead return orders with no matching customer, an inner join returns only matching rows, and a left outer join returns all customers whether or not they have orders.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "medium",
      "source": "PL-300 study guide, Prepare the data: Transform and load the data; Left anti join"
    },
    {
      "stem": "A query named SalesStaging connects to a source and applies several cleaning steps. You need two additional queries, SalesByRegion and SalesByProduct, that each start from the output of SalesStaging, so that any future change to the SalesStaging steps automatically flows to both. SalesStaging itself must not be loaded into the data model. Which two actions should you perform? Each correct answer presents part of the solution. Choose TWO.",
      "options": [
        "Create SalesByRegion and SalesByProduct by using Reference on SalesStaging",
        "Create SalesByRegion and SalesByProduct by using Duplicate on SalesStaging",
        "Clear the Enable load option for SalesStaging",
        "Clear the Include in report refresh option for SalesStaging"
      ],
      "answer": "AC",
      "explanation": "Reference creates a new query whose first step is the output of the original query, so later edits to SalesStaging flow through to every query that references it; Duplicate copies the steps once, and the copies then change independently. Clearing Enable load keeps SalesStaging as an intermediate query that is still evaluated for the queries that reference it, but its own table is not added to the model. Clearing Include in report refresh only stops the query from being refreshed and does not keep it out of the model.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "hard",
      "source": "PL-300 study guide, Prepare the data: Transform and load the data"
    },
    {
      "stem": "You are designing a star schema in Power BI. A Date dimension table has one row per date, and a Sales fact table has many rows per date. You create a relationship on the date key. Which relationship configuration follows Microsoft's recommended practice?",
      "options": [
        "One-to-many from Date to Sales, with a single cross-filter direction",
        "One-to-many from Date to Sales, with the cross-filter direction set to Both",
        "Many-to-many between Date and Sales, with a single cross-filter direction",
        "One-to-one between Date and Sales, with the cross-filter direction set to Both"
      ],
      "answer": "A",
      "explanation": "In a star schema, each dimension row relates to many fact rows, so the relationship is one-to-many with the dimension on the one side. The recommended default is a single cross-filter direction, so filters flow from the dimension to the fact table. Bidirectional filtering should be used only when a specific requirement needs it, because it can create ambiguity and slow down queries.",
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "easy",
      "source": "PL-300 study guide, Model the data: Design and implement a data model; Understand star schema and the importance for Power BI"
    },
    {
      "stem": "A Sales table has OrderDate and ShipDate columns, and both are related to a Date table. The relationship on OrderDate is active and the relationship on ShipDate is inactive. A measure named [Total Sales] sums Sales[Amount]. You need a second measure that shows sales by ship date when users slice by the Date table, without changing the existing relationships. What should the new measure use?",
      "options": [
        "CALCULATE with CROSSFILTER set to Both on the ShipDate relationship",
        "CALCULATE with ALL applied to the Date table",
        "CALCULATE with USERELATIONSHIP on Sales[ShipDate] and Date[Date]",
        "SUMX over Sales with RELATED returning Date[Date]"
      ],
      "answer": "C",
      "explanation": "Only one relationship between two tables can be active at a time, but USERELATIONSHIP used as a CALCULATE modifier activates an inactive relationship for that one calculation. Inside the measure, Date filters then reach Sales through ShipDate instead of OrderDate, which is the usual way to handle a role-playing date dimension. CROSSFILTER changes the filter direction of a relationship but does not make an inactive relationship active, and ALL removes the Date filters altogether.",
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "medium",
      "source": "PL-300 study guide, Model the data: Design and implement a data model; USERELATIONSHIP function (DAX)"
    },
    {
      "stem": "An Inventory table stores one row per product per day with a QtyOnHand column, and it is related to a marked Date table. Some dates have no inventory rows. You need a measure that, for any selected period such as a month or a year, returns the quantity on hand on the last date in that period that has inventory data, instead of adding quantities across days. Which expression should you use?",
      "options": [
        "CALCULATE(SUM(Inventory[QtyOnHand]), LASTDATE('Date'[Date]))",
        "CALCULATE(SUM(Inventory[QtyOnHand]), LASTNONBLANK('Date'[Date], CALCULATE(SUM(Inventory[QtyOnHand]))))",
        "CALCULATE(SUM(Inventory[QtyOnHand]), FIRSTNONBLANK('Date'[Date], CALCULATE(SUM(Inventory[QtyOnHand]))))",
        "SUMX(VALUES('Date'[Date]), CALCULATE(SUM(Inventory[QtyOnHand])))"
      ],
      "answer": "B",
      "explanation": "Stock levels are semi-additive: they can be summed across products but not across time, so the measure must pick one date in the period. LASTNONBLANK returns the latest date in the current filter context for which the expression is not blank, and the inner CALCULATE causes context transition so the sum is evaluated for each date. LASTDATE returns the last date of the period even when it has no inventory rows, which would give a blank result, FIRSTNONBLANK returns the opening date, and the SUMX version adds every day's quantity together.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "hard",
      "source": "PL-300 study guide, Model the data: Create model calculations by using DAX; LASTNONBLANK function (DAX)"
    },
    {
      "stem": "A model has a Product table and a Region table, and both are related to a Sales table. A measure named [Total Sales] sums Sales[Amount]. In a matrix that lists products, you need a measure that returns each product's sales as a percentage of the sales for all products. The denominator must ignore every filter on the Product table, including product slicers, but must still respect filters on the Region table. Which expression should you use?",
      "options": [
        "DIVIDE([Total Sales], CALCULATE([Total Sales], ALLSELECTED('Product')))",
        "DIVIDE([Total Sales], CALCULATE([Total Sales], ALL('Region')))",
        "DIVIDE([Total Sales], CALCULATE([Total Sales], ALLEXCEPT('Product', 'Product'[Category])))",
        "DIVIDE([Total Sales], CALCULATE([Total Sales], ALL('Product')))"
      ],
      "answer": "D",
      "explanation": "ALL('Product') used as a CALCULATE filter argument removes every filter on the Product table, whether it comes from the matrix row, a slicer or a filter, while filters on other tables such as Region stay in place. ALLSELECTED keeps the filters that come from outside the visual, such as product slicers, so it would give a percentage of the selected products only. ALLEXCEPT keeps the Category filter, and ALL('Region') removes the wrong table's filters.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "hard",
      "source": "PL-300 study guide, Model the data: Create model calculations by using DAX; ALL function (DAX)"
    },
    {
      "stem": "An import-mode semantic model is larger than expected and slow to refresh. Report authors use only a subset of the columns. The model has its own marked Date table, and all date-based visuals use it rather than automatic date hierarchies. You need to reduce the model size without changing the report results. Which two actions should you perform? Each correct answer presents a complete solution. Choose TWO.",
      "options": [
        "Set the cross-filter direction of every relationship to Both",
        "Remove columns that are not used by any visual, measure or relationship",
        "Replace the measures with equivalent calculated columns",
        "Turn off the Auto date/time option for the file"
      ],
      "answer": "BD",
      "explanation": "Import models store every loaded column in compressed form, so removing columns that nothing uses directly shrinks the model and shortens refresh. Auto date/time creates a hidden date table for every date column in the model, and turning it off removes those tables when a proper Date table is already in use. Changing filter directions does not reduce storage, and calculated columns are stored in the model, unlike measures, which are calculated at query time, so that change would increase the size.",
      "topic": "Model the data",
      "subtopic": "Optimize model performance",
      "difficulty": "medium",
      "source": "PL-300 study guide, Model the data: Optimize model performance; Data reduction techniques for Import modeling"
    },
    {
      "stem": "A report page in Power BI Desktop takes a long time to load. You need to find which visual is the slowest, see how its duration splits between the DAX query, visual display and other processing, and copy that visual's query for further analysis. Which tool should you use?",
      "options": [
        "Performance Analyzer",
        "Query diagnostics in Power Query Editor",
        "Column profiling in Power Query Editor",
        "The usage metrics report in the Power BI service"
      ],
      "answer": "A",
      "explanation": "Performance Analyzer records each visual's processing as you interact with the report and breaks the duration into DAX query, visual display and other time. You can copy the captured query for each visual and analyze it further, for example in DAX query view. Query diagnostics and column profiling examine Power Query data preparation, not report rendering, and usage metrics report on who views content rather than how long visuals take.",
      "topic": "Model the data",
      "subtopic": "Optimize model performance",
      "difficulty": "easy",
      "source": "PL-300 study guide, Model the data: Optimize model performance; Use Performance Analyzer to examine report element performance"
    },
    {
      "stem": "You need a visual that starts with last year's profit, shows how each of several factors such as price changes, volume changes and cost increases adds to or subtracts from it, and ends with this year's profit. Which visual should you use?",
      "options": [
        "Ribbon chart",
        "Funnel chart",
        "Waterfall chart",
        "Scatter chart"
      ],
      "answer": "C",
      "explanation": "A waterfall chart shows a running total as positive and negative values are added to a starting value, with each change drawn as a floating bar that leads to the final total. That makes it the standard way to explain how separate factors move one figure to another. Ribbon charts show rank changes over time, funnel charts show a sequential process with drop-off, and scatter charts show the relationship between two numeric measures.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Create reports",
      "difficulty": "easy",
      "source": "PL-300 study guide, Visualize and analyze the data: Create reports; Waterfall charts in Power BI"
    },
    {
      "stem": "A report has several summary pages that show products. You need users to be able to right-click a product in any visual on those pages and navigate to a Product Details page that is automatically filtered to that product. What should you configure?",
      "options": [
        "A bookmark for each product on the Product Details page",
        "Drillthrough on the Product Details page by using the product field",
        "Sync slicers between the summary pages and the Product Details page",
        "Edit interactions for each visual on the summary pages"
      ],
      "answer": "B",
      "explanation": "Adding the product field to the Drillthrough well of the target page makes Drill through available on the right-click menu of any visual in the report that uses that field. When a user drills through, the target page opens filtered to the selected product, and a back button returns them to where they started. Bookmarks capture fixed states, sync slicers share slicer selections across pages, and edit interactions control how visuals on the same page filter one another.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 study guide, Visualize and analyze the data: Enhance reports for usability and storytelling; Set up drillthrough in Power BI reports"
    },
    {
      "stem": "On one report page, you need users to click buttons to switch between a column chart and a table that occupy the same area of the page, with only one of the two visuals visible at a time. Which two actions should you perform? Each correct answer presents part of the solution. Choose TWO.",
      "options": [
        "Create two bookmarks that capture different visual visibility settings made in the Selection pane",
        "Configure drillthrough from the column chart to the table",
        "Set the table as a report page tooltip for the column chart",
        "Add buttons and set the action of each button to one of the bookmarks"
      ],
      "answer": "AD",
      "explanation": "A bookmark captures the state of a page, including which visuals are shown or hidden in the Selection pane, so one bookmark can show the chart and hide the table and another can do the opposite. Buttons with a Bookmark action then let users switch between those states with one click. Drillthrough navigates to another page, and a report page tooltip appears only on hover, so neither swaps visuals in place.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 study guide, Visualize and analyze the data: Enhance reports for usability and storytelling"
    },
    {
      "stem": "A table contains one row per customer, with a Churned column (Yes or No) and attributes such as region, contract type, tenure band and number of support tickets. Business users want a visual that analyzes which attributes most increase the likelihood that Churned is Yes and ranks those factors automatically. Which visual should you use?",
      "options": [
        "Decomposition tree",
        "Q&A visual",
        "Smart narrative",
        "Key influencers"
      ],
      "answer": "D",
      "explanation": "The key influencers visual runs an analysis that compares each explanatory field against an outcome, such as Churned being Yes, and ranks the factors by how much they change the likelihood of that outcome. It also identifies top segments, combinations of values where the outcome is most likely. A decomposition tree lets users break a measure down across dimensions, but it does not rank factors by their effect on a categorical outcome.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Identify patterns and trends",
      "difficulty": "medium",
      "source": "PL-300 study guide, Visualize and analyze the data: Identify patterns and trends; Create key influencers visualizations"
    },
    {
      "stem": "You have a single bar chart that shows [Total Sales]. Report users must be able to use a slicer to choose whether the chart's axis shows Product Category, Region or Customer Segment, without you creating additional visuals or bookmarks. What should you create in Power BI Desktop?",
      "options": [
        "A field parameter that includes the three columns",
        "A what-if parameter that has three values",
        "A Power Query parameter with a list of three values",
        "A hierarchy that contains the three columns"
      ],
      "answer": "A",
      "explanation": "A field parameter creates a table of the selected fields and a slicer, and when it is used on a visual's axis, the visual shows whichever field the user selects. This lets one visual switch dimensions or measures dynamically. A what-if parameter produces a numeric value for calculations, a Power Query parameter is applied when data is loaded, and a hierarchy supports drilling through levels rather than choosing one field from a slicer.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Create reports",
      "difficulty": "medium",
      "source": "PL-300 study guide, Visualize and analyze the data: Create reports; Let report readers use field parameters to change visuals"
    },
    {
      "stem": "A report developer needs to publish, update and delete reports and semantic models in a Power BI workspace. Following the principle of least privilege, the developer must not be able to add other users to the workspace or change workspace settings. Which workspace role should you assign?",
      "options": [
        "Viewer",
        "Member",
        "Contributor",
        "Admin"
      ],
      "answer": "C",
      "explanation": "The Contributor role can create, edit and delete content in a workspace, including publishing reports and semantic models, but cannot add users or manage the workspace. Members can also add users with the Member role or a lower role, and Admins have full control, including workspace settings and deleting the workspace. Viewers can only view and interact with content, so Contributor is the lowest role that meets the requirement.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "medium",
      "source": "PL-300 study guide, Manage and secure Power BI: Create and manage workspaces and assets; Roles in workspaces in the Power BI service"
    },
    {
      "stem": "A Sales table contains a SalespersonEmail column that holds each salesperson's sign-in user principal name. Salespeople will view a published report and must see only their own rows. You need to implement this by using a single role. Which two actions should you perform? Each correct answer presents part of the solution. Choose TWO.",
      "options": [
        "In Power BI Desktop, create a role with the table filter [SalespersonEmail] = USEROBJECTID()",
        "In Power BI Desktop, create a role with the table filter [SalespersonEmail] = USERPRINCIPALNAME()",
        "In the Power BI service, add the salespeople to the role on the semantic model's Security page",
        "In the Power BI service, add the salespeople to the workspace with the Contributor role"
      ],
      "answer": "BC",
      "explanation": "Dynamic row-level security uses one role whose DAX filter compares a column with the identity of the signed-in user; USERPRINCIPALNAME returns the user's UPN, which matches the email values in the column. Roles are defined in Power BI Desktop, but users or groups are assigned to them in the Power BI service on the semantic model's Security page. USEROBJECTID returns the user's Microsoft Entra object ID, not the UPN, and RLS does not restrict users with the Contributor, Member or Admin workspace role.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "hard",
      "source": "PL-300 study guide, Manage and secure Power BI: Secure and govern Power BI items; Row-level security (RLS) with Power BI"
    },
    {
      "stem": "You publish a Power BI report whose semantic model imports data from a SQL Server database hosted in your company's on-premises data center. You need to configure scheduled refresh for the semantic model in the Power BI service. What is required?",
      "options": [
        "A deployment pipeline",
        "An on-premises data gateway",
        "A Premium capacity for the workspace",
        "A Power BI app for the workspace"
      ],
      "answer": "B",
      "explanation": "The Power BI service runs in the cloud and cannot reach data sources inside a private network on its own. An on-premises data gateway installed on a machine that can reach the SQL Server acts as a bridge, securely moving the data the service needs for refresh. Scheduled refresh of on-premises sources does not need Premium capacity, and deployment pipelines and apps manage and distribute content rather than connect to data.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "easy",
      "source": "PL-300 study guide, Manage and secure Power BI: Create and manage workspaces and assets; What is an on-premises data gateway?"
    }
  ]
}
```
