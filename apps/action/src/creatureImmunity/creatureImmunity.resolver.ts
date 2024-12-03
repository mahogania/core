import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureImmunityResolverBase } from "./base/creatureImmunity.resolver.base";
import { CreatureImmunity } from "./base/CreatureImmunity";
import { CreatureImmunityService } from "./creatureImmunity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureImmunity)
export class CreatureImmunityResolver extends CreatureImmunityResolverBase {
  constructor(
    protected readonly service: CreatureImmunityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
