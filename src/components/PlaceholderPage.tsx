import { Card } from "./Card";
import { PageHeader } from "./PageHeader";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  cards: Array<{
    title: string;
    eyebrow: string;
    body: string;
  }>;
};

export function PlaceholderPage({ eyebrow, title, summary, cards }: PlaceholderPageProps) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} summary={summary} />
      <section className="page-shell py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.title} eyebrow={card.eyebrow} title={card.title}>
              <p>{card.body}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
