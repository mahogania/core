import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestPoolTemplateResolverBase } from "./base/questPoolTemplate.resolver.base";
import { QuestPoolTemplate } from "./base/QuestPoolTemplate";
import { QuestPoolTemplateService } from "./questPoolTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestPoolTemplate)
export class QuestPoolTemplateResolver extends QuestPoolTemplateResolverBase {
  constructor(
    protected readonly service: QuestPoolTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
