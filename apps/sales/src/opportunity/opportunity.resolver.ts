import * as graphql from "@nestjs/graphql";
import { OpportunityResolverBase } from "./base/opportunity.resolver.base";
import { Opportunity } from "./base/Opportunity";
import { OpportunityService } from "./opportunity.service";

@graphql.Resolver(() => Opportunity)
export class OpportunityResolver extends OpportunityResolverBase {
  constructor(protected readonly service: OpportunityService) {
    super(service);
  }
}
