import { Schema, model } from "mongoose";
import { Types, Document, PopulatedDoc } from "mongoose";
import { InterfaceUser } from "./user.model";

export interface InterfaceWing {
  _id: Types.ObjectId;
  name: string;
  description: string;
  image: string;
  lead: PopulatedDoc<InterfaceUser & Document>;
  coordinators: PopulatedDoc<InterfaceUser & Document>[];
}

/**
 * Represents the schema for a wing.
 */
const wingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      //required: true,
    },
    lead: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    coordinators: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },

  { timestamps: true },
);

export const Wing = model<InterfaceWing & Document>("Wing", wingSchema);
