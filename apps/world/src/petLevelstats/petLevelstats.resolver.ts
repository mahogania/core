import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PetLevelstatsResolverBase } from "./base/petLevelstats.resolver.base";
import { PetLevelstats } from "./base/PetLevelstats";
import { PetLevelstatsService } from "./petLevelstats.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PetLevelstats)
export class PetLevelstatsResolver extends PetLevelstatsResolverBase {
  constructor(
    protected readonly service: PetLevelstatsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
