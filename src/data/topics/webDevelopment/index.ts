import type { MajorTopic } from "../../../types/topic";
import { webFoundationsSubtopic } from "./webFoundations";

export const webDevelopmentTopic: MajorTopic = {
  id: "web-development",
  title: "Web Development",
  slug: "web-development",
  summary: "HTML, CSS, JavaScript, web architecture, and building usable browser-based interfaces.",
  subtopics: [webFoundationsSubtopic],
};
