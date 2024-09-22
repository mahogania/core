import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureMovementOverrideResolverBase } from "./base/creatureMovementOverride.resolver.base";
import { CreatureMovementOverride } from "./base/CreatureMovementOverride";
import { CreatureMovementOverrideService } from "./creatureMovementOverride.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureMovementOverride)
export class CreatureMovementOverrideResolver extends CreatureMovementOverrideResolverBase {
  constructor(
    protected readonly service: CreatureMovementOverrideService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
