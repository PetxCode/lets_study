import { Request, Response } from "express";
import bcrypt from "bcrypt";
import userModel from "../model/userModel";

export const getAllUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;

    const user = await userModel.find();

    return res
      .status(200)
      .json({ message: "creating user", data: user, status: 200 });
  } catch (error) {
    return res.status(404).json({ message: "Error creating user" });
  }
};

export const getOneUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;

    const user = await userModel.findById(userID);

    return res
      .status(200)
      .json({ message: "creating user", data: user, status: 200 });
  } catch (error) {
    return res.status(404).json({ message: "Error creating user" });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await userModel.create({
      email,
      password: hashed,
    });

    return res
      .status(201)
      .json({ message: "creating user", data: user, status: 210 });
  } catch (error) {
    return res.status(404).json({ message: "Error creating user" });
  }
};

export const signinUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const getUser = await userModel.findOne({ email });

    if (getUser) {
      const checkPassword = await bcrypt.compare(password, getUser.password);

      if (checkPassword) {
        return res
          .status(201)
          .json({ message: "welcome user", data: getUser, status: 201 });
      } else {
        return res.status(404).json({ message: "Password Error " });
      }
    } else {
      return res.status(404).json({ message: "Error finding user" });
    }
  } catch (error) {
    return res.status(404).json({ message: "Error creating user" });
  }
};
