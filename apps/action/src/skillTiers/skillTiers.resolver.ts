import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SkillTiersResolverBase } from "./base/skillTiers.resolver.base";
import { SkillTiers } from "./base/SkillTiers";
import { SkillTiersService } from "./skillTiers.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SkillTiers)
export class SkillTiersResolver extends SkillTiersResolverBase {
  constructor(
    protected readonly service: SkillTiersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
