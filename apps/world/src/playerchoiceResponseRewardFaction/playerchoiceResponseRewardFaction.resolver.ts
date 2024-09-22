import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerchoiceResponseRewardFactionResolverBase } from "./base/playerchoiceResponseRewardFaction.resolver.base";
import { PlayerchoiceResponseRewardFaction } from "./base/PlayerchoiceResponseRewardFaction";
import { PlayerchoiceResponseRewardFactionService } from "./playerchoiceResponseRewardFaction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerchoiceResponseRewardFaction)
export class PlayerchoiceResponseRewardFactionResolver extends PlayerchoiceResponseRewardFactionResolverBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardFactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
