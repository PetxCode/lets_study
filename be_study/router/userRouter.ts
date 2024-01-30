import { Router } from "express";
import {
  createUser,
  getAllUser,
  getOneUser,
  signinUser,
} from "../controller/userController";

const router: Router = Router();

router.route("/create-user").post(createUser);
router.route("/login-user").post(signinUser);
router.route("/view-user").get(getAllUser);
router.route("/view-user/:userID").get(getOneUser);

export default router;
