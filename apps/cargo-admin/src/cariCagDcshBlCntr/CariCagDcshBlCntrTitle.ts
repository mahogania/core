import { CariCagDcshBlCntr as TCariCagDcshBlCntr } from "../api/cariCagDcshBlCntr/CariCagDcshBlCntr";

export const CARICAGDCSHBLCNTR_TITLE_FIELD = "cagMgmtNo";

export const CariCagDcshBlCntrTitle = (record: TCariCagDcshBlCntr): string => {
  return record.cagMgmtNo?.toString() || String(record.id);
};
