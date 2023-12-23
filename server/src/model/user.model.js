const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    rollNo: {
      type: String,
    },
    linkedin_url: {
      type: String,
    },
    github_username: {
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
    leetcode_username: {
      type: String,
    },
    codeforces_username: {
      type: String,
    },
    image: {
      type: String,
      // required: true,
    },
    userType: {
      enum: ["member", "lead", "coordinator"],
      type: String,
    },
    projectsInvolved: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", function process() {
  const password = this.password;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  this.password = hash;
});

const User = mongoose.model("User", userSchema);
module.exports = User;
