import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AchievementScriptsResolverBase } from "./base/achievementScripts.resolver.base";
import { AchievementScripts } from "./base/AchievementScripts";
import { AchievementScriptsService } from "./achievementScripts.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AchievementScripts)
export class AchievementScriptsResolver extends AchievementScriptsResolverBase {
  constructor(
    protected readonly service: AchievementScriptsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
