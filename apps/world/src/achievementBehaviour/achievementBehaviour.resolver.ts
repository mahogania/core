import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AchievementBehaviourResolverBase } from "./base/achievementBehaviour.resolver.base";
import { AchievementBehaviour } from "./base/AchievementBehaviour";
import { AchievementBehaviourService } from "./achievementBehaviour.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AchievementBehaviour)
export class AchievementBehaviourResolver extends AchievementBehaviourResolverBase {
  constructor(
    protected readonly service: AchievementBehaviourService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
