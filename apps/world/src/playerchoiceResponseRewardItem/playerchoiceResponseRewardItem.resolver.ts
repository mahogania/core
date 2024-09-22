import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerchoiceResponseRewardItemResolverBase } from "./base/playerchoiceResponseRewardItem.resolver.base";
import { PlayerchoiceResponseRewardItem } from "./base/PlayerchoiceResponseRewardItem";
import { PlayerchoiceResponseRewardItemService } from "./playerchoiceResponseRewardItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerchoiceResponseRewardItem)
export class PlayerchoiceResponseRewardItemResolver extends PlayerchoiceResponseRewardItemResolverBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
