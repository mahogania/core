import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InstanceTemplateResolverBase } from "./base/instanceTemplate.resolver.base";
import { InstanceTemplate } from "./base/InstanceTemplate";
import { InstanceTemplateService } from "./instanceTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InstanceTemplate)
export class InstanceTemplateResolver extends InstanceTemplateResolverBase {
  constructor(
    protected readonly service: InstanceTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
