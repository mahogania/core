import { ClearanceDeclaration as TClearanceDeclaration } from "../api/clearanceDeclaration/ClearanceDeclaration";

export const CLEARANCEDECLARATION_TITLE_FIELD = "aditTxQtyUtCd";

export const ClearanceDeclarationTitle = (
  record: TClearanceDeclaration
): string => {
  return record.aditTxQtyUtCd?.toString() || String(record.id);
};
