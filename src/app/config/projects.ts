import proj1 from '../../assets/WhatsApp Image 2026-03-23 at 8.56.38 PM.jpeg';
import proj2 from '../../assets/WhatsApp Image 2026-03-23 at 8.56.38 PM (1).jpeg';
import proj3 from '../../assets/WhatsApp Image 2026-03-23 at 8.56.39 PM.jpeg';
import proj4 from '../../assets/WhatsApp Image 2026-03-23 at 8.57.22 PM.jpeg';
import proj5 from '../../assets/WhatsApp Image 2026-03-23 at 9.11.01 PM.jpeg';
import proj6 from '../../assets/WhatsApp Image 2026-03-23 at 9.14.40 PM.jpeg';
import proj7 from '../../assets/WhatsApp Image 2026-03-23 at 9.15.34 PM.jpeg';
import proj8 from '../../assets/WhatsApp Image 2026-03-23 at 9.16.17 PM.jpeg';
import proj9 from '../../assets/WhatsApp Image 2026-03-23 at 9.18.03 PM.jpeg';
import proj10 from '../../assets/WhatsApp Image 2026-03-23 at 9.18.04 PM.jpeg';
import proj11 from '../../assets/WhatsApp Image 2026-03-23 at 9.18.45 PM.jpeg';
import proj12 from '../../assets/WhatsApp Image 2026-03-23 at 9.21.20 PM.jpeg';
import proj13 from '../../assets/WhatsApp Image 2026-03-23 at 9.21.21 PM.jpeg';
import proj14 from '../../assets/WhatsApp Image 2026-03-23 at 9.21.21 PM (1).jpeg';
import proj15 from '../../assets/WhatsApp Image 2026-03-23 at 11.19.31 PM.jpeg';
import proj16 from '../../assets/WhatsApp Image 2026-03-27 at 1.06.42 PM.jpeg';

export interface Project {
  id: number;
  title: string;
  category: 'home' | 'hostel';
  location: string;
  year: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Premium Residential Complex',
    category: 'home',
    location: 'Kunhari, Kota',
    year: '2025',
    image: proj15,
    description: 'Modern 3BHK and 4BHK homes with premium amenities and smart home features.',
  },
  {
    id: 2,
    title: 'Student Hostel - Phase 1',
    category: 'hostel',
    location: 'Indra Vihar, Kota',
    year: '2024',
    image: proj1,
    description: 'State-of-the-art hostel facility with 100+ rooms for coaching students.',
  },
  {
    id: 3,
    title: 'Luxury Villas',
    category: 'home',
    location: 'Dadabari, Kota',
    year: '2024',
    image: proj2,
    description: 'Exclusive gated community with spacious villas and landscaped gardens.',
  },
  {
    id: 4,
    title: 'Girls Hostel Complex',
    category: 'hostel',
    location: 'Talwandi, Kota',
    year: '2025',
    image: proj3,
    description: 'Secure and comfortable hostel for female students with modern amenities.',
  },
  {
    id: 5,
    title: 'Budget Homes Project',
    category: 'home',
    location: 'Vigyan Nagar, Kota',
    year: '2023',
    image: proj4,
    description: 'Affordable 2BHK apartments for first-time home buyers.',
  },
  {
    id: 6,
    title: 'Premium Boys Hostel',
    category: 'hostel',
    location: 'Commerce College Road, Kota',
    year: '2024',
    image: proj5,
    description: 'Premium hostel with study rooms, gym, and recreation facilities.',
  },
  {
    id: 7,
    title: 'Modern Residential Suite',
    category: 'home',
    location: 'Kunhari, Kota',
    year: '2025',
    image: proj6,
    description: 'Elegant architectural design featuring spacious living areas and high-end finishes.',
  },
  {
    id: 8,
    title: 'Coaching Zone Hostel',
    category: 'hostel',
    location: 'Indra Vihar, Kota',
    year: '2024',
    image: proj7,
    description: 'Fully furnished student residency located close to major coaching institutes.',
  },
  {
    id: 9,
    title: 'Comfort Residency',
    category: 'home',
    location: 'Dadabari, Kota',
    year: '2025',
    image: proj8,
    description: 'A beautiful collection of family homes designed for modern comfort.',
  },
  {
    id: 10,
    title: 'Elite Student House',
    category: 'hostel',
    location: 'Talwandi, Kota',
    year: '2024',
    image: proj9,
    description: 'Premium amenities and study-focused environment for student success.',
  },
  {
    id: 11,
    title: 'Contemporary Apartments',
    category: 'home',
    location: 'Vigyan Nagar, Kota',
    year: '2025',
    image: proj10,
    description: 'Architecturally advanced apartments featuring eco-friendly construction.',
  },
  {
    id: 12,
    title: 'Classic Girls Hostel',
    category: 'hostel',
    location: 'Commerce College Road, Kota',
    year: '2024',
    image: proj11,
    description: 'Highly secure, fully-managed female hostel with modern mess facility.',
  },
  {
    id: 13,
    title: 'Sleek Villa Project',
    category: 'home',
    location: 'Dadabari, Kota',
    year: '2025',
    image: proj12,
    description: 'Modern luxury villas built with sustainable and high-durability materials.',
  },
  {
    id: 14,
    title: 'Scholars Elite Hostel',
    category: 'hostel',
    location: 'Indra Vihar, Kota',
    year: '2025',
    image: proj13,
    description: 'State-of-the-art facility featuring premium recreation and study lounges.',
  },
  {
    id: 15,
    title: 'Green Valley Homes',
    category: 'home',
    location: 'Kunhari, Kota',
    year: '2024',
    image: proj14,
    description: 'Premium housing community integrated with lush green landscaping.',
  },
  {
    id: 16,
    title: 'Academics Hostel',
    category: 'hostel',
    location: 'Talwandi, Kota',
    year: '2025',
    image: proj16,
    description: 'Quiet, premium rooms specifically optimized for intensive study and student life.',
  }
];
