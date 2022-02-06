import { Request, Response, NextFunction } from "express";
import { nextTick } from "process";

export const validate =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    const resource = req.body;
    try {
      await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      next();
    } catch (e: any) {
      return res.status(400).json({ error: e.errors.join(", ") });
    }
  };
