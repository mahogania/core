import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerRewardItemResolverBase } from "./base/playerRewardItem.resolver.base";
import { PlayerRewardItem } from "./base/PlayerRewardItem";
import { PlayerRewardItemService } from "./playerRewardItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerRewardItem)
export class PlayerRewardItemResolver extends PlayerRewardItemResolverBase {
  constructor(
    protected readonly service: PlayerRewardItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
