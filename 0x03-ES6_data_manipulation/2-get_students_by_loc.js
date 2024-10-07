export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((students) => students.city === city);
}
