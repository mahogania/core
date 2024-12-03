import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CraftLevelStatResolverBase } from "./base/craftLevelStat.resolver.base";
import { CraftLevelStat } from "./base/CraftLevelStat";
import { CraftLevelStatService } from "./craftLevelStat.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CraftLevelStat)
export class CraftLevelStatResolver extends CraftLevelStatResolverBase {
  constructor(
    protected readonly service: CraftLevelStatService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
