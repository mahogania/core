import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BattlegroundTemplateResolverBase } from "./base/battlegroundTemplate.resolver.base";
import { BattlegroundTemplate } from "./base/BattlegroundTemplate";
import { BattlegroundTemplateService } from "./battlegroundTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BattlegroundTemplate)
export class BattlegroundTemplateResolver extends BattlegroundTemplateResolverBase {
  constructor(
    protected readonly service: BattlegroundTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
