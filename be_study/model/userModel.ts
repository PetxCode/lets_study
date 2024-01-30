import { Document, Schema, Types, model } from "mongoose";

interface iUser {
  name: string;
  email: string;
  password: string;

  totalStudyTimes: number;

  study: Array<{}>;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    totalStudyTimes: {
      type: Number,
    },
    study: [
      {
        type: Types.ObjectId,
        ref: "studies",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model<iUserData>("users", userModel);
