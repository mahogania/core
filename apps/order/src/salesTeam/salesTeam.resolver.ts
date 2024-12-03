import * as graphql from "@nestjs/graphql";
import { SalesTeamResolverBase } from "./base/salesTeam.resolver.base";
import { SalesTeam } from "./base/SalesTeam";
import { SalesTeamService } from "./salesTeam.service";

@graphql.Resolver(() => SalesTeam)
export class SalesTeamResolver extends SalesTeamResolverBase {
  constructor(protected readonly service: SalesTeamService) {
    super(service);
  }
}
