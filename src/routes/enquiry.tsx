import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Enquiry Form | GTU-ITR" },
      { name: "description", content: "Send an admission or general enquiry to GTU Institute of Technology & Research, Mehsana." },
      { property: "og:title", content: "Enquiry Form | GTU-ITR" },
      { property: "og:description", content: "Send an admission or general enquiry to GTU-ITR, Mehsana." },
      { property: "og:url", content: "/enquiry" },
    ],
    links: [{ rel: "canonical", href: "/enquiry" }],
  }),
  component: Page,
});

function Page() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCourse of interest: ${form.course}\n\n${form.message}`;
    window.location.href = `mailto:admission_gperi@gtu.edu.in?subject=${encodeURIComponent("Enquiry from " + form.name)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <PageShell title="Enquiry Form" subtitle="Have a question about admissions or programmes? Write to us.">
      <div className="grid gap-8 md:grid-cols-[1fr_320px]">
        <form onSubmit={submit} className="space-y-4 border border-border bg-card p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" maxLength={20} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="course">Course of interest</Label>
              <Input id="course" maxLength={120} value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={5} maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </div>
          <Button type="submit" className="bg-brand-navy hover:bg-brand-red">Send Enquiry</Button>
        </form>

        <aside className="space-y-4 border border-border bg-brand-surface p-6">
          <h2 className="font-heading text-lg font-bold uppercase text-brand-navy">Reach Us</h2>
          <p className="flex gap-2 text-sm text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />Near Mevad Toll-booth, Ahmedabad - Mehsana Express Highway, Ta. &amp; Dist. Mehsana - 384460, Gujarat, India.</p>
          <p className="flex gap-2 text-sm text-muted-foreground"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" /><a href="tel:+919909039233" className="hover:text-brand-red">+91-9909039233</a></p>
          <p className="flex gap-2 text-sm text-muted-foreground"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" /><a href="mailto:admission_gperi@gtu.edu.in" className="hover:text-brand-red">admission_gperi@gtu.edu.in</a></p>
        </aside>
      </div>
    </PageShell>
  );
}
