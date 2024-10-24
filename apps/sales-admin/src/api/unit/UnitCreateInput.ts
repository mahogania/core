import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CatalogCreateNestedManyWithoutUnitsInput } from "./CatalogCreateNestedManyWithoutUnitsInput";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { DealCreateNestedManyWithoutUnitsInput } from "./DealCreateNestedManyWithoutUnitsInput";
import { OpportunityCreateNestedManyWithoutUnitsInput } from "./OpportunityCreateNestedManyWithoutUnitsInput";
import { ThreatCreateNestedManyWithoutUnitsInput } from "./ThreatCreateNestedManyWithoutUnitsInput";

export type UnitCreateInput = {
  address?: AddressWhereUniqueInput | null;
  catalogs?: CatalogCreateNestedManyWithoutUnitsInput;
  competitor?: BusinessWhereUniqueInput | null;
  deals?: DealCreateNestedManyWithoutUnitsInput;
  opportunities?: OpportunityCreateNestedManyWithoutUnitsInput;
  threats?: ThreatCreateNestedManyWithoutUnitsInput;
};
