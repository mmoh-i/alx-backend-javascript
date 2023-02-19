export default function getStudentIdsSum(lst) {
  const initialValue = 0;
  const id = lst.map((item) => item.id);
  const sum = id.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  return sum;
}
