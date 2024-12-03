import { PackingSlip as TPackingSlip } from "../api/packingSlip/PackingSlip";

export const PACKINGSLIP_TITLE_FIELD = "name";

export const PackingSlipTitle = (record: TPackingSlip): string => {
  return record.name?.toString() || String(record.id);
};
