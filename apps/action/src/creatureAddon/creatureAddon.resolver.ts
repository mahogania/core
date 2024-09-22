import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureAddonResolverBase } from "./base/creatureAddon.resolver.base";
import { CreatureAddon } from "./base/CreatureAddon";
import { CreatureAddonService } from "./creatureAddon.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureAddon)
export class CreatureAddonResolver extends CreatureAddonResolverBase {
  constructor(
    protected readonly service: CreatureAddonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
