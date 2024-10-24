import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CatalogListRelationFilter } from "../catalog/CatalogListRelationFilter";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { DealListRelationFilter } from "../deal/DealListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OpportunityListRelationFilter } from "../opportunity/OpportunityListRelationFilter";
import { ThreatListRelationFilter } from "../threat/ThreatListRelationFilter";

export type UnitWhereInput = {
  address?: AddressWhereUniqueInput;
  catalogs?: CatalogListRelationFilter;
  competitor?: BusinessWhereUniqueInput;
  deals?: DealListRelationFilter;
  id?: StringFilter;
  opportunities?: OpportunityListRelationFilter;
  threats?: ThreatListRelationFilter;
};
