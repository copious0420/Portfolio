// Edit this file to update the site's content.

export const profile = {
  name: 'Nitin Singh',
  role: 'Backend Developer',
  bio: "I mostly write backend code: APIs, databases, the stuff running behind the screen. I like figuring out why things break and making them not break. Lately I've been building robots with ESP32 boards too, which is a lot more satisfying when the wheels actually turn.",
  location: 'India',
  email: 'copious765@gmail.com',
  github: 'https://github.com/copious0420',
  resume: '#',
}

export const navLinks = [
  { id: 'projects', label: 'Projects' },
  { id: 'competitions', label: 'Competitions' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'robotics', label: 'Robotics' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

export type Project = {
  name: string
  tagline: string
  description: string
  highlights: string[]
  stack: string[]
  repo?: string
  live?: string
  variant: 'radar' | 'calendar' | 'robot'
}

export const projects: Project[] = [
  {
    name: 'FallingSun2026',
    tagline: 'A dashboard for spotting and tracking drones',
    description:
      'FallingSun2026 takes in sensor data, shows every drone it picks up on a live view, and flags the ones that look like a threat. The idea is that whoever is watching sees what matters without digging for it.',
    highlights: [
      'Drone positions update live over WebSockets',
      'Flags likely threats and raises an alert',
      'Logs everything so you can replay it afterwards',
    ],
    stack: ['Node.js', 'TypeScript', 'WebSockets', 'PostgreSQL', 'Redis', 'Docker'],
    repo: 'https://github.com/copious0420/FallingSun2026',
    live: 'https://skywatch.ayanc6796.workers.dev',
    variant: 'radar',
  },
  {
    name: 'TimelySub',
    tagline: 'A scheduling app for substitute teachers',
    description:
      "When a teacher is out, someone has to find a sub, and that usually means a lot of phone calls. TimelySub checks who's free, assigns them, and lets everyone know. It also catches double-bookings before they happen.",
    highlights: [
      "Matches absences to whoever's free and catches clashes",
      'Separate logins for admins, teachers and subs',
      'Sends a notification when an assignment is added or changed',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'REST API', 'JWT Auth', 'React'],
    repo: 'https://github.com/copious0420/TimelySub',
    live: 'https://timelysub.vercel.app',
    variant: 'calendar',
  },
  {
    name: 'Cuebot',
    tagline: 'A robot I built for a competition',
    description:
      "Cuebot is an ESP32 robot you drive from a web browser over WiFi. It stops before it hits things, sniffs out gas, and notices when someone moves nearby. Getting it all to work together came down to a 6-hour final session of building, testing, breaking things and fixing them again. Not relaxing, but I learned more in those six hours than in weeks of tutorials.",
    highlights: [
      'Drive it from a browser over WiFi, using WebSockets',
      'Ultrasonic sensor so it stops before hitting things',
      'MQ-135 for gas, PIR for motion',
    ],
    stack: ['ESP32', 'C++', 'Arduino', 'L298N', 'WebSockets', 'Sensors'],
    variant: 'robot',
  },
]

export const competitionStats = [
  { value: 5, label: 'Competitions Participated' },
  { value: 2, label: 'Competitions Won' },
]

export const hackathon = {
  name: 'FallingSun 2026',
  stat: '3 hours.',
  statLine: 'Scrapped everything. Rebuilt from scratch.',
  results: [
    { value: '58', label: 'teams' },
    { value: '8/10', label: 'score' },
    { value: 'Top 5', label: 'finish' },
  ],
  note: 'Judges called the backend one of the best across all submissions.',
  stack: ['Node.js', 'TypeScript', 'WebSockets', 'React', 'Cloudflare Workers', 'Groq API'],
}

export const cuebot = {
  name: 'Cuebot',
  tagline: 'ESP32 robot · National robotics competition, 2025',
  description:
    "I built Cuebot for a national robotics competition in 2025. It's a four-wheel robot with an ESP32 as its brain. The ESP32 serves its own little web page, so you join its WiFi, open a browser and drive. No app needed. Commands and sensor readings go back and forth over WebSockets, and an L298N board runs the motors.",
  highlights: [
    'Drive it from a web page the ESP32 serves itself',
    'Ultrasonic sensor so it stops before hitting things',
    'PIR sensor for motion, MQ-135 for gas and air quality',
    'Built and debugged in one 6-hour final session',
  ],
  specs: [
    { k: 'Controller', v: 'ESP32' },
    { k: 'Drive', v: '4WD DC motors · L298N' },
    { k: 'Control', v: 'WiFi web UI · WebSockets' },
    { k: 'Sensors', v: 'Ultrasonic · PIR · MQ-135' },
  ],
  stack: ['ESP32', 'Arduino', 'L298N', 'WebSockets', 'C++'],
}

export const skillGroups = [
  {
    title: 'Languages & Runtime',
    icon: 'code',
    items: ['Node.js', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks & APIs',
    icon: 'layers',
    items: ['Express', 'REST', 'WebSockets', 'React'],
  },
  {
    title: 'Data & Storage',
    icon: 'database',
    items: ['Supabase'],
  },
  {
    title: 'DevOps & Tooling',
    icon: 'server',
    items: ['Git', 'GitHub', 'Linux'],
  },
  {
    title: 'Embedded & Robotics',
    icon: 'cpu',
    items: [
      'ESP32',
      'Arduino',
      'C++',
      'L298N Motor Driver',
      'WebSockets',
      'Sensor Integration',
      'DC Motors',
      'PIR Sensor',
      'Ultrasonic Sensor',
      'MQ-135',
      'Motor Driver Circuits',
    ],
  },
] as const

export const principles = [
  { k: 'APIs', v: 'built for clarity and speed' },
  { k: 'Systems', v: 'designed for reliability' },
  { k: 'Code', v: 'workable' },
  { k: 'Robotics', v: 'hardware that actually works' },
]
