/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
import { IFaculty } from '../faculty/faculty.interface';
import { IStudent } from '../student/student.interface';
import { IAdmin } from '../admin/admin.interface';

export type IUser = {
  id: string;
  role: string;
  password: string;
  needsPasswordChange: true | false;
  student?: Types.ObjectId | IStudent;
  // TODO: create Faculty Module
  faculty?: Types.ObjectId | IFaculty;
  // TODO: create Admin Module
  admin?: Types.ObjectId | IAdmin;
};

export type IUserMethods = {
  isUserExist(id: string): Promise<boolean>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
};

export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;
