export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return OBbject.keys(employeesList).length;
    },
  };
}
