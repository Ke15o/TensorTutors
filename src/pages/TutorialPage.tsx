import { ConceptArticle } from "../components/ConceptArticle";
import { TutorialLayout } from "../components/TutorialLayout";
import type { ConceptLocation } from "../types/topic";

type TutorialPageProps = {
  location: ConceptLocation;
};

export function TutorialPage({ location }: TutorialPageProps) {
  return (
    <TutorialLayout topic={location.topic} activeConceptId={location.concept.id}>
      <ConceptArticle location={location} />
    </TutorialLayout>
  );
}
