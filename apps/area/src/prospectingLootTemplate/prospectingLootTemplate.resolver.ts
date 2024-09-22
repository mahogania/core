import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProspectingLootTemplateResolverBase } from "./base/prospectingLootTemplate.resolver.base";
import { ProspectingLootTemplate } from "./base/ProspectingLootTemplate";
import { ProspectingLootTemplateService } from "./prospectingLootTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProspectingLootTemplate)
export class ProspectingLootTemplateResolver extends ProspectingLootTemplateResolverBase {
  constructor(
    protected readonly service: ProspectingLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
