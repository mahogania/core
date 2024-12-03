import { CargoDeclarationTransport as TCargoDeclarationTransport } from "../api/cargoDeclarationTransport/CargoDeclarationTransport";

export const CARGODECLARATIONTRANSPORT_TITLE_FIELD = "chssNo";

export const CargoDeclarationTransportTitle = (
  record: TCargoDeclarationTransport
): string => {
  return record.chssNo?.toString() || String(record.id);
};
