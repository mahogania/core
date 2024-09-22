import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MailLevelRewardResolverBase } from "./base/mailLevelReward.resolver.base";
import { MailLevelReward } from "./base/MailLevelReward";
import { MailLevelRewardService } from "./mailLevelReward.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MailLevelReward)
export class MailLevelRewardResolver extends MailLevelRewardResolverBase {
  constructor(
    protected readonly service: MailLevelRewardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
