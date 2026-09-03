export type Platform = "youtube" | "linkedin" | "facebook" | "instagram";

export interface SocialPost {
  id: string;
  platform: Platform;
  date: string; // ISO date string, e.g. "2026-08-15"
  title: string; // 1-line description
  thumbnail: string; // thumbnail image URL
  postUrl: string; // full URL to the original post on the platform
}

/**
 * Social media posts displayed on the Media Coverage page.
 *
 * Replace the sample entries below with real post data.
 * – For YouTube: use `https://img.youtube.com/vi/<VIDEO_ID>/hqdefault.jpg` as thumbnail.
 * – For other platforms: host the thumbnail in /public/social/ or use a direct image URL.
 */
export const SOCIAL_POSTS: SocialPost[] = [
  // ─── YouTube ──────────────────────────────────────────────
  {
    id: "yt-1",
    platform: "youtube",
    date: "2026-08-28",
    title: "GTU-ITR Annual Convocation 2026 — Full Ceremony Highlights",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    postUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "yt-2",
    platform: "youtube",
    date: "2026-07-14",
    title: "SIEMENS Centre of Excellence — Lab Tour & Student Projects",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
    postUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
  },
  {
    id: "yt-3",
    platform: "youtube",
    date: "2026-06-05",
    title: "Campus Placement Drive 2026 — Day 1 Recap",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
    postUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  },
  {
    id: "yt-4",
    platform: "youtube",
    date: "2026-05-20",
    title: "TechFest 2026 Opening Ceremony & Keynote Address",
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
    postUrl: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
  },
  {
    id: "yt-5",
    platform: "youtube",
    date: "2026-04-10",
    title: "GTU-ITR Robotics Club — National Championship Winning Moment",
    thumbnail: "https://img.youtube.com/vi/RgKAFK5djSk/hqdefault.jpg",
    postUrl: "https://www.youtube.com/watch?v=RgKAFK5djSk",
  },

  // ─── LinkedIn ─────────────────────────────────────────────
  {
    id: "li-1",
    platform: "linkedin",
    date: "2026-08-25",
    title: "GTU-ITR signs MoU with Tata Consultancy Services for industry training",
    thumbnail: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=340&fit=crop",
    postUrl: "https://www.linkedin.com/company/gtu-itr/posts/",
  },
  {
    id: "li-2",
    platform: "linkedin",
    date: "2026-07-18",
    title: "Our students secure 95% placement rate — highest ever at GTU-ITR",
    thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=340&fit=crop",
    postUrl: "https://www.linkedin.com/company/gtu-itr/posts/",
  },
  {
    id: "li-3",
    platform: "linkedin",
    date: "2026-06-22",
    title: "Faculty Development Programme on AI & Machine Learning — June 2026",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=340&fit=crop",
    postUrl: "https://www.linkedin.com/company/gtu-itr/posts/",
  },
  {
    id: "li-4",
    platform: "linkedin",
    date: "2026-05-08",
    title: "GTU-ITR recognized among Top 100 Engineering Institutes in Gujarat",
    thumbnail: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=340&fit=crop",
    postUrl: "https://www.linkedin.com/company/gtu-itr/posts/",
  },

  // ─── Facebook ─────────────────────────────────────────────
  {
    id: "fb-1",
    platform: "facebook",
    date: "2026-08-30",
    title: "Independence Day celebrations at GTU-ITR campus — patriotic fervour!",
    thumbnail: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=340&fit=crop",
    postUrl: "https://www.facebook.com/GTUITR/",
  },
  {
    id: "fb-2",
    platform: "facebook",
    date: "2026-07-22",
    title: "Tree Plantation Drive organized by NSS unit — 500+ saplings planted",
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=340&fit=crop",
    postUrl: "https://www.facebook.com/GTUITR/",
  },
  {
    id: "fb-3",
    platform: "facebook",
    date: "2026-06-15",
    title: "Annual Sports Meet 2026 — athletics, cricket & volleyball finals",
    thumbnail: "https://images.unsplash.com/photo-1461896836934-bd45ba4d5705?w=600&h=340&fit=crop",
    postUrl: "https://www.facebook.com/GTUITR/",
  },
  {
    id: "fb-4",
    platform: "facebook",
    date: "2026-05-01",
    title: "New Mechanical Workshop inaugurated with state-of-the-art CNC machines",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=340&fit=crop",
    postUrl: "https://www.facebook.com/GTUITR/",
  },
  {
    id: "fb-5",
    platform: "facebook",
    date: "2026-04-18",
    title: "Alumni Meet 2026 — reconnecting generations of GTU-ITR graduates",
    thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=340&fit=crop",
    postUrl: "https://www.facebook.com/GTUITR/",
  },

  // ─── Instagram ────────────────────────────────────────────
  {
    id: "ig-1",
    platform: "instagram",
    date: "2026-09-01",
    title: "Campus golden-hour vibes 🌅 — sunset over the GTU-ITR lake",
    thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=600&fit=crop",
    postUrl: "https://www.instagram.com/gtu_itr/",
  },
  {
    id: "ig-2",
    platform: "instagram",
    date: "2026-08-12",
    title: "Cultural Fest Rangoli Competition — artistry at its finest 🎨",
    thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop",
    postUrl: "https://www.instagram.com/gtu_itr/",
  },
  {
    id: "ig-3",
    platform: "instagram",
    date: "2026-07-05",
    title: "Engineering Day workshop selfie 📸 — future innovators unite",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop",
    postUrl: "https://www.instagram.com/gtu_itr/",
  },
  {
    id: "ig-4",
    platform: "instagram",
    date: "2026-06-20",
    title: "Library renovation complete — modern reading spaces for students 📚",
    thumbnail: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=600&fit=crop",
    postUrl: "https://www.instagram.com/gtu_itr/",
  },
  {
    id: "ig-5",
    platform: "instagram",
    date: "2026-05-15",
    title: "Diploma students win Smart India Hackathon 2026 🏆",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=600&fit=crop",
    postUrl: "https://www.instagram.com/gtu_itr/",
  },
];
