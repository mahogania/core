export type Account = {
  accountCurrency: string | null;
  accountName: string | null;
  accountNumber: string | null;
  accountType: string | null;
  assign: string | null;
  balanceMustBe: string | null;
  comments: string | null;
  company: string | null;
  createdAt: Date;
  creation: Date | null;
  disabled: number | null;
  docstatus: number | null;
  freezeAccount: string | null;
  id: string;
  idx: number | null;
  includeInGross: number | null;
  isGroup: number | null;
  lft: number | null;
  likedBy: string | null;
  modified: Date | null;
  modifiedBy: string | null;
  name: string | null;
  oldParent: string | null;
  owner: string | null;
  parentAccount: string | null;
  reportType: string | null;
  rgt: number | null;
  rootType: string | null;
  taxRate: number | null;
  updatedAt: Date;
  userTags: string | null;
};
