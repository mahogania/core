import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureTemplateAddonResolverBase } from "./base/creatureTemplateAddon.resolver.base";
import { CreatureTemplateAddon } from "./base/CreatureTemplateAddon";
import { CreatureTemplateAddonService } from "./creatureTemplateAddon.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureTemplateAddon)
export class CreatureTemplateAddonResolver extends CreatureTemplateAddonResolverBase {
  constructor(
    protected readonly service: CreatureTemplateAddonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
