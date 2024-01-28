import { Schema, model } from "mongoose";
import type { Types, Document, PopulatedDoc } from "mongoose";
import { InterfaceProject } from "./project.model";
import { InterfaceTopic } from "./topics.model";

export interface InterfaceSubtopic {
  _id: Types.ObjectId;
  title: string;
  resources: {
    url: string;
    type: string;
  }[];
  completedBy: PopulatedDoc<InterfaceProject & Document>[];
  topicId: PopulatedDoc<InterfaceTopic & Document>;
}

/**
 * Represents the schema for a subtopic.
 */
const subtopicSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  resources: [
    {
      url: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
        enum: ["read", "watch"],
      },
    },
  ],
  completedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },
  ],
  topicId: {
    type: Schema.Types.ObjectId,
    ref: "Topic",
  },
});

export const Subtopic = model<InterfaceSubtopic & Document>(
  "Subtopic",
  subtopicSchema,
);
