import { CargoDeclarationVehicleWhereInput } from "./CargoDeclarationVehicleWhereInput";
import { CargoDeclarationVehicleOrderByInput } from "./CargoDeclarationVehicleOrderByInput";

export type CargoDeclarationVehicleFindManyArgs = {
  where?: CargoDeclarationVehicleWhereInput;
  orderBy?: Array<CargoDeclarationVehicleOrderByInput>;
  skip?: number;
  take?: number;
};
