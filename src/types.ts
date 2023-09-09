export type Salary = {
  from: number;
  to: number;
  currency: string;
  negotiable: boolean;
};

export type User = {
  username: string;
  email: string;
};

export type JobAd = {
  id: number;
  category: string;
  dateAdded: string;
  title: string;
  description: string;
  contractType: string;
  salary: Salary;
  user: User;
  location: string;
  isActive: boolean;
  expiryDate: string;
};

export type QueryParams = {
  keyword?: string;
  location?: string;
  contractType?: string;
  salaryFrom?: number;
  salaryTo?: number;
};

export type JobsContentProps = {
  loadableState: {
    type: 'loading' | 'error' | 'loaded';
    error?: Error;
    data?: JobAd[];
  };
  filteredJobs: JobAd[];
};
