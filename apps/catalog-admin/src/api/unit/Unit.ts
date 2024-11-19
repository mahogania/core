import { Address } from "../address/Address";
import { Catalog } from "../catalog/Catalog";
import { Business } from "../business/Business";
import { Deal } from "../deal/Deal";
import { Opportunity } from "../opportunity/Opportunity";
import { Threat } from "../threat/Threat";

export type Unit = {
  address?: Address | null;
  catalogs?: Array<Catalog>;
  competitor?: Business | null;
  createdAt: Date;
  deals?: Array<Deal>;
  id: string;
  opportunities?: Array<Opportunity>;
  threats?: Array<Threat>;
  updatedAt: Date;
};
