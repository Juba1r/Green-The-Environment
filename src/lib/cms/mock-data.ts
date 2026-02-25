import { Project, Campaign, VolunteerRole } from '@/types';

export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    slug: 'climate-change-program',
    title: 'Climate Change Resilience',
    category: 'Environment',
    excerpt: 'Implementing adaptive strategies and nature-based solutions to combat the effects of climate change in vulnerable regions.',
    content: `
      <h2>Our Climate Strategy</h2>
      <p>Green The Environment (GTE) is at the forefront of the climate battle. We focus on coastal resilience, reforestation, and community-led adaptation programs.</p>
      <h2>Key Initiatives</h2>
      <ul>
        <li>Mangrove restoration to prevent coastal erosion.</li>
        <li>Promoting renewable energy adoption in rural off-grid communities.</li>
        <li>Climate-smart agricultural training for local farmers.</li>
      </ul>
      <h2>Expected Impact</h2>
      <p>By 2030, we aim to have strengthened the climate resilience of over 500,000 households and restored 10,000 hectares of critical ecosystems.</p>
    `,
    image: {
      src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2813',
      alt: 'Lush green landscape Resilience',
    },
    targetAmount: 2000000,
    raisedAmount: 1450000,
    location: 'Global Operations',
    status: 'ongoing',
    metrics: { peopleHelped: 150000, hectaresRestored: 2400 },
    startDate: '2023-01-15',
    seo: { title: 'Climate Change Program | Green The Environment', description: 'GTE strategies to combat climate change globally.' },
  },
  {
    id: 'proj-2',
    slug: 'out-of-school-education',
    title: 'Out of School Children Education',
    category: 'Education',
    excerpt: 'Removing barriers to education for children in underserved communities through flexible learning centers and support.',
    content: `
      <h2>The Educational Gap</h2>
      <p>In many regions, children are forced out of school due to poverty, conflict, or lack of infrastructure. This creates a cycle of poverty that is hard to break.</p>
      <h2>Our Solution</h2>
      <p>We establish non-formal primary education centers that cater to working children and those from marginalized backgrounds, providing them with a path back to mainstream education.</p>
      <h2>Our Progress</h2>
      <p>We have successfully integrated thousands of students back into secondary schools and continue to provide learning materials and nutritional support.</p>
    `,
    image: {
      src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2000',
      alt: 'Children learning in a group',
    },
    targetAmount: 1000000,
    raisedAmount: 750000,
    location: 'South Asia regions',
    status: 'ongoing',
    metrics: { peopleHelped: 45000 },
    startDate: '2022-05-10',
    seo: { title: 'Out of School Children Education | Green The Environment', description: 'Ensuring every child has access to quality education.' },
  },
  {
    id: 'proj-3',
    slug: 'high-zinc-rice-delivery',
    title: 'Delivery of High Zinc Rice',
    category: 'Food Security',
    excerpt: 'Combating micronutrient deficiencies by distributing bio-fortified high zinc rice to families in need.',
    content: `
      <h2>Combatting Hidden Hunger</h2>
      <p>Hidden hunger, or micronutrient deficiency, affects millions. Zinc is critical for immune function and childhood growth.</p>
      <h2>Bio-fortified Solutions</h2>
      <p>By promoting and distributing high zinc rice varieties, we are providing a sustainable, food-based solution to malnutrition in the most affected districts.</p>
    `,
    image: {
      src: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=2000',
      alt: 'Rice paddy fields',
    },
    targetAmount: 500000,
    raisedAmount: 480000,
    location: 'Rural Districts',
    status: 'ongoing',
    metrics: { peopleHelped: 120000 },
    startDate: '2024-01-20',
    seo: { title: 'High Zinc Rice Program | Green The Environment', description: 'Nutritious bio-fortified food for vulnerable communities.' },
  },
  {
    id: 'proj-4',
    slug: 'srhr-initiative',
    title: 'SRHR Initiative',
    category: 'Health',
    excerpt: 'Empowering individuals with knowledge and services regarding Sexual and Reproductive Health and Rights.',
    content: `
      <h2>Rights and Health</h2>
      <p>Our SRHR initiative works to ensure that all individuals have the information and access to services they need to make safe and healthy choices about their lives.</p>
    `,
    image: {
      src: 'https://images.unsplash.com/photo-1576091160550-217359f4268e?auto=format&fit=crop&q=80&w=2000',
      alt: 'Healthcare consultation',
    },
    targetAmount: 800000,
    raisedAmount: 320000,
    location: 'Global',
    status: 'ongoing',
    metrics: { peopleHelped: 15000 },
    startDate: '2023-09-01',
    seo: { title: 'SRHR Initiative | Green The Environment', description: 'Advancing reproductive health and rights worldwide.' },
  },
  {
    id: 'proj-5',
    slug: 'womens-empowerment',
    title: 'Women’s Empowerment Program',
    category: 'Gender Equality',
    excerpt: 'Supporting women in becoming leaders and entrepreneurs through micro-finance and vocational training.',
    content: `
      <h2>Economic Independence</h2>
      <p>When women are empowered, entire communities thrive. We provide the tools, capital, and training for women to start their own businesses and lead community initiatives.</p>
    `,
    image: {
      src: 'https://images.unsplash.com/photo-1541976844346-f18aeac57b06?auto=format&fit=crop&q=80&w=2000',
      alt: 'Women working together',
    },
    targetAmount: 1500000,
    raisedAmount: 980000,
    location: 'Multinational',
    status: 'ongoing',
    metrics: { peopleHelped: 25000 },
    startDate: '2021-11-15',
    seo: { title: 'Women’s Empowerment | Green The Environment', description: 'Building a more equitable world through female leadership.' },
  },
  {
    id: 'proj-6',
    slug: 'sustainable-fisheries',
    title: 'Sustainable Fisheries & Aqua Culture',
    category: 'Livelihood',
    excerpt: 'Promoting ocean health and sustainable income for coastal residents through regenerative aquaculture practices.',
    content: `
      <h2>Ocean Stewardship</h2>
      <p>We work with coastal communities to implement sustainable fishing practices that protect marine biodiversity while ensuring long-term economic stability.</p>
    `,
    image: {
      src: 'https://images.unsplash.com/photo-1516733968668-dbdce39c46ef?auto=format&fit=crop&q=80&w=2000',
      alt: 'Fishing boats at sunset',
    },
    targetAmount: 1200000,
    raisedAmount: 540000,
    location: 'Coastal Regions',
    status: 'ongoing',
    metrics: { peopleHelped: 8000 },
    startDate: '2023-03-22',
    seo: { title: 'Sustainable Fisheries | Green The Environment', description: 'Blue economy solutions for coastal sustainability.' },
  },
];

export const mockCampaigns: Campaign[] = [
  {
    id: 'camp-1',
    slug: 'winter-warmth-drive',
    title: 'Winter Survival Kits',
    urgency: 'high',
    excerpt: 'Urgent action to provide thermal blankets and heaters to displaced families facing extreme cold.',
    content: '<p>With temperatures dropping rapidly, thousands are at risk. Your contribution provides immediate warmth and survival essentials.</p>',
    image: { src: 'https://images.unsplash.com/photo-1549487541-118e6c46a6e2?auto=format&fit=crop&q=80&w=2000', alt: 'Snowy distribution' },
    goal: 300000,
    raised: 185000,
    deadline: '2026-03-15',
    seo: { title: 'Winter Survival Campaign | Green The Environment', description: 'Urgent relief for families in extreme cold.' },
  },
  {
    id: 'camp-2',
    slug: 'wash-emergency-fund',
    title: 'WASH Emergency Fund',
    urgency: 'high',
    excerpt: 'Critical response to provide clean water and sanitation facilities to prevent disease outbreaks in disaster zones.',
    content: '<p>Water-borne diseases are the biggest threat after a disaster. We are installing emergency water filtration units and mobile toilets.</p>',
    image: { src: 'https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=2000', alt: 'Clean water pump' },
    goal: 250000,
    raised: 95000,
    deadline: '2026-04-30',
    seo: { title: 'WASH Emergency | Green The Environment', description: 'Providing clean water and sanitation in crisis.' },
  },
];

export const mockRoles: VolunteerRole[] = [
  {
    id: 'vol-1',
    title: 'Education Program Assistant',
    department: 'Education',
    location: 'Global / Remote',
    type: 'hybrid',
    description: 'Support our Out of School Children program with curriculum design and remote tutoring.',
    requirements: ['Background in teaching or social work', 'Commitment of 4 hours/week', 'Excellent communication skills'],
  },
  {
    id: 'vol-2',
    title: 'Climate Field Monitor',
    department: 'Environment',
    location: 'Regional Field Sites',
    type: 'on-site',
    description: 'Help monitor tree growth and community adaptation projects in our field locations.',
    requirements: ['Sturdy physical health', 'Interest in ecology', 'Ability to travel to rural areas'],
  },
];
