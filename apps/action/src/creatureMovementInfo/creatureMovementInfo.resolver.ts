import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureMovementInfoResolverBase } from "./base/creatureMovementInfo.resolver.base";
import { CreatureMovementInfo } from "./base/CreatureMovementInfo";
import { CreatureMovementInfoService } from "./creatureMovementInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureMovementInfo)
export class CreatureMovementInfoResolver extends CreatureMovementInfoResolverBase {
  constructor(
    protected readonly service: CreatureMovementInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
