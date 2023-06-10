import { Request, Response, NextFunction } from 'express';

const catchAsync = (fn: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      fn(req, res);
    } catch (error) {
      next(error);
    }
  };
};

export default catchAsync;