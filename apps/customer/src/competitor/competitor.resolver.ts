import * as graphql from "@nestjs/graphql";
import { CompetitorResolverBase } from "./base/competitor.resolver.base";
import { Competitor } from "./base/Competitor";
import { CompetitorService } from "./competitor.service";

@graphql.Resolver(() => Competitor)
export class CompetitorResolver extends CompetitorResolverBase {
  constructor(protected readonly service: CompetitorService) {
    super(service);
  }
}
