export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
  relationship: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Senior Tech Lead',
    role: 'Full-Stack Lead',
    company: 'Incrix Techlutions',
    content: 'Gokul demonstrated exceptional problem-solving abilities and frontend finesse during his internship. He delivered complex React features ahead of schedule while maintaining clean, maintainable TypeScript code.',
    relationship: 'Mentored Gokul directly at Incrix Techlutions'
  },
  {
    id: '2',
    name: 'Hackathon Coordinator',
    role: 'Lead Evaluator',
    company: 'Hackwarts Hackathon',
    content: 'Gokul and his team built an impressive AI-powered learning system under tight hackathon time constraints. His understanding of vector databases and LLM integration stood out to all judges.',
    relationship: 'Judged 2nd place winning project'
  }
];
