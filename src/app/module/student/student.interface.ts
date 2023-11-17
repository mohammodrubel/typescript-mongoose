export type guardian = {
  fathersname: string;
  mothersname: string;
  fathersOccupation: string;
  fathersContactNumber: string;
  mothersContactNumber: string;
};
export type UserName = {
  fastName: string;
  middleName: string;
  lastName: string;
};
export type Student = {
  id: number;
  name: UserName;
  gender: 'male' | 'female';
  email: string;
  DathOfBirth: string;
  contactNumber: string;
  guardian: guardian;
  profileImg?: string;
  isActive: 'active' | 'disabled';
};
