// Write your solution in this file!
// Function to update an employee object with a new key-value pair (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to update an employee object with a new key-value pair (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key-value pair from an employee object (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key-value pair from an employee object (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage:
  const employee = {
    name: 'Jane Doe',
    streetAddress: 'Main St',
  };
  
  console.log(updateEmployeeWithKeyAndValue(employee, 'position', 'Manager'));
  console.log(employee); // Original employee object remains unchanged
  
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'position', 'Manager'));
  console.log(employee); // Original employee object is mutated
  
  console.log(deleteFromEmployeeByKey(employee, 'streetAddress'));
  console.log(employee); // Original employee object remains unchanged
  
  console.log(destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress'));
  console.log(employee); // Original employee object is mutated
  
