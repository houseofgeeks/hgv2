const AdminJS = require("adminjs");
const app = require("../index");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
const mongoose = require("mongoose");
const DEFAULT_ADMIN = {
  email: "admin@example.com",
  password: "password",
};
const AnnouncementModel = require("../models/announcement_model");
const FeedModel=require("../models/feed_model");
const WingModel=require("../models/wing_model");
const LevelModel=require("../models/level_model");
const TopicModel=require("../models/topic_model");
const SubtopicModel=require("../models/subtopic_model");
const UserModel=require("../models/user_model");

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};
AdminJS.registerAdapter(AdminJSMongoose);
const admin = new AdminJS({
  databases: [mongoose],
// resources: AdminJSMongoose.buildResources([DriverModel]),
//   resources: [{
//     resource:AnnouncementModel ,
//     options: {
//         parent:{
//             name:'Announcements'
//         }
//     }
//   }],
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
  null,
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
