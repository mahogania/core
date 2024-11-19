import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CatalogUpdateManyWithoutUnitsInput } from "./CatalogUpdateManyWithoutUnitsInput";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { DealUpdateManyWithoutUnitsInput } from "./DealUpdateManyWithoutUnitsInput";
import { OpportunityUpdateManyWithoutUnitsInput } from "./OpportunityUpdateManyWithoutUnitsInput";
import { ThreatUpdateManyWithoutUnitsInput } from "./ThreatUpdateManyWithoutUnitsInput";

export type UnitUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  catalogs?: CatalogUpdateManyWithoutUnitsInput;
  competitor?: BusinessWhereUniqueInput | null;
  deals?: DealUpdateManyWithoutUnitsInput;
  opportunities?: OpportunityUpdateManyWithoutUnitsInput;
  threats?: ThreatUpdateManyWithoutUnitsInput;
};
