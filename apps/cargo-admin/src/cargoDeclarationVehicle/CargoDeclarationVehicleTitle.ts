import { CargoDeclarationVehicle as TCargoDeclarationVehicle } from "../api/cargoDeclarationVehicle/CargoDeclarationVehicle";

export const CARGODECLARATIONVEHICLE_TITLE_FIELD = "cagMgmtNo";

export const CargoDeclarationVehicleTitle = (
  record: TCargoDeclarationVehicle
): string => {
  return record.cagMgmtNo?.toString() || String(record.id);
};
