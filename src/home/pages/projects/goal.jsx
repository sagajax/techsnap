export default function Goal ({compact=false})  {
    return (
      <div className={`w-full border flex flex-col justify-between ${compact ? 'text-sm' : ''}`}>
      <div className={`bg-white p-${compact ? '3' : '6'} overflow-y-scroll h-[${compact ? '50vh' : '85vh'}] custom-scrollbar`}>
        <h1 className={`${compact ? 'text-sm' : 'text-3xl'} font-bold mb-${compact ? '3' : '6'}`}>Understanding SQL Queries</h1>
    
        <p className={`text-gray-700 ${compact ? 'mb-2 text-xs' : 'mb-4'}`}>
          SQL (Structured Query Language) is the standard language for
          interacting with relational databases. It allows you to performz
          various operations like retrieving, inserting, updating, and
          deleting data. Let's dive into a couple of examples to see how SQL
          queries are structured and executed.
        </p>
    
        {/* Example 1 */}
        <h2 className={`${compact ? 'text-sm' : 'text-2xl'} font-semibold mb-2`}>
          Example 1: Selecting Data
        </h2>
        <p className={`text-gray-700 ${compact ? 'mb-2 text-xs' : 'mb-4'}`}>
          The following SQL query retrieves all the records from the
          `employees` table where the employee's department is "Sales":
        </p>
    
        <div className={`bg-gray-900 text-white p-${compact ? '2' : '4'} rounded-lg overflow-auto ${compact ? 'text-xs mb-2' : 'mb-4'}`}>
          <pre className="whitespace-pre-wrap">
          <code>{`SELECT * FROM employees
    WHERE department = 'Sales';`}</code>
          </pre>
        </div>
    
        <p className={`text-gray-700 ${compact ? 'mb-3 text-xs' : 'mb-6'}`}>
          This query selects all columns from the `employees` table and
          filters the results to only include those where the `department`
          column has the value "Sales".
        </p>
    
        {/* Example 2 */}
       { !compact && <><h2 className={`${compact ? 'text-xl' : 'text-2xl'} font-semibold mb-2`}>
          Example 2: Inserting Data
        </h2>
        <p className={`text-gray-700 mb-${compact ? '2' : '4'}`}>
          Next, consider an SQL query that inserts a new record into the
          `employees` table:
        </p>
    
        <div className={`bg-gray-900 text-white p-${compact ? '2' : '4'} rounded-lg overflow-auto mb-${compact ? '2' : '4'}`}>
          <pre className="whitespace-pre-wrap">
          <code>{`INSERT INTO employees (name, department, salary)
    VALUES ('John Doe', 'Sales', 60000);`}</code>
          </pre>
        </div>
    
        <p className={`text-gray-700 mb-${compact ? '3' : '6'}`}>
          This query adds a new employee named "John Doe" to the "Sales"
          department with a salary of 60,000. The `INSERT INTO` statement is
          used to add new rows to a table.
        </p>
    
        {/* Example 3 */}
        <h2 className={`${compact ? 'text-xl' : 'text-2xl'} font-semibold mb-2`}>
          Example 3: Updating Data
        </h2>
        <p className={`text-gray-700 mb-${compact ? '2' : '4'}`}>
          The following SQL query updates the salary of an employee in the
          `employees` table:
        </p>
    
        <div className={`bg-gray-900 text-white p-${compact ? '2' : '4'} rounded-lg overflow-auto mb-${compact ? '2' : '4'}`}>
          <pre className="whitespace-pre-wrap">
          <code>{`UPDATE employees
    SET salary = 70000
    WHERE name = 'John Doe';`}</code>
          </pre>
        </div>
    
        <p className={`text-gray-700 mb-${compact ? '3' : '6'}`}>
          This query modifies the salary of "John Doe" in the `employees`
          table, setting it to 70,000. The `UPDATE` statement is used to
          modify existing records in a table.
        </p></>}
    
        {/* Conclusion */}
        <h2 className={`${compact ? 'text-sm' : 'text-2xl'} font-semibold mb-2`}>Conclusion</h2>
        <p className={`text-gray-700 ${compact ? 'text-xs' : ''} `}>
          SQL is a powerful tool for managing and manipulating data in
          relational databases. These examples are just a glimpse of what you
          can achieve with SQL. As you explore more, you'll find that SQL
          provides a comprehensive set of commands to handle complex data
          operations efficiently.
        </p>
        </div>
        {!compact && <div className={`bg-white border-t border-t-gray-400 p-${compact ? '1' : '2'} flex justify-between items-center`}>
        Powered by Techsnap
        <div className="space-x-2"></div>
        <button className={`border border-black text-${compact ? 'xs' : 'sm'} rounded-sm px-2 py-1`}>
          Previous Task
        </button>
        <button className={`border border-black text-${compact ? 'xs' : 'sm'} rounded-sm px-2 py-1`}>Next Task</button>
        </div>}</div>
      
    );
    };

