```json
{
  "format": "domcq/1",
  "exam": "pl-300",
  "set": "PL-300: Microsoft Power BI Data Analyst practice – Mixed skills drill",
  "questions": [
    {
      "stem": "A company stores 2 billion rows of sales transactions in an Azure SQL Database. Report users need visuals that reflect changes in the source within minutes, and the data must not be copied into the Power BI semantic model. Which storage mode should you use for the Sales table?",
      "options": [
        "Import",
        "Dual",
        "DirectQuery",
        "Direct Lake"
      ],
      "answer": "C",
      "explanation": "DirectQuery stores no data in the model: each visual sends a query to the source when it renders, so results reflect the current state of the database. Import and Dual both hold a cached copy of the data that only changes when the model is refreshed. Direct Lake reads Delta tables in OneLake in Microsoft Fabric, so it does not apply to an Azure SQL Database source.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Get or connect to data – Choose between DirectQuery, Import and Direct Lake; Microsoft Learn: Semantic model modes in the Power BI service"
    },
    {
      "stem": "You build a Power BI Desktop report that connects to a SQL Server database. The report must move between development, test and production servers without editing any query steps, and after publishing, the server name must be changeable from the semantic model settings in the Power BI service. What should you do?",
      "options": [
        "Create a text parameter for the server name and use it in the Source step of each query",
        "Create a calculated table that stores the server name and reference it in each query",
        "Duplicate each query for every server and disable load for the copies not in use",
        "Edit the data source settings in Power BI Desktop before each publish to a new server"
      ],
      "answer": "A",
      "explanation": "Power Query parameters can replace hard-coded values such as a server name in a query's Source step. Once the model is published, its parameters appear in the semantic model settings in the Power BI service, so the value can be changed without reopening the file. Calculated tables are DAX objects evaluated after load and cannot feed Power Query, and editing source settings by hand fails the requirement to avoid changes before publishing.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Get or connect to data – Create and modify parameters; Microsoft Learn: Using parameters in Power BI Desktop"
    },
    {
      "stem": "In the Power Query Editor, you turn on Column quality and Column distribution. The CustomerID column shows 100% valid values, but after loading you find that thousands of rows near the end of the table have empty CustomerID values. What should you do so that the profiling statistics reflect every row in the table?",
      "options": [
        "Turn on Column profile in addition to Column quality",
        "Change the data type of the CustomerID column to Text",
        "Select Refresh Preview to reload the query preview",
        "Switch the status bar setting to profile the entire data set"
      ],
      "answer": "D",
      "explanation": "By default, the Power Query data profiling tools calculate their statistics from only the first 1,000 rows of the preview. Selecting \"Column profiling based on entire data set\" in the status bar makes column quality, distribution and profile scan all rows, which would expose the empty values. Turning on another profiling view or refreshing the preview still uses the same 1,000-row sample.",
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Profile and clean the data – Evaluate data, including data statistics and column properties; Microsoft Learn: Using the data profiling tools"
    },
    {
      "stem": "A Power Query query has the columns ProductID, ProductName and one column per month (Jan, Feb, Mar and so on) holding sales amounts. A new month column is added to the source every month. You need a table with the columns ProductID, ProductName, Attribute and Value, and the query must automatically include future month columns. What should you do?",
      "options": [
        "Select the month columns and then select Unpivot Only Selected Columns",
        "Select ProductID and ProductName and then select Unpivot Other Columns",
        "Select the month columns and then select Pivot Column using the values",
        "Select every column in the query and then select Transpose on the table"
      ],
      "answer": "B",
      "explanation": "Unpivot Other Columns records the names of the columns to keep (ProductID and ProductName) and unpivots everything else, so any month column added later is unpivoted too. Unpivot Only Selected Columns records the specific month column names, so new months would remain as columns. Pivot does the opposite of what is needed, and Transpose swaps rows and columns without producing attribute-value pairs.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Transform and load the data – Pivot, unpivot and transpose data; Microsoft Learn: Unpivot columns (Power Query)"
    },
    {
      "stem": "In Power Query, you have two queries named SalesEurope and SalesAmerica that have identical column names and data types. You need a single query that contains all the rows from both queries. Which operation should you use?",
      "options": [
        "Append Queries",
        "Merge Queries with a full outer join",
        "Group By on all the shared columns",
        "Pivot Column on a region column"
      ],
      "answer": "A",
      "explanation": "Appending stacks the rows of one table under another, matching columns by name, which is what combining tables with the same structure requires. Merging joins tables side by side on key columns and adds columns rather than rows. Group By and Pivot reshape or summarise a single table and do not combine rows from two queries.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Transform and load the data – Merge and append queries; Microsoft Learn: Append queries (Power Query)"
    },
    {
      "stem": "A CSV file contains an OrderDate column with text values such as 03/11/2024 and 25/11/2024, written in day/month/year order. The locale in Power BI Desktop is English (United States). After Power Query automatically changes the column type to Date, some rows show errors and others show the wrong month. You need every value to be interpreted correctly. What should you do?",
      "options": [
        "Change the column type to Date/Time/Timezone instead of Date",
        "Replace errors with null in the column after the Date type step",
        "Change the type to Date by using Using Locale with English (United Kingdom)",
        "Change the column type to Text and then mark the table as a date table"
      ],
      "answer": "C",
      "explanation": "Converting text to a date uses a culture to decide the order of day and month. With English (United States), 03/11/2024 is read as 11 March rather than 3 November, and 25/11/2024 fails because there is no month 25. Change Type > Using Locale lets you state the culture of the source text, so every value converts correctly. Replacing errors would discard valid dates and leave the swapped ones wrong.",
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Profile and clean the data – Resolve data import errors; Microsoft Learn: Data types in Power Query (locale-based conversion)"
    },
    {
      "stem": "You import a Date table into a semantic model. It has one row per day, with no gaps, in a Date column of the Date data type. You need Power BI to recognise this table as the model's calendar for DAX time intelligence, and doing so should also remove the built-in auto date/time hierarchy for that column. What should you do?",
      "options": [
        "Create a Year, Quarter, Month and Date hierarchy in the table",
        "Set the default summarization of the Date column to Don't summarize",
        "Turn off the Auto date/time option for new files in Options",
        "Mark the table as a date table and select its Date column"
      ],
      "answer": "D",
      "explanation": "Marking a table as a date table tells Power BI which column is the model's date key. Power BI first checks that the column has unique, non-blank, contiguous dates. Time intelligence calculations then use that table, and the auto-generated date/time table for that column is removed. A manual hierarchy or a summarization setting does not identify the table as the calendar, and the option for new files has no effect on the current model.",
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Design and implement a data model – Create a common date table; Microsoft Learn: Set and use date tables in Power BI Desktop"
    },
    {
      "stem": "The Sales table has OrderDate and ShipDate columns, and each is related to 'Date'[Date]. The relationship on OrderDate is active and the relationship on ShipDate is inactive. The measure [Total Sales] is defined as SUM(Sales[Amount]). You need a measure that returns sales by ship date when it is used with columns from the Date table. Which DAX expression should you use?",
      "options": [
        "CALCULATE([Total Sales], RELATED('Date'[Date]))",
        "CALCULATE([Total Sales], CROSSFILTER(Sales[ShipDate], 'Date'[Date], Both))",
        "CALCULATE([Total Sales], USERELATIONSHIP(Sales[ShipDate], 'Date'[Date]))",
        "CALCULATE([Total Sales], Sales[ShipDate] = 'Date'[Date])"
      ],
      "answer": "C",
      "explanation": "This is the role-playing dimension pattern. USERELATIONSHIP activates an existing inactive relationship for the duration of a CALCULATE, so filters on the Date table reach Sales through ShipDate instead of OrderDate. CROSSFILTER only changes the filter direction of a relationship; it does not make an inactive relationship active. RELATED needs a row context and cannot be used as a filter argument, and a Boolean filter cannot compare columns from two different tables.",
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Design and implement a data model – Implement role-playing dimensions; DAX reference: USERELATIONSHIP function"
    },
    {
      "stem": "An Inventory table stores one row per product per day with the quantity on hand at the end of that day, and it is related to a Date table. The Date table contains only dates for which inventory rows exist. You need a measure that, at month, quarter and year level, shows the quantity on hand on the last date of the period instead of adding up the daily balances. Which DAX expression should you use?",
      "options": [
        "SUM(Inventory[Quantity])",
        "CALCULATE(SUM(Inventory[Quantity]), LASTDATE('Date'[Date]))",
        "CALCULATE(SUM(Inventory[Quantity]), FIRSTDATE('Date'[Date]))",
        "AVERAGE(Inventory[Quantity])"
      ],
      "answer": "B",
      "explanation": "A stock balance is semi-additive: it can be summed across products but not across time. LASTDATE returns the last date visible in the current filter context, so CALCULATE limits the sum to that single day and gives the closing balance of the month, quarter or year. A plain SUM adds every day's balance together, FIRSTDATE gives the opening balance, and an average gives neither.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Create model calculations by using DAX – Create semi-additive measures; DAX reference: LASTDATE function"
    },
    {
      "stem": "A semantic model has a measure [Total Sales] defined as SUM(Sales[Amount]). Sales is related to Customer on CustomerKey with a many-to-one relationship that filters in a single direction, from Customer to Sales. You need a measure that returns the number of customers whose total sales in the current filter context exceed 1,000. Which DAX expression should you use?",
      "options": [
        "COUNTROWS(FILTER(Sales, Sales[Amount] > 1000))",
        "SUMX(Customer, IF(SUM(Sales[Amount]) > 1000, 1, 0))",
        "CALCULATE(COUNTROWS(Customer), Sales[Amount] > 1000)",
        "COUNTROWS(FILTER(Customer, [Total Sales] > 1000))"
      ],
      "answer": "D",
      "explanation": "FILTER iterates the Customer table row by row. When a measure is referenced inside that row context, DAX wraps it in an implicit CALCULATE, and context transition turns the current customer row into a filter, so [Total Sales] is evaluated for each customer. Writing SUM directly inside SUMX triggers no context transition, so every customer is compared against the same overall total. Filtering Sales counts transactions, and a filter on Sales does not flow back to Customer through a single-direction relationship.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Create model calculations by using DAX – Use CALCULATE to manipulate filters; Microsoft Learn: DAX row context and context transition"
    },
    {
      "stem": "You need to reduce the size of an Import-mode semantic model without losing any data that the report visuals use. Which TWO actions should you take? Choose TWO.",
      "options": [
        "Set the cross-filter direction to Both on every relationship",
        "Remove columns that no visual, measure or relationship uses",
        "Replace measures with equivalent calculated columns",
        "Split a DateTime column into separate Date and Time columns"
      ],
      "answer": "BD",
      "explanation": "The VertiPaq engine compresses each column separately, so model size depends mostly on the number of columns and how many distinct values each holds. Removing unused columns removes their storage entirely. Splitting a DateTime column into Date and Time sharply cuts the number of distinct values in each column, which compresses much better. Calculated columns are stored and make the model larger, and filter direction has no effect on storage.",
      "topic": "Model the data",
      "subtopic": "Optimize model performance",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Optimize model performance – Remove unnecessary rows and columns; reduce granularity; Microsoft Learn: Data reduction techniques for Import modeling"
    },
    {
      "stem": "You use Performance analyzer in Power BI Desktop on a report page that has 25 visuals. For one table visual, the results show DAX query 40 ms, Visual display 60 ms and Other 3,500 ms. What does the large Other value most likely indicate?",
      "options": [
        "The visual was waiting for other visuals or background processing to finish",
        "The measure used by the visual is inefficient and should be rewritten in DAX",
        "The visual is rendering too many data points and needs a filter applied",
        "The data source is slow and the visual is waiting for DirectQuery results"
      ],
      "answer": "A",
      "explanation": "Performance analyzer splits each visual's duration into DAX query, Direct query (where it applies), Visual display and Other. Other is time spent preparing queries, waiting for other visuals to complete, or doing other background work. Visuals on a page are processed in a queue, so a crowded page drives Other up. Slow measures would show under DAX query, slow rendering under Visual display, and slow sources under Direct query; reducing the number of visuals on the page is the usual fix.",
      "topic": "Model the data",
      "subtopic": "Optimize model performance",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Optimize model performance – Identify poorly performing visuals by using Performance analyzer; Microsoft Learn: Use Performance Analyzer"
    },
    {
      "stem": "You need a visual that shows how a starting net income figure is raised and lowered by a sequence of individual revenue and cost categories until it reaches an ending figure. Which visual should you use?",
      "options": [
        "Funnel chart",
        "Ribbon chart",
        "Waterfall chart",
        "Treemap"
      ],
      "answer": "C",
      "explanation": "A waterfall chart shows a running total as each value is added or subtracted, colouring increases and decreases differently, so you can see how each category moves the figure from start to end. A funnel shows progressive stages of a process, a ribbon chart shows rank changes over time, and a treemap shows parts of a whole as nested rectangles.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Create reports",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Create reports – Select an appropriate visual; Microsoft Learn: Waterfall charts in Power BI"
    },
    {
      "stem": "A report has a page named Customer Details that shows information about one customer. Users must be able to right-click a customer in a visual on another page and open Customer Details filtered to that customer. What should you do?",
      "options": [
        "Add Customer[CustomerName] to a slicer on Customer Details and sync it across pages",
        "Create a bookmark of Customer Details and assign it to a button on every page",
        "Turn on drill down for each visual that uses the Customer[CustomerName] field",
        "Add Customer[CustomerName] to the Drill through fields of the Customer Details page"
      ],
      "answer": "D",
      "explanation": "When a field is placed in a page's Drill through well, Power BI adds a Drill through option to the right-click menu of any visual that uses that field. It then opens the target page filtered to the selected value and adds a back button automatically. A bookmark captures a fixed state and cannot pass along the value that was clicked, and drill down only moves through a hierarchy inside the same visual.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Enhance reports for usability and storytelling – Configure drillthrough navigation; Microsoft Learn: Set up drillthrough in Power BI reports"
    },
    {
      "stem": "On a report page, a column chart and a table visual occupy the same position. You create two bookmarks, one in which only the chart is visible and one in which only the table is visible, and buttons apply each bookmark. Users report that selecting a button resets the slicer selections they made on the page. You need the buttons to switch visuals without changing slicer selections. What should you do?",
      "options": [
        "Clear the Display option on both bookmarks",
        "Clear the Data option on both bookmarks",
        "Clear the Current page option on both bookmarks",
        "Sync the page's slicers by using the Sync slicers pane"
      ],
      "answer": "B",
      "explanation": "A bookmark can capture three kinds of state. Data covers filters and slicer selections, Display covers visual visibility and spotlight, and Current page covers which page is shown. Clearing Data means applying the bookmark changes only which visual is visible, so users' slicer selections stay as they are. Clearing Display would stop the bookmarks from switching visuals at all, and syncing slicers does not prevent a bookmark from overwriting them.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Enhance reports for usability and storytelling – Configure bookmarks; Microsoft Learn: Create page and bookmark navigators / Bookmarks in Power BI"
    },
    {
      "stem": "A sales manager wants a visual that analyses which factors, such as region, product category and customer segment, contribute most to a customer's satisfaction score being Low, and that ranks those factors by their influence on the outcome. Which visual should you use?",
      "options": [
        "Decomposition tree",
        "Q&A",
        "Key influencers",
        "Smart narrative"
      ],
      "answer": "C",
      "explanation": "The key influencers visual uses machine learning to find which fields most affect a chosen outcome, such as a score being Low, and ranks them, for example stating how much more likely the outcome is for a given segment. A decomposition tree lets users break a measure down across dimensions but does not rank drivers of an outcome. Q&A answers natural-language questions, and a smart narrative writes a text summary of visuals.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Identify patterns and trends",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Identify patterns and trends – Use AI visuals; Microsoft Learn: Create key influencers visualizations"
    },
    {
      "stem": "A report page contains a bar chart of sales by region and a card that shows total company sales. When a user selects a bar, the card is filtered to that region, but the card must always show total company sales. The bar chart must still cross-filter the other visuals on the page. What should you do?",
      "options": [
        "Select the bar chart, turn on Edit interactions, and set the card's interaction to None",
        "Select the card, turn on Edit interactions, and set the bar chart's interaction to None",
        "Lock the existing filters on the card in the Filters pane so users cannot change them",
        "Hide the card's filter card in the Filters pane so the region filter is not applied"
      ],
      "answer": "A",
      "explanation": "Interactions are set from the source visual: when you select the bar chart and turn on Edit interactions, an icon appears on every other visual so you can choose Filter, Highlight or None for each one. Setting the card to None stops the bar chart from filtering it while the other visuals keep their cross-filtering. Selecting the card first controls how the card affects other visuals, and locking or hiding filter cards does not affect cross-filtering.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Enhance reports for usability and storytelling – Edit and configure interactions between visuals; Microsoft Learn: Change how visuals interact"
    },
    {
      "stem": "A colleague must be able to publish new reports to a Power BI workspace and edit or delete existing content in it. Under the principle of least privilege, the colleague must not be able to add users to the workspace or publish and update the workspace app. Which workspace role should you assign?",
      "options": [
        "Admin",
        "Member",
        "Viewer",
        "Contributor"
      ],
      "answer": "D",
      "explanation": "Contributor is the lowest role that can create, edit, publish and delete content in a workspace. By default it cannot publish or update the workspace app or manage access. Member adds the ability to add users with equal or lower permissions and to publish and update the app, and Admin can also manage all users and delete the workspace. Viewer can only view content.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Secure and govern Power BI items – Assign workspace roles; Microsoft Learn: Roles in workspaces in Power BI"
    },
    {
      "stem": "A semantic model includes a SalesRep table whose Email column holds each sales representative's Microsoft Entra sign-in address (user principal name). The SalesRep table filters the Sales table through a relationship. You need each representative to see only their own sales by using a single row-level security role. Which DAX filter expression should you define on the SalesRep table in the role?",
      "options": [
        "[Email] = SELECTEDVALUE(SalesRep[Email])",
        "[Email] = USEROBJECTID()",
        "[Email] = USERPRINCIPALNAME()",
        "[Email] = CUSTOMDATA()"
      ],
      "answer": "C",
      "explanation": "This is dynamic row-level security. USERPRINCIPALNAME returns the signed-in user's user principal name, so one role keeps only the SalesRep row that matches the viewer, and the relationship then filters Sales to that representative. USEROBJECTID returns the user's Entra object ID (a GUID), not their sign-in address. SELECTEDVALUE depends on report selections rather than identity, and CUSTOMDATA returns a value passed in a connection string.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Secure and govern Power BI items – Implement row-level security roles; Microsoft Learn: Row-level security (RLS) with Power BI"
    },
    {
      "stem": "You publish an Import-mode semantic model and need to configure scheduled refresh for it in the Power BI service. Which TWO data sources require an on-premises data gateway? Choose TWO.",
      "options": [
        "A SQL Server database on a server in the company's own data center",
        "An Azure SQL Database that is reachable over the public internet",
        "An Excel workbook stored in a SharePoint Online document library",
        "A CSV file in a shared folder on the corporate network"
      ],
      "answer": "AD",
      "explanation": "The Power BI service runs in the cloud and cannot reach resources inside a private corporate network on its own. An on-premises data gateway acts as the bridge to such sources, which here means the data center SQL Server and the network share. Cloud sources such as a publicly reachable Azure SQL Database and SharePoint Online can be refreshed directly with stored credentials and need no gateway.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Create and manage workspaces and assets – Identify when a gateway is required; Microsoft Learn: What is an on-premises data gateway?"
    }
  ]
}
```
