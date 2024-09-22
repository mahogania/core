import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureEquipTemplateResolverBase } from "./base/creatureEquipTemplate.resolver.base";
import { CreatureEquipTemplate } from "./base/CreatureEquipTemplate";
import { CreatureEquipTemplateService } from "./creatureEquipTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureEquipTemplate)
export class CreatureEquipTemplateResolver extends CreatureEquipTemplateResolverBase {
  constructor(
    protected readonly service: CreatureEquipTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
