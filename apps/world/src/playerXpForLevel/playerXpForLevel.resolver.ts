import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerXpForLevelResolverBase } from "./base/playerXpForLevel.resolver.base";
import { PlayerXpForLevel } from "./base/PlayerXpForLevel";
import { PlayerXpForLevelService } from "./playerXpForLevel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerXpForLevel)
export class PlayerXpForLevelResolver extends PlayerXpForLevelResolverBase {
  constructor(
    protected readonly service: PlayerXpForLevelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
