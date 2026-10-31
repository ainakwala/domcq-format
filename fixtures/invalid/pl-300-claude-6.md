```json
{
  "format": "domcq/1",
  "exam": "pl-300",
  "set": "PL-300: Microsoft Power BI Data Analyst practice – Core skills mixed set",
  "questions": [
    {
      "stem": "A company stores about 4 billion sales rows in an Azure SQL Database that is updated continuously. Report users need visuals to reflect new rows within minutes of them being written, and the data volume is too large to hold in the semantic model's memory. Which storage mode should you use for the sales table in Power BI Desktop?",
      "options": [
        "Import",
        "DirectQuery",
        "Dual",
        "Live connection"
      ],
      "answer": "B",
      "explanation": "DirectQuery leaves the data in the source and sends queries to Azure SQL Database each time a visual is rendered, so results reflect the latest data without depending on scheduled refresh and without loading billions of rows into memory. Import and Dual both cache the data in the model, so they are limited by refresh frequency and model size. Live connection is only used for Analysis Services and published Power BI semantic models, not for a relational database such as Azure SQL Database.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Get or connect to data – choose between DirectQuery and Import; Microsoft Learn: Use DirectQuery in Power BI Desktop"
    },
    {
      "stem": "In Power Query Editor you enable Column quality and Column distribution for a Product query that returns 250,000 rows. The profile shows 0% empty values in the ProductCode column, but after loading the data a report shows blank product codes. You need the profiling statistics to be calculated from every row in the query. What should you do?",
      "options": [
        "Enable Column profile on the View ribbon",
        "Add a Keep Top Rows step set to 250,000 rows",
        "Change the status bar setting to Column profiling based on entire data set",
        "Select Refresh Preview on the Home ribbon"
      ],
      "answer": "C",
      "explanation": "By default, Power Query data profiling tools evaluate only the top 1,000 rows of the preview, so problems further down the data can be missed. Switching the status bar option from 'Column profiling based on top 1000 rows' to 'Column profiling based on entire data set' makes the quality, distribution and profile statistics use all rows. Enabling another profiling pane or refreshing the preview still uses the 1,000-row sample.",
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Profile and clean the data – evaluate data, including data statistics and column properties; Microsoft Learn: Using the data profiling tools"
    },
    {
      "stem": "After changing the data type of a Quantity column to Whole Number in Power Query Editor, some cells in the column display Error. You need to make sure that no error values from this column are loaded into the model. Which TWO actions can you apply to the column in Power Query Editor? Choose TWO.",
      "options": [
        "Fill Down",
        "Replace Errors",
        "Keep Duplicates",
        "Remove Errors"
      ],
      "answer": "BD",
      "explanation": "Replace Errors substitutes a value you choose (for example 0 or null) for every error in the selected column, while Remove Errors removes the rows that contain an error in the selected column. Either approach stops error values from reaching the model, and the choice depends on whether you must keep the affected rows. Fill Down only replaces null values with the value above, and Keep Duplicates filters rows by repetition; neither handles errors.",
      "topic": "Prepare the data",
      "subtopic": "Profile and clean the data",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Profile and clean the data – resolve inconsistencies, unexpected or null values, and data quality issues; Microsoft Learn: Dealing with errors in Power Query"
    },
    {
      "stem": "You have two queries in Power Query Editor named Customers and Sales. Both contain a CustomerID column. You need a new query that returns only the customers that have no matching rows in Sales. You start a Merge Queries as New operation with Customers as the first (top) table and Sales as the second table, matched on CustomerID. Which join kind should you choose?",
      "options": [
        "Left anti",
        "Right anti",
        "Inner",
        "Left outer"
      ],
      "answer": "A",
      "explanation": "A left anti join returns only the rows from the first (left) table that have no match in the second (right) table, which is exactly the set of customers without sales. A right anti join would return sales rows whose CustomerID has no matching customer. Inner returns only matching rows, and Left outer returns all customers whether or not they have sales.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Transform and load the data – merge and append queries; Microsoft Learn: Merge queries overview and Left anti join"
    },
    {
      "stem": "A query imported from a budgeting workbook has the columns Region, Department, and one column per month (Jan 2026, Feb 2026, Mar 2026, and so on). A new month column is added to the workbook every month. You need to reshape the data into the columns Region, Department, Month and Amount, and the query must keep working without edits when new month columns appear. What should you do in Power Query Editor before renaming the resulting columns?",
      "options": [
        "Select the month columns and select Unpivot Only Selected Columns",
        "Select the month columns and select Transpose",
        "Select the Region and Department columns and select Pivot Column",
        "Select the Region and Department columns and select Unpivot Other Columns"
      ],
      "answer": "D",
      "explanation": "Unpivot Other Columns generates a Table.UnpivotOtherColumns step that names only the columns to keep (Region and Department), so any month column present at refresh time, including new ones, is turned into Attribute and Value rows. Unpivot Only Selected Columns generates Table.Unpivot with the selected month column names hard-coded, so new months would be left out. Transpose swaps rows and columns of the whole table, and Pivot Column does the opposite of what is required.",
      "topic": "Prepare the data",
      "subtopic": "Transform and load the data",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Transform and load the data – pivot, unpivot, and transpose data; Microsoft Learn: Unpivot columns (Power Query)"
    },
    {
      "stem": "You build a report in Power BI Desktop that imports data from a SQL Server database named SalesDev. After you publish it, the semantic model must be switched to the production database SalesProd from the Power BI service, without opening or editing the file in Power BI Desktop. What should you do before publishing?",
      "options": [
        "Duplicate the query and point the copy at the SalesProd database",
        "Set the privacy level of the SQL Server data source to Organizational",
        "Create a Power Query parameter for the database name and use it in the Source step",
        "Change the storage mode of all tables in the query to DirectQuery"
      ],
      "answer": "C",
      "explanation": "When a data source setting such as the database name is driven by a Power Query parameter, the parameter value can be changed in the semantic model's settings in the Power BI service, and the next refresh uses the new database. This is the standard way to move a model between development and production sources. Privacy levels control how data from different sources can be combined, and changing storage mode or duplicating queries does not let you redirect the source from the service.",
      "topic": "Prepare the data",
      "subtopic": "Get or connect to data",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Get or connect to data – create and modify parameters; Microsoft Learn: Power Query parameters"
    },
    {
      "stem": "A Sales table has OrderDate and ShipDate columns, and both are related to the Date[Date] column of a Date table. The relationship that uses OrderDate is active and the relationship that uses ShipDate is inactive. You need a measure that returns the sum of Sales[Amount] by ship date when it is used with Date table fields in a visual. Which DAX expression should you use?",
      "options": [
        "CALCULATE(SUM(Sales[Amount]), CROSSFILTER(Sales[ShipDate], 'Date'[Date], Both))",
        "CALCULATE(SUM(Sales[Amount]), REMOVEFILTERS(Sales[OrderDate]))",
        "SUMX(RELATEDTABLE('Date'), Sales[Amount])",
        "CALCULATE(SUM(Sales[Amount]), USERELATIONSHIP(Sales[ShipDate], 'Date'[Date]))"
      ],
      "answer": "D",
      "explanation": "Only one relationship between two tables can be active, so a role-playing Date table filters Sales through OrderDate by default. USERELATIONSHIP used as a CALCULATE modifier activates the inactive ShipDate relationship for the duration of that calculation, so Date filters are applied through ShipDate instead. CROSSFILTER changes the filter direction of a relationship but does not make an inactive one active, and removing filters on OrderDate does not redirect the Date filter to ShipDate.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Design and implement a data model – implement role-playing dimensions; DAX reference: USERELATIONSHIP function"
    },
    {
      "stem": "Your model contains a measure named [Total Sales] and a Date table that is marked as a date table. You need a measure that returns year-to-date sales for the calendar year of each date shown in a visual. Which DAX expression should you use?",
      "options": [
        "TOTALYTD([Total Sales], 'Date'[Date])",
        "CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))",
        "CALCULATE([Total Sales], DATEADD('Date'[Date], -1, YEAR))",
        "CALCULATE([Total Sales], ALL('Date'))"
      ],
      "answer": "A",
      "explanation": "TOTALYTD evaluates an expression from the start of the year up to the last date in the current filter context, which is the definition of a year-to-date total. SAMEPERIODLASTYEAR and DATEADD with -1 YEAR both shift the period back one year to support prior-year comparisons rather than accumulating within the year. ALL('Date') removes every date filter and returns the total for all dates.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Create model calculations by using DAX – implement time intelligence measures; DAX reference: TOTALYTD function"
    },
    {
      "stem": "A Customer table has a one-to-many relationship to a Sales table on CustomerID. You add a calculated column to Customer with the expression SUM(Sales[Amount]), and every row shows the same value, which is the total of all sales. You need each row to show the sales total for that customer only. Which expression should you use for the calculated column?",
      "options": [
        "SUM(Sales[Amount]) / COUNTROWS(Customer)",
        "CALCULATE(SUM(Sales[Amount]))",
        "SUMX(ALL(Sales), Sales[Amount])",
        "CALCULATE(SUM(Sales[Amount]), ALL(Customer))"
      ],
      "answer": "B",
      "explanation": "A calculated column is evaluated in a row context but with no filter context, and a row context does not filter related tables by itself, so SUM(Sales[Amount]) sees the whole Sales table. Wrapping the aggregation in CALCULATE triggers context transition: the current Customer row becomes a filter, which propagates through the relationship to Sales and limits the sum to that customer. Using ALL removes filters and returns the grand total, and dividing by the number of customers gives an average, not each customer's total.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Create model calculations by using DAX – use the CALCULATE function; DAX concepts: row context, filter context and context transition"
    },
    {
      "stem": "A matrix visual shows the [Total Sales] measure by Product[Category]. A slicer on the same page lets users select a subset of categories. You need a measure that shows each category's percentage of the total for only the categories selected in the slicer, so that the percentages visible in the matrix add up to 100%. Which DAX expression should you use?",
      "options": [
        "DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(Product)))",
        "DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(Product[Category])))",
        "DIVIDE([Total Sales], CALCULATE([Total Sales], ALLSELECTED(Product[Category])))",
        "DIVIDE([Total Sales], CALCULATE([Total Sales], VALUES(Product[Category])))"
      ],
      "answer": "C",
      "explanation": "ALLSELECTED removes the filter that comes from the matrix row for the current category but keeps the filters applied from outside the visual, such as the slicer, so the denominator is the total of the selected categories. ALL(Product) and ALL(Product[Category]) also remove the slicer's filter, so the denominator becomes the total for all categories and the visible percentages add up to less than 100%. VALUES keeps the current category's filter, so every row would show 100%.",
      "topic": "Model the data",
      "subtopic": "Create model calculations by using DAX",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Create model calculations by using DAX – use the CALCULATE function to manipulate filters; DAX reference: ALLSELECTED function"
    },
    {
      "stem": "You need to reduce the size of an Import mode semantic model in Power BI Desktop without removing any data that existing visuals use. Which TWO actions should you take? Choose TWO.",
      "options": [
        "Remove columns that are not used by visuals, measures or relationships",
        "Convert existing measures into calculated columns",
        "Turn off the Auto date/time option for the file",
        "Set every relationship to cross-filter in both directions"
      ],
      "answer": "AC",
      "explanation": "In Import mode every column is compressed and stored in memory, so removing columns that nothing uses directly reduces model size. The Auto date/time option creates a hidden date table for each date column, which adds storage that is rarely needed when a dedicated Date table exists. Measures are calculated at query time and take no storage, so turning them into calculated columns increases size, and bidirectional filtering does not reduce size and can harm performance.",
      "topic": "Model the data",
      "subtopic": "Optimize model performance",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Optimize model performance – improve performance by reducing granularity and removing unnecessary rows and columns; Microsoft Learn: Data reduction techniques for Import modeling"
    },
    {
      "stem": "You plan to use Mark as date table on a table named Calendar so that DAX time intelligence functions use it. Which THREE conditions must the selected date column meet? Choose THREE.",
      "options": [
        "It must be in a one-to-one relationship with a fact table",
        "It must have the Date or Date/Time data type",
        "It must contain unique values and no blanks",
        "It must contain contiguous dates with no gaps"
      ],
      "answer": "BCD",
      "explanation": "When you mark a table as a date table, Power BI validates that the chosen column has a date or date/time data type, contains only unique values with no blanks, and covers a contiguous range of dates without missing days. These rules let time intelligence functions such as TOTALYTD and DATEADD navigate reliably across periods. A date table normally has one-to-many relationships to fact tables; a one-to-one relationship is not a requirement.",
      "topic": "Model the data",
      "subtopic": "Design and implement a data model",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Design and implement a data model – create a common date table; Microsoft Learn: Set and use date tables in Power BI Desktop"
    },
    {
      "stem": "A sales manager wants a report visual that analyzes customer data and ranks the factors that most increase the likelihood that a customer's Churned column equals Yes. Which Power BI visual should you use?",
      "options": [
        "Decomposition tree",
        "Ribbon chart",
        "Q&A visual",
        "Key influencers"
      ],
      "answer": "D",
      "explanation": "The Key influencers visual uses machine learning to analyze an outcome you choose, such as Churned = Yes, and ranks the factors that drive it along with how much each one changes the likelihood. A decomposition tree breaks a measure down across dimensions you or AI splits choose, but it does not rank drivers of a categorical outcome. A ribbon chart shows rank changes over time, and the Q&A visual answers natural-language questions.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Identify patterns and trends",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Identify patterns and trends – use AI visuals; Microsoft Learn: Create key influencers visualizations"
    },
    {
      "stem": "You create a report page named Product Details. Users must be able to right-click a product in a visual on any other page of the report and open Product Details filtered to that product. What should you configure on the Product Details page?",
      "options": [
        "Add Product[ProductName] to a slicer and sync the slicer across all pages",
        "Add Product[ProductName] to the Drill through field well of the page",
        "Set the page type to Tooltip and add Product[ProductName] to the tooltip fields",
        "Add Product[ProductName] to the page-level filters with Require single selection on"
      ],
      "answer": "B",
      "explanation": "Adding a field to the Drill through well makes the page a drillthrough target, so any visual that uses that field offers a Drill through option on right-click and passes the selected value as a filter. Power BI also adds a Back button to return users to the source page. Synced slicers share selections but do not navigate, and a tooltip page appears on hover rather than opening as a filtered page.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Enhance reports for usability and storytelling – configure drillthrough navigation; Microsoft Learn: Set up drillthrough in Power BI reports"
    },
    {
      "stem": "On a report page, a column chart and a table visual occupy the same position. You need users to select one button to show only the chart and another button to show only the table. What should you do?",
      "options": [
        "Set visual visibility in the Selection pane, create a bookmark for each state, and assign each bookmark to a button action",
        "Group the two visuals, and set the action of each button to Page navigation targeting the current page",
        "Use Edit interactions to set None between the two visuals, and add a Back button for each visual",
        "Move both visuals to a tooltip page, and set the action of each button to Q&A"
      ],
      "answer": "A",
      "explanation": "Bookmarks capture the state of a page, including which visuals are shown or hidden in the Selection pane. By saving one bookmark with only the chart visible and another with only the table visible, and setting each button's action to the matching bookmark, users can switch views with a single click. Page navigation, interactions and Q&A actions do not change visual visibility.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Enhance reports for usability and storytelling – configure bookmarks and the selection pane; Microsoft Learn: Create page and bookmark navigators"
    },
    {
      "stem": "On a report page, selecting a bar in a column chart cross-highlights a pie chart. You need selections in the column chart to have no effect on the pie chart, while still filtering the other visuals on the page. What should you do?",
      "options": [
        "Turn off the visual header for the pie chart",
        "Add a visual-level filter to the pie chart",
        "Select the column chart, select Edit interactions, and set the pie chart to None",
        "Turn off cross-report drillthrough in the report settings"
      ],
      "answer": "C",
      "explanation": "Edit interactions controls how a selected visual affects every other visual on the page. With the column chart selected, choosing the None icon on the pie chart stops it from being filtered or highlighted by that chart, while the other visuals keep their default behavior. Visual headers, visual-level filters and drillthrough settings do not change cross-filtering between visuals.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Enhance reports for usability and storytelling",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Enhance reports for usability and storytelling – configure interactions between visuals; Microsoft Learn: Change how visuals interact in a Power BI report"
    },
    {
      "stem": "You need to add a forecast of the next six months to a visual that shows Total Sales by month, by using the Forecast option in the Analytics pane. Which visual configuration supports this option?",
      "options": [
        "A clustered column chart with Month on a categorical X-axis",
        "A pie chart with Month in the Legend well",
        "A table visual with Month and Total Sales columns",
        "A line chart with a date field on a continuous X-axis and one measure"
      ],
      "answer": "D",
      "explanation": "The Forecast option in the Analytics pane is available for line charts that plot a single measure against a date or time field on a continuous X-axis. Forecasting needs an ordered time series with regular intervals to project future values and confidence bands. Column charts with categorical axes, pie charts and tables do not offer the Forecast option.",
      "topic": "Visualize and analyze the data",
      "subtopic": "Identify patterns and trends",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Identify patterns and trends – use the Analytics pane, including forecasting; Microsoft Learn: Use the Analytics pane in Power BI Desktop"
    },
    {
      "stem": "A user must be able to create, edit and delete reports and semantic models in a Power BI workspace. The user must not be able to add people to the workspace or change workspace settings. You need to follow the principle of least privilege. Which workspace role should you assign to the user?",
      "options": [
        "Viewer",
        "Contributor",
        "Member",
        "Admin"
      ],
      "answer": "B",
      "explanation": "The Contributor role can create, edit and delete content in a workspace but cannot add users or manage permissions. Member can do everything a Contributor can and can also add people with Member or lower roles and publish or update the workspace app. Admin can additionally change workspace settings and delete the workspace, and Viewer can only view and interact with content.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "medium",
      "source": "PL-300 skills outline: Secure and govern Power BI items – assign workspace roles; Microsoft Learn: Roles in workspaces in Power BI"
    },
    {
      "stem": "A report published to the Power BI service imports data from a SQL Server database that runs on a server in the company's on-premises data center. You need to configure scheduled refresh for the semantic model. What is required?",
      "options": [
        "An on-premises data gateway",
        "A Power BI Premium capacity for the workspace",
        "A deployment pipeline with a production stage",
        "A Power BI app published from the workspace"
      ],
      "answer": "A",
      "explanation": "The Power BI service runs in the cloud and cannot reach a data source inside a private network directly. An on-premises data gateway installed on a machine with access to the SQL Server acts as a bridge, securely relaying refresh queries and data. Premium capacity, deployment pipelines and apps are unrelated to connectivity to on-premises sources.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Create and manage workspaces and assets",
      "difficulty": "easy",
      "source": "PL-300 skills outline: Create and manage workspaces and assets – identify when a gateway is required; Microsoft Learn: What is an on-premises data gateway?"
    },
    {
      "stem": "You define a role named SalesRep in a semantic model with the filter [Email] = USERPRINCIPALNAME() on the Salesperson table, publish the model, and add a user to the role in the Power BI service. When the user opens the report in the workspace, they see data for all salespeople. The DAX filter and the model relationships are correct. What is the most likely cause?",
      "options": [
        "The Salesperson table uses Import storage mode instead of DirectQuery",
        "USERPRINCIPALNAME() returns the user's display name in the Power BI service",
        "The user is assigned the Member role in the workspace",
        "The role was not tested by using View as in Power BI Desktop before publishing"
      ],
      "answer": "C",
      "explanation": "Row-level security restricts only users who have read (Viewer) access to the semantic model. Workspace Admins, Members and Contributors have edit permission on the model, so RLS roles do not apply to them and they see all data. To enforce the role, give the user the Viewer role in the workspace or distribute the content through an app or sharing; RLS works with both Import and DirectQuery, and USERPRINCIPALNAME() returns the user's UPN, which is usually the sign-in email.",
      "topic": "Manage and secure Power BI",
      "subtopic": "Secure and govern Power BI items",
      "difficulty": "hard",
      "source": "PL-300 skills outline: Secure and govern Power BI items – configure row-level security group membership; Microsoft Learn: Row-level security (RLS) with Power BI"
    }
  ]
}
```
