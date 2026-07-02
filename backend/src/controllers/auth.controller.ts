import { Request, Response } from "express";

import { registerUser, loginUser } from "../services/auth.service";

import { registerSchema, loginSchema } from "../validators/auth.validator";

export const register = async (req: Request, res: Response) => {
  try {
    const body = registerSchema.parse(req.body);

    const user = await registerUser(body.username, body.password);

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: error.errors[0].message,
      });
    }

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const body = loginSchema.parse(req.body);

    const user = await loginUser(body.username, body.password);

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
