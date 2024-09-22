import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerchoiceResponseRewardItemChoiceResolverBase } from "./base/playerchoiceResponseRewardItemChoice.resolver.base";
import { PlayerchoiceResponseRewardItemChoice } from "./base/PlayerchoiceResponseRewardItemChoice";
import { PlayerchoiceResponseRewardItemChoiceService } from "./playerchoiceResponseRewardItemChoice.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerchoiceResponseRewardItemChoice)
export class PlayerchoiceResponseRewardItemChoiceResolver extends PlayerchoiceResponseRewardItemChoiceResolverBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardItemChoiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
