import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PoolTemplateResolverBase } from "./base/poolTemplate.resolver.base";
import { PoolTemplate } from "./base/PoolTemplate";
import { PoolTemplateService } from "./poolTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PoolTemplate)
export class PoolTemplateResolver extends PoolTemplateResolverBase {
  constructor(
    protected readonly service: PoolTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
