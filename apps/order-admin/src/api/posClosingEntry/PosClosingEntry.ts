export type PosClosingEntry = {
  amendedFrom: string | null;
  company: string | null;
  createdAt: Date;
  creation: Date | null;
  docStatus: number | null;
  errorMessage: string | null;
  grandTotal: number | null;
  id: string;
  idx: number | null;
  modified: Date | null;
  modifiedBy: string | null;
  name: string | null;
  netTotal: number | null;
  owner: string | null;
  periodEndDate: Date | null;
  periodStartDate: Date | null;
  posOpeningEntry: string | null;
  posProfile: string | null;
  postingDate: Date | null;
  postingTime: Date | null;
  status: string | null;
  totalQuantity: number | null;
  updatedAt: Date;
  user: string | null;
};
