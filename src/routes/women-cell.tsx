import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, HeartHandshake, Mail, Phone, Lock, CheckCircle2, Scale, Users } from "lucide-react";

export const Route = createFileRoute("/women-cell")({
  head: () => ({
    meta: [
      { title: "Women Development Cell & ICC | GTU-ITR" },
      { name: "description", content: "Women Development Cell (WDC) and Internal Complaints Committee (ICC) at GTU Institute of Technology & Research." },
      { property: "og:title", content: "Women Development Cell & ICC | GTU-ITR" },
      { property: "og:description", content: "Women Development Cell (WDC) and Internal Complaints Committee (ICC) at GTU Institute of Technology & Research." },
      { property: "og:url", content: "/women-cell" },
    ],
    links: [{ rel: "canonical", href: "/women-cell" }],
  }),
  component: Page,
});

const wdcMembers = [
  { name: "Prof. Hemal Patel", designation: "Assistant Professor in Computer Engineering", position: "Co-ordinator", email: "hemal.patel@gtu.edu.in" },
  { name: "Prof. Avani Raval", designation: "Assistant Professor in Computer Engineering", position: "Co-coordinator", email: "avani.raval@gtu.edu.in" },
  { name: "Prof. Hinal Prajapati", designation: "Assistant Professor in Computer Engineering", position: "Member (Internal)", email: "hinal.prajapati@gtu.edu.in" },
  { name: "Ms. Jeel Patel", designation: "Lecturer in Computer Engineering", position: "Member (Internal)", email: "jeelben.patel@gtu.edu.in" },
  { name: "Prof. Chetna Agarwal", designation: "Assistant Professor_OSD in Science and Humanities Department", position: "Member (Internal)", email: "chetna.agarwal@gtu.edu.in" },
];

const iccMembers = [
  { name: "Prof. Hemal Patel", designation: "Assistant Professor in Computer Engineering", position: "Co-ordinator", email: "hemal.patel@gtu.edu.in" },
  { name: "Prof. Avani Raval", designation: "Assistant Professor in Computer Engineering", position: "Co-coordinator", email: "avani.raval@gtu.edu.in" },
];

function Page() {
  return (
    <PageShell 
      title="Women Cell" 
      subtitle="Ensuring a safe, respectful, equal, and empowering environment for all female students and staff at GTU-ITR."
    >
      <Tabs defaultValue="wdc" className="w-full">
        {/* Styled Sub-Navigation Bar matching reference */}
        <div className="mb-8 rounded-xl border border-brand-navy/20 bg-brand-navy p-2 shadow-md">
          <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 gap-2">
            <TabsTrigger 
              value="wdc" 
              className="py-2.5 text-sm font-semibold text-white/80 transition-all cursor-pointer hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              <HeartHandshake className="mr-2 h-4 w-4" />
              Women Development Cell (WDC)
            </TabsTrigger>
            <TabsTrigger 
              value="icc" 
              className="py-2.5 text-sm font-semibold text-white/80 transition-all cursor-pointer hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              <ShieldCheck className="mr-2 h-4 w-4" />
              Internal Complaints Committee (ICC)
            </TabsTrigger>
          </TabsList>
        </div>

        {/* SECTION 1: Women Development Cell */}
        <TabsContent value="wdc" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-navy">
              Women Development Cell at GTU-ITR
            </h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red" />
            
            <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
              Objectives of this WDC are:
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-lg border border-border/80 bg-brand-surface/40 p-4 transition-colors hover:border-brand-navy/30">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  To create social awareness to female fraternity of the college for issues related to women.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-border/80 bg-brand-surface/40 p-4 transition-colors hover:border-brand-navy/30">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  To organize talks, seminars or debates for all female students &amp; staff of the institute for their development to promote general well-being.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-border/80 bg-brand-surface/40 p-4 transition-colors hover:border-brand-navy/30">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  To inculcate social values in female fraternity by conducting community service activities.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-border/80 bg-brand-surface/40 p-4 transition-colors hover:border-brand-navy/30">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  To organize various types of training programmes &amp; create awareness for skill developments under self-employment schemes for women.
                </p>
              </div>
            </div>
          </div>

          {/* WDC Members Table */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">
                  Details of Women Development Cell at GTU-ITR
                </h3>
                <p className="text-xs text-muted-foreground mt-1">Committee members and key coordinators</p>
              </div>
              <Users className="h-6 w-6 text-brand-navy/60 hidden sm:block" />
            </div>

            <div className="overflow-x-auto rounded-lg border border-border">
              <Table>
                <TableHeader className="bg-muted/80">
                  <TableRow>
                    <TableHead className="font-bold text-foreground">Name</TableHead>
                    <TableHead className="font-bold text-foreground">Designation</TableHead>
                    <TableHead className="font-bold text-foreground">Position</TableHead>
                    <TableHead className="font-bold text-foreground">E-mail</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {wdcMembers.map((member, idx) => (
                    <TableRow key={idx} className="hover:bg-muted/40">
                      <TableCell className="font-semibold text-brand-navy">{member.name}</TableCell>
                      <TableCell className="text-sm text-foreground/90">{member.designation}</TableCell>
                      <TableCell>
                        <Badge variant={member.position.includes("Co-ordinator") ? "default" : "secondary"}>
                          {member.position}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <a 
                          href={`mailto:${member.email}`} 
                          className="inline-flex items-center gap-1.5 text-xs text-brand-navy underline-offset-4 hover:underline"
                        >
                          <Mail className="h-3.5 w-3.5 text-brand-red" />
                          {member.email}
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        {/* SECTION 2: Internal Complaints Committee */}
        <TabsContent value="icc" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-2xl font-bold uppercase text-brand-navy">
                Internal Complaints Committee (ICC) at GTU-ITR
              </h2>
              <Scale className="h-8 w-8 text-brand-red/80 hidden sm:block" />
            </div>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red" />
            
            <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
              ICC has following mandates:
            </h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-brand-surface/30 p-3.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  To monitor, prevent, redressal of sexual harassment of women at workplace/study.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-brand-surface/30 p-3.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  To provide a forum for women on the campus to share if any such case is with them.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-brand-surface/30 p-3.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  To facilitate a gender-sensitive and congenial working environment so that all women at campus are not subjected to gender-specific discrimination or sexual harassment.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-brand-surface/30 p-3.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  To organize various types of training programmes &amp; create awareness for skill developments under self-employment schemes for women.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-brand-surface/30 p-3.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  Any such harassment results in violation of the fundamental rights of gender equality and the right to life and liberty. It is a clear violation of the rights under Articles 14, 15 and 21 of the Constitution of India.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-brand-red/30 bg-brand-red/5 p-4">
                <Lock className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <p className="text-sm leading-relaxed font-medium text-foreground">
                  In this kind of case, the person concerned can personally approach / telephone / write / e-mail to any member of ICC at GPERI. The name of the complainant will be kept <span className="font-bold text-brand-red uppercase">CONFIDENTIAL</span> if required.
                </p>
              </div>
            </div>
          </div>

          {/* ICC Committee Members Table */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="mb-4 font-heading text-xl font-bold uppercase text-brand-navy">
              Details of Internal Complaints Committee at GTU-ITR
            </h3>

            <div className="overflow-x-auto rounded-lg border border-border">
              <Table>
                <TableHeader className="bg-muted/80">
                  <TableRow>
                    <TableHead className="font-bold text-foreground">Name</TableHead>
                    <TableHead className="font-bold text-foreground">Designation</TableHead>
                    <TableHead className="font-bold text-foreground">Position</TableHead>
                    <TableHead className="font-bold text-foreground">E-mail</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {iccMembers.map((member, idx) => (
                    <TableRow key={idx} className="hover:bg-muted/40">
                      <TableCell className="font-semibold text-brand-navy">{member.name}</TableCell>
                      <TableCell className="text-sm text-foreground/90">{member.designation}</TableCell>
                      <TableCell>
                        <Badge variant="default">{member.position}</Badge>
                      </TableCell>
                      <TableCell>
                        <a 
                          href={`mailto:${member.email}`} 
                          className="inline-flex items-center gap-1.5 text-xs text-brand-navy underline-offset-4 hover:underline"
                        >
                          <Mail className="h-3.5 w-3.5 text-brand-red" />
                          {member.email}
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Action Tasks Protocol */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              If any such complaint is received, ICC has following tasks to do:
            </h3>
            <div className="mt-2 mb-4 h-1 w-12 bg-brand-navy" />

            <ul className="grid gap-3 sm:grid-cols-3">
              <li className="flex flex-col justify-between rounded-lg border border-border/80 bg-muted/30 p-4">
                <span className="mb-2 font-bold text-brand-navy text-xs uppercase tracking-wider">Step 1</span>
                <p className="text-xs leading-relaxed text-foreground/90">
                  To confirm that appropriate action is taken against the offender.
                </p>
              </li>

              <li className="flex flex-col justify-between rounded-lg border border-border/80 bg-muted/30 p-4">
                <span className="mb-2 font-bold text-brand-navy text-xs uppercase tracking-wider">Step 2</span>
                <p className="text-xs leading-relaxed text-foreground/90">
                  To ensure that victims and witnesses are not victimized or discriminated because of their complaint.
                </p>
              </li>

              <li className="flex flex-col justify-between rounded-lg border border-border/80 bg-muted/30 p-4">
                <span className="mb-2 font-bold text-brand-navy text-xs uppercase tracking-wider">Step 3</span>
                <p className="text-xs leading-relaxed text-foreground/90">
                  To take proactive measures towards sensitization of GTU-ITR community on gender issues so that campus remains an excellent work &amp; study place for all.
                </p>
              </li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      {/* Confidential Helpline Banner */}
      <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-brand-navy/20 bg-brand-navy p-6 text-white sm:flex-row shadow-md">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 sm:justify-start font-heading font-semibold text-lg">
            <Phone className="h-5 w-5 text-brand-red" />
            <span>24x7 Women Helpline</span>
          </div>
          <p className="text-xs text-white/80">
            For urgent support or confidential assistance, reach out anytime.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="tel:+917827170170"
            className="rounded-lg bg-brand-red px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow transition-all hover:bg-brand-red/90"
          >
            +91 7827170170
          </a>
        </div>
      </div>
    </PageShell>
  );
}

