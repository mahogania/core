import { ClearanceDeclarationContainer as TClearanceDeclarationContainer } from "../api/clearanceDeclarationContainer/ClearanceDeclarationContainer";

export const CLEARANCEDECLARATIONCONTAINER_TITLE_FIELD = "cntrNo";

export const ClearanceDeclarationContainerTitle = (
  record: TClearanceDeclarationContainer
): string => {
  return record.cntrNo?.toString() || String(record.id);
};
