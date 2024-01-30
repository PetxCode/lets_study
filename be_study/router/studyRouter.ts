import { Router } from "express";
import {
  createStudy,
  getAllStudy,
  getOneUserStudy,
} from "../controller/studyController";

const router: Router = Router();

router.route("/create-study/:userID").post(createStudy);
router.route("/read-study/:userID").get(getOneUserStudy);
router.route("/read-study").get(getAllStudy);

export default router;
