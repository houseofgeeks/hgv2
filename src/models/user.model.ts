import { Schema, model } from "mongoose";
import type { Types, Document, PopulatedDoc } from "mongoose";
import validator from "validator";
import { InterfaceProject } from "./project.model";

export default interface InterfaceUser {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  registration_no: string;
  profile_image: string;
  portfolio_url: string;
  website_url: string;
  resume_url: string;
  linkedin_url: string;
  github_username: string;
  twitter_url: string;
  instagram_url: string;
  leetcode_username: string;
  codeforces_username: string;
  codechef_username: string;
  userType: string;
  projectsInvolved: PopulatedDoc<InterfaceProject & Document>[];
}

/**
 * Represents the schema for the User model.
 */
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,

      validate: [validator.isEmail, "invalid email"],
    },
    password: {
      type: String,
      required: true,
    },
    registration_no: {
      type: String,
    },
    linkedin_url: {
      type: String,
    },
    resume_url: {
      type: String,
    },
    portfolio_url: {
      type: String,
    },
    twitter_url: {
      type: String,
    },
    instagram_url: {
      type: String,
    },
    github_username: {
      type: String,
    },
    leetcode_username: {
      type: String,
    },
    codeforces_username: {
      type: String,
    },
    codechef_username: {
      type: String,
    },
    profile_image: {
      type: String,
      // required: true,
    },
    userType: {
      enum: ["member", "lead", "coordinator"],
      type: String,
    },
    projectsInvolved: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
  },
  { timestamps: true },
);

export const User = model<InterfaceUser & Document>("User", userSchema);
