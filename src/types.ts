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