import { Request, Response } from 'express';
import { studentService } from '../service/studentService';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.students;
    const result = await studentService.createStudentWithDb(student);
    res.status(201).json({
      success: true,
      message: 'successfully created',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudents();
    res.status(201).json({
      success: true,
      message: 'successfully created',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};
const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await studentService.getSingleStudents(id);
    res.status(200).json({
      success: true,
      message: 'Successfully retrieved',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

export const studentInformation = {
  createStudent,
  getStudents,
  getSingleStudents,
};
