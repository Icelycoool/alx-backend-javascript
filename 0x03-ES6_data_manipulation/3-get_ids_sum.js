export default function getStudentIdsSum(list) {
  return list.reduce((count, student) => count + student.id, 0);
}
