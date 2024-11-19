import { ConfigurationUpdateManyWithoutCatalogsInput } from "./ConfigurationUpdateManyWithoutCatalogsInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type CatalogUpdateInput = {
  configurations?: ConfigurationUpdateManyWithoutCatalogsInput;
  description?: string | null;
  displayName?: string | null;
  name?: string | null;
  unit?: UnitWhereUniqueInput | null;
};
