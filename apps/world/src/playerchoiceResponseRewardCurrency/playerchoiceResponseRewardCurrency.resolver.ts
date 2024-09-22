import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerchoiceResponseRewardCurrencyResolverBase } from "./base/playerchoiceResponseRewardCurrency.resolver.base";
import { PlayerchoiceResponseRewardCurrency } from "./base/PlayerchoiceResponseRewardCurrency";
import { PlayerchoiceResponseRewardCurrencyService } from "./playerchoiceResponseRewardCurrency.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerchoiceResponseRewardCurrency)
export class PlayerchoiceResponseRewardCurrencyResolver extends PlayerchoiceResponseRewardCurrencyResolverBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardCurrencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
