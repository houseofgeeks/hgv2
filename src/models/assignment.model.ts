import { Schema, model } from "mongoose";
import type { Types, Document, PopulatedDoc } from "mongoose";
import { InterfaceLevel } from "./level.model";

export interface InterfaceAssignment {
  _id: Types.ObjectId;
  name: string;
  description: string;
  image: string;
  // submitted: [
  //   {
  //     user: PopulatedDoc<InterfaceUser & Document>;
  //     projectURL: string;
  //     verified: boolean;
  //   }
  // ];
  levelId: PopulatedDoc<InterfaceLevel & Document>;
}

/**
 * Represents the assignment schema.
 */
const assignmentSchema = new Schema({
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
  //   submitted: [
  //     {
  //       user: {
  //         type: Schema.Types.ObjectId,
  //         ref: "User",
  //       },
  //       projectURL: {
  //         type: String,
  //         required: true,
  //       },
  //       verified: {
  //         type: Boolean,
  //         default: false
  //       }
  //     }
  //   ],
  levelId: {
    type: Schema.Types.ObjectId,
    ref: "Level",
  },
});

export const Assignment = model<InterfaceAssignment & Document>(
  "Assignment",
  assignmentSchema,
);
