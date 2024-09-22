import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayercreateinfoResolverBase } from "./base/playercreateinfo.resolver.base";
import { Playercreateinfo } from "./base/Playercreateinfo";
import { PlayercreateinfoService } from "./playercreateinfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Playercreateinfo)
export class PlayercreateinfoResolver extends PlayercreateinfoResolverBase {
  constructor(
    protected readonly service: PlayercreateinfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
