import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, Clock, HelpCircle, MessageSquare } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Admission & General Enquiry | GTU-ITR" },
      {
        name: "description",
        content:
          "Submit an admission or general academic enquiry to GTU-ITR Mehsana. Contact our admission helpdesk for B.E., Diploma, Integrated M.Sc. IT, and PGDCS counseling.",
      },
      { property: "og:title", content: "Admission & General Enquiry | GTU-ITR" },
      {
        property: "og:description",
        content: "Send an admission or general enquiry to GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/enquiry" },
    ],
    links: [{ rel: "canonical", href: "/enquiry" }],
  }),
  component: EnquiryPage,
});

const COURSES = [
  "B.E. in Computer Engineering",
  "B.E. in Mechanical Engineering",
  "B.E. in Civil Engineering",
  "B.E. in Electrical Engineering",
  "Diploma in Computer Engineering",
  "Diploma in Mechanical Engineering",
  "Diploma in Civil Engineering",
  "Diploma in Electrical Engineering",
  "5-Year Integrated M.Sc. in IT",
  "1-Year PG Diploma in Cyber Security (PGDCS)",
  "Campus Hostel / Transportation Query",
  "General Academic Query",
];

function EnquiryPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: COURSES[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCity/Town: ${form.city}\nCourse of Interest: ${form.course}\n\nQuery / Message:\n${form.message}`;
    window.location.href = `mailto:admission_gperi@gtu.edu.in?subject=${encodeURIComponent("Admission Enquiry: " + form.name + " (" + form.course + ")")}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <PageShell
      title="Admission &amp; General Enquiry"
      subtitle="Have questions about admissions, ACPC counseling, diploma lateral entry, or campus facilities? Connect with our dedicated academic desk."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Main Form */}
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold tracking-tight text-brand-navy">Send an Online Enquiry</h2>
          <p className="text-xs text-muted-foreground mt-1 mb-6">
            Fill in your details below. Our admissions team will review your query and respond via email or phone call.
          </p>

          {submitted && (
            <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Thank you! Your email client has been launched with your enquiry details pre-filled to admission_gperi@gtu.edu.in.</span>
            </div>
          )}

          <form onSubmit={submit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-semibold">Candidate's Full Name *</Label>
                <Input
                  id="name"
                  required
                  placeholder="e.g. Rahul Patel"
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-semibold">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-xs font-semibold">Mobile / WhatsApp Number *</Label>
                <Input
                  id="phone"
                  required
                  placeholder="+91 98765 43210"
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="city" className="text-xs font-semibold">City / District</Label>
                <Input
                  id="city"
                  placeholder="e.g. Mehsana, Patan, Ahmedabad"
                  maxLength={80}
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="course" className="text-xs font-semibold">Program / Course of Interest *</Label>
              <select
                id="course"
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-navy"
              >
                {COURSES.map((c, idx) => (
                  <option key={idx} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message" className="text-xs font-semibold">Your Question / Message *</Label>
              <Textarea
                id="message"
                rows={4}
                required
                placeholder="Specify your academic background (10th / 12th / Diploma), GUJCET merit if applicable, or questions regarding hostel, fees, and transport."
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <Button type="submit" className="bg-brand-navy hover:bg-brand-navy/90 text-white flex items-center gap-2">
              <Send className="h-4 w-4" />
              <span>Submit Admission Enquiry</span>
            </Button>
          </form>
        </div>

        {/* Reach Us Sidebar */}
        <div className="space-y-6">
          <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-heading text-lg font-bold uppercase text-brand-navy mb-4">Admissions Desk</h3>
            
            <div className="space-y-4 text-xs text-muted-foreground">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand-red mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground block">Campus Address</span>
                  <span>Near Mevad Toll-booth, Ahmedabad - Mehsana Express Highway, Ta. &amp; Dist. Mehsana - 384460, Gujarat, India.</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-red mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground block">Helpline Numbers</span>
                  <a href="tel:+919909039233" className="text-brand-navy hover:underline block font-medium">+91-9909039233</a>
                  <a href="tel:+912762285875" className="text-brand-navy hover:underline block font-medium">+91-2762-285875</a>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-red mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground block">Official Email</span>
                  <a href="mailto:admission_gperi@gtu.edu.in" className="text-brand-navy hover:underline break-all block font-medium">
                    admission_gperi@gtu.edu.in
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-brand-red mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground block">Office Hours</span>
                  <span>Monday – Saturday: 10:00 AM to 5:30 PM (Closed on 2nd &amp; 4th Saturdays and Public Holidays)</span>
                </div>
              </div>
            </div>
          </aside>

          <div className="rounded-2xl border border-border bg-brand-surface/40 p-6">
            <div className="flex items-center gap-2 font-bold text-brand-navy text-sm mb-2">
              <HelpCircle className="h-4 w-4 text-brand-red" />
              <h4>Quick Counseling Tip</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              For B.E. Admissions, register via the ACPC portal (<a href="https://acpc.gujarat.gov.in" target="_blank" rel="noopener noreferrer" className="text-brand-navy font-semibold hover:underline">acpc.gujarat.gov.in</a>). For 3-Year Diploma admissions after 10th, register on ACPDC (<a href="https://acpdc.gujarat.gov.in" target="_blank" rel="noopener noreferrer" className="text-brand-navy font-semibold hover:underline">acpdc.gujarat.gov.in</a>). Management quota and vacant quota applications are accepted on-campus directly.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
