import { Schema, model } from "mongoose";
import { Document, PopulatedDoc } from "mongoose";
import InterfaceUser from "./user.model";

export default interface InterfaceAnnoucement {
  status: boolean;
  announcementDetails: string;
  user: PopulatedDoc<InterfaceUser & Document>;
  tags: string[];
}

/**
 * Represents the announcement schema.
 */
const announncementSchema = new Schema(
  {
    status: {
      type: Boolean,
      default: true,
    },
    announcementDetails: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const Annoucement = model<InterfaceAnnoucement & Document>(
  "Annoucement",
  announncementSchema,
);
