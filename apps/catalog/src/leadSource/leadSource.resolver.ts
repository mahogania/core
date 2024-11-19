import * as graphql from "@nestjs/graphql";
import { LeadSourceResolverBase } from "./base/leadSource.resolver.base";
import { LeadSource } from "./base/LeadSource";
import { LeadSourceService } from "./leadSource.service";

@graphql.Resolver(() => LeadSource)
export class LeadSourceResolver extends LeadSourceResolverBase {
  constructor(protected readonly service: LeadSourceService) {
    super(service);
  }
}
