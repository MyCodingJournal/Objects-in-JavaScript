// Write your solution in this file!

const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
};

// returns an employee with the original key value pairs and the new key value pair
// it does not modify the original employee, but rather returns a clone with the new data

function updateEmployeeWithKeyAndValue(employee, key, value){
   return Object.assign({}, employee, { [key]: value})
};

// updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee;
}

//deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
//does not modify the original employee (it is non-destructive)

function deleteFromEmployeeByKey(obj, key){
    const newObj = { ...obj};

    delete newObj[key];

    return newObj;
}

const nondestructiveDelete = deleteFromEmployeeByKey(employee, 'name', 'sam');

employee;

nondestructiveDelete;

//returns employee without the deleted key/value pair
//modifies the original employee

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];

    return obj;
}

const destructiveDelete = destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress', '12 Broadway');

employee;

destructiveDelete;

//https://github.com/VGDJP-07/phase-0-intro-to-js-2-objects-lab
