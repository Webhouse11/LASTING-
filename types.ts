import { ReactNode } from "react";

export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  path: string;
  cta: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export enum OpportunityType {
  BYTNEX = 'Bytnex',
  AURUM = 'Aurum',
  CRYPTEX = 'Cryptex',
}