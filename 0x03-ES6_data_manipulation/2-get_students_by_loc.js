export default function getStudentsByLocation(lst, city) {
  return lst.filter((x) => x.location === city);
}
