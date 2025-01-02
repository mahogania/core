import { CariCagDcshBlTrlr as TCariCagDcshBlTrlr } from "../api/cariCagDcshBlTrlr/CariCagDcshBlTrlr";

export const CARICAGDCSHBLTRLR_TITLE_FIELD = "cagMgmtNo";

export const CariCagDcshBlTrlrTitle = (record: TCariCagDcshBlTrlr): string => {
  return record.cagMgmtNo?.toString() || String(record.id);
};
