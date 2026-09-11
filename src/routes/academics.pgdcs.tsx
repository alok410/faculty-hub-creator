import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FacultyTabContent } from "@/components/site/FacultyTabContent";
import { FACULTY_DATA, getDepartmentStaffCount } from "@/content/faculty";
import {
  ShieldAlert,
  ShieldCheck,
  Terminal,
  Lock,
  Cpu,
  Layers,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Server,
  FileText,
} from "lucide-react";

export const Route = createFileRoute("/academics/pgdcs")({
  head: () => ({
    meta: [
      { title: "PG Diploma in Cyber Security (PGDCS) | GTU-ITR" },
      {
        name: "description",
        content:
          "Academic curriculum, cybersecurity laboratories, digital forensics toolkits, and threat defense methodologies for 1-Year PGDCS at GTU-ITR Mehsana.",
      },
      { property: "og:title", content: "PG Diploma in Cyber Security (PGDCS) | GTU-ITR" },
      {
        property: "og:description",
        content:
          "Specialized postgraduate cyber defense, VAPT, SIEM, and digital forensics curriculum at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/academics/pgdcs" },
    ],
    links: [{ rel: "canonical", href: "/academics/pgdcs" }],
  }),
  component: PgdcsAcademicsPage,
});

const STATS = [
  { label: "Program Format", value: "1 Year (2 Sems)", icon: Layers, desc: "Fast-track professional PG Diploma" },
  { label: "Hands-on Lab", value: "Cyber Range", icon: Terminal, desc: "Isolated ethical hacking sandbox" },
  { label: "Key Focus", value: "VAPT & Forensics", icon: ShieldAlert, desc: "Offensive & defensive cyber warfare" },
  { label: "Awarding Body", value: "GTU Ahmedabad", icon: BookOpen, desc: "Official state university qualification" },
];

const LAB_MODULES = [
  {
    name: "Offensive Security & Penetration Testing Bay",
    desc: "Isolated virtual local area networks (VLANs) for simulating real-world cyber attacks, privilege escalation, and network reconnaissance.",
    tools: ["Kali Linux 2024", "Metasploit Framework", "Burp Suite Pro", "Nmap & Nessus Vulnerability Scanner", "OWASP ZAP"],
  },
  {
    name: "Digital Forensics & Incident Response Lab",
    desc: "Forensic disk imaging, volatile memory extraction, hash verification, and timeline reconstruction compliant with chain of custody laws.",
    tools: ["Autopsy Digital Forensics", "FTK Imager", "Volatility Memory Analyzer", "Wireshark Packet Inspector", "ExifTool & Sleuth Kit"],
  },
  {
    name: "Security Operations Center (SOC) & SIEM Suite",
    desc: "Live ingestion of syslog events, firewall telemetry, intrusion detection alerts, and automated security orchestration.",
    tools: ["Splunk Enterprise (Free Dev)", "Wazuh Open Source EDR/XDR", "Snort / Suricata IDS/IPS", "ELK Stack (Elasticsearch)"],
  },
  {
    name: "Malware Analysis & Cryptographic Testing Lab",
    desc: "Static and dynamic analysis of benign and sandbox-contained malicious binaries, disassemblers, and public-key cryptography implementations.",
    tools: ["Ghidra Reverse Engineering", "x64dbg / IDA Free", "Cuckoo Sandbox", "OpenSSL PKI Suite", "GnuPG Cryptography"],
  },
];

const CURRICULUM_SEMESTERS = [
  {
    sem: "Semester 1: Cyber Defense & Threat Fundamentals",
    desc: "Foundations of networking protocols, enterprise boundary firewalls, applied cryptography, and web application vulnerability assessment.",
    subjects: [
      "Advanced TCP/IP Protocols & Network Security Architectures",
      "Applied Cryptography, PKI & Encryption Standards",
      "Operating System Security & Linux Kernel Hardening",
      "Ethical Hacking & Vulnerability Assessment (VAPT)",
      "Web Application Security & OWASP Top 10 Mitigation",
      "Practical Lab I: Network Sniffing, Scanning & Penetration",
    ],
  },
  {
    sem: "Semester 2: Advanced Cyber Operations & Forensics",
    desc: "Digital evidence gathering, reverse engineering, SIEM event correlation, compliance frameworks, and a mandatory industry defense capstone.",
    subjects: [
      "Digital Forensics, Evidence Preservation & Chain of Custody",
      "Malware Analysis & Software Reverse Engineering",
      "Security Operations Center (SOC) & Incident Response Handling",
      "Cyber Laws, IT Act 2000 & ISO/IEC 27001 Security Auditing",
      "Cloud Security & DevSecOps Architecture",
      "Major Capstone Cyber Defense Project / Threat Report",
    ],
  },
];

function PgdcsAcademicsPage() {
  return (
    <PageShell
      title="PG Diploma in Cyber Security (PGDCS)"
      subtitle="Intensive 1-Year postgraduate program mastering ethical hacking, digital forensics, SIEM security operations, and regulatory cyber defense."
    >
      {/* Top Banner Stats */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-navy/30 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy">
              <s.icon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-foreground">{s.value}</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-navy">{s.label}</div>
              <p className="mt-0.5 text-xs text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="curriculum" className="w-full space-y-8">
        <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-xl bg-muted/60 p-1.5 sm:grid-cols-4">
          <TabsTrigger value="curriculum" className="py-2.5 font-medium">Curriculum Structure</TabsTrigger>
          <TabsTrigger value="faculty" className="py-2.5 font-medium">Staff Members ({getDepartmentStaffCount("pgdcs")})</TabsTrigger>
          <TabsTrigger value="cyber-range" className="py-2.5 font-medium">Cyber Range Labs (4)</TabsTrigger>
          <TabsTrigger value="certifications" className="py-2.5 font-medium">Industry Mappings</TabsTrigger>
        </TabsList>

        {/* 1. CURRICULUM */}
        <TabsContent value="curriculum" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">2-Semester Intensive Curriculum</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-8">
              Conforming to the official Gujarat Technological University syllabus, combining rigorous practical security labs with industrial threat hunting methodologies.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {CURRICULUM_SEMESTERS.map((sem, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-brand-navy mb-1 text-base">
                    <BookOpen className="h-4 w-4 text-brand-red shrink-0" />
                    <h4>{sem.sem}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{sem.desc}</p>
                  
                  <div className="mt-auto pt-3 border-t border-border">
                    <div className="text-[11px] font-semibold text-foreground mb-2 uppercase tracking-wider">Subjects &amp; Practical Modules:</div>
                    <ul className="space-y-1.5">
                      {sem.subjects.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl bg-brand-surface p-5 border border-border">
              <div>
                <div className="font-semibold text-foreground text-sm">Download Official GTU PGDCS Syllabus Notification</div>
                <div className="text-xs text-muted-foreground">Detailed teaching scheme, lab exam rubrics, and project guidelines.</div>
              </div>
              <a
                href="https://www.gtu.ac.in/Syllabus_List.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 text-xs font-semibold text-white shadow hover:bg-brand-navy/90 shrink-0 transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span>GTU Official Syllabus</span>
              </a>
            </div>
          </div>
        </TabsContent>

        {/* 2. FACULTY MENTORS */}
        <TabsContent value="faculty" className="focus-visible:outline-none">
          <FacultyTabContent
            departmentTitle="PG Diploma in Cyber Security (PGDCS)"
            teachingFaculty={FACULTY_DATA["pgdcs"].teaching}
          />
        </TabsContent>

        {/* 3. CYBER RANGE LABS */}
        <TabsContent value="cyber-range" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Departmental Cyber Range &amp; Toolkits</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-8">
              Students operate in fully air-gapped simulated networks to perform offensive penetration tests, analyze live malware specimens, and capture network packet streams without external risks.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {LAB_MODULES.map((lab, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-navy/30">
                  <div className="flex items-center gap-2 font-bold text-brand-navy text-base mb-2">
                    <Terminal className="h-4 w-4 text-brand-red shrink-0" />
                    <h3>{lab.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{lab.desc}</p>
                  <div className="mt-auto pt-3 border-t border-border">
                    <div className="text-[11px] font-semibold text-foreground mb-2 uppercase tracking-wider">Frameworks &amp; Toolkits:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {lab.tools.map((tool, tIdx) => (
                        <Badge key={tIdx} variant="secondary" className="text-[11px] font-normal px-2 py-0.5">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* 3. CERTIFICATIONS */}
        <TabsContent value="certifications" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Global Certification Alignment</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-6">
              The PGDCS curriculum at GTU-ITR aligns directly with internationally recognized cybersecurity industry certifications, enabling students to clear global exams seamlessly:
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-brand-surface/40 p-5">
                <Badge variant="outline" className="border-brand-navy/30 text-brand-navy mb-2">EC-Council</Badge>
                <div className="font-bold text-foreground text-sm">CEH (Certified Ethical Hacker)</div>
                <p className="text-xs text-muted-foreground mt-1">Covered via Semester 1 ethical hacking &amp; network security modules.</p>
              </div>
              <div className="rounded-xl border border-border bg-brand-surface/40 p-5">
                <Badge variant="outline" className="border-brand-navy/30 text-brand-navy mb-2">CompTIA</Badge>
                <div className="font-bold text-foreground text-sm">CompTIA Security+</div>
                <p className="text-xs text-muted-foreground mt-1">Covered via enterprise network defense and identity access management.</p>
              </div>
              <div className="rounded-xl border border-border bg-brand-surface/40 p-5">
                <Badge variant="outline" className="border-brand-navy/30 text-brand-navy mb-2">EC-Council</Badge>
                <div className="font-bold text-foreground text-sm">CHFI (Forensic Investigator)</div>
                <p className="text-xs text-muted-foreground mt-1">Covered via Semester 2 digital forensics, memory analysis &amp; chain of custody.</p>
              </div>
              <div className="rounded-xl border border-border bg-brand-surface/40 p-5">
                <Badge variant="outline" className="border-brand-navy/30 text-brand-navy mb-2">BSI / ISO</Badge>
                <div className="font-bold text-foreground text-sm">ISO/IEC 27001 Lead Auditor</div>
                <p className="text-xs text-muted-foreground mt-1">Covered via IT governance, risk mitigation, and cyber law curriculum.</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PageShell>
  );
}
