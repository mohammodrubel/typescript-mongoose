import { Student } from '../student/student.interface';
import UserStudentModel from '../student/studentmodel';

// post requiest
const createStudentWithDb = async (student: Student) => {
  const result = await UserStudentModel.create(student);
  return result;
};
// get all students
const getAllStudents = async () => {
  const result = await UserStudentModel.find();
  return result;
};
// get single students
const getSingleStudents = async (id: string) => {
  const result = await UserStudentModel.findOne({ _id: id });
  return result;
};
export const studentService = {
  createStudentWithDb,
  getAllStudents,
  getSingleStudents,
};
