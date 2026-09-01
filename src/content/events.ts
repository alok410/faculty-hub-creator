export type EventScheduleItem = {
  time: string;
  activity: string;
};

export type EventContact = {
  name: string;
  role: string;
  phone?: string;
  email?: string;
};

export type SiteEvent = {
  id: string;
  image: string;
  day: string;
  month: string;
  year?: string;
  title: string;
  tag: string;
  description: string;
  time?: string;
  venue?: string;
  organizer?: string;
  targetAudience?: string;
  fullDescription?: string[];
  highlights?: string[];
  schedule?: EventScheduleItem[];
  contactPerson?: EventContact;
  registrationLink?: string;
};

export const EVENTS: SiteEvent[] = [
  {
    id: "engineers-day-celebration",
    image: "/site/x2.jpg",
    day: "05",
    month: "Sep",
    year: "2026",
    title: "Engineer's Day Celebration & Technical Quiz",
    tag: "Technical",
    description:
      "Celebrating the legacy of Sir M. Visvesvaraya with an inter-department technical quiz, project exhibition and expert talk for all engineering students.",
    time: "09:30 AM – 04:30 PM IST",
    venue: "Main Auditorium & Computer Labs, GTU-ITR Campus, Mehsana",
    organizer: "Faculty of Engineering & Technical Club, GTU-ITR",
    targetAudience: "Open to all Degree and Diploma Engineering students of GTU-ITR",
    fullDescription: [
      "GTU Institute of Technology & Research (GTU-ITR), Mehsana invites all students and faculty members to celebrate Engineer's Day on September 5th, 2026, honoring the birth anniversary of India's iconic engineer, Sir M. Visvesvaraya.",
      "The grand event features an inter-departmental technical quiz competition, student prototype project exhibition, and a keynote lecture by distinguished guest speakers from industry and academia. Participants will showcase innovative engineering solutions to real-world problems.",
      "Cash prizes, trophies, and certificates of merit will be awarded to top-performing teams across Degree and Diploma departments.",
    ],
    highlights: [
      "Inter-departmental Tech Quiz with Live Buzzer Rounds",
      "Student Engineering Model & Prototype Exhibition",
      "Keynote Address on 'Engineering Solutions for Sustainable Future'",
      "Certificates & Cash Prizes worth ₹15,000 for Winners",
    ],
    schedule: [
      { time: "09:30 AM - 10:30 AM", activity: "Inaugural Ceremony & Lamp Lighting" },
      { time: "10:30 AM - 11:30 AM", activity: "Keynote Session by Chief Guest" },
      { time: "11:45 AM - 01:15 PM", activity: "Technical Quiz Preliminary & Final Rounds" },
      { time: "01:15 PM - 02:00 PM", activity: "Lunch Break & Networking" },
      { time: "02:00 PM - 03:45 PM", activity: "Project Prototype Exhibition & Judging" },
      { time: "03:45 PM - 04:30 PM", activity: "Valedictory Ceremony & Certificate Distribution" },
    ],
    contactPerson: {
      name: "Prof. R. K. Patel",
      role: "Event Coordinator",
      email: "events@gtu-itr.ac.in",
      phone: "+91 98250 12345",
    },
  },
  {
    id: "siemens-coe-workshop",
    image: "/site/x3.jpg",
    day: "12",
    month: "Sep",
    year: "2026",
    title: "SIEMENS CoE Industrial Automation Workshop",
    tag: "Workshop",
    description:
      "Hands-on training at the SIEMENS Centre of Excellence covering PLC programming, SCADA and industrial robotics with industry-certified trainers.",
    time: "10:00 AM – 05:00 PM IST",
    venue: "SIEMENS Centre of Excellence Labs, GTU-ITR Campus",
    organizer: "SIEMENS CoE & Mechanical/Electrical Engineering Departments",
    targetAudience:
      "Final year and Pre-final year Degree & Diploma students (Electrical, Mechanical, Computer)",
    fullDescription: [
      "The SIEMENS Centre of Excellence (CoE) at GTU-ITR Mehsana presents an intensive 1-day hands-on workshop designed to bridge the gap between academic curriculum and industrial automation standards.",
      "Equipped with 9 world-class laboratories established by the Govt. of Gujarat in collaboration with Siemens Industry Software, participants will gain direct exposure to PLC logic design, SCADA human-machine interface configuration, and industrial robot programming.",
      "This workshop serves as a gateway for students seeking professional Siemens certification courses offered at our campus.",
    ],
    highlights: [
      "Hands-on practice on Siemens SIMATIC S7-1200 / S7-1500 PLCs",
      "Real-time SCADA screen development & process monitoring",
      "Live demonstration of 6-Axis Industrial Robotics cell",
      "Official Certificate of Participation issued by SIEMENS CoE",
    ],
    schedule: [
      { time: "10:00 AM - 11:30 AM", activity: "Overview of Industrial Automation & PLC Hardware Setup" },
      { time: "11:30 AM - 01:00 PM", activity: "Hands-on Lab Session: TIA Portal & Ladder Logic Programming" },
      { time: "01:00 PM - 02:00 PM", activity: "Lunch Break" },
      { time: "02:00 PM - 03:30 PM", activity: "SCADA & HMI Integration Hands-on Training" },
      { time: "03:30 PM - 04:30 PM", activity: "Industrial Robotics Cell Operations & Demo" },
      { time: "04:30 PM - 05:00 PM", activity: "Feedback, Q&A & Certificate Handover" },
    ],
    contactPerson: {
      name: "Dr. A. M. Shah",
      role: "Director, SIEMENS CoE",
      email: "siemens.coe@gtu-itr.ac.in",
      phone: "+91 98790 67890",
    },
  },
  {
    id: "kaushalya-cultural-fest",
    image: "/site/x4.jpg",
    day: "26",
    month: "Sep",
    year: "2026",
    title: "Kaushalya - Annual Cultural Fest",
    tag: "Cultural",
    description:
      "The flagship cultural festival of GTU-ITR featuring music, dance, drama, fine arts and literary events celebrating the diversity of our campus community.",
    time: "09:00 AM – 08:30 PM IST",
    venue: "Main Amphitheatre & Central Lawn, GTU-ITR Mehsana",
    organizer: "Cultural Committee & Student Senate, GTU-ITR",
    targetAudience: "All GTU-ITR students, faculty, staff, and registered alumni",
    fullDescription: [
      "Kaushalya 2026 is the premier annual cultural celebration of GTU Institute of Technology & Research, bringing together hundreds of creative minds in a vibrant showcase of art, music, dance, literature, and theatrical performance.",
      "Designed to foster self-expression, cultural awareness, and unity, the day-long fest features multi-stage talent competitions, street plays addressing social causes, fine art installations, and a grand musical evening performance.",
      "Food stalls, photo booths, and interactive student club kiosks will keep the campus energized throughout the event.",
    ],
    highlights: [
      "Solo & Group Dance Face-Off (Folk, Classical & Hip-Hop)",
      "Battle of the Campus Bands & Solo Singing",
      "Nukkad Natak (Street Play) & Skit Competition",
      "Rangoli, Painting & Digital Art Competitions",
      "Grand Celebrity Evening & DJ Night",
    ],
    schedule: [
      { time: "09:00 AM - 10:00 AM", activity: "Fest Inauguration & Folk Welcoming Performance" },
      { time: "10:00 AM - 01:00 PM", activity: "Fine Arts, Rangoli & Literary Competitions (Seminar Hall)" },
      { time: "10:30 AM - 01:30 PM", activity: "Music & Drama Competitions (Mini Auditorium)" },
      { time: "02:00 PM - 05:00 PM", activity: "Dance Face-off & Street Play (Amphitheatre)" },
      { time: "05:30 PM - 06:30 PM", activity: "Award Ceremony & Trophies Presentation" },
      { time: "06:30 PM - 08:30 PM", activity: "Grand Musical Night & DJ Session" },
    ],
    contactPerson: {
      name: "Prof. S. N. Joshi",
      role: "Convener, Cultural Committee",
      email: "cultural@gtu-itr.ac.in",
      phone: "+91 94260 54321",
    },
  },
  {
    id: "shaurya-sports-meet-2026",
    image: "/site/x5.jpg",
    day: "09",
    month: "Oct",
    year: "2026",
    title: "Shaurya Sports Meet 2026",
    tag: "Sports",
    description:
      "Annual inter-college sports festival with athletics, cricket, volleyball, kabaddi and indoor games. Open to all degree and diploma students.",
    time: "08:00 AM – 06:00 PM IST (Oct 9 to Oct 11)",
    venue: "GTU-ITR Sports Ground & Indoor Games Complex",
    organizer: "Department of Physical Education & Sports Committee",
    targetAudience: "All registered Degree & Diploma engineering students",
    fullDescription: [
      "Shaurya 2026 is the annual inter-department and inter-college sports meet hosted at GTU-ITR Mehsana. Spanning 3 action-packed days, the tournament celebrates athleticism, teamwork, discipline, and endurance.",
      "Events range from high-energy outdoor field games like Cricket, Football, Volleyball, and Kabaddi to track & field athletics, as well as indoor championships in Table Tennis, Chess, Badminton, and Carrom.",
      "Inter-departmental championship trophies will be contested by Degree and Diploma teams with medals awarded for individual and team events.",
    ],
    highlights: [
      "Inter-Department T20 Cricket & Football Tournaments",
      "Track & Field Athletics (100m, 200m, 4x100m Relay, Long Jump, Shotput)",
      "Kabaddi & Volleyball Knockout Championships",
      "Indoor Championships: Badminton, Table Tennis & Chess",
      "Overall Championship Trophy for the Top Branch",
    ],
    schedule: [
      { time: "Day 1 - 08:00 AM", activity: "Torch Relay, March Past & Official Opening Ceremony" },
      { time: "Day 1 - 09:30 AM", activity: "Athletics Heats & Cricket / Football League Matches" },
      { time: "Day 2 - 09:00 AM", activity: "Volleyball, Kabaddi & Indoor Games Knockouts" },
      { time: "Day 3 - 09:00 AM", activity: "Finals for All Track & Field Events, Cricket & Volleyball" },
      { time: "Day 3 - 04:30 PM", activity: "Closing Ceremony, Medal Distribution & Trophy Handover" },
    ],
    contactPerson: {
      name: "Mr. V. B. Chaudhari",
      role: "Sports Officer",
      email: "sports@gtu-itr.ac.in",
      phone: "+91 97120 98765",
    },
  },
  {
    id: "campus-placement-drive",
    image: "/site/x6.jpeg",
    day: "18",
    month: "Oct",
    year: "2026",
    title: "Campus Placement Drive - MNC Recruiters",
    tag: "Placement",
    description:
      "The Training & Placement Cell hosts leading MNC recruiters on campus for final-year students. Pre-placement talks begin a week prior.",
    time: "09:00 AM – 06:00 PM IST",
    venue: "T&P Cell, Computer Labs & Interview Rooms, GTU-ITR Campus",
    organizer: "Training & Placement Cell, GTU-ITR",
    targetAudience: "Final year B.E. & Diploma Engineering students (Batch 2026)",
    fullDescription: [
      "The Training & Placement (T&P) Cell at GTU-ITR is organizing a dedicated multi-company placement drive for final-year graduating students across Computer, Mechanical, Electrical, Civil, and MSc IT streams.",
      "Reputed national and multinational recruiters will be visiting our campus to conduct technical screening, online aptitude assessments, technical interviews, and HR discussions.",
      "Eligible students will have the opportunity to secure job offers across software development, core engineering, industrial design, technical consulting, and automation domains.",
    ],
    highlights: [
      "Participation of 15+ IT and Core Engineering Industry Leaders",
      "On-campus Aptitude, Coding & Technical Skill Assessments",
      "Direct Interview Rounds with Corporate HR & Tech Panels",
      "Pre-placement Orientation & Resume Building Sessions prior to drive",
    ],
    schedule: [
      { time: "09:00 AM - 09:45 AM", activity: "Student Registration & Document Verification" },
      { time: "10:00 AM - 11:15 AM", activity: "Pre-Placement Talk (PPT) by Visiting Companies" },
      { time: "11:30 AM - 01:00 PM", activity: "Online Aptitude & Technical Written Assessment" },
      { time: "01:00 PM - 01:45 PM", activity: "Lunch Break & Shortlist Announcement" },
      { time: "02:00 PM - 05:00 PM", activity: "Technical & HR Personal Interviews" },
      { time: "05:30 PM - 06:00 PM", activity: "Announcement of Offer Letters & Concluding Session" },
    ],
    contactPerson: {
      name: "Prof. K. H. Solanki",
      role: "Training & Placement Officer",
      email: "tnp@gtu-itr.ac.in",
      phone: "+91 99090 11223",
    },
  },
  {
    id: "national-seminar-emerging-tech",
    image: "/site/s1.jpg",
    day: "30",
    month: "Oct",
    year: "2026",
    title: "National Seminar on Emerging Technologies",
    tag: "Seminar",
    description:
      "A national-level seminar on AI, renewable energy and Industry 4.0 with keynote sessions from academia and industry experts.",
    time: "09:30 AM – 05:00 PM IST",
    venue: "Conference Hall 1, Academic Block, GTU-ITR Mehsana",
    organizer: "Research & Development Cell, GTU-ITR",
    targetAudience: "Faculty members, Research Scholars, M.Tech/PG students, and final year UG students",
    fullDescription: [
      "The R&D Cell of GTU Institute of Technology & Research presents a National Seminar on 'Emerging Technologies: AI, Clean Energy & Industry 4.0 Transformation'.",
      "The seminar brings together renowned academicians, research scientists, and industry leaders to discuss cutting-edge advancements in Artificial Intelligence, Machine Learning applications in power grids, Internet of Things (IoT), and sustainable green technologies.",
      "Participants can submit research abstracts for poster and paper presentations. Selected papers will be published in the seminar conference proceedings with ISBN.",
    ],
    highlights: [
      "Keynote Addresses by Professors from IITs & NITs",
      "Interactive Panel Discussion on 'Generative AI & Engineering Future'",
      "Oral Research Paper & Poster Presentation Sessions",
      "Conference Proceedings with ISBN Publication",
    ],
    schedule: [
      { time: "09:30 AM - 10:15 AM", activity: "Registration & Welcome Tea" },
      { time: "10:15 AM - 11:30 AM", activity: "Inauguration & Keynote Address on AI in Engineering" },
      { time: "11:30 AM - 01:00 PM", activity: "Technical Session 1: Renewable Energy & Smart Grids" },
      { time: "01:00 PM - 02:00 PM", activity: "Networking Lunch & Poster Presentation" },
      { time: "02:00 PM - 03:30 PM", activity: "Technical Session 2: Industry 4.0, IoT & Robotics" },
      { time: "03:30 PM - 04:30 PM", activity: "Panel Discussion & Q&A Session" },
      { time: "04:30 PM - 05:00 PM", activity: "Valedictory & Certificate Distribution" },
    ],
    contactPerson: {
      name: "Dr. P. R. Mehta",
      role: "R&D Cell Convener",
      email: "rd@gtu-itr.ac.in",
      phone: "+91 94080 33445",
    },
  },
];

export function getEventById(id: string): SiteEvent | undefined {
  return EVENTS.find((e) => e.id === id);
}

