export type PosInvoiceReferenceUpdateInput = {
  creation?: Date | null;
  customer?: string | null;
  docStatus?: number | null;
  grandTotal?: number | null;
  idx?: number | null;
  isReturn?: number | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  owner?: string | null;
  parent?: string | null;
  parentField?: string | null;
  parentType?: string | null;
  posInvoice?: string | null;
  postingDate?: Date | null;
  returnAgainst?: string | null;
};
