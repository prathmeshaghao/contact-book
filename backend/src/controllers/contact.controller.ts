import { Request, Response } from "express";

import { contactSchema } from "../validators/contact.validator";

import {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "../services/contact.service";

export const create = (req: Request, res: Response) => {
  try {
    const body = contactSchema.parse(req.body);

    const contact = createContact(body);

    return res.status(201).json({
      success: true,
      data: contact,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const getAll = (req: Request, res: Response) => {
  try {
    const contacts = getContacts(
      req.query.search as string,
      req.query.sort as string,
      req.query.tag as string,
    );

    return res.json({
      success: true,
      data: contacts,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getById = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const contact = getContactById(id);

    return res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error: any) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
export const update = (req: Request, res: Response) => {
  try {
    const body = contactSchema.parse(req.body);

    const contact = updateContact(Number(req.params.id), body);

    return res.json({
      success: true,
      data: contact,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const remove = (req: Request, res: Response) => {
  try {
    deleteContact(Number(req.params.id));

    return res.json({
      success: true,
      message: "Contact deleted successfully",
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
