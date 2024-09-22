import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestTemplateAddonResolverBase } from "./base/questTemplateAddon.resolver.base";
import { QuestTemplateAddon } from "./base/QuestTemplateAddon";
import { QuestTemplateAddonService } from "./questTemplateAddon.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestTemplateAddon)
export class QuestTemplateAddonResolver extends QuestTemplateAddonResolverBase {
  constructor(
    protected readonly service: QuestTemplateAddonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
