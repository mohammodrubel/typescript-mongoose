import { Schema, model } from 'mongoose';
import { Student, UserName, guardian } from './student.interface';

const userNameSchema = new Schema<UserName>({
  fastName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<guardian>({
  fathersname: { type: String, required: true },
  mothersname: { type: String, required: true },
  fathersOccupation: { type: String, required: true },
  fathersContactNumber: { type: String, required: true },
  mothersContactNumber: { type: String, required: true },
});
const studentSchema = new Schema<Student>({
  name: userNameSchema,
  gender: ['female', 'male'],
  DathOfBirth: String,
  email: { type: String, required: true },
  contactNumber: String,
  isActive: ['active', 'disabled'],
  profileImg: String,
  guardian: guardianSchema,
});

const UserStudentModel = model<Student>('UserStudent', studentSchema);

export default UserStudentModel;
