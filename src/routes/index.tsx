import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { FileText, GraduationCap, Building2, FlaskConical, Factory, Briefcase, Landmark } from "lucide-react";
import { getHomeContent } from "@/lib/site-content.functions";
import { HomeSlider } from "@/components/site/HomeSlider";
import { CountUp, FadeIn, Stagger, StaggerItem } from "@/components/motion/motion-primitives";

const homeQuery = queryOptions({ queryKey: ["home-content"], queryFn: () => getHomeContent() });

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(homeQuery),
  head: () => ({
    meta: [
      { title: "GTU-ITR | Institute of Technology & Research, Mehsana" },
      {
        name: "description",
        content:
          "Official website of GTU Institute of Technology & Research, Mehsana - admissions, degree and diploma programmes, SIEMENS Centre of Excellence, placements and campus news.",
      },
      { property: "og:title", content: "GTU-ITR | Institute of Technology & Research" },
      { property: "og:description", content: "Degree and diploma engineering education by Gujarat Technological University at Mehsana." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
  errorComponent: () => <div className="p-10 text-center text-muted-foreground">Content could not be loaded.</div>,
});

const FEATURES = [
  { icon: GraduationCap, title: "Highly Qualified Faculties", text: "Experienced faculty members from higher sets of learning such as IITs, NITs etc and also having exposures to international academia to offer our students an unmatched learning experience." },
  { icon: Factory, title: "Siemens Center of Excellence", text: "The SIEMENS Center of Excellence - the industrial Automation has been established by Govt. of Gujarat which has 9 laboratories having world class equipment's to offer 60 short term training courses." },
  { icon: Building2, title: "Elegant Architecture", text: "The campus spread over lush green landscapes and water ponds. The architecture borrows several features such as maximum natural light, low electricity consumption and solar roof-top energy generation." },
  { icon: FlaskConical, title: "Well Established Labs", text: "Hands-on-experiences are prerequisites for scientific and engineering research. We have created a number of domain specific well-equipped laboratories to facilitate the pedagogy and experiments." },
  { icon: Landmark, title: "Industrial Linkage", text: "Multiple points of interaction with industry gives GTU-ITR students the opportunity to absorb experience from practicing gurus and in-depth understanding of practicing engineering beyond the course curriculum." },
  { icon: Briefcase, title: "Dedicated Training and Placement Cell", text: "Temple for career development opportunities where students and recruiters can come together to explore avenues of a fruitful and synergistic association." },
];

const STATS = [
  { value: "50", label: "Faculties" },
  { value: "11553", label: "Books" },
  { value: "700", label: "Students" },
  { value: "52", label: "Laboratories" },
];

const TESTIMONIALS = [
  { name: "Yusuf Abdirahman", text: "GTU-ITR that has impressed me is the Kaushalya cultural event. This annual event celebrates and showcases the diversity of cultures on campus, creating a vibrant and inclusive community. Another key highlight of my college experience has been the Shaurya sports festival." },
  { name: "Gupta Jay", text: "Best college in Mehsana district to be a part of. Our college has provided excellent placement opportunities. I got placed in my last year with an MNC, and I owe it all to the excellent training and support provided by the college." },
  { name: "Daniel Rakotoarisoa", text: "A very good college that prepares its students for a better future as well as to be a good engineer. This college has its best way of teaching related to the field that makes it different from other colleges, especially in terms of the Minor Degree." },
  { name: "Varia Dhruvkumar", text: "GTU-ITR is a fantastic engineering college that has truly helped me grow both academically and personally. They focus not only on academic growth but also on developing soft skills such as communication, leadership and responsibility." },
];

function Home() {
  const { data } = useSuspenseQuery(homeQuery);

  return (
    <>
      {data.updates.length > 0 && (
        <div className="flex items-stretch overflow-hidden bg-brand-red text-primary-foreground">
          <div className="flex shrink-0 items-center bg-brand-navy px-4 font-heading text-sm font-bold uppercase tracking-wider">Updates</div>
          <div className="relative flex-1 overflow-hidden py-2">
            <div className="flex w-max animate-marquee gap-10 whitespace-nowrap px-6 text-sm">
              {[...data.updates, ...data.updates].map((u, idx) =>
                u.link_url ? (
                  <a key={`${u.id}-${idx}`} href={u.link_url} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                    {u.text}
                  </a>
                ) : (
                  <span key={`${u.id}-${idx}`}>{u.text}</span>
                ),
              )}
            </div>
          </div>
        </div>
      )}

      <section className="mx-auto grid max-w-[1200px] gap-8 px-5 py-10 md:grid-cols-[1fr_380px]">
        <FadeIn>
          <h2 className="section-title">Welcome to GTU-ITR</h2>
          <div className="mt-2 h-1 w-16 bg-brand-red" />
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">
            GTU Institute of Technology &amp; Research, Mehsana — a constituent institute of Gujarat
            Technological University — offers degree and diploma engineering programmes with a
            SIEMENS Centre of Excellence, well-established laboratories, and a dedicated Training
            &amp; Placement Cell on a lush green, solar-powered campus.
          </p>
        </FadeIn>

        <FadeIn as="aside" delay={0.15}>
          <h2 className="section-title">News &amp; Updates</h2>
          <div className="mt-2 h-1 w-16 bg-brand-red" />
          <div className="mt-4 max-h-[420px] overflow-y-auto border border-border bg-brand-surface">
            <div>
              {data.news.map((n) => (
                <a
                  key={n.id}
                  href={n.document_url ?? "#"}
                  target={n.document_url ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex gap-2 border-b border-border px-4 py-3 text-[13px] leading-snug text-foreground transition-colors hover:bg-card hover:text-brand-red"
                >
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                  <span>{n.title}</span>
                </a>
              ))}
            </div>
          </div>
          <Link to="/admissions/degree" className="mt-4 block bg-brand-navy py-3 text-center font-heading text-sm font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-red hover:shadow-lg">
            Admission Open 2026
          </Link>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10">
        <FadeIn>
          <h2 className="section-title">What We Have</h2>
          <div className="mt-2 h-1 w-16 bg-brand-red" />
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">
            Experienced Faculty Members, SIEMENS Center of Excellence, Elegant Architecture, Industrial Linkage,
            Well Established Laboratories, MOOCs Courses, Wi-Fi Campus, Transportation, Training and Placement Cell,
            Hygienic Cafeteria.
          </p>
          <Stagger className="mt-6 grid gap-5 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <StaggerItem key={f.title} className="group h-full border border-border border-l-4 border-l-brand-red bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <f.icon className="h-7 w-7 text-brand-red transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-3 font-heading text-base font-bold uppercase text-brand-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeIn>

        <FadeIn as="aside" delay={0.15}>
          <h2 className="section-title">News &amp; Updates</h2>
          <div className="mt-2 h-1 w-16 bg-brand-red" />
          <div className="mt-4 max-h-[420px] overflow-y-auto border border-border bg-brand-surface">
            <div>
              {data.news.map((n) => (
                <a
                  key={n.id}
                  href={n.document_url ?? "#"}
                  target={n.document_url ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex gap-2 border-b border-border px-4 py-3 text-[13px] leading-snug text-foreground transition-colors hover:bg-card hover:text-brand-red"
                >
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                  <span>{n.title}</span>
                </a>
              ))}
            </div>
          </div>
          <Link to="/admissions/degree" className="mt-4 block bg-brand-navy py-3 text-center font-heading text-sm font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-red hover:shadow-lg">
            Admission Open 2026
          </Link>
        </FadeIn>
      </section>

      <section className="bg-brand-navy py-10">
        <Stagger className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 text-center md:grid-cols-4">
          {STATS.map((s) => (
            <StaggerItem key={s.label}>
              <p className="font-display text-4xl text-brand-gold md:text-5xl">
                <CountUp value={Number(s.value)} />
              </p>
              <p className="mt-1 text-sm uppercase tracking-wide text-primary-foreground/80">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10">
        <FadeIn>
          <h2 className="section-title">Student Testimonials</h2>
          <div className="mt-2 h-1 w-16 bg-brand-red" />
        </FadeIn>
        <Stagger className="mt-6 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name} className="h-full border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <p className="mt-3 font-heading text-sm font-bold uppercase text-brand-navy">- {t.name}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
