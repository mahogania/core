import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerCraftResolverBase } from "./base/playerCraft.resolver.base";
import { PlayerCraft } from "./base/PlayerCraft";
import { PlayerCraftService } from "./playerCraft.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerCraft)
export class PlayerCraftResolver extends PlayerCraftResolverBase {
  constructor(
    protected readonly service: PlayerCraftService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
