import { CariCagDcshBlTrnp as TCariCagDcshBlTrnp } from "../api/cariCagDcshBlTrnp/CariCagDcshBlTrnp";

export const CARICAGDCSHBLTRNP_TITLE_FIELD = "chssNo";

export const CariCagDcshBlTrnpTitle = (record: TCariCagDcshBlTrnp): string => {
  return record.chssNo?.toString() || String(record.id);
};
