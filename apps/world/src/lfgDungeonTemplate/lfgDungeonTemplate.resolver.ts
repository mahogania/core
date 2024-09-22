import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LfgDungeonTemplateResolverBase } from "./base/lfgDungeonTemplate.resolver.base";
import { LfgDungeonTemplate } from "./base/LfgDungeonTemplate";
import { LfgDungeonTemplateService } from "./lfgDungeonTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LfgDungeonTemplate)
export class LfgDungeonTemplateResolver extends LfgDungeonTemplateResolverBase {
  constructor(
    protected readonly service: LfgDungeonTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
