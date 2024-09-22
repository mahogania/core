import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestTemplateResolverBase } from "./base/questTemplate.resolver.base";
import { QuestTemplate } from "./base/QuestTemplate";
import { QuestTemplateService } from "./questTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestTemplate)
export class QuestTemplateResolver extends QuestTemplateResolverBase {
  constructor(
    protected readonly service: QuestTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
