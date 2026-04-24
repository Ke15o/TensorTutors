import { majorTopics } from "../data/topics";
import type { Concept, ConceptLocation, MajorTopic, SearchResult, Subtopic } from "../types/topic";

export function getMajorTopic(topicSlug: string): MajorTopic | undefined {
  return majorTopics.find((topic) => topic.slug === topicSlug);
}

export function getFirstConcept(topic: MajorTopic): ConceptLocation {
  const subtopic = topic.subtopics[0];
  const concept = subtopic.concepts[0];

  return {
    topic,
    subtopic,
    concept,
    conceptNumber: 1,
    conceptTotal: getConceptCount(topic),
  };
}

export function getConceptLocation(
  topicSlug: string,
  subtopicSlug?: string,
  conceptSlug?: string,
): ConceptLocation | undefined {
  const topic = getMajorTopic(topicSlug);

  if (!topic) {
    return undefined;
  }

  if (!subtopicSlug || !conceptSlug) {
    return getFirstConcept(topic);
  }

  let conceptNumber = 0;

  for (const subtopic of topic.subtopics) {
    for (const concept of subtopic.concepts) {
      conceptNumber += 1;

      if (subtopic.slug === subtopicSlug && concept.slug === conceptSlug) {
        return {
          topic,
          subtopic,
          concept,
          conceptNumber,
          conceptTotal: getConceptCount(topic),
        };
      }
    }
  }

  return undefined;
}

export function getAdjacentConcepts(topic: MajorTopic, activeConceptId: string) {
  const concepts = flattenConcepts(topic);
  const index = concepts.findIndex((item) => item.concept.id === activeConceptId);

  return {
    previous: index > 0 ? concepts[index - 1] : undefined,
    next: index >= 0 && index < concepts.length - 1 ? concepts[index + 1] : undefined,
  };
}

export function getConceptHref(topic: MajorTopic, subtopic: Subtopic, concept: Concept): string {
  return `/tutorials/${topic.slug}/${subtopic.slug}/${concept.slug}`;
}

export function getConceptCount(topic: MajorTopic): number {
  return topic.subtopics.reduce((total, subtopic) => total + subtopic.concepts.length, 0);
}

export function flattenConcepts(topic: MajorTopic) {
  return topic.subtopics.flatMap((subtopic) =>
    subtopic.concepts.map((concept) => ({
      topic,
      subtopic,
      concept,
      href: getConceptHref(topic, subtopic, concept),
    })),
  );
}

export function searchLearningContent(query: string): SearchResult[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  const results: SearchResult[] = [];

  for (const topic of majorTopics) {
    if (`${topic.title} ${topic.summary}`.toLowerCase().includes(normalizedQuery)) {
      const firstConcept = getFirstConcept(topic);
      results.push({
        title: topic.title,
        subtitle: "Major topic",
        summary: topic.summary,
        href: getConceptHref(topic, firstConcept.subtopic, firstConcept.concept),
      });
    }

    for (const subtopic of topic.subtopics) {
      if (`${subtopic.title} ${subtopic.summary}`.toLowerCase().includes(normalizedQuery)) {
        const firstConcept = subtopic.concepts[0];
        results.push({
          title: subtopic.title,
          subtitle: topic.title,
          summary: subtopic.summary,
          href: getConceptHref(topic, subtopic, firstConcept),
        });
      }

      for (const concept of subtopic.concepts) {
        if (`${concept.title} ${concept.summary}`.toLowerCase().includes(normalizedQuery)) {
          results.push({
            title: concept.title,
            subtitle: `${topic.title} / ${subtopic.title}`,
            summary: concept.summary,
            href: getConceptHref(topic, subtopic, concept),
          });
        }
      }
    }
  }

  return results.slice(0, 8);
}
