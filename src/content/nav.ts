export type NavLink = { label: string; to?: string; href?: string; download?: boolean; children?: NavLink[] };

export const NAV: NavLink[] = [
  { label: "GTU-ITR", to: "/" },
  {
    label: "About US",
    children: [
      { label: "About Us", to: "/about" },
      { label: "Vision-Mission", to: "/vision-mission" },
      { label: "VC Message", to: "/vc-message" },
      { label: "Registrar Message", to: "/registrar-message" },
      { label: "Principal Message", to: "/principal-message" },
      { label: "Women Empowerment Cell", to: "/women-cell" },
      { label: "Mandatory Disclosure", href: "/mandatory-disclosure.pdf", download: true },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Computer Engineering (Degree)", to: "/academics/degree/computer" },
      { label: "Civil Engineering (Degree)", to: "/academics/degree/civil" },
      { label: "Mechanical Engineering (Degree)", to: "/academics/degree/mechanical" },
      { label: "Electrical Engineering (Degree)", to: "/academics/degree/electrical" },
      { label: "Humanities And Science (Degree)", to: "/academics/degree/humanities" },
      { label: "Minor Degree (BE)", to: "/academics/minor-degree" },
      { label: "Computer Engineering (Diploma)", to: "/academics/diploma/computer" },
      { label: "Civil Engineering (Diploma)", to: "/academics/diploma/civil" },
      { label: "Mechanical Engineering (Diploma)", to: "/academics/diploma/mechanical" },
      { label: "Electrical Engineering (Diploma)", to: "/academics/diploma/electrical" },
      { label: "Humanities And Science (Diploma)", to: "/academics/diploma/humanities" },
      { label: "Integrated M.Sc. in Information Technology", to: "/academics/msc-it" },
      { label: "PG Diploma in Cyber Security (PGDCS)", to: "/academics/pgdcs" },
      { label: "Institute Committee", to: "/institute-committee" },
    ],
  },
  {
    label: "Admissions",
    children: [
      { label: "Degree Engineering (BE)", to: "/admissions/degree" },
      { label: "Diploma Engineering", to: "/admissions/diploma" },
      { label: "M.Sc. in Information Technology", to: "/admissions/msc-it" },
      { label: "PG Diploma in Cyber Security (PGDCS)", to: "/admissions/pgdcs" },
    ],
  },
  { label: "Placement", to: "/placement" },
  { label: "Events", to: "/events" },
  {
    label: "Student Corner",
    children: [
      { label: "About", to: "/students" },
      { label: "Students Clubs", to: "/students-clubs" },
      { label: "Academic Calendar", to: "/calendar" },
      { label: "Anti Ragging", to: "/anti-ragging" },
      { label: "Transportation", to: "/transportation" },
      { label: "Achievements", to: "/achievements" },
      { label: "Regulations And Discipline", to: "/regulations" },
      { label: "Student Grievance Redressal Committee", to: "/grievance" },
      { label: "Alumni", to: "/alumni" },
    ],
  },
  {
    label: "AICTE",
    children: [
      { label: "EoA", to: "/aicte" },
      { label: "AICTE Feedback Form", href: "https://smartcookie.in/AICTE-360degreefeedback" },
      { label: "AICTE Students Scholarship", href: "https://aicte.gov.in/schemes/students-development-schemes" },
      { label: "IEP", href: "https://www.iep.gtu.ac.in/" },
    ],
  },
  {
    label: "COE",
    children: [
      { label: "SIEMENS", to: "/siemens" },
      { label: "Anchor Institute of Solar Energy", to: "/solar-energy" },
      { label: "Campus Facilities", to: "/facility" },
    ],
  },
  {
    label: "GTU-ITR Media",
    children: [
      { label: "Gallery", to: "/gallery" },
      { label: "Newsletter", href: "https://heyzine.com/flip-book/226dcd1dbe.html" },
      { label: "Media Coverage", to: "/media-coverage" },
      { label: "Online Coverage", href: "https://maroawaj.com/?s=%E0%AA%9C%E0%AB%80%E0%AA%AA%E0%AB%87%E0%AA%B0%E0%AB%80" },
    ],
  },
  { label: "Enquiry Form", to: "/enquiry" },
  { label: "Online Payments", href: "https://gtu.ac.in/page.aspx?p=Payment" },
  { label: "Open GPERI (GTU)", href: "https://gperi.gtu.ac.in/home.aspx" },
];
