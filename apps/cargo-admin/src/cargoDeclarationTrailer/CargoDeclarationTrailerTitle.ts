import { CargoDeclarationTrailer as TCargoDeclarationTrailer } from "../api/cargoDeclarationTrailer/CargoDeclarationTrailer";

export const CARGODECLARATIONTRAILER_TITLE_FIELD = "cagMgmtNo";

export const CargoDeclarationTrailerTitle = (
  record: TCargoDeclarationTrailer
): string => {
  return record.cagMgmtNo?.toString() || String(record.id);
};
