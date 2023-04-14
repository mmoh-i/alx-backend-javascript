<<<<<<< HEAD
export default updateStudentGradeByCity(stdnt_lst, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };
  
  if (Array.isArray(stdnt_lst)) {
    return stdnt_lst
      .filter((data) => data.location === city)
      .map((data) => ({
        id: data.id,
        firstName: data.firstName,
        location: data.location,
        grade: (newGrades
          .filter((x) => x.studentId === data.id)
=======
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
>>>>>>> 1b7ce162234c2464e35792bfd482b502a2e25b78
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
