import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayercreateinfoItemResolverBase } from "./base/playercreateinfoItem.resolver.base";
import { PlayercreateinfoItem } from "./base/PlayercreateinfoItem";
import { PlayercreateinfoItemService } from "./playercreateinfoItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayercreateinfoItem)
export class PlayercreateinfoItemResolver extends PlayercreateinfoItemResolverBase {
  constructor(
    protected readonly service: PlayercreateinfoItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
