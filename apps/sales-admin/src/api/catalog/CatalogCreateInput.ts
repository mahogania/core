import { ConfigurationCreateNestedManyWithoutCatalogsInput } from "./ConfigurationCreateNestedManyWithoutCatalogsInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type CatalogCreateInput = {
  configurations?: ConfigurationCreateNestedManyWithoutCatalogsInput;
  description?: string | null;
  displayName?: string | null;
  name?: string | null;
  unit?: UnitWhereUniqueInput | null;
};
