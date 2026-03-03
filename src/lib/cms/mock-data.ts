import { Project, Campaign, VolunteerRole } from "@/types";

export const mockProjects: Project[] = [
  {
    id: "proj-1",
    slug: "ancient-redwoods-restoration",
    title: "Ancient Redwoods Restoration",
    category: "Conservation",
    excerpt:
      "Protecting and restoring the majestic redwood forests of the Pacific Northwest through active management and land acquisition.",
    content: `
      <h2>Preserving Giants</h2>
      <p>The Forestry Reserve is leading an ambitious effort to protect the remaining old-growth redwood forests. These giants are critical for carbon sequestration and biodiversity.</p>
      <h2>Key Initiatives</h2>
      <ul>
        <li>Purchasing critical buffer zones around existing parks.</li>
        <li>Removing invasive species that threaten young redwood growth.</li>
        <li>Implementing controlled burns to mimic natural ecosystem cycles.</li>
      </ul>
      <h2>Expected Impact</h2>
      <p>We aim to secure an additional 5,000 acres of redwood habitat and plant 100,000 redwood saplings by 2030.</p>
    `,
    image: {
      src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2813",
      alt: "Giant redwood trees",
    },
    targetAmount: 2500000,
    raisedAmount: 1800000,
    location: "Pacific Northwest, USA",
    status: "ongoing",
    metrics: { peopleHelped: 50000, hectaresRestored: 3500 },
    startDate: "2023-03-01",
    seo: {
      title: "Ancient Redwoods Restoration | Forestry Reserve",
      description:
        "Protecting the worlds tallest trees for future generations.",
    },
  },
  {
    id: "proj-2",
    slug: "woodland-biodiversity-education",
    title: "Woodland Biodiversity Education",
    category: "Education",
    excerpt:
      "Connecting urban youth with forest ecosystems through immersive outdoor learning and digital nature programs.",
    content: `
      <h2>Teaching the Next Generation</h2>
      <p>Many children living in urban areas have never experienced the wonder of a forest. Our program brings the woods to them, and them to the woods.</p>
      <h2>Our Solution</h2>
      <p>We host weekend forest camps and provide interactive VR experiences that teach the complexity of woodland ecosystems and the importance of conservation.</p>
      <h2>Our Progress</h2>
      <p>Over 20,000 students have participated in our forest immersion programs, reporting a significantly higher interest in environmental sciences.</p>
    `,
    image: {
      src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2000",
      alt: "Kids learning about trees",
    },
    targetAmount: 750000,
    raisedAmount: 600000,
    location: "Urban Centers Globally",
    status: "ongoing",
    metrics: { peopleHelped: 20000 },
    startDate: "2022-09-15",
    seo: {
      title: "Woodland Biodiversity Education | Forestry Reserve",
      description: "Inspiring the next generation of forest guardians.",
    },
  },
  {
    id: "proj-3",
    slug: "sustainable-agroforestry-systems",
    title: "Sustainable Agroforestry Systems",
    category: "Sustainability",
    excerpt:
      "Helping farmers integrate trees into their agricultural landscapes to improve soil health and diversify income.",
    content: `
      <h2>Trees on Farms</h2>
      <p>Agroforestry is a powerful tool for carbon storage and food security. We work with smallholder farmers to design diverse, tree-based systems.</p>
      <h2>Implementation</h2>
      <p>By planting fruit and timber trees alongside crops, farmers can restore degraded land while creating new revenue streams from sustainable forest products.</p>
    `,
    image: {
      src: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=2000",
      alt: "Lush agroforestry plot",
    },
    targetAmount: 1200000,
    raisedAmount: 850000,
    location: "Tropical Regions",
    status: "ongoing",
    metrics: { peopleHelped: 15000 },
    startDate: "2024-02-10",
    seo: {
      title: "Sustainable Agroforestry | Forestry Reserve",
      description: "Revolutionizing agriculture through tree integration.",
    },
  },
  {
    id: "proj-4",
    slug: "forest-guard-training-program",
    title: "Forest Guard Training Program",
    category: "Protection",
    excerpt:
      "Equipping and training local communities to protect their indigenous forests from illegal logging and wildlife poaching.",
    content: `
      <h2>Empowering Local Guardians</h2>
      <p>The best people to protect a forest are those who live within or near it. Our program provides technical training and equipment to community-led patrol units.</p>
    `,
    image: {
      src: "https://images.unsplash.com/photo-1576091160550-217359f4268e?auto=format&fit=crop&q=80&w=2000",
      alt: "Rangers patrolling forest",
    },
    targetAmount: 500000,
    raisedAmount: 320000,
    location: "Amazon Basin",
    status: "ongoing",
    metrics: { peopleHelped: 2000 },
    startDate: "2023-10-05",
    seo: {
      title: "Forest Guard Training | Forestry Reserve",
      description: "Supporting local communities in forest protection.",
    },
  },
  {
    id: "proj-5",
    slug: "community-tree-nursery-initiative",
    title: "Community Tree Nursery Initiative",
    category: "Reforestation",
    excerpt:
      "Establishing local nurseries to provide native saplings for large-scale reforestation and community greening projects.",
    content: `
      <h2>Growing from the Ground Up</h2>
      <p>Local nurseries ensure that reforestation efforts use genetically diverse, native species. We provide the seeds, infrastructure, and training to start these hubs.</p>
    `,
    image: {
      src: "https://images.unsplash.com/photo-1541976844346-f18aeac57b06?auto=format&fit=crop&q=80&w=2000",
      alt: "People working in a tree nursery",
    },
    targetAmount: 1000000,
    raisedAmount: 720000,
    location: "Global Distribution",
    status: "ongoing",
    metrics: { peopleHelped: 100000 },
    startDate: "2022-01-20",
    seo: {
      title: "Community Tree Nurseries | Forestry Reserve",
      description: "Empowering communities to grow their own forests.",
    },
  },
  {
    id: "proj-6",
    slug: "riparian-forest-buffer-project",
    title: "Riparian Forest Buffer Project",
    category: "Water Security",
    excerpt:
      "Restoring forest buffers along waterways to improve water quality, prevent erosion, and create vital wildlife corridors.",
    content: `
      <h2>Protecting Our Streams</h2>
      <p>Forests along rivers act as natural filters. We are reforesting bank sides to protect clean water sources and provide pathways for migrating species.</p>
    `,
    image: {
      src: "https://images.unsplash.com/photo-1516733968668-dbdce39c46ef?auto=format&fit=crop&q=80&w=2000",
      alt: "Forest stream during autumn",
    },
    targetAmount: 800000,
    raisedAmount: 450000,
    location: "Appalachian Region",
    status: "ongoing",
    metrics: { peopleHelped: 30000 },
    startDate: "2023-05-12",
    seo: {
      title: "Riparian Forest Buffers | Forestry Reserve",
      description: "Restoring the link between forests and water.",
    },
  },
];

export const mockCampaigns: Campaign[] = [
  {
    id: "camp-1",
    slug: "wildfire-recovery-fund",
    title: "Wildfire Recovery Fund",
    urgency: "high",
    excerpt:
      "Urgent action to rehabilitate forests devastated by recent wildfires and provide support to local communities.",
    content:
      "<p>The recent fire season was unprecedented. Your support helps us clear debris and begin the delicate process of natural reforestation.</p>",
    image: {
      src: "https://images.unsplash.com/photo-1549487541-118e6c46a6e2?auto=format&fit=crop&q=80&w=2000",
      alt: "Burnt forest area",
    },
    goal: 500000,
    raised: 285000,
    deadline: "2026-06-30",
    seo: {
      title: "Wildfire Recovery Campaign | Forestry Reserve",
      description: "Helping forests heal after devastating fires.",
    },
  },
  {
    id: "camp-2",
    slug: "adopt-a-forest-plot",
    title: "Adopt a Forest Plot",
    urgency: "high",
    excerpt:
      "Join our mission to secure critical habitat threatened by urban expansion. Adopt a plot to ensure it remains wild forever.",
    content:
      "<p>Every acre counts. By adopting a plot, you provide the funds necessary for long-term monitoring and legal protection of the land.</p>",
    image: {
      src: "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=2000",
      alt: "Aerial view of forest",
    },
    goal: 300000,
    raised: 120000,
    deadline: "2026-12-31",
    seo: {
      title: "Adopt a Forest | Forestry Reserve",
      description: "Directly fund the protection of vital forest land.",
    },
  },
];

export const mockRoles: VolunteerRole[] = [
  {
    id: "vol-1",
    title: "Education Program Assistant",
    department: "Education",
    location: "Global / Remote",
    type: "hybrid",
    description:
      "Support our Out of School Children program with curriculum design and remote tutoring.",
    requirements: [
      "Background in teaching or social work",
      "Commitment of 4 hours/week",
      "Excellent communication skills",
    ],
  },
  {
    id: "vol-2",
    title: "Climate Field Monitor",
    department: "Environment",
    location: "Regional Field Sites",
    type: "on-site",
    description:
      "Help monitor tree growth and community adaptation projects in our field locations.",
    requirements: [
      "Sturdy physical health",
      "Interest in ecology",
      "Ability to travel to rural areas",
    ],
  },
];
