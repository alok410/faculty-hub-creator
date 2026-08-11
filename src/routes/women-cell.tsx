import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/women-cell")({
  head: () => ({
    meta: [
      { title: "Women Empowerment Cell | GTU-ITR" },
      { name: "description", content: "Ensuring a safe, respectful and equal campus for every woman." },
      { property: "og:title", content: "Women Empowerment Cell | GTU-ITR" },
      { property: "og:description", content: "Ensuring a safe, respectful and equal campus for every woman." },
      { property: "og:url", content: "/women-cell" },
    ],
    links: [{ rel: "canonical", href: "/women-cell" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Women Empowerment Cell" subtitle="Ensuring a safe, respectful and equal campus for every woman.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">About the Cell</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The Women Empowerment Cell of GTU-ITR works to create awareness about gender equality, prevent sexual harassment at the workplace, and provide a confidential redressal mechanism for complaints from female students and staff.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Activities</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Awareness sessions on safety, health and legal rights; self-defence workshops; counselling support; celebration of International Women's Day; and periodic committee meetings to review complaints and campus safety.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Helpline</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>24*7 Women Helpline: +91 7827170170. Complaints may also be submitted in writing to the Cell convener at the institute office.</p>
        </section>
      </Prose>
    </PageShell>
  );
}
