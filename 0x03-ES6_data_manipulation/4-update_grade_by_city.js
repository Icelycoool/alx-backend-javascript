export default function updateStudentGradeByCity(list, city, newGrades) {
  const studentsList = list.filter((student) => student.location === city);
  return studentsList.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    return {
      ...student, grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });
}
