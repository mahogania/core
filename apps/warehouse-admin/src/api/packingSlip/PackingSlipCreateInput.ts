export type PackingSlipCreateInput = {
  amendedFrom?: string | null;
  creation?: Date | null;
  deliveryNote?: string | null;
  docstatus?: number | null;
  fromCaseNo?: number | null;
  grossWeightPkg?: number | null;
  grossWeightUom?: string | null;
  idx?: number | null;
  letterHead?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  namingSeries?: string | null;
  netWeightPkg?: number | null;
  netWeightUom?: string | null;
  owner?: string | null;
  toCaseNo?: number | null;
};
