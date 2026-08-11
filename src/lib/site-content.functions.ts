import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

function publicClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

export const getHomeContent = createServerFn({ method: "GET" }).handler(async () => {
  const supabase = publicClient();
  const [banners, news, updates] = await Promise.all([
    supabase.from("banners").select("id, image_url, caption, link_url").eq("is_published", true).order("sort_order"),
    supabase.from("news").select("id, title, document_url, published_on").eq("is_published", true).order("sort_order"),
    supabase.from("updates").select("id, text, link_url").eq("is_published", true).order("sort_order"),
  ]);
  return {
    banners: banners.data ?? [],
    news: news.data ?? [],
    updates: updates.data ?? [],
  };
});
