import * as graphql from "@nestjs/graphql";
import { SalesPartnerResolverBase } from "./base/salesPartner.resolver.base";
import { SalesPartner } from "./base/SalesPartner";
import { SalesPartnerService } from "./salesPartner.service";

@graphql.Resolver(() => SalesPartner)
export class SalesPartnerResolver extends SalesPartnerResolverBase {
  constructor(protected readonly service: SalesPartnerService) {
    super(service);
  }
}
