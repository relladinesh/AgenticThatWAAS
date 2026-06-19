export type DeploymentStatus = 'Pending' | 'Generating' | 'Deploying' | 'Success' | 'Failed';

export interface BusinessData {
  businessName: string;
  category: string;
  businessType?: string;
  phone: string;
  location: string;
  website: string;
  email?: string;
  about?: string;
}

export interface GeneratedWebsite extends BusinessData {
  id: string;
  template: string;
  availableTemplates: string[];
  baseRoute: string;
  slug: string;
  route: string;
  status: DeploymentStatus;
  error?: string;
}
