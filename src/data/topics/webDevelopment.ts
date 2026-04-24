import type { MajorTopic } from "../../types/topic";

export const webDevelopmentTopic: MajorTopic = {
  id: "web-development",
  title: "Web Development",
  slug: "web-development",
  summary: "HTML, CSS, JavaScript, web architecture, and building usable browser-based interfaces.",
  subtopics: [
    {
      id: "web-foundations",
      title: "Web Foundations",
      slug: "web-foundations",
      summary: "The basic technologies and request model behind websites.",
      concepts: [
        {
          id: "how-the-web-works",
          title: "How the Web Works",
          slug: "how-the-web-works",
          summary: "Browsers request resources from servers and render them into interactive pages.",
          explanation: [
            "A web browser asks a server for resources such as HTML, CSS, JavaScript, images, and data. The server responds, and the browser uses those files to build the page the user sees.",
            "HTML describes structure, CSS controls presentation, and JavaScript adds behaviour. Modern web apps combine these pieces to create fast, interactive interfaces.",
          ],
          commonMistakes: [
            "Mixing structure, styling, and behaviour without clear boundaries.",
            "Ignoring accessibility and assuming visual design is enough.",
            "Forgetting that network requests can fail or take time.",
          ],
        },
      ],
    },
  ],
};
