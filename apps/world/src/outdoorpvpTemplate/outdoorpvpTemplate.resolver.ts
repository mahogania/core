import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OutdoorpvpTemplateResolverBase } from "./base/outdoorpvpTemplate.resolver.base";
import { OutdoorpvpTemplate } from "./base/OutdoorpvpTemplate";
import { OutdoorpvpTemplateService } from "./outdoorpvpTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OutdoorpvpTemplate)
export class OutdoorpvpTemplateResolver extends OutdoorpvpTemplateResolverBase {
  constructor(
    protected readonly service: OutdoorpvpTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
