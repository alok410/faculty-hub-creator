export type SiteEvent = {
  image: string;
  day: string;
  month: string;
  title: string;
  tag: string;
  description: string;
};

export const EVENTS: SiteEvent[] = [
  {
    image: "/site/x2.jpg",
    day: "05",
    month: "Sep",
    title: "Engineer's Day Celebration & Technical Quiz",
    tag: "Technical",
    description:
      "Celebrating the legacy of Sir M. Visvesvaraya with an inter-department technical quiz, project exhibition and expert talk for all engineering students.",
  },
  {
    image: "/site/x3.jpg",
    day: "12",
    month: "Sep",
    title: "SIEMENS CoE Industrial Automation Workshop",
    tag: "Workshop",
    description:
      "Hands-on training at the SIEMENS Centre of Excellence covering PLC programming, SCADA and industrial robotics with industry-certified trainers.",
  },
  {
    image: "/site/x4.jpg",
    day: "26",
    month: "Sep",
    title: "Kaushalya - Annual Cultural Fest",
    tag: "Cultural",
    description:
      "The flagship cultural festival of GTU-ITR featuring music, dance, drama, fine arts and literary events celebrating the diversity of our campus community.",
  },
  {
    image: "/site/x5.jpg",
    day: "09",
    month: "Oct",
    title: "Shaurya Sports Meet 2026",
    tag: "Sports",
    description:
      "Annual inter-college sports festival with athletics, cricket, volleyball, kabaddi and indoor games. Open to all degree and diploma students.",
  },
  {
    image: "/site/x6.jpeg",
    day: "18",
    month: "Oct",
    title: "Campus Placement Drive - MNC Recruiters",
    tag: "Placement",
    description:
      "The Training & Placement Cell hosts leading MNC recruiters on campus for final-year students. Pre-placement talks begin a week prior.",
  },
  {
    image: "/site/s1.jpg",
    day: "30",
    month: "Oct",
    title: "National Seminar on Emerging Technologies",
    tag: "Seminar",
    description:
      "A national-level seminar on AI, renewable energy and Industry 4.0 with keynote sessions from academia and industry experts.",
  },
];
