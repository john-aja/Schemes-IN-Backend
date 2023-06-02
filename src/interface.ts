// type schemeType =
//   | 'Centrally Sponsored Scheme'
//   | 'Central Sector Scheme'
//   | 'State Government Scheme';

export interface centrallySponsored {
  core?: 'Core Scheme' | 'Core of the Core Scheme';
}

export interface ISchemeBenefits {
  category?: string[];
  benefits?: string[];
}

export interface IApplicationProcedure {
  note?: string[];
  procedure?: string[];
  procedureSnaps?: string[];
}

export interface IScheme {
  schemeType: string;
  schemeName: string;
  schemeId: string;
  category: string;
  launchedBy: string;
  launchedOn?: string;
  description: string;
  feature?: string[];
  beneficiaries?: string[];
  eligibility?: string[];
  schemeBenefits?: any;
  applicationProcedure?: any;
  documentsRequired?: any;
  link?: string;
}
