import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BattlefieldTemplateResolverBase } from "./base/battlefieldTemplate.resolver.base";
import { BattlefieldTemplate } from "./base/BattlefieldTemplate";
import { BattlefieldTemplateService } from "./battlefieldTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BattlefieldTemplate)
export class BattlefieldTemplateResolver extends BattlefieldTemplateResolverBase {
  constructor(
    protected readonly service: BattlefieldTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
