import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureTemplateMovementResolverBase } from "./base/creatureTemplateMovement.resolver.base";
import { CreatureTemplateMovement } from "./base/CreatureTemplateMovement";
import { CreatureTemplateMovementService } from "./creatureTemplateMovement.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureTemplateMovement)
export class CreatureTemplateMovementResolver extends CreatureTemplateMovementResolverBase {
  constructor(
    protected readonly service: CreatureTemplateMovementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
