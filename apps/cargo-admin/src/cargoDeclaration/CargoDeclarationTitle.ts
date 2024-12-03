import { CargoDeclaration as TCargoDeclaration } from "../api/cargoDeclaration/CargoDeclaration";

export const CARGODECLARATION_TITLE_FIELD = "abrdFrwrAddrNm";

export const CargoDeclarationTitle = (record: TCargoDeclaration): string => {
  return record.abrdFrwrAddrNm?.toString() || String(record.id);
};
