import { Program } from '../types/program';

export const programs: Program[] = [
  {
    id: 'nso-2024',
    title: "National Science Olympiad 2024",
    type: "competition",
    subject: "STEM",
    deadline: "Mar 30, 2024",
    location: "Multiple Locations",
    description: "The National Science Olympiad is one of the premier science competitions in the United States, providing rigorous, standards-based challenges to nearly 8,000 teams at 425 tournaments.",
    requirements: [
      "Currently enrolled in high school",
      "Team registration through school",
      "Maximum of 15 students per team"
    ],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    interests: ["stem", "science", "competition"],
    competitiveness: "High",
    acceptanceRate: "15%",
    applicationUrl: "https://www.soinc.org/join",
    websiteUrl: "https://www.soinc.org",
    duration: "Full Academic Year"
  },
  {
    id: 'ylsp-2024',
    title: "Young Leaders Summer Program",
    type: "program",
    subject: "Leadership",
    deadline: "Apr 15, 2024",
    location: "Boston, MA",
    description: "A transformative summer program that empowers high school students to develop leadership skills through hands-on projects, mentorship, and real-world problem-solving.",
    requirements: [
      "Ages 15-18",
      "Leadership potential",
      "Strong academic record"
    ],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    interests: ["leadership", "entrepreneurship"],
    competitiveness: "Medium",
    acceptanceRate: "30%",
    applicationUrl: "https://ylsp.org/apply",
    websiteUrl: "https://ylsp.org",
    stipend: "$2,500",
    duration: "6 weeks"
  },
  {
    id: 'arts-scholarship-2024',
    title: "Global Arts Scholarship",
    type: "scholarship",
    subject: "Arts",
    deadline: "May 1, 2024",
    location: "Online",
    description: "Supporting talented young artists in pursuing their creative passions through education. This scholarship provides funding for arts education and materials.",
    requirements: [
      "Portfolio submission",
      "Letter of recommendation",
      "Artist statement"
    ],
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    interests: ["arts", "creativity"],
    competitiveness: "Medium",
    acceptanceRate: "25%",
    applicationUrl: "https://globalarts.org/scholarship",
    websiteUrl: "https://globalarts.org",
    stipend: "$5,000"
  }
];