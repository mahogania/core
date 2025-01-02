import { CariCagDcshBlVhcl as TCariCagDcshBlVhcl } from "../api/cariCagDcshBlVhcl/CariCagDcshBlVhcl";

export const CARICAGDCSHBLVHCL_TITLE_FIELD = "cagMgmtNo";

export const CariCagDcshBlVhclTitle = (record: TCariCagDcshBlVhcl): string => {
  return record.cagMgmtNo?.toString() || String(record.id);
};
