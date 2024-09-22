import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SkillDiscoveryTemplateResolverBase } from "./base/skillDiscoveryTemplate.resolver.base";
import { SkillDiscoveryTemplate } from "./base/SkillDiscoveryTemplate";
import { SkillDiscoveryTemplateService } from "./skillDiscoveryTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SkillDiscoveryTemplate)
export class SkillDiscoveryTemplateResolver extends SkillDiscoveryTemplateResolverBase {
  constructor(
    protected readonly service: SkillDiscoveryTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
