import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayercreateinfoActionResolverBase } from "./base/playercreateinfoAction.resolver.base";
import { PlayercreateinfoAction } from "./base/PlayercreateinfoAction";
import { PlayercreateinfoActionService } from "./playercreateinfoAction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayercreateinfoAction)
export class PlayercreateinfoActionResolver extends PlayercreateinfoActionResolverBase {
  constructor(
    protected readonly service: PlayercreateinfoActionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
