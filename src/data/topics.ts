import type { MajorTopic } from "../types/topic";
import { algorithmsTopic } from "./topics/algorithms";
import { artificialIntelligenceMachineLearningTopic } from "./topics/artificialIntelligenceMachineLearning";
import { compilersInterpretersTopic } from "./topics/compilersInterpreters";
import { computerSystemsTopic } from "./topics/computerSystems";
import { concurrentParallelComputingTopic } from "./topics/concurrentParallelComputing";
import { cybersecurityTopic } from "./topics/cybersecurity";
import { dataStructuresTopic } from "./topics/dataStructures";
import { databasesTopic } from "./topics/databases";
import { mathsForCsTopic } from "./topics/mathsForCs";
import { networkingTopic } from "./topics/networking";
import { operatingSystemsTopic } from "./topics/operatingSystems";
import { programmingParadigmsTopic } from "./topics/programmingParadigms";
import { pythonTopic } from "./topics/python";
import { softwareEngineeringTopic } from "./topics/softwareEngineering";
import { theoryOfComputationTopic } from "./topics/theoryOfComputation";
import { webDevelopmentTopic } from "./topics/webDevelopment";

export const majorTopics: MajorTopic[] = [
  pythonTopic,
  algorithmsTopic,
  dataStructuresTopic,
  computerSystemsTopic,
  databasesTopic,
  networkingTopic,
  cybersecurityTopic,
  mathsForCsTopic,
  softwareEngineeringTopic,
  webDevelopmentTopic,
  operatingSystemsTopic,
  artificialIntelligenceMachineLearningTopic,
  theoryOfComputationTopic,
  programmingParadigmsTopic,
  compilersInterpretersTopic,
  concurrentParallelComputingTopic,
];
