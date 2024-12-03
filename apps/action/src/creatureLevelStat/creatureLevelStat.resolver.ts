import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureLevelStatResolverBase } from "./base/creatureLevelStat.resolver.base";
import { CreatureLevelStat } from "./base/CreatureLevelStat";
import { CreatureLevelStatService } from "./creatureLevelStat.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureLevelStat)
export class CreatureLevelStatResolver extends CreatureLevelStatResolverBase {
  constructor(
    protected readonly service: CreatureLevelStatService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
