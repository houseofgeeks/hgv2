const AdminJS = require("adminjs");
const app = require("../index");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const DEFAULT_ADMIN = {
  email: "admin@example.com",
  password: "password",
};
const AnnouncementModel = require("../models/announcement_model");
const FeedModel = require("../models/feed_model");
const WingModel = require("../models/wing_model");
const LevelModel = require("../models/level_model");
const TopicModel = require("../models/topic_model");
const SubtopicModel = require("../models/subtopic_model");
const UserModel = require("../models/user_model");

const authenticate = async (email, password) => {
  const user = await UserModel.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))&&user.isAdmin) {
    return Promise.resolve(user);
  }
  return;
};
AdminJS.registerAdapter(AdminJSMongoose);
const admin = new AdminJS({
  databases: [mongoose],
  // resources: AdminJSMongoose.buildResources([DriverModel]),
//   resources: [
//     {
//       resource: AnnouncementModel,
//       options: {
//         parent: {
//           // name:'Drivers'
//         },
//       },
//     },
//     {
//       resource: FeedModel,
//       options: {
//         parent: {
//           name: "Feeds",
//         },
//       },
//     },
//   ],
  branding: {
    companyName: "House of Geeks",
    logo: false,
  },
  rootPath: "/admin",
});

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  admin,
  {
    authenticate,
    cookieName: "adminjs",
    cookiePassword: "sessionsecret",
  },
  {
    authenticate,
    cookieName: "adminjs",
    cookiePassword: "sessionsecret",
  },
  {
    // store: sessionStore,
    resave: true,
    saveUninitialized: true,
    secret: "sessionsecret",
    cookie: {
      httpOnly: process.env.NODE_ENV === "production",
      secure: process.env.NODE_ENV === "production",
    },
    // name: "Wagen Wizard",
  }
);

module.exports = { admin, adminRouter };
