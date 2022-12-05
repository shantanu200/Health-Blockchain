import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import { sendMail } from "../services/MAIL.js";
import { genrateOTP } from "../services/OTP.js";
import { genrateToken } from "../utils/token.js";

/* 
@Description: Creation of User 
@Route: POST /user/
*/

export const createUser = asyncHandler(async (req, res) => {
  const {
    firstname,
    middlename,
    lastname,
    aadharno,
    contactno,
    gender,
    dateofbirth,
    email,
    address,
    guardian,
    profile,
    accountHash,
  } = req.body;

  if (!req.body) {
    res.status(400);
    throw new Error("Invalid Query is passed");
  }

  const userExists = await User.findOne({ aadharno });

  if (userExists) {
    res.status(400);
    throw new Error("User Already available on these AADHAR Number");
  }

  const user = await User.create({
    firstname,
    middlename,
    lastname,
    aadharno,
    contactno,
    gender,
    dateofbirth,
    email,
    address,
    guardian,
    profile,
    accountHash,
  });

  if (user) {
    res.status(201).json({
      id: user._id,
      firstname,
      middlename,
      lastname,
      aadharno,
      contactno,
      gender,
      dateofbirth,
      email,
      address,
      guardian,
      profile,
      accountHash,
      token: genrateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User Not Found");
  }
});

export const SendOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    const otp = genrateOTP();
    try {
      sendMail({
        to: email,
        OTP: otp,
      });

      user.otp = otp;

      user
        .save()
        .then(() => {
          res.status(200).json("OTP is Send on Email");
        })
        .catch((err) => {
          res.status(400).json(`Server Side Error Occur: ${err}`);
        });
    } catch (error) {
      res.json(400).json(`Server Side Error Occured ${error}`);
    }
  }
});

export const VerifyEmail = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });

  if (user && user.otp === otp) {
    res.status(200).json("Email Verified Successfully");
  } else if (!user) {
    res.status(200).json("User not found on these email");
  } else {
    res.status(200).json("Invaild OTP is Entered");
  }
});

export const DeleteUser = asyncHandler(async (req,res) => {
  let _id = req.params.id;

  User.findByIdAndRemove(_id,(err,user) => {
    if(err) res.status(400).json(err);

    else res.status(200).json("User Deleted Sucessfully");
  });
})
