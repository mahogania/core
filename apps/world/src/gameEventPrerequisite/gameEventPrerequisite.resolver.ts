import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameEventPrerequisiteResolverBase } from "./base/gameEventPrerequisite.resolver.base";
import { GameEventPrerequisite } from "./base/GameEventPrerequisite";
import { GameEventPrerequisiteService } from "./gameEventPrerequisite.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameEventPrerequisite)
export class GameEventPrerequisiteResolver extends GameEventPrerequisiteResolverBase {
  constructor(
    protected readonly service: GameEventPrerequisiteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
