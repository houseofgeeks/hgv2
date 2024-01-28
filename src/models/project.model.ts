import { Schema, model } from "mongoose";
import type { Types, Document, PopulatedDoc } from "mongoose";
import { InterfaceUser } from "./user.model";
import { InterfaceWing } from "./wings.model";

export interface InterfaceProject {
  _id: Types.ObjectId;
  status: string;
  leadBy: PopulatedDoc<InterfaceUser & Document>;
  title: string;
  wingsInvolved: PopulatedDoc<InterfaceWing & Document>[];
  peopleInvolved: PopulatedDoc<InterfaceUser & Document>[];
  description: string;
  image: string;
}

/**
 * Represents a project Schema.
 */
const projectSchema = new Schema(
  {
    status: {
      type: String,
      required: true,
    },
    leadBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    wingsInvolved: [
      {
        type: Schema.Types.ObjectId,
        ref: "Wing",
      },
    ],
    peopleInvolved: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Project = model<InterfaceProject & Document>(
  "Project",
  projectSchema,
);
