import express from "express";
import { createUser, DeleteUser, SendOTP, VerifyEmail } from "../controller/User.js";

const router = express.Router();

/* 
Route : "/"
Method: @POST (@Create User)
        @GET (@Retrive User)
*/
router.route("/").post(createUser);

/* 
Route : "/"
Method: @POST (@Send OTP to User Email)
*/

router.route("/sendOTP").post(SendOTP);

/* 
Route : "/"
Method: @POST (@Verify User Email through OTP)
*/
router.route("/verifyEmail").post(VerifyEmail);

/* 
Route : "/"
Method: @GET (@Delete User)
*/
router.route("/delete/:id").get(DeleteUser);

export default router;
