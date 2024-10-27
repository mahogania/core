import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureFormationResolverBase } from "./base/creatureFormation.resolver.base";
import { CreatureFormation } from "./base/CreatureFormation";
import { CreatureFormationService } from "./creatureFormation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureFormation)
export class CreatureFormationResolver extends CreatureFormationResolverBase {
  constructor(
    protected readonly service: CreatureFormationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
