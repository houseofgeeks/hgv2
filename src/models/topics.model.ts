import { Schema, model } from "mongoose";
import type { Types, Document, PopulatedDoc } from "mongoose";
import { InterfaceLevel } from "./level.model";

export interface InterfaceTopic {
  _id: Types.ObjectId;
  title: string;
  //subtopics: PopulatedDoc<InterfaceSubtopic & Document>[];
  levelId: PopulatedDoc<InterfaceLevel & Document>;
}

/**
 * Represents a topic schema.
 */
const topicSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  //   subtopics: [
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: "Subtopic",
  //     },
  //   ],
  levelId: {
    type: Schema.Types.ObjectId,
    ref: "Level",
  },
});

export const Topic = model<InterfaceTopic & Document>("Topic", topicSchema);
