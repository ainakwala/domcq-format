```json
{
  "format": "domcq/1",
  "exam": "pl-300",
  "set": "PL-300: Microsoft Power BI Data Analyst practice – Core skills mixed set",
  "questions": [
    {
      "stem": "You are connecting Power BI Desktop to a large Azure SQL Database. Report visuals must always query the latest data in the database, and the data must not be copied into the Power BI semantic model. Which storage mode should you use for the tables?",
      "options": [
        "Import",
        "Dual",
        "DirectQuery",
        "Import with incremental refresh"
      ],
      "answer": "C",
      "explanation": "In DirectQuery mode, no data is stored in the semantic model; each visual sends queries to the source at run time, so results reflect the current state of the database. Import and Dual both keep a copy of the data in the model's in-memory cache that is only as current as the last refresh. Incremental refresh is still a form of Import that copies data into the model.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "easy",
      "source": "PL-300 study guide, Prepare the data: Get or connect to data; Use DirectQuery in Power BI Desktop"
    },
    {
      "stem": "You build a report that imports data from a SQL Server database named SalesDB. An identical copy of the database exists on a development server and on a production server. After publishing, you must be able to switch the semantic model between the two servers from its settings in the Power BI service, without editing any queries. What should you do?",
      "options": [
        "Create a Power Query parameter for the server name and use it in the Source step of each query.",
        "Create a DAX calculated table that stores the server name and reference it in each measure.",
        "Duplicate every query, point the copies at the production server, and disable load for the originals.",
        "Create a what-if parameter for the server name and bind it to a slicer on each report page."
      ],
      "answer": "A",
      "explanation": "Power Query parameters can be referenced in a query's Source step, so the connection details come from the parameter instead of being hard-coded. After publishing, parameter values can be changed in the semantic model's settings in the Power BI service and take effect on the next refresh. DAX tables and what-if parameters are evaluated after data is loaded, so they cannot change which server the data comes from.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "medium",
      "source": "PL-300 study guide, Prepare the data: Get or connect to data; Power Query parameters"
    },
    {
      "stem": "In the Power Query Editor, you want to see, for a selected column, how many distinct values and how many unique values it contains. Which two Data Preview options display this information? Choose TWO.",
      "options": [
        "Column quality",
        "Column distribution",
        "Column profile",
        "Show whitespace"
      ],
      "answer": "BC",
      "explanation": "Column distribution shows a small histogram under each column header together with the count of distinct values (how many different values exist) and unique values (values that appear exactly once). Column profile opens a pane for the selected column with column statistics, including distinct and unique counts, plus a value distribution chart. Column quality only shows the percentages of valid, error and empty values, and Show whitespace only changes how spaces and line breaks are displayed.",
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "medium",
      "source": "PL-300 study guide, Prepare the data: Profile and clean the data; Data profiling tools"
    },
    {
      "stem": "In the Power Query Editor, you change the data type of a Quantity column from Text to Whole Number. A few rows contained the text \"n/a\", and those cells now show Error. You must keep every row and have those cells contain null. Which action should you apply to the Quantity column?",
      "options": [
        "Keep errors",
        "Replace errors",
        "Remove errors",
        "Fill down"
      ],
      "answer": "B",
      "explanation": "Replace errors lets you supply a replacement value, such as null, for cell-level errors in the selected column while leaving the rows in place. Remove errors deletes every row that has an error in the column, which would lose data. Keep errors does the opposite of what is needed by filtering the table to only the rows with errors, and Fill down copies the value from the row above into null cells.",
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "easy",
      "source": "PL-300 study guide, Prepare the data: Profile and clean the data; Dealing with errors in Power Query"
    },
    {
      "stem": "In Power Query, you have a Customers query and an Orders query that both contain a CustomerID column. You need a new query that lists only the customers who have never placed an order. You will merge Customers as the first (left) table with Orders as the second (right) table. Which join kind should you select?",
      "options": [
        "Left outer",
        "Inner",
        "Right anti",
        "Left anti"
      ],
      "answer": "D",
      "explanation": "A left anti join returns only the rows from the first table that have no matching row in the second table, which here means customers with no orders. A right anti join returns rows from the second table without a match, so it would find orders with no matching customer. An inner join keeps only customers who do have orders, and a left outer join keeps all customers whether or not they have orders.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "medium",
      "source": "PL-300 study guide, Prepare the data: Transform and load the data; Left anti join"
    },
    {
      "stem": "A query in the Power Query Editor has a Product column followed by one column per month (Jan, Feb, Mar and so on) that holds sales amounts. A new month column is added to the source every month. You need to reshape the data into the columns Product, Attribute and Value so that future month columns are included automatically, without editing the query. What should you do?",
      "options": [
        "Select the Product column and select Unpivot Other Columns.",
        "Select all month columns and select Unpivot Only Selected Columns.",
        "Select all month columns and select Pivot Column.",
        "Select the Product column and select Transpose."
      ],
      "answer": "A",
      "explanation": "Unpivot Other Columns generates a step that lists only the columns to keep (Product), so every other column, including month columns added later, is unpivoted into Attribute and Value rows. Unpivot Only Selected Columns hard-codes the month column names in the step, so new months would stay as separate columns. Pivot Column performs the reverse operation, and Transpose swaps all rows and columns rather than producing attribute-value pairs.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "hard",
      "source": "PL-300 study guide, Prepare the data: Transform and load the data; Unpivot columns"
    },
    {
      "stem": "You have an imported table named Calendar and plan to mark it as a date table in Power BI Desktop by using its Date column, which has the Date data type. Which three conditions must the Date column meet for the validation to succeed? Choose THREE.",
      "options": [
        "It contains no blank values.",
        "It contains unique values.",
        "It is sorted in ascending order.",
        "It contains contiguous dates with no gaps."
      ],
      "answer": "ABD",
      "explanation": "When you mark a table as a date table, Power BI validates that the chosen column contains unique values, has no nulls or blanks, and holds a contiguous range of dates from start to end. These rules let time intelligence functions shift and compare periods reliably. The physical sort order of the rows is not checked, because the model engine does not depend on row order.",
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "medium",
      "source": "PL-300 study guide, Model the data: Design and implement a data model; Set and use date tables in Power BI Desktop"
    },
    {
      "stem": "Your model has a Sales fact table related to a Product table. Product is related to a Subcategory table, and Subcategory is related to a Category table. Report authors find the model hard to use, and you want the model to follow star schema design. What should you do?",
      "options": [
        "Set the relationships between Product, Subcategory and Category to filter in both directions.",
        "Append the Subcategory and Category queries to the Sales query in Power Query.",
        "Merge Subcategory and Category into Product in Power Query to form one Product dimension.",
        "Create a many-to-many relationship directly between the Sales and Category tables."
      ],
      "answer": "C",
      "explanation": "The Product, Subcategory and Category chain is a snowflake design; a star schema denormalizes it into a single Product dimension that holds the subcategory and category attributes. Merging the queries in Power Query adds those columns to Product, which reduces the number of tables and relationship hops and gives authors one place to find product attributes. Appending would stack unrelated rows into the fact table, and bi-directional or many-to-many relationships add ambiguity rather than simplifying the model.",
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "medium",
      "source": "PL-300 study guide, Model the data: Design and implement a data model; Understand star schema and the importance for Power BI"
    },
    {
      "stem": "Your model has a Sales table and a Product table related one-to-many, and a measure [Total Sales] = SUM(Sales[Amount]). A matrix shows Product[Category] on rows. You need a measure that shows each category's sales as a percentage of sales for all categories, while still respecting filters from other tables such as Date. Which DAX expression should you use?",
      "options": [
        "DIVIDE([Total Sales], CALCULATE([Total Sales], ALL('Date')))",
        "DIVIDE([Total Sales], SUMX(Product, [Total Sales]))",
        "DIVIDE([Total Sales], CALCULATE([Total Sales], VALUES(Product[Category])))",
        "DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(Product)))"
      ],
      "answer": "D",
      "explanation": "Used as a CALCULATE filter argument, ALL(Product) removes the filters on Product columns, including the current category, so the denominator returns sales for all categories while filters from Date and other tables still apply. ALL('Date') removes the date filter instead and keeps the category filter, which is the opposite of what is needed. SUMX over Product and VALUES(Product[Category]) both stay within the current category, so they would return 100% on every row.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 study guide, Model the data: Create model calculations by using DAX; ALL function (DAX)"
    },
    {
      "stem": "You have a [Total Sales] measure and a Date table that is marked as a date table. You need a measure that returns sales for the same period one year earlier for whatever period is in the filter context, such as a month or a quarter. Which DAX expression should you use?",
      "options": [
        "CALCULATE([Total Sales], DATESYTD('Date'[Date]))",
        "CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))",
        "TOTALYTD([Total Sales], 'Date'[Date])",
        "CALCULATE([Total Sales], PREVIOUSYEAR('Date'[Date]))"
      ],
      "answer": "B",
      "explanation": "SAMEPERIODLASTYEAR returns the dates in the current filter context shifted back by one year, so March 2025 becomes March 2024 and Q2 2025 becomes Q2 2024. PREVIOUSYEAR returns every date of the whole previous year, not just the matching period. DATESYTD and TOTALYTD calculate a year-to-date total for the current year rather than a prior-year comparison.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "easy",
      "source": "PL-300 study guide, Model the data: Create model calculations by using DAX; SAMEPERIODLASTYEAR function (DAX)"
    },
    {
      "stem": "A Sales table has OrderDate and ShipDate columns, and both are related to the Date table. The relationship on OrderDate is active and the relationship on ShipDate is inactive. You need a measure that totals Sales[Amount] by ship date without changing the model. Which DAX function should you use as a filter argument of CALCULATE?",
      "options": [
        "CROSSFILTER",
        "RELATEDTABLE",
        "USERELATIONSHIP",
        "ALLEXCEPT"
      ],
      "answer": "C",
      "explanation": "USERELATIONSHIP activates an existing inactive relationship for the duration of the CALCULATE evaluation, and the active relationship between the same tables is ignored while it applies. This is the standard way to handle a role-playing dimension such as Date without duplicating the table. CROSSFILTER only changes the filter direction of a relationship, and RELATEDTABLE and ALLEXCEPT do not change which relationship is used.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 study guide, Model the data: Create model calculations by using DAX; USERELATIONSHIP function (DAX)"
    },
    {
      "stem": "An Import model contains a Sales table with 50 million rows. Its TransactionDateTime column stores values to the second, and analysis shows that this column uses most of the model's memory. Reports analyze sales only by date and by hour of day. Which change will reduce the model size the most while still supporting these reports?",
      "options": [
        "Replace the column with a Date column and an Hour column in Power Query.",
        "Change the column's data type from Date/Time to Text in Power Query.",
        "Hide the column in the model and set its Summarize by property to None.",
        "Add calculated columns for the date and the hour and hide the original column."
      ],
      "answer": "A",
      "explanation": "Import models compress each column using a dictionary of its distinct values, so storage is driven by cardinality; a per-second timestamp is close to unique on every row. Splitting it into a Date column (a few thousand distinct values) and an Hour column (24 values) and removing the original drastically lowers cardinality while keeping the needed grain. Hiding a column or changing its summarization does not remove it from memory, converting to text keeps the same cardinality, and calculated columns add storage on top of the original column.",
      "topic": "Model the data",
      "subtopic": "Optimize model performance",
      "difficulty": "hard",
      "source": "PL-300 study guide, Model the data: Optimize model performance; Data reduction techniques for Import modeling"
    },
    {
      "stem": "You need a visual that shows how a starting annual profit figure is increased and decreased by individual revenue and cost categories to arrive at the final profit figure. Which visual should you use?",
      "options": [
        "Funnel chart",
        "Waterfall chart",
        "Ribbon chart",
        "Scatter chart"
      ],
      "answer": "B",
      "explanation": "A waterfall chart shows a running total as positive and negative values are added, with each category drawn as a floating bar that rises or falls from the previous total. This makes it clear which items contribute most to the change between a starting and an ending value. Funnel charts show stages of a sequential process, ribbon charts show rank changes over time, and scatter charts show the relationship between two numeric measures.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Create reports",
      "difficulty": "easy",
      "source": "PL-300 study guide, Visualize and analyze the data: Create reports; Waterfall charts in Power BI"
    },
    {
      "stem": "A report has a Summary page and a Customer Details page. Users must be able to right-click a customer in any visual on the Summary page and open the Customer Details page filtered to that customer. What should you do on the Customer Details page?",
      "options": [
        "Add the customer field to the Filters on this page well and lock the filter.",
        "Create a bookmark that captures the currently selected customer.",
        "Add a customer slicer and turn on Sync slicers for both pages.",
        "Add the customer field to the Drill through well in the Visualizations pane."
      ],
      "answer": "D",
      "explanation": "Adding a field to the drillthrough well on a target page makes it a drillthrough page: any visual that uses that field elsewhere in the report shows a Drill through option on right-click. The target page then opens filtered to the selected value, and Power BI adds a back button automatically. Page filters, bookmarks and synced slicers do not pass the selected data point from one page to another on right-click.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 study guide, Visualize and analyze the data: Enhance reports for usability and storytelling"
    },
    {
      "stem": "On a report page, a chart and a table occupy the same space, and two buttons use bookmarks to show one visual and hide the other. Users must be able to switch between the visuals without the bookmarks resetting slicer selections they have already made on the page. What should you do for each bookmark?",
      "options": [
        "Clear the Data option and keep the Display option selected.",
        "Clear the Display option and keep the Data option selected.",
        "Clear the Current page option and keep the Data option selected.",
        "Change each button's action from Bookmark to Page navigation."
      ],
      "answer": "A",
      "explanation": "A bookmark's Data option captures filters, slicer selections, sort order and drill state, so clearing it means applying the bookmark leaves the user's current slicer selections unchanged. The Display option captures visual visibility from the Selection pane, which is what hides one visual and shows the other, so it must stay selected. Clearing Display would stop the toggle from working, and page navigation cannot show or hide visuals on the same page.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "hard",
      "source": "PL-300 study guide, Visualize and analyze the data: Enhance reports for usability and storytelling"
    },
    {
      "stem": "A marketing analyst wants to find which customer attributes, such as region, tenure and subscription type, most increase the likelihood that a customer's Churned value is Yes. The factors must be identified and ranked automatically. Which Power BI visual should the analyst use?",
      "options": [
        "Decomposition tree",
        "Q&A visual",
        "Key influencers",
        "Smart narrative"
      ],
      "answer": "C",
      "explanation": "The key influencers visual uses machine learning to analyze the fields you add to Explain by and ranks the factors that most affect the selected outcome, such as Churned being Yes. It reports each factor's effect, for example how many times more likely churn is for a given segment. A decomposition tree lets you drill a measure across dimensions, while Q&A and smart narrative answer questions or summarize data rather than rank drivers.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Identify patterns and trends",
      "difficulty": "easy",
      "source": "PL-300 study guide, Visualize and analyze the data: Identify patterns and trends"
    },
    {
      "stem": "A report page has a Region slicer, a card that shows total sales, and a line chart of monthly sales. Selecting a region must filter the line chart, but the card must always show total sales for all regions. You need to meet this requirement without changing any DAX. What should you do?",
      "options": [
        "Select the card and add a visual-level filter that selects all regions.",
        "Select the slicer and turn off Sync slicers for the current page.",
        "Select the card and turn on Keep all filters in its drillthrough settings.",
        "Select the slicer, turn on Edit interactions, and set the card to None."
      ],
      "answer": "D",
      "explanation": "Edit interactions controls how a selected visual, including a slicer, affects each other visual on the same page. Setting the card's interaction to None means the slicer no longer filters the card, while the line chart keeps its default filter interaction. A visual-level filter still combines with the slicer selection, and sync slicer and drillthrough settings do not control interactions between visuals on one page.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Create reports",
      "difficulty": "medium",
      "source": "PL-300 study guide, Visualize and analyze the data: Create reports; Change how visuals interact in a Power BI report"
    },
    {
      "stem": "A user must be able to publish reports to a Power BI workspace and create, edit and delete content in it. The user must not be able to add or remove workspace users or publish or update the workspace app. You need to follow the principle of least privilege. Which workspace role should you assign?",
      "options": [
        "Viewer",
        "Contributor",
        "Member",
        "Admin"
      ],
      "answer": "B",
      "explanation": "The Contributor role can create, edit, delete and publish content in a workspace but cannot manage workspace access, and by default cannot publish or update the workspace app. Member adds the ability to add users with lower roles and to publish and update the app, which exceeds the requirement. Viewer can only view and interact with content, and Admin has full control including deleting the workspace.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "medium",
      "source": "PL-300 study guide, Manage and secure Power BI: Create and manage workspaces and assets; Roles in workspaces in Power BI"
    },
    {
      "stem": "You publish a semantic model that has row-level security (RLS) roles and assign a security group of sales managers to the Region role. The managers are Members of the workspace that contains the semantic model and report, and they report that they can see data for every region. You need RLS to apply to them while they can still open the report in the workspace. What should you do?",
      "options": [
        "Change the managers' workspace role from Member to Contributor.",
        "Use Test as role in the service to apply the Region role to the group.",
        "Change the managers' workspace role from Member to Viewer.",
        "Add each manager to the Region role individually instead of by group."
      ],
      "answer": "C",
      "explanation": "RLS filters data only for users who have read-only access to the semantic model, such as workspace Viewers or users who receive content through an app or sharing. Workspace Admins, Members and Contributors have edit permission on the semantic model, so RLS roles are not enforced for them. Moving the managers to Viewer keeps their access to the report while enforcing the Region role; Test as role only previews a role for the person testing it.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "hard",
      "source": "PL-300 study guide, Manage and secure Power BI: Secure and govern Power BI items; Row-level security (RLS) with Power BI"
    },
    {
      "stem": "You publish a report whose semantic model imports data from a SQL Server database hosted in your company's on-premises data center. You need to configure scheduled refresh for the semantic model in the Power BI service. What must be in place?",
      "options": [
        "An on-premises data gateway",
        "A Premium or Fabric capacity",
        "A DirectQuery connection",
        "A dataflow in the same workspace"
      ],
      "answer": "A",
      "explanation": "The Power BI service runs in the cloud and cannot reach data sources inside a private network directly, so an on-premises data gateway acts as the bridge that lets the service refresh from them. Once the gateway is installed and the data source is configured on it, the semantic model can be mapped to the gateway and a refresh schedule set. Scheduled refresh does not require a Premium capacity, DirectQuery would replace imported data rather than refresh it, and a dataflow still needs a gateway to reach on-premises sources.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "easy",
      "source": "PL-300 study guide, Manage and secure Power BI: Create and manage workspaces and assets; What is an on-premises data gateway?"
    }
  ]
}
```
