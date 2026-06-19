export interface Testimonial {
  name: string;
  review: string;
}

export interface BaseData {
  slug: string;
  designation?: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  about: string;
  image?: string;
  lead_id?: string;
  business_type?: string;
  businessType?: string;
  city?: string;
  state?: string;
  pincode?: string;
  tier?: string;
  google_maps_url?: string;
  googleMapsUrl?: string;
  team?: { name: string; role: string; image?: string; experience?: string }[];
}

export interface DoctorData extends BaseData {
  specialization: string;
  experience: string;
  services: string[];
  testimonials: Testimonial[];
}

export interface BakeryData extends BaseData {
  specialties: string[];
  bestSellers: { name: string; price: string; description: string }[];
  openingHours: string;
}

export interface CoachingData extends BaseData {
  courses: string[];
  instructors: { name: string; subject: string }[];
  successRate: string;
  testimonials: Testimonial[];
}

export interface TemplateProps {
  data: any;
}
