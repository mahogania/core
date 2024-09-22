import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureTemplateResistanceResolverBase } from "./base/creatureTemplateResistance.resolver.base";
import { CreatureTemplateResistance } from "./base/CreatureTemplateResistance";
import { CreatureTemplateResistanceService } from "./creatureTemplateResistance.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureTemplateResistance)
export class CreatureTemplateResistanceResolver extends CreatureTemplateResistanceResolverBase {
  constructor(
    protected readonly service: CreatureTemplateResistanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
