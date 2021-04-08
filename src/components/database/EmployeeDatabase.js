import Realm from 'realm';

const EmployeeSchema = {
  name: 'Employee',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    designation: 'string',
    salary: 'int',
  },
};

let realm = new Realm({schema: [EmployeeSchema], schemaVersion: 1});

let getAllEmployee = () => {
  return realm.objects('Employee');
};
let deleteAllEmployee = () => {
  realm.write(() => {
    realm.delete(getAllEmployee());
  });
};

let addEmployee = (id, name, designation, salary) => {
  realm.write(() => {
    const emp = realm.create('Employee', {
      id: Number(id),
      name,
      designation,
      salary: Number(salary),
    });
  });
  return true;
};

let searchEmployee = (val) => {
  const data = realm.objects('Employee');
  return data.filtered(`name LIKE[c] "*${val}*"`);
};

let sortEmployee = (order) => {
  const data = realm.objects('Employee');
  if (order) {
    return data.sorted('salary');
  } else {
    return data.sorted('salary', true);
  }
};

export {
  getAllEmployee,
  addEmployee,
  deleteAllEmployee,
  sortEmployee,
  searchEmployee,
};
