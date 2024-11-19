import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SkillExtraItemTemplateResolverBase } from "./base/skillExtraItemTemplate.resolver.base";
import { SkillExtraItemTemplate } from "./base/SkillExtraItemTemplate";
import { SkillExtraItemTemplateService } from "./skillExtraItemTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SkillExtraItemTemplate)
export class SkillExtraItemTemplateResolver extends SkillExtraItemTemplateResolverBase {
  constructor(
    protected readonly service: SkillExtraItemTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
