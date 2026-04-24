import type { MajorTopic } from "../types/topic";
import { algorithmsTopic } from "./topics/algorithms";
import { computerSystemsTopic } from "./topics/computerSystems";
import { cybersecurityTopic } from "./topics/cybersecurity";
import { dataStructuresTopic } from "./topics/dataStructures";
import { databasesTopic } from "./topics/databases";
import { mathsForCsTopic } from "./topics/mathsForCs";
import { networkingTopic } from "./topics/networking";
import { pythonTopic } from "./topics/python";

export const majorTopics: MajorTopic[] = [
  pythonTopic,
  algorithmsTopic,
  dataStructuresTopic,
  computerSystemsTopic,
  databasesTopic,
  networkingTopic,
  cybersecurityTopic,
  mathsForCsTopic,
];
