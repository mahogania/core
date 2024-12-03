import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AreaTriggerTemplateActionResolverBase } from "./base/areaTriggerTemplateAction.resolver.base";
import { AreaTriggerTemplateAction } from "./base/AreaTriggerTemplateAction";
import { AreaTriggerTemplateActionService } from "./areaTriggerTemplateAction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AreaTriggerTemplateAction)
export class AreaTriggerTemplateActionResolver extends AreaTriggerTemplateActionResolverBase {
  constructor(
    protected readonly service: AreaTriggerTemplateActionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
