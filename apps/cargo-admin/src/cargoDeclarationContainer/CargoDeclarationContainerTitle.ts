import { CargoDeclarationContainer as TCargoDeclarationContainer } from "../api/cargoDeclarationContainer/CargoDeclarationContainer";

export const CARGODECLARATIONCONTAINER_TITLE_FIELD = "cagMgmtNo";

export const CargoDeclarationContainerTitle = (
  record: TCargoDeclarationContainer
): string => {
  return record.cagMgmtNo?.toString() || String(record.id);
};
