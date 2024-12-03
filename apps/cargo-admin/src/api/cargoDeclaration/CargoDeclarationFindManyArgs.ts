import { CargoDeclarationWhereInput } from "./CargoDeclarationWhereInput";
import { CargoDeclarationOrderByInput } from "./CargoDeclarationOrderByInput";

export type CargoDeclarationFindManyArgs = {
  where?: CargoDeclarationWhereInput;
  orderBy?: Array<CargoDeclarationOrderByInput>;
  skip?: number;
  take?: number;
};
