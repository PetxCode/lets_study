import { Document, Schema, Types, model } from "mongoose";

interface iStudy {
  title: string;

  hours: string;
  minutes: string;
  duration: string;

  isCompleted: boolean;

  total: number;

  user: {};
}

interface iStudyData extends iStudy, Document {}

const studyModel = new Schema<iStudyData>(
  {
    title: {
      type: String,
    },
    hours: {
      type: String,
    },
    duration: {
      type: String,
    },

    minutes: {
      type: String,
    },

    total: {
      type: Number,
    },

    isCompleted: {
      type: Boolean,
      default: false,
    },

    user: {
      type: Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

export default model<iStudyData>("studies", studyModel);
