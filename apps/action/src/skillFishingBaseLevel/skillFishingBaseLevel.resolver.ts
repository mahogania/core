import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SkillFishingBaseLevelResolverBase } from "./base/skillFishingBaseLevel.resolver.base";
import { SkillFishingBaseLevel } from "./base/SkillFishingBaseLevel";
import { SkillFishingBaseLevelService } from "./skillFishingBaseLevel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SkillFishingBaseLevel)
export class SkillFishingBaseLevelResolver extends SkillFishingBaseLevelResolverBase {
  constructor(
    protected readonly service: SkillFishingBaseLevelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
