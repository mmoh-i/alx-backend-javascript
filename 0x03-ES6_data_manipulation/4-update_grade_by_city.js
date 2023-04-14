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
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
