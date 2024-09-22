import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LfgDungeonRewardsResolverBase } from "./base/lfgDungeonRewards.resolver.base";
import { LfgDungeonRewards } from "./base/LfgDungeonRewards";
import { LfgDungeonRewardsService } from "./lfgDungeonRewards.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LfgDungeonRewards)
export class LfgDungeonRewardsResolver extends LfgDungeonRewardsResolverBase {
  constructor(
    protected readonly service: LfgDungeonRewardsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
