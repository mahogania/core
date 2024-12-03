import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AreaTriggerTemplateResolverBase } from "./base/areaTriggerTemplate.resolver.base";
import { AreaTriggerTemplate } from "./base/AreaTriggerTemplate";
import { AreaTriggerTemplateService } from "./areaTriggerTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AreaTriggerTemplate)
export class AreaTriggerTemplateResolver extends AreaTriggerTemplateResolverBase {
  constructor(
    protected readonly service: AreaTriggerTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
