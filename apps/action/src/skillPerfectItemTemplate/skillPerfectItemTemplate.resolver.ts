import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SkillPerfectItemTemplateResolverBase } from "./base/skillPerfectItemTemplate.resolver.base";
import { SkillPerfectItemTemplate } from "./base/SkillPerfectItemTemplate";
import { SkillPerfectItemTemplateService } from "./skillPerfectItemTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SkillPerfectItemTemplate)
export class SkillPerfectItemTemplateResolver extends SkillPerfectItemTemplateResolverBase {
  constructor(
    protected readonly service: SkillPerfectItemTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
