```json
{
  "format": "domcq/1",
  "exam": "pl-300",
  "set": "PL-300: Microsoft Power BI Data Analyst practice – Core skills mix",
  "questions": [
    {
      "stem": "In Power Query Editor, you want a small bar displayed directly beneath every column header that shows the percentage of values in that column that are valid, contain errors, or are empty. Which option on the View tab should you enable?",
      "options": [
        "Column distribution",
        "Column quality",
        "Monospaced",
        "Show whitespace"
      ],
      "answer": "B",
      "explanation": "Column quality adds an indicator under each column header that splits the column's values into Valid, Error and Empty percentages. It is the quickest way to spot data-quality problems such as failed type conversions or missing values before loading. Column distribution shows distinct and unique counts instead, while Monospaced and Show whitespace only change how values are displayed.",
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "easy",
      "source": "PL-300 skills measured: Profile and clean the data – evaluate data, including data statistics and column properties (Power Query data profiling tools)"
    },
    {
      "stem": "You are profiling a query with about 2 million rows in Power Query Editor. Column distribution shows 980 distinct values for CustomerID, but you know the source contains about 150,000 customers. You need the profiling statistics to reflect every row in the query. What should you do?",
      "options": [
        "Enable Column quality in addition to Column distribution",
        "Remove duplicates from CustomerID and refresh the preview",
        "Change the data type of CustomerID from Whole Number to Text",
        "Change the status bar setting to profile the entire data set"
      ],
      "answer": "D",
      "explanation": "By default, Power Query's profiling tools (column quality, distribution and profile) are calculated on the top 1,000 rows only, so statistics on a large query can be misleading. The status bar setting lets you switch from 'Column profiling based on top 1000 rows' to profiling based on the entire data set. Changing data types or removing duplicates alters the data rather than the scope of the profiling.",
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Profile and clean the data – evaluate data statistics and column properties (Power Query data profiling scope)"
    },
    {
      "stem": "A query imported from Excel has the columns Product, Jan, Feb, Mar and so on to Dec, with a sales amount in each month column. You need a table with the columns Product, Month and Sales, and the query must keep working correctly if more month columns are added to the source later. What should you do in Power Query Editor?",
      "options": [
        "Select the Product column and use Unpivot Other Columns",
        "Select the month columns and use Pivot Column",
        "Use Transpose and then use the first row as headers",
        "Select the month columns and use Unpivot Only Selected Columns"
      ],
      "answer": "A",
      "explanation": "Unpivot Other Columns turns every column except the selected ones into attribute-value pairs, producing Product, Attribute (renamed Month) and Value (renamed Sales). Because the step records only the column to keep, any new month columns are unpivoted automatically. Unpivot Only Selected Columns hard-codes the selected column names, so new months would be left out, while Pivot and Transpose reshape the data in the wrong direction.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Transform and load the data – pivot, unpivot, and transpose data"
    },
    {
      "stem": "You have two Power Query queries, Orders and Customers, that both contain a CustomerID column. You need a new query that contains only the orders whose CustomerID does not exist in Customers. You use Merge Queries as New with Orders as the first table and Customers as the second table. Which join kind should you select?",
      "options": [
        "Left outer",
        "Inner",
        "Left anti",
        "Right anti"
      ],
      "answer": "C",
      "explanation": "A left anti join returns only the rows from the first (left) table that have no matching row in the second table, which is exactly the set of orders with an unknown customer. A left outer join keeps all orders, matched or not, and an inner join keeps only matched orders. A right anti join would return customers that have no orders, the opposite of what is needed.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Transform and load the data – merge and append queries (Power Query join kinds)"
    },
    {
      "stem": "Your Power BI Desktop file contains twelve queries that connect to the same SQL Server database. You need to switch all of the queries from the development server to the production server by changing one value, and that value must also be changeable in the Power BI service after the semantic model is published. What should you do?",
      "options": [
        "Put all twelve queries into one query group and rename the group",
        "Create a text parameter for the server name and use it in each Source step",
        "Duplicate every query and edit the server name in each duplicate",
        "Add a custom column that holds the production server name"
      ],
      "answer": "B",
      "explanation": "A Power Query parameter stores a value once and can be referenced by many queries, so pointing every Source step at a ServerName parameter means one edit changes them all. Parameters are also exposed in the semantic model settings in the Power BI service, where the value can be changed without republishing. Query groups only organise queries, and custom columns add data rather than changing the connection.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "easy",
      "source": "PL-300 skills measured: Get or connect to data – create and modify parameters"
    },
    {
      "stem": "You use Get data, Folder and then Combine Files to load 40 CSV files that share the same layout. Each file begins with two lines of notes above its header row. You need to remove those two lines from every file before the files are appended together. Where should you add the transformation steps?",
      "options": [
        "In the final combined query, after the Expanded Table Column step",
        "In the parameter query that Combine Files created",
        "In the Sample File query, by pointing it to a different file",
        "In the Transform Sample File query"
      ],
      "answer": "D",
      "explanation": "Combine Files generates helper queries, and the Transform Sample File query defines the function that is applied to each file before the results are appended. Steps added there, such as removing the top two rows and promoting headers, therefore run against every file. Removing rows in the final combined query would affect only the top of the combined table, leaving the note rows from the other 39 files mixed into the data.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "hard",
      "source": "PL-300 skills measured: Get or connect to data / Transform and load the data – combine files from a folder in Power Query"
    },
    {
      "stem": "In your semantic model, the Customer table contains one row per customer with a unique CustomerID, and the Sales table contains many rows for each customer. You create a relationship between the two tables on CustomerID. Which cardinality should the relationship have?",
      "options": [
        "One-to-many, with Customer on the one side",
        "One-to-many, with Sales on the one side",
        "One-to-one between Customer and Sales",
        "Many-to-many between Customer and Sales"
      ],
      "answer": "A",
      "explanation": "In a star schema, a dimension table such as Customer holds unique key values and sits on the one side, while a fact table such as Sales repeats those keys and sits on the many side. A one-to-many relationship with single-direction filtering lets Customer attributes filter Sales. The Sales column is not unique, so it cannot be the one side, and many-to-many should be reserved for cases where neither side has unique keys.",
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "easy",
      "source": "PL-300 skills measured: Design and implement a data model – define a relationship's cardinality and cross-filter direction"
    },
    {
      "stem": "Your Sales table has an OrderDate column and a ShipDate column, and both are related to the 'Date'[Date] column. The OrderDate relationship is active and the ShipDate relationship is inactive. A measure named [Total Sales] already exists. You need a measure that returns total sales by ship date when it is used with columns from the Date table. Which DAX expression should you use?",
      "options": [
        "CALCULATE([Total Sales], CROSSFILTER(Sales[ShipDate], 'Date'[Date], Both))",
        "CALCULATE([Total Sales], RELATED('Date'[Date]))",
        "CALCULATE([Total Sales], USERELATIONSHIP(Sales[ShipDate], 'Date'[Date]))",
        "CALCULATE([Total Sales], ALL(Sales[OrderDate]))"
      ],
      "answer": "C",
      "explanation": "Only one relationship between two tables can be active, so a role-playing date such as ShipDate is modelled as an inactive relationship. USERELATIONSHIP, used as a CALCULATE modifier, activates that relationship for the duration of the calculation, so the Date table filters Sales through ShipDate. CROSSFILTER changes the filter direction of a relationship rather than which relationship is used, and RELATED works in row context, not as a filter.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Design and implement a data model – implement role-playing dimensions; Create model calculations by using DAX – CALCULATE"
    },
    {
      "stem": "You plan to use Mark as date table on a Date table so that DAX time intelligence functions work correctly with it. Which TWO conditions must the selected date column meet? Choose TWO.",
      "options": [
        "Its first value must be January 1 of a calendar year",
        "It must contain unique values and no blanks",
        "It must be related to each fact table by a bidirectional relationship",
        "It must contain every date in its range with no gaps"
      ],
      "answer": "BD",
      "explanation": "When you mark a date table, Power BI validates that the chosen column has a date data type, contains unique values with no blanks, and covers a contiguous range of dates with no missing days. Time intelligence functions such as TOTALYTD and SAMEPERIODLASTYEAR rely on this continuous calendar to shift and accumulate periods. Covering full years is good practice but is not checked, and relationships to fact tables are normally single-direction.",
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Design and implement a data model – create a common date table; mark as date table requirements"
    },
    {
      "stem": "Your semantic model has Sales, Product and Date tables in a star schema, and a measure named [Total Sales]. A matrix shows Product[Category] on rows, and the report page has slicers on Product[Color] and Date[Year]. You need a measure that shows each category's sales as a percentage of sales for all products, ignoring every filter on the Product table, including the Color slicer, while still respecting the Year slicer. Which DAX expression should you use?",
      "options": [
        "DIVIDE([Total Sales], CALCULATE([Total Sales], ALLSELECTED('Product')))",
        "DIVIDE([Total Sales], CALCULATE([Total Sales], ALL('Product')))",
        "DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(Sales)))",
        "DIVIDE([Total Sales], SUMX('Product', [Total Sales]))"
      ],
      "answer": "B",
      "explanation": "ALL('Product') inside CALCULATE removes every filter on the Product table, from both the matrix rows and the Color slicer, while filters on Date still flow to Sales, so the denominator is all-product sales for the selected year. ALLSELECTED keeps filters that come from outside the visual, so the Color slicer would still restrict the denominator. ALL(Sales) removes filters from the expanded Sales table, which includes the Date filter, and the SUMX version iterates only the visible products, giving the same value as the numerator.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "hard",
      "source": "PL-300 skills measured: Create model calculations by using DAX – use CALCULATE to manipulate filters (ALL, ALLSELECTED)"
    },
    {
      "stem": "You need to classify every customer into an age band (Under 30, 30 to 49, 50 and over) based on the Customer[Age] column. Report users must be able to add the age band to a slicer, and you must implement the classification by using DAX. What should you create?",
      "options": [
        "A measure that uses the SWITCH function",
        "A quick measure based on Customer[Age]",
        "A calculated table that uses SUMMARIZE",
        "A calculated column in the Customer table"
      ],
      "answer": "D",
      "explanation": "A calculated column is evaluated row by row in the context of each customer when the model refreshes, and its values are stored like any other column. Because it is a column, it can be used on slicers, axes and filters. Measures, including quick measures, are evaluated at query time over aggregated filter context and cannot be placed on a slicer.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "easy",
      "source": "PL-300 skills measured: Create model calculations by using DAX – create calculated columns; calculated columns versus measures"
    },
    {
      "stem": "Your Import mode semantic model is much larger than expected. You need to reduce the size of the model without removing any data that reports, relationships or measures use. Which TWO actions should you take? Choose TWO.",
      "options": [
        "Remove columns that no report, relationship or measure uses",
        "Change single-direction relationships to bidirectional",
        "Split a DateTime column with values to the second into Date and Time columns",
        "Replace measures with equivalent calculated columns"
      ],
      "answer": "AC",
      "explanation": "The VertiPaq engine compresses each column separately, and its size depends heavily on the number of distinct values, so unused columns waste memory and high-cardinality columns compress poorly. Removing unneeded columns and splitting a DateTime column into a Date column and a Time column both reduce stored cardinality. Relationship direction does not reduce storage, and calculated columns add stored data whereas measures take up almost no space.",
      "topic": "Model the data",
      "subtopic": "Optimize model performance",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Optimize model performance – improve performance by reducing granularity and removing unnecessary rows and columns"
    },
    {
      "stem": "You need a visual that shows how a starting profit figure is increased and decreased by individual revenue and cost categories, ending with the final profit figure, so that users can see the contribution of each category to the overall change. Which visual should you use?",
      "options": [
        "Funnel chart",
        "Ribbon chart",
        "Waterfall chart",
        "Scatter chart"
      ],
      "answer": "C",
      "explanation": "A waterfall chart shows a running total as values are added or subtracted, with increases and decreases shown as floating columns between a starting value and a total. This makes it suited to explaining how individual components build up a final result. A funnel chart shows stages of a sequential process, a ribbon chart shows rank changes over time, and a scatter chart shows the relationship between two measures.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Create reports",
      "difficulty": "easy",
      "source": "PL-300 skills measured: Create reports – select an appropriate visual (waterfall chart)"
    },
    {
      "stem": "A report has an Overview page and a Product Details page. Users must be able to right-click a product in any visual on the Overview page and navigate to the Product Details page, which must then show data only for that product. What should you do?",
      "options": [
        "Add Product[ProductName] to the Drillthrough fields on the Product Details page",
        "Create a bookmark of the Product Details page for every product",
        "Use the Sync slicers pane to sync a product slicer across both pages",
        "Turn on Allow use as tooltip for the Product Details page"
      ],
      "answer": "A",
      "explanation": "Adding a field to the Drillthrough well of a target page makes that page available from the right-click Drill through menu in any visual that uses the field. Power BI passes the selected value as a filter, so the target page shows only that product, and it adds a back button automatically. Bookmarks capture fixed states and cannot pass the clicked value, and synced slicers require users to make a selection themselves.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Enhance reports for usability and storytelling – configure drillthrough navigation"
    },
    {
      "stem": "A report page contains a bar chart of sales by region, a table of sales by product, and a card that must always show total sales for all regions. When a user selects a bar in the bar chart, the card changes to show only that region. The table must continue to respond to selections in the bar chart. What should you do?",
      "options": [
        "Hide the card in the Selection pane and show it with a bookmark",
        "Add a visual-level filter to the card that selects every region",
        "Disable the Visual header option in the card's format settings",
        "Select the bar chart, turn on Edit interactions, and set the card to None"
      ],
      "answer": "D",
      "explanation": "Edit interactions controls how selecting data points in one visual affects each other visual on the page, with options such as Filter, Highlight and None. Setting the card to None while the bar chart is selected stops the card reacting to bar selections, while the table keeps its default filtering behaviour. A visual-level filter that includes all regions still allows cross-filtering, and the visual header option only controls the icons shown above the visual.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Enhance reports for usability and storytelling – configure interactions between visuals"
    },
    {
      "stem": "You have customer data that includes a Churned column with the values Yes and No, and attributes such as contract type, tenure band and region. You need a visual that analyzes the data and ranks the attributes by how much each one increases the likelihood that Churned is Yes. Which visual should you use?",
      "options": [
        "Decomposition tree",
        "Key influencers",
        "Q&A",
        "Smart narrative"
      ],
      "answer": "B",
      "explanation": "The Key influencers visual uses machine learning to compare the outcome you choose, here Churned equals Yes, across the explanatory fields you supply. It ranks the factors by their effect, for example showing that customers on a monthly contract are a stated number of times more likely to churn. A decomposition tree lets users break a measure down by dimensions, but it does not rank factors by their influence on a categorical outcome.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Identify patterns and trends",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Identify patterns and trends – use AI visuals (Key influencers)"
    },
    {
      "stem": "When users hover over a column in a column chart, you want Power BI to display a small report page containing a line chart that is filtered to the hovered data point. You have already created the page and set its canvas size to Tooltip. Which TWO additional actions should you take? Choose TWO.",
      "options": [
        "Add the tooltip page to a bookmark group with the main page",
        "Turn on Allow use as tooltip in the tooltip page's Page information settings",
        "In the column chart's tooltip settings, set the type to Report page and select the tooltip page",
        "Turn on Cross-report drillthrough for the tooltip page"
      ],
      "answer": "BC",
      "explanation": "A report page tooltip is a normal page that you designate as a tooltip by turning on Allow use as tooltip in its page information; the Tooltip canvas size only sets its dimensions. You then point the source visual at it by setting the tooltip type to Report page and choosing the page. The hovered data point's filters are passed to the tooltip page, while bookmarks and drillthrough are separate navigation features.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "hard",
      "source": "PL-300 skills measured: Enhance reports for usability and storytelling – create custom tooltips (report page tooltips)"
    },
    {
      "stem": "A user must be able to publish, edit and delete reports and semantic models in a Power BI workspace, but must not be able to add other people to the workspace. You need to assign the workspace role that follows the principle of least privilege. Which role should you assign?",
      "options": [
        "Contributor",
        "Member",
        "Admin",
        "Viewer"
      ],
      "answer": "A",
      "explanation": "The Contributor role can create, edit, publish and delete content in a workspace but cannot add users or change workspace access. Members can also add other users with Member or lower roles, and Admins have full control including deleting the workspace. Viewers can only view and interact with content, so they cannot publish.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "easy",
      "source": "PL-300 skills measured: Secure and govern Power BI items – assign workspace roles"
    },
    {
      "stem": "Several analysts publish semantic models that use Import mode against an on-premises SQL Server database, and one model uses DirectQuery against the same server. You need scheduled refresh and DirectQuery to work in the Power BI service, and the connection must be centrally managed and shared by all the analysts. What should you use?",
      "options": [
        "An on-premises data gateway in personal mode on each analyst's computer",
        "No gateway, because the service connects to on-premises SQL Server directly",
        "An on-premises data gateway in standard mode installed on a server",
        "Power BI Desktop left open on a server to refresh and republish the models"
      ],
      "answer": "C",
      "explanation": "The Power BI service cannot reach on-premises sources directly, so a gateway is required for both scheduled refresh and DirectQuery. A gateway in standard mode can be shared by many users, is managed centrally through connections, and supports Import, DirectQuery and live connections. Personal mode is tied to one user and supports only Import refresh, so it cannot serve the DirectQuery model or be shared.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "medium",
      "source": "PL-300 skills measured: Create and manage workspaces and assets – identify when a gateway is required; configure semantic model scheduled refresh"
    },
    {
      "stem": "You publish a semantic model that has a row-level security role limiting rows to the user's sales region, and in the Power BI service you add a user to that role. The user opens the report from the workspace and sees data for every region. The user has the Member role in the workspace. What is the most likely cause?",
      "options": [
        "Role membership takes effect only after the next scheduled refresh",
        "RLS filters apply in Power BI Desktop but not in the Power BI service",
        "The user must also be added to the role in Desktop before publishing",
        "RLS does not restrict workspace Admins, Members or Contributors"
      ],
      "answer": "D",
      "explanation": "Row-level security filters apply only to users with read access to the semantic model, such as workspace Viewers or people given access through an app or sharing. Admins, Members and Contributors have edit permission on the semantic model, so RLS is not enforced for them. To restrict this user, give them the Viewer role or distribute the content through an app instead.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "hard",
      "source": "PL-300 skills measured: Secure and govern Power BI items – implement row-level security roles; configure role membership"
    }
  ]
}
```
