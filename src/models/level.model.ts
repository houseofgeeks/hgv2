import { Schema, model } from "mongoose";
import { Types, Document, PopulatedDoc } from "mongoose";
import { InterfaceUser } from "./user.model";
import { InterfaceWing } from "./wings.model";
import { InterfaceAssignment } from "./assignment.model";

export interface InterfaceLevel {
  _id: Types.ObjectId;
  title: string;
  enrolled: PopulatedDoc<InterfaceUser & Document>[];
  // topics: PopulatedDoc<InterfaceTopic & Document>[];
  wingId: PopulatedDoc<InterfaceWing & Document>;
  assignments: PopulatedDoc<InterfaceAssignment & Document>[];
  userId: PopulatedDoc<InterfaceUser & Document>[];
}

/**
 * Represents the schema for a levels.
 */
const levelSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    enrolled: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // topics: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Topic",
    //   },
    // ],
    wingId: {
      type: Schema.Types.ObjectId,
      ref: "Wing",
    },
    assignments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Assignment",
      },
    ],
    userId: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true },
);

export const Level = model<InterfaceLevel & Document>("Level", levelSchema);
