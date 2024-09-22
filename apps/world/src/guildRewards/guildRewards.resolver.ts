import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GuildRewardsResolverBase } from "./base/guildRewards.resolver.base";
import { GuildRewards } from "./base/GuildRewards";
import { GuildRewardsService } from "./guildRewards.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GuildRewards)
export class GuildRewardsResolver extends GuildRewardsResolverBase {
  constructor(
    protected readonly service: GuildRewardsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
