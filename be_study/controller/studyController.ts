import { Request, Response } from "express";
import userModel from "../model/userModel";
import moment from "moment";
import { CronJob } from "cron";
import studyModel from "../model/studyModel";
import { Types } from "mongoose";

export const createStudy = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { hours, minutes, title, duration } = req.body;
    const { userID } = req.params;
    const user = await userModel.findById(userID);
    if (user) {
      let sumBreak = (hours / minutes) * 60;
      let realBreakTime = sumBreak * duration;
      let totalStudy = parseInt(hours) * 60 + realBreakTime;

      let time = new Date();

      let futureStoppage = time.setMinutes(time.getMinutes() + totalStudy);

      let hr = moment(futureStoppage).hours();
      let min = moment(futureStoppage).minutes();

      console.log(hr, min);

      const findStudy = await userModel.findById(userID).populate({
        path: "study",
      });

      const getOngoingStudy = findStudy?.study.every((el: any) => {
        return el.isCompleted === true;
      });

      if (getOngoingStudy) {
        // create study
        const newStudy = await studyModel.create({
          hours,
          minutes,
          title,
          duration,

          total: totalStudy,
        });

        user.study.push(new Types.ObjectId(newStudy._id));
        user.save();

        const job = new CronJob(
          `59 * * * * *`,
          async () => {
            console.log("Time ended...!");
            let study = await studyModel.findById({ _id: newStudy._id });

            await studyModel.findByIdAndUpdate(
              study?._id,
              {
                isCompleted: true,
              },
              { new: true }
            );

            job.stop();
          },
          null,
          true
        );

        return res.status(201).json({
          message: "creating study",
          data: newStudy,
          status: 201,
        });
      } else {
        return res.status(404).json({
          message: "Please go and finish your on-going study",
          status: 404,
        });
      }
    } else {
      return res.status(404).json({
        message: "Error finding user",
        status: 404,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error creating study",
      status: 404,
    });
  }
};

export const getOneUserStudy = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;

    const user = await userModel.findById(userID).populate({
      path: "study",
      options: {
        createdAt: -1,
      },
    });

    return res
      .status(200)
      .json({ message: "creating user", data: user, status: 200 });
  } catch (error) {
    return res.status(404).json({ message: "Error creating user" });
  }
};

export const getAllStudy = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await studyModel.find();

    return res
      .status(200)
      .json({ message: "creating user", data: user, status: 200 });
  } catch (error) {
    return res.status(404).json({ message: "Error creating user" });
  }
};
