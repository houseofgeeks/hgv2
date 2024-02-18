import { Schema, model } from "mongoose";
import { Types, Document, PopulatedDoc } from "mongoose";
import InterfaceUser from "./user.model";

export interface InterfaceFeed {
  _id: Types.ObjectId;
  status: boolean;
  feedDetails: string;
  upVotes: PopulatedDoc<InterfaceUser & Document>[];
  user: PopulatedDoc<InterfaceUser & Document>;
  tags: string[];
}

/**
 * Represents the schema for a feed.
 */
const feedSchema = new Schema(
  {
    staus: {
      type: Boolean,
      default: true,
    },
    feedDetails: {
      type: String,
      required: true,
    },
    upVotes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
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

export const Feed = model<InterfaceFeed & Document>("Feed", feedSchema);
