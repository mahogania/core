export type PaymentReconciliationLog = {
  allocated: number | null;
  createdAt: Date;
  docstatus: number | null;
  errorLog: string | null;
  id: string;
  idx: number | null;
  modifiedBy: string | null;
  name: string | null;
  owner: string | null;
  processPr: string | null;
  reconciled: number | null;
  reconciledEntries: number | null;
  status: string | null;
  totalAllocations: number | null;
  updatedAt: Date;
};
