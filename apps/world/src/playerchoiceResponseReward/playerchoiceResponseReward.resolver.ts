import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerchoiceResponseRewardResolverBase } from "./base/playerchoiceResponseReward.resolver.base";
import { PlayerchoiceResponseReward } from "./base/PlayerchoiceResponseReward";
import { PlayerchoiceResponseRewardService } from "./playerchoiceResponseReward.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerchoiceResponseReward)
export class PlayerchoiceResponseRewardResolver extends PlayerchoiceResponseRewardResolverBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
