import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { LogOut, Plus, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel | GTU-ITR" },
      { name: "description", content: "Manage banners, news and updates on the GTU-ITR website." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Admin Panel | GTU-ITR" },
      { property: "og:description", content: "Manage banners, news and updates on the GTU-ITR website." },
    ],
  }),
  component: AdminPage,
});

type Table = "banners" | "news" | "updates";

const FIELDS: Record<Table, { key: string; label: string; type?: string }[]> = {
  banners: [
    { key: "image_url", label: "Image URL" },
    { key: "caption", label: "Caption" },
    { key: "link_url", label: "Link URL" },
  ],
  news: [
    { key: "title", label: "Title" },
    { key: "document_url", label: "Document URL" },
  ],
  updates: [
    { key: "text", label: "Text" },
    { key: "link_url", label: "Link URL" },
  ],
};

function useRows(table: Table) {
  return useQuery({
    queryKey: ["admin", table],
    queryFn: async () => {
      const { data, error } = await supabase.from(table).select("*").order("sort_order");
      if (error) throw error;
      return data as Record<string, unknown>[];
    },
  });
}

function Manager({ table }: { table: Table }) {
  const qc = useQueryClient();
  const { data, isLoading, error } = useRows(table);
  const fields = FIELDS[table];
  const [draft, setDraft] = useState<Record<string, string>>({});

  const invalidate = () => {
    qc.invalidateQueries({ queryKey: ["admin", table] });
    qc.invalidateQueries({ queryKey: ["home-content"] });
  };

  async function add(e: React.FormEvent) {
    e.preventDefault();
    const payload: Record<string, unknown> = { sort_order: (data?.length ?? 0) + 1, is_published: true };
    for (const f of fields) payload[f.key] = draft[f.key]?.trim() || null;
    const { error: err } = await supabase.from(table).insert(payload as never);
    if (err) return toast.error(err.message);
    setDraft({});
    invalidate();
    toast.success("Added");
  }

  async function patch(id: string, values: Record<string, unknown>) {
    const { error: err } = await supabase.from(table).update(values as never).eq("id", id);
    if (err) return toast.error(err.message);
    invalidate();
  }

  async function remove(id: string) {
    const { error: err } = await supabase.from(table).delete().eq("id", id);
    if (err) return toast.error(err.message);
    invalidate();
    toast.success("Deleted");
  }

  if (error) return <p className="py-6 text-sm text-destructive">{(error as Error).message}</p>;

  return (
    <div className="space-y-6 pt-4">
      <form onSubmit={add} className="grid gap-3 border border-border bg-brand-surface p-4 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.key} className="space-y-1.5">
            <Label htmlFor={`${table}-${f.key}`}>{f.label}</Label>
            <Input
              id={`${table}-${f.key}`}
              value={draft[f.key] ?? ""}
              maxLength={500}
              required={f.key === fields[0]!.key}
              onChange={(e) => setDraft({ ...draft, [f.key]: e.target.value })}
            />
          </div>
        ))}
        <div className="sm:col-span-2">
          <Button type="submit" className="bg-brand-navy hover:bg-brand-red">
            <Plus className="mr-1 h-4 w-4" /> Add
          </Button>
        </div>
      </form>

      {isLoading ? (
        <p className="text-sm text-muted-foreground">Loading…</p>
      ) : (
        <div className="space-y-3">
          {data?.map((row) => {
            const id = String(row["id"]);
            return (
              <div key={id} className="grid gap-3 border border-border bg-card p-4 sm:grid-cols-2">
                {fields.map((f) => (
                  <div key={f.key} className="space-y-1.5">
                    <Label htmlFor={`${id}-${f.key}`}>{f.label}</Label>
                    <Input
                      id={`${id}-${f.key}`}
                      defaultValue={(row[f.key] as string) ?? ""}
                      maxLength={500}
                      onBlur={(e) => {
                        const v = e.target.value.trim() || null;
                        if (v !== ((row[f.key] as string) ?? null)) void patch(id, { [f.key]: v });
                      }}
                    />
                  </div>
                ))}
                <div className="flex items-end gap-4 sm:col-span-2">
                  <div className="flex items-center gap-2">
                    <Switch
                      id={`${id}-pub`}
                      checked={Boolean(row["is_published"])}
                      onCheckedChange={(v) => void patch(id, { is_published: v })}
                    />
                    <Label htmlFor={`${id}-pub`}>Published</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor={`${id}-order`}>Order</Label>
                    <Input
                      id={`${id}-order`}
                      type="number"
                      className="w-24"
                      defaultValue={Number(row["sort_order"] ?? 0)}
                      onBlur={(e) => void patch(id, { sort_order: Number(e.target.value) || 0 })}
                    />
                  </div>
                  <Button variant="destructive" size="sm" className="ml-auto" onClick={() => void remove(id)}>
                    <Trash2 className="mr-1 h-4 w-4" /> Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function AdminPage() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [email, setEmail] = useState<string | null>(null);
  const [role, setRole] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    void (async () => {
      const { data } = await supabase.auth.getUser();
      setEmail(data.user?.email ?? null);
      if (!data.user) return setRole(null);
      const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", data.user.id);
      setRole(roles?.[0]?.role ?? null);
    })();
  }, []);

  const allowed = useMemo(() => role === "admin" || role === "editor", [role]);

  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <PageShell title="Admin Panel" subtitle={email ? `Signed in as ${email}` : undefined}>
      <div className="mb-6 flex justify-end">
        <Button variant="outline" onClick={() => void signOut()}>
          <LogOut className="mr-1 h-4 w-4" /> Sign out
        </Button>
      </div>

      {role === undefined ? (
        <p className="text-sm text-muted-foreground">Checking your access…</p>
      ) : !allowed ? (
        <div className="border border-border bg-brand-surface p-6">
          <h2 className="font-heading text-lg font-bold uppercase text-brand-navy">Awaiting approval</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Your account does not yet have editing rights. An existing administrator must approve it before you can
            manage banners, news and updates.
          </p>
        </div>
      ) : (
        <Tabs defaultValue="banners">
          <TabsList>
            <TabsTrigger value="banners">Banners</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
          </TabsList>
          <TabsContent value="banners"><Manager table="banners" /></TabsContent>
          <TabsContent value="news"><Manager table="news" /></TabsContent>
          <TabsContent value="updates"><Manager table="updates" /></TabsContent>
        </Tabs>
      )}
    </PageShell>
  );
}
