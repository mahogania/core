import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureImmunitiesResolverBase } from "./base/creatureImmunities.resolver.base";
import { CreatureImmunities } from "./base/CreatureImmunities";
import { CreatureImmunitiesService } from "./creatureImmunities.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureImmunities)
export class CreatureImmunitiesResolver extends CreatureImmunitiesResolverBase {
  constructor(
    protected readonly service: CreatureImmunitiesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
